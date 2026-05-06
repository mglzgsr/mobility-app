import { useState, useRef, useEffect } from "react";
import { EXERCISES, catLabel } from "./data/exercises";
import { S, QUESTIONS, CATEGORY_KEYS } from "./data/strings";

function useIsMobile() {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w < 640;
}

// ─── PERSISTENCE ──────────────────────────────────────────────────────────────
const STORAGE_KEY = "mobility_routine";
const PROFILE_KEY = "mobility_profile";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function saveRoutine(answers, exercises) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      date: todayKey(),
      answers,
      exerciseIds: exercises.map(e => e.id),
    }));
  } catch {}
}

function loadTodayRoutine() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.date !== todayKey()) return null;
    const exercises = data.exerciseIds
      .map(id => EXERCISES.find(e => e.id === id))
      .filter(Boolean);
    return exercises.length ? { answers: data.answers, exercises } : null;
  } catch { return null; }
}

function clearRoutine() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

function saveProfile(answers) {
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify(answers)); } catch {}
}

function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || "null"); } catch { return null; }
}

function clearAll() {
  try { localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(PROFILE_KEY); } catch {}
}

// ─── RECOMMENDATION ENGINE ────────────────────────────────────────────────────
const TIME_BUDGETS = { rapida: 600, estandar: 900, larga: 1500, completa: 2700 };

function recommend(answers) {
  const flat = Object.values(answers).flat();
  const budget = TIME_BUDGETS[(answers.time || [])[0]] ?? 900;

  const scored = EXERCISES.map(ex => {
    if (ex.contraindications.some(c => flat.includes(c))) return { ...ex, score: -1 };
    let score = 0;
    ex.tags.forEach(tag => { if (flat.includes(tag)) score += 3; });
    if (ex.level === "beginner") score += 1;
    if (flat.includes("sedentario") && ex.tags.includes("calentamiento")) score += 1;
    if (flat.includes("deportista") && ex.level === "intermediate") score += 1;
    if (flat.includes("estrés") && ex.tags.includes("estrés")) score += 2;
    if (flat.includes("relajacion") && ex.tags.includes("nocturno")) score += 2;
    if ((flat.includes("crossfit") || flat.includes("weightlifting")) && ex.tags.includes("crossfit")) score += 4;
    if (flat.includes("weightlifting") && ex.tags.includes("weightlifting")) score += 4;
    if (flat.includes("padel") && ex.tags.includes("padel")) score += 4;
    if (flat.includes("corredor") && ex.tags.includes("corredor")) score += 4;
    if (flat.includes("hyrox") && ex.tags.includes("hyrox")) score += 4;
    if (flat.includes("judo") && ex.tags.includes("judo")) score += 4;
    return { ...ex, score: Math.max(score, 0.1) };
  });

  const pool = scored.filter(e => e.score > 0).sort((a, b) => b.score - a.score);

  const selected = [];
  let remaining = budget;
  const catCount = {};

  for (const maxPerCat of [2, 3, Infinity]) {
    for (const ex of pool) {
      if (selected.find(s => s.id === ex.id)) continue;
      if (ex.duration > remaining) continue;
      const cat = ex.es.category;
      if ((catCount[cat] || 0) >= maxPerCat) continue;
      selected.push(ex);
      remaining -= ex.duration;
      catCount[cat] = (catCount[cat] || 0) + 1;
      if (remaining <= 0) break;
    }
    if (remaining <= 0 || selected.length >= pool.length) break;
  }

  return selected;
}

// ─── YOUTUBE EMBED ────────────────────────────────────────────────────────────
function YouTubeEmbed({ videoId, color }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: "#000" }}>
      {playing ? (
        <iframe
          width="100%" height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Exercise" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, width: "100%", height: "100%" }}
        />
      ) : (
        <>
          <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="Video"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, background: "rgba(0,0,0,0.3)" }}/>
          <button onClick={() => setPlaying(true)} style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 64, height: 64, borderRadius: "50%", background: color, border: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 30px ${color}80`, transition: "transform 0.2s"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translate(-50%,-50%) scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translate(-50%,-50%) scale(1)"}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <div style={{ position: "absolute", bottom: 12, left: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="white" opacity="0.9">
              <path d="M15.6 1.7C15.4.9 14.8.3 14 .1 12.8 0 8 0 8 0S3.2 0 2 .1C1.2.3.6.9.4 1.7.2 2.9 0 5.5 0 5.5s.2 2.6.4 3.8c.2.8.8 1.4 1.6 1.6C3.2 11 8 11 8 11s4.8 0 6-.1c.8-.2 1.4-.8 1.6-1.6.2-1.2.4-3.8.4-3.8S15.8 2.9 15.6 1.7z"/>
              <path d="M6.5 7.9V3.1L10.5 5.5 6.5 7.9z" fill="#cc0000"/>
            </svg>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 11 }}>Ver video guía</span>
          </div>
        </>
      )}
    </div>
  );
}

// ─── SETTINGS BUTTON ─────────────────────────────────────────────────────────
function SettingsButton({ onClick, muted, border, accent }) {
  return (
    <button onClick={onClick} style={{
      position: "fixed", top: 16, right: 18, zIndex: 100,
      background: "transparent", border: `1px solid ${border}`,
      borderRadius: "50%", width: 36, height: 36,
      color: muted, fontSize: 16, cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "all 0.2s", fontFamily: "inherit"
    }}
    onMouseEnter={e => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = `${accent}50`; }}
    onMouseLeave={e => { e.currentTarget.style.color = muted; e.currentTarget.style.borderColor = border; }}>
      ⚙
    </button>
  );
}

// ─── SETTINGS MODAL ──────────────────────────────────────────────────────────
function SettingsModal({ onClose, lang, setLang, savedProfile, onNewRoutine, onRetakeQuiz, onClearAll, t, accent, muted, border, bg, text, isMobile }) {
  const [confirmClear, setConfirmClear] = useState(false);
  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} style={{
        position: "fixed", top: 0, right: 0, bottom: 0, left: 0,
        background: "rgba(0,0,0,0.55)", zIndex: 200, backdropFilter: "blur(2px)"
      }}/>
      {/* Sheet */}
      <div style={{
        position: "fixed", zIndex: 201,
        ...(isMobile
          ? { bottom: 0, left: 0, right: 0, borderRadius: "20px 20px 0 0" }
          : { top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 380, borderRadius: 20 }
        ),
        background: "#111f18", border: `1px solid ${border}`,
        padding: "24px 24px 32px", fontFamily: "'DM Sans', sans-serif"
      }}>
        {/* Handle bar (mobile) */}
        {isMobile && <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)", margin: "0 auto 20px" }}/>}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <span style={{ fontSize: 16, color: text, fontWeight: 400 }}>{t.settings_title}</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 20, lineHeight: 1, padding: 4 }}>×</button>
        </div>

        {/* Language */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: muted, marginBottom: 10 }}>{t.settings_lang}</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["es", "en"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                flex: 1, padding: "10px 0", borderRadius: 100, cursor: "pointer",
                fontFamily: "inherit", fontSize: 13, transition: "all 0.15s",
                background: lang === l ? accent : "transparent",
                border: `1px solid ${lang === l ? accent : "rgba(255,255,255,0.2)"}`,
                color: lang === l ? "#fff" : muted,
              }}>{l === "es" ? "Español" : "English"}</button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: border, marginBottom: 20 }}/>

        {/* Profile */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: muted, marginBottom: 10 }}>{t.settings_profile}</div>
          {savedProfile ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <button onClick={() => { onNewRoutine(); onClose(); }} style={{
                width: "100%", background: accent, border: `1px solid ${accent}`,
                borderRadius: 100, padding: "10px 0", color: "#fff", fontSize: 13,
                cursor: "pointer", fontFamily: "inherit", textAlign: "center"
              }}>🔄 {t.settings_new_routine}</button>
              <button onClick={() => { onRetakeQuiz(); onClose(); }} style={{
                width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 100, padding: "10px 0", color: text, fontSize: 13,
                cursor: "pointer", fontFamily: "inherit", textAlign: "center"
              }}>📝 {t.settings_retake}</button>
            </div>
          ) : (
            <p style={{ fontSize: 13, color: muted, margin: 0 }}>{t.settings_no_profile}</p>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: border, margin: "20px 0 16px" }}/>

        {/* Clear data */}
        {!confirmClear ? (
          <button onClick={() => setConfirmClear(true)} style={{
            background: "transparent", border: "none", color: muted,
            fontSize: 12, cursor: "pointer", fontFamily: "inherit", padding: 0
          }}>🗑 {t.settings_clear}</button>
        ) : (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: muted, flex: 1 }}>¿Seguro?</span>
            <button onClick={() => { onClearAll(); onClose(); }} style={{
              background: "#c0392b", border: "none", borderRadius: 100, padding: "7px 16px",
              color: "#fff", fontSize: 12, cursor: "pointer", fontFamily: "inherit"
            }}>Sí, borrar</button>
            <button onClick={() => setConfirmClear(false)} style={{
              background: "transparent", border: `1px solid ${border}`, borderRadius: 100,
              padding: "7px 16px", color: muted, fontSize: 12, cursor: "pointer", fontFamily: "inherit"
            }}>No</button>
          </div>
        )}
      </div>
    </>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("mobility_lang");
      if (saved === "es" || saved === "en") return saved;
    } catch {}
    return navigator.language?.startsWith("en") ? "en" : "es";
  });
  const [screen, setScreen] = useState("home");
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommended, setRecommended] = useState([]);
  const [selected, setSelected] = useState(null);
  const [guideStep, setGuideStep] = useState(0);
  const [activeVariant, setActiveVariant] = useState(null);
  const [filterCat, setFilterCat] = useState(null);
  const [timerLeft, setTimerLeft] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [activeTab, setActiveTab] = useState("video");
  // Sequential routine
  const [routineIdx, setRoutineIdx] = useState(0);
  const [routineComplete, setRoutineComplete] = useState(false);
  const [autoCountdown, setAutoCountdown] = useState(null); // null | number
  // Persistence
  const [savedRoutine, setSavedRoutine] = useState(() => loadTodayRoutine());
  const [savedProfile, setSavedProfile] = useState(() => loadProfile());
  // Settings modal
  const [showSettings, setShowSettings] = useState(false);

  const timerRef = useRef(null);
  const autoRef = useRef(null);

  const isMobile = useIsMobile();
  const t = S[lang];
  const bg = "#0d1a14", text = "#e2ddd5", muted = "#7a7260", accent = "#5ba888";
  const surface = "rgba(255,255,255,0.035)", border = "rgba(255,255,255,0.07)";

  // Exercise timer
  useEffect(() => {
    if (timerRunning && timerLeft > 0) {
      timerRef.current = setTimeout(() => setTimerLeft(s => s - 1), 1000);
    } else if (timerLeft === 0 && timerRunning) {
      setTimerRunning(false);
      setTimerDone(true);
      if (screen === "routine_run") setAutoCountdown(5);
    }
    return () => clearTimeout(timerRef.current);
  }, [timerRunning, timerLeft, screen]);

  // Auto-advance countdown in routine mode
  useEffect(() => {
    if (autoCountdown === null) return;
    if (autoCountdown === 0) {
      setAutoCountdown(null);
      advanceRoutine();
      return;
    }
    autoRef.current = setTimeout(() => setAutoCountdown(c => c - 1), 1000);
    return () => clearTimeout(autoRef.current);
  }, [autoCountdown]);

  const handleAnswer = (qid, value, multi) => {
    setAnswers(prev => {
      if (!multi) return { ...prev, [qid]: [value] };
      const existing = prev[qid] || [];
      if (value === "ninguna") return { ...prev, [qid]: ["ninguna"] };
      const without = existing.filter(v => v !== "ninguna");
      return { ...prev, [qid]: without.includes(value) ? without.filter(v => v !== value) : [...without, value] };
    });
  };

  const nextQuiz = () => {
    if (quizStep < QUESTIONS.length - 1) {
      setQuizStep(s => s + 1);
    } else {
      const result = recommend(answers);
      setRecommended(result);
      saveRoutine(answers, result);
      saveProfile(answers);
      setSavedRoutine({ answers, exercises: result });
      setSavedProfile(answers);
      setScreen("results");
    }
  };

  const generateTodayRoutine = (profileAnswers) => {
    const result = recommend(profileAnswers);
    setRecommended(result);
    setAnswers(profileAnswers);
    saveRoutine(profileAnswers, result);
    setSavedRoutine({ answers: profileAnswers, exercises: result });
    setScreen("results");
  };

  const handleClearAll = () => {
    clearAll();
    setSavedRoutine(null);
    setSavedProfile(null);
    setRecommended([]);
    setAnswers({});
    setScreen("home");
  };

  const openEx = (ex) => {
    setSelected(ex);
    setGuideStep(0);
    setActiveVariant(null);
    setTimerLeft(ex.duration);
    setTimerRunning(false);
    setTimerDone(false);
    setActiveTab("video");
    setScreen("detail");
  };

  const startRoutine = () => {
    setRoutineIdx(0);
    setRoutineComplete(false);
    setAutoCountdown(null);
    const first = recommended[0];
    setTimerLeft(first.duration);
    setTimerRunning(false);
    setTimerDone(false);
    setScreen("routine_run");
  };

  const advanceRoutine = () => {
    clearTimeout(autoRef.current);
    setAutoCountdown(null);
    const next = routineIdx + 1;
    if (next >= recommended.length) {
      setRoutineComplete(true);
    } else {
      setRoutineIdx(next);
      setTimerLeft(recommended[next].duration);
      setTimerRunning(false);
      setTimerDone(false);
    }
  };

  const resumeSaved = () => {
    if (!savedRoutine) return;
    setRecommended(savedRoutine.exercises);
    setAnswers(savedRoutine.answers);
    setScreen("results");
  };

  const displayList = screen === "results"
    ? recommended
    : filterCat
      ? EXERCISES.filter(e => e.es.category === filterCat)
      : EXERCISES;

  const fmtTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const fmtMins = (s) => Math.round(s / 60);
  const levelLabel = (ex) => t[`level_${ex.level}`];

  // ── SHARED UI ─────────────────────────────────────────────────────────────
  const settingsBtn = (
    <SettingsButton onClick={() => setShowSettings(true)} muted={muted} border={border} accent={accent} />
  );
  const settingsModal = showSettings && (
    <SettingsModal
      onClose={() => setShowSettings(false)}
      lang={lang} setLang={(l) => { setLang(l); try { localStorage.setItem("mobility_lang", l); } catch {} }}
      savedProfile={savedProfile}
      onNewRoutine={() => generateTodayRoutine(savedProfile)}
      onRetakeQuiz={() => { setQuizStep(0); setAnswers({}); setScreen("quiz"); }}
      onClearAll={handleClearAll}
      t={t} accent={accent} muted={muted} border={border} bg={bg} text={text}
      isMobile={isMobile}
    />
  );

  // ── HOME ───────────────────────────────────────────────────────────────────
  if (screen === "home") return (
    <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif", overflow: "hidden", position: "relative" }}>
      {settingsBtn}{settingsModal}
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-15%", left: "-5%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(91,168,136,0.08) 0%, transparent 70%)" }}/>
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(123,111,160,0.06) 0%, transparent 70%)" }}/>
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", padding: "0 24px", paddingTop: isMobile ? 48 : 72 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, border: `1px solid ${accent}40`, color: accent, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, display: "inline-block" }}/>
          {t.tag}
        </div>
        <h1 style={{ fontSize: "clamp(2.2rem,8vw,3.8rem)", fontWeight: 400, lineHeight: 1.05, margin: "0 0 18px", letterSpacing: "-0.02em", fontFamily: "'Cormorant Garamond', serif" }}>
          {t.hero_title1}<br/><em style={{ color: accent, fontStyle: "italic" }}>{t.hero_title2}</em>
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: muted, maxWidth: 440, marginBottom: 36 }}>{t.hero_desc}</p>

        {/* Card: visible siempre que haya perfil guardado */}
        {savedProfile && (
          <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 16, padding: "16px 20px", marginBottom: 20 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, marginBottom: 4 }}>
              ● {lang === "es" ? "Rutina de hoy" : "Today's routine"}
            </div>
            {savedRoutine ? (
              <>
                <div style={{ fontSize: 13, color: muted, marginBottom: 12 }}>
                  {fmtMins(savedRoutine.exercises.reduce((s, e) => s + e.duration, 0))} min · {savedRoutine.exercises.length} {lang === "es" ? "ejercicios" : "exercises"}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={resumeSaved} style={{
                    background: accent, border: "none", borderRadius: 100, padding: "10px 20px",
                    color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "inherit", flex: 1
                  }}>▶ {lang === "es" ? "Continuar" : "Continue"}</button>
                  <button onClick={() => { clearRoutine(); setSavedRoutine(null); }} style={{
                    background: "transparent", border: `1px solid ${border}`, borderRadius: 100,
                    padding: "10px 14px", color: muted, fontSize: 12, cursor: "pointer", fontFamily: "inherit"
                  }}>✕</button>
                </div>
              </>
            ) : (
              <button onClick={() => generateTodayRoutine(savedProfile)} style={{
                width: "100%", background: accent, border: "none", borderRadius: 100, padding: "10px 20px",
                color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "inherit"
              }}>🔄 {t.settings_new_routine}</button>
            )}
          </div>
        )}

        {/* CTAs: "Personalizar" solo si no hay perfil aún */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          {!savedProfile && (
            <button onClick={() => { setQuizStep(0); setAnswers({}); setScreen("quiz"); }} style={{
              background: accent, border: "none", borderRadius: 100, padding: "14px 30px",
              color: "#fff", fontSize: 15, cursor: "pointer", fontFamily: "inherit",
              boxShadow: `0 4px 24px ${accent}40`, letterSpacing: "0.02em", transition: "all 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              {t.btn_personalize}
            </button>
          )}
          <button onClick={() => { setFilterCat(null); setScreen("library"); }} style={{
            background: "transparent", border: `1px solid ${border}`, borderRadius: 100,
            padding: "14px 28px", color: muted, fontSize: 15, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s"
          }}
          onMouseEnter={e => { e.currentTarget.style.color = text; e.currentTarget.style.borderColor = `${accent}50`; }}
          onMouseLeave={e => { e.currentTarget.style.color = muted; e.currentTarget.style.borderColor = border; }}>
            {t.btn_library}
          </button>
        </div>
        <div style={{ display: "flex", gap: 36, paddingTop: 28, borderTop: `1px solid ${border}` }}>
          {[["48", t.stat_exercises], ["9", t.stat_zones], ["90", t.stat_variants]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: "clamp(1.5rem,4vw,2rem)", color: accent, fontStyle: "italic", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, color: muted, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── QUIZ ───────────────────────────────────────────────────────────────────
  if (screen === "quiz") {
    const q = QUESTIONS[quizStep];
    const sel = answers[q.id] || [];
    const hasAnswer = sel.length > 0;
    const nextBtn = (
      <button onClick={nextQuiz} disabled={!hasAnswer} style={{
        width: "100%", background: hasAnswer ? accent : "rgba(255,255,255,0.05)",
        border: "none", borderRadius: 100, padding: "16px 32px",
        color: hasAnswer ? "#fff" : muted, fontSize: 15,
        cursor: hasAnswer ? "pointer" : "default", fontFamily: "inherit",
        boxShadow: hasAnswer ? `0 0 20px ${accent}30` : "none", transition: "all 0.2s",
        minHeight: 52
      }}>
        {quizStep < QUESTIONS.length - 1 ? t.btn_next : t.btn_finish}
      </button>
    );

    if (isMobile) {
      return (
        <div style={{ height: "100dvh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {settingsBtn}{settingsModal}
          <div style={{ height: 3, background: "rgba(255,255,255,0.06)", flexShrink: 0 }}>
            <div style={{ height: "100%", width: `${(quizStep / QUESTIONS.length) * 100}%`, background: accent, transition: "width 0.4s", borderRadius: 2 }}/>
          </div>
          <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
            <div style={{ padding: "24px 20px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28, alignItems: "center" }}>
                <button onClick={() => quizStep > 0 ? setQuizStep(s => s - 1) : setScreen("home")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "inherit", padding: 0, minHeight: 44, display: "flex", alignItems: "center" }}>
                  {quizStep === 0 ? t.back_home : t.back}
                </button>
                <span style={{ fontSize: 12, color: muted }}>{quizStep + 1} / {QUESTIONS.length}</span>
              </div>
              <div style={{ fontSize: 30, marginBottom: 10 }}>{q.icon}</div>
              <h2 style={{ fontSize: "clamp(1.1rem,5vw,1.5rem)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, margin: "0 0 6px", lineHeight: 1.3 }}>{q.question[lang]}</h2>
              {q.multi && <p style={{ fontSize: 12, color: muted, margin: "0 0 16px", letterSpacing: "0.05em" }}>{t.multi_hint}</p>}
              {!q.multi && <div style={{ height: 16 }}/>}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {q.options.map(opt => {
                  const on = sel.includes(opt.value);
                  return (
                    <button key={opt.value} onClick={() => handleAnswer(q.id, opt.value, q.multi)} style={{
                      background: on ? `rgba(91,168,136,0.1)` : surface,
                      border: `1.5px solid ${on ? accent : border}`,
                      borderRadius: 13, padding: "13px 16px", textAlign: "left",
                      cursor: "pointer", fontFamily: "inherit", color: text, transition: "all 0.15s",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      minHeight: 52
                    }}>
                      <div>
                        <div style={{ fontSize: 14, marginBottom: opt.sub[lang] ? 2 : 0 }}>{opt.label[lang]}</div>
                        {opt.sub[lang] && <div style={{ fontSize: 12, color: muted }}>{opt.sub[lang]}</div>}
                      </div>
                      {on && <div style={{ width: 20, height: 20, borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</div>}
                    </button>
                  );
                })}
              </div>
              <div style={{ height: 96 }}/>
            </div>
          </div>
          {/* Sticky button */}
          <div style={{ flexShrink: 0, padding: "12px 20px 20px", background: `linear-gradient(to bottom, transparent, ${bg} 28%)`, marginTop: -40, pointerEvents: "none" }}>
            <div style={{ pointerEvents: "auto" }}>{nextBtn}</div>
          </div>
        </div>
      );
    }

    // Desktop: natural scroll layout
    return (
      <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif" }}>
        {settingsBtn}{settingsModal}
        <div style={{ height: 3, background: "rgba(255,255,255,0.06)" }}>
          <div style={{ height: "100%", width: `${(quizStep / QUESTIONS.length) * 100}%`, background: accent, transition: "width 0.4s", borderRadius: 2 }}/>
        </div>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "44px 32px 60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 44, alignItems: "center" }}>
            <button onClick={() => quizStep > 0 ? setQuizStep(s => s - 1) : setScreen("home")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "inherit", padding: 0 }}>
              {quizStep === 0 ? t.back_home : t.back}
            </button>
            <span style={{ fontSize: 12, color: muted }}>{quizStep + 1} / {QUESTIONS.length}</span>
          </div>
          <div style={{ fontSize: 36, marginBottom: 14 }}>{q.icon}</div>
          <h2 style={{ fontSize: "clamp(1.2rem,3vw,1.7rem)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, margin: "0 0 6px", lineHeight: 1.3 }}>{q.question[lang]}</h2>
          {q.multi && <p style={{ fontSize: 12, color: muted, margin: "0 0 28px", letterSpacing: "0.05em" }}>{t.multi_hint}</p>}
          {!q.multi && <div style={{ height: 24 }}/>}
          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 32 }}>
            {q.options.map(opt => {
              const on = sel.includes(opt.value);
              return (
                <button key={opt.value} onClick={() => handleAnswer(q.id, opt.value, q.multi)} style={{
                  background: on ? `rgba(91,168,136,0.1)` : surface,
                  border: `1.5px solid ${on ? accent : border}`,
                  borderRadius: 13, padding: "14px 18px", textAlign: "left",
                  cursor: "pointer", fontFamily: "inherit", color: text, transition: "all 0.15s",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}
                onMouseEnter={e => { if (!on) e.currentTarget.style.borderColor = `${accent}50`; }}
                onMouseLeave={e => { if (!on) e.currentTarget.style.borderColor = border; }}>
                  <div>
                    <div style={{ fontSize: 14, marginBottom: opt.sub[lang] ? 2 : 0 }}>{opt.label[lang]}</div>
                    {opt.sub[lang] && <div style={{ fontSize: 12, color: muted }}>{opt.sub[lang]}</div>}
                  </div>
                  {on && <div style={{ width: 20, height: 20, borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</div>}
                </button>
              );
            })}
          </div>
          {nextBtn}
        </div>
      </div>
    );
  }

  // ── LIST (results or library) ──────────────────────────────────────────────
  if (screen === "results" || screen === "library") return (
    <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif" }}>
      {settingsBtn}{settingsModal}
      <div style={{ maxWidth: 700, margin: "0 auto", padding: isMobile ? "0 14px" : "0 20px" }}>
        <div style={{ paddingTop: isMobile ? 24 : 36, paddingBottom: 20 }}>
          <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "inherit", padding: 0, marginBottom: 24 }}>{t.back_home}</button>
          {screen === "results" ? (
            <>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>{t.results_tag}</div>
              <h2 style={{ fontSize: "clamp(1.4rem,5vw,2rem)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, margin: "0 0 8px" }}>
                <em style={{ color: accent, fontStyle: "italic" }}>
                  {fmtMins(recommended.reduce((s, e) => s + e.duration, 0))}
                </em>{" "}{t.results_duration}
              </h2>
              <p style={{ fontSize: 13, color: muted, margin: "0 0 4px" }}>{recommended.length} {t.results_exercises}</p>
              <p style={{ fontSize: 13, color: muted, margin: "0 0 20px" }}>{t.results_hint}</p>
              <button onClick={startRoutine} style={{
                display: "block", width: "100%", background: accent, border: "none",
                borderRadius: 14, padding: "16px 24px", color: "#fff",
                fontSize: 15, cursor: "pointer", fontFamily: "inherit",
                boxShadow: `0 4px 24px ${accent}40`, marginBottom: 10,
                textAlign: "center", letterSpacing: "0.02em"
              }}>▶ {t.btn_run_routine.replace("▶ ", "").replace("▶", "")}</button>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => { setQuizStep(0); setAnswers({}); setScreen("quiz"); }} style={{ background: "none", border: `1px solid ${border}`, borderRadius: 100, padding: "9px 16px", color: muted, fontSize: 12, cursor: "pointer", fontFamily: "inherit", flex: 1 }}>{t.btn_retake}</button>
                <button onClick={() => { setFilterCat(null); setScreen("library"); }} style={{ background: "none", border: `1px solid ${border}`, borderRadius: 100, padding: "9px 16px", color: muted, fontSize: 12, cursor: "pointer", fontFamily: "inherit", flex: 1 }}>{t.btn_all}</button>
              </div>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: "clamp(1.4rem,5vw,2rem)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, margin: "0 0 20px" }}>{t.library_title}</h2>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                {[null, ...CATEGORY_KEYS].map(cat => {
                  const active = filterCat === cat;
                  const label = cat === null ? t.cat_all : catLabel(cat, lang);
                  return (
                    <button key={cat ?? "all"} onClick={() => setFilterCat(cat)} style={{
                      padding: "6px 14px", borderRadius: 100, fontFamily: "inherit", fontSize: 11,
                      cursor: "pointer", letterSpacing: "0.05em",
                      border: `1.5px solid ${active ? accent : border}`,
                      background: active ? `${accent}15` : "transparent",
                      color: active ? accent : muted, transition: "all 0.15s"
                    }}>{label}</button>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(190px, 1fr))", gap: isMobile ? 10 : 12, paddingBottom: 60 }}>
          {displayList.map((ex, i) => {
            const exl = ex[lang];
            return (
              <button key={ex.id} onClick={() => openEx(ex)} style={{
                background: surface, border: `1px solid ${border}`,
                borderRadius: 18, padding: "20px 18px", textAlign: "left",
                cursor: "pointer", fontFamily: "inherit", color: text,
                transition: "all 0.2s", position: "relative", overflow: "hidden"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${ex.color}60`; e.currentTarget.style.background = `${ex.color}08`; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.background = surface; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, background: `radial-gradient(circle at top right, ${ex.color}18, transparent)`, borderRadius: "0 18px 0 60px" }}/>
                {screen === "results" && i < 3 && <div style={{ position: "absolute", top: 10, right: 12, fontSize: 9, color: accent, letterSpacing: "0.1em" }}>{t.top_label}</div>}
                <div style={{ fontSize: 28, marginBottom: 10 }}>{ex.icon}</div>
                <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: ex.color, marginBottom: 4 }}>{exl.category}</div>
                <div style={{ fontSize: 15, marginBottom: 10, lineHeight: 1.3 }}>{exl.name}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10, color: ex.color, background: `${ex.color}15`, padding: "2px 8px", borderRadius: 100 }}>{levelLabel(ex)}</span>
                  <span style={{ fontSize: 10, color: muted }}>⏱ {Math.floor(ex.duration / 60)}m</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ── ROUTINE RUN ────────────────────────────────────────────────────────────
  if (screen === "routine_run") {
    if (routineComplete) {
      const totalMins = fmtMins(recommended.reduce((s, e) => s + e.duration, 0));
      return (
        <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center" }}>
          {settingsBtn}{settingsModal}
          <div style={{ fontSize: 72, marginBottom: 24 }}>🎉</div>
          <h2 style={{ fontSize: "clamp(1.4rem,5vw,2rem)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, margin: "0 0 12px" }}>{t.run_complete_title}</h2>
          <p style={{ fontSize: 13, color: muted, marginBottom: 4 }}>{t.run_complete_time}</p>
          <p style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", color: accent, fontStyle: "italic", marginBottom: 36 }}>{totalMins} min</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={() => setScreen("results")} style={{ background: accent, border: "none", borderRadius: 100, padding: "12px 24px", color: "#fff", fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>{t.run_complete_back}</button>
            <button onClick={() => { setRoutineIdx(0); setRoutineComplete(false); setTimerLeft(recommended[0].duration); setTimerRunning(false); setTimerDone(false); }} style={{ background: "transparent", border: `1px solid ${border}`, borderRadius: 100, padding: "12px 20px", color: muted, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>{t.run_complete_retry}</button>
          </div>
        </div>
      );
    }

    const ex = recommended[routineIdx];
    const exl = ex[lang];
    const timerPct = (timerLeft / ex.duration) * 100;
    const total = recommended.length;

    return (
      <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}>
        {settingsBtn}{settingsModal}

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 5, padding: "20px 24px 0", justifyContent: "center" }}>
          {recommended.map((_, i) => (
            <div key={i} style={{
              width: i === routineIdx ? 20 : 8, height: 8, borderRadius: 4,
              background: i < routineIdx ? accent : i === routineIdx ? accent : "rgba(255,255,255,0.15)",
              opacity: i < routineIdx ? 0.5 : 1,
              transition: "all 0.3s"
            }}/>
          ))}
        </div>

        <div style={{ maxWidth: 520, margin: "0 auto", padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
            <button onClick={() => setScreen("results")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "inherit", padding: 0 }}>{t.back_exercise}</button>
            <span style={{ fontSize: 12, color: muted }}>{t.run_exercise} {routineIdx + 1} / {total}</span>
          </div>

          {/* Exercise card */}
          <div style={{ background: surface, border: `1px solid ${ex.color}30`, borderRadius: 20, padding: "22px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, background: `radial-gradient(circle, ${ex.color}15, transparent 70%)`, borderRadius: "50%" }}/>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: ex.color, marginBottom: 6 }}>{exl.category}</div>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ fontSize: 44 }}>{ex.icon}</div>
              <div>
                <h2 style={{ fontSize: "clamp(1.1rem,4vw,1.5rem)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, margin: "0 0 6px", lineHeight: 1.2 }}>{exl.name}</h2>
                <p style={{ fontSize: 12, color: muted, margin: 0, lineHeight: 1.5 }}>{exl.description}</p>
              </div>
            </div>
          </div>

          {/* Timer */}
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "20px", marginBottom: 16, display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ position: "relative", width: 70, height: 70, flexShrink: 0 }}>
              <svg width="70" height="70" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4"/>
                <circle cx="35" cy="35" r="28" fill="none" stroke={timerDone ? "#4ade80" : ex.color} strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - timerPct / 100)}`}
                  strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s linear" }}/>
              </svg>
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: timerDone ? 20 : 13, color: timerDone ? "#4ade80" : ex.color, fontWeight: 600 }}>
                {timerDone ? "✓" : fmtTime(timerLeft)}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              {timerDone ? (
                <>
                  <div style={{ fontSize: 14, color: "#4ade80", marginBottom: 8 }}>{t.run_rest_title}</div>
                  {autoCountdown !== null && (
                    <div style={{ fontSize: 11, color: muted, marginBottom: 8 }}>{t.run_auto} {autoCountdown}s…</div>
                  )}
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => { clearTimeout(autoRef.current); advanceRoutine(); }} style={{
                      background: accent, border: "none", borderRadius: 100, padding: "8px 20px",
                      color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "inherit"
                    }}>{t.run_rest_next}</button>
                    {autoCountdown !== null && (
                      <button onClick={() => { clearTimeout(autoRef.current); setAutoCountdown(null); }} style={{
                        background: "transparent", border: `1px solid ${border}`, borderRadius: 100,
                        padding: "8px 16px", color: text, fontSize: 12, cursor: "pointer", fontFamily: "inherit",
                        opacity: 0.7
                      }}>⏸ {lang === "es" ? "Pausar" : "Pause"}</button>
                    )}
                  </div>
                </>
              ) : (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button onClick={() => setTimerRunning(r => !r)} style={{
                    background: timerRunning ? `${ex.color}20` : accent,
                    border: `1px solid ${ex.color}50`, borderRadius: 100, padding: "8px 18px",
                    color: timerRunning ? ex.color : "#fff", fontSize: 12, cursor: "pointer", fontFamily: "inherit"
                  }}>{timerRunning ? t.btn_pause : t.btn_start}</button>
                  <button onClick={() => { clearTimeout(timerRef.current); setTimerLeft(ex.duration); setTimerRunning(false); setTimerDone(false); }} style={{
                    background: "transparent", border: `1px solid ${border}`, borderRadius: 100,
                    padding: "8px 14px", color: muted, fontSize: 12, cursor: "pointer", fontFamily: "inherit"
                  }}>{t.btn_reset}</button>
                  <button onClick={advanceRoutine} style={{
                    background: "transparent", border: `1px solid ${border}`, borderRadius: 100,
                    padding: "8px 16px", color: text, fontSize: 12, cursor: "pointer", fontFamily: "inherit",
                    opacity: 0.7
                  }}>{t.run_skip} →</button>
                </div>
              )}
            </div>
          </div>

          {/* Steps for current exercise */}
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "16px 20px", flex: 1 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: muted, marginBottom: 12 }}>{t.guide_title}</div>
            {exl.steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${ex.color}20`, border: `1px solid ${ex.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: ex.color, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                <p style={{ fontSize: 12, color: "#c8c0b2", lineHeight: 1.6, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>

          <div style={{ height: 24 }}/>
        </div>
      </div>
    );
  }

  // ── DETAIL ─────────────────────────────────────────────────────────────────
  if (screen === "detail" && selected) {
    const ex = selected;
    const exl = ex[lang];
    const timerPct = (timerLeft / ex.duration) * 100;

    return (
      <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif" }}>
        {settingsBtn}{settingsModal}
        <div style={{ maxWidth: 660, margin: "0 auto", padding: isMobile ? "0 14px" : "0 20px" }}>
          <div style={{ paddingTop: isMobile ? 20 : 32, paddingBottom: 16 }}>
            <button onClick={() => setScreen(recommended.length ? "results" : "library")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "inherit", padding: 0 }}>{t.back_exercise}</button>
          </div>

          <div style={{ background: surface, border: `1px solid ${ex.color}30`, borderRadius: 20, padding: "22px 22px 18px", marginBottom: 14, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, background: `radial-gradient(circle, ${ex.color}12, transparent 70%)`, borderRadius: "50%" }}/>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ fontSize: 40 }}>{ex.icon}</div>
              <div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: ex.color, marginBottom: 4 }}>{exl.category}</div>
                <h2 style={{ fontSize: "clamp(1.2rem,4vw,1.7rem)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, margin: "0 0 8px", lineHeight: 1.2 }}>{exl.name}</h2>
                <p style={{ fontSize: 13, color: muted, margin: "0 0 12px", lineHeight: 1.6 }}>{exl.description}</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10, color: ex.color, background: `${ex.color}15`, padding: "3px 10px", borderRadius: 100 }}>{levelLabel(ex)}</span>
                  <span style={{ fontSize: 10, color: muted, background: surface, padding: "3px 10px", borderRadius: 100 }}>⏱ {fmtTime(ex.duration)}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "16px 20px", marginBottom: 14, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ position: "relative", width: 52, height: 52, flexShrink: 0 }}>
              <svg width="52" height="52" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="26" cy="26" r="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5"/>
                <circle cx="26" cy="26" r="20" fill="none" stroke={timerDone ? "#4ade80" : ex.color} strokeWidth="3.5"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - timerPct / 100)}`}
                  strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s linear" }}/>
              </svg>
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: timerDone ? "#4ade80" : ex.color, fontWeight: 600 }}>
                {timerDone ? "✓" : fmtTime(timerLeft)}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: muted, marginBottom: 7 }}>{timerDone ? t.timer_done : t.timer_label}</div>
              <div style={{ display: "flex", gap: 7 }}>
                {!timerDone && (
                  <button onClick={() => setTimerRunning(r => !r)} style={{ background: timerRunning ? `${ex.color}20` : "transparent", border: `1px solid ${ex.color}50`, borderRadius: 100, padding: "5px 14px", color: ex.color, fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>
                    {timerRunning ? t.btn_pause : t.btn_start}
                  </button>
                )}
                <button onClick={() => { setTimerLeft(ex.duration); setTimerRunning(false); setTimerDone(false); }} style={{ background: "transparent", border: `1px solid ${border}`, borderRadius: 100, padding: "5px 12px", color: muted, fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>{t.btn_reset}</button>
              </div>
            </div>
          </div>

          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "16px 20px", marginBottom: 14 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: muted, marginBottom: 12 }}>{t.benefits_title}</div>
            {exl.benefits.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                <span style={{ color: ex.color, fontSize: 14 }}>·</span>
                <span style={{ fontSize: 13, color: "#c8c0b2", lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 0, marginBottom: 12, background: surface, borderRadius: 12, padding: 4, border: `1px solid ${border}` }}>
            {[["video", t.tab_video, "▶"], ["guide", t.tab_guide, "📋"], ["variants", t.tab_variants, "⚙️"]].map(([tab, label, icon]) => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                flex: 1, padding: "9px 4px", borderRadius: 9,
                background: activeTab === tab ? ex.color : "transparent",
                border: "none", color: activeTab === tab ? "#fff" : muted,
                fontSize: isMobile ? 13 : 12, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s"
              }}>{isMobile ? icon : label}</button>
            ))}
          </div>

          {activeTab === "video" && (
            <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 14 }}>
              <YouTubeEmbed videoId={ex.youtubeId} color={ex.color}/>
              <div style={{ background: surface, border: `1px solid ${border}`, borderTop: "none", borderRadius: "0 0 16px 16px", padding: "12px 16px" }}>
                <p style={{ fontSize: 12, color: muted, margin: 0, lineHeight: 1.6 }}>{t.video_disclaimer}</p>
              </div>
            </div>
          )}

          {activeTab === "guide" && (
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "18px 20px", marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: muted }}>{t.guide_title}</div>
                <button onClick={() => { setGuideStep(0); setScreen("guide"); }} style={{ background: ex.color, border: "none", borderRadius: 100, padding: "7px 16px", color: "#fff", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>{t.btn_guided}</button>
              </div>
              {exl.steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${ex.color}20`, border: `1px solid ${ex.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: ex.color, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <p style={{ fontSize: 13, color: "#c8c0b2", lineHeight: 1.65, margin: 0 }}>{s}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "variants" && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ background: "rgba(91,168,136,0.05)", border: "1px solid rgba(91,168,136,0.15)", borderRadius: 13, padding: "12px 16px", marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: accent, marginBottom: 4 }}>{t.variants_tip_title}</div>
                <p style={{ fontSize: 12, color: muted, lineHeight: 1.65, margin: 0 }}>{t.variants_tip}</p>
              </div>
              {exl.variants.map((v, i) => (
                <button key={i} onClick={() => setActiveVariant(activeVariant === i ? null : i)} style={{
                  width: "100%", background: activeVariant === i ? `${ex.color}08` : surface,
                  border: `1px solid ${activeVariant === i ? ex.color + "50" : border}`,
                  borderRadius: 13, padding: "14px 16px", marginBottom: 8,
                  textAlign: "left", cursor: "pointer", fontFamily: "inherit", color: text, transition: "all 0.2s"
                }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, marginBottom: 6 }}>{v.name}</div>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: activeVariant === i ? 8 : 0 }}>
                        {v.for.map(f => (
                          <span key={f} style={{ fontSize: 10, color: ex.color, background: `${ex.color}12`, padding: "2px 8px", borderRadius: 100 }}>{f}</span>
                        ))}
                      </div>
                      {activeVariant === i && <p style={{ fontSize: 12, color: muted, lineHeight: 1.6, margin: 0 }}>{v.description}</p>}
                    </div>
                    <span style={{ color: muted, fontSize: 12, transition: "transform 0.2s", transform: activeVariant === i ? "rotate(180deg)" : "none", flexShrink: 0 }}>▾</span>
                  </div>
                </button>
              ))}
            </div>
          )}
          <div style={{ height: 40 }}/>
        </div>
      </div>
    );
  }

  // ── GUIDED MODE ────────────────────────────────────────────────────────────
  if (screen === "guide" && selected) {
    const ex = selected;
    const exl = ex[lang];
    const isLast = guideStep === exl.steps.length - 1;
    return (
      <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}>
        {settingsBtn}{settingsModal}
        <div style={{ display: "flex" }}>
          {exl.steps.map((_, i) => (
            <div key={i} style={{ height: 3, flex: 1, background: i <= guideStep ? ex.color : "rgba(255,255,255,0.07)", transition: "background 0.4s" }}/>
          ))}
        </div>
        <div style={{ maxWidth: 540, margin: "0 auto", padding: "28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <button onClick={() => setScreen("detail")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "inherit", padding: 0, marginBottom: 36, alignSelf: "flex-start" }}>
            ← {exl.name}
          </button>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontSize: 72, marginBottom: 28, filter: `drop-shadow(0 0 24px ${ex.color}50)` }}>{ex.icon}</div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: muted, marginBottom: 18 }}>
              {t.step_label} {guideStep + 1} {t.step_of} {exl.steps.length}
            </div>
            <p style={{ fontSize: "clamp(1.05rem,3.5vw,1.3rem)", lineHeight: 1.75, color: text, maxWidth: 420, fontStyle: "italic", marginBottom: 44 }}>
              "{exl.steps[guideStep]}"
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {guideStep > 0 && (
                <button onClick={() => setGuideStep(s => s - 1)} style={{ background: "transparent", border: `1px solid ${border}`, borderRadius: 100, padding: "12px 22px", color: muted, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>{t.btn_prev}</button>
              )}
              <button onClick={() => isLast ? setScreen("detail") : setGuideStep(s => s + 1)} style={{
                background: ex.color, border: "none", borderRadius: 100, padding: "13px 30px",
                color: "#fff", fontSize: 14, cursor: "pointer", fontFamily: "inherit",
                boxShadow: `0 0 20px ${ex.color}40`
              }}>
                {isLast ? t.btn_complete : t.btn_next}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

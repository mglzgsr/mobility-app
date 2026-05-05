export const S = {
  es: {
    lang_toggle: "EN",
    tag: "Movimiento consciente",
    hero_title1: "Movilidad",
    hero_title2: "& Flexibilidad",
    hero_desc: "No hay una rutina universal. Encuentra los ejercicios que tu cuerpo necesita hoy, con guías en vídeo y adaptaciones para cada condición.",
    btn_personalize: "Personalizar mi rutina →",
    btn_library: "Ver biblioteca completa",
    stat_exercises: "Ejercicios",
    stat_zones: "Zonas del cuerpo",
    stat_variants: "Variantes adaptadas",
    back_home: "← Inicio",
    back: "← Atrás",
    step_of: "de",
    multi_hint: "Selecciona todas las que apliquen",
    btn_next: "Siguiente →",
    btn_finish: "Ver mi rutina personalizada →",
    results_tag: "Tu rutina personalizada",
    results_subtitle: "ejercicios seleccionados",
    results_hint: "Ordenados por relevancia según tus respuestas.",
    btn_retake: "Repetir test",
    btn_all: "Ver todos",
    library_title: "Biblioteca completa",
    timer_label: "Temporizador",
    timer_done: "¡Ejercicio completado! 🎉",
    btn_start: "▶ Iniciar",
    btn_pause: "⏸ Pausa",
    btn_reset: "↺ Reset",
    benefits_title: "Beneficios",
    tab_video: "▶ Video guía",
    tab_guide: "📋 Paso a paso",
    tab_variants: "⚙️ Variantes",
    video_disclaimer: "Video de referencia. Cada cuerpo es diferente — úsalo como guía visual, no como modelo exacto a seguir.",
    guide_title: "Instrucciones",
    btn_guided: "Modo guiado →",
    variants_tip_title: "💡 ¿Cuál elegir?",
    variants_tip: "Empieza siempre por la versión más suave aunque no tengas limitaciones. La progresión consciente protege articulaciones y maximiza beneficios.",
    step_label: "Paso",
    btn_prev: "← Anterior",
    btn_complete: "✓ Completado",
    top_label: "★ TOP",
    level_beginner: "Principiante",
    level_intermediate: "Intermedio",
    back_exercise: "← Volver",
    cat_all: "Todos",
    results_duration: "min de rutina",
    results_exercises: "ejercicios",
    results_hint: "Seleccionados para encajar en tu tiempo con variedad de zonas.",
    btn_run_routine: "▶ Iniciar rutina completa",
    home_continue: "Continuar rutina de hoy",
    home_continue_sub: "min · ",
    home_continue_exercises: "ejercicios",
    run_exercise: "Ejercicio",
    run_rest_title: "¡Bien hecho!",
    run_rest_next: "Siguiente →",
    run_auto: "Siguiente automático en",
    run_skip: "Saltar",
    run_complete_title: "¡Rutina completada! 🎉",
    run_complete_time: "Tiempo total",
    run_complete_back: "Ver resumen",
    run_complete_retry: "Repetir rutina",
    settings_title: "Ajustes",
    settings_lang: "Idioma",
    settings_profile: "Mi perfil",
    settings_retake: "Actualizar perfil",
    settings_new_routine: "Nueva rutina de hoy",
    settings_no_profile: "Haz el test para guardar tu perfil",
    settings_clear: "Borrar mis datos",
  },
  en: {
    lang_toggle: "ES",
    tag: "Mindful movement",
    hero_title1: "Mobility",
    hero_title2: "& Flexibility",
    hero_desc: "There's no universal routine. Find the exercises your body needs today, with video guides and adaptations for every condition.",
    btn_personalize: "Personalize my routine →",
    btn_library: "Browse full library",
    stat_exercises: "Exercises",
    stat_zones: "Body zones",
    stat_variants: "Adapted variants",
    back_home: "← Home",
    back: "← Back",
    step_of: "of",
    multi_hint: "Select all that apply",
    btn_next: "Next →",
    btn_finish: "See my personalized routine →",
    results_tag: "Your personalized routine",
    results_subtitle: "exercises selected",
    results_hint: "Sorted by relevance based on your answers.",
    btn_retake: "Retake quiz",
    btn_all: "See all",
    library_title: "Full library",
    timer_label: "Timer",
    timer_done: "Exercise complete! 🎉",
    btn_start: "▶ Start",
    btn_pause: "⏸ Pause",
    btn_reset: "↺ Reset",
    benefits_title: "Benefits",
    tab_video: "▶ Video guide",
    tab_guide: "📋 Step by step",
    tab_variants: "⚙️ Variants",
    video_disclaimer: "Reference video. Every body is different — use it as a visual guide, not an exact model to follow.",
    guide_title: "Instructions",
    btn_guided: "Guided mode →",
    variants_tip_title: "💡 Which to choose?",
    variants_tip: "Always start with the gentlest version even without limitations. Conscious progression protects joints and maximizes benefits.",
    step_label: "Step",
    btn_prev: "← Previous",
    btn_complete: "✓ Done",
    top_label: "★ TOP",
    level_beginner: "Beginner",
    level_intermediate: "Intermediate",
    back_exercise: "← Back",
    cat_all: "All",
    results_duration: "min routine",
    results_exercises: "exercises",
    results_hint: "Selected to fit your time with variety across body zones.",
    btn_run_routine: "▶ Start full routine",
    home_continue: "Continue today's routine",
    home_continue_sub: "min · ",
    home_continue_exercises: "exercises",
    run_exercise: "Exercise",
    run_rest_title: "Nice work!",
    run_rest_next: "Next →",
    run_auto: "Auto-next in",
    run_skip: "Skip",
    run_complete_title: "Routine complete! 🎉",
    run_complete_time: "Total time",
    run_complete_back: "See summary",
    run_complete_retry: "Repeat routine",
    settings_title: "Settings",
    settings_lang: "Language",
    settings_profile: "My profile",
    settings_retake: "Update profile",
    settings_new_routine: "New routine today",
    settings_no_profile: "Take the quiz to save your profile",
    settings_clear: "Clear my data",
  }
};

// Category order for filter display (canonical keys are always Spanish)
export const CATEGORY_KEYS = [
  "Columna", "Cadera", "Hombros", "Cuello",
  "Tobillo y Pie", "Muñeca", "Rodilla", "Cadena Posterior", "CrossFit"
];

export const QUESTIONS = [
  {
    id: "activity",
    icon: "⚡",
    multi: false,
    question: {
      es: "¿Cuál es tu nivel de actividad física actual?",
      en: "What is your current physical activity level?"
    },
    options: [
      {
        value: "sedentario",
        label: { es: "Sedentario", en: "Sedentary" },
        sub: { es: "Trabajo en escritorio, poco movimiento", en: "Desk job, little movement" }
      },
      {
        value: "ligero",
        label: { es: "Ligero", en: "Light" },
        sub: { es: "Paseos y actividad casual", en: "Walks and casual activity" }
      },
      {
        value: "moderado",
        label: { es: "Moderado", en: "Moderate" },
        sub: { es: "Deporte 2–3 veces por semana", en: "Sport 2–3 times per week" }
      },
      {
        value: "deportista",
        label: { es: "Deportista", en: "Athlete" },
        sub: { es: "Entrenamiento frecuente o intenso", en: "Frequent or intense training" }
      }
    ]
  },
  {
    id: "sport",
    icon: "🏅",
    multi: true,
    question: {
      es: "¿Practicas algún deporte específico?",
      en: "Do you practice any specific sport?"
    },
    options: [
      {
        value: "crossfit",
        label: { es: "CrossFit", en: "CrossFit" },
        sub: { es: "WODs, levantamientos olímpicos, gimnasia", en: "WODs, Olympic lifting, gymnastics" }
      },
      {
        value: "weightlifting",
        label: { es: "Halterofilia", en: "Weightlifting" },
        sub: { es: "Snatch, clean & jerk", en: "Snatch, clean & jerk" }
      },
      {
        value: "corredor",
        label: { es: "Running / Ciclismo", en: "Running / Cycling" },
        sub: { es: "Cardio de resistencia", en: "Endurance cardio" }
      },
      {
        value: "nadador",
        label: { es: "Natación / Deportes de agua", en: "Swimming / Water sports" },
        sub: { es: "", en: "" }
      },
      {
        value: "padel",
        label: { es: "Pádel / Tenis", en: "Padel / Tennis" },
        sub: { es: "Deporte de raqueta", en: "Racket sport" }
      },
      {
        value: "hyrox",
        label: { es: "Hyrox", en: "Hyrox" },
        sub: { es: "Running funcional y estaciones de fuerza", en: "Functional running and strength stations" }
      },
      {
        value: "judo",
        label: { es: "Judo / Contacto", en: "Judo / Combat sports" },
        sub: { es: "Artes marciales y deportes de contacto", en: "Martial arts and combat sports" }
      },
      {
        value: "ninguna",
        label: { es: "Ninguno", en: "None" },
        sub: { es: "Entrenamiento general o sin deporte específico", en: "General fitness or no specific sport" }
      }
    ]
  },
  {
    id: "areas",
    icon: "📍",
    multi: true,
    question: {
      es: "¿Tienes molestias en alguna zona?",
      en: "Do you have discomfort in any area?"
    },
    options: [
      {
        value: "lumbar",
        label: { es: "Espalda baja", en: "Lower back" },
        sub: { es: "Zona lumbar", en: "Lumbar zone" }
      },
      {
        value: "cuello",
        label: { es: "Cuello / cervicales", en: "Neck / cervical" },
        sub: { es: "Tensión o rigidez", en: "Tension or stiffness" }
      },
      {
        value: "cadera",
        label: { es: "Cadera", en: "Hip" },
        sub: { es: "Incluyendo glúteo o ciático", en: "Including glute or sciatic" }
      },
      {
        value: "hombros",
        label: { es: "Hombros", en: "Shoulders" },
        sub: { es: "Movilidad o dolor", en: "Mobility or pain" }
      },
      {
        value: "rodilla",
        label: { es: "Rodillas", en: "Knees" },
        sub: { es: "Dolor o inestabilidad", en: "Pain or instability" }
      },
      {
        value: "tobillo",
        label: { es: "Tobillo / pie", en: "Ankle / foot" },
        sub: { es: "Rigidez o dolor", en: "Stiffness or pain" }
      },
      {
        value: "ninguna",
        label: { es: "Sin molestias", en: "No discomfort" },
        sub: { es: "Solo trabajo preventivo", en: "Preventive work only" }
      }
    ]
  },
  {
    id: "conditions",
    icon: "🏥",
    multi: true,
    question: {
      es: "¿Alguna condición especial a tener en cuenta?",
      en: "Any special condition to consider?"
    },
    options: [
      {
        value: "hernia",
        label: { es: "Hernia discal", en: "Disc herniation" },
        sub: { es: "Lumbar o cervical", en: "Lumbar or cervical" }
      },
      {
        value: "embarazo",
        label: { es: "Embarazo", en: "Pregnancy" },
        sub: { es: "Cualquier trimestre", en: "Any trimester" }
      },
      {
        value: "reemplazo_cadera",
        label: { es: "Prótesis de cadera", en: "Hip replacement" },
        sub: { es: "", en: "" }
      },
      {
        value: "osteoporosis",
        label: { es: "Osteoporosis", en: "Osteoporosis" },
        sub: { es: "", en: "" }
      },
      {
        value: "manguito",
        label: { es: "Lesión de manguito", en: "Rotator cuff injury" },
        sub: { es: "Hombro", en: "Shoulder" }
      },
      {
        value: "ninguna",
        label: { es: "Ninguna", en: "None" },
        sub: { es: "Sin condiciones especiales", en: "No special conditions" }
      }
    ]
  },
  {
    id: "goal",
    icon: "🎯",
    multi: false,
    question: {
      es: "¿Cuál es tu objetivo principal?",
      en: "What is your main goal?"
    },
    options: [
      {
        value: "alivio",
        label: { es: "Aliviar molestias", en: "Relieve discomfort" },
        sub: { es: "Reducir dolor o rigidez actual", en: "Reduce current pain or stiffness" }
      },
      {
        value: "prevencion",
        label: { es: "Prevención", en: "Prevention" },
        sub: { es: "Evitar lesiones futuras", en: "Avoid future injuries" }
      },
      {
        value: "rendimiento",
        label: { es: "Rendimiento", en: "Performance" },
        sub: { es: "Mejorar flexibilidad para el deporte", en: "Improve flexibility for sport" }
      },
      {
        value: "relajacion",
        label: { es: "Relajación", en: "Relaxation" },
        sub: { es: "Descanso y recuperación", en: "Rest and recovery" }
      }
    ]
  },
  {
    id: "time",
    icon: "⏱️",
    multi: false,
    question: {
      es: "¿Cuánto tiempo tienes hoy?",
      en: "How much time do you have today?"
    },
    options: [
      {
        value: "rapida",
        label: { es: "Sesión rápida", en: "Quick session" },
        sub: { es: "~10 minutos", en: "~10 minutes" }
      },
      {
        value: "estandar",
        label: { es: "Sesión estándar", en: "Standard session" },
        sub: { es: "~15 minutos", en: "~15 minutes" }
      },
      {
        value: "larga",
        label: { es: "Sesión larga", en: "Long session" },
        sub: { es: "~25 minutos", en: "~25 minutes" }
      },
      {
        value: "completa",
        label: { es: "Sesión completa", en: "Full session" },
        sub: { es: "~45 minutos", en: "~45 minutes" }
      }
    ]
  }
];

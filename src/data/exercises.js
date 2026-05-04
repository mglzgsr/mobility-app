// level values: "beginner" | "intermediate"
// category values (es) are the canonical keys used for filtering

export const EXERCISES = [
  {
    id: 1, icon: "🐱", level: "beginner", duration: 120, color: "#5ba888",
    tags: ["lumbar", "sedentario", "principiante", "oficina", "estrés"],
    contraindications: [],
    youtubeId: "xyNwxiuERXc",
    es: {
      name: "Gato-Vaca", category: "Columna",
      description: "Movilidad espinal fundamental que alterna flexión y extensión con la respiración.",
      benefits: ["Descomprime vértebras lumbares", "Activa musculatura profunda del core", "Ideal como calentamiento espinal"],
      steps: [
        "Cuatro patas: muñecas bajo hombros, rodillas bajo caderas",
        "VACA — inhala: deja caer el abdomen, saca el pecho, mira hacia arriba",
        "GATO — exhala: redondea la espalda, mete la barbilla al pecho",
        "Alterna en 8–10 ciclos respiratorios lentos"
      ],
      variants: [
        { name: "En silla", for: ["rodilla", "embarazo"], description: "Misma alternancia sentado en el borde de una silla, manos en rodillas." },
        { name: "Rango mínimo", for: ["hernia", "escoliosis"], description: "Solo 20% del rango total. Prioriza la conciencia respiratoria." }
      ]
    },
    en: {
      name: "Cat-Cow", category: "Spine",
      description: "Fundamental spinal mobility drill alternating flexion and extension with the breath.",
      benefits: ["Decompresses lumbar vertebrae", "Activates deep core musculature", "Ideal as a spinal warm-up"],
      steps: [
        "On all fours: wrists under shoulders, knees under hips",
        "COW — inhale: let the belly drop, open the chest, look up",
        "CAT — exhale: round the back, tuck chin to chest",
        "Alternate for 8–10 slow breath cycles"
      ],
      variants: [
        { name: "Seated on chair", for: ["knee", "pregnancy"], description: "Same movement seated at the edge of a chair, hands on knees." },
        { name: "Minimal range", for: ["disc herniation", "scoliosis"], description: "Only 20% of full range. Prioritize breath awareness." }
      ]
    }
  },
  {
    id: 2, icon: "🌀", level: "beginner", duration: 180, color: "#6a9e5b",
    tags: ["lumbar", "sedentario", "estrés", "nocturno", "columna"],
    contraindications: [],
    youtubeId: "hZduN8rruKM",
    es: {
      name: "Torsión Espinal Tumbada", category: "Columna",
      description: "Rotación espinal restauradora que descomprime la columna y relaja la musculatura paravertebral.",
      benefits: ["Movilidad rotacional de columna", "Reduce compresión discal", "Ideal antes de dormir"],
      steps: [
        "Túmbate boca arriba, dobla la rodilla derecha",
        "Con la mano izquierda lleva esa rodilla al suelo hacia la izquierda",
        "Extiende el brazo derecho en T, gira la cabeza a la derecha",
        "Respira profundo y mantén 60–90 segundos. Cambia de lado"
      ],
      variants: [
        { name: "Con cojín entre rodillas", for: ["cadera", "embarazo"], description: "Un cojín entre las rodillas reduce la presión en cadera y sacro." },
        { name: "Torsión sentada", for: ["movilidad limitada"], description: "Sentado con piernas cruzadas, una mano en la rodilla contraria." }
      ]
    },
    en: {
      name: "Supine Spinal Twist", category: "Spine",
      description: "Restorative spinal rotation that decompresses the spine and relaxes paraspinal muscles.",
      benefits: ["Rotational spinal mobility", "Reduces disc compression", "Ideal before sleep"],
      steps: [
        "Lie on your back, bend the right knee",
        "Use the left hand to guide that knee to the floor to the left",
        "Extend the right arm in a T, turn head to the right",
        "Breathe deeply and hold 60–90 seconds. Switch sides"
      ],
      variants: [
        { name: "Pillow between knees", for: ["hip", "pregnancy"], description: "A pillow between the knees reduces pressure on the hip and sacrum." },
        { name: "Seated twist", for: ["limited mobility"], description: "Seated cross-legged, one hand on the opposite knee." }
      ]
    }
  },
  {
    id: 3, icon: "🪑", level: "beginner", duration: 90, color: "#c47c3e",
    tags: ["sedentario", "cifosis", "hombros", "oficina", "columna"],
    contraindications: ["osteoporosis"],
    youtubeId: "IU0zlmXDxTM",
    es: {
      name: "Extensión Torácica en Silla", category: "Columna",
      description: "Contrarresta la postura de escritorio extendiendo la zona torácica sobre el respaldo.",
      benefits: ["Abre zona torácica", "Reduce cifosis postural", "Alivia tensión cervical compensatoria"],
      steps: [
        "Siéntate en una silla dura, espalda recta",
        "Manos detrás de la cabeza, codos hacia afuera",
        "Recuesta suavemente la zona media en el borde superior del respaldo",
        "Mantén 20–30 segundos. Reposiciona en 2–3 vértebras distintas"
      ],
      variants: [
        { name: "Con toalla enrollada", for: ["dolor severo"], description: "Túmbate sobre una toalla enrollada a nivel torácico. Control total." },
        { name: "Foam roller", for: ["mayor rango"], description: "Sobre el foam roller: mayor extensión y puedes rodar toda la zona torácica." }
      ]
    },
    en: {
      name: "Thoracic Extension on Chair", category: "Spine",
      description: "Counteracts desk posture by extending the thoracic spine over the chair back.",
      benefits: ["Opens thoracic spine", "Reduces postural kyphosis", "Relieves compensatory cervical tension"],
      steps: [
        "Sit in a firm chair, back straight",
        "Hands behind the head, elbows out",
        "Gently lean the mid-back over the top edge of the chair back",
        "Hold 20–30 seconds. Reposition at 2–3 different vertebrae"
      ],
      variants: [
        { name: "Rolled towel", for: ["severe pain"], description: "Lie on a rolled towel at thoracic level. Full control." },
        { name: "Foam roller", for: ["greater range"], description: "On the foam roller: more extension and you can roll the entire thoracic zone." }
      ]
    }
  },
  {
    id: 4, icon: "🕊️", level: "intermediate", duration: 180, color: "#7b6fa0",
    tags: ["cadera", "ciático", "corredor", "deportista", "glúteo"],
    contraindications: ["reemplazo_cadera"],
    youtubeId: "kdqyCSW1AN0",
    es: {
      name: "Paloma Tumbada", category: "Cadera",
      description: "Estiramiento profundo del glúteo y rotadores externos de cadera.",
      benefits: ["Libera el piriforme", "Alivia ciática leve", "Mejora rotación externa de cadera"],
      steps: [
        "Túmbate boca arriba, dobla ambas rodillas",
        "Cruza el tobillo derecho sobre la rodilla izquierda (posición número 4)",
        "Agarra la parte posterior del muslo izquierdo con ambas manos",
        "Acerca las piernas al pecho. Mantén 60–90 segundos por lado"
      ],
      variants: [
        { name: "En silla (Figura 4)", for: ["rodilla", "embarazo", "principiante"], description: "Sentado, cruza el tobillo sobre la rodilla opuesta. Inclínate suavemente." },
        { name: "Paloma en suelo", for: ["mayor rango"], description: "Rodilla doblada al frente, pierna trasera extendida. Más intensa." }
      ]
    },
    en: {
      name: "Supine Pigeon", category: "Hip",
      description: "Deep stretch of the glute and external hip rotators.",
      benefits: ["Releases the piriformis", "Relieves mild sciatica", "Improves external hip rotation"],
      steps: [
        "Lie on your back, bend both knees",
        "Cross the right ankle over the left knee (figure-4 position)",
        "Grasp the back of the left thigh with both hands",
        "Draw legs toward chest. Hold 60–90 seconds per side"
      ],
      variants: [
        { name: "Seated figure-4", for: ["knee", "pregnancy", "beginner"], description: "Seated, cross ankle over opposite knee. Lean forward gently." },
        { name: "Floor pigeon", for: ["greater range"], description: "Front knee bent forward, rear leg extended. More intense." }
      ]
    }
  },
  {
    id: 5, icon: "🧎", level: "beginner", duration: 120, color: "#5b8fc4",
    tags: ["sedentario", "psoas", "lumbar", "corredor", "cadera"],
    contraindications: [],
    youtubeId: "mzPvzMivukw",
    es: {
      name: "Flexor de Cadera de Rodillas", category: "Cadera",
      description: "Estira el psoas-ilíaco, acortado por pasar muchas horas sentado o correr.",
      benefits: ["Libera el psoas", "Mejora posición pélvica", "Reduce dolor lumbar anterior"],
      steps: [
        "Arrodíllate: una rodilla en el suelo, la otra pierna adelantada a 90°",
        "Empuja suavemente la cadera hacia adelante manteniendo el torso erguido",
        "Siente el estiramiento en la ingle del lado trasero",
        "Mantén 45–60 segundos por lado. Repite 2 veces"
      ],
      variants: [
        { name: "Con apoyo en silla", for: ["rodilla", "equilibrio"], description: "Apoya la mano en una silla. Protege la rodilla y ayuda al equilibrio." },
        { name: "Con inclinación lateral", for: ["tensión TFL"], description: "Desde la posición base, eleva el brazo trasero y arquéate al lado contrario." }
      ]
    },
    en: {
      name: "Kneeling Hip Flexor Stretch", category: "Hip",
      description: "Stretches the psoas-iliacus, shortened by prolonged sitting or running.",
      benefits: ["Releases the psoas", "Improves pelvic position", "Reduces anterior lumbar pain"],
      steps: [
        "Kneel: one knee on the floor, other leg forward at 90°",
        "Gently push the hip forward keeping the torso upright",
        "Feel the stretch in the groin of the rear side",
        "Hold 45–60 seconds per side. Repeat 2 times"
      ],
      variants: [
        { name: "Chair support", for: ["knee", "balance"], description: "Rest hand on a chair. Protects the knee and helps balance." },
        { name: "Lateral lean", for: ["TFL tightness"], description: "From base position, raise the rear arm and arch to the opposite side." }
      ]
    }
  },
  {
    id: 6, icon: "🔷", level: "intermediate", duration: 180, color: "#7b6fa0",
    tags: ["cadera", "deportista", "corredor", "rotacion", "crossfit", "weightlifting"],
    contraindications: ["reemplazo_cadera"],
    youtubeId: "VYvMMw8z3rE",
    es: {
      name: "Apertura de Cadera 90/90", category: "Cadera",
      description: "Trabaja simultáneamente la rotación interna y externa de cadera.",
      benefits: ["Movilidad completa de cadera", "Equilibra rotadores internos y externos", "Previene lesiones de rodilla"],
      steps: [
        "Siéntate: pierna derecha a 90° al frente, pierna izquierda a 90° al lado",
        "Torso erguido, caderas en el suelo (o lo más cerca posible)",
        "Inclínate sobre la pierna delantera 30 segundos",
        "Transición al otro lado sin levantar las caderas. 3 series"
      ],
      variants: [
        { name: "Con apoyo de manos", for: ["principiante", "cadera rígida"], description: "Apoya las manos detrás para aliviar tensión y mantener la posición." },
        { name: "Rotación activa", for: ["avanzado"], description: "Alterna entre lados sin pausa, controlando la transición." }
      ]
    },
    en: {
      name: "90/90 Hip Stretch", category: "Hip",
      description: "Works internal and external hip rotation simultaneously.",
      benefits: ["Full hip mobility", "Balances internal and external rotators", "Prevents knee injuries"],
      steps: [
        "Sit: right leg at 90° in front, left leg at 90° to the side",
        "Torso upright, hips on the floor (or as close as possible)",
        "Lean over the front leg for 30 seconds",
        "Transition to the other side without lifting hips. 3 sets"
      ],
      variants: [
        { name: "Hands behind for support", for: ["beginner", "stiff hips"], description: "Rest hands behind to relieve tension and hold the position." },
        { name: "Active rotation", for: ["advanced"], description: "Alternate sides without pausing, controlling the transition." }
      ]
    }
  },
  {
    id: 7, icon: "🦋", level: "beginner", duration: 120, color: "#b05c6e",
    tags: ["cadera", "ingle", "embarazo", "sedentario", "principiante"],
    contraindications: [],
    youtubeId: "cjFTsl5sG5E",
    es: {
      name: "Mariposa", category: "Cadera",
      description: "Abre la zona interna de la cadera y estira los aductores suavemente.",
      benefits: ["Estira aductores y obturador", "Mejora apertura de cadera", "Relajante para el suelo pélvico"],
      steps: [
        "Siéntate, junta las plantas de los pies frente a ti",
        "Acerca los talones a la pelvis según tu comodidad",
        "Deja caer las rodillas por su propio peso, sin empujar",
        "Inclínate suavemente hacia adelante con la espalda recta. 60–90 segundos"
      ],
      variants: [
        { name: "Con espalda en pared", for: ["lumbar", "principiante"], description: "Apoya la espalda en la pared para mantener la columna recta." },
        { name: "Tumbado boca arriba", for: ["embarazo", "mayor comodidad"], description: "La gravedad hace el trabajo sin comprimir el abdomen." }
      ]
    },
    en: {
      name: "Butterfly Stretch", category: "Hip",
      description: "Opens the inner hip and gently stretches the adductors.",
      benefits: ["Stretches adductors and obturator", "Improves hip opening", "Relaxing for the pelvic floor"],
      steps: [
        "Sit, bring the soles of your feet together in front of you",
        "Draw heels toward the pelvis to your comfort level",
        "Let knees fall by their own weight, don't push",
        "Gently lean forward with a straight back. 60–90 seconds"
      ],
      variants: [
        { name: "Back against wall", for: ["low back", "beginner"], description: "Rest your back against the wall to keep the spine straight." },
        { name: "Lying on your back", for: ["pregnancy", "more comfort"], description: "Gravity does the work without compressing the abdomen." }
      ]
    }
  },
  {
    id: 8, icon: "⭕", level: "beginner", duration: 90, color: "#5b8fc4",
    tags: ["calentamiento", "sedentario", "oficina", "lumbar", "cadera"],
    contraindications: [],
    youtubeId: "m_l9DCL2zL0",
    es: {
      name: "Círculos de Cadera de Pie", category: "Cadera",
      description: "Movilización articular circular que lubrica la articulación de la cadera activamente.",
      benefits: ["Activa líquido sinovial", "Mejora propiocepción pélvica", "Excelente calentamiento dinámico"],
      steps: [
        "De pie, pies al ancho de caderas, manos en caderas",
        "Inicia círculos amplios en sentido horario, 8 veces",
        "Cambia al sentido antihorario, 8 veces",
        "Aumenta el radio progresivamente. 2–3 series"
      ],
      variants: [
        { name: "Con apoyo en silla", for: ["equilibrio", "vértigo"], description: "Apoya una mano en el respaldo. Igual de efectivo con más estabilidad." },
        { name: "Semicírculos", for: ["cadera severa", "prótesis"], description: "Solo la mitad del arco. Evita los rangos extremos." }
      ]
    },
    en: {
      name: "Standing Hip Circles", category: "Hip",
      description: "Circular joint mobilization that actively lubricates the hip joint.",
      benefits: ["Activates synovial fluid", "Improves pelvic proprioception", "Excellent dynamic warm-up"],
      steps: [
        "Stand with feet hip-width apart, hands on hips",
        "Draw large circles clockwise, 8 times",
        "Switch to counterclockwise, 8 times",
        "Progressively increase the radius. 2–3 sets"
      ],
      variants: [
        { name: "Chair support", for: ["balance", "vertigo"], description: "Rest one hand on the chair back. Equally effective with more stability." },
        { name: "Semicircles", for: ["severe hip", "prosthesis"], description: "Only half the arc. Avoids extreme ranges." }
      ]
    }
  },
  {
    id: 9, icon: "🦅", level: "beginner", duration: 90, color: "#c47c3e",
    tags: ["sedentario", "cifosis", "oficina", "hombros", "pecho"],
    contraindications: ["manguito_severo"],
    youtubeId: "WpXpM_h3f5M",
    es: {
      name: "Apertura de Pecho", category: "Hombros",
      description: "Estira los pectorales y bíceps, acortados por el uso del ordenador.",
      benefits: ["Abre el pecho", "Libera tensión pectoral", "Mejora postura sagital"],
      steps: [
        "De pie o sentado, lleva los brazos hacia atrás",
        "Entrelaza los dedos detrás de la espalda o junta las palmas",
        "Levanta los brazos levemente mientras sacas el pecho hacia adelante",
        "Mantén 30 segundos con respiración profunda. Repite 3 veces"
      ],
      variants: [
        { name: "Con toalla o banda", for: ["hombros rígidos", "manguito"], description: "Sujeta una toalla con ambas manos separadas. Reduce estrés articular." },
        { name: "En marco de puerta", for: ["mayor intensidad"], description: "Antebrazo en el marco, gira el cuerpo al lado contrario." }
      ]
    },
    en: {
      name: "Chest Opener", category: "Shoulders",
      description: "Stretches pectorals and biceps, shortened by computer use.",
      benefits: ["Opens the chest", "Releases pectoral tension", "Improves sagittal posture"],
      steps: [
        "Standing or seated, draw arms behind you",
        "Interlace fingers behind the back or press palms together",
        "Gently lift arms while pushing the chest forward",
        "Hold 30 seconds with deep breathing. Repeat 3 times"
      ],
      variants: [
        { name: "With towel or band", for: ["stiff shoulders", "rotator cuff"], description: "Hold a towel with both hands apart. Reduces joint stress." },
        { name: "In door frame", for: ["greater intensity"], description: "Forearm on the frame, rotate the body to the opposite side." }
      ]
    }
  },
  {
    id: 10, icon: "🔄", level: "intermediate", duration: 120, color: "#5ba888",
    tags: ["hombros", "deportista", "manguito", "nadador"],
    contraindications: ["luxacion_reciente"],
    youtubeId: "9BN8bRVq3Xo",
    es: {
      name: "Rotación Interna de Hombro", category: "Hombros",
      description: "Moviliza la cápsula posterior del hombro, muy restringida en deportistas.",
      benefits: ["Libera cápsula posterior", "Previene lesiones de manguito", "Mejora overhead en deportes"],
      steps: [
        "Túmbate de lado derecho, hombro derecho en el suelo, codo a 90°",
        "Con la mano izquierda empuja suavemente la muñeca derecha hacia el suelo",
        "Siente el estiramiento en la parte posterior del hombro",
        "Mantén 30–45 segundos. Cambia. 2–3 series"
      ],
      variants: [
        { name: "De pie en pared", for: ["dificultad en suelo", "embarazo"], description: "Coloca el antebrazo en la pared y rota el cuerpo alejándolo." },
        { name: "Rango reducido", for: ["dolor agudo de hombro"], description: "Para donde empieces a notar tensión, sin llegar al dolor." }
      ]
    },
    en: {
      name: "Sleeper Stretch", category: "Shoulders",
      description: "Mobilizes the posterior shoulder capsule, very restricted in athletes.",
      benefits: ["Releases posterior capsule", "Prevents rotator cuff injuries", "Improves overhead in sports"],
      steps: [
        "Lie on your right side, right shoulder on the floor, elbow at 90°",
        "Use the left hand to gently push the right wrist toward the floor",
        "Feel the stretch in the back of the shoulder",
        "Hold 30–45 seconds. Switch. 2–3 sets"
      ],
      variants: [
        { name: "Standing at wall", for: ["difficulty on floor", "pregnancy"], description: "Place forearm on the wall and rotate body away from it." },
        { name: "Reduced range", for: ["acute shoulder pain"], description: "Stop where you first feel tension, before pain." }
      ]
    }
  },
  {
    id: 11, icon: "↔️", level: "beginner", duration: 60, color: "#b05c6e",
    tags: ["cuello", "sedentario", "cefalea", "oficina", "estrés", "trapecio"],
    contraindications: [],
    youtubeId: "t-1Z2ZYpmt0",
    es: {
      name: "Inclinación Lateral de Cuello", category: "Cuello",
      description: "Estira el escaleno y el trapecio superior, crónicamente tensos en usuarios de pantallas.",
      benefits: ["Reduce cefaleas tensionales", "Libera trapecio superior", "Alivia tensión cervical lateral"],
      steps: [
        "Sentado o de pie, espalda recta y hombros relajados",
        "Inclina la oreja derecha hacia el hombro derecho (sin subir el hombro)",
        "Para cuando notes el estiramiento lateral izquierdo del cuello",
        "Mantén 30–45 segundos por lado. Repite 2 veces"
      ],
      variants: [
        { name: "Con mano de asistencia", for: ["tensión severa"], description: "Apoya la mano del mismo lado en la cabeza. Sin tirar, solo peso suave." },
        { name: "Solo respiración", for: ["hernia cervical"], description: "Sin movimiento: solo respira y observa la movilidad que genera la respiración." }
      ]
    },
    en: {
      name: "Neck Lateral Flexion", category: "Neck",
      description: "Stretches the scalene and upper trapezius, chronically tight in screen users.",
      benefits: ["Reduces tension headaches", "Releases upper trapezius", "Relieves lateral cervical tension"],
      steps: [
        "Seated or standing, back straight and shoulders relaxed",
        "Tilt the right ear toward the right shoulder (don't lift the shoulder)",
        "Stop when you feel the stretch on the left side of the neck",
        "Hold 30–45 seconds per side. Repeat 2 times"
      ],
      variants: [
        { name: "Assisted with hand", for: ["severe tension"], description: "Rest the same-side hand on the head. No pulling, just gentle weight." },
        { name: "Breath only", for: ["cervical herniation"], description: "No movement: just breathe and observe the mobility the breath creates." }
      ]
    }
  },
  {
    id: 12, icon: "🫅", level: "beginner", duration: 60, color: "#5b8fc4",
    tags: ["cuello", "sedentario", "oficina", "hernia_cervical", "postura"],
    contraindications: [],
    youtubeId: "vhFGQxDVzF8",
    es: {
      name: "Chin Tuck", category: "Cuello",
      description: "Corrige la posición adelantada de la cabeza reactivando los flexores cervicales profundos.",
      benefits: ["Corrige postura de cabeza adelantada", "Activa musculatura cervical profunda", "Reduce presión discal cervical"],
      steps: [
        "Sentado, mira al frente. Coloca un dedo sobre la barbilla",
        "Sin mover el dedo, desliza la barbilla hacia atrás (haciendo papada)",
        "Siente el alargamiento de la parte posterior del cuello",
        "Mantén 5 segundos, vuelve. Repite 10–15 veces"
      ],
      variants: [
        { name: "Tumbado boca arriba", for: ["dolor agudo", "vértigo"], description: "Aplana suavemente la nuca contra el suelo. Sin gravedad postural." },
        { name: "En pared", for: ["referencia postural"], description: "Espalda en la pared como feedback táctil de la posición correcta." }
      ]
    },
    en: {
      name: "Chin Tuck", category: "Neck",
      description: "Corrects forward head position by reactivating deep cervical flexors.",
      benefits: ["Corrects forward head posture", "Activates deep cervical musculature", "Reduces cervical disc pressure"],
      steps: [
        "Seated, look forward. Place one finger on the chin",
        "Without moving the finger, slide the chin backward (making a double chin)",
        "Feel the lengthening at the back of the neck",
        "Hold 5 seconds, return. Repeat 10–15 times"
      ],
      variants: [
        { name: "Lying on back", for: ["acute pain", "vertigo"], description: "Gently flatten the back of the neck against the floor. No postural gravity." },
        { name: "Against wall", for: ["postural reference"], description: "Back against the wall as tactile feedback for the correct position." }
      ]
    }
  },
  {
    id: 13, icon: "👀", level: "beginner", duration: 60, color: "#6a9e5b",
    tags: ["cuello", "movilidad_activa", "oficina", "sedentario"],
    contraindications: ["vértigo_severo"],
    youtubeId: "PruXF-NE2zI",
    es: {
      name: "Rotación Cervical Activa", category: "Cuello",
      description: "Mantiene el rango de rotación cervical, esencial para la vida diaria.",
      benefits: ["Preserva rotación cervical", "Reduce riesgo de tortícolis", "Mejora alerta situacional"],
      steps: [
        "Sentado, espalda recta, mentón ligeramente recogido",
        "Gira lentamente la cabeza hacia la derecha hasta el límite confortable",
        "Mantén 5 segundos, vuelve al centro",
        "Repite al lado izquierdo. 5 veces por lado"
      ],
      variants: [
        { name: "Rango reducido", for: ["artrosis cervical", "mareo"], description: "Gira solo 30–40° en lugar del rango completo. Nunca hasta el dolor." },
        { name: "Con resistencia manual", for: ["fortalecimiento"], description: "Palma en la sien, ofrece resistencia suave al girar. Isométrico cervical." }
      ]
    },
    en: {
      name: "Active Cervical Rotation", category: "Neck",
      description: "Maintains cervical rotation range, essential for daily life.",
      benefits: ["Preserves cervical rotation", "Reduces torticollis risk", "Improves situational awareness"],
      steps: [
        "Seated, back straight, chin slightly tucked",
        "Slowly turn the head to the right to the comfortable limit",
        "Hold 5 seconds, return to center",
        "Repeat to the left side. 5 times per side"
      ],
      variants: [
        { name: "Reduced range", for: ["cervical arthritis", "dizziness"], description: "Rotate only 30–40° instead of full range. Never into pain." },
        { name: "Manual resistance", for: ["strengthening"], description: "Palm on temple, provide gentle resistance while rotating. Isometric cervical." }
      ]
    }
  },
  {
    id: 14, icon: "⭕", level: "beginner", duration: 90, color: "#5ba888",
    tags: ["tobillo", "sedentario", "oficina", "calentamiento", "embarazo", "circulacion"],
    contraindications: [],
    youtubeId: "mzTQGYGI0Ng",
    es: {
      name: "Círculos de Tobillo", category: "Tobillo y Pie",
      description: "Movilización articular del tobillo que previene rigidez y mejora la circulación.",
      benefits: ["Lubrica la articulación del tobillo", "Previene edema en piernas", "Fundamental pre/post carrera"],
      steps: [
        "Sentado o tumbado, eleva una pierna ligeramente",
        "Círculos amplios con el pie, solo el tobillo se mueve",
        "10 círculos horario, 10 antihorario",
        "Cambia de pie. Repite 2 veces"
      ],
      variants: [
        { name: "De pie con apoyo", for: ["equilibrio"], description: "Apoya una mano en la pared. Eleva el pie y haz los círculos de pie." },
        { name: "Escritura del alfabeto", for: ["rehabilitación"], description: "Escribe el abecedario con el pie. Trabaja todos los rangos posibles." }
      ]
    },
    en: {
      name: "Ankle Circles", category: "Ankle & Foot",
      description: "Ankle joint mobilization that prevents stiffness and improves circulation.",
      benefits: ["Lubricates the ankle joint", "Prevents leg edema", "Essential pre/post running"],
      steps: [
        "Seated or lying down, lift one leg slightly",
        "Draw large circles with the foot, only the ankle moves",
        "10 clockwise, 10 counterclockwise",
        "Switch foot. Repeat 2 times"
      ],
      variants: [
        { name: "Standing with support", for: ["balance"], description: "Rest one hand on the wall. Lift the foot and do circles standing." },
        { name: "Alphabet writing", for: ["rehabilitation"], description: "Write the alphabet with your foot. Works all possible ranges." }
      ]
    }
  },
  {
    id: 15, icon: "🧱", level: "beginner", duration: 120, color: "#c47c3e",
    tags: ["tobillo", "corredor", "plantar", "pantorrilla", "deportista"],
    contraindications: [],
    youtubeId: "kVnp2-YH3k4",
    es: {
      name: "Estiramiento de Pantorrilla", category: "Tobillo y Pie",
      description: "Estira gastrocnemio y sóleo, clave para la fascitis plantar y lesiones de Aquiles.",
      benefits: ["Previene fascitis plantar", "Alivia tensión en Aquiles", "Mejora flexión dorsal del tobillo"],
      steps: [
        "De pie frente a una pared, manos a la altura del pecho",
        "Pie izquierdo adelantado, pie derecho atrás con el talón pegado al suelo",
        "Dobla la rodilla delantera hasta sentir el estiramiento en la pantorrilla trasera",
        "Para el sóleo: dobla también la rodilla trasera. 45 segundos por lado"
      ],
      variants: [
        { name: "En escalón", for: ["mayor intensidad", "corredor"], description: "Antepié en el escalón, deja caer el talón. Más profundo y funcional." },
        { name: "Con banda sentado", for: ["lesión Aquiles"], description: "Sentado, pasa una banda por la planta y tira hacia ti. Sin carga articular." }
      ]
    },
    en: {
      name: "Calf Stretch", category: "Ankle & Foot",
      description: "Stretches the gastrocnemius and soleus, key for plantar fasciitis and Achilles injuries.",
      benefits: ["Prevents plantar fasciitis", "Relieves Achilles tension", "Improves ankle dorsiflexion"],
      steps: [
        "Stand facing a wall, hands at chest height",
        "Left foot forward, right foot back with heel flat on the floor",
        "Bend the front knee until you feel the stretch in the rear calf",
        "For soleus: also bend the rear knee. 45 seconds per side"
      ],
      variants: [
        { name: "On a step", for: ["greater intensity", "runner"], description: "Forefoot on the step, let the heel drop. Deeper and more functional." },
        { name: "Seated with band", for: ["Achilles injury"], description: "Seated, loop a band around the sole and pull toward you. No joint loading." }
      ]
    }
  },
  {
    id: 16, icon: "🖐️", level: "beginner", duration: 60, color: "#5b8fc4",
    tags: ["muñeca", "sedentario", "oficina", "tunel_carpiano", "teclado"],
    contraindications: ["tunel_carpiano_agudo"],
    youtubeId: "i-JV2PsFzWA",
    es: {
      name: "Estiramiento de Muñeca", category: "Muñeca",
      description: "Estira los flexores del antebrazo, crónicamente tensos en usuarios de teclado.",
      benefits: ["Previene síndrome del túnel carpiano", "Libera tensión en antebrazo", "Reduce hormigueos en mano"],
      steps: [
        "Extiende el brazo derecho al frente, palma mirando hacia afuera",
        "Con la mano izquierda tira de los dedos hacia atrás",
        "Siente el estiramiento en la cara interna del antebrazo",
        "Mantén 30 segundos por lado. Repite 3 veces"
      ],
      variants: [
        { name: "En mesa", for: ["dolor agudo"], description: "Dorso de la mano en la mesa, deja que el peso del brazo haga el estiramiento." },
        { name: "Flexores y extensores", for: ["uso intensivo"], description: "Alterna palma arriba (flexores) y palma abajo (extensores)." }
      ]
    },
    en: {
      name: "Wrist Flexor Stretch", category: "Wrist",
      description: "Stretches forearm flexors, chronically tight in keyboard users.",
      benefits: ["Prevents carpal tunnel syndrome", "Releases forearm tension", "Reduces hand tingling"],
      steps: [
        "Extend the right arm forward, palm facing outward",
        "Use the left hand to pull the fingers back",
        "Feel the stretch on the inner forearm",
        "Hold 30 seconds per side. Repeat 3 times"
      ],
      variants: [
        { name: "On a table", for: ["acute pain"], description: "Back of hand on the table, let the arm's weight do the stretching." },
        { name: "Flexors and extensors", for: ["heavy use"], description: "Alternate palm up (flexors) and palm down (extensors)." }
      ]
    }
  },
  {
    id: 17, icon: "🦵", level: "beginner", duration: 120, color: "#6a9e5b",
    tags: ["isquiotibiales", "lumbar", "corredor", "sedentario", "cadena_posterior"],
    contraindications: [],
    youtubeId: "Il1L75v6gq0",
    es: {
      name: "Isquiotibiales Tumbado", category: "Cadena Posterior",
      description: "Estira la musculatura isquiotibial sin comprometer la lumbar.",
      benefits: ["Mejora extensión de rodilla", "Reduce tensión lumbar", "Previene lesiones del muslo posterior"],
      steps: [
        "Túmbate boca arriba, dobla la rodilla derecha con el pie en el suelo",
        "Eleva la pierna izquierda y agarra la parte posterior del muslo",
        "Estira la rodilla izquierda suavemente hasta sentir tensión",
        "Mantén 45–60 segundos por lado. La espalda permanece plana"
      ],
      variants: [
        { name: "Con banda o toalla", for: ["poco alcance", "embarazo"], description: "Pasa una banda por la planta del pie y tira de los extremos." },
        { name: "De pie en silla", for: ["dificultad en suelo"], description: "Talón en el asiento de una silla, espalda recta, inclínate ligeramente." }
      ]
    },
    en: {
      name: "Supine Hamstring Stretch", category: "Posterior Chain",
      description: "Stretches the hamstrings without compromising the lower back.",
      benefits: ["Improves knee extension", "Reduces lumbar tension", "Prevents posterior thigh injuries"],
      steps: [
        "Lie on your back, bend the right knee with the foot on the floor",
        "Raise the left leg and grasp the back of the thigh",
        "Gently straighten the left knee until you feel tension",
        "Hold 45–60 seconds per side. Back stays flat"
      ],
      variants: [
        { name: "With band or towel", for: ["limited reach", "pregnancy"], description: "Loop a band around the sole and pull the ends toward you." },
        { name: "Standing at chair", for: ["difficulty on floor"], description: "Heel on the chair seat, straight back, lean slightly forward." }
      ]
    }
  },
  {
    id: 18, icon: "🐕", level: "beginner", duration: 90, color: "#c47c3e",
    tags: ["cadena_posterior", "calentamiento", "hombros", "isquiotibiales", "yoga"],
    contraindications: ["tunel_carpiano_severo"],
    youtubeId: "Y0GDgQqt-bA",
    es: {
      name: "Perro Boca Abajo", category: "Cadena Posterior",
      description: "Postura global que estira simultáneamente la cadena posterior completa y los hombros.",
      benefits: ["Estiramiento global de cadena posterior", "Descompresión espinal activa", "Fortalece hombros en posición de carga"],
      steps: [
        "Desde cuatro patas, empuja las manos contra el suelo y eleva las caderas",
        "Intenta estirar las rodillas y apoyar los talones",
        "La cabeza queda entre los brazos, mirada hacia los pies",
        "Alterna doblar una rodilla y luego la otra (pedalear). 30–60 segundos"
      ],
      variants: [
        { name: "Con rodillas dobladas", for: ["isquiotibiales cortos", "principiante"], description: "Mantén las rodillas dobladas. Objetivo: elongación espinal, no tocar el suelo." },
        { name: "En mesa o silla", for: ["muñecas débiles", "embarazo avanzado"], description: "Apoya las manos en el asiento de una silla. Reduce carga en muñecas." }
      ]
    },
    en: {
      name: "Downward Dog", category: "Posterior Chain",
      description: "Global posture that simultaneously stretches the entire posterior chain and shoulders.",
      benefits: ["Full posterior chain stretch", "Active spinal decompression", "Strengthens shoulders in a loaded position"],
      steps: [
        "From all fours, push hands into the floor and lift the hips",
        "Try to straighten the knees and press heels down",
        "Head between arms, gaze toward the feet",
        "Alternate bending one knee then the other (pedaling). 30–60 seconds"
      ],
      variants: [
        { name: "Knees bent", for: ["short hamstrings", "beginner"], description: "Keep knees bent. Goal: spinal lengthening, not touching the floor." },
        { name: "Hands on chair", for: ["weak wrists", "late pregnancy"], description: "Rest hands on a chair seat. Reduces wrist load." }
      ]
    }
  },
  {
    id: 19, icon: "🏃", level: "intermediate", duration: 120, color: "#7b6fa0",
    tags: ["TFL", "corredor", "lateral_rodilla", "deportista", "cadera"],
    contraindications: [],
    youtubeId: "x8wbFjIMFL4",
    es: {
      name: "Banda Iliotibial", category: "Cadena Posterior",
      description: "Aborda la banda IT, fuente frecuente de dolor lateral de rodilla en corredores.",
      benefits: ["Previene síndrome de la banda IT", "Reduce dolor lateral de rodilla", "Mejora biomecánica de la carrera"],
      steps: [
        "De pie, cruza la pierna derecha por detrás de la izquierda",
        "Inclínate hacia la izquierda extendiendo el brazo derecho sobre la cabeza",
        "Siente el estiramiento en el lateral externo del muslo derecho",
        "Mantén 45 segundos. Cambia. Repite 2 veces"
      ],
      variants: [
        { name: "Foam roller", for: ["corredor habitual", "mayor intensidad"], description: "Foam roller bajo el lateral del muslo, rueda de cadera a rodilla." },
        { name: "Con apoyo", for: ["equilibrio"], description: "Apoya una mano en la pared para mayor estabilidad." }
      ]
    },
    en: {
      name: "IT Band Stretch", category: "Posterior Chain",
      description: "Targets the IT band, a frequent source of lateral knee pain in runners.",
      benefits: ["Prevents IT band syndrome", "Reduces lateral knee pain", "Improves running biomechanics"],
      steps: [
        "Stand, cross the right leg behind the left",
        "Lean to the left, extending the right arm overhead",
        "Feel the stretch on the outer right thigh",
        "Hold 45 seconds. Switch. Repeat 2 times"
      ],
      variants: [
        { name: "Foam roller", for: ["regular runner", "greater intensity"], description: "Foam roller under the outer thigh, roll from hip to knee." },
        { name: "With support", for: ["balance"], description: "Rest one hand on the wall for more stability." }
      ]
    }
  },
  {
    id: 20, icon: "🫁", level: "beginner", duration: 180, color: "#5ba888",
    tags: ["estrés", "lumbar", "sedentario", "principiante", "nocturno", "core"],
    contraindications: [],
    youtubeId: "9jpchJcKivk",
    es: {
      name: "Respiración Diafragmática", category: "Columna",
      description: "Activa el diafragma y relaja el sistema nervioso. Base de cualquier programa de movilidad.",
      benefits: ["Activa el core profundo", "Regula el sistema nervioso", "Reduce tensión en psoas"],
      steps: [
        "Túmbate boca arriba, rodillas dobladas. Una mano en el pecho, otra en el abdomen",
        "Inhala lentamente por la nariz: la mano del abdomen debe subir, la del pecho quieta",
        "Exhala por la boca o la nariz, dejando caer el abdomen completamente",
        "5–10 respiraciones lentas. 4 segundos inhala, 6 segundos exhala"
      ],
      variants: [
        { name: "Sentado", for: ["embarazo avanzado", "oficina"], description: "Misma técnica sentado en una silla. Ideal para pausas en el trabajo." },
        { name: "Con peso", for: ["avanzado"], description: "Coloca un libro en el abdomen. El peso añade retroalimentación táctil." }
      ]
    },
    en: {
      name: "Diaphragmatic Breathing", category: "Spine",
      description: "Activates the diaphragm and relaxes the nervous system. Foundation of any mobility program.",
      benefits: ["Activates deep core", "Regulates the nervous system", "Reduces psoas tension"],
      steps: [
        "Lie on your back, knees bent. One hand on chest, one on abdomen",
        "Inhale slowly through the nose: the belly hand rises, chest hand stays still",
        "Exhale through the mouth or nose, letting the abdomen fully drop",
        "5–10 slow breaths. 4 seconds inhale, 6 seconds exhale"
      ],
      variants: [
        { name: "Seated", for: ["late pregnancy", "office"], description: "Same technique seated in a chair. Ideal for work breaks." },
        { name: "With weight", for: ["advanced"], description: "Place a book on the abdomen. The weight adds tactile feedback." }
      ]
    }
  },
  {
    id: 21, icon: "🦶", level: "beginner", duration: 60, color: "#7b6fa0",
    tags: ["tobillo", "sedentario", "oficina", "circulacion", "embarazo"],
    contraindications: [],
    youtubeId: "mzTQGYGI0Ng",
    es: {
      name: "Flexión Plantar y Dorsal", category: "Tobillo y Pie",
      description: "Movilización activa del tobillo para activar la circulación en períodos de sedestación.",
      benefits: ["Activa la bomba muscular venosa", "Reduce riesgo de trombosis en vuelos", "Movilización sin levantarse"],
      steps: [
        "Sentado, pies apoyados en el suelo",
        "Levanta las puntas de los pies manteniendo los talones en el suelo",
        "Baja las puntas y levanta los talones",
        "Alterna rítmicamente durante 60–90 segundos"
      ],
      variants: [
        { name: "Solo un pie", for: ["asimetría", "rehabilitación"], description: "Trabaja un tobillo cada vez para detectar diferencias entre lados." },
        { name: "Con banda", for: ["fortalecimiento"], description: "Añade resistencia con una banda elástica." }
      ]
    },
    en: {
      name: "Ankle Pumps", category: "Ankle & Foot",
      description: "Active ankle mobilization to boost circulation during prolonged sitting.",
      benefits: ["Activates venous muscle pump", "Reduces DVT risk on flights", "Mobilization without standing"],
      steps: [
        "Seated, feet resting on the floor",
        "Lift the toes keeping heels on the floor",
        "Lower the toes and lift the heels",
        "Alternate rhythmically for 60–90 seconds"
      ],
      variants: [
        { name: "One foot at a time", for: ["asymmetry", "rehabilitation"], description: "Work one ankle at a time to detect side differences." },
        { name: "With resistance band", for: ["strengthening"], description: "Add resistance with an elastic band." }
      ]
    }
  },
  {
    id: 22, icon: "🙌", level: "beginner", duration: 90, color: "#7b6fa0",
    tags: ["hombros", "sedentario", "movilidad_activa", "postura"],
    contraindications: [],
    youtubeId: "pqChOpLBR-U",
    es: {
      name: "Elevación de Brazos Overhead", category: "Hombros",
      description: "Trabaja el rango activo de elevación del hombro, clave para la vida diaria.",
      benefits: ["Mejora flexión de hombro", "Activa serrato anterior y trapecio inferior", "Evalúa asimetrías"],
      steps: [
        "De pie o sentado, espalda recta contra la pared si es posible",
        "Eleva lentamente ambos brazos hacia arriba (palmas mirándose)",
        "Intenta que los brazos queden pegados a las orejas al final",
        "Baja lentamente. 10 repeticiones lentas y controladas"
      ],
      variants: [
        { name: "Un brazo con asistencia", for: ["asimetría", "dolor unilateral"], description: "El brazo sano ayuda al lesionado. Permite trabajar diferencias entre lados." },
        { name: "Tumbado boca arriba", for: ["dolor postural"], description: "Elimina la gravedad postural. Más fácil de ejecutar con técnica limpia." }
      ]
    },
    en: {
      name: "Overhead Arm Raises", category: "Shoulders",
      description: "Works the active shoulder elevation range, key for daily life.",
      benefits: ["Improves shoulder flexion", "Activates serratus anterior and lower trapezius", "Identifies asymmetries"],
      steps: [
        "Standing or seated, back straight against the wall if possible",
        "Slowly raise both arms overhead (palms facing each other)",
        "Try to get arms against the ears at the top",
        "Lower slowly. 10 slow, controlled repetitions"
      ],
      variants: [
        { name: "One arm with assistance", for: ["asymmetry", "unilateral pain"], description: "The healthy arm helps the injured one. Identifies side differences." },
        { name: "Lying on back", for: ["postural pain"], description: "Eliminates postural gravity. Easier to execute with clean technique." }
      ]
    }
  },
  {
    id: 23, icon: "📐", level: "intermediate", duration: 120, color: "#5ba888",
    tags: ["lumbar", "lateral", "corredor", "deportista", "columna"],
    contraindications: [],
    youtubeId: "sJCR9AZNjjY",
    es: {
      name: "Cuadrado Lumbar Lateral", category: "Columna",
      description: "Estira el cuadrado lumbar, músculo clave en el dolor de espalda baja lateral.",
      benefits: ["Libera tensión lateral lumbar", "Mejora simetría pélvica", "Previene dolor unilateral de espalda"],
      steps: [
        "Túmbate boca arriba, rodillas dobladas",
        "Desplaza ambas piernas juntas hacia la derecha, el torso estático",
        "Siente el estiramiento en el lateral izquierdo de la espalda",
        "Mantén 30–45 segundos. Cambia de lado"
      ],
      variants: [
        { name: "De pie en marco de puerta", for: ["dificultad en suelo"], description: "Agarra el marco con una mano, deja caer el cuerpo al lado contrario en arco." },
        { name: "Sentado con inclinación", for: ["oficina"], description: "Sentado, eleva un brazo sobre la cabeza e inclínate al lado contrario." }
      ]
    },
    en: {
      name: "Quadratus Lumborum Stretch", category: "Spine",
      description: "Stretches the quadratus lumborum, a key muscle in lateral lower back pain.",
      benefits: ["Releases lateral lumbar tension", "Improves pelvic symmetry", "Prevents unilateral back pain"],
      steps: [
        "Lie on your back, knees bent",
        "Shift both legs together to the right, torso stays still",
        "Feel the stretch on the left side of the back",
        "Hold 30–45 seconds. Switch sides"
      ],
      variants: [
        { name: "Standing at door frame", for: ["difficulty on floor"], description: "Grip the frame with one hand, let the body arc to the opposite side." },
        { name: "Seated side lean", for: ["office"], description: "Seated, raise one arm overhead and lean to the opposite side." }
      ]
    }
  },

  // ─── CROSSFIT / WEIGHTLIFTING ─────────────────────────────────────────────
  {
    id: 24, icon: "🦶", level: "beginner", duration: 90, color: "#5ba888",
    tags: ["crossfit", "weightlifting", "tobillo", "squat", "corredor", "deportista"],
    contraindications: [],
    youtubeId: "77iX2a1BqOk",
    es: {
      name: "Dorsiflexión de Tobillo", category: "CrossFit",
      description: "Aumenta el rango de dorsiflexión necesario para alcanzar profundidad en la sentadilla olímpica.",
      benefits: ["Mejora profundidad de sentadilla", "Reduce compensación lumbar en squat", "Previene lesiones de rodilla en cargas"],
      steps: [
        "De pie frente a la pared, dedo gordo a ~5 cm del zócalo",
        "Dobla la rodilla intentando tocar la pared sin levantar el talón",
        "Si tocas, aleja 1–2 cm el pie y repite",
        "10 reps por lado. Avanza el pie progresivamente"
      ],
      variants: [
        { name: "Con elevación de talón", for: ["movilidad muy limitada"], description: "Coloca una placa de 5–10 mm bajo el talón mientras trabajas la profundidad." },
        { name: "Con banda de resistencia", for: ["tobillo rígido", "historial de esguinces"], description: "Banda en el tobillo tirando hacia atrás: moviliza la articulación tibio-astragalina." }
      ]
    },
    en: {
      name: "Ankle Dorsiflexion", category: "CrossFit",
      description: "Increases dorsiflexion range needed to reach depth in the Olympic squat.",
      benefits: ["Improves squat depth", "Reduces lumbar compensation in squat", "Prevents knee injuries under load"],
      steps: [
        "Stand facing a wall, big toe ~2 inches from the baseboard",
        "Bend the knee trying to touch the wall without lifting the heel",
        "If you touch it, move the foot back 1–2 cm and repeat",
        "10 reps per side. Progressively move the foot back"
      ],
      variants: [
        { name: "Heel elevated", for: ["very limited mobility"], description: "Place a 5–10 mm plate under the heel while working on depth." },
        { name: "With resistance band", for: ["stiff ankle", "sprain history"], description: "Band on ankle pulling backward: mobilizes the talocrural joint." }
      ]
    }
  },
  {
    id: 25, icon: "🏋️", level: "intermediate", duration: 120, color: "#c47c3e",
    tags: ["crossfit", "weightlifting", "muñeca", "hombros", "rack", "codo"],
    contraindications: [],
    youtubeId: "mlvzUiqP29I",
    es: {
      name: "Posición de Rack Frontal", category: "CrossFit",
      description: "Trabaja la movilidad de muñeca, codo y hombro necesaria para la cargada y la sentadilla frontal.",
      benefits: ["Mejora posición de rack en clean & jerk", "Reduce estrés en muñecas con barras cargadas", "Previene codo de halterófilo"],
      steps: [
        "De pie, extiende un brazo al frente a la altura del hombro",
        "Gira el codo hacia arriba (supinación completa) y eleva el codo",
        "Mantén la muñeca recta — el dorso de la mano mira al techo",
        "Aguanta 20–30 segundos por lado. 3 series"
      ],
      variants: [
        { name: "Con barra PVC", for: ["principiante", "postura de referencia"], description: "Usa una barra ligera para practicar la posición con feedback inmediato." },
        { name: "Estiramiento en pared", for: ["muñeca muy rígida"], description: "Apoya el dorso de la mano en la pared, codo alto, y acerca el cuerpo." }
      ]
    },
    en: {
      name: "Front Rack Position", category: "CrossFit",
      description: "Works wrist, elbow, and shoulder mobility required for the clean and front squat.",
      benefits: ["Improves rack position in clean & jerk", "Reduces wrist stress with loaded bars", "Prevents weightlifter's elbow"],
      steps: [
        "Stand, extend one arm forward at shoulder height",
        "Rotate elbow upward (full supination) and raise the elbow",
        "Keep wrist straight — back of hand faces the ceiling",
        "Hold 20–30 seconds per side. 3 sets"
      ],
      variants: [
        { name: "With PVC pipe", for: ["beginner", "reference posture"], description: "Use a light bar to practice the position with immediate feedback." },
        { name: "Wall stretch", for: ["very stiff wrist"], description: "Press the back of the hand to the wall, elbow high, and lean in." }
      ]
    }
  },
  {
    id: 26, icon: "⬆️", level: "intermediate", duration: 120, color: "#7b6fa0",
    tags: ["crossfit", "weightlifting", "columna", "overhead", "snatch", "jerk"],
    contraindications: ["osteoporosis"],
    youtubeId: "gsR201qbQ5s",
    es: {
      name: "Movilidad Torácica para Halterofilia", category: "CrossFit",
      description: "Extiende la columna torácica para soportar posiciones de overhead sin hiperlordosis lumbar.",
      benefits: ["Mejora estabilidad en snatch y jerk", "Previene compensación lumbar en overhead", "Aumenta rango de extensión torácica"],
      steps: [
        "Siéntate con las rodillas dobladas, manos detrás de la cabeza",
        "Apoya la zona torácica media en un foam roller o en el borde de un banco",
        "Extiéndete hacia atrás en 3–4 posiciones distintas a lo largo de la zona torácica",
        "En cada posición respira profundo 3–5 veces. No forces la zona lumbar"
      ],
      variants: [
        { name: "Con foam roller en el suelo", for: ["opción básica"], description: "Túmbate con el foam roller perpendicular a la columna. Rueda suavemente." },
        { name: "Extensión activa con banda", for: ["avanzado", "previo al entrenamiento"], description: "Banda en overhead, inclínate hacia delante y extiende activamente la torácica." }
      ]
    },
    en: {
      name: "T-Spine Mobility for Weightlifting", category: "CrossFit",
      description: "Extends the thoracic spine to support overhead positions without lumbar hyperlordosis.",
      benefits: ["Improves stability in snatch and jerk", "Prevents lumbar compensation overhead", "Increases thoracic extension range"],
      steps: [
        "Sit with knees bent, hands behind the head",
        "Rest the mid-thoracic area on a foam roller or bench edge",
        "Extend backward at 3–4 positions along the thoracic spine",
        "At each position take 3–5 deep breaths. Don't force the lumbar"
      ],
      variants: [
        { name: "Foam roller on floor", for: ["basic option"], description: "Lie with foam roller perpendicular to spine. Roll gently." },
        { name: "Active extension with band", for: ["advanced", "pre-training"], description: "Band overhead, lean forward and actively extend the thoracic spine." }
      ]
    }
  },
  {
    id: 27, icon: "🏋️", level: "intermediate", duration: 180, color: "#b05c6e",
    tags: ["crossfit", "weightlifting", "cadera", "squat", "deportista"],
    contraindications: ["reemplazo_cadera"],
    youtubeId: "BKyCfc4j1no",
    es: {
      name: "Apertura de Caderas para Sentadilla", category: "CrossFit",
      description: "Combina rotación interna y externa para alcanzar la posición de sentadilla olímpica profunda.",
      benefits: ["Profundidad de squat sin colapso de rodillas", "Equilibra rotadores de cadera para el clean", "Reduce compresión femoroacetabular"],
      steps: [
        "Sentadilla profunda con los pies a la anchura de un snatch (apoyándote al principio)",
        "Empuja suavemente las rodillas hacia afuera con los codos",
        "Mantén el torso erguido y los talones en el suelo",
        "Oscila suavemente de lado a lado. 2–3 minutos en total"
      ],
      variants: [
        { name: "Con soporte (rack o TRX)", for: ["cadera rígida", "principiante"], description: "Agárrate a un poste o TRX. Permite mantener el torso recto con menos esfuerzo." },
        { name: "Con peso anterior (goblet squat)", for: ["avanzado"], description: "Un kettlebell en el pecho mejora el balance y permite explorar más profundidad." }
      ]
    },
    en: {
      name: "Hip Opening for Squat Depth", category: "CrossFit",
      description: "Combines internal and external rotation to reach the deep Olympic squat position.",
      benefits: ["Squat depth without knee cave", "Balances hip rotators for the clean", "Reduces femoroacetabular impingement"],
      steps: [
        "Deep squat with feet at snatch width (use support initially)",
        "Gently push knees outward with elbows",
        "Keep torso upright and heels on the floor",
        "Gently sway side to side. 2–3 minutes total"
      ],
      variants: [
        { name: "With support (rack or TRX)", for: ["stiff hips", "beginner"], description: "Hold a post or TRX. Allows upright torso with less effort." },
        { name: "Goblet squat with weight", for: ["advanced"], description: "A kettlebell at the chest improves balance and allows more depth." }
      ]
    }
  },
  {
    id: 28, icon: "🙆", level: "beginner", duration: 90, color: "#5b8fc4",
    tags: ["crossfit", "weightlifting", "overhead", "hombros", "snatch", "sedentario"],
    contraindications: [],
    youtubeId: "B_OMN9-4K50",
    es: {
      name: "Estiramiento de Dorsales", category: "CrossFit",
      description: "Estira el dorsal ancho, principal limitante del overhead y el snatch.",
      benefits: ["Mejora elevación de brazos en snatch", "Libera restricción de overhead", "Reduce tensión lumbar por dorsales acortados"],
      steps: [
        "Coloca una banda en un rack a la altura del pecho",
        "Agarra la banda con la mano derecha y da un paso atrás",
        "Dobla ligeramente las rodillas, inclínate hacia adelante con la cadera en bisagra",
        "Deja que el brazo se eleve por la tracción de la banda. 30–45 segundos por lado"
      ],
      variants: [
        { name: "Sin banda, en marco de puerta", for: ["en casa", "sin equipamiento"], description: "Agarra el marco con una mano, desplaza el cuerpo hacia abajo en arco." },
        { name: "Rodillas en el suelo", for: ["principiante"], description: "Apoya las rodillas, inclínate hacia adelante con las manos en el suelo y lleva el pecho hacia abajo." }
      ]
    },
    en: {
      name: "Lat Stretch for Overhead", category: "CrossFit",
      description: "Stretches the latissimus dorsi, the main limiter of overhead and snatch position.",
      benefits: ["Improves arm elevation in snatch", "Releases overhead restriction", "Reduces lumbar tension from short lats"],
      steps: [
        "Attach a band to a rack at chest height",
        "Grab the band with the right hand and step back",
        "Slightly bend the knees, hinge forward at the hip",
        "Let the arm rise from the band's pull. 30–45 seconds per side"
      ],
      variants: [
        { name: "No band, door frame", for: ["at home", "no equipment"], description: "Grab the frame with one hand, arc the body downward." },
        { name: "Kneeling on floor", for: ["beginner"], description: "Kneel, lean forward with hands on the floor and lower the chest." }
      ]
    }
  },
  {
    id: 29, icon: "🔁", level: "intermediate", duration: 120, color: "#c47c3e",
    tags: ["crossfit", "weightlifting", "hombros", "overhead", "snatch", "manguito"],
    contraindications: ["luxacion_reciente"],
    youtubeId: "GULVw-XGRDE",
    es: {
      name: "Rotación Externa de Hombro Overhead", category: "CrossFit",
      description: "Trabaja la rotación externa activa del hombro en posición de overhead, crítica para snatch y jerk.",
      benefits: ["Estabilidad en overhead squat y snatch", "Previene impingement subacromial", "Activa manguito rotador en posición de carga"],
      steps: [
        "De pie, brazo elevado a 90° de abducción, codo a 90° (posición de rendición)",
        "Rota el antebrazo hacia arriba (rotación externa) hasta el límite sin forzar",
        "Mantén 3–5 segundos en el rango final",
        "10 repeticiones controladas por lado. Añade banda cuando sea fluido"
      ],
      variants: [
        { name: "Tumbado boca arriba", for: ["principiante", "dolor activo"], description: "La gravedad actúa como resistencia. Más fácil de controlar el rango." },
        { name: "Con banda en posición snatch", for: ["avanzado", "previo al entrenamiento"], description: "Banda en overhead con agarre de snatch. Trabaja rotación en posición específica." }
      ]
    },
    en: {
      name: "Shoulder External Rotation for Overhead", category: "CrossFit",
      description: "Works active external shoulder rotation in the overhead position, critical for snatch and jerk.",
      benefits: ["Stability in overhead squat and snatch", "Prevents subacromial impingement", "Activates rotator cuff in loaded position"],
      steps: [
        "Stand, arm raised to 90° abduction, elbow at 90° (surrender position)",
        "Rotate forearm upward (external rotation) to the limit without forcing",
        "Hold 3–5 seconds at end range",
        "10 controlled reps per side. Add band when movement is fluid"
      ],
      variants: [
        { name: "Lying on back", for: ["beginner", "active pain"], description: "Gravity acts as resistance. Easier to control range." },
        { name: "With band in snatch position", for: ["advanced", "pre-training"], description: "Band overhead with snatch grip. Works rotation in the specific position." }
      ]
    }
  },
  {
    id: 30, icon: "💪", level: "beginner", duration: 90, color: "#6a9e5b",
    tags: ["crossfit", "glúteo", "squat", "activacion", "deportista", "corredor"],
    contraindications: [],
    youtubeId: "EbrhC_K9LSw",
    es: {
      name: "Activación de Glúteo", category: "CrossFit",
      description: "Activa el glúteo medio e inhibe el dominante de cuádriceps antes de squat y levantamientos.",
      benefits: ["Previene colapso de rodillas en squat", "Mejora transferencia de fuerza en clean y snatch", "Corrige dominancia de cuádriceps"],
      steps: [
        "Tumbado de lado, rodillas dobladas a 45°, pies juntos (posición de almeja)",
        "Mantén los pies juntos y sube la rodilla superior tanto como puedas sin rotar la pelvis",
        "Baja lentamente — el descenso debe durar el doble que la subida",
        "15–20 reps por lado. Añade banda elástica encima de las rodillas"
      ],
      variants: [
        { name: "Sin banda", for: ["principiante", "calentamiento suave"], description: "Sin resistencia externa. Focalizarse en la contracción consciente." },
        { name: "De pie con banda (monster walk)", for: ["avanzado", "pre-entrenamiento"], description: "Banda sobre las rodillas, pasos laterales en semi-squat. Activación funcional." }
      ]
    },
    en: {
      name: "Glute Activation", category: "CrossFit",
      description: "Activates the gluteus medius and inhibits quad dominance before squats and lifts.",
      benefits: ["Prevents knee cave in squat", "Improves force transfer in clean and snatch", "Corrects quad dominance"],
      steps: [
        "Lie on your side, knees bent at 45°, feet together (clamshell position)",
        "Keep feet together and raise the top knee as high as possible without rotating the pelvis",
        "Lower slowly — the descent should take twice as long as the lift",
        "15–20 reps per side. Add a resistance band above the knees"
      ],
      variants: [
        { name: "Without band", for: ["beginner", "gentle warm-up"], description: "No external resistance. Focus on conscious contraction." },
        { name: "Standing with band (monster walk)", for: ["advanced", "pre-training"], description: "Band above knees, lateral steps in semi-squat. Functional activation." }
      ]
    }
  },
  {
    id: 31, icon: "🖐️", level: "beginner", duration: 90, color: "#b05c6e",
    tags: ["crossfit", "weightlifting", "muñeca", "rack", "front_squat", "teclado"],
    contraindications: ["tunel_carpiano_agudo"],
    youtubeId: "pwUkoTjntSk",
    es: {
      name: "Movilidad de Muñeca para Sentadilla Frontal", category: "CrossFit",
      description: "Combina extensión y rotación de muñeca para soportar la barra en front squat y clean.",
      benefits: ["Permite rack frontal sin compensar con codos bajos", "Reduce riesgo de tendinitis de muñeca", "Necesario para jerk desde rack"],
      steps: [
        "Arrodíllate, apoya el dorso de ambas manos en el suelo, dedos apuntando hacia ti",
        "Desplaza suavemente el peso hacia adelante hasta sentir tensión en las muñecas",
        "Mantén 20–30 segundos. Luego rota las manos 45° y repite",
        "Finaliza con círculos de muñeca activos en ambos sentidos"
      ],
      variants: [
        { name: "De pie contra la pared", for: ["sin suelo disponible"], description: "Palma en la pared a la altura del pecho, codo extendido. Inclínate hacia la pared." },
        { name: "Con barra sobre rack", for: ["avanzado"], description: "Apoya la barra en el rack a la altura del pecho y practica la posición de rack con carga." }
      ]
    },
    en: {
      name: "Wrist Mobility for Front Squat", category: "CrossFit",
      description: "Combines wrist extension and rotation to support the bar in front squat and clean.",
      benefits: ["Enables front rack without low elbows", "Reduces wrist tendinitis risk", "Required for rack position jerk"],
      steps: [
        "Kneel, place the back of both hands on the floor, fingers pointing toward you",
        "Gently shift weight forward until you feel wrist tension",
        "Hold 20–30 seconds. Rotate hands 45° and repeat",
        "Finish with active wrist circles in both directions"
      ],
      variants: [
        { name: "Standing against wall", for: ["no floor available"], description: "Palm on wall at chest height, elbow extended. Lean into the wall." },
        { name: "With bar on rack", for: ["advanced"], description: "Rest the bar on a rack at chest height and practice rack position under load." }
      ]
    }
  },

  // ─── RODILLA ──────────────────────────────────────────────────────────────
  {
    id: 32, icon: "⭕", level: "beginner", duration: 90, color: "#5ba888",
    tags: ["rodilla", "calentamiento", "movilidad_activa", "deportista", "crossfit"],
    contraindications: [],
    youtubeId: "2vNLqQ7Rmsk",
    es: {
      name: "Círculos de Rodilla", category: "Rodilla",
      description: "Movilización articular activa de la rodilla para lubricar el cartílago y mejorar el rango de movimiento.",
      benefits: ["Activa el líquido sinovial", "Mejora flexión y extensión activa", "Calentamiento esencial pre-sentadilla"],
      steps: [
        "De pie, pies juntos. Dobla ligeramente las rodillas y coloca las manos sobre ellas",
        "Haz círculos lentos con ambas rodillas en sentido horario, 10 veces",
        "Cambia al sentido antihorario, 10 veces",
        "Varía: círculos en direcciones opuestas (una rodilla a cada lado). 2 series"
      ],
      variants: [
        { name: "Solo flexión-extensión", for: ["dolor activo", "post-cirugía"], description: "En lugar de círculos, alterna doblar y estirar la rodilla suavemente." },
        { name: "Con una pierna", for: ["asimetría", "rehabilitación"], description: "Trabaja una rodilla cada vez apoyado en una pared para mayor control." }
      ]
    },
    en: {
      name: "Knee Circles", category: "Knee",
      description: "Active joint mobilization of the knee to lubricate cartilage and improve range of motion.",
      benefits: ["Activates synovial fluid", "Improves active flexion and extension", "Essential warm-up before squatting"],
      steps: [
        "Stand with feet together. Slightly bend knees and place hands on them",
        "Make slow circles clockwise with both knees, 10 times",
        "Switch to counterclockwise, 10 times",
        "Variation: circles in opposite directions (one knee each way). 2 sets"
      ],
      variants: [
        { name: "Flexion-extension only", for: ["active pain", "post-surgery"], description: "Instead of circles, alternate gently bending and straightening the knee." },
        { name: "Single leg", for: ["asymmetry", "rehabilitation"], description: "Work one knee at a time leaning against a wall for more control." }
      ]
    }
  },
  {
    id: 33, icon: "🦵", level: "beginner", duration: 60, color: "#6a9e5b",
    tags: ["rodilla", "cuadriceps", "corredor", "deportista", "sedentario"],
    contraindications: [],
    youtubeId: "BhQimqvU1tM",
    es: {
      name: "Cuádriceps de Pie", category: "Rodilla",
      description: "Estira el cuádriceps y el recto femoral, frecuentemente acortados en sedentarios y corredores.",
      benefits: ["Alivia tensión anterior de rodilla", "Mejora extensión de cadera", "Previene síndrome rotuliano"],
      steps: [
        "De pie con una mano en la pared para equilibrarte",
        "Dobla la rodilla derecha llevando el talón hacia el glúteo",
        "Agarra el tobillo con la mano derecha y acerca el talón al glúteo",
        "Mantén la rodilla cerca de la otra pierna. 30–45 segundos por lado"
      ],
      variants: [
        { name: "Tumbado boca abajo", for: ["equilibrio", "vértigo"], description: "Túmbate boca abajo y lleva el talón al glúteo. Más estable y mayor rango." },
        { name: "Con banda", for: ["poca movilidad de rodilla"], description: "Pasa una banda por el tobillo y tira desde el extremo. Ideal si no llegas al tobillo." }
      ]
    },
    en: {
      name: "Standing Quad Stretch", category: "Knee",
      description: "Stretches the quadriceps and rectus femoris, frequently shortened in sedentary people and runners.",
      benefits: ["Relieves anterior knee tension", "Improves hip extension", "Prevents patellofemoral syndrome"],
      steps: [
        "Stand with one hand on a wall for balance",
        "Bend the right knee bringing the heel toward the glute",
        "Grasp the ankle with the right hand and draw the heel close to the glute",
        "Keep the knee close to the other leg. 30–45 seconds per side"
      ],
      variants: [
        { name: "Lying face down", for: ["balance", "vertigo"], description: "Lie face down and bring heel to glute. More stable and greater range." },
        { name: "With band", for: ["limited knee mobility"], description: "Loop a band around the ankle and pull from the end. Good if you can't reach the ankle." }
      ]
    }
  },
  {
    id: 34, icon: "🛝", level: "beginner", duration: 90, color: "#7b6fa0",
    tags: ["rodilla", "rehabilitacion", "flexion_rodilla", "postoperatorio"],
    contraindications: [],
    youtubeId: "Bz0wSFRjH2c",
    es: {
      name: "Deslizamiento de Talón", category: "Rodilla",
      description: "Recupera el rango de flexión de rodilla de forma suave y progresiva.",
      benefits: ["Aumenta rango de flexión de rodilla", "Rehabilitación post-cirugía o esguince", "Mantiene movilidad articular sin carga"],
      steps: [
        "Túmbate boca arriba con las piernas estiradas",
        "Desliza lentamente el talón derecho hacia los glúteos doblando la rodilla",
        "Llega hasta donde puedas sin forzar. Mantén 5 segundos",
        "Estira de nuevo lentamente. 10–15 repeticiones por lado"
      ],
      variants: [
        { name: "Con toalla bajo el talón", for: ["rehabilitación temprana"], description: "La toalla reduce la fricción y facilita el deslizamiento en superficies rugosas." },
        { name: "Sentado en el borde", for: ["dificultad en suelo"], description: "Sentado al borde de la cama o silla, deja caer la pierna y recógela activamente." }
      ]
    },
    en: {
      name: "Heel Slides", category: "Knee",
      description: "Gently and progressively recovers knee flexion range of motion.",
      benefits: ["Increases knee flexion range", "Post-surgery or sprain rehabilitation", "Maintains joint mobility without load"],
      steps: [
        "Lie on your back with legs straight",
        "Slowly slide the right heel toward the glutes by bending the knee",
        "Go as far as you can without forcing. Hold 5 seconds",
        "Slowly extend again. 10–15 reps per side"
      ],
      variants: [
        { name: "Towel under heel", for: ["early rehabilitation"], description: "The towel reduces friction and makes sliding easier on rough surfaces." },
        { name: "Seated at the edge", for: ["difficulty on floor"], description: "Seated at the edge of a bed or chair, let the leg drop and actively bring it back up." }
      ]
    }
  },
  {
    id: 35, icon: "🩻", level: "beginner", duration: 90, color: "#c47c3e",
    tags: ["rodilla", "rehabilitacion", "condromalacia", "rotula"],
    contraindications: [],
    youtubeId: "pmKdwBN1HxA",
    es: {
      name: "Movilización de Rótula", category: "Rodilla",
      description: "Desplaza manualmente la rótula para liberar adherencias y mejorar el deslizamiento articular.",
      benefits: ["Reduce rigidez post-cirugía de rodilla", "Alivia condromalacia rotuliana", "Mejora seguimiento rotuliano en sentadilla"],
      steps: [
        "Siéntate con la pierna estirada y el músculo cuádriceps relajado",
        "Con los pulgares y dedos índice, agarra suavemente la rótula",
        "Desplázala hacia arriba/abajo y a los lados (4 direcciones), 10 veces cada una",
        "Sin dolor — si hay resistencia fuerte, reduce el rango"
      ],
      variants: [
        { name: "Solo dirección limitada", for: ["rehabilitación específica"], description: "Trabaja solo en la dirección que tu fisio ha indicado como prioritaria." },
        { name: "Con rodilla ligeramente doblada", for: ["mayor acceso"], description: "Una pequeña almohada bajo la rodilla facilita el acceso a los bordes de la rótula." }
      ]
    },
    en: {
      name: "Patellar Mobilization", category: "Knee",
      description: "Manually glides the patella to free adhesions and improve joint sliding.",
      benefits: ["Reduces post-knee surgery stiffness", "Relieves patellar chondromalacia", "Improves patellar tracking in squat"],
      steps: [
        "Sit with the leg straight and quadriceps muscle relaxed",
        "With thumbs and index fingers, gently grasp the kneecap",
        "Glide it up/down and side to side (4 directions), 10 times each",
        "No pain — if there is strong resistance, reduce the range"
      ],
      variants: [
        { name: "One direction only", for: ["specific rehabilitation"], description: "Work only in the direction your physio has indicated as priority." },
        { name: "With knee slightly bent", for: ["better access"], description: "A small pillow under the knee makes the edges of the patella more accessible." }
      ]
    }
  },

  // ─── CODO ─────────────────────────────────────────────────────────────────
  {
    id: 36, icon: "💪", level: "beginner", duration: 60, color: "#5b8fc4",
    tags: ["codo", "hombros", "sedentario", "oficina", "teclado"],
    contraindications: [],
    youtubeId: "BglqDh5Xozc",
    es: {
      name: "Estiramiento de Tríceps", category: "Muñeca",
      description: "Estira el tríceps braquial y la cápsula posterior del codo, tensos en usuarios de teclado y deportistas de fuerza.",
      benefits: ["Alivia tensión posterior de codo", "Mejora extensión completa del codo", "Previene epicondilitis posterior"],
      steps: [
        "Eleva el brazo derecho y dobla el codo llevando la mano hacia la espalda",
        "Con la mano izquierda, empuja suavemente el codo hacia abajo y hacia dentro",
        "Siente el estiramiento en la parte posterior del brazo",
        "Mantén 30 segundos. Repite 2–3 veces por lado"
      ],
      variants: [
        { name: "Con toalla", for: ["hombros rígidos"], description: "Pasa una toalla por la mano alta y tira desde abajo. Sin estrés en el hombro." },
        { name: "Tumbado boca arriba", for: ["mayor intensidad"], description: "Brazo vertical hacia el techo, dobla el codo y deja caer la mano detrás de la cabeza." }
      ]
    },
    en: {
      name: "Tricep Stretch", category: "Wrist",
      description: "Stretches the triceps brachii and posterior elbow capsule, tight in keyboard users and strength athletes.",
      benefits: ["Relieves posterior elbow tension", "Improves full elbow extension", "Prevents posterior epicondylitis"],
      steps: [
        "Raise the right arm and bend the elbow, bringing the hand behind your back",
        "With the left hand, gently push the elbow down and inward",
        "Feel the stretch in the back of the arm",
        "Hold 30 seconds. Repeat 2–3 times per side"
      ],
      variants: [
        { name: "With towel", for: ["stiff shoulders"], description: "Thread a towel through the top hand and pull from below. No shoulder stress." },
        { name: "Lying on back", for: ["greater intensity"], description: "Arm vertical toward the ceiling, bend elbow and let the hand fall behind the head." }
      ]
    }
  },
  {
    id: 37, icon: "🔄", level: "beginner", duration: 60, color: "#b05c6e",
    tags: ["codo", "muñeca", "sedentario", "teclado", "oficina"],
    contraindications: [],
    youtubeId: "JqkJGiYDAEA",
    es: {
      name: "Pronación y Supinación", category: "Muñeca",
      description: "Moviliza la articulación radio-cubital, crucial para rotar el antebrazo en actividades cotidianas y deportivas.",
      benefits: ["Mantiene rotación completa del antebrazo", "Previene síndrome del túnel cubital", "Esencial para deportes de raqueta y halterofilia"],
      steps: [
        "Siéntate con el codo doblado a 90°, apoyado en el muslo o una mesa",
        "Gira el antebrazo lentamente hasta que la palma mire al suelo (pronación)",
        "Gira en sentido contrario hasta que la palma mire al techo (supinación)",
        "10 repeticiones lentas por lado. Puedes añadir un martillo o botella como resistencia"
      ],
      variants: [
        { name: "Sin resistencia", for: ["rehabilitación", "dolor agudo"], description: "Solo el peso del antebrazo. Perfecto para recuperación post-lesión." },
        { name: "Con botella de agua", for: ["fortalecimiento"], description: "Una botella alarga la palanca y añade resistencia progresiva." }
      ]
    },
    en: {
      name: "Forearm Pronation & Supination", category: "Wrist",
      description: "Mobilizes the radio-ulnar joint, crucial for rotating the forearm in daily and sport activities.",
      benefits: ["Maintains full forearm rotation", "Prevents cubital tunnel syndrome", "Essential for racket sports and weightlifting"],
      steps: [
        "Sit with elbow bent at 90°, resting on thigh or a table",
        "Slowly rotate the forearm until the palm faces the floor (pronation)",
        "Rotate the other way until the palm faces the ceiling (supination)",
        "10 slow reps per side. You can add a hammer or bottle for resistance"
      ],
      variants: [
        { name: "Without resistance", for: ["rehabilitation", "acute pain"], description: "Just the forearm's weight. Perfect for post-injury recovery." },
        { name: "With water bottle", for: ["strengthening"], description: "A bottle lengthens the lever and adds progressive resistance." }
      ]
    }
  },

  // ─── HOMBROS adicionales ──────────────────────────────────────────────────
  {
    id: 38, icon: "🪃", level: "beginner", duration: 90, color: "#5ba888",
    tags: ["hombros", "postura", "sedentario", "calentamiento", "cifosis", "oficina"],
    contraindications: [],
    youtubeId: "jDbfuzfdVHM",
    es: {
      name: "Círculos Escapulares", category: "Hombros",
      description: "Moviliza la escápula en todas sus direcciones para liberar tensión y preparar el hombro para carga.",
      benefits: ["Activa el serrato anterior y trapecio inferior", "Libera tensión de trapecios superiores", "Calentamiento esencial antes de press o snatch"],
      steps: [
        "De pie o sentado, brazos relajados a los lados",
        "Sube los hombros hacia las orejas, lllévalos hacia atrás, bájalos y tráelos al frente",
        "Completa el círculo lentamente y con control. 10 veces hacia atrás",
        "Invierte la dirección. 10 veces hacia adelante"
      ],
      variants: [
        { name: "Un hombro cada vez", for: ["asimetría", "lesión unilateral"], description: "Trabaja cada escápula por separado para detectar restricciones." },
        { name: "Con brazos extendidos", for: ["mayor activación", "deportista"], description: "Realiza los círculos con los brazos en T. Mayor demanda escapular." }
      ]
    },
    en: {
      name: "Scapular Circles", category: "Shoulders",
      description: "Mobilizes the scapula in all directions to release tension and prepare the shoulder for load.",
      benefits: ["Activates serratus anterior and lower trapezius", "Releases upper trapezius tension", "Essential warm-up before pressing or snatching"],
      steps: [
        "Stand or sit, arms relaxed at sides",
        "Raise shoulders toward ears, pull them back, lower them, and bring them forward",
        "Complete the circle slowly and with control. 10 times backward",
        "Reverse direction. 10 times forward"
      ],
      variants: [
        { name: "One shoulder at a time", for: ["asymmetry", "unilateral injury"], description: "Work each scapula separately to detect restrictions." },
        { name: "Arms in T position", for: ["greater activation", "athlete"], description: "Do circles with arms in a T shape. Greater scapular demand." }
      ]
    }
  },
  {
    id: 39, icon: "✈️", level: "beginner", duration: 90, color: "#c47c3e",
    tags: ["hombros", "postura", "sedentario", "cifosis", "deportista", "espalda_alta"],
    contraindications: [],
    youtubeId: "0ONNU8tkBs8",
    es: {
      name: "Y-T-W-L Escapular", category: "Hombros",
      description: "Activa los estabilizadores escapulares profundos (romboides, serrato, trapecio medio/inferior) muy inhibidos en posturas de escritorio.",
      benefits: ["Corrige desequilibrios posturales del hombro", "Activa músculos antagonistas al pectoral", "Previene impingement y lesiones de manguito"],
      steps: [
        "Tumbado boca abajo (o de pie inclinado a 45°), brazos extendidos en Y — eleva y baja. 10 reps",
        "Cambia a posición T (brazos perpendiculares al cuerpo) — eleva y baja. 10 reps",
        "Dobla los codos a 90° en posición W — junta los codos atrás. 10 reps",
        "Dobla codos a 90°, baja en L — rota los antebrazos hacia arriba y abajo. 10 reps"
      ],
      variants: [
        { name: "Solo Y y T para empezar", for: ["principiante", "hombros débiles"], description: "Las posiciones Y y T son más accesibles. Domínalas antes de añadir W y L." },
        { name: "Con mancuernas ligeras", for: ["avanzado"], description: "0.5–2 kg añaden resistencia significativa a estos músculos pequeños." }
      ]
    },
    en: {
      name: "Y-T-W-L Scapular", category: "Shoulders",
      description: "Activates deep scapular stabilizers (rhomboids, serratus, mid/lower trapezius) highly inhibited in desk postures.",
      benefits: ["Corrects postural shoulder imbalances", "Activates pectoral antagonist muscles", "Prevents impingement and rotator cuff injuries"],
      steps: [
        "Lie face down (or stand bent at 45°), arms in Y — raise and lower. 10 reps",
        "Switch to T position (arms perpendicular to body) — raise and lower. 10 reps",
        "Bend elbows to 90° in W — squeeze elbows back. 10 reps",
        "Bend elbows to 90° in L — rotate forearms up and down. 10 reps"
      ],
      variants: [
        { name: "Only Y and T to start", for: ["beginner", "weak shoulders"], description: "Y and T positions are more accessible. Master them before adding W and L." },
        { name: "With light dumbbells", for: ["advanced"], description: "0.5–2 kg adds significant resistance to these small muscles." }
      ]
    }
  },
  {
    id: 40, icon: "🔃", level: "intermediate", duration: 120, color: "#7b6fa0",
    tags: ["hombros", "deportista", "crossfit", "overhead", "movilidad_activa", "manguito"],
    contraindications: ["luxacion_reciente"],
    youtubeId: "6u8QpNmQy_g",
    es: {
      name: "Rotación Glenohumeral Activa", category: "Hombros",
      description: "Trabaja la rotación interna y externa activa del hombro para mantener el pleno rango funcional y la salud del manguito rotador.",
      benefits: ["Mantiene rango de rotación glenohumeral", "Fortalece el manguito rotador", "Previene capsulitis adhesiva (hombro congelado)"],
      steps: [
        "De pie, brazo en abducción a 90° y codo a 90° (posición de rendición)",
        "Rota el antebrazo hacia abajo (rotación interna) hasta el límite. Mantén 2 seg",
        "Rota hacia arriba (rotación externa) hasta el límite. Mantén 2 seg",
        "10 repeticiones lentas y controladas por lado. 2 series"
      ],
      variants: [
        { name: "Con brazo pegado al cuerpo", for: ["dolor en abducción", "principiante"], description: "Codo a 90° pegado al costado. Rota el antebrazo con una banda de baja resistencia." },
        { name: "Tumbado boca arriba", for: ["control máximo"], description: "La gravedad actúa como resistencia suave. Más fácil de controlar el rango." }
      ]
    },
    en: {
      name: "Active Shoulder Rotation", category: "Shoulders",
      description: "Works active internal and external shoulder rotation to maintain full functional range and rotator cuff health.",
      benefits: ["Maintains glenohumeral rotation range", "Strengthens the rotator cuff", "Prevents adhesive capsulitis (frozen shoulder)"],
      steps: [
        "Stand, arm abducted to 90° and elbow at 90° (surrender position)",
        "Rotate forearm downward (internal rotation) to the limit. Hold 2 sec",
        "Rotate upward (external rotation) to the limit. Hold 2 sec",
        "10 slow, controlled reps per side. 2 sets"
      ],
      variants: [
        { name: "Arm at side", for: ["pain in abduction", "beginner"], description: "Elbow at 90° at the side. Rotate the forearm with a low-resistance band." },
        { name: "Lying on back", for: ["maximum control"], description: "Gravity acts as gentle resistance. Easier to control the range." }
      ]
    }
  }
];

export const CAT_ES_TO_EN = {
  "Columna": "Spine",
  "Cadera": "Hip",
  "Hombros": "Shoulders",
  "Cuello": "Neck",
  "Tobillo y Pie": "Ankle & Foot",
  "Muñeca": "Wrist",
  "Rodilla": "Knee",
  "Cadena Posterior": "Posterior Chain",
  "CrossFit": "CrossFit",
};

export function catLabel(cat, lang) {
  return lang === "es" ? cat : (CAT_ES_TO_EN[cat] ?? cat);
}

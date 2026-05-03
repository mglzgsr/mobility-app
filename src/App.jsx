import { useState, useRef, useEffect } from "react";

// ─── YOUTUBE VIDEO IDs por ejercicio (canales de fisioterapia / movilidad) ───
// Todos son videos públicos de fisioterapeutas / canales de movilidad en español o internacionales
const EXERCISES = [
  {
    id: 1, name: "Gato-Vaca", category: "Columna", icon: "🐱", level: "Principiante",
    duration: 120, color: "#5ba888",
    tags: ["lumbar", "sedentario", "principiante", "oficina", "estrés"],
    description: "Movilidad espinal fundamental que alterna flexión y extensión con la respiración.",
    benefits: ["Descomprime vértebras lumbares", "Activa musculatura profunda del core", "Ideal como calentamiento espinal"],
    contraindications: [],
    youtubeId: "kqnua4rHVVA",
    steps: [
      "Cuatro patas: muñecas bajo hombros, rodillas bajo caderas",
      "VACA — inhala: deja caer el abdomen, saca el pecho, mira hacia arriba",
      "GATO — exhala: redondea la espalda, mete la barbilla al pecho",
      "Alterna en 8–10 ciclos respiratorios lentos"
    ],
    variants: [
      { name: "En silla", for: ["rodilla", "embarazo"], icon: "🪑", description: "Misma alternancia sentado en el borde de una silla, manos en rodillas." },
      { name: "Rango mínimo", for: ["hernia", "escoliosis"], icon: "🎯", description: "Solo 20% del rango total. Prioriza la conciencia respiratoria." }
    ]
  },
  {
    id: 2, name: "Torsión Espinal Tumbada", category: "Columna", icon: "🌀", level: "Principiante",
    duration: 180, color: "#6a9e5b",
    tags: ["lumbar", "sedentario", "estrés", "nocturno", "columna"],
    description: "Rotación espinal restauradora que descomprime la columna y relaja la musculatura paravertebral.",
    benefits: ["Movilidad rotacional de columna", "Reduce compresión discal", "Ideal antes de dormir"],
    contraindications: [],
    youtubeId: "bZFpCBCcSp8",
    steps: [
      "Túmbate boca arriba, dobla la rodilla derecha",
      "Con la mano izquierda lleva esa rodilla al suelo hacia la izquierda",
      "Extiende el brazo derecho en T, gira la cabeza a la derecha",
      "Respira profundo y mantén 60–90 segundos. Cambia de lado"
    ],
    variants: [
      { name: "Con cojín entre rodillas", for: ["cadera", "embarazo"], icon: "🛏️", description: "Un cojín entre las rodillas reduce la presión en cadera y sacro." },
      { name: "Torsión sentada", for: ["movilidad_limitada"], icon: "🧘", description: "Sentado con piernas cruzadas, una mano en la rodilla contraria." }
    ]
  },
  {
    id: 3, name: "Extensión Torácica en Silla", category: "Columna", icon: "🪑", level: "Principiante",
    duration: 90, color: "#c47c3e",
    tags: ["sedentario", "cifosis", "hombros", "oficina", "columna"],
    description: "Contrarresta la postura de escritorio extendiendo la zona torácica sobre el respaldo.",
    benefits: ["Abre zona torácica", "Reduce cifosis postural", "Alivia tensión cervical compensatoria"],
    contraindications: ["osteoporosis"],
    youtubeId: "A6pWMaiUiDM",
    steps: [
      "Siéntate en una silla dura, espalda recta",
      "Manos detrás de la cabeza, codos hacia afuera",
      "Recuesta suavemente la zona media en el borde superior del respaldo",
      "Mantén 20–30 segundos. Reposiciona en 2–3 vértebras distintas"
    ],
    variants: [
      { name: "Con toalla enrollada", for: ["dolor_severo"], icon: "🏳️", description: "Túmbate sobre una toalla enrollada a nivel torácico. Control total." },
      { name: "Foam roller", for: ["mayor_rango"], icon: "⬆️", description: "Sobre el foam roller: mayor extensión y puedes rodar toda la zona torácica." }
    ]
  },
  {
    id: 4, name: "Paloma Tumbada", category: "Cadera", icon: "🕊️", level: "Intermedio",
    duration: 180, color: "#7b6fa0",
    tags: ["cadera", "ciático", "corredor", "deportista", "glúteo"],
    description: "Estiramiento profundo del glúteo y rotadores externos de cadera.",
    benefits: ["Libera el piriforme", "Alivia ciática leve", "Mejora rotación externa de cadera"],
    contraindications: ["reemplazo_cadera"],
    youtubeId: "DjR5RHjHpMg",
    steps: [
      "Túmbate boca arriba, dobla ambas rodillas",
      "Cruza el tobillo derecho sobre la rodilla izquierda (posición número 4)",
      "Agarra la parte posterior del muslo izquierdo con ambas manos",
      "Acerca las piernas al pecho. Mantén 60–90 segundos por lado"
    ],
    variants: [
      { name: "En silla (Figura 4)", for: ["rodilla", "embarazo", "principiante"], icon: "🪑", description: "Sentado, cruza el tobillo sobre la rodilla opuesta. Inclínate suavemente." },
      { name: "Paloma en suelo", for: ["mayor_rango"], icon: "⬆️", description: "Rodilla doblada al frente, pierna trasera extendida. Más intensa." }
    ]
  },
  {
    id: 5, name: "Flexor de Cadera de Rodillas", category: "Cadera", icon: "🧎", level: "Principiante",
    duration: 120, color: "#5b8fc4",
    tags: ["sedentario", "psoas", "lumbar", "corredor", "cadera"],
    description: "Estira el psoas-ilíaco, acortado por pasar muchas horas sentado o correr.",
    benefits: ["Libera el psoas", "Mejora posición pélvica", "Reduce dolor lumbar anterior"],
    contraindications: [],
    youtubeId: "YqPQF3Dn3aE",
    steps: [
      "Arrodíllate: una rodilla en el suelo, la otra pierna adelantada a 90°",
      "Empuja suavemente la cadera hacia adelante manteniendo el torso erguido",
      "Siente el estiramiento en la ingle del lado trasero",
      "Mantén 45–60 segundos por lado. Repite 2 veces"
    ],
    variants: [
      { name: "Con apoyo en silla", for: ["rodilla", "equilibrio"], icon: "🪑", description: "Apoya la mano en una silla. Protege la rodilla y ayuda al equilibrio." },
      { name: "Con inclinación lateral", for: ["tensión_TFL"], icon: "↗️", description: "Desde la posición base, eleva el brazo trasero y arquéate al lado contrario." }
    ]
  },
  {
    id: 6, name: "Apertura de Cadera 90/90", category: "Cadera", icon: "🔷", level: "Intermedio",
    duration: 180, color: "#7b6fa0",
    tags: ["cadera", "deportista", "corredor", "rotacion", "avanzado"],
    description: "Trabaja simultáneamente la rotación interna y externa de cadera.",
    benefits: ["Movilidad completa de cadera", "Equilibra rotadores internos y externos", "Previene lesiones de rodilla"],
    contraindications: ["reemplazo_cadera"],
    youtubeId: "Hls2DXbUS_A",
    steps: [
      "Siéntate: pierna derecha a 90° al frente, pierna izquierda a 90° al lado",
      "Torso erguido, caderas en el suelo (o lo más cerca posible)",
      "Inclínate sobre la pierna delantera 30 segundos",
      "Transición al otro lado sin levantar las caderas. 3 series"
    ],
    variants: [
      { name: "Con apoyo de manos", for: ["principiante", "cadera_rígida"], icon: "🤲", description: "Apoya las manos detrás para aliviar tensión y mantener la posición." },
      { name: "Rotación activa", for: ["avanzado"], icon: "⚡", description: "Alterna entre lados sin pausa, controlando la transición." }
    ]
  },
  {
    id: 7, name: "Mariposa", category: "Cadera", icon: "🦋", level: "Principiante",
    duration: 120, color: "#b05c6e",
    tags: ["cadera", "ingle", "embarazo", "sedentario", "principiante"],
    description: "Abre la zona interna de la cadera y estira los aductores suavemente.",
    benefits: ["Estira aductores y obturador", "Mejora apertura de cadera", "Relajante para el suelo pélvico"],
    contraindications: [],
    youtubeId: "DU4bHxhABKg",
    steps: [
      "Siéntate, junta las plantas de los pies frente a ti",
      "Acerca los talones a la pelvis según tu comodidad",
      "Deja caer las rodillas por su propio peso, sin empujar",
      "Inclínate suavemente hacia adelante con la espalda recta. 60–90 segundos"
    ],
    variants: [
      { name: "Con espalda en pared", for: ["lumbar", "principiante"], icon: "🧱", description: "Apoya la espalda en la pared para mantener la columna recta." },
      { name: "Tumbado boca arriba", for: ["embarazo", "mayor_comodidad"], icon: "🛏️", description: "La gravedad hace el trabajo sin comprimir el abdomen." }
    ]
  },
  {
    id: 8, name: "Círculos de Cadera de Pie", category: "Cadera", icon: "⭕", level: "Principiante",
    duration: 90, color: "#5b8fc4",
    tags: ["calentamiento", "sedentario", "oficina", "lumbar", "cadera"],
    description: "Movilización articular circular que lubrica la articulación de la cadera activamente.",
    benefits: ["Activa líquido sinovial", "Mejora propiocepción pélvica", "Excelente calentamiento dinámico"],
    contraindications: [],
    youtubeId: "5LGUaAJFKO8",
    steps: [
      "De pie, pies al ancho de caderas, manos en caderas",
      "Inicia círculos amplios en sentido horario, 8 veces",
      "Cambia al sentido antihorario, 8 veces",
      "Aumenta el radio progresivamente. 2–3 series"
    ],
    variants: [
      { name: "Con apoyo en silla", for: ["equilibrio", "vértigo"], icon: "🪑", description: "Apoya una mano en el respaldo. Igual de efectivo con más estabilidad." },
      { name: "Semicírculos", for: ["cadera_severa", "prótesis"], icon: "🌗", description: "Solo la mitad del arco. Evita los rangos extremos." }
    ]
  },
  {
    id: 9, name: "Apertura de Pecho", category: "Hombros", icon: "🦅", level: "Principiante",
    duration: 90, color: "#c47c3e",
    tags: ["sedentario", "cifosis", "oficina", "hombros", "pecho"],
    description: "Estira los pectorales y bíceps, acortados por el uso del ordenador.",
    benefits: ["Abre el pecho", "Libera tensión pectoral", "Mejora postura sagital"],
    contraindications: ["manguito_severo"],
    youtubeId: "NG9qbvAN3gQ",
    steps: [
      "De pie o sentado, lleva los brazos hacia atrás",
      "Entrelaza los dedos detrás de la espalda o junta las palmas",
      "Levanta los brazos levemente mientras sacas el pecho hacia adelante",
      "Mantén 30 segundos con respiración profunda. Repite 3 veces"
    ],
    variants: [
      { name: "Con toalla o banda", for: ["hombros_rígidos", "manguito"], icon: "🏳️", description: "Sujeta una toalla con ambas manos separadas. Reduce estrés articular." },
      { name: "En marco de puerta", for: ["mayor_intensidad"], icon: "🚪", description: "Antebrazo en el marco, gira el cuerpo al lado contrario." }
    ]
  },
  {
    id: 10, name: "Rotación Interna de Hombro", category: "Hombros", icon: "🔄", level: "Intermedio",
    duration: 120, color: "#5ba888",
    tags: ["hombros", "deportista", "manguito", "nadador"],
    description: "Moviliza la cápsula posterior del hombro, muy restringida en deportistas.",
    benefits: ["Libera cápsula posterior", "Previene lesiones de manguito", "Mejora overhead en deportes"],
    contraindications: ["luxacion_reciente"],
    youtubeId: "vV_UNJd-8V4",
    steps: [
      "Túmbate de lado derecho, hombro derecho en el suelo, codo a 90°",
      "Con la mano izquierda empuja suavemente la muñeca derecha hacia el suelo",
      "Siente el estiramiento en la parte posterior del hombro",
      "Mantén 30–45 segundos. Cambia. 2–3 series"
    ],
    variants: [
      { name: "De pie en pared", for: ["dificultad_suelo", "embarazo"], icon: "🧱", description: "Coloca el antebrazo en la pared y rota el cuerpo alejándolo." },
      { name: "Rango reducido", for: ["dolor_agudo_hombro"], icon: "🎯", description: "Para donde empieces a notar tensión, sin llegar al dolor." }
    ]
  },
  {
    id: 11, name: "Inclinación Lateral de Cuello", category: "Cuello", icon: "↔️", level: "Principiante",
    duration: 60, color: "#b05c6e",
    tags: ["cuello", "sedentario", "cefalea", "oficina", "estrés", "trapecio"],
    description: "Estira el escaleno y el trapecio superior, crónicamente tensos en usuarios de pantallas.",
    benefits: ["Reduce cefaleas tensionales", "Libera trapecio superior", "Alivia tensión cervical lateral"],
    contraindications: [],
    youtubeId: "1VXXAh_LCeM",
    steps: [
      "Sentado o de pie, espalda recta y hombros relajados",
      "Inclina la oreja derecha hacia el hombro derecho (sin subir el hombro)",
      "Para cuando notes el estiramiento lateral izquierdo del cuello",
      "Mantén 30–45 segundos por lado. Repite 2 veces"
    ],
    variants: [
      { name: "Con mano de asistencia", for: ["tensión_severa"], icon: "🤲", description: "Apoya la mano del mismo lado en la cabeza. Sin tirar, solo peso suave." },
      { name: "Solo respiración", for: ["hernia_cervical"], icon: "🫁", description: "Sin movimiento: solo respira y observa la movilidad que genera la respiración." }
    ]
  },
  {
    id: 12, name: "Chin Tuck (Retracción Cervical)", category: "Cuello", icon: "🫅", level: "Principiante",
    duration: 60, color: "#5b8fc4",
    tags: ["cuello", "sedentario", "oficina", "hernia_cervical", "postura"],
    description: "Corrige la posición adelantada de la cabeza reactivando los flexores cervicales profundos.",
    benefits: ["Corrige postura de cabeza adelantada", "Activa musculatura cervical profunda", "Reduce presión discal cervical"],
    contraindications: [],
    youtubeId: "wQylqaCl8Zo",
    steps: [
      "Sentado, mira al frente. Coloca un dedo sobre la barbilla",
      "Sin mover el dedo, desliza la barbilla hacia atrás (haciendo papada)",
      "Siente el alargamiento de la parte posterior del cuello",
      "Mantén 5 segundos, vuelve. Repite 10–15 veces"
    ],
    variants: [
      { name: "Tumbado boca arriba", for: ["dolor_agudo", "vértigo"], icon: "🛏️", description: "Aplana suavemente la nuca contra el suelo. Sin gravedad postural." },
      { name: "En pared", for: ["referencia_postural"], icon: "🧱", description: "Espalda en la pared como feedback táctil de la posición correcta." }
    ]
  },
  {
    id: 13, name: "Rotación Cervical Activa", category: "Cuello", icon: "👀", level: "Principiante",
    duration: 60, color: "#6a9e5b",
    tags: ["cuello", "movilidad_activa", "oficina", "sedentario"],
    description: "Mantiene el rango de rotación cervical, esencial para la vida diaria.",
    benefits: ["Preserva rotación cervical", "Reduce riesgo de tortícolis", "Mejora alerta situacional"],
    contraindications: ["vértigo_severo"],
    youtubeId: "M5LW6TfMaCk",
    steps: [
      "Sentado, espalda recta, mentón ligeramente recogido",
      "Gira lentamente la cabeza hacia la derecha hasta el límite confortable",
      "Mantén 5 segundos, vuelve al centro",
      "Repite al lado izquierdo. 5 veces por lado"
    ],
    variants: [
      { name: "Rango reducido", for: ["artrosis_cervical", "mareo"], icon: "🎯", description: "Gira solo 30–40° en lugar del rango completo. Nunca hasta el dolor." },
      { name: "Con resistencia manual", for: ["fortalecimiento"], icon: "💪", description: "Palma en la sien, ofrece resistencia suave al girar. Isométrico cervical." }
    ]
  },
  {
    id: 14, name: "Círculos de Tobillo", category: "Tobillo y Pie", icon: "⭕", level: "Principiante",
    duration: 90, color: "#5ba888",
    tags: ["tobillo", "sedentario", "oficina", "calentamiento", "embarazo", "circulacion"],
    description: "Movilización articular del tobillo que previene rigidez y mejora la circulación.",
    benefits: ["Lubrica la articulación del tobillo", "Previene edema en piernas", "Fundamental pre/post carrera"],
    contraindications: [],
    youtubeId: "NN3ic2LuYxQ",
    steps: [
      "Sentado o tumbado, eleva una pierna ligeramente",
      "Círculos amplios con el pie, solo el tobillo se mueve",
      "10 círculos horario, 10 antihorario",
      "Cambia de pie. Repite 2 veces"
    ],
    variants: [
      { name: "De pie con apoyo", for: ["equilibrio"], icon: "🤸", description: "Apoya una mano en la pared. Eleva el pie y haz los círculos de pie." },
      { name: "Escritura del alfabeto", for: ["rehabilitación"], icon: "🔤", description: "Escribe el abecedario con el pie. Trabaja todos los rangos posibles." }
    ]
  },
  {
    id: 15, name: "Estiramiento de Pantorrilla", category: "Tobillo y Pie", icon: "🧱", level: "Principiante",
    duration: 120, color: "#c47c3e",
    tags: ["tobillo", "corredor", "plantar", "pantorrilla", "deportista"],
    description: "Estira gastrocnemio y sóleo, clave para la fascitis plantar y lesiones de Aquiles.",
    benefits: ["Previene fascitis plantar", "Alivia tensión en Aquiles", "Mejora flexión dorsal del tobillo"],
    contraindications: [],
    youtubeId: "fdXjGCPGQ3A",
    steps: [
      "De pie frente a una pared, manos a la altura del pecho",
      "Pie izquierdo adelantado, pie derecho atrás con el talón pegado al suelo",
      "Dobla la rodilla delantera hasta sentir el estiramiento en la pantorrilla trasera",
      "Para el sóleo: dobla también la rodilla trasera. 45 segundos por lado"
    ],
    variants: [
      { name: "En escalón", for: ["mayor_intensidad", "corredor"], icon: "📶", description: "Antepié en el escalón, deja caer el talón. Más profundo y funcional." },
      { name: "Con banda sentado", for: ["lesión_Aquiles"], icon: "🏳️", description: "Sentado, pasa una banda por la planta y tira hacia ti. Sin carga articular." }
    ]
  },
  {
    id: 16, name: "Estiramiento de Muñeca", category: "Muñeca", icon: "🖐️", level: "Principiante",
    duration: 60, color: "#5b8fc4",
    tags: ["muñeca", "sedentario", "oficina", "tunel_carpiano", "teclado"],
    description: "Estira los flexores del antebrazo, crónicamente tensos en usuarios de teclado.",
    benefits: ["Previene síndrome del túnel carpiano", "Libera tensión en antebrazo", "Reduce hormigueos en mano"],
    contraindications: ["tunel_carpiano_agudo"],
    youtubeId: "mSZWSQSSEjE",
    steps: [
      "Extiende el brazo derecho al frente, palma mirando hacia afuera",
      "Con la mano izquierda tira de los dedos hacia atrás",
      "Siente el estiramiento en la cara interna del antebrazo",
      "Mantén 30 segundos por lado. Repite 3 veces"
    ],
    variants: [
      { name: "En mesa", for: ["dolor_agudo"], icon: "🪵", description: "Dorso de la mano en la mesa, deja que el peso del brazo haga el estiramiento." },
      { name: "Flexores y extensores", for: ["uso_intensivo"], icon: "🔁", description: "Alterna palma arriba (flexores) y palma abajo (extensores)." }
    ]
  },
  {
    id: 17, name: "Isquiotibiales Tumbado", category: "Cadena Posterior", icon: "🦵", level: "Principiante",
    duration: 120, color: "#6a9e5b",
    tags: ["isquiotibiales", "lumbar", "corredor", "sedentario", "cadena_posterior"],
    description: "Estira la musculatura isquiotibial sin comprometer la lumbar.",
    benefits: ["Mejora extensión de rodilla", "Reduce tensión lumbar", "Previene lesiones del muslo posterior"],
    contraindications: [],
    youtubeId: "gK9KZ1Bh8YI",
    steps: [
      "Túmbate boca arriba, dobla la rodilla derecha con el pie en el suelo",
      "Eleva la pierna izquierda y agarra la parte posterior del muslo",
      "Estira la rodilla izquierda suavemente hasta sentir tensión",
      "Mantén 45–60 segundos por lado. La espalda permanece plana"
    ],
    variants: [
      { name: "Con banda o toalla", for: ["poco_alcance", "embarazo"], icon: "🏳️", description: "Pasa una banda por la planta del pie y tira de los extremos." },
      { name: "De pie en silla", for: ["dificultad_suelo"], icon: "🪑", description: "Talón en el asiento de una silla, espalda recta, inclínate ligeramente." }
    ]
  },
  {
    id: 18, name: "Perro Boca Abajo", category: "Cadena Posterior", icon: "🐕", level: "Principiante",
    duration: 90, color: "#c47c3e",
    tags: ["cadena_posterior", "calentamiento", "hombros", "isquiotibiales", "yoga"],
    description: "Postura global que estira simultáneamente la cadena posterior completa y los hombros.",
    benefits: ["Estiramiento global de cadena posterior", "Descompresión espinal activa", "Fortalece hombros en posición de carga"],
    contraindications: ["tunel_carpiano_severo"],
    youtubeId: "j97SSGsnCAQ",
    steps: [
      "Desde cuatro patas, empuja las manos contra el suelo y eleva las caderas",
      "Intenta estirar las rodillas y apoyar los talones",
      "La cabeza queda entre los brazos, mirada hacia los pies",
      "Alterna doblar una rodilla y luego la otra (pedalear). 30–60 segundos"
    ],
    variants: [
      { name: "Con rodillas dobladas", for: ["isquiotibiales_cortos", "principiante"], icon: "🎯", description: "Mantén las rodillas dobladas. Objetivo: elongación espinal, no tocar el suelo." },
      { name: "En mesa o silla", for: ["muñecas_débiles", "embarazo_avanzado"], icon: "🪑", description: "Apoya las manos en el asiento de una silla. Reduce carga en muñecas." }
    ]
  },
  {
    id: 19, name: "Banda Iliotibial", category: "Cadena Posterior", icon: "🏃", level: "Intermedio",
    duration: 120, color: "#7b6fa0",
    tags: ["TFL", "corredor", "lateral_rodilla", "deportista", "cadera"],
    description: "Aborda la banda IT, fuente frecuente de dolor lateral de rodilla en corredores.",
    benefits: ["Previene síndrome de la banda IT", "Reduce dolor lateral de rodilla", "Mejora biomecánica de la carrera"],
    contraindications: [],
    youtubeId: "LfP7U_Uv2RI",
    steps: [
      "De pie, cruza la pierna derecha por detrás de la izquierda",
      "Inclínate hacia la izquierda extendiendo el brazo derecho sobre la cabeza",
      "Siente el estiramiento en el lateral externo del muslo derecho",
      "Mantén 45 segundos. Cambia. Repite 2 veces"
    ],
    variants: [
      { name: "Foam roller", for: ["corredor_habitual", "mayor_intensidad"], icon: "🔴", description: "Foam roller bajo el lateral del muslo, rueda de cadera a rodilla." },
      { name: "Con apoyo", for: ["equilibrio"], icon: "🤸", description: "Apoya una mano en la pared para mayor estabilidad." }
    ]
  },
  {
    id: 20, name: "Respiración Diafragmática", category: "Columna", icon: "🫁", level: "Principiante",
    duration: 180, color: "#5ba888",
    tags: ["estrés", "lumbar", "sedentario", "principiante", "nocturno", "core"],
    description: "Activa el diafragma y relaja el sistema nervioso. Base de cualquier programa de movilidad.",
    benefits: ["Activa el core profundo", "Regula el sistema nervioso", "Reduce tensión en psoas"],
    contraindications: [],
    youtubeId: "0Ua9bOsTlps",
    steps: [
      "Túmbate boca arriba, rodillas dobladas. Una mano en el pecho, otra en el abdomen",
      "Inhala lentamente por la nariz: la mano del abdomen debe subir, la del pecho quieta",
      "Exhala por la boca o la nariz, dejando caer el abdomen completamente",
      "5–10 respiraciones lentas. 4 segundos inhala, 6 segundos exhala"
    ],
    variants: [
      { name: "Sentado", for: ["embarazo_avanzado", "oficina"], icon: "🪑", description: "Misma técnica sentado en una silla. Ideal para pausas en el trabajo." },
      { name: "Con peso", for: ["avanzado"], icon: "⚖️", description: "Coloca un libro en el abdomen. El peso añade retroalimentación táctil." }
    ]
  },
  {
    id: 21, name: "Flexión Plantar y Dorsal", category: "Tobillo y Pie", icon: "🦶", level: "Principiante",
    duration: 60, color: "#7b6fa0",
    tags: ["tobillo", "sedentario", "oficina", "circulacion", "embarazo"],
    description: "Movilización activa del tobillo para activar la circulación en períodos de sedestación.",
    benefits: ["Activa la bomba muscular venosa", "Reduce riesgo de trombosis en vuelos", "Movilización sin levantarse"],
    contraindications: [],
    youtubeId: "NN3ic2LuYxQ",
    steps: [
      "Sentado, pies apoyados en el suelo",
      "Levanta las puntas de los pies manteniendo los talones en el suelo",
      "Baja las puntas y levanta los talones",
      "Alterna rítmicamente durante 60–90 segundos"
    ],
    variants: [
      { name: "Solo un pie", for: ["asimetría", "rehabilitación"], icon: "1️⃣", description: "Trabaja un tobillo cada vez para detectar diferencias entre lados." },
      { name: "Con banda", for: ["fortalecimiento"], icon: "💪", description: "Añade resistencia con una banda elástica." }
    ]
  },
  {
    id: 22, name: "Elevación de Brazos Overhead", category: "Hombros", icon: "🙌", level: "Principiante",
    duration: 90, color: "#7b6fa0",
    tags: ["hombros", "sedentario", "movilidad_activa", "postura"],
    description: "Trabaja el rango activo de elevación del hombro, clave para la vida diaria.",
    benefits: ["Mejora flexión de hombro", "Activa serrato anterior y trapecio inferior", "Evalúa asimetrías"],
    contraindications: [],
    youtubeId: "gRd3aRHpUG4",
    steps: [
      "De pie o sentado, espalda recta contra la pared si es posible",
      "Eleva lentamente ambos brazos hacia arriba (palmas mirándose)",
      "Intenta que los brazos queden pegados a las orejas al final",
      "Baja lentamente. 10 repeticiones lentas y controladas"
    ],
    variants: [
      { name: "Un brazo con asistencia", for: ["asimetría", "dolor_unilateral"], icon: "🤝", description: "El brazo sano ayuda al lesionado. Permite trabajar diferencias entre lados." },
      { name: "Tumbado boca arriba", for: ["dolor_postural"], icon: "🛏️", description: "Elimina la gravedad postural. Más fácil de ejecutar con técnica limpia." }
    ]
  },
  {
    id: 23, name: "Cuadrado Lumbar Lateral", category: "Columna", icon: "📐", level: "Intermedio",
    duration: 120, color: "#5ba888",
    tags: ["lumbar", "lateral", "corredor", "deportista", "columna"],
    description: "Estira el cuadrado lumbar, músculo clave en el dolor de espalda baja lateral.",
    benefits: ["Libera tensión lateral lumbar", "Mejora simetría pélvica", "Previene dolor unilateral de espalda"],
    contraindications: [],
    youtubeId: "Bn8s8YA9PcU",
    steps: [
      "Túmbate boca arriba, rodillas dobladas",
      "Desplaza ambas piernas juntas hacia la derecha, el torso estático",
      "Siente el estiramiento en el lateral izquierdo de la espalda",
      "Mantén 30–45 segundos. Cambia de lado"
    ],
    variants: [
      { name: "De pie en marco de puerta", for: ["dificultad_suelo"], icon: "🚪", description: "Agarra el marco con una mano, deja caer el cuerpo al lado contrario en arco." },
      { name: "Sentado con inclinación", for: ["oficina"], icon: "💼", description: "Sentado, eleva un brazo sobre la cabeza e inclínate al lado contrario." }
    ]
  },
];

// ─── QUESTIONNAIRE ────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: "activity",
    question: "¿Cuál es tu nivel de actividad física actual?",
    icon: "⚡",
    multi: false,
    options: [
      { value: "sedentario", label: "Sedentario", sub: "Trabajo en escritorio, poco movimiento" },
      { value: "ligero", label: "Ligero", sub: "Paseos y actividad casual" },
      { value: "moderado", label: "Moderado", sub: "Deporte 2–3 veces por semana" },
      { value: "deportista", label: "Deportista", sub: "Entrenamiento frecuente o intenso" }
    ]
  },
  {
    id: "areas",
    question: "¿Tienes molestias en alguna zona?",
    icon: "📍",
    multi: true,
    options: [
      { value: "lumbar", label: "Espalda baja", sub: "Zona lumbar" },
      { value: "cuello", label: "Cuello / cervicales", sub: "Tensión o rigidez" },
      { value: "cadera", label: "Cadera", sub: "Incluyendo glúteo o ciático" },
      { value: "hombros", label: "Hombros", sub: "Movilidad o dolor" },
      { value: "rodilla", label: "Rodillas", sub: "Dolor o inestabilidad" },
      { value: "tobillo", label: "Tobillo / pie", sub: "Rigidez o dolor" },
      { value: "ninguna", label: "Sin molestias", sub: "Solo trabajo preventivo" }
    ]
  },
  {
    id: "conditions",
    question: "¿Alguna condición especial a tener en cuenta?",
    icon: "🏥",
    multi: true,
    options: [
      { value: "hernia", label: "Hernia discal", sub: "Lumbar o cervical" },
      { value: "embarazo", label: "Embarazo", sub: "Cualquier trimestre" },
      { value: "reemplazo_cadera", label: "Prótesis de cadera", sub: "" },
      { value: "osteoporosis", label: "Osteoporosis", sub: "" },
      { value: "manguito", label: "Lesión de manguito", sub: "Hombro" },
      { value: "ninguna", label: "Ninguna", sub: "Sin condiciones especiales" }
    ]
  },
  {
    id: "goal",
    question: "¿Cuál es tu objetivo principal?",
    icon: "🎯",
    multi: false,
    options: [
      { value: "alivio", label: "Aliviar molestias", sub: "Reducir dolor o rigidez actual" },
      { value: "prevencion", label: "Prevención", sub: "Evitar lesiones futuras" },
      { value: "rendimiento", label: "Rendimiento", sub: "Mejorar flexibilidad para el deporte" },
      { value: "relajacion", label: "Relajación", sub: "Descanso y recuperación" }
    ]
  }
];

// ─── SMART RECOMMENDATION ENGINE ─────────────────────────────────────────────
function recommend(answers) {
  const flat = Object.values(answers).flat();

  const scored = EXERCISES.map(ex => {
    // Hard exclude only on explicit contraindications
    const hardExclude = ex.contraindications.some(c => flat.includes(c));
    if (hardExclude) return { ...ex, score: -1 };

    let score = 0;
    ex.tags.forEach(tag => { if (flat.includes(tag)) score += 3; });

    // Fallback bonuses so everyone gets variety
    if (ex.level === "Principiante") score += 1;
    if (flat.includes("sedentario") && ex.tags.includes("calentamiento")) score += 1;
    if (flat.includes("deportista") && ex.level === "Intermedio") score += 1;
    if (flat.includes("estrés") && ex.tags.includes("estrés")) score += 2;
    if (flat.includes("relajacion") && ex.tags.includes("nocturno")) score += 2;

    // Ensure at least neutral score for all non-excluded exercises
    return { ...ex, score: Math.max(score, 0.1) };
  });

  const valid = scored.filter(e => e.score > 0).sort((a, b) => b.score - a.score);

  // Always return at least 8, pad with highest-scoring if needed
  return valid.length >= 8 ? valid : valid.concat(
    scored.filter(e => e.score === 0.1 && !valid.find(v => v.id === e.id))
  ).slice(0, Math.max(valid.length, 8));
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const CATEGORIES = ["Todos", "Columna", "Cadera", "Hombros", "Cuello", "Tobillo y Pie", "Muñeca", "Cadena Posterior"];

// ─── YOUTUBE EMBED ───────────────────────────────────────────────────────────
function YouTubeEmbed({ videoId, color }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: "#000" }}>
      {playing ? (
        <iframe
          width="100%" height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Ejercicio" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }}/>
          <button
            onClick={() => setPlaying(true)}
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 64, height: 64, borderRadius: "50%",
              background: color, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 30px ${color}80`, transition: "transform 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translate(-50%,-50%) scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translate(-50%,-50%) scale(1)"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
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

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommended, setRecommended] = useState([]);
  const [selected, setSelected] = useState(null);
  const [guideStep, setGuideStep] = useState(0);
  const [activeVariant, setActiveVariant] = useState(null);
  const [filterCat, setFilterCat] = useState("Todos");
  const [timerLeft, setTimerLeft] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [activeTab, setActiveTab] = useState("video"); // video | guide | variants
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRunning && timerLeft > 0) {
      timerRef.current = setTimeout(() => setTimerLeft(t => t - 1), 1000);
    } else if (timerLeft === 0 && timerRunning) {
      setTimerRunning(false);
      setTimerDone(true);
    }
    return () => clearTimeout(timerRef.current);
  }, [timerRunning, timerLeft]);

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
    if (quizStep < QUESTIONS.length - 1) { setQuizStep(s => s + 1); }
    else { setRecommended(recommend(answers)); setScreen("results"); }
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

  const bg = "#0d1a14", text = "#e2ddd5", muted = "#7a7260", accent = "#5ba888";
  const surface = "rgba(255,255,255,0.035)", border = "rgba(255,255,255,0.07)";

  const displayList = screen === "results"
    ? recommended
    : (filterCat === "Todos" ? EXERCISES : EXERCISES.filter(e => e.category === filterCat));

  // ── HOME ─────────────────────────────────────────────────────────────────
  if (screen === "home") return (
    <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'Palatino Linotype', Palatino, serif", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-15%", left: "-5%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(91,168,136,0.08) 0%, transparent 70%)" }}/>
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(123,111,160,0.06) 0%, transparent 70%)" }}/>
        <div style={{ position: "absolute", top: "40%", right: "15%", width: "25vw", height: "25vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,124,62,0.04) 0%, transparent 70%)" }}/>
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", padding: "0 24px", paddingTop: 60 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, border: `1px solid ${accent}40`, color: accent, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, display: "inline-block" }}/>
          Movimiento consciente
        </div>
        <h1 style={{ fontSize: "clamp(2.2rem,8vw,3.8rem)", fontWeight: 400, lineHeight: 1.05, margin: "0 0 18px", letterSpacing: "-0.02em" }}>
          Movilidad<br/><em style={{ color: accent, fontStyle: "italic" }}>& Flexibilidad</em>
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: muted, maxWidth: 440, marginBottom: 44 }}>
          No hay una rutina universal. Encuentra los ejercicios que tu cuerpo necesita hoy, con guías en vídeo y adaptaciones para cada condición.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          <button onClick={() => { setQuizStep(0); setAnswers({}); setScreen("quiz"); }} style={{
            background: accent, border: "none", borderRadius: 100, padding: "14px 30px",
            color: "#fff", fontSize: 15, cursor: "pointer", fontFamily: "inherit",
            boxShadow: `0 4px 24px ${accent}40`, letterSpacing: "0.02em", transition: "all 0.2s"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            Personalizar mi rutina →
          </button>
          <button onClick={() => setScreen("library")} style={{
            background: "transparent", border: `1px solid ${border}`, borderRadius: 100,
            padding: "14px 28px", color: muted, fontSize: 15, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s"
          }}
          onMouseEnter={e => { e.currentTarget.style.color = text; e.currentTarget.style.borderColor = `${accent}50`; }}
          onMouseLeave={e => { e.currentTarget.style.color = muted; e.currentTarget.style.borderColor = border; }}>
            Ver biblioteca completa
          </button>
        </div>
        <div style={{ display: "flex", gap: 36, paddingTop: 28, borderTop: `1px solid ${border}` }}>
          {[["23", "Ejercicios"], ["7", "Zonas del cuerpo"], ["46", "Variantes adaptadas"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: "clamp(1.5rem,4vw,2rem)", color: accent, fontStyle: "italic", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, color: muted, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  if (screen === "quiz") {
    const q = QUESTIONS[quizStep];
    const sel = answers[q.id] || [];
    const hasAnswer = sel.length > 0;
    return (
      <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'Palatino Linotype', Palatino, serif", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 3, background: "rgba(255,255,255,0.06)" }}>
          <div style={{ height: "100%", width: `${(quizStep / QUESTIONS.length) * 100}%`, background: accent, transition: "width 0.4s", borderRadius: 2 }}/>
        </div>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "36px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 44, alignItems: "center" }}>
            <button onClick={() => quizStep > 0 ? setQuizStep(s => s - 1) : setScreen("home")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "inherit", padding: 0 }}>
              ← {quizStep === 0 ? "Inicio" : "Atrás"}
            </button>
            <span style={{ fontSize: 12, color: muted }}>{quizStep + 1} / {QUESTIONS.length}</span>
          </div>
          <div style={{ fontSize: 36, marginBottom: 14 }}>{q.icon}</div>
          <h2 style={{ fontSize: "clamp(1.2rem,5vw,1.7rem)", fontWeight: 400, margin: "0 0 6px", lineHeight: 1.3 }}>{q.question}</h2>
          {q.multi && <p style={{ fontSize: 12, color: muted, margin: "0 0 28px", letterSpacing: "0.05em" }}>Selecciona todas las que apliquen</p>}
          {!q.multi && <div style={{ height: 24 }}/>}
          <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
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
                    <div style={{ fontSize: 14, marginBottom: opt.sub ? 2 : 0 }}>{opt.label}</div>
                    {opt.sub && <div style={{ fontSize: 12, color: muted }}>{opt.sub}</div>}
                  </div>
                  {on && <div style={{ width: 20, height: 20, borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</div>}
                </button>
              );
            })}
          </div>
          <button onClick={nextQuiz} disabled={!hasAnswer} style={{
            marginTop: 28, background: hasAnswer ? accent : "rgba(255,255,255,0.05)",
            border: "none", borderRadius: 100, padding: "15px 32px",
            color: hasAnswer ? "#fff" : muted, fontSize: 15,
            cursor: hasAnswer ? "pointer" : "default", fontFamily: "inherit",
            boxShadow: hasAnswer ? `0 0 20px ${accent}30` : "none", transition: "all 0.2s"
          }}>
            {quizStep < QUESTIONS.length - 1 ? "Siguiente →" : "Ver mi rutina personalizada →"}
          </button>
        </div>
      </div>
    );
  }

  // ── LIST (results or library) ─────────────────────────────────────────────
  if (screen === "results" || screen === "library") return (
    <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'Palatino Linotype', Palatino, serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ paddingTop: 36, paddingBottom: 20 }}>
          <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "inherit", padding: 0, marginBottom: 24 }}>← Inicio</button>
          {screen === "results" ? (
            <>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>Tu rutina personalizada</div>
              <h2 style={{ fontSize: "clamp(1.4rem,5vw,2rem)", fontWeight: 400, margin: "0 0 6px" }}>{recommended.length} ejercicios seleccionados</h2>
              <p style={{ fontSize: 13, color: muted, margin: "0 0 20px" }}>Ordenados por relevancia según tus respuestas.</p>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => { setQuizStep(0); setAnswers({}); setScreen("quiz"); }} style={{ background: "none", border: `1px solid ${border}`, borderRadius: 100, padding: "7px 18px", color: muted, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>Repetir test</button>
                <button onClick={() => setScreen("library")} style={{ background: "none", border: `1px solid ${border}`, borderRadius: 100, padding: "7px 18px", color: muted, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>Ver todos</button>
              </div>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: "clamp(1.4rem,5vw,2rem)", fontWeight: 400, margin: "0 0 20px" }}>Biblioteca completa</h2>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setFilterCat(cat)} style={{
                    padding: "6px 14px", borderRadius: 100, fontFamily: "inherit", fontSize: 11,
                    cursor: "pointer", letterSpacing: "0.05em",
                    border: `1.5px solid ${filterCat === cat ? accent : border}`,
                    background: filterCat === cat ? `${accent}15` : "transparent",
                    color: filterCat === cat ? accent : muted, transition: "all 0.15s"
                  }}>{cat}</button>
                ))}
              </div>
            </>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 12, paddingBottom: 60 }}>
          {displayList.map((ex, i) => (
            <button key={ex.id} onClick={() => openEx(ex)} style={{
              background: surface, border: `1px solid ${border}`,
              borderRadius: 18, padding: "20px 18px", textAlign: "left",
              cursor: "pointer", fontFamily: "inherit", color: text,
              transition: "all 0.2s", position: "relative", overflow: "hidden"
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${ex.color}60`; e.currentTarget.style.background = `${ex.color}08`; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.background = surface; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, background: `radial-gradient(circle at top right, ${ex.color}18, transparent)`, borderRadius: "0 18px 0 60px" }}/>
              {screen === "results" && i < 3 && <div style={{ position: "absolute", top: 10, right: 12, fontSize: 9, color: accent, letterSpacing: "0.1em" }}>★ TOP</div>}
              <div style={{ fontSize: 28, marginBottom: 10 }}>{ex.icon}</div>
              <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: ex.color, marginBottom: 4 }}>{ex.category}</div>
              <div style={{ fontSize: 15, marginBottom: 10, lineHeight: 1.3 }}>{ex.name}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, color: ex.color, background: `${ex.color}15`, padding: "2px 8px", borderRadius: 100 }}>{ex.level}</span>
                <span style={{ fontSize: 10, color: muted }}>⏱ {Math.floor(ex.duration / 60)}m</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ── DETAIL ───────────────────────────────────────────────────────────────
  if (screen === "detail" && selected) {
    const ex = selected;
    const timerPct = (timerLeft / ex.duration) * 100;
    const fmtTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

    return (
      <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'Palatino Linotype', Palatino, serif" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ paddingTop: 32, paddingBottom: 16 }}>
            <button onClick={() => setScreen(recommended.length ? "results" : "library")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "inherit", padding: 0 }}>← Volver</button>
          </div>

          {/* Header */}
          <div style={{ background: surface, border: `1px solid ${ex.color}30`, borderRadius: 20, padding: "22px 22px 18px", marginBottom: 14, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, background: `radial-gradient(circle, ${ex.color}12, transparent 70%)`, borderRadius: "50%" }}/>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ fontSize: 40 }}>{ex.icon}</div>
              <div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: ex.color, marginBottom: 4 }}>{ex.category}</div>
                <h2 style={{ fontSize: "clamp(1.2rem,4vw,1.7rem)", fontWeight: 400, margin: "0 0 8px", lineHeight: 1.2 }}>{ex.name}</h2>
                <p style={{ fontSize: 13, color: muted, margin: "0 0 12px", lineHeight: 1.6 }}>{ex.description}</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10, color: ex.color, background: `${ex.color}15`, padding: "3px 10px", borderRadius: 100 }}>{ex.level}</span>
                  <span style={{ fontSize: 10, color: muted, background: surface, padding: "3px 10px", borderRadius: 100 }}>⏱ {fmtTime(ex.duration)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timer */}
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "16px 20px", marginBottom: 14, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ position: "relative", width: 52, height: 52, flexShrink: 0 }}>
              <svg width="52" height="52" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="26" cy="26" r="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5"/>
                <circle cx="26" cy="26" r="20" fill="none" stroke={timerDone ? "#4ade80" : ex.color} strokeWidth="3.5"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - timerPct / 100)}`}
                  strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s linear" }}/>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: timerDone ? "#4ade80" : ex.color, fontWeight: 600 }}>
                {timerDone ? "✓" : fmtTime(timerLeft)}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: muted, marginBottom: 7 }}>
                {timerDone ? "¡Ejercicio completado! 🎉" : "Temporizador"}
              </div>
              <div style={{ display: "flex", gap: 7 }}>
                {!timerDone && (
                  <button onClick={() => setTimerRunning(r => !r)} style={{ background: timerRunning ? `${ex.color}20` : "transparent", border: `1px solid ${ex.color}50`, borderRadius: 100, padding: "5px 14px", color: ex.color, fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>
                    {timerRunning ? "⏸ Pausa" : "▶ Iniciar"}
                  </button>
                )}
                <button onClick={() => { setTimerLeft(ex.duration); setTimerRunning(false); setTimerDone(false); }} style={{ background: "transparent", border: `1px solid ${border}`, borderRadius: 100, padding: "5px 12px", color: muted, fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>↺ Reset</button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "16px 20px", marginBottom: 14 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: muted, marginBottom: 12 }}>Beneficios</div>
            {ex.benefits.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                <span style={{ color: ex.color, fontSize: 14 }}>·</span>
                <span style={{ fontSize: 13, color: "#c8c0b2", lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>

          {/* Tabs: Video / Guía / Variantes */}
          <div style={{ display: "flex", gap: 0, marginBottom: 12, background: surface, borderRadius: 12, padding: 4, border: `1px solid ${border}` }}>
            {[["video", "▶ Video guía"], ["guide", "📋 Paso a paso"], ["variants", "⚙️ Variantes"]].map(([t, l]) => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                flex: 1, padding: "9px 4px", borderRadius: 9,
                background: activeTab === t ? ex.color : "transparent",
                border: "none", color: activeTab === t ? "#fff" : muted,
                fontSize: 12, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
                letterSpacing: "0.02em"
              }}>{l}</button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "video" && (
            <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 14 }}>
              <YouTubeEmbed videoId={ex.youtubeId} color={ex.color}/>
              <div style={{ background: surface, border: `1px solid ${border}`, borderTop: "none", borderRadius: "0 0 16px 16px", padding: "12px 16px" }}>
                <p style={{ fontSize: 12, color: muted, margin: 0, lineHeight: 1.6 }}>
                  Video de referencia. Cada cuerpo es diferente — úsalo como guía visual, no como modelo exacto a seguir.
                </p>
              </div>
            </div>
          )}

          {activeTab === "guide" && (
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "18px 20px", marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: muted }}>Instrucciones</div>
                <button onClick={() => { setGuideStep(0); setScreen("guide"); }} style={{ background: ex.color, border: "none", borderRadius: 100, padding: "7px 16px", color: "#fff", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>
                  Modo guiado →
                </button>
              </div>
              {ex.steps.map((s, i) => (
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
                <div style={{ fontSize: 11, color: accent, marginBottom: 4 }}>💡 ¿Cuál elegir?</div>
                <p style={{ fontSize: 12, color: muted, lineHeight: 1.65, margin: 0 }}>Empieza siempre por la versión más suave aunque no tengas limitaciones. La progresión consciente protege articulaciones y maximiza beneficios.</p>
              </div>
              {ex.variants.map((v, i) => (
                <button key={i} onClick={() => setActiveVariant(activeVariant === i ? null : i)} style={{
                  width: "100%", background: activeVariant === i ? `${ex.color}08` : surface,
                  border: `1px solid ${activeVariant === i ? ex.color + "50" : border}`,
                  borderRadius: 13, padding: "14px 16px", marginBottom: 8,
                  textAlign: "left", cursor: "pointer", fontFamily: "inherit", color: text, transition: "all 0.2s"
                }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{v.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, marginBottom: 6 }}>{v.name}</div>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: activeVariant === i ? 8 : 0 }}>
                        {v.for.map(f => (
                          <span key={f} style={{ fontSize: 10, color: ex.color, background: `${ex.color}12`, padding: "2px 8px", borderRadius: 100 }}>{f.replace(/_/g, " ")}</span>
                        ))}
                      </div>
                      {activeVariant === i && <p style={{ fontSize: 12, color: muted, lineHeight: 1.6, margin: 0 }}>{v.description}</p>}
                    </div>
                    <span style={{ color: muted, fontSize: 12, transition: "transform 0.2s", transform: activeVariant === i ? "rotate(180deg)" : "none" }}>▾</span>
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

  // ── GUIDED MODE ──────────────────────────────────────────────────────────
  if (screen === "guide" && selected) {
    const ex = selected;
    const isLast = guideStep === ex.steps.length - 1;
    return (
      <div style={{ minHeight: "100vh", background: bg, color: text, fontFamily: "'Palatino Linotype', Palatino, serif", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          {ex.steps.map((_, i) => (
            <div key={i} style={{ height: 3, flex: 1, background: i <= guideStep ? ex.color : "rgba(255,255,255,0.07)", transition: "background 0.4s" }}/>
          ))}
        </div>
        <div style={{ maxWidth: 540, margin: "0 auto", padding: "28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <button onClick={() => setScreen("detail")} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "inherit", padding: 0, marginBottom: 36, alignSelf: "flex-start" }}>
            ← {ex.name}
          </button>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ fontSize: 72, marginBottom: 28, filter: `drop-shadow(0 0 24px ${ex.color}50)` }}>{ex.icon}</div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: muted, marginBottom: 18 }}>
              Paso {guideStep + 1} de {ex.steps.length}
            </div>
            <p style={{ fontSize: "clamp(1.05rem,3.5vw,1.3rem)", lineHeight: 1.75, color: text, maxWidth: 420, fontStyle: "italic", marginBottom: 44 }}>
              "{ex.steps[guideStep]}"
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {guideStep > 0 && (
                <button onClick={() => setGuideStep(s => s - 1)} style={{ background: "transparent", border: `1px solid ${border}`, borderRadius: 100, padding: "12px 22px", color: muted, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>← Anterior</button>
              )}
              <button onClick={() => isLast ? setScreen("detail") : setGuideStep(s => s + 1)} style={{
                background: ex.color, border: "none", borderRadius: 100, padding: "13px 30px",
                color: "#fff", fontSize: 14, cursor: "pointer", fontFamily: "inherit",
                boxShadow: `0 0 20px ${ex.color}40`
              }}>
                {isLast ? "✓ Completado" : "Siguiente →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

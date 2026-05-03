# mobility-app — CLAUDE.md

SPA de ejercicios de movilidad personalizados. React 19 + Vite 8. Sin backend ni router. Bilingüe ES/EN.

## Arquitectura

- `src/App.jsx` — lógica del componente y pantallas (~380 líneas)
- `src/data/exercises.js` — 31 ejercicios con contenido bilingüe + `catLabel()` helper
- `src/data/strings.js` — textos de UI (`S`), cuestionario (`QUESTIONS`), claves de categoría (`CATEGORY_KEYS`)

Sin router — la navegación es un estado `screen` que actúa como máquina de estados:

```
home → quiz → results → detail → guide
            ↘ library ↗
```

`recommended` (array) persiste mientras no se repita el test. Si está vacío al volver desde `detail`, regresa a `library`.

## Multiidioma

`lang` state (`"es"` | `"en"`) en `App`. Botón fijo top-right en todas las pantallas. Acceso al contenido: `ex[lang].name`, `ex[lang].steps`, etc. — los `tags` y `contraindications` son siempre en español (claves internas, no mostradas). Textos de UI vía `const t = S[lang]`.

Las categorías se almacenan en español como clave interna (`"Columna"`, `"CrossFit"`…). `catLabel(cat, lang)` traduce para mostrar. El filtro de biblioteca compara contra la clave española.

## Ejercicios

31 en total: 23 generales + 8 de CrossFit/halterofilia. Los 8 CrossFit abordan: dorsiflexión de tobillo, posición de rack frontal, movilidad torácica para overhead, apertura de cadera para sentadilla olímpica, estiramiento de dorsales, rotación externa overhead, activación de glúteo, muñeca para front squat.

Videos de YouTube verificados de canales reconocidos (AskDoctorJo, YogaRenew, HSS). IDs de ejercicios 8, 13, 22, 23 son los originales — pendiente de verificar.

## Motor de recomendación

`recommend(answers)` aplana todas las respuestas en un array plano y puntúa cada ejercicio por `tags` (+3/tag). Bonificaciones extra: `crossfit`/`weightlifting` seleccionados → +4 a ejercicios con esos tags. Exclusión dura solo si condición coincide con `contraindications[]`. Mínimo 8 resultados garantizados.

## YouTube embed

Lazy: miniatura estática (`hqdefault.jpg`) hasta clic. Solo entonces monta el `<iframe autoplay=1>`. Si el ID es inválido, la miniatura carga rota pero la app no rompe.

## Estilos

100% inline styles. Sin CSS framework. `Palatino Linotype` serif. Paleta: fondo `#0d1a14`, acento `#5ba888`, superficie `rgba(255,255,255,0.035)`.

`inset: 0` reemplazado por `top:0;right:0;bottom:0;left:0` en todo el código — compatible con iOS < 14.

## Temporizador

`useRef` para el `setTimeout` (no `setInterval`) — se limpia en el cleanup del `useEffect` para evitar memory leaks al cambiar de pantalla mientras corre.

## Decisiones técnicas

- Sin React Router — estado `screen` es suficiente para 6 pantallas
- Sin `useState` separado por pantalla — todo el estado vive en `App()`. Candidato a Context si crece
- `variant.for[]` es solo display (chips de condición), no participa en la lógica de recomendación
- `filterCat` = `null` significa "todos" — evita hardcodear el string "Todos"/"All" en la lógica

## Desarrollo

```bash
npm run dev      # Vite dev server
npm run build    # dist/
npm run preview  # preview del build
```

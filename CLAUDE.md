# mobility-app — CLAUDE.md

SPA de ejercicios de movilidad personalizados. React 19 + Vite 8. Sin backend ni router. Bilingüe ES/EN.

## Infraestructura

- **Deploy**: push a `main` → Vercel auto-deploy (GitHub: `mglzgsr/mobility-app`)
- **Dev**: `npm run dev` → puerto 5173 (configurado en `.claude/launch.json`)

## Arquitectura

`src/App.jsx` — máquina de estados vía `screen`:

```
home → quiz → results → detail → guide
            ↘ library ↗
                      → routine_run
```

`recommended` persiste mientras no se repita el test. Si está vacío al volver desde `detail`, regresa a `library`.

## Archivos clave

- `src/data/exercises.js` — 40 ejercicios bilingüe + `catLabel()` + `CAT_ES_TO_EN`
- `src/data/strings.js` — textos UI (`S`), cuestionario (`QUESTIONS`), `CATEGORY_KEYS`

## Ejercicios

40 en total: 23 generales + 8 CrossFit/halterofilia + 4 Rodilla + 3 Hombros adicionales + 2 Codo/antebrazo. Categorías: Columna, Cadera, Hombros, Cuello, Tobillo y Pie, Muñeca, Rodilla, Cadena Posterior, CrossFit.

YouTube IDs de ejercicios 8, 13, 22, 23 sin verificar — pueden estar rotos.

## Motor de recomendación

`recommend(answers)` en `App.jsx`: aplana respuestas → puntúa por `tags` (+3/tag) → bonifica crossfit/weightlifting (+4) → excluye duro si hay `contraindications[]` coincidentes → selección greedy por presupuesto de tiempo con límite creciente de ejercicios por categoría (`maxPerCat`: 2 → 3 → ∞) para forzar variedad.

`TIME_BUDGETS = { rapida: 600, estandar: 900, larga: 1500, completa: 2700 }` (segundos).

## Persistencia

`localStorage` clave `"mobility_routine"` → `{date, answers, exerciseIds}`. Se valida contra la fecha del día; si es de ayer o antes, se ignora. La home muestra una tarjeta "Continuar rutina de hoy" si hay datos válidos.

## Modo rutina secuencial (`routine_run`)

`routineIdx` avanza ejercicio a ejercicio. Al completar el temporizador → `autoCountdown(5)` → avanza automáticamente. `autoRef` gestiona el timeout del countdown; se limpia en `advanceRoutine()` para evitar doble avance.

## Multiidioma

`lang` state (`"es"` | `"en"`). Contenido: `ex[lang].name`, `ex[lang].steps`, etc. Tags y `contraindications` son siempre en español (claves internas). UI vía `const t = S[lang]`. Categorías almacenadas en español; `catLabel(cat, lang)` traduce para mostrar; el filtro compara contra la clave española.

## Responsive

`useIsMobile()` hook (< 640px) basado en `window.innerWidth` con listener de resize. Usos:
- Quiz móvil: `height: 100dvh`, scroll en opciones, botón sticky con gradiente al fondo
- Quiz escritorio: layout natural, botón fluye tras las opciones
- Biblioteca: `repeat(2, 1fr)` en móvil vs `auto-fill minmax(190px, 1fr)` en escritorio
- Detalle: tabs con solo icono en móvil (`▶ / 📋 / ⚙️`), texto completo en escritorio

## YouTube embed

Lazy: miniatura `hqdefault.jpg` hasta clic → monta `<iframe autoplay=1>`. ID inválido → miniatura rota, app no rompe.

## Temporizador

`useRef` con `setTimeout` (no `setInterval`) — cleanup en `useEffect` evita memory leaks al cambiar de pantalla con el timer activo. El mismo estado `timerLeft/timerRunning/timerDone` sirve para `detail` y `routine_run` (solo una pantalla activa a la vez).

## Decisiones técnicas

- Sin React Router — `screen` state es suficiente para 7 pantallas
- Todo el estado en `App()` — candidato a Context si crece más
- `filterCat = null` significa "todos" — evita hardcodear "Todos"/"All" en lógica de filtro
- `variant.for[]` es solo display (chips), no participa en recomendación
- `inset: 0` → `top:0;right:0;bottom:0;left:0` en todo el código — compatibilidad iOS < 14
- `100dvh` en quiz móvil (no `100vh`) — evita el salto cuando aparece/oculta la barra del navegador en Android

## Pendiente

- Verificar YouTube IDs de ejercicios 8, 13, 22, 23
- Stats de home (`"40"`, `"9"`, `"80"`) hardcodeados — deberían derivarse de `EXERCISES.length` y `CATEGORY_KEYS.length`

## Desarrollo

```bash
npm run dev      # Vite → puerto 5173
npm run build    # dist/
npm run preview  # preview del build → puerto 4173
```

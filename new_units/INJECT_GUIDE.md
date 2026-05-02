# 📚 Bizce Curriculum — Nuevas Unidades v2.0
## Guía de Inyección para Claude Code

---

## Resumen
**Total unidades nuevas:** 16  
**Estado:** A1 y A2 → 100% completo (teoría + quizzes + exámenes de 30 preguntas)  
**Estado:** B1/U14.5, B2, C1, C2 → Teoría 100% completa. Quizzes/examen = stubs básicos a completar.

---

## Estructura de Carpetas

```
new_units/
├── A1/
│   ├── unidad0_fonetica.js        → export: unidad0_fonetica
│   └── unidad3_5_articulos.js     → export: unidad3_5_articulos
├── A2/
│   ├── unidad2_5_ser_estar.js     → export: unidad2_5_ser_estar
│   ├── unidad9_5_cuatro_pasados.js → export: unidad9_5_cuatro_pasados
│   └── unidad10_5_por_para.js     → export: unidad10_5_por_para
├── B1/
│   ├── unidad6_5_peticiones.js    → export: unidad6_5_peticiones
│   └── unidad14_5_puntuacion.js   → export: unidad14_5_puntuacion
├── B2/
│   ├── unidad4_5_gerundio.js      → export: unidad4_5_gerundio
│   ├── unidad7_5_nominalizacion.js → export: unidad7_5_nominalizacion
│   └── unidad12_5_espanol_digital.js → export: unidad12_5_espanol_digital
├── C1/
│   ├── unidad7_5_perifrasis.js    → export: unidad7_5_perifrasis
│   ├── unidad13_5_citas.js        → export: unidad13_5_citas
│   └── unidad15_5_fonetica_avanzada.js → export: unidad15_5_fonetica_avanzada
└── C2/
    ├── unidad10_5_humor_regional.js → export: unidad10_5_humor_regional
    ├── unidad16_5_prosodia.js      → export: unidad16_5_prosodia
    └── unidad18_5_escritura_creativa.js → export: unidad18_5_escritura_creativa
```

---

## Instrucciones de Posición (dónde insertar en src/data/)

| Archivo nuevo | Insertar en nivel | Posición (entre qué unidades) |
|--------------|-------------------|-------------------------------|
| `A1/unidad0_fonetica.js` | `src/data/A1/units/` | **ANTES** de unidad1.js |
| `A1/unidad3_5_articulos.js` | `src/data/A1/units/` | Entre unidad3.js y unidad4.js |
| `A2/unidad2_5_ser_estar.js` | `src/data/A2/units/` | Entre unidad2.js y unidad3.js |
| `A2/unidad9_5_cuatro_pasados.js` | `src/data/A2/units/` | Entre unidad9.js y unidad10.js |
| `A2/unidad10_5_por_para.js` | `src/data/A2/units/` | Entre unidad10.js y unidad11.js |
| `B1/unidad6_5_peticiones.js` | `src/data/B1/units/` | Entre unidad6.js y unidad7.js |
| `B1/unidad14_5_puntuacion.js` | `src/data/B1/units/` | Entre unidad14.js y unidad15.js |
| `B2/unidad4_5_gerundio.js` | `src/data/B2/units/` | Entre unidad4.js y unidad5.js |
| `B2/unidad7_5_nominalizacion.js` | `src/data/B2/units/` | Entre unidad7.js y unidad8.js |
| `B2/unidad12_5_espanol_digital.js` | `src/data/B2/units/` | Entre unidad12.js y unidad13.js |
| `C1/unidad7_5_perifrasis.js` | `src/data/C1/units/` | Entre unidad7.js y unidad8.js |
| `C1/unidad13_5_citas.js` | `src/data/C1/units/` | Entre unidad13.js y unidad14.js |
| `C1/unidad15_5_fonetica_avanzada.js` | `src/data/C1/units/` | Entre unidad15.js y unidad16.js |
| `C2/unidad10_5_humor_regional.js` | `src/data/C2/units/` | Entre unidad10.js y unidad11.js |
| `C2/unidad16_5_prosodia.js` | `src/data/C2/units/` | Entre unidad16.js y unidad17.js |
| `C2/unidad18_5_escritura_creativa.js` | `src/data/C2/units/` | Entre unidad18.js y unidad19.js |

---

## Archivos de Índice a Actualizar

Para cada nivel, existe un archivo de índice (probablemente `index.js` o similar en `src/data/A1/`). Claude Code debe:

1. **Copiar** el archivo nuevo a `src/data/NIVEL/units/`
2. **Importar** la nueva unidad en el índice del nivel
3. **Insertar** la unidad en el array de unidades en la posición correcta

### Ejemplo para A1:
```js
// En src/data/A1/index.js (o donde se lista el nivel A1)
import { unidad0_fonetica } from './units/unidad0_fonetica';
import { unidad1 } from './units/unidad1';
// ...
import { unidad3 } from './units/unidad3';
import { unidad3_5_articulos } from './units/unidad3_5_articulos';
import { unidad4 } from './units/unidad4';

export const A1 = {
  units: [
    unidad0_fonetica,  // ← NUEVA (primera de A1)
    unidad1,
    unidad2,
    unidad3,
    unidad3_5_articulos, // ← NUEVA
    unidad4,
    // ...
  ]
};
```

---

## Estado de Completitud del Contenido

### ✅ COMPLETAMENTE COMPLETO (teoría + quizzes + examen de 30 preguntas):
- A1/unidad0_fonetica.js (8 nodos)
- A1/unidad3_5_articulos.js (12 nodos completos)
- A2/unidad2_5_ser_estar.js (11 nodos completos)
- A2/unidad9_5_cuatro_pasados.js (10 nodos completos)
- A2/unidad10_5_por_para.js (11 nodos completos)
- B1/unidad6_5_peticiones.js (9 nodos completos)

### ⚠️ TEORÍA COMPLETA, QUIZZES/EXAMEN = STUBS (completar después):
- B1/unidad14_5_puntuacion.js
- B2/unidad4_5_gerundio.js
- B2/unidad7_5_nominalizacion.js
- B2/unidad12_5_espanol_digital.js
- C1/unidad7_5_perifrasis.js
- C1/unidad13_5_citas.js
- C1/unidad15_5_fonetica_avanzada.js
- C2/unidad10_5_humor_regional.js
- C2/unidad16_5_prosodia.js
- C2/unidad18_5_escritura_creativa.js

**NOTA:** Los stubs tienen la estructura correcta. Claude Code puede completar los ejercicios con el prompt:
> "Completa los exercises[] del examen de [UNIDAD]. Genera 30 preguntas: 15 multiple_choice y 15 syntax, siguiendo el formato exacto de los exámenes completos de A1/A2."

---

## Formato de Nodo (referencia rápida)

```js
// THEORY
{ id: "uX_nY", type: "theory", title: "Título",
  content: { concept: "...", examples: [{es:"...", tr:"..."}],
             analysis?: [{word, type, literal, explanation, examples}] } }

// QUIZ
{ id: "uX_nY", type: "quiz", title: "Práctica",
  exercises: [
    { type: "multiple_choice", question: "...", options: ["A","B","C"], correct: 0 },
    { type: "syntax", turkish: "...", spanish: "...", words: ["w1","w2",...] },
    { type: "speaking", spanish: "...", turkish: "..." }
  ]}

// READING
{ id: "uX_nY", type: "reading", title: "Lectura",
  content: { text: "...", translation: "..." } }

// WORKSHOP
{ id: "uX_nY", type: "workshop", title: "Taller",
  content: { prompt: "...", minWords: N, maxWords: N, focusPoints: [...] } }

// EXAM
{ id: "uX_exam", type: "exam", title: "Examen Final",
  content: { concept: "...", exercises: [...30 preguntas...] } }
```

---

## Prompt Base para Claude Code

```
Tienes acceso a la carpeta new_units/ con 16 nuevas unidades para el proyecto Bizce.

TAREA:
1. Lee INJECT_GUIDE.md para entender las posiciones correctas
2. Para cada unidad en [NIVEL]:
   a. Copia el archivo a src/data/[NIVEL]/units/
   b. Actualiza el índice del nivel para importar y ordenar la unidad correctamente
   c. Verifica que el id de la unidad no entre en conflicto con las existentes

REGLAS:
- NO modificar unidades existentes
- NO tocar src/firebase.js ni src/tokens.js
- Muéstrame el plan de cada nivel antes de ejecutar
- Verifica el orden correcto de unidades después de insertar
```

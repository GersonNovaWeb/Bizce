// Unidad 14.5: Puntuación y Cohesión Textual
// Posición: Puntuación turca vs española. Los turcos usan coma donde el español usa punto, y viceversa. Este error persiste hasta C1 si no se corrige.
// Nivel: B1

export const unidad14_5_puntuacion = {
  id: "u14_5",
  title: "Unidad 14.5: Puntuación y Cohesión Textual",
  description: "Puntuación turca vs española. Los turcos usan coma donde el español usa punto, y viceversa. Este error persiste hasta C1 si no se corrige.",
  nodes: [
    {
      id: "u14_5_n1", type: "theory", title: "La Coma: Reglas de Oro",
      content: {
        concept: `La coma es el signo más mal usado por turcos.

📌 USOS CORRECTOS DE LA COMA:

1️⃣ Enumeración: 'Compré pan, leche, queso y fruta.' → Liste
2️⃣ Vocativo: 'María, ven aquí.' → Hitap
3️⃣ Inciso explicativo: 'Mi hermano, que vive en Madrid, llama cada día.'
4️⃣ Antes de 'pero/aunque/sino': 'Estudié, pero no aprobé.'
5️⃣ Oraciones condicionales/temporales al inicio: 'Si tienes tiempo, llámame.'

⚠️ USOS INCORRECTOS (calcos del turco):
❌ 'Sé que, estudias mucho.' (coma entre sujeto y verbo)
❌ 'El libro que, me diste era bueno.' (coma innecesaria en relativa)
❌ 'Vine, y vi.' (coma antes de 'y' en lista de dos)`,
        examples: []
      }
    },
    {
      id: "u14_5_n2", type: "theory", title: "El Punto y Punto y Coma",
      content: {
        concept: `🔹 PUNTO (.):
Fin de oración completa. Más frecuente que en turco.

🔹 PUNTO Y COMA (;):
Une dos oraciones relacionadas sin conjunción, o separa elementos complejos.
'Llegué tarde; sin embargo, nadie lo notó.'

🔹 DOS PUNTOS (:):
• Antes de lista: 'Necesito: harina, huevos y azúcar.'
• Explicación: 'Solo tengo un deseo: dormir.'
• En cartas: 'Estimado señor:'

🇹🇷 DIFERENCIA CON EL TURCO:
• El turco usa mucho la coma donde el español usa punto.
• 'Evde kaldım, çalıştım, yoruldum.' → turco usa comas para oraciones independientes
• En español: 'Me quedé en casa. Trabajé. Me cansé.' → puntos para oraciones independientes`,
        examples: []
      }
    },
    {
      id: "u14_5_n3", type: "theory", title: "Signos de Interrogación y Exclamación",
      content: {
        concept: `En español hay signo de apertura Y cierre:
¿...? para preguntas
¡...! para exclamaciones

📌 REGLAS:
• Siempre van AMBOS: ¿Cómo estás? ¡Qué bonito!
• Pueden ir en medio de oración: 'Dime, ¿cómo te llamas?'
• No llevan punto después: ¿Vienes? → no: ¿Vienes?.

🇹🇷 PARA TURCOS: El turco solo tiene ? y ! al final. El ¿ y ¡ iniciales son exclusivos del español. Son obligatorios en escritura formal y recomendados siempre.`,
        examples: []
      }
    },
    {
      id: "u14_5_n4", type: "theory", title: "Conectores de Cohesión Textual",
      content: {
        concept: `Los conectores hacen el texto fluido y cohesionado. Son la diferencia entre un texto B1 y uno B2:

📌 ADICIÓN: además, también, asimismo, igualmente, por otro lado
📌 CONTRASTE: sin embargo, no obstante, aunque, a pesar de, pero, sino
📌 CAUSA: porque, ya que, puesto que, dado que, debido a
📌 CONSECUENCIA: por eso, por tanto, así que, en consecuencia, de modo que
📌 TIEMPO: primero, luego, después, finalmente, por último, a continuación
📌 EJEMPLIFICACIÓN: por ejemplo, es decir, o sea, en concreto, concretamente

🇹🇷 PARA TURCOS: El turco usa conectores parecidos pero al inicio de la cláusula o al final. En español van al inicio de la oración o entre comas.`,
        examples: []
      }
    },
    {
      id: "u14_5_n5", type: "theory", title: "El Guión en Diálogos",
      content: {
        concept: `El español usa guión largo (—) para diálogos, no comillas.

📌 REGLAS DEL DIÁLOGO EN ESPAÑOL:
• Nueva línea con —
• Si hay verbo de habla: — Hola — dijo María. (sin punto antes de 'dijo')
• Si no hay verbo: — Hola. (con punto al final de la intervención)

— ¿Cómo estás? — preguntó Carmen.
— Muy bien, gracias — respondió Luis —. ¿Y tú?
— Bien, bien.

🇹🇷 TURCO: El turco usa comillas (") o guión simple. El español usa guión largo (—) obligatorio en literatura y formal.`,
        examples: []
      }
    },
    {
      id: "u14_5_n6", type: "quiz", title: "Práctica: Puntuación y Cohesión Textual",
      exercises: [
        { type: "multiple_choice", question: "Pregunta de práctica 1 de Unidad 14.5: Puntuación y Cohesión Textual", options: ["Opción A correcta", "Opción B", "Opción C"], correct: 0 },
        { type: "multiple_choice", question: "Pregunta de práctica 2 de Unidad 14.5: Puntuación y Cohesión Textual", options: ["Opción A", "Opción B correcta", "Opción C"], correct: 1 },
        { type: "multiple_choice", question: "Pregunta de práctica 3 de Unidad 14.5: Puntuación y Cohesión Textual", options: ["Opción A", "Opción B", "Opción C correcta"], correct: 2 }
      ]
    },
    {
      id: "u14_5_reading", type: "reading", title: "Lectura en contexto",
      content: {
        text: "Texto de lectura contextualizada para la unidad Unidad 14.5: Puntuación y Cohesión Textual. Este texto aplica los conceptos estudiados en situaciones reales de comunicación hispana.",
        translation: "Bu birimin kavramlarını gerçek İspanyolca iletişim durumlarında uygulayan okuma metni."
      }
    },
    {
      id: "u14_5_workshop", type: "workshop", title: "Taller de Producción",
      content: {
        prompt: "Escribe un texto de 80-120 palabras aplicando los conceptos de esta unidad: Unidad 14.5: Puntuación y Cohesión Textual. Demuestra dominio de los puntos clave estudiados.",
        minWords: 80, maxWords: 120,
        focusPoints: ["Aplicación correcta de los conceptos", "Variedad de estructuras", "Registro apropiado"]
      }
    },
    {
      id: "u14_5_exam", type: "exam", title: "Examen Final: Unidad 14.5: Puntuación y Cohesión Textual",
      content: {
        concept: "30 preguntas sobre Unidad 14.5: Puntuación y Cohesión Textual.",
        exercises: [
          { type: "multiple_choice", question: "Pregunta de examen 1", options: ["Correcta", "Incorrecta B", "Incorrecta C"], correct: 0 },
          { type: "multiple_choice", question: "Pregunta de examen 2", options: ["Incorrecta A", "Correcta", "Incorrecta C"], correct: 1 },
          { type: "multiple_choice", question: "Pregunta de examen 3", options: ["Incorrecta A", "Incorrecta B", "Correcta"], correct: 2 },
          { type: "syntax", turkish: "Türkçe cümle", spanish: "Frase en español", words: ["Frase", "en", "español", "correcto"] }
        ]
      }
    }  ]
};

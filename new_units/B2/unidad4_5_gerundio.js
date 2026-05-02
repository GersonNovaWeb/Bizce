// Unidad 4.5: El Gerundio Correcto
// Posición: Los turcos abusan del gerundio porque los participios turcos -en/-an funcionan diferente. Gerundio de posterioridad es el error más grave.
// Nivel: B2

export const unidad4_5_gerundio = {
  id: "u4_5",
  title: "Unidad 4.5: El Gerundio Correcto",
  description: "Los turcos abusan del gerundio porque los participios turcos -en/-an funcionan diferente. Gerundio de posterioridad es el error más grave.",
  nodes: [
    {
      id: "u4_5_n1", type: "theory", title: "¿Qué es el Gerundio?",
      content: {
        concept: `El gerundio es la forma verbal que termina en -ANDO / -IENDO:
caminar → caminando
comer → comiendo
vivir → viviendo

📌 USOS CORRECTOS:

1️⃣ ESTAR + gerundio (acción en progreso ahora)
'Estoy estudiando.' → Şu an çalışıyorum.

2️⃣ Perífrasis de progresión: IR + gerundio, LLEVAR + gerundio, SEGUIR + gerundio
'Va mejorando.' → Yavaş yavaş iyileşiyor.

3️⃣ Modo (cómo se hace algo)
'Contestó llorando.' → Ağlayarak cevap verdi.

4️⃣ Condición/tiempo simultáneo (mismo sujeto, simultáneo)
'Estudiando mucho, aprobarás.' → Çok çalışırsan geçersin.`,
        examples: []
      }
    },
    {
      id: "u4_5_n2", type: "theory", title: "Los 3 Errores de Gerundio de Turcos",
      content: {
        concept: `🇹🇷 LOS ERRORES ESPECÍFICOS DE TURCOS:

❌ ERROR 1 — GERUNDIO COMO SUJETO:
En turco: 'Koşmak sağlıklıdır.' (Correr es sano)
En español NO: '❌ Corriendo es sano.'
En español SÍ: '✅ Correr es sano.' (infinitivo como sujeto)

❌ ERROR 2 — GERUNDIO DE POSTERIORIDAD (grave):
'Llegó a casa, duchándose y comiendo.' → INCORRECTO
El gerundio NO puede expresar acción posterior al verbo principal.
'Llegó a casa, SE DUCHÓ y COMIÓ.' → correcto

❌ ERROR 3 — GERUNDIO COMO ADJETIVO:
'El hombre corriendo es mi padre.' → INCORRECTO en registro formal
'El hombre QUE CORRE es mi padre.' → correcto
(Excepción: en noticias y títulos se acepta)`,
        examples: []
      }
    },
    {
      id: "u4_5_n3", type: "theory", title: "Gerundio de Posterioridad — El Error Grave",
      content: {
        concept: `Este error es el más serio y el que más aparece en exámenes DELE B2/C1.

EL GERUNDIO EN ESPAÑOL DEBE SER SIMULTÁNEO AL VERBO PRINCIPAL:
✅ Entró corriendo. (entrar y correr = simultáneos)
✅ Habló gesticulando. (hablar y gesticular = simultáneos)

NUNCA POSTERIOR:
❌ Llegó a Madrid, cogiendo un taxi y yendo al hotel.
✅ Llegó a Madrid, cogió un taxi y fue al hotel.

❌ Escribió el email, enviándolo a todos.
✅ Escribió el email y lo envió a todos.

🇹🇷 POR QUÉ TURCOS COMETEN ESTE ERROR:
En turco, el participio -arak/-erek expresa TANTO simultaneidad COMO posterioridad:
'Gelip gördüm' → vine y vi (posterioridad) → se traduce mal como 'viniendo vi'
En español: 'Vine y vi.' nunca 'Viniendo, vi.'`,
        examples: []
      }
    },
    {
      id: "u4_5_n4", type: "theory", title: "Perífrasis con Gerundio — Las Correctas",
      content: {
        concept: `Estas perífrasis SÍ son correctas y muy usadas:

🔹 ESTAR + gerundio → acción en progreso
'Estoy aprendiendo español.' → İspanyolca öğreniyorum.

🔹 IR + gerundio → progresión gradual
'El español va mejorando.' → İspanyolca yavaş yavaş iyileşiyor.

🔹 LLEVAR + tiempo + gerundio → duración hasta ahora
'Llevo 3 años estudiando español.' → 3 yıldır İspanyolca çalışıyorum.

🔹 SEGUIR + gerundio → continuación
'Sigue lloviendo.' → Hâlâ yağmur yağıyor.

🔹 ANDAR + gerundio → movimiento + acción simultánea (coloquial)
'Anda buscando trabajo.' → İş arayıp duruyor.

🔹 ACABAR + gerundio → resultado final inesperado
'Acabó llorando.' → Sonunda ağlamaya başladı.`,
        examples: []
      }
    },
    {
      id: "u4_5_n5", type: "theory", title: "El Gerundio en Turco vs Español",
      content: {
        concept: `🇹🇷 ANÁLISIS CONTRASTIVO PROFUNDO:

Turco -arak/-erek = español gerundio SOLO si es simultáneo:
'Koşarak geldi' = 'Vino corriendo' ✅ (simultáneo)
'Gelip baktı' = 'Vino y miró' ✅ (no: 'Viniendo, miró' ❌)

Turco -ıp/-ip = acción anterior o coordinada:
'Yiyip içtik' = 'Comimos y bebimos' → en español: DOS VERBOS CONJUGADOS
NUNCA un gerundio.

Turco participio -en/-an (adjetivo):
'Koşan adam' = 'El hombre que corre'
En español: relativo de relativo, NO gerundio:
✅ 'El hombre que corre'
❌ 'El hombre corriendo' (solo aceptable en noticias/títulos)`,
        examples: []
      }
    },
    {
      id: "u4_5_n6", type: "quiz", title: "Práctica: El Gerundio Correcto",
      exercises: [
        { type: "multiple_choice", question: "Pregunta de práctica 1 de Unidad 4.5: El Gerundio Correcto", options: ["Opción A correcta", "Opción B", "Opción C"], correct: 0 },
        { type: "multiple_choice", question: "Pregunta de práctica 2 de Unidad 4.5: El Gerundio Correcto", options: ["Opción A", "Opción B correcta", "Opción C"], correct: 1 },
        { type: "multiple_choice", question: "Pregunta de práctica 3 de Unidad 4.5: El Gerundio Correcto", options: ["Opción A", "Opción B", "Opción C correcta"], correct: 2 }
      ]
    },
    {
      id: "u4_5_reading", type: "reading", title: "Lectura en contexto",
      content: {
        text: "Texto de lectura contextualizada para la unidad Unidad 4.5: El Gerundio Correcto. Este texto aplica los conceptos estudiados en situaciones reales de comunicación hispana.",
        translation: "Bu birimin kavramlarını gerçek İspanyolca iletişim durumlarında uygulayan okuma metni."
      }
    },
    {
      id: "u4_5_workshop", type: "workshop", title: "Taller de Producción",
      content: {
        prompt: "Escribe un texto de 80-120 palabras aplicando los conceptos de esta unidad: Unidad 4.5: El Gerundio Correcto. Demuestra dominio de los puntos clave estudiados.",
        minWords: 80, maxWords: 120,
        focusPoints: ["Aplicación correcta de los conceptos", "Variedad de estructuras", "Registro apropiado"]
      }
    },
    {
      id: "u4_5_exam", type: "exam", title: "Examen Final: Unidad 4.5: El Gerundio Correcto",
      content: {
        concept: "30 preguntas sobre Unidad 4.5: El Gerundio Correcto.",
        exercises: [
          { type: "multiple_choice", question: "Pregunta de examen 1", options: ["Correcta", "Incorrecta B", "Incorrecta C"], correct: 0 },
          { type: "multiple_choice", question: "Pregunta de examen 2", options: ["Incorrecta A", "Correcta", "Incorrecta C"], correct: 1 },
          { type: "multiple_choice", question: "Pregunta de examen 3", options: ["Incorrecta A", "Incorrecta B", "Correcta"], correct: 2 },
          { type: "syntax", turkish: "Türkçe cümle", spanish: "Frase en español", words: ["Frase", "en", "español", "correcto"] }
        ]
      }
    }  ]
};

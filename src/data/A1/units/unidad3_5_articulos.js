// UNIDAD 3.5: ARTÍCULOS Y PREGUNTAS
// Posición: Entre U3 (Mi Día a Día) y U4 (Comida y Mis Gustos)
// Justificación: El turco no tiene artículos ni inversión sujeto-verbo en preguntas

export const unidad3_5_articulos = {
  id: "u3_5",
  title: "Unidad 3.5: Artículos y Preguntas",
  description: "El turco no tiene artículos (el/la/un/una) y forma preguntas con sufijos. En español son dos sistemas completamente nuevos que debes dominar desde A1.",
  nodes: [
    {
      id: "u3_5_n1", type: "theory", title: "Los Artículos: El Gran Concepto Nuevo",
      content: {
        concept: "Esta es probablemente la diferencia estructural MÁS GRANDE entre el turco y el español.\n\nEn turco, para decir 'el libro' simplemente dices 'kitap'. No hay artículo. El contexto determina si es 'el libro', 'un libro' o 'los libros'.\n\nEn español TODOS los sustantivos llevan artículo. Siempre. Sin excepciones.\n\n📌 HAY DOS TIPOS DE ARTÍCULO:\n\n🔹 ARTÍCULO DEFINIDO (el/la/los/las) — EL ESPECÍFICO\nUsado cuando AMBOS saben de qué cosa hablan. Como decir en turco 'o kitap' (ese libro específico que ya mencionamos).\n→ Dame EL libro. (el libro específico que los dos sabemos cuál es)\n\n🔹 ARTÍCULO INDEFINIDO (un/una/unos/unas) — UNO DE MUCHOS\nUsado para introducir algo por primera vez o hablar de algo no específico. Como 'bir kitap' en turco.\n→ Tengo UN libro. (un libro cualquiera, cualquiera de los que existen)",
        examples: [
          { es: "El gato está en la casa.", tr: "Kedi evde. (ese gato específico, esa casa específica)" },
          { es: "Tengo un gato.", tr: "Bir kedim var. (cualquier gato, lo estoy mencionando por primera vez)" },
          { es: "Los estudiantes estudian mucho.", tr: "Öğrenciler çok çalışır. (todos los estudiantes en general)" },
          { es: "Veo una estudiante nueva.", tr: "Yeni bir öğrenci görüyorum. (una estudiante, no la conocemos)" }
        ]
      }
    },
    {
      id: "u3_5_n2", type: "theory", title: "El Género: Masculino y Femenino",
      content: {
        concept: "En español, TODOS los sustantivos tienen género: son masculinos o femeninos. No hay neutro.\n\n🇹🇷 IMPACTO PARA TURCOS: El turco no tiene género gramatical. 'O' significa él, ella y eso. En español, el artículo cambia según el género del sustantivo.\n\n📌 REGLA GENERAL (no perfecta pero útil para el 80% de casos):\n• Termina en -O → generalmente MASCULINO → usa EL / UN\n  libro, perro, niño, carro, banco\n• Termina en -A → generalmente FEMENINO → usa LA / UNA\n  casa, mesa, niña, silla, ventana\n• Termina en -E, -ión, consonante → hay que memorizar\n  el coche (masc), la ciudad (fem), el animal (masc)\n\n⚠️ EXCEPCIONES FAMOSAS:\n• el agua (femenino pero usa EL por fonética)\n• la mano (femenino aunque termina en -O)\n• el día (masculino aunque termina en -A)\n• el problema (masculino aunque termina en -A)",
        examples: [
          { es: "el libro (masc) / la mesa (fem)", tr: "kitap / masa — en turco no cambia nada, en español sí" },
          { es: "un niño / una niña", tr: "bir çocuk / bir kız — el artículo marca el género" },
          { es: "el coche / la calle", tr: "araba / sokak — hay que memorizar los que terminan en -e" },
          { es: "el agua fría (fem)", tr: "soğuk su — excepción: usa EL pero es femenino (la agua → suena mal)" }
        ]
      }
    },
    {
      id: "u3_5_n3", type: "theory", title: "El Plural de los Artículos",
      content: {
        concept: "El plural en español es bastante simple comparado con el turco.\n\n📌 TABLA DE ARTÍCULOS COMPLETA:\n\n| | Singular | Plural |\n|---|---|---|\n| Masc. definido | EL | LOS |\n| Fem. definido | LA | LAS |\n| Masc. indefinido | UN | UNOS |\n| Fem. indefinido | UNA | UNAS |\n\n📌 CÓMO HACER EL PLURAL DEL SUSTANTIVO:\n• Termina en vocal → añade -S\n  libro → libros, casa → casas\n• Termina en consonante → añade -ES\n  ciudad → ciudades, animal → animales\n• Termina en -Z → cambia Z por C y añade -ES\n  vez → veces, lápiz → lápices\n\n🇹🇷 COMPARACIÓN: El plural turco usa -lar/-ler según armonía vocálica. En español solo hay una forma: -s o -es.",
        examples: [
          { es: "el libro → los libros", tr: "kitap → kitaplar" },
          { es: "la casa → las casas", tr: "ev → evler" },
          { es: "un perro → unos perros", tr: "bir köpek → birkaç köpek" },
          { es: "la ciudad → las ciudades", tr: "şehir → şehirler" },
          { es: "una vez → unas veces", tr: "bir kez → birkaç kez" }
        ]
      }
    },
    {
      id: "u3_5_n4", type: "theory", title: "El Reto Turco: Por qué los Artículos son tan Difíciles",
      content: {
        concept: "🇹🇷 ANÁLISIS PROFUNDO PARA TURCOS\n\nEl turco usa otros mecanismos para lo que el español hace con artículos:\n\n1️⃣ DEFINICIÓN en turco → sufijo acusativo -ı/-i/-u/-ü\n   Kitabı okudum = Leí EL libro (específico)\n   Kitap okudum = Leí UN libro / Leí libros (inespecífico)\n   → En español: artículo siempre presente, posición fija antes del sustantivo.\n\n2️⃣ LOS CALCOS MÁS COMUNES DE TURCOS:\n\n❌ 'Tengo libro' (sin artículo) → Suena como si fuera un robot\n✅ 'Tengo un libro' o 'Tengo el libro'\n\n❌ 'El agua está fría' (correcto pero turcos dicen 'Agua está fría')\n✅ 'El agua está fría'\n\n❌ 'Quiero hablar con profesor' (como en turco 'öğretmenle konuşmak istiyorum')\n✅ 'Quiero hablar con el profesor' o 'con un profesor'\n\n3️⃣ TRUCO PRÁCTICO: Si en turco usarías el sufijo acusativo (-ı/-i/-u/-ü), en español probablemente necesitas EL/LA. Si en turco no lo usarías, probablemente necesitas UN/UNA.",
        examples: [
          { es: "Quiero el café. (ese específico que pedí)", tr: "Kahveyi istiyorum. (acusativo -yi = definido = EL)" },
          { es: "Quiero un café. (cualquier café)", tr: "Kahve istiyorum. (sin acusativo = indefinido = UN)" },
          { es: "Veo al estudiante. (uno específico)", tr: "Öğrenciyi görüyorum. (acusativo = EL)" },
          { es: "Veo a un estudiante. (uno cualquiera)", tr: "Öğrenci görüyorum. (sin acusativo = UN)" }
        ]
      }
    },
    {
      id: "u3_5_n5", type: "theory", title: "Las Preguntas: Sin Sufijos, con Entonación",
      content: {
        concept: "En turco, las preguntas se forman añadiendo el sufijo -mı/-mi/-mu/-mü al verbo o al elemento preguntado. El orden de palabras NO cambia.\n\nEn español hay DOS formas de hacer preguntas:\n\n🔹 FORMA 1 — Entonación ascendente:\nMismas palabras que la afirmación, pero la voz SUBE al final.\n  Afirmación: Tú hablas español. ↘ (voz baja al final)\n  Pregunta: ¿Tú hablas español? ↗ (voz sube al final)\n\n🔹 FORMA 2 — Inversión (más formal):\nEl verbo va ANTES del sujeto.\n  Afirmación: Tú hablas español.\n  Pregunta invertida: ¿Hablas tú español?\n\n📌 SIGNOS DE INTERROGACIÓN EN ESPAÑOL:\nEl español es el ÚNICO idioma que tiene ¿ al inicio Y ? al final.\nSiempre debes escribir ambos. El ¿ te indica que prepares la entonación interrogativa.\n\n🇹🇷 DIFERENCIA CLAVE: En turco el sufijo de pregunta (-mı) va en posición fija. En español no hay sufijo — usas la voz o el orden de palabras.",
        examples: [
          { es: "¿Hablas español? / ¿Tú hablas español?", tr: "İspanyolca konuşuyor musun? (sufijo -musun)" },
          { es: "¿Tienes un libro?", tr: "Bir kitabın var mı? (sufijo -mı)" },
          { es: "¿Es usted el profesor?", tr: "Siz öğretmen misiniz? (sufijo -misiniz)" },
          { es: "¿La casa es grande?", tr: "Ev büyük mü? (sufijo -mü)" }
        ]
      }
    },
    {
      id: "u3_5_n6", type: "theory", title: "Palabras Interrogativas — Las Preguntas con 'Qué, Quién, Dónde...'",
      content: {
        concept: "Las palabras interrogativas van SIEMPRE AL INICIO de la pregunta y llevan TILDE.\n\n📌 TABLA COMPLETA:\n\n| Español | Turco | Ejemplo |\n|---------|-------|--------|\n| ¿Qué? | Ne? | ¿Qué es esto? |\n| ¿Quién? / ¿Quiénes? | Kim? / Kimler? | ¿Quién eres? |\n| ¿Dónde? | Nerede? | ¿Dónde vives? |\n| ¿Adónde? | Nereye? | ¿Adónde vas? |\n| ¿De dónde? | Nereden? | ¿De dónde eres? |\n| ¿Cuándo? | Ne zaman? | ¿Cuándo llegas? |\n| ¿Cómo? | Nasıl? | ¿Cómo estás? |\n| ¿Cuánto/a? | Ne kadar? | ¿Cuánto cuesta? |\n| ¿Cuántos/as? | Kaç tane? | ¿Cuántos libros? |\n| ¿Por qué? | Neden/Niye? | ¿Por qué estudias? |\n| ¿Para qué? | Ne için? | ¿Para qué sirve? |\n| ¿Cuál? / ¿Cuáles? | Hangisi? | ¿Cuál prefieres? |\n\n⚠️ SIN TILDE = OTRA FUNCIÓN:\n• que (conjunción): Digo que estoy bien.\n• quien (relativo): La persona quien habla.\n• donde (relativo): La ciudad donde vivo.",
        examples: [
          { es: "¿Qué hora es?", tr: "Saat kaç?" },
          { es: "¿Quién es ese señor?", tr: "O beyefendi kim?" },
          { es: "¿De dónde eres?", tr: "Nerelisin?" },
          { es: "¿Por qué estudias español?", tr: "Neden İspanyolca çalışıyorsun?" },
          { es: "¿Cuántos años tienes?", tr: "Kaç yaşındasın?" },
          { es: "¿Cómo se llama usted?", tr: "Adınız ne?" }
        ]
      }
    },
    {
      id: "u3_5_n7", type: "reading", title: "Lectura: En la librería",
      content: {
        text: "Ana entra en una librería pequeña del centro de Madrid. En la librería hay muchos libros de todos los colores.\n\n— Buenos días, ¿tiene usted libros de español para extranjeros?\n— Sí, claro. Tenemos unos libros muy buenos. ¿Para qué nivel los necesita?\n— Para el nivel básico. Soy una estudiante nueva.\n— Perfecto. Este es el mejor libro para empezar. ¿Cuántos quiere?\n— Solo uno, por favor. ¿Cuánto cuesta el libro?\n— El libro cuesta doce euros. ¿Tiene el dinero exacto?\n— Sí, aquí tiene. Muchas gracias.\n— De nada. ¡Buena suerte con el español!",
        translation: "Ana, Madrid'in merkezindeki küçük bir kitabevine giriyor. Kitabevinde her renkten çok sayıda kitap var.\n\n— Günaydın, yabancılar için İspanyolca kitabınız var mı?\n— Evet, tabii. Çok güzel kitaplarımız var. Hangi seviye için lazım?\n— Temel seviye için. Ben yeni bir öğrenciyim.\n— Mükemmel. Bu başlamak için en iyi kitap. Kaç tane istiyorsunuz?\n— Sadece bir tane, lütfen. Kitap ne kadar?\n— Kitap on iki Euro. Bozuk paranız var mı?\n— Evet, buyurun. Çok teşekkürler.\n— Rica ederim. İspanyolcada bol şans!"
      }
    },
    {
      id: "u3_5_n8", type: "quiz", title: "Práctica: Artículos y Preguntas",
      exercises: [
        { type: "syntax", turkish: "Bir kitap okuyorum. (indefinido)", spanish: "Estoy leyendo un libro", words: ["Estoy", "leyendo", "un", "libro", "el", "una"] },
        { type: "syntax", turkish: "Kitabı masaya koydum. (definido)", spanish: "Puse el libro en la mesa", words: ["Puse", "el", "libro", "en", "la", "mesa", "un", "una"] },
        { type: "syntax", turkish: "Evler büyük. (plural definido)", spanish: "Las casas son grandes", words: ["Las", "casas", "son", "grandes", "Los", "unos"] },
        { type: "syntax", turkish: "İspanyolca konuşuyor musun?", spanish: "¿Hablas español?", words: ["¿Hablas", "español?", "habla", "habláis"] },
        { type: "syntax", turkish: "Neden İspanyolca öğreniyorsun?", spanish: "¿Por qué aprendes español?", words: ["¿Por", "qué", "aprendes", "español?", "Para", "Qué"] },
        { type: "syntax", turkish: "Siz nerelisiniz?", spanish: "¿De dónde es usted?", words: ["¿De", "dónde", "es", "usted?", "eres", "tú"] },
        { type: "syntax", turkish: "Öğretmen kim?", spanish: "¿Quién es el profesor?", words: ["¿Quién", "es", "el", "profesor?", "un", "la"] },
        { type: "syntax", turkish: "Bu ne kadar?", spanish: "¿Cuánto cuesta esto?", words: ["¿Cuánto", "cuesta", "esto?", "Cuántos", "qué"] },
        { type: "multiple_choice", question: "¿Qué artículo usas con 'libro'?", options: ["el libro (masc.)", "la libro (fem.)", "un libro — depende del contexto"], correct: 2 },
        { type: "multiple_choice", question: "¿Qué artículo lleva 'agua'?", options: ["el agua (excepción fonética, pero es femenino)", "la agua", "un agua"], correct: 0 },
        { type: "multiple_choice", question: "La diferencia entre 'Tengo el libro' y 'Tengo un libro' es:", options: ["EL = específico/conocido. UN = cualquiera/nuevo", "Son lo mismo", "EL = plural, UN = singular"], correct: 0 },
        { type: "multiple_choice", question: "¿Cuál es la forma correcta de hacer una pregunta?", options: ["¿Hablas español? o ¿Tú hablas español?", "Hablas español?", "¿Hablas español¿"], correct: 0 }
      ]
    },
    {
      id: "u3_5_n9", type: "theory", title: "Sintaxis Visual: Deconstrucción",
      content: {
        concept: "Vamos a deconstruir una oración compleja con artículos y una pregunta:\n\n'¿Por qué el estudiante nuevo no tiene los libros de la clase?'",
        examples: [{ es: "¿Por qué el estudiante nuevo no tiene los libros de la clase?", tr: "Neden yeni öğrencinin sınıf kitapları yok?" }],
        analysis: [
          { word: "¿Por qué", type: "interrogative", literal: "Neden/Niye", explanation: "Palabra interrogativa de causa. Siempre al inicio. Lleva tilde. Dos palabras separadas.", examples: [{ es: "¿Por qué lloras?", tr: "Neden ağlıyorsun?" }] },
          { word: "el", type: "article", literal: "(o öğrenci — acusativo implica definición)", explanation: "Artículo definido masculino singular. Sabemos de qué estudiante hablamos.", examples: [{ es: "el estudiante = ese estudiante específico", tr: "öğrenci (con acusativo implícito)" }] },
          { word: "estudiante", type: "noun", literal: "öğrenci", explanation: "Sustantivo masculino singular. Termina en -e, género no obvio por la terminación — hay que memorizar.", examples: [{ es: "el estudiante / la estudiante (mismo para masc/fem)", tr: "erkek öğrenci / kız öğrenci" }] },
          { word: "nuevo", type: "adjective", literal: "yeni", explanation: "Adjetivo masculino singular. Va DESPUÉS del sustantivo (a diferencia del turco que va antes).", examples: [{ es: "el estudiante nuevo ✅ / el nuevo estudiante (también correcto pero enfático)", tr: "yeni öğrenci — en turco ANTES del sustantivo" }] },
          { word: "los libros", type: "article+noun", literal: "kitapları (acusativo plural)", explanation: "Artículo definido masculino PLURAL + sustantivo plural. Libros = libro + s.", examples: [{ es: "los libros de español", tr: "ispanyolca kitapları" }] }
        ]
      }
    },
    {
      id: "u3_5_n10", type: "theory", title: "Caja de Herramientas: Vocabulario de Artículos en Contexto",
      content: {
        concept: "Las palabras más comunes del español cotidiano con sus artículos. Memoriza el artículo JUNTO con la palabra — son una unidad.",
        examples: [
          { es: "el libro", tr: "kitap" }, { es: "la mesa", tr: "masa" },
          { es: "el agua (fem)", tr: "su" }, { es: "la mano (fem)", tr: "el" },
          { es: "el día (masc)", tr: "gün" }, { es: "la noche (fem)", tr: "gece" },
          { es: "el problema (masc)", tr: "sorun" }, { es: "el mapa (masc)", tr: "harita" },
          { es: "la clase", tr: "sınıf" }, { es: "el profesor / la profesora", tr: "öğretmen" },
          { es: "la ciudad", tr: "şehir" }, { es: "el país", tr: "ülke" },
          { es: "la gente (siempre singular)", tr: "insanlar" }, { es: "el tiempo (weather/time)", tr: "hava / zaman" }
        ]
      }
    },
    {
      id: "u3_5_n11", type: "workshop", title: "Taller: Mi presentación con artículos",
      content: {
        prompt: "Escribe una presentación personal de 60-80 palabras. Describe: quién eres, de dónde eres, dónde vives, qué estudias/trabajas, y dos cosas que tienes en tu casa. Presta especial atención a usar el artículo correcto (el/la/un/una/los/las) antes de cada sustantivo.",
        minWords: 60,
        maxWords: 80,
        focusPoints: ["Artículo correcto antes de cada sustantivo", "Al menos 3 preguntas retóricas con palabra interrogativa", "Género correcto (el/la)"]
      }
    },
    {
      id: "u3_5_exam", type: "exam", title: "Examen Final: Unidad 3.5",
      content: {
        concept: "30 preguntas sobre artículos definidos, indefinidos, género, plural y preguntas interrogativas.",
        exercises: [
          { type: "multiple_choice", question: "Elige el artículo correcto: ___ problema es difícil.", options: ["El", "La", "Un"], correct: 0 },
          { type: "multiple_choice", question: "Elige el artículo correcto: ___ mano de Carmen.", options: ["La", "El", "Una"], correct: 0 },
          { type: "multiple_choice", question: "Plural de 'el ciudad':", options: ["las ciudades", "los ciudades", "la ciudades"], correct: 0 },
          { type: "multiple_choice", question: "Plural de 'una vez':", options: ["unas veces", "unos veces", "las veces"], correct: 0 },
          { type: "multiple_choice", question: "'Tengo ___ perro.' (cualquier perro, primera mención)", options: ["un", "el", "lo"], correct: 0 },
          { type: "multiple_choice", question: "'Dame ___ llave.' (la llave específica que ya sabemos cuál es)", options: ["la", "una", "las"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la pregunta correcta para '¿Neden?'", options: ["¿Por qué?", "¿Para qué?", "¿Cómo?"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la pregunta correcta para '¿Nerede?'", options: ["¿Dónde?", "¿Adónde?", "¿De dónde?"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la pregunta correcta para '¿Nereye?'", options: ["¿Adónde?", "¿Dónde?", "¿De dónde?"], correct: 0 },
          { type: "multiple_choice", question: "El artículo 'el' cambia a '___ ' antes de sustantivo femenino que empieza por A tónica:", options: ["el (el agua, el alma)", "la (la agua)", "un (un agua)"], correct: 0 },
          { type: "syntax", turkish: "Bir kedi görüyorum.", spanish: "Veo un gato", words: ["Veo", "un", "gato", "el", "una", "gata"] },
          { type: "syntax", turkish: "Kediyi görüyorum. (o spesifik kedi)", spanish: "Veo el gato", words: ["Veo", "el", "gato", "un", "la", "gata"] },
          { type: "syntax", turkish: "Kitaplar masada.", spanish: "Los libros están en la mesa", words: ["Los", "libros", "están", "en", "la", "mesa", "Las", "unos"] },
          { type: "syntax", turkish: "Öğretmen nerede?", spanish: "¿Dónde está el profesor?", words: ["¿Dónde", "está", "el", "profesor?", "la", "un"] },
          { type: "syntax", turkish: "Kaç yaşındasın?", spanish: "¿Cuántos años tienes?", words: ["¿Cuántos", "años", "tienes?", "Cuántas", "Cuánto"] },
          { type: "syntax", turkish: "Bu ne?", spanish: "¿Qué es esto?", words: ["¿Qué", "es", "esto?", "Quién", "Cómo"] },
          { type: "syntax", turkish: "Neden İspanyolca öğreniyorsun?", spanish: "¿Por qué aprendes español?", words: ["¿Por", "qué", "aprendes", "español?", "Para", "Qué"] },
          { type: "syntax", turkish: "Hangi kitabı istiyorsun?", spanish: "¿Cuál libro quieres?", words: ["¿Cuál", "libro", "quieres?", "Qué", "Cuáles"] },
          { type: "syntax", turkish: "Sınıfta kaç öğrenci var?", spanish: "¿Cuántos estudiantes hay en la clase?", words: ["¿Cuántos", "estudiantes", "hay", "en", "la", "clase?", "Cuántas", "los"] },
          { type: "syntax", turkish: "Sen nereden geliyorsun?", spanish: "¿De dónde vienes tú?", words: ["¿De", "dónde", "vienes", "tú?", "Dónde", "adónde"] },
          { type: "multiple_choice", question: "La palabra 'gente' en español es:", options: ["Siempre singular (la gente es)", "Siempre plural (las gentes son)", "Puede ser singular o plural"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué artículo necesita 'coche'?", options: ["el coche (masculino)", "la coche (femenino)", "un coche siempre"], correct: 0 },
          { type: "multiple_choice", question: "La diferencia entre 'que' y '¿qué?' es:", options: ["¿Qué? es interrogativo y lleva tilde. 'que' es conjunción sin tilde.", "Son lo mismo", "'que' es formal, '¿qué?' informal"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el plural de 'el lápiz'?", options: ["los lápices", "los lápizs", "los lápizes"], correct: 0 },
          { type: "multiple_choice", question: "Para preguntar por la razón/causa usamos:", options: ["¿Por qué? (dos palabras con tilde)", "¿Porque? (una palabra)", "¿Para qué?"], correct: 0 },
          { type: "syntax", turkish: "Güzel bir şehir bu.", spanish: "Esta es una ciudad bonita", words: ["Esta", "es", "una", "ciudad", "bonita", "un", "bello", "el"] },
          { type: "syntax", turkish: "Öğrenciler çok çalışkandır.", spanish: "Los estudiantes son muy trabajadores", words: ["Los", "estudiantes", "son", "muy", "trabajadores", "Las", "unos"] },
          { type: "syntax", turkish: "Senin adın ne?", spanish: "¿Cómo te llamas?", words: ["¿Cómo", "te", "llamas?", "Qué", "Quién"] },
          { type: "syntax", turkish: "Saat kaç?", spanish: "¿Qué hora es?", words: ["¿Qué", "hora", "es?", "Cuánto", "Cuál"] },
          { type: "syntax", turkish: "Hangi rengi seviyorsun?", spanish: "¿Cuál color te gusta?", words: ["¿Cuál", "color", "te", "gusta?", "Qué", "Cuáles"] },
          { type: "multiple_choice", question: "¿Cómo se pluraliza 'la luz'?", options: ["las luces", "las luzs", "las luzes"], correct: 0 }
        ]
      }
    }
  ]
};

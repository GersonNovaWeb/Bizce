export const unidad0 = {
  id: "u0",
  title: "Unidad 0: Fonética de Supervivencia",
  description: "Los sonidos del español que no existen en turco. Tu punto de partida para sonar natural desde el primer día.",
  nodes: [
    {
      id: "u0_n1", type: "theory", title: "¿Por qué el español suena diferente?",
      content: {
        concept: "El turco y el español tienen sistemas de sonido muy distintos. El turco tiene 8 vocales y el español solo 5, pero el español tiene consonantes que el turco no tiene en absoluto.\n\nLa buena noticia: el español es FONÉTICO. Cada letra se pronuncia siempre igual. Si aprendes los sonidos ahora, nunca tendrás que adivinar cómo se pronuncia una palabra nueva.\n\n🇹🇷 DIFERENCIA CLAVE: En turco, la pronunciación de una letra puede cambiar según su posición o las vocales de la palabra (armonía vocálica). En español NO. La 'a' siempre suena igual, la 'r' siempre suena igual. Una vez que aprendes el sonido, es para siempre.",
        examples: [
          { es: "casa / cama / cara", tr: "ev / yastık / yüz → La 'a' siempre suena IGUAL en las tres" },
          { es: "pero / perro", tr: "ama / kırmızı → Dos sonidos distintos para 'r'" },
          { es: "vino / bino", tr: "Şarap / No existe → V y B suenan casi igual en español" },
          { es: "jirafa / jamón", tr: "Zürafa / Jambon → La J española NO existe en turco" }
        ]
      }
    },
    {
      id: "u0_n2", type: "theory", title: "Las 5 Vocales Puras",
      content: {
        concept: "El español tiene exactamente 5 vocales: A, E, I, O, U. Cada una tiene UN solo sonido. Nunca cambian.\n\n🔴 TRAMPA TURCA: En turco existen vocales sin equivalente español: Ö, Ü, I (sin punto). Cuando un turco pronuncia español, a veces mezcla estos sonidos. ¡Cuidado!\n\n• A → Como la 'a' turca. Siempre abierta. Boca bien abierta.\n• E → Como la 'e' turca. Nunca se cierra como en inglés ('ee').\n• I → Como la 'i' turca (CON punto). NUNCA como la ı turca (sin punto).\n• O → Como la 'o' turca. Nunca se cierra como en inglés.\n• U → Como la 'ü' turca PERO con los labios más redondos. NUNCA como 'ü'.",
        examples: [
          { es: "papá", tr: "Dos 'a' abiertas. Boca bien abierta en ambas." },
          { es: "mesa", tr: "La 'e' es abierta. NO digas 'misa'." },
          { es: "libro", tr: "La 'i' es como la 'i' turca (CON punto). Nunca como ı." },
          { es: "poco", tr: "La 'o' es abierta. NO la cierres como en inglés." },
          { es: "uva", tr: "La 'u' tiene labios redondos. NO es como la 'ü' turca." }
        ]
      }
    },
    {
      id: "u0_n3", type: "theory", title: "El Gran Enemigo: R y RR",
      content: {
        concept: "Este es el sonido más difícil para los turcos. En español hay DOS sonidos de 'r':\n\n🟡 R SUAVE (entre vocales): La lengua toca el paladar UNA vez. Muy rápido. Similar a la 'd' inglesa de 'butter'.\nEjemplos: ca-RA, pe-RO, ma-RI-do\n\n🔴 RR FUERTE (vibrante múltiple): La lengua vibra contra el paladar varias veces. Este sonido NO existe en turco.\nEjemplos: PE-RRO, CA-RRO, RO-JO (cuando la R está al inicio)\n\n⚠️ REGLA IMPORTANTE:\n• Una sola 'r' entre vocales = R suave\n• 'rr' escrito = RR fuerte\n• 'r' al inicio de palabra = RR fuerte\n• 'r' después de n, l, s = RR fuerte\n\n🏋️ EJERCICIO: Pon la lengua justo detrás de los dientes superiores y sopla aire mientras vibras la lengua.",
        examples: [
          { es: "pero (R suave) ≠ perro (RR fuerte)", tr: "'Pero' = conjunción (ama). 'Perro' = köpek. ¡Son distintas!" },
          { es: "caro (R suave) ≠ carro (RR fuerte)", tr: "'Caro' = pahalı. 'Carro' = araba." },
          { es: "Rosa, rojo, ritmo", tr: "R al inicio = siempre RR fuerte" },
          { es: "Enrique, alrededor, Israel", tr: "Después de n, l, s = RR fuerte" }
        ]
      }
    },
    {
      id: "u0_n4", type: "theory", title: "La J, la G y la H",
      content: {
        concept: "Tres letras que confunden mucho a los turcos:\n\n🔴 J (jota): Este sonido NO existe en turco. Es una fricativa velar sorda — el aire raspa en la garganta. Parecido a la 'h' árabe en 'jarra' pero más fuerte. En algunos países latinoamericanos es más suave.\nEjemplos: jardín, jirafa, jugo, ojo, caja\n\n🟡 G antes de E/I: Suena exactamente igual que la J.\nEjemplos: gente → suena 'jente', girasol → suena 'jirasol'\n\n🟢 G en otros casos: Suena como la 'g' turca normal.\nEjemplos: gato, gol, gusto\n\n🟢 H: ¡SIEMPRE es muda en español! Completamente silenciosa.\nEjemplos: hola → se pronuncia 'ola', hacer → 'acer', ahora → 'aora'\n\n⚠️ TRAMPA: 'ch' es un solo sonido — como 'ç' turca.\nEjemplos: chico, mucho, leche",
        examples: [
          { es: "jardín / jirafa / jugo", tr: "Son. raspa en la garganta. NO existe en turco." },
          { es: "gente / girasol", tr: "G + e/i = suena como J. 'Hente' / 'Hirasol'" },
          { es: "hola / hacer / ahora", tr: "La H es muda: 'ola' / 'acer' / 'aora'" },
          { es: "chico / mucho / leche", tr: "CH = ç turca: 'çiko' / 'muço' / 'leçe'" }
        ]
      }
    },
    {
      id: "u0_n5", type: "theory", title: "B y V — El secreto que nadie dice",
      content: {
        concept: "Este es el secreto más sorprendente del español:\n\n🤫 B y V suenan CASI IGUAL en español moderno.\n\nAmbas se pronuncian como la 'b' turca, pero con una variación:\n• Al inicio de frase o después de pausa → sonido 'b' fuerte (labios que se juntan y se separan)\n• En medio de palabra o entre vocales → sonido suave (los labios casi se tocan pero no del todo — el aire pasa)\n\nLos hablantes nativos NO distinguen B de V al hablar. La diferencia es solo ortográfica.\n\n🇹🇷 PARA TURCOS: En turco, B y V son claramente distintas (bal vs. val). En español esto no existe. No te esfuerces en distinguirlas al hablar.\n\n⚠️ Letras adicionales:\n• LL → En España suena como 'y' turca. En Argentina como 'sh' o 'zh'.\n• Y → Como 'y' turca al inicio. Como 'i' cuando está sola.",
        examples: [
          { es: "boca = voca (suenan igual)", tr: "No distinguir B de V es CORRECTO en español" },
          { es: "libro → 'liβro' (b suave entre vocales)", tr: "La b entre vocales se suaviza" },
          { es: "lluvia / pollo / calle", tr: "LL = como 'y' turca en España" },
          { es: "yo / ya / ayer", tr: "Y = como 'y' turca" }
        ]
      }
    },
    {
      id: "u0_n6", type: "reading", title: "Lectura fonética: Practica los sonidos",
      content: {
        text: "Rosaura tiene un perro rojo que se llama Rogelio.\nRogelio corre por el jardín y juega con pelotas amarillas.\nEl jardín de Rosaura es grande y verde.\nHoy hace calor. Rosaura bebe jugo de naranja.\nVive en Valencia. Su vida es muy bella.\n¡Hola Rogelio! ¡Ven aquí!",
        translation: "Rosaura'nın Rogelio adında kırmızı bir köpeği var.\nRogelio bahçede koşuyor ve sarı toplarla oynuyor.\nRosaura'nın bahçesi büyük ve yeşil.\nBugün hava sıcak. Rosaura portakal suyu içiyor.\nValencia'da yaşıyor. Hayatı çok güzel.\nMerhaba Rogelio! Buraya gel!\n\n🎯 SONIDOS A PRACTICAR EN ESTE TEXTO:\n• RR fuerte: Rosaura, rojo, roja, corre\n• R suave: pero, pelotas, naranja, verde\n• J/G: jardín, juega, jugo, grande\n• H muda: hoy, hola\n• B/V: Valencia, vida, bella, bebe, verde"
      }
    },
    {
      id: "u0_n7", type: "quiz", title: "Práctica Fonética",
      exercises: [
        { type: "speaking", spanish: "Rosa tiene un perro rojo.", turkish: "Rosa'nın kırmızı bir köpeği var." },
        { type: "speaking", spanish: "El jardín es grande y verde.", turkish: "Bahçe büyük ve yeşil." },
        { type: "speaking", spanish: "Hola, mi nombre es Jorge.", turkish: "Merhaba, benim adım Jorge." },
        { type: "speaking", spanish: "El carro corre por la calle.", turkish: "Araba sokakta koşuyor." },
        { type: "speaking", spanish: "La jirafa come hojas verdes.", turkish: "Zürafa yeşil yapraklar yer." },
        { type: "speaking", spanish: "Vivo en Valencia con mi familia.", turkish: "Ailemle Valencia'da yaşıyorum." },
        { type: "speaking", spanish: "Hoy hace mucho calor aquí.", turkish: "Bugün burada çok sıcak." },
        { type: "speaking", spanish: "Mi perro se llama Rogelio.", turkish: "Köpeğimin adı Rogelio." },
        { type: "speaking", spanish: "El libro está en la mesa.", turkish: "Kitap masanın üzerinde." },
        { type: "speaking", spanish: "¿Puedes repetir más despacio?", turkish: "Daha yavaş tekrar edebilir misin?" }
      ]
    },
    {
      id: "u0_exam", type: "exam", title: "Verificación Fonética: Unidad 0",
      content: {
        concept: "Demuestra que identificas los sonidos clave del español antes de comenzar el nivel A1.",
        exercises: [
          { type: "multiple_choice", question: "La letra H en español es siempre:", options: ["Muda (no se pronuncia)", "Como la H árabe", "Como la J española"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál par tiene dos sonidos DISTINTOS de R?", options: ["pero / perro", "boca / voca", "calle / caye"], correct: 0 },
          { type: "multiple_choice", question: "La palabra 'gente' se pronuncia:", options: ["jente", "guente", "gente (g normal)"], correct: 0 },
          { type: "multiple_choice", question: "En español moderno, B y V:", options: ["Suenan casi igual", "Son completamente distintas", "La V no existe"], correct: 0 },
          { type: "multiple_choice", question: "La R en 'carro' es:", options: ["RR fuerte (vibrante múltiple)", "R suave (un toque)", "Muda"], correct: 0 },
          { type: "multiple_choice", question: "La R en 'pero' es:", options: ["R suave (un toque)", "RR fuerte", "Como en turco"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuántas vocales tiene el español?", options: ["5", "8", "6"], correct: 0 },
          { type: "multiple_choice", question: "La I en español es siempre como la:", options: ["İ turca (con punto)", "ı turca (sin punto)", "ü turca"], correct: 0 },
          { type: "multiple_choice", question: "'Hola' se pronuncia:", options: ["'ola' (H muda)", "'jola'", "'hola' (H como en turco)"], correct: 0 },
          { type: "multiple_choice", question: "CH en español suena como:", options: ["Ç turca", "K turca", "H española"], correct: 0 },
          { type: "syntax", turkish: "Rosa'nın kırmızı bir köpeği var. (Escribe lo que escuchas)", spanish: "Rosa tiene un perro rojo", words: ["Rosa", "tiene", "un", "perro", "rojo", "es", "rojo"] },
          { type: "syntax", turkish: "Bahçe büyük ve yeşil.", spanish: "El jardín es grande y verde", words: ["El", "jardín", "es", "grande", "y", "verde", "muy"] },
          { type: "syntax", turkish: "Bugün çok sıcak.", spanish: "Hoy hace mucho calor", words: ["Hoy", "hace", "mucho", "calor", "hay", "un"] },
          { type: "syntax", turkish: "Ailemle yaşıyorum.", spanish: "Vivo con mi familia", words: ["Vivo", "con", "mi", "familia", "en", "la"] },
          { type: "syntax", turkish: "Köpeğim bahçede koşuyor.", spanish: "Mi perro corre en el jardín", words: ["Mi", "perro", "corre", "en", "el", "jardín", "por"] }
        ]
      }
    }
  ]
};

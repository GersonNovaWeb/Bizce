export const unidad8 = {
  id: "u8",
  title: "Unidad 8: Planes, Preguntas y Maestría",
  description: "Palabras interrogativas, el Futuro Próximo, el Gran Repaso y el Mega Examen Final.",
  nodes: [
    {
      id: "u8_n1", type: "theory", title: "El Arte de Preguntar",
      content: {
        concept: "En español, a diferencia del turco o el inglés, usamos signos de interrogación al principio y al final de la frase (¿?).\n\nPalabras Interrogativas Clave:\n• ¿Qué? (Ne?)\n• ¿Cómo? (Nasıl?)\n• ¿Cuándo? (Ne zaman?)\n• ¿Dónde? / ¿Adónde? (Nerede? / Nereye?)\n• ¿Por qué? (Neden/Niçin?)\n• ¿Quién? (Kim?)\n• ¿Cuánto/Cuántos? (Ne kadar / Kaç tane?)\n• ¿Cuál? (Hangisi? - Se usa mucho para preguntar 'Cuál es tu nombre' o 'Cuál es tu teléfono').",
        examples: [
          { es: "¿Dónde vives?", tr: "Nerede yaşıyorsun?" },
          { es: "¿Adónde vas?", tr: "Nereye gidiyorsun?" },
          { es: "¿Cuánto cuesta esta camiseta?", tr: "Bu tişört ne kadar?" },
          { es: "¿Por qué estudias español?", tr: "Neden İspanyolca çalışıyorsun?" },
          { es: "¿Cuál es tu número de teléfono?", tr: "Telefon numaran nedir (hangisidir)?" }
        ]
      }
    },
    {
      id: "u8_n2", type: "theory", title: "Mis Planes: El Futuro Próximo",
      content: {
        concept: "Para hablar del futuro de la manera más natural y fácil, no necesitamos aprender conjugaciones nuevas difíciles. Usamos la estructura mágica del Futuro Próximo.\n\nFórmula Inseparable:\n**Verbo IR (voy, vas, va, vamos, van) + preposición 'a' + Verbo Principal (en Infinitivo: -ar, -er, -ir)**.\n\nEjemplo: Yo voy (Yardımcı) + a (Bağlaç) + comer (Ana eylem).",
        examples: [
          { es: "Mañana voy a estudiar español.", tr: "Yarın İspanyolca çalışacağım." },
          { es: "¿Qué vas a hacer hoy?", tr: "Bugün ne yapacaksın?" },
          { es: "Nosotros vamos a viajar a México.", tr: "Biz Meksika'ya seyahat edeceğiz." },
          { es: "Ellos van a comprar una casa.", tr: "Onlar bir ev satın alacaklar." }
        ]
      }
    },
    {
      id: "u8_n3", type: "theory", title: "Conectores Lógicos",
      content: {
        concept: "¡Es hora de hablar fluido! Para unir frases cortas y crear oraciones largas y naturales, usamos conectores lógicos.\n\n• Y (Ve): Para sumar ideas.\n• Pero (Ama / Fakat): Para contrastar ideas.\n• Porque (Çünkü): Para dar una razón o explicación.\n\nRegla de oro con 'Pero': Si la segunda parte de la oración es negativa, la palabra 'no' va INMEDIATAMENTE después del 'pero'. (Ejemplo: Quiero ir, pero no puedo).",
        examples: [
          { es: "Soy turco y vivo en Estambul.", tr: "Türküm ve İstanbul'da yaşıyorum." },
          { es: "Me gusta el té, pero no me gusta el café.", tr: "Çayı severim ama kahveyi sevmem." },
          { es: "Voy a dormir porque estoy muy cansada.", tr: "Uyuyacağım çünkü çok yorgunum." }
        ]
      }
    },
    {
      id: "u8_n4", type: "theory", title: "Laboratorio: Sintaxis del Futuro",
      content: {
        concept: "En este laboratorio deconstruiremos una oración completa en Futuro Próximo, para que veas cómo el verbo 'IR' y la preposición 'a' trabajan juntos.",
        examples: [{ es: "Mañana yo voy a visitar un museo histórico.", tr: "Yarın tarihi bir müzeyi ziyaret edeceğim." }],
        analysis: [
          { word: "Mañana", type: "adverb", literal: "Yarın", explanation: "Posición 1. Adverbio de tiempo. Suele ir al principio para dar contexto al futuro.", examples: [{ es: "Hasta mañana.", tr: "Yarına kadar." }, { es: "Mañana es lunes.", tr: "Yarın pazartesi." }] },
          { word: "yo", type: "pronoun", literal: "ben", explanation: "Posición 2. Pronombre personal (Opcional).", examples: [{ es: "Yo quiero ir.", tr: "Ben gitmek istiyorum." }] },
          { word: "voy", type: "verb", literal: "gidiyorum (yardımcı)", explanation: "Posición 3. Verbo 'ir' conjugado para 'Yo'. En esta estructura funciona como verbo auxiliar.", examples: [{ es: "Voy a casa.", tr: "Eve gidiyorum." }, { es: "Me voy.", tr: "Gidiyorum." }] },
          { word: "a", type: "connector", literal: "-e/-a", explanation: "Posición 4. Preposición obligatoria. Es el puente de hierro que conecta el verbo 'ir' con la acción.", examples: [{ es: "Vamos a ver.", tr: "Göreceğiz." }, { es: "Vas a dormir.", tr: "Uyuyacaksın." }] },
          { word: "visitar", type: "verb", literal: "ziyaret etmek (mastar)", explanation: "Posición 5. Verbo principal en Infinitivo (no conjugado, termina en -ar). Esta es la acción real.", examples: [{ es: "Quiero visitar Madrid.", tr: "Madrid'i ziyaret etmek istiyorum." }] },
          { word: "un", type: "article", literal: "bir", explanation: "Posición 6. Artículo indefinido masculino.", examples: [{ es: "Tengo un coche.", tr: "Bir arabam var." }] },
          { word: "museo", type: "noun", literal: "müze", explanation: "Posición 7. Sustantivo.", examples: [{ es: "El museo está cerrado.", tr: "Müze kapalı." }] },
          { word: "histórico", type: "adjective", literal: "tarihi", explanation: "Posición 8. Adjetivo calificativo. Siempre después del sustantivo.", examples: [{ es: "Un libro histórico.", tr: "Tarihi bir kitap." }] }
        ]
      }
    },
    {
      id: "u8_n5", type: "theory", title: "Caja de Herramientas: Tiempo y Preguntas",
      content: {
        concept: "Escucha y practica la pronunciación de los marcadores de tiempo futuro y las palabras interrogativas.",
        examples: [
          { es: "Hoy / Mañana", tr: "Bugün / Yarın" },
          { es: "Este fin de semana", tr: "Bu hafta sonu" },
          { es: "La próxima semana", tr: "Gelecek hafta" },
          { es: "El próximo año", tr: "Gelecek yıl" },
          { es: "Voy a / Vas a / Va a", tr: "Yapacağım / Yapacaksın / Yapacak" },
          { es: "¿Qué? / ¿Por qué?", tr: "Ne? / Neden?" },
          { es: "¿Dónde? / ¿Adónde?", tr: "Nerede? / Nereye?" },
          { es: "¿Cuándo? / ¿Cuánto?", tr: "Ne zaman? / Ne kadar?" }
        ]
      }
    },
    {
      id: "u8_n6", type: "reading", title: "Lectura A (Diálogo): Planes de fin de semana",
      content: {
        text: "Carlos y Ayşe hablan por teléfono un viernes por la tarde.\n\n— Carlos: ¡Hola Ayşe! ¿Qué vas a hacer este fin de semana?\n— Ayşe: Hola Carlos. El sábado por la mañana voy a limpiar mi apartamento porque está muy sucio. ¿Y tú?\n— Carlos: Yo voy a jugar al fútbol con mis amigos. Oye, ¿quieres cenar conmigo el sábado por la noche?\n— Ayşe: Me encantaría, pero no puedo. Voy a estudiar mucho porque el lunes tengo un examen de español.\n— Carlos: ¡Vaya, qué lástima! Entonces, ¿vamos a tomar un café el domingo?\n— Ayşe: ¡Sí, perfecto! El domingo estoy libre.",
        translation: "Carlos ve Ayşe cuma öğleden sonra telefonda konuşuyorlar.\n\n— Carlos: Merhaba Ayşe! Bu hafta sonu ne yapacaksın?\n— Ayşe: Merhaba Carlos. Cumartesi sabahı dairemi temizleyeceğim çünkü çok kirli. Ya sen?\n— Carlos: Ben arkadaşlarımla futbol oynayacağım. Dinle, cumartesi akşamı benimle akşam yemeği yemek ister misin?\n— Ayşe: Çok isterdim ama yapamam. Çok ders çalışacağım çünkü pazartesi günü İspanyolca sınavım var.\n— Carlos: Tüh, ne yazık! O zaman pazar günü kahve içmeye gidelim mi?\n— Ayşe: Evet, mükemmel! Pazar günü boşum."
      }
    },
    {
      id: "u8_n7", type: "reading", title: "Lectura B (Narrativa): Mi vida en España",
      content: {
        text: "Hola, me llamo Murat. Yo soy turco, pero ahora estoy viviendo en Madrid. Madrid es una ciudad muy grande y hermosa, pero hace mucho calor en verano.\n\nTodos los días por la mañana, yo desayuno pan con tomate y bebo un café muy fuerte. Después, voy a trabajar a la oficina. Me gusta mucho mi trabajo porque mis compañeros son muy amables.\n\nEl próximo mes, mi familia va a viajar a España para visitarme. Nosotros vamos a visitar muchos museos y vamos a comer tapas en restaurantes tradicionales. ¡Tengo muchas ganas de verlos!",
        translation: "Merhaba, benim adım Murat. Ben Türküm ama şu an Madrid'de yaşıyorum. Madrid çok büyük ve güzel bir şehir, ama yazın çok sıcak oluyor.\n\nHer gün sabahları domatesli ekmekle kahvaltı yaparım ve çok sert bir kahve içerim. Sonra ofise çalışmaya giderim. İşimden çok hoşlanıyorum çünkü iş arkadaşlarım çok nazik.\n\nGelecek ay ailem beni ziyaret etmek için İspanya'ya seyahat edecek. Birçok müzeyi ziyaret edeceğiz ve geleneksel restoranlarda tapas yiyeceğiz. Onları görmeyi dört gözle bekliyorum!"
      }
    },
    {
      id: "u8_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        { type: "syntax", turkish: "Yarın İspanyolca çalışacağım.", spanish: "Mañana voy a estudiar español", words: ["Mañana", "voy", "a", "estudiar", "español", "estudio"] },
        { type: "syntax", turkish: "Bu hafta sonu ne yapacaksın?", spanish: "Qué vas a hacer este fin de semana", words: ["Qué", "vas", "a", "hacer", "este", "fin", "de", "semana"] },
        { type: "syntax", turkish: "Biz İspanya'ya seyahat edeceğiz.", spanish: "Nosotros vamos a viajar a España", words: ["Nosotros", "vamos", "a", "viajar", "a", "España", "voy"] },
        { type: "syntax", turkish: "Cumartesi sabahı daireyi temizleyeceğim.", spanish: "El sábado por la mañana voy a limpiar el apartamento", words: ["El", "sábado", "por", "la", "mañana", "voy", "a", "limpiar", "el", "apartamento"] },
        { type: "syntax", turkish: "Geleneksel Türk yemeği hazırlayacağım.", spanish: "Voy a preparar comida turca tradicional", words: ["Voy", "a", "preparar", "comida", "turca", "tradicional", "preparo"] },
        { type: "syntax", turkish: "Pazartesi günü üniversitede görüşelim.", spanish: "Vamos a vernos el lunes en la universidad", words: ["Vamos", "a", "vernos", "el", "lunes", "en", "la", "universidad"] },
        { type: "syntax", turkish: "O (kadın) yeni bir araba alacak.", spanish: "Ella va a comprar un coche nuevo", words: ["Ella", "va", "a", "comprar", "un", "coche", "nuevo", "van"] },
        { type: "syntax", turkish: "Onlar yeni bir ev arayacaklar.", spanish: "Ellos van a buscar una casa nueva", words: ["Ellos", "van", "a", "buscar", "una", "casa", "nueva", "vamos"] },
        { type: "syntax", turkish: "Neden her gün İspanyolca çalışıyorsun?", spanish: "Por qué estudias español todos los días", words: ["Por", "qué", "estudias", "español", "todos", "los", "días"] },
        { type: "syntax", turkish: "Nereye gidiyorsun?", spanish: "Adónde vas tú", words: ["Adónde", "vas", "tú", "Dónde", "voy"] },
        { type: "speaking", spanish: "¿Cuánto cuesta este vestido?", turkish: "Bu elbise ne kadar?" },
        { type: "speaking", spanish: "Mañana voy a estudiar español.", turkish: "Yarın İspanyolca çalışacağım." },
        { type: "speaking", spanish: "¿Qué vas a hacer este fin de semana?", turkish: "Bu hafta sonu ne yapacaksın?" },
        { type: "speaking", spanish: "Nosotros vamos a viajar a España.", turkish: "Biz İspanya'ya seyahat edeceğiz." },
        { type: "speaking", spanish: "El sábado por la mañana voy a limpiar el apartamento.", turkish: "Cumartesi sabahı daireyi temizleyeceğim." },
        { type: "speaking", spanish: "Voy a preparar comida turca tradicional.", turkish: "Geleneksel Türk yemeği hazırlayacağım." },
        { type: "speaking", spanish: "Vamos a vernos el lunes en la universidad.", turkish: "Pazartesi günü üniversitede görüşelim." },
        { type: "speaking", spanish: "Ella va a comprar un coche nuevo.", turkish: "O yeni bir araba alacak." },
        { type: "speaking", spanish: "Ellos van a buscar una casa nueva.", turkish: "Onlar yeni bir ev arayacaklar." },
        { type: "speaking", spanish: "¿Por qué trabajas mucho?", turkish: "Neden çok çalışıyorsun?" }
      ]
    },
    // ==========================================
    // EL GRAN REPASO (3 PÁGINAS ANTES DEL EXAMEN)
    // ==========================================
    {
      id: "u8_n9", type: "theory", title: "Repaso I: Los 4 Pilares",
      content: {
        concept: "¡Felicidades por llegar hasta aquí! Antes del Mega Examen, vamos a refrescar tu memoria. Esta es la Página 1 de tu Guía de Supervivencia A1.\n\nEn español, el verbo 'olmak' y las emociones se dividen en 4 pilares fundamentales. Si dominas esto, dominas el idioma:\n\n1️⃣ SER (Esencia y Origen)\nLo usamos para cosas permanentes. Identidad, nacionalidad, profesión.\n• Soy Ayşe (Identidad).\n• Soy arquitecta (Profesión - ¡SIN ARTÍCULO!).\n• Soy de Turquía (Origen).\n\n2️⃣ ESTAR (Estado y Ubicación)\nLo usamos para emociones temporales o para ubicar cosas en un mapa.\n• Estoy feliz hoy (Emoción).\n• Estoy en Madrid (Ubicación).\n\n3️⃣ TENER (Posesión y Sensaciones)\nEl español es raro: la edad y las sensaciones del cuerpo se POSEEN.\n• Tengo 25 años (❌ Nunca digas 'Soy 25').\n• Tengo hambre, tengo frío, tengo sed.\n\n4️⃣ GUSTAR (El verbo al revés)\nEl sujeto no eres tú, es la cosa que te da placer. Por eso usamos 'me/te/le'.\n• Me gusta el café (Singular).\n• Me gustan los gatos (Plural).",
        examples: [
          { es: "Yo soy inteligente. (Naturaleza / Ser)", tr: "Ben zekiyim." },
          { es: "Yo estoy cansado. (Estado temporal / Estar)", tr: "Ben yorgunum." },
          { es: "Yo tengo frío. (Sensación / Tener)", tr: "Üşüyorum." },
          { es: "A mí me gusta dormir. (Preferencia / Gustar)", tr: "Uyumayı severim." }
        ]
      }
    },
    {
      id: "u8_n10", type: "theory", title: "Repaso II: La Base y Arquitectura",
      content: {
        concept: "Página 2 de tu Guía de Supervivencia: ¿Cómo construir oraciones perfectas?\n\n1️⃣ EL GÉNERO (La pesadilla turca)\nEn español TODO es chico o chica.\n• Termina en -O = EL (El perro, el vaso).\n• Termina en -A = LA (La casa, la mesa).\n🚨 Excepciones Prohibidas: El problema, el mapa, el agua, el día, la mano.\n\n2️⃣ EL PLURAL\nSi tienes varias cosas, TODOS los elementos de la frase deben llevar una 'S' o 'ES'.\n• Singular: El coche rojo es rápido.\n• Plural: LOS cocheS rojoS son rápidoS.\n\n3️⃣ EL ORDEN SINTÁCTICO (S-V-O-A)\nEl español es lineal y directo. No aglutinamos palabras al final como el turco.\n• Turco: Siyah kedi masanın altında uyuyor.\n• Español: El gato (Sujeto) + negro (Adjetivo siempre después) + está durmiendo (Verbo en medio) + debajo de (Preposición) + la mesa (Objeto final).",
        examples: [
          { es: "El problema es grande. (¡Excepción!)", tr: "Problem büyüktür." },
          { es: "Las gatas blancas son hermosas.", tr: "Beyaz (dişi) kediler güzeldir." },
          { es: "Yo bebo agua en la cocina.", tr: "Ben mutfakta su içerim (Fiil her zaman ortada)." }
        ]
      }
    },
    {
      id: "u8_n11", type: "theory", title: "Repaso III: La Línea del Tiempo",
      content: {
        concept: "Página 3 de tu Guía de Supervivencia. En turco el sufijo '-iyor' hace casi todo el trabajo. ¡En español tenemos 3 fórmulas distintas!\n\n1️⃣ PRESENTE (Rutinas y Hábitos)\nPara las cosas que haces normalmente.\n• Fórmula: Verbos terminados en -o, -as, -es.\n• Ejemplo: Todos los días yo BEBO café.\n\n2️⃣ PRESENTE CONTINUO (Justo Ahora)\nPara acciones que tus ojos están viendo ocurrir en este milisegundo.\n• Fórmula: Verbo ESTAR + Gerundio (-ando/-iendo).\n• Ejemplo: ¡Silencio! Yo ESTOY BEBIENDO café ahora mismo.\n🚨 Cuidado con los rebeldes: Durmiendo, Leyendo, Pidiendo, Yendo.\n\n3️⃣ FUTURO PRÓXIMO (Mis planes)\nPara todo lo que harás mañana o el año que viene.\n• Fórmula: Verbo IR + a + Infinitivo.\n• Ejemplo: Mañana VOY A BEBER café con mis amigos.\n\n💌 Mensaje de tu profesor:\nHas trabajado increíblemente duro para llegar a este punto. Conoces los géneros, dominas el verbo Gustar, sabes ubicarte en el espacio y hacer planes futuros. Respira profundo. Tómate todo el tiempo que necesites en el Mega Examen. ¡Estoy súper orgulloso de ti! ¡A por el 100%!",
        examples: [
          { es: "Yo trabajo los lunes. (Rutina)", tr: "Pazartesileri çalışırım." },
          { es: "Yo estoy trabajando ahora. (Continuo)", tr: "Şu an çalışıyorum." },
          { es: "Yo voy a trabajar mañana. (Futuro)", tr: "Yarın çalışacağım." },
          { es: "Tú lees mucho. (Rutina)", tr: "Çok okursun." },
          { es: "Tú estás leyendo un libro. (Continuo irregular)", tr: "Bir kitap okuyorsun." },
          { es: "Tú vas a leer. (Futuro)", tr: "Okuyacaksın." }
        ]
      }
    },
    // ==========================================
    // MEGA EXAMEN DE 100 PREGUNTAS
    // ==========================================
    {
      id: "u8_exam", type: "exam", title: "Mega Examen: Fin del Nivel A1",
      content: {
        concept: "¡LA PRUEBA FINAL DEL A1! \nEste Mega Examen contiene exactamente 100 preguntas escritas una a una que evalúan absolutamente todo lo que has aprendido en las 8 unidades. Tómate tu tiempo y demuestra tu dominio total.",
        exercises: [
          // --- UNIDAD 1 (Saludos y Supervivencia) ---
          { type: "multiple_choice", question: "Son las 21:00 (9:00 PM). Llegas a una cena. Dices:", options: ["Buenos días", "Buenas tardes", "Buenas noches"], correct: 2 },
          { type: "multiple_choice", question: "Son las 14:00 (2:00 PM). Llegas a una reunión. Dices:", options: ["Buenas tardes", "Buenos días", "Adiós"], correct: 0 },
          { type: "multiple_choice", question: "Tu amiga estornuda (hapşırır). Tú dices:", options: ["¡Perdón!", "¡Salud!", "¡De nada!"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo te presentas de forma muy informal y rápida?", options: ["¡Hola! Me llamo...", "Buenos días señor.", "Yo soy usted."], correct: 0 },
          { type: "multiple_choice", question: "Quieres pedir que alguien repita algo. Dices:", options: ["No entiendo.", "¿Puedes repetir, por favor?", "Hasta mañana."], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la respuesta formal a 'Gracias'?", options: ["Igualmente", "De nada", "Mucho gusto"], correct: 1 },
          { type: "syntax", turkish: "Ben hiçbir şey anlamıyorum.", spanish: "Yo no entiendo nada", words: ["Yo", "no", "entiendo", "nada", "todo"] },
          { type: "syntax", turkish: "Daha yavaş lütfen.", spanish: "Más despacio por favor", words: ["Más", "despacio", "por", "favor", "mucho"] },
          { type: "syntax", turkish: "Tanıştığıma çok memnun oldum.", spanish: "Mucho gusto en conocerte", words: ["Mucho", "gusto", "en", "conocerte", "siento"] },
          { type: "syntax", turkish: "Nasılsınız? (Resmi)", spanish: "Cómo está usted", words: ["Cómo", "está", "usted", "estás"] },
          { type: "syntax", turkish: "İspanyolca 'köpek' nasıl denir?", spanish: "Cómo se dice perro en español", words: ["Cómo", "se", "dice", "perro", "en", "español", "qué"] },
          { type: "syntax", turkish: "Senin adın ne?", spanish: "Cómo te llamas tú", words: ["Cómo", "te", "llamas", "tú", "llama"] },

          // --- UNIDAD 2 (Identidad, SER, Números) ---
          { type: "multiple_choice", question: "Nosotros ________ estudiantes de español.", options: ["son", "somos", "es"], correct: 1 },
          { type: "multiple_choice", question: "¿De dónde ________ (tú)?", options: ["eres", "soy", "estás"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué pronombre usamos para 'Sizler' (en América Latina)?", options: ["Vosotros", "Ustedes", "Ellos"], correct: 1 },
          { type: "multiple_choice", question: "Mi padre ________ un ingeniero excelente.", options: ["es", "está", "tiene"], correct: 0 },
          { type: "multiple_choice", question: "Ana y María ________ de Colombia.", options: ["es", "sois", "son"], correct: 2 },
          { type: "multiple_choice", question: "Treinta + Veinte = ?", options: ["Cuarenta", "Cincuenta", "Sesenta"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué número es 'Noventa'?", options: ["90", "80", "19"], correct: 0 },
          { type: "syntax", turkish: "Ben Arjantinliyim.", spanish: "Yo soy de Argentina", words: ["Yo", "soy", "de", "Argentina", "estoy"] },
          { type: "syntax", turkish: "O (kadın) Kolombiyalı.", spanish: "Ella es de Colombia", words: ["Ella", "es", "de", "Colombia", "colombiano"] },
          { type: "syntax", turkish: "Siz (çoğul) çok zekisiniz.", spanish: "Ustedes son muy inteligentes", words: ["Ustedes", "son", "muy", "inteligentes", "somos"] },
          { type: "syntax", turkish: "Onlar (erkekler) benim arkadaşlarım.", spanish: "Ellos son mis amigos", words: ["Ellos", "son", "mis", "amigos", "amigo"] },
          { type: "syntax", turkish: "Benim adım Ayşe.", spanish: "Yo me llamo Ayşe", words: ["Yo", "me", "llamo", "Ayşe", "llama"] },

          // --- UNIDAD 3 (Verbos regulares, Días, Clima) ---
          { type: "multiple_choice", question: "Yo ________ (trabajar) en un gran hospital.", options: ["trabajas", "trabajo", "trabaja"], correct: 1 },
          { type: "multiple_choice", question: "Los fines de semana nosotros ________ (descansar).", options: ["descansan", "descanso", "descansamos"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué día va ANTES del Domingo?", options: ["Lunes", "Sábado", "Viernes"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué día va DESPUÉS del Martes?", options: ["Lunes", "Jueves", "Miércoles"], correct: 2 },
          { type: "multiple_choice", question: "En Turquía, en diciembre ________ mucho frío.", options: ["hace", "es", "está"], correct: 0 },
          { type: "multiple_choice", question: "Tú ________ (beber) té negro en el desayuno.", options: ["bebo", "beben", "bebes"], correct: 2 },
          { type: "multiple_choice", question: "Ellas ________ (vivir) en una casa grande.", options: ["viven", "vivimos", "vive"], correct: 0 },
          { type: "syntax", turkish: "Pazarları parkta koşarım (correr).", spanish: "Los domingos corro en el parque", words: ["Los", "domingos", "corro", "en", "el", "parque", "corremos"] },
          { type: "syntax", turkish: "Kışın hava çok soğuktur.", spanish: "En invierno hace mucho frío", words: ["En", "invierno", "hace", "mucho", "frío", "está"] },
          { type: "syntax", turkish: "Bugün çok yağmur yağıyor.", spanish: "Hoy llueve mucho", words: ["Hoy", "llueve", "mucho", "hace"] },
          { type: "syntax", turkish: "Saat beşi çeyrek geçiyor.", spanish: "Son las cinco y cuarto", words: ["Son", "las", "cinco", "y", "cuarto", "media"] },
          { type: "syntax", turkish: "O (erkek) her gün İspanyolca öğreniyor (aprender).", spanish: "Él aprende español todos los días", words: ["Él", "aprende", "español", "todos", "los", "días", "aprendo"] },

          // --- UNIDAD 4 (Gustar, Encantar, Comida) ---
          { type: "multiple_choice", question: "A nosotros nos ________ las patatas fritas.", options: ["gusta", "gustan", "gustamos"], correct: 1 },
          { type: "multiple_choice", question: "¿A ti te ________ el café sin azúcar?", options: ["gusta", "gustan", "gustas"], correct: 0 },
          { type: "multiple_choice", question: "A mis padres ______ molesta la música alta.", options: ["le", "les", "me"], correct: 1 },
          { type: "multiple_choice", question: "Yo ________ (tercih ederim) comer pollo con arroz.", options: ["prefiero", "me prefiero", "gusto"], correct: 0 },
          { type: "multiple_choice", question: "A María le ________ los perros (çok sever).", options: ["encanta", "encantan", "gusta mucho"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Ben kahve tercih ederim'?", options: ["Me prefiero el café.", "Yo prefiero el café.", "A mí me gusta el café."], correct: 1 },
          { type: "syntax", turkish: "Çikolataya bayılırım.", spanish: "Me encanta el chocolate", words: ["Me", "encanta", "el", "chocolate", "encantan"] },
          { type: "syntax", turkish: "Meksika yemeklerine bayılırım.", spanish: "Me encanta la comida mexicana", words: ["Me", "encanta", "la", "comida", "mexicana"] },
          { type: "syntax", turkish: "Sebze sevmiyoruz.", spanish: "No nos gustan las verduras", words: ["No", "nos", "gustan", "las", "verduras", "gusta"] },
          { type: "syntax", turkish: "Ona (erkek) seyahat etmek hitap ediyor.", spanish: "A él le gusta viajar", words: ["A", "él", "le", "gusta", "viajar", "gustan"] },
          { type: "syntax", turkish: "Ben balık tercih ederim.", spanish: "Yo prefiero el pescado", words: ["Yo", "prefiero", "el", "pescado", "me"] },
          { type: "syntax", turkish: "Sana sıcak kahve hitap ediyor mu?", spanish: "Te gusta el café caliente", words: ["Te", "gusta", "el", "café", "caliente", "gustan"] },

          // --- UNIDAD 5 (Tener, Posesivos, Familia, Físico) ---
          { type: "multiple_choice", question: "Yo ________ los ojos marrones.", options: ["soy", "estoy", "tengo"], correct: 2 },
          { type: "multiple_choice", question: "Mis hermanas ________ muy altas.", options: ["tienen", "son", "están"], correct: 1 },
          { type: "multiple_choice", question: "________ perro es muy grande (Bizim).", options: ["Nuestro", "Nuestros", "Su"], correct: 0 },
          { type: "multiple_choice", question: "Carlos y Ana ________ una casa bonita.", options: ["tienen", "tiene", "tenemos"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuántos años ________ tu padre?", options: ["es", "está", "tiene"], correct: 2 },
          { type: "multiple_choice", question: "Ella ________ el pelo corto y rizado.", options: ["es", "tiene", "lleva"], correct: 1 },
          { type: "syntax", turkish: "Onun (erkek) siyah sakalı var.", spanish: "Él tiene barba negra", words: ["Él", "tiene", "barba", "negra", "es"] },
          { type: "syntax", turkish: "Benim adım Ayşe ve 25 yaşındayım.", spanish: "Mi nombre es Ayşe y tengo veinticinco años", words: ["Mi", "nombre", "es", "Ayşe", "y", "tengo", "veinticinco", "años"] },
          { type: "syntax", turkish: "Senin çocukların çok zeki.", spanish: "Tus hijos son muy inteligentes", words: ["Tus", "hijos", "son", "muy", "inteligentes", "Tu"] },
          { type: "syntax", turkish: "Bizim evimizin üç odası var.", spanish: "Nuestra casa tiene tres habitaciones", words: ["Nuestra", "casa", "tiene", "tres", "habitaciones"] },
          { type: "syntax", turkish: "Kız kardeşim kısa boylu ve zayıf.", spanish: "Mi hermana es baja y delgada", words: ["Mi", "hermana", "es", "baja", "y", "delgada", "tiene"] },
          { type: "syntax", turkish: "Onların büyükbabası 80 yaşında.", spanish: "Su abuelo tiene ochenta años", words: ["Su", "abuelo", "tiene", "ochenta", "años", "es"] },

          // --- UNIDAD 6 (Ser vs Estar, Ubicación, Sensaciones) ---
          { type: "multiple_choice", question: "¿Dónde ________ las llaves del coche?", options: ["son", "tienen", "están"], correct: 2 },
          { type: "multiple_choice", question: "Yo no puedo comer más, ________ muy lleno (Tokum).", options: ["soy", "estoy", "tengo"], correct: 1 },
          { type: "multiple_choice", question: "Mi amigo es divertido, pero hoy en la fiesta _______ aburrido.", options: ["es", "está", "tiene"], correct: 1 },
          { type: "multiple_choice", question: "La gata está ________ de la mesa (Altında).", options: ["encima", "debajo", "detrás"], correct: 1 },
          { type: "multiple_choice", question: "Nosotros ________ mucha sed (Susamışız).", options: ["estamos", "somos", "tenemos"], correct: 2 },
          { type: "multiple_choice", question: "El museo ________ en el centro de la ciudad.", options: ["es", "está", "tiene"], correct: 1 },
          { type: "syntax", turkish: "Anahtarlarım televizyonun arkasında.", spanish: "Mis llaves están detrás de la televisión", words: ["Mis", "llaves", "están", "detrás", "de", "la", "televisión"] },
          { type: "syntax", turkish: "O (kadın) karanlıktan korkuyor.", spanish: "Ella tiene miedo a la oscuridad", words: ["Ella", "tiene", "miedo", "a", "la", "oscuridad", "está"] },
          { type: "syntax", turkish: "Bugün çok sıcaklıyorum.", spanish: "Hoy tengo mucho calor", words: ["Hoy", "tengo", "mucho", "calor", "estoy"] },
          { type: "syntax", turkish: "Restoran bankanın yanında.", spanish: "El restaurante está al lado del banco", words: ["El", "restaurante", "está", "al", "lado", "del", "banco"] },
          { type: "syntax", turkish: "Benim annem şu an çok sinirli (enojada).", spanish: "Mi madre está muy enojada ahora", words: ["Mi", "madre", "está", "muy", "enojada", "ahora", "es"] },
          { type: "syntax", turkish: "Biz Madrid'deyiz.", spanish: "Nosotros estamos en Madrid", words: ["Nosotros", "estamos", "en", "Madrid", "somos"] },

          // --- UNIDAD 7 (Presente Continuo) ---
          { type: "multiple_choice", question: "Los niños están ________ (jugar) en el parque.", options: ["jugando", "jugiendo", "juegan"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué estás ________ (hacer) ahora mismo?", options: ["hacendo", "haciendo", "hago"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es el gerundio del verbo IR (gitmek)?", options: ["iendo", "yando", "yendo"], correct: 2 },
          { type: "multiple_choice", question: "Mi padre está ________ (dormir) en el sofá.", options: ["dormiendo", "durmiendo", "duerme"], correct: 1 },
          { type: "multiple_choice", question: "Yo ________ leyendo un libro fascinante.", options: ["soy", "tengo", "estoy"], correct: 2 },
          { type: "multiple_choice", question: "Nosotros estamos ________ (pedir) comida italiana.", options: ["pediendo", "pidiendo", "pidamos"], correct: 1 },
          { type: "syntax", turkish: "Şu an kahve içiyorum.", spanish: "Estoy bebiendo café ahora mismo", words: ["Estoy", "bebiendo", "café", "ahora", "mismo", "bebo"] },
          { type: "syntax", turkish: "Müzik dinliyorum.", spanish: "Estoy escuchando música", words: ["Estoy", "escuchando", "música", "escucho"] },
          { type: "syntax", turkish: "Onlar akşam yemeği pişiriyorlar.", spanish: "Ellos están cocinando la cena", words: ["Ellos", "están", "cocinando", "la", "cena"] },
          { type: "syntax", turkish: "Bugün çok yağmur yağıyor.", spanish: "Está lloviendo mucho hoy", words: ["Está", "lloviendo", "mucho", "hoy", "Llueve"] },
          { type: "syntax", turkish: "O (kadın) yalan söylüyor (decir mentiras).", spanish: "Ella está diciendo mentiras", words: ["Ella", "está", "diciendo", "mentiras", "deciendo"] },
          { type: "syntax", turkish: "Biz plajda yürüyoruz.", spanish: "Nosotros estamos caminando por la playa", words: ["Nosotros", "estamos", "caminando", "por", "la", "playa"] },

          // --- UNIDAD 8 (Futuro, Conectores y Preguntas) ---
          { type: "multiple_choice", question: "¿________ años tienes?", options: ["Cuántos", "Cuándo", "Dónde"], correct: 0 },
          { type: "multiple_choice", question: "¿________ vas a ir el sábado? (Nereye)", options: ["Dónde", "Adónde", "Qué"], correct: 1 },
          { type: "multiple_choice", question: "Mañana yo ________ a trabajar temprano.", options: ["va", "vamos", "voy"], correct: 2 },
          { type: "multiple_choice", question: "Mis amigos ________ a organizar una fiesta.", options: ["van", "vamos", "voy"], correct: 0 },
          { type: "multiple_choice", question: "Para preguntar un precio usamos:", options: ["¿Cómo cuesta?", "¿Cuánto cuesta?", "¿Qué cuesta?"], correct: 1 },
          { type: "multiple_choice", question: "Nosotros vamos ________ viajar a Turquía.", options: ["en", "de", "a"], correct: 2 },
          { type: "multiple_choice", question: "¿________ es tu número de teléfono? (Hangisi)", options: ["Qué", "Cuál", "Quién"], correct: 1 },
          { type: "multiple_choice", question: "Ella va a ________ (comprar) una casa nueva.", options: ["comprando", "comprar", "compra"], correct: 1 },
          { type: "syntax", turkish: "Yarın müzeyi ziyaret edeceğim.", spanish: "Mañana voy a visitar el museo", words: ["Mañana", "voy", "a", "visitar", "el", "museo", "visito"] },
          { type: "syntax", turkish: "Bu elbise ne kadar? (Cuesta)", spanish: "Cuánto cuesta este vestido", words: ["Cuánto", "cuesta", "este", "vestido", "cuestan"] },
          { type: "syntax", turkish: "Hafta sonu ne yapacaksın?", spanish: "Qué vas a hacer este fin de semana", words: ["Qué", "vas", "a", "hacer", "este", "fin", "de", "semana"] },
          { type: "syntax", turkish: "Neden her gün İspanyolca çalışıyorsun?", spanish: "Por qué estudias español todos los días", words: ["Por", "qué", "estudias", "español", "todos", "los", "días"] },
          { type: "syntax", turkish: "Biz Arjantin'e seyahat edeceğiz.", spanish: "Nosotros vamos a viajar a Argentina", words: ["Nosotros", "vamos", "a", "viajar", "a", "Argentina"] },
          { type: "syntax", turkish: "O (erkek) yeni bir telefon alacak.", spanish: "Él va a comprar un teléfono nuevo", words: ["Él", "va", "a", "comprar", "un", "teléfono", "nuevo", "van"] },
          { type: "syntax", turkish: "Cumartesi akşamı dinleneceğiz.", spanish: "El sábado por la noche vamos a descansar", words: ["El", "sábado", "por", "la", "noche", "vamos", "a", "descansar"] },
          { type: "syntax", turkish: "Kız arkadaşım Türkçe öğrenecek.", spanish: "Mi novia va a aprender turco", words: ["Mi", "novia", "va", "a", "aprender", "turco", "aprendo"] }
        ]
      }
    }
  ]
};
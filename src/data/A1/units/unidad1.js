export const unidad1 = {
  id: "u1", 
  title: "Unidad 1: Pragmática y Supervivencia", 
  description: "Saludos, formalidad, cultura hispana y vocabulario para sobrevivir en clase.",
  nodes: [
    {
      id: "u1_n1", type: "theory", title: "Los Saludos, las Despedidas y la Cultura",
      content: {
        concept: "En el mundo hispanohablante, somos muy cálidos. El saludo no es solo una palabra, es una conexión. A diferencia del turco 'Merhaba' que funciona siempre, en español dividimos el día por la posición del sol.\n\n☀️ Por la mañana (hasta las 12:00 PM o la hora de comer): Decimos 'Buenos días'.\n🌤️ Por la tarde (hasta que oscurece): Decimos 'Buenas tardes'.\n🌙 Por la noche (cuando ya no hay sol): Decimos 'Buenas noches'.\n\n🌍 NOTA CULTURAL: En España, cuando te presentan a alguien por primera vez (incluso en situaciones algo formales), es costumbre dar dos besos en las mejillas. En la mayoría de países de Latinoamérica, se da un solo beso en la mejilla, o un apretón de manos si es un ambiente de negocios.",
        examples: [
          { es: "¡Hola! ¿Qué tal todo?", tr: "Merhaba! Her şey nasıl gidiyor? (Muy común entre amigos)" },
          { es: "Buenos días, ¿cómo estás?", tr: "Günaydın, nasılsın? (Educado y amable)" },
          { es: "Buenas tardes, familia.", tr: "İyi akşamüstü, aile." },
          { es: "Buenas noches, hasta mañana.", tr: "İyi geceler, yarına kadar / yarın görüşürüz." },
          { es: "Adiós, nos vemos pronto.", tr: "Hoşça kal, yakında görüşürüz." },
          { es: "Mucho gusto en conocerte.", tr: "Seninle tanıştığıma çok memnun oldum." }
        ]
      }
    },
    {
      id: "u1_n2", type: "theory", title: "Formalidad: Tú vs. Usted",
      content: {
        concept: "Este es uno de los conceptos más importantes. Al igual que en turco tienen 'Sen' (Tú) y 'Siz' (Usted), el español tiene reglas estrictas sobre el respeto.\n\n🧑 Usa 'TÚ' (Informal): Con amigos, personas de tu misma edad, niños, tu pareja o familia. El verbo cambia para coincidir con 'Tú'. Ejemplo: ¿Cómo estÁS?\n\n👔 Usa 'USTED' (Formal): Con personas mayores, policías, jefes, o gente que no conoces en tiendas o bancos. El verbo cambia como si estuvieras hablando de 'Él/Ella'. Ejemplo: ¿Cómo estÁ USTED?\n\n🇹🇷 TRAMPA PARA TURCOS: En turco usan 'Siz' (Usted) tanto para ser formales con una persona, como para hablarle a un grupo de personas (Plural). En español, 'Usted' es SOLO PARA UNA PERSONA. Para varias personas usamos 'Ustedes' o 'Vosotros'.",
        examples: [
          { es: "Hola Carlos, ¿cómo estás tú?", tr: "Merhaba Carlos, sen nasılsın? (Informal)" },
          { es: "Buenos días, señor. ¿Cómo está usted?", tr: "Günaydın beyefendi. Siz nasılsınız? (Formal)" },
          { es: "Disculpe, ¿usted tiene hora?", tr: "Afedersiniz, saatiniz var mı? (A un desconocido en la calle)" },
          { es: "Oye, ¿tienes hora?", tr: "Baksana, saatin var mı? (A un chico de tu edad en la universidad)" },
          { es: "¿Cómo te llamas?", tr: "Adın ne? (Informal)" },
          { es: "¿Cómo se llama usted?", tr: "Adınız nedir? (Formal)" }
        ]
      }
    },
    {
      id: "u1_n3", type: "theory", title: "El Kit de Supervivencia",
      content: {
        concept: "Cuando aprendes un idioma, tu mejor amigo es saber decir 'no entiendo'. Estas frases son tu paracaídas; úsalas sin miedo. Los hispanohablantes hablamos muy rápido, así que pedir que reduzcan la velocidad es totalmente normal.\n\nPalabras mágicas para acompañar estas frases:\n• 'Por favor' (Lütfen)\n• 'Perdón / Disculpe' (Afedersin / Özür dilerim)\n• 'Gracias' (Teşekkürler)",
        examples: [
          { es: "Perdón, mi español no es muy bueno.", tr: "Özür dilerim, İspanyolcam çok iyi değil." },
          { es: "Lo siento, no entiendo nada.", tr: "Üzgünüm, hiçbir şey anlamıyorum." },
          { es: "¿Puedes hablar más despacio, por favor?", tr: "Lütfen daha yavaş konuşabilir misin?" },
          { es: "¿Puedes repetir eso, por favor?", tr: "Bunu lütfen tekrar edebilir misin?" },
          { es: "¿Cómo se dice 'kedi' en español?", tr: "'Kedi' İspanyolcada nasıl denir? (Se dice: gato)" },
          { es: "¿Qué significa la palabra 'despacio'?", tr: "'Despacio' kelimesi ne anlama geliyor? (Significa: yavaş)" }
        ]
      }
    },
    {
      id: "u1_n4", type: "theory", title: "Laboratorio de Sintaxis: Estructura Básica",
      content: {
        concept: "En español, el orden más común de una frase es Sujeto + Verbo + Objeto + Adjetivo (S-V-O-A).\n\n⚠️ ¡Atención aquí! A diferencia del turco y el inglés, en español el ADJETIVO (color, tamaño, personalidad) va casi siempre DESPUÉS del sustantivo. (No decimos 'Inteligente mujer', decimos 'Mujer inteligente').\n\nVamos a analizar la siguiente oración palabra por palabra:",
        examples: [{ es: "Yo soy una mujer inteligente.", tr: "Ben zeki bir kadınım." }],
        analysis: [
          { word: "Yo", type: "pronoun", literal: "Ben", explanation: "Pronombre personal de primera persona singular (Ben). En español se puede omitir porque el verbo ya indica quién habla, pero se usa para dar énfasis.", examples: [{ es: "Yo soy Carlos.", tr: "Ben Carlos." }, { es: "Yo tengo un perro.", tr: "Benim bir köpeğim var." }] },
          { word: "soy", type: "verb", literal: "olmak (-im)", explanation: "Verbo 'ser' conjugado para la primera persona 'Yo' (Olmak). Sirve para identificar quiénes somos.", examples: [{ es: "Soy médico.", tr: "Ben doktorum." }, { es: "Soy de Turquía.", tr: "Ben Türkiyeliyim." }] },
          { word: "una", type: "article", literal: "bir", explanation: "Artículo indefinido femenino singular (Bir).", examples: [{ es: "Tengo una casa.", tr: "Bir evim var." }, { es: "Veo una mujer.", tr: "Bir kadın görüyorum." }] },
          { word: "mujer", type: "noun", literal: "kadın", explanation: "Sustantivo femenino singular que significa 'Kadın'.", examples: [{ es: "La mujer es alta.", tr: "Kadın uzun boylu." }, { es: "Soy una mujer.", tr: "Ben bir kadınım." }] },
          { word: "inteligente", type: "adjective", literal: "zeki", explanation: "Adjetivo que significa 'Zeki'. Termina en 'e', por lo que es neutro (sirve para hombres y mujeres). Observa cómo va DESPUÉS de 'mujer'.", examples: [{ es: "El niño es inteligente.", tr: "Erkek çocuk zeki." }, { es: "La niña es inteligente.", tr: "Kız çocuk zeki." }] }
        ]
      }
    },
    {
      id: "u1_n5", type: "theory", title: "Caja de Herramientas: Vocabulario",
      content: {
        concept: "Antes de pasar a las lecturas, vamos a hacer un repaso rápido de las palabras sueltas más importantes. Esta es tu 'Caja de Herramientas' diaria.\n\nToca cada palabra para escuchar su pronunciación. Intenta imitar el sonido en voz alta para acostumbrar tu oído al ritmo del español.",
        examples: [
          { es: "Hola", tr: "Merhaba" },
          { es: "Adiós", tr: "Hoşça kal" },
          { es: "Sí", tr: "Evet" },
          { es: "No", tr: "Hayır" },
          { es: "Por favor", tr: "Lütfen" },
          { es: "Gracias", tr: "Teşekkürler" },
          { es: "De nada", tr: "Rica ederim / Bir şey değil" },
          { es: "Perdón / Disculpe", tr: "Özür dilerim / Afedersiniz" },
          { es: "Bien", tr: "İyi" },
          { es: "Mal", tr: "Kötü" },
          { es: "Más despacio", tr: "Daha yavaş" },
          { es: "Mucho gusto", tr: "Memnun oldum" }
        ]
      }
    },
    {
      id: "u1_n6", type: "reading", title: "Lectura A (Diálogo): Un encuentro en Madrid",
      content: {
        text: "Son las 9:00 de la mañana en las calles de Madrid. Carlos camina hacia la universidad con su hermano mayor, David.\n\n— ¡Hola, Ayşe! Buenos días.\n— ¡Buenos días, Carlos! ¿Qué tal todo?\n— Yo estoy muy bien. Oye Ayşe, te presento a mi hermano, David.\n— ¡Hola, David! Mucho gusto en conocerte.\n— Encantado, Ayşe. Perdón por la pregunta, ¿cómo se pronuncia tu nombre? ¿Puedes repetir más despacio?\n— Sí, claro. A-Y-Ş-E. Es un nombre turco.\n— Ah, es muy bonito. Bueno, nosotros tenemos clase. ¡Hasta luego!\n— Adiós chicos, ¡hasta pronto!",
        translation: "Saat sabah 9:00, Madrid sokakları. Carlos abisi David ile üniversiteye doğru yürüyor.\n\n— Merhaba Ayşe! Günaydın.\n— Günaydın Carlos! Her şey nasıl gidiyor?\n— Ben çok iyiyim. Bak Ayşe, seni abim David ile tanıştırayım.\n— Merhaba David! Seninle tanıştığıma çok memnun oldum.\n— Memnun oldum Ayşe. Soru için özür dilerim, adın nasıl telaffuz ediliyor? Daha yavaş tekrar edebilir misin?\n— Evet, tabii ki. A-Y-Ş-E. Türkçe bir isim.\n— Ah, çok güzel. Pekala, bizim dersimiz var. Görüşürüz!\n— Hoşça kalın çocuklar, yakında görüşürüz!"
      }
    },
    {
      id: "u1_n7", type: "reading", title: "Lectura B (Narrativa): Mi primer día",
      content: {
        text: "¡Hola a todos! Buenos días. Mi nombre es Ayşe y soy estudiante de español. Yo soy de Turquía. Hoy es mi primer día en esta escuela y estoy un poco nerviosa.\n\nMi español no es muy bueno todavía. Muchas veces no entiendo a los profesores porque hablan muy rápido. Por eso, mi frase favorita en la clase es: \"Disculpe profesor, ¿puede hablar más despacio, por favor?\".\n\nMis compañeros de clase son muy amables y siempre me ayudan. Estoy muy feliz de estar aquí. ¡Muchas gracias a todos!",
        translation: "Herkese merhaba! Günaydın. Benim adım Ayşe ve İspanyolca öğrencisiyim. Ben Türkiyeliyim. Bugün bu okuldaki ilk günüm ve biraz gerginim.\n\nİspanyolcam henüz çok iyi değil. Çoğu zaman öğretmenleri anlamıyorum çünkü çok hızlı konuşuyorlar. Bu yüzden sınıftaki en sevdiğim cümlem: \"Afedersiniz öğretmenim, lütfen daha yavaş konuşabilir misiniz?\".\n\nSınıf arkadaşlarım çok nazik ve bana her zaman yardım ediyorlar. Burada olduğum için çok mutluyum. Herkese çok teşekkür ederim!"
      }
    },
    {
      id: "u1_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        // 10 Ejercicios de Sintaxis (Constructor)
        { type: "syntax", turkish: "Merhaba, her şey nasıl gidiyor?", spanish: "Hola qué tal todo", words: ["Hola", "qué", "tal", "todo", "cómo"] },
        { type: "syntax", turkish: "Özür dilerim, İspanyolcam çok iyi değil.", spanish: "Perdón mi español no es muy bueno", words: ["Perdón", "mi", "español", "no", "es", "muy", "bueno", "soy"] },
        { type: "syntax", turkish: "Seni abimle tanıştırayım.", spanish: "Te presento a mi hermano mayor", words: ["Te", "presento", "a", "mi", "hermano", "mayor", "Le"] },
        { type: "syntax", turkish: "Seninle tanıştığıma çok memnun oldum.", spanish: "Mucho gusto en conocerte", words: ["Mucho", "gusto", "en", "conocerte", "siento", "lo"] },
        { type: "syntax", turkish: "Üzgünüm, hiçbir şey anlamıyorum.", spanish: "Lo siento no entiendo nada", words: ["Lo", "siento", "no", "entiendo", "nada", "todo"] },
        { type: "syntax", turkish: "Lütfen daha yavaş konuşabilir misin?", spanish: "Puedes hablar más despacio por favor", words: ["Puedes", "hablar", "más", "despacio", "por", "favor", "qué"] },
        { type: "syntax", turkish: "Ben İspanyolca öğrencisiyim.", spanish: "Yo soy estudiante de español", words: ["Yo", "soy", "estudiante", "de", "español", "aprendo"] },
        { type: "syntax", turkish: "Günaydın beyefendi, siz nasılsınız?", spanish: "Buenos días señor cómo está usted", words: ["Buenos", "días", "señor", "cómo", "está", "usted", "tú"] },
        { type: "syntax", turkish: "Afedersiniz, saatiniz var mı? (Usted)", spanish: "Disculpe usted tiene hora", words: ["Disculpe", "usted", "tiene", "hora", "tienes"] },
        { type: "syntax", turkish: "Yakında görüşürüz çocuklar, hoşça kalın.", spanish: "Nos vemos pronto chicos adiós", words: ["Nos", "vemos", "pronto", "chicos", "adiós", "luego"] },
        // 10 Ejercicios de Voz (Speaking)
        { type: "speaking", spanish: "Hola, ¿qué tal todo?", turkish: "Merhaba, her şey nasıl gidiyor?" },
        { type: "speaking", spanish: "Mucho gusto en conocerte.", turkish: "Seninle tanıştığıma çok memnun oldum." },
        { type: "speaking", spanish: "Perdón, mi español no es muy bueno.", turkish: "Özür dilerim, İspanyolcam çok iyi değil." },
        { type: "speaking", spanish: "Buenos días, ¿cómo está usted?", turkish: "Günaydın, siz nasılsınız? (Formal)" },
        { type: "speaking", spanish: "¿Puedes hablar más despacio, por favor?", turkish: "Lütfen daha yavaş konuşabilir misin?" },
        { type: "speaking", spanish: "Lo siento, no entiendo nada.", turkish: "Üzgünüm, hiçbir şey anlamıyorum." },
        { type: "speaking", spanish: "Disculpe, ¿usted tiene hora?", turkish: "Afedersiniz, saatiniz var mı? (Formal)" },
        { type: "speaking", spanish: "Te presento a mi hermano mayor.", turkish: "Seni abimle tanıştırayım." },
        { type: "speaking", spanish: "Buenas noches, hasta mañana.", turkish: "İyi geceler, yarına kadar." },
        { type: "speaking", spanish: "¿Cómo se dice gato en español?", turkish: "İspanyolcada kedi nasıl denir?" }
      ]
    },
    {
      id: "u1_exam", type: "exam", title: "Examen Final: Unidad 1",
      content: {
        concept: "Demuestra tu dominio absoluto con estas 30 preguntas que abarcan saludos, formalidad, supervivencia y sintaxis.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Son las 21:00 (9:00 PM). Llegas a una cena con amigos. Dices:", options: ["Buenos días", "Buenas tardes", "Buenas noches"], correct: 2 },
          { type: "multiple_choice", question: "¿Cómo le pides a alguien que baje la velocidad al hablar?", options: ["No entiendo", "Más despacio por favor", "¿Puedes repetir?"], correct: 1 },
          { type: "multiple_choice", question: "Vas a preguntarle una dirección a un policía mayor en la calle. ¿Qué pronombre usas?", options: ["Tú", "Usted", "Yo"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es una respuesta formal y muy educada a 'Gracias'?", options: ["Igualmente", "Con mucho gusto / De nada", "Perdón"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué dices cuando ves que tu amigo empieza a comer su almuerzo?", options: ["¡Salud!", "¡Buen provecho!", "¡Lo siento!"], correct: 1 },
          { type: "multiple_choice", question: "Alguien estornuda en la clase. ¿Qué le dices?", options: ["Salud", "De nada", "Perdón"], correct: 0 },
          { type: "multiple_choice", question: "Quieres pasar de ser formal ('Usted') a ser informal ('Tú'). ¿Qué preguntas?", options: ["¿Te puedo tutear?", "¿Me llamas?", "¿Eres tú?"], correct: 0 },
          { type: "multiple_choice", question: "Son las 10:00 AM y entras a una panadería. Dices:", options: ["Buenos días", "Buenas noches", "Buenas tardes"], correct: 0 },
          { type: "multiple_choice", question: "Si alguien te dice 'Mucho gusto', ¿cuál es la respuesta más natural?", options: ["Igualmente", "Por favor", "Adiós"], correct: 0 },
          { type: "multiple_choice", question: "La forma más común de decir 'Görüşürüz' al despedirse es:", options: ["Hasta luego", "Buenos días", "De nada"], correct: 0 },
          { type: "multiple_choice", question: "Pisas a alguien por accidente en el autobús. ¿Qué dices de inmediato?", options: ["Perdón / Disculpe", "Gracias", "Hola"], correct: 0 },
          { type: "multiple_choice", question: "El equivalente exacto y súper informal de 'Ne haber?' es:", options: ["¿Qué tal?", "¿Quién eres?", "Hasta mañana"], correct: 0 },
          { type: "multiple_choice", question: "¿A partir de qué hora aproximadamente empezamos a usar 'Buenas tardes' en España?", options: ["Después de las 12 PM / Hora de comer", "A las 8 AM", "A las 11 PM"], correct: 0 },
          { type: "multiple_choice", question: "El pronombre 'Usted' (Siz) en español se usa SÓLO para:", options: ["Una sola persona (Formal)", "Varias personas (Grupo)", "Niños y animales"], correct: 0 },
          { type: "multiple_choice", question: "La palabra 'Tú' (Sen) es ideal para hablar con:", options: ["Amigos, familiares y gente de tu edad", "Jefes en una reunión de trabajo", "Jueces y policías"], correct: 0 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Tanıştığıma çok memnun oldum.", spanish: "Mucho gusto en conocerte", words: ["Mucho", "gusto", "en", "conocerte", "siento", "lo"] },
          { type: "syntax", turkish: "Nasılsınız? (Resmi)", spanish: "Cómo está usted", words: ["Cómo", "está", "usted", "estás", "tú"] },
          { type: "syntax", turkish: "Yakında görüşürüz.", spanish: "Nos vemos pronto", words: ["Nos", "vemos", "pronto", "Hasta", "adiós"] },
          { type: "syntax", turkish: "Özür dilerim, hiçbir şey anlamıyorum.", spanish: "Lo siento no entiendo nada", words: ["Lo", "siento", "no", "entiendo", "nada", "todo"] },
          { type: "syntax", turkish: "'Elma' İspanyolcada nasıl denir?", spanish: "Cómo se dice elma en español", words: ["Cómo", "se", "dice", "elma", "en", "español", "qué"] },
          { type: "syntax", turkish: "Lütfen bunu tekrar edebilir misin?", spanish: "Puedes repetir eso por favor", words: ["Puedes", "repetir", "eso", "por", "favor", "entiendo", "despacio"] },
          { type: "syntax", turkish: "Yarın görüşürüz arkadaşım.", spanish: "Hasta mañana amigo", words: ["Hasta", "mañana", "amigo", "luego", "Adiós"] },
          { type: "syntax", turkish: "Bir kahve lütfen, teşekkürler.", spanish: "Un café por favor gracias", words: ["Un", "café", "por", "favor", "gracias", "de", "nada"] },
          { type: "syntax", turkish: "Sana abimi tanıtayım.", spanish: "Te presento a mi hermano mayor", words: ["Te", "presento", "a", "mi", "hermano", "mayor", "le"] },
          { type: "syntax", turkish: "Afedersin, saatin var mı? (İnformal)", spanish: "Perdona tienes hora", words: ["Perdona", "tienes", "hora", "tiene", "reloj"] },
          { type: "syntax", turkish: "Ben Carlos, İspanya'dan.", spanish: "Yo soy Carlos de España", words: ["Yo", "soy", "Carlos", "de", "España", "estoy"] },
          { type: "syntax", turkish: "Sen benim erkek kardeşimsin.", spanish: "Tú eres mi hermano", words: ["Tú", "eres", "mi", "hermano", "soy", "su"] },
          { type: "syntax", turkish: "Çok iyiyim, ya sen?", spanish: "Muy bien y tú", words: ["Muy", "bien", "y", "tú", "usted", "gracias"] },
          { type: "syntax", turkish: "Bu Ayşe, o benim arkadaşım.", spanish: "Esta es Ayşe ella es mi amiga", words: ["Esta", "es", "Ayşe", "ella", "mi", "amiga", "soy"] },
          { type: "syntax", turkish: "Rica ederim, önemli değil.", spanish: "De nada no es importante", words: ["De", "nada", "no", "es", "importante", "Por", "favor"] }
        ]
      }
    }
  ]
};
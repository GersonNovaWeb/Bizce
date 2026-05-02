export const unidad2 = {
  id: "u2", 
  title: "Unidad 2: Ontología e Identidad", 
  description: "El verbo SER, pronombres, nacionalidades, profesiones y números del 0 al 100.",
  nodes: [
    {
      id: "u2_n1", type: "theory", title: "El Mapa del 'Yo': Los Pronombres",
      content: {
        concept: "¡Bienvenida a la Unidad 2! Empezaremos por los protagonistas de las oraciones: Los Pronombres Personales.\n\n🇹🇷 TRAMPA PARA TURCOS 1 (El Género): En turco usan 'O' para hombres, mujeres y cosas. ¡En español somos más específicos! Tenemos 'Él' (Erkek) y 'Ella' (Kadın).\n\n🇹🇷 TRAMPA PARA TURCOS 2 (El Plural): Su 'Biz' (Nosotros) y 'Onlar' (Ellos) no tienen género. En español, si un grupo está formado SOLO por mujeres, decimos 'Nosotras' o 'Ellas'. Si hay 99 mujeres y 1 hombre en el grupo, usamos el masculino: 'Nosotros'.\n\nAl igual que en turco (Ben doktorum -> Doktorum), en español podemos omitir el pronombre (Yo soy médico -> Soy médico) porque el verbo ya nos dice quién habla.",
        examples: [
          { es: "Yo", tr: "Ben" },
          { es: "Tú", tr: "Sen (Informal)" },
          { es: "Él / Ella", tr: "O (Erkek / Kadın)" },
          { es: "Nosotros / Nosotras", tr: "Biz (Erkekler karışık / Sadece kadınlar)" },
          { es: "Ustedes", tr: "Sizler (Çoğul - Latin Amerika'da herkes için, İspanya'da sadece resmi)" },
          { es: "Ellos / Ellas", tr: "Onlar (Erkekler karışık / Sadece kadınlar)" }
        ]
      }
    },
    {
      id: "u2_n2", type: "theory", title: "La Esencia: El Verbo SER",
      content: {
        concept: "En turco, 'ser' (olmak) es un sufijo que se pega al final de la palabra (-im, -sun, -dir). En español es un verbo independiente e irregular. Lo usamos para hablar de nuestra esencia permanente: identidad, origen y descripciones.\n\nConjugación del Verbo SER:\n• Yo SOY\n• Tú ERES\n• Él / Ella / Usted ES\n• Nosotros / Nosotras SOMOS\n• Ellos / Ellas / Ustedes SON\n\nPara decir de dónde somos, usamos SÍ o SÍ la preposición 'DE' (Soy de Turquía).",
        examples: [
          { es: "Yo soy estudiante.", tr: "Ben öğrenciyim." },
          { es: "Tú eres de Estambul.", tr: "Sen İstanbullusun (İstanbul'dansın)." },
          { es: "Él es mi hermano mayor.", tr: "O benim abim." },
          { es: "Nosotras somos amigas.", tr: "Biz (kadın) arkadaşız." },
          { es: "Ustedes son muy inteligentes.", tr: "Sizler çok zekisiniz." },
          { es: "Ellas son de España.", tr: "Onlar (kadın) İspanyalı." }
        ]
      }
    },
    {
      id: "u2_n3", type: "theory", title: "Profesiones y la Trampa de los Artículos",
      content: {
        concept: "Aprenderemos a decir nuestra profesión, pero ¡cuidado con esta regla de oro!\n\n🇹🇷 TRAMPA PARA TURCOS: En turco es normal decir 'Ben BİR doktorum' (Yo soy UN médico). En español, NUNCA usamos el artículo 'un/una' al decir nuestra profesión. Decimos simplemente: 'Soy médico'.\n\nLA EXCEPCIÓN MAGISTRAL: Solo puedes usar 'un/una' si le vas a poner un adjetivo (una cualidad) a esa profesión. Ej: 'Soy UN médico excelente'.\n\nVocabulario de profesiones (recuerda cambiar la 'o' por 'a' si eres mujer): \nMédico/a, Abogado/a (Avukat), Profesor/a, Ingeniero/a, Arquitecto/a.",
        examples: [
          { es: "Yo soy profesor.", tr: "Ben öğretmenim. (Correcto)" },
          { es: "Yo soy un profesor.", tr: "Ben bir öğretmenim. (¡INCORRECTO en español!)" },
          { es: "Yo soy un profesor muy bueno.", tr: "Ben çok iyi bir öğretmenim. (Correcto, porque hay adjetivo)" },
          { es: "Ella es ingeniera.", tr: "O (kadın) mühendis." },
          { es: "Nosotros somos abogados.", tr: "Biz avukatız." },
          { es: "Él es un arquitecto famoso.", tr: "O ünlü bir mimar." }
        ]
      }
    },
    {
      id: "u2_n4", type: "theory", title: "Laboratorio de Sintaxis: Identidad Descriptiva",
      content: {
        concept: "Vamos a deconstruir la estructura que acabamos de aprender sobre las profesiones y los adjetivos. Observa exactamente en qué posición va cada pieza y por qué hemos añadido la palabra 'un'.",
        examples: [{ es: "Él es un médico excelente.", tr: "O mükemmel bir doktordur." }],
        analysis: [
          { word: "Él", type: "pronoun", literal: "O (erkek)", explanation: "Pronombre personal de tercera persona singular masculina. Posición 1. Lleva tilde (acento) obligatoriamente para no confundirse con el artículo 'el' (the).", examples: [{ es: "Él es mi amigo.", tr: "O benim arkadaşım." }, { es: "Él vive en Estambul.", tr: "O İstanbul'da yaşıyor." }] },
          { word: "es", type: "verb", literal: "olmak (-dir)", explanation: "Posición 2 (Pegado al sujeto). Verbo 'ser' conjugado para la tercera persona. Es el pegamento de la identidad.", examples: [{ es: "Ella es de México.", tr: "O Meksikalı." }, { es: "Usted es muy amable.", tr: "Siz çok naziksiniz." }] },
          { word: "un", type: "article", literal: "bir", explanation: "Artículo indefinido masculino singular. Lo usamos en la posición 3 SOLO porque al final de la oración viene un adjetivo calificando la profesión.", examples: [{ es: "Tengo un coche.", tr: "Bir arabam var." }, { es: "Es un buen día.", tr: "Bu iyi bir gün." }] },
          { word: "médico", type: "noun", literal: "doktor", explanation: "Sustantivo masculino. Posición 4. Si habláramos de una mujer, diríamos 'médica'.", examples: [{ es: "Mi padre es médico.", tr: "Babam doktordur." }, { es: "El médico está en el hospital.", tr: "Doktor hastanede." }] },
          { word: "excelente", type: "adjective", literal: "mükemmel", explanation: "Adjetivo calificativo. Posición 5. En español, este adjetivo siempre se coloca DESPUÉS de la profesión.", examples: [{ es: "Es un libro excelente.", tr: "Bu mükemmel bir kitap." }, { es: "La comida es excelente.", tr: "Yemek mükemmel." }] }
        ]
      }
    },
    {
      id: "u2_n5", type: "theory", title: "Caja de Herramientas: Vocabulario",
      content: {
        concept: "Antes de sumergirnos en los textos largos, vamos a practicar la pronunciación de algunas palabras clave de esta unidad.\n\nToca cada palabra para escuchar su sonido. Presta especial atención a la pronunciación de los números y las nacionalidades.",
        examples: [
          { es: "Cero, uno, dos, tres", tr: "Sıfır, bir, iki, üç" },
          { es: "Diez, veinte, treinta", tr: "On, yirmi, otuz" },
          { es: "Cuarenta, cincuenta", tr: "Kırk, elli" },
          { es: "Sesenta, setenta", tr: "Altmış, yetmiş" },
          { es: "Ochenta, noventa, cien", tr: "Seksen, doksan, yüz" },
          { es: "Turquía / Turco / Turca", tr: "Türkiye / Türk (Erkek) / Türk (Kadın)" },
          { es: "España / Español / Española", tr: "İspanya / İspanyol (Erkek) / İspanyol (Kadın)" },
          { es: "Estados Unidos / Estadounidense", tr: "Amerika Birleşik Devletleri / Amerikalı" },
          { es: "Médico / Médica", tr: "Doktor" },
          { es: "Ingeniero / Ingeniera", tr: "Mühendis" },
          { es: "Profesor / Profesora", tr: "Öğretmen" },
          { es: "Abogado / Abogada", tr: "Avukat" }
        ]
      }
    },
    {
      id: "u2_n6", type: "reading", title: "Lectura A (Diálogo): La Fiesta Internacional",
      content: {
        text: "En una fiesta de estudiantes internacionales en Barcelona...\n\n— ¡Hola! Yo soy Mateo, ¿y tú cómo te llamas?\n— ¡Hola, Mateo! Yo me llamo Ayşe. Mucho gusto.\n— Encantado, Ayşe. ¿De dónde eres? Tu nombre es muy interesante.\n— Yo soy de Turquía, soy turca. ¿Y tú, eres de España?\n— No, yo no soy español. Yo soy de Buenos Aires, soy argentino. ¿A qué te dedicas, Ayşe?\n— Yo soy arquitecta, pero ahora soy estudiante de español. ¿Y tú?\n— Yo soy médico. Bueno, casi... soy un médico joven. Tengo 24 años.\n— ¡Qué bien! Yo tengo 23 años. ¡Vamos a bailar!",
        translation: "Barselona'da uluslararası öğrencilerin katıldığı bir partide...\n\n— Merhaba! Ben Mateo, ya senin adın ne?\n— Merhaba Mateo! Benim adım Ayşe. Tanıştığıma memnun oldum.\n— Memnun oldum Ayşe. Nerelisin? Adın çok ilginç.\n— Ben Türkiyeliyim, Türküm. Ya sen, İspanyalı mısın?\n— Hayır, İspanyol değilim. Ben Buenos Airesliyim, Arjantinliyim. Ne iş yapıyorsun Ayşe?\n— Ben mimarım, ama şimdi İspanyolca öğrencisiyim. Ya sen?\n— Ben doktorum. Yani, neredeyse... genç bir doktorum. 24 yaşındayım.\n— Ne güzel! Ben 23 yaşındayım. Hadi dans edelim!"
      }
    },
    {
      id: "u2_n7", type: "reading", title: "Lectura B (Narrativa): Mi Perfil Profesional",
      content: {
        text: "Hola, me llamo Carlos y tengo treinta y cinco años. Yo soy de Madrid, la capital de España. En mi vida profesional, yo soy ingeniero de software. Trabajo en una empresa internacional muy grande.\n\nMi equipo es muy diverso. María es la directora del proyecto; ella es de México y es una líder excelente. También trabajo con John y Sarah. Ellos son de Estados Unidos, son estadounidenses y son desarrolladores muy inteligentes. \n\nNosotros somos muy buenos amigos. Después del trabajo, siempre tomamos un café juntos. Ellos son personas maravillosas y somos un gran equipo.",
        translation: "Merhaba, adım Carlos ve otuz beş yaşındayım. Ben İspanya'nın başkenti Madridliyim. Profesyonel hayatımda, ben bir yazılım mühendisiyim. Çok büyük uluslararası bir şirkette çalışıyorum.\n\nEkibim çok çeşitlidir. Maria proje yöneticisidir; o Meksikalı ve mükemmel bir liderdir. Ayrıca John ve Sarah ile de çalışıyorum. Onlar Amerika Birleşik Devletleri'nden, Amerikalılar ve çok zeki geliştiricilerdir.\n\nBiz çok iyi arkadaşız. İşten sonra her zaman birlikte kahve içeriz. Onlar harika insanlar ve biz harika bir ekibiz."
      }
    },
    {
      id: "u2_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        // 10 Ejercicios de Sintaxis (Constructor de oraciones)
        { type: "syntax", turkish: "Ben Türkiyeliyim.", spanish: "Yo soy de Turquía", words: ["Yo", "soy", "de", "Turquía", "estoy", "en"] },
        { type: "syntax", turkish: "O (kadın) Türk.", spanish: "Ella es turca", words: ["Ella", "es", "turca", "turco", "Él"] },
        { type: "syntax", turkish: "Benim adım Carlos ve yirmi yaşındayım.", spanish: "Me llamo Carlos y tengo veinte años", words: ["Me", "llamo", "Carlos", "y", "tengo", "veinte", "años", "soy"] },
        { type: "syntax", turkish: "Biz çok zekiyiz.", spanish: "Nosotros somos muy inteligentes", words: ["Nosotros", "somos", "muy", "inteligentes", "son", "nosotras"] },
        { type: "syntax", turkish: "O (erkek) Madrid'de bir doktor.", spanish: "Él es médico en Madrid", words: ["Él", "es", "médico", "en", "Madrid", "un", "el"] },
        { type: "syntax", turkish: "Siz (çoğul) Amerikalısınız.", spanish: "Ustedes son estadounidenses", words: ["Ustedes", "son", "estadounidenses", "somos", "vosotros"] },
        { type: "syntax", turkish: "Onlar (kadınlar) Arjantinli.", spanish: "Ellas son argentinas", words: ["Ellas", "son", "argentinas", "Ellos", "argentinos"] },
        { type: "syntax", turkish: "Sen benim en iyi arkadaşımsın.", spanish: "Tú eres mi mejor amigo", words: ["Tú", "eres", "mi", "mejor", "amigo", "soy", "su"] },
        { type: "syntax", turkish: "Ben İspanyolca öğretmeniyim.", spanish: "Yo soy profesor de español", words: ["Yo", "soy", "profesor", "de", "español", "estoy", "un"] },
        { type: "syntax", turkish: "Masa ahşaptan (yapılmıştır).", spanish: "La mesa es de madera", words: ["La", "mesa", "es", "de", "madera", "está", "en"] },
        // 10 Ejercicios de Voz (Speaking)
        { type: "speaking", spanish: "Yo soy de Turquía.", turkish: "Ben Türkiyeliyim." },
        { type: "speaking", spanish: "Nosotros somos muy inteligentes.", turkish: "Biz çok zekiyiz." },
        { type: "speaking", spanish: "Ella es una doctora excelente.", turkish: "O mükemmel bir doktordur." },
        { type: "speaking", spanish: "Me llamo Carlos y tengo veinte años.", turkish: "Benim adım Carlos ve yirmi yaşındayım." },
        { type: "speaking", spanish: "Ellos son mis colegas.", turkish: "Onlar benim meslektaşlarım." },
        { type: "speaking", spanish: "Usted es muy amable.", turkish: "Siz çok naziksiniz." },
        { type: "speaking", spanish: "La mesa es de madera.", turkish: "Masa ahşaptan." },
        { type: "speaking", spanish: "Mi habitación es la número treinta.", turkish: "Odam otuz numara." },
        { type: "speaking", spanish: "Ellas son argentinas.", turkish: "Onlar Arjantinli." },
        { type: "speaking", spanish: "Yo soy profesor de español.", turkish: "Ben İspanyolca öğretmeniyim." }
      ]
    },
    {
      id: "u2_exam", type: "exam", title: "Examen Final: Unidad 2",
      content: {
        concept: "Supera estas 30 preguntas demostrando tu dominio absoluto sobre los pronombres, nacionalidades, números y las trampas del verbo SER.",
        exercises: [
          // 15 Preguntas de Opción Múltiple
          { type: "multiple_choice", question: "¿Qué pronombre usamos para un grupo mixto de hombres y mujeres ('Biz')?", options: ["Nosotras", "Ellos", "Nosotros"], correct: 2 },
          { type: "multiple_choice", question: "Si hablas con un grupo de amigos en América Latina, ¿qué pronombre usas para 'Sizler'?", options: ["Vosotros", "Ustedes", "Ellos"], correct: 1 },
          { type: "multiple_choice", question: "Completa la frase: Tú ________ mi mejor amigo.", options: ["es", "soy", "eres"], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál es la forma gramaticalmente correcta para decir tu profesión?", options: ["Yo soy arquitecto.", "Yo soy un arquitecto.", "Yo arquitecto soy."], correct: 0 },
          { type: "multiple_choice", question: "Añadimos el artículo 'un/una' a la profesión SOLAMENTE cuando...", options: ["Hablamos con respeto.", "Acompañamos la profesión con un adjetivo.", "La persona es de otro país."], correct: 1 },
          { type: "multiple_choice", question: "El anillo ________ oro (Ahşaptan/Altından).", options: ["está de", "es de", "es en"], correct: 1 },
          { type: "multiple_choice", question: "John es de Estados Unidos. Él es...", options: ["Estadounidensa", "Estadounidense", "Estadounidensio"], correct: 1 },
          { type: "multiple_choice", question: "Completa: Yo ______ de México.", options: ["es", "soy", "eres"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué número es 'Cuarenta'?", options: ["4", "14", "40"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué número es 'Ochenta'?", options: ["8", "18", "80"], correct: 2 },
          { type: "multiple_choice", question: "Si Carlos es de España, él es...", options: ["Español", "Española", "Españole"], correct: 0 },
          { type: "multiple_choice", question: "Si Ayşe es de Turquía, ella es...", options: ["Turco", "Turca", "Turquía"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué número es 'Cien'?", options: ["50", "100", "0"], correct: 1 },
          { type: "multiple_choice", question: "Nosotros ______ muy inteligentes.", options: ["son", "somos", "es"], correct: 1 },
          { type: "multiple_choice", question: "Ellas ______ de París.", options: ["es", "somos", "son"], correct: 2 },
          
          // 15 Ejercicios de Sintaxis (Constructor de oraciones)
          { type: "syntax", turkish: "O (kadın) Kolombiyalı.", spanish: "Ella es de Colombia", words: ["Ella", "es", "de", "Colombia", "colombiana", "del"] },
          { type: "syntax", turkish: "Biz doktoruz.", spanish: "Nosotros somos médicos", words: ["Nosotros", "somos", "médicos", "un", "son"] },
          { type: "syntax", turkish: "Siz (resmi tekil) çok naziksiniz.", spanish: "Usted es muy amable", words: ["Usted", "es", "muy", "amable", "Tú", "eres"] },
          { type: "syntax", turkish: "Biz (sadece kadınlar) Türküz.", spanish: "Nosotras somos turcas", words: ["Nosotras", "somos", "turcas", "Nosotros", "son", "turcos"] },
          { type: "syntax", turkish: "Onlar (kadınlar) mühendis.", spanish: "Ellas son ingenieras", words: ["Ellas", "son", "ingenieras", "Ellos", "unas"] },
          { type: "syntax", turkish: "Ben harika bir öğretmenim.", spanish: "Yo soy un profesor maravilloso", words: ["Yo", "soy", "un", "profesor", "maravilloso", "eres", "el"] },
          { type: "syntax", turkish: "Sen nerelisin?", spanish: "De dónde eres tú", words: ["De", "dónde", "eres", "tú", "soy", "es"] },
          { type: "syntax", turkish: "Masa ahşaptan (yapılmış).", spanish: "La mesa es de madera", words: ["La", "mesa", "es", "de", "madera", "está", "con"] },
          { type: "syntax", turkish: "O (erkek) İspanyol.", spanish: "Él es español", words: ["Él", "es", "español", "española", "Ella"] },
          { type: "syntax", turkish: "Siz (çoğul resmi) Arjantinlisiniz.", spanish: "Ustedes son argentinos", words: ["Ustedes", "son", "argentinos", "somos", "vosotros"] },
          { type: "syntax", turkish: "O benim arkadaşım.", spanish: "Él es mi amigo", words: ["Él", "es", "mi", "amigo", "soy", "su"] },
          { type: "syntax", turkish: "Biz (erkekler) mutluyuz.", spanish: "Nosotros somos felices", words: ["Nosotros", "somos", "felices", "Nosotras", "feliz"] },
          { type: "syntax", turkish: "Ben tam seksen yaşındayım.", spanish: "Yo tengo ochenta años exactos", words: ["Yo", "tengo", "ochenta", "años", "exactos", "soy", "ochentos"] },
          { type: "syntax", turkish: "Onlar Amerikalı.", spanish: "Ellos son estadounidenses", words: ["Ellos", "son", "estadounidenses", "es", "somos"] },
          { type: "syntax", turkish: "Benim adım Carlos ve ben bir avukatım.", spanish: "Me llamo Carlos y soy abogado", words: ["Me", "llamo", "Carlos", "y", "soy", "abogado", "un", "es"] }
        ]
      }
    }
  ]
};
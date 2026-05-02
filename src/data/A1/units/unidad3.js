export const unidad3 = {
  id: "u3", 
  title: "Unidad 3: Mi Día a Día", 
  description: "Días, clima, la casa y el motor del idioma: los verbos regulares (-ar, -er, -ir).",
  nodes: [
    {
      id: "u3_n1", type: "theory", title: "El Tiempo: Días, Meses y Clima",
      content: {
        concept: "Para hablar de nuestra rutina, primero debemos ubicarnos en el tiempo.\n\n📅 Días de la semana: Lunes, Martes, Miércoles, Jueves, Viernes (Días de trabajo) / Sábado, Domingo (Fin de semana).\n\n🇹🇷 TRAMPA PARA TURCOS: En español, los días de la semana son MASCULINOS y siempre llevan el artículo 'el' o 'los'. NUNCA usamos la preposición 'en' para los días. \n❌ Incorrecto: 'En lunes trabajo'. \n✅ Correcto: 'El lunes trabajo' (Pazartesi çalışırım) o 'Los lunes trabajo' (Pazartesileri çalışırım).\n\n🌤️ El Clima (Hava durumu): A diferencia de otros idiomas, en español usamos el verbo HACER (hacer sol, hacer frío, hacer calor) para el clima general.",
        examples: [
          { es: "El lunes voy al banco.", tr: "Pazartesi bankaya gidiyorum." },
          { es: "Los domingos descanso.", tr: "Pazarları dinlenirim." },
          { es: "En verano hace mucho calor.", tr: "Yazın hava çok sıcaktır." },
          { es: "En invierno hace mucho frío.", tr: "Kışın hava çok soğuktur." },
          { es: "Hoy llueve y hace viento.", tr: "Bugün yağmur yağıyor ve rüzgarlı." }
        ]
      }
    },
    {
      id: "u3_n2", type: "theory", title: "El Espacio: La Casa y la Ciudad",
      content: {
        concept: "El lugar donde ocurren nuestras rutinas es clave. \n\n🏠 Partes de la casa:\n• La habitación (Oda)\n• El salón (Salon)\n• La cocina (Mutfak)\n• El baño (Banyo)\n\n🏙️ Lugares de la ciudad:\n• El banco (Banka)\n• La oficina (Ofis)\n• La escuela (Okul)\n• El hospital (Hastane)\n\nPara decir que estamos o hacemos algo dentro de un lugar, usamos la preposición 'EN' (equivalente a los sufijos turcos -de/-da).",
        examples: [
          { es: "Yo como en la cocina.", tr: "Ben mutfakta yemek yerim." },
          { es: "Él duerme en la habitación.", tr: "O odada uyur." },
          { es: "Nosotros trabajamos en la oficina.", tr: "Biz ofiste çalışıyoruz." },
          { es: "Ella estudia en la escuela.", tr: "O okulda okuyor/çalışıyor." }
        ]
      }
    },
    {
      id: "u3_n3", type: "theory", title: "El Motor: Verbos Regulares",
      content: {
        concept: "¡Llegó la hora de la acción! En turco, añaden sufijos a la raíz del verbo para indicar quién hace la acción. En español hacemos algo parecido: cambiamos la terminación del verbo.\n\nTodos los verbos en español terminan en -AR, -ER, o -IR. Para conjugarlos en 'Yo' (Primera persona), la regla de oro es casi siempre la misma: Quitamos las dos últimas letras y ponemos una 'O'.\n\n• Trabajar (Çalışmak) ➔ Yo trabajO (Çalışırım)\n• Comer (Yemek) ➔ Yo comO (Yerim)\n• Vivir (Yaşamak) ➔ Yo vivO (Yaşarım)",
        examples: [
          { es: "Yo trabajo todos los días.", tr: "Her gün çalışırım." },
          { es: "Tú trabajas en el banco.", tr: "Sen bankada çalışıyorsun." },
          { es: "Nosotros comemos pizza.", tr: "Biz pizza yeriz." },
          { es: "Ellos beben agua.", tr: "Onlar su içer." },
          { es: "Ella vive en Madrid.", tr: "O Madrid'de yaşıyor." },
          { es: "Yo escribo un libro.", tr: "Ben bir kitap yazıyorum." }
        ]
      }
    },
    {
      id: "u3_n4", type: "theory", title: "Laboratorio de Sintaxis: Rutinas y Lugares",
      content: {
        concept: "En este laboratorio vamos a deconstruir una oración de rutina diaria. En español, a diferencia del turco (donde el verbo va al final y las preposiciones se pegan a las palabras), dividimos todo en bloques independientes. \n\nObserva cómo el verbo va en el medio y cómo usamos la pequeña palabra 'en' antes del lugar.",
        examples: [{ es: "Yo trabajo en el banco grande.", tr: "Büyük bankada çalışırım." }],
        analysis: [
          { word: "Yo", type: "pronoun", literal: "Ben", explanation: "Posición 1: Pronombre personal (Sujeto). Inicia la oración.", examples: [{ es: "Yo leo un libro.", tr: "Ben bir kitap okuyorum." }, { es: "Yo vivo en casa.", tr: "Ben evde yaşıyorum." }] },
          { word: "trabajo", type: "verb", literal: "çalışırım", explanation: "Posición 2: Verbo principal terminado en -AR (Trabaj-ar). Para decir 'Yo', le quitamos el 'ar' y ponemos una 'o'.", examples: [{ es: "Trabajo todos los días.", tr: "Her gün çalışırım." }, { es: "Trabajo en una oficina.", tr: "Bir ofiste çalışırım." }] },
          { word: "en", type: "connector", literal: "-de/-da", explanation: "Posición 3: Preposición de lugar. A diferencia del sufijo turco (-de/-da) que va pegado a la palabra, el español usa esta pequeña palabra separada.", examples: [{ es: "Estoy en casa.", tr: "Evdeyim." }, { es: "El libro está en la mesa.", tr: "Kitap masada." }] },
          { word: "el", type: "article", literal: "belirli (the)", explanation: "Posición 4: Artículo definido. Necesitamos especificar su género (banco es masculino), por eso ponemos 'el'.", examples: [{ es: "El coche es rápido.", tr: "Araba hızlıdır." }, { es: "El perro ladra.", tr: "Köpek havlıyor." }] },
          { word: "banco", type: "noun", literal: "banka", explanation: "Posición 5: Sustantivo. Es el objeto físico donde ocurre la acción.", examples: [{ es: "Voy al banco.", tr: "Bankaya gidiyorum." }, { es: "El banco está cerrado.", tr: "Banka kapalı." }] },
          { word: "grande", type: "adjective", literal: "büyük", explanation: "Posición 6: Adjetivo. Cierra la oración porque la descripción va irremediablemente al final de todo el bloque.", examples: [{ es: "La casa grande.", tr: "Büyük ev." }, { es: "Un perro grande.", tr: "Büyük bir köpek." }] }
        ]
      }
    },
    {
      id: "u3_n5", type: "theory", title: "Caja de Herramientas: Vocabulario",
      content: {
        concept: "Antes de leer textos largos, practica la pronunciación de este vocabulario fundamental de tu día a día.\n\nToca cada palabra para escuchar su pronunciación. Memoriza los infinitivos de los verbos (-ar, -er, -ir).",
        examples: [
          { es: "Lunes, Martes, Miércoles", tr: "Pazartesi, Salı, Çarşamba" },
          { es: "Jueves, Viernes", tr: "Perşembe, Cuma" },
          { es: "Sábado, Domingo", tr: "Cumartesi, Pazar" },
          { es: "La casa / La habitación", tr: "Ev / Oda" },
          { es: "La cocina / El baño", tr: "Mutfak / Banyo" },
          { es: "Trabajar (Yo trabajo)", tr: "Çalışmak (Ben çalışırım)" },
          { es: "Comer (Yo como)", tr: "Yemek (Ben yerim)" },
          { es: "Vivir (Yo vivo)", tr: "Yaşamak (Ben yaşarım)" },
          { es: "Leer (Yo leo)", tr: "Okumak (Ben okurum)" },
          { es: "Escribir (Yo escribo)", tr: "Yazmak (Ben yazarım)" },
          { es: "Hace frío / Hace calor", tr: "Hava soğuk / Hava sıcak" },
          { es: "Llueve / Nieva", tr: "Yağmur yağıyor / Kar yağıyor" }
        ]
      }
    },
    {
      id: "u3_n6", type: "reading", title: "Lectura A (Diálogo): ¿A qué hora?",
      content: {
        text: "En la oficina, dos compañeros de trabajo planean su día...\n\n— Hola David, ¿qué hora es?\n— Son las tres y cuarto de la tarde.\n— Uf, estoy muy cansada. ¿A qué hora terminamos de trabajar hoy?\n— Hoy es viernes, así que nosotros trabajamos solo hasta las cinco.\n— ¡Qué bien! ¿Qué haces este fin de semana?\n— Los sábados yo descanso en casa y leo libros. ¿Y tú?\n— Yo vivo cerca de la playa, así que los domingos nado en el mar porque en agosto hace mucho calor.\n— ¡Perfecto! ¡Buen fin de semana!",
        translation: "Ofiste, iki iş arkadaşı günlerini planlıyor...\n\n— Merhaba David, saat kaç?\n— Saat öğleden sonra üçü çeyrek geçiyor.\n— Uf, çok yorgunum. Bugün saat kaçta çalışmayı bitiriyoruz?\n— Bugün cuma, bu yüzden sadece beşe kadar çalışıyoruz.\n— Ne güzel! Bu hafta sonu ne yapıyorsun?\n— Cumartesileri evde dinlenirim ve kitap okurum. Ya sen?\n— Plaja yakın yaşıyorum, bu yüzden pazarları denizde yüzerim çünkü ağustos ayında hava çok sıcak.\n— Mükemmel! İyi hafta sonları!"
      }
    },
    {
      id: "u3_n7", type: "reading", title: "Lectura B (Narrativa): El año de Ayşe",
      content: {
        text: "La rutina de Ayşe cambia según las estaciones del año y el clima.\n\nEn invierno hace mucho frío y a veces nieva. Por eso, en diciembre y enero, ella trabaja mucho en la oficina. Los lunes y miércoles, ella estudia español en el salón de su casa y bebe té caliente en la cocina.\n\nEn primavera, el clima es perfecto. A ella le gusta caminar por el parque.\n\nEn verano, la rutina es diferente. En agosto hace muchísimo calor en Madrid. Los viernes por la tarde, ella y sus amigos comen pescado en un restaurante. Ellos beben agua fría y descansan mucho.",
        translation: "Ayşe'nin rutini mevsimlere ve hava durumuna göre değişir.\n\nKışın hava çok soğuktur ve bazen kar yağar. Bu yüzden aralık ve ocak aylarında ofiste çok çalışır. Pazartesi ve çarşamba günleri evinin salonunda İspanyolca çalışır ve mutfakta sıcak çay içer.\n\nİlkbaharda hava mükemmeldir. O, parkta yürüyüş yapmayı sever.\n\nYazın rutin farklıdır. Ağustos ayında Madrid'de hava çok sıcaktır. Cuma öğleden sonraları o ve arkadaşları bir restoranda balık yerler. Soğuk su içerler ve bol bol dinlenirler."
      }
    },
    {
      id: "u3_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        // 10 Ejercicios de Sintaxis (Constructor)
        { type: "syntax", turkish: "Pazartesileri çalışırım.", spanish: "Los lunes trabajo", words: ["Los", "lunes", "trabajo", "El", "trabajas"] },
        { type: "syntax", turkish: "Mutfakta yemek yiyoruz.", spanish: "Comemos en la cocina", words: ["Comemos", "en", "la", "cocina", "baño", "el"] },
        { type: "syntax", turkish: "Biz pizza yeriz.", spanish: "Nosotros comemos pizza", words: ["Nosotros", "comemos", "pizza", "como", "la"] },
        { type: "syntax", turkish: "Kışın çok kar yağar.", spanish: "En invierno nieva mucho", words: ["En", "invierno", "nieva", "mucho", "hace", "el"] },
        { type: "syntax", turkish: "Saat üçü çeyrek geçiyor.", spanish: "Son las tres y cuarto", words: ["Son", "las", "tres", "y", "cuarto", "Es", "media"] },
        { type: "syntax", turkish: "Yazın hava çok sıcaktır.", spanish: "En verano hace mucho calor", words: ["En", "verano", "hace", "mucho", "calor", "es", "el"] },
        { type: "syntax", turkish: "Salı günü İspanyolca çalışıyorum.", spanish: "El martes estudio español", words: ["El", "martes", "estudio", "español", "Los", "en"] },
        { type: "syntax", turkish: "O (kadın) Madrid'de yaşıyor.", spanish: "Ella vive en Madrid", words: ["Ella", "vive", "en", "Madrid", "vivo", "la"] },
        { type: "syntax", turkish: "Her gün kitap okurum.", spanish: "Leo un libro todos los días", words: ["Leo", "un", "libro", "todos", "los", "días", "día"] },
        { type: "syntax", turkish: "Onlar soğuk su içiyor.", spanish: "Ellos beben agua fría", words: ["Ellos", "beben", "agua", "fría", "bebemos", "el"] },
        // 10 Ejercicios de Voz (Speaking)
        { type: "speaking", spanish: "Leo un libro todos los días.", turkish: "Her gün kitap okurum." },
        { type: "speaking", spanish: "Ella vive en Madrid.", turkish: "O Madrid'de yaşıyor." },
        { type: "speaking", spanish: "Los lunes trabajo en el banco.", turkish: "Pazartesileri bankada çalışırım." },
        { type: "speaking", spanish: "Comemos en la cocina.", turkish: "Mutfakta yemek yiyoruz." },
        { type: "speaking", spanish: "En invierno nieva mucho.", turkish: "Kışın çok kar yağar." },
        { type: "speaking", spanish: "Son las tres y cuarto.", turkish: "Saat üçü çeyrek geçiyor." },
        { type: "speaking", spanish: "En verano hace mucho calor.", turkish: "Yazın hava çok sıcaktır." },
        { type: "speaking", spanish: "El martes estudio español.", turkish: "Salı günü İspanyolca çalışıyorum." },
        { type: "speaking", spanish: "Nosotros bebemos agua.", turkish: "Biz su içeriz." },
        { type: "speaking", spanish: "El profesor abre la puerta.", turkish: "Öğretmen kapıyı açar." }
      ]
    },
    {
      id: "u3_exam", type: "exam", title: "Examen Final: Unidad 3",
      content: {
        concept: "Responde estas 30 preguntas sobre rutinas, días, clima, la hora y verbos regulares para aprobar la unidad con maestría.",
        exercises: [
          // 15 Preguntas de Opción Múltiple
          { type: "multiple_choice", question: "¿Qué día va después del Martes?", options: ["Lunes", "Jueves", "Miércoles"], correct: 2 },
          { type: "multiple_choice", question: "¿Cómo conjugas 'Ellos (aprender)'?", options: ["aprendo", "aprendemos", "aprenden"], correct: 2 },
          { type: "multiple_choice", question: "Si son las 8:30, decimos:", options: ["Son las ocho y cuarto", "Son las ocho y media", "Son las nueve menos media"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué mes es 'Ekim' en español?", options: ["Octubre", "Agosto", "Noviembre"], correct: 0 },
          { type: "multiple_choice", question: "Completa: Mi hermano ________ (correr) todos los días en el parque.", options: ["corro", "corres", "corre"], correct: 2 },
          { type: "multiple_choice", question: "Si el verbo es BEBER, y quieres decir 'Ben içerim', dices:", options: ["bebas", "bebes", "bebo"], correct: 2 },
          { type: "multiple_choice", question: "En español, ¿cómo dices 'Yazın hava sıcaktır'?", options: ["En verano hace calor", "En verano es calor", "En verano está calor"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo conjugas 'Tú (escribir)'?", options: ["escribes", "escribe", "escribo"], correct: 0 },
          { type: "multiple_choice", question: "Si alguien te pregunta la hora y son las 4:30, respondes:", options: ["Son las cuatro y media", "Es las cuatro y media", "Son cuatro media"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué día de la semana es 'Cuma'?", options: ["Jueves", "Viernes", "Sábado"], correct: 1 },
          { type: "multiple_choice", question: "Lugar de la casa específico para dormir (Yatak odası):", options: ["El baño", "La cocina", "La habitación"], correct: 2 },
          { type: "multiple_choice", question: "El opuesto directo de 'Hace frío' es:", options: ["Hace sol", "Hace calor", "Nieva"], correct: 1 },
          { type: "multiple_choice", question: "Completa: Nosotros ________ (vivir) en Madrid.", options: ["viven", "vivimos", "vives"], correct: 1 },
          { type: "multiple_choice", question: "Completa: Tú ________ (hablar) español muy bien.", options: ["hablo", "hablan", "hablas"], correct: 2 },
          { type: "multiple_choice", question: "Si son las 1:15, debes decir:", options: ["Son las una y cuarto", "Es la una y cuarto", "Es la una menos cuarto"], correct: 1 },
          // 15 Ejercicios de Sintaxis (Constructor)
          { type: "syntax", turkish: "Her gün kitap okurum.", spanish: "Yo leo un libro todos los días", words: ["Yo", "leo", "un", "libro", "todos", "los", "días"] },
          { type: "syntax", turkish: "Onlar Madrid'de yaşarlar.", spanish: "Ellos viven en Madrid", words: ["Ellos", "viven", "en", "Madrid", "vivimos", "la"] },
          { type: "syntax", turkish: "Kışın hava çok soğuktur.", spanish: "En invierno hace mucho frío", words: ["En", "invierno", "hace", "mucho", "frío", "es", "está"] },
          { type: "syntax", turkish: "Saat bir çeyrek.", spanish: "Es la una y cuarto", words: ["Es", "la", "una", "y", "cuarto", "Son", "las"] },
          { type: "syntax", turkish: "İlkbaharda çok yağmur yağar.", spanish: "En primavera llueve mucho", words: ["En", "primavera", "llueve", "mucho", "nieva", "hace"] },
          { type: "syntax", turkish: "Pazar günleri evde dinlenirim.", spanish: "Los domingos descanso en casa", words: ["Los", "domingos", "descanso", "en", "casa", "El", "descansamos"] },
          { type: "syntax", turkish: "O (kadın) çok konuşur.", spanish: "Ella habla mucho", words: ["Ella", "habla", "mucho", "hablas", "muy"] },
          { type: "syntax", turkish: "Saat ona çeyrek var (9:45).", spanish: "Son las diez menos cuarto", words: ["Son", "las", "diez", "menos", "cuarto", "y", "media"] },
          { type: "syntax", turkish: "Biz soğuk su içeriz.", spanish: "Nosotros bebemos agua fría", words: ["Nosotros", "bebemos", "agua", "fría", "bebo", "beben"] },
          { type: "syntax", turkish: "Ben bir bankada çalışırım.", spanish: "Yo trabajo en un banco", words: ["Yo", "trabajo", "en", "un", "banco", "trabaja", "el"] },
          { type: "syntax", turkish: "Oğlum kırmızı elma yer.", spanish: "Mi hijo come manzanas rojas", words: ["Mi", "hijo", "come", "manzanas", "rojas", "como", "rojos"] },
          { type: "syntax", turkish: "Ağustos ayında sahile gideriz.", spanish: "En agosto vamos a la costa", words: ["En", "agosto", "vamos", "a", "la", "costa", "van"] },
          { type: "syntax", turkish: "Cuma günü bir parti var.", spanish: "El viernes hay una fiesta", words: ["El", "viernes", "hay", "una", "fiesta", "Los", "está"] },
          { type: "syntax", turkish: "Sen İspanyolcayı çok iyi anlıyorsun.", spanish: "Tú comprendes español muy bien", words: ["Tú", "comprendes", "español", "muy", "bien", "comprendo", "bueno"] },
          { type: "syntax", turkish: "Öğretmen her sabah kapıyı açar.", spanish: "El profesor abre la puerta cada mañana", words: ["El", "profesor", "abre", "la", "puerta", "cada", "mañana", "abro"] }
        ]
      }
    }
  ]
};
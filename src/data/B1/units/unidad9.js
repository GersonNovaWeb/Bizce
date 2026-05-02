/**
 * UNIDAD 9: A PESAR DE TODO (ORACIONES CONCESIVAS) - NIVEL B1
 * Enfoque: Uso de AUNQUE con Indicativo (hechos) vs Subjuntivo (hipótesis/indiferencia).
 * Estructura: 12 Nodos Premium.
 */

export const unidad9 = {
  id: "b1_u9",
  title: "Unidad 9: A Pesar de Todo",
  description: "Aprende a expresar obstáculos y superación. Descubre cómo la palabra 'Aunque' cambia de significado si usas Indicativo o Subjuntivo.",
  nodes: [
    {
      id: "b1_u9_n1",
      type: "theory",
      title: "Teoría I: El Poder de 'AUNQUE'",
      content: {
        concept: "La palabra **AUNQUE** (Rağmen / ...-sa bile) sirve para expresar un obstáculo que no impide que hagamos una acción. \n\nLa magia del español B1 es que 'Aunque' cambia radicalmente de significado dependiendo del tiempo verbal que le pongas detrás:\n\n### 1. AUNQUE + INDICATIVO (Un hecho real y conocido)\nUsas el verbo normal cuando sabes 100% que el obstáculo es real en este momento.\n• *Aunque LLUEVE, voy a salir.* \n(Yağmur yağıyor, bunu biliyorum, buna rağmen çıkacağım).\n\n### 2. AUNQUE + SUBJUNTIVO (Hipótesis o Indiferencia)\nUsas Subjuntivo cuando no sabes si el obstáculo es real, o simplemente ¡NO TE IMPORTA!\n• *Aunque LLUEVA, voy a salir.* \n(Yağmur yağsa bile çıkacağım. Yağıp yağmaması umurumda değil, planım değişmeyecek).",
        examples: [
          { es: "Aunque es caro, lo compro. (Sé que es caro)", tr: "Pahalı olmasına rağmen onu alıyorum." },
          { es: "Aunque sea caro, lo compraré. (No he visto el precio, pero no me importa)", tr: "Pahalı olsa bile onu alacağım." },
          { es: "Aunque estoy cansado, sigo trabajando. (Es un hecho real)", tr: "Yorgun olmama rağmen çalışmaya devam ediyorum." }
        ]
      }
    },
    {
      id: "b1_u9_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Aunque)",
      exercises: [
        { type: "syntax", turkish: "Pahalı olmasına rağmen onu satın alıyorum (Gerçek).", spanish: "Aunque es caro lo compro", words: ["Aunque", "es", "caro", "lo", "compro", "sea"] },
        { type: "syntax", turkish: "Pahalı olsa bile onu satın alacağım (Hipotez).", spanish: "Aunque sea caro lo compraré", words: ["Aunque", "sea", "caro", "lo", "compraré", "es"] },
        { type: "syntax", turkish: "Yağmur yağmasına rağmen çıkıyoruz (Gerçek).", spanish: "Aunque llueve nosotros salimos", words: ["Aunque", "llueve", "nosotros", "salimos", "llueva"] },
        { type: "syntax", turkish: "Yağmur yağsa bile çıkacağız (Hipotez).", spanish: "Aunque llueva nosotros saldremos", words: ["Aunque", "llueva", "nosotros", "saldremos", "llueve"] },
        { type: "syntax", turkish: "Zamanım olmamasına rağmen sana yardım ediyorum.", spanish: "Aunque no tengo tiempo te ayudo", words: ["Aunque", "no", "tengo", "tiempo", "te", "ayudo", "tenga"] },
        { type: "syntax", turkish: "Zamanım olmasa bile sana yardım edeceğim.", spanish: "Aunque no tenga tiempo te ayudaré", words: ["Aunque", "no", "tenga", "tiempo", "te", "ayudaré", "tengo"] },
        { type: "syntax", turkish: "Zor olmasına rağmen İspanyolca öğreniyorum.", spanish: "Aunque es difícil aprendo español", words: ["Aunque", "es", "difícil", "aprendo", "español", "sea"] },
        { type: "syntax", turkish: "Geç olmasına rağmen film izliyor (Gerçek).", spanish: "Aunque es tarde ella ve la película", words: ["Aunque", "es", "tarde", "ella", "ve", "la", "película"] },
        { type: "syntax", turkish: "Yorgun olmama rağmen çalışmaya devam ediyorum.", spanish: "Aunque estoy cansado sigo trabajando", words: ["Aunque", "estoy", "cansado", "sigo", "trabajando", "esté"] },
        { type: "syntax", turkish: "Beni dinlemese bile ona söyleyeceğim.", spanish: "Aunque no me escuche se lo diré", words: ["Aunque", "no", "me", "escuche", "se", "lo", "diré", "escucha"] }
      ]
    },
    {
      id: "b1_u9_n3",
      type: "theory",
      title: "Teoría II: A pesar de que y Por más que",
      content: {
        concept: "Para no repetir siempre la palabra 'Aunque', los hispanohablantes usan otros conectores que significan exactamente lo mismo y siguen la misma regla matemática (Indicativo = Hecho / Subjuntivo = No me importa).\n\n### 1. A PESAR DE QUE (...-e rağmen)\nEs un poco más formal que 'Aunque'.\n• *A pesar de que llueve* (Yağmur yağmasına rağmen).\n• *A pesar de que llueva* (Yağmur yağsa bile).\n\n### 2. POR MÁS QUE (Ne kadar ...-sa da)\nSe usa para enfatizar frustración. Por mucho esfuerzo que hagas, el resultado no cambia.\n• *Por más que estudio, no apruebo el examen.* (Ne kadar çalışsam da, sınavı geçemiyorum - Es un hecho frustrante).\n• *Por más que estudie, no aprobará.* (Ne kadar çalışsa da geçemeyecek - Es mi predicción sobre el futuro).",
        examples: [
          { es: "A pesar de que no tengo dinero, soy feliz.", tr: "Param olmamasına rağmen mutluyum." },
          { es: "Por más que lo intento, no puedo abrir la puerta.", tr: "Ne kadar denesem de kapıyı açamıyorum." },
          { es: "Iremos a la playa a pesar de que haga frío.", tr: "Soğuk olsa bile sahile gideceğiz." }
        ]
      }
    },
    {
      id: "b1_u9_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Obstáculos)",
      exercises: [
        { type: "speaking", spanish: "Aunque llueva voy a ir", turkish: "Yağmur yağsa bile gideceğim." },
        { type: "speaking", spanish: "Por más que estudio no entiendo", turkish: "Ne kadar çalışsam da anlamıyorum." },
        { type: "speaking", spanish: "A pesar de que es caro lo compro", turkish: "Pahalı olmasına rağmen onu alıyorum." },
        { type: "speaking", spanish: "Aunque no tenga tiempo te ayudaré", turkish: "Vaktim olmasa bile sana yardım edeceğim." },
        { type: "speaking", spanish: "Por más que llores no te daré dinero", turkish: "Ne kadar ağlasan da sana para vermeyeceğim." },
        { type: "speaking", spanish: "Aunque estoy cansado sigo caminando", turkish: "Yorgun olmama rağmen yürümeye devam ediyorum." },
        { type: "speaking", spanish: "A pesar de que trabaja mucho es pobre", turkish: "Çok çalışmasına rağmen fakirdir." },
        { type: "speaking", spanish: "Aunque sea difícil lo lograré", turkish: "Zor olsa bile onu başaracağım." },
        { type: "speaking", spanish: "Por más que corro siempre llego tarde", turkish: "Ne kadar koşsam da her zaman geç kalıyorum." },
        { type: "speaking", spanish: "Saldré a pesar de que no quieras", turkish: "Sen istemesen bile çıkacağım." }
      ]
    },
    {
      id: "b1_u9_n5",
      type: "theory",
      title: "El Reto Turco: La Traducción de 'Rağmen'",
      content: {
        concept: "En turco, la palabra 'Rağmen' es una posposición que exige el caso dativo (-e / -a). \n\n🇹🇷 **Ejemplo turco:**\n*Yağmur-a rağmen* (Literal: A la lluvia a pesar).\n\n🇪🇸 **La trampa española:**\nMuchos turcoparlantes intentan decir: *'A pesar a la lluvia'*. ¡Eso es incorrecto!\nEn español, si vas a usar un sustantivo (un nombre, no un verbo), debes usar la fórmula: **A PESAR DE + Sustantivo**.\n\n• ✅ Bien: A pesar **DE** la lluvia. (Yağmura rağmen).\n• ✅ Bien: A pesar **DEL** frío. (Soğuğa rağmen).\n\n💡 REGLA CLAVE:\n• Si usas un verbo ➔ *A pesar de QUE llueve*.\n• Si usas una cosa ➔ *A pesar DE la lluvia* (¡Sin el 'que'!).",
        examples: [
          { es: "Salimos a pesar de la tormenta.", tr: "Fırtınaya rağmen çıktık." },
          { es: "A pesar de los problemas, ganamos el partido.", tr: "Problemlere rağmen maçı kazandık." },
          { es: "Trabajo mucho a pesar del cansancio.", tr: "Yorgunluğa rağmen çok çalışıyorum." }
        ]
      }
    },
    {
      id: "b1_u9_n6",
      type: "reading",
      title: "Lectura y Audio: Una historia de éxito",
      content: {
        text: "Carlos siempre quiso ser piloto de aviones. A pesar de que su familia no tenía dinero, él decidió estudiar mucho para conseguir una beca. \n\nEn la academia, el profesor le dijo: 'Carlos, por más que estudies, las pruebas de visión son muy estrictas'. Carlos necesitaba gafas, pero él respondió: 'Aunque sea casi imposible, yo no voy a rendirme. Haré los ejercicios visuales todos los días'.\n\nLos años pasaron. A pesar de las dificultades y de que tuvo que trabajar de noche para pagar sus libros, Carlos lo logró. Hoy, aunque está cansado por los vuelos largos, siempre sonríe. Como él dice: 'A pesar del miedo al fracaso, si luchas por tus sueños, puedes tocar el cielo'.",
        translation: "Carlos her zaman uçak pilotu olmak istemişti. Ailesinin parası olmamasına rağmen, bir burs elde etmek için çok çalışmaya karar verdi.\n\nAkademide öğretmen ona şöyle dedi: 'Carlos, ne kadar çalışırsan çalış, görme testleri çok katıdır'. Carlos'un gözlüğe ihtiyacı vardı ama o şöyle cevap verdi: 'Neredeyse imkansız olsa bile, ben pes etmeyeceğim. Göz egzersizlerini her gün yapacağım'.\n\nYıllar geçti. Zorluklara ve kitaplarını ödemek için gece çalışmak zorunda kalmasına rağmen Carlos başardı. Bugün, uzun uçuşlardan dolayı yorgun olmasına rağmen her zaman gülümsüyor. Onun da dediği gibi: 'Başarısızlık korkusuna rağmen, hayallerin için savaşırsan gökyüzüne dokunabilirsin'."
      }
    },
    {
      id: "b1_u9_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Obstáculos)",
      exercises: [
        { type: "syntax", turkish: "Soğuğa rağmen denizde yüzdük.", spanish: "A pesar del frío nadamos en el mar", words: ["A", "pesar", "del", "frío", "nadamos", "en", "el", "mar", "que"] },
        { type: "syntax", turkish: "Yorgun olmasına rağmen futbol oynuyor (Gerçek).", spanish: "Aunque está cansado juega al fútbol", words: ["Aunque", "está", "cansado", "juega", "al", "fútbol", "esté"] },
        { type: "syntax", turkish: "Ne kadar uğraşsam da onu anlayamıyorum.", spanish: "Por más que lo intento no puedo entenderlo", words: ["Por", "más", "que", "lo", "intento", "no", "puedo", "entenderlo"] },
        { type: "syntax", turkish: "Çok pahalı olsa bile onu satın alacağım (Hipotez).", spanish: "Aunque sea muy caro lo compraré", words: ["Aunque", "sea", "muy", "caro", "lo", "compraré", "es"] },
        { type: "syntax", turkish: "Zorluklara (las dificultades) rağmen pes etmeyeceğim (rendirme).", spanish: "A pesar de las dificultades no voy a rendirme", words: ["A", "pesar", "de", "las", "dificultades", "no", "voy", "a", "rendirme"] },
        { type: "speaking", spanish: "A pesar del frío fuimos a caminar", turkish: "Soğuğa rağmen yürüyüşe gittik." },
        { type: "speaking", spanish: "Aunque no quieras tienes que ir", turkish: "İstemesen bile gitmek zorundasın." },
        { type: "speaking", spanish: "Por más que le explico no me escucha", turkish: "Ona ne kadar anlatsam da beni dinlemiyor." },
        { type: "speaking", spanish: "Aunque estoy enfermo iré a trabajar", turkish: "Hasta olmama rağmen işe gideceğim." },
        { type: "speaking", spanish: "Logró el éxito a pesar de los problemas", turkish: "Problemlere rağmen başarıyı elde etti." }
      ]
    },
    {
      id: "b1_u9_n8",
      type: "theory",
      title: "Laboratorio de Slang: Rendirse o Luchar",
      content: {
        concept: "En esta unidad hablamos de obstáculos. Para sonar como un verdadero hispanohablante, necesitas conocer estas expresiones (idioms) sobre el esfuerzo y el fracaso.\n\n💪 **Para luchar y esforzarse:**\n• **Contra viento y marea** (Rüzgara ve gelgite karşı / Her şeye rağmen): Luchar superando todos los obstáculos. *'Se casaron contra viento y marea'.*\n• **Costar sangre, sudor y lágrimas** (Kan, ter ve gözyaşına mal olmak): Ser extremadamente difícil.\n\n🏳️ **Para rendirse o fracasar:**\n• **Tirar la toalla** (Havlu atmak / Pes etmek): Rendirse. *'Por más que era difícil, nunca tiré la toalla'.*\n• **Ser una batalla perdida** (Kaybedilmiş bir savaş olmak): Algo imposible de solucionar.",
        examples: [
          { es: "Terminar esta carrera me costó sangre, sudor y lágrimas.", tr: "Bu bölümü bitirmek bana kan, ter ve gözyaşına mal oldu." },
          { es: "A pesar de las críticas, no voy a tirar la toalla.", tr: "Eleştirilere rağmen havlu atmayacağım (pes etmeyeceğim)." },
          { es: "Conseguimos el proyecto contra viento y marea.", tr: "Her şeye rağmen projeyi aldık." }
        ]
      }
    },
    {
      id: "b1_u9_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Obstáculo Mental",
      content: {
        concept: "Vamos a deconstruir una oración que muestra indiferencia ante un obstáculo futuro usando 'Por más que' y el Subjuntivo.",
        examples: [{ es: "Por más que me ofrezcan más dinero, no cambiaré de opinión.", tr: "Bana daha fazla para teklif etseler bile, fikrimi değiştirmeyeceğim." }],
        analysis: [
          { word: "Por más que", type: "connector", literal: "Ne kadar ...-sa da", explanation: "Conector concesivo de insistencia o resistencia.", examples: [] },
          { word: "me", type: "pronoun", literal: "bana", explanation: "Pronombre de objeto indirecto.", examples: [] },
          { word: "ofrezcan", type: "verb", literal: "teklif etseler", explanation: "Verbo OFRECER en Subjuntivo. Al usar subjuntivo, indica que no importa si la oferta ocurre o no, la decisión ya está tomada.", examples: [] },
          { word: "más dinero", type: "noun", literal: "daha fazla para", explanation: "Objeto directo del verbo ofrecer.", examples: [] },
          { word: "no cambiaré", type: "verb", literal: "değiştirmeyeceğim", explanation: "Verbo CAMBIAR en Futuro de Indicativo. La acción firme.", examples: [] },
          { word: "de opinión", type: "noun", literal: "fikir", explanation: "Modismo 'cambiar de opinión' (fikrini değiştirmek).", examples: [] }
        ]
      }
    },
    {
      id: "b1_u9_n10",
      type: "theory",
      title: "Caja de Herramientas: Metas y Dificultades",
      content: {
        concept: "Aumenta tu vocabulario para hablar de superación personal.\n\n### Vocabulario Clave:\n• **Rendirse** (Pes etmek) ➔ *Nunca me rindo.*\n• **La dificultad / El obstáculo** (Zorluk / Engel).\n• **Lograr / Conseguir** (Başarmak / Elde etmek) ➔ *Logré mi objetivo.*\n• **El esfuerzo** (Çaba) ➔ *Hice un gran esfuerzo.*\n• **El fracaso** (Başarısızlık) vs. **El éxito** (Başarı).\n• **Intentar** (Denemek) ➔ *Lo intentaré otra vez.*\n• **Superar** (Aşmak / Üstesinden gelmek).",
        examples: [
          { es: "Tienes que superar el miedo al fracaso.", tr: "Başarısızlık korkusunu aşmalısın." },
          { es: "Con esfuerzo, lograrás el éxito.", tr: "Çabayla başarıyı elde edeceksin." },
          { es: "Lo intenté muchas veces y no me rendí.", tr: "Onu birçok kez denedim ve pes etmedim." }
        ]
      }
    },
    {
      id: "b1_u9_n11",
      type: "theory",
      title: "Taller de Producción: Una historia de éxito",
      content: {
        concept: "Usa las concesivas para contar una historia de resistencia.\n\n**Instrucciones:**\nEscribe un relato breve (mínimo 6-8 líneas) sobre un momento difícil en el que lograste algo importante (aprobar un examen, conseguir un trabajo, aprender un idioma).\n1. Usa al menos una vez 'Aunque + Indicativo' y otra vez 'Aunque + Subjuntivo'.\n2. Usa la estructura 'A pesar de + sustantivo'.\n3. Incluye una expresión de slang ('tirar la toalla' o 'contra viento y marea').\n\n**Inspiración:** 'A pesar de las dificultades económicas, decidí estudiar en la universidad. Aunque no tenía mucho tiempo, estudiaba por las noches. Mis amigos decían que era imposible, pero por más que...'",
        examples: []
      }
    },
    {
      id: "b1_u9_n12",
      type: "exam",
      title: "Examen de Unidad: A Pesar de Todo",
      content: {
        concept: "Demuestra que puedes diferenciar perfectamente entre hechos (Indicativo) e hipótesis (Subjuntivo) al expresar obstáculos.",
        exercises: [
          // 15 Opción Múltiple
          { type: "multiple_choice", question: "Elige la correcta (Es un hecho real que llueve): 'Aunque ______ (llover), saldré a la calle'.", options: ["llueve", "llueva"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta (Es una hipótesis, no sé si lloverá): 'Aunque ______ (llover), saldré a la calle'.", options: ["llueve", "llueva"], correct: 1 },
          { type: "multiple_choice", question: "Si digo 'Aunque ES tarde, voy a ver la película', estoy indicando que:", options: ["Sé que es tarde (Es un hecho).", "No sé si es tarde (Hipótesis)."], correct: 0 },
          { type: "multiple_choice", question: "Si usamos un SUSTANTIVO después del obstáculo, debemos usar:", options: ["Aunque + Sustantivo", "A pesar de + Sustantivo", "Por más que + Sustantivo"], correct: 1 },
          { type: "multiple_choice", question: "A pesar _____ cansancio, seguí corriendo.", options: ["de que el", "del", "de la"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Por más que estudio...'?", options: ["Çok çalıştığım için...", "Ne kadar çalışsam da..."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Tirar la toalla'?", options: ["Duş almak", "Pes etmek (Rendirse)", "Kavga etmek"], correct: 1 },
          { type: "multiple_choice", question: "Ellos se casaron 'contra viento y marea'. Esto significa:", options: ["Se casaron en el mar.", "Se casaron superando todos los obstáculos."], correct: 1 },
          { type: "multiple_choice", question: "Aunque no ______ (tener - yo) tiempo mañana, te ayudaré (Aún no estoy seguro de mi horario).", options: ["tengo", "tenga"], correct: 1 },
          { type: "multiple_choice", question: "______ más que llores, no te compraré ese juguete.", options: ["Por", "Para", "A pesar"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué es 'El fracaso'?", options: ["Başarı", "Başarısızlık", "Çaba"], correct: 1 },
          { type: "multiple_choice", question: "Yo nunca me ______ (rendirse).", options: ["rendo", "riendo", "rindo"], correct: 2 },
          { type: "multiple_choice", question: "Aunque la casa ______ (ser) fea, la he comprado (Ya la vi, sé que es fea).", options: ["es", "sea"], correct: 0 },
          { type: "multiple_choice", question: "Aunque la casa ______ (ser) fea, la compraré (Aún no la he visto).", options: ["es", "sea"], correct: 1 },
          { type: "multiple_choice", question: "A pesar de _____ los problemas, fuimos felices.", options: ["que", "- (nada)"], correct: 1 },

          // 15 Sintaxis
          { type: "syntax", turkish: "Çok pahalı olmasına rağmen onu alıyorum (Gerçek).", spanish: "Aunque es muy caro lo compro", words: ["Aunque", "es", "muy", "caro", "lo", "compro", "sea"] },
          { type: "syntax", turkish: "Çok pahalı olsa bile onu alacağım (Hipotez).", spanish: "Aunque sea muy caro lo compraré", words: ["Aunque", "sea", "muy", "caro", "lo", "compraré", "es"] },
          { type: "syntax", turkish: "Trafiğe rağmen zamanında (a tiempo) vardık.", spanish: "A pesar del tráfico llegamos a tiempo", words: ["A", "pesar", "del", "tráfico", "llegamos", "a", "tiempo", "que"] },
          { type: "syntax", turkish: "Ne kadar uğraşsam da yapamıyorum.", spanish: "Por más que lo intento no puedo", words: ["Por", "más", "que", "lo", "intento", "no", "puedo", "pueda"] },
          { type: "syntax", turkish: "Hasta olmama rağmen çalışıyorum (Gerçek).", spanish: "Aunque estoy enfermo trabajo", words: ["Aunque", "estoy", "enfermo", "trabajo", "esté"] },
          { type: "syntax", turkish: "Zorluklara (las dificultades) rağmen pes etmeyeceğim.", spanish: "A pesar de las dificultades no voy a rendirme", words: ["A", "pesar", "de", "las", "dificultades", "no", "voy", "a", "rendirme"] },
          { type: "syntax", turkish: "Zor olsa bile başaracağım.", spanish: "Aunque sea difícil lo lograré", words: ["Aunque", "sea", "difícil", "lo", "lograré", "es"] },
          { type: "syntax", turkish: "Param olmamasına rağmen mutluyum (Gerçek).", spanish: "Aunque no tengo dinero soy feliz", words: ["Aunque", "no", "tengo", "dinero", "soy", "feliz", "tenga"] },
          { type: "syntax", turkish: "Ne kadar konuşsan da seni dinlemeyeceğim.", spanish: "Por más que hables no te escucharé", words: ["Por", "más", "que", "hables", "no", "te", "escucharé", "hablas"] },
          { type: "syntax", turkish: "Havlu atmayacağım (pes etmeyeceğim).", spanish: "No voy a tirar la toalla", words: ["No", "voy", "a", "tirar", "la", "toalla"] },
          { type: "syntax", turkish: "Her şeye rağmen (Rüzgara ve gelgite karşı) başardık.", spanish: "Lo logramos contra viento y marea", words: ["Lo", "logramos", "contra", "viento", "y", "marea"] },
          { type: "syntax", turkish: "İstemesem bile gideceğim (Hipotez).", spanish: "Aunque no quiera voy a ir", words: ["Aunque", "no", "quiera", "voy", "a", "ir", "quiero"] },
          { type: "syntax", turkish: "Yağmur yağmasına rağmen çıkıyoruz (Gerçek).", spanish: "Aunque llueve salimos", words: ["Aunque", "llueve", "salimos", "llueva"] },
          { type: "syntax", turkish: "Yağmur yağsa bile çıkacağız (Hipotez).", spanish: "Aunque llueva saldremos", words: ["Aunque", "llueva", "saldremos", "llueve"] },
          { type: "syntax", turkish: "Probleme rağmen gülümsüyor.", spanish: "A pesar del problema ella sonríe", words: ["A", "pesar", "del", "problema", "ella", "sonríe", "que"] }
        ]
      }
    }
  ]
};
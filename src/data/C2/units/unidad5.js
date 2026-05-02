/**
 * UNIDAD 5 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Ironía de Segundo Nivel, Humor Negro y Sátira Política.
 * Tema: Pragmática, "lanzar pullas", sarcasmo y estructuras cínicas.
 */

export const unidad5 = {
  id: "c2_u5",
  title: "Unidad 5: El Arte del Sarcasmo",
  description: "Entiende el idioma invisible. Domina la ironía de segundo nivel, la sátira política y las estructuras cínicas para 'lanzar pullas' como un verdadero nativo.",
  nodes: [
    {
      id: "c2_u5_n1",
      type: "theory",
      title: "Teoría I: La Arquitectura del Cinismo",
      content: {
        concept: "En el nivel C2, el español se vuelve un arma intelectual. La **sátira** y el **sarcasmo** consisten en afirmar algo positivo con la intención evidente de criticarlo. Para que el sarcasmo funcione en español escrito u oral sin que parezca un error, utilizamos estructuras de 'falsa concesión'.\n\n### 1. MENOS MAL QUE... (İyi ki... / Çok şükür ki...)\nSe usa irónicamente para agradecer algo que en realidad es un desastre.\n• *Menos mal que me ibas a ayudar; si no llegas a venir, termino antes.*\n(Sözde bana yardım edecektin, iyi ki geldin; gelmeseydin daha erken bitirirdim).\n\n### 2. NO, SI TE PARECE... (Yok canım, istersen...)\nEs la estructura reina del sarcasmo en España. Se usa cuando alguien dice algo muy obvio o hace una propuesta absurda.\n• *— ¿Vas a fregar los platos?*\n• *— No, si te parece los dejo aquí hasta que cobren vida.*\n(Yok canım, istersen canlanana kadar burada bırakayım).\n\n### 3. FALTARÍA MÁS (Başka ne olacaktı! / O eksik kalsın)\nTiene dos usos: uno muy educado (¡Por supuesto!) y otro puramente irónico para indicar que una situación es el colmo de la desvergüenza.\n• *Me roba el dinero y encima quiere que le dé las gracias. ¡Faltaría más!*",
        examples: [
          { es: "Menos mal que el ayuntamiento arregló la calle; ahora hay más baches que antes.", tr: "İyi ki belediye sokağı tamir etti; şimdi eskisinden daha çok çukur var." },
          { es: "No, si te parece le pido perdón yo a él por haberme insultado.", tr: "Yok canım, istersen bana hakaret ettiği için ben ondan özür dileyeyim." },
          { es: "Faltaría más que ahora me echaras la culpa a mí.", tr: "Şimdi suçu bana atman eksikti (tam olurdu)!" }
        ]
      }
    },
    {
      id: "c2_u5_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Estructuras Sarcásticas)",
      exercises: [
        { type: "syntax", turkish: "Yok canım, istersen senin için her şeyi ben yapayım.", spanish: "No si te parece lo hago yo todo por ti", words: ["No", "si", "te", "parece", "lo", "hago", "yo", "todo", "por", "ti"] },
        { type: "syntax", turkish: "İyi ki bana yardım etmeyecektin (ironi).", spanish: "Menos mal que no me ibas a ayudar", words: ["Menos", "mal", "que", "no", "me", "ibas", "a", "ayudar", "fui"] },
        { type: "syntax", turkish: "Şimdi bana bağırman eksikti! (Faltaría más).", spanish: "Faltaría más que ahora me gritaras", words: ["Faltaría", "más", "que", "ahora", "me", "gritaras", "gritas"] },
        { type: "syntax", turkish: "İyi ki (Menos mal) plan mükemmeldi; tam bir felaket.", spanish: "Menos mal que el plan era perfecto un desastre total", words: ["Menos", "mal", "que", "el", "plan", "era", "perfecto", "un", "desastre", "total"] },
        { type: "syntax", turkish: "Yok canım, istersen (No, si te parece) beni kovsun (despedir).", spanish: "No si te parece que me despida", words: ["No", "si", "te", "parece", "que", "me", "despida", "despide"] },
        { type: "syntax", turkish: "Tavsiyen için çok teşekkürler, gerçekten hiç yardımcı olmadı.", spanish: "Muchas gracias por tu consejo de verdad no ayudó nada", words: ["Muchas", "gracias", "por", "tu", "consejo", "de", "verdad", "no", "ayudó", "nada"] },
        { type: "syntax", turkish: "İyi ki geç kalmadın, sadece iki saat (dos horas) oldu.", spanish: "Menos mal que no llegaste tarde solo fueron dos horas", words: ["Menos", "mal", "que", "no", "llegaste", "tarde", "solo", "fueron", "dos", "horas"] },
        { type: "syntax", turkish: "Başka ne olacaktı! (Faltaría más) Üstelik (encima) parayı o istiyor.", spanish: "Faltaría más y encima pide el dinero", words: ["Faltaría", "más", "y", "encima", "pide", "el", "dinero", "falta"] },
        { type: "syntax", turkish: "Bunu senin için bedavaya (gratis) yapmam eksikti.", spanish: "Faltaría más que lo hiciera gratis para ti", words: ["Faltaría", "más", "que", "lo", "hiciera", "gratis", "para", "ti", "hago"] },
        { type: "syntax", turkish: "Yok canım, istersen gelip sana kahvaltı hazırlayayım.", spanish: "No si te parece voy y te preparo el desayuno", words: ["No", "si", "te", "parece", "voy", "y", "te", "preparo", "el", "desayuno"] }
      ]
    },
    {
      id: "c2_u5_n3",
      type: "theory",
      title: "Teoría II: Lanzar Pullas (El Arte de la Indirecta)",
      content: {
        concept: "En la cultura hispana, la confrontación directa a veces se evita mediante la **pulla** (Laf sokmak / Taş atmak) o la **indirecta**. \n\n### 1. El uso de 'SE VE QUE...' (Belli ki...)\nSirve para constatar un hecho evidente de forma irónica, dejando mal a la otra persona sin atacarla directamente.\n• *Se ve que tu alarma no ha sonado hoy tampoco, ¿verdad?* (Belli ki alarmın bugün de çalmamış, değil mi?).\n\n### 2. A BUENAS HORAS (MANGAS VERDES)\nSe usa cuando alguien aporta una solución o llega cuando el problema ya ha pasado.\n• *¡A buenas horas vienes a ayudar! Ya he terminado la mudanza.* (Ne iyi saatte yardıma geliyorsun! Taşınmayı çoktan bitirdim).\n\n### 3. BRILLAR POR SU AUSENCIA (Yokluğuyla parlamak)\nEs una frase hecha de altísimo nivel C2. Se usa cuando algo o alguien que DEBERÍA estar presente, no lo está. Se subraya la falta de responsabilidad.\n• *En el discurso del presidente, la autocrítica brilló por su ausencia.* (Başkanın konuşmasında özeleştiri yokluğuyla parladı / hiç yoktu).",
        examples: [
          { es: "Se ve que estás muy ocupado mirando el móvil.", tr: "Belli ki telefona bakmakla çok meşgulsün." },
          { es: "El sentido común brilló por su ausencia en esa reunión.", tr: "O toplantıda sağduyu yokluğuyla parladı (hiç yoktu)." }
        ]
      }
    },
    {
      id: "c2_u5_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Tono Mordaz)",
      exercises: [
        { type: "speaking", spanish: "Se ve que hoy tampoco tenías ganas de trabajar", turkish: "Belli ki bugün de çalışmaya hiç niyetin yoktu." },
        { type: "speaking", spanish: "No si te parece le compramos un coche también", turkish: "Yok canım istersen ona bir de araba alalım." },
        { type: "speaking", spanish: "Su inteligencia brilló por su ausencia", turkish: "Zekası yokluğuyla parladı (hiç zekice değildi)." },
        { type: "speaking", spanish: "A buenas horas decides pedirme perdón", turkish: "Özür dilemeye ne iyi bir saatte (çok geç) karar verdin." },
        { type: "speaking", spanish: "Menos mal que el sistema era infalible", turkish: "Sözde (İyi ki) sistem kusursuzdu." },
        { type: "speaking", spanish: "Faltaría más que yo tuviera que limpiar tu desastre", turkish: "Senin dağınıklığını benim temizlemem eksikti!" },
        { type: "speaking", spanish: "Qué oportuno siempre llegas a la hora de comer", turkish: "Ne harika bir zamanlama, hep yemek saatinde geliyorsun." },
        { type: "speaking", spanish: "Se ve que las reglas no aplican para ti", turkish: "Belli ki kurallar senin için geçerli değil." },
        { type: "speaking", spanish: "A buenas horas mangas verdes el tren ya salió", turkish: "İş işten geçti (Günaydın), tren çoktan kalktı." },
        { type: "speaking", spanish: "Tu capacidad de liderazgo brilló por su ausencia", turkish: "Liderlik yeteneğin hiç ortada yoktu." }
      ]
    },
    {
      id: "c2_u5_n5",
      type: "theory",
      title: "El Reto Turco: 'Sanki' vs 'Ni que'",
      content: {
        concept: "En el idioma turco, la ironía de comparar a alguien con algo grande se hace con la palabra **SANKİ** (Sanki patron! / Sanki dünya umrunda!).\n\nEn español, traducir 'Como si...' en estos contextos suena a B2. La forma 100% nativa y C2 de hacerlo es usando la estructura exclamativa **¡NI QUE + SUBJUNTIVO IMPERFECTO!**\n\n### El Choque de Lógicas:\n• 🇹🇷 *Sanki dünyanın sonu!*\n• 🇪🇸 B2: *Actúas como si fuera el fin del mundo.* (Correcto, pero largo).\n• 🇪🇸 C2: **¡Ni que FUERA el fin del mundo!** (Punzante y directo).\n\n• 🇹🇷 *Sanki seni öldürdüm!*\n• 🇪🇸 C2: **¡Ni que te HUBIERA matado!**\n\nEl 'Ni que' destruye la importancia que la otra persona le está dando a la situación. Es el equivalente perfecto a ese 'Sanki...' turco cargado de actitud.",
        examples: [
          { es: "No te quejes tanto, ¡ni que te hubiera pedido un millón de euros!", tr: "O kadar şikayet etme, sanki senden bir milyon euro istedim!" },
          { es: "Relájate, ¡ni que fueras el dueño de la empresa!", tr: "Sakin ol, sanki şirketin sahibisin!" }
        ]
      }
    },
    {
      id: "c2_u5_n6",
      type: "reading",
      title: "Lectura Crítica: La Brillante Reforma",
      content: {
        text: "Nuestros gobernantes han vuelto a sorprendernos con su innegable genialidad. El Ministerio de Transporte ha decidido que, para solucionar el problema del tráfico en el centro, la mejor medida es eliminar las aceras. ¡Una idea brillante! Se ve que han reflexionado profundamente sobre el tema. Menos mal que tenemos a mentes tan lúcidas dirigiendo la ciudad; de lo contrario, correríamos el riesgo de tener espacios peatonales seguros.\n\nEn la rueda de prensa, el alcalde defendió la medida con orgullo. La autocrítica, por supuesto, brilló por su ausencia. Cuando una periodista le preguntó sobre la seguridad de los niños, él respondió que caminar esquivando coches fomenta los reflejos desde temprana edad. Faltaría más que el Estado tuviera que garantizar la seguridad física de los ciudadanos. Al final, nos aconsejó a todos usar bicicletas. A buenas horas nos recomienda eso, justo un mes después de prohibir los carriles bici. En fin, ¡ni que fuéramos un país europeo civilizado!",
        translation: "Yöneticilerimiz inkar edilemez dehalarıyla bizi bir kez daha şaşırttılar. Ulaştırma Bakanlığı, merkezdeki trafik sorununu çözmek için en iyi önlemin kaldırımları kaldırmak olduğuna karar verdi. Ne parlak bir fikir! Belli ki (Se ve que) konu üzerinde derin derin düşünmüşler. İyi ki (Menos mal que) şehri yöneten bu kadar parlak zihinlere sahibiz; aksi takdirde güvenli yaya alanlarına sahip olma riskini alırdık (ironi).\n\nBasın toplantısında belediye başkanı önlemi gururla savundu. Özeleştiri, elbette, yokluğuyla parladı (hiç yoktu). Bir gazeteci ona çocukların güvenliğini sorduğunda, arabalardan kaçarak yürümenin erken yaşlardan itibaren refleksleri geliştirdiğini söyledi. Zaten devletin vatandaşların fiziksel güvenliğini garanti etmesi eksikti (Faltaría más). Sonunda hepimize bisiklet kullanmayı tavsiye etti. Bisiklet yollarını yasakladıktan tam bir ay sonra bunu önermesi ne iyi bir zamanlama (A buenas horas). Ne de olsa, sanki (¡ni que fuéramos!) uygar bir Avrupa ülkesiyiz!"
      }
    },
    {
      id: "c2_u5_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Comprensión Inferencial",
      exercises: [
        { type: "multiple_choice", question: "¿Cuál es el verdadero sentimiento del autor en el texto?", options: ["Siente una profunda admiración por el Ministerio de Transporte.", "Utiliza el sarcasmo para criticar duramente una medida absurda.", "Cree sinceramente que los coches ayudan a los reflejos de los niños."], correct: 1 },
        { type: "multiple_choice", question: "¿Qué implica la frase 'la autocrítica brilló por su ausencia'?", options: ["Que el alcalde brillaba por su inteligencia.", "Que el alcalde admitió sus errores públicamente.", "Que no hubo absolutamente ninguna autocrítica."], correct: 2 },
        { type: "multiple_choice", question: "Cuando dice 'Faltaría más que el Estado tuviera que garantizar...', el autor quiere decir:", options: ["Que, por supuesto, es la obligación básica del Estado, pero están actuando como si no lo fuera.", "Que al Estado le falta dinero para hacerlo.", "Que el Estado necesita más garantías."], correct: 0 },
        { type: "syntax", turkish: "Sanki dünyanın sonu! (Ni que...)", spanish: "Ni que fuera el fin del mundo", words: ["Ni", "que", "fuera", "el", "fin", "del", "mundo", "es"] },
        { type: "syntax", turkish: "Sanki (Ni que) dahi (un genio) olsaydın!", spanish: "Ni que fueras un genio", words: ["Ni", "que", "fueras", "un", "genio", "eres"] }
      ]
    },
    {
      id: "c2_u5_n8",
      type: "theory",
      title: "Teoría III: Humor Negro y el Cinismo Español",
      content: {
        concept: "El nivel C2 requiere entender el carácter de la cultura que habla el idioma. En España y partes de Latinoamérica, el **Humor Negro** (reírse de la tragedia, la muerte o la desgracia) no se considera necesariamente una falta de empatía, sino un mecanismo de supervivencia psicológica. \n\nSe llama **'Reír por no llorar'**.\n\n### Léxico del Cinismo:\n• **Ser un cínico / El cinismo:** (Kinizm / Utanmazca gerçeği yüzüne vurmak). Alguien que miente descaradamente o que muestra una actitud descreída ante la moralidad.\n• **La mordacidad / Ser mordaz:** (İğneleyici / Acımasızca eleştirel). Alguien que hace comentarios inteligentes pero que 'muerden' (incisivos).\n• **La sorna / Hablar con sorna:** (Alaycı bir ifadeyle). Un tono de burla sutil y prolongada.",
        examples: [
          { es: "El político, con un cinismo absoluto, dijo que él no sabía nada del dinero robado.", tr: "Politikacı, mutlak bir utanmazlıkla (kinizmle), çalınan parayla ilgili hiçbir şey bilmediğini söyledi." },
          { es: "Su columna de opinión es tan mordaz que no deja títere con cabeza.", tr: "Köşe yazısı o kadar iğneleyici ki (mordaz), kimsenin gözünün yaşına bakmıyor (sağlam kukla bırakmıyor)." }
        ]
      }
    },
    {
      id: "c2_u5_n9",
      type: "theory",
      title: "Sintaxis Visual: La Pulla Perfecta",
      content: {
        concept: "Analizaremos cómo se construye un comentario sarcástico que utiliza una falsa concesión y un subjuntivo pasado para destruir el argumento del contrario.",
        examples: [{ es: "Me parece fascinante que critiques mi gestión financiera; ¡ni que tú hubieras salvado a la empresa de la bancarrota!", tr: "Benim finansal yönetimimi eleştirmen bana büyüleyici geliyor; sanki şirketi iflastan sen kurtarmışsın gibi!" }],
        analysis: [
          { word: "Me parece fascinante", type: "verb", literal: "Bana büyüleyici geliyor", explanation: "Falsa apreciación. Verbo de emoción que dispara el subjuntivo y establece el tono irónico.", examples: [] },
          { word: "que critiques", type: "verb", literal: "eleştirmen", explanation: "Presente de subjuntivo. La acción que nos parece el colmo del descaro.", examples: [] },
          { word: "mi gestión financiera;", type: "noun", literal: "benim finansal yönetimimi", explanation: "El objeto de la crítica.", examples: [] },
          { word: "¡ni que tú", type: "connector", literal: "sanki sen", explanation: "Estructura exclamativa C2 para deslegitimar la autoridad del que habla.", examples: [] },
          { word: "hubieras salvado", type: "verb", literal: "kurtarmışsın gibi (kurtarsaydın)", explanation: "Pluscuamperfecto de Subjuntivo exigido por el 'Ni que' para un evento del pasado.", examples: [] },
          { word: "a la empresa", type: "noun", literal: "şirketi", explanation: "Objeto directo con 'a' personal (institución personificada).", examples: [] },
          { word: "de la bancarrota!", type: "noun", literal: "iflastan", explanation: "El gran logro que la otra persona NO hizo.", examples: [] }
        ]
      }
    },
    {
      id: "c2_u5_n10",
      type: "theory",
      title: "Caja de Herramientas: Crítica y Sátira",
      content: {
        concept: "Para escribir una reseña irónica o debatir en C2, incorpora este arsenal:\n\n• **El descaro / Ser un descarado** (Yüzsüzlük / Yüzsüz olmak).\n• **La hipocresía / Hipócrita** (İkiyüzlülük / İkiyüzlü).\n• **Lanzar una pulla** (Laf sokmak / İğneleyici laf etmek).\n• **El disparate** (Saçmalık / Zırva).\n• **Ser el colmo** (Bardağı taşıran son damla olmak / Pes artık dedirtmek) ➔ *Esto ya es el colmo.*\n• **No tener vergüenza** (Utanması olmamak).\n• **Tirar la piedra y esconder la mano** (Taşı atıp elini saklamak / Fitneyi çıkarıp masum görünmek).\n• **Echar en cara** (Başına kakmak / Yüzüne vurmak).",
        examples: [
          { es: "Es de un cinismo absoluto que ahora me eche en cara aquel error.", tr: "O hatayı şimdi başıma kakması (yüzüme vurması) mutlak bir utanmazlıktır." },
          { es: "Esa ley es un verdadero disparate.", tr: "O yasa tam bir saçmalıktır (zırvadır)." },
          { es: "Siempre lanza pullas durante la cena familiar.", tr: "Aile yemeği sırasında hep laf sokar." }
        ]
      }
    },
    {
      id: "c2_u5_n11",
      type: "theory",
      title: "Taller de Producción: La Reseña Mordaz",
      content: {
        concept: "Es el momento de afilar tu pluma. Vas a escribir utilizando la sátira.\n\n**Instrucciones:**\nImagina que fuiste a un hotel de 5 estrellas que resultó ser un completo desastre (sábanas sucias, personal rudo, comida quemada). Escribe una reseña de Google (mínimo 10 líneas) pero **escríbela usando sarcasmo**.\n\n1. Empieza alabando falsamente el lugar (*Una experiencia fascinante...*).\n2. Usa la estructura 'Menos mal que...' para hablar de algo malo que pasó.\n3. Usa la estructura '¡Ni que fuera...!' o 'Faltaría más...'.\n4. Usa al menos dos palabras de la Caja de Herramientas (disparate, descaro, echar en cara, etc.).\n\n**Inspiración:** 'Nuestra estancia fue inolvidable. Menos mal que no había agua caliente, así pudimos disfrutar del hielo en enero. Al quejarnos, la recepcionista tuvo el descaro de echarnos en cara que el hotel era barato. ¡Ni que nos hubieran regalado la habitación! Es el colmo...'",
        examples: []
      }
    },
    {
      id: "c2_u5_n12",
      type: "exam",
      title: "Examen de Unidad: El Arte del Sarcasmo",
      content: {
        concept: "Demuestra que puedes descifrar las intenciones ocultas, dominar las estructuras de la queja cínica y aplicar el subjuntivo correctamente en el sarcasmo.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué estructura es el equivalente español directo de decir 'Sanki... mış gibi' para minimizar a alguien de forma sarcástica?", options: ["Como si nada...", "¡Ni que + Subjuntivo!", "Tal vez + Subjuntivo"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien dice 'A buenas horas llegas con la solución', ¿qué te está diciendo?", options: ["Que es una hora excelente para resolverlo.", "Que llegas demasiado tarde y ya no sirve de nada.", "Que gracias por ser puntual."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa el modismo 'Brillar por su ausencia'?", options: ["Ser muy luminoso y visible.", "Faltar o no existir cuando era totalmente necesario que estuviera.", "Ser ciego."], correct: 1 },
          { type: "multiple_choice", question: "La estructura 'Faltaría más...' a menudo se usa irónicamente para:", options: ["Pedir más comida.", "Expresar que algo es el colmo de la desvergüenza (Şimdi bir de bu eksikti).", "Ofrecer ayuda a alguien."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Lanzar una pulla'?", options: ["Atar una flecha.", "Tirar la toalla y rendirse.", "Decir una indirecta o comentario mordaz para herir/laf sokmak."], correct: 2 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Başına kakmak / Yüzüne vurmak'?", options: ["Echar en cara", "Dar la cara", "Tener cara dura"], correct: 0 },
          { type: "multiple_choice", question: "Si digo 'Menos mal que trajiste el paraguas' mientras estamos empapados bajo la lluvia, estoy siendo:", options: ["Sincero", "Sarcástico", "Preocupado"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es el tiempo verbal obligatorio después de '¡Ni que...'?", options: ["Presente de Indicativo", "Pretérito Imperfecto (o Pluscuamperfecto) de Subjuntivo", "Condicional"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa la palabra 'Cinismo' (Ser un cínico)?", options: ["Ser una persona que miente con descaro y sin vergüenza.", "Ser muy sensible a las emociones de otros.", "Ser aficionado al cine."], correct: 0 },
          { type: "multiple_choice", question: "Completa la frase sarcástica: 'No, si te ______ lo hago yo todo'.", options: ["parece", "gusta", "quieres"], correct: 0 },
          { type: "syntax", turkish: "Yok canım, istersen (No, si te parece) parayı ben ödeyeyim (pagar).", spanish: "No si te parece pago yo el dinero", words: ["No", "si", "te", "parece", "pago", "yo", "el", "dinero", "pague"] },
          { type: "syntax", turkish: "Sanki başkansın (el presidente)! (Ni que...).", spanish: "Ni que fueras el presidente", words: ["Ni", "que", "fueras", "el", "presidente", "eres"] },
          { type: "syntax", turkish: "Empati (La empatía) yokluğuyla parladı.", spanish: "La empatía brilló por su ausencia", words: ["La", "empatía", "brilló", "por", "su", "ausencia", "ausente"] },
          { type: "syntax", turkish: "İyi ki (Menos mal que) beni uyardın (avisar - pasado), az kalsın unutuyordum.", spanish: "Menos mal que me avisaste casi lo olvido", words: ["Menos", "mal", "que", "me", "avisaste", "casi", "lo", "olvido", "avisaras"] },
          { type: "syntax", turkish: "Şimdi bana bunu başına kakman (echar en cara) eksikti (Faltaría más).", spanish: "Faltaría más que ahora me echaras esto en cara", words: ["Faltaría", "más", "que", "ahora", "me", "echaras", "esto", "en", "cara"] },
          { type: "syntax", turkish: "Sanki (Ni que) dünyayı (el mundo) kurtarmışsın (salvar - pasado)!", spanish: "Ni que hubieras salvado el mundo", words: ["Ni", "que", "hubieras", "salvado", "el", "mundo", "salvaste"] },
          { type: "syntax", turkish: "Belli ki (Se ve que) çok yorgunsun.", spanish: "Se ve que estás muy cansado", words: ["Se", "ve", "que", "estás", "muy", "cansado", "visto"] },
          { type: "syntax", turkish: "Taşı atıp (tirar) elini saklama.", spanish: "No tires la piedra y escondas la mano", words: ["No", "tires", "la", "piedra", "y", "escondas", "la", "mano"] },
          { type: "syntax", turkish: "Bu (Esto) tam bir saçmalık (zırva).", spanish: "Esto es un verdadero disparate", words: ["Esto", "es", "un", "verdadero", "disparate", "pulla"] },
          { type: "syntax", turkish: "İş işten geçtikten sonra (A buenas horas) bana yardım ediyorsun.", spanish: "A buenas horas me ayudas", words: ["A", "buenas", "horas", "me", "ayudas", "mangas"] }
        ]
      }
    }
  ]
};
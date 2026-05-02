/**
 * UNIDAD 5: VIAJE AL FUTURO (ORACIONES TEMPORALES) - NIVEL B1
 * Enfoque: Uso de CUANDO + Subjuntivo para el futuro vs. Indicativo para rutinas.
 * Estructura: 12 Nodos Premium.
 */

export const unidad5 = {
  id: "b1_u5",
  title: "Unidad 5: Viaje al Futuro",
  description: "Aprende a hablar de tus planes futuros y condiciones de tiempo usando 'Cuando' y el modo Subjuntivo.",
  nodes: [
    {
      id: "b1_u5_n1",
      type: "theory",
      title: "Teoría I: La Regla del 'Cuando'",
      content: {
        concept: "En español, la palabra **CUANDO** (Ne zaman ki / -dığında) es como un camaleón. Cambia el tiempo del verbo dependiendo de si hablamos de una rutina o de un plan futuro.\n\n### 1. CUANDO + INDICATIVO (Rutinas o Pasado)\nSi hablas de algo que haces siempre, o algo que ya pasó, usas el verbo normal.\n• *Cuando LLEGO a casa, como.* (Eve vardığımda, yemek yerim - Rutina).\n• *Cuando LLEGUÉ a casa, comí.* (Eve vardığımda, yemek yedim - Pasado).\n\n### 2. CUANDO + SUBJUNTIVO (El Futuro)\nSi hablas de algo que AÚN NO HA PASADO, la acción es irreal. Por lo tanto, el español te obliga a usar Subjuntivo. El verbo principal de la frase irá en futuro o imperativo.\n• *Cuando LLEGUES a casa, llámame.* (Eve vardığında, beni ara).\n• *Cuando TENGA dinero, viajaré.* (Param olduğunda, seyahat edeceğim).\n\n❌ ERROR FATAL: NUNCA puedes decir 'Cuando llegaré' o 'Cuando tendré'. La palabra 'Cuando' odia al futuro simple, lo reemplaza por el Subjuntivo.",
        examples: [
          { es: "Cuando termine de trabajar, iré al cine.", tr: "Çalışmayı bitirdiğimde sinemaya gideceğim." },
          { es: "Cuando seas mayor, entenderás esto.", tr: "Büyüdüğünde (büyük olduğunda), bunu anlayacaksın." },
          { es: "Normalmente, cuando llueve, me quedo en casa. (Rutina)", tr: "Normalde yağmur yağdığında evde kalırım." }
        ]
      }
    },
    {
      id: "b1_u5_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (El Tiempo)",
      exercises: [
        { type: "syntax", turkish: "Eve vardığında beni ara.", spanish: "Cuando llegues a casa llámame", words: ["Cuando", "llegues", "a", "casa", "llámame", "llegas"] },
        { type: "syntax", turkish: "Param olduğunda bir araba alacağım.", spanish: "Cuando tenga dinero compraré un coche", words: ["Cuando", "tenga", "dinero", "compraré", "un", "coche", "tengo"] },
        { type: "syntax", turkish: "Carlos geldiğinde yiyeceğiz (comeremos).", spanish: "Cuando venga Carlos comeremos", words: ["Cuando", "venga", "Carlos", "comeremos", "viene"] },
        { type: "syntax", turkish: "Bunu bitirdiğimizde (nosotros) çıkacağız.", spanish: "Cuando terminemos esto saldremos", words: ["Cuando", "terminemos", "esto", "saldremos", "terminamos"] },
        { type: "syntax", turkish: "Normalde (rutina) eve vardığımda uyurum.", spanish: "Normalmente cuando llego a casa duermo", words: ["Normalmente", "cuando", "llego", "a", "casa", "duermo", "llegue"] },
        { type: "syntax", turkish: "Büyüdüğünde (ser mayor) ne olmak istiyorsun?", spanish: "Qué quieres ser cuando seas mayor", words: ["Qué", "quieres", "ser", "cuando", "seas", "mayor", "eres"] },
        { type: "syntax", turkish: "Zamanım olduğunda onu (lo) yapacağım.", spanish: "Lo haré cuando tenga tiempo", words: ["Lo", "haré", "cuando", "tenga", "tiempo", "tengo"] },
        { type: "syntax", turkish: "Onu (erkek) gördüğünde bana söyle.", spanish: "Dime cuando lo veas", words: ["Dime", "cuando", "lo", "veas", "ves"] },
        { type: "syntax", turkish: "İspanyolca konuştuğunda (rutina) seni çok iyi anlıyorum.", spanish: "Cuando hablas español te entiendo muy bien", words: ["Cuando", "hablas", "español", "te", "entiendo", "muy", "bien", "hables"] },
        { type: "syntax", turkish: "Madrid'de olduğunuzda (ustedes) bizi ziyaret edin.", spanish: "Cuando estén en Madrid visítennos", words: ["Cuando", "estén", "en", "Madrid", "visítennos", "están"] }
      ]
    },
    {
      id: "b1_u5_n3",
      type: "theory",
      title: "Teoría II: Los Primos de 'Cuando'",
      content: {
        concept: "La regla del Subjuntivo para el futuro no solo aplica a la palabra 'Cuando'. Aplica a cualquier conector temporal que hable del futuro.\n\n### 1. HASTA QUE ( ... -e kadar)\nMarca el límite de tiempo de una acción futura.\n• *Esperaré aquí HASTA QUE vengas.* (Sen gelene kadar burada bekleyeceğim).\n\n### 2. EN CUANTO / TAN PRONTO COMO (Yapar yapmaz / Eder etmez)\nSignifican exactamente lo mismo: inmediatamente después de hacer algo.\n• *Te llamaré EN CUANTO llegue.* (Varır varmaz seni arayacağım).\n• *Comeremos TAN PRONTO COMO esté lista la comida.* (Yemek hazır olur olmaz yiyeceğiz).\n\n### 3. MIENTRAS ( ... olduğu sürece / -ken)\nPara acciones futuras que ocurren al mismo tiempo.\n• *MIENTRAS yo viva, te amaré.* (Ben yaşadığım sürece, seni seveceğim).",
        examples: [
          { es: "No saldré hasta que me digas la verdad.", tr: "Bana doğruyu söyleyene kadar çıkmayacağım." },
          { es: "Te escribiré en cuanto tenga internet.", tr: "İnternetim olur olmaz sana yazacağım." },
          { es: "Mientras estés en mi casa, seguirás las reglas.", tr: "Benim evimde olduğun sürece, kurallara uyacaksın." }
        ]
      }
    },
    {
      id: "b1_u5_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Hasta que / En cuanto)",
      exercises: [
        { type: "speaking", spanish: "Esperaré hasta que tú llegues", turkish: "Sen gelene kadar bekleyeceğim." },
        { type: "speaking", spanish: "Te llamaré en cuanto termine", turkish: "Bitirir bitirmez seni arayacağım." },
        { type: "speaking", spanish: "Me iré tan pronto como pueda", turkish: "Yapabilir yapmaz (ilk fırsatta) gideceğim." },
        { type: "speaking", spanish: "No dormiré hasta que hable contigo", turkish: "Seninle konuşana kadar uyumayacağım." },
        { type: "speaking", spanish: "Dímelo en cuanto lo sepas", turkish: "Bunu öğrenir öğrenmez bana söyle." },
        { type: "speaking", spanish: "Te apoyaré mientras viva", turkish: "Yaşadığım sürece seni destekleyeceğim." },
        { type: "speaking", spanish: "Avísame en cuanto estés lista", turkish: "Hazır olur olmaz bana haber ver." },
        { type: "speaking", spanish: "Estudiaremos hasta que comprendas", turkish: "Sen anlayana kadar çalışacağız." },
        { type: "speaking", spanish: "Mientras yo pague, tú escucharás", turkish: "Ben ödediğim sürece sen dinleyeceksin." },
        { type: "speaking", spanish: "Saldremos tan pronto como pare de llover", turkish: "Yağmur durur durmaz çıkacağız." }
      ]
    },
    {
      id: "b1_u5_n5",
      type: "theory",
      title: "Teoría III: El Reto Turco (El sufijo -dığında)",
      content: {
        concept: "En turco, la magia se hace con sufijos. Si dices 'Eve vardığımda', usas el mismo sufijo sin importar si es una rutina (Eve vardığımda uyurum) o un plan futuro (Eve vardığımda uyuyacağım).\n\n¡Esa es la mayor trampa para tu cerebro!\nEl español te exige **ADIVINAR** el contexto.\n\n### Piensa antes de hablar:\n1. ¿Esto pasa siempre? ➔ INDICATIVO (llego, como, voy).\n2. ¿Esto va a pasar luego y aún no es realidad? ➔ SUBJUNTIVO (llegue, coma, vaya).\n\n🇹🇷 Tu mente turca pensará: 'Cuando llego a casa te llamaré' (porque en turco el verbo vardığımda no tiene tiempo). ¡Fuerza a tu mente a usar el Subjuntivo! ➔ **Cuando LLEGUE a casa te llamaré**.",
        examples: [
          { es: "Cuando llueve, no salgo. (Es un hecho real que pasa a menudo)", tr: "Yağmur yağdığında çıkmam." },
          { es: "Cuando llueva, no saldré. (Hablo de la próxima vez que pase)", tr: "Yağmur yağdığında (yağarsa) çıkmayacağım." },
          { es: "No sé cuándo llegará. (Subjuntivo porque la hora exacta es un misterio).", tr: "Ne zaman varacağını bilmiyorum." }
        ]
      }
    },
    {
      id: "b1_u5_n6",
      type: "reading",
      title: "Lectura y Audio: Planificando la boda",
      content: {
        text: "Marta y David están planificando su boda, pero están muy estresados por el dinero.\n\n— Marta: David, estoy muy preocupada. ¿Cuándo vamos a enviar las invitaciones?\n— David: Las enviaremos en cuanto tengamos la lista final de invitados. Pero todavía no estoy seguro del presupuesto.\n— Marta: Bueno, cuando cobres tu sueldo de este mes, pagaremos el restaurante. Pero no podemos comprar mi vestido hasta que mi madre nos dé el dinero que nos prometió.\n— David: Tienes razón. Mientras no tengamos ese dinero, es mejor esperar. Te prometo que, cuando estemos casados y estemos en la playa de luna de miel, todo esto nos parecerá divertido.\n— Marta: ¡Ojalá! En cuanto termine todo esto, voy a dormir durante tres días seguidos.",
        translation: "Marta ve David düğünlerini planlıyorlar ama para yüzünden çok stresliler.\n\n— Marta: David, çok endişeliyim. Davetiyeleri ne zaman göndereceğiz?\n— David: Son davetli listesi elimizde olur olmaz onları göndereceğiz. Ama bütçeden hala emin değilim.\n— Marta: Pekala, sen bu ayki maaşını aldığında (tahsil ettiğinde), restoranı ödeyeceğiz. Ama annem bize söz verdiği parayı verene kadar elbisemi alamayız.\n— David: Haklısın. O para elimizde olmadığı sürece beklemek en iyisi. Sana söz veriyorum, evlendiğimizde ve balayında plajda olduğumuzda, tüm bunlar bize komik gelecek.\n— Marta: İnşallah! Tüm bunlar biter bitmez üç gün üst üste uyuyacağım."
      }
    },
    {
      id: "b1_u5_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Rutina vs. Futuro)",
      exercises: [
        { type: "syntax", turkish: "Maaşımı aldığımda sana ödeyeceğim (pagar).", spanish: "Cuando cobre mi sueldo te pagaré", words: ["Cuando", "cobre", "mi", "sueldo", "te", "pagaré", "cobro"] },
        { type: "syntax", turkish: "Sen gelene kadar hiçbir şey yapmayacağım.", spanish: "No haré nada hasta que vengas", words: ["No", "haré", "nada", "hasta", "que", "vengas", "vienes"] },
        { type: "syntax", turkish: "Normalde maaşımı aldığımda (rutina) sinemaya giderim.", spanish: "Normalmente cuando cobro mi sueldo voy al cine", words: ["Normalmente", "cuando", "cobro", "mi", "sueldo", "voy", "al", "cine", "cobre"] },
        { type: "syntax", turkish: "Hazır olur olmaz bana haber ver (avisar).", spanish: "Avísame en cuanto estés listo", words: ["Avísame", "en", "cuanto", "estés", "listo", "estás"] },
        { type: "syntax", turkish: "Paramız olmadığı sürece (Mientras no) seyahat edemeyiz.", spanish: "Mientras no tengamos dinero no podemos viajar", words: ["Mientras", "no", "tengamos", "dinero", "no", "podemos", "viajar", "tenemos"] },
        { type: "speaking", spanish: "Cuando termine de trabajar te llamaré", turkish: "Çalışmayı bitirdiğimde seni arayacağım." },
        { type: "speaking", spanish: "Normalmente cuando termino de trabajar descanso", turkish: "Normalde çalışmayı bitirdiğimde dinlenirim." },
        { type: "speaking", spanish: "Te lo daré en cuanto lo encuentre", turkish: "Onu bulur bulmaz sana vereceğim." },
        { type: "speaking", spanish: "No firmaré hasta que lea el contrato", turkish: "Sözleşmeyi okuyana kadar imzalamayacağım." },
        { type: "speaking", spanish: "Mientras vivas en esta casa respetarás las reglas", turkish: "Bu evde yaşadığın sürece kurallara uyacaksın (saygı duyacaksın)." }
      ]
    },
    {
      id: "b1_u5_n8",
      type: "theory",
      title: "Laboratorio de Slang: El Tiempo y la Espera",
      content: {
        concept: "Al hablar del tiempo y esperar que pasen las cosas, los hispanohablantes usan expresiones muy curiosas que no se pueden traducir literalmente.\n\n### Frases Hechas (Idioms):\n• **Hacer tiempo** (Vakit öldürmek / Oyalanmak) ➔ Esperar ocupado en otra cosa hasta que llegue el momento.\n  *Ej: Voy a hacer tiempo en la cafetería hasta que tú llegues.*\n• **Llegar a las tantas** (Çok geç/gecenin köründe varmak) ➔ Llegar extremadamente tarde por la noche.\n  *Ej: Anoche salimos y llegamos a las tantas.*\n• **Estar a punto de** (Üzere olmak) ➔ Cuando una acción va a ocurrir en escasos segundos.\n  *Ej: Estoy a punto de salir (Çıkmak üzereyim).*\n• **¡Ya era hora!** (Sonunda! / Vakti gelmişti) ➔ Expresión de alivio cuando por fin ocurre algo que esperabas.",
        examples: [
          { es: "¡Ya era hora de que llegaras!", tr: "Sonunda geldin! (Gelmenin vakti gelmişti!)" },
          { es: "La película está a punto de empezar.", tr: "Film başlamak üzere." },
          { es: "Haremos tiempo en el bar hasta que abran la tienda.", tr: "Dükkanı açana kadar barda vakit öldüreceğiz." }
        ]
      }
    },
    {
      id: "b1_u5_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Futuro Condicionado",
      content: {
        concept: "Vamos a deconstruir una oración larga que muestra cómo un plan futuro depende totalmente de una acción que está en el aire (Subjuntivo).",
        examples: [{ es: "Yo te enviaré el documento por correo en cuanto llegue a mi oficina.", tr: "Ofisime varır varmaz belgeyi sana e-posta ile göndereceğim." }],
        analysis: [
          { word: "Yo te enviaré", type: "verb", literal: "Ben sana göndereceğim", explanation: "Verbo ENVIAR en Futuro de Indicativo + pronombre de objeto 'te'. Es la promesa principal.", examples: [] },
          { word: "el documento", type: "noun", literal: "belge", explanation: "Objeto directo de la acción de enviar.", examples: [] },
          { word: "por correo", type: "noun", literal: "posta/e-posta yoluyla", explanation: "Complemento de medio.", examples: [] },
          { word: "en cuanto", type: "connector", literal: "yapar yapmaz (olur olmaz)", explanation: "Conector temporal de inmediatez. Exige subjuntivo para el futuro.", examples: [] },
          { word: "llegue", type: "verb", literal: "vardığımda", explanation: "Verbo LLEGAR en Presente de Subjuntivo (Terminación 'e'). Es irreal porque aún no estoy en la oficina.", examples: [] },
          { word: "a mi oficina", type: "noun", literal: "ofisime", explanation: "Lugar de destino.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u5_n10",
      type: "theory",
      title: "Caja de Herramientas: Organización y Eventos",
      content: {
        concept: "Para planificar tu futuro (como Marta y David en la lectura), necesitas vocabulario de logística, finanzas y eventos sociales.\n\n### Bodas y Eventos:\n• **La boda** (Düğün)\n• **El invitado / La invitada** (Davetli)\n• **La luna de miel** (Balayı)\n• **La invitación** (Davetiye)\n\n### Finanzas y Planificación:\n• **Ahorrar** (Para biriktirmek) ➔ *Ahorraré hasta que pueda comprarlo.*\n• **Gastar** (Para harcamak)\n• **El presupuesto** (Bütçe)\n• **Cobrar el sueldo** (Maaşı almak/tahsil etmek)\n• **La reserva** (Rezervasyon)\n• **Planear** (Planlamak)",
        examples: [
          { es: "Tenemos que ahorrar para pagar la boda.", tr: "Düğünü ödemek için para biriktirmemiz lazım." },
          { es: "Haremos la reserva cuando tengamos el presupuesto.", tr: "Bütçemiz olduğunda rezervasyonu yapacağız." },
          { es: "Ellos gastaron mucho dinero en su luna de miel.", tr: "Balayında çok para harcadılar." }
        ]
      }
    },
    {
      id: "b1_u5_n11",
      type: "theory",
      title: "Taller de Producción: Tus Planes Futuros",
      content: {
        concept: "Es el momento de soñar despierta y escribir sobre tu futuro.\n\n**Instrucciones:**\nEscribe un párrafo (mínimo 6-8 líneas) detallando un gran plan que tienes para el futuro (un viaje, comprar algo grande, estudiar algo nuevo).\n\n1. Usa al menos dos veces 'Cuando + Subjuntivo'.\n2. Usa al menos una vez 'En cuanto' o 'Hasta que'.\n3. Usa al menos un verbo en Futuro Simple para la promesa principal (viajaré, ahorraré).\n4. Incluye la expresión 'estar a punto de' o 'hacer tiempo'.\n\n**Inspiración:** 'Estoy ahorrando mucho dinero porque quiero viajar a Perú. Cuando **tenga** suficiente dinero, **compraré** los billetes. Hasta que **llegue** ese día, voy a estudiar español...'",
        examples: []
      }
    },
    {
      id: "b1_u5_n12",
      type: "exam",
      title: "Examen de Unidad: El Viaje al Futuro",
      content: {
        concept: "La prueba final sobre los marcadores temporales. Demuestra que sabes distinguir entre una rutina y un evento futuro para aplicar el Subjuntivo correctamente.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Elige la correcta (Futuro): Te llamaré cuando ______ (llegar) a casa.", options: ["llego", "llegue", "llegaré"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta (Rutina): Normalmente, cuando ______ (llegar) a casa, descanso.", options: ["llego", "llegue", "llegaré"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué modo NUNCA se pone después de la palabra 'Cuando'?", options: ["Presente de Indicativo", "Presente de Subjuntivo", "Futuro Simple"], correct: 2 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Öğrenir öğrenmez' (Inmediatamente después)?", options: ["Hasta que sepa", "En cuanto sepa", "Mientras sepa"], correct: 1 },
          { type: "multiple_choice", question: "No podemos comprar el coche hasta que nosotros ______ (tener) el dinero.", options: ["tenemos", "tendremos", "tengamos"], correct: 2 },
          { type: "multiple_choice", question: "Mientras ______ (tú - vivir) aquí, limpiarás tu habitación.", options: ["vivas", "vives", "vivirás"], correct: 0 },
          { type: "multiple_choice", question: "Tan pronto como el profesor ______ (hablar), hagan silencio.", options: ["hable", "habla", "habló"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Estar a punto de'?", options: ["Üzere olmak (Casi pasa)", "Gecenin köründe", "Para biriktirmek"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Hacer tiempo'?", options: ["Saat yapmak", "Vakit öldürmek / Oyalanmak", "Hızlı olmak"], correct: 1 },
          { type: "multiple_choice", question: "Dime la verdad cuando la ______ (saber).", options: ["sabes", "sepas", "sabrás"], correct: 1 },
          { type: "multiple_choice", question: "Siempre que (Rutina) ella ______ (venir), trae regalos.", options: ["venga", "viene", "vino"], correct: 1 },
          { type: "multiple_choice", question: "La próxima vez que ella ______ (venir), traerá regalos.", options: ["venga", "viene", "vendrá"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Ahorrar'?", options: ["Para harcamak", "Para biriktirmek", "Maaş almak"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo decimos 'Sonunda! / Vakti gelmişti'?", options: ["¡Ya era hora!", "¡Qué lástima!", "¡En cuanto!"], correct: 0 },
          { type: "multiple_choice", question: "Te ayudaré cuando ______ (yo - poder).", options: ["puedo", "pueda", "podré"], correct: 1 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Hazır olduğunda (estar) bana söyle.", spanish: "Dime cuando estés listo", words: ["Dime", "cuando", "estés", "listo", "estás"] },
          { type: "syntax", turkish: "Maaşımı aldığımda onu (lo) satın alacağım.", spanish: "Lo compraré cuando cobre mi sueldo", words: ["Lo", "compraré", "cuando", "cobre", "mi", "sueldo", "cobro"] },
          { type: "syntax", turkish: "O (kadın) gelir gelmez çıkacağız.", spanish: "Saldremos en cuanto ella llegue", words: ["Saldremos", "en", "cuanto", "ella", "llegue", "llega"] },
          { type: "syntax", turkish: "Sen anlayana kadar bekleyeceğim.", spanish: "Esperaré hasta que tú comprendas", words: ["Esperaré", "hasta", "que", "tú", "comprendas", "comprendes"] },
          { type: "syntax", turkish: "Normalde (rutina) kar yağdığında evde kalırız.", spanish: "Normalmente cuando nieva nos quedamos en casa", words: ["Normalmente", "cuando", "nieva", "nos", "quedamos", "en", "casa", "nieve"] },
          { type: "syntax", turkish: "Zamanım olduğunda İspanyolca çalışacağım.", spanish: "Estudiaré español cuando tenga tiempo", words: ["Estudiaré", "español", "cuando", "tenga", "tiempo", "tengo"] },
          { type: "syntax", turkish: "Düğünü planlayana kadar para biriktireceğiz.", spanish: "Ahorraremos hasta que planeemos la boda", words: ["Ahorraremos", "hasta", "que", "planeemos", "la", "boda", "planeamos"] },
          { type: "syntax", turkish: "Seninle yaşadığım sürece (mientras) seni seveceğim.", spanish: "Mientras viva contigo te amaré", words: ["Mientras", "viva", "contigo", "te", "amaré", "vivo"] },
          { type: "syntax", turkish: "Gecenin köründe (a las tantas) geldiler.", spanish: "Ellos llegaron a las tantas", words: ["Ellos", "llegaron", "a", "las", "tantas", "muchas"] },
          { type: "syntax", turkish: "Çıkmak üzereyim (estar a punto).", spanish: "Estoy a punto de salir", words: ["Estoy", "a", "punto", "de", "salir", "salgo"] },
          { type: "syntax", turkish: "Bunu gördüğünde (ver) inanamayacaksın.", spanish: "Cuando veas esto no lo creerás", words: ["Cuando", "veas", "esto", "no", "lo", "creerás", "ves"] },
          { type: "syntax", turkish: "Yapabilir yapmaz (ilk fırsatta) seni arayacağım.", spanish: "Te llamaré tan pronto como pueda", words: ["Te", "llamaré", "tan", "pronto", "como", "pueda", "puedo"] },
          { type: "syntax", turkish: "Haklı olduğumu anladığında (saber)...", spanish: "Cuando sepas que tengo razón", words: ["Cuando", "sepas", "que", "tengo", "razón", "sabes"] },
          { type: "syntax", turkish: "Sonunda! (Vakti gelmişti).", spanish: "Ya era hora", words: ["Ya", "era", "hora", "fue", "tiempo"] },
          { type: "syntax", turkish: "Sen geri dönene (volver) kadar burada kalacağız.", spanish: "Nos quedaremos aquí hasta que vuelvas", words: ["Nos", "quedaremos", "aquí", "hasta", "que", "vuelvas", "vuelves"] }
        ]
      }
    }
  ]
};
/**
 * UNIDAD 1 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Régimen Preposicional I (Verbos que exigen A, DE, CON)
 * Tema: Psicología, toma de decisiones y cambios semánticos.
 */

export const unidad1 = {
  id: "c1_u1",
  title: "Unidad 1: Atado a las palabras",
  description: "Alcanza la precisión quirúrgica. Descubre por qué ciertos verbos están 'encadenados' a preposiciones específicas y cómo cambian de significado si te equivocas.",
  nodes: [
    {
      id: "c1_u1_n1",
      type: "theory",
      title: "Teoría I: El Vínculo Inquebrantable (Verbos con 'A')",
      content: {
        concept: "Bienvenida al Nivel C1. A partir de ahora, el mayor delator de que el español no es tu lengua materna no será tu acento, sino usar la preposición equivocada. A este fenómeno se le llama **Régimen Preposicional** (o Suplemento).\n\nEn español, muchos verbos son 'incompletos' por sí solos; necesitan obligatoriamente una preposición para introducir la información. No puedes separarlos.\n\n### Verbos que exigen la preposición 'A'\nNormalmente, la preposición 'A' indica dirección, un comienzo, un objetivo o, curiosamente, una resistencia hacia algo.\n\n**1. Resistencia o Rechazo:**\n• **Negarse A + Infinitivo/Sustantivo:** (Reddetmek). *Ej: Me niego a aceptar estas condiciones.* (No puedes decir 'Me niego aceptar').\n• **Renunciar A + Sustantivo:** (Vazgeçmek/İstifa etmek). *Ej: El presidente renunció a su cargo.*\n\n**2. Inicio de un proceso o Hábito:**\n• **Acostumbrarse A:** (Alışmak). *Ej: Me ha costado acostumbrarme a este clima.*\n• **Atreverse A:** (Cüret etmek/Cesaret etmek). *Ej: No me atrevo a decirle la verdad.*\n• **Aprender A / Enseñar A:** (Öğrenmek/Öğretmek). Si el verbo va seguido de un infinitivo, la 'A' es el puente obligatorio. *Ej: Le enseñé a conducir.*\n\n**3. Sometimiento:**\n• **Obligar A:** (Zorlamak). *Ej: La crisis nos obligó a cerrar la empresa.*\n\n⚠️ **Regla de Oro C1:** Si el verbo exige 'A' y lo que sigue es una oración con 'QUE', la preposición se mantiene. \n*Ej: Me niego A QUE me hables así.* (Bana böyle konuşmanı reddediyorum).",
        examples: [
          { es: "Nunca me acostumbraré a madrugar tanto.", tr: "Bu kadar erken kalkmaya asla alışamayacağım." },
          { es: "Ella se negó a firmar el contrato sin su abogado.", tr: "Avukatı olmadan sözleşmeyi imzalamayı reddetti." },
          { es: "Renunciamos a nuestros derechos por el bien común.", tr: "Ortak iyilik için haklarımızdan vazgeçtik." }
        ]
      }
    },
    {
      id: "c1_u1_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Alta Sintaxis ('A')",
      exercises: [
        { type: "syntax", turkish: "Bu kadar çok çalışmaya (trabajar) alışkın değilim (acostumbrarse).", spanish: "No estoy acostumbrado a trabajar tanto", words: ["No", "estoy", "acostumbrado", "a", "trabajar", "tanto"] },
        { type: "syntax", turkish: "Bunu yalnız yapmaya cesaret edemiyorum (atreverse).", spanish: "No me atrevo a hacerlo solo", words: ["No", "me", "atrevo", "a", "hacerlo", "solo", "hacer"] },
        { type: "syntax", turkish: "O (kadın) sorularıma (preguntas) cevap vermeyi reddetti (negarse).", spanish: "Ella se negó a responder a mis preguntas", words: ["Ella", "se", "negó", "a", "responder", "a", "mis", "preguntas", "respondió"] },
        { type: "syntax", turkish: "Beni istifa etmeye (renunciar) zorladılar (obligar).", spanish: "Me obligaron a renunciar a mi puesto", words: ["Me", "obligaron", "a", "renunciar", "a", "mi", "puesto"] },
        { type: "syntax", turkish: "Bana böyle davranmanı (tratar) reddediyorum (negarse + a que + subj).", spanish: "Me niego a que me trates así", words: ["Me", "niego", "a", "que", "me", "trates", "así", "tratas"] },
        { type: "syntax", turkish: "Sana hayır demeye cesaret edemedi (atreverse).", spanish: "Él no se atrevió a decirte que no", words: ["Él", "no", "se", "atrevió", "a", "decirte", "que", "no", "dijo"] },
        { type: "syntax", turkish: "Bu yeni teknolojiye alışmalıyız (acostumbrarse).", spanish: "Debemos acostumbrarnos a esta nueva tecnología", words: ["Debemos", "acostumbrarnos", "a", "esta", "nueva", "tecnología"] },
        { type: "syntax", turkish: "Ödülü (el premio) reddetmeye cüret etme.", spanish: "No te atrevas a renunciar al premio", words: ["No", "te", "atrevas", "a", "renunciar", "al", "premio", "atreves"] },
        { type: "syntax", turkish: "Seni (te) İspanyolca konuşmaya zorlayacağım (obligar).", spanish: "Te voy a obligar a hablar español", words: ["Te", "voy", "a", "obligar", "a", "hablar", "español"] },
        { type: "syntax", turkish: "Onun (kadın) oraya yalnız gitmesine (ir) itiraz ediyorum/reddediyorum.", spanish: "Me niego a que ella vaya sola", words: ["Me", "niego", "a", "que", "ella", "vaya", "sola", "va"] }
      ]
    },
    {
      id: "c1_u1_n3",
      type: "theory",
      title: "Teoría II: Dependencia y Alianzas (DE y CON)",
      content: {
        concept: "Continuamos con el Régimen Preposicional. Ahora veremos las preposiciones **DE** y **CON**, que agrupan verbos de origen, dependencia mental y asociación.\n\n### Verbos que exigen la preposición 'DE'\nLa preposición 'DE' suele indicar origen, separación o el material/tema del que se compone un pensamiento.\n\n• **Acordarse DE:** (Hatırlamak). Es reflexivo. *Ej: No me acuerdo de su nombre.*\n• **Depender DE:** (Bağlı olmak). *Ej: El éxito del proyecto depende de tu esfuerzo.*\n• **Arrepentirse DE:** (Pişman olmak). *Ej: Me arrepiento de haberte gritado.*\n• **Carecer DE:** (Yoksun olmak / Bulunmamak). Es un verbo formal muy elegante para decir 'no tener'. *Ej: El documento carece de validez legal.*\n• **Darse cuenta DE:** (Farkına varmak). *Ej: Me di cuenta de que era tarde.*\n\n### Verbos que exigen la preposición 'CON'\nLa preposición 'CON' indica compañía, instrumento o asociación mental profunda.\n\n• **Soñar CON:** (Hayal etmek / Rüyasında görmek). En español no soñamos 'en' ni 'a', soñamos 'con'. *Ej: Sueño con comprarme una casa.*\n• **Contar CON:** (Güvenmek / Hesaba katmak / Sahip olmak). *Ej: Puedes contar conmigo para lo que necesites.* / *El hotel cuenta con piscina.*\n• **Conformarse CON:** (Yetinmek / Kabullenmek). *Ej: No me conformo con un sobresaliente, quiero la matrícula de honor.*\n• **Amenazar CON:** (Tehdit etmek). *Ej: El jefe amenazó con despedirnos a todos.*",
        examples: [
          { es: "El político carece de escrúpulos y no se arrepiente de nada.", tr: "Politikacı vicdandan yoksundur ve hiçbir şeyden pişman değildir." },
          { es: "Cuento contigo para organizar la reunión de mañana.", tr: "Yarınki toplantıyı organize etmek için sana güveniyorum (hesaba katıyorum)." },
          { es: "Ella se dio cuenta de que dependía demasiado de sus padres.", tr: "Ailesine çok fazla bağımlı olduğunun farkına vardı." }
        ]
      }
    },
    {
      id: "c1_u1_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Enlace)",
      exercises: [
        { type: "speaking", spanish: "Siempre sueño con viajar por todo el mundo", turkish: "Her zaman tüm dünyayı gezmeyi hayal ederim." },
        { type: "speaking", spanish: "Me arrepiento de no haber estudiado más", turkish: "Daha fazla çalışmadığıma pişmanım." },
        { type: "speaking", spanish: "Este informe carece de rigor científico", turkish: "Bu rapor bilimsel titizlikten yoksundur." },
        { type: "speaking", spanish: "No me conformo con ganar quiero arrasar", turkish: "Kazanmakla yetinmiyorum, silip süpürmek istiyorum." },
        { type: "speaking", spanish: "Todo depende de lo que decida el tribunal", turkish: "Her şey mahkemenin ne karar vereceğine bağlı." },
        { type: "speaking", spanish: "Te juro que no me acuerdo de nada", turkish: "Yemin ederim ki hiçbir şey hatırlamıyorum." },
        { type: "speaking", spanish: "Puedes contar con mi apoyo incondicional", turkish: "Koşulsuz desteğime güvenebilirsin." },
        { type: "speaking", spanish: "Me he dado cuenta de que tenías razón", turkish: "Haklı olduğunun farkına vardım." },
        { type: "speaking", spanish: "El ladrón nos amenazó con una pistola", turkish: "Hırsız bizi bir tabancayla tehdit etti." },
        { type: "speaking", spanish: "Nuestro equipo cuenta con los mejores expertos", turkish: "Ekibimiz en iyi uzmanlara sahiptir." }
      ]
    },
    {
      id: "c1_u1_n5",
      type: "theory",
      title: "El Reto Turco: La Trampa del Diccionario Mental",
      content: {
        concept: "En el nivel C1, tu mayor enemigo es tu cerebro intentando aplicar la lógica del idioma turco (con sus casos de dirección, locativo y ablativo) a las preposiciones españolas. Vamos a destruir estas traducciones literales.\n\n### Trampa 1: Rüyasında Görmek\n• Lógica turca: 'Seni rüyamda gördüm' (Te vi en mi sueño - Locativo).\n• Lógica española: **SOÑAR CON**. En español, el sueño es una asociación, una compañía mental.\n❌ *Incorrecto:* Soñé en ti. / Te soñé.\n✅ *Correcto:* Anoche **soñé CONTIGO**.\n\n### Trampa 2: Hatırlamak\n• Lógica turca: 'Bunu hatırlıyorum' (Recuerdo esto - Acusativo directo).\n• Lógica española: Tienes dos opciones, pero no puedes mezclarlas.\n1. **Recordar + Objeto Directo** (Sin preposición). *Ej: Recuerdo este lugar.*\n2. **Acordarse + DE** (Pronominal). Si usas el 'Me/Te/Se', la preposición 'DE' es obligatoria porque el recuerdo se extrae *de* tu mente.\n❌ *Incorrecto:* Me acuerdo este lugar.\n✅ *Correcto:* **Me acuerdo DE** este lugar.\n\n### Trampa 3: Farkına Varmak\n• Lógica turca: 'Geciktiğimi fark ettim' (Me di cuenta que llegaba tarde).\n• Lógica española: El verbo es 'Darse cuenta DE'. Si sigue la palabra 'QUE', **la 'DE' no desaparece**. A esto se le llama evitar el *queísmo*.\n❌ *Incorrecto:* Me di cuenta que...\n✅ *Correcto:* Me di cuenta **DE QUE** llegaba tarde.",
        examples: [
          { es: "Ayer soñé con mi abuela y me acordé de su voz.", tr: "Dün rüyamda anneannemi gördüm ve sesini hatırladım." },
          { es: "Te juro que no me di cuenta de que estabas ahí.", tr: "Yemin ederim ki orada olduğunun farkına varmadım." }
        ]
      }
    },
    {
      id: "c1_u1_n6",
      type: "reading",
      title: "Lectura Crítica: Salir de la zona de confort",
      content: {
        text: "En la sociedad moderna, nos hemos acostumbrado a la inmediatez. Sin embargo, los psicólogos advierten que la verdadera madurez llega cuando uno se atreve a fracasar. Muchas personas se niegan a aceptar los cambios porque carecen de la resiliencia necesaria para afrontarlos.\n\nPara evolucionar, debemos renunciar a la seguridad ilusoria que nos rodea. Es imprescindible no conformarse con lo mínimo. Aquellos que cuentan con una red de apoyo sólida se dan cuenta de que el éxito no depende de la suerte, sino del esfuerzo constante. A menudo, nos arrepentimos de las cosas que no hicimos, de los riesgos que no tomamos. Por ello, si sueñas con una vida plena, no puedes permitir que el miedo te obligue a quedarte paralizado. La libertad, en última instancia, exige valentía.",
        translation: "Modern toplumda, anındalığa alıştık (nos hemos acostumbrado a). Ancak psikologlar, gerçek olgunluğun insan başarısız olmaya cüret ettiğinde (se atreve a) geldiği konusunda uyarıyorlar. Pek çok insan değişiklikleri kabul etmeyi reddediyor (se niegan a) çünkü onlarla yüzleşmek için gerekli olan dayanıklılıktan yoksunlar (carecen de).\n\nGelişmek için, bizi çevreleyen aldatıcı güvenlikten vazgeçmeliyiz (renunciar a). Asgari olanla yetinmemek (no conformarse con) şarttır. Sağlam bir destek ağına sahip olanlar (cuentan con), başarının şansa değil (no depende de), sürekli çabaya bağlı olduğunun farkına varırlar (se dan cuenta de que). Çoğu zaman, yapmadığımız şeylerden, almadığımız risklerden pişman oluruz (nos arrepentimos de). Bu nedenle, eğer dolu dolu bir hayat hayal ediyorsan (sueñas con), korkunun seni felç olmuş halde kalmaya zorlamasına (te obligue a) izin veremezsin. Özgürlük, nihayetinde, cesaret gerektirir."
      }
    },
    {
      id: "c1_u1_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (A, DE, CON)",
      exercises: [
        { type: "syntax", turkish: "Onlar, liderlik kapasitesinden (capacidad) yoksunlar (carecer).", spanish: "Ellos carecen de capacidad de liderazgo", words: ["Ellos", "carecen", "de", "capacidad", "de", "liderazgo", "con"] },
        { type: "syntax", turkish: "Bu maaşla (sueldo) yetinemem (conformarse).", spanish: "No puedo conformarme con este sueldo", words: ["No", "puedo", "conformarme", "con", "este", "sueldo", "a"] },
        { type: "syntax", turkish: "Hata yaptığımın (cometer un error) farkına vardım (Darse cuenta).", spanish: "Me di cuenta de que cometí un error", words: ["Me", "di", "cuenta", "de", "que", "cometí", "un", "error"] },
        { type: "syntax", turkish: "Bana yalan söylemene (mentir) itiraz ediyorum (negarse).", spanish: "Me niego a que me mientas", words: ["Me", "niego", "a", "que", "me", "mientas", "mientes"] },
        { type: "syntax", turkish: "Dün rüyamda (Soñar) eski sevgilimi (mi ex) gördüm.", spanish: "Ayer soñé con mi ex", words: ["Ayer", "soñé", "con", "mi", "ex", "en"] },
        { type: "syntax", turkish: "Patron projeyi iptal etmekle (cancelar) tehdit etti (amenazar).", spanish: "El jefe amenazó con cancelar el proyecto", words: ["El", "jefe", "amenazó", "con", "cancelar", "el", "proyecto", "de"] },
        { type: "syntax", turkish: "Çocukken (de niño) olan hiçbir şeyi hatırlamıyorum (acordarse).", spanish: "No me acuerdo de nada de niño", words: ["No", "me", "acuerdo", "de", "nada", "de", "niño", "con"] },
        { type: "syntax", turkish: "Her şey senin bana yardım etmene bağlı (depender).", spanish: "Todo depende de que me ayudes", words: ["Todo", "depende", "de", "que", "me", "ayudes", "ayudas"] },
        { type: "syntax", turkish: "İspanyolca öğrenmeye (aprender) karar verdim.", spanish: "He decidido aprender a hablar español", words: ["He", "decidido", "aprender", "a", "hablar", "español", "de"] },
        { type: "syntax", turkish: "Ona aşık olduğum için (enamorarse) pişman değilim (arrepentirse).", spanish: "No me arrepiento de haberme enamorado de él", words: ["No", "me", "arrepiento", "de", "haberme", "enamorado", "de", "él"] }
      ]
    },
    {
      id: "c1_u1_n8",
      type: "theory",
      title: "Teoría III: El Camaleón (Cambios Semánticos)",
      content: {
        concept: "El español C1 está lleno de trampas semánticas. Existen verbos que cambian completamente de significado dependiendo de si llevan preposición o no, o si cambian de preposición.\n\n### 1. CONTAR vs. CONTAR CON\n• **Contar (Sin prep):** Saymak / Anlatmak. *Ej: Cuéntame una historia.* (Bana bir hikaye anlat).\n• **Contar CON:** Güvenmek / Sahip olmak. *Ej: Cuenta conmigo para el proyecto.* (Proje için bana güven/beni hesaba kat).\n\n### 2. ACORDAR vs. ACORDARSE DE\n• **Acordar (Sin prep):** Anlaşmaya varmak. *Ej: Acordamos un precio justo.* (Adil bir fiyatta anlaştık).\n• **Acordarse DE:** Hatırlamak. *Ej: Me acordé de tu cumpleaños.* (Doğum gününü hatırladım).\n\n### 3. FIJAR vs. FIJARSE EN\n• **Fijar (Sin prep):** Sabitlemek / Belirlemek. *Ej: Fijaron la fecha de la boda.* (Düğün tarihini belirlediler).\n• **Fijarse EN:** Dikkat etmek / Fark etmek. *Ej: No me fijé en ese detalle.* (O detayı fark etmedim / dikkat etmedim).\n\n### 4. TRATAR vs. TRATAR DE vs. TRATARSE DE\n• **Tratar (Sin prep):** Tedavi etmek / Davranmak. *Ej: Me trató muy mal.* (Bana çok kötü davrandı).\n• **Tratar DE:** Çabalamak / Denemek (Equivale a 'Intentar'). *Ej: Trata de calmarte.* (Sakinleşmeye çalış).\n• **Tratarse DE:** Hakkında olmak / Konusu olmak. *Ej: Es un libro que se trata de historia.* (Tarih hakkında olan bir kitap).",
        examples: [
          { es: "Acordamos que nadie se acordaría del incidente.", tr: "Kimsenin olayı hatırlamayacağı konusunda anlaştık (acordar vs acordarse)." },
          { es: "Trata de entender que esta película se trata de ti.", tr: "Anlamaya çalış ki bu film senin hakkında (tratar de vs tratarse de)." }
        ]
      }
    },
    {
      id: "c1_u1_n9",
      type: "theory",
      title: "Sintaxis Visual: Deconstrucción Académica",
      content: {
        concept: "Vamos a diseccionar una oración que requiere un dominio absoluto de la sintaxis C1: mezcla régimen preposicional ('negarse a', 'depender de') con oraciones subordinadas en subjuntivo.",
        examples: [{ es: "Me niego a que mi futuro profesional dependa de las decisiones irracionales que tomen otros directivos.", tr: "Profesyonel geleceğimin diğer yöneticilerin alacağı mantıksız kararlara bağlı olmasını reddediyorum." }],
        analysis: [
          { word: "Me niego", type: "verb", literal: "Reddediyorum (kendimi inkar ediyorum)", explanation: "Verbo pronominal que indica rechazo absoluto.", examples: [] },
          { word: "a que", type: "connector", literal: "ona ki", explanation: "La preposición 'a' exigida por el verbo 'negarse', seguida de 'que' para introducir otra acción.", examples: [] },
          { word: "mi futuro profesional", type: "noun", literal: "profesyonel geleceğim", explanation: "Sujeto de la oración subordinada.", examples: [] },
          { word: "dependa", type: "verb", literal: "bağlı olmasını (subjuntivo)", explanation: "Presente de Subjuntivo del verbo 'depender'. Se usa subjuntivo porque la acción anterior ('negarse') ejerce influencia/rechazo sobre esta.", examples: [] },
          { word: "de las decisiones", type: "noun", literal: "kararlara (-den)", explanation: "La preposición 'de' exigida obligatoriamente por el verbo 'depender'.", examples: [] },
          { word: "irracionales", type: "adjective", literal: "mantıksız", explanation: "Adjetivo calificativo.", examples: [] },
          { word: "que tomen", type: "verb", literal: "alacağı (subjuntivo)", explanation: "Subjuntivo en oración relativa. Se usa porque 'las decisiones' aún no han sido tomadas (es un futuro incierto o hipotético).", examples: [] },
          { word: "otros directivos.", type: "noun", literal: "diğer yöneticiler", explanation: "Sujeto de la acción final.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u1_n10",
      type: "theory",
      title: "Caja de Herramientas: Psicología y Corporativismo",
      content: {
        concept: "Para redactar ensayos en el nivel C1, debes enriquecer tu vocabulario. Aquí tienes sustantivos y expresiones de alta gama que combinan perfectamente con los verbos de esta unidad.\n\n• **El conformismo** (Boyun eğme / Mevcut durumu kabullenme).\n• **La resignación** (Teslimiyet / Kabulleniş).\n• **El escrúpulo / Carecer de escrúpulos** (Vicdan/Ahlak / Vicdansız olmak).\n• **Estar dispuesto a** (Bir şeye hazır/gönüllü olmak).\n• **Imprescindible** (Vazgeçilmez / Zorunlu).\n• **El obstáculo** (Engel).\n• **La tenacidad** (Azim / İnatçılık).\n• **La resiliencia** (Dayanıklılık / Psikolojik esneklik).\n• **Tomar medidas** (Önlem almak).",
        examples: [
          { es: "Ese abogado carece de escrúpulos; está dispuesto a mentir.", tr: "O avukat vicdandan yoksundur; yalan söylemeye gönüllüdür." },
          { es: "Superar este obstáculo exigirá mucha tenacidad.", tr: "Bu engeli aşmak çok fazla azim gerektirecek." },
          { es: "La resiliencia es imprescindible en este trabajo.", tr: "Bu işte psikolojik dayanıklılık vazgeçilmezdir." }
        ]
      }
    },
    {
      id: "c1_u1_n11",
      type: "theory",
      title: "Taller de Producción: Ensayo sobre la Dependencia",
      content: {
        concept: "Ha llegado el momento de poner a prueba tu pluma a nivel C1.\n\n**Instrucción:**\nEscribe un breve ensayo analítico (de 10 a 15 líneas) sobre el siguiente tema:\n*¿La tecnología nos hace más libres o más dependientes?*\n\n**Requisitos obligatorios:**\n1. Debes usar al menos **5 verbos con su preposición correcta** estudiados en esta unidad (Ej: *depender de, renunciar a, acostumbrarse a, negarse a, conformarse con*).\n2. Debes usar al menos **2 palabras de la Caja de Herramientas** (Ej: *conformismo, imprescindible*).\n3. Incluye una oración con la estructura: *Verbo de régimen + Preposición + QUE + Subjuntivo* (Ej: *Me niego a que el móvil controle mi vida*).\n\nEscribe tu texto y envíalo para la evaluación de precisión semántica.",
        examples: []
      }
    },
    {
      id: "c1_u1_n12",
      type: "exam",
      title: "Examen de Unidad: La Prueba del Matiz",
      content: {
        concept: "Demuestra tu dominio del régimen preposicional y los cambios semánticos. Un solo error de preposición cambiará el sentido de tu frase.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué preposición exige el verbo 'Atreverse'?", options: ["De", "A", "En"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'El informe ______ de validez legal'.", options: ["carece", "cuenta", "depende"], correct: 0 },
          { type: "multiple_choice", question: "Si digo 'Cuenta conmigo', significa:", options: ["Di los números conmigo.", "Puedes confiar en mí / Apoyarte en mí.", "Cuenta una historia para mí."], correct: 1 },
          { type: "multiple_choice", question: "Evita el queísmo. ¿Cuál es correcta?", options: ["Me di cuenta que llovía.", "Me di cuenta de que llovía.", "Me di cuenta a que llovía."], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Dün seni rüyamda gördüm'?", options: ["Ayer soñé en ti.", "Ayer te soñé.", "Ayer soñé contigo."], correct: 2 },
          { type: "multiple_choice", question: "Elige la correcta: 'Me niego ______ me hables en ese tono'.", options: ["que", "a que", "de que"], correct: 1 },
          { type: "multiple_choice", question: "Diferencia de significado. 'Fijar' significa establecer, pero 'Fijarse en' significa:", options: ["Pegar con pegamento.", "Prestar atención / Notar.", "Mirar fijamente."], correct: 1 },
          { type: "multiple_choice", question: "'Tratar' significa intentar cuando va seguido de la preposición:", options: ["Con", "A", "De"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué preposición le sigue a 'Arrepentirse'?", options: ["Por", "De", "A"], correct: 1 },
          { type: "multiple_choice", question: "Completa: 'No debes conformarte ______ el segundo puesto'.", options: ["a", "de", "con"], correct: 2 },
          { type: "syntax", turkish: "Bu kadar strese alışmaya (acostumbrarse) reddediyorum (negarse).", spanish: "Me niego a acostumbrarme a tanto estrés", words: ["Me", "niego", "a", "acostumbrarme", "a", "tanto", "estrés", "de"] },
          { type: "syntax", turkish: "O detayı (ese detalle) fark etmedim (fijarse).", spanish: "No me fijé en ese detalle", words: ["No", "me", "fijé", "en", "ese", "detalle", "a"] },
          { type: "syntax", turkish: "O film senin hakkında (tratarse de).", spanish: "Esa película se trata de ti", words: ["Esa", "película", "se", "trata", "de", "ti", "trata"] },
          { type: "syntax", turkish: "Sana doğruyu söylemeye (decir) cesaret edemiyorum (atreverse).", spanish: "No me atrevo a decirte la verdad", words: ["No", "me", "atrevo", "a", "decirte", "la", "verdad"] },
          { type: "syntax", turkish: "Her şey hava durumuna (el clima) bağlı (depender).", spanish: "Todo depende del clima", words: ["Todo", "depende", "del", "clima", "de", "el"] },
          { type: "syntax", turkish: "Senin işi bırakmana (dejar) itiraz ediyorum (negarse a que).", spanish: "Me niego a que dejes el trabajo", words: ["Me", "niego", "a", "que", "dejes", "el", "trabajo", "dejas"] },
          { type: "syntax", turkish: "Onun şirketteki yerine/pozisyonuna (puesto) istifa ettiğini (renunciar) hatırlıyorum (acordarse).", spanish: "Me acuerdo de que renunció a su puesto", words: ["Me", "acuerdo", "de", "que", "renunció", "a", "su", "puesto"] },
          { type: "syntax", turkish: "Ekibimiz on uzmandan (expertos) oluşuyor/sahip (contar con).", spanish: "Nuestro equipo cuenta con diez expertos", words: ["Nuestro", "equipo", "cuenta", "con", "diez", "expertos"] },
          { type: "syntax", turkish: "Buna (esto) bir çözüm (solución) bulmaya (encontrar) çalışmalıyız (tratar de).", spanish: "Debemos tratar de encontrar una solución a esto", words: ["Debemos", "tratar", "de", "encontrar", "una", "solución", "a", "esto"] },
          { type: "syntax", turkish: "Haklı olduğunun (tener razón) farkına vardım (darse cuenta).", spanish: "Me di cuenta de que tenías razón", words: ["Me", "di", "cuenta", "de", "que", "tenías", "razón", "tenías"] }
        ]
      }
    }
  ]
};
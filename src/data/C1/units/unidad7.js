/**
 * UNIDAD 7 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Oraciones Concesivas de Nivel C1 (Por muy que, A sabiendas de que, Y eso que).
 * Tema: Obstinación, terquedad, resistencia y enfrentar imposibles.
 */

export const unidad7 = {
  id: "c1_u7",
  title: "Unidad 7: Aunque el mundo se acabe",
  description: "Eleva tus argumentos al nivel experto. Aprende a expresar resistencia total y a ignorar obstáculos con estructuras concesivas de alta intensidad.",
  nodes: [
    {
      id: "c1_u7_n1",
      type: "theory",
      title: "Teoría I: La Indiferencia Extrema (Por muy... que)",
      content: {
        concept: "En B2 vimos 'Por más que / Por mucho que' para hablar de CANTIDAD de esfuerzo (Ne kadar çok çalışsam da). En C1, usamos una estructura similar pero para CUALIDADES (Adjetivos o Adverbios).\n\n### Estructura: POR MUY + Adjetivo/Adverbio + QUE + Verbo\nEsta estructura significa 'Ne kadar [sıfat] olursa olsun'. Indica que la intensidad de una característica no te importa en absoluto. No va a cambiar tu decisión.\n\n### La Regla del Subjuntivo vs. Indicativo:\n1. **Con INDICATIVO (Hecho constatado):** Sabes que el adjetivo es real y lo admites.\n• *Por muy **inteligente** que **ES**, a veces comete errores absurdos.*\n(Onun çok zeki olduğunu biliyorum/kabul ediyorum, buna rağmen hata yapıyor).\n\n2. **Con SUBJUNTIVO (Indiferencia / Irrealidad):** ¡Este es el uso más común en C1! Demuestra que el grado de ese adjetivo te da exactamente igual.\n• *Por muy **caro** que **SEA**, lo voy a comprar.*\n(Ne kadar pahalı olursa olsun -umurumda değil-, onu alacağım).",
        examples: [
          { es: "Por muy lejos que esté, iré a visitarte.", tr: "Ne kadar uzak olursa olsun, seni ziyarete gideceğim." },
          { es: "Por muy rápido que corrió, perdió el tren (Indicativo - hecho pasado).", tr: "Ne kadar hızlı koştuysa da, treni kaçırdı." },
          { es: "No te perdonaré, por muy arrepentido que parezcas.", tr: "Ne kadar pişman görünsen de seni affetmeyeceğim." }
        ]
      }
    },
    {
      id: "c1_u7_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Cualidades Extremas)",
      exercises: [
        { type: "syntax", turkish: "Ne kadar zor olursa olsun (subj) onu yapacağım.", spanish: "Por muy difícil que sea lo haré", words: ["Por", "muy", "difícil", "que", "sea", "lo", "haré", "es"] },
        { type: "syntax", turkish: "Ne kadar zeki olursa olsun ona güvenmiyorum.", spanish: "Por muy inteligente que sea no confío en él", words: ["Por", "muy", "inteligente", "que", "sea", "no", "confío", "en", "él"] },
        { type: "syntax", turkish: "Ne kadar geç olursa olsun (subj) beni ara.", spanish: "Por muy tarde que sea llámame", words: ["Por", "muy", "tarde", "que", "sea", "llámame", "es"] },
        { type: "syntax", turkish: "Ne kadar yorgun olduğumu bilmeme rağmen (ind) çalışıyorum.", spanish: "Por muy cansado que estoy trabajo", words: ["Por", "muy", "cansado", "que", "estoy", "trabajo", "esté"] },
        { type: "syntax", turkish: "Ne kadar zengin olursa olsun mutlu değil.", spanish: "Por muy rico que sea no es feliz", words: ["Por", "muy", "rico", "que", "sea", "no", "es", "feliz"] },
        { type: "syntax", turkish: "Ne kadar hızlı konuşursan konuş seni anlıyorum.", spanish: "Por muy rápido que hables te entiendo", words: ["Por", "muy", "rápido", "que", "hables", "te", "entiendo", "hablas"] },
        { type: "syntax", turkish: "Ne kadar ucuz olsa da onu istemiyorum.", spanish: "Por muy barato que sea no lo quiero", words: ["Por", "muy", "barato", "que", "sea", "no", "lo", "quiero"] },
        { type: "syntax", turkish: "Ne kadar uzak olursa olsun oraya gideceğiz.", spanish: "Por muy lejos que esté iremos allí", words: ["Por", "muy", "lejos", "que", "esté", "iremos", "allí"] },
        { type: "syntax", turkish: "Ne kadar iyi biri olsa da (ser bueno) bana hitap etmiyor.", spanish: "Por muy bueno que sea no me gusta", words: ["Por", "muy", "bueno", "que", "sea", "no", "me", "gusta"] },
        { type: "syntax", turkish: "Güneşli (hacer sol) olmasına rağmen hava soğuk (ind).", spanish: "Por mucho sol que hace hace frío", words: ["Por", "mucho", "sol", "que", "hace", "hace", "frío"] }
      ]
    },
    {
      id: "c1_u7_n3",
      type: "theory",
      title: "Teoría II: A sabiendas de que & Y eso que",
      content: {
        concept: "En el nivel C1, tu vocabulario de conectores debe expandirse radicalmente. Aquí tienes dos joyas del español nativo.\n\n### 1. A SABIENDAS DE QUE (Bile bile / Bilmesine rağmen)\nSignifica que alguien hace algo teniendo pleno conocimiento de las consecuencias negativas o del riesgo. Como implica CONOCER un hecho, **SIEMPRE rige Indicativo**.\n• *Compró la casa **a sabiendas de que** ESTABA en ruinas.*\n(Harabe olduğunu **bile bile** evi satın aldı).\n\n### 2. Y ESO QUE (Kaldı ki / Üstelik / ...-masına rağmen)\nEs una estructura muy coloquial y expresiva. Se usa al final de una frase para añadir una información que hace que la primera parte sea sorprendente. También **rige Indicativo**.\n• *He suspendido el examen de español, **y eso que** ESTUDIÉ todos los días.*\n(İspanyolca sınavından kaldım, **üstelik / kaldı ki** her gün çalışmıştım / her gün çalışmış olmama rağmen).",
        examples: [
          { es: "Le presté dinero a sabiendas de que no me lo devolvería.", tr: "Bana geri ödemeyeceğini bile bile ona borç para verdim." },
          { es: "Tengo hambre, y eso que acabo de comer.", tr: "Açım, üstelik/kaldı ki az önce yemek yedim." },
          { es: "Salió sin abrigo a sabiendas de que hacía frío.", tr: "Soğuk olduğunu bile bile paltosuz dışarı çıktı." }
        ]
      }
    },
    {
      id: "c1_u7_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Riesgo y Sorpresa)",
      exercises: [
        { type: "speaking", spanish: "Lo hice a sabiendas de que era un error", turkish: "Bunun bir hata olduğunu bile bile yaptım." },
        { type: "speaking", spanish: "No tengo sueño y eso que me levanté pronto", turkish: "Uykum yok, kaldı ki erken kalktım." },
        { type: "speaking", spanish: "Mintió a sabiendas de que la descubrirían", turkish: "Yakalanacağını bile bile yalan söyledi." },
        { type: "speaking", spanish: "Aprobé el examen y eso que no estudié nada", turkish: "Sınavı geçtim, üstelik hiç çalışmamıştım." },
        { type: "speaking", spanish: "Firmó el contrato a sabiendas del peligro", turkish: "Tehlikeyi bile bile sözleşmeyi imzaladı." },
        { type: "speaking", spanish: "Llegamos tarde y eso que salimos con tiempo", turkish: "Geç kaldık, kaldı ki vaktinde yola çıkmıştık." },
        { type: "speaking", spanish: "Comió pastel a sabiendas de que es diabético", turkish: "Diyabetik olduğunu bile bile pasta yedi." },
        { type: "speaking", spanish: "Todavía me duele y eso que tomé la pastilla", turkish: "Hala ağrıyor, üstelik hapı da içtim." },
        { type: "speaking", spanish: "Acepté el trabajo a sabiendas de que cobraría menos", turkish: "Daha az kazanacağımı (tahsil edeceğimi) bile bile işi kabul ettim." },
        { type: "speaking", spanish: "No sabe español y eso que vive en Madrid", turkish: "İspanyolca bilmiyor, kaldı ki Madrid'de yaşıyor." }
      ]
    },
    {
      id: "c1_u7_n5",
      type: "theory",
      title: "El Reto Turco: Matices del 'Bile'",
      content: {
        concept: "El turco es un idioma increíblemente eficiente. La palabra **'Bile'** (Incluso / Hasta / Rağmen) o la duplicación de verbos (*Bile bile*) condensan mucho significado.\n\nEn español C1, debes desgranar ese 'Bile' según tu intención psicológica:\n\n🇹🇷 *Bunu zor olsa **bile** yapacağım.* \n🇪🇸 **Aunque / Por muy** difícil que **sea**, lo haré. (Indiferencia = Subjuntivo).\n\n🇹🇷 *Tehlikeli olduğunu **bile bile** gitti.*\n🇪🇸 Fue **a sabiendas de que** **era** peligroso. (Conocimiento = Indicativo).\n\n🇹🇷 *Hiç param yok, **üstelik/kaldı ki** bugün maaş günüm.*\n🇪🇸 No tengo dinero, **y eso que** hoy **es** día de cobro. (Sorpresa contradictoria = Indicativo).\n\n¡No uses 'Aunque' para todo! Varía tus conectores para demostrar maestría.",
        examples: [
          { es: "Incluso si llueve, saldré. (Posibilidad)", tr: "Yağmur yağsa bile çıkacağım." },
          { es: "Salió a sabiendas de que llovería. (Hecho asumido)", tr: "Yağmur yağacağını bile bile çıktı." }
        ]
      }
    },
    {
      id: "c1_u6_n6", // Reusing standard node logic but customized
      type: "reading",
      title: "Lectura Crítica: La Expedición Imposible",
      content: {
        text: "El alpinista se preparaba para escalar la montaña más peligrosa del mundo. Sus amigos le advirtieron del riesgo, pero él respondió: «Por muy alta que sea la cumbre y por muy fuerte que sople el viento, no voy a dar marcha atrás». \n\nInició la escalada a sabiendas de que la tormenta llegaría pronto. Al tercer día, las reservas de comida se agotaron, y eso que había llevado provisiones para una semana. Por poco que avanzara cada día, se negaba a rendirse. Aunque sus piernas ya no respondían, su voluntad era inquebrantable. Al final, logró llegar a la cima. Bajó con congelaciones severas, pero declaró a la prensa: «A sabiendas de que podía morir, lo volvería a hacer. Por muy loco que parezca, allí arriba me sentí verdaderamente vivo».",
        translation: "Dağcı dünyanın en tehlikeli dağını tırmanmaya hazırlanıyordu. Arkadaşları onu risk konusunda uyardı ama o şöyle cevap verdi: «Zirve ne kadar yüksek olursa olsun ve rüzgar ne kadar sert eserse essin, geri adım atmayacağım».\n\nFırtınanın yakında geleceğini bile bile (a sabiendas de que) tırmanışa başladı. Üçüncü gün, bir haftalık erzak almış olmasına rağmen/kaldı ki almıştı (y eso que), yiyecek rezervleri tükendi. Her gün ne kadar az ilerlese de (por poco que), pes etmeyi reddediyordu. Bacakları artık yanıt vermese de iradesi sarsılmazdı. Sonunda zirveye ulaşmayı başardı. Ciddi donuklarla aşağı indi ama basına şöyle açıklama yaptı: «Ölebileceğimi bile bile (a sabiendas de que) bunu tekrar yapardım. Kulağa ne kadar çılgınca gelse de (por muy loco que parezca), orada kendimi gerçekten canlı hissettim»."
      }
    },
    {
      id: "c1_u7_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (C1)",
      exercises: [
        { type: "syntax", turkish: "Ne kadar zor olursa olsun geri adım atmayacağım.", spanish: "Por muy difícil que sea no daré marcha atrás", words: ["Por", "muy", "difícil", "que", "sea", "no", "daré", "marcha", "atrás"] },
        { type: "syntax", turkish: "Riskli olduğunu bile bile onu yaptı.", spanish: "Lo hizo a sabiendas de que era arriesgado", words: ["Lo", "hizo", "a", "sabiendas", "de", "que", "era", "arriesgado", "fuera"] },
        { type: "syntax", turkish: "Açım, üstelik bir fil yedim.", spanish: "Tengo hambre y eso que me comí un elefante", words: ["Tengo", "hambre", "y", "eso", "que", "me", "comí", "un", "elefante"] },
        { type: "syntax", turkish: "Ne kadar az ilerlesem de pes etmiyorum.", spanish: "Por poco que avance no me rindo", words: ["Por", "poco", "que", "avance", "no", "me", "rindo", "avanzo"] },
        { type: "syntax", turkish: "Yalan olduğunu bile bile sözleşmeyi (contrato) imzaladı.", spanish: "Firmó el contrato a sabiendas de que era mentira", words: ["Firmó", "el", "contrato", "a", "sabiendas", "de", "que", "era", "mentira"] },
        { type: "syntax", turkish: "Ne kadar çılgınca gelse de (parecer) haklı.", spanish: "Por muy loco que parezca tiene razón", words: ["Por", "muy", "loco", "que", "parezca", "tiene", "razón", "parece"] },
        { type: "syntax", turkish: "Ona aşık değilim, kaldı ki çok yakışıklı.", spanish: "No estoy enamorada de él y eso que es muy guapo", words: ["No", "estoy", "enamorada", "de", "él", "y", "eso", "que", "es", "muy", "guapo"] },
        { type: "syntax", turkish: "Zamanın olmadığını bile bile beni aradın.", spanish: "Me llamaste a sabiendas de que no tenía tiempo", words: ["Me", "llamaste", "a", "sabiendas", "de", "que", "no", "tenía", "tiempo"] },
        { type: "syntax", turkish: "Ne kadar zengin olursa olsun fakir ölecek.", spanish: "Por muy rico que sea morirá pobre", words: ["Por", "muy", "rico", "que", "sea", "morirá", "pobre"] },
        { type: "syntax", turkish: "Ne kadar çok ağlasan da fikrimi (de opinión) değiştirmeyeceğim.", spanish: "Por mucho que llores no cambiaré de opinión", words: ["Por", "mucho", "que", "llores", "no", "cambiaré", "de", "opinión", "lloras"] }
      ]
    },
    {
      id: "c1_u7_n8",
      type: "theory",
      title: "Teoría III: Por Poco Que & Por Mucho Que",
      content: {
        concept: "Mientras que 'Por muy' se usa con adjetivos, si queremos enfatizar la **CANTIDAD** de una acción, usamos 'Mucho' o 'Poco'.\n\n### 1. POR MUCHO QUE + Verbo (Ne kadar çok ...-sa da)\n• *Por mucho que ESTUDIE, no aprueba.* (Ne kadar çok çalışsa da geçemiyor - indiferencia de la cantidad).\n\n### 2. POR POCO QUE + Verbo (Ne kadar az ...-sa da / Birazcık bile ...-sa)\nSignifica que incluso una cantidad diminuta de la acción será suficiente para detonar una consecuencia.\n• *Por poco que DUERMA, me levanto con energía.* (Ne kadar az uyusam da / Azıcık bile uyusam, enerjiyle kalkarım).\n• *Por poco que LEAS, mejorarás tu español.* (Çok az bile okusan, İspanyolcanı geliştireceksin).\n\nAmbas estructuras rigen **Subjuntivo** cuando el grado exacto de la acción es desconocido o indiferente para el resultado.",
        examples: [
          { es: "Por mucho que grites, no te van a oír.", tr: "Ne kadar çok bağırsan da seni duymayacaklar." },
          { es: "Por poco que ahorres cada mes, al final tendrás un buen fondo.", tr: "Her ay ne kadar az biriktirsen de, sonunda iyi bir fonun olacak." }
        ]
      }
    },
    {
      id: "c1_u7_n9",
      type: "theory",
      title: "Sintaxis Visual: La Contradicción Absoluta",
      content: {
        concept: "Vamos a analizar una oración donde el hablante expresa una frustración gigante utilizando 'y eso que' con un tiempo compuesto.",
        examples: [{ es: "El banco rechazó mi hipoteca, y eso que yo había entregado todos los documentos.", tr: "Banka ipoteğimi reddetti, üstelik/kaldı ki ben tüm belgeleri teslim etmiştim." }],
        analysis: [
          { word: "El banco rechazó", type: "verb", literal: "Banka reddetti", explanation: "Hecho principal en Pretérito Indefinido. Acción terminada y frustrante.", examples: [] },
          { word: "mi hipoteca,", type: "noun", literal: "ipotek kredimi", explanation: "Objeto directo de la acción principal.", examples: [] },
          { word: "y eso que", type: "connector", literal: "ve o ki (üstelik/kaldı ki)", explanation: "Marcador concesivo coloquial. Introduce un hecho que hace que el rechazo sea ilógico.", examples: [] },
          { word: "yo", type: "pronoun", literal: "ben", explanation: "Sujeto enfático para marcar el contraste de mi esfuerzo contra la respuesta del banco.", examples: [] },
          { word: "había entregado", type: "verb", literal: "teslim etmiştim", explanation: "Verbo en Pluscuamperfecto de Indicativo. Acción anterior al rechazo. (NO es subjuntivo porque entregar los documentos es un hecho real y comprobado).", examples: [] },
          { word: "todos los documentos.", type: "noun", literal: "tüm belgeleri", explanation: "Objeto directo que completa la acción.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u7_n10",
      type: "theory",
      title: "Caja de Herramientas: Resistencia y Terquedad",
      content: {
        concept: "Para hablar de enfrentarse a los imposibles, necesitas este vocabulario de nivel C1 sobre carácter y obstinación.\n\n• **Ser terco / testarudo** (İnatçi olmak)\n• **La obstinación** (İnatçılık)\n• **Dar marcha atrás** (Geri adım atmak)\n• **Rendirse / Darse por vencido** (Pes etmek)\n• **Ser inquebrantable** (Sarsılmaz / Boyun eğmez olmak)\n• **Agotarse** (Tükenmek - recursos o energía)\n• **Advertir de un riesgo** (Bir risk konusunda uyarmak)\n• **Salir adelante** (İlerlemek / Üstesinden gelmek)",
        examples: [
          { es: "Es tan terco que no dará marcha atrás.", tr: "O kadar inatçı ki geri adım atmayacak." },
          { es: "A pesar de todo, ella logró salir adelante.", tr: "Her şeye rağmen, o (kadın) üstesinden gelmeyi başardı." },
          { es: "Te advierto del riesgo a sabiendas de tu terquedad.", tr: "İnatçılığını bile bile seni risk konusunda uyarıyorum." }
        ]
      }
    },
    {
      id: "c1_u7_n11",
      type: "theory",
      title: "Taller de Producción: Una decisión difícil",
      content: {
        concept: "Aplica tu dominio de los obstáculos.\n\n**Instrucciones:**\nEscribe un pequeño relato (10-12 líneas) sobre una persona terca que tomó una decisión arriesgada (cambiar de trabajo, mudarse de país o escalar una montaña).\n\n1. Usa 'Por muy + adjetivo + que' (Ej: Por muy peligroso que fuera...).\n2. Usa 'A sabiendas de que' con indicativo.\n3. Usa 'Y eso que' para añadir una sorpresa o contradicción.\n4. Incluye palabras de la Caja de Herramientas (terco, inquebrantable, dar marcha atrás).\n\n**Inspiración:** 'Carlos era muy terco. Renunció a su empleo a sabiendas de que la economía estaba mal. Por muy loco que pareciera, él no dio marcha atrás, y eso que su jefe le ofreció...'",
        examples: []
      }
    },
    {
      id: "c1_u7_n12",
      type: "exam",
      title: "Examen de Unidad: Aunque el mundo se acabe",
      content: {
        concept: "Demuestra tu precisión milimétrica al elegir entre Indicativo y Subjuntivo en las concesivas más difíciles del idioma.",
        exercises: [
          { type: "multiple_choice", question: "Elige la correcta: Por muy inteligente que ______ (ser), a veces se equivoca (Sé que es muy inteligente).", options: ["es", "sea", "fuera"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: Por muy inteligente que ______ (ser), no lo contrataré (No lo conozco, pero me da igual).", options: ["es", "sea", "fuera"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué modo verbal sigue a 'A sabiendas de que'? (Implica conocimiento real de un hecho).", options: ["Indicativo", "Subjuntivo", "Infinitivo"], correct: 0 },
          { type: "multiple_choice", question: "Compró la empresa a sabiendas de que ______ (estar) en bancarrota.", options: ["esté", "estaba"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Y eso que'?", options: ["Ve o ki (Literal, sin sentido).", "Kaldı ki / Üstelik (Añade una contradicción sorprendente).", "Bu yüzden."], correct: 1 },
          { type: "multiple_choice", question: "No tiene hambre, y eso que no ______ (comer) en todo el día.", options: ["ha comido", "haya comido"], correct: 0 },
          { type: "multiple_choice", question: "Por ______ que estudies, si no duermes, suspenderás (Cantidad).", options: ["muy", "mucho"], correct: 1 },
          { type: "multiple_choice", question: "Por ______ cansado que estés, debes venir (Cualidad/Adjetivo).", options: ["mucho", "muy"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Por poco que hables'?", options: ["Ne kadar az konuşsan da / Birazcık bile konuşsan.", "Hiç konuşmadığın için."], correct: 0 },
          { type: "multiple_choice", question: "Es muy ______, nunca dará marcha atrás.", options: ["terco", "comprensivo", "ingenuo"], correct: 0 },
          { type: "syntax", turkish: "Ne kadar zengin olursa olsun mutlu değil.", spanish: "Por muy rico que sea no es feliz", words: ["Por", "muy", "rico", "que", "sea", "no", "es", "feliz", "esté"] },
          { type: "syntax", turkish: "Bunun yalan olduğunu bile bile söyledi.", spanish: "Lo dijo a sabiendas de que era mentira", words: ["Lo", "dijo", "a", "sabiendas", "de", "que", "era", "mentira", "fuera"] },
          { type: "syntax", turkish: "Sınavı geçtim, üstelik (kaldı ki) çalışmamıştım.", spanish: "Aprobé el examen y eso que no había estudiado", words: ["Aprobé", "el", "examen", "y", "eso", "que", "no", "había", "estudiado"] },
          { type: "syntax", turkish: "Ne kadar az okusan da (Birazcık bile okusan) öğreneceksin.", spanish: "Por poco que leas aprenderás", words: ["Por", "poco", "que", "leas", "aprenderás", "lees"] },
          { type: "syntax", turkish: "Ne kadar çok ağlasan da umrumda değil.", spanish: "Por mucho que llores no me importa", words: ["Por", "mucho", "que", "llores", "no", "me", "importa", "lloras"] },
          { type: "syntax", turkish: "Tehlikeli olduğunu bile bile dağa tırmandı.", spanish: "Escaló la montaña a sabiendas de que era peligroso", words: ["Escaló", "la", "montaña", "a", "sabiendas", "de", "que", "era", "peligroso"] },
          { type: "syntax", turkish: "İspanyolca bilmiyor, kaldı ki İspanya'da yaşıyor.", spanish: "No sabe español y eso que vive en España", words: ["No", "sabe", "español", "y", "eso", "que", "vive", "en", "España", "viva"] },
          { type: "syntax", turkish: "Ne kadar yorgun olursam olayım devam edeceğim.", spanish: "Por muy cansado que esté continuaré", words: ["Por", "muy", "cansado", "que", "esté", "continuaré", "estoy"] },
          { type: "syntax", turkish: "İnatçı olduğunu bile bile onunla evlendim.", spanish: "Me casé con él a sabiendas de que era terco", words: ["Me", "casé", "con", "él", "a", "sabiendas", "de", "que", "era", "terco"] },
          { type: "syntax", turkish: "Ne kadar büyük olursa olsun ondan korkmuyorum.", spanish: "Por muy grande que sea no le tengo miedo", words: ["Por", "muy", "grande", "que", "sea", "no", "le", "tengo", "miedo"] }
        ]
      }
    }
  ]
};
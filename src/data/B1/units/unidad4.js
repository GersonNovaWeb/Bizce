/**
 * UNIDAD 4: EL MUNDO DE LAS IDEAS (NIVEL B1)
 * Enfoque: Subjuntivo vs Indicativo en opiniones, certezas y dudas.
 * Estructura: 12 Nodos Premium.
 */

export const unidad4 = {
  id: "b1_u4",
  title: "Unidad 4: El Mundo de las Ideas",
  description: "Aprende a debatir y expresar tus dudas. Descubre cómo el español cambia matemáticamente cuando niegas una opinión.",
  nodes: [
    {
      id: "b1_u4_n1",
      type: "theory",
      title: "Teoría I: Creer y No Creer",
      content: {
        concept: "Bienvenidos a la regla más matemática del español. Cuando hablamos de nuestras opiniones (Creer, Pensar, Opinar, Parecer), el uso del Subjuntivo depende de una sola palabra: el 'NO'.\n\n### 1. Opinión Afirmativa = INDICATIVO\nCuando declaras lo que crees, estás estableciendo 'tu' realidad. Por lo tanto, usas el verbo normal.\n• **Creo que** Madrid ES hermoso (Madrid'in güzel olduğuna inanıyorum).\n• **Pienso que** tienes razón (Haklı olduğunu düşünüyorum).\n• **Me parece que** va a llover (Bana yağmur yağacakmış gibi geliyor).\n\n### 2. Opinión Negativa = SUBJUNTIVO\nAl poner un 'NO' delante del verbo de pensamiento, destruyes esa realidad. Como ya no es un hecho, se convierte en Subjuntivo.\n• **NO creo que** Madrid SEA hermoso (Madrid'in güzel olduğuna inanmıyorum).\n• **NO pienso que** tengas razón (Haklı olduğunu düşünmıyorum).\n• **NO me parece que** vaya a llover (Bana yağmur yağacakmış gibi gelmiyor).",
        examples: [
          { es: "Creo que él está en casa.", tr: "Onun evde olduğunu sanıyorum (İndikatif)." },
          { es: "No creo que él esté en casa.", tr: "Onun evde olduğunu sanmıyorum (Subjuntif)." },
          { es: "Me parece que es una buena idea.", tr: "Bana iyi bir fikirmiş gibi geliyor." }
        ]
      }
    },
    {
      id: "b1_u4_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (La Opinión)",
      exercises: [
        { type: "syntax", turkish: "Carlos'un haklı olduğunu düşünüyorum.", spanish: "Pienso que Carlos tiene razón", words: ["Pienso", "que", "Carlos", "tiene", "razón", "tenga"] },
        { type: "syntax", turkish: "Carlos'un haklı olduğunu düşünmüyorum.", spanish: "No pienso que Carlos tenga razón", words: ["No", "pienso", "que", "Carlos", "tenga", "razón", "tiene"] },
        { type: "syntax", turkish: "Bunun iyi bir fikir olduğuna inanıyorum.", spanish: "Creo que es una buena idea", words: ["Creo", "que", "es", "una", "buena", "idea", "sea"] },
        { type: "syntax", turkish: "Bunun iyi bir fikir olduğuna inanmıyorum.", spanish: "No creo que sea una buena idea", words: ["No", "creo", "que", "sea", "una", "buena", "idea", "es"] },
        { type: "syntax", turkish: "Bana yalan söylediğini (decir mentiras) sanıyorum.", spanish: "Creo que me dice mentiras", words: ["Creo", "que", "me", "dice", "mentiras", "diga"] },
        { type: "syntax", turkish: "Bana yalan söylediğini sanmıyorum.", spanish: "No creo que me diga mentiras", words: ["No", "creo", "que", "me", "diga", "mentiras", "dice"] },
        { type: "syntax", turkish: "Bana öyle geliyor ki (Me parece que) bugün yağmur yağacak.", spanish: "Me parece que va a llover hoy", words: ["Me", "parece", "que", "va", "a", "llover", "hoy", "vaya"] },
        { type: "syntax", turkish: "Bana bugün yağmur yağacakmış gibi gelmiyor.", spanish: "No me parece que vaya a llover hoy", words: ["No", "me", "parece", "que", "vaya", "a", "llover", "hoy", "va"] },
        { type: "syntax", turkish: "Evde olduklarını düşünüyorum.", spanish: "Pienso que ellos están en casa", words: ["Pienso", "que", "ellos", "están", "en", "casa", "estén"] },
        { type: "syntax", turkish: "Evde olduklarını düşünmüyorum.", spanish: "No pienso que ellos estén en casa", words: ["No", "pienso", "que", "ellos", "estén", "en", "casa", "están"] }
      ]
    },
    {
      id: "b1_u4_n3",
      type: "theory",
      title: "Teoría II: La Duda y la Probabilidad",
      content: {
        concept: "Además de opinar negativamente, hay verbos y palabras diseñadas específicamente para expresar DUDA. Todas ellas **exigen Subjuntivo**.\n\n### 1. El Verbo DUDAR (Şüphe etmek)\nFunciona como 'No creer'. Trae el subjuntivo de inmediato.\n• **Dudo que** Carlos venga a la fiesta (Carlos'un partiye geleceğinden şüpheliyim).\n• **Dudamos que** sea verdad (Bunun doğru olduğundan şüpheliyiz).\n\n### 2. Estar seguro/a (Emin olmak)\nSigue la misma regla matemática de 'Creer'.\n• Estoy seguro de que ES verdad (Eminim - Indicativo).\n• **NO estoy seguro de que** SEA verdad (Emin değilim - Subjuntivo).\n\n### 3. Palabras de Probabilidad (Quizás / Tal vez)\nEstas palabras significan 'Belki' (Quizás, Tal vez, Probablemente). En el nivel B1, te recomendamos usarlas siempre con **Subjuntivo** para sonar más natural y dudar más fuerte.\n• **Quizás** llueva mañana (Belki yarın yağmur yağar).\n• **Tal vez** vayamos al cine (Belki sinemaya gideriz).",
        examples: [
          { es: "Dudo que tengas tiempo para esto.", tr: "Bunun için vaktin olduğundan şüpheliyim." },
          { es: "No estamos seguros de que el banco esté abierto.", tr: "Bankanın açık olduğundan emin değiliz." },
          { es: "Quizás compre un coche nuevo.", tr: "Belki yeni bir araba alırım." }
        ]
      }
    },
    {
      id: "b1_u4_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Dudas)",
      exercises: [
        { type: "speaking", spanish: "Dudo que sea verdad", turkish: "Onun doğru olduğundan şüpheliyim." },
        { type: "speaking", spanish: "Quizás vayamos al parque", turkish: "Belki parka gideriz." },
        { type: "speaking", spanish: "No estoy seguro de que funcione", turkish: "Bunun işe yaradığından emin değilim." },
        { type: "speaking", spanish: "Tal vez llueva esta tarde", turkish: "Belki bu öğleden sonra yağmur yağar." },
        { type: "speaking", spanish: "Dudamos que ellos tengan dinero", turkish: "Onların parası olduğundan şüpheliyiz." },
        { type: "speaking", spanish: "No creo que entiendas el problema", turkish: "Problemi anladığını sanmıyorum." },
        { type: "speaking", spanish: "Quizás compre ese libro", turkish: "Belki o kitabı alırım." },
        { type: "speaking", spanish: "Dudo que lleguemos a tiempo", turkish: "Zamanında varacağımızdan şüpheliyim." },
        { type: "speaking", spanish: "No estoy segura de que esté abierto", turkish: "Açık olduğundan emin değilim (kadın)." },
        { type: "speaking", spanish: "Tal vez hablemos mañana", turkish: "Belki yarın konuşuruz." }
      ]
    },
    {
      id: "b1_u4_n5",
      type: "theory",
      title: "El Reto Turco: La Trampa del 'Creo que no'",
      content: {
        concept: "¡ATENCIÓN! Aquí es donde la mente turca (y la inglesa) entra en cortocircuito con el español.\n\nEn turco, usas la palabra 'Bence' (Según yo) y luego niegas la acción: *'Bence gelmeyecek'* (Creo que no vendrá).\n\nEn español, el orden del 'NO' lo cambia TODO:\n\n**Opción 1: Negar el verbo de opinión (Subjuntivo)**\nDestruyes tu propia creencia. Usas Subjuntivo.\n• **NO CREO QUE** venga (Geleceğini sanmıyorum - Şüpheliyim).\n\n**Opción 2: Negar la acción (Indicativo)**\nTú SÍ tienes una creencia fuerte, y tu creencia es que algo NO va a pasar. Como tu creencia es firme, usas Indicativo.\n• **CREO QUE NO** viene (Gelmeyeceğine inanıyorum / Bence gelmiyor).\n\n🇹🇷 CONSEJO: 'No creo que' = Şüpheliyim (Duda = Subjuntivo). 'Creo que no' = Bence öyle değil (Opinión firme = Indicativo).",
        examples: [
          { es: "No creo que llueva. (Duda: Subjuntivo)", tr: "Yağmur yağacağını sanmıyorum." },
          { es: "Creo que no llueve. (Opinión firme: Indicativo)", tr: "Bence yağmur yağmıyor." },
          { es: "No pienso que sea caro. (Duda: Subjuntivo)", tr: "Pahalı olduğunu düşünmüyorum." }
        ]
      }
    },
    {
      id: "b1_u4_n6",
      type: "reading",
      title: "Lectura y Audio: El Debate de las Fake News",
      content: {
        text: "Javier y Elena están mirando sus teléfonos en una cafetería y debatiendo sobre una noticia que han visto en internet.\n\n— Javier: Oye, ¿has visto esto? Dicen que el gobierno va a prohibir los coches en el centro de la ciudad.\n— Elena: Mmm... no creo que esa noticia sea verdad. Me parece que es una 'fake news'.\n— Javier: Pues yo pienso que es muy posible. La contaminación es terrible. Creo que es una medida necesaria.\n— Elena: Tal vez tengas razón en lo de la contaminación, pero dudo que el alcalde haga algo tan extremo. Además, no estoy segura de que la gente acepte esa regla tan fácilmente.\n— Javier: Quizás al principio se quejen, pero creo que no tienen otra opción. \n— Elena: Bueno, yo creo que no lo veremos pronto. No pienso que estemos preparados para algo así.",
        translation: "Javier ve Elena bir kafede telefonlarına bakıyorlar ve internette gördükleri bir haber üzerine tartışıyorlar.\n\n— Javier: Baksana, bunu gördün mü? Hükümetin şehir merkezinde arabaları yasaklayacağını söylüyorlar.\n— Elena: Mmm... bu haberin doğru olduğunu sanmıyorum. Bana yalan haber (fake news) gibi geliyor.\n— Javier: Bence bu çok olası. Kirlilik korkunç. Bunun gerekli bir önlem olduğuna inanıyorum.\n— Elena: Kirlilik konusunda belki haklısındır ama belediye başkanının bu kadar aşırı bir şey yapacağından şüpheliyim. Ayrıca insanların bu kuralı bu kadar kolay kabul edeceğinden emin değilim.\n— Javier: Belki başta şikayet ederler ama bence başka seçenekleri yok (İndikatif).\n— Elena: Şey, bence bunu yakında görmeyeceğiz (İndikatif). Böyle bir şeye hazır olduğumuzu düşünmüyorum."
      }
    },
    {
      id: "b1_u4_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis y Decisiones)",
      exercises: [
        { type: "syntax", turkish: "Haberin doğru olduğunu sanmıyorum.", spanish: "No creo que la noticia sea verdad", words: ["No", "creo", "que", "la", "noticia", "sea", "verdad", "es"] },
        { type: "syntax", turkish: "Bence haber doğru değil.", spanish: "Creo que la noticia no es verdad", words: ["Creo", "que", "la", "noticia", "no", "es", "verdad", "sea"] },
        { type: "syntax", turkish: "Başkanın bunu yapacağından şüpheliyim.", spanish: "Dudo que el alcalde haga esto", words: ["Dudo", "que", "el", "alcalde", "haga", "esto", "hace"] },
        { type: "syntax", turkish: "Belki yarın yağmur yağar.", spanish: "Tal vez llueva mañana", words: ["Tal", "vez", "llueva", "mañana", "llueve"] },
        { type: "syntax", turkish: "Buna hazır olduğumuzu düşünmüyorum.", spanish: "No pienso que estemos preparados para esto", words: ["No", "pienso", "que", "estemos", "preparados", "para", "esto", "estamos"] },
        { type: "speaking", spanish: "No creo que la noticia sea verdad", turkish: "Haberin doğru olduğunu sanmıyorum." },
        { type: "speaking", spanish: "Creo que la noticia no es verdad", turkish: "Bence haber doğru değil." },
        { type: "speaking", spanish: "Dudo que el alcalde haga esto", turkish: "Başkanın bunu yapacağından şüpheliyim." },
        { type: "speaking", spanish: "Tal vez llueva mañana", turkish: "Belki yarın yağmur yağar." },
        { type: "speaking", spanish: "No estoy seguro de que funcione", turkish: "İşe yaradığından emin değilim." }
      ]
    },
    {
      id: "b1_u4_n8",
      type: "theory",
      title: "Laboratorio de Slang: Mostrar Desacuerdo",
      content: {
        concept: "En el mundo real, no siempre decimos 'No creo que sea verdad'. A veces somos más emocionales. Aquí tienes expresiones nativas para mostrar incredulidad o desacuerdo en un debate.\n\n### Expresiones de Incredulidad (Duda total):\n• **¡Qué va!** (Yok canım! / Hadi oradan!) ➔ Se usa para negar rotundamente lo que alguien acaba de decir.\n• **¿Estás de coña?** (Şaka mı yapıyorsun? / Dalga mı geçiyorsun?) ➔ Muy coloquial en España.\n• **Ni de broma** (Şakası bile olmaz / Asla) ➔ Para decir que algo es imposible.\n\n### Formas nativas de opinar:\n• **Para mí que...** (Bana öyle geliyor ki...) ➔ Sustituye a 'Yo creo que'. Lleva Indicativo porque es tu opinión afirmativa. *'Para mí que Carlos no viene'.*\n• **Estar de acuerdo** (Aynı fikirde olmak). *'No estoy de acuerdo contigo'.*",
        examples: [
          { es: "— El examen será fácil. — ¡Qué va! Será muy difícil.", tr: "— Sınav kolay olacak. — Yok canım! Çok zor olacak." },
          { es: "— Te vendo mi coche por un millón de euros. — ¿Estás de coña?", tr: "— Arabamı sana bir milyon euroya satıyorum. — Dalga mı geçiyorsun?" },
          { es: "Para mí que esta noticia es falsa.", tr: "Bana öyle geliyor ki bu haber sahte." }
        ]
      }
    },
    {
      id: "b1_u4_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: Negación Compleja",
      content: {
        concept: "Vamos a deconstruir una frase compleja donde la opinión negativa afecta a un verbo auxiliar y a un pronombre.",
        examples: [{ es: "Sinceramente, yo no creo que ellos te digan la verdad hoy.", tr: "Dürüst olmak gerekirse, onların bugün sana gerçeği söyleyeceklerini sanmıyorum." }],
        analysis: [
          { word: "Sinceramente", type: "adverb", literal: "Dürüstçe", explanation: "Adverbio de modo que introduce el tono de la opinión.", examples: [] },
          { word: "yo no creo", type: "verb", literal: "ben sanmıyorum", explanation: "Negación del verbo de opinión. Es la señal que dispara el subjuntivo.", examples: [] },
          { word: "que", type: "connector", literal: "ki", explanation: "El puente conector.", examples: [] },
          { word: "ellos", type: "pronoun", literal: "onlar", explanation: "Sujeto de la acción dudosa.", examples: [] },
          { word: "te", type: "pronoun", literal: "sana", explanation: "Pronombre de objeto indirecto. Va antes del verbo subordinado.", examples: [] },
          { word: "digan", type: "verb", literal: "söyleyeceklerini (subjuntivo)", explanation: "Verbo DECIR en Presente de Subjuntivo (Terminación 'an' de verbos irregulares GO).", examples: [] },
          { word: "la verdad", type: "noun", literal: "gerçek / doğru", explanation: "Objeto directo.", examples: [] },
          { word: "hoy", type: "adverb", literal: "bugün", explanation: "Marcador temporal.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u4_n10",
      type: "theory",
      title: "Caja de Herramientas: Redes y Debates",
      content: {
        concept: "Para debatir sobre lo que pasa en el mundo, necesitas este vocabulario moderno de nivel B1.\n\n### Vocabulario de Debate:\n• **El debate** (Tartışma / Münazara)\n• **Estar de acuerdo** (Aynı fikirde olmak)\n• **Equivocarse** (Yanılmak / Hata yapmak) ➔ *Creo que te equivocas.*\n• **Tener razón** (Haklı olmak)\n• **El argumento** (Argüman)\n\n### Vocabulario de Información:\n• **La noticia** (Haber)\n• **El periódico** (Gazete)\n• **Las redes sociales** (Sosyal medya)\n• **El rumor** (Söylenti)\n• **Falso / Verdadero** (Sahte / Doğru)\n• **La pantalla** (Ekran)",
        examples: [
          { es: "No estoy de acuerdo con tu argumento.", tr: "Senin argümanınla aynı fikirde değilim." },
          { es: "Dudo que esa noticia de las redes sociales sea cierta.", tr: "Sosyal medyadaki o haberin doğru olduğundan şüpheliyim." },
          { es: "Creo que te equivocas. Él tiene razón.", tr: "Bence yanılıyorsun. O haklı." }
        ]
      }
    },
    {
      id: "b1_u4_n11",
      type: "theory",
      title: "Taller de Producción: Tu Opinión Importa",
      content: {
        concept: "Ha llegado tu momento de debatir en español.\n\n**Instrucciones:**\nLee la siguiente afirmación: *'Las redes sociales son malas para la sociedad porque están llenas de noticias falsas'.*\n\nEscribe un párrafo (mínimo 6-8 líneas) dando tu opinión sobre este tema.\n1. Usa al menos una vez 'Creo que / Pienso que' (con Indicativo).\n2. Usa al menos una vez 'No creo que / Dudo que' (con Subjuntivo).\n3. Usa la expresión 'Estar de acuerdo' o 'Equivocarse'.\n4. Usa un conector como 'Sin embargo' o 'Además'.\n\n**Inspiración:** 'En parte, estoy de acuerdo con esa frase. Creo que las redes sociales son peligrosas, pero no creo que todo sea malo. Dudo que la gente...'",
        examples: []
      }
    },
    {
      id: "b1_u4_n12",
      type: "exam",
      title: "Examen de Unidad: El Mundo de las Ideas",
      content: {
        concept: "Demuestra que dominas la regla matemática de la opinión: Indicativo para afirmar, Subjuntivo para negar y dudar.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Elige la correcta: 'Pienso que nosotros ______ (tener) la razón'.", options: ["tenemos", "tengamos", "teniendo"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: 'NO pienso que nosotros ______ (tener) la razón'.", options: ["tenemos", "tengamos", "tener"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Dudo que...'?", options: ["Umarım...", "Bence...", "Şüpheliyim ki..."], correct: 2 },
          { type: "multiple_choice", question: "Dudamos que el presidente ______ (decir) la verdad.", options: ["diga", "dice", "decir"], correct: 0 },
          { type: "multiple_choice", question: "Estoy seguro de que ______ (ser) un buen plan (¡Certeza!).", options: ["sea", "es", "está"], correct: 1 },
          { type: "multiple_choice", question: "No estoy seguro de que ______ (ser) un buen plan.", options: ["sea", "es", "está"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué modo verbal solemos usar después de 'Quizás' o 'Tal vez'?", options: ["Infinitivo", "Subjuntivo", "Imperativo"], correct: 1 },
          { type: "multiple_choice", question: "Quizás él ______ (venir) a la fiesta más tarde.", options: ["venga", "viene", "venir"], correct: 0 },
          { type: "multiple_choice", question: "La trampa turca: 'Creo que NO llueve'. El verbo está en:", options: ["Subjuntivo, porque hay un 'no'.", "Indicativo, porque el 'no' niega la lluvia, pero la creencia es firme."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa '¡Qué va!'?", options: ["Yok canım! (Desacuerdo)", "Ne güzel! (Alegría)", "Ne kadar gidiyor? (Distancia)"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Equivocarse'?", options: ["Haklı olmak", "Aynı fikirde olmak", "Yanılmak / Hata yapmak"], correct: 2 },
          { type: "multiple_choice", question: "'Para mí que ella no ______ (saber) nada' (Coloquial = Yo creo que).", options: ["sepa", "sabe"], correct: 1 },
          { type: "multiple_choice", question: "No creo que me ______ (entender).", options: ["entiendes", "entiendas"], correct: 1 },
          { type: "multiple_choice", question: "Creo que él se ______ (equivocar).", options: ["equivoca", "equivoque"], correct: 0 },
          { type: "multiple_choice", question: "Tal vez nosotros ______ (poder) ayudar.", options: ["podemos", "podamos"], correct: 1 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Bunun iyi bir fikir olduğuna inanıyorum.", spanish: "Creo que es una buena idea", words: ["Creo", "que", "es", "una", "buena", "idea", "sea"] },
          { type: "syntax", turkish: "Bunun iyi bir fikir olduğuna inanmıyorum.", spanish: "No creo que sea una buena idea", words: ["No", "creo", "que", "sea", "una", "buena", "idea", "es"] },
          { type: "syntax", turkish: "Seninle aynı fikirde değilim.", spanish: "No estoy de acuerdo contigo", words: ["No", "estoy", "de", "acuerdo", "contigo", "conmigo"] },
          { type: "syntax", turkish: "Haklı olduğundan şüpheliyim.", spanish: "Dudo que tengas razón", words: ["Dudo", "que", "tengas", "razón", "tienes"] },
          { type: "syntax", turkish: "Belki yarın yağmur yağar.", spanish: "Tal vez llueva mañana", words: ["Tal", "vez", "llueva", "mañana", "llueve"] },
          { type: "syntax", turkish: "Bence sen yanılıyorsun (Indicativo).", spanish: "Creo que te equivocas", words: ["Creo", "que", "te", "equivocas", "equivoques"] },
          { type: "syntax", turkish: "Haberin doğru olduğuna inanmıyorum.", spanish: "No creo que la noticia sea verdad", words: ["No", "creo", "que", "la", "noticia", "sea", "verdad", "es"] },
          { type: "syntax", turkish: "Bence haber doğru değil.", spanish: "Creo que la noticia no es verdad", words: ["Creo", "que", "la", "noticia", "no", "es", "verdad", "sea"] },
          { type: "syntax", turkish: "Bunun işe yaradığından (funcionar) emin değilim.", spanish: "No estoy seguro de que funcione", words: ["No", "estoy", "seguro", "de", "que", "funcione", "funciona"] },
          { type: "syntax", turkish: "Sosyal medyanın (redes sociales) tehlikeli olduğunu düşünüyorum.", spanish: "Pienso que las redes sociales son peligrosas", words: ["Pienso", "que", "las", "redes", "sociales", "son", "peligrosas", "sean"] },
          { type: "syntax", turkish: "Onların (erkekler) geleceğinden şüpheliyiz.", spanish: "Dudamos que ellos vengan", words: ["Dudamos", "que", "ellos", "vengan", "vienen"] },
          { type: "syntax", turkish: "Belki bir araba satın alırız.", spanish: "Quizás compremos un coche", words: ["Quizás", "compremos", "un", "coche", "compramos"] },
          { type: "syntax", turkish: "Bana öyle geliyor ki (Para mí que) sen haklısın.", spanish: "Para mí que tienes razón", words: ["Para", "mí", "que", "tienes", "razón", "tengas"] },
          { type: "syntax", turkish: "Yok canım! Şaka mı yapıyorsun?", spanish: "Qué va estás de coña", words: ["Qué", "va", "estás", "de", "coña", "broma"] },
          { type: "syntax", turkish: "Onun (kadın) gerçeği söylediğini sanmıyorum.", spanish: "No creo que ella diga la verdad", words: ["No", "creo", "que", "ella", "diga", "la", "verdad", "dice"] }
        ]
      }
    }
  ]
};
/**
 * UNIDAD 1 - NIVEL B2: EL COMUNICADOR INDEPENDIENTE
 * Foco: Hipótesis del Presente (Si + Imperfecto Subjuntivo + Condicional Simple)
 */

export const unidad1 = {
  id: "b2_u1",
  title: "Unidad 1: ¿Qué pasaría si...?",
  description: "Explora realidades alternativas. Domina la arquitectura de la hipótesis y el Imperfecto de Subjuntivo de alta densidad.",
  nodes: [
    {
      id: "b2_u1_n1",
      type: "theory",
      title: "Teoría I: El Origen del Imperfecto de Subjuntivo",
      content: {
        concept: "Para hablar en B2, el **Pretérito Imperfecto de Subjuntivo** es tu mejor herramienta. No solo habla del pasado, sino de situaciones que consideramos poco probables o imposibles en el presente.\n\n### La Regla Maestra de Formación\nPara conjugar cualquier verbo (regular o irregular), siempre debes mirar la 3ª persona plural (Ellos) del **Pasado Indefinido** y quitar la terminación '-RON'.\n\n• **Hablar** ➔ Hablaron ➔ **Habla-**\n• **Comer** ➔ Comieron ➔ **Comie-**\n• **Ir/Ser** ➔ Fueron ➔ **Fue-**\n\nSobre esa raíz, añadimos las terminaciones del B2:\n• Yo **-ra** / Tú **-ras** / Él **-ra**\n• Nosotros **-ramos** (¡Ojo! Siempre lleva tilde en la vocal anterior)\n• Ellos **-ran**",
        examples: [
          { es: "Si yo hablara turco perfectamente...", tr: "Eğer mükemmel Türkçe konuşsaydım..." },
          { es: "Si nosotros tuviéramos más tiempo...", tr: "Eğer daha fazla vaktimiz olsaydı..." },
          { es: "Si tú fueras mi jefe...", tr: "Eğer sen benim patronum olsaydın..." }
        ]
      }
    },
    {
      id: "b2_u1_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Hipótesis)",
      exercises: [
        { type: "syntax", turkish: "Param olsaydı bir ev alırdım.", spanish: "Si tuviera dinero compraría una casa", words: ["Si", "tuviera", "dinero", "compraría", "una", "casa", "tenía"] },
        { type: "syntax", turkish: "Zengin olsaydın ne yapardın?", spanish: "Qué harías si fueras rico", words: ["Qué", "harías", "si", "fueras", "rico", "fuiste"] },
        { type: "syntax", turkish: "Güneş açsaydı (hacer sol) dışarı çıkardık.", spanish: "Si hiciera sol saldríamos fuera", words: ["Si", "hiciera", "sol", "saldríamos", "fuera", "hizo"] },
        { type: "syntax", turkish: "Vaktimiz olsaydı gelirdik.", spanish: "Si tuviéramos tiempo vendríamos", words: ["Si", "tuviéramos", "tiempo", "vendríamos", "vinieramos"] },
        { type: "syntax", turkish: "Gerçeği bilseydim sana söylerdim.", spanish: "Si supiera la verdad te lo diría", words: ["Si", "supiera", "la", "verdad", "te", "lo", "diría", "sabía"] },
        { type: "syntax", turkish: "Yerinde olsam bunu yapmazdım.", spanish: "Si fuera tú no lo haría", words: ["Si", "fuera", "tú", "no", "lo", "haría", "sería"] },
        { type: "syntax", turkish: "İspanyolca konuşsaydık Madrid'de yaşardık.", spanish: "Si habláramos español viviríamos en Madrid", words: ["Si", "habláramos", "español", "viviríamos", "en", "Madrid"] },
        { type: "syntax", turkish: "Görünmez olsaydın (ser invisible) ne çalardın?", spanish: "Qué robarías si fueras invisible", words: ["Qué", "robarías", "si", "fueras", "invisible", "fuiste"] },
        { type: "syntax", turkish: "Seninle gelseydim mutlu olurdum.", spanish: "Sería feliz si fuera contigo", words: ["Sería", "feliz", "si", "fuera", "contigo", "iba"] },
        { type: "syntax", turkish: "Bunu bilselerdi çok kızarlardı (enfadarse).", spanish: "Si lo supieran se enfadarían mucho", words: ["Si", "lo", "supieran", "se", "enfadarían", "mucho", "sabían"] }
      ]
    },
    {
      id: "b2_u1_n3",
      type: "theory",
      title: "Teoría II: Raíces Fuertes e Irrealidad",
      content: {
        concept: "En el nivel B2, no solo usamos el subjuntivo para condiciones con 'Si'. También lo usamos para expresar deseos que sabemos que NO se van a cumplir en el presente.\n\n### 1. El deseo imposible (Ojalá)\n• **Ojalá + Presente Subjuntivo:** Deseo posible (Ojalá llueva).\n• **Ojalá + Imperfecto Subjuntivo:** Deseo casi imposible o frustrado (Ojalá lloviera café).\n\n### 2. Los Verbos Rebeldes\nRecuerda las raíces irregulares que aprendiste en el A2, porque aquí vuelven con fuerza:\n• **Decir** ➔ Dijera\n• **Traer** ➔ Trajera\n• **Venir** ➔ Viniera\n• **Saber** ➔ Supiera\n• **Poder** ➔ Pudiera\n• **Poner** ➔ Pusiera",
        examples: [
          { es: "¡Ojalá pudiera volar!", tr: "Keşke uçabilseydim!" },
          { es: "¡Ojalá estuviéramos en la playa ahora!", tr: "Keşke şu an plajda olsaydık!" },
          { es: "¡Quién supiera la respuesta!", tr: "Keşke cevabı bilseydim (kim bilseydi)!" }
        ]
      }
    },
    {
      id: "b2_u1_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (La Especulación)",
      exercises: [
        { type: "speaking", spanish: "Si tuviera alas volaría muy alto", turkish: "Kanatlarım olsaydı çok yükseğe uçardım." },
        { type: "speaking", spanish: "Ojalá hoy fuera viernes por la tarde", turkish: "Keşke bugün cuma öğleden sonra olsaydı." },
        { type: "speaking", spanish: "Si supieras cuánto te quiero llorarías", turkish: "Seni ne kadar sevdiğimi bilseydin ağlardın." },
        { type: "speaking", spanish: "Yo que tú no compraría ese coche", turkish: "Senin yerinde olsam o arabayı almazdım." },
        { type: "speaking", spanish: "Si hiciéramos un esfuerzo lo lograríamos", turkish: "Bir çaba gösterseydik onu başarırdık." },
        { type: "speaking", spanish: "Ojalá pudiera hablar diez idiomas", turkish: "Keşke on dil konuşabilseydim." },
        { type: "speaking", spanish: "Si vinieras conmigo te daría un regalo", turkish: "Benimle gelseydin sana bir hediye verirdim." },
        { type: "speaking", spanish: "Qué harías si no tuvieras miedo", turkish: "Korkun olmasaydı ne yapardın?" }
      ]
    },
    {
      id: "b2_u1_n5",
      type: "theory",
      title: "El Reto Turco: -Sa vs. La Balanza Española",
      content: {
        concept: "En turco, el sufijo **-se / -sa** es muy versátil. En español, somos más rígidos con la 'Balanza de la Irrealidad'.\n\n### La Balanza de Pesos:\nPara que una hipótesis sea correcta en B2, los platos de la balanza deben pesar igual:\n\n• **Plato A (Condición):** Subjuntivo Imperfecto (Si tuviera...)\n• **Plato B (Resultado):** Condicional Simple (...compraría).\n\n⚠️ **ERROR COMÚN:** Muchos estudiantes turcos dicen: 'Si tuviera dinero, *compro* una casa'. Usar el presente en el resultado destruye la hipótesis. Debes usar el condicional (-ía) para mantener el mundo imaginario.\n\n🇹🇷 *Param olsaydı, ev alırdım.* \n(Olsaydı = Tuviera) + (Alırdım = Compraría).",
        examples: [
          { es: "Si me escucharas, no tendrías problemas.", tr: "Beni dinleseydin, problemin olmazdı." },
          { es: "Si viviéramos en el bosque, seríamos felices.", tr: "Ormanda yaşasaydık, mutlu olurduk." }
        ]
      }
    },
    {
      id: "b2_u1_n6",
      type: "reading",
      title: "Lectura Crítica: Dilemas Éticos en la Era Moderna",
      content: {
        text: "Imagina por un momento que el mundo cambiara sus reglas. Si tú pudieras elegir entre tener todo el dinero del mundo o tener salud eterna para toda tu familia, ¿qué elegirías? Muchas personas dicen que si fueran inmensamente ricas, no tendrían preocupaciones, pero dudo que la felicidad fuera tan sencilla de comprar.\n\nSi la inteligencia artificial controlara todas nuestras decisiones, ¿seríamos realmente libres? Algunos expertos afirman que si dejáramos el poder en manos de las máquinas, el mundo sería más justo. Sin embargo, si perdiéramos nuestra capacidad de equivocarnos, quizás también perderíamos nuestra humanidad. Ojalá encontráramos un equilibrio antes de que fuera demasiado tarde.",
        translation: "Bir an için dünyanın kurallarını değiştirdiğini hayal edin. Dünyadaki tüm paraya sahip olmakla tüm aileniz için sonsuz sağlık arasında bir seçim yapabilseydiniz, hangisini seçerdiniz? Pek çok insan, eğer çok zengin olsalardı hiçbir endişeleri olmayacağını söylüyor, ancak mutluluğun bu kadar kolay satın alınabileceğinden şüpheliyim.\n\nEğer yapay zeka tüm kararlarımızı kontrol etseydi, gerçekten özgür olur muyduk? Bazı uzmanlar, gücü makinelerin ellerine bıraksaydık dünyanın daha adil olacağını iddia ediyor. Ancak, hata yapma yeteneğimizi kaybetseydik, belki de insanlığımızı da kaybederdik. Keşke çok geç olmadan bir denge bulabilseydik."
      }
    },
    {
      id: "b2_u1_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto B2 (Alta Densidad)",
      exercises: [
        { type: "syntax", turkish: "Gücü makinelerin eline bıraksaydık (Dejar) dünya daha adil olurdu.", spanish: "Si dejáramos el poder en manos de las máquinas el mundo sería más justo", words: ["Si", "dejáramos", "el", "poder", "en", "manos", "de", "las", "máquinas", "el", "mundo", "sería", "más", "justo"] },
        { type: "syntax", turkish: "Sağlık ve para arasında seçim yapabilseydim...", spanish: "Si pudiera elegir entre salud y dinero", words: ["Si", "pudiera", "elegir", "entre", "salud", "y", "dinero", "puedo"] },
        { type: "syntax", turkish: "Hata yapma yeteneğimizi kaybetseydik (Perder)...", spanish: "Si perdiéramos nuestra capacidad de equivocarnos", words: ["Si", "perdiéramos", "nuestra", "capacidad", "de", "equivocarnos", "perdimos"] },
        { type: "syntax", turkish: "Keşke bir denge bulsaydık!", spanish: "Ojalá encontráramos un equilibrio", words: ["Ojalá", "encontráramos", "un", "equilibrio", "encontramos"] },
        { type: "speaking", spanish: "Si yo fuera tú hablaría con el director", turkish: "Senin yerinde olsam müdürle konuşurdum." },
        { type: "speaking", spanish: "Qué pasaría si el sol no saliera mañana", turkish: "Yarın güneş doğmasaydı ne olurdu?" },
        { type: "speaking", spanish: "Si tuviera más tiempo libre aprendería a pintar", turkish: "Daha fazla boş vaktim olsaydı resim yapmayı öğrenirdim." },
        { type: "speaking", spanish: "Ojalá supiéramos qué va a pasar en el futuro", turkish: "Keşke gelecekte ne olacağını bilseydik." }
      ]
    },
    {
      id: "b2_u1_n8",
      type: "theory",
      title: "Teoría III: Consejos y Envidia Sana",
      content: {
        concept: "Usamos el Imperfecto de Subjuntivo en dos estructuras sociales muy comunes en el nivel B2:\n\n### 1. Dar consejos con empatía\n• **Yo que tú / Yo en tu lugar...** + Condicional.\n*Ej: Yo que tú, no le **creería**.* (Senin yerinde olsam ona inanmazdım).\n\n### 2. Envidia Sana o Admiración\n• **¡Quién + Subj. Imperfecto!** \nSe usa para decir 'Keşke ben de ... olsaydım'.\n*Ej: ¡Quién FUERA tú para vivir en Hawai!* (Hawaii'de yaşamak için keşke senin yerinde olsaydım!).\n*Ej: ¡Quién TUVIERA tu inteligencia!* (Keşke senin zekana sahip olsaydım!).",
        examples: [
          { es: "¡Quién supiera cocinar como mi abuela!", tr: "Keşke babaannem gibi yemek yapmayı bilseydim!" },
          { es: "Yo en tu lugar, me pondría las pilas.", tr: "Senin yerinde olsam enerji toplardım (çalışmaya koyulurdum)." }
        ]
      }
    },
    {
      id: "b2_u1_n9",
      type: "theory",
      title: "Sintaxis Visual: Deconstrucción de la Hipótesis Larga",
      content: {
        concept: "Analizaremos una frase de nivel profesional donde la hipótesis depende de un verbo irregular y un pronombre reflexivo.",
        examples: [{ es: "Si tú te pusieras en mi lugar, entenderías por qué tomé esa decisión.", tr: "Kendini benim yerime koysaydın, neden o kararı aldığımı anlardın." }],
        analysis: [
          { word: "Si tú", type: "connector", literal: "Eğer sen", explanation: "Inicio de la condición.", examples: [] },
          { word: "te pusieras", type: "verb", literal: "koysaydın", explanation: "Verbo PONERSE en Imperfecto de Subjuntivo. Irregular (Pus-). Es la base imaginaria del consejo.", examples: [] },
          { word: "en mi lugar", type: "noun", literal: "benim yerime", explanation: "Complemento de posición figurada.", examples: [] },
          { word: "entenderías", type: "verb", literal: "anlardın", explanation: "Verbo ENTENDER en Condicional Simple. Es la consecuencia lógica del escenario imaginario.", examples: [] },
          { word: "por qué tomé", type: "verb", literal: "neden aldığımı", explanation: "Interrogativa indirecta en pasado (Indefinido).", examples: [] },
          { word: "esa decisión", type: "noun", literal: "o kararı", explanation: "Objeto directo final.", examples: [] }
        ]
      }
    },
    {
      id: "b2_u1_n10",
      type: "theory",
      title: "Caja de Herramientas: Ética y Filosofía",
      content: {
        concept: "Para argumentar en B2, necesitas palabras que describan valores y dilemas.\n\n• **El dilema** (İkilem)\n• **La moralidad** (Ahlak)\n• **Los valores** (Değerler)\n• **La justicia** (Adalet)\n• **Arriesgarse** (Risk almak)\n• **Arrepentirse** (Pişman olmak) ➔ *Me arrepentiría si no lo hiciera.*\n• **La consecuencia** (Sonuç)\n• **Ser honesto/a** (Dürüst olmak)\n• **La utopía** (Ütopya)",
        examples: [
          { es: "Sería una utopía pensar que no habrá más guerras.", tr: "Artık savaş olmayacağını düşünmek bir ütopya olurdu." },
          { es: "Honestamente, yo no me arriesgaría tanto.", tr: "Dürüst olmak gerekirse, ben bu kadar risk almazdım." },
          { es: "Debemos pensar en las consecuencias de nuestros actos.", tr: "Eylemlerimizin sonuçlarını düşünmeliyiz." }
        ]
      }
    },
    {
      id: "b2_u1_n11",
      type: "theory",
      title: "Taller de Producción: Mundos Paralelos",
      content: {
        concept: "Escribe un ensayo corto o un mensaje (mínimo 10-12 líneas) sobre el siguiente tema:\n\n**'¿Cómo cambiaría tu vida si mañana pudieras despertarte hablando español como una nativa?'**\n\n1. Usa al menos 5 verbos en Imperfecto de Subjuntivo (pudiera, supiera, hablara, fuera, tuviera).\n2. Usa el Condicional Simple para describir los cambios en tu trabajo o vida social.\n3. Usa la expresión 'Yo que tú...' o '¡Quién fuera...!'.\n4. Envía el texto para revisión del profesor.",
        examples: []
      }
    },
    {
      id: "b2_u1_n12",
      type: "exam",
      title: "Examen de Unidad 1: Hipótesis B2",
      content: {
        concept: "Prueba técnica de alta densidad sobre la formación y uso del Imperfecto de Subjuntivo y la balanza de hipótesis.",
        exercises: [
          { type: "multiple_choice", question: "¿De qué forma del pasado proviene la raíz del Imperfecto de Subjuntivo?", options: ["Imperfecto (Había)", "Indefinido Ellos (Hablaron)", "Presente (Hablan)"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la forma correcta de 'Saber' para 'Yo'?", options: ["Sabiera", "Supiera", "Sepa"], correct: 1 },
          { type: "multiple_choice", question: "Si yo ______ (ser) tú, no compraría esa casa.", options: ["fui", "era", "fuera"], correct: 2 },
          { type: "multiple_choice", question: "Si nosotros ______ (tener) alas, volaríamos.", options: ["tengamos", "tuviéramos", "teníamos"], correct: 1 },
          { type: "multiple_choice", question: "Ojalá que ______ (llover) mañana (Posible).", options: ["llueva", "lloviera"], correct: 0 },
          { type: "multiple_choice", question: "Ojalá que ______ (llover) café (Imposible).", options: ["llueva", "lloviera"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa '¡Quién fuera tú!'?", options: ["Keşke senin yerinde olsaydım!", "Senin kim olduğunu biliyorum.", "Kim senin yerinde?"], correct: 0 },
          { type: "multiple_choice", question: "Si tú me ______ (decir) la verdad, yo te perdonaría.", options: ["dijeras", "digas", "dijiste"], correct: 0 },
          { type: "multiple_choice", question: "Él actúa como si ______ (ser) el dueño (patrón).", options: ["es", "fuera", "sea"], correct: 1 },
          { type: "multiple_choice", question: "Si ______ (poder - nosotros), iríamos a cenar contigo.", options: ["podamos", "pudiéramos", "podemos"], correct: 1 },
          { type: "syntax", turkish: "Keşke burada olsaydın (Estar).", spanish: "Ojalá estuvieras aquí", words: ["Ojalá", "estuvieras", "aquí", "estás", "fueras"] },
          { type: "syntax", turkish: "Vaktim olsaydı sana yardım ederdim.", spanish: "Si tuviera tiempo te ayudaría", words: ["Si", "tuviera", "tiempo", "te", "ayudaría", "ayudaba"] },
          { type: "syntax", turkish: "Onu bilseydin (Saber) gülerdin.", spanish: "Si lo supieras te reirías", words: ["Si", "lo", "supieras", "te", "reirías", "sabías"] },
          { type: "syntax", turkish: "Görünmez olsaydım (Ser) çok korkardım.", spanish: "Si fuera invisible tendría mucho miedo", words: ["Si", "fuera", "invisible", "tendría", "mucho", "miedo"] },
          { type: "syntax", turkish: "Beni sevseydin (Querer) gitmezdin.", spanish: "Si me quisieras no te irías", words: ["Si", "me", "quisieras", "no", "te", "irías", "querrías"] },
          { type: "syntax", turkish: "Sanki hiçbir şey bilmiyormuş gibi konuşuyor.", spanish: "Habla como si no supiera nada", words: ["Habla", "como", "si", "no", "supiera", "nada", "sabía"] },
          { type: "syntax", turkish: "Piyangoyu kazansak (nosotros) ne yapardık?", spanish: "Qué haríamos si ganáramos la lotería", words: ["Qué", "haríamos", "si", "ganáramos", "la", "lotería"] },
          { type: "syntax", turkish: "İspanya'da yaşasaydık İspanyolca konuşurduk.", spanish: "Si viviéramos en España hablaríamos español", words: ["Si", "viviéramos", "en", "España", "hablaríamos", "español"] },
          { type: "syntax", turkish: "Keşke uçabilseydim!", spanish: "Ojalá pudiera volar", words: ["Ojalá", "pudiera", "volar", "puedo", "podría"] },
          { type: "syntax", turkish: "Daha çok çalışsaydınız (Ustedes) başarılı olurdunuz.", spanish: "Si trabajaran más tendrían éxito", words: ["Si", "trabajaran", "más", "tendrían", "éxito", "trabajan"] }
        ]
      }
    }
  ]
};
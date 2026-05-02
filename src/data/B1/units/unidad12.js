/**
 * UNIDAD 12: SI YO FUERA... (CONDICIONALES IRREALES) - NIVEL B1
 * Enfoque: Estructura Si + Imperfecto de Subjuntivo + Condicional.
 * Estructura: 12 Nodos Premium.
 */

export const unidad12 = {
  id: "b1_u12",
  title: "Unidad 12: Si yo fuera...",
  description: "Aprende a soñar en español. Domina las hipótesis imposibles y los deseos inalcanzables usando el Imperfecto de Subjuntivo.",
  nodes: [
    {
      id: "b1_u12_n1",
      type: "theory",
      title: "Teoría I: El Imperfecto de Subjuntivo",
      content: {
        concept: "Para hablar de mundos imaginarios, necesitamos un tiempo verbal nuevo: el **Pretérito Imperfecto de Subjuntivo**. \n\nEste tiempo nace de la tercera persona plural del pasado Indefinido (Ellos comieron ➔ comie-). \n\n### Conjugación (Las dos opciones son correctas):\nEn español existen dos terminaciones, pero la más común en el día a día es la que termina en **-RA**.\n\n**1. Verbos -AR (Hablar):**\n• Hablara, hablaras, hablara, habláramos, hablaran.\n**2. Verbos -ER / -IR (Comer/Vivir):**\n• Comiera, comieras, comiera, comiéramos, comieran.\n• Viviera, vivieras, viviera, viviéramos, vivieran.\n\n⚠️ ¡DATO IMPORTANTE!: Todos los verbos que eran irregulares en el pasado Indefinido (hicieron, tuvieron, fueron, dijeron) mantienen esa irregularidad aquí: **Hiciera, tuviera, fuera, dijera**.",
        examples: [
          { es: "Si tuviera dinero... (Eğer param olsaydı...)", tr: "Tener -> Tuv-iera" },
          { es: "Si fuera rico... (Eğer zengin olsaydım...)", tr: "Ser -> Fu-era" },
          { es: "Si hiciera sol... (Eğer güneş açsaydı...)", tr: "Hacer -> Hic-iera" }
        ]
      }
    },
    {
      id: "b1_u12_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (La nueva raíz)",
      exercises: [
        { type: "syntax", turkish: "Param olsaydı (Tener).", spanish: "Si tuviera dinero", words: ["Si", "tuviera", "dinero", "tenía", "tuviese"] },
        { type: "syntax", turkish: "Zengin olsaydım (Ser).", spanish: "Si yo fuera rico", words: ["Si", "yo", "fuera", "rico", "fui", "era"] },
        { type: "syntax", turkish: "Vaktim olsaydı.", spanish: "Si tuviera tiempo", words: ["Si", "tuviera", "tiempo", "teniera"] },
        { type: "syntax", turkish: "İspanya'da yaşasaydım.", spanish: "Si viviera en España", words: ["Si", "viviera", "en", "España", "vivía"] },
        { type: "syntax", turkish: "İspanyolca konuşsaydın.", spanish: "Si hablaras español", words: ["Si", "hablaras", "español", "hablabas"] },
        { type: "syntax", turkish: "Burada olsaydık (Estar).", spanish: "Si estuviéramos aquí", words: ["Si", "estuviéramos", "aquí", "estábamos"] },
        { type: "syntax", turkish: "Bunu bilseydim (Saber).", spanish: "Si supiera esto", words: ["Si", "supiera", "esto", "sabía"] },
        { type: "syntax", turkish: "Gelselerdi (Venir).", spanish: "Si ellos vinieran", words: ["Si", "ellos", "vinieran", "venían"] },
        { type: "syntax", turkish: "Söyleseydin (Decir).", spanish: "Si dijeras la verdad", words: ["Si", "dijeras", "la", "verdad", "decías"] },
        { type: "syntax", turkish: "Daha çok çalışsaydık.", spanish: "Si trabajáramos más", words: ["Si", "trabajáramos", "más", "trabajábamos"] }
      ]
    },
    {
      id: "b1_u12_n3",
      type: "theory",
      title: "Teoría II: La Estructura de la Hipótesis",
      content: {
        concept: "Una hipótesis es como una balanza. En un lado pones la condición imaginaria y en el otro la consecuencia.\n\n### La Fórmula Maestra:\n**SI + Imperfecto de Subjuntivo + CONDICIONAL SIMPLE**\n\n• *Si tuviera dinero (Imaginación), compraría un coche (Deseo).* \n\n🇹🇷 LÓGICA TURCA: Equivale exactamente a la estructura **-sa/-se ... -erdim/-ardım**.\n*Ej: Param olsaydı, bir araba alırdım.*\n\n⚠️ ¡REGLA DE ORO!: El orden puede cambiar, pero el Subjuntivo siempre, siempre va pegado a la palabra SI. \n• ✅ Bien: Compería un coche si tuviera dinero.\n• ❌ Mal: Si compraría un coche, tuviera dinero.",
        examples: [
          { es: "Si ganara la lotería, viajaría por el mundo.", tr: "Piyangoyu kazansaydım, dünyayı gezerdim." },
          { es: "Si fuera tú, no diría nada.", tr: "Senin yerinde olsaydım, hiçbir şey söylemezdim." },
          { es: "Si pudiéramos, iríamos a Turquía mañana.", tr: "Eğer yapabilseydik, yarın Türkiye'ye giderdik." }
        ]
      }
    },
    {
      id: "b1_u12_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Mundos Paralelos)",
      exercises: [
        { type: "speaking", spanish: "Si tuviera tiempo viajaría más", turkish: "Vaktim olsaydı daha çok seyahat ederdim." },
        { type: "speaking", spanish: "Si fuera rico compraría un barco", turkish: "Zengin olsaydım bir tekne satın alırdım." },
        { type: "speaking", spanish: "Si hablara turco viviría en Estambul", turkish: "Türkçe konuşsaydım İstanbul'da yaşardım." },
        { type: "speaking", spanish: "Si ella supiera la verdad lloraría", turkish: "Eğer gerçeği bilseydi ağlardı." },
        { type: "speaking", spanish: "Si hiciéramos deporte estaríamos en forma", turkish: "Spor yapsaydık formda olurduk." },
        { type: "speaking", spanish: "Te ayudaría si pudiera", turkish: "Yapabilseydim sana yardım ederdim." },
        { type: "speaking", spanish: "Sería feliz si estuvieras aquí", turkish: "Burada olsaydın mutlu olurdum." },
        { type: "speaking", spanish: "Si ellos vinieran comeríamos pizza", turkish: "Eğer gelselerdi pizza yerdik." },
        { type: "speaking", spanish: "Si perdieras las llaves qué harías", turkish: "Anahtarları kaybetseydin ne yapardın?" },
        { type: "speaking", spanish: "Yo que tú no iría", turkish: "Senin yerinde olsaydım gitmezdim." }
      ]
    },
    {
      id: "b1_u12_n5",
      type: "theory",
      title: "El Reto Turco: -Sa vs. Si",
      content: {
        concept: "En turco, la partícula de condición *-sa/-se* se usa tanto para condiciones reales (Si llueve, me quedo) como para irreales (Si lloviera dinero...).\n\nEn español, el cerebro debe elegir el 'Modo' dependiendo de qué tan posible es la situación:\n\n1. **Condición Real (U10):** SI + Presente (Si tengo dinero, compro). Es muy posible.\n2. **Condición Irreal (B1):** SI + Subjuntivo Imperfecto (Si tuviera dinero, compraría). Es un sueño o algo muy difícil.\n\n🇹🇷 Tu mente turca querrá usar el mismo verbo para ambos. ¡Cuidado! Si quieres soñar, usa las formas en **-ARA / -IERA**.",
        examples: [
          { es: "Si tengo tiempo, te llamo. (Real/Posible)", tr: "Vaktim olursa seni ararım." },
          { es: "Si tuviera tiempo, te llamaría. (Imaginario)", tr: "Vaktim olsaydı seni arardım." }
        ]
      }
    },
    {
      id: "b1_u12_n6",
      type: "reading",
      title: "Lectura y Audio: ¿Qué harías si ganaras la lotería?",
      content: {
        text: "Javier y Ayşe están paseando por el centro de Madrid y pasan delante de una administración de lotería.\n\n— Javier: Ayşe, mira cuánta gente. El premio de hoy es de veinte millones de euros. ¿Qué harías tú si ganaras tanto dinero?\n— Ayşe: ¡Uf! Qué pregunta tan difícil. Si ganara la lotería, lo primero que haría sería comprar una casa enorme para mis padres en Turquía. \n— Javier: ¡Qué generosa! Yo, si fuera millonario, dejaría mi trabajo inmediatamente. Me compraría una isla privada y viviría allí tranquilamente.\n— Ayşe: ¡Qué aburrido! Yo me aburriría si no hiciera nada. Si tuviera tanto dinero, crearía una fundación para ayudar a los animales de la calle. \n— Javier: Tienes razón. Bueno, si compráramos un boleto ahora, quizás tendríamos una oportunidad.\n— Ayşe: Si fuera tan fácil ganar, todo el mundo sería rico, Javier.",
        translation: "Javier ve Ayşe Madrid'in merkezinde yürüyorlar ve bir piyango bayisinin önünden geçiyorlar.\n\n— Javier: Ayşe, bak ne kadar çok insan var. Bugünün ödülü yirmi milyon euro. Bu kadar çok para kazansaydın ne yapardın?\n— Ayşe: Uf! Ne kadar zor bir soru. Piyangoyu kazansaydım, yapacağım ilk şey Türkiye'deki ailem için kocaman bir ev satın almak olurdu.\n— Javier: Ne kadar cömertsin! Ben milyoner olsaydım, işimi hemen bırakırdım. Özel bir ada satın alırdım ve orada huzur içinde yaşardım.\n— Ayşe: Ne kadar sıkıcı! Hiçbir şey yapmasaydım canım sıkılırdı. Bu kadar çok param olsaydı, sokak hayvanlarına yardım etmek için bir vakıf kurardım.\n— Javier: Haklısın. Şey, şimdi bir bilet alsaydık, belki bir şansımız olurdu.\n— Ayşe: Kazanmak bu kadar kolay olsaydı, herkes zengin olurdu Javier."
      }
    },
    {
      id: "b1_u12_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis de Sueños)",
      exercises: [
        { type: "syntax", turkish: "Piyangoyu kazansaydım dünyayı gezerdim.", spanish: "Si ganara la lotería viajaría por el mundo", words: ["Si", "ganara", "la", "lotería", "viajaría", "por", "el", "mundo", "ganaría"] },
        { type: "syntax", turkish: "Senin yerinde olsaydım (Ser) işimi bırakırdım.", spanish: "Si fuera tú dejaría mi trabajo", words: ["Si", "fuera", "tú", "dejaría", "mi", "trabajo", "sería"] },
        { type: "syntax", turkish: "Vaktimiz olsaydı gelirdik.", spanish: "Si tuviéramos tiempo vendríamos", words: ["Si", "tuviéramos", "tiempo", "vendríamos", "vinieramos"] },
        { type: "syntax", turkish: "Güneş açsaydı (Hacer) plaja giderdik.", spanish: "Si hiciera sol iríamos a la playa", words: ["Si", "hiciera", "sol", "iríamos", "a", "la", "playa", "hace"] },
        { type: "syntax", turkish: "Burada olsaydın (Estar) mutlu olurdum.", spanish: "Si estuvieras aquí sería feliz", words: ["Si", "estuvieras", "aquí", "sería", "feliz", "estaba"] },
        { type: "speaking", spanish: "Si tuviera alas volaría", turkish: "Kanatlarım olsaydı uçardım." },
        { type: "speaking", spanish: "Si supiera la verdad te lo diría", turkish: "Gerçeği bilseydim sana söylerdim." },
        { type: "speaking", spanish: "Qué harías si fueras invisible", turkish: "Görünmez olsaydın ne yapardın?" },
        { type: "speaking", spanish: "Si no tuviera que trabajar dormiría más", turkish: "Çalışmak zorunda olmasaydım daha çok uyurdum." },
        { type: "speaking", spanish: "Comería pizza cada día si pudiera", turkish: "Yapabilseydim her gün pizza yerdim." }
      ]
    },
    {
      id: "b1_u12_n8",
      type: "theory",
      title: "Teoría IV: 'Como si...' y Supersticiones",
      content: {
        concept: "Existen expresiones que obligan al Imperfecto de Subjuntivo aunque no haya un 'Si'.\n\n### 1. COMO SI... ( ... -mış/-miş gibi)\nSe usa para comparar una situación real con una imaginaria.\n• *Habla como si FUERA rico.* (Zenginmiş gibi konuşuyor).\n• *Me mira como si no me CONOCIERA.* (Beni tanımıyormuş gibi bakıyor).\n\n### 2. Ojalá + Imperfecto Subjuntivo\nEn la Unidad 1 del B1 vimos 'Ojalá que apruebes' (Deseo posible). Pero si el deseo es casi imposible o muy lejano, usamos el Imperfecto.\n• *¡Ojalá FUERA viernes!* (Keşke cuma olsaydı! - Pero es lunes).\n• *¡Ojalá TUVIERA 20 años otra vez!* (Keşke yine 20 yaşımda olsaydım!).",
        examples: [
          { es: "Camina como si tuviera prisa.", tr: "Acelesi varmış gibi yürüyor." },
          { es: "¡Ojalá pudiera volar!", tr: "Keşke uçabilseydim!" },
          { es: "Gasta dinero como si ganara la lotería cada día.", tr: "Her gün piyangoyu kazanıyormuş gibi para harcıyor." }
        ]
      }
    },
    {
      id: "b1_u12_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: La Balanza Hipotética",
      content: {
        concept: "Analizaremos la estructura de una frase condicional irreal completa. Observa cómo el Subjuntivo pone la condición y el Condicional la consecuencia.",
        examples: [{ es: "Si nosotros viviéramos en Estambul, comeríamos baklava todos los días.", tr: "Eğer İstanbul'da yaşasaydık, her gün baklava yerdik." }],
        analysis: [
          { word: "Si", type: "connector", literal: "Eğer / -sa", explanation: "Disparador de la condición.", examples: [] },
          { word: "nosotros", type: "pronoun", literal: "biz", explanation: "Sujeto.", examples: [] },
          { word: "viviéramos", type: "verb", literal: "yaşasaydık", explanation: "Verbo VIVIR en Imperfecto de Subjuntivo (-éramos). Es la base imaginaria.", examples: [] },
          { word: "en Estambul", type: "noun", literal: "İstanbul'da", explanation: "Lugar de la hipótesis.", examples: [] },
          { word: "comeríamos", type: "verb", literal: "yerdik", explanation: "Verbo COMER en Condicional Simple (-íamos). Es el resultado del sueño.", examples: [] },
          { word: "baklava", type: "noun", literal: "baklava", explanation: "Objeto directo.", examples: [] },
          { word: "todos los días", type: "adverb", literal: "her gün", explanation: "Frecuencia imaginaria.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u12_n10",
      type: "theory",
      title: "Caja de Herramientas: Sueños y Deseos",
      content: {
        concept: "Para hablar de mundos ideales, necesitas vocabulario sobre deseos profundos.\n\n• **El deseo / El sueño** (Arzu / Hayal)\n• **Ganar la lotería** (Piyangoyu kazanmak)\n• **Ser millonario/a** (Milyoner olmak)\n• **Ser invisible** (Görünmez olmak)\n• **Tener éxito** (Başarılı olmak)\n• **Viajar por el mundo** (Dünyayı gezmek)\n• **Cambiar el mundo** (Dünyayı değiştirmek)\n• **Vivir en una isla** (Bir adada yaşamak)\n• **La paz mundial** (Dünya barışı)",
        examples: [
          { es: "Mi sueño es que no haya guerras.", tr: "Hayalim savaşların olmamasıdır." },
          { es: "Si tuviera un superpoder, sería la telepatía.", tr: "Eğer bir süper gücüm olsaydı, telepati olurdu." },
          { es: "Ojalá viviéramos en un mundo mejor.", tr: "Keşke daha iyi bir dünyada yaşasaydık." }
        ]
      }
    },
    {
      id: "b1_u12_n11",
      type: "theory",
      title: "Taller de Producción: Mi vida ideal",
      content: {
        concept: "¡Saca tu lado más creativo!\n\n**Instrucciones:**\nEscribe un texto (mínimo 8 líneas) respondiendo a la pregunta: *¿Cómo sería tu vida si pudieras elegir cualquier lugar y profesión del mundo?*\n\n1. Usa al menos 4 veces la estructura 'Si + Subjuntivo...'.\n2. Usa verbos en Condicional para las consecuencias (viviría, trabajaría, sería).\n3. Usa la expresión 'Como si...' o 'Ojalá'.\n4. Incluye vocabulario de la Caja de Herramientas.\n\n**Inspiración:** 'Si yo pudiera elegir, viviría en una casa pequeña frente al mar. Si no tuviera que preocuparme por el dinero, pintaría todo el día como si fuera una artista famosa...'",
        examples: []
      }
    },
    {
      id: "b1_u12_n12",
      type: "exam",
      title: "Examen de Unidad: Si yo fuera...",
      content: {
        concept: "Demuestra que dominas las hipótesis imposibles y la concordancia entre el Imperfecto de Subjuntivo y el Condicional.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "¿Qué tiempo verbal sigue siempre a la palabra 'SI' en una hipótesis irreal?", options: ["Condicional", "Imperfecto de Subjuntivo", "Presente"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la forma de 'Tener' en Subjuntivo Imperfecto para 'Yo'?", options: ["Tuviera", "Tenía", "Tendría"], correct: 0 },
          { type: "multiple_choice", question: "Si yo ______ (ser) tú, iría al médico.", options: ["era", "fuera", "sería"], correct: 1 },
          { type: "multiple_choice", question: "Si nosotros ______ (tener) tiempo, viajaríamos más.", options: ["tuviéramos", "tenemos", "tendríamos"], correct: 0 },
          { type: "multiple_choice", question: "Él gasta dinero como si ______ (ser) rico.", options: ["es", "fuera", "sería"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se traduce 'Keşke uçabilseydim'?", options: ["Ojalá puedo volar.", "Ojalá pudiera volar.", "Ojalá volaría."], correct: 1 },
          { type: "multiple_choice", question: "Si ______ (llover) mañana, no iríamos a la playa (Hipótesis).", options: ["lloviera", "llueve", "llovería"], correct: 0 },
          { type: "multiple_choice", question: "Yo ______ (hacer) un pastel si tuviera harina.", options: ["hiciera", "haría", "hago"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la forma de 'Hacer' en Subjuntivo Imperfecto para 'Él'?", options: ["Hiciera", "Hicieras", "Hiciéramos"], correct: 0 },
          { type: "multiple_choice", question: "La traducción de 'Gelseydin mutlu olurdum' es:", options: ["Si vienes, soy feliz.", "Si vinieras, sería feliz.", "Si viniste, fui feliz."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Como si...'?", options: ["-mış gibi", "Keşke", "Eğer"], correct: 0 },
          { type: "multiple_choice", question: "Si tú ______ (saber) la verdad, te sorprenderías.", options: ["supieras", "sabes", "sabrías"], correct: 0 },
          { type: "multiple_choice", question: "Ellos ______ (venir) si los llamaras.", options: ["vendrían", "vinieran", "vienen"], correct: 0 },
          { type: "multiple_choice", question: "Ojalá ______ (nosotros - estar) en España ahora.", options: ["estuviéramos", "estamos", "estaríamos"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la terminación plural de 'Nosotros' en este subjuntivo?", options: ["-ábamos", "-éramos / -áramos", "-aríamos"], correct: 1 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Param olsaydı bir araba alırdım.", spanish: "Si tuviera dinero compraría un coche", words: ["Si", "tuviera", "dinero", "compraría", "un", "coche", "tenía"] },
          { type: "syntax", turkish: "Keşke uçabilseydim!", spanish: "Ojalá pudiera volar", words: ["Ojalá", "pudiera", "volar", "puedo", "podría"] },
          { type: "syntax", turkish: "Zenginmiş gibi konuşuyor.", spanish: "Él habla como si fuera rico", words: ["Él", "habla", "como", "si", "fuera", "rico", "es"] },
          { type: "syntax", turkish: "Vaktim olsaydı sana yardım ederdim.", spanish: "Si tuviera tiempo te ayudaría", words: ["Si", "tuviera", "tiempo", "te", "ayudaría", "ayudaba"] },
          { type: "syntax", turkish: "Görünmez olsaydın ne yapardın?", spanish: "Qué harías si fueras invisible", words: ["Qué", "harías", "si", "fueras", "invisible", "fuiste"] },
          { type: "syntax", turkish: "İspanya'da yaşasaydık çok mutlu olurduk.", spanish: "Si viviéramos en España seríamos muy felices", words: ["Si", "viviéramos", "en", "España", "seríamos", "muy", "felices"] },
          { type: "syntax", turkish: "Gerçeği bilseydim sana söylerdim.", spanish: "Si supiera la verdad te lo diría", words: ["Si", "supiera", "la", "verdad", "te", "lo", "diría", "sabía"] },
          { type: "syntax", turkish: "Senin yerinde olsaydım onu satın almazdım.", spanish: "En tu lugar yo no lo compraría", words: ["En", "tu", "lugar", "yo", "no", "lo", "compraría"] },
          { type: "syntax", turkish: "Güneş açsaydı (Hacer) dışarı çıkardık.", spanish: "Si hiciera sol saldríamos fuera", words: ["Si", "hiciera", "sol", "saldríamos", "fuera", "hizo"] },
          { type: "syntax", turkish: "Daha çok çalışsaydınız sınavı geçerdiniz (Ustedes).", spanish: "Si trabajaran más aprobarían el examen", words: ["Si", "trabajaran", "más", "aprobarían", "el", "examen"] },
          { type: "syntax", turkish: "Onu tanımıyormuş gibi bakıyor.", spanish: "Ella mira como si no lo conociera", words: ["Ella", "mira", "como", "si", "no", "lo", "conociera", "conoció"] },
          { type: "syntax", turkish: "Keşke bugün cuma olsaydı!", spanish: "Ojalá hoy fuera viernes", words: ["Ojalá", "hoy", "fuera", "viernes", "era"] },
          { type: "syntax", turkish: "Beni sevseydin gitmezdin.", spanish: "Si me quisieras no te irías", words: ["Si", "me", "quisieras", "no", "te", "irías", "querrías"] },
          { type: "syntax", turkish: "Piyangoyu kazansak ne yapardık?", spanish: "Qué haríamos si ganáramos la lotería", words: ["Qué", "haríamos", "si", "ganáramos", "la", "lotería"] },
          { type: "syntax", turkish: "Benimle gelseydin (Venir) eğlenirdik.", spanish: "Si vinieras conmigo nos divertiríamos", words: ["Si", "vinieras", "conmigo", "nos", "divertiríamos"] }
        ]
      }
    }
  ]
};
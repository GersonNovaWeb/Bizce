/**
 * UNIDAD 3: LA VOZ DE LA SOCIEDAD (VALORACIONES IMPERSONALES) - NIVEL B1
 * Enfoque: Uso del Subjuntivo vs Indicativo en opiniones generales y exclamaciones.
 * Estructura: 12 Nodos Premium.
 */

export const unidad3 = {
  id: "b1_u3",
  title: "Unidad 3: La Voz de la Sociedad",
  description: "Aprende a dar tu opinión sobre el mundo. Descubre cuándo usar el Subjuntivo para valorar y cuándo usar el Indicativo para afirmar verdades.",
  nodes: [
    {
      id: "b1_u3_n1",
      type: "theory",
      title: "Teoría I: La Fórmula Impersonal",
      content: {
        concept: "Hasta ahora hemos hablado de 'Yo quiero' o 'Me molesta'. Pero, ¿qué pasa cuando queremos opinar sobre una regla general para todo el mundo?\n\nPara esto usamos las **Valoraciones Impersonales**. No hay un 'Yo' o un 'Tú' al principio de la oración. Empezamos directamente con el verbo SER.\n\n### La Estructura de Valoración:\n**ES + Adjetivo + QUE + Subjuntivo**\n\n• **Es importante que** reciclemos (Geri dönüşüm yapmamız önemlidir).\n• **Es lógico que** estés cansada (Yorgun olman mantıklı).\n• **Es necesario que** el gobierno ayude (Hükümetin yardım etmesi gereklidir).\n• **Es una pena que** haya tanta contaminación (Bu kadar çok kirlilik olması ne yazık).",
        examples: [
          { es: "Es natural que tengas miedo.", tr: "Korkman doğaldır." },
          { es: "Es absurdo que él gane tanto dinero.", tr: "Onun bu kadar çok para kazanması saçmadır." },
          { es: "Es mejor que nos quedemos en casa.", tr: "Evde kalmamız daha iyi." }
        ]
      }
    },
    {
      id: "b1_u3_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Valoraciones)",
      exercises: [
        { type: "syntax", turkish: "Dinlenmen önemlidir.", spanish: "Es importante que descanses", words: ["Es", "importante", "que", "descanses", "descansas"] },
        { type: "syntax", turkish: "Sebze yememiz gereklidir.", spanish: "Es necesario que comamos verduras", words: ["Es", "necesario", "que", "comamos", "verduras", "comemos"] },
        { type: "syntax", turkish: "Erken gelmeniz daha iyi (Ustedes).", spanish: "Es mejor que lleguen temprano", words: ["Es", "mejor", "que", "lleguen", "temprano", "llegan"] },
        { type: "syntax", turkish: "Onun (kadın) gerçeği bilmesi mantıklı.", spanish: "Es lógico que ella sepa la verdad", words: ["Es", "lógico", "que", "ella", "sepa", "la", "verdad", "sabe"] },
        { type: "syntax", turkish: "İnsanların doğaya (la naturaleza) saygı duyması (respetar) şarttır (fundamental).", spanish: "Es fundamental que la gente respete la naturaleza", words: ["Es", "fundamental", "que", "la", "gente", "respete", "la", "naturaleza"] },
        { type: "syntax", turkish: "Burada sigara içilmesi saçmadır.", spanish: "Es absurdo que fumen aquí", words: ["Es", "absurdo", "que", "fumen", "aquí", "fuman"] },
        { type: "syntax", turkish: "Bugün çalışmamız ne yazık.", spanish: "Es una pena que trabajemos hoy", words: ["Es", "una", "pena", "que", "trabajemos", "hoy", "trabajamos"] },
        { type: "syntax", turkish: "Kızgın olman normaldir.", spanish: "Es normal que estés enojado", words: ["Es", "normal", "que", "estés", "enojado", "estás"] },
        { type: "syntax", turkish: "Doktora gitmesi (onun) tavsiye edilir.", spanish: "Es recomendable que vaya al médico", words: ["Es", "recomendable", "que", "vaya", "al", "médico", "va"] },
        { type: "syntax", turkish: "İspanyolca pratiği yapman harika.", spanish: "Es fantástico que practiques español", words: ["Es", "fantástico", "que", "practiques", "español", "practicas"] }
      ]
    },
    {
      id: "b1_u3_n3",
      type: "theory",
      title: "Teoría II: La Trampa de la Certeza",
      content: {
        concept: "¡Alerta roja! 🚨 No todas las frases con 'Es + Adjetivo + que' usan subjuntivo. El español diferencia matemáticamente entre lo que es una OPINIÓN y lo que es un HECHO COMPROBADO.\n\n### 1. 100% de Certeza = INDICATIVO (Realidad)\nSi el adjetivo expresa que algo es indudable, evidente o un hecho, usamos el verbo normal (Indicativo).\n• **Es verdad que** llueve (Yağmur yağdığı doğru).\n• **Es obvio que** estás cansado (Yorgun olduğun açık).\n• **Es evidente que** tenemos un problema.\n• **Es seguro que** él viene mañana.\n\n### 2. La Negación de la Certeza = SUBJUNTIVO (Duda)\nSi tomas esas mismas frases y les pones un 'NO' delante, la certeza se destruye. La realidad se vuelve duda, y por tanto, la matemática cambia a Subjuntivo.\n• **NO es verdad que** llueva (Yağmur yağdığı doğru değil).\n• **NO es obvio que** estés cansado.\n• **NO es seguro que** él venga mañana.",
        examples: [
          { es: "Es verdad que Carlos tiene dinero. (Indicativo - Realidad)", tr: "Carlos'un parası olduğu doğru." },
          { es: "No es verdad que Carlos tenga dinero. (Subjuntivo - Duda/Falsedad)", tr: "Carlos'un parası olduğu doğru değil." },
          { es: "Es evidente que el clima cambia. (Indicativo)", tr: "İklimin değiştiği aşikar." }
        ]
      }
    },
    {
      id: "b1_u3_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Certeza vs Duda)",
      exercises: [
        { type: "speaking", spanish: "Es verdad que ella es inteligente", turkish: "Onun (kadın) zeki olduğu doğru." },
        { type: "speaking", spanish: "No es verdad que ella sea egoísta", turkish: "Onun bencil olduğu doğru değil." },
        { type: "speaking", spanish: "Es obvio que tienen un problema", turkish: "Bir problemleri olduğu aşikar." },
        { type: "speaking", spanish: "No es obvio que tengan la solución", turkish: "Çözüme sahip oldukları aşikar değil." },
        { type: "speaking", spanish: "Es seguro que llegaremos tarde", turkish: "Geç varacağımız kesin." },
        { type: "speaking", spanish: "No es seguro que ganemos el partido", turkish: "Maçı kazanacağımız kesin değil." },
        { type: "speaking", spanish: "Es importante que escuches esto", turkish: "Bunu dinlemen önemli. (Valoración -> Subjuntivo)" },
        { type: "speaking", spanish: "Es evidente que no quieres hablar", turkish: "Konuşmak istemediğin çok açık." },
        { type: "speaking", spanish: "No es evidente que él mienta", turkish: "Onun yalan söylediği açık değil." },
        { type: "speaking", spanish: "Es una pena que no vengas", turkish: "Gelmeyecek olman ne yazık. (Valoración -> Subjuntivo)" }
      ]
    },
    {
      id: "b1_u3_n5",
      type: "theory",
      title: "Teoría III: El Reto Turco (Infinitivos vs. Que)",
      content: {
        concept: "Repasemos un error muy común al intentar traducir valoraciones del turco al español.\n\n🇹🇷 **EN TURCO:** Sueles usar un infinitivo con posesivo: *'Bunu yapman önemli'* (Literal: Tu hacer esto es importante).\n\n🇪🇸 **EN ESPAÑOL:** Si estamos hablando de una persona específica (tú, nosotros, los ciudadanos), NO PODEMOS USAR EL INFINITIVO. Debemos usar el puente 'QUE' y conjugar en subjuntivo.\n• ❌ Mal: Es importante tú hacer esto.\n• ✅ Bien: Es importante **QUE tú hagas** esto.\n\n### ¿Cuándo usamos el Infinitivo entonces?\n¡Solo cuando es una regla general para todo el mundo sin un sujeto específico!\n• *Es importante **reciclar**.* (Geri dönüşüm yapmak önemlidir - Para toda la humanidad).\n• *Es importante que **nosotros reciclemos**.* (Bizim geri dönüşüm yapmamız önemlidir - Específico).",
        examples: [
          { es: "Es necesario beber agua. (General)", tr: "Su içmek gereklidir." },
          { es: "Es necesario que bebas agua. (Tú)", tr: "Senin su içmen gereklidir." },
          { es: "Es absurdo pagar tanto. (General)", tr: "Bu kadar çok ödemek saçma." }
        ]
      }
    },
    {
      id: "b1_u3_n6",
      type: "reading",
      title: "Lectura y Audio: Problemas en la ciudad",
      content: {
        text: "En la reunión de vecinos de un barrio en Madrid:\n\n— Vecino 1: Es evidente que tenemos un problema grave con el tráfico. Hay demasiados coches en esta calle todos los días.\n— Vecina 2: Tienes razón. Es necesario que el alcalde haga algo. Es una pena que los niños no puedan jugar en la acera por el humo y el ruido.\n— Vecino 1: Es verdad que la situación es mala, pero no es justo que prohíban aparcar a los residentes. ¡Necesitamos nuestros coches para ir a trabajar!\n— Vecina 2: Bueno, es importante que todos usemos más el transporte público. No es verdad que el metro sea lento. Es lógico que haya reglas más estrictas para cuidar el medio ambiente.",
        translation: "Madrid'de bir mahalledeki komşu toplantısında:\n\n— 1. Komşu: Trafikle ilgili ciddi bir sorunumuz olduğu aşikar. Her gün bu sokakta çok fazla araba var.\n— 2. Komşu: Haklısın. Belediye başkanının bir şeyler yapması gerekli. Çocukların duman ve gürültü yüzünden kaldırımda oynayamaması ne yazık.\n— 1. Komşu: Durumun kötü olduğu doğru ama bölge sakinlerinin park etmesinin yasaklanması adil değil. İşe gitmek için arabalarımıza ihtiyacımız var!\n— 2. Komşu: Şey, hepimizin toplu taşımayı daha fazla kullanması önemli. Metronun yavaş olduğu doğru değil. Çevreyi korumak için daha katı kurallar olması mantıklı."
      }
    },
    {
      id: "b1_u3_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis y Decisiones)",
      exercises: [
        { type: "syntax", turkish: "Çok araba olduğu aşikar (evidente).", spanish: "Es evidente que hay muchos coches", words: ["Es", "evidente", "que", "hay", "muchos", "coches", "haya"] },
        { type: "syntax", turkish: "Belediye başkanının (el alcalde) bir şeyler yapması gerekli.", spanish: "Es necesario que el alcalde haga algo", words: ["Es", "necesario", "que", "el", "alcalde", "haga", "algo", "hace"] },
        { type: "syntax", turkish: "Metronun yavaş olduğu doğru değil.", spanish: "No es verdad que el metro sea lento", words: ["No", "es", "verdad", "que", "el", "metro", "sea", "lento", "es"] },
        { type: "syntax", turkish: "Durumun kötü olduğu doğru.", spanish: "Es verdad que la situación es mala", words: ["Es", "verdad", "que", "la", "situación", "es", "mala", "sea"] },
        { type: "syntax", turkish: "Hepimizin metroyu kullanması önemli.", spanish: "Es importante que todos usemos el metro", words: ["Es", "importante", "que", "todos", "usemos", "el", "metro", "usamos"] },
        { type: "speaking", spanish: "Es evidente que tenemos un problema", turkish: "Bir problemimiz olduğu aşikar." },
        { type: "speaking", spanish: "Es una pena que los niños no jueguen aquí", turkish: "Çocukların burada oynamaması ne yazık." },
        { type: "speaking", spanish: "No es justo que prohíban aparcar", turkish: "Park etmeyi yasaklamaları adil değil." },
        { type: "speaking", spanish: "Es lógico que haya reglas estrictas", turkish: "Katı kurallar olması mantıklı." },
        { type: "speaking", spanish: "No es seguro que el aire esté limpio", turkish: "Havanın temiz olduğu kesin değil." }
      ]
    },
    {
      id: "b1_u3_n8",
      type: "theory",
      title: "Teoría IV: ¡Qué Exclamaciones!",
      content: {
        concept: "Otra forma muy natural de dar valoraciones como nativa es usar las **Exclamaciones con QUÉ**. \n\nComo expresan una reacción emocional fuerte ante un hecho, **SIEMPRE exigen Subjuntivo** si hay un nuevo sujeto.\n\n### Ejemplos comunes:\n• **¡Qué bien que...!** (Ne iyi ki...)\n• **¡Qué pena que...! / ¡Qué lástima que...!** (Ne yazık ki...)\n• **¡Qué raro que...!** (Ne garip ki...)\n• **¡Qué suerte que...!** (Ne şans ki...)\n• **¡Qué horror que...!** (Ne korkunç ki...)\n\n*Ejemplo:* ¡Qué bien que estés aquí! (Burada olman ne iyi!).",
        examples: [
          { es: "¡Qué pena que no puedas venir al concierto!", tr: "Konsere gelemeyecek olman ne yazık!" },
          { es: "¡Qué raro que Carlos no llame!", tr: "Carlos'un aramaması ne garip!" },
          { es: "¡Qué suerte que tengamos trabajo!", tr: "İşimiz olması ne şans!" }
        ]
      }
    },
    {
      id: "b1_u3_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: Exclamación Impersonal",
      content: {
        concept: "Vamos a deconstruir una frase muy expresiva. Observa cómo la palabra 'Qué' actúa como disparador de la emoción, forzando al verbo final al mundo del subjuntivo.",
        examples: [{ es: "¡Qué lástima que los jóvenes no tengan buenas oportunidades aquí!", tr: "Ne yazık ki gençlerin burada iyi fırsatları yok!" }],
        analysis: [
          { word: "¡Qué lástima", type: "noun", literal: "Ne yazık", explanation: "Bloque exclamativo que indica una fuerte emoción de tristeza o decepción.", examples: [] },
          { word: "que", type: "connector", literal: "ki (bağlaç)", explanation: "El puente obligatorio que introduce lo que nos da lástima.", examples: [] },
          { word: "los jóvenes", type: "noun", literal: "gençler", explanation: "Sujeto de la acción. Las personas afectadas.", examples: [] },
          { word: "no tengan", type: "verb", literal: "sahip olmamaları", explanation: "Verbo TENER en subjuntivo negativo. Es irreal porque evaluamos el 'concepto' de su falta de oportunidades, no el hecho frío.", examples: [] },
          { word: "buenas", type: "adjective", literal: "iyi", explanation: "Adjetivo que califica a las oportunidades.", examples: [] },
          { word: "oportunidades", type: "noun", literal: "fırsatlar", explanation: "Objeto directo.", examples: [] },
          { word: "aquí!", type: "adverb", literal: "burada", explanation: "Adverbio de lugar que cierra la exclamación.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u3_n10",
      type: "theory",
      title: "Caja de Herramientas: Sociedad y Ecología",
      content: {
        concept: "Para dar opiniones como una adulta en español, necesitas este vocabulario de nivel B1 enfocado en temas sociales.\n\n### Vocabulario Cívico:\n• **El gobierno / El alcalde** (Hükümet / Belediye başkanı)\n• **Los ciudadanos / La gente** (Vatandaşlar / İnsanlar)\n• **Los impuestos** (Vergiler)\n• **El medio ambiente** (Çevre)\n• **La contaminación / El humo** (Kirlilik / Duman)\n• **El transporte público** (Toplu taşıma)\n\n### Verbos Clave:\n• **Prohibir** (Yasaklamak) ➔ *Es injusto que prohíban...*\n• **Permitir** (İzin vermek) ➔ *Es bueno que permitan...*\n• **Mejorar** (İyileştirmek / Geliştirmek)\n• **Cuidar** (Korumak / Bakmak)",
        examples: [
          { es: "Es vital que el gobierno mejore el transporte público.", tr: "Hükümetin toplu taşımayı iyileştirmesi hayatidir." },
          { es: "No es lógico que paguemos tantos impuestos.", tr: "Bu kadar çok vergi ödememiz mantıklı değil." },
          { es: "Es importante que cuidemos el medio ambiente.", tr: "Çevreyi korumamız önemlidir." }
        ]
      }
    },
    {
      id: "b1_u3_n11",
      type: "theory",
      title: "Taller de Producción: Carta al Alcalde",
      content: {
        concept: "Ha llegado el momento de quejarte con clase y propiedad.\n\n**Instrucciones:**\nEscribe un pequeño párrafo (mínimo 6 líneas) simulando ser una ciudadana que le escribe al alcalde de su ciudad sobre un problema (tráfico, basura, ruido).\n\n1. Usa al menos dos valoraciones de opinión (Es importante que, Es necesario que).\n2. Usa una exclamación (¡Qué pena que...!).\n3. Usa la trampa de la certeza una vez (Es verdad que... o No es verdad que...).\n\n**Inspiración:** 'Señor Alcalde: Es evidente que tenemos un problema con la basura. Es verdad que hay más gente ahora, pero no es lógico que las calles estén tan sucias. ¡Qué pena que...'",
        examples: []
      }
    },
    {
      id: "b1_u3_n12",
      type: "exam",
      title: "Examen de Unidad: La Voz de la Sociedad",
      content: {
        concept: "Demuestra que dominas la trampa de la certeza, las valoraciones impersonales y las exclamaciones emocionales.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Elige la correcta: 'Es importante que todos ______ (reciclar)'.", options: ["reciclan", "reciclar", "reciclemos"], correct: 2 },
          { type: "multiple_choice", question: "Si la frase es una verdad absoluta: 'Es obvio que ella ______ (ser) rica'.", options: ["sea", "es"], correct: 1 },
          { type: "multiple_choice", question: "Si NEGAMOS la verdad: 'No es obvio que ella ______ (ser) rica'.", options: ["sea", "es"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: 'Es necesario ______ (beber) agua todos los días' (General, sin sujeto).", options: ["beber", "que bebamos", "bebemos"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: 'Es necesario que tú ______ (beber) agua' (Sujeto específico).", options: ["beber", "bebas", "bebes"], correct: 1 },
          { type: "multiple_choice", question: "'Es verdad que nosotros ______ (tener) un problema de tráfico'.", options: ["tenemos", "tengamos"], correct: 0 },
          { type: "multiple_choice", question: "'¡Qué raro que Carlos no ______ (venir) hoy!'.", options: ["viene", "venga"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'El medio ambiente'?", options: ["Ortam (sosyal)", "Çevre (doğa)", "Hükümet"], correct: 1 },
          { type: "multiple_choice", question: "'No es seguro que el tren ______ (llegar) a tiempo'.", options: ["llega", "llegue"], correct: 1 },
          { type: "multiple_choice", question: "'¡Qué lástima que te ______ (ir) tan pronto!'.", options: ["vas", "vayas"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué verbo usamos para 'Yasaklamak'?", options: ["Prohibir", "Permitir", "Mejorar"], correct: 0 },
          { type: "multiple_choice", question: "'Es fantástico que tú ______ (hablar) español'.", options: ["hablas", "hables"], correct: 1 },
          { type: "multiple_choice", question: "'Es evidente que ______ (haber) mucha contaminación'.", options: ["hay", "haya"], correct: 0 },
          { type: "multiple_choice", question: "'No es evidente que ______ (haber) mucha contaminación'.", options: ["hay", "haya"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Vatandaşlar'?", options: ["Los alcaldes", "Los ciudadanos", "Los impuestos"], correct: 1 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Geri dönüşüm yapmamız önemlidir.", spanish: "Es importante que reciclemos", words: ["Es", "importante", "que", "reciclemos", "reciclamos"] },
          { type: "syntax", turkish: "Vergilerin çok yüksek (altos) olduğu aşikar.", spanish: "Es evidente que los impuestos son altos", words: ["Es", "evidente", "que", "los", "impuestos", "son", "altos", "sean"] },
          { type: "syntax", turkish: "Hükümetin yardım etmesi gereklidir.", spanish: "Es necesario que el gobierno ayude", words: ["Es", "necesario", "que", "el", "gobierno", "ayude", "ayuda"] },
          { type: "syntax", turkish: "Bunu yapman çok saçma (absurdo).", spanish: "Es muy absurdo que hagas esto", words: ["Es", "muy", "absurdo", "que", "hagas", "esto", "haces"] },
          { type: "syntax", turkish: "İklimin değiştiği doğru değil.", spanish: "No es verdad que el clima cambie", words: ["No", "es", "verdad", "que", "el", "clima", "cambie", "cambia"] },
          { type: "syntax", turkish: "Toplu taşımayı iyileştirmeleri şart (fundamental).", spanish: "Es fundamental que mejoren el transporte público", words: ["Es", "fundamental", "que", "mejoren", "el", "transporte", "público"] },
          { type: "syntax", turkish: "Ne yazık ki vaktin yok!", spanish: "Qué pena que no tengas tiempo", words: ["Qué", "pena", "que", "no", "tengas", "tiempo", "tienes"] },
          { type: "syntax", turkish: "Sınavı geçmen ne iyi!", spanish: "Qué bien que apruebes el examen", words: ["Qué", "bien", "que", "apruebes", "el", "examen", "apruebas"] },
          { type: "syntax", turkish: "Carlos'un parası olduğu kesin değil.", spanish: "No es seguro que Carlos tenga dinero", words: ["No", "es", "seguro", "que", "Carlos", "tenga", "dinero", "tiene"] },
          { type: "syntax", turkish: "Sokakların kirli (sucias) olması mantıklı değil.", spanish: "No es lógico que las calles estén sucias", words: ["No", "es", "lógico", "que", "las", "calles", "estén", "sucias", "están"] },
          { type: "syntax", turkish: "Senin burada olman harika (fantástico).", spanish: "Es fantástico que estés aquí", words: ["Es", "fantástico", "que", "estés", "aquí", "estás"] },
          { type: "syntax", turkish: "Sorunumuz olduğu doğru.", spanish: "Es verdad que tenemos un problema", words: ["Es", "verdad", "que", "tenemos", "un", "problema", "tengamos"] },
          { type: "syntax", turkish: "Doğayı korumamız tavsiye edilir (recomendable).", spanish: "Es recomendable que cuidemos la naturaleza", words: ["Es", "recomendable", "que", "cuidemos", "la", "naturaleza"] },
          { type: "syntax", turkish: "Onların park etmeyi yasaklamaları adil (justo) değil.", spanish: "No es justo que prohíban aparcar", words: ["No", "es", "justo", "que", "prohíban", "aparcar", "prohíben"] },
          { type: "syntax", turkish: "Bugün hava güzel olması ne şans!", spanish: "Qué suerte que haga buen tiempo hoy", words: ["Qué", "suerte", "que", "haga", "buen", "tiempo", "hoy", "hace"] }
        ]
      }
    }
  ]
};
/**
 * UNIDAD 5 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Adverbios de Probabilidad y la Duda Razonable (Indicativo vs Subjuntivo)
 * Tema: Misterios, ciencia, teorías y especulación.
 */

export const unidad5 = {
  id: "c1_u5",
  title: "Unidad 5: La Duda Razonable",
  description: "Domina el arte de la especulación. Descubre por qué la duda a veces exige Indicativo y cómo la posición de las palabras altera la realidad.",
  nodes: [
    {
      id: "c1_u5_n1",
      type: "theory",
      title: "Teoría I: Los Intocables del Indicativo",
      content: {
        concept: "En los niveles B1 y B2 te enseñamos que la 'duda' es la puerta principal al Modo Subjuntivo. Sin embargo, en el nivel C1 te presentamos a los 'Intocables': expresiones de probabilidad que, aunque expresan duda, **EXIGEN SIEMPRE EL MODO INDICATIVO**.\n\nSon estructuras coloquiales y muy utilizadas en el día a día para expresar una posibilidad alta (60-80%).\n\n### 1. A LO MEJOR (Belki / Büyük ihtimalle)\nEs la expresión de duda más común en España.\n• ❌ *A lo mejor llueva.*\n• ✅ *A lo mejor **llueve** esta tarde.*\n\n### 2. IGUAL (Belki / Bakarsın...)\nEn niveles básicos, 'igual' significa 'aynı'. En C1 coloquial, al inicio de una frase, significa 'probablemente'. ¡Siempre con Indicativo!\n• *Igual **voy** a la fiesta, no lo sé todavía.* (Belki partiye giderim, henüz bilmiyorum).\n\n### 3. LO MISMO (Belki / Belli mi olur)\nHermano gemelo de 'Igual', muy usado en el sur de España y Madrid.\n• *Lo mismo **llegan** tarde por el tráfico.* (Belki trafik yüzünden geç kalırlar).",
        examples: [
          { es: "A lo mejor Carlos está enfermo, no ha venido hoy.", tr: "Belki Carlos hastadır, bugün gelmedi." },
          { es: "No compres más pan, igual tenemos en el congelador.", tr: "Daha fazla ekmek alma, bakarsın dondurucuda vardır." },
          { es: "Lo mismo me compro un coche este año.", tr: "Belli mi olur, belki bu yıl bir araba alırım." }
        ]
      }
    },
    {
      id: "c1_u5_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Alta Sintaxis (Los Intocables)",
      exercises: [
        { type: "syntax", turkish: "Belki (A lo mejor) yarın yağmur yağar.", spanish: "A lo mejor llueve mañana", words: ["A", "lo", "mejor", "llueve", "mañana", "llueva"] },
        { type: "syntax", turkish: "Belki (Igual) bu gece dışarı çıkarım.", spanish: "Igual salgo esta noche", words: ["Igual", "salgo", "esta", "noche", "salga"] },
        { type: "syntax", turkish: "Belki (Lo mismo) onlar partiye gelirler.", spanish: "Lo mismo ellos vienen a la fiesta", words: ["Lo", "mismo", "ellos", "vienen", "a", "la", "fiesta", "vengan"] },
        { type: "syntax", turkish: "Belki de (A lo mejor) o haklıdır.", spanish: "A lo mejor él tiene razón", words: ["A", "lo", "mejor", "él", "tiene", "razón", "tenga"] },
        { type: "syntax", turkish: "Bakarsın (Igual) daha fazla vaktimiz olur.", spanish: "Igual tenemos más tiempo", words: ["Igual", "tenemos", "más", "tiempo", "tengamos"] },
        { type: "syntax", turkish: "Belki (A lo mejor) tatilleri iptal ettiler (han cancelado).", spanish: "A lo mejor han cancelado las vacaciones", words: ["A", "lo", "mejor", "han", "cancelado", "las", "vacaciones", "hayan"] },
        { type: "syntax", turkish: "Belli mi olur (Lo mismo), piyangoyu kazanırız.", spanish: "Lo mismo ganamos la lotería", words: ["Lo", "mismo", "ganamos", "la", "lotería", "ganemos"] },
        { type: "syntax", turkish: "Belki (A lo mejor) gerçek bu değildir.", spanish: "A lo mejor la verdad no es esta", words: ["A", "lo", "mejor", "la", "verdad", "no", "es", "esta", "sea"] },
        { type: "syntax", turkish: "Belki (Igual) geç kalır.", spanish: "Igual él llega tarde", words: ["Igual", "él", "llega", "tarde", "llegue"] },
        { type: "syntax", turkish: "Belli mi olur (Lo mismo), yarın kar yağar.", spanish: "Lo mismo nieva mañana", words: ["Lo", "mismo", "nieva", "mañana", "nieve"] }
      ]
    },
    {
      id: "c1_u5_n3",
      type: "theory",
      title: "Teoría II: La Balanza de la Certeza (Quizás, Tal vez)",
      content: {
        concept: "Ahora entramos en el terreno de los 'Adverbios Flexibles'. Estas palabras actúan como un termómetro en la mente del hablante.\n\n**Los Flexibles:** *Quizás (o Quizá), Tal vez, Probablemente, Posiblemente, Seguramente.*\n\n### 1. Con INDICATIVO (Más del 50% de probabilidad)\nSi en tu mente crees que algo es muy probable basándote en pistas o intuición fuerte, usas Indicativo.\n• *El cielo está muy negro. **Probablemente va a llover**.* (Casi seguro que sí).\n• *Carlos estudia mucho. **Seguramente aprobará**.* (Tengo mucha confianza en esto).\n\n### 2. Con SUBJUNTIVO (Menos del 50% de probabilidad)\nSi es solo una teoría remota, una especulación sin pruebas, o un deseo dudoso, usas Subjuntivo.\n• *El cielo está despejado, pero **quizás llueva**.* (Es muy improbable, pero quién sabe).\n• *Carlos no estudia casi nada. **Tal vez apruebe**.* (Lo dudo muchísimo, es un milagro si pasa).\n\n### 3. La Regla de la Inversión (¡Ojo al orden!)\nSi el adverbio se coloca **DESPUÉS** del verbo, la fuerza de la duda desaparece y es OBLIGATORIO usar el **Indicativo**.\n• *Llueve **tal vez**.* (Correcto).\n• *Llueva **tal vez**.* (¡INCORRECTO!)",
        examples: [
          { es: "Quizás es demasiado tarde. (Creo que sí lo es).", tr: "Belki de çok geçtir. (Öyle olduğunu düşünüyorum)." },
          { es: "Quizás sea demasiado tarde. (Tengo dudas reales, no lo sé).", tr: "Belki de çok geçtir. (Gerçekten bilmiyorum)." },
          { es: "Estarán en casa seguramente. (Va detrás del verbo -> Indicativo obligatorio).", tr: "Muhtemelen evdedirler." }
        ]
      }
    },
    {
      id: "c1_u5_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Tono de la Duda)",
      exercises: [
        { type: "speaking", spanish: "A lo mejor vamos a la playa mañana", turkish: "Belki yarın sahile gideriz. (Indicativo puro)" },
        { type: "speaking", spanish: "Quizás vayamos a la playa mañana", turkish: "Belki yarın sahile gideriz. (Subjuntivo - Menos probable)" },
        { type: "speaking", spanish: "Igual me compro un coche nuevo", turkish: "Belki (bakarsın) yeni bir araba alırım." },
        { type: "speaking", spanish: "Tal vez ella sepa la verdad", turkish: "Belki o gerçeği biliyordur. (Duda remota)" },
        { type: "speaking", spanish: "Probablemente llegará tarde por el tráfico", turkish: "Trafik yüzünden muhtemelen geç kalacak. (Indicativo - Casi seguro)" },
        { type: "speaking", spanish: "Seguramente estén cansados del viaje", turkish: "Yolculuktan muhakkak yorulmuşlardır. (Subjuntivo - Suposición)" },
        { type: "speaking", spanish: "Lo mismo apruebo el examen de mañana", turkish: "Belli mi olur, yarınki sınavı geçerim." },
        { type: "speaking", spanish: "Posiblemente no tengamos tiempo", turkish: "Muhtemelen vaktimiz olmayacak." },
        { type: "speaking", spanish: "Es demasiado caro probablemente", turkish: "Muhtemelen çok pahalı. (Adverbio al final -> Indicativo)" },
        { type: "speaking", spanish: "Tal vez sea un error confiar en él", turkish: "Ona güvenmek belki de bir hatadır." }
      ]
    },
    {
      id: "c1_u5_n5",
      type: "theory",
      title: "El Reto Turco: La trampa de 'Belki' y 'Muhtemelen'",
      content: {
        concept: "En el idioma turco, palabras como *Belki* (Quizás/Tal vez) o *Muhtemelen* (Probablemente) no cambian la estructura del verbo. Simplemente las añades a la frase y el verbo se queda en su tiempo normal (Belki gelir / Belki gelmez).\n\n### El Cerebro Bilingüe:\nAl hablar español, no puedes simplemente 'pegar' la palabra *Quizás* al principio y relajarte. En ese milisegundo en que pronuncias *Quizás*, tu cerebro C1 debe hacer un cálculo matemático:\n\n1. ¿Estoy casi seguro? ➔ **Mente en Indicativo.**\n2. ¿Es solo una teoría loca? ➔ **Mente en Subjuntivo.**\n3. ¿Quiero evitarme el problema del subjuntivo? ➔ **¡Usa 'A lo mejor' o 'Igual'!** Son los 'salvavidas' de los nativos porque no requieren pensar en el modo.\n\n🇹🇷 *Belki bugün yağmur yağar*.\n• Nivel A2: Quizás **llueve** hoy. (Simple).\n• Nivel B2: Tal vez **llueva** hoy. (Duda).\n• Nivel C1 Nato: **Igual llueve** hoy. (Coloquial y natural).",
        examples: [
          { es: "Igual no viene porque está enfermo.", tr: "Belki hastadır diye gelmez. (Salvavidas Indicativo)" },
          { es: "Quizás no venga porque esté enfermo.", tr: "Belki hastadır diye gelmez. (Hipótesis Subjuntiva profunda)" }
        ]
      }
    },
    {
      id: "c1_u5_n6",
      type: "reading",
      title: "Lectura Crítica: El Misterio de la Isla",
      content: {
        text: "La desaparición de la civilización en la Isla de Pascua sigue siendo un enigma para los arqueólogos. A lo mejor, los recursos naturales se agotaron debido a la tala masiva de árboles. Algunos científicos piensan que, probablemente, hubo una guerra civil entre las distintas tribus, lo que provocó el colapso social. \n\nNo obstante, nuevas investigaciones sugieren teorías diferentes. Tal vez una enfermedad traída por navegantes europeos fuera la verdadera causa. Igual nunca sabremos exactamente qué pasó en aquel lugar aislado. Lo mismo descubrimos textos ocultos en el futuro que nos den la respuesta. Posiblemente, la verdad sea una mezcla de todas estas hipótesis. Sea como sea, la isla sigue fascinando al mundo.",
        translation: "Paskalya Adası'ndaki medeniyetin yok oluşu arkeologlar için bir muamma olmaya devam ediyor. Belki (A lo mejor), devasa ağaç kesimi nedeniyle doğal kaynaklar tükenmiştir (Indicativo). Bazı bilim adamları, muhtemelen, farklı kabileler arasında sosyal çöküşe neden olan bir iç savaş olduğunu (Indicativo) düşünüyorlar.\n\nAncak yeni araştırmalar farklı teoriler öne sürüyor. Belki de Avrupalı denizcilerin getirdiği bir hastalık asıl nedendi (fuera - Subjuntivo). Bakarsın, o izole yerde tam olarak ne olduğunu asla bilemeyeceğiz (sabremos - Indicativo). Belli mi olur, gelecekte bize cevabı verecek gizli metinler keşfederiz (descubrimos - Indicativo). Muhtemelen, gerçek tüm bu hipotezlerin bir karışımıdır (sea - Subjuntivo). Nasıl olursa olsun, ada dünyayı büyülemeye devam ediyor."
      }
    },
    {
      id: "c1_u5_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (Elegir la Probabilidad)",
      exercises: [
        { type: "syntax", turkish: "Belki (A lo mejor) doğal kaynaklar tükendi (agotarse).", spanish: "A lo mejor los recursos naturales se agotaron", words: ["A", "lo", "mejor", "los", "recursos", "naturales", "se", "agotaron", "agotaran"] },
        { type: "syntax", turkish: "Belki de (Tal vez) hastalık asıl nedendi (Ser - Duda remota).", spanish: "Tal vez una enfermedad fuera la verdadera causa", words: ["Tal", "vez", "una", "enfermedad", "fuera", "la", "verdadera", "causa", "fue"] },
        { type: "syntax", turkish: "Belli mi olur (Lo mismo), cevabı buluruz (descubrir).", spanish: "Lo mismo descubrimos la respuesta", words: ["Lo", "mismo", "descubrimos", "la", "respuesta", "descubramos"] },
        { type: "syntax", turkish: "Muhtemelen (Probablemente) bir iç savaş oldu (Haber - Certeza alta).", spanish: "Probablemente hubo una guerra civil", words: ["Probablemente", "hubo", "una", "guerra", "civil", "hubiera"] },
        { type: "syntax", turkish: "Gerçek muhtemelen (Posiblemente) budur (Ser - Duda alta).", spanish: "Posiblemente la verdad sea esta", words: ["Posiblemente", "la", "verdad", "sea", "esta", "es"] },
        { type: "syntax", turkish: "Bakarsın (Igual) tam olarak ne olduğunu asla bilemeyeceğiz.", spanish: "Igual nunca sabremos exactamente qué pasó", words: ["Igual", "nunca", "sabremos", "exactamente", "qué", "pasó", "sepamos"] },
        { type: "syntax", turkish: "Belki (Quizás) dünya değişir (cambiar - Duda alta).", spanish: "Quizás el mundo cambie", words: ["Quizás", "el", "mundo", "cambie", "cambia"] },
        { type: "syntax", turkish: "Belki (A lo mejor) yalan söylüyorlardır.", spanish: "A lo mejor están mintiendo", words: ["A", "lo", "mejor", "están", "mintiendo", "estén"] },
        { type: "syntax", turkish: "Belli mi olur (Lo mismo), yarın tatile çıkarız (irnos).", spanish: "Lo mismo nos vamos de vacaciones mañana", words: ["Lo", "mismo", "nos", "vamos", "de", "vacaciones", "mañana", "vayamos"] },
        { type: "syntax", turkish: "Belki (Tal vez) çok geçtir (Ser - Duda alta).", spanish: "Tal vez sea demasiado tarde", words: ["Tal", "vez", "sea", "demasiado", "tarde", "es"] }
      ]
    },
    {
      id: "c1_u5_n8",
      type: "theory",
      title: "Teoría III: La Duda Estructural (Puede que)",
      content: {
        concept: "Existen ciertas expresiones de probabilidad que funcionan como un verbo de valoración impersonal (Unidad 3 del B1). Al tener la estructura 'Verbo + QUE', el subjuntivo es un dictador absoluto. Aquí NO hay opción a usar el indicativo.\n\n### Los Dictadores del Subjuntivo:\n• **Puede que...** (Olabilir ki / Belki). Es la forma más usada en el lenguaje oral. *Ej: Puede que llueva.*\n• **Es posible que...** (Mümkündür ki). *Ej: Es posible que lleguemos tarde.*\n• **Es probable que...** (Muhtemeldir ki). *Ej: Es probable que la tienda esté cerrada.*\n\n### El Riesgo de Mezclar:\nUn error clásico es cruzar las reglas de 'Probablemente' (Adverbio) con 'Es probable que' (Estructura impersonal).\n• Probablemente **ES** caro. (Adverbio + Indicativo = Correcto).\n• Es probable que **ES** caro. (¡ERROR FATAL!).\n• Es probable que **SEA** caro. (Estructura + Subjuntivo = Correcto).",
        examples: [
          { es: "Puede que no tengamos suficiente dinero.", tr: "Yeterli paramız olmayabilir." },
          { es: "Es imposible que él construyera eso solo.", tr: "Onu tek başına inşa etmiş olması imkansız." },
          { es: "Puede que tengas razón, pero no estoy seguro.", tr: "Haklı olabilirsin ama emin değilim." }
        ]
      }
    },
    {
      id: "c1_u5_n9",
      type: "theory",
      title: "Sintaxis Visual: El Nivel Superior de la Duda",
      content: {
        concept: "Analizaremos cómo se construye una especulación científica que mezcla una estructura de duda dictatorial con una suposición sobre un evento remoto en el pasado.",
        examples: [{ es: "Es muy probable que la civilización desapareciera antes de que llegaran los barcos europeos.", tr: "Medeniyetin Avrupa gemileri gelmeden önce yok olmuş olması çok muhtemel." }],
        analysis: [
          { word: "Es muy probable que", type: "verb", literal: "Çok muhtemeldir ki", explanation: "Estructura impersonal de probabilidad. Dictamina que el siguiente verbo debe ser Subjuntivo.", examples: [] },
          { word: "la civilización", type: "noun", literal: "medeniyet", explanation: "Sujeto del evento supuesto.", examples: [] },
          { word: "desapareciera", type: "verb", literal: "yok olması (subj. pasado)", explanation: "Verbo DESAPARECER en Imperfecto de Subjuntivo. Usamos el pasado porque el evento hipotético ocurrió hace siglos.", examples: [] },
          { word: "antes de que", type: "connector", literal: "-den önce", explanation: "Conector temporal que marca anterioridad. Este conector SIEMPRE exige subjuntivo.", examples: [] },
          { word: "llegaran", type: "verb", literal: "gelmeleri (subj. pasado)", explanation: "Verbo LLEGAR en Imperfecto de Subjuntivo, provocado por 'antes de que'.", examples: [] },
          { word: "los barcos europeos.", type: "noun", literal: "Avrupa gemileri", explanation: "Sujeto de la segunda acción.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u5_n10",
      type: "theory",
      title: "Caja de Herramientas: Misterios y Ciencia",
      content: {
        concept: "Para hablar sobre suposiciones y teorías de probabilidad, este es el vocabulario académico que elevará tu discurso:\n\n• **El enigma / El misterio** (Muamma / Gizem)\n• **La hipótesis / La teoría** (Hipotez / Teori)\n• **El hallazgo / Descubrir** (Bulgu / Keşfetmek)\n• **La evidencia / La prueba** (Kanıt / Delil)\n• **Agotarse** (Tükenmek) ➔ *Se agotaron los recursos.*\n• **Provocar / Causar** (Neden olmak / Tetiklemek)\n• **Descartar** (Eleymek / İhtimal dışı bırakmak) ➔ *No podemos descartar esa opción.*\n• **Sugerir** (İma etmek / Öne sürmek)\n• **Inexplicable** (Açıklanamaz)",
        examples: [
          { es: "La evidencia sugiere que el cambio climático provocó el colapso.", tr: "Kanıtlar, iklim değişikliğinin çöküşe neden olduğunu (öne) sürüyor." },
          { es: "No podemos descartar ninguna hipótesis todavía.", tr: "Henüz hiçbir hipotezi ekarte edemeyiz." },
          { es: "Es un enigma inexplicable para la ciencia moderna.", tr: "Modern bilim için açıklanamaz bir gizemdir." }
        ]
      }
    },
    {
      id: "c1_u5_n11",
      type: "theory",
      title: "Taller de Producción: El Investigador de lo Oculto",
      content: {
        concept: "Ponte la gabardina de detective. Vas a redactar un texto especulativo.\n\n**Instrucciones:**\nEscribe un pequeño ensayo (10-12 líneas) proponiendo tu propia teoría sobre un gran misterio (Los extraterrestres, la construcción de las pirámides, o la Atlántida).\n\n1. Usa 'A lo mejor' o 'Igual' para proponer una teoría simple (con Indicativo).\n2. Usa 'Tal vez' o 'Quizás' para una teoría más atrevida (con Subjuntivo).\n3. Usa la estructura 'Es probable que...' o 'Puede que...'.\n4. Incluye al menos 3 palabras de la Caja de Herramientas (evidencia, descartar, enigma).\n\n**Inspiración:** 'El misterio de las pirámides de Egipto sigue sin resolverse. A lo mejor los antiguos egipcios tenían tecnología avanzada. Sin embargo, no podemos descartar la hipótesis alienígena. Es probable que las pirámides fueran construidas por...'",
        examples: []
      }
    },
    {
      id: "c1_u5_n12",
      type: "exam",
      title: "Examen de Unidad: La Duda Razonable",
      content: {
        concept: "Demuestra tu dominio absoluto sobre los adverbios de probabilidad. Elige el modo correcto según el nivel de certeza o la palabra que lo introduce.",
        exercises: [
          { type: "multiple_choice", question: "Elige la correcta: 'A lo mejor ______ (ir - yo) al cine esta tarde'.", options: ["vaya", "voy"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Es posible que ______ (ir - yo) al cine esta tarde'.", options: ["vaya", "voy"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Igual llueve'? (En el contexto de España).", options: ["Yağmur aynı şekilde yağıyor.", "Belki yağmur yağar (A lo mejor).", "Yağmur eşit."], correct: 1 },
          { type: "multiple_choice", question: "Si usamos 'Quizás' y estamos CASI SEGUROS de que ocurrirá, usamos:", options: ["Indicativo", "Subjuntivo", "Infinitivo"], correct: 0 },
          { type: "multiple_choice", question: "Si usamos 'Tal vez' y queremos expresar mucha DUDA o especulación remota, usamos:", options: ["Indicativo", "Subjuntivo", "Imperativo"], correct: 1 },
          { type: "multiple_choice", question: "Completa la regla: Si el adverbio de probabilidad (quizás, tal vez) se coloca DESPUÉS del verbo, es obligatorio usar:", options: ["Subjuntivo", "Indicativo", "Cualquiera de los dos"], correct: 1 },
          { type: "multiple_choice", question: "La civilización desapareció ______ (Probablemente) debido a una guerra.", options: ["Quizás", "Probablemente", "Igual"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Puede que no ______ (nosotros - tener) suficiente evidencia'.", options: ["tenemos", "tengamos"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Lo mismo ellos ______ (descubrir) la verdad hoy'.", options: ["descubran", "descubren"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Descartar una hipótesis'?", options: ["Bir hipotezi kanıtlamak.", "Bir hipotezi çöpe atmak / elemek.", "Bir hipotez yaratmak."], correct: 1 },
          { type: "syntax", turkish: "Belki (A lo mejor) o haklıdır.", spanish: "A lo mejor tiene razón", words: ["A", "lo", "mejor", "tiene", "razón", "tenga"] },
          { type: "syntax", turkish: "Belli mi olur (Lo mismo), bu gece çıkarız.", spanish: "Lo mismo salimos esta noche", words: ["Lo", "mismo", "salimos", "esta", "noche", "salgamos"] },
          { type: "syntax", turkish: "Belki (Quizás) cevap daha basittir (Duda alta -> Subj).", spanish: "Quizás la respuesta sea más simple", words: ["Quizás", "la", "respuesta", "sea", "más", "simple", "es"] },
          { type: "syntax", turkish: "Bakarsın (Igual) gizemi (el enigma) çözerler.", spanish: "Igual resuelven el enigma", words: ["Igual", "resuelven", "el", "enigma", "resuelvan"] },
          { type: "syntax", turkish: "Muhtemelen (Es probable que) bu sadece bir yalandır.", spanish: "Es probable que esto sea solo una mentira", words: ["Es", "probable", "que", "esto", "sea", "solo", "una", "mentira", "es"] },
          { type: "syntax", turkish: "O (kadın) yalan söylüyor olabilir (Puede que).", spanish: "Puede que ella esté mintiendo", words: ["Puede", "que", "ella", "esté", "mintiendo", "está"] },
          { type: "syntax", turkish: "Kanıtların (La evidencia) sahte (falsa) olması mümkün.", spanish: "Es posible que la evidencia sea falsa", words: ["Es", "posible", "que", "la", "evidencia", "sea", "falsa", "es"] },
          { type: "syntax", turkish: "Belki (Tal vez) hiçbir zaman bulamayız (Duda alta -> Subj).", spanish: "Tal vez no lo encontremos nunca", words: ["Tal", "vez", "no", "lo", "encontremos", "nunca", "encontramos"] },
          { type: "syntax", turkish: "Hiçbir seçeneği ihtimal dışı bırakamayız (Descartar).", spanish: "No podemos descartar ninguna opción", words: ["No", "podemos", "descartar", "ninguna", "opción"] },
          { type: "syntax", turkish: "Belki (A lo mejor) kaynaklar tükenmiştir.", spanish: "A lo mejor los recursos se agotaron", words: ["A", "lo", "mejor", "los", "recursos", "se", "agotaron", "agotaran"] }
        ]
      }
    }
  ]
};
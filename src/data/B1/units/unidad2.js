/**
 * UNIDAD 2: CORAZÓN Y MENTE (EMOCIONES Y SENTIMIENTOS) - NIVEL B1
 * Enfoque: Uso del Subjuntivo para expresar reacciones emocionales ante las acciones de otros.
 * Estructura: 12 Nodos Premium.
 */

export const unidad2 = {
  id: "b1_u2",
  title: "Unidad 2: Corazón y Mente",
  description: "Descubre cómo expresar lo que sientes. Aprende a usar el Subjuntivo para hablar de tus alegrías, miedos y enfados.",
  nodes: [
    {
      id: "b1_u2_n1",
      type: "theory",
      title: "Teoría I: La Fórmula de la Emoción",
      content: {
        concept: "En el nivel B1, el Subjuntivo no solo sirve para pedir cosas, sino para **reaccionar emocionalmente** al mundo.\n\nCuando la acción de OTRA persona provoca una emoción en ti, esa acción se conjuga en Subjuntivo (porque la valoras desde tus sentimientos, no como un hecho frío).\n\n### Verbos de Emoción más comunes:\n• **Me alegra / Me hace feliz** (Beni mutlu ediyor)\n• **Me molesta / Me enfada** (Beni rahatsız ediyor / Kızdırıyor)\n• **Me encanta** (Buna bayılıyorum)\n• **Me da pena / Me entristece** (Beni üzüyor)\n\n**Estructura:** Emoción + QUE + Sujeto 2 + Subjuntivo.\n*Ejemplo:* Me molesta (Mi emoción real) + QUE + tú llegues tarde (Tu acción evaluada).",
        examples: [
          { es: "Me alegra que estés aquí.", tr: "Burada olmana seviniyorum." },
          { es: "Le molesta que hablemos fuerte.", tr: "Yüksek sesle konuşmamız onu rahatsız ediyor." },
          { es: "Me encanta que me llames por las noches.", tr: "Geceleri beni aramana bayılıyorum." }
        ]
      }
    },
    {
      id: "b1_u2_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Emociones)",
      exercises: [
        { type: "syntax", turkish: "Burada olmana seviniyorum.", spanish: "Me alegra que estés aquí", words: ["Me", "alegra", "que", "estés", "aquí", "estás"] },
        { type: "syntax", turkish: "Geç kalman beni rahatsız ediyor.", spanish: "Me molesta que llegues tarde", words: ["Me", "molesta", "que", "llegues", "tarde", "llegas"] },
        { type: "syntax", turkish: "Beni ziyaret etmenize (ustedes) bayılıyorum.", spanish: "Me encanta que me visiten", words: ["Me", "encanta", "que", "me", "visiten", "visitan"] },
        { type: "syntax", turkish: "Onun (erkek) bizimle gelmemesi beni üzüyor (dar pena).", spanish: "Me da pena que él no venga", words: ["Me", "da", "pena", "que", "él", "no", "venga", "viene"] },
        { type: "syntax", turkish: "Bana yalan söylemen beni kızdırıyor.", spanish: "Me enfada que me digas mentiras", words: ["Me", "enfada", "que", "me", "digas", "mentiras", "dices"] },
        { type: "syntax", turkish: "Bu kadar çok çalışman beni endişelendiriyor (preocupar).", spanish: "Me preocupa que trabajes tanto", words: ["Me", "preocupa", "que", "trabajes", "tanto", "trabajas"] },
        { type: "syntax", turkish: "Bana yardım etmenize seviniyoruz (Nosotros).", spanish: "Nos alegra que nos ayudes", words: ["Nos", "alegra", "que", "nos", "ayudes", "ayudas"] },
        { type: "syntax", turkish: "Oğlunun bu kadar televizyon izlemesi onu (kadın) rahatsız ediyor.", spanish: "Le molesta que su hijo vea tanta televisión", words: ["Le", "molesta", "que", "su", "hijo", "vea", "tanta", "televisión", "ve"] },
        { type: "syntax", turkish: "Onun (kadın) benimle konuşmamasına üzülüyorum.", spanish: "Me entristece que ella no hable conmigo", words: ["Me", "entristece", "que", "ella", "no", "hable", "conmigo", "habla"] },
        { type: "syntax", turkish: "Bunu yapmana bayılıyorum.", spanish: "Me encanta que hagas eso", words: ["Me", "encanta", "que", "hagas", "eso", "haces"] }
      ]
    },
    {
      id: "b1_u2_n3",
      type: "theory",
      title: "Teoría II: Un Sujeto vs. Dos Sujetos",
      content: {
        concept: "Al igual que con los verbos de deseo (Querer), los verbos de emoción tienen una regla estricta sobre los sujetos.\n\n### 1. Mismo Sujeto = INFINITIVO (Sin 'QUE')\nSi la persona que siente la emoción es LA MISMA que realiza la acción, usamos el verbo en su forma original.\n• *A mí me gusta viajar.* (Yo siento, yo viajo).\n• *A él le molesta limpiar.* (Él siente, él limpia).\n\n### 2. Dos Sujetos = QUE + SUBJUNTIVO\nSi la persona que siente la emoción es DIFERENTE a la que realiza la acción, el puente se levanta.\n• *A mí me gusta QUE tú viajes.* (Yo siento, tú viajas).\n• *A él le molesta QUE nosotros limpiemos.* (Él siente, nosotros limpiamos).",
        examples: [
          { es: "Me alegra verte. (Mismo sujeto: Yo me alegro, yo te veo).", tr: "Seni gördüğüme sevindim." },
          { es: "Me alegra que me veas. (Dos sujetos: Yo me alegro, tú me ves).", tr: "Beni görmene sevindim." }
        ]
      }
    },
    {
      id: "b1_u2_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Entonación Emocional)",
      exercises: [
        { type: "speaking", spanish: "Me alegra que estés feliz", turkish: "Mutlu olmana seviniyorum." },
        { type: "speaking", spanish: "Le molesta que hables tanto", turkish: "Çok konuşman onu rahatsız ediyor." },
        { type: "speaking", spanish: "Nos encanta viajar juntos", turkish: "Birlikte seyahat etmeye bayılıyoruz (Aynı özne)." },
        { type: "speaking", spanish: "Nos encanta que viajes con nosotros", turkish: "Bizimle seyahat etmene bayılıyoruz (İki özne)." },
        { type: "speaking", spanish: "Me da pena que no tengas tiempo", turkish: "Zamanın olmamasına üzülüyorum." },
        { type: "speaking", spanish: "Me enfada que no me escuches", turkish: "Beni dinlememen beni kızdırıyor." },
        { type: "speaking", spanish: "Espero que no te moleste que fume", turkish: "Umarım sigara içmem seni rahatsız etmez." },
        { type: "speaking", spanish: "Me gusta cocinar los domingos", turkish: "Pazar günleri yemek yapmayı severim." },
        { type: "speaking", spanish: "Me gusta que cocines tú", turkish: "Senin yemek yapmanı seviyorum." },
        { type: "speaking", spanish: "Me alegra que hagas nuevos amigos", turkish: "Yeni arkadaşlar edinmene seviniyorum." }
      ]
    },
    {
      id: "b1_u2_n5",
      type: "theory",
      title: "Teoría III: El Reto Turco (Posesivos vs. QUE)",
      content: {
        concept: "Otra vez, el turco y el español chocan frontalmente al expresar emociones hacia otros.\n\n🇹🇷 **EN TURCO:** Usas sufijos posesivos y direccionales sobre el infinitivo.\n• *Gel-me-ne seviniyorum* (Literal: A tu venir me alegro).\n• *Gecik-me-niz-den rahatsız oluyorum* (Literal: De su de ustedes llegar tarde me molesto).\n\n🇪🇸 **EN ESPAÑOL:** No podemos 'poseer' los verbos. No decimos 'Me alegra a tu venir' o 'Me molesta tu llegar'.\nDebes traducir mentalmente así:\n• *Me alegra QUE tú vengas.*\n• *Me molesta QUE ustedes lleguen tarde.*\n\n**¡Rompe el posesivo turco e inserta siempre el QUE + Subjuntivo!**",
        examples: [
          { es: "Me molesta que mientas.", tr: "Yalan söylemenden rahatsız oluyorum." },
          { es: "Le encanta que le escribas.", tr: "Ona yazmana bayılıyor." },
          { es: "Nos entristece que se vayan.", tr: "Gitmelerine üzülüyoruz." }
        ]
      }
    },
    {
      id: "b1_u2_n6",
      type: "reading",
      title: "Lectura y Audio: Terapia de Pareja",
      content: {
        text: "Javier y Elena están en una sesión de terapia de pareja intentando resolver sus problemas de convivencia.\n\n— Terapeuta: Bueno, chicos, quiero que sean sinceros. Javier, ¿qué te molesta de Elena?\n— Javier: Sinceramente... me molesta mucho que ella deje sus zapatos en el salón. Me enfada que nunca lave los platos después de cenar. A mí me gusta tener la casa limpia.\n— Terapeuta: Elena, ¿y a ti?\n— Elena: A mí me da pena que él piense así. Me entristece que solo vea lo malo. Me encanta que él sea organizado, pero me preocupa que se obsesione tanto con la limpieza. ¡No me gusta que me grite por un par de zapatos!\n— Terapeuta: Me alegra que los dos puedan expresar lo que sienten. Ahora, necesitamos que ambos hagan un esfuerzo.",
        translation: "Javier ve Elena, birlikte yaşama sorunlarını çözmeye çalıştıkları bir çift terapisi seansındalar.\n\n— Terapist: Pekala çocuklar, dürüst olmanızı istiyorum. Javier, Elena hakkında seni ne rahatsız ediyor?\n— Javier: Dürüst olmak gerekirse... ayakkabılarını salonda bırakması beni çok rahatsız ediyor. Akşam yemeğinden sonra asla bulaşıkları yıkamaması beni kızdırıyor. Evi temiz tutmayı severim.\n— Elena: Onun böyle düşünmesine üzülüyorum. Sadece kötü şeyleri görmesi beni üzüyor. Düzenli olmasına bayılıyorum ama temizliği bu kadar takıntı haline getirmesi beni endişelendiriyor. Bir çift ayakkabı için bana bağırmasını sevmiyorum!\n— Terapist: İkinizin de ne hissettiğinizi ifade edebilmenize sevindim. Şimdi, ikinizin de bir çaba göstermesine ihtiyacımız var."
      }
    },
    {
      id: "b1_u2_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Emociones y Convivencia)",
      exercises: [
        { type: "syntax", turkish: "Ayakkabılarını burada bırakman beni rahatsız ediyor.", spanish: "Me molesta que dejes tus zapatos aquí", words: ["Me", "molesta", "que", "dejes", "tus", "zapatos", "aquí", "dejas"] },
        { type: "syntax", turkish: "Bana bağırmanı sevmiyorum.", spanish: "No me gusta que me grites", words: ["No", "me", "gusta", "que", "me", "grites", "gritas"] },
        { type: "syntax", turkish: "Sadece kötü şeyleri görmesine (onun) üzülüyorum.", spanish: "Me entristece que solo vea lo malo", words: ["Me", "entristece", "que", "solo", "vea", "lo", "malo", "ve"] },
        { type: "syntax", turkish: "Düzenli olmana bayılıyorum.", spanish: "Me encanta que seas organizado", words: ["Me", "encanta", "que", "seas", "organizado", "eres"] },
        { type: "syntax", turkish: "Ne hissettiğini söyleyebilmene sevindim.", spanish: "Me alegra que puedas decir lo que sientes", words: ["Me", "alegra", "que", "puedas", "decir", "lo", "sientes", "puedes"] },
        { type: "speaking", spanish: "Me enfada que no me ayudes", turkish: "Bana yardım etmemen beni kızdırıyor." },
        { type: "speaking", spanish: "Me da pena que te vayas tan pronto", turkish: "Bu kadar erken gitmene üzülüyorum." },
        { type: "speaking", spanish: "Me preocupa que no duermas bien", turkish: "İyi uyumaman beni endişelendiriyor." },
        { type: "speaking", spanish: "Le molesta que yo trabaje mucho", turkish: "Çok çalışmam onu rahatsız ediyor." },
        { type: "speaking", spanish: "Nos encanta que vengas a visitarnos", turkish: "Bizi ziyarete gelmene bayılıyoruz." }
      ]
    },
    {
      id: "b1_u2_n8",
      type: "theory",
      title: "Teoría IV: Miedos y la trampa del 'DE QUE'",
      content: {
        concept: "Al expresar **Miedo** o **Preocupación**, el español requiere a menudo el uso de una preposición (DE o POR) antes de la palabra QUE. Esto confunde a muchos estudiantes.\n\n### Verbos que exigen 'DE':\n• **Tener miedo DE que...** (Korkmak)\n• **Estar harto DE que...** (Bıkmak / Usanmak)\n• **Alegrarse DE que...** (Sevinmek - *Nota: 'Me alegra que' no lleva DE, pero 'Me alegro de que' sí lleva. Ambas son correctas*).\n\n### Verbos que exigen 'POR':\n• **Estar preocupado POR que...** (Endişelenmek)\n\n*Ejemplo:* Tengo miedo **de que** no apruebes el examen. (Sınavı geçememenden korkuyorum).",
        examples: [
          { es: "Estoy harto de que me digas qué hacer.", tr: "Bana ne yapacağımı söylemenden bıktım." },
          { es: "Tenemos miedo de que llueva en la boda.", tr: "Düğünde yağmur yağmasından korkuyoruz." },
          { es: "Estoy preocupado por que ella no llame.", tr: "Onun (kadın) aramaması konusunda endişeliyim." }
        ]
      }
    },
    {
      id: "b1_u2_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual",
      content: {
        concept: "Vamos a deconstruir una frase que usa preposición, pronombre y verbo de cambio vocálico.",
        examples: [{ es: "Yo tengo miedo de que mi novio no vuelva temprano a casa hoy.", tr: "Erkek arkadaşımın bugün eve erken dönmemesinden korkuyorum." }],
        analysis: [
          { word: "tengo miedo", type: "verb", literal: "korkum var (korkuyorum)", explanation: "Emoción en Indicativo. Pertenece al sujeto 1 (Yo).", examples: [] },
          { word: "de", type: "connector", literal: "-dan/-den (bağlantı)", explanation: "Preposición obligatoria que acompaña a 'tener miedo'.", examples: [] },
          { word: "que", type: "connector", literal: "ki (bağlaç)", explanation: "El puente que introduce el nuevo sujeto.", examples: [] },
          { word: "mi novio", type: "noun", literal: "erkek arkadaşım", explanation: "Sujeto 2. Quien realiza la acción temida.", examples: [] },
          { word: "no vuelva", type: "verb", literal: "dönmemesi", explanation: "Verbo VOLVER en Subjuntivo. Irregular: la 'O' cambia a 'UE' (Vuelva).", examples: [] },
          { word: "temprano", type: "adverb", literal: "erken", explanation: "Adverbio de tiempo.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u2_n10",
      type: "theory",
      title: "Caja de Herramientas: Psicología y Relaciones",
      content: {
        concept: "Para hablar de tus emociones, necesitas un vocabulario rico sobre virtudes, defectos y relaciones humanas.\n\n### Virtudes y Defectos:\n• **Egoísta** (Bencil)\n• **Empático/a** (Empatik / Anlayışlı)\n• **Organizado/a** (Düzenli)\n• **Desordenado/a** (Dağınık)\n• **Mentiroso/a** (Yalancı)\n\n### Acciones de Pareja/Convivencia:\n• **Discutir** (Tartışmak / Kavga etmek)\n• **Quejarse** (Şikayet etmek)\n• **Pedir perdón** (Özür dilemek)\n• **Llegar a un acuerdo** (Bir anlaşmaya varmak / Uzlaşmak)\n• **Llorar** (Ağlamak)\n\n*Ejemplo:* Me molesta que seas tan egoísta y que nunca pidas perdón cuando discutimos.",
        examples: [
          { es: "Me alegra que seas tan empático conmigo.", tr: "Benimle bu kadar empatik olmana seviniyorum." },
          { es: "Estoy harto de que te quejes por todo.", tr: "Her şeyden şikayet etmenden bıktım." },
          { es: "Me da pena que siempre discutamos.", tr: "Her zaman tartışmamıza üzülüyorum." }
        ]
      }
    },
    {
      id: "b1_u2_n11",
      type: "theory",
      title: "Taller de Producción: Lo que siento",
      content: {
        concept: "Es hora de canalizar tus emociones en español.\n\n**Instrucciones:**\nEscribe un texto (mínimo 6 a 8 líneas) sobre las cosas que te alegran, te molestan y te dan miedo de la sociedad actual, de tu pareja o de tus amigos.\n\n1. Usa al menos una vez: 'Me molesta que...', 'Me alegra que...' y 'Tengo miedo de que...'.\n2. Usa al menos un verbo reflexivo en subjuntivo (quejarse, esforzarse).\n3. Incluye vocabulario de la Caja de Herramientas (Egoísta, discutir, etc.).\n\n**Inspiración:** 'En el mundo de hoy, me molesta mucho que la gente sea tan egoísta y que se queje por todo. Por otro lado, me hace muy feliz que mis amigos me apoyen. Sin embargo, tengo miedo de que nosotros perdamos la empatía...'",
        examples: []
      }
    },
    {
      id: "b1_u2_n12",
      type: "exam",
      title: "Examen de Unidad: El Corazón",
      content: {
        concept: "Demuestra tu dominio emocional del Subjuntivo, diferenciando los sujetos y recordando la preposición 'DE'.",
        exercises: [
          // 15 Opción Múltiple
          { type: "multiple_choice", question: "Elige la correcta: A mí me encanta ______ en la playa.", options: ["que camino", "caminar", "que camine"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: A mí me encanta que tú ______ conmigo en la playa.", options: ["caminas", "caminar", "camines"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué preposición acompaña al verbo temer/tener miedo?", options: ["POR que", "DE que", "A que"], correct: 1 },
          { type: "multiple_choice", question: "Me molesta que él nunca ______ (decir) la verdad.", options: ["diga", "dice", "decir"], correct: 0 },
          { type: "multiple_choice", question: "Estoy harto ______ me grites.", options: ["que", "por que", "de que"], correct: 2 },
          { type: "multiple_choice", question: "La traducción correcta de 'Gelmene sevindim' es:", options: ["Me alegra a tu venir", "Me alegra que vienes", "Me alegra que vengas"], correct: 2 },
          { type: "multiple_choice", question: "Me preocupa ______ (trabajar) tanto (Yo mismo).", options: ["trabaje", "trabajar", "que trabaje"], correct: 1 },
          { type: "multiple_choice", question: "A ellos les da pena que nosotros no ______ (tener) dinero.", options: ["tenemos", "teniendo", "tengamos"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa 'Estar harto'?", options: ["Tok olmak", "Bıkmak / Usanmak", "Mutlu olmak"], correct: 1 },
          { type: "multiple_choice", question: "Me enfada que ella sea tan ______ (bencil).", options: ["egoísta", "empática", "mentirosa"], correct: 0 },
          { type: "multiple_choice", question: "Nos alegra que ustedes ______ (hacer) las paces.", options: ["hacen", "hagan", "hacer"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Quejarse'?", options: ["Ağlamak", "Şikayet etmek", "Kavga etmek"], correct: 1 },
          { type: "multiple_choice", question: "Tengo miedo de que ______ (llover) mañana. (Verbo Llover)", options: ["llueva", "llueve", "lloviera"], correct: 0 },
          { type: "multiple_choice", question: "Me entristece que tú ______ (llorar) por él.", options: ["lloras", "llores", "llorar"], correct: 1 },
          { type: "multiple_choice", question: "Espero que no te ______ (molestar) el humo.", options: ["molesta", "moleste", "molestar"], correct: 1 },

          // 15 Sintaxis
          { type: "syntax", turkish: "Erken gelmene bayılıyorum.", spanish: "Me encanta que llegues temprano", words: ["Me", "encanta", "que", "llegues", "temprano", "llegas"] },
          { type: "syntax", turkish: "Çok çalışmandan bıktım.", spanish: "Estoy harto de que trabajes tanto", words: ["Estoy", "harto", "de", "que", "trabajes", "tanto", "trabajas"] },
          { type: "syntax", turkish: "Bana yalan söylemesi beni kızdırıyor.", spanish: "Me enfada que me diga mentiras", words: ["Me", "enfada", "que", "me", "diga", "mentiras", "dice"] },
          { type: "syntax", turkish: "Onun (kadın) beni aramamasına üzülüyorum.", spanish: "Me entristece que ella no me llame", words: ["Me", "entristece", "que", "ella", "no", "me", "llame", "llama"] },
          { type: "syntax", turkish: "Sınavı geçememenden korkuyorum.", spanish: "Tengo miedo de que no apruebes el examen", words: ["Tengo", "miedo", "de", "que", "no", "apruebes", "el", "examen", "apruebas"] },
          { type: "syntax", turkish: "İspanyolca öğrenmene seviniyoruz.", spanish: "Nos alegra que aprendas español", words: ["Nos", "alegra", "que", "aprendas", "español", "aprendes"] },
          { type: "syntax", turkish: "Zamanın olmaması onu (erkek) rahatsız ediyor.", spanish: "Le molesta que no tengas tiempo", words: ["Le", "molesta", "que", "no", "tengas", "tiempo", "tienes"] },
          { type: "syntax", turkish: "Pazar günleri uyumaya bayılırım (Mismo sujeto).", spanish: "Me encanta dormir los domingos", words: ["Me", "encanta", "dormir", "los", "domingos", "que", "duerma"] },
          { type: "syntax", turkish: "Her şeyden şikayet etmesi beni endişelendiriyor.", spanish: "Me preocupa que se queje por todo", words: ["Me", "preocupa", "que", "se", "queje", "por", "todo", "queja"] },
          { type: "syntax", turkish: "Evde kalmamızı tercih etmene üzülüyorum.", spanish: "Me da pena que prefieras que nos quedemos", words: ["Me", "da", "pena", "que", "prefieras", "que", "nos", "quedemos"] },
          { type: "syntax", turkish: "Bu kadar bencil olman beni kızdırıyor.", spanish: "Me enfada que seas tan egoísta", words: ["Me", "enfada", "que", "seas", "tan", "egoísta", "eres"] },
          { type: "syntax", turkish: "Benimle tartışmak istemenden bıktım.", spanish: "Estoy harto de que quieras discutir", words: ["Estoy", "harto", "de", "que", "quieras", "discutir", "quieres"] },
          { type: "syntax", turkish: "Özür dilemene sevindim.", spanish: "Me alegro de que pidas perdón", words: ["Me", "alegro", "de", "que", "pidas", "perdón", "pides"] },
          { type: "syntax", turkish: "Bunu senin yapmana bayılıyorum.", spanish: "Me encanta que hagas esto tú", words: ["Me", "encanta", "que", "hagas", "esto", "tú", "haces"] },
          { type: "syntax", turkish: "Dışarı çıkmamızdan (onun) korktuğunu sanmıyorum.", spanish: "No creo que tenga miedo de que salgamos", words: ["No", "creo", "que", "tenga", "miedo", "de", "que", "salgamos"] }
        ]
      }
    }
  ]
};
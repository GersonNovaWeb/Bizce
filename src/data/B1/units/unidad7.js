/**
 * UNIDAD 7: EL ARTE DE ACONSEJAR (NIVEL B1)
 * Enfoque: Dar recomendaciones usando el Subjuntivo y el Condicional.
 * Estructura: 12 Nodos Premium.
 */

export const unidad7 = {
  id: "b1_u7",
  title: "Unidad 7: El Arte de Aconsejar",
  description: "Aprende a dar consejos y recomendaciones con empatía utilizando el Modo Subjuntivo y el Condicional.",
  nodes: [
    {
      id: "b1_u7_n1",
      type: "theory",
      title: "Teoría I: Los Verbos de Recomendación",
      content: {
        concept: "Cuando queremos ayudar a alguien y decirle qué es lo mejor para él o ella, usamos los **Verbos de Recomendación**. Como estamos influyendo en la acción de otra persona, la regla mágica vuelve a aparecer:\n\n**Sujeto 1 + Verbo de Consejo + QUE + Sujeto 2 + SUBJUNTIVO**\n\n### Los 3 verbos principales:\n1. **Recomendar** (Tavsiye etmek): *Te recomiendo que...*\n2. **Aconsejar** (Öğüt vermek / Tavsiye etmek): *Te aconsejo que...*\n3. **Sugerir** (Önermek): *Te sugiero que...*\n\n⚠️ ¡Atención a la ortografía! 'Recomendar' y 'Sugerir' tienen un cambio de vocal en el presente (Yo rec**omie**ndo, Yo s**ugie**ro).",
        examples: [
          { es: "Te recomiendo que leas este libro.", tr: "Bu kitabı okumanı tavsiye ederim." },
          { es: "El médico le aconseja que descanse más.", tr: "Doktor ona daha çok dinlenmesini öğütlüyor." },
          { es: "Os sugiero que vayáis en metro.", tr: "Metroyla gitmenizi öneririm." }
        ]
      }
    },
    {
      id: "b1_u7_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Consejos)",
      exercises: [
        { type: "syntax", turkish: "Sana dinlenmeni tavsiye ederim.", spanish: "Te recomiendo que descanses", words: ["Te", "recomiendo", "que", "descanses", "descansas"] },
        { type: "syntax", turkish: "Sana doktora gitmeni öğütlüyorum.", spanish: "Te aconsejo que vayas al médico", words: ["Te", "aconsejo", "que", "vayas", "al", "médico", "vas"] },
        { type: "syntax", turkish: "Sana bunu yapmamanı öneririm.", spanish: "Te sugiero que no hagas esto", words: ["Te", "sugiero", "que", "no", "hagas", "esto", "haces"] },
        { type: "syntax", turkish: "Bize erken çıkmamızı (salir) tavsiye ediyorlar.", spanish: "Nos recomiendan que salgamos temprano", words: ["Nos", "recomiendan", "que", "salgamos", "temprano", "salimos"] },
        { type: "syntax", turkish: "Ona (kadın) su içmesini tavsiye ederim.", spanish: "Le recomiendo que beba agua", words: ["Le", "recomiendo", "que", "beba", "agua", "bebe"] },
        { type: "syntax", turkish: "Size (çoğul) çok çalışmanızı öneriyorum.", spanish: "Les sugiero que estudien mucho", words: ["Les", "sugiero", "que", "estudien", "mucho", "estudian"] },
        { type: "syntax", turkish: "Sana bunu yememeni öğütlerim.", spanish: "Te aconsejo que no comas esto", words: ["Te", "aconsejo", "que", "no", "comas", "esto", "comes"] },
        { type: "syntax", turkish: "Annem bana evi temizlememi tavsiye ediyor.", spanish: "Mi madre me recomienda que limpie la casa", words: ["Mi", "madre", "me", "recomienda", "que", "limpie", "la", "casa"] },
        { type: "syntax", turkish: "Sana doğruyu söylemeni öneririm.", spanish: "Te sugiero que digas la verdad", words: ["Te", "sugiero", "que", "digas", "la", "verdad", "dices"] },
        { type: "syntax", turkish: "Sana onu unutmanı öğütlüyorum.", spanish: "Te aconsejo que lo olvides", words: ["Te", "aconsejo", "que", "lo", "olvides", "olvidas"] }
      ]
    },
    {
      id: "b1_u7_n3",
      type: "theory",
      title: "Teoría II: Alternativas Nativas (El Condicional)",
      content: {
        concept: "A veces, decir 'te aconsejo que' suena muy formal o distante. Los hispanohablantes usamos estructuras mucho más empáticas usando el **Condicional** (Unidad 11 del A2).\n\n### 1. Ponerse en los zapatos del otro\n• **Yo que tú...** (Ben senin yerinde olsam...)\n• **Yo, en tu lugar...** (Ben senin yerinde...)\n*Regla:* Después de estas expresiones, usamos el verbo en Condicional (-ía). NO usamos subjuntivo.\n*Ej: Yo que tú, **dormiría** más.*\n\n### 2. El verbo DEBER (Gereklilik/Tavsiye)\nUsamos el condicional de 'Deber' (Deberías) seguido de un verbo en Infinitivo. Es exactamente igual a 'You should' en inglés.\n*Ej: **Deberías** ir al médico* (Doktora gitmelisin).",
        examples: [
          { es: "Yo que tú, no le diría nada.", tr: "Senin yerinde olsam, ona hiçbir şey söylemezdim." },
          { es: "Deberías hacer más deporte.", tr: "Daha fazla spor yapmalısın." },
          { es: "Yo, en tu lugar, buscaría otro trabajo.", tr: "Senin yerinde olsam, başka bir iş arardım." }
        ]
      }
    },
    {
      id: "b1_u7_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Empatía)",
      exercises: [
        { type: "speaking", spanish: "Yo que tú descansaría un poco", turkish: "Senin yerinde olsam biraz dinlenirdim." },
        { type: "speaking", spanish: "Deberías comer más sano", turkish: "Daha sağlıklı yemelisin." },
        { type: "speaking", spanish: "Yo en tu lugar iría al médico", turkish: "Senin yerinde olsam doktora giderdim." },
        { type: "speaking", spanish: "Deberíamos hablar con ella", turkish: "Onunla konuşmalıyız (Tavsiye)." },
        { type: "speaking", spanish: "Yo que tú no me preocuparía", turkish: "Senin yerinde olsam endişelenmezdim." },
        { type: "speaking", spanish: "Deberías pedirle perdón", turkish: "Ondan özür dilemelisin." },
        { type: "speaking", spanish: "Yo en tu lugar buscaría ayuda", turkish: "Senin yerinde olsam yardım arardım." },
        { type: "speaking", spanish: "No deberías beber tanto café", turkish: "Bu kadar çok kahve içmemelisin." },
        { type: "speaking", spanish: "Yo que tú se lo diría hoy", turkish: "Senin yerinde olsam ona bugün söylerdim." },
        { type: "speaking", spanish: "Deberías tomarte unas vacaciones", turkish: "Bir tatile çıkmalısın." }
      ]
    },
    {
      id: "b1_u7_n5",
      type: "theory",
      title: "El Reto Turco: Tavsiye etmek vs Recomendar",
      content: {
        concept: "Al dar consejos, el turco y el español vuelven a chocar en su estructura lógica.\n\n🇹🇷 **EN TURCO:** Usas un infinitivo con posesivo o el sufijo de obligación.\n• *Bunu **yapmanı** tavsiye ederim.* (Literal: Tu hacer esto recomiendo).\n• *Doktora **gitmelisin**.* (Tienes que ir al médico).\n\n🇪🇸 **EN ESPAÑOL:** \n1. Si usas 'Recomendar', **TIENES QUE ROMPER EL INFINITIVO**. \n• ❌ Mal: Te recomiendo ir. (Suena robótico).\n• ✅ Bien: Te recomiendo **QUE VAYAS**. (Subjuntivo).\n\n2. Si usas 'Deberías', **TIENES QUE USAR EL INFINITIVO**.\n• ✅ Bien: Deberías **IR** al médico.",
        examples: [
          { es: "Te sugiero que lo pienses bien.", tr: "Bunu iyi düşünmeni öneririm." },
          { es: "Deberías pensarlo bien.", tr: "Bunu iyi düşünmelisin." },
          { es: "Te recomiendo que no leas eso.", tr: "Bunu okumamanı tavsiye ederim." }
        ]
      }
    },
    {
      id: "b1_u7_n6",
      type: "reading",
      title: "Lectura y Audio: El estrés laboral",
      content: {
        text: "Javier está tomando un café con su amiga Lucía. Él tiene mala cara y parece muy cansado.\n\n— Lucía: Javier, ¿qué te pasa? Tienes unas ojeras terribles.\n— Javier: Estoy agotado, Lucía. Trabajo más de diez horas al día y mi jefe me exige demasiado. No duermo bien y siempre me duele la cabeza.\n— Lucía: Madre mía. Yo que tú, hablaría seriamente con tu jefe. No es sano vivir así. Deberías tomarte unos días libres para descansar.\n— Javier: Lo sé, pero me da miedo perder mi trabajo.\n— Lucía: Tu salud es más importante. Te recomiendo que busques ayuda profesional, un terapeuta tal vez. Te sugiero que empieces a hacer yoga o meditación por las tardes. \n— Javier: Tienes razón. Mañana hablaré con recursos humanos. Gracias por el consejo.",
        translation: "Javier arkadaşı Lucia ile kahve içiyor. Yüzü kötü görünüyor ve çok yorgun görünüyor.\n\n— Lucia: Javier, neyin var? Gözlerinin altında korkunç morluklar var.\n— Javier: Tükendim Lucia. Günde on saatten fazla çalışıyorum ve patronum benden çok şey talep ediyor. İyi uyuyamıyorum ve hep başım ağrıyor.\n— Lucia: Aman Tanrım. Senin yerinde olsam patronunla ciddi bir şekilde konuşurdum. Böyle yaşamak sağlıklı değil. Dinlenmek için birkaç gün izin almalısın.\n— Javier: Biliyorum ama işimi kaybetmekten korkuyorum.\n— Lucia: Sağlığın daha önemli. Profesyonel yardım almanı, belki bir terapist bulmanı tavsiye ederim. Akşamları yoga veya meditasyon yapmaya başlamanı öneririm.\n— Javier: Haklısın. Yarın insan kaynaklarıyla konuşacağım. Tavsiyen için teşekkürler."
      }
    },
    {
      id: "b1_u7_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Consejos Mixtos)",
      exercises: [
        { type: "syntax", turkish: "Senin yerinde olsam patronunla konuşurdum.", spanish: "Yo que tú hablaría con tu jefe", words: ["Yo", "que", "tú", "hablaría", "con", "tu", "jefe", "hablo"] },
        { type: "syntax", turkish: "Yoga yapmanı tavsiye ederim.", spanish: "Te recomiendo que hagas yoga", words: ["Te", "recomiendo", "que", "hagas", "yoga", "haces"] },
        { type: "syntax", turkish: "Birkaç gün izin almalısın.", spanish: "Deberías tomarte unos días libres", words: ["Deberías", "tomarte", "unos", "días", "libres", "tomes"] },
        { type: "syntax", turkish: "Ona (kadın) dinlenmesini öneriyorum.", spanish: "Le sugiero que descanse", words: ["Le", "sugiero", "que", "descanse", "descansa"] },
        { type: "syntax", turkish: "Senin yerinde olsam endişelenmezdim.", spanish: "Yo en tu lugar no me preocuparía", words: ["Yo", "en", "tu", "lugar", "no", "me", "preocuparía"] },
        { type: "speaking", spanish: "Te recomiendo que busques ayuda", turkish: "Yardım aramanı tavsiye ederim." },
        { type: "speaking", spanish: "Deberías dormir ocho horas", turkish: "Sekiz saat uyumalısın." },
        { type: "speaking", spanish: "Yo que tú iría al médico", turkish: "Senin yerinde olsam doktora giderdim." },
        { type: "speaking", spanish: "Te sugiero que comas más sano", turkish: "Daha sağlıklı yemeni öneririm." },
        { type: "speaking", spanish: "Te aconsejo que no trabajes tanto", turkish: "Bu kadar çok çalışmamanı öğütlerim." }
      ]
    },
    {
      id: "b1_u7_n8",
      type: "theory",
      title: "Laboratorio de Slang: Bienestar y Estrés",
      content: {
        concept: "Cuando damos consejos a amigos, usamos frases hechas (slang) muy particulares en español. Aquí tienes las mejores expresiones para hablar de estrés y relajación.\n\n### Frases de Ánimo y Consejo:\n• **Tomárselo con calma** (Ağırdan almak / Sakin olmak): *Deberías tomártelo con calma.*\n• **Desconectar** (Kafa dinlemek / Şalteri kapatmak): Alejarte del teléfono y del trabajo. *Necesitas desconectar el fin de semana.*\n• **Ponerse las pilas** (Enerji toplamak / İşe koyulmak): *Tienes que ponerte las pilas para el examen.*\n• **Darse un respiro** (Bir mola vermek): *Te sugiero que te des un respiro.*\n• **Estar agobiado/a** (Bunalmış olmak): Sinónimo de muy estresado.",
        examples: [
          { es: "Estás muy agobiado, deberías tomártelo con calma.", tr: "Çok bunalmışsın, biraz sakin olmalısın (ağırdan almalısın)." },
          { es: "Yo que tú desconectaría el teléfono.", tr: "Senin yerinde olsam telefonu kapatırdım (kafa dinlerdim)." },
          { es: "Te aconsejo que te des un respiro.", tr: "Kendine bir mola vermeni tavsiye ederim." }
        ]
      }
    },
    {
      id: "b1_u7_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Consejo Supremo",
      content: {
        concept: "Vamos a deconstruir una oración que combina un pronombre de objeto indirecto (te), un verbo de consejo (recomiendo), el conector (que), un verbo reflexivo en subjuntivo (te tomes) y una frase idiomática (con calma).",
        examples: [{ es: "Yo te recomiendo que te lo tomes con mucha calma.", tr: "Bunu çok ağırdan almanı tavsiye ederim." }],
        analysis: [
          { word: "Yo te", type: "pronoun", literal: "Ben sana", explanation: "Sujeto y pronombre de objeto indirecto. Indica a quién va dirigido el consejo.", examples: [] },
          { word: "recomiendo", type: "verb", literal: "tavsiye ederim", explanation: "Verbo matriz en presente de indicativo. Expresa la acción real de aconsejar.", examples: [] },
          { word: "que", type: "connector", literal: "ki", explanation: "El puente obligatorio.", examples: [] },
          { word: "te lo", type: "pronoun", literal: "kendine onu", explanation: "Doble pronombre. 'Te' (reflexivo para ti) y 'lo' (la situación).", examples: [] },
          { word: "tomes", type: "verb", literal: "alasın (subjuntivo)", explanation: "Verbo TOMAR en subjuntivo. Forma parte de la expresión 'tomarse algo'.", examples: [] },
          { word: "con mucha calma", type: "noun", literal: "çok sakinlikle", explanation: "Modo en el que debe realizar la acción. Significa 'ağırdan almak'.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u7_n10",
      type: "theory",
      title: "Caja de Herramientas: Salud Mental y Fitness",
      content: {
        concept: "Para dar buenos consejos de vida, necesitas vocabulario moderno sobre bienestar.\n\n### Salud y Terapia:\n• **El/La terapeuta** (Terapist)\n• **La salud mental** (Akıl sağlığı)\n• **Estar deprimido/a** (Depresyonda olmak)\n• **La ansiedad** (Anksiyete)\n\n### Fitness y Bienestar:\n• **Hacer deporte** (Spor yapmak)\n• **Comer sano** (Sağlıklı beslenmek)\n• **Perder peso** (Kilo vermek)\n• **Estar en forma** (Formda olmak)\n• **El gimnasio** (Spor salonu)",
        examples: [
          { es: "Te sugiero que vayas al gimnasio para estar en forma.", tr: "Formda olmak için spor salonuna gitmeni öneririm." },
          { es: "Deberías cuidar tu salud mental.", tr: "Akıl sağlığına dikkat etmelisin." },
          { es: "Te aconsejo que comas más sano para perder peso.", tr: "Kilo vermek için daha sağlıklı yemeni tavsiye ederim." }
        ]
      }
    },
    {
      id: "b1_u7_n11",
      type: "theory",
      title: "Taller de Producción: Querida Amiga",
      content: {
        concept: "Es hora de ser la voz de la razón. Vas a escribirle un mensaje a una amiga.\n\n**Instrucciones:**\nImagina que tu mejor amiga está trabajando 12 horas al día, no duerme y come muy mal. Escribe un mensaje (mínimo 6 líneas) dándole consejos.\n1. Usa al menos dos veces el Subjuntivo (Te recomiendo que, Te aconsejo que).\n2. Usa al menos dos veces el Condicional (Yo que tú, Deberías).\n3. Incluye una expresión de slang (desconectar, tomárselo con calma).\n\n**Inspiración:** 'Hola María, me preocupa mucho tu salud. Yo que tú, hablaría con el jefe. Te recomiendo que te tomes unos días libres y que...'",
        examples: []
      }
    },
    {
      id: "b1_u7_n12",
      type: "exam",
      title: "Examen de Unidad: El Arte de Aconsejar",
      content: {
        concept: "Demuestra que dominas la empatía, el subjuntivo de recomendación y los consejos con condicional.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Elige la correcta: 'Te recomiendo que ______ (descansar) más'.", options: ["descansas", "descanses", "descansar"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué estructura NO usa el subjuntivo?", options: ["Te sugiero que...", "Deberías...", "Te aconsejo que..."], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Deberías ______ (ir) al médico'.", options: ["ir", "vayas", "vas"], correct: 0 },
          { type: "multiple_choice", question: "Si usas 'Yo que tú...', el verbo siguiente debe ir en:", options: ["Presente", "Subjuntivo", "Condicional"], correct: 2 },
          { type: "multiple_choice", question: "Yo en tu lugar ______ (buscar) otro trabajo.", options: ["busque", "busco", "buscaría"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa 'Tomárselo con calma'?", options: ["Sakin olmak / Ağırdan almak", "Çok çalışmak", "Kızmak"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Desconectar' en un contexto de estrés?", options: ["Fişi çekmek (Literal)", "Kafa dinlemek / Uzaklaşmak", "İnternete bağlanmak"], correct: 1 },
          { type: "multiple_choice", question: "Le aconsejo que ______ (beber) mucha agua (a él).", options: ["beba", "bebe", "beber"], correct: 0 },
          { type: "multiple_choice", question: "Nos sugieren que ______ (hacer) más deporte.", options: ["hacemos", "hagamos", "hacer"], correct: 1 },
          { type: "multiple_choice", question: "Te recomiendo ______ (tú - comer) sano.", options: ["que comas", "que comes", "comer"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué es estar 'agobiado'?", options: ["Mutlu olmak", "Bunalmış / Çok stresli olmak", "Dinlenmiş olmak"], correct: 1 },
          { type: "multiple_choice", question: "Yo que tú, se lo ______ (decir) ahora mismo.", options: ["diría", "digo", "diga"], correct: 0 },
          { type: "multiple_choice", question: "Les recomiendo que no ______ (salir) hoy.", options: ["salen", "salgan", "salir"], correct: 1 },
          { type: "multiple_choice", question: "Si digo 'Tienes que ponerte las pilas', te estoy diciendo:", options: ["Que compres pilas", "Que te animes y trabajes duro", "Que te relajes"], correct: 1 },
          { type: "multiple_choice", question: "Deberíamos ______ (tomar) un respiro.", options: ["tomar", "tomemos", "tomamos"], correct: 0 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Sana doktora gitmeni tavsiye ederim.", spanish: "Te recomiendo que vayas al médico", words: ["Te", "recomiendo", "que", "vayas", "al", "médico", "vas"] },
          { type: "syntax", turkish: "Senin yerinde olsam ona söylemezdim.", spanish: "Yo que tú no se lo diría", words: ["Yo", "que", "tú", "no", "se", "lo", "diría", "dirías"] },
          { type: "syntax", turkish: "Biraz kafa dinlemelisin.", spanish: "Deberías desconectar un poco", words: ["Deberías", "desconectar", "un", "poco", "desconectas"] },
          { type: "syntax", turkish: "Ona (kadın) sağlıklı beslenmesini öneriyorum.", spanish: "Le sugiero que coma sano", words: ["Le", "sugiero", "que", "coma", "sano", "come"] },
          { type: "syntax", turkish: "Bunu ağırdan almanı tavsiye ederim.", spanish: "Te aconsejo que te lo tomes con calma", words: ["Te", "aconsejo", "que", "te", "lo", "tomes", "con", "calma"] },
          { type: "syntax", turkish: "Bana biraz dinlenmemi öğütlediler.", spanish: "Me recomendaron que descanse un poco", words: ["Me", "recomendaron", "que", "descanse", "un", "poco", "descanso"] },
          { type: "syntax", turkish: "Senin yerinde olsam endişelenmezdim.", spanish: "Yo en tu lugar no me preocuparía", words: ["Yo", "en", "tu", "lugar", "no", "me", "preocuparía"] },
          { type: "syntax", turkish: "Daha fazla spor yapmalıyız.", spanish: "Deberíamos hacer más deporte", words: ["Deberíamos", "hacer", "más", "deporte", "hacemos"] },
          { type: "syntax", turkish: "Formda kalmak için spor salonuna git.", spanish: "Ve al gimnasio para estar en forma", words: ["Ve", "al", "gimnasio", "para", "estar", "en", "forma"] },
          { type: "syntax", turkish: "Akıl sağlığına dikkat etmeni öneririm.", spanish: "Te sugiero que cuides tu salud mental", words: ["Te", "sugiero", "que", "cuides", "tu", "salud", "mental", "cuidas"] },
          { type: "syntax", turkish: "Çok bunalmışsın, kendine bir mola ver (darse un respiro).", spanish: "Estás muy agobiado date un respiro", words: ["Estás", "muy", "agobiado", "date", "un", "respiro"] },
          { type: "syntax", turkish: "Onlara (erkekler) evi temizlemelerini tavsiye ettim.", spanish: "Les recomendé que limpien la casa", words: ["Les", "recomendé", "que", "limpien", "la", "casa", "limpian"] },
          { type: "syntax", turkish: "İşe koyulman (enerji toplaman) lazım.", spanish: "Tienes que ponerte las pilas", words: ["Tienes", "que", "ponerte", "las", "pilas"] },
          { type: "syntax", turkish: "Senin yerinde olsam başka bir iş arardım.", spanish: "Yo que tú buscaría otro trabajo", words: ["Yo", "que", "tú", "buscaría", "otro", "trabajo", "busco"] },
          { type: "syntax", turkish: "Daha çok su içmelisin.", spanish: "Deberías beber más agua", words: ["Deberías", "beber", "más", "agua", "bebes"] }
        ]
      }
    }
  ]
};
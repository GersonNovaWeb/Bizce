/**
 * UNIDAD 9 - NIVEL B2: EL COMUNICADOR INDEPENDIENTE
 * Foco: Oraciones Concesivas Avanzadas (Aunque, Por mucho que, Aun cuando)
 * Tema: Resiliencia, deportes de élite y superación personal.
 */

export const unidad9 = {
  id: "b2_u9",
  title: "Unidad 9: Aunque me duela",
  description: "Domina el arte de la concesión. Aprende a expresar obstáculos y a mostrar indiferencia o determinación frente a las dificultades.",
  nodes: [
    {
      id: "b2_u9_n1",
      type: "theory",
      title: "Teoría I: El Dilema de 'AUNQUE'",
      content: {
        concept: "En el nivel B1 aprendiste que 'Aunque' significa 'Rağmen'. En B2, descubrirás que esta palabra es una brújula que señala si el obstáculo es un HECHO o una HIPÓTESIS.\n\n### 1. Aunque + INDICATIVO (Hecho real)\nLo usamos cuando el obstáculo existe y lo conocemos. Informamos de una realidad.\n• *Aunque LLUEVE, voy a salir.* (Yağmur yağıyor, bunu biliyorum, yine de çıkacağım).\n\n### 2. Aunque + SUBJUNTIVO (Hipótesis o Indiferencia)\nLo usamos en dos casos:\n• **Hipótesis:** No sé si el obstáculo es real. *Aunque LLUEVA mañana...* (Yarın yağmur yağsa bile...).\n• **Indiferencia:** No me importa si es real o no. *Aunque me lo PIDAS de rodillas, no iré.* (Diz çöküp istesen bile gitmeyeceğim).\n\n💡 TRUCO: Si en turco usarías el sufijo **-sa bile / -se bile**, en español casi siempre necesitas **Subjuntivo**.",
        examples: [
          { es: "Aunque es caro, lo compro. (Sé el precio)", tr: "Pahalı olmasına rağmen onu alıyorum." },
          { es: "Aunque sea caro, lo compraré. (No me importa el precio)", tr: "Pahalı olsa bile onu alacağım." },
          { es: "Aunque me duele, sigo corriendo.", tr: "Canım yanmasına rağmen koşmaya devam ediyorum." }
        ]
      }
    },
    {
      id: "b2_u9_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Obstáculos)",
      exercises: [
        { type: "syntax", turkish: "Pahalı olsa bile (subj) onu satın alacağım.", spanish: "Aunque sea caro lo compraré", words: ["Aunque", "sea", "caro", "lo", "compraré", "es"] },
        { type: "syntax", turkish: "Yorgun olmama rağmen (ind) çalışıyorum.", spanish: "Aunque estoy cansado trabajo", words: ["Aunque", "estoy", "cansado", "trabajo", "esté"] },
        { type: "syntax", turkish: "Beni dinlemesen bile (subj) söyleyeceğim.", spanish: "Aunque no me escuches lo diré", words: ["Aunque", "no", "me", "escuches", "lo", "diré", "escuchas"] },
        { type: "syntax", turkish: "Zor olmasına rağmen (ind) başardık.", spanish: "Aunque era difícil lo logramos", words: ["Aunque", "era", "difícil", "lo", "logramos", "fuera"] },
        { type: "syntax", turkish: "Vaktim olmasa bile (subj) sana yardım ederim.", spanish: "Aunque no tenga tiempo te ayudo", words: ["Aunque", "no", "tenga", "tiempo", "te", "ayudo", "tengo"] },
        { type: "syntax", turkish: "Yağmur yağmasına rağmen (ind) dışarı çıktılar.", spanish: "Aunque llovía salieron fuera", words: ["Aunque", "llovía", "salieron", "fuera", "lloviera"] },
        { type: "syntax", turkish: "Bana yalan söylese bile (subj) ona inanırım.", spanish: "Aunque me diga mentiras le creo", words: ["Aunque", "me", "diga", "mentiras", "le", "creo", "dice"] },
        { type: "syntax", turkish: "Geç olmasına rağmen (ind) film izliyoruz.", spanish: "Aunque es tarde vemos una película", words: ["Aunque", "es", "tarde", "vemos", "una", "película", "sea"] },
        { type: "syntax", turkish: "İstemesem bile (subj) gitmek zorundayım.", spanish: "Aunque no quiera tengo que ir", words: ["Aunque", "no", "quiera", "tengo", "que", "ir", "quiero"] },
        { type: "syntax", turkish: "Param olmamasına rağmen (ind) mutluyum.", spanish: "Aunque no tengo dinero soy feliz", words: ["Aunque", "no", "tengo", "dinero", "soy", "feliz", "tenga"] }
      ]
    },
    {
      id: "b2_u9_n3",
      type: "theory",
      title: "Teoría II: Intensidad Máxima (Por más que...)",
      content: {
        concept: "Cuando el obstáculo es muy fuerte o queremos expresar frustración porque un esfuerzo no da resultados, usamos conectores más densos que 'aunque'.\n\n### 1. POR MÁS QUE / POR MUCHO QUE + Subjuntivo\nIndican que por mucha cantidad de esfuerzo que hagas, no vas a cambiar el resultado.\n• *Por más que ESTUDIES, no aprobarás si no duermes.* (Ne kadar çalışsan da...).\n• *Por mucho que DIGAS, no te creerán.*\n\n### 2. AUN CUANDO + Subjuntivo\nEs una forma muy formal de decir 'incluso si'.\n• *Aun cuando fuera verdad, no me importaría.* (Gerçek olsa bile...).\n\n### 3. PESE A + Sustantivo / Infinitivo\nEs el hermano formal de 'A pesar de'. Se usa mucho en prensa.\n• *Pese a las críticas, el proyecto continuó.* (Eleştirilere rağmen).",
        examples: [
          { es: "Por más que corro, siempre llego tarde.", tr: "Ne kadar koşsam da her zaman geç kalıyorum." },
          { es: "Por mucho que lo intentes, no podrás abrirlo.", tr: "Ne kadar denesen de onu açamayacaksın." },
          { es: "Pese a estar enfermo, vino a trabajar.", tr: "Hasta olmasına rağmen işe geldi." }
        ]
      }
    },
    {
      id: "b2_u9_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (La Determinación)",
      exercises: [
        { type: "speaking", spanish: "Aunque sea difícil lo voy a intentar", turkish: "Zor olsa bile deneyeceğim." },
        { type: "speaking", spanish: "Por mucho que llores no te daré el dulce", turkish: "Ne kadar ağlasan da sana tatlıyı vermeyeceğim." },
        { type: "speaking", spanish: "Aun cuando fuera gratis no lo querría", turkish: "Bedava olsa bile onu istemezdim." },
        { type: "speaking", spanish: "Pese a los problemas somos felices", turkish: "Problemlere rağmen mutluyuz." },
        { type: "speaking", spanish: "Aunque me duela el alma te olvidaré", turkish: "Ruhum acısa bile seni unutacağım." },
        { type: "speaking", spanish: "Por más que insistas no iré contigo", turkish: "Ne kadar ısrar etsen de seninle gelmeyeceğim." },
        { type: "speaking", spanish: "Seguiré luchando aunque no tenga apoyo", turkish: "Desteğim olmasa bile savaşmaya devam edeceğim." },
        { type: "speaking", spanish: "Pese a la lluvia saldremos a caminar", turkish: "Yağmura rağmen yürüyüşe çıkacağız." },
        { type: "speaking", spanish: "Aunque no me creas es la verdad", turkish: "Bana inanmasan da gerçek bu." },
        { type: "speaking", spanish: "Por mucho que trabajes necesitas descansar", turkish: "Ne kadar çalışsan da dinlenmen lazım." }
      ]
    },
    {
      id: "b2_u9_n5",
      type: "theory",
      title: "El Reto Turco: Bile / Rağmen vs. Subjuntivo",
      content: {
        concept: "El cerebro turco suele procesar las concesiones con las palabras **BİLE** o **RAĞMEN**. \n\n### El Choque de Lógicas:\n• 🇹🇷 **Bile:** Se suele poner al final o después del verbo (*Gelsen bile*). \n• 🇪🇸 **Aunque:** Se pone SIEMPRE al principio de la idea que concede.\n\n⚠️ **ERROR COMÚN:** Muchos estudiantes dicen: 'Tú vienes aunque' (Error de orden). \n\n### La elección del tiempo:\nSi en turco usas el condicional **-sa / -se** (*Zengin olsam bile*), en español DEBES usar **Subjuntivo** (*Aunque FUERA rico*). No uses el presente si la situación es imaginaria o no te importa.",
        examples: [
          { es: "Aunque no vengas, yo iré. (Subjuntivo - İndiferencia)", tr: "Gelmesen bile ben gideceğim." },
          { es: "Aunque no vienes, yo voy. (Indicativo - Hecho: Sé que no vienes)", tr: "Gelmemene rağmen ben gidiyorum." }
        ]
      }
    },
    {
      id: "b2_u9_n6",
      type: "reading",
      title: "Lectura Crítica: El Triunfo de la Resiliencia",
      content: {
        text: "La historia de superación de los deportistas paralímpicos es una lección para el mundo. Aunque muchos de ellos sufrieron accidentes terribles, nunca tiraron la herramienta de su pasión. \n\nPese a las dificultades físicas, entrenan ocho horas diarias. Por más que el cansancio intente frenarlos, su mente es más fuerte. Aun cuando las posibilidades de ganar son escasas, ellos compiten con el corazón. \n\nMuchos dicen que, aunque la sociedad ha mejorado, todavía hay obstáculos que superar. Sin embargo, estos atletas nos demuestran que, por mucho que la vida nos golpee, siempre hay un camino hacia el éxito si uno se esfuerza. Aunque el camino sea largo, la meta merece la pena.",
        translation: "Paralimpik sporcuların başarı hikayesi dünya için bir derstir. Birçoğu korkunç kazalar geçirmesine rağmen (Aunque sufrieron - ind), tutkularının araçlarını asla bırakmadılar.\n\nFiziksel zorluklara rağmen (Pese a las dificultades), günde sekiz saat antrenman yapıyorlar. Yorgunluk onları durdurmaya çalışsa da (Por más que intente - subj), zihinleri daha güçlüdür. Kazanma şansları az olsa bile (Aun cuando son - ind/gerçek), yürekleriyle yarışıyorlar.\n\nPek çok kişi, toplum iyileşmiş olsa da (aunque ha mejorado - ind) hala aşılması gereken engeller olduğunu söylüyor. Ancak bu atletler bize, hayat bizi ne kadar vursa da (por mucho que golpee - subj), eğer çaba gösterilirse başarıya giden bir yolun her zaman var olduğunu kanıtlıyorlar. Yol uzun olsa bile (aunque sea - subj/indiferencia), hedef buna değer."
      }
    },
    {
      id: "b2_u9_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto B2 (Alta Densidad)",
      exercises: [
        { type: "syntax", turkish: "Ne kadar uğraşsan da (subj) onu değiştiremezsin.", spanish: "Por más que lo intentes no podrás cambiarlo", words: ["Por", "más", "que", "lo", "intentes", "no", "podrás", "cambiarlo", "intentas"] },
        { type: "syntax", turkish: "Zorluklara rağmen (Pese a) projeyi bitirdik.", spanish: "Pese a las dificultades terminamos el proyecto", words: ["Pese", "a", "las", "dificultades", "terminamos", "el", "proyecto", "aunque"] },
        { type: "syntax", turkish: "Canım yansa bile (subj) ağlamayacağım.", spanish: "Aunque me duela no voy a llorar", words: ["Aunque", "me", "duela", "no", "voy", "a", "llorar", "duele"] },
        { type: "syntax", turkish: "Vaktim olmamasına rağmen (ind) geldim.", spanish: "Aunque no tenía tiempo vine", words: ["Aunque", "no", "tenía", "tiempo", "vine", "tuviera"] },
        { type: "syntax", turkish: "Kazanma şansımız az olsa bile (subj)...", spanish: "Aun cuando nuestras posibilidades sean escasas", words: ["Aun", "cuando", "nuestras", "posibilidades", "sean", "escasas", "son"] },
        { type: "speaking", spanish: "Por mucho que trabajes no serás rico", turkish: "Ne kadar çalışsan da zengin olmayacaksın." },
        { type: "speaking", spanish: "Aunque no me escuches te diré la verdad", turkish: "Beni dinlemesen bile sana gerçeği söyleyeceğim." },
        { type: "speaking", spanish: "Pese al frío salimos a correr", turkish: "Soğuğa rağmen koşmaya çıktık." },
        { type: "speaking", spanish: "Seguiré aquí aunque tú te vayas", turkish: "Sen gitsen bile ben burada kalmaya devam edeceğim." },
        { type: "speaking", spanish: "Por más que corro no llego puntual", turkish: "Ne kadar koşsam da vaktinde varamıyorum." }
      ]
    },
    {
      id: "b2_u9_n8",
      type: "theory",
      title: "Teoría III: Siquiera (Ni tan siquiera)",
      content: {
        concept: "En el nivel B2, usamos la palabra **SIQUIERA** para enfatizar una concesión negativa. Equivale al turco **'bile'** o **'hiç olmazsa'** en contextos de negación.\n\n### 1. Ni siquiera ( ... bile değil)\nSe usa para enfatizar que ni lo más básico ocurrió.\n• *No tengo NI SIQUIERA un euro.* (Bir eurom bile yok).\n• *Ni siquiera me miró.* (Bana bakmadı bile).\n\n### 2. Ni tan siquiera (Daha da vurgulu)\nEs una versión más dramática de la anterior.\n• *Ni tan siquiera pidió perdón.* (Özür bile dilemedi).\n\n### 3. Siquiera (Al menos)\nEn frases afirmativas, puede significar 'hiç olmazsa'.\n• *Dime SIQUIERA una palabra.* (Hiç olmazsa bir kelime söyle).",
        examples: [
          { es: "No sabe ni siquiera hablar inglés.", tr: "İngilizce konuşmayı bile bilmiyor." },
          { es: "¡Ni tan siquiera lo intentaste!", tr: "Onu denemedin bile!" },
          { es: "Estaba tan cansado que ni siquiera cené.", tr: "O kadar yorgundum ki akşam yemeği bile yemedim." }
        ]
      }
    },
    {
      id: "b2_u9_n9",
      type: "theory",
      title: "Sintaxis Visual: Reduplicación Concesiva",
      content: {
        concept: "Esta es una de las estructuras más bellas y avanzadas del español. Se usa para expresar que una acción se hará 'pase lo que pase'. Se forma repitiendo el verbo en subjuntivo.\n\n### Fórmula: Verbo Subj. + Relativo + Verbo Subj.\n\n• **Digan lo que digan:** (Ne derlerse desinler).\n• **Venga quien venga:** (Kim gelirse gelsin).\n• **Sea como sea:** (Nasıl olursa olsun).\n• **Hagas lo que hagas:** (Ne yaparsan yap).\n\n*Ejemplo:* **Vayas donde vayas**, te encontraré. (Nereye gidersen git, seni bulacağım).",
        examples: [
          { es: "Digan lo que digan, yo tengo razón.", tr: "Ne derlerse desinler, ben haklıyım." },
          { es: "Cueste lo que cueste, compraré ese coche.", tr: "Ne pahasına olursa olsun o arabayı alacağım." },
          { es: "Pase lo que pase, estaremos juntos.", tr: "Ne olursa olsun birlikte olacağız." }
        ]
      }
    },
    {
      id: "b2_u9_n10",
      type: "theory",
      title: "Caja de Herramientas: Lucha y Superación",
      content: {
        concept: "Para hablar de concesiones y obstáculos, necesitas vocabulario sobre el esfuerzo y la resiliencia.\n\n• **La resiliencia** (Dayanıklılık / Esneklik)\n• **El obstáculo / El impedimento** (Engel)\n• **Rendirse / Tirar la toalla** (Pes etmek / Havlu atmak)\n• **Esforzarse al máximo** (Elinizden gelenin en iyisini yapmak)\n• **La meta / El objetivo** (Hedef)\n• **Merecer la pena** (Buna değmek)\n• **Escaso/a** (Kısıtlı / Az)\n• **A capa y espada** (Canla başla / Her ne pahasına olursa olsun)",
        examples: [
          { es: "Defendió su idea a capa y espada.", tr: "Fikrini canla başla savundu." },
          { es: "Aunque hay obstáculos, no voy a tirar la toalla.", tr: "Engeller olsa da havlu atmayacağım (pes etmeyeceğim)." },
          { es: "Aprender español merece la pena.", tr: "İspanyolca öğrenmek buna değer." }
        ]
      }
    },
    {
      id: "b2_u9_n11",
      type: "theory",
      title: "Taller de Producción: El Reto Superado",
      content: {
        concept: "Vas a escribir sobre un momento de tu vida donde tuviste que luchar contra un obstáculo.\n\n**Instrucciones:**\nEscribe un texto (mínimo 10-12 líneas) sobre un desafío personal (un examen, un trabajo, una mudanza).\n1. Usa al menos un 'Aunque + Indicativo' para hablar de un hecho real.\n2. Usa al menos un 'Aunque + Subjuntivo' para mostrar determinación.\n3. Usa la estructura de reduplicación (ej: pase lo que pase, cueste lo que cueste).\n4. Usa la palabra 'ni siquiera' o 'pese a'.\n\n**Inspiración:** 'Pese a que el examen de conducir era muy difícil, yo decidí que lo iba a aprobar. Por más que mi instructor me decía que era pronto, yo...'",
        examples: []
      }
    },
    {
      id: "b2_u9_n12",
      type: "exam",
      title: "Examen de Unidad: Aunque me duela",
      content: {
        concept: "Evaluación técnica de oraciones concesivas. Diferencia entre hechos, hipótesis e indiferencia.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué tiempo usamos tras 'AUNQUE' para hablar de un hecho real que conocemos?", options: ["Subjuntivo", "Indicativo", "Condicional"], correct: 1 },
          { type: "multiple_choice", question: "Aunque ______ (llover) mañana, iré a la playa (Hipótesis).", options: ["llueve", "llovería", "llueva"], correct: 2 },
          { type: "multiple_choice", question: "Aunque ______ (tener - yo) hambre ahora, no voy a comer (Hecho real).", options: ["tengo", "tenga", "tendría"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Sea como sea'?", options: ["Nerede olursa olsun", "Nasıl olursa olsun", "Kim olursa olsun"], correct: 1 },
          { type: "multiple_choice", question: "Por más que ______ (estudiar - tú), no aprenderás si no practicas (Indiferencia).", options: ["estudias", "estudies", "estudiaras"], correct: 1 },
          { type: "multiple_choice", question: "No tengo ______ (bile) un centavo.", options: ["siquiera", "aunque", "pese a"], correct: 0 },
          { type: "multiple_choice", question: "______ las críticas, el atleta ganó la medalla.", options: ["Aunque", "Por más que", "Pese a"], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál de estas estructuras indica que vas a hacer algo pase lo que pase?", options: ["Pase lo que pasa", "Pase lo que pase", "Pasara lo que pasara"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Tirar la toalla'?", options: ["Duş almak", "Pes etmek", "Temizlik yapmak"], correct: 1 },
          { type: "multiple_choice", question: "Aunque me lo ______ (pedir - tú) mil veces, no lo haré.", options: ["pides", "pidas", "pediste"], correct: 1 },
          { type: "syntax", turkish: "Kazanma şansımız az olsa bile (subj)...", spanish: "Aun cuando nuestras posibilidades sean pocas", words: ["Aun", "cuando", "nuestras", "posibilidades", "sean", "pocas", "son"] },
          { type: "syntax", turkish: "Ne pahasına olursa olsun bunu alacağım.", spanish: "Cueste lo que cueste lo compraré", words: ["Cueste", "lo", "que", "cueste", "lo", "compraré", "cuesta"] },
          { type: "syntax", turkish: "Yağmur yağmasına rağmen (ind) dışarı çıktım.", spanish: "Aunque llovía salí a la calle", words: ["Aunque", "llovía", "salí", "a", "la", "calle", "lloviera"] },
          { type: "syntax", turkish: "Ne kadar konuşsan da (subj) seni dinlemeyeceğim.", spanish: "Por más que hables no te escucharé", words: ["Por", "más", "que", "hables", "no", "te", "escucharé", "hablas"] },
          { type: "syntax", turkish: "Bana bakmadı bile (Ni siquiera).", spanish: "Ni siquiera me miró", words: ["Ni", "siquiera", "me", "miró", "miraba"] },
          { type: "syntax", turkish: "Canım yansa bile (subj) devam edeceğim.", spanish: "Aunque me duela continuaré", words: ["Aunque", "me", "duela", "continuaré", "duele"] },
          { type: "syntax", turkish: "Zorluklara rağmen (Pese a) başardık.", spanish: "Pese a los obstáculos lo logramos", words: ["Pese", "a", "los", "obstáculos", "lo", "logramos", "aunque"] },
          { type: "syntax", turkish: "Kim gelirse gelsin kapıyı açma.", spanish: "Venga quien venga no abras la puerta", words: ["Venga", "quien", "venga", "no", "abras", "la", "puerta"] },
          { type: "syntax", turkish: "Param olmamasına rağmen (ind) seyahat ettim.", spanish: "Aunque no tenía dinero viajé", words: ["Aunque", "no", "tenía", "dinero", "viajé", "tuviera"] },
          { type: "syntax", turkish: "Hadi canla başla (a capa y espada) savunalım.", spanish: "Vamos a defenderlo a capa y espada", words: ["Vamos", "a", "defenderlo", "a", "capa", "y", "espada"] }
        ]
      }
    }
  ]
};
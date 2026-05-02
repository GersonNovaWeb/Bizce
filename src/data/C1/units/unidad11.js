/**
 * UNIDAD 11 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Falsos Amigos (Inglés/Turco) y Polisemia
 * Tema: Malentendidos, vergüenza social y precisión léxica.
 */

export const unidad11 = {
  id: "c1_u11",
  title: "Unidad 11: Falsos Amigos",
  description: "Evita los peores malentendidos del español. Domina las palabras que te engañan y descubre la polisemia de la lengua.",
  nodes: [
    {
      id: "c1_u11_n1",
      type: "theory",
      title: "Teoría I: Peligro Social (Falsos Amigos Clásicos)",
      content: {
        concept: "Los 'Falsos Amigos' son palabras que se escriben o suenan muy parecido en tu idioma (o en inglés) pero que en español significan algo TOTALMENTE distinto. Usarlos mal puede crear situaciones muy incómodas.\n\n### Los 4 Falsos Amigos más peligrosos:\n\n**1. EMBARAZADA**\n• ❌ Falso amigo de 'Embarrassed' (Utanmış / Mahcup).\n• ✅ **Significado real:** Hamile. \n• *Para decir 'utanmış', usamos: Avergonzado/a.*\n\n**2. CONSTIPADO / ESTAR CONSTIPADO**\n• ❌ Falso amigo de 'Constipated' (Kabız).\n• ✅ **Significado real:** Soğuk algınlığı / Nezle olmak.\n• *Para decir 'kabız', usamos: Estreñido.*\n\n**3. ÉXITO**\n• ❌ Falso amigo de 'Exit' (Çıkış).\n• ✅ **Significado real:** Başarı. \n• *Para decir 'çıkış', usamos: Salida.*\n\n**4. INTRODUCIR**\n• ❌ Falso amigo de 'Introduce' (Tanıştırmak).\n• ✅ **Significado real:** İçeri sokmak / Yerleştirmek.\n• *Para decir 'tanıştırmak', usamos: Presentar.*",
        examples: [
          { es: "Estoy muy constipado, me duele la garganta.", tr: "Çok fena soğuk aldım, boğazım ağrıyor." },
          { es: "¡Te deseo mucho éxito en tu nueva empresa!", tr: "Yeni şirketinde sana çok başarılar dilerim." },
          { es: "Me dio mucha vergüenza cuando me caí.", tr: "Düştüğümde çok utandım (mahcup oldum)." }
        ]
      }
    },
    {
      id: "c1_u11_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Los Engaños)",
      exercises: [
        { type: "syntax", turkish: "Çok utandım (Mahcup oldum).", spanish: "Me sentí muy avergonzado", words: ["Me", "sentí", "muy", "avergonzado", "embarazado"] },
        { type: "syntax", turkish: "Karım hamile.", spanish: "Mi mujer está embarazada", words: ["Mi", "mujer", "está", "embarazada", "avergonzada"] },
        { type: "syntax", turkish: "Soğuk algınlığım var (Nezleyim).", spanish: "Estoy muy constipado", words: ["Estoy", "muy", "constipado", "estreñido"] },
        { type: "syntax", turkish: "Kariyerinde çok başarılı oldu (éxito).", spanish: "Tuvo mucho éxito en su carrera", words: ["Tuvo", "mucho", "éxito", "en", "su", "carrera", "salida"] },
        { type: "syntax", turkish: "Acil çıkış nerede?", spanish: "Dónde está la salida de emergencia", words: ["Dónde", "está", "la", "salida", "de", "emergencia", "éxito"] },
        { type: "syntax", turkish: "Seni abimle tanıştırayım.", spanish: "Te presento a mi hermano", words: ["Te", "presento", "a", "mi", "hermano", "introduzco"] },
        { type: "syntax", turkish: "Kredi kartını buraya yerleştirin (sokun).", spanish: "Introduzca la tarjeta de crédito aquí", words: ["Introduzca", "la", "tarjeta", "de", "crédito", "aquí", "presente"] },
        { type: "syntax", turkish: "Toplantıda çok utandım (vergüenza).", spanish: "Me dio mucha vergüenza en la reunión", words: ["Me", "dio", "mucha", "vergüenza", "en", "la", "reunión"] },
        { type: "syntax", turkish: "Proje tam bir başarıydı.", spanish: "El proyecto fue un éxito total", words: ["El", "proyecto", "fue", "un", "éxito", "total"] },
        { type: "syntax", turkish: "Hamile kadınlara (las embarazadas) yardım etmeliyiz.", spanish: "Debemos ayudar a las embarazadas", words: ["Debemos", "ayudar", "a", "las", "embarazadas", "avergonzadas"] }
      ]
    },
    {
      id: "c1_u11_n3",
      type: "theory",
      title: "Teoría II: Emociones y Falsas Acciones",
      content: {
        concept: "En el entorno laboral o de amistad, hay otros falsos amigos de origen anglosajón/francés que causan estragos.\n\n### 1. SENSIBLE vs SENSATO\n• ❌ Sensible NO significa 'mantıklı' (Sensible en inglés).\n• ✅ **Sensible:** Duyarlı / Hassas (Física o emocionalmente). *'Tengo la piel muy sensible'.*\n• ✅ **Sensato:** Mantıklı / Sağduyulu. *'Fue una decisión muy sensata'.*\n\n### 2. SOPORTAR vs APOYAR\n• ❌ Soportar NO significa 'desteklemek' (Support en inglés).\n• ✅ **Soportar:** Katlanmak / Dayanmak. *'No soporto este calor'.*\n• ✅ **Apoyar:** Desteklemek. *'Mis padres siempre me apoyan'.*\n\n### 3. ASISTIR vs ATENDER\n• ❌ Asistir NO significa 'yardım etmek' (Assist en inglés).\n• ✅ **Asistir:** Katılmak (Bir yere gitmek). *'Asistí a una reunión'.*\n• ✅ **Atender:** İlgilenmek / Müşteriye bakmak. *'El médico está atendiendo a un paciente'.*",
        examples: [
          { es: "Es un chico muy sensible, llora con facilidad.", tr: "Çok hassas bir çocuk, kolayca ağlar." },
          { es: "No soporto a mi jefe, pero mi equipo me apoya.", tr: "Patronuma katlanamıyorum ama ekibim beni destekliyor." },
          { es: "Mañana asistiré a un congreso médico.", tr: "Yarın bir kongreye katılacağım." }
        ]
      }
    },
    {
      id: "c1_u11_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Emociones Reales)",
      exercises: [
        { type: "speaking", spanish: "Es una persona muy sensata e inteligente", turkish: "Çok mantıklı ve zeki bir insan." },
        { type: "speaking", spanish: "No soporto el ruido de la calle", turkish: "Sokağın gürültüsüne dayanamıyorum (katlanamıyorum)." },
        { type: "speaking", spanish: "Gracias por apoyarme en este proyecto", turkish: "Bu projede beni desteklediğin için teşekkürler." },
        { type: "speaking", spanish: "Mañana asistiré a una reunión importante", turkish: "Yarın önemli bir toplantıya katılacağım." },
        { type: "speaking", spanish: "El doctor no puede atenderte ahora", turkish: "Doktor şu an seninle ilgilenemez." },
        { type: "speaking", spanish: "Tengo los dientes muy sensibles", turkish: "Dişlerim çok hassas." },
        { type: "speaking", spanish: "No asistió a la clase de ayer", turkish: "Dünkü derse katılmadı." },
        { type: "speaking", spanish: "Tomaste una decisión muy sensata", turkish: "Çok sağduyulu (mantıklı) bir karar verdin." },
        { type: "speaking", spanish: "Te apoyaré pase lo que pase", turkish: "Ne olursa olsun seni destekleyeceğim." },
        { type: "speaking", spanish: "No puedo soportar este dolor", turkish: "Bu acıya dayanamıyorum." }
      ]
    },
    {
      id: "c1_u11_n5",
      type: "theory",
      title: "El Reto Turco: Trampas Diabólicas",
      content: {
        concept: "Prepárate para reír. Hay palabras que en turco y en español suenan EXACTAMENTE igual, pero su significado es tan diferente que crearán situaciones absurdas.\n\n### 1. SOPA\n• 🇹🇷 En turco: *Sopa* = Sopa / Sopa atmak (Darbe/Dayak).\n• 🇪🇸 En español: **SOPA** = Çorba! \n*Ej:* 'Me encanta comer sopa' significa 'Çorba içmeye bayılırım', ¡no significa que te guste comer palazos!\n\n### 2. PASTA\n• 🇹🇷 En turco: *Pasta* = Yaş pasta / Kek.\n• 🇪🇸 En español: **PASTA** = Makarna (o Dinero en jerga coloquial). \n*Ej:* Si es tu cumpleaños y pides 'una pasta', ¡te traerán unos espaguetis!\n\n### 3. CURA\n• 🇹🇷 En turco: *Kura* = Kura çekimi (Sorteo).\n• 🇪🇸 En español: **EL CURA** = Rahip (Papaz). **LA CURA** = Tedavi.\n\n¡Cuidado con mezclar tu idioma materno cuando hables rápido en español!",
        examples: [
          { es: "Hoy cenaremos una rica sopa de verduras.", tr: "Bugün akşam yemeğinde lezzetli bir sebze çorbası yiyeceğiz." },
          { es: "Voy a preparar pasta con salsa de tomate.", tr: "Domates soslu makarna hazırlayacağım." }
        ]
      }
    },
    {
      id: "c1_u11_n6",
      type: "reading",
      title: "Lectura Crítica: Una cena desastrosa",
      content: {
        text: "La primera vez que Ayşe cenó con los padres españoles de Carlos, estaba muy nerviosa. Quería demostrar su buen vocabulario, pero los falsos amigos le jugaron una mala pasada.\n\nLa madre de Carlos había preparado una cena deliciosa. Ayşe, queriendo ser educada, dijo: '¡Me encanta esta sopa!'. El padre sonrió, pero luego Ayşe añadió: 'Y de postre, he traído una pasta muy rica de la pastelería'. Los padres se miraron confundidos. ¿Macarrones de postre? Carlos rápidamente explicó que en Turquía 'pasta' significa pastel.\n\nEl peor momento fue cuando el padre le preguntó si tenía alergias. Ayşe, que estaba un poco resfriada, intentó decir que estaba constipada, pero dijo: 'No tengo alergias, pero me siento un poco embarazada'. El silencio en la mesa fue absoluto. Carlos empezó a reírse a carcajadas. '¡Constipada, mamá, quiere decir constipada!', gritó Carlos. A pesar de la vergüenza, todos acabaron riendo y apoyando a Ayşe con su español.",
        translation: "Ayşe, Carlos'un İspanyol ebeveynleriyle ilk kez akşam yemeği yediğinde çok gergindi. İyi kelime dağarcığını göstermek istiyordu ama yalancı eşdeğerler (falsos amigos) ona kötü bir oyun oynadı.\n\nCarlos'un annesi lezzetli bir akşam yemeği hazırlamıştı. Ayşe, kibar olmak isteyerek, 'Bu çorbaya bayıldım!' dedi. Baba gülümsedi ama sonra Ayşe ekledi: 'Ve tatlı olarak, pastaneden çok lezzetli bir makarna (pasta - İspanyolcada) getirdim'. Ebeveynler kafaları karışmış bir şekilde birbirlerine baktılar. Tatlı olarak makarna mı? Carlos hızla Türkiye'de 'pasta'nın kek/pasta anlamına geldiğini açıkladı.\n\nEn kötü an, babanın ona alerjisi olup olmadığını sorduğu andı. Biraz soğuk algınlığı olan Ayşe, 'constipada' olduğunu söylemeye çalıştı ama şöyle dedi: 'Alerjim yok ama kendimi biraz hamile (embarazada) hissediyorum'. Masadaki sessizlik tamdı. Carlos kahkahalarla gülmeye başladı. 'Nezle, anne, nezle (constipada) demek istiyor!' diye bağırdı Carlos. Utanca (vergüenza) rağmen, sonunda herkes güldü ve Ayşe'yi İspanyolcası konusunda desteklediler (apoyar)."
      }
    },
    {
      id: "c1_u11_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (Falsos Amigos)",
      exercises: [
        { type: "syntax", turkish: "Çok fena soğuk aldım (Nezleyim).", spanish: "Estoy muy constipado", words: ["Estoy", "muy", "constipado", "embarazado", "estreñido"] },
        { type: "syntax", turkish: "Seni arkadaşımla tanıştırayım (Presentar).", spanish: "Te presento a mi amigo", words: ["Te", "presento", "a", "mi", "amigo", "introduzco"] },
        { type: "syntax", turkish: "Bana bu projede destek oldular (Apoyar).", spanish: "Me apoyaron en este proyecto", words: ["Me", "apoyaron", "en", "este", "proyecto", "soportaron"] },
        { type: "syntax", turkish: "Kariyerinde (su carrera) çok başarılı oldu.", spanish: "Tuvo mucho éxito en su carrera", words: ["Tuvo", "mucho", "éxito", "en", "su", "carrera", "salida"] },
        { type: "syntax", turkish: "Çok sağduyulu (mantıklı) birisin.", spanish: "Eres una persona muy sensata", words: ["Eres", "una", "persona", "muy", "sensata", "sensible"] },
        { type: "syntax", turkish: "Bu acıya dayanamıyorum (Soportar).", spanish: "No puedo soportar este dolor", words: ["No", "puedo", "soportar", "este", "dolor", "apoyar"] },
        { type: "syntax", turkish: "Onun hamile olduğunu bilmiyordum.", spanish: "No sabía que ella estaba embarazada", words: ["No", "sabía", "que", "ella", "estaba", "embarazada", "avergonzada"] },
        { type: "syntax", turkish: "Toplantıya katılamam (Asistir).", spanish: "No puedo asistir a la reunión", words: ["No", "puedo", "asistir", "a", "la", "reunión", "atender"] },
        { type: "syntax", turkish: "Onu görünce çok utandım (Avergonzarse).", spanish: "Me sentí muy avergonzado al verlo", words: ["Me", "sentí", "muy", "avergonzado", "al", "verlo", "embarazado"] },
        { type: "syntax", turkish: "Doktor şimdi seninle ilgilenecek (Atender).", spanish: "El médico te atenderá ahora", words: ["El", "médico", "te", "atenderá", "ahora", "asistirá"] }
      ]
    },
    {
      id: "c1_u11_n8",
      type: "theory",
      title: "Teoría III: Pretender y Realizar",
      content: {
        concept: "Sigamos destruyendo malos hábitos del Spanglish.\n\n### 1. PRETENDER vs FINGIR\n• ❌ Pretender NO significa 'Gibi davranmak' (Pretend en inglés).\n• ✅ **Fingir:** Gibi davranmak / Rol yapmak. *'Finge que está dormido' (Uyuyormuş gibi yapıyor).*\n• ✅ **Pretender:** Niyetinde olmak / Beklentisi olmak. *'¿Qué pretendes hacer con tu vida?' (Ne yapmayı amaçlıyorsun?).*\n\n### 2. REALIZAR vs DARSE CUENTA\n• ❌ Realizar NO significa 'Farkına varmak' (Realize en inglés).\n• ✅ **Darse cuenta de:** Farkına varmak. *'Me di cuenta de mi error'.*\n• ✅ **Realizar:** Gerçekleştirmek / Yapmak. *'Vamos a realizar un evento'.*\n\n### 3. RECORDAR vs GRABAR\n• ❌ Recordar NO significa 'Kaydetmek' (Record en inglés).\n• ✅ **Grabar:** Kaydetmek (Ses/Video). *'Estoy grabando un podcast'.*\n• ✅ **Recordar:** Hatırlamak. *'No recuerdo tu nombre'.*",
        examples: [
          { es: "Ella fingió no escucharme.", tr: "Beni duymamış gibi davrandı (rol yaptı)." },
          { es: "Me di cuenta de que no había cerrado la puerta.", tr: "Kapıyı kapatmadığımın farkına vardım." },
          { es: "El artista va a realizar una obra increíble.", tr: "Sanatçı inanılmaz bir eser gerçekleştirecek." }
        ]
      }
    },
    {
      id: "c1_u11_n9",
      type: "theory",
      title: "Sintaxis Visual: El Error Compuesto",
      content: {
        concept: "Analizaremos una frase larga que contiene un falso amigo dentro de una estructura temporal. Fíjate cómo la elección incorrecta del verbo cambia por completo la intención de la frase.",
        examples: [{ es: "No me di cuenta de mi error hasta que Carlos me lo explicó.", tr: "Carlos bana açıklayana kadar hatamın farkına varmadım." }],
        analysis: [
          { word: "No me di cuenta", type: "verb", literal: "Farkına varmadım", explanation: "Verbo pronominal DARSE CUENTA en Indefinido. (NO usamos 'no realicé').", examples: [] },
          { word: "de", type: "connector", literal: "-dan/-den", explanation: "Preposición obligatoria exigida por el verbo 'darse cuenta'.", examples: [] },
          { word: "mi error", type: "noun", literal: "hatam", explanation: "Objeto indirecto.", examples: [] },
          { word: "hasta que", type: "connector", literal: "-e kadar", explanation: "Conector temporal de límite.", examples: [] },
          { word: "Carlos", type: "noun", literal: "Carlos", explanation: "Sujeto de la segunda acción.", examples: [] },
          { word: "me lo", type: "pronoun", literal: "bana onu", explanation: "Dobles pronombres. 'Me' (a mí) y 'lo' (el error).", examples: [] },
          { word: "explicó.", type: "verb", literal: "açıkladı", explanation: "Verbo EXPLICAR en Indefinido. Usamos indicativo (no subjuntivo) porque es un hecho que YA PASÓ, no es un límite en el futuro.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u11_n10",
      type: "theory",
      title: "Caja de Herramientas: La Polisemia Española",
      content: {
        concept: "La polisemia ocurre cuando una misma palabra tiene significados completamente distintos según el contexto. Un hablante C1 domina el contexto.\n\n• **SIERRA:** Testere (herramienta) // Sıradağlar (montañas).\n• **PLANTA:** Bitki // Fabrika // Bina katı (La tercera planta).\n• **MUÑECA:** Oyuncak bebek // El bileği.\n• **GEMELOS:** İkizler // Kol düğmesi.\n• **COPA:** Kadeh // Ağaç tepesi // Kupa (Trofeo).\n• **HOJA:** Yaprak (árbol) // Kağıt yaprağı (papel).",
        examples: [
          { es: "Escribí mi nombre en una hoja de papel.", tr: "Adımı bir kağıt yaprağına yazdım." },
          { es: "Tengo un dolor fuerte en la muñeca derecha.", tr: "Sağ el bileğimde şiddetli bir ağrı var." },
          { es: "Nuestro apartamento está en la quinta planta.", tr: "Dairemiz beşinci katta." }
        ]
      }
    },
    {
      id: "b1_u11_n11",
      type: "theory",
      title: "Taller de Producción: El Gran Malentendido",
      content: {
        concept: "Es el momento de reírte de ti misma y practicar tu escritura narrativa.\n\n**Instrucciones:**\nEscribe un pequeño relato (10 líneas) contando una anécdota inventada sobre una persona extranjera que cometió un error grave usando un falso amigo.\n\n1. Usa al menos dos de los Falsos Amigos clásicos (embarazada, éxito, constipado, fingir, darse cuenta).\n2. Juega con una palabra polisémica (planta, muñeca).\n3. Incluye una reacción emocional en el pasado (Ej: *Me dio mucha vergüenza que él dijera eso*).\n\n**Inspiración:** 'Ayer fui al hospital con mi amigo inglés. Él quería decirle al médico que tenía un resfriado, pero le dijo que estaba... El médico se quedó de piedra...'",
        examples: []
      }
    },
    {
      id: "c1_u11_n12",
      type: "exam",
      title: "Examen de Unidad: Peligros Léxicos",
      content: {
        concept: "Demuestra que ya no caerás en las trampas del diccionario. Diferencia los falsos amigos y selecciona el significado correcto por contexto.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué significa 'Estoy constipado'?", options: ["Estoy estreñido (Kabız)", "Tengo un resfriado (Nezle)"], correct: 1 },
          { type: "multiple_choice", question: "Si una mujer dice 'Estoy avergonzada', significa:", options: ["Que está embarazada (Hamile)", "Que siente vergüenza (Mahcup/Utanmış)"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Başarı' en español?", options: ["El éxito", "La salida", "El suceso"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué verbo significa 'Farkına varmak'?", options: ["Realizar", "Darse cuenta de", "Recordar"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Sensato'?", options: ["Hassas / Duyarlı (Físico o emocional)", "Mantıklı / Sağduyulu"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué verbo usamos para 'Bir yere katılmak / Gitmek'?", options: ["Atender", "Soportar", "Asistir"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa 'Fingir'?", options: ["Niyetinde olmak", "Gibi davranmak / Rol yapmak"], correct: 1 },
          { type: "multiple_choice", question: "Si pides una 'Sopa' en España, te traerán:", options: ["Çorba", "Sopa (Palo)", "Tatlı"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el falso amigo de 'Support' (Desteklemek)?", options: ["Soportar (Katlanmak)", "Apoyar", "Aportar"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué palabra polisémica usamos para 'Bina katı'?", options: ["La planta", "El piso", "Ambas son correctas"], correct: 2 },
          { type: "syntax", turkish: "Onun (kadın) hamile olduğunu fark ettim.", spanish: "Me di cuenta de que ella estaba embarazada", words: ["Me", "di", "cuenta", "de", "que", "ella", "estaba", "embarazada", "realicé"] },
          { type: "syntax", turkish: "Benimle ilgilendiğiniz (Atender) için teşekkürler.", spanish: "Gracias por atenderme", words: ["Gracias", "por", "atenderme", "asistirme", "para"] },
          { type: "syntax", turkish: "Çok nezleyim, çalışamam.", spanish: "Estoy muy constipado no puedo trabajar", words: ["Estoy", "muy", "constipado", "no", "puedo", "trabajar", "estreñido"] },
          { type: "syntax", turkish: "Yeni işinde sana başarılar dilerim.", spanish: "Te deseo mucho éxito en tu nuevo trabajo", words: ["Te", "deseo", "mucho", "éxito", "en", "tu", "nuevo", "trabajo", "salida"] },
          { type: "syntax", turkish: "Beni anlamıyormuş gibi davrandı (rol yaptı).", spanish: "Él fingió no entenderme", words: ["Él", "fingió", "no", "entenderme", "pretendió"] },
          { type: "syntax", turkish: "Onun bu kadar mantıklı (sensato) olmasına sevindim.", spanish: "Me alegró que él fuera tan sensato", words: ["Me", "alegró", "que", "él", "fuera", "tan", "sensato", "sensible"] },
          { type: "syntax", turkish: "Toplantıya katılamayacağım.", spanish: "No podré asistir a la reunión", words: ["No", "podré", "asistir", "a", "la", "reunión", "atender"] },
          { type: "syntax", turkish: "Seni iş arkadaşımla tanıştırayım.", spanish: "Te presento a mi colega", words: ["Te", "presento", "a", "mi", "colega", "introduzco"] },
          { type: "syntax", turkish: "Bu gürültüye katlanamıyorum.", spanish: "No puedo soportar este ruido", words: ["No", "puedo", "soportar", "este", "ruido", "apoyar"] },
          { type: "syntax", turkish: "Cevabı hatırlamıyorum (Recordar).", spanish: "No recuerdo la respuesta", words: ["No", "recuerdo", "la", "respuesta", "grabo"] }
        ]
      }
    }
  ]
};
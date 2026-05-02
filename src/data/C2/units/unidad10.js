/**
 * UNIDAD 10 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: El Español del Siglo XVII (Cervantes y Quevedo).
 * Tema: Literatura clásica, arcaísmos, conceptismo y caballería.
 */

export const unidad10 = {
  id: "c2_u10",
  title: "Unidad 10: El Siglo de Oro",
  description: "Viaja al siglo XVII. Aprende a descifrar el español antiguo de Cervantes y la ironía mordaz de Francisco de Quevedo.",
  nodes: [
    {
      id: "c2_u10_n1",
      type: "theory",
      title: "Teoría I: El Español Cervantino (Arcaísmos)",
      content: {
        concept: "Leer 'Don Quijote de la Mancha' en su idioma original es el bautismo de fuego de un hispanohablante C2. En el siglo XVII, el español estaba en plena evolución, y muchas palabras sonaban diferentes a hoy.\n\n### 1. La 'F' inicial latina\nMuchas palabras que hoy empiezan por 'H' muda, en la época de Cervantes conservaban la 'F' del latín.\n• **Facer** ➔ Hacer (Yapmak)\n• **Fidalgo** ➔ Hidalgo (Asilzade)\n• **Fermoza** ➔ Hermosa (Güzel)\n\n### 2. Vuesa Merced\nAntes de que existiera el pronombre 'Usted' (Siz), se utilizaba 'Vuestra Merced' o 'Vuesa Merced' (Zatıaliniz). Se conjugaba en 3ª persona del singular.\n\n### 3. El Voseo Reverencial\nEn el siglo XVII, 'Vos' no era informal como en la Argentina actual, sino un trato de muchísimo respeto. Los verbos terminaban en **-ades / -edes**.\n• *Habláis* ➔ **Fablades**\n• *Tenéis* ➔ **Tenedes**",
        examples: [
          { es: "Si vuesa merced me diere licencia, le contaré mi historia.", tr: "Eğer zatıaliniz bana izin verirse, size hikayemi anlatırım." },
          { es: "Non fuyan las fermozas damas.", tr: "Güzel hanımefendiler kaçmasınlar (No huyan las hermosas damas)." }
        ]
      }
    },
    {
      id: "c2_u10_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Traducción Antigua)",
      exercises: [
        { type: "syntax", turkish: "Zatıaliniz bana izin verirse (diere licencia)...", spanish: "Si vuesa merced me diere licencia", words: ["Si", "vuesa", "merced", "me", "diere", "licencia", "usted"] },
        { type: "syntax", turkish: "Asilzadeler (Los hidalgos) korkmazlar (facer miedo).", spanish: "Los fidalgos non facen miedo", words: ["Los", "fidalgos", "non", "facen", "miedo", "hacen"] },
        { type: "syntax", turkish: "Siz (reverencial) ne istersiniz (queredes)?", spanish: "Qué queredes vos", words: ["Qué", "queredes", "vos", "queréis"] },
        { type: "syntax", turkish: "Güzel hanımefendi (La fermoza dama) ağlıyordu.", spanish: "La fermoza dama lloraba", words: ["La", "fermoza", "dama", "lloraba", "hermosa"] },
        { type: "syntax", turkish: "Bunu kim yaptı? (fizo).", spanish: "Quién fizo esto", words: ["Quién", "fizo", "esto", "hizo"] },
        { type: "syntax", turkish: "Zatıalinizin (Vuesa merced) haklı olduğunu biliyorum.", spanish: "Sé que vuesa merced tiene razón", words: ["Sé", "que", "vuesa", "merced", "tiene", "razón"] },
        { type: "syntax", turkish: "Eğer buraya gelirseniz (vénides)...", spanish: "Si vos vénides aquí", words: ["Si", "vos", "vénides", "aquí", "venís"] },
        { type: "syntax", turkish: "Şövalye (El caballero) yola çıktı (partió).", spanish: "El caballero partió al alba", words: ["El", "caballero", "partió", "al", "alba"] },
        { type: "syntax", turkish: "Savaşmadan (sin pelear) teslim olmayacağım (rendirme).", spanish: "Non voy a rendirme sin pelear", words: ["Non", "voy", "a", "rendirme", "sin", "pelear"] },
        { type: "syntax", turkish: "Kılıcımı (mi espada) alınız (tomad).", spanish: "Tomad mi espada señor", words: ["Tomad", "mi", "espada", "señor", "tomáis"] }
      ]
    },
    {
      id: "c2_u10_n3",
      type: "theory",
      title: "Teoría II: Quevedo y el Conceptismo",
      content: {
        concept: "El Siglo de Oro (1492-1659) produjo a dos poetas rivales que llevaron el idioma a su límite absoluto: Luis de Góngora y Francisco de Quevedo.\n\nQuevedo es el maestro del **Conceptismo**. Su estilo no se basa en usar palabras bonitas, sino en juegos mentales, dobles sentidos, sarcasmo y asociaciones rápidas.\n\n### El genio de la burla\nQuevedo usaba el español como un arma. Una vez, apostó que le diría a la reina que era 'coja' (topal) sin que ella se ofendiera. Le llevó dos flores y le dijo:\n*«Entre el clavel y la rosa, su majestad **escoja**»*.\n\nEl verbo *escoja* (seçiniz) suena exactamente igual que *es coja* (topaldır). Este es el nivel de agudeza del Siglo de Oro.",
        examples: [
          { es: "Poderoso caballero es don Dinero. (Quevedo)", tr: "Güçlü bir şövalyedir Bay Para. (Paranın gücüne dair hiciv)." },
          { es: "Érase un hombre a una nariz pegado. (Quevedo)", tr: "Bir buruna yapışmış bir adam vardı. (Devasa burnu olan bir adamla alay ederken)." }
        ]
      }
    },
    {
      id: "c2_u10_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Tono del Barroco)",
      exercises: [
        { type: "speaking", spanish: "Poderoso caballero es don Dinero", turkish: "Güçlü bir şövalyedir Bay Para." },
        { type: "speaking", spanish: "Érase un hombre a una nariz pegado", turkish: "Bir buruna yapışmış bir adam vardı." },
        { type: "speaking", spanish: "Su majestad escoja", turkish: "Majesteleri seçiniz (veya majeste topaldır)." },
        { type: "speaking", spanish: "En un lugar de la Mancha de cuyo nombre no quiero acordarme", turkish: "La Mancha'nın bir yerinde, ki adını hatırlamak istemiyorum..." },
        { type: "speaking", spanish: "Con la Iglesia hemos topado Sancho", turkish: "Kilise ile karşılaştık Sancho (Kurallara/güce çarptık)." },
        { type: "speaking", spanish: "Non fuyan las fermozas damas", turkish: "Güzel hanımefendiler kaçmasınlar." },
        { type: "speaking", spanish: "Cosas veredes Sancho que harán fablar las piedras", turkish: "Öyle şeyler göreceksin ki Sancho, taşları bile konuşturacak." },
        { type: "speaking", spanish: "Yo sé quién soy y sé quién puedo ser", turkish: "Kim olduğumu biliyorum ve kim olabileceğimi biliyorum." },
        { type: "speaking", spanish: "Confía en el tiempo que suele dar dulces salidas", turkish: "Zamana güven, genellikle tatlı çıkışlar (çözümler) sunar." },
        { type: "speaking", spanish: "La envidia es un dolor por el bien ajeno", turkish: "Kıskançlık, başkasının iyiliğinden duyulan acıdır." }
      ]
    },
    {
      id: "c2_u10_n5",
      type: "theory",
      title: "El Reto Turco: La Traducción del Ingenio",
      content: {
        concept: "Traducir literatura del siglo XVII exige no solo conocer el idioma, sino la cultura de la época.\n\n### El Choque Semántico:\nEn el Quijote, Cervantes usa la palabra **'Ingenioso'** (El Ingenioso Hidalgo...). En el siglo XVII, el 'ingenio' no era solo ser inteligente (Zeki), estaba relacionado con los 'humores del cuerpo' (safra, kan vb.). Un hombre ingenioso era melancólico, de imaginación desbordada, casi al borde de la locura.\n\n🇹🇷 Cuando lees a Quevedo o Cervantes, tu cerebro bilingüe no debe buscar el significado moderno de la palabra, sino la intención del autor. El español de esta época es denso, lleno de subordinadas (Unidad 9) y juegos de palabras.",
        examples: [
          { es: "Perro ladrador, poco mordedor.", tr: "Havlayan köpek ısırmaz (Cervantes popularizó cientos de refranes en el Quijote)." },
          { es: "La pluma es lengua del alma.", tr: "Kalem, ruhun dilidir." }
        ]
      }
    },
    {
      id: "c2_u10_n6",
      type: "reading",
      title: "Lectura Crítica: El Inicio Inmortal",
      content: {
        text: "«En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.\n\n[...] Es, pues, de saber, que este sobredicho hidalgo, los ratos que estaba ocioso (que eran los más del año) se daba a leer libros de caballerías con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de la caza, y aun la administración de su hacienda; y llegó a tanto su curiosidad y desatino en esto, que vendió muchas hanegas de tierra de sembradura, para comprar libros de caballerías en que leer...»",
        translation: "«La Mancha'nın bir yerinde, ki adını hatırlamak istemiyorum, çok zaman geçmedi ki mızrağı askıda, kalkanı eski, sıska bir atı ve koşan bir tazısı olan bir asilzade yaşardı. Koyundan çok sığır eti olan bir tencere yemek, çoğu gece et salatası (salpicón), cumartesi günleri yumurtalı pastırma (duelos y quebrantos), cuma günleri mercimek ve pazar günleri ek olarak bir yavru güvercin, mal varlığının dörtte üçünü tüketirdi.\n\n[...] Bilinmelidir ki (Es de saber), bahsi geçen bu asilzade, boş olduğu zamanlarda (ki bunlar yılın büyük kısmını oluştururdu), kendini şövalyelik kitapları okumaya öyle bir tutku ve zevkle vermişti ki, avcılık faaliyetini ve hatta malının mülkünün yönetimini neredeyse tamamen unuttu; ve bu konudaki merakı ve çılgınlığı (desatino) o noktaya geldi ki, okuyacak şövalyelik kitapları satın almak için ekilebilir arazisinin birçok dönümünü (hanegas) sattı...»"
      }
    },
    {
      id: "c2_u10_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Comprensión Áurea",
      exercises: [
        { type: "multiple_choice", question: "¿A qué se dedicaba el hidalgo la mayor parte del año según el texto?", options: ["A administrar su hacienda.", "A leer libros de caballerías.", "A cazar con su galgo."], correct: 1 },
        { type: "multiple_choice", question: "¿Qué significa la expresión 'de cuyo nombre no quiero acordarme'?", options: ["Que el autor tiene mala memoria.", "Que el autor prefiere no decir el nombre del lugar por algún motivo.", "Que es un lugar inventado."], correct: 1 },
        { type: "multiple_choice", question: "¿Qué locución usa Cervantes para decir 'Bilinmelidir ki'?", options: ["Es, pues, de saber", "A sabiendas de que", "Huelga decir"], correct: 0 },
        { type: "syntax", turkish: "La Mancha'nın bir yerinde...", spanish: "En un lugar de la Mancha", words: ["En", "un", "lugar", "de", "la", "Mancha", "sitio"] },
        { type: "syntax", turkish: "Adını hatırlamak istemiyorum (de cuyo...).", spanish: "De cuyo nombre no quiero acordarme", words: ["De", "cuyo", "nombre", "no", "quiero", "acordarme"] }
      ]
    },
    {
      id: "c2_u10_n8",
      type: "theory",
      title: "Teoría III: La Herencia en el Lenguaje Actual",
      content: {
        concept: "El Siglo de Oro no está muerto. Muchas frases de Cervantes, Lope de Vega o Quevedo se usan hoy en día en España y Latinoamérica como dichos cotidianos.\n\n### Herencia Cervantina Viva:\n• **Luchar contra molinos de viento:** Luchar contra enemigos imaginarios o causas inútiles (como el Quijote creyendo que los molinos eran gigantes).\n• **Con la Iglesia hemos topado:** Encontrar un obstáculo insuperable, a menudo relacionado con la burocracia, la religión o el poder fáctico.\n• **Andar de capa caída:** Estar deprimido, sin ánimos o haber perdido prestigio.",
        examples: [
          { es: "Intentar cambiar las normas de esta empresa es luchar contra molinos de viento.", tr: "Bu şirketin kurallarını değiştirmeye çalışmak yel değirmenleriyle savaşmaktır (hayali/faydasız bir çabadır)." },
          { es: "Últimamente Carlos anda de capa caída tras perder su trabajo.", tr: "Son zamanlarda Carlos işini kaybettikten sonra çok moralsiz/çökmüş durumda (pelerini düşmüş dolaşıyor)." }
        ]
      }
    },
    {
      id: "c2_u10_n9",
      type: "theory",
      title: "Sintaxis Visual: El Soneto Conceptual",
      content: {
        concept: "Deconstruiremos un verso de Francisco de Quevedo donde define el amor mediante puros oxímoros (conceptos contradictorios).",
        examples: [{ es: "Es hielo abrasador, es fuego helado, es herida que duele y no se siente.", tr: "Yakıcı bir buzdur, donmuş bir ateştir, acıtan ama hissedilmeyen bir yaradır." }],
        analysis: [
          { word: "Es", type: "verb", literal: "O ...-dir", explanation: "Verbo copulativo. Define la esencia del amor.", examples: [] },
          { word: "hielo", type: "noun", literal: "buz", explanation: "Sustantivo. Símbolo de la frialdad.", examples: [] },
          { word: "abrasador,", type: "adjective", literal: "yakıcı / kavurucu", explanation: "Adjetivo en absoluta contradicción con el hielo (Oxímoron).", examples: [] },
          { word: "es fuego", type: "noun", literal: "ateştir", explanation: "El elemento opuesto.", examples: [] },
          { word: "helado,", type: "adjective", literal: "donmuş", explanation: "Nueva contradicción magistral.", examples: [] },
          { word: "es herida", type: "noun", literal: "yaradır", explanation: "Sustantivo de dolor.", examples: [] },
          { word: "que duele", type: "verb", literal: "ki acıtır", explanation: "Oración de relativo.", examples: [] },
          { word: "y no se siente.", type: "verb", literal: "ve hissedilmez", explanation: "Pasiva refleja que niega la lógica física de la herida.", examples: [] }
        ]
      }
    },
    {
      id: "c2_u10_n10",
      type: "theory",
      title: "Caja de Herramientas: Honor y Caballería",
      content: {
        concept: "Léxico culto heredado del Siglo de Oro, muy útil en contextos académicos, poéticos o literarios.\n\n• **El hidalgo** (Asilzade / Soylu)\n• **La hazaña** (Kahramanlık / Büyük başarı) ➔ *Logró una hazaña histórica.*\n• **El agravio / Desfacer agravios** (Haksızlık / Haksızlıkları düzeltmek)\n• **La merced** (Lütuf / İnayet) ➔ *Estar a merced de alguien (Birinin insafına kalmak).*\n• **El desatino** (Çılgınlık / Akılsızca iş)\n• **Estar ocioso** (Boşta olmak / Aylaklık etmek)\n• **El rocín** (Sıska, yaşlı at)\n• **La locura / El juicio** (Delilik / Akıl-Mantık) ➔ *Perder el juicio (Aklını yitirmek).* ",
        examples: [
          { es: "Perdió el juicio de tanto leer libros de caballerías.", tr: "Şövalyelik kitapları okumaktan aklını (muhakeme yeteneğini) yitirdi." },
          { es: "Estamos a merced del viento en esta tormenta.", tr: "Bu fırtınada rüzgarın insafına (lütfuna) kalmış durumdayız." }
        ]
      }
    },
    {
      id: "c2_u10_n11",
      type: "theory",
      title: "Taller de Producción: El Monólogo de Quevedo",
      content: {
        concept: "Escribe usando el ingenio del Siglo de Oro.\n\n**Instrucciones:**\nEscribe un pequeño párrafo (8-10 líneas) describiendo algo moderno (un teléfono móvil, el internet, o un coche) pero utilizando el vocabulario y el tono de un escritor del siglo XVII.\n1. Usa oxímoros (ej: fuego helado, silencio ruidoso).\n2. Usa al menos dos palabras de la Caja de Herramientas (desatino, ocioso, hazaña).\n3. Incluye un arcaísmo (Facer, fermoza) o un 'Vuesa merced'.\n\n**Inspiración:** 'Este espejo mágico de bolsillo, que los locos modernos llaman celular, es una prisión libre. Vuesa merced pasa horas ocioso mirándolo...'",
        examples: []
      }
    },
    {
      id: "c2_u10_n12",
      type: "exam",
      title: "Examen de Unidad: El Siglo de Oro",
      content: {
        concept: "Demuestra que puedes interpretar el castellano antiguo, las metáforas barrocas y los modismos cervantinos modernos.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué significa el arcaísmo 'Facer'?", options: ["Ser", "Hacer", "Decir"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se conjugaba 'Vos' en el Siglo de Oro para mostrar gran respeto?", options: ["Vos habláis", "Vos fablades", "Tú hablas"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué figura literaria caracteriza al Conceptismo de Quevedo ('fuego helado')?", options: ["El oxímoron (contradicción)", "El pleonasmo", "La asonancia"], correct: 0 },
          { type: "multiple_choice", question: "Si alguien dice 'Estamos luchando contra molinos de viento', significa:", options: ["Que la causa es noble y fácil.", "Que estamos luchando contra enemigos imaginarios o problemas insuperables.", "Que necesitamos energía eólica."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es un 'Hidalgo'?", options: ["Un campesino.", "Un noble de linaje pero a menudo sin mucha riqueza.", "El rey."], correct: 1 },
          { type: "multiple_choice", question: "La frase 'Con la Iglesia hemos topado' se usa hoy en día para expresar:", options: ["Que hemos llegado a un templo.", "Que nos hemos encontrado con un muro burocrático o de poder invencible.", "Que somos muy religiosos."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Estar a merced de alguien'?", options: ["Estar en deuda con alguien.", "Estar bajo su poder, a su insaf/lütuf.", "Ser su amigo."], correct: 1 },
          { type: "multiple_choice", question: "En el inicio del Quijote, Cervantes escribe '...de cuyo nombre no quiero acordarme'. ¿Por qué usa 'cuyo'?", options: ["Para indicar posesión (el nombre del lugar).", "Porque sonaba más largo.", "Es un error gramatical."], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Perder el juicio'?", options: ["Perder un caso en la corte.", "Volverse loco (Aklını yitirmek).", "Olvidar un nombre."], correct: 1 },
          { type: "multiple_choice", question: "Si andas 'de capa caída', estás:", options: ["Elegante", "Desanimado o deprimido", "Volando"], correct: 1 },
          
          { type: "syntax", turkish: "Zatıaliniz bana izin verirse (Si vuesa merced...).", spanish: "Si vuesa merced me diere licencia", words: ["Si", "vuesa", "merced", "me", "diere", "licencia"] },
          { type: "syntax", turkish: "Yel değirmenlerine karşı savaşıyoruz.", spanish: "Luchamos contra molinos de viento", words: ["Luchamos", "contra", "molinos", "de", "viento", "vientos"] },
          { type: "syntax", turkish: "O (erkek) aklını yitirdi (juicio).", spanish: "Él perdió el juicio", words: ["Él", "perdió", "el", "juicio", "mente"] },
          { type: "syntax", turkish: "Denizin insafına kaldık (A merced de).", spanish: "Estamos a merced del mar", words: ["Estamos", "a", "merced", "del", "mar", "de", "el"] },
          { type: "syntax", turkish: "Bu (Esto) tarihi bir kahramanlıktır (hazaña).", spanish: "Esto es una hazaña histórica", words: ["Esto", "es", "una", "hazaña", "histórica"] },
          { type: "syntax", turkish: "Zamanla aklını yitirdi (perder el juicio).", spanish: "Con el tiempo perdió el juicio", words: ["Con", "el", "tiempo", "perdió", "el", "juicio"] },
          { type: "syntax", turkish: "Düşman (El enemigo) kaçtı (fuir - fuyó).", spanish: "El enemigo fuyó al bosque", words: ["El", "enemigo", "fuyó", "al", "bosque", "huyó"] },
          { type: "syntax", turkish: "Güçlü bir şövalyedir Bay Para (Poderoso caballero...).", spanish: "Poderoso caballero es don Dinero", words: ["Poderoso", "caballero", "es", "don", "Dinero", "poder"] },
          { type: "syntax", turkish: "La Mancha'nın bir yerinde...", spanish: "En un lugar de la Mancha", words: ["En", "un", "lugar", "de", "la", "Mancha"] },
          { type: "syntax", turkish: "Yakıcı bir buzdur (hielo abrasador).", spanish: "Es hielo abrasador", words: ["Es", "hielo", "abrasador", "fuego"] }
        ]
      }
    }
  ]
};
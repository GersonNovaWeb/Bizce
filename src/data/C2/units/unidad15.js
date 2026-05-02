/**
 * UNIDAD 15 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Análisis Periodístico, Sesgos y Retórica de Poder.
 * Tema: Prensa, desinformación, manipulación y editoriales de opinión.
 */

export const unidad15 = {
  id: "c2_u15",
  title: "Unidad 15: Periodismo de Investigación",
  description: "Aprende a leer entre líneas. Domina la detección de sesgos, la retórica del poder y el lenguaje de los grandes editoriales de opinión.",
  nodes: [
    {
      id: "c2_u15_n1",
      type: "theory",
      title: "Teoría I: La Retórica de la Noticia",
      content: {
        concept: "En el nivel C2, no solo leemos la noticia; analizamos **cómo está escrita** para influir en el lector. El periodismo avanzado utiliza recursos retóricos para presentar opiniones como si fueran hechos objetivos.\n\n### Estrategias de Manipulación Sutil:\n\n**1. El Adjetivo Sesgado:**\nEn lugar de informar sobre un 'cambio', el periodista escribe 'un cambio **polémico**' o 'una **necesaria** reforma'. La elección del adjetivo ya está dictando al lector qué debe sentir.\n\n**2. La Pasiva sin Agente (Ocultar al culpable):**\n*Ej: 'Se han cometido errores'* (Hatalar yapıldı). No dice quién los hizo. Se usa para proteger a políticos o instituciones.\n\n**3. Las Comillas de Distanciamiento:**\nUsar comillas para deslegitimar una palabra.\n*Ej: El gobierno anuncia una 'mejora' económica.* (Las comillas sugieren que el periodista no cree que sea una mejora real).",
        examples: [
          { es: "El editorial critica la gestión 'negligente' del ayuntamiento.", tr: "Başyazı, belediyenin 'ihmalkar' yönetimini eleştiriyor." },
          { es: "Se produjeron incidentes durante la 'pacífica' manifestación.", tr: "'Barışçıl' gösteri sırasında olaylar meydana geldi. (İroni iması)." }
        ]
      }
    },
    {
      id: "c2_u15_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Sesgos)",
      exercises: [
        { type: "syntax", turkish: "Gazete (El periódico) 'başarılı' (éxito) kelimesini tırnak içinde (comillas) kullandı.", spanish: "El periódico usó comillas para la palabra éxito", words: ["El", "periódico", "usó", "comillas", "para", "la", "palabra", "éxito"] },
        { type: "syntax", turkish: "Hükümet (El gobierno) 'gerekli' bir reform duyurdu (anunciar).", spanish: "El gobierno anunció una necesaria reforma", words: ["El", "gobierno", "anunció", "una", "necesaria", "reforma", "necesario"] },
        { type: "syntax", turkish: "Hatalar yapıldı (Se cometieron) ama kimse hesap vermedi (rendir cuentas).", spanish: "Se cometieron errores pero nadie rindió cuentas", words: ["Se", "cometieron", "errores", "pero", "nadie", "rindió", "cuentas"] },
        { type: "syntax", turkish: "Başyazı (El editorial) kararı sertçe (duramente) eleştiriyor.", spanish: "El editorial critica duramente la decisión", words: ["El", "editorial", "critica", "duramente", "la", "decisión"] },
        { type: "syntax", turkish: "Bilgiyi (la información) manipüle etmek için dili (el lenguaje) kullanıyorlar.", spanish: "Usan el lenguaje para manipular la información", words: ["Usan", "el", "lenguaje", "para", "manipular", "la", "información"] },
        { type: "syntax", turkish: "Okuyucunun (el lector) fikrini değiştirmeye (influir) çalışıyor.", spanish: "Él intenta influir en la opinión del lector", words: ["Él", "intenta", "influir", "en", "la", "opinión", "del", "lector"] },
        { type: "syntax", turkish: "Bu bir yalan haberdir (bulu/noticia falsa).", spanish: "Esto es una noticia falsa", words: ["Esto", "es", "una", "noticia", "falsa", "mentira"] },
        { type: "syntax", turkish: "Gazeteciler (Los periodistas) bağımsız (independientes) olmalıdır.", spanish: "Los periodistas deben ser independientes", words: ["Los", "periodistas", "deben", "ser", "independientes"] },
        { type: "syntax", turkish: "Kaynağı (la fuente) doğrulamadan (confirmar) yayınladılar.", spanish: "Lo publicaron sin confirmar la fuente", words: ["Lo", "publicaron", "sin", "confirmar", "la", "fuente"] },
        { type: "syntax", turkish: "Basın özgürlüğü (La libertad de prensa) tehlikede (en peligro).", spanish: "La libertad de prensa está en peligro", words: ["La", "libertad", "de", "prensa", "está", "en", "peligro"] }
      ]
    },
    {
      id: "c2_u15_n3",
      type: "theory",
      title: "Teoría II: El Léxico de la Manipulación (Fake News)",
      content: {
        concept: "En C2, analizamos los términos modernos de la desinformación. Aprende a denunciar la falta de ética periodística con este vocabulario:\n\n• **El sesgo cognitivo / informativo:** (Önyargı). Una tendencia a favorecer un punto de vista.\n• **La posverdad:** (Hakikat sonrası). Cuando los hechos objetivos importan menos que las emociones.\n• **El clickbait / Ciberanzuelo:** Títulos exagerados para atraer clics.\n• **Contrastar la fuente:** (Kaynağı doğrulamak).\n• **La difamación / Calumnia:** (Karalama / İftira).\n• **La censura / El veto:** (Sansür / Engel).\n• **Un titular tendencioso:** Un título que tiene una intención política clara.",
        examples: [
          { es: "Ese titular es puramente tendencioso y carece de rigor.", tr: "Bu başlık tamamen taraflı (önyargılı) ve titizlikten yoksun." },
          { es: "Debemos contrastar la fuente antes de compartir el bulo.", tr: "Yalan haberi paylaşmadan önce kaynağı doğrulamalıyız." }
        ]
      }
    },
    {
      id: "c2_u15_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Detección de Sesgos)",
      exercises: [
        { type: "speaking", spanish: "Es inadmisible que un periodista falte a la verdad", turkish: "Bir gazetecinin gerçeği saptırması (yalan söylemesi) kabul edilemez." },
        { type: "speaking", spanish: "La libertad de prensa es la base de la democracia", turkish: "Basın özgürlüğü demokrasinin temelidir." },
        { type: "speaking", spanish: "El artículo tiene un sesgo ideológico evidente", turkish: "Makalenin bariz bir ideolojik önyargısı (eğilimi) var." },
        { type: "speaking", spanish: "No debemos caer en la trampa de la posverdad", turkish: "Hakikat sonrası (posverdad) tuzağına düşmemeliyiz." },
        { type: "speaking", spanish: "Cuestionamos la veracidad de esos datos", turkish: "Bu verilerin doğruluğunu sorguluyoruz." },
        { type: "speaking", spanish: "Se rumorea que el editor va a dimitir", turkish: "Editörün istifa edeceği söyleniyor (söylenti var)." },
        { type: "speaking", spanish: "El periódico publicó una rectificación oficial", turkish: "Gazete resmi bir düzeltme (tekzip) yayınladı." },
        { type: "speaking", spanish: "Es un editorial cargado de subjetividad", turkish: "Öznellikle dolu bir başyazıdır." }
      ]
    },
    {
      id: "c2_u15_n5",
      type: "theory",
      title: "El Reto Turco: La Traducción del Matiz Político",
      content: {
        concept: "En turco, para decir que alguien miente o exagera en la prensa, se usan palabras como *Yalan* o *Abartı*. En el español C1/C2 de los debates, usamos términos que atacan la estructura del argumento, no solo la palabra.\n\n• **'Yalan söylüyor'** ➔ **Falta a la verdad** (Daha resmi). / **Difunde un bulo** (Yalan haber yayıyor).\n• **'Yanlı davranıyor'** ➔ **Muestra un sesgo partidista** (Partizanca bir önyargı gösteriyor).\n• **'Sinsice'** ➔ **De forma sibilina** (Dolaylı ve tehlikeli bir şekilde).\n\n🇹🇷 **Tu brújula C2:** En lugar de llamar 'mentiroso' a un medio, di: 'El medio carece de ecuanimidad y objetividad'.",
        examples: [
          { es: "El periodista se mostró sibilino en sus preguntas.", tr: "Gazeteci sorularında sinsi/kapalı bir tutum sergiledi." }
        ]
      }
    },
    {
      id: "c2_u15_n6",
      type: "reading",
      title: "Lectura Crítica: El editorial del domingo",
      content: {
        text: "En un mundo saturado de información, la ética periodística brilla por su ausencia en muchos tabloides digitales. El último editorial de 'La Verdad Diaria' es un ejemplo de manual de manipulación. A sabiendas de que los datos económicos eran negativos, el autor decidió titular con un eufemismo bochornoso: 'Reajuste optimista de los mercados'. \n\nNo obstante, lo más preocupante es el uso sibilino de las comillas para referirse a la oposición. Se busca menoscabar la credibilidad de cualquier postura contraria mediante la calumnia y el sesgo partidista. Como ciudadanos con dos dedos de frente, debemos exigir que se respete nuestro derecho a recibir información veraz. Si permitiéramos que la posverdad gobernara las rotativas, estaríamos firmando el fin de la libertad de pensamiento. En definitiva, es hora de contrastar cada palabra.",
        translation: "Bilgiye doymuş bir dünyada, birçok dijital bulvarda gazetecilik etiği yokluğuyla parlıyor (hiç yok). 'Günlük Gerçek' gazetesinin son başyazısı tam bir manipülasyon örneğidir. Ekonomik verilerin olumsuz olduğunu bile bile (A sabiendas de que), yazar utanç verici (bochornoso) bir eufemizmle başlık atmaya karar verdi: 'Piyasaların iyimser yeniden düzenlenmesi'.\n\nAncak, en endişe verici olanı, muhalefete atıfta bulunmak için tırnak işaretlerinin sinsi (sibilino) kullanımıdır. İftira (calumnia) ve partizan önyargı (sesgo) yoluyla her türlü karşı görüşün güvenilirliğini zedelemek (menoscabar) amaçlanmaktadır. Aklı başında (iki parmak alnı olan) vatandaşlar olarak, doğru bilgi alma hakkımıza saygı duyulmasını talep etmeliyiz. Eğer hakikat sonrasının (posverdad) matbaaları yönetmesine izin verseydik, düşünce özgürlüğünün sonuna imza atmış olurduk. Kısacası (En definitiva), her kelimeyi doğrulama vaktidir."
      }
    },
    {
      id: "c2_u15_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto B2 (Periodismo)",
      exercises: [
        { type: "syntax", turkish: "Doğru bilgi alma (veraz) hakkımıza saygı duyulmalı.", spanish: "Debemos exigir que se respete nuestro derecho a la información veraz", words: ["Debemos", "exigir", "que", "se", "respete", "nuestro", "derecho", "a", "la", "información", "veraz"] },
        { type: "syntax", turkish: "Başyazı (El editorial) önyargılarla (sesgos) doludur.", spanish: "El editorial está lleno de sesgos ideológicos", words: ["El", "editorial", "está", "lleno", "de", "sesgos", "ideológicos"] },
        { type: "syntax", turkish: "Yalan haberi (el bulo) yaymadan (difundir) önce kaynağı doğrula (contrastar).", spanish: "Contrasta la fuente antes de difundir el bulo", words: ["Contrasta", "la", "fuente", "antes", "de", "difundir", "el", "bulo"] },
        { type: "syntax", turkish: "Söylemeye gerek yok ki (Huelga decir) manipülasyon var.", spanish: "Huelga decir que existe una manipulación mediática", words: ["Huelga", "decir", "que", "existe", "una", "manipulación", "mediática"] },
        { type: "syntax", turkish: "Dürüstlük (La integridad) yokluğuyla parlıyor.", spanish: "La integridad brilla por su ausencia", words: ["La", "integridad", "brilla", "por", "su", "ausencia"] },
        { type: "speaking", spanish: "Ese titular es puramente tendencioso", turkish: "O başlık tamamen taraflıdır." },
        { type: "speaking", spanish: "Se sospecha que hubo censura informativa", turkish: "Bilgi sansürü olduğundan şüpheleniliyor." },
        { type: "speaking", spanish: "El periodista debe ser un observador objetivo", turkish: "Gazeteci nesnel bir gözlemci olmalıdır." },
        { type: "speaking", spanish: "La neta es que no creo lo que dicen", turkish: "Gerçek şu ki söylediklerine inanmıyorum (Latam Slang)." }
      ]
    },
    {
      id: "c2_u15_n8",
      type: "theory",
      title: "Teoría III: La Verdad según el Medio",
      content: {
        concept: "En España existen periódicos con líneas ideológicas muy marcadas. Saber de qué periódico viene una frase te ayudará a entender el sesgo.\n\n• **El País / El Diario:** Generalmente tendencia progresista. Usarán palabras como 'justicia social', 'redistribución', 'reforma necesaria'.\n• **ABC / El Mundo:** Tendencia conservadora. Usarán palabras como 'libertad individual', 'gasto excesivo', 'amenaza a la unidad'.\n\n### Verbos de Duda y Opinión en Prensa:\n• **Tachar de:** (Bir şeyi ... olarak nitelendirmek/etiketlemek). *'El medio tachó la propuesta de ilegal'.*\n• **Calificar como:** (Olarak vasıflandırmak).\n• **Aludir a:** (Atıfta bulunmak).",
        examples: [
          { es: "El artículo tacha de corruptos a todos los concejales.", tr: "Makale tüm meclis üyelerini yolsuzlukla nitelendiriyor (etiketliyor)." },
          { es: "Se aludió a la crisis anterior para justificar el recorte.", tr: "Kesintiyi haklı çıkarmak için önceki krize atıfta bulunuldu." }
        ]
      }
    },
    {
      id: "c2_u15_n9",
      type: "theory",
      title: "Sintaxis Visual: El Párrafo de la Opinión",
      content: {
        concept: "Analizaremos cómo se construye un argumento en una columna de opinión que usa dobles negaciones y concesivas para atacar con sutileza.",
        examples: [{ es: "No es que el autor ignore la realidad, sino que prefiere matizarla a sabiendas de que sus lectores buscan confirmación.", tr: "Yazar gerçeği görmezden geliyor değil, aksine okurlarının onay aradığını bile bile onu yumuşatmayı (detaylandırmayı) tercih ediyor." }],
        analysis: [
          { word: "No es que", type: "connector", literal: "Değil ki", explanation: "Estructura que niega una intención para introducir la verdadera intención después. Exige subjuntivo.", examples: [] },
          { word: "ignore", type: "verb", literal: "görmezden gelsin", explanation: "Verbo IGNORAR en Subjuntivo.", examples: [] },
          { word: "la realidad,", type: "noun", literal: "gerçeği", explanation: "Objeto directo.", examples: [] },
          { word: "sino que", type: "connector", literal: "aksine / -dan ziyade", explanation: "Conector de contraste correctivo.", examples: [] },
          { word: "prefiere", type: "verb", literal: "tercih ediyor", explanation: "Acción principal en Indicativo.", examples: [] },
          { word: "matizarla", type: "verb", literal: "onu detaylandırmayı/yumuşatmayı", explanation: "Infinitivo con pronombre 'la' (la realidad) pegado.", examples: [] },
          { word: "a sabiendas de que", type: "connector", literal: "bile bile", explanation: "Conector de conocimiento pleno (rige indicativo).", examples: [] },
          { word: "sus lectores buscan", type: "verb", literal: "okurları arıyor", explanation: "Hecho real constatado.", examples: [] },
          { word: "confirmación.", type: "noun", literal: "onay", explanation: "Cierre de la tesis." }
        ]
      }
    },
    {
      id: "c2_u15_n10",
      type: "theory",
      title: "Caja de Herramientas: Vocabulario de la Noticia",
      content: {
        concept: "Palabras para redactar o analizar informes periodísticos:\n\n• **La ecuanimidad** (Tarafsızlık / Nesnellik)\n• **La veracidad** (Doğruluk)\n• **El bulo / La patraña** (Uydurma haber / Yalan)\n• **La fuente fidedigna** (Güvenilir kaynak)\n• **El editorial / La columna de opinión**\n• **Filtrar información** (Bilgi sızdırmak)\n• **La primicia** (Atlatma haber / İlk kez yayınlanan)\n• **El sensacionalismo** (Sansasyonellik)\n• **Rectificar** (Düzeltmek)",
        examples: [
          { es: "La noticia resultó ser una patraña inventada por un bot.", tr: "Haberin bir bot tarafından uydurulmuş bir yalan olduğu ortaya çıktı." },
          { es: "Tenemos una fuente fidedigna que confirma la primicia.", tr: "Atlatma haberi doğrulayan güvenilir bir kaynağımız var." }
        ]
      }
    },
    {
      id: "c2_u15_n11",
      type: "theory",
      title: "Taller de Producción: Analista de Prensa",
      content: {
        concept: "Instrucciones: Elige una noticia reciente de tu interés. Escribe un párrafo analítico (10-15 líneas) explicando cómo el medio de comunicación presenta la información.\n\n1. Identifica si hay un sesgo (ideológico, económico).\n2. Menciona el uso de eufemismos o comillas de distanciamiento.\n3. Usa conectores de oratoria (Puesto que, no obstante, ergo).\n4. Utiliza los verbos 'tachar de' o 'aludir a'.\n\n**Inspiración:** 'En el artículo analizado, se pone de manifiesto una falta de ecuanimidad. El autor alude a hechos pasados para...'",
        examples: []
      }
    },
    {
      id: "c2_u15_n12",
      type: "exam",
      title: "Examen de Unidad: Periodismo de Investigación",
      content: {
        concept: "Demuestra tu capacidad de análisis crítico y dominio del lenguaje periodístico avanzado.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué indican las comillas en 'un gran éxito' económico en un artículo crítico?", options: ["Sarcasmo o duda sobre la veracidad.", "Que el periodista está muy feliz.", "Que es el título de una canción."], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Tachar a alguien de mentiroso'?", options: ["Pintar encima de su nombre.", "Etiquetarlo o calificarlo como mentiroso.", "Pedirle perdón."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es un 'Bulo'?", options: ["Un animal de carga.", "Una noticia falsa / Fake news.", "Un periódico de papel."], correct: 1 },
          { type: "multiple_choice", question: "El periodismo debe basarse en fuentes ______ (güvenilir).", options: ["fresas", "fidedignas", "sensacionalistas"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien 'Falta a la verdad', está:", options: ["Diciendo la verdad.", "Mintiendo / Yalan söylüyor.", "Llegando tarde."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa que la información está 'sesgada'?", options: ["Que es imparcial y justa.", "Que tiene un prejuicio o tendencia / Taraflı.", "Que es muy vieja."], correct: 1 },
          { type: "multiple_choice", question: "La 'primicia' es:", options: ["La hija de tu tío.", "La primera vez que se publica una noticia / Atlatma haber.", "Un error de impresión."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué conector usarías para introducir una verdad obvia?", options: ["Ergo", "Huelga decir que", "Tal vez"], correct: 1 },
          { type: "multiple_choice", question: "Si un medio de comunicación 'matiza' sus palabras, está:", options: ["Gritando más fuerte.", "Añadiendo detalles para aclarar o suavizar lo dicho.", "Cerrando el periódico."], correct: 1 },
          { type: "multiple_choice", question: "La ______ (tarafsızlık) es el pilar de la profesión.", options: ["ecuanimidad", "calumnia", "obsolescencia"], correct: 0 },
          { type: "syntax", turkish: "Haberin bir yalan (patraña) olduğu ortaya çıktı (resultar).", spanish: "La noticia resultó ser una patraña", words: ["La", "noticia", "resultó", "ser", "una", "patraña", "es"] },
          { type: "syntax", turkish: "Gerçek dışı (posverdad) tuzağına (la trampa) düşmemeliyiz.", spanish: "No debemos caer en la trampa de la posverdad", words: ["No", "debemos", "caer", "en", "la", "trampa", "de", "la", "posverdad"] },
          { type: "syntax", turkish: "Gazetecilik etiği (la ética) yokluğuyla parlıyor (brillar).", spanish: "La ética periodística brilla por su ausencia", words: ["La", "ética", "periodística", "brilla", "por", "su", "ausencia"] },
          { type: "syntax", turkish: "Kaynağı (la fuente) doğrulamak (contrastar) zorunludur.", spanish: "Es imperativo contrastar la fuente de información", words: ["Es", "imperativo", "contrastar", "la", "fuente", "de", "información"] },
          { type: "syntax", turkish: "Buna rağmen (No obstante) proaktif bir duruş sergilediler.", spanish: "No obstante ellos mantuvieron una postura proactiva", words: ["No", "obstante", "ellos", "mantuvieron", "una", "postura", "proactiva"] },
          { type: "syntax", turkish: "Müdürü (al director) yolsuzlukla (de corrupto) suçladılar (tachar).", spanish: "Tacharon de corrupto al director", words: ["Tacharon", "de", "corrupto", "al", "director", "dicen"] },
          { type: "syntax", turkish: "Hükümet (El gobierno) bilgiyi sızdırdı (filtrar).", spanish: "El gobierno filtró la información a la prensa", words: ["El", "gobierno", "filtró", "la", "información", "a", "la", "prensa"] },
          { type: "syntax", turkish: "Hatalar yapıldı (Se cometieron) ama tekzip (rectificación) yok.", spanish: "Se cometieron errores pero no hay rectificación", words: ["Se", "cometieron", "errores", "pero", "no", "hay", "rectificación"] },
          { type: "syntax", turkish: "Başlık taraflıydı (tendencioso).", spanish: "El titular era puramente tendencioso", words: ["El", "titular", "era", "puramente", "tendencioso", "chido"] },
          { type: "syntax", turkish: "Özgeçi (su historial) göz ardı edilemez (obviar).", spanish: "No se puede obviar su historial profesional", words: ["No", "se", "puede", "obviar", "su", "historial", "profesional"] }
        ]
      }
    }
  ]
};
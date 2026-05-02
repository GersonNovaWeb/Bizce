/**
 * UNIDAD 3 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Estructuras Anómalas de Pasiva y el Gerundio de Posterioridad.
 * Tema: Lenguaje periodístico, crónica de sucesos y precisión descriptiva.
 */

export const unidad3 = {
  id: "c2_u3",
  title: "Unidad 3: El laberinto de la Pasiva",
  description: "Domina el foco del discurso. Aprende a usar las pasivas de estado y evita el error más común de los medios de comunicación.",
  nodes: [
    {
      id: "c2_u3_n1",
      type: "theory",
      title: "Teoría I: La Pasiva de Resultado (Quedar y Resultar)",
      content: {
        concept: "En C2, la pasiva con 'ser' (fue hecho) suena a veces demasiado simple. Los hablantes cultos prefieren matizar el **estado final** de los objetos tras una acción usando verbos pseudo-copulativos que funcionan como auxiliares pasivos.\n\n### 1. QUEDAR + Participio\nSe usa cuando queremos enfatizar que el estado actual es la consecuencia directa de un evento previo. Es muy común en el lenguaje administrativo y de crónicas.\n• *La propuesta **quedó aprobada** por unanimidad.*\n• *El edificio **quedó destruido** tras el incendio.*\n\n### 2. RESULTAR + Participio / Adjetivo\nIndica el desenlace de un proceso, a menudo implicando una evaluación o sorpresa.\n• *Tras el análisis, la teoría **resultó falsa**.*\n• *Tres personas **resultaron heridas** en el accidente.*\n\n⚠️ **Matiz C2:** Mientras que 'fue herido' se centra en el golpe, 'resultó herido' se centra en la situación de la persona después de todo el evento.",
        examples: [
          { es: "El asunto quedó zanjado tras la reunión.", tr: "Mesele toplantıdan sonra karara bağlandı (çözülmüş kaldı)." },
          { es: "Su testimonio resultó determinante para el juicio.", tr: "Tanıklığı dava için belirleyici oldu (belirleyici sonuçlandı)." },
          { es: "La puerta quedó abierta por un descuido.", tr: "Bir ihmal yüzünden kapı açık kaldı." }
        ]
      }
    },
    {
      id: "c2_u3_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis Extrema",
      exercises: [
        { type: "syntax", turkish: "Mesele (El asunto) çözüldü (zanjado - quedar).", spanish: "El asunto quedó zanjado", words: ["El", "asunto", "quedó", "zanjado", "estuvo", "fue"] },
        { type: "syntax", turkish: "Beş kişi yaralandı (herido - resultar).", spanish: "Cinco personas resultaron heridas", words: ["Cinco", "personas", "resultaron", "heridas", "fueron", "están"] },
        { type: "syntax", turkish: "Teklif (La propuesta) oybirliğiyle (por unanimidad) onaylandı (quedar).", spanish: "La propuesta quedó aprobada por unanimidad", words: ["La", "propuesta", "quedó", "aprobada", "por", "unanimidad"] },
        { type: "syntax", turkish: "Teorinin yanlış olduğu ortaya çıktı (resultar).", spanish: "La teoría resultó ser falsa", words: ["La", "teoría", "resultó", "ser", "falsa", "es"] },
        { type: "syntax", turkish: "Bina (El edificio) tamamen yıkıldı (destruido - quedar).", spanish: "El edificio quedó completamente destruido", words: ["El", "edificio", "quedó", "completamente", "destruido"] },
        { type: "syntax", turkish: "Her şey (Todo) hazırlıklı (listo - quedar) durumda.", spanish: "Todo quedó listo para la ceremonia", words: ["Todo", "quedó", "listo", "para", "la", "ceremonia"] },
        { type: "syntax", turkish: "Karar (La decisión) ertelendi (pospuesto - quedar).", spanish: "La decisión quedó pospuesta", words: ["La", "decisión", "quedó", "pospuesta", "fue"] },
        { type: "syntax", turkish: "Sınav (El examen) çok zor geçti (resultar).", spanish: "El examen resultó muy difícil", words: ["El", "examen", "resultó", "muy", "difícil", "era"] },
        { type: "syntax", turkish: "Yardımın (Tu ayuda) hayati (vital) oldu (resultar).", spanish: "Tu ayuda resultó vital para nosotros", words: ["Tu", "ayuda", "resultó", "vital", "para", "nosotros"] },
        { type: "syntax", turkish: "Olay (El incidente) unutuldu (olvidado - quedar).", spanish: "El incidente quedó olvidado", words: ["El", "incidente", "quedó", "olvidado", "estuvo"] }
      ]
    },
    {
      id: "c2_u3_n3",
      type: "theory",
      title: "Teoría II: El Pecado del Gerundio de Posterioridad",
      content: {
        concept: "Este es el punto más alto de la corrección gramatical. En el nivel C2, evaluamos tu capacidad para detectar errores que incluso los nativos cometen en la prensa.\n\n### ¿Qué es el Gerundio de Posterioridad?\nEl gerundio en español debe expresar acciones **simultáneas** (mientras) o **anteriores** (causa). NUNCA debe expresar una acción que ocurre **después** del verbo principal.\n\n• ❌ **ERROR (Común en prensa):** *'El jugador golpeó el balón, metiendo un gol'.* (Primero golpea, LUEGO mete el gol. El gerundio es incorrecto).\n• ✅ **CORRECTO:** *'El jugador golpeó el balón **e hizo** un gol'.*\n\n• ❌ **ERROR:** *'Nació en Madrid, trasladándose a Turquía años después'.*\n• ✅ **CORRECTO:** *'Nació en Madrid **y se trasladó** a Turquía años después'.*\n\nSi evitas este error al escribir, tu registro se elevará instantáneamente al nivel de un académico de la lengua.",
        examples: [
          { es: "Se cayó por la escalera, rompiéndose una pierna. (Incorrecto)", tr: "Merdivenden düştü, (ardından) bacağını kırdı. (Hatalı kullanım)" },
          { es: "Se cayó por la escalera y se rompió una pierna. (Correcto)", tr: "Merdivenden düştü ve bacağını kırdı." },
          { es: "Llegó al aeropuerto perdiendo el avión. (Incorrecto)", tr: "Havaalanına vardı, (sonra) uçağı kaçırdı. (Hatalı kullanım)" }
        ]
      }
    },
    {
      id: "c2_u3_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Detección de Errores)",
      exercises: [
        { type: "speaking", spanish: "Se marchó de casa y nunca volvió", turkish: "Evden ayrıldı ve bir daha dönmedi. (Correcto)" },
        { type: "speaking", spanish: "El ladrón huyó siendo detenido después", turkish: "Hırsız kaçtı, (sonra) yakalandı. (¡Gerundio incorrecto!)" },
        { type: "speaking", spanish: "Estudió mucho y aprobó el examen", turkish: "Çok çalıştı ve sınavı geçti. (Correcto)" },
        { type: "speaking", spanish: "La ley fue aprobada quedando vigente hoy", turkish: "Yasa onaylandı, bugün yürürlükte kaldı. (¡Gerundio incorrecto!)" },
        { type: "speaking", spanish: "Entró en la sala saludando a todos", turkish: "Odaya herkese selam vererek girdi. (Correcto - Simultáneo)" },
        { type: "speaking", spanish: "Escribió el libro publicándolo en mayo", turkish: "Kitabı yazdı, (sonra) mayısta yayınladı. (¡Gerundio incorrecto!)" },
        { type: "speaking", spanish: "Trabajó diez horas resultando agotado", turkish: "On saat çalıştı, sonuç olarak tükendi. (Correcto - Estado)" },
        { type: "speaking", spanish: "Salió corriendo perdiendo las llaves", turkish: "Koşarak çıktı, (sonra) anahtarları kaybetti. (¡Gerundio incorrecto!)" }
      ]
    },
    {
      id: "c2_u3_n5",
      type: "theory",
      title: "El Reto Turco: La Pasiva Dinámica vs Estática",
      content: {
        concept: "En turco, la diferencia entre una acción pasiva y un estado resultante a menudo se marca por el contexto o por el uso de *olmak / bulunmak*.\n\n### El Choque de Lógicas:\n• 🇹🇷 **Eylem (Action):** *Karar verildi.* (Se tomó la decisión).\n• 🇹🇷 **Durum (State):** *Karar verilmiş durumda.* (La decisión está tomada).\n\nEn español C2, usamos la **Pasiva Refleja** para la acción dinámica y **Quedar/Estar + Participio** para la estática.\n\n⚠️ **DATO CLAVE:** Si quieres sonar muy técnica, usa **QUEDAR**. \n• *'La sesión queda inaugurada'.* (Oturum açılmıştır). Es mucho más potente que 'La sesión está inaugurada'.",
        examples: [
          { es: "Se firmó el acuerdo. (Acción)", tr: "Anlaşma imzalandı." },
          { es: "El acuerdo queda firmado. (Estado formal resultante)", tr: "Anlaşma imzalanmış bulunmaktadır." }
        ]
      }
    },
    {
      id: "c2_u3_n6",
      type: "reading",
      title: "Lectura Crítica: El Informe del Peritaje",
      content: {
        text: "«Tras la inspección técnica realizada en el inmueble, se ha determinado que la estructura **quedó seriamente afectada** por las vibraciones de las obras colindantes. El análisis de los cimientos **resultó determinante** para entender la gravedad del daño.\n\nEs inadmisible que la constructora ignorara los informes previos, **provocando** así un riesgo innecesario para los residentes. Cabe subrayar que las paredes de carga se encuentran agrietadas y el techo **ha quedado desplazado** unos centímetros. \n\nEn consecuencia, la zona **ha sido acordonada** por los bomberos y el edificio **queda clausurado** hasta nueva orden. Se ruego a los vecinos que no intenten acceder, ya que la estabilidad del bloque **resulta incierta** en estos momentos».",
        translation: "«Mülkte yapılan teknik inceleme sonucunda, yapının komşu inşaatların titreşimlerinden **ciddi şekilde etkilendiği (quedó afectada)** tespit edilmiştir. Temellerin analizi, hasarın ciddiyetini anlamak için **belirleyici olmuştur (resultó determinante)**.\n\nİnşaat şirketinin önceki raporları görmezden gelmesi ve böylece sakinler için gereksiz bir risk **yaratması (provocando - simultáneo)** kabul edilemez. Taşıyıcı duvarların çatlamış olduğunu ve tavanın birkaç santimetre **kaymış olduğunu (ha quedado desplazado)** vurgulamak gerekir.\n\nSonuç olarak, bölge itfaiye tarafından **kordon altına alınmış (ha sido acordonada)** ve bina bir sonraki emre kadar **kapatılmıştır (queda clausurado)**. Bloğun stabilitesi şu an için **belirsiz olduğundan (resultar incierta)** komşuların içeri girmeye çalışmamaları rica olunur.»"
      }
    },
    {
      id: "c2_u3_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Precisión Pasiva",
      exercises: [
        { type: "multiple_choice", question: "¿Qué oración contiene un error de Gerundio de Posterioridad?", options: ["Salió de casa cantando.", "Llegó a la meta ganando la carrera.", "Estudió mucho aprobando el examen después."], correct: 2 },
        { type: "multiple_choice", question: "Si un juez dice: 'El caso ______ visto para sentencia', ¿qué auxiliar usa para sonar formal?", options: ["está", "es", "queda"], correct: 2 },
        { type: "multiple_choice", question: "Tras el accidente, el coche ______ totalmente destruido.", options: ["resultó", "quedó", "ambas son correctas"], correct: 2 },
        { type: "syntax", turkish: "Mesele (El asunto) halledildi/zanjado (quedar).", spanish: "El asunto quedó zanjado", words: ["El", "asunto", "quedó", "zanjado", "fue"] },
        { type: "syntax", turkish: "Çabası (Su esfuerzo) boşuna (inútil) oldu (resultar).", spanish: "Su esfuerzo resultó inútil", words: ["Su", "esfuerzo", "resultó", "inútil", "quedó"] }
      ]
    },
    {
      id: "c2_u3_n8",
      type: "theory",
      title: "Teoría III: Etimología de 'Quedar' y Modismos",
      content: {
        concept: "El verbo **QUEDAR** viene del latín *quietare* (estar quieto/tranquilo). Por eso, en español C1, se usa para describir el estado en el que 'descansa' un objeto tras una acción.\n\n### Modismos Pasivos de Nivel C2:\n• **Quedar en agua de borrajas:** (Fos çıkmak / Boşa gitmek). Se usa cuando un plan que parecía importante termina en nada.\n• **Quedarse con la boca abierta:** (Ağzı açık kalmak). Estar extremadamente sorprendido.\n• **Quedar por ver:** (Henüz görülmedi / Belirsiz). *'Aún queda por ver si el plan funcionará'.*\n• **Resultar de perlas:** (Cuk oturmak / Çok işe yaramak). *'Tu ayuda me resultó de perlas'.*",
        examples: [
          { es: "La reforma del gobierno quedó en agua de borrajas.", tr: "Hükümetin reformu boşa gitti (hiçbir şeye yaramadı)." },
          { es: "Aún queda por ver quién ganará las elecciones.", tr: "Seçimleri kimin kazanacağı henüz belli değil (görülmeyi bekliyor)." }
        ]
      }
    },
    {
      id: "c2_u3_n9",
      type: "theory",
      title: "Sintaxis Visual: El Párrafo de Sucesos",
      content: {
        concept: "Analizaremos la anatomía de una frase de crónica negra que usa pasivas y evita el gerundio de posterioridad de forma magistral.",
        examples: [{ es: "El sospechoso fue detenido por la guardia, quedando bajo custodia a la espera de que el juez dicte sentencia.", tr: "Şüpheli muhafızlar tarafından yakalandı ve hakimin hükmünü vermesini beklerken gözaltında kaldı." }],
        analysis: [
          { word: "El sospechoso", type: "noun", literal: "Şüpheli", explanation: "Sujeto paciente.", examples: [] },
          { word: "fue detenido", type: "verb", literal: "yakalandı", explanation: "Pasiva de proceso (SER + Participio). Marca el evento puntual.", examples: [] },
          { word: "por la guardia,", type: "noun", literal: "muhafızlar tarafından", explanation: "Complemento agente.", examples: [] },
          { word: "quedando", type: "verb", literal: "kalarak", explanation: "Gerundio de simultaneidad (no posterioridad). La detención y el inicio de la custodia ocurren al mismo tiempo.", examples: [] },
          { word: "bajo custodia", type: "noun", literal: "gözaltında", explanation: "Estado resultante.", examples: [] },
          { word: "a la espera de que", type: "connector", literal: "beklentisiyle", explanation: "Locución conjuntiva avanzada.", examples: [] },
          { word: "el juez dicte", type: "verb", literal: "hakimin vermesi", explanation: "Subjuntivo provocado por la expectativa.", examples: [] }
        ]
      }
    },
    {
      id: "c2_u3_n10",
      type: "theory",
      title: "Caja de Herramientas: Crónica de Sucesos",
      content: {
        concept: "Palabras técnicas para describir incidentes, accidentes y sus consecuencias legales.\n\n• **Acordonar** (Kordon altına almak)\n• **Zanjado/a** (Halledilmiş / Karara bağlanmış)\n• **Clausurar** (Mühürlemek / Kapatmak)\n• **Ileso/a** (Yara almadan kurtulmuş)\n• **Siniestrado/a** (Hasar görmüş / Kaza yapmış)\n• **Determinante** (Belirleyici)\n• **Vigente** (Yürürlükte)\n• **Unanimidad** (Oybirliği)\n• **Colindante** (Bitişik / Komşu - genelde binalar için)",
        examples: [
          { es: "La calle fue acordonada tras el hallazgo.", tr: "Bulgunun ardından sokak kordon altına alındó." },
          { es: "El contrato sigue vigente por unanimidad.", tr: "Sözleşme oybirliğiyle yürürlükte kalmaya devam ediyor." }
        ]
      }
    },
    {
      id: "c2_u3_n11",
      type: "theory",
      title: "Taller de Producción: Crónica de un Incidente",
      content: {
        concept: "Imagina que eres una periodista de investigación reportando sobre el cierre de una fábrica o un incidente en un museo.\n\n**Instrucciones:**\nEscribe un reporte (12-15 líneas) usando el estilo formal C2.\n1. Usa **Quedar + Participio** para describir el estado final de las cosas.\n2. Usa **Resultar + Adjetivo** para evaluar el desenlace.\n3. **PROHIBIDO:** Usar el gerundio de posterioridad (Ej: No digas 'Llegó muriendo').\n4. Usa al menos 3 palabras de la Caja de Herramientas.\n\n**Inspiración:** «El edificio colindante resultó seriamente dañado. Tras la revisión, la zona quedó clausurada...»",
        examples: []
      }
    },
    {
      id: "c2_u3_n12",
      type: "exam",
      title: "Examen de Unidad: El Laberinto de la Pasiva",
      content: {
        concept: "Prueba de fuego para tu gramática C2. ¿Acción o estado? ¿Gerundio correcto o incorrecto?",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es el gerundio correcto?", options: ["Salió de la oficina perdiendo el tren.", "Salió de la oficina y perdió el tren.", "Salió de la oficina habiendo perdido el tren."], correct: 1 },
          { type: "multiple_choice", question: "El asunto ______ zanjado tras la firma.", options: ["es", "quedó", "estuvo"], correct: 1 },
          { type: "multiple_choice", question: "Dos pasajeros ______ ilesos en el choque.", options: ["resultaron", "fueron", "son"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Quedar en agua de borrajas'?", options: ["Hacer una sopa.", "Que un plan se arruine o no llegue a nada.", "Tener mucha suerte."], correct: 1 },
          { type: "multiple_choice", question: "Se busca ______ los culpables (Impersonal).", options: ["a", "por", "(nada)"], correct: 0 },
          { type: "multiple_choice", question: "La fábrica ______ (clausurar) por el gobierno ayer.", options: ["quedó clausurada", "fue clausurada", "ambas son correctas"], correct: 2 },
          { type: "multiple_choice", question: "Su actitud ______ (resultar) muy extraña para todos.", options: ["fue", "resultó", "resultará"], correct: 1 },
          { type: "multiple_choice", question: "El gerundio de posterioridad es un error porque el gerundio debe ser:", options: ["Solo futuro.", "Simultáneo o anterior.", "Solo pasado."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué palabra describe algo que está 'Bitişik / Komşu'?", options: ["Vigente", "Colindante", "Unanimidad"], correct: 1 },
          { type: "multiple_choice", question: "La sesión ______ inaugurada por el Rey.", options: ["queda", "está", "es"], correct: 0 },
          { type: "syntax", turkish: "Bölge (La zona) kordon altına alındı (acordonada - quedar).", spanish: "La zona quedó acordonada", words: ["La", "zona", "quedó", "acordonada", "fue"] },
          { type: "syntax", turkish: "Plan (El plan) boşa gitti (agua de borrajas).", spanish: "El plan quedó en agua de borrajas", words: ["El", "plan", "quedó", "en", "agua", "de", "borrajas"] },
          { type: "syntax", turkish: "Sözleşme oybirliğiyle (unanimidad) onaylandı (aprobar - quedar).", spanish: "El contrato quedó aprobado por unanimidad", words: ["El", "contrato", "quedó", "aprobado", "por", "unanimidad"] },
          { type: "syntax", turkish: "Havaalanına vardı (llegar) ve uçağı kaçırdó (perder).", spanish: "Llegó al aeropuerto y perdió el avión", words: ["Llegó", "al", "aeropuerto", "y", "perdió", "el", "avión", "perdiendo"] },
          { type: "syntax", turkish: "Bina (El edificio) mühürlendi (clausurado - quedar).", spanish: "El edificio quedó clausurado", words: ["El", "edificio", "quedó", "clausurado", "clausuró"] },
          { type: "syntax", turkish: "Yara almadan kurtulduk (ilesos - resultar).", spanish: "Nosotros resultamos ilesos", words: ["Nosotros", "resultamos", "ilesos", "fuimos"] },
          { type: "syntax", turkish: "Analiz belirleyici oldu (resultar).", spanish: "El análisis resultó determinante", words: ["El", "análisis", "resultó", "determinante", "fue"] },
          { type: "syntax", turkish: "O günden beri (Desde entonces) mesele kapandı (quedar).", spanish: "Desde entonces el asunto quedó zanjado", words: ["Desde", "entonces", "el", "asunto", "quedó", "zanjado"] },
          { type: "syntax", turkish: "Sanki (como si) hiçbir şey olmamış gibi.", spanish: "Como si nada hubiera pasado", words: ["Como", "si", "nada", "hubiera", "pasado"] },
          { type: "syntax", turkish: "Bana çok iyi (perlas) geldi (resultar).", spanish: "Me resultó de perlas", words: ["Me", "resultó", "de", "perlas", "quedó"] }
        ]
      }
    }
  ]
};
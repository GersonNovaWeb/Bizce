/**
 * UNIDAD 9 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Deconstrucción de párrafos complejos, hipérbaton y subordinación en cadena.
 * Tema: Textos académicos, legales, literatura densa y puntuación avanzada.
 */

export const unidad9 = {
  id: "c2_u9",
  title: "Unidad 9: Sintaxis Visual",
  description: "Domina el arte de la frase infinita. Aprende a leer y escribir textos complejos sin perderte en el laberinto de las subordinadas y la puntuación.",
  nodes: [
    {
      id: "c2_u9_n1",
      type: "theory",
      title: "Teoría I: Las Matrioshkas Sintácticas",
      content: {
        concept: "En el nivel C2, rara vez encontrarás oraciones simples (Sujeto + Verbo + Objeto). Te enfrentarás a oraciones 'Matrioshka' (como las muñecas rusas): una oración dentro de otra, dentro de otra.\n\n### La Oración Tren (Hacia la derecha)\nEl español expande sus frases hacia la derecha usando relativos (que, el cual, quien). Para no perderte, debes aislar el sujeto principal del verbo principal.\n\n• *El informe [que el director, (cuyo prestigio estaba en duda), presentó ayer], **resultó** ser falso.*\n\n**¿Cómo leer en C2?**\nNo leas palabra por palabra. Busca los 'corchetes' mentales. Todo lo que está entre comas o introducido por 'que/cuyo/quien' es un inciso (ek bilgi). Mátalo mentalmente hasta que encuentres el verbo real: *El informe resultó ser falso*.",
        examples: [
          { es: "El hombre que me vendió el coche que se estropeó ayer, el cual había prometido garantías, ha desaparecido.", tr: "Bana dün bozulan arabayı satan ve garanti sözü vermiş olan adam ortadan kayboldu." },
          { es: "La ley, cuya aprobación fue polémica, entrará en vigor mañana.", tr: "Onaylanması tartışmalı olan yasa yarın yürürlüğe girecek." }
        ]
      }
    },
    {
      id: "c2_u9_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (El Tren de Palabras)",
      exercises: [
        { type: "syntax", turkish: "Sekreterin bahsettiği müdür, bir dahi.", spanish: "El director del que habló la secretaria es un genio", words: ["El", "director", "del", "que", "habló", "la", "secretaria", "es", "un", "genio"] },
        { type: "syntax", turkish: "Dün çözülen sorun çok karmaşıktı.", spanish: "El problema el cual fue resuelto ayer era muy complejo", words: ["El", "problema", "el", "cual", "fue", "resuelto", "ayer", "era", "muy", "complejo"] },
        { type: "syntax", turkish: "Kararı henüz alınmayan dava yarına ertelendi.", spanish: "El caso cuya decisión está pendiente fue pospuesto para mañana", words: ["El", "caso", "cuya", "decisión", "está", "pendiente", "fue", "pospuesto", "para", "mañana"] },
        { type: "syntax", turkish: "Sorumlulukları yüksek olan yöneticiler (directivos) bir bonus talep ettiler.", spanish: "Los directivos cuyas responsabilidades son altas exigieron un bono", words: ["Los", "directivos", "cuyas", "responsabilidades", "son", "altas", "exigieron", "un", "bono"] },
        { type: "syntax", turkish: "Yalnızca İspanyolca konuşan o kadın projenin lideridir.", spanish: "Esa mujer que solo habla español es la líder del proyecto", words: ["Esa", "mujer", "que", "solo", "habla", "español", "es", "la", "líder", "del", "proyecto"] },
        { type: "syntax", turkish: "Bu kadar çok çalıştığımız şirket yakında kapanacak.", spanish: "La empresa para la que trabajamos tanto cerrará pronto", words: ["La", "empresa", "para", "la", "que", "trabajamos", "tanto", "cerrará", "pronto"] },
        { type: "syntax", turkish: "Önceden hazırlanan belgeler kasadadır (caja fuerte).", spanish: "Los documentos que fueron preparados previamente están en la caja fuerte", words: ["Los", "documentos", "que", "fueron", "preparados", "previamente", "están", "en", "la", "caja", "fuerte"] },
        { type: "syntax", turkish: "Başkan, ki kendisi tatildeydi, acilen geri döndü.", spanish: "El presidente el cual estaba de vacaciones regresó de urgencia", words: ["El", "presidente", "el", "cual", "estaba", "de", "vacaciones", "regresó", "de", "urgencia"] },
        { type: "syntax", turkish: "Sözleşmesi bitmek üzere olan işçiler endişeli.", spanish: "Los obreros cuyo contrato va a terminar están preocupados", words: ["Los", "obreros", "cuyo", "contrato", "va", "a", "terminar", "están", "preocupados"] },
        { type: "syntax", turkish: "Bize gönderilen mektup tam bir gizem.", spanish: "La carta que nos fue enviada es un absoluto misterio", words: ["La", "carta", "que", "nos", "fue", "enviada", "es", "un", "absoluto", "misterio"] }
      ]
    },
    {
      id: "c2_u9_n3",
      type: "theory",
      title: "Teoría II: El Hipérbaton (La Arquitectura Yoda)",
      content: {
        concept: "El **Hipérbaton** es la alteración del orden lógico de las palabras (Sujeto + Verbo + Objeto). Se usa en literatura, refranes y lenguaje jurídico para dar solemnidad o enfatizar el objeto.\n\n### 1. Enfocar el Objeto (O-V-S)\n• Orden normal: *La fortuna favorece a los audaces.*\n• Hipérbaton: ***A los audaces, favorece la fortuna.*** (Destacamos a 'los audaces').\n\n### 2. Adelantar el Complemento\n• Orden normal: *Me di cuenta del error después de firmar.*\n• Hipérbaton: ***Después de firmar, del error me di cuenta.***\n\n💡 REGLA DE LECTURA: Si una oración empieza por una preposición ('En', 'Por', 'A', 'De') o un gerundio ('Habiendo dicho esto...'), significa que el orden está invertido. ¡Busca el sujeto al final de la frase!",
        examples: [
          { es: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo...", tr: "La Mancha'nın bir yerinde, adını hatırlamak istemediğim bir yerde, çok zaman önce bir asilzade yaşardı... (Don Quijote'nin başlangıcı, hipérbaton şaheseridir)." },
          { es: "Por las calles vacías caminaba, en silencio, el viejo relojero.", tr: "Boş sokaklarda sessizce yürüyordu yaşlı saatçi (Yaşlı saatçi boş sokaklarda yürüyordu)." }
        ]
      }
    },
    {
      id: "c2_u9_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Respiración y Pausas)",
      exercises: [
        { type: "speaking", spanish: "A los audaces favorece la fortuna", turkish: "Cesurlara yardım eder talih (Talih cesurlara yardım eder)." },
        { type: "speaking", spanish: "De profundas heridas estaba cubierto su orgullo", turkish: "Derin yaralarla kaplıydı gururu." },
        { type: "speaking", spanish: "Sin decir una sola palabra de la habitación salió", turkish: "Tek bir kelime söylemeden odadan çıktı." },
        { type: "speaking", spanish: "El contrato cuya validez era nula fue destruido", turkish: "Geçerliliği yok hükmünde olan sözleşme imha edildi." },
        { type: "speaking", spanish: "Por el bosque oscuro huían despavoridos los prisioneros", turkish: "Karanlık ormandan dehşet içinde kaçıyordu esirler." },
        { type: "speaking", spanish: "A pesar de la tormenta llegó el barco al puerto", turkish: "Fırtınaya rağmen limana vardı gemi." },
        { type: "speaking", spanish: "Enormes eran los desafíos pero más grande su voluntad", turkish: "Büyüktü zorluklar, ama daha da büyüktü iradesi." },
        { type: "speaking", spanish: "Quienes afirman eso obvian por completo la verdad", turkish: "Bunu iddia edenler gerçeği tamamen göz ardı ediyorlar." },
        { type: "speaking", spanish: "Bajo la tenue luz de la lámpara el anciano leía", turkish: "Lambanın cılız ışığı altında yaşlı adam okuyordu." },
        { type: "speaking", spanish: "A su propio destino nadie puede escapar", turkish: "Kendi kaderinden hiç kimse kaçamaz." }
      ]
    },
    {
      id: "c2_u9_n5",
      type: "theory",
      title: "El Reto Turco: Sağa vs Sola Dallanma",
      content: {
        concept: "El lingüista Noam Chomsky define a los idiomas por cómo 'crecen' (Branching).\n\n🇹🇷 **El Turco es Left-Branching (Sola Dallanan):**\nEn turco, toda la información de apoyo se empaqueta ANTES del sustantivo principal.\n*Ej: [Dün partide gördüğüm ve bana gülümseyen] kız...*\n\n🇪🇸 **El Español es Right-Branching (Sağa Dallanan):**\nEl español hace lo contrario. Tira el sustantivo primero, y luego añade vagones de información hacia la derecha usando el nexo 'que'.\n*Ej: La chica [que vi ayer en la fiesta y que me sonrió]...*\n\n### Tu Obstáculo C2:\nAl leer textos muy largos en español, tu mente turca intentará ir al final del párrafo para encontrar el verbo o la resolución y luego leer hacia atrás. ¡No lo hagas! En español, el misterio se resuelve al principio. **Déjate llevar por la lectura de izquierda a derecha, asimilando cada vagón a medida que aparece.**",
        examples: [
          { es: "El hombre que, pese a las advertencias, compró la casa que estaba maldita, huyó.", tr: "Uyarılara rağmen lanetli evi satın alan adam kaçtı. (Mira cómo en español 'El hombre' y 'huyó' están en los extremos)." }
        ]
      }
    },
    {
      id: "c2_u9_n6",
      type: "reading",
      title: "Lectura Crítica: Extracto de una Sentencia",
      content: {
        text: "En virtud de las pruebas presentadas durante el juicio, y considerando que el acusado, cuyo historial delictivo había sido borrado por un error administrativo, actuó con alevosía y premeditación, este tribunal falla a favor de la parte demandante. \n\nNo obstante las declaraciones de los testigos de la defensa, los cuales incurrieron en múltiples contradicciones a lo largo de los interrogatorios cruzados, queda fehacientemente demostrado que el contrato fue manipulado tras su firma. Por consiguiente, a los efectos legales pertinentes, se condena al acusado al pago íntegro de las costas del juicio, amén de una indemnización por daños y perjuicios morales.",
        translation: "Duruşma sırasında sunulan delillere istinaden (En virtud de) ve sabıka kaydı idari bir hatayla silinmiş olan (cuyo historial...) sanığın kasten ve tasarlayarak (con alevosía y premeditación) hareket ettiği göz önüne alındığında, bu mahkeme davacı tarafın lehine karar vermiştir (falla a favor).\n\nÇapraz sorgular boyunca (a lo largo de) sayısız çelişkiye düşen (incurrieron) savunma tanıklarının ifadelerine rağmen (No obstante), sözleşmenin imzalandıktan sonra manipüle edildiği inkar edilemez bir şekilde (fehacientemente) kanıtlanmış bulunmaktadır (queda demostrado). Dolayısıyla, ilgili yasal sonuçlar (a los efectos...) uyarınca, sanık mahkeme masraflarının (las costas) tamamını ödemeye ve bunun yanı sıra (amén de) manevi zararlar için bir tazminat ödemeye mahkum edilmiştir (se condena)."
      }
    },
    {
      id: "c2_u9_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Comprensión (Textos Densos)",
      exercises: [
        { type: "multiple_choice", question: "¿Qué significa 'Actuar con alevosía' en un contexto legal?", options: ["Actuar con miedo.", "Actuar con intención de hacer daño de forma segura, a traición.", "Actuar sin pensar."], correct: 1 },
        { type: "multiple_choice", question: "En la lectura, la frase 'Falla a favor' se refiere a:", options: ["Un error del juez.", "Dictar sentencia beneficiando a una de las partes.", "Una máquina que se rompe."], correct: 1 },
        { type: "multiple_choice", question: "¿Qué significa 'Incurrir en contradicciones'?", options: ["Caer o cometer contradicciones al hablar.", "Evitar contradecirse.", "Insultar al juez."], correct: 0 },
        { type: "syntax", turkish: "Savunma tanıklarının ifadelerine rağmen (No obstante las declaraciones...).", spanish: "No obstante las declaraciones de los testigos de la defensa", words: ["No", "obstante", "las", "declaraciones", "de", "los", "testigos", "de", "la", "defensa"] },
        { type: "syntax", turkish: "Sunulan delillere istinaden (En virtud de...).", spanish: "En virtud de las pruebas presentadas", words: ["En", "virtud", "de", "las", "pruebas", "presentadas", "presentan"] }
      ]
    },
    {
      id: "c2_u9_n8",
      type: "theory",
      title: "Teoría III: La Puntuación como Arma",
      content: {
        concept: "En los textos complejos, la puntuación es tu mapa. \n\n### 1. El Punto y Coma (;) \nUne dos ideas que son demasiado diferentes para ir separadas por una simple coma, pero que están tan relacionadas que un punto y seguido las desconectaría. Suele aparecer antes de conectores pesados: *...; sin embargo, ...* o *...; por ende, ...*.\n\n### 2. La Coma Asesina\nEn español, **NUNCA DEBES PONER UNA COMA ENTRE EL SUJETO Y EL VERBO**. \n• ❌ *El chico de la camisa roja, compró pan.*\n• ✅ *El chico de la camisa roja compró pan.*\nLa única excepción es si hay un inciso en el medio rodeado por dos comas: *El chico, (que llevaba una camisa roja), compró pan.*\n\n### 3. La Raya o Guion Largo (—)\nSe usa para insertar incisos largos (aclaraciones) que rompen la oración, similar al paréntesis, pero con un tono más literario.",
        examples: [
          { es: "Las condiciones eran duras; no obstante, el equipo no se rindió.", tr: "Şartlar çetindi; buna rağmen ekip pes etmedi." },
          { es: "El presidente —visiblemente agotado tras la cumbre— anunció su dimisión.", tr: "Başkan —zirveden sonra gözle görülür şekilde bitkin halde— istifasını açıkladı." }
        ]
      }
    },
    {
      id: "c2_u9_n9",
      type: "theory",
      title: "Sintaxis Visual: El Inciso Literario",
      content: {
        concept: "Observa cómo las comas y los guiones rompen la estructura principal para añadir capas de información, sin alterar el hilo conductor del sujeto (El investigador) y su acción (descubrió).",
        examples: [{ es: "El investigador principal, cuya paciencia era legendaria, descubrió —tras años de fracasos— que la cura estaba en el veneno.", tr: "Sabrı efsanevi olan baş araştırmacı —yıllarca süren başarısızlıklardan sonra— tedavinin zehrin ta kendisinde olduğunu keşfetti." }],
        analysis: [
          { word: "El investigador principal,", type: "noun", literal: "Baş araştırmacı,", explanation: "Sujeto de la oración principal. La coma abre el inciso.", examples: [] },
          { word: "cuya paciencia era legendaria,", type: "phrase", literal: "ki onun sabrı efsaneviydi,", explanation: "Oración subordinada adjetiva (Relativo de posesión). La segunda coma cierra el inciso y devuelve el protagonismo al sujeto.", examples: [] },
          { word: "descubrió", type: "verb", literal: "keşfetti", explanation: "Verbo principal de la oración (El investigador... descubrió).", examples: [] },
          { word: "—tras años de fracasos—", type: "phrase", literal: "—yıllarca süren başarısızlıklardan sonra—", explanation: "Inciso circunstancial de tiempo y modo, acotado por rayas para dar dramatismo literario.", examples: [] },
          { word: "que la cura", type: "noun", literal: "tedavinin", explanation: "Sujeto de la oración subordinada sustantiva.", examples: [] },
          { word: "estaba en el veneno.", type: "phrase", literal: "zehirde olduğunu.", explanation: "Conclusión y objeto del descubrimiento." }
        ]
      }
    },
    {
      id: "c2_u9_n10",
      type: "theory",
      title: "Caja de Herramientas: Conectores Estructurales",
      content: {
        concept: "Para redactar o entender textos de C2 (jurídicos, académicos), debes dominar estas locuciones preposicionales rígidas:\n\n• **En virtud de** (... uyarınca / -e istinaden) ➔ *En virtud del artículo 4...*\n• **Con arreglo a** (...-e uygun olarak) ➔ *Procedimos con arreglo a la ley.*\n• **A tenor de** (...-e bakılırsa / ışığında) ➔ *A tenor de los resultados, el plan falló.*\n• **Sin perjuicio de** (...-e halel getirmeksizin / hakkı saklı kalmak kaydıyla) ➔ *Pagaré la multa, sin perjuicio de apelar.*\n• **A los efectos de** (Amacıyla / Kapsamında)\n• **Fallar a favor/en contra** (Lehine/Aleyhine hüküm vermek - exclusivo de tribunales).",
        examples: [
          { es: "Se firmó el acuerdo con arreglo a la normativa europea.", tr: "Anlaşma Avrupa mevzuatına uygun olarak imzalandı." },
          { es: "A tenor de las declaraciones, nadie dice la verdad.", tr: "İfadelere bakılırsa (ışığında), kimse doğruyu söylemiyor." },
          { es: "Aceptó la propuesta, sin perjuicio de sus propios proyectos.", tr: "Kendi projelerine halel getirmeksizin teklifi kabul etti." }
        ]
      }
    },
    {
      id: "c2_u9_n11",
      type: "theory",
      title: "Taller de Producción: El Edicto Formal",
      content: {
        concept: "Ponte la toga de jueza o redactora oficial. Vas a escribir un documento con estructura C2.\n\n**Instrucciones:**\nRedacta un breve comunicado oficial (10-12 líneas) de una empresa o tribunal donde anuncias una decisión importante (ej: la destitución de un directivo o el cierre de una fábrica).\n\n1. Usa el orden inverso (Hipérbaton) al menos una vez (Ej: *A los empleados afectados, se les otorgará...*).\n2. Usa al menos un inciso entre guiones largos (—...—).\n3. Incluye al menos dos conectores estructurales (En virtud de, Con arreglo a, A tenor de, Sin perjuicio de).\n4. Asegúrate de usar la puntuación impecable (Punto y coma antes de 'no obstante').\n\n**Inspiración:** 'En virtud de las recientes pérdidas, la compañía —tras un arduo debate— ha decidido...'",
        examples: []
      }
    },
    {
      id: "c2_u9_n12",
      type: "exam",
      title: "Examen de Unidad: Sintaxis Visual y Formal",
      content: {
        concept: "Demuestra tu comprensión profunda de la estructura, los conectores legales y la deconstrucción de la frase infinita.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué es un 'Hipérbaton'?", options: ["Un error ortográfico.", "La alteración del orden lógico de las palabras (Ej: A su casa fue él).", "Una figura de exageración."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué conector jurídico significa '...-e halel getirmeksizin / saklı kalmak kaydıyla'?", options: ["En virtud de", "A tenor de", "Sin perjuicio de"], correct: 2 },
          { type: "multiple_choice", question: "Elige la correcta puntuación:", options: ["El presidente, anunció nuevas medidas.", "El presidente anunció nuevas medidas.", "El presidente, anunció, nuevas medidas."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué conector se usa a menudo después de un punto y coma (;)?", options: ["Y", "Sin embargo / No obstante", "Porque"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Con arreglo a la ley'?", options: ["Arreglando la ley.", "Yasaya uygun olarak.", "Yasaya karşı."], correct: 1 },
          { type: "multiple_choice", question: "Si digo 'A tenor de lo visto...', quiero decir:", options: ["Görülenlerin ışığında / Görünen o ki...", "Görmek için...", "Görmezden gelerek..."], correct: 0 },
          { type: "multiple_choice", question: "¿Qué diferencia al español del turco en la construcción de frases largas?", options: ["El turco ramifica hacia la derecha, el español hacia la izquierda.", "El turco ramifica hacia la izquierda (left-branching), el español hacia la derecha (right-branching).", "No hay diferencia."], correct: 1 },
          { type: "multiple_choice", question: "En un juicio, 'El tribunal falla a favor' significa:", options: ["Mahkeme hata yaptı.", "Mahkeme lehte karar verdi / hükmetti.", "Mahkeme ertelendi."], correct: 1 },
          { type: "multiple_choice", question: "Los incisos en una frase literaria suelen acotarse con:", options: ["Puntos finales.", "Comillas simples.", "Rayas o guiones largos (—)."], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa 'En virtud de...'?", options: ["... uyarınca / -e istinaden.", "Sanal olarak.", "Erdemli bir şekilde."], correct: 0 },
          
          { type: "syntax", turkish: "Bu kurallara (estas normas) uygun olarak (Con arreglo a) ilerleyeceğiz (procederemos).", spanish: "Procederemos con arreglo a estas normas", words: ["Procederemos", "con", "arreglo", "a", "estas", "normas", "virtud"] },
          { type: "syntax", turkish: "Duruma bakılırsa (A tenor de la situación) başarısız olacağız.", spanish: "A tenor de la situación fracasaremos", words: ["A", "tenor", "de", "la", "situación", "fracasaremos", "sin"] },
          { type: "syntax", turkish: "Haklarım saklı kalmak kaydıyla (Sin perjuicio de) imzalıyorum.", spanish: "Firmo sin perjuicio de mis derechos", words: ["Firmo", "sin", "perjuicio", "de", "mis", "derechos", "virtud"] },
          { type: "syntax", turkish: "Sonuçlara istinaden (En virtud de) onu kovdular.", spanish: "Lo despidieron en virtud de los resultados", words: ["Lo", "despidieron", "en", "virtud", "de", "los", "resultados", "arreglo"] },
          { type: "syntax", turkish: "Gelecekteki eylemler (futuras acciones) amacıyla (A los efectos de)...", spanish: "A los efectos de futuras acciones", words: ["A", "los", "efectos", "de", "futuras", "acciones", "virtudes"] },
          { type: "syntax", turkish: "Cesurlara (A los audaces) yardım eder (favorece) talih (la fortuna) (Hipérbaton).", spanish: "A los audaces favorece la fortuna", words: ["A", "los", "audaces", "favorece", "la", "fortuna", "favorecen"] },
          { type: "syntax", turkish: "Sessizlik (En silencio) içinde adam (el hombre) yürüdü (caminó) (Hipérbaton).", spanish: "En silencio caminó el hombre", words: ["En", "silencio", "caminó", "el", "hombre", "caminaba"] },
          { type: "syntax", turkish: "Mahkeme kararı (El fallo) emsal (jurisprudencia) teşkil edecektir (sentar).", spanish: "El fallo sentará jurisprudencia", words: ["El", "fallo", "sentará", "jurisprudencia", "sienta"] },
          { type: "syntax", turkish: "Önceden tasarlayarak (Con premeditación) hareket etti (actuó).", spanish: "Actuó con alevosía y premeditación", words: ["Actuó", "con", "alevosía", "y", "premeditación", "sin"] },
          { type: "syntax", turkish: "Buna rağmen (No obstante) karar bağlayıcıdır (vinculante).", spanish: "No obstante la decisión es vinculante", words: ["No", "obstante", "la", "decisión", "es", "vinculante", "sea"] }
        ]
      }
    }
  ]
};
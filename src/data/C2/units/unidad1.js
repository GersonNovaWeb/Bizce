/**
 * UNIDAD 1 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: El Futuro de Subjuntivo (Gramática Histórica y Jurídica)
 * Tema: Leyes, refranes arcaicos y alta formalidad.
 */

export const unidad1 = {
  id: "c2_u1",
  title: "Unidad 1: El Fantasma del Futuro",
  description: "Explora las raíces del idioma. Domina el Futuro de Subjuntivo, el tiempo verbal de las leyes y la sabiduría antigua.",
  nodes: [
    {
      id: "c2_u1_n1",
      type: "theory",
      title: "Teoría I: Arqueología del Futuro de Subjuntivo",
      content: {
        concept: "En el nivel C2, estudiamos estructuras que la mayoría de los nativos comprenden pero pocos saben usar con precisión. El **Futuro de Subjuntivo** es un tiempo verbal que ha sido desplazado en el habla común por el Presente de Subjuntivo o el Pasado, pero sigue vivo y es **obligatorio** en el lenguaje jurídico, administrativo y en el refranero.\n\n### 1. Formación Sencilla\nSe forma exactamente igual que el Pretérito Imperfecto de Subjuntivo (cantara), pero sustituyendo la **'A'** final por una **'E'**.\n• **Cantar** ➔ Cantare, cantares, cantare, cantáremos, cantaren.\n• **Hacer** ➔ Hiciere, hicieres, hiciere, hiciéremos, hicieren.\n• **Ser/Ir** ➔ Fuere, fueres, fuere, fuéremos, fueren.\n\n### 2. Significado\nExpresa una acción hipotética en el futuro. Hoy en día lo traducimos mentalmente como 'si ocurre que...' o 'en caso de que...'.\n\n### 3. ¿Dónde vive este 'fantasma'?\n• **Leyes:** 'Quien **infringiere** la ley...' (Her kim yasayı çiğnerse...).\n• **Contratos:** 'Si una de las partes **incumpliere**...' (Taraflardan biri ihlal ederse...).\n• **Refranes:** 'Adonde **fueres**, haz lo que **vieres**'.",
        examples: [
          { es: "Sea lo que fuere, no nos rendiremos.", tr: "Her ne olursa olsun, pes etmeyeceğiz." },
          { es: "Si hubiere lugar a reclamación, se hará por escrito.", tr: "Şikayet hakkı doğarsa (varsa), yazılı olarak yapılacaktır." },
          { es: "Quien hiciere mal, espere otro tanto.", tr: "Kötülük yapan, aynısını beklesin." }
        ]
      }
    },
    {
      id: "c2_u1_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis Extrema",
      exercises: [
        { type: "syntax", turkish: "Her ne olursa olsun (fuere), gidelim.", spanish: "Sea lo que fuere vayamos", words: ["Sea", "lo", "que", "fuere", "vayamos", "fuera"] },
        { type: "syntax", turkish: "Bu kuralı ihlal eden kişi (quien infringiere)...", spanish: "Quien infringiere esta norma", words: ["Quien", "infringiere", "esta", "norma", "infringe"] },
        { type: "syntax", turkish: "Hasar (daños) olması durumunda (si hubiere)...", spanish: "Si hubiere daños el seguro pagará", words: ["Si", "hubiere", "daños", "el", "seguro", "pagará", "haya"] },
        { type: "syntax", turkish: "Nereye gidersen (fueres), oranın kuralına uy (vieres).", spanish: "Adonde fueres haz lo que vieres", words: ["Adonde", "fueres", "haz", "lo", "que", "vieres", "vayas"] },
        { type: "syntax", turkish: "Eğer bir hata yapılırsa (si se cometiere)...", spanish: "Si se cometiere un error será corregido", words: ["Si", "se", "cometiere", "un", "error", "será", "corregido", "cometa"] },
        { type: "syntax", turkish: "Her kim çalarsa (robare) cezalandırılacaktır.", spanish: "Quien robare será castigado", words: ["Quien", "robare", "será", "castigado", "roba"] },
        { type: "syntax", turkish: "Bir şüphe olması durumunda (si hubiere)...", spanish: "Si hubiere duda consulte al médico", words: ["Si", "hubiere", "duda", "consulte", "al", "médico", "haya"] },
        { type: "syntax", turkish: "Sözleşmeyi ihlal ederlerse (incumplieren)...", spanish: "Si incumplieren el contrato pagarán", words: ["Si", "incumplieren", "el", "contrato", "pagarán"] },
        { type: "syntax", turkish: "Eğer mümkün olursa (si fuere posible)...", spanish: "Si fuere posible envíelo hoy", words: ["Si", "fuere", "posible", "envíelo", "hoy", "fuera"] },
        { type: "syntax", turkish: "Bir değişiklik (alteración) olması durumunda...", spanish: "En caso de que hubiere una alteración", words: ["En", "caso", "de", "que", "hubiere", "una", "alteración"] }
      ]
    },
    {
      id: "c2_u1_n3",
      type: "theory",
      title: "Teoría II: Pragmática Jurídica",
      content: {
        concept: "El uso del futuro de subjuntivo en el derecho no es un capricho; aporta **solemnidad y precisión**. En un documento legal, diferencia un hecho de una posibilidad técnica.\n\n### La Concordancia del 'Si'\nEn el lenguaje estándar (B1/B2) usamos 'Si + Presente' (Si vienes). En el lenguaje jurídico C2, el 'Si' atrae al futuro de subjuntivo para indicar que la condición es una **proyección legal**.\n\n• **Lenguaje normal:** Si hay problemas, llámame.\n• **Lenguaje jurídico:** Si **hubiere** controversias, las partes acudirán a los tribunales.\n\n### El 'HUBIERE' Pasivo\nEs muy común encontrarlo en formas compuestas: *Si hubiere sido notificado...* (Eğer bildirilmiş olursa...).\n\n⚠️ **Dato Filológico:** Este tiempo nació en el latín y, aunque en otros idiomas romances como el francés o italiano desapareció, el español lo conserva como una joya de su arquitectura legal.",
        examples: [
          { es: "Los que fueren hallados culpables serán sancionados.", tr: "Suçlu bulunanlar (her kim bulunursa) cezalandırılacaktır." },
          { es: "Si el inmueble sufriere desperfectos, el arrendatario responderá.", tr: "Mülk hasar görürse, kiracı sorumlu olacaktır." }
        ]
      }
    },
    {
      id: "c2_u1_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (La Toga Virtual)",
      exercises: [
        { type: "speaking", spanish: "Quien infringiere la ley será procesado", turkish: "Yasayı her kim ihlal ederse yargılanacaktır." },
        { type: "speaking", spanish: "Si hubiere lugar a dudas pregunte", turkish: "Şüpheye yer olması durumunda sorunuz." },
        { type: "speaking", spanish: "Sea lo que fuere no cedas", turkish: "Her ne olursa olsun taviz verme." },
        { type: "speaking", spanish: "Adonde fueres haz lo que vieres", turkish: "Nereye gidersen oranın gördüğünü yap." },
        { type: "speaking", spanish: "Si el contrato se rescindiere hoy", turkish: "Eğer sözleşme bugün feshedilirse (feshedilmiş olursa)." },
        { type: "speaking", spanish: "Quien hiciere el bien recibirá el bien", turkish: "İyilik yapan iyilik bulur (her kim yaparsa)." },
        { type: "speaking", spanish: "Si se encontrare el tesoro será del Estado", turkish: "Eğer hazine bulunursa devlete ait olacaktır." },
        { type: "speaking", spanish: "Cualquier persona que lo viere", turkish: "Onu görecek olan herhangi bir kişi." }
      ]
    },
    {
      id: "c2_u1_n5",
      type: "theory",
      title: "El Reto Turco: La Lógica de la Condición Antigua",
      content: {
        concept: "En turco, el sistema de sufijos condicionales es muy potente y flexible. Sin embargo, no existe una distinción gramatical tan marcada entre 'condición de bar' y 'condición de tribunal'.\n\n### El Choque de Estructuras:\n• 🇹🇷 **Turco:** Usas el condicional estándar *-se / -sa*. \n• 🇪🇸 **Español C2:** Tienes que elegir. Si el texto es una instrucción oficial o un proverbio milenario, el presente de subjuntivo (*vaya*) suena débil. El futuro de subjuntivo (*fuere*) le da la fuerza de la 'Ley Inmutable'.\n\n**¿Cómo pensar en C2?**\nSi la frase suena a algo que escribiría un rey o un juez, usa la terminación **-RE**.\n• *Si hubiere...* (Eğer bulunursa/olursa).\n• *Si hiciere...* (Eğer yaparsa).\n\n⚠️ **CUIDADO:** No lo uses con tus amigos, pensarán que estás recitando la Biblia o un código civil del siglo XVIII.",
        examples: [
          { es: "Si viniere el cartero, recoge el paquete.", tr: "Postacı gelirse (legal/formal emir), paketi al." },
          { es: "Haya lo que haya. (C1)", tr: "Ne varsa olsun." },
          { es: "Hubiere lo que hubiere. (C2 - Arcaico/Legal)", tr: "Her ne bulunursa bulunsun." }
        ]
      }
    },
    {
      id: "c2_u1_n6",
      type: "reading",
      title: "Lectura Crítica: Fragmento del Código Civil",
      content: {
        text: "CONTRATO DE ARRENDAMIENTO – CLÁUSULA DÉCIMA\n\n«Si durante la vigencia del presente contrato el inmueble **sufriere** daños por causa de fuerza mayor, el ARRENDATARIO quedará eximido de responsabilidad siempre y cuando **notificare** el suceso en un plazo de 24 horas. \n\nEn el supuesto de que **hubiere** discrepancias en la valoración de los daños, se nombrará un perito independiente. El dictamen que este **emitiere** será vinculante para ambas partes. Quien **infringiere** este acuerdo o **revelare** información confidencial del proceso, incurrirá en una penalización económica inmediata. Sea lo que **fuere**, prevalecerá la buena fe entre los firmantes».",
        translation: "KİRA SÖZLEŞMESİ – ONUNCU MADDE\n\n«Bu sözleşmenin geçerliliği süresince mülk mücbir sebeple hasar görürse (sufriere), KİRACI vakayı 24 saat içinde bildirmesi (notificare) şartıyla sorumluluktan muaf tutulacaktır.\n\nHasar tespitinde anlaşmazlık olması (hubiere) durumunda, bağımsız bir bilirkişi atanacaktır. Bilirkişinin vereceği (emitiere) karar her iki taraf için de bağlayıcı olacaktır. Bu anlaşmayı ihlal eden (infringiere) veya sürecin gizli bilgilerini ifşa eden (revelare) kişi derhal ekonomik cezaya çarptırılacaktır. Her ne olursa olsun (Sea lo que fuere), imzacılar arasında dürüstlük (iyi niyet) hakim olacaktır.»"
      }
    },
    {
      id: "c2_u1_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Comprensión Inferencial",
      exercises: [
        { type: "multiple_choice", question: "¿Qué implica el uso de 'sufriere' en el texto anterior?", options: ["Que el mülk ya sufrió daños.", "Que es una posibilidad futura contemplada por la ley.", "Que el dueño quiere que sufra daños."], correct: 1 },
        { type: "multiple_choice", question: "Si un juez dice 'Quien robare...', ¿a quién se refiere?", options: ["A un ladrón que ya está en la cárcel.", "A cualquier persona que cometa el acto de robar en el futuro.", "Al juez mismo."], correct: 1 },
        { type: "multiple_choice", question: "¿Cuál es el equivalente moderno de 'Si hubiere lugar'?", options: ["Si hay lugar.", "Si hubo lugar.", "Si hubiera habido lugar."], correct: 0 },
        { type: "syntax", turkish: "Her kim (quien) bir suç işlerse (cometiere) cezalandırılacaktır.", spanish: "Quien cometiere un delito será castigado", words: ["Quien", "cometiere", "un", "delito", "será", "castigado", "comete"] },
        { type: "syntax", turkish: "İhlal etmeleri (incumplieren) durumunda ödeyecekler.", spanish: "Si incumplieren el acuerdo pagarán", words: ["Si", "incumplieren", "el", "acuerdo", "pagarán", "incumplen"] }
      ]
    },
    {
      id: "c2_u1_n8",
      type: "theory",
      title: "Teoría III: Etimología y Refranero Arcaico",
      content: {
        concept: "Muchos refranes que ella escuchará en España usan el futuro de subjuntivo porque se crearon hace cientos de años y se han mantenido intactos.\n\n### 1. 'Adonde fueres, haz lo que vieres'\n• **Etimología:** Viene de la época en que viajar era peligroso y debías imitar las costumbres locales para sobrevivir.\n• **Análisis C2:** *Fueres* (si fueras/vas) + *Vieres* (lo que veas).\n\n### 2. 'Sea como fuere'\n• **Significado:** Se usa para cerrar una discusión o aceptar una realidad, independientemente de cómo haya ocurrido.\n• **Equivalente:** *Pase lo que pase* o *Sea como sea*.\n\n### 3. 'Venga lo que viniere'\n• **Significado:** Expresa determinación total ante el futuro.\n\n💡 **Dato Curioso:** En portugués, este tiempo verbal es de uso diario y común. En español, lo guardamos bajo llave para las grandes ocasiones.",
        examples: [
          { es: "Sea como fuere, la verdad saldrá a la luz.", tr: "Her ne şekilde olursa olsun, gerçek gün yüzüne çıkacak." },
          { es: "Adonde fueres, haz lo que vieres.", tr: "Roma'da Romalı gibi davran (Nereye gidersen oranın gördüğünü yap)." }
        ]
      }
    },
    {
      id: "c2_u1_n9",
      type: "theory",
      title: "Sintaxis Visual: La Frase de la Corona",
      content: {
        concept: "Analizaremos un párrafo de alta densidad que podría aparecer en un texto de Cervantes o en una ley del siglo XIX.",
        examples: [{ es: "Si el hombre hiciere el mal a sabiendas de que fuere contra su honor, sufriere el desprecio de su pueblo.", tr: "Eğer insan, onuruna aykırı olacağını (fuere) bile bile kötülük yaparsa (hiciere), halkının hor görmesine (sufriere) maruz kalacaktır." }],
        analysis: [
          { word: "Si el hombre", type: "noun", literal: "Eğer insan", explanation: "Sujeto universal.", examples: [] },
          { word: "hiciere", type: "verb", literal: "yaparsa", explanation: "Futuro de Subjuntivo de HACER. Indica una hipótesis futura grave.", examples: [] },
          { word: "a sabiendas de que", type: "connector", literal: "bile bile", explanation: "Locución de nivel C1 que indica pleno conocimiento.", examples: [] },
          { word: "fuere contra", type: "verb", literal: "aykırı olursa", explanation: "Futuro de Subjuntivo de SER. Establece la naturaleza del acto.", examples: [] },
          { word: "su honor,", type: "noun", literal: "onuru", explanation: "Concepto central del Siglo de Oro.", examples: [] },
          { word: "sufriere", type: "verb", literal: "maruz kalırsa", explanation: "Consecuencia expresada también en futuro de subjuntivo (uso arcaico de simetría).", examples: [] },
          { word: "el desprecio", type: "noun", literal: "hor görme", explanation: "Objeto de la consecuencia.", examples: [] }
        ]
      }
    },
    {
      id: "c2_u1_n10",
      type: "theory",
      title: "Caja de Herramientas: Léxico Judicial",
      content: {
        concept: "Estas palabras son el 'Kit del Abogado' bilingüe. Úsalas para redactar documentos oficiales.\n\n• **Infringir** (İhlal etmek / Çiğnemek)\n• **Incurrir en** (Bir duruma düşmek / Maruz kalmak - genelde ceza para)\n• **Penalización / Sanción** (Ceza / Müeyyide)\n• **Vigencia / Estar vigente** (Yürürlük / Yürürlükte olmak)\n• **Notificar** (Bildirmek / Tebliğ etmek)\n• **Rescindir / Anular** (Feshetmek / İptal etmek)\n• **Vinculante** (Bağlayıcı)\n• **Buena fe** (İyi niyet)\n• **Discrepancia** (Uyuşmazlık / Ayrılık)",
        examples: [
          { es: "La cláusula es vinculante para ambas partes.", tr: "Madde her iki taraf için de bağlayıcıdır." },
          { es: "El contrato ya no está en vigencia.", tr: "Sözleşme artık yürürlükte değil." },
          { es: "Si incurre en una falta, será sancionado.", tr: "Bir kusur işlerse (durumuna düşerse), cezalandırılacaktır." }
        ]
      }
    },
    {
      id: "c2_u1_n11",
      type: "theory",
      title: "Taller de Producción: Redactando la Ley",
      content: {
        concept: "Has sido nombrada 'Juez Supremo de Bizce Learning'.\n\n**Instrucciones:**\nEscribe un pequeño 'Código de Conducta' para la plataforma (8-10 líneas) usando el tono más formal posible.\n\n1. Usa al menos 3 verbos en Futuro de Subjuntivo (fuere, hubiere, hiciere, leyere, escribiere).\n2. Usa los conectores de C1 (Huelga decir, a sabiendas de que).\n3. Incluye vocabulario judicial (vinculante, infringir, buena fe).\n\n**Inspiración:** 'Quien utilizare esta plataforma para fines no educativos, será expulsado. Si hubiere discrepancias entre estudiantes...'",
        examples: []
      }
    },
    {
      id: "c2_u1_n12",
      type: "exam",
      title: "Examen de Unidad: El Fantasma del Futuro",
      content: {
        concept: "Demuestra tu dominio sobre este tiempo fósil pero poderoso. No se permite ni un error de tilde.",
        exercises: [
          { type: "multiple_choice", question: "¿Cómo se forma el Futuro de Subjuntivo de CANTAR?", options: ["Cantara", "Cantare", "Cantaré"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa el refrán 'Adonde fueres, haz lo que vieres'?", options: ["Si vas a un lugar, quédate allí.", "Debes imitar las costumbres del lugar donde estés.", "Mira bien antes de ir."], correct: 1 },
          { type: "multiple_choice", question: "En un contrato, 'Si hubiere lugar a duda' significa:", options: ["Duda olması durumunda.", "Duda vardı.", "Duda olsaydı."], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la forma correcta de 'Hacer' para 'Nosotros'?", options: ["Hiciéremos", "Hicieremos", "Hiciéramos"], correct: 0 },
          { type: "multiple_choice", question: "El futuro de subjuntivo del verbo SER es:", options: ["Sea", "Fuera", "Fuere"], correct: 2 },
          { type: "multiple_choice", question: "¿Dónde es OBLIGATORIO este tiempo hoy en día?", options: ["En las noticias.", "En textos legales y administrativos.", "En la discoteca."], correct: 1 },
          { type: "multiple_choice", question: "Completa: 'Sea lo que ______ (ser - futuro subj.), iré contigo'.", options: ["fuera", "fuere", "sea"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien 'infringe' un contrato, él:", options: ["Lo cumple.", "Lo rompe / ihlal eder.", "Lo escribe."], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Bağlayıcı' en español legal?", options: ["Vinculante", "Obligante", "Amarrado"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál NO lleva tilde?", options: ["Cantáremos", "Cantare", "Hiciéremos"], correct: 1 },
          { type: "syntax", turkish: "Her kim çalarsa (robare) hapse gidecektir.", spanish: "Quien robare irá a prisión", words: ["Quien", "robare", "irá", "a", "prisión", "roba"] },
          { type: "syntax", turkish: "Nasıl olursa olsun (sea como fuere) yapacağız.", spanish: "Lo haremos sea como fuere", words: ["Lo", "haremos", "sea", "como", "fuere", "fuera"] },
          { type: "syntax", turkish: "Eğer bir hata yapılırsa (cometiere) sorumlu (responsable) o olacaktır.", spanish: "Si se cometiere un error él será el responsable", words: ["Si", "se", "cometiere", "un", "error", "él", "será", "el", "responsable"] },
          { type: "syntax", turkish: "Her kim (quien) bunu okursa (leyere) anlayacaktır.", spanish: "Quien lo leyere lo entenderá", words: ["Quien", "lo", "leyere", "lo", "entenderá", "lee"] },
          { type: "syntax", turkish: "Uyuşmazlıklar (discrepancias) olması durumunda (si hubiere)...", spanish: "Si hubiere discrepancias llamaremos a un experto", words: ["Si", "hubiere", "discrepancias", "llamaremos", "a", "un", "experto"] },
          { type: "syntax", turkish: "Sözleşme yürürlüktedir (está en vigencia).", spanish: "El contrato está en vigencia", words: ["El", "contrato", "está", "en", "vigencia"] },
          { type: "syntax", turkish: "Bu madde (cláusula) bağlayıcıdır (vinculante).", spanish: "Esta cláusula es vinculante", words: ["Esta", "cláusula", "es", "vinculante"] },
          { type: "syntax", turkish: "İyi niyetle (Buena fe) hareket ettik.", spanish: "Actuamos de buena fe", words: ["Actuamos", "de", "buena", "fe"] },
          { type: "syntax", turkish: "Her ne şekilde olursa olsun (Fuere).", spanish: "Sea como fuere", words: ["Sea", "como", "fuere", "sea"] },
          { type: "syntax", turkish: "Daha önce bildirilmiş olursa (hubiere sido notificado).", spanish: "Si ya hubiere sido notificado", words: ["Si", "ya", "hubiere", "sido", "notificado"] }
        ]
      }
    }
  ]
};
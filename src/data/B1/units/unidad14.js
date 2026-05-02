/**
 * UNIDAD 14: REGISTRO FORMAL VS COLOQUIAL - NIVEL B1
 * Enfoque: Diferencias léxicas y gramaticales según el contexto (Trabajo vs Calle).
 * Estructura: 12 Nodos Premium.
 */

export const unidad14 = {
  id: "b1_u14",
  title: "Unidad 14: Registro Formal vs Coloquial",
  description: "Aprende a adaptar tu español. Descubre cómo sonar profesional en el trabajo y natural con tus amigos.",
  nodes: [
    {
      id: "b1_u14_n1",
      type: "theory",
      title: "Teoría I: Los dos rostros del idioma",
      content: {
        concept: "En español, el contexto lo cambia todo. Un error común de los estudiantes es hablar con un jefe como si fuera un amigo, o sonar demasiado robótico en una fiesta.\n\n### 1. El Registro Formal (Usted)\nSe usa en: Oficinas, bancos, con personas mayores o en documentos escritos.\n• **Características:** Uso de 'Usted', verbos precisos, ausencia de jerga.\n• **Ejemplo:** '¿Podría indicarme dónde se encuentra el despacho?'\n\n### 2. El Registro Coloquial (Tú)\nSe usa en: Con amigos, pareja, familia o gente joven.\n• **Características:** Uso de 'Tú', acortamiento de palabras, uso de muletillas (pues, entonces, o sea).\n• **Ejemplo:** 'Oye, ¿sabes dónde está la oficina?'\n\n🇹🇷 LÓGICA TURCA: Equivale a la distinción entre el lenguaje de la calle y el lenguaje de los negocios o académico.",
        examples: [
          { es: "Le agradezco su ayuda. (Formal)", tr: "Yardımınız için size teşekkür ederim." },
          { es: "¡Gracias por echarme un cable! (Coloquial)", tr: "Yardım ettiğin için eyvallah / teşekkürler!" },
          { es: "Disculpe, ¿me permite pasar? (Formal)", tr: "Affedersiniz, geçmeme izin verir misiniz?" }
        ]
      }
    },
    {
      id: "b1_u14_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Transformación)",
      exercises: [
        { type: "syntax", turkish: "Yardımınız için teşekkür ederim (Formal).", spanish: "Le agradezco su ayuda", words: ["Le", "agradezco", "su", "ayuda", "te", "tu"] },
        { type: "syntax", turkish: "Yardım ettiğin için teşekkürler (Informal).", spanish: "Te agradezco tu ayuda", words: ["Te", "agradezco", "tu", "ayuda", "le", "su"] },
        { type: "syntax", turkish: "Lütfen bana söyleyebilir miydiniz? (Formal).", spanish: "Podría usted decírmelo por favor", words: ["Podría", "usted", "decírmelo", "por", "favor", "puedes"] },
        { type: "syntax", turkish: "Bunu bana söyler misin? (Informal).", spanish: "Me lo dices por favor", words: ["Me", "lo", "dices", "por", "favor", "diga"] },
        { type: "syntax", turkish: "Sizinle tanışmak bir onurdu (Formal).", spanish: "Fue un honor conocerle", words: ["Fue", "un", "honor", "conocerle", "conocerte"] },
        { type: "syntax", turkish: "Seninle tanıştığıma memnun oldum (Informal).", spanish: "Fue un gusto conocerte", words: ["Fue", "un", "gusto", "conocerte", "conocerle"] },
        { type: "syntax", turkish: "Müdürle konuşmak isterdim (Formal).", spanish: "Querría hablar con el director", words: ["Querría", "hablar", "con", "el", "director", "quiero"] },
        { type: "syntax", turkish: "Patronla konuşmak istiyorum (Informal).", spanish: "Quiero hablar con el jefe", words: ["Quiero", "hablar", "con", "el", "jefe", "querría"] },
        { type: "syntax", turkish: "Lütfen oturunuz (Formal).", spanish: "Siéntese usted por favor", words: ["Siéntese", "usted", "por", "favor", "siéntate"] },
        { type: "syntax", turkish: "Otur (Informal).", spanish: "Siéntate por favor", words: ["Siéntate", "por", "favor", "siéntese"] }
      ]
    },
    {
      id: "b1_u14_n3",
      type: "theory",
      title: "Teoría II: Saludos y Despedidas de Etiqueta",
      content: {
        concept: "La forma en que abres y cierras una conversación define tu registro inmediatamente.\n\n### En el Trabajo (Formal):\n• **Inicio:** 'Estimado/a Sr./Sra. [Apellido]', 'Buenos días, ¿cómo se encuentra?'.\n• **Cierre:** 'Atentamente', 'Le saluda cordialmente', 'Quedo a su disposición'.\n\n### Con Amigos (Coloquial):\n• **Inicio:** '¡Buenas!', '¿Qué pasa?', '¿Cómo va todo?', '¡Ey!'.\n• **Cierre:** 'Un beso', 'Cuídate', 'Nos vemos', 'Venga, hasta luego'.\n\n💡 TRUCO: En España es muy común decir 'Venga' para cerrar una conversación informal, aunque no signifique 'come'.",
        examples: [
          { es: "Quedo a su entera disposición. (Formal)", tr: "Hizmetinizdeyim / Bilginize sunarım." },
          { es: "¡Venga, nos vemos luego! (Informal)", tr: "Hadi, sonra görüşürüz!" },
          { es: "Estimado cliente, reciba un cordial saludo.", tr: "Sayın müşterimiz, içten selamlarımızı sunarız." }
        ]
      }
    },
    {
      id: "b1_u14_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Contextos)",
      exercises: [
        { type: "speaking", spanish: "Buenos días cómo se encuentra usted", turkish: "Günaydın, nasılsınız? (Resmi)" },
        { type: "speaking", spanish: "Ey qué pasa cómo va todo", turkish: "Selam, ne haber, nasıl gidiyor? (Samimi)" },
        { type: "speaking", spanish: "Le saluda cordialmente Carlos García", turkish: "Carlos García sizi içtenlikle selamlar." },
        { type: "speaking", spanish: "Venga un beso cuídate mucho", turkish: "Hadi, öptüm, kendine çok iyi bak." },
        { type: "speaking", spanish: "Podría indicarme dónde está el baño", turkish: "Tuvaletin nerede olduğunu gösterebilir miydiniz?" },
        { type: "speaking", spanish: "Oye sabes dónde está el baño", turkish: "Baksana tuvalet nerede biliyor musun?" },
        { type: "speaking", spanish: "Quedo a su disposición para cualquier duda", turkish: "Her türlü sorunuz için hizmetinizdeyim." },
        { type: "speaking", spanish: "Si necesitas algo dímelo vale", turkish: "Bir şeye ihtiyacın olursa bana söyle, tamam mı?" },
        { type: "speaking", spanish: "Disculpe me permite un momento", turkish: "Afedersiniz, bir dakikanızı alabilir miyim?" },
        { type: "speaking", spanish: "Espera un segundo ahora vuelvo", turkish: "Bir saniye bekle, şimdi dönerim." }
      ]
    },
    {
      id: "b1_u14_n5",
      type: "theory",
      title: "Teoría III: El Reto Turco (Tú/Ustedes y el Respeto)",
      content: {
        concept: "En turco, el respeto se marca mucho con el sufijo plural '-siniz' (Siz). \n\nEn español, el respeto no es solo una terminación, es una elección de verbos.\n\n### Diferencias clave:\n1. **Ustedes vs Vosotros:** En España, 'Vosotros' es informal. Si hablas con un grupo de jefes, DEBES usar 'Ustedes'.\n2. **Verbos de Poder:** En registro formal usamos mucho el Condicional (*Podría, Querría*). En informal usamos el Presente (*Puedes, Quiero*).\n3. **La 'a' personal:** Siempre es obligatoria con personas, pero en formal se enfatiza más el título: *'He visto AL señor director'* vs *'He visto A Carlos'*.",
        examples: [
          { es: "¿Ustedes desean tomar algo? (Formal)", tr: "Bir şey içmek ister misiniz? (Sizler)" },
          { es: "¿Queréis beber algo? (Informal - España)", tr: "Bir şey içmek ister misiniz? (Arkadaşlar)" },
          { es: "Le ruego que me perdone. (Formal extremo)", tr: "Beni affetmeniz için size yalvarırım." }
        ]
      }
    },
    {
      id: "b1_u14_n6",
      type: "reading",
      title: "Lectura y Audio: El Correo vs El Chat",
      content: {
        text: "Comparativa de dos mensajes enviados por Ayşe.\n\n📧 **Mensaje A (Correo al Jefe):**\n«Estimado Sr. Rodríguez: Le escribo para informarle de que hoy no podré asistir a la oficina. Me encuentro indispuesta y el médico me ha recomendado reposo absoluto. Quedo a su disposición por correo electrónico si surge alguna urgencia. Atentamente, Ayşe».\n\n💬 **Mensaje B (WhatsApp a su novio):**\n«¡Hola, cariño! Oye, al final no voy a ir a trabajar hoy. Estoy fatal, me duele todo y el médico me ha dicho que me quede en la cama. Si necesitas algo, escríbeme, pero voy a estar durmiendo un rato. ¡Un beso!»",
        translation: "Ayşe tarafından gönderilen iki mesajın karşılaştırması.\n\n📧 **Mesaj A (Patrona e-posta):**\n«Sayın Bay Rodríguez: Bugün ofise gelemeyeceğimi bildirmek için yazıyorum. Kendimi halsiz hissediyorum ve doktor kesin istirahat önerdi. Acil bir durum olursa e-posta yoluyla hizmetinizdeyim. Saygılarımla, Ayşe».\n\n💬 **Mesaj B (Erkek arkadaşına WhatsApp):**\n«Selam canım! Dinle, sonuçta bugün işe gitmeyeceğim. Berbat durumdayım, her yerim ağrıyor ve doktor yatakta kalmamı söyledi. Bir şeye ihtiyacın olursa yaz ama bir süre uyuyacağım. Öptüm!»"
      }
    },
    {
      id: "b1_u14_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Mezcla de Estilos)",
      exercises: [
        { type: "syntax", turkish: "Bugün ofise gelemeyeceğim (Formal).", spanish: "Hoy no podré asistir a la oficina", words: ["Hoy", "no", "podré", "asistir", "a", "la", "oficina", "ir"] },
        { type: "syntax", turkish: "Bugün işe gitmeyeceğim (Informal).", spanish: "Hoy no voy a ir a trabajar", words: ["Hoy", "no", "voy", "a", "ir", "a", "trabajar", "asistir"] },
        { type: "syntax", turkish: "Sorunuz olursa hizmetinizdeyim (Formal).", spanish: "Quedo a su disposición para cualquier duda", words: ["Quedo", "a", "su", "disposición", "para", "cualquier", "duda"] },
        { type: "syntax", turkish: "Bir şeye ihtiyacın olursa bana yaz (Informal).", spanish: "Si necesitas algo escríbeme", words: ["Si", "necesitas", "algo", "escríbeme", "escríbame"] },
        { type: "syntax", turkish: "Kendimi halsiz hissediyorum (Indispuesta).", spanish: "Me encuentro indispuesta", words: ["Me", "encuentro", "indispuesta", "estoy", "fatal"] },
        { type: "speaking", spanish: "Quedo a su entera disposición", turkish: "Tamamen hizmetinizdeyim." },
        { type: "speaking", spanish: "Oye qué pasa cómo va todo", turkish: "Selam, ne haber, nasıl gidiyor?" },
        { type: "speaking", spanish: "Le escribo para informarle de algo", turkish: "Size bir şeyi bildirmek için yazıyorum." },
        { type: "speaking", spanish: "Venga un beso luego hablamos", turkish: "Hadi, öptüm, sonra konuşuruz." },
        { type: "speaking", spanish: "Atentamente Ayşe", turkish: "Saygılarımla, Ayşe." }
      ]
    },
    {
      id: "b1_u14_n8",
      type: "theory",
      title: "Laboratorio de Slang: Palabras de la calle",
      content: {
        concept: "Para sonar como una nativa cuando no estás en la oficina, necesitas estas palabras que NO aparecen en los diccionarios formales.\n\n### El Diccionario de la Calle:\n• **Guay / Chulo** (Harika / Havalı): 'Ese coche es muy guay'.\n• **Tío / Tía** (Dostum / Kanka): Se usa para llamar la atención de alguien. 'Oye, tío...'.\n• **Curro / Currar** (İş / Çalışmak): 'Mañana tengo mucho curro'.\n• **Pasta / Guita** (Para / Nakit): 'No tengo pasta para el cine'.\n• **Tapear** (Tapas yemeye gitmek).\n• **Estar a dos velas** (Parası kalmamış olmak).",
        examples: [
          { es: "Me voy al curro, ¡hasta luego!", tr: "İşe (curro) gidiyorum, görüşürüz!" },
          { es: "¡Qué chulo tu vestido!", tr: "Elbisen ne kadar havalı!" },
          { es: "No tengo ni un euro, estoy a dos velas.", tr: "Hiç eurom yok, meteliğe kurşun atıyorum." }
        ]
      }
    },
    {
      id: "b1_u14_n9",
      type: "theory",
      title: "Sintaxis Maestra: La Carta Formal",
      content: {
        concept: "Analizaremos la estructura de una solicitud formal. Observa el uso de verbos en Condicional y el pronombre 'LE' de respeto.",
        examples: [{ es: "Le agradecería mucho que usted me enviara el contrato hoy.", tr: "Sözleşmeyi bugün bana göndermenizden çok minnettar kalırdım." }],
        analysis: [
          { word: "Le agradecería", type: "verb", literal: "Size minnettar kalırdım", explanation: "Verbo en Condicional Simple. Es la forma más elegante de pedir algo.", examples: [] },
          { word: "mucho", type: "adverb", literal: "çok", explanation: "Intensificador de cortesía.", examples: [] },
          { word: "que", type: "connector", literal: "ki", explanation: "El puente al deseo.", examples: [] },
          { word: "usted", type: "pronoun", literal: "siz", explanation: "Sujeto formal obligatorio para marcar distancia respetuosa.", examples: [] },
          { word: "me enviara", type: "verb", literal: "bana göndermeniz", explanation: "Verbo ENVIAR en Imperfecto de Subjuntivo. Se usa por cortesía tras el condicional.", examples: [] },
          { word: "el contrato", type: "noun", literal: "sözleşme", explanation: "Objeto directo.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u14_n10",
      type: "theory",
      title: "Caja de Herramientas: Conectores de Registro",
      content: {
        concept: "Dependiendo de si escribes un informe o hablas con un amigo, usarás conectores distintos.\n\n### Conectores Formales (Oficina/Escrito):\n• **Por consiguiente** (Dolayısıyla).\n• **No obstante** (Buna rağmen / Yine de).\n• **Asimismo** (Aynı şekilde).\n• **En relación con** (... ile ilgili olarak).\n\n### Conectores Informales (Habla/Chat):\n• **O sea** (Yani).\n• **Pues nada** (Neyse / Şey).\n• **Encima** (Üstelik - negativo).\n• **Total, que...** (Sonuçta...).\n\n*Ejemplo:* No tengo dinero; **no obstante**, viajaré. (Formal) vs. No tengo pasta y **encima** llueve. (Informal).",
        examples: [
          { es: "Le envío el informe; asimismo, adjunto la factura.", tr: "Raporu size gönderiyorum; aynı şekilde faturayı da ekliyorum." },
          { es: "O sea, que no vas a venir al final.", tr: "Yani, sonuçta gelmeyeceksin." }
        ]
      }
    },
    {
      id: "b1_u14_n11",
      type: "theory",
      title: "Taller de Producción: El Doble Mensaje",
      content: {
        concept: "Es hora de practicar la adaptabilidad.\n\n**Instrucciones:**\nImagina que has comprado un teléfono y está roto. Vas a escribir dos mensajes (mínimo 4 líneas cada uno):\n1. Un correo formal a la tienda reclamando el dinero (Usa Usted, Condicional, 'Atentamente').\n2. Un mensaje a tu mejor amigo contándole el problema (Usa Tú, Slang, conectores informales).\n\n**Inspiración:** 'Estimados señores: Les escribo porque el terminal no funciona...' vs '¡Tío, no te lo vas a creer! El móvil está fatal, me han timado...'",
        examples: []
      }
    },
    {
      id: "b1_u14_n12",
      type: "exam",
      title: "Examen de Unidad: Registro y Estilo",
      content: {
        concept: "Demuestra que sabes cuándo ser un profesional y cuándo ser una amiga, adaptando tu vocabulario y gramática.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "¿Cuál es una despedida formal?", options: ["Un beso", "Atentamente", "Chao"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Curro' en slang español?", options: ["Dinero", "Trabajo", "Comida"], correct: 1 },
          { type: "multiple_choice", question: "Si hablas con un policía, usas:", options: ["¿Cómo estás tú?", "¿Cómo está usted?", "¿Qué pasa tío?"], correct: 1 },
          { type: "multiple_choice", question: "El conector 'Asimismo' es típico de un registro:", options: ["Formal/Escrito", "Informal/Calle"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo dices 'Para' (money) en slang?", options: ["Pasta", "Sopa", "Madera"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'O sea'?", options: ["Kemik", "Yani / Yani demek istediğim", "Belki"], correct: 1 },
          { type: "multiple_choice", question: "En un correo formal al jefe: 'Le ______ (agradecer) su tiempo'.", options: ["agradezco", "agradeces", "agradecemos"], correct: 0 },
          { type: "multiple_choice", question: "Si algo es 'Guay', es:", options: ["Malo", "Caro", "Bueno/Genial"], correct: 2 },
          { type: "multiple_choice", question: "¿Cómo cierras un WhatsApp a un amigo?", options: ["Le saluda cordialmente", "Quedo a su disposición", "Cuídate mucho"], correct: 2 },
          { type: "multiple_choice", question: "Si estás 'A dos velas', significa que:", options: ["No tienes dinero", "Tienes muchas ideas", "Tienes frío"], correct: 0 },
          { type: "multiple_choice", question: "El pronombre de objeto para 'Usted' es:", options: ["Te", "Le", "Me"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Tapear'?", options: ["Kapak kapatmak", "Tapas yemeye gitmek", "Hızlı yürümek"], correct: 1 },
          { type: "multiple_choice", question: "Conector formal para 'Ama/Fakat':", options: ["Pero", "No obstante", "Encima"], correct: 1 },
          { type: "multiple_choice", question: "Si usas 'Tío' con un desconocido mayor, eres:", options: ["Educado", "Irrespetuoso", "Formal"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Harika / Havalı' en España?", options: ["Chulo", "Grasa", "Lápiz"], correct: 0 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Yardımınız için minnettarım (Formal).", spanish: "Le agradezco mucho su ayuda", words: ["Le", "agradezco", "mucho", "su", "ayuda", "te", "tu"] },
          { type: "syntax", turkish: "Neler oluyor dostum? (Informal).", spanish: "Qué pasa tío cómo va todo", words: ["Qué", "pasa", "tío", "cómo", "va", "todo", "usted"] },
          { type: "syntax", turkish: "Sözleşmeyi (el contrato) size gönderiyorum (Formal).", spanish: "Le envío el contrato adjunto", words: ["Le", "envío", "el", "contrato", "adjunto", "te"] },
          { type: "syntax", turkish: "Çok işim (curro) var (Informal).", spanish: "Tengo un montón de curro", words: ["Tengo", "un", "montón", "de", "curro", "trabajo"] },
          { type: "syntax", turkish: "İçten selamlarımı sunarım (Formal).", spanish: "Reciba un cordial saludo", words: ["Reciba", "un", "cordial", "saludo", "beso"] },
          { type: "syntax", turkish: "Hadi öptüm görüşürüz (Informal).", spanish: "Venga un beso nos vemos", words: ["Venga", "un", "beso", "nos", "vemos", "Atentamente"] },
          { type: "syntax", turkish: "Buna rağmen (No obstante) devam edeceğiz.", spanish: "No obstante vamos a continuar", words: ["No", "obstante", "vamos", "a", "continuar", "pero"] },
          { type: "syntax", turkish: "Yani (O sea) gelmeyeceksin.", spanish: "O sea que no vas a venir", words: ["O", "sea", "que", "no", "vas", "a", "venir"] },
          { type: "syntax", turkish: "Bana yolu tarif edebilir miydiniz? (Formal).", spanish: "Podría usted indicarme el camino", words: ["Podría", "usted", "indicarme", "el", "camino", "puedes"] },
          { type: "syntax", turkish: "Meteliğe kurşun atıyorum (A dos velas).", spanish: "No tengo pasta estoy a dos velas", words: ["No", "tengo", "pasta", "estoy", "a", "dos", "velas"] },
          { type: "syntax", turkish: "Kendimi halsiz hissediyorum (Formal).", spanish: "Me encuentro un poco indispuesta", words: ["Me", "encuentro", "un", "poco", "indispuesta", "estoy"] },
          { type: "syntax", turkish: "Her şey çok havalı (chulo).", spanish: "Todo es muy chulo", words: ["Todo", "es", "muy", "chulo", "guay", "formal"] },
          { type: "syntax", turkish: "Daha fazla bilgi için hizmetinizdeyim.", spanish: "Quedo a su disposición para más información", words: ["Quedo", "a", "su", "disposición", "para", "más", "información"] },
          { type: "syntax", turkish: "Hadi gidelim (Informal).", spanish: "Venga vámonos", words: ["Venga", "vámonos", "vamos", "usted"] },
          { type: "syntax", turkish: "İspanyolca öğrenmek çok havalı.", spanish: "Aprender español es muy guay", words: ["Aprender", "español", "es", "muy", "guay", "pasta"] }
        ]
      }
    }
  ]
};
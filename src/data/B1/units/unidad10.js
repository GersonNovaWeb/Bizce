/**
 * UNIDAD 10: EL CHISME I (ESTILO INDIRECTO EN PRESENTE) - NIVEL B1
 * Enfoque: Reportar mensajes de otros. Contraste Indicativo (informar) vs Subjuntivo (pedir).
 * Estructura: 12 Nodos Premium.
 */

export const unidad10 = {
  id: "b1_u10",
  title: "Unidad 10: El Chisme I (Estilo Indirecto)",
  description: "Aprende a contar lo que otros dicen. Domina el arte de transmitir información, órdenes y peticiones en español.",
  nodes: [
    {
      id: "b1_u10_n1",
      type: "theory",
      title: "Teoría I: Transmitir Información (Indicativo)",
      content: {
        concept: "El **Estilo Indirecto** sirve para contar lo que otra persona ha dicho sin repetir sus palabras exactas. En esta primera fase, aprenderemos a transmitir INFORMACIÓN o HECHOS.\n\n### 1. La fórmula básica\nUsamos el verbo 'Decir' seguido del puente 'QUE'.\n• **Sujeto + DICE + QUE + Verbo en Indicativo**.\n\n### 2. Los cambios de persona\nAl reportar, los pronombres y los verbos deben cambiar para tener sentido lógico.\n• Directo: Carlos dice: '(**Yo**) **estoy** cansado'.\n• Indirecto: Carlos dice que (**él**) **está** cansado.\n\n🇹🇷 LÓGICA TURCA: Equivale al uso de **'...-diğini söylüyor'**. \n*Ej: Carlos yorgun olduğunu söylüyor.*",
        examples: [
          { es: "María dice que no tiene hambre.", tr: "María aç olmadığını söylüyor." },
          { es: "Mis amigos dicen que la fiesta es a las diez.", tr: "Arkadaşlarım partinin saat onda olduğunu söylüyorlar." },
          { es: "El profesor dice que el examen es fácil.", tr: "Öğretmen sınavın kolay olduğunu söylüyor." }
        ]
      }
    },
    {
      id: "b1_u10_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Reportar Hechos)",
      exercises: [
        { type: "syntax", turkish: "Carlos evde olduğunu söylüyor.", spanish: "Carlos dice que está en casa", words: ["Carlos", "dice", "que", "está", "en", "casa", "esté"] },
        { type: "syntax", turkish: "Annem seni sevdiğini söylüyor.", spanish: "Mi madre dice que te quiere", words: ["Mi", "madre", "dice", "que", "te", "quiere", "quiera"] },
        { type: "syntax", turkish: "Onlar İspanyolca çalıştıklarını söylüyorlar.", spanish: "Ellos dicen que estudian español", words: ["Ellos", "dicen", "que", "estudian", "español", "estudien"] },
        { type: "syntax", turkish: "Marta vaktinin olmadığını söylüyor.", spanish: "Marta dice que no tiene tiempo", words: ["Marta", "dice", "que", "no", "tiene", "tiempo", "tenga"] },
        { type: "syntax", turkish: "Biz mutlu olduğumuzu söylüyoruz.", spanish: "Nosotros decimos que somos felices", words: ["Nosotros", "decimos", "que", "somos", "felices", "seamos"] },
        { type: "syntax", turkish: "Babam arabanın bozuk olduğunu söylüyor.", spanish: "Mi padre dice que el coche está roto", words: ["Mi", "padre", "dice", "que", "el", "coche", "está", "roto"] },
        { type: "syntax", turkish: "Onun (kadın) Madrid'de yaşadığını söylüyorlar.", spanish: "Dicen que ella vive en Madrid", words: ["Dicen", "que", "ella", "vive", "en", "Madrid", "viva"] },
        { type: "syntax", turkish: "Öğretmen yarın dersin olmadığını söylüyor.", spanish: "El profesor dice que mañana no hay clase", words: ["El", "profesor", "dice", "que", "mañana", "no", "hay", "clase"] },
        { type: "syntax", turkish: "Seni duyduğunu söylüyor (Él).", spanish: "Él dice que te escucha", words: ["Él", "dice", "que", "te", "escucha", "escuche"] },
        { type: "syntax", turkish: "Zaten yediklerini söylüyorlar.", spanish: "Dicen que ya han comido", words: ["Dicen", "que", "ya", "han", "comido", "hayan"] }
      ]
    },
    {
      id: "b1_u10_n3",
      type: "theory",
      title: "Teoría II: Transmitir Órdenes y Peticiones (Subjuntivo)",
      content: {
        concept: "¡Aquí es donde el B1 se pone serio! ¿Qué pasa cuando reportamos que alguien nos ha dado una ORDEN o nos ha pedido un favor?\n\n### La Regla de Oro del Reporte\nSi el mensaje original era un **Imperativo** (¡Ven!, ¡Hazlo!, ¡Ayúdame!), al reportarlo **OBLIGATORIAMENTE** usamos el **Subjuntivo**.\n\n• Directo: Carlos dice: '**¡Ven** a mi casa!'.\n• Indirecto: Carlos me dice que **VENGA** a su casa.\n\n### Verbos de influencia comunes:\nAdemás de 'Decir', usamos verbos que 'empujan' a la otra persona:\n• **Pedir que** (Rica etmek/istemek)\n• **Rogar que** (Yalvarmak)\n• **Mandar que / Ordenar que** (Emretmek)\n\n🇹🇷 LÓGICA TURCA: Equivale al uso de **'...-memi istiyor'**. \n*Ej: Carlos gelmemi söylüyor/istiyor.*",
        examples: [
          { es: "Mi madre me pide que limpie mi cuarto.", tr: "Annem odamı temizlememi istiyor." },
          { es: "El jefe nos dice que trabajemos más.", tr: "Patron daha çok çalışmamızı söylüyor (emrediyor)." },
          { es: "Te ruego que me escuches.", tr: "Beni dinlemen için sana yalvarıyorum." }
        ]
      }
    },
    {
      id: "b1_u10_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Informar vs Pedir)",
      exercises: [
        { type: "speaking", spanish: "Él dice que está feliz", turkish: "O mutlu olduğunu söylüyor. (Informar -> Indicativo)" },
        { type: "speaking", spanish: "Él me dice que sea feliz", turkish: "O mutlu olmamı söylüyor. (Pedir -> Subjuntivo)" },
        { type: "speaking", spanish: "Mi madre dice que come pizza", turkish: "Annem pizza yediğini söylüyor." },
        { type: "speaking", spanish: "Mi madre me dice que coma pizza", turkish: "Annem pizza yememi söylüyor." },
        { type: "speaking", spanish: "Te pido que me ayudes", turkish: "Bana yardım etmeni istiyorum (rica ediyorum)." },
        { type: "speaking", spanish: "Dice que no tiene dinero", turkish: "Parası olmadığını söylüyor." },
        { type: "speaking", spanish: "Me pide que le dé dinero", turkish: "Ona para vermemi istiyor." },
        { type: "speaking", spanish: "Nos dicen que vengamos pronto", turkish: "Erken gelmemizi söylüyorlar." },
        { type: "speaking", spanish: "Dicen que vienen pronto", turkish: "Yakında geleceklerini söylüyorlar." },
        { type: "speaking", spanish: "El médico me dice que descanse", turkish: "Doktor dinlenmemi söylüyor." }
      ]
    },
    {
      id: "b1_u10_n5",
      type: "theory",
      title: "El Reto Turco: ¿Qué dijo exactamente?",
      content: {
        concept: "En turco, la diferencia entre una información y una orden en estilo indirecto es muy clara por el sufijo (*-diğini* vs *-mesini*).\n\nEn español, ambas usan el puente 'QUE', por lo que el error más común de los turcoparlantes es usar siempre el Indicativo por inercia.\n\n### Tu brújula mental:\nAntes de traducir, pregúntate: ¿Qué dijo la persona originalmente?\n\n1. Si dijo una frase normal ➔ **Indicativo**.\n   *Dijo: 'Tengo hambre' ➔ Dice que TIENE hambre.*\n2. Si dijo una orden o un favor ➔ **Subjuntivo**.\n   *Dijo: '¡Ten cuidado!' ➔ Dice que TENGAS cuidado.*\n\n¡No dejes que el 'que' te engañe! El subjuntivo es el que marca la autoridad o la petición.",
        examples: [
          { es: "Dice que vas al cine. (Información: Él sabe que tú vas).", tr: "Sinemaya gittiğini söylüyor." },
          { es: "Dice que vayas al cine. (Orden: Él quiere que tú vayas).", tr: "Sinemaya gitmeni söylüyor." }
        ]
      }
    },
    {
      id: "b1_u10_n6",
      type: "reading",
      title: "Lectura y Audio: Rumores en la oficina",
      content: {
        text: "Es lunes por la mañana y el ambiente en la oficina es muy extraño. Lucía y Javier están tomando un café en secreto.\n\n— Lucía: Javier, ¿te has enterado? Dicen que el jefe va a cerrar la oficina de Madrid.\n— Javier: ¡No me digas! ¿Quién lo dice?\n— Lucía: Me lo ha dicho Marta. Ella dice que ha visto unos documentos en la mesa del director. Además, dice que el director le ha pedido que prepare una lista con todos nuestros nombres.\n— Javier: ¡Qué fuerte! A mí el jefe me ha dicho esta mañana que no me preocupe, que todo está bien. Pero ahora me pides que me crea a Marta...\n— Lucía: Es que Marta también dice que el jefe nos va a mandar un correo esta tarde. Ella nos sugiere que busquemos otro trabajo por si acaso.\n— Javier: Pues dile a Marta que no sea tan negativa. ¡Seguro que son solo chismes!",
        translation: "Pazartesi sabahı ve ofisteki hava çok garip. Lucia ve Javier gizlice kahve içiyorlar.\n\n— Lucia: Javier, duydun mu? Patronun Madrid ofisini kapatacağını söylüyorlar.\n— Javier: Hadi canım! Kim söylüyor bunu?\n— Lucia: Bana Marta söyledi. Müdürün masasında bazı belgeler gördüğünü söylüyor. Ayrıca müdürün ondan hepimizin isimlerinin olduğu bir liste hazırlamasını istediğini söylüyor.\n— Javier: Ne kadar ağır! Patron bu sabah bana endişelenmememi, her şeyin yolunda olduğunu söyledi. Ama şimdi benden Marta'ya inanmamı istiyorsun...\n— Lucia: Mesele şu ki Marta ayrıca patronun bu öğleden sonra bize bir e-posta göndereceğini de söylüyor. Her ihtimale karşı başka bir iş aramızı öneriyor.\n— Javier: Pekala, Marta'ya bu kadar negatif olmamasını söyle. Eminim bunlar sadece dedikodudur!"
      }
    },
    {
      id: "b1_u10_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis y Decisiones)",
      exercises: [
        { type: "syntax", turkish: "Marta ofisin kapanacağını söylüyor.", spanish: "Marta dice que la oficina va a cerrar", words: ["Marta", "dice", "que", "la", "oficina", "va", "a", "cerrar", "vaya"] },
        { type: "syntax", turkish: "Müdür bir liste hazırlamamı istiyor.", spanish: "El director me pide que prepare una lista", words: ["El", "director", "me", "pide", "que", "prepare", "una", "lista", "prepara"] },
        { type: "syntax", turkish: "Endişelenmememi söylüyor (Él).", spanish: "Él me dice que no me preocupe", words: ["Él", "me", "dice", "que", "no", "me", "preocupe", "preocupo"] },
        { type: "syntax", turkish: "Başka bir iş aramızı öneriyor (Ella).", spanish: "Ella sugiere que busquemos otro trabajo", words: ["Ella", "sugiere", "que", "busquemos", "otro", "trabajo", "buscamos"] },
        { type: "syntax", turkish: "Negatif olmamasını ona söyle (Dile).", spanish: "Dile que no sea tan negativa", words: ["Dile", "que", "no", "sea", "tan", "negativa", "es"] },
        { type: "speaking", spanish: "Dice que la oficina va a cerrar", turkish: "Ofisin kapanacağını söylüyor." },
        { type: "speaking", spanish: "Me pide que prepare una lista", turkish: "Bir liste hazırlamamı istiyor." },
        { type: "speaking", spanish: "Me dice que no me preocupe", turkish: "Endişelenmememi söylüyor." },
        { type: "speaking", spanish: "Sugiere que busquemos otro trabajo", turkish: "Başka bir iş aramızı öneriyor." },
        { type: "speaking", spanish: "Dicen que son solo chismes", turkish: "Sadece dedikodu olduğunu söylüyorlar." }
      ]
    },
    {
      id: "b1_u10_n8",
      type: "theory",
      title: "Laboratorio de Slang: El Arte de Cotillear",
      content: {
        concept: "En español, hablar de la vida de los demás tiene nombres muy específicos. Si quieres sonar como una nativa en una cafetería, usa estas expresiones.\n\n### Vocabulario del Chisme:\n• **El chisme / El cotilleo** (Dedikodu): La información que se cuenta.\n• **Cotillear** (Dedikodu yapmak): El verbo de acción.\n• **Enterarse de algo** (Bir şeyi öğrenmek/duymak): *'¿Te has enterado de lo de Carlos?'*.\n• **Ser un bocazas** (İçi dışı bir olmak / Sır tutamamak): Alguien que habla demasiado.\n• **Soltar la lengua** (Dilini çözmek / Her şeyi anlatmak).\n• **¡No me digas! / ¡Qué fuerte!** (Hadi canım! / İnanılmaz!): Reacciones comunes.",
        examples: [
          { es: "A María le encanta cotillear sobre sus vecinos.", tr: "María komşuları hakkında dedikodu yapmaya bayılır." },
          { es: "Me he enterado de que te vas a casar. ¡Qué fuerte!", tr: "Evleneceğini duydum. İnanılmaz!" },
          { es: "No le cuentes nada a Juan, es un bocazas.", tr: "Juan'a hiçbir şey anlatma, o sır tutamaz (boşboğazdır)." }
        ]
      }
    },
    {
      id: "b1_u10_n9",
      type: "theory",
      title: "Sintaxis Maestra: El Reporte de Orden",
      content: {
        concept: "Vamos a deconstruir la frase más difícil de la unidad: una orden reportada que incluye pronombres de objeto y subjuntivo negativo.",
        examples: [{ es: "Mi jefe me dice que no le diga nada a mis compañeros todavía.", tr: "Patronum henüz arkadaşlarıma hiçbir şey söylemememi söylüyor." }],
        analysis: [
          { word: "Mi jefe", type: "noun", literal: "Patronum", explanation: "Sujeto que emite el mensaje original.", examples: [] },
          { word: "me dice", type: "verb", literal: "bana söylüyor", explanation: "Verbo de comunicación en presente. El 'me' indica quién recibe el mensaje.", examples: [] },
          { word: "que", type: "connector", literal: "ki (bağlaç)", explanation: "El puente obligatorio.", examples: [] },
          { word: "no", type: "adverb", literal: "olumsuzluk eki", explanation: "Adverbio de negación.", examples: [] },
          { word: "le diga", type: "verb", literal: "söylemememi (subjuntivo)", explanation: "Verbo DECIR en Subjuntivo. El 'le' se refiere a la tercera persona (compañeros en bloque o director). Al ser una prohibición ('No digas'), usamos subjuntivo.", examples: [] },
          { word: "nada", type: "pronoun", literal: "hiçbir şey", explanation: "Objeto de la prohibición.", examples: [] },
          { word: "a mis compañeros", type: "noun", literal: "arkadaşlarıma", explanation: "Destinatarios de la información prohibida.", examples: [] },
          { word: "todavía", type: "adverb", literal: "henüz", explanation: "Marcador temporal.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u10_n10",
      type: "theory",
      title: "Caja de Herramientas: Verbos de Comunicación",
      content: {
        concept: "Para no usar siempre el verbo 'Decir', un estudiante de nivel B1 debe conocer estos verbos que añaden matices al mensaje.\n\n### Verbos para Informar (Indicativo):\n• **Asegurar** (Garanti etmek / Emin bir şekilde söylemek).\n• **Afirmar** (Onaylamak / Belirtmek).\n• **Contar** (Anlatmak).\n• **Explicar** (Açıklamak).\n\n### Verbos para Pedir/Sugerir (Subjuntivo):\n• **Pedir** (Rica etmek).\n• **Sugerir** (Önermek).\n• **Aconsejar** (Tavsiye etmek).\n• **Prohibir** (Yasaklamak).\n\n*Ejemplo:* El gobierno afirma que la economía crece (Indicativo) pero nos pide que ahorremos agua (Subjuntivo).",
        examples: [
          { es: "Ella me asegura que el hotel es bueno.", tr: "Otelin iyi olduğuna dair bana güvence veriyor." },
          { es: "Te aconsejo que no escuches los chismes.", tr: "Sana dedikoduları dinlememeni tavsiye ederim." },
          { es: "El profesor explica que la gramática es lógica.", tr: "Öğretmen gramerin mantıklı olduğunu açıklıyor." }
        ]
      }
    },
    {
      id: "b1_u10_n11",
      type: "theory",
      title: "Taller de Producción: El Teléfono Descompuesto",
      content: {
        concept: "¡Ha llegado tu momento de cotillear con elegancia!\n\n**Instrucciones:**\nImagina que ayer estuviste en una fiesta y escuchaste tres mensajes diferentes de tus amigos. Escríbelos usando el Estilo Indirecto (mínimo 6-8 líneas).\n\n1. Reporta una información (Usa 'Dice que' + Indicativo).\n2. Reporta una orden o favor (Usa 'Me pide que' + Subjuntivo).\n3. Usa al menos un verbo de comunicación diferente a 'Decir' (asegura, sugiere, explica).\n4. Usa vocabulario de chisme (enterarse, soltar la lengua).\n\n**Inspiración:** 'En la fiesta, me enteré de muchas cosas. Carlos me asegura que va a dejar su trabajo. Además, Lucía me pide que no le diga nada a nadie porque...'",
        examples: []
      }
    },
    {
      id: "b1_u10_n12",
      type: "exam",
      title: "Examen de Unidad: El Chisme",
      content: {
        concept: "Demuestra que sabes distinguir entre reportar un hecho o una orden, aplicando correctamente el Indicativo o el Subjuntivo.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Si alguien dice: 'Estoy feliz', el reporte es: Dice que ______ feliz.", options: ["está", "esté", "estuviera"], correct: 0 },
          { type: "multiple_choice", question: "Si alguien dice: '¡Sé feliz!', el reporte es: Me dice que ______ feliz.", options: ["soy", "sea", "es"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué modo usamos para reportar un HECHO comprobado?", options: ["Subjuntivo", "Indicativo", "Infinitivo"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué modo usamos para reportar una PETICIÓN o FAVOR?", options: ["Subjuntivo", "Indicativo", "Imperativo"], correct: 0 },
          { type: "multiple_choice", question: "Carlos afirma que ______ (tener) un coche nuevo.", options: ["tenga", "tiene", "teniendo"], correct: 1 },
          { type: "multiple_choice", question: "Mi madre me pide que ______ (venir) a comer.", options: ["venga", "vengo", "vienes"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Ser un bocazas'?", options: ["Ağzı büyük olmak", "Boşboğaz olmak / Sır tutamamak", "Çok yemek yemek"], correct: 1 },
          { type: "multiple_choice", question: "La traducción de 'Seni sevdiğimi söylüyorum' es:", options: ["Digo que te quiero.", "Digo que te quiera.", "Digo te quiero."], correct: 0 },
          { type: "multiple_choice", question: "La traducción de 'Gelmeni söylüyorum' es:", options: ["Digo que vienes.", "Digo que vengas.", "Digo venir."], correct: 1 },
          { type: "multiple_choice", question: "El jefe prohibe que nosotros ______ (fumar) aquí.", options: ["fumamos", "fumemos", "fumar"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Enterarse de algo'?", options: ["Bir şeyi öğretmek", "Bir şeyi duymak / öğrenmek", "Bir şeyi unutmak"], correct: 1 },
          { type: "multiple_choice", question: "Ella me asegura que todo ______ (ir) bien.", options: ["vaya", "va", "ir"], correct: 1 },
          { type: "multiple_choice", question: "Te aconsejo que ______ (estudiar) más.", options: ["estudias", "estudies", "estudiar"], correct: 1 },
          { type: "multiple_choice", question: "Marta cuenta que ______ (ver) a tu novio con otra chica.", options: ["ve", "vea", "veía"], correct: 0 },
          { type: "multiple_choice", question: "Él me ruega que lo ______ (perdonar).", options: ["perdono", "perdone", "perdonas"], correct: 1 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Aç olmadığını söylüyor.", spanish: "Dice que no tiene hambre", words: ["Dice", "que", "no", "tiene", "hambre", "tenga"] },
          { type: "syntax", turkish: "Bana yardım etmeni rica ediyorum.", spanish: "Te pido que me ayudes", words: ["Te", "pido", "que", "me", "ayudes", "ayudas"] },
          { type: "syntax", turkish: "Doğruyu söylediğini açıklıyor.", spanish: "Explica que dice la verdad", words: ["Explica", "que", "dice", "la", "verdad", "diga"] },
          { type: "syntax", turkish: "Beni dinlemeni istiyorum.", spanish: "Quiero que me escuches", words: ["Quiero", "que", "me", "escuches", "escuchas"] },
          { type: "syntax", turkish: "Yarın geleceğini (onun) biliyorum.", spanish: "Sé que ella viene mañana", words: ["Sé", "que", "ella", "viene", "mañana", "venga"] },
          { type: "syntax", turkish: "Onunla konuşmanı öneririm.", spanish: "Te sugiero que hables con él", words: ["Te", "sugiero", "que", "hables", "con", "él", "hablas"] },
          { type: "syntax", turkish: "Her şeyin yolunda (bien) olduğuna dair güvence veriyor.", spanish: "Asegura que todo está bien", words: ["Asegura", "que", "todo", "está", "bien", "esté"] },
          { type: "syntax", turkish: "Geç kalmamamı bana söylüyorlar.", spanish: "Me dicen que no llegue tarde", words: ["Me", "dicen", "que", "no", "llegue", "tarde", "llego"] },
          { type: "syntax", turkish: "Burada olduğuma çok seviniyorum.", spanish: "Me alegra que yo esté aquí", words: ["Me", "alegra", "que", "yo", "esté", "aquí", "estoy"] },
          { type: "syntax", turkish: "İspanya'da yaşadığını söylüyor (Él).", spanish: "Él dice que vive en España", words: ["Él", "dice", "que", "vive", "en", "España", "viva"] },
          { type: "syntax", turkish: "Bunu yapmamamızı emrediyor (ordenar).", spanish: "Ordena que no hagamos esto", words: ["Ordena", "que", "no", "hagamos", "esto", "hacemos"] },
          { type: "syntax", turkish: "O (kadın) yalan söylemediğini iddia ediyor (afirmar).", spanish: "Ella afirma que no dice mentiras", words: ["Ella", "afirma", "que", "no", "dice", "mentiras", "diga"] },
          { type: "syntax", turkish: "Lütfen bana gerçeği söyle (Estilo Directo).", spanish: "Por favor dime la verdad", words: ["Por", "favor", "dime", "la", "verdad"] },
          { type: "syntax", turkish: "Bana gerçeği söylemeni istiyorum.", spanish: "Quiero que me digas la verdad", words: ["Quiero", "que", "me", "digas", "la", "verdad", "dices"] },
          { type: "syntax", turkish: "Ne kadar ağır! İnanılmaz!", spanish: "Qué fuerte increíble", words: ["Qué", "fuerte", "increíble", "lástima"] }
        ]
      }
    }
  ]
};
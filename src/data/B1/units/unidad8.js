/**
 * UNIDAD 8: EL GRAN DILEMA (POR vs PARA) - NIVEL B1
 * Enfoque: Diferenciar los usos de las preposiciones Por y Para.
 * Estructura: 12 Nodos Premium.
 */

export const unidad8 = {
  id: "b1_u8",
  title: "Unidad 8: El Gran Dilema (POR vs PARA)",
  description: "Resuelve el mayor dolor de cabeza del español. Descubre cuándo usar POR (causas y medios) y cuándo usar PARA (destinos y metas).",
  nodes: [
    {
      id: "b1_u8_n1",
      type: "theory",
      title: "Teoría I: El Mundo de PARA",
      content: {
        concept: "Para entender la diferencia, imagina que **PARA** es una FLECHA ➔. Siempre apunta hacia un objetivo, un destino o el final de un camino.\n\n### Los 4 Usos Principales de PARA:\n\n**1. Finalidad o Propósito (Amacıyla / -mek için):**\n• *Estudio español PARA viajar a México.* (İspanyolca çalışıyorum, Meksika'ya seyahat etmek **amacıyla**).\n\n**2. Destinatario (Alıcı):**\n• *Este regalo es PARA ti.* (Bu hediye senin **için** - Sana gidiyor).\n\n**3. Dirección / Destino Físico (Yön / -e doğru):**\n• *Voy PARA Madrid.* (Madrid'e **doğru** gidiyorum).\n\n**4. Fecha límite o Plazo (Son teslim tarihi / -e kadar):**\n• *El informe es PARA el lunes.* (Rapor pazartesiye **kadar** hazır olmalı).",
        examples: [
          { es: "Hago ejercicio para estar sano.", tr: "Sağlıklı olmak için spor yapıyorum." },
          { es: "He comprado un libro para mi madre.", tr: "Annem için bir kitap satın aldım." },
          { es: "La tarea es para mañana.", tr: "Ödev yarına kadar." }
        ]
      }
    },
    {
      id: "b1_u8_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (La Flecha PARA)",
      exercises: [
        { type: "syntax", turkish: "Bu hediye senin için.", spanish: "Este regalo es para ti", words: ["Este", "regalo", "es", "para", "ti", "por"] },
        { type: "syntax", turkish: "Öğrenmek için okuyorum.", spanish: "Yo leo para aprender", words: ["Yo", "leo", "para", "aprender", "por"] },
        { type: "syntax", turkish: "Ofise doğru (hacia) gidiyoruz.", spanish: "Nosotros vamos para la oficina", words: ["Nosotros", "vamos", "para", "la", "oficina", "por"] },
        { type: "syntax", turkish: "Proje cuma gününe kadar (fecha límite).", spanish: "El proyecto es para el viernes", words: ["El", "proyecto", "es", "para", "el", "viernes", "por"] },
        { type: "syntax", turkish: "Bunu annem için satın aldım.", spanish: "Compré esto para mi madre", words: ["Compré", "esto", "para", "mi", "madre", "por"] },
        { type: "syntax", turkish: "Çalışmak için yaşıyor.", spanish: "Él vive para trabajar", words: ["Él", "vive", "para", "trabajar", "por"] },
        { type: "syntax", turkish: "Bu ilaç öksürük için.", spanish: "Esta medicina es para la tos", words: ["Esta", "medicina", "es", "para", "la", "tos", "por"] },
        { type: "syntax", turkish: "Eve doğru yürüyorum.", spanish: "Estoy caminando para casa", words: ["Estoy", "caminando", "para", "casa", "por"] },
        { type: "syntax", turkish: "Bu çiçekler senin için.", spanish: "Estas flores son para ti", words: ["Estas", "flores", "son", "para", "ti", "por"] },
        { type: "syntax", turkish: "Para kazanmak için çalışıyoruz.", spanish: "Trabajamos para ganar dinero", words: ["Trabajamos", "para", "ganar", "dinero", "por"] }
      ]
    },
    {
      id: "b1_u8_n3",
      type: "theory",
      title: "Teoría II: El Mundo de POR",
      content: {
        concept: "Si PARA es una flecha hacia adelante, **POR** es el CAMINO, la CAUSA o el MEDIO. Representa el porqué o el cómo pasan las cosas.\n\n### Los Usos Principales de POR:\n\n**1. Causa o Motivo (Yüzünden / Nedeniyle):**\n• *No fui a trabajar POR la lluvia.* (Yağmur **yüzünden** işe gitmedim).\n• *Lo hago POR ti.* (Bunu senin **uğruna/yüzünden** yapıyorum).\n\n**2. Lugar de tránsito (İçinden / Etrafından):**\n• *Paseamos POR el parque.* (Parkın **içinden/etrafında** yürüyoruz).\n\n**3. Medio de comunicación o transporte (Yoluyla / İle):**\n• *Te envié el mensaje POR correo.* (Mesajı e-posta **yoluyla** gönderdim).\n• *Hablamos POR teléfono.* (Telefon**la** konuştuk).\n\n**4. Intercambio o Precio (Karşılığında):**\n• *Te doy mi manzana POR tu sándwich.* (Elmamı sandviçinle **değiştiriyorum**).\n• *Compré el coche POR mil euros.* (Arabayı bin euro**ya** aldım).",
        examples: [
          { es: "Caminamos por la playa.", tr: "Sahil boyunca yürüdük." },
          { es: "Cancelaron el vuelo por la tormenta.", tr: "Fırtına yüzünden uçuşu iptal ettiler." },
          { es: "Gracias por tu ayuda.", tr: "Yardımın için (yüzünden/sebebiyle) teşekkürler." }
        ]
      }
    },
    {
      id: "b1_u8_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Camino POR)",
      exercises: [
        { type: "speaking", spanish: "Gracias por tu ayuda", turkish: "Yardımın için teşekkürler (Motivo)." },
        { type: "speaking", spanish: "Caminamos por el parque", turkish: "Parkın içinden yürüdük (Tránsito)." },
        { type: "speaking", spanish: "Hablamos por teléfono", turkish: "Telefonla konuştuk (Medio)." },
        { type: "speaking", spanish: "Lo compré por diez euros", turkish: "Onu on euroya aldım (Intercambio)." },
        { type: "speaking", spanish: "No salí por el frío", turkish: "Soğuk yüzünden çıkmadım (Causa)." },
        { type: "speaking", spanish: "Te lo envié por correo", turkish: "Sana onu e-posta yoluyla gönderdim." },
        { type: "speaking", spanish: "Llegué tarde por el tráfico", turkish: "Trafik yüzünden geç kaldım." },
        { type: "speaking", spanish: "Paseo por la ciudad", turkish: "Şehirde (sokaklarında) geziniyorum." },
        { type: "speaking", spanish: "Cambié la camisa por otra", turkish: "Gömleği bir başkasıyla değiştirdim." },
        { type: "speaking", spanish: "Me multaron por conducir rápido", turkish: "Hızlı sürdüğüm için (sebebiyle) bana ceza yazdılar." }
      ]
    },
    {
      id: "b1_u8_n5",
      type: "theory",
      title: "El Reto Turco: La trampa de 'İÇİN'",
      content: {
        concept: "Aquí está la raíz del problema para los turcoparlantes. En turco, la palabra **İÇİN** se usa tanto para el MOTIVO (Por) como para el OBJETIVO (Para).\n\n🇹🇷 **Senin için yaptım.**\nEsta frase en turco es ambigua. En español, debes decidir QUÉ quieres decir:\n\n🇪🇸 **OPCIÓN A: Lo hice PARA ti.**\nTú eres el destinatario. Yo hice un pastel y te lo voy a dar. (El pastel es PARA ti).\n\n🇪🇸 **OPCIÓN B: Lo hice POR ti.**\nTú eres la causa o el motivo. Yo no quería hacer el pastel, pero como te quiero mucho, el amor que te tengo me motivó a hacerlo. O tal vez tú estabas enfermo y yo hice tu trabajo (lo hice en tu lugar / por ti).\n\n### Otro clásico: 'Teşekkürler'\n🇹🇷 *Yardımın için teşekkürler.*\nEn español SIEMPRE es **Gracias POR...**. La ayuda es la CAUSA de tu agradecimiento, no el destino. ❌ Nunca digas 'Gracias para'.",
        examples: [
          { es: "Trabajo por mis hijos. (Causa: Ellos me inspiran a trabajar).", tr: "Çocuklarım için (uğruna) çalışıyorum." },
          { es: "Compré dulces para mis hijos. (Destino: Ellos van a comerlos).", tr: "Çocuklarım için şeker aldım." },
          { es: "Gracias por venir.", tr: "Geldiğin için (gelmen sebebiyle) teşekkürler." }
        ]
      }
    },
    {
      id: "b1_u8_n6",
      type: "reading",
      title: "Lectura y Audio: El viaje a Toledo",
      content: {
        text: "Marta y David están organizando un viaje en coche.\n\n— Marta: David, ¿a qué hora salimos PARA Toledo? Tenemos que estar allí PARA las doce de la mañana.\n— David: Vamos a salir a las diez. Pero no podemos ir POR la carretera principal. Está cerrada POR las obras.\n— Marta: Entonces, podemos ir POR la montaña. El paisaje es precioso. ¡Ah! ¿Has comprado el regalo PARA tu madre?\n— David: ¡Ay, no! Lo he olvidado POR culpa del estrés del trabajo.\n— Marta: No te preocupes, lo compraré yo POR ti. Te lo prometo POR mi vida. Pararemos en una tienda PARA comprarlo.\n— David: ¡Gracias POR todo, Marta! Eres la mejor.",
        translation: "Marta ve David arabayla bir seyahat organize ediyorlar.\n\n— Marta: David, Toledo'YA (hedef) saat kaçta çıkıyoruz? Sabah on ikiye KADAR (süre sonu) orada olmalıyız.\n— David: Onda çıkacağız. Ama ana yoldan (içinden/üzerinden) gidemeyiz. Çalışmalar YÜZÜNDEN (sebep) kapalı.\n— Marta: O zaman dağ yolundan (içinden) gidebiliriz. Manzara çok güzel. Ah! Annen İÇİN (alıcı) hediyeyi aldın mı?\n— David: Ah, hayır! İş stresi YÜZÜNDEN (sebep) onu unuttum.\n— Marta: Endişelenme, onu SENİN YERİNE (sebep/yerine) ben alacağım. Hayatım üzerine (yemin) sana söz veriyorum. Onu almak İÇİN (amaç) bir mağazada duracağız.\n— David: Her şey İÇİN (sebep) teşekkürler Marta! Sen en iyisisin."
      }
    },
    {
      id: "b1_u8_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Por vs Para)",
      exercises: [
        { type: "syntax", turkish: "Sınavı geçmek İÇİN çalışıyorum (Propósito).", spanish: "Estudio para aprobar el examen", words: ["Estudio", "para", "aprobar", "el", "examen", "por"] },
        { type: "syntax", turkish: "Yardımın İÇİN teşekkürler (Causa).", spanish: "Gracias por tu ayuda", words: ["Gracias", "por", "tu", "ayuda", "para"] },
        { type: "syntax", turkish: "Bu mektup senin İÇİN (Destinatario).", spanish: "Esta carta es para ti", words: ["Esta", "carta", "es", "para", "ti", "por"] },
        { type: "syntax", turkish: "Yağmur YÜZÜNDEN çıkmadık (Causa).", spanish: "No salimos por la lluvia", words: ["No", "salimos", "por", "la", "lluvia", "para"] },
        { type: "syntax", turkish: "Ormanın İÇİNDEN yürüdük (Tránsito).", spanish: "Caminamos por el bosque", words: ["Caminamos", "por", "el", "bosque", "para"] },
        { type: "speaking", spanish: "Lo hago para ganar dinero", turkish: "Para kazanmak İÇİN (amacıyla) yapıyorum." },
        { type: "speaking", spanish: "Lo hago por mi familia", turkish: "Ailem İÇİN (onların uğruna) yapıyorum." },
        { type: "speaking", spanish: "El informe es para el martes", turkish: "Rapor salıya KADAR (teslim tarihi)." },
        { type: "speaking", spanish: "Compré el vestido por veinte euros", turkish: "Elbiseyi yirmi euroYA (karşılığında) aldım." },
        { type: "speaking", spanish: "Gracias por venir a mi fiesta", turkish: "Partime geldiğin İÇİN (sebebiyle) teşekkürler." }
      ]
    },
    {
      id: "b1_u8_n8",
      type: "theory",
      title: "Laboratorio de Slang: Expresiones Fijas",
      content: {
        concept: "A veces, Por y Para no siguen reglas lógicas claras. Forman parte de 'Frases Hechas' (Idioms) que debes aprender de memoria para sonar como una nativa.\n\n### Expresiones con POR:\n• **Por si acaso** (Her ihtimale karşı) ➔ *Lleva el paraguas por si acaso.*\n• **Por fin** (Nihayet / Sonunda) ➔ *¡Por fin es viernes!*\n• **Por supuesto** (Elbette / Tabii ki).\n• **Por los pelos** (Kıl payı) ➔ *Aprobé el examen por los pelos.*\n\n### Expresiones con PARA:\n• **Para siempre** (Sonsuza dek).\n• **No estar para bromas** (Şaka kaldıracak havada olmamak) ➔ *Hoy he tenido un mal día, no estoy para bromas.*\n• **Para colmo** (Üstelik / Bir de bu yetmezmiş gibi) ➔ *Llegué tarde y, para colmo, perdí las llaves.*",
        examples: [
          { es: "He traído más dinero por si acaso.", tr: "Her ihtimale karşı daha fazla para getirdim." },
          { es: "Te amaré para siempre.", tr: "Seni sonsuza dek seveceğim." },
          { es: "Por fin hemos llegado.", tr: "Nihayet vardık." }
        ]
      }
    },
    {
      id: "b1_u8_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Viaje Mixto",
      content: {
        concept: "Vamos a deconstruir una oración larga que usa ambas preposiciones en la misma frase. Observa cómo el 'por' indica el camino y el 'para' indica el objetivo final.",
        examples: [{ es: "Pasaremos por el supermercado para comprar la cena.", tr: "Akşam yemeğini almak için süpermarkete uğrayacağız (içinden geçeceğiz)." }],
        analysis: [
          { word: "Pasaremos", type: "verb", literal: "Geçeceğiz / Uğrayacağız", explanation: "Verbo PASAR en Futuro de Indicativo.", examples: [] },
          { word: "por", type: "connector", literal: "yoluyla / içinden", explanation: "Preposición que indica que el supermercado es un lugar de tránsito, no el destino final del viaje.", examples: [] },
          { word: "el supermercado", type: "noun", literal: "süpermarket", explanation: "Objeto que funciona como medio/camino.", examples: [] },
          { word: "para", type: "connector", literal: "amacıyla (-mek için)", explanation: "Preposición que marca la FINALIDAD de haber parado en el supermercado.", examples: [] },
          { word: "comprar", type: "verb", literal: "satın almak", explanation: "Verbo en infinitivo. Acción objetivo.", examples: [] },
          { word: "la cena", type: "noun", literal: "akşam yemeği", explanation: "Objeto final de la compra.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u8_n10",
      type: "theory",
      title: "Caja de Herramientas: Razones y Metas",
      content: {
        concept: "Para usar correctamente POR y PARA, necesitas vocabulario que te ayude a expresar tus causas y tus destinos.\n\n### Vocabulario de Causa (POR):\n• **El motivo / La causa** (Sebep / Neden)\n• **La culpa** (Suç) ➔ *Por culpa de la lluvia...*\n• **El precio** (Fiyat) ➔ *Lo compré por...*\n• **El intercambio** (Takas)\n\n### Vocabulario de Meta (PARA):\n• **El propósito / El objetivo** (Amaç / Hedef)\n• **El destino** (Destinasyon / Varış yeri)\n• **El destinatario** (Alıcı)\n• **La fecha límite** (Son teslim tarihi)",
        examples: [
          { es: "Perdí mi trabajo por culpa de mi jefe.", tr: "Patronumun suçu yüzünden işimi kaybettim." },
          { es: "Mi objetivo principal es para el próximo mes.", tr: "Ana hedefim gelecek ay için (kadar)." },
          { es: "¿Cuál es el motivo por el que estás triste?", tr: "Üzgün olmanın sebebi (nedeni) nedir?" }
        ]
      }
    },
    {
      id: "b1_u8_n11",
      type: "theory",
      title: "Taller de Producción: Justificaciones y Metas",
      content: {
        concept: "Ha llegado el momento de poner a prueba el gran dilema.\n\n**Instrucciones:**\nEscribe un mensaje a tu jefe o a un amigo (mínimo 6 líneas) explicando por qué no pudiste hacer algo y cuáles son tus planes para solucionarlo.\n\n1. Usa POR al menos dos veces (una para causa y otra para medio/tránsito).\n2. Usa PARA al menos dos veces (una para finalidad y otra para fecha límite/destinatario).\n3. Usa una expresión de slang (Por si acaso, Para colmo...).\n\n**Inspiración:** 'Hola jefe, no pude enviar el informe **por** un corte de internet. **Para** colmo, mi ordenador se rompió. Lo enviaré **por** teléfono **para** que lo tengas **para** mañana...'",
        examples: []
      }
    },
    {
      id: "b1_u8_n12",
      type: "exam",
      title: "Examen de Unidad: Por vs Para",
      content: {
        concept: "Demuestra que la trampa del 'için' turco ya no existe para ti. Elige la preposición correcta en cada situación.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "¿Qué preposición indica FINALIDAD o PROPÓSITO?", options: ["Por", "Para", "De"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué preposición indica CAUSA o MOTIVO?", options: ["Por", "Para", "En"], correct: 0 },
          { type: "multiple_choice", question: "Completa: 'Gracias ______ venir a mi fiesta'.", options: ["para", "por"], correct: 1 },
          { type: "multiple_choice", question: "Completa: 'Este regalo es ______ mi hermana'.", options: ["para", "por"], correct: 0 },
          { type: "multiple_choice", question: "Hablamos ______ teléfono anoche.", options: ["para", "por"], correct: 1 },
          { type: "multiple_choice", question: "Viajamos ______ Madrid (Madrid'in içinden geçtik).", options: ["para", "por"], correct: 1 },
          { type: "multiple_choice", question: "Vamos ______ Madrid (Hedefimiz Madrid).", options: ["para", "por"], correct: 0 },
          { type: "multiple_choice", question: "Tengo que terminar el trabajo ______ el lunes (Fecha límite).", options: ["para", "por"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Por si acaso'?", options: ["Sonsuza dek", "Her ihtimale karşı", "Kıl payı"], correct: 1 },
          { type: "multiple_choice", question: "No quiero salir ______ el frío (Soğuk yüzünden).", options: ["para", "por"], correct: 1 },
          { type: "multiple_choice", question: "Lo hice ______ ti (Senin yerine / Senin aşkına).", options: ["para", "por"], correct: 1 },
          { type: "multiple_choice", question: "Lo hice ______ ti (Sana hediye olarak).", options: ["para", "por"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Para siempre'?", options: ["Her zaman", "Sonsuza dek", "Nihayet"], correct: 1 },
          { type: "multiple_choice", question: "Pagué veinte euros ______ esta camisa (Intercambio).", options: ["para", "por"], correct: 1 },
          { type: "multiple_choice", question: "Aprobé el examen ______ los pelos (Kıl payı).", options: ["para", "por"], correct: 1 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Bunu senin için satın aldım (Hediye).", spanish: "Compré esto para ti", words: ["Compré", "esto", "para", "ti", "por"] },
          { type: "syntax", turkish: "Yardımın için teşekkürler.", spanish: "Gracias por tu ayuda", words: ["Gracias", "por", "tu", "ayuda", "para"] },
          { type: "syntax", turkish: "Sınavı geçmek için çok çalışıyorum.", spanish: "Estudio mucho para aprobar el examen", words: ["Estudio", "mucho", "para", "aprobar", "el", "examen", "por"] },
          { type: "syntax", turkish: "Yağmur yüzünden (sebebiyle) iptal ettik.", spanish: "Lo cancelamos por la lluvia", words: ["Lo", "cancelamos", "por", "la", "lluvia", "para"] },
          { type: "syntax", turkish: "Mesajı e-posta yoluyla (araç) gönderdim.", spanish: "Envié el mensaje por correo", words: ["Envié", "el", "mensaje", "por", "correo", "para"] },
          { type: "syntax", turkish: "Ödev yarına kadar (teslim tarihi) hazır olmalı.", spanish: "La tarea es para mañana", words: ["La", "tarea", "es", "para", "mañana", "por"] },
          { type: "syntax", turkish: "Her ihtimale karşı şemsiyeyi al.", spanish: "Lleva el paraguas por si acaso", words: ["Lleva", "el", "paraguas", "por", "si", "acaso", "para"] },
          { type: "syntax", turkish: "Kötü bir gün geçirdim, şaka kaldıracak havada değilim.", spanish: "He tenido un mal día no estoy para bromas", words: ["He", "tenido", "un", "mal", "día", "no", "estoy", "para", "bromas"] },
          { type: "syntax", turkish: "Parkın içinden yürüyelim mi?", spanish: "Caminamos por el parque", words: ["Caminamos", "por", "el", "parque", "para"] },
          { type: "syntax", turkish: "Sonsuza dek seni seveceğim.", spanish: "Te amaré para siempre", words: ["Te", "amaré", "para", "siempre", "por"] },
          { type: "syntax", turkish: "Nihayet (sonunda) cuma!", spanish: "Por fin es viernes", words: ["Por", "fin", "es", "viernes", "Para"] },
          { type: "syntax", turkish: "Bu parayı arabayla takas ediyorum.", spanish: "Doy este dinero por el coche", words: ["Doy", "este", "dinero", "por", "el", "coche", "para"] },
          { type: "syntax", turkish: "Senin uğruna / senin yerine çalışıyorum.", spanish: "Trabajo por ti", words: ["Trabajo", "por", "ti", "para"] },
          { type: "syntax", turkish: "Sana vermek için (amacıyla) çalışıyorum.", spanish: "Trabajo para ti", words: ["Trabajo", "para", "ti", "por"] },
          { type: "syntax", turkish: "Ve üstelik (bir de bu yetmezmiş gibi) yağmur yağıyor.", spanish: "Y para colmo está lloviendo", words: ["Y", "para", "colmo", "está", "lloviendo", "por"] }
        ]
      }
    }
  ]
};
/**
 * UNIDAD 2: EL ARTE DE SUSTITUIR (NIVEL A2)
 * Enfoque: Pronombres de Objeto Directo (LO, LA, LOS, LAS)
 * Estructura: 12 Nodos con Teoría Extensa y Práctica Masiva
 */

export const unidad2 = {
  id: "a2_u2",
  title: "Unidad 2: El Arte de Sustituir",
  description: "Dominio de los pronombres de Objeto Directo para evitar la repetición y hablar con fluidez.",
  nodes: [
    {
      id: "a2_u2_n1",
      type: "theory",
      title: "Teoría I: ¿Qué es el Objeto Directo?",
      content: {
        concept: "Para hablar como una nativa, necesitas dejar de repetir palabras. Si alguien te pregunta: '¿Quieres el café?', no respondes 'Sí, quiero el café'. Respondes: 'Sí, **lo** quiero'.\n\n1. ¿Cómo identificarlo?\nEl Objeto Directo (OD) es la cosa o persona que recibe la acción del verbo directamente. Para encontrarlo, hazle la pregunta **'¿QUÉ?'** o **'¿A QUIÉN?'** al verbo.\n• *Yo compro un libro.* ➔ ¿Qué compro? ➔ **Un libro** (Este es el OD).\n\n 2. Los 4 protagonistas\nEn español, sustituimos ese objeto según su género y su cantidad:\n• **LO**: Masculino singular (El café, el libro, Carlos).\n• **LA**: Femenino singular (La manzana, la mesa, María).\n• **LOS**: Masculino plural (Los libros, los coches).\n• **LAS**: Femenino plural (Las llaves, las fotos).\n\n 3. La posición en la frase\nRegla fundamental: El pronombre va **SIEMPRE ANTES** del verbo conjugado.\n• *Yo compro el pan* ➔ Yo **lo** compro.\n• *Ella come las naranjas* ➔ Ella **las** come.\n\n🇹🇷 LÓGICA TURCA: En turco, esto equivale al sufijo acusativo (-ı, -i, -u, -ü). Cuando dices 'Onu seviyorum', ese 'Onu' es nuestro 'Lo' o 'La'.",
        examples: [
          { es: "Yo bebo el agua. ➔ Yo la bebo.", tr: "Suyu içerim. ➔ Onu içerim." },
          { es: "Tú ves a Carlos. ➔ Tú lo ves.", tr: "Carlos'u görüyorsun. ➔ Onu görüyorsun." },
          { es: "Nosotros leemos los libros. ➔ Nosotros los leemos.", tr: "Kitapları okuyoruz. ➔ Onları okuyoruz." }
        ]
      }
    },
    {
      id: "a2_u2_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Sustitución Directa)",
      exercises: [
        { type: "syntax", turkish: "Onu (erkek/eşya) istiyorum.", spanish: "Yo lo quiero", words: ["Yo", "lo", "quiero", "la", "quieres"] },
        { type: "syntax", turkish: "Onu (kadın/eşya) içiyorum.", spanish: "Yo la bebo", words: ["Yo", "la", "bebo", "lo", "bebes"] },
        { type: "syntax", turkish: "Onları (kitapları) okuyoruz.", spanish: "Nosotros los leemos", words: ["Nosotros", "los", "leemos", "las", "leen"] },
        { type: "syntax", turkish: "Anahtarları (las llaves) alıyorum.", spanish: "Yo las tomo", words: ["Yo", "las", "tomo", "los", "toma"] },
        { type: "syntax", turkish: "Carlos'u görüyorum.", spanish: "Yo lo veo", words: ["Yo", "lo", "veo", "la", "ves"] },
        { type: "syntax", turkish: "Elmayı yiyorsun.", spanish: "Tú la comes", words: ["Tú", "la", "comes", "lo", "como"] },
        { type: "syntax", turkish: "Filmi izliyoruz.", spanish: "Nosotros la vemos", words: ["Nosotros", "la", "vemos", "lo", "visto"] },
        { type: "syntax", turkish: "Arabaları yıkıyorlar.", spanish: "Ellos los lavan", words: ["Ellos", "los", "lavan", "las", "lava"] },
        { type: "syntax", turkish: "Mektubu yazıyorum.", spanish: "Yo la escribo", words: ["Yo", "la", "escribo", "lo", "escrito"] },
        { type: "syntax", turkish: "Kahveyi hazırlıyorsun.", spanish: "Tú lo preparas", words: ["Tú", "lo", "preparas", "la", "preparar"] },
        { type: "syntax", turkish: "Seni seviyorum.", spanish: "Yo te quiero", words: ["Yo", "te", "quiero", "lo", "me"] },
        { type: "syntax", turkish: "Beni duyuyor musun?", spanish: "Me escuchas tú", words: ["Me", "escuchas", "tú", "lo", "te"] },
        { type: "syntax", turkish: "Sizi (ustedes) anlıyorum.", spanish: "Yo los comprendo", words: ["Yo", "los", "comprendo", "la", "comprendes"] },
        { type: "syntax", turkish: "Bizi bekliyorlar.", spanish: "Ellos nos esperan", words: ["Ellos", "nos", "esperan", "lo", "espera"] },
        { type: "syntax", turkish: "Ödevleri yapıyorum.", spanish: "Yo los hago", words: ["Yo", "los", "hago", "lo", "hace"] }
      ]
    },
    {
      id: "a2_u2_n3",
      type: "theory",
      title: "Teoría II: Posición en Verbos Dobles (Infinitivos)",
      content: {
        concept: "Cuando tienes una oración con dos verbos (Perífrasis), como 'Quiero comer' o 'Voy a ver', el español te da **LIBERTAD TOTAL** para poner el pronombre en dos lugares diferentes. Ambos son 100% correctos.\n\nOpción A: Delante de todo\nPones el pronombre antes del primer verbo (el que está conjugado).\n• *LO quiero ver.* (Onu görmek istiyorum).\n\nOpción B: Pegado al final\nPones el pronombre 'pegado' como una cola al final del infinitivo, formando una sola palabra larga.\n• *Quiero verLO.*\n\n⚠️ ¡IMPORTANTE!: No puedes ponerlo en medio de los dos verbos. O va al principio de todo, o al final de todo.\n\nEsto también ocurre con el **Gerundio** (-ando/iendo):\n• *LO estoy comiendo.* ➔ Correcto.\n• *Estoy comiéndoLO.* ➔ Correcto (Fíjate que al ponerlo al final, la palabra suele ganar un acento gráfico/tilde).",
        examples: [
          { es: "Tengo que lavar el coche. ➔ Lo tengo que lavar / Tengo que lavarlo.", tr: "Arabayı yıkamam lazım. ➔ Onu yıkamam lazım." },
          { es: "Voy a comprar las flores. ➔ Las voy a comprar / Voy a comprarlas.", tr: "Çiçekleri satın alacağım." },
          { es: "Ella está escribiendo la carta. ➔ Ella la está escribiendo / Está escribiéndola.", tr: "O mektubu yazıyor." }
        ]
      }
    },
    {
      id: "a2_u2_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Posición y Ritmo)",
      exercises: [
        { type: "speaking", spanish: "Lo quiero comprar", turkish: "Onu satın almak istiyorum." },
        { type: "speaking", spanish: "Quiero comprarlo", turkish: "Onu satın almak istiyorum. (Alternativa)" },
        { type: "speaking", spanish: "Las voy a llamar", turkish: "Onları arayacağım." },
        { type: "speaking", spanish: "Voy a llamarlas", turkish: "Onları arayacağım. (Alternativa)" },
        { type: "speaking", spanish: "La tengo que ver", turkish: "Onu görmem lazım." },
        { type: "speaking", spanish: "Tengo que verla", turkish: "Onu görmem lazım. (Alternativa)" },
        { type: "speaking", spanish: "Lo estamos haciendo", turkish: "Onu yapıyoruz." },
        { type: "speaking", spanish: "Estamos haciéndolo", turkish: "Onu yapıyoruz. (Alternativa)" },
        { type: "speaking", spanish: "No las puedo encontrar", turkish: "Onları bulamıyorum." },
        { type: "speaking", spanish: "No puedo encontrarlas", turkish: "Onları bulamıyorum. (Alternativa)" },
        { type: "speaking", spanish: "Ella lo va a traer", turkish: "O onu getirecek." },
        { type: "speaking", spanish: "Él la está esperando", turkish: "O onu bekliyor." },
        { type: "speaking", spanish: "Ustedes los deben leer", turkish: "Onları okumalısınız." },
        { type: "speaking", spanish: "Nosotros la queremos probar", turkish: "Onu denemek istiyoruz." },
        { type: "speaking", spanish: "Queremos probarla", turkish: "Onu denemek istiyoruz. (Alternativa)" }
      ]
    },
    {
      id: "a2_u2_n5",
      type: "theory",
      title: "Teoría III: Lógica Contrastiva y Comparaciones",
      content: {
        concept: "En esta sección vamos a conectar los objetos con su calidad. Cuando vas de compras, no solo sustituyes el objeto, también lo comparas.\n\n### 1. Comparaciones de Superioridad e Inferioridad\nEstructura: **MÁS / MENOS + Adjetivo + QUE**.\n• *Esta falda es MÁS barata QUE aquella.* (Bu etek şundan DAHA ucuzdur).\n• *Los zapatos son MENOS caros QUE el bolso.*\n\n### 2. Comparaciones de Igualdad\nEstructura: **TAN + Adjetivo + COMO**.\n• *Este vestido es TAN bonito COMO el tuyo.* (Bu elbise seninki KADAR güzel).\n\n### 3. Los Irregulares\nNo decimos 'más bueno' o 'más malo'. Decimos:\n• Bueno ➔ **Mejor** (Daha iyi)\n• Malo ➔ **Peor** (Daha kötü)\n• Grande ➔ **Mayor** (Daha büyük - edad)\n• Pequeño ➔ **Menor** (Daha küçük - edad)\n\n💡 REGLA CLAVE: Cuando comparas dos objetos y ya mencionaste el primero, usa el pronombre para el segundo. 'Este coche es mejor que EL MÍO'.",
        examples: [
          { es: "Mi casa es más grande que la tuya.", tr: "Benim evim seninkinden daha büyüktür." },
          { es: "El español es tan fácil como el turco.", tr: "İspanyolca Türkçe kadar kolaydır." },
          { es: "Esta película es peor que la otra.", tr: "Bu film diğerinden daha kötüdür." }
        ]
      }
    },
    {
      id: "a2_u2_n6",
      type: "reading",
      title: "Lectura y Audio: En las rebajas",
      content: {
        text: "Hoy es el primer día de rebajas en Madrid y las tiendas están llenas de gente. María y su amiga Lucía están buscando ropa nueva.\n\n— María: ¡Lucía, mira este vestido rojo! Es precioso y es más barato que el azul.\n— Lucía: Es verdad, pero yo prefiero aquel verde. Es tan elegante como el rojo pero me gusta más el color.\n— María: ¿Lo vas a comprar?\n— Lucía: No lo sé todavía. Tengo que probármelo primero. ¿Y tú? ¿Has visto esos zapatos negros?\n— María: Sí, los he visto, pero son muy caros. Prefiero buscar unos más económicos. ¡Oh, mira estas gafas de sol! ¡Me encantan!\n— Lucía: Son geniales. ¡Lévatelas! Son mejores que las mías.",
        translation: "Bugün Madrid'de indirimlerin ilk günü ve mağazalar insanlarla dolu. Maria ve arkadaşı Lucia yeni kıyafetler arıyorlar.\n\n— Maria: Lucia, şu kırmızı elbiseye bak! Çok güzel ve maviden daha ucuz.\n— Lucia: Doğru, ama ben şu yeşili tercih ederim. Kırmızı kadar zarif ama rengini daha çok sevdim.\n— Maria: Onu satın alacak mısın?\n— Lucia: Henüz bilmiyorum. Önce onu üzerimde denemem lazım. Ya sen? Şu siyah ayakkabıları gördün mü?\n— Maria: Evet, onları gördüm ama çok pahalılar. Daha ekonomik olanları aramayı tercih ederim. Oh, şu güneş gözlüklerine bak! Onlara bayıldım!\n— Lucia: Harikalar. Onları al! Benimkilerden daha iyiler."
      }
    },
    {
      id: "a2_u2_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sustitución + Comparación)",
      exercises: [
        { type: "syntax", turkish: "Bu elbise şundan daha güzel.", spanish: "Este vestido es más bonito que aquel", words: ["Este", "vestido", "es", "más", "bonito", "que", "aquel", "tan"] },
        { type: "syntax", turkish: "Onu (kadın) satın almak istiyorum.", spanish: "La quiero comprar", words: ["La", "quiero", "comprar", "lo", "compro"] },
        { type: "syntax", turkish: "Onları (erkekler/eşyalar) görmem lazım.", spanish: "Tengo que verlos", words: ["Tengo", "que", "verlos", "verlas", "lo"] },
        { type: "syntax", turkish: "Kız kardeşim benden daha zeki.", spanish: "Mi hermana es más inteligente que yo", words: ["Mi", "hermana", "es", "más", "inteligente", "que", "yo"] },
        { type: "syntax", turkish: "Bu kitap diğerinden daha kötü (peor).", spanish: "Este libro es peor que el otro", words: ["Este", "libro", "es", "peor", "que", "el", "otro", "malo"] },
        { type: "syntax", turkish: "Onu (lo) zaten hazırladım.", spanish: "Ya lo he preparado", words: ["Ya", "lo", "he", "preparado", "la", "preparar"] },
        { type: "syntax", turkish: "İspanyolca Türkçe kadar zor değil.", spanish: "El español no es tan difícil como el turco", words: ["El", "español", "no", "es", "tan", "difícil", "como", "el", "turco"] },
        { type: "syntax", turkish: "Anahtarlar masanın üzerinde, onları al.", spanish: "Las llaves están en la mesa tómalas", words: ["Las", "llaves", "están", "en", "la", "mesa", "tómalas", "tómalos"] },
        { type: "syntax", turkish: "O (erkek) benden daha büyük (mayor).", spanish: "Él es mayor que yo", words: ["Él", "es", "mayor", "que", "yo", "más", "grande"] },
        { type: "syntax", turkish: "Çorbayı (la sopa) içiyorum.", spanish: "Yo la bebo", words: ["Yo", "la", "bebo", "lo", "bebes"] },
        { type: "speaking", spanish: "Este vestido es más bonito que aquel", turkish: "Bu elbise şundan daha güzel." },
        { type: "speaking", spanish: "La quiero comprar ahora mismo", turkish: "Onu şu an satın almak istiyorum." },
        { type: "speaking", spanish: "Mi hermano es menor que yo", turkish: "Erkek kardeşim benden daha küçüktür." },
        { type: "speaking", spanish: "Tengo que lavarlo mañana", turkish: "Onu yarın yıkamam lazım." },
        { type: "speaking", spanish: "Este libro es mejor que el tuyo", turkish: "Bu kitap seninkinden daha iyidir." },
        { type: "speaking", spanish: "Las voy a comprar para mi madre", turkish: "Onları annem için satın alacağım." },
        { type: "speaking", spanish: "Ella es tan alta como tú", turkish: "O senin kadar uzun boylu." },
        { type: "speaking", spanish: "No los puedo encontrar", turkish: "Onları bulamıyorum." },
        { type: "speaking", spanish: "Esta comida es peor que la de ayer", turkish: "Bu yemek dünküne göre daha kötü." },
        { type: "speaking", spanish: "Ya lo he visto tres veces", turkish: "Onu zaten üç kez izledim." }
      ]
    },
    {
      id: "a2_u2_n8",
      type: "theory",
      title: "Teoría IV: Apuntando Objetos (Demostrativos)",
      content: {
        concept: "Para sustituir un objeto correctamente, primero debemos saber señalarlo en el espacio. Los demostrativos en español dependen de la **distancia** entre el hablante y el objeto.\n\n### 1. CERCA (Aquí / Burası)\n• **Este / Esta**: Para lo que puedes tocar.\n• **Estos / Estas**: Plural.\n*Ej: Este libro es mío.*\n\n### 2. DISTANCIA MEDIA (Ahí / Şurası)\n• **Ese / Esa**: Para lo que está cerca de la persona que escucha.\n• **Esos / Esas**: Plural.\n*Ej: Pásame ese bolígrafo.*\n\n### 3. LEJOS (Allí / Orası)\n• **Aquel / Aquella**: Para lo que está lejos de ambos.\n• **Aquellos / Aquellas**: Plural.\n*Ej: Aquella montaña es muy alta.*\n\n💡 TRUCO: Los demostrativos masculinos singulares terminan en **-E** (Este, Ese) o **-L** (Aquel). ¡Cuidado, no terminan en -O!",
        examples: [
          { es: "Esta manzana está rica.", tr: "Bu elma lezzetlidir." },
          { es: "Esa ventana está abierta.", tr: "Şu pencere açıktır." },
          { es: "Aquellos hombres son mis tíos.", tr: "O (uzaktaki) adamlar benim amcalarım." }
        ]
      }
    },
    {
      id: "a2_u2_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Doble Pronombre",
      content: {
        concept: "Analizaremos el momento en que un pronombre se une a un verbo compuesto. Es un fenómeno único del español que permite crear 'palabras tren'. \n\nRecuerda: Si el verbo termina en -AR / -ER / -IR, puedes pegar el pronombre al final.",
        examples: [{ es: "Yo voy a comprarla para ti mañana.", tr: "Onu (kadın/eşya) yarın senin için satın alacağım." }],
        analysis: [
          { word: "Yo", type: "pronoun", literal: "Ben", explanation: "Sujeto de la oración. Posición inicial.", examples: [] },
          { word: "voy a", type: "verb", literal: "-eceğim (gelecek zaman yardımcı fiili)", explanation: "Estructura de futuro próximo. Indica intención.", examples: [] },
          { word: "comprar", type: "verb", literal: "satın almak", explanation: "Verbo principal en infinitivo. Aquí es donde se va a 'pegar' el pronombre.", examples: [] },
          { word: "la", type: "pronoun", literal: "onu", explanation: "Pronombre de Objeto Directo femenino. Está pegado al verbo 'comprar' formando una sola unidad sonora.", examples: [] },
          { word: "para ti", type: "pronoun", literal: "senin için", explanation: "Beneficiario de la acción.", examples: [] },
          { word: "mañana", type: "adverb", literal: "yarın", explanation: "Marcador temporal de futuro.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u2_n10",
      type: "theory",
      title: "Herramientas: Vocabulario de Compras y Tallas",
      content: {
        concept: "Para moverte por una tienda, necesitas estas palabras y expresiones de supervivencia.\n\n### Prendas de vestir:\n• La camiseta (Tişört), Los pantalones (Pantolon), El vestido (Elbise), La falda (Etek), Los zapatos (Ayakkabı).\n\n### Características:\n• Algodón (Pamuk), Cuero (Deri), Seda (İpek).\n• Estampado (Desenli), Liso (Düz).\n\n### Preguntas útiles:\n• ¿Me lo puedo probar? (Onu deneyebilir miyim?)\n• ¿Tienen una talla más grande/pequeña? (Daha büyük/küçük bir bedeniniz var mı?)\n• ¿Dónde están los probadores? (Soyunma kabinleri nerede?)\n• Me queda bien / Me queda mal (Üzerime tam oldu / Olmadı).",
        examples: [
          { es: "¿Cuánto cuesta esta camiseta de algodón?", tr: "Bu pamuklu tişört ne kadar?" },
          { es: "Esta talla me queda muy pequeña.", tr: "Bu beden bana çok küçük geliyor." },
          { es: "Los probadores están al final del pasillo.", tr: "Kabinler koridorun sonunda." }
        ]
      }
    },
    {
      id: "a2_u2_n11",
      type: "theory",
      title: "Taller de Producción: Una tarde en el Centro Comercial",
      content: {
        concept: "Es el momento de poner en práctica los pronombres y las comparaciones.\n\n**Instrucciones:**\nEscribe un pequeño párrafo (mínimo 5 líneas) describiendo una situación de compras. \n1. Menciona al menos 3 objetos (ropa, zapatos, etc.).\n2. Usa pronombres LO, LA, LOS o LAS para no repetir el nombre de los objetos.\n3. Compara dos objetos usando 'más que' o 'tan como'.\n\n**Ejemplo:**\n'He visto una chaqueta roja. Es muy bonita pero no **la** he comprado porque es más cara que la negra...'",
        examples: []
      }
    },
    {
      id: "a2_u2_n12",
      type: "exam",
      title: "Examen de Unidad: Objetos y Comparaciones",
      content: {
        concept: "Demuestra que dominas los pronombres de Objeto Directo, los demostrativos y las comparaciones en este examen final de unidad.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué pronombre sustituye a 'Las manzanas'?", options: ["Los", "Las", "La"], correct: 1 },
          { type: "multiple_choice", question: "Si quiero decir 'Onu (erkek/eşya) görüyorum', digo:", options: ["La veo", "Lo veo", "Lo ves"], correct: 1 },
          { type: "multiple_choice", question: "Posición correcta: 'Quiero comprar la casa'.", options: ["La quiero comprar.", "Quiero la comprar.", "Quiero comprarlas."], correct: 0 },
          { type: "multiple_choice", question: "Comparativo: 'Este libro es _____ interesante _____ aquel'.", options: ["más / que", "tan / que", "más / como"], correct: 0 },
          { type: "multiple_choice", question: "Irregular: 'Tu café es _____ que el mío' (Daha iyi).", options: ["más bueno", "mejor", "bien"], correct: 1 },
          { type: "multiple_choice", question: "Demostrativo: '_____ zapatos que tengo puestos son cómodos'.", options: ["Ese", "Estos", "Aquel"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa '¿Me lo puedo probar?'", options: ["Onu alabilir miyim?", "Onu deneyebilir miyim?", "Onu görebilir miyim?"], correct: 1 },
          { type: "multiple_choice", question: "Pronombre para 'El libro':", options: ["Lo", "La", "Le"], correct: 0 },
          { type: "multiple_choice", question: "Sustituye: 'Ella lee las cartas'.", options: ["Ella los lee.", "Ella la lee.", "Ella las lee."], correct: 2 },
          { type: "multiple_choice", question: "Comparación de igualdad: 'Pedro es _____ alto _____ su padre'.", options: ["más / que", "tan / como", "tan / que"], correct: 1 },
          { type: "syntax", turkish: "Onu (la) yarın göreceğim.", spanish: "La voy a ver mañana", words: ["La", "voy", "a", "ver", "mañana", "lo", "visto"] },
          { type: "syntax", turkish: "Bu araba şundan daha hızlı.", spanish: "Este coche es más rápido que aquel", words: ["Este", "coche", "es", "más", "rápido", "que", "aquel"] },
          { type: "syntax", turkish: "Meyveleri (las frutas) seviyorum, onları yiyorum.", spanish: "Me gustan las frutas las como", words: ["Me", "gustan", "las", "frutas", "las", "como", "los"] },
          { type: "syntax", turkish: "Onu (lo) anlamıyorum.", spanish: "No lo comprendo", words: ["No", "lo", "comprendo", "la", "comprendes"] },
          { type: "syntax", turkish: "Seni bekleyebilirim.", spanish: "Te puedo esperar", words: ["Te", "puedo", "esperar", "me", "esperas"] },
          { type: "syntax", turkish: "Onu (la) satın almam lazım.", spanish: "Tengo que comprarla", words: ["Tengo", "que", "comprarla", "comprarlo", "la"] },
          { type: "syntax", turkish: "Siz benden daha iyisiniz (mejor).", spanish: "Ustedes son mejores que yo", words: ["Ustedes", "son", "mejores", "que", "yo", "buenos"] },
          { type: "syntax", turkish: "Onu (lo) masaya koy.", spanish: "Ponlo en la mesa", words: ["Ponlo", "en", "la", "mesa", "Ponla", "el"] },
          { type: "syntax", turkish: "Bu (kadın) şundan daha zayıf.", spanish: "Esta es más delgada que esa", words: ["Esta", "es", "más", "delgada", "que", "esa", "aquel"] },
          { type: "syntax", turkish: "Ceketi (la chaqueta) yıkıyorum.", spanish: "Yo la lavo", words: ["Yo", "la", "lavo", "lo", "lavas"] }
        ]
      }
    }
  ]
};
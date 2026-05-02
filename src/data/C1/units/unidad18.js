/**
 * UNIDAD 18 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Dialectología Americana, Slang Latinoamericano.
 * Tema: Vocabulario, acentos y cultura de México, Cono Sur, Andes y Caribe.
 */

export const unidad18 = {
  id: "c1_u18",
  title: "Unidad 18: Voces de América",
  description: "Cruza el océano y sumérgete en el español latinoamericano. Domina el vocabulario y los acentos de México, Argentina, Colombia y el Caribe.",
  nodes: [
    {
      id: "c1_u18_n1",
      type: "theory",
      title: "Teoría I: El Español de México",
      content: {
        concept: "México es el país con más hispanohablantes del mundo. Su español es melódico, claro, y está lleno de expresiones únicas que escucharás en miles de películas y series.\n\n### El Diccionario Mexicano:\n• **Güey / Wey:** Literalmente significa 'tonto', pero se usa exactamente igual que 'Tío' en España o 'Kanka/Dostum' en Turquía. *'¿Qué onda, güey?' (Ne haber kanka?)*.\n• **Chido / Padre:** Genial, estupendo (Harika). *'¡Qué chido está tu carro!'*.\n• **La neta:** La verdad, en serio (Gerçek / Harbi mi?). *'La neta, no quiero ir'.*\n• **Ahorita:** El tiempo mexicano por excelencia. Puede significar 'ahora mismo', 'en un rato' o 'nunca'. *'Ahorita lo hago'.*\n• **Fresa:** Una persona rica, superficial o snob (Tiki). *'Esa chica es muy fresa'.*\n• **Mande:** Es la forma súper educada de decir '¿Qué?' cuando alguien te llama (Efendim?).\n• **No mames / No manches:** Expresión de asombro extrema (Hadi canım! / Yok artık!). 'No manches' es la versión educada.",
        examples: [
          { es: "Oye güey, la neta es que tu fiesta estuvo padrísima.", tr: "Baksana kanka, gerçeği söylemek gerekirse partin harikaydı." },
          { es: "¡No manches! ¿En serio te vas a casar?", tr: "Hadi canım (yok artık)! Gerçekten evlenecek misin?" },
          { es: "— Carlos. — ¿Mande?", tr: "— Carlos. — Efendim?" }
        ]
      }
    },
    {
      id: "c1_u18_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (México)",
      exercises: [
        { type: "syntax", turkish: "Naber kanka? (Qué onda).", spanish: "Qué onda güey", words: ["Qué", "onda", "güey", "tío"] },
        { type: "syntax", turkish: "Arabası çok havalı (chido).", spanish: "Su carro está muy chido", words: ["Su", "carro", "está", "muy", "chido", "coche"] },
        { type: "syntax", turkish: "Gerçek şu ki gitmek istemiyorum (La neta).", spanish: "La neta no quiero ir", words: ["La", "neta", "no", "quiero", "ir", "verdad"] },
        { type: "syntax", turkish: "Hadi canım! Ciddi misin? (No manches).", spanish: "No manches en serio", words: ["No", "manches", "en", "serio", "mames"] },
        { type: "syntax", turkish: "Hemen (Ahorita) yapacağım.", spanish: "Ahorita lo voy a hacer", words: ["Ahorita", "lo", "voy", "a", "hacer", "ahora"] },
        { type: "syntax", turkish: "O (kadın) çok tiki (fresa).", spanish: "Ella es muy fresa", words: ["Ella", "es", "muy", "fresa", "fresas"] },
        { type: "syntax", turkish: "Film harikaydı (padrísima).", spanish: "La película estuvo padrísima", words: ["La", "película", "estuvo", "padrísima", "estaba"] },
        { type: "syntax", turkish: "Biraz sohbet edelim mi? (platicar).", spanish: "Vamos a platicar un rato", words: ["Vamos", "a", "platicar", "un", "rato", "hablar"] },
        { type: "syntax", turkish: "Baksana dostum (Oye güey).", spanish: "Oye güey", words: ["Oye", "güey", "oye", "tío"] },
        { type: "syntax", turkish: "Efendim? (Kibarca ne dedin - Mande).", spanish: "Mande usted", words: ["Mande", "usted", "Manda"] }
      ]
    },
    {
      id: "c1_u18_n3",
      type: "theory",
      title: "Teoría II: El Cono Sur (Argentina, Uruguay y Chile)",
      content: {
        concept: "Bajamos al sur del continente. Aquí el acento tiene mucha influencia italiana (especialmente en Buenos Aires) y el vocabulario cambia por completo.\n\n### Argentina y Uruguay (El Lunfardo):\n• **Che:** Oye / Mira / Kanka. Sirve para llamar la atención. *'Che, vení acá'.*\n• **Pibe / Piba:** Chico, muchacho, joven. *'Ese pibe juega muy bien'.*\n• **Boludo / Pelotudo:** Literalmente es un insulto (Aptal/Salak), pero entre amigos se usa como 'Tío' o 'Güey'. (Pelotudo es más agresivo). *'¿Qué hacés, boludo?'*.\n• **Re:** Se usa como prefijo para decir 'Muy' o 'Mucho'. *'Estoy re cansado' (Çok yorgunum).* *'Es re lindo' (Çok güzel).*\n• **Quilombo:** Un desastre, un lío grande. *'Esta oficina es un quilombo'.*\n\n### Chile (El español más rápido):\n• **Weón / Huevón:** Igual que 'boludo' o 'güey', sirve como amigo o como insulto.\n• **Fome:** Aburrido (Sıkıcı). *'La película estuvo súper fome'.*\n• **¿Cachai?:** ¿Entiendes? / ¿Me explico?. Viene del inglés 'catch'. *'Tenemos que ir mañana, ¿cachai?'*.",
        examples: [
          { es: "Che, boludo, estoy re cansado de este quilombo.", tr: "Kanka (aptal), bu karmaşadan (felaketten) çok yoruldum." },
          { es: "Ese pibe es re inteligente.", tr: "O çocuk çok zeki." },
          { es: "La fiesta estuvo muy fome, weón, ¿cachai?", tr: "Parti çok sıkıcıydı dostum, anlıyor musun?" }
        ]
      }
    },
    {
      id: "c1_u18_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Acentos del Sur)",
      exercises: [
        { type: "speaking", spanish: "Che boludo qué hacés", turkish: "Hey dostum, ne yapıyorsun? (Arjantin)" },
        { type: "speaking", spanish: "Este lugar es un quilombo", turkish: "Bu yer tam bir karmaşa (felaket)." },
        { type: "speaking", spanish: "Ese pibe juega re bien", turkish: "O çocuk çok iyi oynuyor." },
        { type: "speaking", spanish: "Estoy re feliz de verte", turkish: "Seni gördüğüme çok (re) sevindim." },
        { type: "speaking", spanish: "La película estuvo súper fome", turkish: "Film süper sıkıcıydı (Şili)." },
        { type: "speaking", spanish: "Me entiendes weón cachai", turkish: "Beni anlıyorsun dostum, anladın mı? (Şili)" },
        { type: "speaking", spanish: "Vení para acá che", turkish: "Buraya gel hey." },
        { type: "speaking", spanish: "Sos un pibe re inteligente", turkish: "Sen çok zeki bir çocuksun." },
        { type: "speaking", spanish: "No seas tan pelotudo", turkish: "Bu kadar aptal olma." },
        { type: "speaking", spanish: "Qué quilombo armaste che", turkish: "Ne büyük karmaşa yarattın dostum." }
      ]
    },
    {
      id: "c1_u18_n5",
      type: "theory",
      title: "El Reto Turco: La Tolerancia Lingüística",
      content: {
        concept: "En Turquía, aunque hay dialectos (el Ege, Karadeniz), en la televisión y las noticias todos hablan un turco de Estambul (Istanbul Türkçesi).\n\nEn el mundo hispano **NO HAY UN ESPAÑOL SUPERIOR A OTRO**.\n\n🇹🇷 Cuando los estudiantes turcos viajan a Latinoamérica, a veces piensan: *'Hablan mal, en mi escuela me enseñaron otra cosa'*.\n\n🇪🇸 ¡Gran error! Un colombiano no habla 'mal' el español de España, habla el español de Colombia (que de hecho, es considerado uno de los más puros del mundo). \nEn el nivel C1, tu cerebro debe abrirse a la idea de que la palabra 'Coche' es tan válida como 'Carro' o 'Auto'. \n\nNo intentes corregir a un latinoamericano con gramática de España, ¡disfruta de la diversidad del idioma!",
        examples: [
          { es: "Voy a conducir mi coche. (España)", tr: "Arabamı süreceğim." },
          { es: "Voy a manejar mi carro. (Latinoamérica)", tr: "Arabamı kullanacağım (süreceğim)." },
          { es: "Voy a manejar el auto. (Cono Sur)", tr: "Arabayı kullanacağım." }
        ]
      }
    },
    {
      id: "c1_u18_n6",
      type: "reading",
      title: "Lectura Crítica: Dos mochileros",
      content: {
        text: "Juan (español) y Mateo (argentino) viajan como mochileros por México. \n\n— Juan: ¡Vaya calor hace, tío! Me encantaría beberme un zumo de melocotón bien frío y alquilar un coche para ir a la playa.\n— Mateo: Che, boludo, acá no se dice 'zumo de melocotón', ¡te van a mirar re raro! Tenés que pedir un 'jugo de durazno'. Y la plata no nos alcanza para un 'auto'.\n— Taquero (Mexicano): ¿Qué onda, chavos? ¿Van a pedir unos tacos al pastor o qué? Están bien chidos, la neta.\n— Juan: Sí, por favor. ¿Me pone uno sin picante? ¡Es que soy un poco delicado, no manches!\n— Mateo: (Riendo) Mirá cómo el español ya usa palabras de acá. ¡Qué quilombo de idiomas tenemos en esta mesa!",
        translation: "Juan (İspanyol) ve Mateo (Arjantinli) sırt çantalı gezginler olarak Meksika'da seyahat ediyorlar.\n\n— Juan: Ne sıcak, dostum (tío)! Çok soğuk bir şeftali suyu (zumo de melocotón) içmeyi ve plaja gitmek için bir araba (coche) kiralamayı çok isterdim.\n— Mateo: Hey, kanka (boludo), burada 'zumo de melocotón' denmez, sana çok (re) garip bakarlar! 'Jugo de durazno' istemelisin (tenés). Ve paramız (plata) bir 'auto'ya (arabaya) yetmez.\n— Takocu (Meksikalı): Naber gençler? (Qué onda, chavos). Al pastor tako sipariş edecek misiniz? Gerçekten (la neta) çok harikalar (chidos).\n— Juan: Evet, lütfen. Bana acısız bir tane verir misiniz? Biraz hassasım da, hadi canım (no manches)!\n— Mateo: (Gülerek) Bak şu İspanyol nasıl da buranın kelimelerini kullanıyor. Bu masada ne biçim bir dil karmaşası (quilombo) var!"
      }
    },
    {
      id: "c1_u18_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto de Dialectos",
      exercises: [
        { type: "syntax", turkish: "Meyve suyu (jugo) içiyorum.", spanish: "Estoy bebiendo un jugo", words: ["Estoy", "bebiendo", "un", "jugo", "zumo"] },
        { type: "syntax", turkish: "Araba (carro) çok güzel (chido).", spanish: "El carro está muy chido", words: ["El", "carro", "está", "muy", "chido", "coche"] },
        { type: "syntax", turkish: "Dostum (Che), param (plata) yok.", spanish: "Che no tengo plata", words: ["Che", "no", "tengo", "plata", "dinero"] },
        { type: "syntax", turkish: "Bu adam (tío) çok havalı (guay).", spanish: "Este tío es muy guay", words: ["Este", "tío", "es", "muy", "guay", "chido"] },
        { type: "syntax", turkish: "Sınav çok (re) zordu.", spanish: "El examen fue re difícil", words: ["El", "examen", "fue", "re", "difícil", "muy"] },
        { type: "speaking", spanish: "La neta es que estoy re cansado", turkish: "Gerçek şu ki, çok yorgunum (Meksika + Arjantin)." },
        { type: "speaking", spanish: "Qué quilombo armaste boludo", turkish: "Ne büyük karmaşa çıkardın kanka." },
        { type: "speaking", spanish: "No manches weón", turkish: "Hadi canım dostum (Meksika + Şili)." },
        { type: "speaking", spanish: "Ese pibe es muy fresa", turkish: "O çocuk çok tiki." },
        { type: "speaking", spanish: "Me mola tu carro güey", turkish: "Araban hoşuma gitti dostum (İspanya + Meksika)." }
      ]
    },
    {
      id: "c1_u18_n8",
      type: "theory",
      title: "Teoría III: Los Andes y el Caribe",
      content: {
        concept: "Si subimos a Colombia y nos movemos por el Caribe (Cuba, Puerto Rico, República Dominicana), la música del idioma cambia.\n\n### Colombia y los Andes:\n• **Chévere / Bacano:** Genial, guay, chido. *'Esa fiesta estuvo muy chévere'.*\n• **Parce / Parcero:** Amigo, hermano, kanka. Muy usado en Colombia. *'¿Todo bien, parce?'*.\n• **Vaina:** Es la palabra más mágica de Latinoamérica. Significa 'cosa', 'asunto' o 'situación'. Sirve para todo. *'Pásame esa vaina' (Şu zımbırtıyı bana uzat).*\n• **Guayabo:** Resaca (Akşamdan kalma). *'Tengo un guayabo terrible'.*\n\n### El Caribe:\nAquí el acento es muy relajado, las 'R' a veces suenan como 'L' y las 'S' se aspiran.\n• **Asere / Acere:** Amigo, hermano (en Cuba). *'¿Qué bolá, asere?' (Ne haber dostum?).*\n• **Chévere:** También se usa en todo el Caribe.\n• **Estar pelao:** No tener dinero (Estar a dos velas).",
        examples: [
          { es: "Oye parce, pásame esa vaina que está en la mesa.", tr: "Baksana dostum, masadaki şu zımbırtıyı bana uzat." },
          { es: "La rumba estuvo muy chévere, pero tengo un guayabo...", tr: "Parti (rumba) çok harikaydı, ama akşamdan kalmayım ki..." }
        ]
      }
    },
    {
      id: "c1_u18_n9",
      type: "theory",
      title: "Sintaxis Visual: El Párrafo Latino",
      content: {
        concept: "Deconstruiremos una frase que un nativo latinoamericano usaría en un contexto totalmente informal, llena de slang y comodines.",
        examples: [{ es: "La neta, parce, no entendí nada de esa vaina porque estaba re cansado.", tr: "Gerçek şu ki dostum, o zımbırtıdan (işten/durumdan) hiçbir şey anlamadım çünkü çok yorgundum." }],
        analysis: [
          { word: "La neta,", type: "noun", literal: "Gerçek", explanation: "Mexicanismo. Funciona como 'La verdad es que...'.", examples: [] },
          { word: "parce,", type: "noun", literal: "kanka / dostum", explanation: "Colombianismo para amigo/a.", examples: [] },
          { word: "no entendí nada", type: "verb", literal: "hiçbir şey anlamadım", explanation: "Verbo en Indefinido normal.", examples: [] },
          { word: "de esa vaina", type: "noun", literal: "o şeyden/zımbırtıdan", explanation: "Palabra comodín usada en casi toda Sudamérica. Sustituye al nombre de cualquier cosa o situación.", examples: [] },
          { word: "porque estaba", type: "verb", literal: "çünkü bulunuyordum", explanation: "Explicación causal en Imperfecto.", examples: [] },
          { word: "re", type: "adverb", literal: "çok (aşırı)", explanation: "Prefijo de origen rioplatense (Argentina/Uruguay) que significa 'muy'.", examples: [] },
          { word: "cansado.", type: "adjective", literal: "yorgun", explanation: "Adjetivo de estado.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u18_n10",
      type: "theory",
      title: "Caja de Herramientas: El Diccionario Transatlántico",
      content: {
        concept: "Para el examen DELE C1, debes conocer sinónimos de uso frecuente en América y España. Si estás en Latam, olvida la columna izquierda.\n\n### 🇪🇸 España ➔ 🌎 Latinoamérica\n• **El coche** ➔ El carro / El auto.\n• **El móvil** ➔ El celular.\n• **El ordenador** ➔ La computadora / El computador.\n• **El bolígrafo / El boli** ➔ La pluma / El esfero / La lapicera.\n• **Las gafas** ➔ Los anteojos / Los lentes.\n• **El zumo** ➔ El jugo.\n• **La patata** ➔ La papa.\n• **El aguacate** ➔ La palta (Cono Sur) / El aguacate (México).\n• **La fresa** ➔ La frutilla (Cono Sur) / La fresa (Resto).\n• **Conducir** ➔ Manejar.\n• **Coger** ➔ Tomar / Agarrar (¡Cuidado! 'Coger' en Latam es una grosería sexual muy fuerte).",
        examples: [
          { es: "En España: Coge el coche y trae patatas.", tr: "İspanya'da: Arabayı al ve patates getir." },
          { es: "En América: Toma el carro y trae papas.", tr: "Amerika'da: Arabayı al ve patates getir." }
        ]
      }
    },
    {
      id: "c1_u18_n11",
      type: "theory",
      title: "Taller de Producción: WhatsApp Internacional",
      content: {
        concept: "Aplica tu conocimiento dialectal.\n\n**Instrucciones:**\nImagina que tienes dos buenos amigos: Uno en Madrid y otro en Ciudad de México (o Buenos Aires).\nEscribe dos mensajes cortos de WhatsApp (4-5 líneas cada uno) invitándolos a comer y preguntando si van en coche o necesitan un bolígrafo para estudiar después.\n\n1. En el mensaje a España, usa vocabulario de allí (Tío, guay, zumo, coche, coger, móvil).\n2. En el mensaje a América, usa vocabulario de allá (Güey/Parce, chido/chévere, jugo, carro, celular).\n\n**Inspiración:** '¡Qué pasa tío! ¿Cogemos el coche y vamos a por un zumo? vs ¿Qué onda güey? ¿Tomamos el carro y vamos por un jugo?'",
        examples: []
      }
    },
    {
      id: "c1_u18_n12",
      type: "exam",
      title: "Examen de Unidad: Voces de América",
      content: {
        concept: "Demuestra tu flexibilidad bilingüe. Identifica las regiones, elige los sinónimos correctos y no caigas en las trampas culturales.",
        exercises: [
          { type: "multiple_choice", question: "¿En qué país es muy común usar la palabra 'Güey' (wey)?", options: ["España", "Argentina", "México"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué palabra de España NO DEBES usar en gran parte de Latinoamérica porque es una grosería?", options: ["Conducir", "Coger", "Molar"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo piden un 'Zumo de naranja' en América Latina?", options: ["Jugo de naranja", "Zumo de frutilla", "Bebida de naranja"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Vaina' en Colombia/Caribe?", options: ["Un tipo de baile", "Cualquier cosa, asunto o situación", "Un insulto"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se llama el 'Aguacate' en Argentina y Chile?", options: ["Fresa", "Palta", "Papa"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien dice 'Estoy re cansado, che', es de:", options: ["México", "Argentina/Uruguay", "Colombia"], correct: 1 },
          { type: "multiple_choice", question: "Elige el equivalente latino de 'Ordenador':", options: ["Celular", "Computadora", "Esfero"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'La neta' en México?", options: ["La verdad / En serio", "La mentira", "Internet"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Harika / Genial' en Colombia?", options: ["Fome", "Chévere / Bacano", "Fresa"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Mande' en México?", options: ["¿Efendim? (Respuesta educada a una llamada)", "Gönder! (Imperativo)", "Anlamıyorum."], correct: 0 },
          { type: "syntax", turkish: "Naber kanka? (México).", spanish: "Qué onda güey", words: ["Qué", "onda", "güey", "tío"] },
          { type: "syntax", turkish: "Bu zımbırtı çok harika (Colombia).", spanish: "Esa vaina está muy chévere", words: ["Esa", "vaina", "está", "muy", "chévere", "chida"] },
          { type: "syntax", turkish: "Çok (re) yorgunum dostum (Argentina).", spanish: "Estoy re cansado che", words: ["Estoy", "re", "cansado", "che", "muy"] },
          { type: "syntax", turkish: "O (kadın) çok tiki (México).", spanish: "Ella es muy fresa", words: ["Ella", "es", "muy", "fresa", "chida"] },
          { type: "syntax", turkish: "Arabayı (Latam) ben kullanacağım (manejar).", spanish: "Yo voy a manejar el carro", words: ["Yo", "voy", "a", "manejar", "el", "carro", "coche"] },
          { type: "syntax", turkish: "Gerçek şu ki (México) gitmek istemiyorum.", spanish: "La neta no quiero ir", words: ["La", "neta", "no", "quiero", "ir", "verdad"] },
          { type: "syntax", turkish: "Hadi canım! Ciddi misin? (México).", spanish: "No manches en serio", words: ["No", "manches", "en", "serio", "mames"] },
          { type: "syntax", turkish: "Bilgisayarda (Latam) çalışıyorum.", spanish: "Trabajo en la computadora", words: ["Trabajo", "en", "la", "computadora", "ordenador"] },
          { type: "syntax", turkish: "Baksana dostum (Colombia).", spanish: "Oye parce", words: ["Oye", "parce", "güey"] },
          { type: "syntax", turkish: "Cep telefonumu (Latam) unuttum.", spanish: "Olvidé mi celular", words: ["Olvidé", "mi", "celular", "móvil"] }
        ]
      }
    }
  ]
};
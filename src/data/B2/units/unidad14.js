/**
 * UNIDAD 14 - NIVEL B2: EL COMUNICADOR INDEPENDIENTE
 * Foco: Dialectología, Voseo y Variantes Regionales del Español
 * Tema: Diferencias léxicas, fonéticas y gramaticales (España vs Latam).
 */

export const unidad14 = {
  id: "b2_u14",
  title: "Unidad 14: Duelo de Dialectos",
  description: "Explora la diversidad del mundo hispano. Domina el voseo argentino, el vocabulario mexicano y los acentos del Caribe.",
  nodes: [
    {
      id: "b2_u14_n1",
      type: "theory",
      title: "Teoría I: El Voseo (Argentina, Uruguay, Paraguay)",
      content: {
        concept: "En gran parte del Cono Sur (especialmente Argentina), no usan 'Tú'. Usan **VOS**. El voseo tiene su propia conjugación, que curiosamente es más fácil porque casi no tiene irregulares en presente.\n\n### 1. ¿Cómo se forma el VOS?\nTomas el infinitivo, quitas la -R, pones una -S y **acentúas la última vocal**.\n• **Hablar** ➔ Vos habl**ás** (Tú hablas).\n• **Comer** ➔ Vos com**és** (Tú comes).\n• **Vivir** ➔ Vos viv**ís** (Tú vives).\n\n### 2. Los únicos irregulares en VOS:\n• **Ser** ➔ Vos **sos** (Tú eres).\n• **Ir** ➔ Vos **vas** (Tú vas - ¡Es igual!).\n• **Tener** ➔ Vos **tenés** (Tú tienes).\n\n### 3. El Imperativo en VOS:\nSimplemente quitas la -R del infinitivo y pones tilde.\n• **¡Vení!** (Gel) / **¡Hacé!** (Yap) / **¡Mirá!** (Bak).",
        examples: [
          { es: "Vos sos una persona muy especial.", tr: "Sen (vos) çok özel bir insansın." },
          { es: "Che, ¿vos tenés un minuto?", tr: "Hey, (senin) bir dakikan var mı?" },
          { es: "¡Vení para acá!", tr: "Buraya gel!" }
        ]
      }
    },
    {
      id: "b2_u14_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Voseo)",
      exercises: [
        { type: "syntax", turkish: "Sen (vos) ne yiyorsun?", spanish: "Qué comés vos", words: ["Qué", "comés", "vos", "comes", "comas"] },
        { type: "syntax", turkish: "Bana (me) doğruyu söyle (voseo).", spanish: "Contame la verdad", words: ["Contame", "la", "verdad", "Cuéntame"] },
        { type: "syntax", turkish: "Sen (vos) çok iyi İspanyolca konuşuyorsun.", spanish: "Vos hablás muy bien español", words: ["Vos", "hablás", "muy", "bien", "español", "hablas"] },
        { type: "syntax", turkish: "Nereden geliyorsun? (voseo).", spanish: "De dónde venís vos", words: ["De", "dónde", "venís", "vos", "vienes"] },
        { type: "syntax", turkish: "Hemen buraya gel! (voseo).", spanish: "Vení acá ahora mismo", words: ["Vení", "acá", "ahora", "mismo", "Ven"] },
        { type: "syntax", turkish: "Sen (vos) benim en iyi arkadaşımsın (Ser).", spanish: "Vos sos mi mejor amigo", words: ["Vos", "sos", "mi", "mejor", "amigo", "eres"] },
        { type: "syntax", turkish: "Bunu yapabilirsin (voseo).", spanish: "Vos podés hacer esto", words: ["Vos", "podés", "hacer", "esto", "puedes"] },
        { type: "syntax", turkish: "Daha fazla vaktin var mı? (voseo).", spanish: "Tenés más tiempo vos", words: ["Tenés", "más", "tiempo", "vos", "tienes"] },
        { type: "syntax", turkish: "Şuna (esto) bak! (voseo).", spanish: "Mirá esto", words: ["Mirá", "esto", "Mira"] },
        { type: "syntax", turkish: "Nerede yaşıyorsun? (voseo).", spanish: "Dónde vivís vos", words: ["Dónde", "vivís", "vos", "vives"] }
      ]
    },
    {
      id: "b2_u14_n3",
      type: "theory",
      title: "Teoría II: El Mapa del Vocabulario (¿Coche o Carro?)",
      content: {
        concept: "Aprender español B2 significa saber que una misma cosa tiene nombres distintos según el país. No hay uno 'mejor' que otro, todos son correctos.\n\n### 🚗 Transporte:\n• **España:** El coche / El autobús.\n• **México/Colombia:** El carro / El camión.\n• **Argentina/Chile:** El auto / El bondi (colectivo).\n\n### 📱 Tecnología:\n• **España:** El ordenador / El móvil.\n• **América:** La computadora / El celular.\n\n### 🍎 Comida:\n• **España:** El melocotón / La patata / El zumo.\n• **América:** El durazno / La papa / El jugo.\n\n💡 REGLA PRO: En España usan 'Vosotros' (Sizler - samimi), pero en toda América usan siempre 'Ustedes' (Sizler - herkes için).",
        examples: [
          { es: "Voy a cargar el celular en la computadora.", tr: "Cep telefonunu bilgisayarda şarj edeceğim (Latam)." },
          { es: "He dejado el móvil al lado del ordenador.", tr: "Cep telefonunu bilgisayarın yanında bıraktım (España)." }
        ]
      }
    },
    {
      id: "b2_u14_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Duelo de Variantes)",
      exercises: [
        { type: "speaking", spanish: "Vos sos un genio che", turkish: "Sen bir dahisin dostum (Argentina)." },
        { type: "speaking", spanish: "Me gusta mucho tu carro", turkish: "Arabanı çok sevdim (México/Colombia)." },
        { type: "speaking", spanish: "He aparcado el coche aquí", turkish: "Arabayı buraya park ettim (España)." },
        { type: "speaking", spanish: "Llamame al celular más tarde", turkish: "Beni daha sonra cepten ara (América)." },
        { type: "speaking", spanish: "Vení a comer con nosotros", turkish: "Gel bizimle yemek ye (Argentina)." },
        { type: "speaking", spanish: "Me encanta el jugo de naranja", turkish: "Portakal suyuna bayılırım (América)." },
        { type: "speaking", spanish: "Preferiría beber un zumo", turkish: "Bir meyve suyu içmeyi tercih ederim (España)." },
        { type: "speaking", spanish: "Tenés razón en lo que decís", turkish: "Söylediğinde haklısın (Argentina)." },
        { type: "speaking", spanish: "Ustedes son muy amables", turkish: "Sizler çok naziksiniz (América)." },
        { type: "speaking", spanish: "Vosotros sois mis amigos", turkish: "Sizler benim arkadaşlarımsınız (España)." }
      ]
    },
    {
      id: "b2_u14_n5",
      type: "theory",
      title: "El Reto Turco: Dialectos en Turquía vs el Mundo Hispano",
      content: {
        concept: "En Turquía existen dialectos (Ege, Karadeniz), pero la gramática escrita es muy estándar. En el mundo hispano, el **voseo** o el uso de **ustedes** es gramática oficial en sus países.\n\n### El Choque Fonético:\n• 🇹🇷 En turco, la 'S' final siempre es fuerte. \n• 🇪🇸 En el Caribe (Cuba, RD, Puerto Rico) y el sur de España, la 'S' final a veces desaparece o suena como una 'H' suave.\n• *Ejemplo:* '¿Cómo estás?' suena como '¿Cómo ehtáh?'.\n\n⚠️ **CONSEJO:** No intentes imitar los acentos todavía. Tu objetivo en B2 es **entenderlos**. Si viajas a Argentina, ellos entenderán tu 'Tú', pero tú debes saber que cuando te dicen 'Venís', te están hablando a ti.",
        examples: [
          { es: "Ahorita voy. (México - Hemen geliyorum)", tr: "Hemen gidiyorum/geliyorum." },
          { es: "Vale, venga. (España - Tamam, hadi)", tr: "Tamam, hadi." }
        ]
      }
    },
    {
      id: "b2_u14_n6",
      type: "reading",
      title: "Lectura Crítica: Crónica de un viaje por América",
      content: {
        text: "Mi viaje empezó en Madrid. Allí todo era 'guay' y la gente me decía: '¡Venga, tío, vamos a tapear!'. Tomé un avión y crucé el Atlántico hasta Buenos Aires. El cambio fue total. \n\nEn Argentina, nadie me tuteaba, todos me 'voseaban'. Mi guía me dijo: 'Che, Ayşe, vos tenés que probar el asado, es lo mejor del mundo'. Después viajé a México. Allí el 'zumo' desapareció y se convirtió en 'jugo', y en lugar de 'coche' usaban 'carro'. Lo más difícil fue en Cuba; allí la gente habla muy rápido y omiten las 's'. Una mujer me preguntó: '¿Cómo tú 'tá, mi 'mola?'. Tardé unos segundos en entender que me decía: '¿Cómo tú estás, mi amor?'. El español no es un idioma, son veinte idiomas que se abrazan.",
        translation: "Yolculuğum Madrid'de başladı. Orada her şey 'guay' (harika) idi ve insanlar bana: 'Hadi dostum (tío), tapas yemeye gidelim!' diyordu. Bir uçağa bindim ve Atlantik'i geçerek Buenos Aires'e vardım. Değişim tamdı.\n\nArjantin'de kimse bana 'tú' demiyordu, herkes 'vos' diyordu. Rehberim bana: 'Hey (che) Ayşe, asado (ızgara et) denemelisin (tenés), dünyanın en iyisidir' dedi. Sonra Meksika'ya seyahat ettim. Orada 'zumo' (meyve suyu) kayboldu ve 'jugo'ya dönüştü, 'coche' (araba) yerine de 'carro' kullanıyorlardı. En zoru Küba'daydı; orada insanlar çok hızlı konuşuyor ve 's' harflerini atlıyorlar. Bir kadın bana: '¿Cómo tú 'tá, mi 'mola?' diye sordu. Onun 'Nasılsın aşkım?' (¿Cómo tú estás, mi amor?) dediğini anlamam birkaç saniye sürdü. İspanyolca tek bir dil değil, birbirine sarılan yirmi dildir."
      }
    },
    {
      id: "b2_u14_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Variantes (B2)",
      exercises: [
        { type: "multiple_choice", question: "Si estás en Argentina y quieres invitar a alguien a venir, dices:", options: ["¡Ven aquí!", "¡Vení acá!", "¡Viene acá!"], correct: 1 },
        { type: "multiple_choice", question: "¿Cómo se dice 'Bilgisayar' en México?", options: ["El ordenador", "La computadora", "El computador"], correct: 1 },
        { type: "multiple_choice", question: "En España, para decir 'Sizler' (amigos), usamos:", options: ["Ustedes", "Vosotros", "Vos"], correct: 1 },
        { type: "multiple_choice", question: "¿Qué significa 'Che' en el Cono Sur?", options: ["Adiós", "Persona/Amigo (Hey!)", "Comida"], correct: 1 },
        { type: "multiple_choice", question: "Si alguien dice '¿Cómo tú 'tá?', probablemente es de:", options: ["Madrid", "El Caribe", "Chile"], correct: 1 },
        { type: "syntax", turkish: "Araba (Latam) nerede?", spanish: "Dónde está el carro", words: ["Dónde", "está", "el", "carro", "coche"] },
        { type: "syntax", turkish: "Sen (vos) zekisin (sos).", spanish: "Vos sos inteligente", words: ["Vos", "sos", "inteligente", "eres"] },
        { type: "syntax", turkish: "Meyve suyu (España) içiyorum.", spanish: "Estoy bebiendo zumo", words: ["Estoy", "bebiendo", "zumo", "jugo"] },
        { type: "syntax", turkish: "Hadi (España) gidelim.", spanish: "Venga vamos", words: ["Venga", "vamos", "Ahorita"] },
        { type: "syntax", turkish: "Telefonun (Latam) var mı? (voseo).", spanish: "Tenés celular vos", words: ["Tenés", "celular", "vos", "tienes"] }
      ]
    },
    {
      id: "b2_u14_n8",
      type: "theory",
      title: "Teoría III: El Slang Regional (Lunfardo y Mexicanismos)",
      content: {
        concept: "Para terminar de pulir tu nivel B2, debes conocer palabras de la calle que definen identidades nacionales.\n\n### 🇦🇷 Argentina (Lunfardo):\n• **Laburar** (Çalışmak): 'Tengo que laburar mucho'.\n• **Pibe / Piba** (Çocuk/Genç): 'Ese pibe es muy zeki'.\n• **Plata** (Para): 'No tengo plata'.\n\n### 🇲🇽 México:\n• **Padre / Chido** (Harika/Güzel): '¡Qué padre tu carro!'.\n• **Neta** (Gerçek/Hakikat): '¿Es neta?' (¿De verdad?).\n• **Platicar** (Konuşmak/Sohbet etmek): 'Vamos a platicar un rato'.\n\n### 🇪🇸 España:\n• **Molar** (Hoşuna gitmek): 'Este bar mola mucho'.\n• **Currar** (Çalışmak): 'Mañana curro de noche'.",
        examples: [
          { es: "La neta es que ese pibe labura bien.", tr: "Gerçek şu ki, o çocuk iyi çalışıyor (Mezcla regional)." },
          { es: "Me mola tu nuevo celular.", tr: "Yeni cep telefonun hoşuma gitti (España + Latam)." }
        ]
      }
    },
    {
      id: "b2_u14_n9",
      type: "theory",
      title: "Sintaxis Visual: La misma frase en 3 mundos",
      content: {
        concept: "Analizaremos cómo cambia una oración simple según la región. Observa los verbos y el vocabulario.",
        examples: [{ es: "España: ¿Tenéis el coche? / Argentina: ¿Tenés el auto? / México: ¿Tienen el carro?", tr: "Arabanız var mı?" }],
        analysis: [
          { word: "España:", type: "article", literal: "İspanya", explanation: "Usa 'Vosotros' y el verbo termina en -ÉIS.", examples: [] },
          { word: "¿Tenéis el coche?", type: "verb", literal: "Arabanız var mı?", explanation: "Plural informal español.", examples: [] },
          { word: "Argentina:", type: "article", literal: "Arjantin", explanation: "Usa 'Vos' y el verbo tiene acento en la 'É'.", examples: [] },
          { word: "¿Tenés el auto?", type: "verb", literal: "Araban var mı?", explanation: "Singular informal argentino. Cambia 'coche' por 'auto'.", examples: [] },
          { word: "México:", type: "article", literal: "Meksika", explanation: "Usa 'Ustedes' para amigos y extraños.", examples: [] },
          { word: "¿Tienen el carro?", type: "verb", literal: "Arabanız var mı?", explanation: "Plural universal americano. Cambia 'coche' por 'carro'.", examples: [] }
        ]
      }
    },
    {
      id: "b2_u14_n10",
      type: "theory",
      title: "Caja de Herramientas: Diccionario de Viaje",
      content: {
        concept: "Palabras que cambian de significado o forma:\n\n• **Boleto** (Latam) / **Billete** (España): (Bilet)\n• **Enojo** (Latam) / **Enfado** (España): (Kızgınlık)\n• **Alberca** (México) / **Piscina** (España) / **Pileta** (Argentina): (Havuz)\n• **Lindo** (Latam) / **Bonito** (España): (Güzel)\n• **Hacer una fila** (Latam) / **Hacer cola** (España): (Sıraya girmek)\n• **Ahorita** (México): (Şimdi / Birazdan)",
        examples: [
          { es: "He comprado un billete de avión.", tr: "Bir uçak bileti aldım (España)." },
          { es: "La pileta del hotel es muy linda.", tr: "Otelin havuzu çok güzel (Argentina)." },
          { es: "Ahorita te llamo.", tr: "Seni hemen arayacağım (México)." }
        ]
      }
    },
    {
      id: "b2_u14_n11",
      type: "theory",
      title: "Taller de Producción: Mi viaje soñado a Latam",
      content: {
        concept: "Vas a planificar un viaje eligiendo un país específico.\n\n**Instrucciones:**\nEscribe un texto (mínimo 10-12 líneas) describiendo un viaje por Latinoamérica.\n1. Elige una variante (Argentina, México o Colombia) y usa al menos 3 palabras típicas de allí.\n2. Usa la estructura del **Voseo** si eliges Argentina (tenés, sos, vení).\n3. Compara el país elegido con España usando vocabulario de la unidad.\n4. Envía el texto para revisión del profesor.\n\n**Inspiración:** 'Quiero ir a Buenos Aires. Allí el asado mola mucho, o como dicen ellos, es muy chido. Me gustaría hablar con los pibes en la calle y...'",
        examples: []
      }
    },
    {
      id: "b2_u14_n12",
      type: "exam",
      title: "Examen de Unidad: Duelo de Dialectos",
      content: {
        concept: "Prueba técnica de dialectología. Debes identificar regiones, corregir voseo y traducir variantes léxicas.",
        exercises: [
          { type: "multiple_choice", question: "¿Cómo se conjuga 'Comer' para VOS?", options: ["Comes", "Comés", "Comas"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien en México dice '¡Qué chido!', significa:", options: ["¡Qué feo!", "¡Qué guay!", "¡Qué caro!"], correct: 1 },
          { type: "multiple_choice", question: "En Argentina, el pronombre 'Vos' sustituye a:", options: ["Nosotros", "Tú", "Usted"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué palabra se usa en España para 'Bilgisayar'?", options: ["Computadora", "Ordenador", "Máquina"], correct: 1 },
          { type: "multiple_choice", question: "El imperativo '¡Vení!' es propio de:", options: ["Madrid", "Buenos Aires", "Bogotá"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Para' (money) en slang argentino?", options: ["Plata", "Pasta", "Guita", "A y C son correctas"], correct: 3 },
          { type: "multiple_choice", question: "Si estás en el Caribe y escuchas '¡Hola mi 'mola!', te dicen:", options: ["Hola mi motor", "Hola mi amor", "Hola mi mola (diente)"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es el antónimo de 'Llegar temprano' en España?", options: ["Llegar con retraso", "Llegar a las tantas", "Llegar ahorita"], correct: 1 },
          { type: "multiple_choice", question: "En México, 'Ahorita' puede significar:", options: ["Ahora mismo", "En un rato", "Nunca", "Todas las anteriores"], correct: 3 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Sıraya girmek' en España?", options: ["Hacer una fila", "Hacer cola", "Sirse"], correct: 1 },
          { type: "syntax", turkish: "Seninle (vos) konuşmak istiyorum.", spanish: "Quiero platicar con vos", words: ["Quiero", "platicar", "con", "vos", "hablar", "tú"] },
          { type: "syntax", turkish: "Araba (España) çok hızlı.", spanish: "El coche es muy rápido", words: ["El", "coche", "es", "muy", "rápido", "carro"] },
          { type: "syntax", turkish: "Para (Latam) yok.", spanish: "No tengo plata", words: ["No", "tengo", "plata", "pasta"] },
          { type: "syntax", turkish: "Nereye gidiyorsun? (voseo).", spanish: "Adónde vas vos", words: ["Adónde", "vas", "vos", "tú"] },
          { type: "syntax", turkish: "Sizler (Latam) harikasınız.", spanish: "Ustedes son geniales", words: ["Ustedes", "son", "geniales", "Vosotros", "sois"] },
          { type: "syntax", turkish: "Hemen (México) geliyorum.", spanish: "Ahorita voy", words: ["Ahorita", "voy", "Ahora"] },
          { type: "syntax", turkish: "Buna (esto) inanmıyorum (voseo).", spanish: "No lo creés vos", words: ["No", "lo", "creés", "vos", "crees"] },
          { type: "syntax", turkish: "Harika (México) bir gün!", spanish: "Qué padre día", words: ["Qué", "padre", "día", "guay"] },
          { type: "syntax", turkish: "Sözleşmeyi (billete) aldın mı?", spanish: "Compraste el boleto", words: ["Compraste", "el", "boleto", "billete"] },
          { type: "syntax", turkish: "Ödevini (tarea) yaptın mı? (voseo).", spanish: "Hiciste la tarea vos", words: ["Hiciste", "la", "tarea", "vos", "tú"] }
        ]
      }
    }
  ]
};
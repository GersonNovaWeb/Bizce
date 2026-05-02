/**
 * UNIDAD 17 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Dialectología Peninsular, Slang Madrileño y Andaluz.
 * Tema: Fonética rápida, cultura de calle y variedades dialectales de España.
 */

export const unidad17 = {
  id: "c1_u17",
  title: "Unidad 17: Voces de España",
  description: "Aprende el español de la calle. Entiende por qué los nativos hablan tan rápido, cómo se 'comen' las letras y domina el slang de Madrid y Andalucía.",
  nodes: [
    {
      id: "c1_u17_n1",
      type: "theory",
      title: "Teoría I: La Fonética del Sur (Andalucía)",
      content: {
        concept: "En los libros has aprendido el español estándar (basado en el norte y centro de España). Sin embargo, si viajas al sur (Andalucía) o escuchas flamenco, notarás que el idioma suena muy diferente. El español del sur es más relajado y fluido.\n\n### 1. La pérdida de la 'S' final\nEn el sur, la 'S' al final de las sílabas se aspira (suena como una suave 'H' inglesa) o desaparece totalmente.\n• *Los niños* ➔ Lo' niñoh.\n• *Más o menos* ➔ Ma' o menoh.\n\n### 2. La desaparición de la 'D' intervocálica\nLas palabras que terminan en **-ADO** o **-IDO** pierden la 'D' en la lengua hablada de casi toda España, pero especialmente en el sur.\n• *Cansado* ➔ Cansao.\n• *Pescado* ➔ Pescao.\n• *Aburrido* ➔ Aburrío.\n\n### 3. Seseo y Ceceo\n• **Seseo:** Pronunciar la 'Z' y la 'C' como 'S' (Cerveza ➔ Servesah). Común en Sevilla y Canarias (¡y en toda Latinoamérica!).\n• **Ceceo:** Pronunciar la 'S' como 'Z' (Sevilla ➔ Zevilla).",
        examples: [
          { es: "Estoy muy cansado, he comido mucho pescado.", tr: "Çok yorgunum (cansao), çok balık (pescao) yedim." },
          { es: "Los lunes estamos aburridos.", tr: "Pazartesileri (lo' lune') sıkılıyoruz (aburrío')." }
        ]
      }
    },
    {
      id: "c1_u17_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Descifrando la calle)",
      exercises: [
        { type: "syntax", turkish: "Çok yorgunum (cansao) çünkü çok çalıştım.", spanish: "Estoy muy cansado porque he trabajado mucho", words: ["Estoy", "muy", "cansado", "porque", "he", "trabajado", "mucho", "cansao"] },
        { type: "syntax", turkish: "Kızarmış balık (pescao) yemeye gidelim mi?", spanish: "Vamos a comer pescado frito", words: ["Vamos", "a", "comer", "pescado", "frito", "pescao"] },
        { type: "syntax", turkish: "Tüm çocuklar (lo' niño') parkta.", spanish: "Todos los niños están en el parque", words: ["Todos", "los", "niños", "están", "en", "el", "parque"] },
        { type: "syntax", turkish: "Burada çok sıkılıyorum (aburrío).", spanish: "Estoy muy aburrido aquí", words: ["Estoy", "muy", "aburrido", "aquí", "aburrío"] },
        { type: "syntax", turkish: "Markette (el mercao) dondurma satıyorlar mı?", spanish: "Venden helado en el mercado", words: ["Venden", "helado", "en", "el", "mercado", "mercao"] },
        { type: "syntax", turkish: "Hava (el clima) az çok (ma' o menoh) iyi.", spanish: "El clima es más o menos bueno", words: ["El", "clima", "es", "más", "o", "menos", "bueno"] },
        { type: "syntax", turkish: "Bütün gün kanepede oturuyordu (sentao).", spanish: "Estaba sentado en el sofá todo el día", words: ["Estaba", "sentado", "en", "el", "sofá", "todo", "el", "día"] },
        { type: "syntax", turkish: "Dün arkadaşımla konuştum (hablao).", spanish: "He hablado con mi amigo ayer", words: ["He", "hablado", "con", "mi", "amigo", "ayer"] },
        { type: "syntax", turkish: "Dondurucu (helado) bir su içtim.", spanish: "Bebí un agua muy helada", words: ["Bebí", "un", "agua", "muy", "helada", "helao"] },
        { type: "syntax", turkish: "Bunu yapmaya (a hacer) mecbur (obligaos) değiliz.", spanish: "No estamos obligados a hacer esto", words: ["No", "estamos", "obligados", "a", "hacer", "esto"] }
      ]
    },
    {
      id: "c1_u17_n3",
      type: "theory",
      title: "Teoría II: El Slang Madrileño (Castizo y Moderno)",
      content: {
        concept: "Si vas a Madrid, notarás que tienen un vocabulario propio. El español de la capital es rápido y directo. Si dominas estas palabras, sonarás como un local.\n\n### 1. MAZO (Mucho / Muy)\nEs la palabra más típica de Madrid. Sustituye a 'mucho' o 'muy'.\n• *Me gusta mazo esta canción.* (Bu şarkıyı çok seviyorum).\n• *Hace mazo frío hoy.* (Bugün hava çok soğuk).\n\n### 2. FLIPAR (Şaşırmak / Çıldırmak / Bayılmak)\nSe usa para expresar asombro extremo (bueno o malo).\n• *¡Me flipa tu chaqueta!* (Ceketine bayıldım!).\n• *Estoy flipando con las noticias.* (Haberlere inanamıyorum / şoktayım).\n\n### 3. RALLARSE (Kafaya takmak / Bunaltmak)\n'Rallar' literalmente es 'rendelemek' (como el queso). En slang, significa rayar el cerebro, pensar demasiado en algo o agobiar a alguien.\n• *No te ralles por el examen.* (Sınav için kafanı yorma / kendini bunaltma).\n• *Ese tío me está rallando mazo.* (O adam beni çok darlıyor/bunaltıyor).",
        examples: [
          { es: "Hace mazo calor, me voy a la piscina.", tr: "Çok (mazo) sıcak, havuza gidiyorum." },
          { es: "¡No me ralles más con ese tema, por favor!", tr: "Lütfen o konuyla beni daha fazla darlama/bunaltma!" },
          { es: "Cuando vi el precio del alquiler, flipé.", tr: "Kiranın fiyatını gördüğümde şok oldum (flipé)." }
        ]
      }
    },
    {
      id: "c1_u17_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Acento Capitalino)",
      exercises: [
        { type: "speaking", spanish: "Me mola mazo tu estilo", turkish: "Tarzın çok hoşuma gidiyor (çok havalı)." },
        { type: "speaking", spanish: "Estoy flipando con esta película", turkish: "Bu film karşısında şoktayım (bayılıyorum)." },
        { type: "speaking", spanish: "No te ralles todo saldrá bien", turkish: "Kafaya takma, her şey yolunda gidecek." },
        { type: "speaking", spanish: "Ayer había mazo gente en el bar", turkish: "Dün barda çok insan vardı." },
        { type: "speaking", spanish: "Me flipa la comida de este restaurante", turkish: "Bu restoranın yemeğine bayılıyorum." },
        { type: "speaking", spanish: "Deja de rallarme con tus problemas", turkish: "Problemlerinle beni darlamayı (bunaltmayı) bırak." },
        { type: "speaking", spanish: "Fue mazo difícil pero lo logramos", turkish: "Çok (mazo) zordu ama başardık." },
        { type: "speaking", spanish: "Flipo contigo de verdad", turkish: "Sana gerçekten inanamıyorum (şok oluyorum)." },
        { type: "speaking", spanish: "Se ha rallado porque no la llamaste", turkish: "Onu aramadığın için kafasına taktı (bozuldu)." },
        { type: "speaking", spanish: "Este libro me renta mazo", turkish: "Bu kitap bana çok fayda sağlıyor (okumaya değer)." }
      ]
    },
    {
      id: "c1_u17_n5",
      type: "theory",
      title: "El Reto Turco: La Fusión de Vocales (Sinalefa)",
      content: {
        concept: "Una de las razones por las que los turcoparlantes piensan que el español se habla 'como una ametralladora' es la **Sinalefa**. \n\n🇹🇷 En turco, cada letra y sílaba se pronuncia de forma clara y separada. \n🇪🇸 En el español de la calle, si una palabra termina en vocal y la siguiente empieza por vocal, **se fusionan** en una sola sílaba.\n\n### Ejemplos de la calle (Cómo se escribe vs. Cómo suena):\n• **Para arriba / Para adelante** ➔ Suena: *P'arriba / P'alante*.\n• **Todo el mundo** ➔ Suena: *To'el mundo* ➔ *Tol mundo*.\n• **Voy a hacer** ➔ Suena: *Voy a'cer* (La 'a' y 'ha' se unen).\n• **Que te importa** ➔ Suena: *Que t'importa*.\n\n💡 CONSEJO C1: No intentes forzar estas fusiones al hablar si no te salen naturales. Tu objetivo principal aquí es **entrenar tu oído** para reconocer las palabras escondidas cuando un español te diga: *'Tira p'alante y no te ralles'*.",
        examples: [
          { es: "Tira para adelante (P'alante) y no mires atrás.", tr: "İleriye doğru git ve arkana bakma." },
          { es: "Todo el mundo (Tol mundo) sabe que es verdad.", tr: "Herkes bunun doğru olduğunu biliyor." }
        ]
      }
    },
    {
      id: "c1_u17_n6",
      type: "reading",
      title: "Lectura Crítica: Una noche por Malasaña",
      content: {
        text: "Era viernes por la noche y yo estaba mazo cansado después de trabajar toda la semana. Pero mi amigo Carlos me llamó y me dijo: '¡Venga, tío, anímate! Tol mundo va a ir a Malasaña hoy'.\n\nAl final, me convenció. Fuimos a un bar que estaba llenísimo. Pedimos un poco de pescao frito y unas cervezas. De repente, vi a Marta, una chica de la universidad. Me acerqué y le dije: '¡Qué casualidad verte por aquí!'. Ella me miró fijamente y me respondió: 'Tío, me tienes mazo rallada. Me escribiste ayer y luego desapareciste. Flipo contigo'. \n\nMe quedé de piedra. Intenté explicarle que me había quedado sin batería, pero no me creyó. Me mandó a freír espárragos y se fue con sus amigas. Al final, Carlos me dijo: 'Tira p'alante, hermano. Hay más peces en el mar'. Fue una noche para olvidar.",
        translation: "Cuma gecesiydi ve bütün hafta çalıştıktan sonra çok (mazo) yorgundum. Ama arkadaşım Carlos beni aradı ve şöyle dedi: 'Hadi dostum, neşelen! Herkes (Tol mundo) bugün Malasaña'ya gidecek'.\n\nSonunda beni ikna etti. Tıklım tıklım dolu olan bir bara gittik. Biraz kızarmış balık (pescao) ve birkaç bira istedik. Aniden, üniversiteden bir kız olan Marta'yı gördüm. Yaklaştım ve ona şöyle dedim: 'Seni burada görmek ne tesadüf!'. Bana dik dik baktı ve şöyle cevap verdi: 'Dostum, beni çok bunalttın/kafama taktırma sebep oldun (mazo rallada). Bana dün yazdın ve sonra kayboldun. Sana şok oluyorum (Flipo)'.\n\nDonakaldım (de piedra). Şarjımın bittiğini açıklamaya çalıştım ama bana inanmadı. Beni başından savdı (mandar a freír espárragos) ve arkadaşlarıyla gitti. Sonunda Carlos bana şöyle dedi: 'İleriye bak (Tira p'alante) kardeşim. Denizde daha çok balık var'. Unutulması gereken bir geceydi."
      }
    },
    {
      id: "c1_u17_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (Slang y Dialectos)",
      exercises: [
        { type: "syntax", turkish: "Çok yorgunum (mazo).", spanish: "Estoy mazo cansado", words: ["Estoy", "mazo", "cansado", "muy", "mucho"] },
        { type: "syntax", turkish: "Sana şok oluyorum / inanamıyorum (Flipo).", spanish: "Flipo contigo de verdad", words: ["Flipo", "contigo", "de", "verdad", "flipar"] },
        { type: "syntax", turkish: "Beni bunaltmayı (rallar) bırak.", spanish: "Deja de rallarme con eso", words: ["Deja", "de", "rallarme", "con", "eso", "rallar"] },
        { type: "syntax", turkish: "İleriye doğru devam et (Tira p'alante).", spanish: "Tira para adelante siempre", words: ["Tira", "para", "adelante", "siempre", "palante"] },
        { type: "syntax", turkish: "Herkes (Tol mundo) Madrid'in harika olduğunu (guay) söylüyor.", spanish: "Todo el mundo dice que Madrid es guay", words: ["Todo", "el", "mundo", "dice", "que", "Madrid", "es", "guay"] },
        { type: "syntax", turkish: "Beni başından savdı (freír espárragos).", spanish: "Me mandó a freír espárragos", words: ["Me", "mandó", "a", "freír", "espárragos"] },
        { type: "syntax", turkish: "Bu araba çok havalı (mola mazo).", spanish: "Este coche mola mazo", words: ["Este", "coche", "mola", "mazo", "gusta"] },
        { type: "syntax", turkish: "Balık (pescao) yemek istiyorum.", spanish: "Quiero comer pescado frito", words: ["Quiero", "comer", "pescado", "frito", "pescao"] },
        { type: "syntax", turkish: "Ne kadar tembelsin! (vago).", spanish: "Qué vago eres tío", words: ["Qué", "vago", "eres", "tío", "tía"] },
        { type: "syntax", turkish: "Bunun için (por esto) kafayı yiyorum (rallado).", spanish: "Estoy mazo rallado por esto", words: ["Estoy", "mazo", "rallado", "por", "esto", "rallo"] }
      ]
    },
    {
      id: "c1_u17_n8",
      type: "theory",
      title: "Teoría III: El Sur Profundo y Canarias",
      content: {
        concept: "Si viajas al sur de España (Andalucía) o a las Islas Canarias, el vocabulario cambia para hacerse más cercano y cálido.\n\n### 1. Andalucía:\n• **Quillo / Illo / Illa:** Viene de 'Chiquillo'. Es la versión andaluza de 'Tío'. Se usa para llamar la atención de alguien de forma cariñosa. *¡Illo, ven pacá!*.\n• **No ni ná:** Es una doble negación andaluza que significa ¡Sí, totalmente! o ¡Por supuesto! (Literal: No, ni, nada).\n• **Manda huevos:** Expresión de frustración cuando algo es increíblemente injusto o molesto.\n\n### 2. Islas Canarias:\nEl español de Canarias es el puente histórico entre España y América Latina. Suenan como caribeños.\n• **La guagua:** El autobús.\n• **Ustedes:** En Canarias NO usan 'Vosotros', usan 'Ustedes' con el verbo en 3ª persona plural, igual que en México o Argentina.",
        examples: [
          { es: "¡Illo, qué calor hace hoy!", tr: "Dostum (Illo), bugün ne kadar sıcak!" },
          { es: "— ¿Te gusta esta comida? — ¡No ni ná!", tr: "— Bu yemeği sevdin mi? — Kesinlikle evet (No ni ná)!" },
          { es: "¿A qué hora pasa la guagua por aquí?", tr: "Otobüs (guagua) buradan saat kaçta geçiyor?" }
        ]
      }
    },
    {
      id: "c1_u17_n9",
      type: "theory",
      title: "Sintaxis Visual: Deconstrucción de la calle",
      content: {
        concept: "Vamos a analizar una oración 100% de la calle de Madrid. Observa cómo el verbo 'Rentar' (que formalmente significa 'dar beneficios económicos') se usa para planes sociales.",
        examples: [{ es: "Sinceramente, no me renta mazo salir esta noche porque estoy un poco rallado con el curro.", tr: "Dürüst olmak gerekirse, bu gece dışarı çıkmak bana pek uymuyor (fayda sağlamıyor) çünkü iş yüzünden kafam biraz meşgul/bunalmış." }],
        analysis: [
          { word: "Sinceramente,", type: "adverb", literal: "Dürüstçe", explanation: "Adverbio que introduce la opinión sincera.", examples: [] },
          { word: "no me renta", type: "verb", literal: "bana kâr getirmiyor (bana uymuyor)", explanation: "Slang. Si un plan 'no te renta', significa que el esfuerzo de hacerlo es mayor que el beneficio de disfrutarlo.", examples: [] },
          { word: "mazo", type: "adverb", literal: "çok", explanation: "Intensificador madrileño equivalente a 'mucho'.", examples: [] },
          { word: "salir", type: "verb", literal: "çıkmak", explanation: "Infinitivo, el sujeto real de la oración (Salir no me renta).", examples: [] },
          { word: "esta noche", type: "noun", literal: "bu gece", explanation: "Marcador temporal.", examples: [] },
          { word: "porque estoy", type: "verb", literal: "çünkü bulunuyorum", explanation: "Conector causal y verbo ESTAR.", examples: [] },
          { word: "un poco rallado", type: "adjective", literal: "biraz kafası karışık/bunalmış", explanation: "Slang. Participio del verbo 'rallarse'. Indica un estado mental obsesivo o cansado.", examples: [] },
          { word: "con el curro.", type: "noun", literal: "iş ile", explanation: "Slang. 'Curro' es la palabra coloquial para 'trabajo'.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u17_n10",
      type: "theory",
      title: "Caja de Herramientas: Expresiones de Supervivencia Callejera",
      content: {
        concept: "Para sobrevivir en las calles y bares de España, necesitas dominar estas cinco frases hechas.\n\n• **Estar al loro:** (Gözünü açık tutmak / Dikkatli olmak). *'Estate al loro con la cartera en el metro'.*\n• **Ser un pesado / Ser una plasta:** (Çok sıkıcı/ısrarcı olmak). *'No seas pesado, ya te he dicho que no'.*\n• **Estar de coña / Estar de broma:** (Şaka yapıyor olmak). *'¿Un millón de euros? Estás de coña'.*\n• **Liarse:** Puede significar tres cosas: 1. Confundirse mucho. 2. Envolverse en una situación larga ('Me lie hablando y llegué tarde'). 3. Besarse con alguien en una fiesta.\n• **Tener buena pinta:** (İyi görünmek - comida o planes). *'Esta paella tiene buena pinta'.*",
        examples: [
          { es: "Estate al loro cuando cruces la calle.", tr: "Sokağı geçerken dikkatli ol (gözünü dört aç)." },
          { es: "Me lie estudiando y se me olvidó cenar.", tr: "Ders çalışmaya daldım (liarse) ve akşam yemeği yemeyi unuttum." },
          { es: "Este plan tiene muy buena pinta, me renta.", tr: "Bu plan çok iyi görünüyor, bana uyar." }
        ]
      }
    },
    {
      id: "c1_u17_n11",
      type: "theory",
      title: "Taller de Producción: De bares por Madrid",
      content: {
        concept: "Es el momento de soltarse la corbata y escribir como si estuvieras tomando unas cañas con amigos.\n\n**Instrucciones:**\nEscribe un mensaje de WhatsApp a un amigo español (mínimo 6 líneas) contándole un plan para el fin de semana.\n1. Usa el slang madrileño (Mazo, flipar, rentar o rallarse).\n2. Usa al menos dos expresiones callejeras (Estar al loro, buena pinta, ser un pesado).\n3. Incluye la palabra 'Curro'.\n4. Simula la fusión de palabras en el texto ('p'alante' o 'tol mundo').\n\n**Inspiración:** '¡Qué pasa, tío! Este finde hay una fiesta que tiene muy buena pinta. Tol mundo va a ir. Yo estoy mazo cansado del curro, pero...'",
        examples: []
      }
    },
    {
      id: "c1_u17_n12",
      type: "exam",
      title: "Examen de Unidad: Voces de España",
      content: {
        concept: "Demuestra que tienes oído para la calle. Evalúa tu conocimiento del slang, las expresiones idiomáticas y las reglas fonéticas del español peninsular.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué significa la palabra 'Mazo' en Madrid?", options: ["Mucho / Muy", "Un martillo grande", "Poco / Casi nada"], correct: 0 },
          { type: "multiple_choice", question: "Si alguien te dice 'No te ralles', te está diciendo:", options: ["Que no te rías.", "Que no pienses demasiado en algo / Kafaya takma.", "Que no te cortes el pelo."], correct: 1 },
          { type: "multiple_choice", question: "En el sur de España (Andalucía), la palabra 'Pescado' se suele pronunciar:", options: ["Pescao", "Pescato", "Pescadón"], correct: 0 },
          { type: "multiple_choice", question: "En las Islas Canarias, para decir 'Sizler' (ustedes/vosotros), utilizan:", options: ["Vosotros", "Vos", "Ustedes (como en América Latina)"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa 'Estar al loro'?", options: ["Hablar mucho (como un loro).", "Estar atento / Gözünü dört açmak.", "Estar borracho."], correct: 1 },
          { type: "multiple_choice", question: "Si un plan 'No te renta', significa que:", options: ["No tienes dinero para pagarlo.", "No vale la pena el esfuerzo / Sana uymuyor.", "Es muy aburrido."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es 'El curro' en jerga española?", options: ["El trabajo (İş)", "El coche (Araba)", "El dinero (Para)"], correct: 0 },
          { type: "multiple_choice", question: "La expresión andaluza '¡Illo, ven aquí!' se usa para:", options: ["Llamar a un perro.", "Llamar a un amigo o conocido de forma coloquial.", "Insultar a alguien."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Tirar p'alante'?", options: ["Tirar basura.", "Caminar hacia atrás.", "Seguir adelante a pesar de los problemas."], correct: 2 },
          { type: "multiple_choice", question: "Si algo 'Tiene buena pinta', significa que:", options: ["Está pintado de colores.", "Tiene buen aspecto / İyi görünüyor.", "Es muy caro."], correct: 1 },
          { type: "syntax", turkish: "Bugün çok (mazo) çalışıyorum (currar).", spanish: "Hoy curro mazo", words: ["Hoy", "curro", "mazo", "trabajo", "mucho"] },
          { type: "syntax", turkish: "Bu kitapla şok oldum (Flipar).", spanish: "Flipo con este libro", words: ["Flipo", "con", "este", "libro", "flipar"] },
          { type: "syntax", turkish: "Çok yorgunum (cansao).", spanish: "Estoy muy cansado", words: ["Estoy", "muy", "cansado", "cansao"] },
          { type: "syntax", turkish: "Bu fikir hiç bana uymuyor (no me renta).", spanish: "Esta idea no me renta nada", words: ["Esta", "idea", "no", "me", "renta", "nada", "gusta"] },
          { type: "syntax", turkish: "Lütfen kafana takma (rallarse).", spanish: "No te ralles por favor", words: ["No", "te", "ralles", "por", "favor", "rallar"] },
          { type: "syntax", turkish: "Dostum (Tío), çok (mazo) sıkıcısın (pesado).", spanish: "Tío eres mazo pesado", words: ["Tío", "eres", "mazo", "pesado", "tía"] },
          { type: "syntax", turkish: "Bu yemeğin görünüşü çok iyi (buena pinta).", spanish: "Esta comida tiene muy buena pinta", words: ["Esta", "comida", "tiene", "muy", "buena", "pinta"] },
          { type: "syntax", turkish: "Herkes (Tol mundo) Madrid'e gidiyor.", spanish: "Todo el mundo va a Madrid", words: ["Todo", "el", "mundo", "va", "a", "Madrid"] },
          { type: "syntax", turkish: "Beni başından savdı (freír espárragos).", spanish: "Me mandó a freír espárragos", words: ["Me", "mandó", "a", "freír", "espárragos", "mandar"] },
          { type: "syntax", turkish: "Dikkatli ol (Estar al loro), hırsızlar (ladrones) var.", spanish: "Estate al loro hay ladrones", words: ["Estate", "al", "loro", "hay", "ladrones", "está"] }
        ]
      }
    }
  ]
};
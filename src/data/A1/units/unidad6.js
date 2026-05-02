export const unidad6 = {
  id: "u6", 
  title: "Unidad 6: Estados, Sensaciones y Ubicación", 
  description: "El gran dilema de SER vs ESTAR, las sensaciones físicas con TENER y preposiciones de lugar.",
  nodes: [
    {
      id: "u6_n1", type: "theory", title: "El Dilema: SER vs. ESTAR",
      content: {
        concept: "En español tenemos dos verbos para 'olmak'. Esta es la regla que debes memorizar:\n\n⭐ SER (Esencia): Se usa para lo que NO cambia fácilmente. Identidad, nacionalidad, profesión, color permanente y rasgos de personalidad.\nEjemplo: 'Yo SOY inteligente' (Ben zekiyim).\n\n📍 ESTAR (Estado): Se usa para lo que SÍ cambia o es temporal. Ubicación física, emociones y estados de salud.\nEjemplo: 'Yo ESTOY cansado' (Ben yorgunum).\n\n🇹🇷 TRAMPA PARA TURCOS: En turco dices 'Mutluyum' (Soy feliz / Estoy feliz). En español, si dices 'Soy feliz' significa que eres una persona alegre por naturaleza. Si dices 'Estoy feliz', significa que estás alegre en este momento.",
        examples: [
          { es: "Él es divertido (Personalidad).", tr: "O eğlencelidir." },
          { es: "Él está aburrido ahora (Estado).", tr: "O şu an sıkılmış durumda." },
          { es: "La sopa es deliciosa.", tr: "Çorba lezzetlidir." },
          { es: "La sopa está fría.", tr: "Çorba soğuk (şu an)." },
          { es: "Nosotros somos amigos.", tr: "Biz arkadaşız." },
          { es: "Nosotros estamos en Madrid.", tr: "Biz Madrid'deyiz." }
        ]
      }
    },
    {
      id: "u6_n2", type: "theory", title: "Las Sensaciones con TENER",
      content: {
        concept: "¡Cuidado! Esta es la trampa más grande para hablantes de turco e inglés.\n\nEn español, las sensaciones biológicas (hambre, sed, frío, calor, miedo, sueño) no 'se son', sino que 'se poseen'. Usamos el verbo TENER.\n\n• TENER hambre (Aç olmak)\n• TENER sed (Susamak)\n• TENER frío (Üşümek)\n• TENER calor (Sıcaklamak)\n• TENER miedo (Korkmak)\n• TENER sueño (Uykusu gelmek)\n\n❌ NUNCA digas: 'Estoy hambre' o 'Soy frío'.",
        examples: [
          { es: "Tengo mucha hambre, ¿comemos?", tr: "Çok açım, yemek yiyelim mi?" },
          { es: "¿Tienes frío? Cierra la ventana.", tr: "Üşüyor musun? Pencereyi kapat." },
          { es: "Los niños tienen mucho sueño.", tr: "Çocukların çok uykusu var." },
          { es: "Ella tiene miedo a los perros.", tr: "O köpeklerden korkuyor." },
          { es: "Nosotros tenemos calor en verano.", tr: "Yazın sıcaklıyoruz (sıcağımız var)." }
        ]
      }
    },
    {
      id: "u6_n3", type: "theory", title: "Ubicación y Preposiciones",
      content: {
        concept: "Para decir dónde está algo, usamos siempre el verbo ESTAR seguido de una preposición de lugar.\n\n🗺️ Preposiciones clave:\n• Encima de (Üzerinde)\n• Debajo de (Altında)\n• Al lado de (Yanında)\n• Delante de (Önünde)\n• Detrás de (Arkasında)\n• Cerca de (Yakınında) / Lejos de (Uzağında)\n\nFíjate que casi todas usan la palabra 'DE' para conectar con el objeto de referencia.",
        examples: [
          { es: "El gato está encima del sofá.", tr: "Kedi koltuğun üzerinde." },
          { es: "Las llaves están al lado del café.", tr: "Anahtarlar kahvenin yanında." },
          { es: "Mi casa está lejos de la ciudad.", tr: "Evim şehirden uzak." },
          { es: "El banco está delante del hotel.", tr: "Banka otelin önünde." }
        ]
      }
    },
    {
      id: "u6_n4", type: "theory", title: "Laboratorio de Sintaxis: Ubicación Lineal",
      content: {
        concept: "En turco aglutinan la ubicación (Masanın altında). En español, la estructura es lineal y separada. \n\nOrden: **Sujeto + Verbo ESTAR + Preposición + de + Artículo + Lugar**.\n\nVamos a deconstruir la frase:",
        examples: [{ es: "El perro negro está debajo de la mesa.", tr: "Siyah köpek masanın altında." }],
        analysis: [
          { word: "El", type: "article", literal: "Belirli", explanation: "Posición 1. Artículo definido masculino singular.", examples: [{ es: "El sol.", tr: "Güneş." }, { es: "El libro.", tr: "Kitap." }] },
          { word: "perro", type: "noun", literal: "köpek", explanation: "Posición 2. Sustantivo masculino.", examples: [{ es: "Un perro.", tr: "Bir köpek." }, { es: "Mi perro.", tr: "Benim köpeğim." }] },
          { word: "negro", type: "adjective", literal: "siyah", explanation: "Posición 3. Adjetivo de color. Recuerda: va DESPUÉS del perro.", examples: [{ es: "Coche negro.", tr: "Siyah araba." }] },
          { word: "está", type: "verb", literal: "bulunur/dır", explanation: "Posición 4. Verbo ESTAR conjugado. Indica ubicación temporal.", examples: [{ es: "Él está aquí.", tr: "O burada." }] },
          { word: "debajo", type: "adverb", literal: "altında", explanation: "Posición 5. El núcleo de la ubicación.", examples: [{ es: "Mira debajo.", tr: "Alta bak." }] },
          { word: "de", type: "connector", literal: "-in/-un", explanation: "Posición 6. Conector obligatorio para la preposición.", examples: [{ es: "De nada.", tr: "Bir şey değil." }] },
          { word: "la", type: "article", literal: "belirli", explanation: "Posición 7. Artículo femenino para 'mesa'.", examples: [{ es: "La casa.", tr: "Ev." }] },
          { word: "mesa", type: "noun", literal: "masa", explanation: "Posición 8. Objeto de referencia final.", examples: [{ es: "Una mesa.", tr: "Bir masa." }] }
        ]
      }
    },
    {
      id: "u6_n5", type: "theory", title: "Caja de Herramientas: Vocabulario",
      content: {
        concept: "Repasa la pronunciación de emociones, sensaciones y preposiciones antes de las lecturas.\n\nToca cada palabra y repítela.",
        examples: [
          { es: "Feliz / Triste", tr: "Mutlu / Üzgün" },
          { es: "Cansado / Enfermo", tr: "Yorgun / Hasta" },
          { es: "Enojado / Nervioso", tr: "Kızgın / Sinirli" },
          { es: "Hambre / Sed", tr: "Açlık / Susuzluk" },
          { es: "Frío / Calor", tr: "Soğuk / Sıcak" },
          { es: "Miedo / Sueño", tr: "Korku / Uyku" },
          { es: "Encima / Debajo", tr: "Üstünde / Altında" },
          { es: "Cerca / Lejos", tr: "Yakın / Uzak" },
          { es: "Delante / Detrás", tr: "Önünde / Arkasında" },
          { es: "Al lado", tr: "Yanında" }
        ]
      }
    },
    {
      id: "u6_n6", type: "reading", title: "Lectura A (Diálogo): Caos en el apartamento",
      content: {
        text: "Hoy Carlos está muy estresado porque no encuentra nada en su apartamento.\n\n— Carlos: ¡Ayşe! ¿Dónde están mis llaves? ¡Llego tarde al trabajo!\n— Ayşe: Tranquilo, Carlos. Tus llaves están encima de la mesa, al lado de tu café.\n— Carlos: Gracias... ¿Y mi chaqueta negra? No está en el armario.\n— Ayşe: Tu chaqueta está detrás de la puerta del salón. Carlos, ¿estás bien? Estás muy pálido.\n— Carlos: No, no estoy muy bien. Tengo mucho frío y creo que estoy enfermo.\n— Ayşe: ¡Pobrecito! Tienes fiebre. Tienes que descansar y beber agua porque seguro tienes mucha sed.",
        translation: "Bugün Carlos çok stresli çünkü dairesinde hiçbir şeyi bulamıyor.\n\n— Carlos: Ayşe! Anahtarlarım nerede? İşe geç kalıyorum!\n— Ayşe: Sakin ol Carlos. Anahtarların masanın üzerinde, kahvenin yanında.\n— Carlos: Teşekkürler... Peki siyah ceketim? Gardıropta değil.\n— Ayşe: Ceketin salon kapısının arkasında. Carlos, iyi misin? Çok solgunsun.\n— Carlos: Hayır, pek iyi değilim. Çok üşüyorum ve sanırım hastayım.\n— Ayşe: Zavallıcık! Ateşin var. Dinlenmeli ve su içmelisin çünkü eminim çok susamışsındır."
      }
    },
    {
      id: "u6_n7", type: "reading", title: "Lectura B (Narrativa): Un día para olvidar",
      content: {
        text: "Hoy es un día terrible para Miguel. Miguel es una persona muy organizada, pero hoy todo está mal.\n\nPor la mañana, Miguel está muy cansado porque no duerme bien. En la cocina, no hay café y él tiene mucha hambre. Además, hoy hace mucho frío y llueve. Miguel busca su paraguas, pero el paraguas está debajo de una montaña de ropa sucia.\n\nMiguel camina al trabajo porque su coche está en el taller. La oficina está muy lejos de su casa. Cuando llega, Miguel está mojado, tiene frío y está muy enojado. ¡Él prefiere estar en su cama durmiendo!",
        translation: "Bugün Miguel için berbat bir gün. Miguel çok düzenli biridir ama bugün her şey ters gidiyor.\n\nSabahleyin Miguel çok yorgun çünkü iyi uyuyamıyor. Mutfakta kahve yok ve o çok aç. Ayrıca bugün hava çok soğuk ve yağmur yağıyor. Miguel şemsiyesini arıyor ama şemsiye kirli çamaşır dağının altında.\n\nMiguel işe yürüyor çünkü arabası tamirde. Ofis evinden çok uzak. Vardığında Miguel ıslanmış, üşümüş ve çok kızgın. O yatağında uyuyor olmayı tercih ederdi!"
      }
    },
    {
      id: "u6_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        // 10 Ejercicios de Sintaxis
        { type: "syntax", turkish: "Köpek masanın altında.", spanish: "El perro está debajo de la mesa", words: ["El", "perro", "está", "debajo", "de", "la", "mesa", "encima"] },
        { type: "syntax", turkish: "Biz çok yorgunuz.", spanish: "Nosotros estamos muy cansados", words: ["Nosotros", "estamos", "muy", "cansados", "somos"] },
        { type: "syntax", turkish: "Susamışım (Susuzluğum var).", spanish: "Yo tengo mucha sed", words: ["Yo", "tengo", "mucha", "sed", "estoy", "sediento"] },
        { type: "syntax", turkish: "O (kadın) karanlıktan korkuyor.", spanish: "Ella tiene miedo a la oscuridad", words: ["Ella", "tiene", "miedo", "a", "la", "oscuridad", "está"] },
        { type: "syntax", turkish: "Çok sıcaklıyorum.", spanish: "Tengo mucho calor", words: ["Tengo", "mucho", "calor", "Estoy", "caliente"] },
        { type: "syntax", turkish: "Kahve şu an çok sıcak.", spanish: "El café está muy caliente", words: ["El", "café", "está", "muy", "caliente", "es"] },
        { type: "syntax", turkish: "Restoran otelin arkasında.", spanish: "El restaurante está detrás del hotel", words: ["El", "restaurante", "está", "detrás", "del", "hotel"] },
        { type: "syntax", turkish: "Ofis evden çok uzak.", spanish: "La oficina está muy lejos de casa", words: ["La", "oficina", "está", "muy", "lejos", "de", "casa"] },
        { type: "syntax", turkish: "Kedi koltuğun üzerinde.", spanish: "El gato está encima del sofá", words: ["El", "gato", "está", "encima", "del", "sofá"] },
        { type: "syntax", turkish: "Onlar şu an çok mutlular.", spanish: "Ellos están muy felices ahora", words: ["Ellos", "están", "muy", "felices", "ahora", "son"] },
        // 10 Ejercicios de Voz
        { type: "speaking", spanish: "El perro está debajo de la mesa.", turkish: "Köpek masanın altında." },
        { type: "speaking", spanish: "Yo tengo mucha sed.", turkish: "Çok susadım." },
        { type: "speaking", spanish: "Nosotros estamos muy cansados.", turkish: "Biz çok yorgunuz." },
        { type: "speaking", spanish: "Ella tiene miedo a la oscuridad.", turkish: "O karanlıktan korkuyor." },
        { type: "speaking", spanish: "El café está muy caliente.", turkish: "Kahve şu an çok sıcak." },
        { type: "speaking", spanish: "La oficina está muy lejos de casa.", turkish: "Ofis evden çok uzak." },
        { type: "speaking", spanish: "Tengo mucho calor hoy.", turkish: "Bugün çok sıcakladım." },
        { type: "speaking", spanish: "Mi madre está estresada.", turkish: "Annem stresli." },
        { type: "speaking", spanish: "El gato está encima del sofá.", turkish: "Kedi koltuğun üzerinde." },
        { type: "speaking", spanish: "Creo que estoy enfermo.", turkish: "Sanırım hastayım." }
      ]
    },
    {
      id: "u6_exam", type: "exam", title: "Examen Final: Unidad 6",
      content: {
        concept: "Demuestra tu dominio sobre SER, ESTAR y TENER en situaciones de la vida real.",
        exercises: [
          // 15 de Opción Múltiple
          { type: "multiple_choice", question: "Mi amigo es divertido, pero hoy en la fiesta _______ aburrido.", options: ["es", "está", "tiene"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Üşüyorum'?", options: ["Estoy frío.", "Soy frío.", "Tengo frío."], correct: 2 },
          { type: "multiple_choice", question: "El banco está al lado _____ supermercado (de + el).", options: ["de", "del", "al"], correct: 1 },
          { type: "multiple_choice", question: "Si mi casa está a 2 minutos, mi casa está...", options: ["lejos", "detrás", "cerca"], correct: 2 },
          { type: "multiple_choice", question: "Elige la correcta para decir 'Açım':", options: ["Estoy hambre.", "Soy hambre.", "Tengo hambre."], correct: 2 },
          { type: "multiple_choice", question: "Hoy no me siento bien, _______ enfermo.", options: ["soy", "estoy", "tengo"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué preposición significa 'Altında'?", options: ["Encima de", "Cerca de", "Debajo de"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué preposición significa 'Önünde'?", options: ["Detrás de", "Delante de", "Lejos de"], correct: 1 },
          { type: "multiple_choice", question: "El perro ______ sed.", options: ["está", "es", "tiene"], correct: 2 },
          { type: "multiple_choice", question: "Nosotros ______ miedo de la película.", options: ["somos", "estamos", "tenemos"], correct: 2 },
          { type: "multiple_choice", question: "La sopa ______ fría (no está caliente).", options: ["es", "está", "tiene"], correct: 1 },
          { type: "multiple_choice", question: "Yo ______ mucho sueño (uykum var).", options: ["soy", "estoy", "tengo"], correct: 2 },
          { type: "multiple_choice", question: "El hospital ______ lejos de aquí.", options: ["es", "está", "hay"], correct: 1 },
          { type: "multiple_choice", question: "Tú ______ muy feliz hoy.", options: ["eres", "estás", "tienes"], correct: 1 },
          { type: "multiple_choice", question: "Para decir 'Korkuyorum':", options: ["Estoy miedo", "Soy miedo", "Tengo miedo"], correct: 2 },
          // 15 de Sintaxis
          { type: "syntax", turkish: "O (kadın) karanlıktan korkuyor.", spanish: "Ella tiene miedo a la oscuridad", words: ["Ella", "tiene", "miedo", "a", "la", "oscuridad", "está"] },
          { type: "syntax", turkish: "Çok sıcaklıyorum.", spanish: "Tengo mucho calor", words: ["Tengo", "mucho", "calor", "Estoy", "caliente"] },
          { type: "syntax", turkish: "Bugün hava çok güzel, ben mutluyum.", spanish: "Hoy estoy feliz", words: ["Hoy", "estoy", "feliz", "soy"] },
          { type: "syntax", turkish: "Kahve çok sıcak (Şu an).", spanish: "El café está muy caliente", words: ["El", "café", "está", "muy", "caliente", "es"] },
          { type: "syntax", turkish: "Kedi koltuğun üzerinde.", spanish: "El gato está encima del sofá", words: ["El", "gato", "está", "encima", "del", "sofá"] },
          { type: "syntax", turkish: "Restoran otelin arkasında.", spanish: "El restaurante está detrás del hotel", words: ["El", "restaurante", "está", "detrás", "del", "hotel"] },
          { type: "syntax", turkish: "Ben ofisteyim.", spanish: "Yo estoy en la oficina", words: ["Yo", "estoy", "en", "la", "oficina", "soy"] },
          { type: "syntax", turkish: "Bizim uykumuz var.", spanish: "Nosotros tenemos sueño", words: ["Nosotros", "tenemos", "sueño", "estamos"] },
          { type: "syntax", turkish: "Anahtarlar masanın üzerinde.", spanish: "Las llaves están encima de la mesa", words: ["Las", "llaves", "están", "encima", "de", "la", "mesa"] },
          { type: "syntax", turkish: "Eczane nerede?", spanish: "Dónde está la farmacia", words: ["Dónde", "está", "la", "farmacia", "es"] },
          { type: "syntax", turkish: "O (erkek) çok hasta.", spanish: "Él está muy enfermo", words: ["Él", "está", "muy", "enfermo", "es"] },
          { type: "syntax", turkish: "Sen aç mısın?", spanish: "Tú tienes hambre", words: ["Tú", "tienes", "hambre", "estás"] },
          { type: "syntax", turkish: "Ayakkabılar yatağın altında.", spanish: "Los zapatos están debajo de la cama", words: ["Los", "zapatos", "están", "debajo", "de", "la", "cama"] },
          { type: "syntax", turkish: "Benim annem stresli.", spanish: "Mi madre está estresada", words: ["Mi", "madre", "está", "estresada", "es"] },
          { type: "syntax", turkish: "Tú üşüyorsun (üşümen var).", spanish: "Tú tienes mucho frío", words: ["Tú", "tienes", "mucho", "frío", "estás"] }
        ]
      }
    }
  ]
};
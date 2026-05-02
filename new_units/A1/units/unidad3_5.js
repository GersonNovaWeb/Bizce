export const unidad3_5 = {
  id: "u3_5",
  title: "Unidad 3.5: Artículos y Preguntas",
  description: "Los artículos no existen en turco. Las preguntas se forman diferente. Aquí aprendes los dos conceptos que más confunden a los turcos al principio.",
  nodes: [
    {
      id: "u3_5_n1", type: "theory", title: "¿Qué es un artículo? El turco no los tiene.",
      content: {
        concept: "En turco, dices simplemente 'ev' para 'casa', 'kasaba' para 'ciudad'. No hay ninguna palabra antes del sustantivo que indique si es específico o general.\n\nEn español SIEMPRE hay un artículo delante del sustantivo. Los artículos son pequeñas palabras que indican:\n1. Si el objeto es CONOCIDO o DESCONOCIDO para el oyente\n2. Si es MASCULINO o FEMENINO\n3. Si es SINGULAR o PLURAL\n\n🔴 LOS ARTÍCULOS DEFINIDOS (el objeto es conocido / específico):\n• EL → masculino singular: el libro, el perro, el día\n• LA → femenino singular: la casa, la mujer, la noche\n• LOS → masculino plural: los libros, los perros\n• LAS → femenino plural: las casas, las mujeres\n\n🟡 LOS ARTÍCULOS INDEFINIDOS (el objeto es nuevo o desconocido):\n• UN → masculino singular: un libro, un perro\n• UNA → femenino singular: una casa, una mujer\n• UNOS → masculino plural: unos libros\n• UNAS → femenino plural: unas casas",
        examples: [
          { es: "Tengo un perro. El perro se llama Max.", tr: "Bir köpeğim var. Köpek (o köpek) Max adını taşıyor.\n→ Primero: UN perro (nuevo, desconocido). Después: EL perro (ya lo conocemos)." },
          { es: "Busco una casa. La casa debe ser grande.", tr: "Bir ev arıyorum. Ev büyük olmalı." },
          { es: "El agua está fría.", tr: "Su soğuk. → Agua específica (la de aquí)" },
          { es: "¿Hay una farmacia cerca?", tr: "Yakında bir eczane var mı? → Cualquier farmacia" }
        ]
      }
    },
    {
      id: "u3_5_n2", type: "theory", title: "Género: Masculino y Femenino",
      content: {
        concept: "En turco, los sustantivos NO tienen género. 'O' puede ser él, ella o ello.\n\nEn español, TODO sustantivo es masculino o femenino. Esto afecta al artículo y al adjetivo.\n\n🟢 REGLA GENERAL (no perfecta pero muy útil):\n• Termina en -O → generalmente MASCULINO: libro, perro, niño, vaso\n• Termina en -A → generalmente FEMENINO: casa, mesa, niña, naranja\n• Termina en -CIÓN, -SIÓN, -DAD, -TAD → FEMENINO: nación, televisión, ciudad, libertad\n• Termina en -OR → generalmente MASCULINO: color, amor, calor\n\n🔴 EXCEPCIONES IMPORTANTES (memorizar):\n• el día (masculino, aunque termina en -a)\n• el mapa (masculino)\n• el problema (masculino)\n• la mano (femenino, aunque termina en -o)\n• la foto (femenino)\n• la moto (femenino)\n\n⚠️ Los adjetivos CONCUERDAN con el género:\n• El perro blanco / La casa blanca\n• Un niño inteligente / Una niña inteligente (-e no cambia)",
        examples: [
          { es: "el libro rojo / la mesa roja", tr: "kırmızı kitap / kırmızı masa → El adjetivo cambia" },
          { es: "el día bonito / el mapa viejo", tr: "Terminan en -a pero son MASCULINOS" },
          { es: "la mano derecha / la foto bonita", tr: "Terminan en -o pero son FEMENINOS" },
          { es: "la ciudad, la nación, la libertad", tr: "Terminaciones que siempre son femeninas" }
        ]
      }
    },
    {
      id: "u3_5_n3", type: "theory", title: "El Reto Turco: Preguntas",
      content: {
        concept: "En turco, las preguntas se forman con el SUFIJO -mi/-mı/-mu/-mü añadido al final del verbo:\n• Geliyorsun → ¿Vienes? / Geliyor musun?\n\nEn español NO hay sufijo de pregunta. Hay DOS formas de hacer preguntas:\n\n🟢 MÉTODO 1 — Entonación ascendente:\nLa oración tiene el mismo orden que una frase normal, pero la voz SUBE al final.\n• Tú hablas español. → ¿Tú hablas español? (voz sube al final)\n• Ella vive aquí. → ¿Ella vive aquí?\n\n🟡 MÉTODO 2 — Inversión sujeto-verbo:\nEl verbo va ANTES del sujeto.\n• Tú tienes frío. → ¿Tienes tú frío? / ¿Tienes frío?\n• Él es médico. → ¿Es él médico? / ¿Es médico?\n\n🔴 PREGUNTAS CON PALABRA INTERROGATIVA:\nQué · Quién · Cuándo · Dónde · Por qué · Cómo · Cuánto · Cuál\nEstas palabras siempre llevan TILDE (acento escrito).\n• ¿Qué haces? · ¿Dónde vives? · ¿Cuándo llegaste?",
        examples: [
          { es: "Declaración: Tú hablas español.\nPregunta: ¿Hablas español?", tr: "İfade: Sen İspanyolca konuşuyorsun.\nSoru: İspanyolca konuşuyor musun?" },
          { es: "¿Qué es esto?", tr: "Bu ne?" },
          { es: "¿Dónde está el baño?", tr: "Tuvalet nerede?" },
          { es: "¿Cuánto cuesta?", tr: "Ne kadar tutar?" },
          { es: "¿Por qué no comes?", tr: "Neden yemiyorsun?" }
        ]
      }
    },
    {
      id: "u3_5_n4", type: "theory", title: "Artículos: Cuándo NO usarlos",
      content: {
        concept: "Aunque en español los artículos son muy frecuentes, hay casos donde NO se usan:\n\n❌ SIN ARTÍCULO con profesiones (después de ser):\n• Soy médico. (NO: Soy un médico)\n• Es profesora. (NO: Es una profesora)\n→ Pero sí usamos artículo si añadimos adjetivo: Soy un médico excelente.\n\n❌ SIN ARTÍCULO con días de la semana en generalizaciones:\n• Los lunes tengo clase. (AQUÍ SÍ, porque es generalización: 'todos los lunes')\n• Hoy es lunes. (sin artículo)\n\n❌ SIN ARTÍCULO después de 'hay':\n• Hay un perro. / Hay una tienda. / Hay unos niños.\n→ 'Hay' siempre va con artículo indefinido (un/una/unos/unas) o sin artículo.\n\n⚠️ REGLA ESPECIAL: EL + A = AL / DE + EL = DEL\n• Voy al mercado. (a + el = al)\n• Vengo del trabajo. (de + el = del)",
        examples: [
          { es: "Mi padre es ingeniero.", tr: "Babam mühendis. (sin artículo después de ser)" },
          { es: "Hay una farmacia en la calle.", tr: "Sokakta bir eczane var. (hay + un/una)" },
          { es: "Voy al parque. (a + el)", tr: "Parka gidiyorum." },
          { es: "El perro del vecino ladra mucho. (de + el)", tr: "Komşunun köpeği çok havlıyor." }
        ]
      }
    },
    {
      id: "u3_5_n5", type: "reading", title: "Lectura: Una mañana en el mercado",
      content: {
        text: "Son las 9 de la mañana. María va al mercado. El mercado está cerca de su casa.\nElla necesita unas manzanas, un kilo de tomates y una botella de aceite.\n\nEn el mercado, María ve a un vendedor.\n— Buenos días. ¿Tiene usted manzanas frescas?\n— Sí señora, tenemos unas manzanas excelentes. ¿Cuántos kilos quiere?\n— Un kilo, por favor. ¿Y el aceite? ¿Dónde está el aceite de oliva?\n— El aceite está al fondo, a la derecha.\n— Perfecto. ¿Cuánto cuesta todo?\n— Son cuatro euros con cincuenta.\n— Gracias. ¡Hasta luego!\n— ¡Buen día señora!",
        translation: "Saat sabah 9. María markete gidiyor. Market evinin yakınında.\nO birkaç elma, bir kilo domates ve bir şişe zeytinyağına ihtiyaç duyuyor.\n\nMarkette María bir satıcı görüyor.\n— Günaydın. Taze elmanız var mı?\n— Evet hanımefendi, mükemmel elmalarımız var. Kaç kilo istiyorsunuz?\n— Bir kilo lütfen. Peki zeytinyağı? Zeytinyağı nerede?\n— Zeytinyağı en arkada, sağda.\n— Harika. Her şey ne kadar tutar?\n— Dört euro elli sent.\n— Teşekkürler. Görüşürüz!\n— İyi günler hanımefendi!\n\n🎯 ARTÍCULOS EN ESTE TEXTO:\n• EL mercado / EL aceite de oliva (conocidos, específicos)\n• UN kilo / UNA botella / UN vendedor (primera mención)\n• UNAS manzanas (plural indefinido)"
      }
    },
    {
      id: "u3_5_n6", type: "quiz", title: "Práctica: Artículos y Preguntas",
      exercises: [
        { type: "syntax", turkish: "Kitap masanın üzerinde.", spanish: "El libro está en la mesa", words: ["El", "libro", "está", "en", "la", "mesa", "Un", "una"] },
        { type: "syntax", turkish: "Yakında bir eczane var mı?", spanish: "Hay una farmacia cerca", words: ["Hay", "una", "farmacia", "cerca", "el", "la"] },
        { type: "syntax", turkish: "Babam mühendis.", spanish: "Mi padre es ingeniero", words: ["Mi", "padre", "es", "ingeniero", "un", "el"] },
        { type: "syntax", turkish: "Parka gidiyorum.", spanish: "Voy al parque", words: ["Voy", "al", "parque", "a", "el", "en"] },
        { type: "syntax", turkish: "Su soğuk.", spanish: "El agua está fría", words: ["El", "agua", "está", "fría", "La", "es"] },
        { type: "syntax", turkish: "Tuvalet nerede?", spanish: "¿Dónde está el baño", words: ["¿Dónde", "está", "el", "baño", "¿Qué", "un"] },
        { type: "syntax", turkish: "Ne kadar tutar?", spanish: "¿Cuánto cuesta", words: ["¿Cuánto", "cuesta", "¿Qué", "es", "¿Dónde"] },
        { type: "syntax", turkish: "Komşunun köpeği çok havlıyor.", spanish: "El perro del vecino ladra mucho", words: ["El", "perro", "del", "vecino", "ladra", "mucho", "de", "el"] },
        { type: "speaking", spanish: "¿Dónde está el mercado?", turkish: "Market nerede?" },
        { type: "speaking", spanish: "Hay una farmacia en la calle.", turkish: "Sokakta bir eczane var." }
      ]
    },
    {
      id: "u3_5_exam", type: "exam", title: "Examen: Artículos y Preguntas",
      content: {
        concept: "Demuestra que dominas los artículos definidos e indefinidos y la formación de preguntas.",
        exercises: [
          { type: "multiple_choice", question: "Completa: '_____ libro está en _____ mesa.'", options: ["El / la", "Un / una", "La / el"], correct: 0 },
          { type: "multiple_choice", question: "Primera vez que mencionas un objeto: '¿Tienes ___ bolígrafo?'", options: ["un", "el", "al"], correct: 0 },
          { type: "multiple_choice", question: "'Soy ___ médico.' (profesión, sin adjetivo)", options: ["Sin artículo: 'Soy médico'", "un médico", "el médico"], correct: 0 },
          { type: "multiple_choice", question: "'Voy ___ supermercado.' (a + el)", options: ["al", "a el", "del"], correct: 0 },
          { type: "multiple_choice", question: "La palabra 'día' es:", options: ["Masculina (el día)", "Femenina (la día)", "Depende del contexto"], correct: 0 },
          { type: "multiple_choice", question: "La palabra 'mano' es:", options: ["Femenina (la mano)", "Masculina (el mano)", "No tiene género"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la pregunta correcta?", options: ["¿Dónde vives?", "¿Donde vives?", "¿Donde vives"], correct: 0 },
          { type: "multiple_choice", question: "Las palabras interrogativas en español:", options: ["Siempre llevan tilde (acento escrito)", "Nunca llevan tilde", "A veces llevan tilde"], correct: 0 },
          { type: "multiple_choice", question: "'Hay ___ tienda cerca.' Elige el artículo correcto.", options: ["una", "la", "el"], correct: 0 },
          { type: "multiple_choice", question: "El adjetivo en español va generalmente:", options: ["Después del sustantivo", "Antes del sustantivo", "Puede ir en cualquier posición siempre"], correct: 0 },
          { type: "syntax", turkish: "Kırmızı bir araba istiyorum.", spanish: "Quiero un coche rojo", words: ["Quiero", "un", "coche", "rojo", "el", "roja"] },
          { type: "syntax", turkish: "Burada bir hastane var mı?", spanish: "¿Hay un hospital aquí", words: ["¿Hay", "un", "hospital", "aquí", "el", "está"] },
          { type: "syntax", turkish: "Komşunun evi büyük.", spanish: "La casa del vecino es grande", words: ["La", "casa", "del", "vecino", "es", "grande", "de", "el"] },
          { type: "syntax", turkish: "Markete gidiyorum.", spanish: "Voy al mercado", words: ["Voy", "al", "mercado", "a", "el", "en"] },
          { type: "syntax", turkish: "Neden yemiyorsun?", spanish: "¿Por qué no comes", words: ["¿Por", "qué", "no", "comes", "¿Qué", "¿Cómo"] }
        ]
      }
    }
  ]
};

// UNIDAD 2.5: SER VS ESTAR — RONDA 2
// Posición: Entre U2 (El Arte de Sustituir) y U3 (Ayer y la Historia)
// Justificación: La U6 de A1 introduce Ser/Estar básico pero los casos complejos
// persisten como error hasta B1 si no se refuerzan en A2

export const unidad2_5_ser_estar = {
  id: "u2_5",
  title: "Unidad 2.5: Ser vs Estar — Ronda 2",
  description: "Ya conoces la regla básica. Ahora viene lo difícil: los adjetivos que cambian COMPLETAMENTE de significado según uses SER o ESTAR. Este es el error número 1 de los turcos hasta nivel B1.",
  nodes: [
    {
      id: "u2_5_n1", type: "theory", title: "Repaso: La Regla Base",
      content: {
        concept: "Antes de los casos complejos, repasamos la base:\n\n🔹 SER → Identidad permanente o característica esencial\n• Quién es: Soy médico. Es turco.\n• Cómo es esencialmente: El cielo es azul. La nieve es blanca.\n• Origen: Soy de Estambul.\n• Material: La mesa es de madera.\n• Tiempo/fecha: Hoy es lunes. Son las tres.\n\n🔹 ESTAR → Estado, condición temporal o ubicación\n• Dónde está: Estoy en Madrid. El libro está en la mesa.\n• Cómo está ahora: Estoy cansado. Está enfermo.\n• Resultado de un proceso: La puerta está abierta.\n• Progresivo: Estoy comiendo.\n\n🇹🇷 EL PROBLEMA TURCO: En turco, 'olmak' hace todo. 'Hasta olmak' (estar enfermo), 'doktor olmak' (ser médico), 'İstanbul'da olmak' (estar en Estambul). No hay distinción. Por eso los turcos mezclan SER y ESTAR constantemente.",
        examples: [
          { es: "SOY estudiante. (identidad)", tr: "Ben öğrenciyim. (kalıcı kimlik)" },
          { es: "ESTOY estudiando. (acción temporal)", tr: "Şu an çalışıyorum. (geçici durum)" },
          { es: "La ciudad ES grande. (característica)", tr: "Şehir büyük. (özellik)" },
          { es: "La ciudad ESTÁ llena de gente. (estado actual)", tr: "Şehir şu an kalabalık. (geçici durum)" }
        ]
      }
    },
    {
      id: "u2_5_n2", type: "theory", title: "Los Adjetivos que Cambian de Significado",
      content: {
        concept: "⚠️ NIVEL AVANZADO — Este es el concepto más difícil de Ser vs Estar.\n\nAlgunos adjetivos tienen DOS significados completamente distintos según uses SER o ESTAR:\n\n| Adjetivo | SER (característica) | ESTAR (estado) |\n|---------|---------------------|----------------|\n| listo | inteligente | preparado/listo |\n| malo | malvado/de mala calidad | enfermo |\n| bueno | bondadoso/de buena calidad | sano/en buena forma |\n| rico | adinerado/millonario | delicioso |\n| muerto | (raro) | fallecido |\n| vivo | listo/despierto/astuto | vivo (no muerto) |\n| aburrido | aburrido (como persona) | aburrido (en este momento) |\n| seguro | seguro (persona decidida) | seguro (lugar/cosa protegida) |\n| libre | libre (concepto filosófico) | libre (disponible/desocupado) |\n| orgulloso | orgulloso (carácter) | orgulloso (sentimiento ahora) |",
        examples: [
          { es: "Ese alumno ES muy listo. (es inteligente)", tr: "O öğrenci çok zeki. (özellik)" },
          { es: "¿Estás listo? (¿estás preparado?)", tr: "Hazır mısın? (geçici durum)" },
          { es: "Tu jefe ES muy malo. (es malvado)", tr: "Patronun çok kötü biri. (karakter)" },
          { es: "Hoy ESTOY malo. (estoy enfermo)", tr: "Bugün hastalandım. (geçici durum)" },
          { es: "Este restaurante ES muy rico. (buena calidad)", tr: "Bu restoran çok iyi. (kalite)" },
          { es: "Esta sopa ESTÁ muy rica. (está deliciosa)", tr: "Bu çorba çok lezzetli. (şu anki tat)" }
        ]
      }
    },
    {
      id: "u2_5_n3", type: "theory", title: "SER vs ESTAR con Adjetivos de Carácter vs Estado",
      content: {
        concept: "La misma persona puede ser descrita con SER (su carácter) o ESTAR (su estado actual):\n\nSER → describe cómo es la persona EN GENERAL, su personalidad\nESTAR → describe cómo está la persona AHORA MISMO\n\nEsta distinción no existe en turco. 'O mutlu' puede significar tanto 'es una persona feliz' como 'está contenta ahora'. En español DEBES elegir.\n\n📌 TRUCO PRÁCTICO:\n→ ¿Puedo añadir 'normalmente' o 'siempre' sin que cambie el sentido? → SER\n→ ¿Puedo añadir 'hoy', 'ahora', 'en este momento'? → ESTAR",
        examples: [
          { es: "Mi madre ES muy alegre. (siempre es así)", tr: "Annem çok neşeli biri. (karakter)" },
          { es: "Mi madre ESTÁ muy alegre hoy. (hoy está contenta)", tr: "Annem bugün çok mutlu. (şu an)" },
          { es: "El profesor ES aburrido. (es aburrido como persona)", tr: "Öğretmen sıkıcı biri. (kişilik)" },
          { es: "La clase ESTÁ aburrida. (la clase en este momento es aburrida)", tr: "Ders şu an sıkıcı. (geçici)" },
          { es: "Ese chico ES muy nervioso. (es nervioso por naturaleza)", tr: "O çocuk doğası gereği gergin." },
          { es: "Hoy ESTOY muy nervioso. (hoy me siento nervioso)", tr: "Bugün çok gerginim. (şu an)" }
        ]
      }
    },
    {
      id: "u2_5_n4", type: "theory", title: "El Reto Turco: Los 8 Errores Más Comunes",
      content: {
        concept: "🇹🇷 ANÁLISIS ESPECÍFICO PARA TURCOS\n\nEstos son los 8 errores de Ser/Estar que los turcos cometen más frecuentemente:\n\n❌ 1. 'Soy en casa' → ✅ 'Estoy en casa' (ubicación = ESTAR)\n❌ 2. 'El café es frío' → ✅ 'El café está frío' (estado temporal = ESTAR)\n❌ 3. 'Estoy estudiante' → ✅ 'Soy estudiante' (identidad = SER)\n❌ 4. 'Está de Turquía' → ✅ 'Es de Turquía' (origen = SER)\n❌ 5. 'La película es aburrida' → puede ser ✅ si se habla del género/estilo general, pero si hablas de verla ahora → 'La película está aburrida'\n❌ 6. 'Hoy soy cansado' → ✅ 'Hoy estoy cansado' (estado físico temporal = ESTAR)\n❌ 7. 'La comida es lista' → ✅ 'La comida está lista' (resultado de proceso = ESTAR)\n❌ 8. 'Es muerto' → ✅ 'Está muerto' (estado resultante = ESTAR)",
        examples: [
          { es: "ESTOY en casa. (ubicación)", tr: "Evdeyim. → NUNCA: 'Soy en casa'" },
          { es: "El café ESTÁ frío. (temperatura actual)", tr: "Kahve soğuk. (şu an soğuk) → NUNCA: 'El café es frío'" },
          { es: "SOY turco. (nacionalidad/origen)", tr: "Türküm. → NUNCA: 'Estoy turco'" },
          { es: "ESTOY cansado. (estado físico)", tr: "Yorgunum. → NUNCA: 'Soy cansado'" }
        ]
      }
    },
    {
      id: "u2_5_n5", type: "theory", title: "SER para Eventos y Tiempo",
      content: {
        concept: "Un caso especial que confunde a todos: SER se usa para describir dónde y cuándo sucede un evento, aunque parezca 'ubicación' (que normalmente sería ESTAR).\n\n📌 REGLA:\n• La fiesta ES en Madrid. (evento → SER)\n• Carmen ESTÁ en Madrid. (persona ubicada → ESTAR)\n• El concierto FUE en el estadio. (evento → SER)\n• Nosotros ESTUVIMOS en el estadio. (personas ubicadas → ESTAR)\n\nPor eso se dice:\n→ La reunión es a las tres. (evento)\n→ Yo estoy a las tres. (persona disponible a esa hora)",
        examples: [
          { es: "La boda ES en la iglesia de Santa Ana.", tr: "Düğün Santa Ana Kilisesi'nde (gerçekleşiyor). (etkinlik = SER)" },
          { es: "Los novios ESTÁN en la iglesia.", tr: "Gelinçift kilisede (bulunuyor). (kişi konumu = ESTAR)" },
          { es: "El examen ES el martes.", tr: "Sınav Salı günü. (etkinlik = SER)" },
          { es: "Yo ESTOY el martes disponible.", tr: "Ben Salı günü müsaitim. (durum = ESTAR)" }
        ]
      }
    },
    {
      id: "u2_5_n6", type: "reading", title: "Lectura: Un día complicado",
      content: {
        text: "Hoy es martes y Marta está en casa con su familia. Normalmente ella es muy activa y positiva, pero hoy está un poco triste porque su gato está malo.\n\nEl gato se llama Rojo y es muy listo — siempre sabe cuándo llega la hora de comer. Pero hoy Rojo no está bien. Está tumbado en el sofá y no quiere comer. La comida está lista pero él no la toca.\n\n— ¿Estás listo para ir al veterinario? — le pregunta Marta a su marido Carlos.\n— Sí, estoy listo. ¿Dónde están las llaves del coche?\n— Están en la mesa. Vamos, la clínica es a diez minutos de aquí.\n\nEl veterinario es un señor mayor muy bueno y muy tranquilo. Examina a Rojo y dice:\n— Rojo está bien, no es nada serio. Solo está un poco estresado. Los gatos son muy sensibles.",
        translation: "Bugün Salı ve Marta ailesiyle evde. Normalde o çok aktif ve pozitif biri, ama bugün kedisi hastalandığı için biraz üzgün.\n\nKedinin adı Rojo ve çok zeki — yemek saatinin geldiğini her zaman biliyor. Ama bugün Rojo iyi değil. Kanepede uzanmış yatıyor ve yemek yemek istemiyor. Yemek hazır ama o dokunmuyor.\n\n— Veterinere gitmeye hazır mısın? — diye soruyor Marta kocası Carlos'a.\n— Evet, hazırım. Arabanın anahtarları nerede?\n— Masada. Hadi gidelim, klinik buradan on dakika.\n\nVeteriner çok iyi ve sakin, yaşlı bir bay. Rojo'yu muayene ediyor ve diyor:\n— Rojo iyidir, ciddi bir şey değil. Sadece biraz stresli. Kediler çok hassastır."
      }
    },
    {
      id: "u2_5_n7", type: "quiz", title: "Práctica: Elige SER o ESTAR",
      exercises: [
        { type: "multiple_choice", question: "La sopa ___ muy rica. (está deliciosa)", options: ["está", "es"], correct: 0 },
        { type: "multiple_choice", question: "Mi abuelo ___ muy rico. (es millonario)", options: ["es", "está"], correct: 0 },
        { type: "multiple_choice", question: "El niño ___ malo hoy. (está enfermo)", options: ["está", "es"], correct: 0 },
        { type: "multiple_choice", question: "Ese hombre ___ muy malo. (es malvado)", options: ["es", "está"], correct: 0 },
        { type: "multiple_choice", question: "¿___ listo para el examen?", options: ["Estás", "Eres"], correct: 0 },
        { type: "multiple_choice", question: "Mi hermana ___ muy lista. (es inteligente)", options: ["es", "está"], correct: 0 },
        { type: "multiple_choice", question: "La reunión ___ en la sala 3.", options: ["es", "está"], correct: 0 },
        { type: "multiple_choice", question: "El director ___ en la sala 3 ahora.", options: ["está", "es"], correct: 0 },
        { type: "multiple_choice", question: "Hoy ___ cansado después del trabajo.", options: ["estoy", "soy"], correct: 0 },
        { type: "multiple_choice", question: "___ de Ankara, Turquía.", options: ["Soy", "Estoy"], correct: 0 },
        { type: "syntax", turkish: "Kahve soğuk artık. (şu an soğumuş)", spanish: "El café está frío", words: ["El", "café", "está", "frío", "es", "ser"] },
        { type: "syntax", turkish: "Bugün yorgunum.", spanish: "Hoy estoy cansado", words: ["Hoy", "estoy", "cansado", "soy", "muy"] },
        { type: "syntax", turkish: "Düğün parkta gerçekleşiyor.", spanish: "La boda es en el parque", words: ["La", "boda", "es", "en", "el", "parque", "está", "estar"] }
      ]
    },
    {
      id: "u2_5_n8", type: "theory", title: "Sintaxis Visual: Ser vs Estar en contexto complejo",
      content: {
        concept: "Analizamos: 'Aunque normalmente es un hombre muy tranquilo, hoy está muy nervioso porque la reunión es en su oficina.'",
        examples: [{ es: "Aunque normalmente es un hombre muy tranquilo, hoy está muy nervioso porque la reunión es en su oficina.", tr: "Normalde çok sakin biri olmasına rağmen, toplantı kendi ofisinde olduğu için bugün çok gergin." }],
        analysis: [
          { word: "es (tranquilo)", type: "verb-ser", literal: "sakin biri (karakter)", explanation: "SER para característica permanente de personalidad. 'Normalmente' confirma que es su carácter.", examples: [{ es: "Es tranquilo = siempre es así", tr: "Doğası gereği sakin" }] },
          { word: "está (nervioso)", type: "verb-estar", literal: "şu an gergin (geçici)", explanation: "ESTAR para estado temporal. 'Hoy' confirma que es temporal.", examples: [{ es: "Está nervioso = solo hoy, por una razón", tr: "Bugün gergin = geçici durum" }] },
          { word: "es (en su oficina)", type: "verb-ser", literal: "ofisinde gerçekleşiyor", explanation: "SER para ubicación de un evento (reunión = evento, no persona).", examples: [{ es: "La reunión es en... = evento", tr: "Toplantı ... 'da → etkinlik = SER" }] }
        ]
      }
    },
    {
      id: "u2_5_n9", type: "theory", title: "Caja de Herramientas: Adjetivos clave con SER y ESTAR",
      content: {
        concept: "Los adjetivos más importantes para practicar la distinción:",
        examples: [
          { es: "SER feliz (carácter) / ESTAR feliz (ahora)", tr: "mutlu biri / şu an mutlu" },
          { es: "SER tranquilo / ESTAR tranquilo", tr: "sakin biri / şu an sakin" },
          { es: "SER nervioso / ESTAR nervioso", tr: "gergin biri / şu an gergin" },
          { es: "SER aburrido (persona) / ESTAR aburrido (sentirse)", tr: "sıkıcı biri / sıkılmış" },
          { es: "SER malo (malvado) / ESTAR malo (enfermo)", tr: "kötü biri / hasta" },
          { es: "SER rico (millonario) / ESTAR rico (delicioso)", tr: "zengin / lezzetli" },
          { es: "SER listo (inteligente) / ESTAR listo (preparado)", tr: "zeki / hazır" },
          { es: "SER libre (filosófico) / ESTAR libre (disponible)", tr: "özgür (kavram) / müsait" },
          { es: "SER seguro (persona decidida) / ESTAR seguro (lugar seguro)", tr: "emin biri / güvenli yer" },
          { es: "SER vivo (astuto) / ESTAR vivo (no muerto)", tr: "zeki/kurnaz / hayatta" }
        ]
      }
    },
    {
      id: "u2_5_n10", type: "workshop", title: "Taller: Describe a dos personas",
      content: {
        prompt: "Describe a dos personas que conoces (pueden ser reales o inventadas). Para cada persona escribe: cómo ES normalmente (carácter, origen, profesión) y cómo ESTÁ hoy (estado físico, emocional, dónde está). Mínimo 80 palabras. Usa al menos 6 veces SER y 6 veces ESTAR correctamente.",
        minWords: 80,
        maxWords: 120,
        focusPoints: ["SER para identidad/carácter", "ESTAR para estado temporal/ubicación", "Adjetivos que cambian de significado"]
      }
    },
    {
      id: "u2_5_exam", type: "exam", title: "Examen Final: Unidad 2.5",
      content: {
        concept: "30 preguntas sobre SER vs ESTAR en todos sus usos, incluyendo adjetivos de doble significado.",
        exercises: [
          { type: "multiple_choice", question: "La comida ___ lista. (preparada/terminada)", options: ["está", "es"], correct: 0 },
          { type: "multiple_choice", question: "Ese chico ___ muy listo. (inteligente)", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "Tu abuela ___ mala hoy. (enferma)", options: ["está", "es"], correct: 0 },
          { type: "multiple_choice", question: "El villano de la película ___ muy malo. (malvado)", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "Este pastel ___ buenísimo. (delicioso)", options: ["está", "es"], correct: 0 },
          { type: "multiple_choice", question: "Mi médico ___ muy bueno. (de calidad, competente)", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "El abuelo de Ana ___ vivo todavía. (no ha muerto)", options: ["está", "es"], correct: 0 },
          { type: "multiple_choice", question: "Ese alumno ___ muy vivo. (muy astuto)", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "La fiesta ___ en casa de Luis.", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "Luis ___ en casa ahora.", options: ["está", "es"], correct: 0 },
          { type: "multiple_choice", question: "Hoy ___ martes.", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "¿A qué hora ___ la reunión?", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "El anillo ___ de oro.", options: ["es", "está"], correct: 0 },
          { type: "multiple_choice", question: "La ventana ___ abierta.", options: ["está", "es"], correct: 0 },
          { type: "multiple_choice", question: "Mis padres ___ de Ankara.", options: ["son", "están"], correct: 0 },
          { type: "syntax", turkish: "Çorba çok lezzetli.", spanish: "La sopa está muy rica", words: ["La", "sopa", "está", "muy", "rica", "es", "ser"] },
          { type: "syntax", turkish: "O çok zeki biri.", spanish: "Él es muy listo", words: ["Él", "es", "muy", "listo", "está", "estar"] },
          { type: "syntax", turkish: "Bugün hastayım.", spanish: "Hoy estoy malo", words: ["Hoy", "estoy", "malo", "soy", "muy"] },
          { type: "syntax", turkish: "Konser tiyatroda.", spanish: "El concierto es en el teatro", words: ["El", "concierto", "es", "en", "el", "teatro", "está"] },
          { type: "syntax", turkish: "Kapı açık.", spanish: "La puerta está abierta", words: ["La", "puerta", "está", "abierta", "es", "ser"] },
          { type: "multiple_choice", question: "¿Cuál es CORRECTO? (sobre el tiempo/temperatura)", options: ["Hoy está muy caluroso.", "Hoy es muy caluroso.", "Ambas son correctas en distintos contextos."], correct: 2 },
          { type: "multiple_choice", question: "'Estar muerto' vs 'ser muerto': ¿cuál se usa?", options: ["Solo 'estar muerto' (estado resultante)", "Solo 'ser muerto' (identidad)", "Ambos son iguales"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el ERROR?", options: ["Soy en casa.", "Estoy en casa.", "La fiesta es en casa."], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el ERROR?", options: ["Estoy médico.", "Soy médico.", "Es médico."], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es CORRECTO?", options: ["El café está frío — se ha enfriado.", "El café es frío — característica permanente.", "Ambas son iguales."], correct: 0 },
          { type: "syntax", turkish: "Müzik sıkıcı (genel olarak bu müzik türü).", spanish: "Esta música es aburrida", words: ["Esta", "música", "es", "aburrida", "está", "ser"] },
          { type: "syntax", turkish: "Bugün çok sıkılıyorum.", spanish: "Hoy estoy muy aburrido", words: ["Hoy", "estoy", "muy", "aburrido", "soy", "ser"] },
          { type: "syntax", turkish: "Evlilik yıldönümü bu Cumartesi.", spanish: "El aniversario es este sábado", words: ["El", "aniversario", "es", "este", "sábado", "está"] },
          { type: "syntax", turkish: "Anahtar masada.", spanish: "La llave está en la mesa", words: ["La", "llave", "está", "en", "la", "mesa", "es"] },
          { type: "syntax", turkish: "Zengin olmak mutlu olmak değildir.", spanish: "Ser rico no es estar feliz", words: ["Ser", "rico", "no", "es", "estar", "feliz", "siendo", "estando"] }
        ]
      }
    }
  ]
};

// UNIDAD 0: FONÉTICA DE SUPERVIVENCIA
// Posición: Antes de U1 — Unidad de bienvenida/onboarding
// Nodos: 8 (formato reducido, no 12)
// Justificación: Turcos sin fonética básica desarrollan acento irreversible desde el primer día

export const unidad0_fonetica = {
  id: "u0",
  title: "Unidad 0: Fonética de Supervivencia",
  description: "Antes de aprender palabras, aprende los sonidos. El español tiene 5 sonidos que no existen en turco. Dominarlos ahora te ahorrará meses de acento incorrecto.",
  isOnboarding: true,
  nodes: [
    {
      id: "u0_n1", type: "theory", title: "¿Por qué el español suena diferente?",
      content: {
        concept: "El turco y el español tienen sistemas de sonidos completamente distintos. El turco tiene 29 letras, el español tiene 27. Pero la diferencia no es el número — es la posición de la lengua, los labios y la garganta.\n\nBuena noticia: el español es muy fonético. Casi siempre se pronuncia exactamente como se escribe. A diferencia del inglés (donde 'ough' se pronuncia de 6 formas distintas), en español UNA letra = UN sonido.\n\n🇹🇷 DATO CLAVE PARA TURCOS: El turco también es muy fonético. ¡Eso significa que tienes una ventaja enorme! El problema no es aprender nuevos sonidos desde cero — es reemplazar algunos sonidos turcos con sus equivalentes españoles.",
        examples: [
          { es: "casa", tr: "kasa → se pronuncia exactamente como se escribe: KA-SA" },
          { es: "libro", tr: "kitap → LI-BRO, dos sílabas claras" },
          { es: "español", tr: "ispanyolca → es-pa-ÑIOL, acento en la última sílaba" },
          { es: "universidad", tr: "üniversite → u-ni-ver-si-DAD, acento siempre al final" }
        ]
      }
    },
    {
      id: "u0_n2", type: "theory", title: "El Sonido R y RR — El gran desafío",
      content: {
        concept: "Esta es la diferencia más importante entre el español y el turco. El español tiene DOS sonidos de R completamente distintos:\n\n🔹 R suave (entre vocales o al final): Se produce tocando la punta de la lengua UNA VEZ contra el paladar. Similar a la D suave del inglés en 'butter'. En turco no existe exactamente igual.\n  → Ejemplo: ca-RA, a-MO-Ro-so, co-MER\n\n🔹 RR fuerte (al inicio de palabra o doble): Se produce haciendo vibrar la lengua múltiples veces. Es el sonido más difícil para turcos. La R turca es intermedia — ni tan suave ni tan fuerte.\n  → Ejemplo: ROSA, pe-RRO, FE-rro-ca-RRIL\n\n⚠️ ERROR COMÚN: Los turcos usan su R natural para ambos casos. El resultado es que 'pero' (but) suena igual que 'perro' (dog) — ¡dos palabras completamente distintas!\n\n🏋️ EJERCICIO: Di 'dada' en inglés muy rápido. Ese sonido en el medio ES la R suave española.",
        examples: [
          { es: "pero (but) → R suave", tr: "ama/fakat → pe-ro (un toque de lengua)" },
          { es: "perro (dog) → RR fuerte", tr: "köpek → pe-rro (lengua vibrando)" },
          { es: "Roma → RR fuerte al inicio", tr: "Roma → RRR-oma (siempre fuerte al inicio)" },
          { es: "caro (expensive) → R suave", tr: "pahalı → ca-ro (suave)" },
          { es: "carro (car) → RR fuerte", tr: "araba → ca-rro (fuerte)" }
        ]
      }
    },
    {
      id: "u0_n3", type: "theory", title: "La J y la G — El sonido de la garganta",
      content: {
        concept: "La J española es uno de los sonidos más característicos del idioma. Se produce en la parte posterior de la garganta — similar a la 'H' aspirada del alemán en 'Bach', o a la letra turca 'H' pero MÁS intensa y rasposa.\n\n🔹 J: Siempre suena igual, sin excepciones.\n  → Ejemplo: JA-BÓN, RE-LO-Jito, ME-jor\n\n🔹 G antes de E o I: ¡Atención! La G antes de E o I se pronuncia EXACTAMENTE como la J.\n  → GEN-TE suena como JEN-TE\n  → GI-TANO suena como JI-TANO\n\n🔹 G antes de A, O, U: Se pronuncia como la G normal (como en turco).\n  → GA-TO, GO-TA, GU-A-PO\n\n🇹🇷 PARA TURCOS: La H turca (como en 'hayır') es demasiado suave. La J española es más intensa. Imagina que tienes algo atorado en la garganta y haces ese sonido.",
        examples: [
          { es: "jabón (soap)", tr: "sabun → JA-bon (garganta intensa)" },
          { es: "gente (people)", tr: "insanlar → JEN-te (G + E = sonido J)" },
          { es: "gitano (gypsy)", tr: "çingene → JI-ta-no (G + I = sonido J)" },
          { es: "gato (cat)", tr: "kedi → GA-to (G normal)" },
          { es: "mejor (better)", tr: "daha iyi → me-JOR (J al final)" }
        ]
      }
    },
    {
      id: "u0_n4", type: "theory", title: "La B y la V — El gran secreto",
      content: {
        concept: "Este es el secreto mejor guardado del español: LA B Y LA V SUENAN EXACTAMENTE IGUAL EN ESPAÑOL MODERNO.\n\nSí, lo lees bien. 'Vaca' y 'baca' (portaequipajes de coche) se pronuncian exactamente igual. Los hispanohablantes nativos no distinguen estos dos sonidos cuando hablan — solo cuando escriben.\n\n🔹 Al inicio de una oración o después de pausa: Ambas suenan como la B turca normal (labios que se tocan completamente).\n  → BARCO, VINO, BUENO\n\n🔹 Entre vocales: Ambas se suavizan — los labios casi se tocan pero no completamente, creando un sonido intermedio.\n  → ca-BA-llo, nue-VO, lla-VE\n\n🇹🇷 PARA TURCOS: En turco la B y V son claramente distintas (B = dudak sesi, V = diş-dudak sesi). En español, OLVIDA esa distinción cuando hablas. Solo importa al escribir.",
        examples: [
          { es: "vino (wine) = bino en sonido", tr: "şarap → VIno y BIno suenan igual" },
          { es: "barco (ship)", tr: "gemi → BAR-co (B fuerte al inicio)" },
          { es: "caballo (horse)", tr: "at → ca-BA-llo (B suave entre vocales)" },
          { es: "nuevo (new)", tr: "yeni → nue-VO (V suave entre vocales)" },
          { es: "vivir (to live)", tr: "yaşamak → vi-VIR (ambas V suenan como B suave)" }
        ]
      }
    },
    {
      id: "u0_n5", type: "theory", title: "La Ñ y la LL/Y — Sonidos únicos",
      content: {
        concept: "La Ñ es el símbolo más icónico del español. Existe también en turco como parte de palabras (aunque no como letra propia).\n\n🔹 Ñ: Se pronuncia como 'NY' pegados — similar a la 'ñ' en 'mañana'. Como el 'ny' en inglés 'canyon' o la 'gn' italiana en 'gnocchi'.\n  → ES-PA-ÑOL, ma-ÑA-na, se-ÑOR\n\n🔹 LL / Y: Aquí hay variación regional ENORME:\n  • En España (zonas del norte): LL suena diferente a Y (LL más palatal)\n  • En Latinoamérica y España moderna: LL y Y suenan IGUAL\n  • El sonido más común es como la Y española en 'yo' o la Y inglesa en 'yes'\n  → LL-A-VE = YA-VE, yo-YO, ca-LLE\n\n🇹🇷 PARA TURCOS: La Ñ es similar a combinar N + Y muy rápido, como en 'anyar'. La LL/Y es idéntica a la Y turca en 'yıl' o 'yavaş'.",
        examples: [
          { es: "español", tr: "ispanyolca → es-pa-ÑIOL (NY pegados)" },
          { es: "mañana (tomorrow)", tr: "yarın → ma-ÑA-na" },
          { es: "señor (sir/mr)", tr: "beyefendi → se-ÑIOR" },
          { es: "llave (key)", tr: "anahtar → YA-ve (LL = Y)" },
          { es: "yo (I)", tr: "ben → YO (Y como en turco 'yok')" }
        ]
      }
    },
    {
      id: "u0_n6", type: "theory", title: "Las Vocales — Puras y breves",
      content: {
        concept: "Las 5 vocales españolas son la base de todo. La buena noticia: son PURAS y CORTAS. Cada vocal siempre suena igual, sin importar el contexto.\n\nA → como la A turca en 'at'. Siempre abierta.\nE → como la E turca en 'ev'. Siempre clara, nunca muda.\nI → como la İ turca en 'iş'. Nunca como la I sin punto (ı) turca.\nO → como la O turca en 'ok'. Siempre redonda.\nU → como la U turca en 'uçak'. Siempre pronunciada.\n\n⚠️ DIFERENCIA CRÍTICA CON EL INGLÉS: En inglés las vocales se 'comen' (como la 'a' en 'about'). En español TODAS las vocales se pronuncian siempre, claramente.\n\n🇹🇷 PARA TURCOS: El español NO tiene la Ö, Ü, I (sin punto) turcas. Si intentas pronunciar esas vocales en español, sonarás extranjero inmediatamente.",
        examples: [
          { es: "A: casa, mamá, hablar", tr: "a = a (igual que turco)" },
          { es: "E: mesa, leche, verde", tr: "e = e (igual que turco, nunca muda)" },
          { es: "I: libro, vivir, isla", tr: "i = i (como İ turca, NUNCA como ı)" },
          { es: "O: hola, poco, doctor", tr: "o = o (igual que turco)" },
          { es: "U: uva, música, unidad", tr: "u = u (igual que turco, siempre pronunciada)" }
        ]
      }
    },
    {
      id: "u0_n7", type: "quiz", title: "Práctica Fonética — Reconocimiento y Producción",
      exercises: [
        { type: "speaking", spanish: "Rosa reza en Roma.", turkish: "Doğru RR sesiyle söyle: Rosa RReza en RRoma." },
        { type: "speaking", spanish: "El perro de Pedro corre por el parque.", turkish: "R ve RR farkını göster: peRRo, PedRo, coRRe, paRque" },
        { type: "speaking", spanish: "La gente joven trabaja mejor.", turkish: "J ve G+E sesini uygula: Jente, Joven, meJor" },
        { type: "speaking", spanish: "Vivo en una ciudad nueva y bonita.", turkish: "V ve B aynı sesi söyle: Vivo, nueva, Bonita" },
        { type: "speaking", spanish: "Mañana es español en la calle.", turkish: "Ñ ve LL/Y sesini uygula: maNYana, esPANYol, CAYe" },
        { type: "speaking", spanish: "Buenos días, me llamo Juan.", turkish: "Tüm sesleri birleştir" },
        { type: "speaking", spanish: "La llave roja es de Javier.", turkish: "LL=Y ve J: YAve, Javier" },
        { type: "speaking", spanish: "Mi perro se llama Rojo.", turkish: "RR fuerte: peRRo, RRojo" },
        { type: "speaking", spanish: "España tiene mucho sol.", turkish: "Ñ sesi: esPANYa" },
        { type: "speaking", spanish: "Viaja en el tren cada verano.", turkish: "V=B: Viaja, Verano" }
      ]
    },
    {
      id: "u0_n8", type: "quiz", title: "Examen Fonético de Entrada",
      exercises: [
        { type: "multiple_choice", question: "¿Cuántas vocales tiene el español?", options: ["5 (a, e, i, o, u)", "8 (con ö, ü, ı)", "7 (con y, w)"], correct: 0 },
        { type: "multiple_choice", question: "La B y la V en español moderno suenan:", options: ["Exactamente igual", "Completamente diferente", "Igual solo al inicio de palabra"], correct: 0 },
        { type: "multiple_choice", question: "La G antes de E o I suena como:", options: ["La J española (garganta)", "La G normal de 'gato'", "La Y de 'yo'"], correct: 0 },
        { type: "multiple_choice", question: "'Pero' (but) y 'perro' (dog) son:", options: ["Dos palabras distintas — R suave vs RR fuerte", "La misma palabra con distinta ortografía", "Sinónimos"], correct: 0 },
        { type: "multiple_choice", question: "La Ñ española suena como:", options: ["NY pegados (como 'canyon')", "N normal", "NY + vocal extra"], correct: 0 },
        { type: "multiple_choice", question: "¿Cuál de estos sonidos NO existe exactamente igual en turco?", options: ["La RR vibrada múltiple", "La A abierta", "La vocal U"], correct: 0 },
        { type: "multiple_choice", question: "LL y Y en el español moderno y latinoamericano suenan:", options: ["Igual (como la Y turca)", "Diferente siempre", "Solo igual al final de palabra"], correct: 0 },
        { type: "multiple_choice", question: "Las vocales españolas a diferencia del inglés:", options: ["Se pronuncian siempre, todas, claramente", "A veces se comen o reducen", "Solo se pronuncian si tienen acento"], correct: 0 }
      ]
    }
  ]
};

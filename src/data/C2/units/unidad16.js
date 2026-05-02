/**
 * UNIDAD 16 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Jerga Madrileña (Cheli), Fonética del Centro y Laísmo/Leísmo.
 * Tema: Cultura urbana de Madrid, la Movida y el habla castiza.
 */

export const unidad16 = {
  id: "c2_u16",
  title: "Unidad 16: El Asfalto de Madrid",
  description: "Entiende el latido de la capital. Domina la fonética del 'Madriz', el slang castizo y los errores gramaticales aceptados socialmente en el centro de España.",
  nodes: [
    {
      id: "c2_u16_n1",
      type: "theory",
      title: "Teoría I: La Fonética del 'Gato' (El habla madrileña)",
      content: {
        concept: "A los madrileños de varias generaciones se les llama 'gatos'. Su habla no es solo un acento, es una actitud ante la vida: rápida, segura y un tanto irónica. \n\n### 1. La 'D' final se convierte en 'Z'\nEn Madrid, la 'D' al final de palabra suena como una 'Z' (la zeta española interdental). Es la marca de identidad más famosa de la ciudad.\n• *Madrid* ➔ Madri**z**.\n• *Verdad* ➔ Verda**z**.\n• *Salud* ➔ Salu**z**.\n\n### 2. La aspiración de la 'S' ante consonante\nAntes de sonidos como 'K' o 'P', la 'S' no se pronuncia limpia, sino que se aspira como una 'H' sorda.\n• *Es que...* ➔ E'que... (Ehque).\n• *Pesca* ➔ Pe'ca.\n\n### 3. El relajamiento de la terminación -ADO\nAunque es común en toda España, en el registro coloquial de Madrid la 'D' desaparece casi siempre.\n• *Cansado* ➔ Cansao.\n• *He hablado* ➔ He hablao.\n\n⚠️ **Nota Filológica:** Esta fonética, unida a una velocidad de habla alta, es lo que hace que a los extranjeros les cueste tanto entender a un madrileño en un bar.",
        examples: [
          { es: "La verda'z e'que estoy mazo cansao.", tr: "Gerçek şu ki (Madrid telaffuzuyla) çok yorgunum." },
          { es: "Vámono' pa' Madriz mañana.", tr: "Yarın Madrid'e gidelim." }
        ]
      }
    },
    {
      id: "c2_u16_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Fonética Visual)",
      exercises: [
        { type: "syntax", turkish: "Gerçek şu ki (Madridz) çok (mazo) yorgunum (cansao).", spanish: "La verdaz eque estoy mazo cansao", words: ["La", "verdaz", "eque", "estoy", "mazo", "cansao", "verdad", "es", "que"] },
        { type: "syntax", turkish: "Madrid'e (Madriz) gidiyoruz.", spanish: "Nos vamos para Madriz", words: ["Nos", "vamos", "para", "Madriz", "Madrid"] },
        { type: "syntax", turkish: "Hadi (venga) dostum (tío), neşelen (anímate).", spanish: "Venga tío anímate un poco", words: ["Venga", "tío", "anímate", "un", "poco"] },
        { type: "syntax", turkish: "Sağlık (saluz) paradan daha önemlidir.", spanish: "La saluz es más importante que el dinero", words: ["La", "saluz", "es", "más", "importante", "que", "el", "dinero"] },
        { type: "syntax", turkish: "Herkes (tol mundo) bunu biliyor.", spanish: "Tol mundo sabe que es verdad", words: ["Tol", "mundo", "sabe", "que", "es", "verdad", "todo"] },
        { type: "syntax", turkish: "Bakarsın (Igual) bugün gelmez.", spanish: "Igual él no viene hoy", words: ["Igual", "él", "no", "viene", "hoy"] },
        { type: "syntax", turkish: "Söylendiği gibi (hablao) her şey bitti.", spanish: "Tal como se ha hablao todo terminó", words: ["Tal", "como", "se", "ha", "hablao", "todo", "terminó", "hablado"] },
        { type: "syntax", turkish: "Çok havalı (chulo) bir araba aldın.", spanish: "Has comprao un coche mazo chulo", words: ["Has", "comprao", "un", "coche", "mazo", "chulo", "comprado"] },
        { type: "syntax", turkish: "Dostum (tío) ne dedin (dijiste)?", spanish: "Qué dijiste tú tío", words: ["Qué", "dijiste", "tú", "tío"] },
        { type: "syntax", turkish: "Nereye gidiyorsun (palante)?", spanish: "Adónde vas para adelante", words: ["Adónde", "vas", "para", "adelante", "palante"] }
      ]
    },
    {
      id: "c2_u16_n3",
      type: "theory",
      title: "Teoría II: El Laberinto de los Pronombres (Laísmo y Leísmo)",
      content: {
        concept: "En el centro de España (Madrid, Valladolid, Burgos) existe un fenómeno gramatical que la RAE considera 'incorrecto' pero que es **omnipresente** en el habla culta y popular.\n\n### 1. El Laísmo (El gran error de Madrid)\nConsiste en usar 'LA' en lugar de 'LE' para el objeto indirecto femenino.\n• Estándar: *LE dije la verdad (a ella).* (Ona doğruyu söyledim).\n• Madrileño: *LA dije la verdad.*\n⚠️ Como estudiante C2, no debes usarlo, pero **debes reconocerlo** para no confundir el objeto directo con el indirecto.\n\n### 2. El Leísmo (Aceptado por la RAE para personas masculinas)\nConsiste en usar 'LE' en lugar de 'LO' para personas masculinas.\n• Estándar: *LO vi en el parque (a Juan).* \n• Madrileño/RAE: *LE vi en el parque.*\nEsto es tan común que se considera parte del estándar culto en España cuando el objeto es un hombre solo.\n\n### 3. El uso del 'SE' madrileño\nSe usa mucho el dativo de interés para dar énfasis a la posesión o a la acción personal.\n*Ej: Se ha bebío tol vaso.* (Bardağın tamamını içip bitirdi).",
        examples: [
          { es: "Le vi a tu hermano ayer en la oficina. (Leísmo aceptado)", tr: "Dün abini ofiste gördüm." },
          { es: "La di un beso a María. (Laísmo - Típico de Madrid, incorrecto formalmente)", tr: "María'ya bir öpücük verdim." }
        ]
      }
    },
    {
      id: "c2_u16_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Registro Castizo)",
      exercises: [
        { type: "speaking", spanish: "La verdaz eque no tengo mazo tiempo", turkish: "Gerçek şu ki çok vaktim yok. (Entonación de Madrid)" },
        { type: "speaking", spanish: "Le vi ayer paseando por la Gran Vía", turkish: "Dün onu Gran Vía'da yürürken gördüm. (Leísmo)" },
        { type: "speaking", spanish: "Venga tío no te ralles por eso", turkish: "Hadi dostum, bunun için kafanı yorma." },
        { type: "speaking", spanish: "Me renta mazo ir a tapear esta tarde", turkish: "Bu öğleden sonra tapas yemeye gitmek bana çok uyar." },
        { type: "speaking", spanish: "Se ha comío tol bocata él solo", turkish: "Tüm sandviçi tek başına yedi bitirdi." },
        { type: "speaking", spanish: "Qué chulo está el ordenador nuevo", turkish: "Yeni bilgisayar ne kadar havalı." },
        { type: "speaking", spanish: "Tira palante y no mires atrás", turkish: "İleri bak ve arkana bakma." },
        { type: "speaking", spanish: "A Madriz se viene a disfrutar", turkish: "Madrid'e keyif almaya gelinir." }
      ]
    },
    {
      id: "c2_u16_n5",
      type: "theory",
      title: "El Reto Turco: La Jerarquía del 'Tío' vs 'Kanka'",
      content: {
        concept: "En turco, la palabra 'Kanka' o 'Dostum' implica una relación de amistad profunda. En Madrid, la palabra **TÍO / TÍA** ha perdido su significado familiar (amca/teyze) para convertirse en un comodín lingüístico.\n\n### Diferencias de uso:\n• **Como vocativo:** 'Oye, tío...' (Baksana kanka/dostum).\n• **Como énfasis:** '¡Qué dices, tío!' (Ne diyorsun sen!).\n• **Como despectivo:** 'Ese tío es un necio'. (Şu adam bir ahmak).\n\n🇹🇷 En turco, no llamarías 'Kanka' a alguien que te acaba de chocar el coche. \n🇪🇸 En Madrid, puedes decirle '¡Pero tío, mira por dónde vas!' a un desconocido en un momento de tensión. Es una palabra que marca la **proximidad social** típica de España, donde la barrera entre lo privado y lo público es muy delgada.",
        examples: [
          { es: "Tío, no te vas a creer lo que me ha pasao.", tr: "Dostum, başıma gelene inanmayacaksın." },
          { es: "Había un tío mazo raro en la puerta.", tr: "Kapıda çok garip bir adam vardı." }
        ]
      }
    },
    {
      id: "c2_u16_n6",
      type: "reading",
      title: "Lectura Crítica: De Cañas por La Latina",
      content: {
        text: "Madrid no duerme, o al menos eso dicen los que nunca han currado aquí. Ayer salí de la oficina mazo tarde y me fui directo a La Latina para quedar con unos colegas. La verda'z e'que estaba reventao, pero me rentaba mazo desconectar un rato. \n\nNada más llegar al bar, vi que estaba petao. Había un tío tocando la guitarra en un rincón y tol mundo estaba gritando y riendo. Me pedí una caña y un poco de pescao frito. De repente, apareció mi ex con un pibe mazo chulo. Me quedé de piedra, pero intenté que no se me notara. Ella se me acercó y me soltó: '¡Hombre, Alberto! ¡Qué casualidad!'. Yo, para no rallarme, le dije que me alegraba de verla, aunque por dentro me hervía la sangre. Al final, tiré p'alante y me lo pasé genial. Madriz es así: un caos maravilloso donde siempre acabas liándote.",
        translation: "Madrid uyumaz, ya da en azından burada hiç çalışmamış (currao) olanlar öyle der. Dün ofisten çok (mazo) geç çıktım ve birkaç arkadaşla buluşmak için doğrudan La Latina'ya gittim. Gerçek şu ki (La verda'z) bitik durumdaydım (reventao) ama biraz kafa dinlemek (desconectar) bana çok uyuyordu (rentaba). \n\nBara varır varmaz (Nada más llegar), tıklım tıklım (petao) olduğunu gördüm. Köşede gitar çalan bir adam (tío) vardı ve herkes (tol mundo) bağırıp gülüyordu. Bir bardak bira (caña) ve biraz kızarmış balık (pescao) istedik. Aniden eski sevgilim, çok havalı (chulo) bir çocukla (pibe/tío) belirdi. Donakaldım (de piedra) ama belli etmemeye çalıştım. Yanıma yaklaştı ve 'A, Alberto! Ne tesadüf!' deyiverdi. Ben, kafaya takmamak (rallarme) için onu gördüğüme sevindiğimi söyledim, her ne kadar içten içe kanım beynime sıçrasa da. Sonunda, boşverdim (tiré p'alante) ve harika vakit geçirdim. Madrid böyledir: Her zaman kendinizi bir karmaşanın içinde bulduğunuz (liándote) harika bir kaos."
      }
    },
    {
      id: "c2_u16_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Campo Madrileño",
      exercises: [
        { type: "multiple_choice", question: "Si un madrileño te dice que un plan 'le renta', ¿qué significa?", options: ["Que va a ganar dinero.", "Que el plan le conviene o le apetece / Ona uyuyor.", "Que el plan es muy caro."], correct: 1 },
        { type: "multiple_choice", question: "¿Qué significa que un bar está 'petado'?", options: ["Que ha explotado.", "Que está completamente lleno de gente.", "Que es muy barato."], correct: 1 },
        { type: "multiple_choice", question: "Si alguien te dice '¡No te ralles!', te pide que:", options: ["No uses un rallador de queso.", "No te preocupes o no pienses demasiado en algo.", "No grites."], correct: 1 },
        { type: "syntax", turkish: "Çok (mazo) yorgunum (cansao), bu gece çıkmak bana uymuyor (no me renta).", spanish: "Estoy mazo cansado no me renta salir esta noche", words: ["Estoy", "mazo", "cansado", "no", "me", "renta", "salir", "esta", "noche", "cansao"] },
        { type: "syntax", turkish: "Herkes (Tol mundo) şok oldu (flipar).", spanish: "Todo el mundo flipó con la noticia", words: ["Todo", "el", "mundo", "flipó", "con", "la", "noticia", "Tol"] },
        { type: "speaking", spanish: "La verdaz eque Madrid mola mazo", turkish: "Gerçek şu ki Madrid çok havalı." },
        { type: "speaking", spanish: "Venga tío tira palante y olvida el curro", turkish: "Hadi dostum ileri bak ve işi unut." },
        { type: "speaking", spanish: "Me tienes mazo rallado con ese tema", turkish: "Bu konuyla beni çok darladın (kafa yordurdun)." },
        { type: "speaking", spanish: "El bar estaba petao de gente joven", turkish: "Bar gençlerle tıklım tıklımdı." }
      ]
    },
    {
      id: "c2_u16_n8",
      type: "theory",
      title: "Teoría III: La Movida y el 'Cheli'",
      content: {
        concept: "En los años 80, tras la dictadura, Madrid vivió una explosión cultural llamada **La Movida Madrileña**. De ahí nació el **Cheli**, una jerga de barrio que hoy es parte del español estándar de España.\n\n### Palabras que definen una época:\n• **Molar:** (Hoşuna gitmek / Havalı olmak). 'Esto mola'.\n• **Flipar:** (Şok olmak / Bayılmak). 'Flipo con tu coche'.\n• **Currar / El curro:** (Çalışmak / İş). 'Mañana tengo mucho curro'.\n• **Ir de marcha / Ir de fiesta:** (Eğlenmeye çıkmak).\n• **Piba / Pibe:** (Kız / Çocuk - También usado en Madrid, aunque es más argentino).\n• **Estar al loro:** (Gözünü dört açmak / Dikkatli olmak).",
        examples: [
          { es: "Esa película mola un montón, tienes que verla.", tr: "O film acayip havalı/güzel, izlemelisin." },
          { es: "Mañana no puedo salir, tengo mazo curro.", tr: "Yarın dışarı çıkamam, çok işim (curro) var." }
        ]
      }
    },
    {
      id: "c2_u16_n9",
      type: "theory",
      title: "Sintaxis Visual: El Párrafo de la Calle",
      content: {
        concept: "Analizaremos cómo se construye una frase de queja madrileña que usa el laísmo (incorrecto pero común) y varios intensificadores.",
        examples: [{ es: "A María la dije que no viniera al curro porque el jefe estaba mazo rallado con ella.", tr: "Maria'ya işe gelmemesini söyledim (laísmo) çünkü patron ona çok (mazo) takıktı/sinirliydi." }],
        analysis: [
          { word: "A María", type: "noun", literal: "Maria'ya", explanation: "Objeto indirecto femenino.", examples: [] },
          { word: "la dije", type: "verb", literal: "ona söyledim", explanation: "Laísmo madrileño. Se usa 'LA' (OD) en lugar de 'LE' (OI). Un error castizo aceptado en la calle.", examples: [] },
          { word: "que no viniera", type: "verb", literal: "gelmemesini", explanation: "Estilo indirecto en Subjuntivo Imperfecto.", examples: [] },
          { word: "al curro", type: "noun", literal: "işe", explanation: "Slang para trabajo.", examples: [] },
          { word: "porque el jefe", type: "noun", literal: "çünkü patron", explanation: "Causa.", examples: [] },
          { word: "estaba", type: "verb", literal: "bulunuyordu", explanation: "Verbo de estado.", examples: [] },
          { word: "mazo rallado", type: "adjective", literal: "çok takık / bunalmış", explanation: "Doble slang: intensificador (mazo) + estado mental (rallado).", examples: [] },
          { word: "con ella.", type: "pronoun", literal: "onunla", explanation: "Referencia final." }
        ]
      }
    },
    {
      id: "c2_u16_n10",
      type: "theory",
      title: "Caja de Herramientas: Diccionario Castizo",
      content: {
        concept: "Palabras para moverte por los barrios de Madrid (Chamberí, Malasaña, Vallecas):\n\n• **Mazo** (Çok / Muy)\n• **Pibe / Tío** (Adam / Çocuk)\n• **Chulo / Chula** (Havalı / Kendine güvenen)\n• **Canijo** (Çelimsiz / Küçük)\n• **Garito** (Bar / Mekan - genelde salaş)\n• **Piti** (Sigara) ➔ *¿Tienes un piti?*\n• **Cantar las cuarenta** (Birine haddini bildirmek)\n• **Hacer un puente** (Tatilleri birleştirmek)\n• **Ir a pachas** (Hesabı bölüşmek)",
        examples: [
          { es: "Fuimos a un garito mazo chulo en Malasaña.", tr: "Malasaña'da çok havalı (chulo) bir mekana (garito) gittik." },
          { es: "La cena es cara, mejor vamos a pachas.", tr: "Akşam yemeği pahalı, en iyisi hesabı bölüşelim (a pachas)." }
        ]
      }
    },
    {
      id: "c2_u16_n11",
      type: "theory",
      title: "Taller de Producción: Una noche en Madriz",
      content: {
        concept: "Vas a escribir una experiencia urbana usando el registro de Madrid.\n\n**Instrucciones:**\nEscribe un relato de 10-12 líneas contando una noche de fiesta o de trabajo intenso en la capital.\n1. Usa fonética visual (Madriz, verdaz, cansao, hablao).\n2. Incluye 'mazo', 'curro' y 'rallarse'.\n3. Usa un 'leísmo' de persona masculina (Ej: 'A Carlos le vi').\n4. Usa un 'venga' o un 'tío' para dar naturalidad.\n\n**Inspiración:** 'Ayer salí del curro mazo tarde. La verdaz eque no quería salir, pero vino mi hermano y le convencí para ir a un garito...'",
        examples: []
      }
    },
    {
      id: "c2_u16_n12",
      type: "exam",
      title: "Examen de Unidad 16: El Asfalto",
      content: {
        concept: "Demuestra tu dominio de la variante madrileña, su fonética y su slang.",
        exercises: [
          { type: "multiple_choice", question: "¿Cómo se pronuncia 'Madrid' en la calle en Madrid?", options: ["Madrit", "Madriz", "Madri"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Mazo'?", options: ["Poco", "Mucho / Muy", "Tal vez"], correct: 1 },
          { type: "multiple_choice", question: "El laísmo consiste en usar ______ en lugar de ______.", options: ["LO por LE", "LA por LE", "LE por LO"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es el 'curro'?", options: ["La cena", "El trabajo", "Un amigo"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien está 'rallado', está:", options: ["Feliz", "Preocupado / Obsesionado", "Borracho"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Ir a pachas'?", options: ["Ir rápido", "Dividir la cuenta a partes iguales", "Caminar descalzo"], correct: 1 },
          { type: "multiple_choice", question: "La palabra 'Chulo' en Madrid suele ser:", options: ["Un insulto siempre", "Algo positivo (havalı/güzel) o alguien orgulloso", "Una fruta"], correct: 1 },
          { type: "multiple_choice", question: "En Madrid, 'Es que' suena a menudo como:", options: ["Eque (aspirando la s)", "Ese que", "Eske"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Estar al loro'?", options: ["Hablar mucho", "Estar atento", "Tener un pájaro"], correct: 1 },
          { type: "multiple_choice", question: "Un 'garito' es:", options: ["Un bar o local nocturno", "Un gato pequeño", "Una oficina"], correct: 0 },
          { type: "syntax", turkish: "Madrid çok havalı (mola).", spanish: "Madriz mola mazo", words: ["Madriz", "mola", "mazo", "Madrid", "mucho"] },
          { type: "syntax", turkish: "Çok yorgunum (cansao) ve işim (curro) var.", spanish: "Estoy mazo cansao y tengo curro", words: ["Estoy", "mazo", "cansao", "y", "tengo", "curro", "trabajo"] },
          { type: "syntax", turkish: "Bana yalan söylediği (mentir) için şok oldum (flipar).", spanish: "Flipé porque me dijo mentiras", words: ["Flipé", "porque", "me", "dijo", "mentiras", "flipo"] },
          { type: "syntax", turkish: "Hadi dostum (tío), her şey yolunda (va bien).", spanish: "Venga tío que todo va bien", words: ["Venga", "tío", "que", "todo", "va", "bien"] },
          { type: "syntax", turkish: "Kafaya takma (rallarse) her şey hallolur.", spanish: "No te ralles todo se solucionará", words: ["No", "te", "ralles", "todo", "se", "solucionará", "ralla"] },
          { type: "syntax", turkish: "Hesabı bölüşelim mi?", spanish: "Vamos a pachas con la cuenta", words: ["Vamos", "a", "pachas", "con", "la", "cuenta"] },
          { type: "syntax", turkish: "Gerçek şu ki (La verdaz) onu (le) dün gördüm.", spanish: "La verdaz eque le vi ayer", words: ["La", "verdaz", "eque", "le", "vi", "ayer", "lo"] },
          { type: "syntax", turkish: "Herkes (tol mundo) oraya gidiyor.", spanish: "Tol mundo va para allá", words: ["Tol", "mundo", "va", "para", "allá"] },
          { type: "syntax", turkish: "İleriye bak (palante) ve çalış.", spanish: "Tira palante y curra", words: ["Tira", "palante", "y", "curra", "trabaja"] },
          { type: "syntax", turkish: "Ne kadar havalı (chulo) bir yer!", spanish: "Qué sitio más chulo", words: ["Qué", "sitio", "más", "chulo", "guay"] }
        ]
      }
    }
  ]
};
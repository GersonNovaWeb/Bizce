/**
 * UNIDAD 19 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Literatura, Realismo Mágico y la forma "-SE" del Subjuntivo.
 * Tema: García Márquez, Borges, Cervantes y el léxico poético.
 */

export const unidad19 = {
  id: "c1_u19",
  title: "Unidad 19: Realismo Mágico y Letras",
  description: "Entra en el universo literario. Descubre el Realismo Mágico, el español de Borges y Cervantes, y domina el subjuntivo literario en '-se'.",
  nodes: [
    {
      id: "c1_u19_n1",
      type: "theory",
      title: "Teoría I: El Subjuntivo Literario (-SE)",
      content: {
        concept: "En los niveles anteriores aprendiste el Imperfecto de Subjuntivo con la terminación '-RA' (Si yo tuviera, si yo fuera, como si hablara). \n\nSin embargo, el español tiene una segunda forma exacta y totalmente intercambiable: la terminación **'-SE'** (Si yo tuviese, si yo fuese, como si hablase).\n\n### ¿Cuándo usamos la forma '-SE'?\n• **En la literatura:** Es la marca de los escritores. En las novelas, ensayos y poesía, la forma '-se' aporta una musicalidad y elegancia inigualables.\n• **En España:** En el habla coloquial de España se usan ambas formas casi al 50%. En Latinoamérica, la forma '-se' se reserva casi exclusivamente para textos formales o literarios.\n\n### Conjugación (Verbo Hablar / Tener):\n• Yo habla**ra** ➔ Yo habla**se**.\n• Él tuvie**ra** ➔ Él tuvie**se**.\n• Nosotros fuéra**mos** ➔ Nosotros fuése**mos**.\n\n*Nota C1:* No hay ninguna diferencia de significado, pero dominar ambas te permite no repetir la misma terminación en un párrafo literario largo.",
        examples: [
          { es: "Si tuviese alas, volaría hacia el alba.", tr: "Eğer kanatlarım olsaydı, şafağa doğru uçardım." },
          { es: "Me miró como si no existiese.", tr: "Bana sanki yokmuşum gibi baktı." },
          { es: "Era imposible que el pueblo sobreviviese al olvido.", tr: "Kasabanın unutuluştan sağ çıkması imkansızdı." }
        ]
      }
    },
    {
      id: "c1_u19_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (La Forma Literaria)",
      exercises: [
        { type: "syntax", turkish: "Eğer zamanım olsaydı okurdum (tuviese).", spanish: "Si tuviese tiempo leería", words: ["Si", "tuviese", "tiempo", "leería", "tuviera"] },
        { type: "syntax", turkish: "Bunu bilseydi (supiese) gelmezdi.", spanish: "Si lo supiese no habría venido", words: ["Si", "lo", "supiese", "no", "habría", "venido", "supiera"] },
        { type: "syntax", turkish: "Sanki deliymişim gibi (fuese) konuştu.", spanish: "Habló como si yo fuese loco", words: ["Habló", "como", "si", "yo", "fuese", "loco", "fuera"] },
        { type: "syntax", turkish: "Keşke yağmur yağmasaydı (lloviese).", spanish: "Ojalá no lloviese hoy", words: ["Ojalá", "no", "lloviese", "hoy", "lloviera"] },
        { type: "syntax", turkish: "Hiçbir şey olmamış gibi (pasase) gülümsedi.", spanish: "Sonrió como si no pasase nada", words: ["Sonrió", "como", "si", "no", "pasase", "nada", "pasara"] },
        { type: "syntax", turkish: "Onunla konuşmamı (hablase) istediler.", spanish: "Querían que yo hablase con él", words: ["Querían", "que", "yo", "hablase", "con", "él", "hablara"] },
        { type: "syntax", turkish: "Onun (erkek) bu kadar zengin olması (fuese) garipti.", spanish: "Era raro que él fuese tan rico", words: ["Era", "raro", "que", "él", "fuese", "tan", "rico", "fuera"] },
        { type: "syntax", turkish: "Ne olursa olsun (Ne olursa olsun).", spanish: "Fuese lo que fuese", words: ["Fuese", "lo", "que", "fuese", "fuera"] },
        { type: "syntax", turkish: "Eğer gerçeği anlasaydık (entendiésemos)...", spanish: "Si entendiésemos la verdad", words: ["Si", "entendiésemos", "la", "verdad", "entendiéramos"] },
        { type: "syntax", turkish: "Kuşlarmışız gibi (fuésemos) hissettik.", spanish: "Sentimos como si fuésemos pájaros", words: ["Sentimos", "como", "si", "fuésemos", "pájaros", "fuéramos"] }
      ]
    },
    {
      id: "c1_u19_n3",
      type: "theory",
      title: "Teoría II: El Realismo Mágico",
      content: {
        concept: "A mediados del siglo XX, América Latina exportó un género literario que cambió el mundo: **El Realismo Mágico**, liderado por Gabriel García Márquez (*Cien años de soledad*).\n\n### Las Reglas de la Magia:\nEste género se basa en relatar eventos mágicos, sobrenaturales o imposibles **con un tono de absoluta normalidad y precisión periodística**, como si fueran cosas cotidianas.\n\n• ❌ Fantasía tradicional: 'Un hada apareció con varita mágica'.\n• ✅ Realismo Mágico: 'Ese martes, llovieron flores amarillas durante tres horas, obligando a los vecinos a usar palas para despejar las calles'.\n\n### El Léxico de la Soledad:\nGarcía Márquez utiliza adjetivos rotundos para describir atmósferas opresivas, el paso del tiempo y la nostalgia:\n• *El letargo, la pesadumbre, el augurio, inexorable, perpetuo.*",
        examples: [
          { es: "El fantasma de Prudencio Aguilar se lavaba las heridas en el patio.", tr: "Prudencio Aguilar'ın hayaleti avluda yaralarını yıkıyordu. (Sıradan bir şeymiş gibi)." },
          { es: "La lluvia duró cuatro años, once meses y dos días.", tr: "Yağmur dört yıl, on bir ay ve iki gün sürdü. (Büyülü bir olayın kesin/matematiksel anlatımı)." },
          { es: "Un viento inexorable borró al pueblo de la memoria humana.", tr: "Acımasız (önlenemez) bir rüzgar, kasabayı insan hafızasından sildi." }
        ]
      }
    },
    {
      id: "c1_u19_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Tono Literario)",
      exercises: [
        { type: "speaking", spanish: "Muchos años después frente al pelotón de fusilamiento", turkish: "Yıllar sonra, idam mangasının önünde..." },
        { type: "speaking", spanish: "Llovieron flores amarillas toda la noche", turkish: "Bütün gece sarı çiçekler yağdı." },
        { type: "speaking", spanish: "El tiempo no pasaba solo daba vueltas en círculo", turkish: "Zaman geçmiyordu, sadece kendi etrafında dönüyordu." },
        { type: "speaking", spanish: "Si ella me hubiese mirado yo no habría muerto", turkish: "Eğer bana bakmış olsaydı (baksaydı), ölmemiş olurdum." },
        { type: "speaking", spanish: "Un letargo profundo se apoderó de la ciudad", turkish: "Derin bir uyuşukluk (letarji) şehri ele geçirdi." },
        { type: "speaking", spanish: "Era un laberinto de espejos perpetuos", turkish: "Sonsuz (ebedi) aynalardan oluşan bir labirentti." },
        { type: "speaking", spanish: "Actuaba como si el pasado no existiese", turkish: "Sanki geçmiş hiç var olmamış gibi davranıyordu." },
        { type: "speaking", spanish: "El augurio se cumplió inexorablemente", turkish: "Kehanet acımasızca (kaçınılmaz bir şekilde) gerçekleşti." },
        { type: "speaking", spanish: "Caminó en la penumbra buscando su sombra", turkish: "Gölgesini arayarak alacakaranlıkta yürüdü." },
        { type: "speaking", spanish: "La melancolía era su única compañía", turkish: "Melankoli onun tek yoldaşıydı." }
      ]
    },
    {
      id: "c1_u19_n5",
      type: "theory",
      title: "El Reto Turco: La Metáfora y el Genitivo",
      content: {
        concept: "Al traducir literatura, la belleza está en cómo cada idioma construye sus metáforas.\n\n🇹🇷 **El Turco y el Adjetivo Directo:** En turco, para crear una imagen poética, a menudo juntas dos sustantivos o usas 'gibi' (como).\n• *Buz gibi gözler* (Ojos como el hielo).\n• *Sessizlik denizi* (Un mar de silencio - Tamlama).\n\n🇪🇸 **El Español y la Preposición 'DE':** El español C1 aborrece el exceso de 'como'. Para crear metáforas profundas, une dos sustantivos con la preposición **DE**. Esto funde las dos palabras en una sola entidad.\n• ❌ *Ojos como hielo* (Pobre literariamente).\n• ✅ *Ojos **de** hielo* (Ojos de hielo - Metáfora pura).\n• ✅ *Una prisión **de** cristal* (Camdan bir hapishane).\n• ✅ *Un silencio **de** muerte* (Ölüm sessizliği).\n\nAprende a pensar en 'Sustantivo + DE + Sustantivo' para crear imágenes poéticas inmortales.",
        examples: [
          { es: "La mujer tenía un corazón de piedra y una mirada de fuego.", tr: "Kadının taştan bir kalbi ve ateşten (ateş gibi) bir bakışı vardı." },
          { es: "Estaban atrapados en un laberinto de espejos.", tr: "Aynalardan oluşan bir labirentin içinde tuzağa düşmüşlerdi." }
        ]
      }
    },
    {
      id: "c1_u19_n6",
      type: "reading",
      title: "Lectura Crítica: El pueblo de los espejos",
      content: {
        text: "Si alguien hubiese advertido a los habitantes de Macondo sobre la maldición, tal vez no habrían construido las casas con paredes de cristal. El letargo comenzó un martes. Fue un proceso paulatino e inexorable: primero, los animales perdieron la memoria; luego, los ancianos olvidaron sus propios nombres.\n\nAureliano caminaba por la penumbra de su habitación, rodeado por un silencio de muerte. Veía el fantasma de su abuelo sentado en la silla mecedora, leyendo un libro de arena. No sentía miedo, sino una melancolía perpetua. \n\n—Si supieses lo que nos espera —murmuró el fantasma, sin levantar la vista—, no te molestarías en recordar. \n\nEsa misma noche, llovieron pájaros muertos sobre los tejados. Era el augurio final. Aureliano cerró los ojos, esperando que el viento borrase su existencia como si nunca hubiese existido.",
        translation: "Eğer birisi Macondo sakinlerini lanet konusunda uyarmış olsaydı (hubiese advertido), belki de evleri cam duvarlarla inşa etmezlerdi. Uyuşukluk (letargo) bir salı günü başladı. Kademeli ve acımasız (önlenemez) bir süreçti: önce hayvanlar hafızalarını kaybetti; sonra yaşlılar kendi isimlerini unuttular.\n\nAureliano, bir ölüm sessizliğiyle (silencio de muerte) çevrili odasının alacakaranlığında (penumbra) yürüyordu. Büyükbabasının hayaletini sallanan sandalyede oturmuş, kumdan bir kitap okurken görüyordu. Korku değil, sonsuz (perpetua) bir melankoli hissediyordu.\n\n—Bizi neyin beklediğini bilseydin (Si supieses) —diye mırıldandı hayalet, bakışlarını kaldırmadan— hatırlamakla zahmet etmezdin.\n\nAynı gece, çatıların üzerine ölü kuşlar yağdı. Bu son kehanetti (augurio). Aureliano, rüzgarın varlığını sanki hiç var olmamış gibi (como si nunca hubiese existido) silip süpürmesini (borrase) umarak gözlerini kapattı."
      }
    },
    {
      id: "c1_u19_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (Léxico Poético)",
      exercises: [
        { type: "syntax", turkish: "Uyarmış olsaydı (hubiese) evleri inşa etmezlerdi.", spanish: "Si hubiese advertido no habrían construido las casas", words: ["Si", "hubiese", "advertido", "no", "habrían", "construido", "las", "casas", "hubiera"] },
        { type: "syntax", turkish: "Bizi neyin beklediğini bilseydin (supieses).", spanish: "Si supieses lo que nos espera", words: ["Si", "supieses", "lo", "que", "nos", "espera", "sabes"] },
        { type: "syntax", turkish: "Sanki hiç var olmamış gibi (hubiese existido).", spanish: "Como si nunca hubiese existido", words: ["Como", "si", "nunca", "hubiese", "existido", "había"] },
        { type: "syntax", turkish: "Camdan bir hapishane (prisión de cristal).", spanish: "Una prisión de cristal", words: ["Una", "prisión", "de", "cristal", "como"] },
        { type: "syntax", turkish: "Ölüm sessizliği (Un silencio de muerte).", spanish: "Un silencio de muerte", words: ["Un", "silencio", "de", "muerte", "muerto"] },
        { type: "syntax", turkish: "Acımasız (önlenemez) bir süreçti.", spanish: "Fue un proceso inexorable", words: ["Fue", "un", "proceso", "inexorable", "efímero"] },
        { type: "syntax", turkish: "Alacakaranlıkta (penumbra) yürüyordu.", spanish: "Caminaba por la penumbra", words: ["Caminaba", "por", "la", "penumbra", "letargo"] },
        { type: "syntax", turkish: "Sonsuz (perpetua) bir melankoli.", spanish: "Una melancolía perpetua", words: ["Una", "melancolía", "perpetua", "fugaz"] },
        { type: "syntax", turkish: "Kumdan bir kitap (libro de arena) okuyordu.", spanish: "Leía un libro de arena", words: ["Leía", "un", "libro", "de", "arena", "como"] },
        { type: "syntax", turkish: "Bu son kehanetti (augurio).", spanish: "Era el augurio final", words: ["Era", "el", "augurio", "final", "sesgo"] }
      ]
    },
    {
      id: "c1_u19_n8",
      type: "theory",
      title: "Teoría III: Borges y Cervantes",
      content: {
        concept: "En tu viaje literario por el español, cruzarás dos universos opuestos pero geniales.\n\n### 1. Miguel de Cervantes (Siglo de Oro)\nEl creador de *Don Quijote de la Mancha*. El español antiguo suena muy diferente. Usa la forma 'Vos' (conjugada de forma antigua) y vocabulario de caballería.\n• *Vuesa merced* (Su gracia / Usted).\n• *Facer* (Hacer), *Fermoza* (Hermosa).\n• En un texto C1 moderno, a veces usamos palabras cervantinas para darle un toque irónico o muy solemne a una frase.\n\n### 2. Jorge Luis Borges (El Laberinto Filosófico)\nEl maestro argentino de los cuentos cortos. Borges no usa el realismo mágico, usa la **Literatura Fantástica Filosófica**. Sus temas obsesivos son: El tiempo, el infinito, los laberintos y los espejos.\n• Borges odiaba las descripciones largas. Usa una precisión matemática: un solo adjetivo que rompe la mente del lector.\n• *Ej: 'El jardín de senderos que se bifurcan'.*\n• *Léxico borgiano: El infinito, la simetría, la eternidad, el azar.*",
        examples: [
          { es: "Cervantes: 'Si vuesa merced me diese licencia, yo hablaría'.", tr: "Cervantes: 'Eğer zatıaliniz (siz) bana izin verseydi (verdiyse), ben konuşurdum'." },
          { es: "Borges: 'Sentí el infinito y me perdí en el laberinto de sus ojos'.", tr: "Borges: 'Sonsuzluğu hissettim ve onun gözlerinin labirentinde kayboldum'." }
        ]
      }
    },
    {
      id: "c1_u19_n9",
      type: "theory",
      title: "Sintaxis Visual: El Laberinto de Borges",
      content: {
        concept: "Deconstruiremos una frase típica de Borges, donde la sintaxis juega con el tiempo y el espacio en una estructura aparentemente simple pero filosóficamente profunda.",
        examples: [{ es: "El universo, que otros llaman la biblioteca, se compone de un número indefinido de galerías hexagonales.", tr: "Başkalarının kütüphane dediği evren, belirsiz sayıda altıgen galeriden (koridordan) oluşur." }],
        analysis: [
          { word: "El universo,", type: "noun", literal: "Evren", explanation: "Sujeto absoluto.", examples: [] },
          { word: "que", type: "pronoun", literal: "ki o", explanation: "Pronombre relativo que introduce una cláusula explicativa.", examples: [] },
          { word: "otros llaman", type: "verb", literal: "başkalarının adlandırdığı", explanation: "El misterio. Introduce que la realidad depende de quien la mire.", examples: [] },
          { word: "la biblioteca,", type: "noun", literal: "kütüphane (olarak)", explanation: "La metáfora borgiana: el universo como un lugar lleno de libros infinitos.", examples: [] },
          { word: "se compone de", type: "verb", literal: "-den oluşur", explanation: "Verbo de régimen preposicional (C1).", examples: [] },
          { word: "un número indefinido", type: "noun", literal: "belirsiz bir sayı", explanation: "Adjetivo matemático que invoca el infinito.", examples: [] },
          { word: "de galerías hexagonales.", type: "noun", literal: "altıgen galerilerden/koridorlardan", explanation: "Geometría precisa para describir lo imposible.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u19_n10",
      type: "theory",
      title: "Caja de Herramientas: Léxico Literario",
      content: {
        concept: "Si quieres escribir poesía o un relato de C1, este es el vocabulario que debes usar para sustituir palabras comunes.\n\n• **El alba / La aurora** (Şafak / Fecir) ➔ *Me desperté al alba.*\n• **El ocaso / El crepúsculo** (Gün batımı / Alacakaranlık) ➔ *Trabajó hasta el ocaso.*\n• **La penumbra** (Yarı karanlık / Alacakaranlık) ➔ *Estaba en la penumbra.*\n• **Efímero** (Kısa ömürlü / Geçici) ➔ *Un amor efímero.*\n• **Perpetuo / Inexorable** (Ebedi / Acımasız, kaçınılmaz).\n• **El letargo** (Uyuşukluk / Derin uyku).\n• **El augurio / El presagio** (Kehanet / İşaret) ➔ *Un mal augurio.*\n• **El laberinto / El abismo** (Labirent / Uçurum).\n• **Melancolía / Pesadumbre** (Melankoli / Keder).",
        examples: [
          { es: "Desde el alba hasta el ocaso, sintió una profunda pesadumbre.", tr: "Şafaktan gün batımına kadar derin bir keder hissetti." },
          { es: "El cuervo negro era un presagio de la muerte inexorable.", tr: "Siyah karga kaçınılmaz ölümün bir işaretiydi (kehanetiydi)." },
          { es: "Salió de su letargo y miró el abismo.", tr: "Uyuşukluğundan çıktı ve uçuruma baktı." }
        ]
      }
    },
    {
      id: "c1_u19_n11",
      type: "theory",
      title: "Taller de Producción: Tu propia novela",
      content: {
        concept: "Es la hora de convertirte en una escritora de Realismo Mágico.\n\n**Instrucciones:**\nEscribe el primer párrafo (10-15 líneas) de una novela corta.\n\n1. Empieza describiendo el **escenario** usando el Imperfecto de Indicativo (Hacía, era, llovía).\n2. Introduce un elemento de **Realismo Mágico** (algo imposible tratado como normal, ej: llover ceniza, gente volando, fantasmas tomando café).\n3. Usa al menos tres palabras del **Léxico Literario** (letargo, alba, ocaso, penumbra, presagio).\n4. Utiliza una metáfora con 'DE' (Ej: *Ojos de fuego*).\n5. Incluye al menos una vez la forma **'-SE'** del Imperfecto de Subjuntivo (*Si ella viniese, como si no existiese*).\n\n¡Deja volar tu imaginación y envía tu texto literario!",
        examples: []
      }
    },
    {
      id: "c1_u19_n12",
      type: "exam",
      title: "Examen de Unidad: Realismo Mágico y Letras",
      content: {
        concept: "Demuestra tu sensibilidad poética, el dominio de los sufijos literarios y la comprensión de las metáforas hispanas.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué forma del subjuntivo significa exactamente lo mismo que 'comiera'?", options: ["Comería", "Comiese", "Comiendo"], correct: 1 },
          { type: "multiple_choice", question: "Elige la más literaria: 'Salió de casa como si no ______ nada'.", options: ["pasase", "pasara", "pasó"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la característica principal del Realismo Mágico?", options: ["Hacer mucha magia y hechizos como Harry Potter.", "Contar cosas fantásticas e imposibles como si fueran absolutamente normales.", "Escribir historias reales de la política española."], correct: 1 },
          { type: "multiple_choice", question: "Si un escritor quiere decir 'Ojos como el hielo', la metáfora más bella en español es:", options: ["Ojos de hielo", "Ojos como hielo", "Ojos helados"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'El alba' en la poesía?", options: ["Akşam (La noche)", "Şafak (El amanecer)", "Beyaz (Blanco)"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es 'El ocaso'?", options: ["Gün batımı (La puesta de sol)", "Kader (El destino)", "Okyanus (El océano)"], correct: 0 },
          { type: "multiple_choice", question: "La palabra 'Inexorable' significa:", options: ["Kısa ömürlü (Efímero)", "Kaçınılmaz / Acımasızca ilerleyen", "Mantıklı (Sensato)"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es un 'Augurio' o un 'Presagio'?", options: ["Bir işaret / Kehanet (Una señal del futuro)", "Bir kuş türü (Un pájaro)", "Bir yalan (Una mentira)"], correct: 0 },
          { type: "multiple_choice", question: "Si alguien está en un 'letargo', significa que está:", options: ["Muy feliz (Muy feliz)", "En una uyuşukluk / derin uyku", "Trabajando mucho (Trabajando mucho)"], correct: 1 },
          { type: "multiple_choice", question: "Si yo ______ (tener - literario) alas, volaría hacia ti.", options: ["tuviera", "tuviese"], correct: 1 },
          { type: "syntax", turkish: "Şafağa (alba) kadar çalışsaydım (trabajase).", spanish: "Si trabajase hasta el alba", words: ["Si", "trabajase", "hasta", "el", "alba", "trabajara"] },
          { type: "syntax", turkish: "Alacakaranlıkta (penumbra) ağlıyormuş gibi (llorase) hissettim.", spanish: "Sentí como si llorase en la penumbra", words: ["Sentí", "como", "si", "llorase", "en", "la", "penumbra", "llorara"] },
          { type: "syntax", turkish: "Sonsuz (perpetuo) bir uyuşukluk (letargo) içindeydi (estado).", spanish: "Estaba en un letargo perpetuo", words: ["Estaba", "en", "un", "letargo", "perpetuo"] },
          { type: "syntax", turkish: "Kaçınılmaz (inexorable) bir keder (pesadumbre) vardı.", spanish: "Había una pesadumbre inexorable", words: ["Había", "una", "pesadumbre", "inexorable", "efímera"] },
          { type: "syntax", turkish: "Ölüm sessizliği (silencio de muerte) şehri kapladı (cubrir).", spanish: "Un silencio de muerte cubrió la ciudad", words: ["Un", "silencio", "de", "muerte", "cubrió", "la", "ciudad"] },
          { type: "syntax", turkish: "Ona aşık olsaydım (me enamorase)...", spanish: "Si me enamorase de él", words: ["Si", "me", "enamorase", "de", "él", "enamorara"] },
          { type: "syntax", turkish: "Sanki zaman yokmuş gibi (existiese).", spanish: "Como si el tiempo no existiese", words: ["Como", "si", "el", "tiempo", "no", "existiese"] },
          { type: "syntax", turkish: "Kötü bir işaret (augurio) gökyüzünü kararttı (oscurecer).", spanish: "Un mal augurio oscureció el cielo", words: ["Un", "mal", "augurio", "oscureció", "el", "cielo"] },
          { type: "syntax", turkish: "Camdan bir hapishane (prisión) inşa etti.", spanish: "Construyó una prisión de cristal", words: ["Construyó", "una", "prisión", "de", "cristal", "como"] },
          { type: "syntax", turkish: "Gün batımında (ocaso) labirenti gördü.", spanish: "En el ocaso vio el laberinto", words: ["En", "el", "ocaso", "vio", "el", "laberinto", "alba"] }
        ]
      }
    }
  ]
};
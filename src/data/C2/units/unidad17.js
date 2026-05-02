/**
 * UNIDAD 17 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Dialecto Rioplatense (Argentina/Uruguay) y Lunfardo.
 * Tema: Voseo avanzado, Tango, literatura porteña y psicología del 'Che'.
 */

export const unidad17 = {
  id: "c2_u17",
  title: "Unidad 17: El Arrabal Porteño",
  description: "Cruza el océano hacia el Río de la Plata. Domina el voseo argentino, descubre el Lunfardo y entiende la melancolía del Tango.",
  nodes: [
    {
      id: "c2_u17_n1",
      type: "theory",
      title: "Teoría I: El Voseo Porteño (Nivel Maestro)",
      content: {
        concept: "En Argentina, Uruguay y parte de Paraguay, el pronombre 'Tú' no existe. Se usa el **VOS**. Aunque ya vimos las bases en el B2, en el nivel C2 debemos dominar sus formas en todos los tiempos y entender su carga emocional.\n\n### 1. El Subjuntivo en Voseo\nEn Argentina, el presente de subjuntivo suele ser igual al estándar (que tú cantas ➔ que vos cantes), pero en el habla rápida a veces mantienen el acento en la raíz.\n\n### 2. El Imperativo (La fuerza del Río de la Plata)\nEs la marca de identidad más fuerte. Se forma quitando la -R del infinitivo y poniendo tilde.\n• *Venir* ➔ **Vení** (Gel).\n• *Hacer* ➔ **Hacé** (Yap).\n• *Decir* ➔ **Decime** (Bana söyle).\n\n### 3. El Voseo es jerárquico\nA diferencia de España donde el 'tú' es casi universal, en Argentina el 'Vos' marca una cercanía extrema. Si no conoces a alguien, el 'Usted' sigue siendo muy importante para marcar respeto.",
        examples: [
          { es: "Che, ¿vos tenés un minuto para hablar?", tr: "Hey, (senin) konuşmak için bir dakikan var mı?" },
          { es: "Vení acá y decime la verdad de una vez.", tr: "Buraya gel ve bana gerçeği bir kerede söyle." },
          { es: "Sos una persona increíble, sabelo.", tr: "İnanılmaz bir insansın, bunu bil (Argentina emir formu)." }
        ]
      }
    },
    {
      id: "c2_u17_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Voseo Avanzado)",
      exercises: [
        { type: "syntax", turkish: "Buraya gel (vení) ve bana (me) anlat (contá).", spanish: "Vení acá y contame todo", words: ["Vení", "acá", "y", "contame", "todo", "Ven", "cuéntame"] },
        { type: "syntax", turkish: "Sen (vos) zekisin (sos) ve biliyorsun (sabés).", spanish: "Vos sos inteligente y lo sabés", words: ["Vos", "sos", "inteligente", "y", "lo", "sabés", "eres", "sabes"] },
        { type: "syntax", turkish: "Bunu yap (hacé) lütfen.", spanish: "Hacé esto por favor", words: ["Hacé", "esto", "por", "favor", "Haz"] },
        { type: "syntax", turkish: "Nereden geliyorsun (venís) sen (vos)?", spanish: "De dónde venís vos", words: ["De", "dónde", "venís", "vos", "vienes"] },
        { type: "syntax", turkish: "Bana yalan söyleme (No me mintás).", spanish: "No me mintás más", words: ["No", "me", "mintás", "más", "mientas"] },
        { type: "syntax", turkish: "Vaktin var mı? (voseo).", spanish: "Tenés tiempo vos", words: ["Tenés", "tiempo", "vos", "tienes"] },
        { type: "syntax", turkish: "Gidiyoruz (nos vamos), hadi (dale).", spanish: "Nos vamos dale", words: ["Nos", "vamos", "dale", "venga"] },
        { type: "syntax", turkish: "Nerede yaşıyorsun? (voseo).", spanish: "Dónde vivís vos", words: ["Dónde", "vivís", "vos", "vives"] },
        { type: "syntax", turkish: "Buna inanıyor musun (creés)?", spanish: "Vos creés esto", words: ["Vos", "creés", "esto", "crees"] },
        { type: "syntax", turkish: "Şuna (mirá) bak!", spanish: "Mirá esto che", words: ["Mirá", "esto", "che", "Mira"] }
      ]
    },
    {
      id: "c2_u17_n3",
      type: "theory",
      title: "Teoría II: El Lunfardo (La jerga del Arrabal)",
      content: {
        concept: "El **Lunfardo** es un producto de la gran inmigración (sobre todo italiana) que llegó a Buenos Aires a principios del siglo XX. Empezó como un lenguaje carcelario y terminó invadiendo las letras del Tango y el habla diaria.\n\n### Palabras Sagradas del Lunfardo:\n• **Laburar / El laburo:** (Çalışmak / İş). Viene del italiano 'lavoro'.\n• **Mina:** (Kadın / Hatun). *'Esa mina es hermosa'.*\n• **Pibe / Piba:** (Çocuk / Genç).\n• **Guita / Guita:** (Para / Nakit).\n• **Cana / Estar en la cana:** (Polis / Hapiste olmak).\n• **Afanar:** (Çalmak / Soymak).\n• **Morfar:** (Yemek yemek). *'Vamos a morfar algo'.*\n• **Bondi:** (Otobüs).",
        examples: [
          { es: "Mañana tengo que laburar un montón, necesito guita.", tr: "Yarın çok çalışmam (laburar) lazım, paraya (guita) ihtiyacım var." },
          { es: "¡Qué pibe tan inteligente!", tr: "Ne kadar zeki bir çocuk (pibe)!" },
          { es: "Esa mina me vuelve loco.", tr: "O kadın (mina) beni deli ediyor." }
        ]
      }
    },
    {
      id: "c2_u17_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Acento Rioplatense)",
      exercises: [
        { type: "speaking", spanish: "Che boludo dónde dejaste el auto", turkish: "Kanka arabayı nerede bıraktın? (Argentina)" },
        { type: "speaking", spanish: "Tengo un laburo re difícil", turkish: "Çok zor bir işim (laburo) var." },
        { type: "speaking", spanish: "Esa mina es re copada", turkish: "O kadın çok kafa dengi (havalı)." },
        { type: "speaking", spanish: "Vení a morfar con nosotros", turkish: "Gel bizimle bir şeyler atıştır (yemek ye)." },
        { type: "speaking", spanish: "No tengo un mango de guita", turkish: "Meteliğim (guita) yok." },
        { type: "speaking", spanish: "Qué quilombo armaste che", turkish: "Ne büyük karmaşa (lío) yarattın dostum." },
        { type: "speaking", spanish: "Subite al bondi que nos vamos", turkish: "Otobüse bin, gidiyoruz." },
        { type: "speaking", spanish: "Sos un pibe bárbaro", turkish: "Harika bir çocuksun." },
        { type: "speaking", spanish: "Mirá que te lo advertí", turkish: "Bak seni uyarmıştım (voseo)." },
        { type: "speaking", spanish: "Tomátelo con calma che", turkish: "Ağırdan al kanka." }
      ]
    },
    {
      id: "c2_u17_n5",
      type: "theory",
      title: "El Reto Turco: 'Che' vs 'Lan / Yahu'",
      content: {
        concept: "La palabra **CHE** es el alma de Argentina. Es un vocativo universal que sirve para llamar la atención, enfatizar una emoción o simplemente puntuar una frase.\n\n### Comparativa Cultural:\n• 🇹🇷 En turco, usas *'Lan'* (informal/rudo) o *'Yahu'* (énfasis). \n• 🇪🇸 El 'Che' argentino es mucho más versátil y **menos agresivo** que el 'Lan' turco. \n\n**Diferencia de melodía:**\nEl acento porteño (de Buenos Aires) tiene una curva melódica descendente al final de las frases, muy parecida al italiano de Nápoles. El turco es más rítmico y acentuado en las sílabas finales. \n\nPara sonar como una porteña C2, debes 'cantar' las palabras, estirando la vocal acentuada: *'¿Vóooos qué decíiiis?'*.",
        examples: [
          { es: "¡Che, escuchame una cosa!", tr: "Hey, bir şey dinle beni!" },
          { es: "¿Qué hacés, che? Tanto tiempo.", tr: "Naber dostum? Görüşmeyeli uzun zaman oldu." }
        ]
      }
    },
    {
      id: "c2_u17_n6",
      type: "reading",
      title: "Lectura Crítica: La Melancolía del Tango",
      content: {
        text: "El tango no es solo un baile; es un pensamiento triste que se baila. Nació en los arrabales de Buenos Aires, entre inmigrantes que extrañaban su tierra. En sus letras, el Lunfardo brilla con una pesadumbre inconfundible. \n\nEscuchar un tango es entrar en un mundo de minas traidoras, pibes que perdieron el rumbo y hombres que lloran su mala suerte en un boliche (bar). «Percanta que me amuraste...», dice un famoso tango, usando palabras que hoy solo viven en la música. El porteño es, por definición, un ser nostálgico. Si vos caminás por San Telmo un domingo de lluvia, entenderás que Buenos Aires es una ciudad que siempre está esperando a alguien que ya se fue. Ojalá el tiempo no hubiera borrado aquel aroma a café y cigarrillo de las viejas tanguerías.",
        translation: "Tango sadece bir dans değildir; dans edilen üzgün bir düşüncedir. Buenos Aires'in kenar mahallelerinde (arrabales), topraklarını özleyen göçmenler arasında doğdu. Şarkı sözlerinde Lunfardo, sarsılmaz bir kederle parlar.\n\nBir tango dinlemek; hain kadınların (minas), yolunu şaşırmış gençlerin (pibes) ve bir barda (boliche) kötü şansına ağlayan adamların dünyasına girmektir. «Beni terk eden kadın...» der ünlü bir tango, bugün sadece müzikte yaşayan kelimeler kullanarak. Buenos Airesli (porteño), tanımı gereği nostaljik bir varlıktır. Eğer bir yağmurlu pazar günü San Telmo'da yürürseniz (voseo), Buenos Aires'in her zaman çoktan gitmiş birini bekleyen bir şehir olduğunu anlayacaksınız. Keşke zaman, eski tanguería'ların o kahve ve sigara kokusunu silmeseydi."
      }
    },
    {
      id: "c2_u17_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Arrabal (C2)",
      exercises: [
        { type: "multiple_choice", question: "¿Qué palabra del Lunfardo significa 'Trabajar'?", options: ["Morfar", "Laburar", "Afanar"], correct: 1 },
        { type: "multiple_choice", question: "En Argentina, el imperativo de 'Decir' es:", options: ["Dime", "Decime", "Digasme"], correct: 1 },
        { type: "multiple_choice", question: "¿Qué es un 'Bondi'?", options: ["Un tipo de pan", "El autobús", "Un insulto"], correct: 1 },
        { type: "syntax", turkish: "Çok çalışmam (laburar) lazım (voseo).", spanish: "Tenés que laburar mucho vos", words: ["Tenés", "que", "laburar", "mucho", "vos", "tienes"] },
        { type: "syntax", turkish: "Kanka (Che), param (guita) yok.", spanish: "Che no tengo un mango de guita", words: ["Che", "no", "tengo", "un", "mango", "de", "guita"] },
        { type: "speaking", spanish: "Che decime la verdad de una vez", turkish: "Hey (kanka), bana gerçeği bir kerede söyle." },
        { type: "speaking", spanish: "Esa mina es re inteligente sabelo", turkish: "O kadın çok zeki, bunu bil." },
        { type: "speaking", spanish: "Qué quilombo es esta oficina che", turkish: "Bu ofis ne büyük karmaşa dostum." },
        { type: "speaking", spanish: "Vení a tomar un café conmigo", turkish: "Gel benimle bir kahve iç." },
        { type: "speaking", spanish: "Sos el mejor amigo del mundo", turkish: "Dünyanın en iyi arkadaşısın (Argentina)." }
      ]
    },
    {
      id: "c2_u17_n8",
      type: "theory",
      title: "Teoría III: El Vesre (Hablar al revés)",
      content: {
        concept: "En el nivel C2 debemos tratar el fenómeno del **VESRE** (Al revés). Es una forma de juego lingüístico porteño donde se invierten las sílabas de las palabras para ocultar el significado.\n\n### Ejemplos clásicos de Vesre:\n• **Tango** ➔ **Gotán**.\n• **Amigo** ➔ **Gomía**.\n• **Pantalón** ➔ **Lompa**.\n• **Mujer** ➔ **Jermu**.\n• **Café** ➔ **Feca**.\n• **Doctor** ➔ **Tordo**.\n\nNo es un idioma nuevo, es una capa de 'barrio' que se añade al español. Un porteño dirá: 'Che, gomía, ¿vamos a tomar un feca?' (Kanka, hadi bir kahve içelim mi?).",
        examples: [
          { es: "Mi jermu cocina re bien.", tr: "Hanımım (karım) çok iyi yemek pişirir." },
          { es: "Me olvidé el lompa en el club.", tr: "Kulüpte pantolonumu unuttum." }
        ]
      }
    },
    {
      id: "c2_u17_n9",
      type: "theory",
      title: "Sintaxis Visual: El Lunfardo en la frase",
      content: {
        concept: "Analizaremos cómo una frase argentina mezcla voseo, prefijos intensificadores (re) y vocabulario vesre.",
        examples: [{ es: "Che, decime si vos tenés la guita para el bondi o si estás a dos velas.", tr: "Hey, söylesene otobüs için paran var mı yoksa meteliğe kurşun mu atıyorsun?" }],
        analysis: [
          { word: "Che,", type: "pronoun", literal: "Hey / Dostum", explanation: "Vocativo obligatorio para iniciar la interacción rioplatense.", examples: [] },
          { word: "decime", type: "verb", literal: "bana söyle", explanation: "Imperativo de voseo (Deci + me). Nota la ausencia de la 'i' del estándar 'dime'.", examples: [] },
          { word: "si vos tenés", type: "verb", literal: "eğer senin varsa", explanation: "Sujeto 'vos' + verbo TENER en voseo (acento en la última e).", examples: [] },
          { word: "la guita", type: "noun", literal: "para / nakit", explanation: "Lunfardo para dinero.", examples: [] },
          { word: "para el bondi", type: "noun", literal: "otobüs için", explanation: "Lunfardo para autobús público.", examples: [] },
          { word: "o si estás", type: "verb", literal: "yoksa bulunuyor musun", explanation: "Conector y verbo de estado.", examples: [] },
          { word: "a dos velas.", type: "adjective", literal: "parasız / bitik", explanation: "Modismo (compartido con España) para decir que no tienes dinero.", examples: [] }
        ]
      }
    },
    {
      id: "c2_u17_n10",
      type: "theory",
      title: "Caja de Herramientas: Diccionario Rioplatense",
      content: {
        concept: "Palabras para sobrevivir en Buenos Aires o Montevideo:\n\n• **Bárbaro / Genial** (Harika)\n• **Copado / Kafa dengi** (Havalı kişi/durum)\n• **Boliche** (Bar o discoteca)\n• **Estar al horno** (Başı belada olmak / Bitik durumda olmak)\n• **Hacerse el oso** (Görmezden gelmek / Aptala yatmak)\n• **Ni en pedo** (Asla / Sarhoş olsam bile yapmam)\n• **Posta** (Gerçek / Sahiden) ➔ *¿Es posta?*\n• **Laburo** (İş) / **Changa** (Geçici iş)",
        examples: [
          { es: "Mañana rindo el examen y no estudié nada, estoy al horno.", tr: "Yarın sınava giriyorum ve hiç çalışmadım, yandım (fırındayım)." },
          { es: "La película estuvo bárbara, me encantó.", tr: "Film harikaydı, bayıldım." },
          { es: "Te digo la posta, no tengo ganas de ir.", tr: "Sana gerçeği (posta) söylüyorum, gitmeye niyetim yok." }
        ]
      }
    },
    {
      id: "c2_u17_n11",
      type: "theory",
      title: "Taller de Producción: Mi primer Tango",
      content: {
        concept: "Vas a escribir como si fueras un poeta de 1930 en un café de Buenos Aires.\n\n**Instrucciones:**\nEscribe un pequeño poema o relato (10-12 líneas) sobre la pérdida o el paso del tiempo.\n1. Usa el voseo (vos sos, tenés, vení).\n2. Incluye al menos 3 palabras de Lunfardo (guita, laburo, mina, pibe).\n3. Usa una palabra en 'Vesre' (gotán, jermu, feca).\n4. Usa un intensificador 're'.\n\n**Inspiración:** 'Che, gomía, escuchá este gotán. Mi jermu se fue y me quedé sin guita. El laburo es re difícil...'",
        examples: []
      }
    },
    {
      id: "c2_u17_n12",
      type: "exam",
      title: "Examen de Unidad 17: El Arrabal",
      content: {
        concept: "Evaluación técnica sobre el dialecto rioplatense, voseo y vocabulario lunfardo.",
        exercises: [
          { type: "multiple_choice", question: "¿Cómo se dice 'Sen yapıyorsun' en voseo?", options: ["Vos haces", "Vos hacés", "Vos hacas"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Laburar'?", options: ["Comer", "Trabajar / Çalışmak", "Dormir"], correct: 1 },
          { type: "multiple_choice", question: "El imperativo de 'Venir' en Argentina es:", options: ["Vente", "Vení", "Ven"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Estar al horno'?", options: ["Tener calor", "Estar en problemas graves / Bitik olmak", "Cocinar"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Dostum / Kanka' en Argentina de forma muy común?", options: ["Tío", "Güey", "Che"], correct: 2 },
          { type: "multiple_choice", question: "En el juego 'Vesre', ¿qué significa 'Feca'?", options: ["Cara", "Café", "Fiesta"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué palabra sustituye a 'Muy' en el Cono Sur?", options: ["Mazo", "Re", "Padre"], correct: 1 },
          { type: "multiple_choice", question: "Si una mina es 'copada', significa que es:", options: ["Mala", "Simpática / Havalı / Kafa dengi", "Rica"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es la 'Guita'?", options: ["Guitarra", "Dinero / Para", "Comida"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se conjuga 'Ser' para Vos?", options: ["Eres", "Sos", "Sois"], correct: 1 },
          { type: "syntax", turkish: "Söylesene (voseo), paran (guita) var mı (tenés)?", spanish: "Decime tenés guita vos", words: ["Decime", "tenés", "guita", "vos", "Dime", "tienes"] },
          { type: "syntax", turkish: "Sen (vos) harikasın (sos bárbaro) dostum (che).", spanish: "Vos sos bárbaro che", words: ["Vos", "sos", "bárbaro", "che", "eres"] },
          { type: "syntax", turkish: "İşim (laburo) çok (re) zor.", spanish: "Mi laburo es re difícil", words: ["Mi", "laburo", "es", "re", "difícil", "trabajo"] },
          { type: "syntax", turkish: "Hemen buraya gel (vení)!", spanish: "Vení para acá ahora", words: ["Vení", "para", "acá", "ahora", "Ven"] },
          { type: "syntax", turkish: "O kadın (mina) çok havalı (copada).", spanish: "Esa mina es re copada", words: ["Esa", "mina", "es", "re", "copada", "muy"] },
          { type: "syntax", turkish: "Otobüse (bondi) binmemiz lazım.", spanish: "Tenemos que subir al bondi", words: ["Tenemos", "que", "subir", "al", "bondi"] },
          { type: "syntax", turkish: "Aklını mı yitirdin (voseo)?", spanish: "Perdiste el juicio vos", words: ["Perdiste", "el", "juicio", "vos", "perdió"] },
          { type: "syntax", turkish: "Gerçekten (Posta), bilmiyordum.", spanish: "Posta no lo sabía", words: ["Posta", "no", "lo", "sabía", "sabía"] },
          { type: "syntax", turkish: "Dostum (gomía), nasılsın?", spanish: "Cómo estás gomía", words: ["Cómo", "estás", "gomía", "amigo"] },
          { type: "syntax", turkish: "Hadi (dale) gidelim.", spanish: "Dale vamos", words: ["Dale", "vamos", "Venga"] }
        ]
      }
    }
  ]
};
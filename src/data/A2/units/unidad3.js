/**
 * UNIDAD 3: AYER Y LA HISTORIA (NIVEL A2)
 * Enfoque: Pretérito Indefinido Regular y verbos SER/IR
 * Estructura: 12 Nodos con Teoría Extensa e Intercalada
 */

export const unidad3 = {
  id: "a2_u3",
  title: "Unidad 3: Ayer y la Historia",
  description: "Dominio del Pretérito Indefinido regular, los verbos gemelos SER/IR y la narración de eventos terminados.",
  nodes: [
    {
      id: "a2_u3_n1",
      type: "theory",
      title: "Teoría I: La Película del Pasado (Indefinido Regular)",
      content: {
        concept: "Si el Pretérito Perfecto (Unidad 1) era una 'ventana abierta' al presente, el **Pretérito Indefinido** es una 'caja cerrada'. Lo usamos para acciones que empezaron y terminaron en un punto específico del pasado que ya no tiene relación con el ahora.\n\n### 1. La Lógica de las Terminaciones\nA diferencia del presente, aquí los verbos -ER e -IR comparten exactamente las mismas terminaciones. ¡Una buena noticia para tu memoria!\n\n**Grupo -AR (Hablar):**\n• Yo habl**É** / Tú habl**ASTE** / Él habl**Ó**\n• Nosotros habl**AMOS** / Ellos habl**ARON**\n\n**Grupo -ER / -IR (Comer / Vivir):**\n• Yo com**Í** / Tú com**ISTE** / Él com**IÓ**\n• Nosotros com**IMOS** / Ellos com**IERON**\n\n### 2. El Poder del Acento (La Tilde)\n⚠️ ¡ALERTA CRÍTICA!: En turco, el acento tónico es más plano. En español, si no pones el acento en la última letra de 'Yo' y 'Él', el significado cambia totalmente.\n• *Hablo* = Ben konuşurum (Presente).\n• *Habló* = O konuştu (Pasado).\nSin la tilde, la gente pensará que estás hablando en presente.",
        examples: [
          { es: "Ayer trabajé diez horas.", tr: "Dün on saat çalıştım." },
          { es: "Él comió mucha pizza anoche.", tr: "O dün gece çok pizza yedi." },
          { es: "Nosotros vivimos en Londres en 2010.", tr: "2010'da Londra'da yaşadık." }
        ]
      }
    },
    {
      id: "a2_u3_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Acciones Terminadas)",
      exercises: [
        { type: "syntax", turkish: "Dün çok çalıştım.", spanish: "Ayer trabajé mucho", words: ["Ayer", "trabajé", "mucho", "trabajo", "he"] },
        { type: "syntax", turkish: "Geçen yıl Madrid'e seyahat ettik.", spanish: "El año pasado viajamos a Madrid", words: ["El", "año", "pasado", "viajamos", "a", "Madrid", "viajan"] },
        { type: "syntax", turkish: "O (kadın) çok lezzetli bir yemek pişirdi.", spanish: "Ella cocinó una comida muy rica", words: ["Ella", "cocinó", "una", "comida", "muy", "rica", "cocina"] },
        { type: "syntax", turkish: "Onlar dün akşam pizza yediler.", spanish: "Ellos comieron pizza ayer por la noche", words: ["Ellos", "comieron", "pizza", "ayer", "por", "la", "noche"] },
        { type: "syntax", turkish: "Kapıyı ben açtım.", spanish: "Yo abrí la puerta", words: ["Yo", "abrí", "la", "puerta", "abro"] },
        { type: "syntax", turkish: "Sen bir mektup yazdın.", spanish: "Tú escribiste una carta", words: ["Tú", "escribiste", "una", "carta", "escribo"] },
        { type: "syntax", turkish: "Biz İspanya'da yaşadık.", spanish: "Nosotros vivimos en España", words: ["Nosotros", "vivimos", "en", "España", "viven"] },
        { type: "syntax", turkish: "O (erkek) dün bana yardım etti.", spanish: "Él me ayudó ayer", words: ["Él", "me", "ayudó", "ayer", "ayuda"] },
        { type: "syntax", turkish: "Siz (formal) çok iyi konuştunuz.", spanish: "Usted habló muy bien", words: ["Usted", "habló", "muy", "bien", "hablas"] },
        { type: "syntax", turkish: "Onlar geçen hafta bir ev satın aldılar.", spanish: "Ellos compraron una casa la semana pasada", words: ["Ellos", "compraron", "una", "casa", "la", "semana", "pasada"] },
        { type: "syntax", turkish: "Kahveyi ben içtim.", spanish: "Yo bebí el café", words: ["Yo", "bebí", "el", "café", "bebo"] },
        { type: "syntax", turkish: "Dün gece hiç uyumadın.", spanish: "No dormiste nada anoche", words: ["No", "dormiste", "nada", "anoche", "duermes"] },
        { type: "syntax", turkish: "Biz radyoyu dinledik.", spanish: "Nosotros escuchamos la radio", words: ["Nosotros", "escuchamos", "la", "radio", "escuchan"] },
        { type: "syntax", turkish: "Öğrenciler sınavı bitirdiler.", spanish: "Los estudiantes terminaron el examen", words: ["Los", "estudiantes", "terminaron", "el", "examen"] },
        { type: "syntax", turkish: "Sen İspanyolca öğrendin.", spanish: "Tú aprendiste español", words: ["Tú", "aprendiste", "español", "aprendes"] }
      ]
    },
    {
      id: "a2_u3_n3",
      type: "theory",
      title: "Teoría II: Los Verbos Gemelos (SER e IR)",
      content: {
        concept: "En el pasado indefinido ocurre uno de los fenómenos más extraños del español: el verbo **SER** (olmak) y el verbo **IR** (gitmek) tienen **EXACTAMENTE LA MISMA CONJUGACIÓN**.\n\n### Conjugación Compartida:\n• Yo **FUI**\n• Tú **FUISTE**\n• Él / Ella / Usted **FUE**\n• Nosotros / Nosotras **FUIMOS**\n• Ellos / Ellas / Ustedes **FUERON**\n\n### ¿Cómo diferenciarlos?\n¡Es muy fácil! Por el contexto y las preposiciones:\n• Si es **IR (Movimiento)**: Casi siempre lleva la preposición **'A'**. \n  *Ej: Fui A la playa (Sahile gittim).*\n• Si es **SER (Identidad/Evento)**: Suele ir seguido de un adjetivo o un lugar de evento.\n  *Ej: La fiesta FUE en mi casa (Parti evimdeydi).* / *Yo FUI muy feliz (Çok mutluydum).* ",
        examples: [
          { es: "Ayer fui al cine con Carlos. (IR)", tr: "Dün Carlos ile sinemaya gittim." },
          { es: "El examen fue muy difícil. (SER)", tr: "Sınav çok zordu." },
          { es: "Nosotros fuimos amigos hace años. (SER)", tr: "Yıllar önce arkadaştık." }
        ]
      }
    },
    {
      id: "a2_u3_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Acento y Gemelos)",
      exercises: [
        { type: "speaking", spanish: "Ayer fui al cine", turkish: "Dün sinemaya gittim." },
        { type: "speaking", spanish: "La película fue muy buena", turkish: "Film çok iyiydi." },
        { type: "speaking", spanish: "Yo trabajé mucho ayer", turkish: "Dün çok çalıştım." },
        { type: "speaking", spanish: "Él comió pescado anoche", turkish: "O dün gece balık yedi." },
        { type: "speaking", spanish: "Nosotros fuimos a Madrid", turkish: "Biz Madrid'e gittik." },
        { type: "speaking", spanish: "El viaje fue increíble", turkish: "Yolculuk inanılmazdı." },
        { type: "speaking", spanish: "Tú aprendiste mucho", turkish: "Sen çok şey öğrendin." },
        { type: "speaking", spanish: "Ellos compraron una casa", turkish: "Onlar bir ev satın aldılar." },
        { type: "speaking", spanish: "Fuiste muy amable conmigo", turkish: "Bana karşı çok naziktin." },
        { type: "speaking", spanish: "Nosotros bebimos té turco", turkish: "Biz Türk çayı içtik." },
        { type: "speaking", spanish: "Ella abrió la ventana", turkish: "O pencereyi açtı." },
        { type: "speaking", spanish: "Fuimos al mercado temprano", turkish: "Pazara erken gittik." },
        { type: "speaking", spanish: "Él escribió un mensaje", turkish: "O bir mesaj yazdı." },
        { type: "speaking", spanish: "Yo viví en Estambul", turkish: "Ben İstanbul'da yaşadım." },
        { type: "speaking", spanish: "Ellos fueron mis profesores", turkish: "Onlar benim öğretmenlerimdi." }
      ]
    },
    {
      id: "a2_u3_n5",
      type: "theory",
      title: "Teoría III: La Ventana Cerrada (Marcadores)",
      content: {
        concept: "Recuerda la 'Unidad 1': Si dices 'hoy', usas 'He comido'. Pero si el tiempo está terminado y separado del presente, usamos el Indefinido. \n\n### Marcadores de Pasado Terminado:\n1. **AYER** (Dün) / **ANTEAYER** (Evvelsi gün).\n2. **ANOCHE** (Dün gece).\n3. **EL MES PASADO / EL AÑO PASADO** (Geçen ay / Geçen yıl).\n4. **HACE + Tiempo** ( ... önce).\n   *Ej: Hace dos días (İki gün önce).* / *Hace un mes (Bir ay önce).*\n5. **FECHAS ESPECÍFICAS**:\n   *Ej: El 14 de febrero.* / *En 1998.*\n\n💡 REGLA DE ORO: Si usas uno de estos marcadores, es obligatorio usar este tiempo verbal. No puedes decir 'Ayer he comido', es un error que suena muy mal en España.",
        examples: [
          { es: "Hace tres días hablé con mi novio.", tr: "Üç gün önce erkek arkadaşımla konuştum." },
          { es: "Anoche dormí diez horas.", tr: "Dün gece on saat uyudum." },
          { es: "En 2015 viajé a Colombia.", tr: "2015'te Kolombiya'ya seyahat ettim." }
        ]
      }
    },
    {
      id: "a2_u3_n6",
      type: "reading",
      title: "Lectura y Audio: Mi Biografía",
      content: {
        text: "Yo nací en una ciudad pequeña cerca del mar. Mi infancia fue muy feliz. Estudié en una escuela local y allí conocí a mis mejores amigos. \n\nEn 2018, terminé la universidad y decidí viajar por primera vez. Fui a España durante tres meses. Allí aprendí mucho español y comí platos deliciosos. Un día, caminé por las calles de Madrid y encontré una pequeña librería antigua. Compré un libro de poemas y lo leí en el Parque del Retiro. Ese viaje cambió mi vida para siempre. Después, volví a Turquía y empecé a trabajar como profesora.",
        translation: "Deniz yakınlarında küçük bir şehirde doğdum. Çocukluğum çok mutluydu. Yerel bir okulda okudum ve en iyi arkadaşlarımla orada tanıştım.\n\n2018 yılında üniversiteyi bitirdim ve ilk kez seyahat etmeye karar verdim. Üç aylığına İspanya'ya gittim. Orada çokça İspanyolca öğrendim ve lezzetli yemekler yedim. Bir gün Madrid sokaklarında yürüdüm ve küçük, eski bir kitapçı buldum. Bir şiir kitabı satın aldım ve onu Retiro Parkı'nda okudum. O yolculuk hayatımı sonsuza dek değiştirdi. Sonra Türkiye'ye döndüm ve öğretmen olarak çalışmaya başladım."
      }
    },
    {
      id: "a2_u3_n7",
      type: "quiz",
      title: "Práctica III: Desafío Maestro (Sintaxis + Voz)",
      exercises: [
        { type: "syntax", turkish: "İki gün önce sinemaya gittim.", spanish: "Hace dos días fui al cine", words: ["Hace", "dos", "días", "fui", "al", "cine", "iba"] },
        { type: "syntax", turkish: "Dün akşam arkadaşlarımla yemek yedim.", spanish: "Anoche comí con mis amigos", words: ["Anoche", "comí", "con", "mis", "amigos", "comido"] },
        { type: "syntax", turkish: "Geçen hafta bir mektup yazdın.", spanish: "La semana pasada escribiste una carta", words: ["La", "semana", "pasada", "escribiste", "una", "carta"] },
        { type: "syntax", turkish: "O (erkek) 1990'da doğdu (nacer).", spanish: "Él nació en mil novecientos noventa", words: ["Él", "nació", "en", "mil", "novecientos", "noventa"] },
        { type: "syntax", turkish: "Sınav çok zordu.", spanish: "El examen fue muy difícil", words: ["El", "examen", "fue", "muy", "difícil", "era"] },
        { type: "syntax", turkish: "Onlar dün plaja gittiler.", spanish: "Ellos fueron a la playa ayer", words: ["Ellos", "fueron", "a", "la", "playa", "ayer", "van"] },
        { type: "syntax", turkish: "İki yıl önce mezun oldum.", spanish: "Me gradué hace dos años", words: ["Me", "gradué", "hace", "dos", "años", "graduado"] },
        { type: "syntax", turkish: "Müzeyi ziyaret ettiniz mi? (Ustedes)", spanish: "Visitaron ustedes el museo", words: ["Visitaron", "ustedes", "el", "museo", "visitan"] },
        { type: "syntax", turkish: "Dün hiç su içmedik.", spanish: "Ayer no bebimos nada de agua", words: ["Ayer", "no", "bebimos", "nada", "de", "agua"] },
        { type: "syntax", turkish: "Geçen yıl çok İspanyolca öğrendim.", spanish: "El año pasado aprendí mucho español", words: ["El", "año", "pasado", "aprendí", "mucho", "español"] },
        { type: "speaking", spanish: "Hace un mes viajé a España", turkish: "Bir ay önce İspanya'ya seyahat ettim." },
        { type: "speaking", spanish: "Anoche cenamos en un restaurante", turkish: "Dün gece bir restoranda akşam yemeği yedik." },
        { type: "speaking", spanish: "El examen de ayer fue fácil", turkish: "Dünkü sınav kolaydı." },
        { type: "speaking", spanish: "Ellos vivieron en México tres años", turkish: "Üç yıl Meksika'da yaşadılar." },
        { type: "speaking", spanish: "Fui al supermercado esta mañana", turkish: "Bu sabah süpermarkete gittim." },
        { type: "speaking", spanish: "Tú compraste un regalo ayer", turkish: "Dün bir hediye satın aldın." },
        { type: "speaking", spanish: "Nosotros fuimos muy felices allí", turkish: "Orada çok mutluyduk." },
        { type: "speaking", spanish: "Ella aprendió a cocinar el año pasado", turkish: "O geçen yıl yemek yapmayı öğrendi." },
        { type: "speaking", spanish: "Ayer no trabajé en la oficina", turkish: "Dün ofiste çalışmadım." },
        { type: "speaking", spanish: "Nací en el mes de agosto", turkish: "Ağustos ayında doğdum." }
      ]
    },
    {
      id: "a2_u3_n8",
      type: "theory",
      title: "Teoría IV: Conectores de la Historia",
      content: {
        concept: "Para que ella no hable con frases cortas y desconectadas, debe aprender a unir los eventos. Estos conectores actúan como los 'pasos' de una escalera narrativa.\n\n### Los Conectores de Secuencia:\n1. **PRIMERO** (Önce): Para iniciar la historia.\n2. **LUEGO / DESPUÉS** (Sonra): Para continuar.\n3. **ENTONCES** (O zaman / O zamanlar): Para marcar una consecuencia.\n4. **AL FINAL / POR ÚLTIMO** (Sonunda): Para cerrar.\n5. **DE REPENTE** (Aniden): Para introducir una sorpresa o cambio de acción.\n\n💡 TRUCO: Cuando cuentes algo que pasó ayer, intenta usar al menos tres de estos. 'Primero fui al banco, luego comí y al final volví a casa'.",
        examples: [
          { es: "Primero estudié y luego fui al gimnasio.", tr: "Önce çalıştım, sonra spor salonuna gittim." },
          { es: "De repente, escuché un ruido fuerte.", tr: "Aniden yüksek bir ses duydum." },
          { es: "Al final, el examen fue sencillo.", tr: "Sonunda, sınav basitti." }
        ]
      }
    },
    {
      id: "a2_u3_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Pasado Biográfico",
      content: {
        concept: "Analizaremos la estructura de una frase biográfica compleja que mezcla ubicación, tiempo y acción. Observa cómo el 'dónde' y el 'cuándo' suelen enmarcar al verbo principal.",
        examples: [{ es: "El año pasado yo viví en una casa pequeña en Madrid.", tr: "Geçen yıl Madrid'de küçük bir evde yaşadım." }],
        analysis: [
          { word: "El año pasado", type: "adverb", literal: "Geçen yıl", explanation: "Marcador temporal de 'ventana cerrada'. Define que debemos usar el Pretérito Indefinido.", examples: [] },
          { word: "yo", type: "pronoun", literal: "ben", explanation: "Sujeto. Posición 2.", examples: [] },
          { word: "viví", type: "verb", literal: "yaşadım", explanation: "Verbo principal en Indefinido. Fíjate en la tilde (acento) en la 'í'. Sin ella, no es pasado.", examples: [] },
          { word: "en una casa", type: "noun", literal: "bir evde", explanation: "Complemento de lugar con artículo indefinido (bir).", examples: [] },
          { word: "pequeña", type: "adjective", literal: "küçük", explanation: "Adjetivo calificativo. Posición final del bloque del sustantivo.", examples: [] },
          { word: "en Madrid", type: "noun", literal: "Madrid'de", explanation: "Localización geográfica final.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u3_n10",
      type: "theory",
      title: "Herramientas: Hitos de la Vida",
      content: {
        concept: "Aquí tienes el vocabulario necesario para contar tu historia personal en los exámenes oficiales.\n\n• **Nacer** ➔ Nací (Doğmak)\n• **Empezar** ➔ Empecé (Başlamak) *Ojo: z -> c*\n• **Terminar** ➔ Terminé (Bitirmek)\n• **Graduarse** ➔ Me gradué (Mezun olmak)\n• **Conocer** ➔ Conocí (Tanışmak / Tanımak)\n• **Casarse** ➔ Me casé (Evlenmek)\n• **Mudarse** ➔ Me mudé (Taşınmak)\n• **Viajar** ➔ Viajé (Seyahat etmek)\n• **Trabajar** ➔ Trabajé (Çalışmak)",
        examples: [
          { es: "Me gradué en la universidad en 2012.", tr: "2012'de üniversiteden mezun oldum." },
          { es: "Conocí a mi novio en una fiesta.", tr: "Erkek arkadaşımla bir partide tanıştım." },
          { es: "Me mudé a otra ciudad hace tres meses.", tr: "Üç ay önce başka bir şehre taşındım." }
        ]
      }
    },
    {
      id: "a2_u3_n11",
      type: "theory",
      title: "Taller de Producción: Tu Pequeña Historia",
      content: {
        concept: "Escribir es la mejor forma de fijar las terminaciones del pasado en tu mente.\n\n**Instrucciones:**\nEscribe un texto corto (mínimo 6 líneas) contando lo que hiciste el fin de semana pasado o durante tus últimas vacaciones.\n1. Usa al menos 5 verbos en Pretérito Indefinido.\n2. Incluye al menos una vez el verbo FUI (de SER o de IR).\n3. Usa conectores: Primero, después, al final.\n\n**Ejemplo:**\n'El sábado pasado fui a la montaña con mi familia. Primero caminamos mucho y después comimos...'",
        examples: []
      }
    },
    {
      id: "a2_u3_n12",
      type: "exam",
      title: "Examen de Unidad: Ayer y la Historia",
      content: {
        concept: "Demuestra que eres una narradora del pasado. Evalúa tu dominio del Indefinido regular y los verbos SER/IR.",
        exercises: [
          { type: "multiple_choice", question: "¿Cómo se conjuga 'Yo (comer)' en Indefinido?", options: ["Comí", "Comé", "Como"], correct: 0 },
          { type: "multiple_choice", question: "Participio vs Indefinido: 'Ayer ______ al cine'.", options: ["he ido", "fui", "voy"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué verbo es 'Fuimos'?", options: ["Solo SER", "Solo IR", "SER e IR"], correct: 2 },
          { type: "multiple_choice", question: "El año pasado ellos ______ (viajar) a México.", options: ["viajaron", "viajamos", "viajan"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es correcto para 'Yo (hablar)'?", options: ["Habló", "Hablé", "Hablaste"], correct: 1 },
          { type: "multiple_choice", question: "Si digo 'Él hablo', ¿qué tiempo es?", options: ["Pasado", "Presente (error de tilde)", "Futuro"], correct: 1 },
          { type: "multiple_choice", question: "Hace dos horas yo ______ (beber) un té.", options: ["bebí", "bebo", "bebiste"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué marcador exige el Indefinido?", options: ["Hoy", "Ayer", "Esta mañana"], correct: 1 },
          { type: "multiple_choice", question: "Tú ______ (escribir) un libro increíble.", options: ["escribiste", "escribió", "escribí"], correct: 0 },
          { type: "multiple_choice", question: "Nosotros ______ (aprender) mucho en 2020.", options: ["aprendimos", "aprendemos", "aprendieron"], correct: 0 },
          { type: "syntax", turkish: "Dün sinemaya gittim.", spanish: "Ayer fui al cine", words: ["Ayer", "fui", "al", "cine", "he", "ido"] },
          { type: "syntax", turkish: "1995'te doğdum.", spanish: "Nací en mil novecientos noventa y cinco", words: ["Nací", "en", "mil", "novecientos", "noventa", "y", "cinco"] },
          { type: "syntax", turkish: "Önce çalıştım, sonra dinlendim.", spanish: "Primero trabajé luego descansé", words: ["Primero", "trabajé", "luego", "descansé", "después"] },
          { type: "syntax", turkish: "Onlar pizza yemediler.", spanish: "Ellos no comieron pizza", words: ["Ellos", "no", "comieron", "pizza", "comen"] },
          { type: "syntax", turkish: "Sen anahtarları buldun (encontrar).", spanish: "Tú encontraste las llaves", words: ["Tú", "encontraste", "las", "llaves", "encontrado"] },
          { type: "syntax", turkish: "Geçen yıl çok kar yağdı (nevar).", spanish: "El año pasado nevó mucho", words: ["El", "año", "pasado", "nevó", "mucho", "nieva"] },
          { type: "syntax", turkish: "Bize her şeyi anlattın (contar).", spanish: "Nos contaste todo", words: ["Nos", "contaste", "todo", "cuentas"] },
          { type: "syntax", turkish: "Parti harikaydı (fue).", spanish: "La fiesta fue maravillosa", words: ["La", "fiesta", "fue", "maravillosa", "era"] },
          { type: "syntax", turkish: "İki gün önce taşındım (mudarse).", spanish: "Me mudé hace dos días", words: ["Me", "mudé", "hace", "dos", "días", "mudo"] },
          { type: "syntax", turkish: "Mektubu dün yazdım.", spanish: "Escribí la carta ayer", words: ["Escribí", "la", "carta", "ayer", "escribo"] }
        ]
      }
    }
  ]
};
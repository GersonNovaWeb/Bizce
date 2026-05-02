/**
 * UNIDAD 7: NOSTALGIA (NIVEL A2)
 * Enfoque: Pretérito Imperfecto (Había una vez...)
 * Estructura: 12 Nodos con Teoría Extensa e Intercalada
 */

export const unidad7 = {
  id: "a2_u7",
  title: "Unidad 7: Había una vez...",
  description: "Dominio del Pretérito Imperfecto para describir la infancia, hábitos antiguos y escenarios pasados.",
  nodes: [
    {
      id: "a2_u7_n1",
      type: "theory",
      title: "Teoría I: La Armonía del Imperfecto",
      content: {
        concept: "Bienvenidos al tiempo de la 'Nostalgia'. Mientras que el Indefinido (Unidad 3) es una acción rápida y terminada, el **Pretérito Imperfecto** es como una cámara lenta o una fotografía antigua. Lo usamos para acciones que se repetían o que no tienen un final claro.\n\n### 1. La Lógica de las Terminaciones\nEste es el tiempo verbal más regular y musical del español. Solo existen dos grupos de terminaciones:\n\n**Grupo -AR (Cantar/Jugar):**\nLa clave es el sonido **-ABA**. \n• Yo jug**ABA** / Tú jug**ABAS** / Él jug**ABA**\n• Nosotros jug**ÁBAMOS** / Ellos jug**ABAN**\n\n**Grupo -ER / -IR (Comer/Vivir):**\nLa clave es el sonido **-ÍA**. ¡Ojo! Todas las personas llevan tilde en la 'I'.\n• Yo com**ÍA** / Tú com**ÍAS** / Él com**ÍA**\n• Nosotros com**ÍAMOS** / Ellos com**ÍAN**\n\n### 2. ¿Cuándo usarlo?\nImagina que estás contando tu infancia. No dices 'Un día jugué', dices 'Yo jugaba todos los días'. Es el tiempo de los hábitos.\n\n🇹🇷 LÓGICA TURCA: Equivale a los sufijos **-erdi / -ardı** (Giderdim, yerdim) o al pasado continuo **-iyordu** (Yapıyordu).",
        examples: [
          { es: "Cuando era niña, yo jugaba en la calle.", tr: "Çocukken sokakta oynardım." },
          { es: "Mi abuela cocinaba platos deliciosos.", tr: "Anneannem lezzetli yemekler pişirirdi." },
          { es: "Nosotros vivíamos en una casa pequeña.", tr: "Küçük bir evde yaşıyorduk." }
        ]
      }
    },
    {
      id: "a2_u7_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Hábitos)",
      exercises: [
        { type: "syntax", turkish: "Her gün parkta oynardım (jugar).", spanish: "Todos los días jugaba en el parque", words: ["Todos", "los", "días", "jugaba", "en", "el", "parque", "jugé"] },
        { type: "syntax", turkish: "Biz İspanya'da yaşıyorduk.", spanish: "Nosotros vivíamos en España", words: ["Nosotros", "vivíamos", "en", "España", "vivimos", "viviendo"] },
        { type: "syntax", turkish: "Annem çok güzel şarkı söylerdi.", spanish: "Mi madre cantaba muy bien", words: ["Mi", "madre", "cantaba", "muy", "bien", "cantó"] },
        { type: "syntax", turkish: "Sen çok süt içeridin.", spanish: "Tú bebías mucha leche", words: ["Tú", "bebías", "mucha", "leche", "bebiste"] },
        { type: "syntax", turkish: "Onlar her sabah koşarlardı.", spanish: "Ellos corrían cada mañana", words: ["Ellos", "corrían", "cada", "mañana", "corrieron"] },
        { type: "syntax", turkish: "Benim babam bankada çalışırdı.", spanish: "Mi padre trabajaba en un banco", words: ["Mi", "padre", "trabajaba", "en", "un", "banco", "trabajó"] },
        { type: "syntax", turkish: "Okulda çok kitap okurduk.", spanish: "Leíamos muchos libros en la escuela", words: ["Leíamos", "muchos", "libros", "en", "la", "escuela", "leímos"] },
        { type: "syntax", turkish: "O (kadın) mektup yazardı.", spanish: "Ella escribía cartas", words: ["Ella", "escribía", "cartas", "escribió"] },
        { type: "syntax", turkish: "Eskiden (Antes) et yemezdim.", spanish: "Antes no comía carne", words: ["Antes", "no", "comía", "carne", "comí"] },
        { type: "syntax", turkish: "Pencereler her zaman açıktı.", spanish: "Las ventanas siempre estaban abiertas", words: ["Las", "ventanas", "siempre", "estaban", "abiertas", "estuvieron"] },
        { type: "syntax", turkish: "Sen bana yardım ederdin.", spanish: "Tú me ayudabas", words: ["Tú", "me", "ayudabas", "ayudaste"] },
        { type: "syntax", turkish: "Onlar çok uyurlardı.", spanish: "Ellos dormían mucho", words: ["Ellos", "dormían", "mucho", "duermen"] },
        { type: "syntax", turkish: "Biz denizde yüzerdik (nadar).", spanish: "Nosotros nadábamos en el mar", words: ["Nosotros", "nadábamos", "en", "el", "mar", "nadamos"] },
        { type: "syntax", turkish: "O (erkek) İspanyolca konuşurdu.", spanish: "Él hablaba español", words: ["Él", "hablaba", "español", "habló"] },
        { type: "syntax", turkish: "Evde bir köpeğimiz vardı.", spanish: "Teníamos un perro en casa", words: ["Teníamos", "un", "perro", "en", "casa", "tuvimos"] }
      ]
    },
    {
      id: "a2_u7_n3",
      type: "theory",
      title: "Teoría II: Los 3 Únicos Irregulares",
      content: {
        concept: "Esta es la mejor noticia del nivel A2: El Pretérito Imperfecto solo tiene **TRES verbos irregulares** en todo el idioma español. El resto son 100% regulares.\n\n### 1. Verbo SER (Olmak)\n• Yo **ERA** / Tú **ERAS** / Él **ERA**\n• Nosotros **ÉRAMOS** / Ellos **ERAN**\n*Ej: Yo era muy travieso de pequeño.*\n\n### 2. Verbo IR (Gitmek)\n• Yo **IBA** / Tú **IBAS** / Él **IBA**\n• Nosotros **ÍBAMOS** / Ellos **IBAN**\n*Ej: Nosotros íbamos a la playa cada verano.*\n\n### 3. Verbo VER (Görmek)\nSolo mantiene la 'e' de la raíz para no confundirse con 'ir'.\n• Yo **VEÍA** / Tú **VEÍAS** / Él **VEÍA**\n• Nosotros **VEÍAMOS** / Ellos **VEÍAN**\n*Ej: Yo veía dibujos animados por las tardes.*\n\n⚠️ ¡CUIDADO!: No confundas 'Iba' (gitmek) con 'Era' (olmak). 'Iba' describe el movimiento repetido, 'Era' describe la identidad pasada.",
        examples: [
          { es: "Cuando era joven, iba mucho al cine.", tr: "Gençken sinemaya çok giderdim." },
          { es: "Veíamos a nuestros primos los domingos.", tr: "Pazarları kuzenlerimizi görürdük." },
          { es: "Éramos muy felices en aquel pueblo.", tr: "O kasabada çok mutluyduk." }
        ]
      }
    },
    {
      id: "a2_u7_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Sonidos Nostálgicos)",
      exercises: [
        { type: "speaking", spanish: "Yo era muy bajo de niño", turkish: "Çocukken çok kısa boyluydum." },
        { type: "speaking", spanish: "Íbamos a casa de mi abuela", turkish: "Büyükannemin evine giderdik." },
        { type: "speaking", spanish: "Veía la televisión cada noche", turkish: "Her gece televizyon izlerdim." },
        { type: "speaking", spanish: "Éramos los mejores amigos", turkish: "En iyi arkadaştık." },
        { type: "speaking", spanish: "Mi hermana era muy tímida", turkish: "Kız kardeşim çok utangaçtı." },
        { type: "speaking", spanish: "Ibas al colegio en autobús", turkish: "Okula otobüsle giderdin." },
        { type: "speaking", spanish: "Ellos veían el mar desde casa", turkish: "Evden denizi görürlerdi." },
        { type: "speaking", spanish: "Teníamos mucha energía antes", turkish: "Eskiden çok enerjimiz vardı." },
        { type: "speaking", spanish: "Mi perro era muy grande", turkish: "Köpeğim çok büyüktü." },
        { type: "speaking", spanish: "Siempre íbamos al mismo parque", turkish: "Her zaman aynı parka giderdik." },
        { type: "speaking", spanish: "Veíamos películas de terror", turkish: "Korku filmleri izlerdik." },
        { type: "speaking", spanish: "Yo era rubio de pequeño", turkish: "Küçükken sarışındım." },
        { type: "speaking", spanish: "Ustedes eran muy amables", turkish: "Siz çok naziktiniz." },
        { type: "speaking", spanish: "Íbamos a la playa en agosto", turkish: "Ağustos'ta sahile giderdik." },
        { type: "speaking", spanish: "Veía a Carlos en la universidad", turkish: "Carlos'u üniversitede görürdüm." }
      ]
    },
    {
      id: "a2_u7_n5",
      type: "theory",
      title: "Teoría III: Pintando el Escenario (Usos)",
      content: {
        concept: "El Imperfecto es el tiempo de la descripción. Si el Indefinido es la acción, el Imperfecto es el decorado.\n\n### 1. La Edad en el pasado\nSiempre usamos el Imperfecto para decir qué edad teníamos cuando algo pasó.\n• *Yo TENÍA 10 años cuando conocí a mi perro.*\n\n### 2. El Clima pasado\nPara describir cómo estaba el día en una historia.\n• *HACÍA mucho sol y la gente ESTABA en el parque.*\n\n### 3. Estados emocionales y físicos\nCómo nos sentíamos habitualmente.\n• *Yo ESTABA muy nervioso en mi primer día de trabajo.*\n• *A Ayşe le DOLÍA la cabeza frecuentemente.*\n\n💡 REGLA DE ORO: Si estás describiendo una situación, una persona o un lugar en el pasado, el 99% de las veces usarás el Imperfecto.",
        examples: [
          { es: "Había mucha gente en la fiesta.", tr: "Partide çok insan vardı." },
          { es: "La casa era azul y tenía flores.", tr: "Ev maviydi ve çiçekleri vardı." },
          { es: "Tenía hambre y estaba cansada.", tr: "Açtım ve yorgundum." }
        ]
      }
    },
    {
      id: "a2_u7_n6",
      type: "reading",
      title: "Lectura y Audio: Mi infancia en Turquía",
      content: {
        text: "Cuando yo era pequeña, vivía en una casa muy bonita cerca de Estambul. Mi familia era grande; éramos mis padres, mis dos hermanos y yo. \n\nLos veranos eran maravillosos. Siempre íbamos a la casa de campo de mis abuelos. Allí hacía mucho calor, pero nosotros jugábamos todo el día fuera. Mi abuela cocinaba platos tradicionales que olían de maravilla. Recuerdo que mi hermano mayor era muy travieso y siempre perdía sus zapatos. Yo era más tranquila; leía libros debajo de un árbol y veía cómo pasaban las nubes. No teníamos internet, pero no lo necesitábamos. Éramos realmente felices con las cosas simples.",
        translation: "Küçükken İstanbul yakınlarında çok güzel bir evde yaşardım. Ailem büyüktü; annem babam, iki kardeşim ve ben vardık.\n\nYazlar harikaydı. Her zaman büyükannemlerin köy evine giderdik. Orada hava çok sıcak olurdu ama biz bütün gün dışarıda oynardık. Büyükannem harika kokan geleneksel yemekler pişirirdi. Abimin çok yaramaz olduğunu ve her zaman ayakkabılarını kaybettiğini hatırlıyorum. Ben daha sakindim; bir ağacın altında kitap okur ve bulutların geçişini izlerdim. İnternetimiz yoktu ama buna ihtiyacımız da yoktu. Basit şeylerle gerçekten mutluyduk."
      }
    },
    {
      id: "a2_u7_n7",
      type: "quiz",
      title: "Práctica III: Desafío Maestro (20 Mixtos)",
      exercises: [
        { type: "syntax", turkish: "On yaşındayken çok uzundum (Ser).", spanish: "Cuando tenía diez años era muy alto", words: ["Cuando", "tenía", "diez", "años", "era", "muy", "alto", "fui"] },
        { type: "syntax", turkish: "Hava çok güzeldi ve güneş vardı.", spanish: "Hacía muy buen tiempo y hacía sol", words: ["Hacía", "muy", "buen", "tiempo", "y", "hacía", "sol", "hizo"] },
        { type: "syntax", turkish: "Eskiden her pazar sinemaya giderdik.", spanish: "Antes íbamos al cine cada domingo", words: ["Antes", "íbamos", "al", "cine", "cada", "domingo", "fuimos"] },
        { type: "syntax", turkish: "Onları balkonumuzdan görürdük (Ver).", spanish: "Nosotros los veíamos desde nuestro balcón", words: ["Nosotros", "los", "veíamos", "desde", "nuestro", "balcón", "vimos"] },
        { type: "syntax", turkish: "Çocukken çok utangaçtım (tímido).", spanish: "De pequeño yo era muy tímido", words: ["De", "pequeño", "yo", "era", "muy", "tímido", "soy"] },
        { type: "syntax", turkish: "Karnım açtı ve susamıştım.", spanish: "Tenía hambre y tenía sed", words: ["Tenía", "hambre", "y", "tenía", "sed", "tuve"] },
        { type: "syntax", turkish: "Öğretmenimiz çok nazik bir kadındı.", spanish: "Nuestra profesora era una mujer muy amable", words: ["Nuestra", "profesora", "era", "una", "mujer", "muy", "amable"] },
        { type: "syntax", turkish: "Geceleri her zaman müzik dinlerdin.", spanish: "Tú siempre escuchabas música por la noche", words: ["Tú", "siempre", "escuchabas", "música", "por", "la", "noche"] },
        { type: "syntax", turkish: "Evde hiç televizyon yoktu (Había).", spanish: "No había ninguna televisión en casa", words: ["No", "había", "ninguna", "televisión", "en", "casa"] },
        { type: "syntax", turkish: "Biz çok mutlu bir aileydik.", spanish: "Nosotros éramos una familia muy feliz", words: ["Nosotros", "éramos", "una", "familia", "muy", "feliz"] },
        { type: "speaking", spanish: "Cuando era niño vivía en el campo", turkish: "Çocukken köyde yaşardım." },
        { type: "speaking", spanish: "Teníamos un coche rojo muy viejo", turkish: "Çok eski kırmızı bir arabamız vardı." },
        { type: "speaking", spanish: "Mi madre cocinaba muy bien", turkish: "Annem çok iyi yemek pişirirdi." },
        { type: "speaking", spanish: "Siempre íbamos de vacaciones en julio", turkish: "Her zaman temmuzda tatile giderdik." },
        { type: "speaking", spanish: "Hacía mucho frío en el salón", turkish: "Salonda hava çok soğuktu." },
        { type: "speaking", spanish: "Veíamos a nuestros amigos en el parque", turkish: "Arkadaşlarımızı parkta görürdük." },
        { type: "speaking", spanish: "Yo era una estudiante muy aplicada", turkish: "Çok çalışkan bir öğrenciydim." },
        { type: "speaking", spanish: "Mis hermanos jugaban al fútbol", turkish: "Kardeşlerim futbol oynarlardı." },
        { type: "speaking", spanish: "La cocina era muy pequeña y oscura", turkish: "Mutfak çok küçük ve karanlıktı." },
        { type: "speaking", spanish: "Antes no hablábamos español", turkish: "Eskiden İspanyolca konuşmazdık." }
      ]
    },
    {
      id: "a2_u7_n8",
      type: "theory",
      title: "Teoría IV: Marcadores de Hábito",
      content: {
        concept: "Para invocar el Pretérito Imperfecto, solemos usar palabras que indican que la acción no pasó una sola vez, sino muchas veces.\n\n### Marcadores de Repetición:\n1. **ANTES** (Eskiden): El marcador rey de la nostalgia.\n2. **SIEMPRE** (Her zaman) / **A MENUDO** (Sık sık).\n3. **CADA DÍA / CADA VERANO** (Her gün / Her yaz).\n4. **TODOS LOS SÁBADOS** (Her cumartesi).\n5. **NORMALMENTE** (Normalde).\n6. **DE NIÑO / CUANDO ERA JOVEN** (Çocukken / Gençken).\n\n💡 TRUCO: Si tu frase empieza por 'Antes...', casi obligatoriamente el verbo irá en Imperfecto. Ej: *Antes yo no comía brócoli* (Eskiden brokoli yemezdim).",
        examples: [
          { es: "A menudo íbamos a caminar por el bosque.", tr: "Sık sık ormanda yürümeye giderdik." },
          { es: "Cada Navidad, mi tía traía regalos.", tr: "Her Noel'de teyzem hediyeler getirirdi." },
          { es: "Normalmente desayunábamos a las ocho.", tr: "Normalde saat sekizde kahvaltı yapardık." }
        ]
      }
    },
    {
      id: "a2_u7_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Pasado Descriptivo",
      content: {
        concept: "Analizaremos cómo se construye una frase descriptiva que mezcla edad, clima y estado emocional. Observa cómo todos los verbos están en Imperfecto para 'pintar' el cuadro.",
        examples: [{ es: "Cuando yo tenía cinco años, mi casa siempre estaba llena de flores.", tr: "Ben beş yaşındayken, evim her zaman çiçeklerle doluydu." }],
        analysis: [
          { word: "Cuando", type: "connector", literal: "Ne zaman ki / -ken", explanation: "Conector temporal que abre el escenario.", examples: [] },
          { word: "yo", type: "pronoun", literal: "ben", explanation: "Sujeto.", examples: [] },
          { word: "tenía", type: "verb", literal: "sahiptim", explanation: "Verbo TENER en Imperfecto. Se usa para la edad en pasado.", examples: [] },
          { word: "cinco años", type: "noun", literal: "beş yaş", explanation: "Complemento de edad.", examples: [] },
          { word: "mi casa", type: "noun", literal: "evim", explanation: "Sujeto de la segunda parte.", examples: [] },
          { word: "siempre", type: "adverb", literal: "her zaman", explanation: "Marcador de frecuencia habitual.", examples: [] },
          { word: "estaba", type: "verb", literal: "bulunurdu/ydı", explanation: "Verbo ESTAR en Imperfecto. Describe el estado del lugar.", examples: [] },
          { word: "llena", type: "adjective", literal: "dolu", explanation: "Adjetivo descriptivo.", examples: [] },
          { word: "de flores", type: "noun", literal: "çiçeklerle", explanation: "Complemento final.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u7_n10",
      type: "theory",
      title: "Caja de Herramientas: La Escuela y la Infancia",
      content: {
        concept: "Aquí tienes el vocabulario esencial para hablar de tus recuerdos escolares y juegos de niña.\n\n• **El juguete** (Oyuncak)\n• **La muñeca** (Oyuncak bebek)\n• **El patio** (Okul bahçesi)\n• **Los dibujos animados** (Çizgi filmler)\n• **El cuento** (Masal/Hikaye)\n• **Ser travieso/a** (Yaramaz olmak)\n• **Ser aplicado/a** (Çalışkan öğrenci olmak)\n• **Sacar buenas notas** (İyi notlar almak)\n• **Pelearse** (Kavga etmek)\n• **Esconderse** (Saklanmak)",
        examples: [
          { es: "Jugábamos al escondite en el parque.", tr: "Parkta saklambaç oynardık." },
          { es: "Yo sacaba notas excelentes en matemáticas.", tr: "Matematikten harika notlar alırdım." },
          { es: "Mi juguete favorito era un oso de peluche.", tr: "En sevdiğim oyuncağım bir peluş ayıydı." }
        ]
      }
    },
    {
      id: "a2_u7_n11",
      type: "theory",
      title: "Taller de Producción: Mi primer recuerdo",
      content: {
        concept: "Es el momento de usar tu pluma nostálgica.\n\n**Instrucciones:**\nEscribe un relato sobre tu escuela primaria o tu casa de la infancia (mínimo 6 líneas).\n1. Describe cómo era el lugar (usando SER/ESTAR en imperfecto).\n2. Di qué hacías normalmente con tus amigos o hermanos.\n3. Menciona un hábito que tenías antes pero ya no tienes.\n\n**Inspiración:** 'Mi escuela era muy antigua y tenía un patio grande. Normalmente jugábamos...'",
        examples: []
      }
    },
    {
      id: "a2_u7_n12",
      type: "exam",
      title: "Examen de Unidad: La Nostalgia",
      content: {
        concept: "Demuestra que dominas el arte de la descripción pasada y los verbos en Imperfecto.",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es la terminación de 'Nosotros' en verbos -AR (ej. jugar)?", options: ["-ábamos", "-íamos", "-abamos"], correct: 0 },
          { type: "multiple_choice", question: "Completa: 'Antes yo ______ (vivir) en Ankara'.", options: ["vivía", "vivió", "vivaba"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuáles son los 3 únicos verbos irregulares en Imperfecto?", options: ["Ser, Ir, Ver", "Hacer, Tener, Ser", "Ir, Ver, Estar"], correct: 0 },
          { type: "multiple_choice", question: "De niño, mi hermano ______ (ser) muy bajo.", options: ["era", "fui", "es"], correct: 0 },
          { type: "multiple_choice", question: "Nosotros ______ (ir) a la playa cada verano.", options: ["íbamos", "fuimos", "ibamos"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Televizyon izlerdik'?", options: ["Veíamos la tele", "Vimos la tele", "Víamos la tele"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué verbo usamos para decir la edad en pasado?", options: ["Tener (Tenía)", "Ser (Era)", "Estar (Estaba)"], correct: 0 },
          { type: "multiple_choice", question: "Completa: '______ mucho sol aquel día'.", options: ["Hacía", "Hizo", "Era"], correct: 0 },
          { type: "multiple_choice", question: "De pequeña, yo ______ (jugar) con muñecas.", options: ["jugaba", "jugué", "jugo"], correct: 0 },
          { type: "multiple_choice", question: "Mis padres ______ (estar) muy felices en su antigua casa.", options: ["estaban", "estuvieron", "estaba"], correct: 0 },
          { type: "syntax", turkish: "Eskiden çok kitap okurdu.", spanish: "Antes leía muchos libros", words: ["Antes", "leía", "muchos", "libros", "leyó"] },
          { type: "syntax", turkish: "Biz her zaman birlikte giderdik.", spanish: "Nosotros siempre íbamos juntos", words: ["Nosotros", "siempre", "íbamos", "juntos", "fuimos"] },
          { type: "syntax", turkish: "O (kadın) çok güzeldi.", spanish: "Ella era muy hermosa", words: ["Ella", "era", "muy", "hermosa", "fue"] },
          { type: "syntax", turkish: "Çocukken sebze yemezdim.", spanish: "De pequeño no comía verduras", words: ["De", "pequeño", "no", "comía", "verduras", "comí"] },
          { type: "syntax", turkish: "Hava çok soğuktu.", spanish: "Hacía mucho frío", words: ["Hacía", "mucho", "frío", "hizo", "era"] },
          { type: "syntax", turkish: "Her pazar anneannemi görürdük.", spanish: "Veíamos a mi abuela cada domingo", words: ["Veíamos", "a", "mi", "abuela", "cada", "domingo", "vimos"] },
          { type: "syntax", turkish: "Onlar her zaman geç kalırlardı.", spanish: "Ellos siempre llegaban tarde", words: ["Ellos", "siempre", "llegaban", "tarde", "llegaron"] },
          { type: "syntax", turkish: "Evimiz çok büyüktü.", spanish: "Nuestra casa era muy grande", words: ["Nuestra", "casa", "era", "muy", "grande", "fue"] },
          { type: "syntax", turkish: "Beş yaşındayken bir köpeğim vardı.", spanish: "Cuando tenía cinco años tenía un perro", words: ["Cuando", "tenía", "cinco", "años", "tenía", "un", "perro"] },
          { type: "syntax", turkish: "Mutfakta yemek pişiriyordu (pişirirdi).", spanish: "Cocinaba en la cocina", words: ["Cocinaba", "en", "la", "cocina", "cocinó"] }
        ]
      }
    }
  ]
};
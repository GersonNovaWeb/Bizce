/**
 * UNIDAD 8: EL DUELO DE PASADOS (NIVEL A2)
 * Enfoque: Contraste entre Indefinido e Imperfecto
 * Estructura: 12 Nodos con Teoría Extensa e Intercalada
 */

export const unidad8 = {
  id: "a2_u8",
  title: "Unidad 8: El Duelo de Pasados",
  description: "La maestría narrativa: Aprender a combinar la acción y el escenario en una misma historia.",
  nodes: [
    {
      id: "a2_u8_n1",
      type: "theory",
      title: "Teoría I: La Película vs. El Escenario",
      content: {
        concept: "En esta unidad vamos a aprender a 'pensar' en pasado. Cuando contamos una historia, usamos el **Imperfecto** (Unidad 7) y el **Indefinido** (Unidades 3, 4, 5) al mismo tiempo. \n\n### 1. El Concepto de la 'Foto' y el 'Video'\nImagina una escena de una película:\n• **El Escenario (Imperfecto):** Son las descripciones, lo que estaba pasando antes de que ocurriera algo. Es el fondo de la imagen.\n• **La Acción (Indefinido):** Es el evento principal, lo que interrumpe o lo que hace avanzar la historia.\n\n### 2. La Regla de Oro Narrativa\nUsamos el **Imperfecto** para:\n1. Decir la hora o el clima: 'ERAN las diez y HACÍA frío'.\n2. Describir personas: 'El hombre TENÍA una chaqueta roja'.\n3. Situaciones habituales: 'Yo siempre COMÍA allí'.\n\nUsamos el **Indefinido** para:\n1. Acciones concretas: 'Un día COMPRÉ un perro'.\n2. Eventos con principio y fin: 'Ayer FUI al cine'.\n\n🇹🇷 LÓGICA TURCA: El Imperfecto equivale a **-iyordu / -erdi**. El Indefinido equivale a **-di**. \nEj: 'Dışarıda yağmur yağıyordu (Hacía) ve ben şemsiyemi açtım (Abrí)'.",
        examples: [
          { es: "Hacía sol cuando salí de casa.", tr: "Evden çıktığımda güneş vardı (güneş yapıyordu)." },
          { es: "Yo leía un libro y de repente sonó el teléfono.", tr: "Bir kitap okuyordum ve aniden telefon çaldı." },
          { es: "El restaurante era pequeño pero comimos muy bien.", tr: "Restoran küçüktü ama çok iyi yemek yedik." }
        ]
      }
    },
    {
      id: "a2_u8_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Elegir Pasado)",
      exercises: [
        { type: "syntax", turkish: "Hava güzeldi (hacía) ve biz parka gittimos.", spanish: "Hacía buen tiempo y fuimos al parque", words: ["Hacía", "buen", "tiempo", "y", "fuimos", "al", "parque", "hizo"] },
        { type: "syntax", turkish: "Çocukken çok utangaçtım (era).", spanish: "Cuando era niño yo era muy tímido", words: ["Cuando", "era", "niño", "yo", "era", "muy", "tímido", "fue"] },
        { type: "syntax", turkish: "Ödevimi yapıyordum (hacía) ve Carlos geldi.", spanish: "Hacía mi tarea y Carlos llegó", words: ["Hacía", "mi", "tarea", "y", "Carlos", "llegó", "hizo"] },
        { type: "syntax", turkish: "Dün saat sekizdi (eran).", spanish: "Ayer eran las ocho", words: ["Ayer", "eran", "las", "ocho", "fueron"] },
        { type: "syntax", turkish: "Mutfaktaydım (estaba) ve bardağı kırdım (rompí).", spanish: "Estaba en la cocina y rompí el vaso", words: ["Estaba", "en", "la", "cocina", "y", "rompí", "el", "vaso"] },
        { type: "syntax", turkish: "Onlar uyuyorlardı (dormían) ve biz çıktık (salimos).", spanish: "Ellos dormían y nosotros salimos", words: ["Ellos", "dormían", "y", "nosotros", "salimos", "durmieron"] },
        { type: "syntax", turkish: "Eskiden (Antes) sigara içerdim ama bıraktım.", spanish: "Antes fumaba pero lo dejé", words: ["Antes", "fumaba", "pero", "lo", "dejé", "fumé"] },
        { type: "syntax", turkish: "Öğretmen konuşuyordu ve sen güldün.", spanish: "El profesor hablaba y tú reíste", words: ["El", "profesor", "hablaba", "y", "tú", "reíste", "habló"] },
        { type: "syntax", turkish: "Karnım açtı (tenía) ve bir elma yedim.", spanish: "Tenía hambre y comí una manzana", words: ["Tenía", "hambre", "y", "comí", "una", "manzana"] },
        { type: "syntax", turkish: "O (kadın) çok güzeldi (era).", spanish: "Ella era muy hermosa", words: ["Ella", "era", "muy", "hermosa", "fue"] },
        { type: "syntax", turkish: "Yağmur yağıyordu ve biz evde kaldık (quedamos).", spanish: "Llovía y nos quedamos en casa", words: ["Llovía", "y", "nos", "quedamos", "en", "casa", "llovió"] },
        { type: "syntax", turkish: "Saat kaçtı? (era).", spanish: "Qué hora era", words: ["Qué", "hora", "era", "fue"] },
        { type: "syntax", turkish: "Bir kitabım vardı (tenía) ama onu kaybettim (perdí).", spanish: "Tenía un libro pero lo perdí", words: ["Tenía", "un", "libro", "pero", "lo", "perdí", "tuve"] },
        { type: "syntax", turkish: "Onlar çalışıyorlardı (trabajaban) ve ben uyudum.", spanish: "Ellos trabajaban y yo dormí", words: ["Ellos", "trabajaban", "y", "yo", "dormí", "trabajaron"] },
        { type: "syntax", turkish: "O (erkek) geldiğinde (cuando) ben banyodaydım.", spanish: "Cuando él llegó yo estaba en el baño", words: ["Cuando", "él", "llegó", "yo", "estaba", "en", "el", "baño"] }
      ]
    },
    {
      id: "a2_u8_n3",
      type: "theory",
      title: "Teoría II: Acciones Interrumpidas (Estaba... cuando...)",
      content: {
        concept: "Esta es la estructura más común para contar una anécdota. Se basa en una acción que estaba en proceso (Imperfecto) y es 'golpeada' por un evento puntual (Indefinido).\n\n### 1. El conector CUANDO (Ne zaman ki / -ken)\nEl orden lógico es: **Imperfecto + CUANDO + Indefinido**.\n• *Yo caminaba por la calle CUANDO vi a mi profesor.*\n  (Sokakta yürüyordum, öğretmenimi gördüğümde).\n\n### 2. El conector MIENTRAS (O sırada / -ken)\nSi dos acciones estaban pasando al mismo tiempo sin interrumpirse, ¡ambas van en Imperfecto!\n• *Mientras yo estudiaba, mi madre cocinaba.*\n  (Ben ders çalışırken annem yemek pişiriyordu).\n\n### 3. Diferencia Psicológica\n• *Ayer fui al parque* (Pura acción).\n• *Ayer el parque estaba lleno* (Pura descripción).\n• *Ayer fui al parque porque estaba aburrido* (Mezcla: Acción motivada por un estado).",
        examples: [
          { es: "Estábamos durmiendo cuando ocurrió el terremoto.", tr: "Deprem olduğunda uyuyorduk." },
          { es: "Yo te llamaba pero tú no respondías.", tr: "Seni arıyordum ama sen cevap vermiyordun." },
          { es: "Ella bailaba mientras él cantaba.", tr: "O şarkı söylerken, o (kadın) dans ediyordu." }
        ]
      }
    },
    {
      id: "a2_u8_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Historias Fluidas)",
      exercises: [
        { type: "speaking", spanish: "Yo trabajaba cuando él llegó", turkish: "O geldiğinde ben çalışıyordum." },
        { type: "speaking", spanish: "Hacía mucho frío en la calle", turkish: "Sokakta hava çok soğuktu." },
        { type: "speaking", spanish: "Ella dormía mientras yo leía", turkish: "Ben okurken o uyuyordu." },
        { type: "speaking", spanish: "Ayer fuimos a la playa", turkish: "Dün sahile gittik." },
        { type: "speaking", spanish: "La fiesta fue muy divertida", turkish: "Parti çok eğlenceliydi." },
        { type: "speaking", spanish: "Teníamos mucha hambre anoche", turkish: "Dün gece çok açtık." },
        { type: "speaking", spanish: "Vimos un accidente esta tarde", turkish: "Bu öğleden sonra bir kaza gördük." },
        { type: "speaking", spanish: "El hotel estaba muy limpio", turkish: "Otel çok temizdi." },
        { type: "speaking", spanish: "Estudiábamos cuando sonó el timbre", turkish: "Zil çaldığında ders çalışıyorduk." },
        { type: "speaking", spanish: "Había mucha gente en el museo", turkish: "Müzede çok insan vardı." },
        { type: "speaking", spanish: "Me sentí mal y fui al médico", turkish: "Kendimi kötü hissettim ve doktora gittim." },
        { type: "speaking", spanish: "Era tarde cuando terminó la película", turkish: "Film bittiğinde saat geçti." },
        { type: "speaking", spanish: "Él tenía diez años en esa foto", turkish: "O fotoğrafta on yaşındaydı." },
        { type: "speaking", spanish: "Bebíamos café y hablábamos", turkish: "Kahve içiyor ve konuşuyorduk." },
        { type: "speaking", spanish: "Quise entrar pero estaba cerrado", turkish: "Girmek istedim ama kapalıydı." }
      ]
    },
    {
      id: "a2_u8_n5",
      type: "theory",
      title: "Teoría III: Verbos que Cambian de 'Piel'",
      content: {
        concept: "En español, algunos verbos cambian su significado dependiendo de si los usas en Imperfecto o Indefinido. Esto es fascinante y muy importante para el nivel A2.\n\n### 1. CONOCER (Tanımak / Tanışmak)\n• **Imperfecto (Conocía):** Conocía a Pedro desde hace años (Pedro'yu yıllardır **tanıyordum**).\n• **Indefinido (Conocí):** Conocí a Pedro ayer (Pedro ile dün **tanıştım** - Primera vez).\n\n### 2. SABER (Bilmek / Öğrenmek)\n• **Imperfecto (Sabía):** Yo sabía la verdad (Gerçeği **biliyordum**).\n• **Indefinido (Supe):** Ayer supe la verdad (Dün gerçeği **öğrendim** - Momento del descubrimiento).\n\n### 3. QUERER (İstemek / Denemek)\n• **Imperfecto (Quería):** Quería comprar un coche (Araba almak **istiyordum**).\n• **Indefinido (Quise):** Quise comprarlo ayer (Dün onu almayı **denedim/teşebbüs ettim**).",
        examples: [
          { es: "No lo sabía hasta ayer.", tr: "Düne kadar onu bilmiyordum." },
          { es: "Conocí a mi novio en la universidad.", tr: "Erkek arkadaşımla üniversitede tanıştım." },
          { es: "Él no quiso comer la sopa.", tr: "O çorbayı yemek istemedi (reddetti)." }
        ]
      }
    },
    {
      id: "a2_u8_n6",
      type: "reading",
      title: "Lectura y Audio: Una sorpresa inolvidable",
      content: {
        text: "Era un viernes por la noche y yo estaba muy cansada. El día en la oficina fue eterno y solo quería dormir. Cuando llegué a mi casa, las luces estaban apagadas y todo estaba en silencio.\n\nPuse las llaves en la mesa y caminé hacia el salón. De repente, escuché un ruido extraño. Tuve un poco de miedo, pero abrí la puerta. ¡Sorpresa! Todos mis amigos estaban allí. Ellos trajeron comida, música y un pastel enorme. Yo no sabía nada del plan. Fue la mejor fiesta de mi vida porque en ese momento supe que tengo los mejores amigos del mundo.",
        translation: "Bir cuma gecesiydi ve ben çok yorgundum. Ofisteki gün bitmek bilmedi ve sadece uyumak istiyordum. Eve vardığımda ışıklar kapalıydı ve her yer sessizdi.\n\nAnahtarları masaya koydum ve salona doğru yürüdüm. Aniden garip bir ses duydum. Biraz korktum ama kapıyı açtım. Sürpriz! Bütün arkadaşlarım oradaydı. Yemek, müzik ve kocaman bir pasta getirmişlerdi. Plandan hiç haberim yoktu. Hayatımın en iyi partisiydi çünkü o an dünyanın en iyi arkadaşlarına sahip olduğumu anladım (öğrendim)."
      }
    },
    {
      id: "a2_u8_n7",
      type: "quiz",
      title: "Práctica III: Desafío Maestro (20 Mixtos)",
      exercises: [
        { type: "syntax", turkish: "O (kadın) çok küçüktü ve çok ağlıyordu.", spanish: "Ella era muy pequeña y lloraba mucho", words: ["Ella", "era", "muy", "pequeña", "y", "lloraba", "mucho", "fue"] },
        { type: "syntax", turkish: "Dün onunla tanıştım (Conocer).", spanish: "Ayer lo conocí", words: ["Ayer", "lo", "conocí", "conocía", "conocer"] },
        { type: "syntax", turkish: "Hava sıcaktı (Hacía) ama biz ceket giydik (pusimos).", spanish: "Hacía calor pero nos pusimos la chaqueta", words: ["Hacía", "calor", "pero", "nos", "pusimos", "la", "chaqueta"] },
        { type: "syntax", turkish: "Uyuyordum (dormía) ve bir rüya gördüm (vi).", spanish: "Dormía y vi un sueño", words: ["Dormía", "y", "vi", "un", "sueño", "veía"] },
        { type: "syntax", turkish: "Onlar gerçeği biliyorlardı (Sabían).", spanish: "Ellos sabían la verdad", words: ["Ellos", "sabían", "la", "verdad", "supieron"] },
        { type: "syntax", turkish: "O (kadın) geldiğinde (cuando) biz yemek yiyorduk.", spanish: "Comíamos cuando ella llegó", words: ["Comíamos", "cuando", "ella", "llegó", "comimos"] },
        { type: "syntax", turkish: "Ev eskidi ama çok güzeldi.", spanish: "La casa era vieja pero era muy bonita", words: ["La", "casa", "era", "vieja", "pero", "era", "muy", "bonita"] },
        { type: "syntax", turkish: "Nereye gittin? (Indefinido).", spanish: "Adónde fuiste tú", words: ["Adónde", "fuiste", "tú", "ibas"] },
        { type: "syntax", turkish: "Haberleri bu sabah öğrendim (Saber).", spanish: "Supe las noticias esta mañana", words: ["Supe", "las", "noticias", "esta", "mañana", "sabía"] },
        { type: "syntax", turkish: "Seni aradım ama sen çalışıyordun.", spanish: "Te llamé pero tú trabajabas", words: ["Te", "llamé", "pero", "tú", "trabajabas", "llamaba"] },
        { type: "speaking", spanish: "Hacía sol y la gente estaba feliz", turkish: "Güneş vardı ve insanlar mutluydu." },
        { type: "speaking", spanish: "Ayer conocí a tu madre", turkish: "Dün annenle tanıştım." },
        { type: "speaking", spanish: "Yo no sabía que tenías un perro", turkish: "Bir köpeğin olduğunu bilmiyordum." },
        { type: "speaking", spanish: "Estábamos en el cine cuando salimos", turkish: "Dışarı çıktığımızda sinemadaydık." },
        { type: "speaking", spanish: "Él leía mientras ella dormía", turkish: "O (kadın) uyurken o (erkek) okuyordu." },
        { type: "speaking", spanish: "La comida estaba fría pero la comí", turkish: "Yemek soğuktu ama onu yedim." },
        { type: "speaking", spanish: "Cuando era joven jugaba al fútbol", turkish: "Gençken futbol oynardım." },
        { type: "speaking", spanish: "Supe la verdad ayer por la noche", turkish: "Gerçeği dün gece öğrendim." },
        { type: "speaking", spanish: "No quise ir porque estaba cansado", turkish: "Gitmek istemedim (reddettim) çünkü yorgundum." },
        { type: "speaking", spanish: "Había mucha gente en la calle", turkish: "Sokakta çok insan vardı." }
      ]
    },
    {
      id: "a2_u8_n8",
      type: "theory",
      title: "Teoría IV: Conectores de la Tensión",
      content: {
        concept: "Para mezclar estos tiempos verbales con elegancia, necesitas palabras que marquen el ritmo de la historia.\n\n### 1. DE REPENTE (Aniden)\nEs el conector más usado para introducir el Indefinido (acción). \n• 'Estaba tranquilo DE REPENTE sonó la alarma'.\n\n### 2. MIENTRAS (O sırada / -ken)\nEs el conector del Imperfecto (escenario). Une dos procesos simultáneos.\n• 'Ella hablaba MIENTRAS yo escuchaba'.\n\n### 3. ENTONCES (O zaman / O zamanlar)\nSe usa para dar el siguiente paso en la historia.\n\n### 4. POR FIN / AL FINAL (Nihayet / Sonunda)\nCierra la historia con una acción en Indefinido.\n\n💡 TRUCO: Una buena historia siempre empieza en **Imperfecto** (Había una vez, Era un día...), tiene nudos en **Indefinido** y termina en **Indefinido**.",
        examples: [
          { es: "De repente, todo cambió.", tr: "Aniden her şey değişti." },
          { es: "Mientras caminábamos, vimos un gato.", tr: "Biz yürürken bir kedi gördük." },
          { es: "Al final, pudimos llegar a tiempo.", tr: "Sonunda, zamanında varabildik." }
        ]
      }
    },
    {
      id: "a2_u8_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Contraste Real",
      content: {
        concept: "Analizaremos la frase maestra de esta unidad. Observa cómo el 'mientras' mantiene el proceso vivo y el 'llamó' corta la acción.",
        examples: [{ es: "Mientras yo cocinaba la cena, mi novio me llamó por teléfono.", tr: "Ben akşam yemeği pişirirken, erkek arkadaşım beni telefonla aradı." }],
        analysis: [
          { word: "Mientras", type: "connector", literal: "O sırada / -ken", explanation: "Conector de simultaneidad. Prepara el escenario.", examples: [] },
          { word: "yo", type: "pronoun", literal: "ben", explanation: "Sujeto.", examples: [] },
          { word: "cocinaba", type: "verb", literal: "pişiriyordum", explanation: "Verbo COCINAR en Imperfecto (-aba). Es una acción larga, el escenario de la historia.", examples: [] },
          { word: "la cena", type: "noun", literal: "akşam yemeği", explanation: "Objeto directo.", examples: [] },
          { word: "mi novio", type: "noun", literal: "erkek arkadaşım", explanation: "Segundo sujeto.", examples: [] },
          { word: "me", type: "pronoun", literal: "beni", explanation: "Pronombre de objeto.", examples: [] },
          { word: "llamó", type: "verb", literal: "aradı", explanation: "Verbo LLAMAR en Indefinido. Es la acción puntual que interrumpe la cocina.", examples: [] },
          { word: "por teléfono", type: "noun", literal: "telefonla", explanation: "Complemento de medio.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u8_n10",
      type: "theory",
      title: "Caja de Herramientas: Reacciones y Emociones",
      content: {
        concept: "Cuando contamos historias, solemos expresar cómo nos sentimos ante lo que pasó. Aquí tienes vocabulario de reacción:\n\n• **¡Qué sorpresa!** (Ne sürpriz!)\n• **¡Qué susto!** (Ne korku! / Ne korktum!)\n• **¡Qué lástima!** (Ne yazık!)\n• **Tener miedo** (Korkmak)\n• **Estar emocionado/a** (Heyecanlı olmak)\n• **Estar preocupado/a** (Endişeli olmak)\n• **Estar sorprendido/a** (Şaşırmış olmak)\n• **Reírse** (Gülmek) ➔ Me reí, te reíste, se rió.",
        examples: [
          { es: "Tuve mucho miedo durante la tormenta.", tr: "Fırtına sırasında çok korktum." },
          { es: "Ella estaba muy emocionada con el viaje.", tr: "O yolculuk için çok heyecanlıydı." },
          { es: "Nos reímos mucho con su historia.", tr: "Onun hikayesine çok güldük." }
        ]
      }
    },
    {
      id: "a2_u8_n11",
      type: "theory",
      title: "Taller de Producción: El día que nos conocimos",
      content: {
        concept: "Es el momento de la verdad. Vas a escribir una historia real o ficticia mezclando los dos pasados.\n\n**Instrucciones:**\nEscribe un relato (mínimo 8 líneas) sobre el día que conociste a alguien importante o un viaje especial.\n1. Empieza describiendo el escenario (hora, clima, cómo estabas tú).\n2. Usa el conector 'De repente' para introducir el evento principal.\n3. Usa al menos 4 verbos en Imperfecto y 4 en Indefinido.\n4. Usa el verbo CONOCER o SABER en pasado.\n\n**Inspiración:** 'Era un día soleado de verano. Yo estaba en la universidad cuando de repente vi a...'",
        examples: []
      }
    },
    {
      id: "a2_u8_n12",
      type: "exam",
      title: "Examen de Unidad: El Gran Duelo",
      content: {
        concept: "Este es el examen más difícil hasta ahora. Debes elegir correctamente entre Imperfecto e Indefinido para completar la historia.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué tiempo usamos para describir el clima pasado?", options: ["Indefinido (Hizo sol)", "Imperfecto (Hacía sol)"], correct: 1 },
          { type: "multiple_choice", question: "Ayer ______ (conocer) a tu hermano por primera vez.", options: ["conocí", "conocía"], correct: 0 },
          { type: "multiple_choice", question: "Yo ______ (estudiar) cuando tú ______ (llamar).", options: ["estudiaba / llamaste", "estudié / llamabas"], correct: 0 },
          { type: "multiple_choice", question: "La casa ______ (ser) grande y ______ (tener) jardín.", options: ["fue / tuvo", "era / tenía"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Supe la verdad'?", options: ["Gerçeği biliyordum.", "Gerçeği öğrendim."], correct: 1 },
          { type: "multiple_choice", question: "Mientras yo ______ (limpiar), mi perro ______ (dormir).", options: ["limpiaba / dormía", "limpié / durmió"], correct: 0 },
          { type: "multiple_choice", question: "De repente, yo ______ (ver) un gato negro.", options: ["veía", "vi"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Saat ondu'?", options: ["Fueron las diez.", "Eran las diez."], correct: 1 },
          { type: "multiple_choice", question: "Yo no ______ (querer) comer esa pizza (Reddettim).", options: ["quería", "quise"], correct: 1 },
          { type: "multiple_choice", question: "El examen ______ (ser) muy difícil ayer.", options: ["fue", "era"], correct: 0 },
          { type: "syntax", turkish: "Uyuyordum (dormía) ve aniden telefon çaldó (sonó).", spanish: "Dormía y de repente el teléfono sonó", words: ["Dormía", "y", "de", "repente", "el", "teléfono", "sonó", "sonaba"] },
          { type: "syntax", turkish: "Hava çok güzeldi (Hacía) ve biz parka gittik.", spanish: "Hacía muy buen tiempo y fuimos al parque", words: ["Hacía", "muy", "buen", "tiempo", "y", "fuimos", "al", "parque"] },
          { type: "syntax", turkish: "Dün onunla tanıştım (conocí).", spanish: "Ayer lo conocí a él", words: ["Ayer", "lo", "conocí", "a", "él", "conocía"] },
          { type: "syntax", turkish: "Ben ders çalışırken annem yemek pişiriyordu.", spanish: "Mientras yo estudiaba mi madre cocinaba", words: ["Mientras", "yo", "estudiaba", "mi", "madre", "cocinaba", "estudié"] },
          { type: "syntax", turkish: "Küçükken (cuando) çok süt içerdim.", spanish: "Cuando era pequeño bebía mucha leche", words: ["Cuando", "era", "pequeño", "bebía", "mucha", "leche", "bebí"] },
          { type: "syntax", turkish: "O (kadın) çok yorgundu (estaba) ama çalıştı.", spanish: "Ella estaba muy cansada pero trabajó", words: ["Ella", "estaba", "muy", "cansada", "pero", "trabajó", "estuvo"] },
          { type: "syntax", turkish: "Haberi dün gece öğrendim (Supe).", spanish: "Supe la noticia anoche", words: ["Supe", "la", "noticia", "anoche", "sabía"] },
          { type: "syntax", turkish: "Neredeydin? (Estar).", spanish: "Dónde estuviste tú", words: ["Dónde", "estuviste", "tú", "estabas"] },
          { type: "syntax", turkish: "Sokakta çok insan vardı (Había).", spanish: "Había mucha gente en la calle", words: ["Había", "mucha", "gente", "en", "la", "calle", "hubo"] },
          { type: "syntax", turkish: "Seni gördüğümde (cuando) mutlu oldum (me puse feliz).", spanish: "Cuando te vi me puse feliz", words: ["Cuando", "te", "vi", "me", "puse", "feliz", "veía"] }
        ]
      }
    }
  ]
};
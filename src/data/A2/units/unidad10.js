/**
 * UNIDAD 10: PROYECTOS Y PROBABILIDAD (NIVEL A2)
 * Enfoque: Futuro Simple (Regulares e Irregulares)
 * Estructura: 12 Nodos con Teoría Extensa e Intercalada
 */

export const unidad10 = {
  id: "a2_u10",
  title: "Unidad 10: Proyectos y Probabilidad",
  description: "Dominio del Futuro Simple para hacer predicciones, promesas y expresar hipótesis en el presente.",
  nodes: [
    {
      id: "a2_u10_n1",
      type: "theory",
      title: "Teoría I: El Futuro más Fácil",
      content: {
        concept: "Hasta ahora, para hablar del futuro usábamos 'Voy a comer'. Ahora aprenderemos el **Futuro Simple** (Comeré). La mejor noticia es que este es el tiempo más fácil de conjugar en español.\n\n### 1. La Regla del Infinitivo\nA diferencia de otros tiempos donde quitamos las letras finales (-ar, -er, -ir), en el futuro mantenemos el verbo **ENTERO** y le pegamos la terminación al final.\n\n### 2. Terminaciones Únicas\n¡Atención! Las terminaciones son **exactamente las mismas** para los verbos -AR, -ER e -IR.\n• Yo **-É** (Hablaré, Comeré, Viviré)\n• Tú **-ÁS** (Hablarás...)\n• Él / Ella / Usted **-Á** (Hablará...)\n• Nosotros **-EMOS** (Hablaremos...)\n• Ellos / Ustedes **-ÁN** (Hablarán...)\n\n⚠️ ¡IMPORTANTE!: Casi todas las personas llevan tilde (acento gráfico). Si no la pones, puede confundirse con otras palabras.\n\n🇹🇷 LÓGICA TURCA: Equivale a los sufijos **-ecek / -acak** (Gideceğim, yapacağım).",
        examples: [
          { es: "Mañana trabajaré hasta tarde.", tr: "Yarın geç vakte kadar çalışacağım." },
          { es: "Nosotros comeremos en un restaurante el sábado.", tr: "Cumartesi günü bir restoranda yemek yiyeceğiz." },
          { es: "Ellos vivirán en España el próximo año.", tr: "Gelecek yıl İspanya'da yaşayacaklar." }
        ]
      }
    },
    {
      id: "a2_u10_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Promesas)",
      exercises: [
        { type: "syntax", turkish: "Seni her zaman seveceğim (Amar).", spanish: "Yo te amaré siempre", words: ["Yo", "te", "amaré", "siempre", "amado", "amo"] },
        { type: "syntax", turkish: "Yarın sana yardım edeceğiz (Ayudar).", spanish: "Mañana te ayudaremos", words: ["Mañana", "te", "ayudaremos", "ayudamos", "ayudar"] },
        { type: "syntax", turkish: "Onlar İspanyolca öğrenecekler.", spanish: "Ellos aprenderán español", words: ["Ellos", "aprenderán", "español", "aprenden", "aprender"] },
        { type: "syntax", turkish: "Gelecek hafta seni arayacak (Llamar).", spanish: "Ella te llamará la próxima semana", words: ["Ella", "te", "llamará", "la", "próxima", "semana"] },
        { type: "syntax", turkish: "Çok çalışacaksın.", spanish: "Tú trabajarás mucho", words: ["Tú", "trabajarás", "mucho", "trabajas"] },
        { type: "syntax", turkish: "Biz yeni bir ev satın alacağız.", spanish: "Nosotros compraremos una casa nueva", words: ["Nosotros", "compraremos", "una", "casa", "nueva"] },
        { type: "syntax", turkish: "Sınavı geçeceksiniz (Ustedes).", spanish: "Ustedes aprobarán el examen", words: ["Ustedes", "aprobarán", "el", "examen", "aprobamos"] },
        { type: "syntax", turkish: "Bu akşam bir film izleyeceğim.", spanish: "Veré una película esta noche", words: ["Veré", "una", "película", "esta", "noche", "verán"] },
        { type: "syntax", turkish: "Mektubu yarın yazacaksın.", spanish: "Escribirás la carta mañana", words: ["Escribirás", "la", "carta", "mañana", "escribes"] },
        { type: "syntax", turkish: "O (erkek) çok mutlu olacak (Ser).", spanish: "Él será muy feliz", words: ["Él", "será", "muy", "feliz", "es"] },
        { type: "syntax", turkish: "Bize her şeyi anlatacaklar.", spanish: "Ellos nos contarán todo", words: ["Ellos", "nos", "contarán", "todo", "cuentan"] },
        { type: "syntax", turkish: "Pazartesi günü dinleneceğiz.", spanish: "Descansaremos el lunes", words: ["Descansaremos", "el", "lunes", "descansamos"] },
        { type: "syntax", turkish: "Odayı temizleyeceksin.", spanish: "Limpiarás la habitación", words: ["Limpiarás", "la", "habitación", "limpias"] },
        { type: "syntax", turkish: "Seni bekleyeceğiz.", spanish: "Te esperaremos", words: ["Te", "esperaremos", "esperamos"] },
        { type: "syntax", turkish: "Bir kitap okuyacağım.", spanish: "Leeré un libro", words: ["Leeré", "un", "libro", "leo"] }
      ]
    },
    {
      id: "a2_u10_n3",
      type: "theory",
      title: "Teoría II: Las Raíces Cortadas (Irregulares)",
      content: {
        concept: "Aunque las terminaciones (-é, -ás, -á...) son siempre iguales, hay unos pocos verbos (los de siempre) que deciden cortar su raíz para que sea más fácil de pronunciar.\n\n### Los 3 Grupos de Irregulares:\n\n**1. Pierden la última vocal:**\n• **Poder** ➔ PODR- (Podré)\n• **Saber** ➔ SABR- (Sabré)\n• **Querer** ➔ QUERR- (Querré)\n• **Haber** ➔ HABR- (Habrá - Existencia)\n\n**2. Cambian la vocal por una 'D':**\n• **Tener** ➔ TENDR- (Tendré)\n• **Poner** ➔ PONDR- (Pondré)\n• **Salir** ➔ SALDR- (Saldré)\n• **Venir** ➔ VENDR- (Vendré)\n\n**3. Casos radicales:**\n• **Hacer** ➔ HAR- (Haré)\n• **Decir** ➔ DIR- (Diré)\n\n💡 TRUCO: Fíjate que todos los irregulares terminan en **-R-**. Esa letra es la señal del futuro.",
        examples: [
          { es: "Mañana tendré tiempo para verte.", tr: "Yarın seni görmek için vaktim olacak." },
          { es: "Él me dirá la verdad algún día.", tr: "Bir gün bana gerçeği söyleyecek." },
          { es: "Nosotros saldremos a las ocho.", tr: "Sekizde çıkacağız." }
        ]
      }
    },
    {
      id: "a2_u10_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Irregulares)",
      exercises: [
        { type: "speaking", spanish: "Tendré un coche nuevo", turkish: "Yeni bir arabam olacak." },
        { type: "speaking", spanish: "Haré mi tarea mañana", turkish: "Ödevimi yarın yapacağım." },
        { type: "speaking", spanish: "Ella me dirá qué pasó", turkish: "O bana ne olduğunu söyleyecek." },
        { type: "speaking", spanish: "Saldremos de casa pronto", turkish: "Evden yakında çıkacağız." },
        { type: "speaking", spanish: "Podrás hablar español muy bien", turkish: "İspanyolcayı çok iyi konuşabileceksin." },
        { type: "speaking", spanish: "Vendrán a visitarme", turkish: "Beni ziyarete gelecekler." },
        { type: "speaking", spanish: "Sabremos el resultado hoy", turkish: "Sonucu bugün öğreneceğiz." },
        { type: "speaking", spanish: "Querré viajar contigo", turkish: "Seninle seyahat etmek isteyeceğim." },
        { type: "speaking", spanish: "Pondré las llaves aquí", turkish: "Anahtarları buraya koyacağım." },
        { type: "speaking", spanish: "Habrá mucha gente allí", turkish: "Orada çok insan olacak." },
        { type: "speaking", spanish: "Harás un esfuerzo grande", turkish: "Büyük bir çaba göstereceksin." },
        { type: "speaking", spanish: "Tendremos mucha suerte", turkish: "Çok şanslı olacağız." },
        { type: "speaking", spanish: "Él vendrá tarde", turkish: "O geç gelecek." },
        { type: "speaking", spanish: "Te diré un secreto", turkish: "Sana bir sır söyleyeceğim." },
        { type: "speaking", spanish: "No podré ir mañana", turkish: "Yarın gidemeyeceğim." }
      ]
    },
    {
      id: "a2_u10_n5",
      type: "theory",
      title: "Teoría III: El Futuro de Probabilidad",
      content: {
        concept: "Este es el uso más 'mágico' y avanzado del Futuro Simple. Los nativos no solo lo usamos para el mañana, sino para **adivinar el presente**.\n\n### ¿Cómo funciona?\nCuando no estamos seguros de algo que pasa AHORA, usamos el futuro para expresar duda o probabilidad.\n\n**1. Para la hora:**\n• Si pregunto: '¿Qué hora es?', y tú respondes: '**Serán** las cinco' (Beş civarıdır / Beş olmalı). No estás seguro, estás adivinando.\n\n**2. Para la edad o el estado:**\n• '¿Cuántos años tiene ella? **Tendrá** 20 años'. (20 yaşlarında olmalı).\n• '¿Por qué no viene Juan? **Estará** cansado'. (Yorgun olmalı/Yorgundur herhalde).\n\n🇹🇷 LÓGICA TURCA: Equivale a añadir el sufijo **-dir / -dur** o usar palabras como 'herhalde' o 'galiba'.",
        examples: [
          { es: "¿Dónde está mi móvil? Estará en el coche.", tr: "Cep telefonum nerede? Herhalde arabadadır." },
          { es: "¿Quién llama a la puerta? Será el cartero.", tr: "Kapıyı kim çalıyor? Postacı olmalı." },
          { es: "Ellos no están en casa, estarán trabajando.", tr: "Evde değiller, herhalde çalışıyorlardır." }
        ]
      }
    },
    {
      id: "a2_u10_n6",
      type: "reading",
      title: "Lectura y Audio: El mundo en el 2050",
      content: {
        text: "Mucha gente se pregunta cómo será la vida en el futuro. Los científicos dicen que el mundo cambiará mucho en el año 2050. \n\nPrimero, las ciudades serán más verdes y no habrá coches con gasolina; todos los vehículos serán eléctricos y autónomos. Nosotros no conduciremos, las máquinas lo harán por nosotros. En medicina, los médicos descubrirán curas para muchas enfermedades y la gente vivirá más de cien años.\n\nSin embargo, también habrá retos. El clima será más cálido y tendremos que cuidar mucho el agua. Yo creo que, a pesar de la tecnología, la gente todavía querrá viajar y conocer nuevas culturas. Algún día, nosotros visitaremos Marte como turistas. ¿Será posible? ¡Seguro que sí!",
        translation: "Pek çok insan gelecekte hayatın nasıl olacağını merak ediyor. Bilim adamları, 2050 yılında dünyanın çok değişeceğini söylüyor.\n\nİlk olarak, şehirler daha yeşil olacak ve benzinli arabalar olmayacak; tüm araçlar elektrikli ve otonom olacak. Biz araba sürmeyeceğiz, makineler bizim yerimize yapacak. Tıpta, doktorlar birçok hastalık için tedaviler keşfedecek ve insanlar yüz yıldan fazla yaşayacak.\n\nAncak zorluklar da olacak. İklim daha sıcak olacak ve suya çok dikkat etmemiz gerekecek. Bence teknolojiye rağmen insanlar hala seyahat etmek ve yeni kültürler tanımak isteyecekler. Bir gün Mars'ı turist olarak ziyaret edeceğiz. Bu mümkün olacak mı? Elbette evet!"
      }
    },
    {
      id: "a2_u10_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (20 Mixtos)",
      exercises: [
        { type: "syntax", turkish: "Yarın geç vakte kadar çalışacağım.", spanish: "Mañana trabajaré hasta tarde", words: ["Mañana", "trabajaré", "hasta", "tarde", "trabajó", "trabajo"] },
        { type: "syntax", turkish: "Saat kaç? Beş civarı olmalı (Ser).", spanish: "Qué hora es serán las cinco", words: ["Qué", "hora", "es", "serán", "las", "cinco", "son"] },
        { type: "syntax", turkish: "Bize gerçeği söyleyeceksin (Decir).", spanish: "Tú nos dirás la verdad", words: ["Tú", "nos", "dirás", "la", "verdad", "decirás"] },
        { type: "syntax", turkish: "Gelecek ay Madrid'e gideceğiz (Ir).", spanish: "El próximo mes iremos a Madrid", words: ["El", "próximo", "mes", "iremos", "a", "Madrid", "vamos"] },
        { type: "syntax", turkish: "Çok vaktim olacak (Tener).", spanish: "Tendré mucho tiempo", words: ["Tendré", "mucho", "tiempo", "teniendo"] },
        { type: "syntax", turkish: "Onlar partiye gelecekler (Venir).", spanish: "Ellos vendrán a la fiesta", words: ["Ellos", "vendrán", "a", "la", "fiesta", "venen"] },
        { type: "syntax", turkish: "Nereye gideceksin?", spanish: "Adónde irás tú", words: ["Adónde", "irás", "tú", "vas"] },
        { type: "syntax", turkish: "Bunu başarabileceğiz (Poder).", spanish: "Podremos lograr esto", words: ["Podremos", "lograr", "esto", "podemos"] },
        { type: "syntax", turkish: "Haberleri yarın öğreneceksiniz (Saber).", spanish: "Ustedes sabrán las noticias mañana", words: ["Ustedes", "sabrán", "las", "noticias", "mañana", "saberán"] },
        { type: "syntax", turkish: "Hepsini masaya koyacağım (Poner).", spanish: "Lo pondré todo en la mesa", words: ["Lo", "pondré", "todo", "en", "la", "mesa"] },
        { type: "speaking", spanish: "Tendré mucho trabajo mañana", turkish: "Yarın çok işim olacak." },
        { type: "speaking", spanish: "Ellos nos dirán qué pasó", turkish: "Bana ne olduğunu söyleyecekler." },
        { type: "speaking", spanish: "Serán las diez de la noche", turkish: "Gece saat on olmalı." },
        { type: "speaking", spanish: "Haré una cena especial para ti", turkish: "Senin için özel bir akşam yemeği yapacağım." },
        { type: "speaking", spanish: "Saldremos de vacaciones en agosto", turkish: "Ağustosta tatile çıkacağız." },
        { type: "speaking", spanish: "Ella estará muy cansada ahora", turkish: "O şu an çok yorgun olmalı." },
        { type: "speaking", spanish: "Vendrán mis amigos a Turquía", turkish: "Arkadaşlarım Türkiye'ye gelecekler." },
        { type: "speaking", spanish: "No podré ir al cine contigo", turkish: "Seninle sinemaya gidemeyeceğim." },
        { type: "speaking", spanish: "Habrá una fiesta en mi casa", turkish: "Evimde bir parti olacak." },
        { type: "speaking", spanish: "Sabrás la verdad muy pronto", turkish: "Gerçeği çok yakında öğreneceksin." }
      ]
    },
    {
      id: "a2_u10_n8",
      type: "theory",
      title: "Teoría IV: Si estudias, aprobarás (Condicional Real)",
      content: {
        concept: "El Futuro Simple se usa casi siempre con la palabra **SI** (Eğer). Esto crea oraciones de causa y efecto que usamos para advertir, prometer o planear.\n\n### Estructura de la Condición Real:\n**SI + Presente de Indicativo + Futuro Simple**\n\n• *Si tengo dinero, compraré un coche.* (Eğer param olursa, bir araba satın alacağım).\n• *Si estudias mucho, hablarás español.* (Eğer çok çalışırsan, İspanyolca konuşacaksın).\n\n⚠️ ¡CUIDADO!: En la parte del 'SI', nunca usamos el futuro. El futuro solo va en la consecuencia.\n❌ Mal: Si tendré dinero...\n✅ Bien: Si tengo dinero...",
        examples: [
          { es: "Si hace sol, iremos a la playa.", tr: "Güneş olursa, sahile gideceğiz." },
          { es: "Si vienes a mi casa, haré pizza.", tr: "Evime gelirsen, pizza yapacağım." },
          { es: "Si no descansas, estarás enfermo.", tr: "Dinlenmezsen, hasta olacaksın." }
        ]
      }
    },
    {
      id: "a2_u10_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Futuro Complejo",
      content: {
        concept: "Analizaremos cómo se construye una oración de causa-efecto futuro que mezcla una condición presente con una promesa irregular.",
        examples: [{ es: "Si tú vienes a Madrid, yo te diré todos mis secretos.", tr: "Eğer sen Madrid'e gelirsen, ben sana tüm sırlarımı söyleyeceğim." }],
        analysis: [
          { word: "Si", type: "connector", literal: "Eğer", explanation: "Conector condicional.", examples: [] },
          { word: "tú vienes", type: "verb", literal: "gelirsen", explanation: "Verbo en PRESENTE de indicativo (condición).", examples: [] },
          { word: "a Madrid", type: "noun", literal: "Madrid'e", explanation: "Destino.", examples: [] },
          { word: "yo", type: "pronoun", literal: "ben", explanation: "Sujeto de la promesa.", examples: [] },
          { word: "te diré", type: "verb", literal: "söyleyeceğim", explanation: "Verbo DECIR en Futuro Irregular. Es la consecuencia de la condición.", examples: [] },
          { word: "todos mis secretos", type: "noun", literal: "tüm sırlarım", explanation: "Objeto directo plural.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u10_n10",
      type: "theory",
      title: "Caja de Herramientas: Tecnología y Metas",
      content: {
        concept: "Para hablar del futuro, necesitas vocabulario sobre tecnología, medio ambiente y metas personales.\n\n• **La meta / El objetivo** (Hedef)\n• **Lograr / Conseguir** (Başarmak)\n• **El medio ambiente** (Çevre)\n• **La inteligencia artificial** (Yapay zeka)\n• **Cuidar el planeta** (Gezegeni korumak)\n• **Casarse** (Evlenmek)\n• **Tener éxito** (Başarılı olmak)\n• **Algún día** (Bir gün)\n• **Pronto** (Yakında)",
        examples: [
          { es: "Algún día tendré mi propia empresa.", tr: "Bir gün kendi şirketim olacak." },
          { es: "La tecnología cambiará nuestras vidas.", tr: "Teknoloji hayatlarımızı değiştirecek." },
          { es: "Pronto hablarás español perfectamente.", tr: "Yakında mükemmel bir şekilde İspanyolca konuşacaksın." }
        ]
      }
    },
    {
      id: "a2_u10_n11",
      type: "theory",
      title: "Taller de Producción: Mis metas para el próximo año",
      content: {
        concept: "Vas a escribir sobre tu futuro personal.\n\n**Instrucciones:**\nEscribe un párrafo (mínimo 8 líneas) sobre tus planes para el próximo año o para dentro de 5 años.\n1. Usa al menos 4 verbos regulares en futuro (estudiaré, viajaré...).\n2. Usa al menos 3 verbos irregulares en futuro (tendré, haré, podré...).\n3. Usa una frase condicional con 'Si...'.\n\n**Inspiración:** 'El próximo año viajaré a España. Si tengo tiempo, visitaré a mis amigos en Madrid. Haré un curso de cocina...'",
        examples: []
      }
    },
    {
      id: "a2_u10_n12",
      type: "exam",
      title: "Examen de Unidad: El Futuro y la Hipótesis",
      content: {
        concept: "Prueba final de la Unidad 10. Evalúa tu dominio del futuro simple y los usos de probabilidad.",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es el futuro de 'Yo (comer)'?", options: ["Como", "Comeré", "Comerá"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué verbo es irregular en futuro?", options: ["Cantar", "Tener", "Vivir"], correct: 1 },
          { type: "multiple_choice", question: "El futuro de HACER para 'Él' es:", options: ["Hacerá", "Hará", "Hice"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Bilecekler' (Saber)?", options: ["Saberán", "Sabrán", "Sabemos"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien pregunta '¿Dónde está Carlos?' y tú respondes 'Estará en casa', significa:", options: ["Él irá a casa mañana.", "Seguro que está en casa ahora.", "Probablemente está en casa ahora."], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál lleva tilde en todas sus formas excepto 'Nosotros'?", options: ["Futuro Simple", "Presente de Indicativo", "Pretérito Perfecto"], correct: 0 },
          { type: "multiple_choice", question: "Si ______ (tener) tiempo, iré al cine.", options: ["tendré", "tengo", "tuve"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Söyleyeceğim' (Decir)?", options: ["Deciré", "Diré", "Digo"], correct: 1 },
          { type: "multiple_choice", question: "Ellos ______ (salir) de fiesta el sábado.", options: ["salirán", "saldrán", "salen"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué número de tildes tiene 'Vendrás'?", options: ["Cero", "Una", "Dos"], correct: 1 },
          { type: "syntax", turkish: "Yarın seni arayacağım.", spanish: "Mañana te llamaré", words: ["Mañana", "te", "llamaré", "llamas", "llamado"] },
          { type: "syntax", turkish: "Çok işim olacak (Tener).", spanish: "Tendré mucho trabajo", words: ["Tendré", "mucho", "trabajo", "teniendo"] },
          { type: "syntax", turkish: "Onu yarın yapacağım (Hacer).", spanish: "Lo haré mañana", words: ["Lo", "haré", "mañana", "haceré"] },
          { type: "syntax", turkish: "Bize her şeyi söyleyecek (Decir).", spanish: "Él nos dirá todo", words: ["Él", "nos", "dirá", "todo", "dice"] },
          { type: "syntax", turkish: "Eğer çalışırsan (estudias), sınavı geçeceksin.", spanish: "Si estudias aprobarás el examen", words: ["Si", "estudias", "aprobarás", "el", "examen", "aprobado"] },
          { type: "syntax", turkish: "Daha sonra çıkacağız (Salir).", spanish: "Nosotros saldremos más tarde", words: ["Nosotros", "saldremos", "más", "tarde", "saliremos"] },
          { type: "syntax", turkish: "Bir sır öğreneceksin (Saber).", spanish: "Sabrás un secreto", words: ["Sabrás", "un", "secreto", "saberás"] },
          { type: "syntax", turkish: "Gelecek yıl evleneceğiz (Casarse).", spanish: "El próximo año nos casaremos", words: ["El", "próximo", "año", "nos", "casaremos"] },
          { type: "syntax", turkish: "O (kadın) çok başarılı olacak (Tener éxito).", spanish: "Ella tendrá mucho éxito", words: ["Ella", "tendrá", "mucho", "éxito", "tiene"] },
          { type: "syntax", turkish: "Kim o? Postacı olmalı (Ser).", spanish: "Quién es será el cartero", words: ["Quién", "es", "será", "el", "cartero", "es"] }
        ]
      }
    }
  ]
};
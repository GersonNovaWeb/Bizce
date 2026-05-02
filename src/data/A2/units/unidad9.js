/**
 * UNIDAD 9: EL PASADO DEL PASADO (NIVEL A2)
 * Enfoque: Pretérito Pluscuamperfecto (Había hecho)
 * Estructura: 12 Nodos con Teoría Extensa e Intercalada
 */

export const unidad9 = {
  id: "a2_u9",
  title: "Unidad 9: El Pasado del Pasado",
  description: "Dominio del Pluscuamperfecto para ordenar eventos cronológicos y narrar anécdotas complejas.",
  nodes: [
    {
      id: "a2_u9_n1",
      type: "theory",
      title: "Teoría I: La Lógica del Pluscuamperfecto",
      content: {
        concept: "Imagina que el pasado es una línea. Si el Indefinido es un punto en esa línea, el **Pretérito Pluscuamperfecto** es un punto que ocurrió mucho antes. Es 'el pasado del pasado'.\n\n### 1. La Estructura\nEs un tiempo compuesto, igual que el Pretérito Perfecto (Unidad 1), pero el auxiliar 'Haber' ahora va en Imperfecto.\n\n**Auxiliar HABER (en imperfecto) + Participio:**\n• Yo **HABÍA** / Tú **HABÍAS** / Él-Ella-Usted **HABÍA**\n• Nosotros **HABÍAMOS** / Ellos-Ustedes **HABÍAN**\n\n### 2. Los Participios\n¡Buenas noticias! Se usan exactamente los mismos participios que ya conoces: \n• Regulares: -ado / -ido.\n• Irregulares: Hecho, dicho, visto, escrito, roto, vuelto, puesto...\n\n### 3. ¿Para qué sirve?\nSirve para explicar que una acción terminó antes de que otra acción del pasado empezara.\n*Ej: 'Cuando llegué al aeropuerto, el avión ya HABÍA SALIDO'.*\n\n🇹🇷 LÓGICA TURCA: Equivale casi perfectamente al sufijo **-mıştı / -mişti** (Gitmişti, yapmıştı).",
        examples: [
          { es: "Yo ya había comido cuando me llamaste.", tr: "Beni aradığında ben çoktan yemiştim." },
          { es: "Ellos ya habían visto esa película.", tr: "Onlar o filmi zaten görmüşlerdi." },
          { es: "Nunca habíamos estado en Madrid antes.", tr: "Daha önce hiç Madrid'de bulunmamıştık." }
        ]
      }
    },
    {
      id: "a2_u9_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Orden Temporal)",
      exercises: [
        { type: "syntax", turkish: "Zaten yapmıştım (Hacer).", spanish: "Yo ya lo había hecho", words: ["Yo", "ya", "lo", "había", "hecho", "hace", "hizo"] },
        { type: "syntax", turkish: "Söylediklerini zaten biliyorduk (Saber).", spanish: "Ya lo habíamos sabido", words: ["Ya", "lo", "habíamos", "sabido", "supe", "sabía"] },
        { type: "syntax", turkish: "Geldiğinde onlar çoktan gitmişlerdi (Ir).", spanish: "Ellos ya habían ido cuando llegaste", words: ["Ellos", "ya", "habían", "ido", "cuando", "llegaste", "fueron"] },
        { type: "syntax", turkish: "Henüz ödevini bitirmemiştin.", spanish: "Todavía no habías terminado tu tarea", words: ["Todavía", "no", "habías", "terminado", "tu", "tarea"] },
        { type: "syntax", turkish: "Daha önce hiç İspanya'da bulunmamıştım.", spanish: "Nunca había estado en España antes", words: ["Nunca", "había", "estado", "en", "España", "antes", "estaba"] },
        { type: "syntax", turkish: "Onu (kadın) zaten görmüştüm (Ver).", spanish: "Yo ya la había visto", words: ["Yo", "ya", "la", "había", "visto", "veía", "ver"] },
        { type: "syntax", turkish: "Bize her şeyi anlatmıştın (Contar).", spanish: "Tú nos habías contado todo", words: ["Tú", "nos", "habías", "contado", "todo", "cuentas"] },
        { type: "syntax", turkish: "Otobüs çoktan geçmişti (Pasar).", spanish: "El autobús ya había pasado", words: ["El", "autobús", "ya", "había", "pasado", "pasó"] },
        { type: "syntax", turkish: "Kapıyı kapatmışlardı.", spanish: "Ellos habían cerrado la puerta", words: ["Ellos", "habían", "cerrado", "la", "puerta", "cerraron"] },
        { type: "syntax", turkish: "Haberi bu sabah duymuştuk (Oír).", spanish: "Habíamos oído la noticia esta mañana", words: ["Habíamos", "oído", "la", "noticia", "esta", "mañana", "oyeron"] },
        { type: "syntax", turkish: "Öğretmen zaten gelmişti.", spanish: "El profesor ya había llegado", words: ["El", "profesor", "ya", "había", "llegado", "vino"] },
        { type: "syntax", turkish: "Anahtarlarımı evde bırakmıştım (Dejar).", spanish: "Había dejado mis llaves en casa", words: ["Había", "dejado", "mis", "llaves", "en", "casa"] },
        { type: "syntax", turkish: "Filmi izlemiştik.", spanish: "Nosotros habíamos visto la película", words: ["Nosotros", "habíamos", "visto", "la", "película"] },
        { type: "syntax", turkish: "Sen çok çalışmıştın.", spanish: "Tú habías trabajado mucho", words: ["Tú", "habías", "trabajado", "mucho", "has"] },
        { type: "syntax", turkish: "Onlar yeni bir ev satın almışlardı.", spanish: "Ellos habían comprado una casa nueva", words: ["Ellos", "habían", "comprado", "una", "casa", "nueva"] }
      ]
    },
    {
      id: "a2_u9_n3",
      type: "theory",
      title: "Teoría II: Conectores de Anterioridad",
      content: {
        concept: "Para que este tiempo verbal suene natural, necesitamos 'puentes' que conecten las dos acciones del pasado. Estos conectores le dicen al oyente: '¡Escucha, esto pasó antes!'.\n\n### 1. YA (Zaten / Çoktan)\nEs el compañero número uno del pluscuamperfecto.\n*Ej: Cuando entré en el salón, la fiesta YA había terminado.*\n\n### 2. TODAVÍA NO (Henüz değil)\nPara acciones que esperábamos que hubieran pasado, pero no.\n*Ej: Eran las diez y mi novio TODAVÍA NO había llegado.*\n\n### 3. ANTES DE QUE + Pasado\nPara marcar el límite.\n*Ej: Yo había estudiado mucho ANTES DE QUE empezara el examen.*\n\n### 4. PORQUE (Çünkü)\nMuchas veces usamos el pluscuamperfecto después de 'porque' para explicar la CAUSA de un estado pasado.\n*Ej: Estaba muy cansada PORQUE no había dormido nada.*\n\n💡 REGLA DE ORO: El pluscuamperfecto es un tiempo 'espejo'. Casi siempre necesita a otro verbo en pasado (Indefinido o Imperfecto) para existir.",
        examples: [
          { es: "No tenía hambre porque ya había desayunado.", tr: "Aç değildim çünkü zaten kahvaltı yapmıştım." },
          { es: "Había llovido mucho antes del partido.", tr: "Maçtan önce çok yağmur yağmıştı." },
          { es: "Ella estaba triste porque había perdido su perro.", tr: "Üzgündü çünkü köpeğini kaybetmişti." }
        ]
      }
    },
    {
      id: "a2_u9_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Enlace Temporal)",
      exercises: [
        { type: "speaking", spanish: "Ya había terminado mi tarea", turkish: "Ödevimi çoktan bitirmiştim." },
        { type: "speaking", spanish: "Ella todavía no había llegado", turkish: "O henüz gelmemişti." },
        { type: "speaking", spanish: "Habíamos visto esa película antes", turkish: "O filmi daha önce görmüştük." },
        { type: "speaking", spanish: "Él ya había salido de casa", turkish: "O evden çoktan çıkmıştı." },
        { type: "speaking", spanish: "No habías dicho la verdad", turkish: "Doğruyu söylememiştin." },
        { type: "speaking", spanish: "Ellos habían escrito una carta", turkish: "Onlar bir mektup yazmışlardı." },
        { type: "speaking", spanish: "Me sentí mal porque había comido mucho", turkish: "Kötü hissettim çünkü çok yemiştim." },
        { type: "speaking", spanish: "Nunca habíamos estado aquí", turkish: "Daha önce hiç burada bulunmamıştık." },
        { type: "speaking", spanish: "Él había roto el vaso sin querer", turkish: "Bardağı istemeden kırmıştı." },
        { type: "speaking", spanish: "Ustedes ya habían pagado la cuenta", turkish: "Hesabı zaten ödemiştiniz." },
        { type: "speaking", spanish: "Yo había puesto las llaves allí", turkish: "Anahtarları oraya koymuştum." },
        { type: "speaking", spanish: "Había nevado toda la noche", turkish: "Bütün gece kar yağmıştı." },
        { type: "speaking", spanish: "Ella había olvidado su bolso", turkish: "Çantasını unutmuştu." },
        { type: "speaking", spanish: "Habíamos tomado un café antes", turkish: "Daha önce bir kahve içmiştik." },
        { type: "speaking", spanish: "Tú habías aprendido español en Estambul", turkish: "İspanyolcayı İstanbul'da öğrenmiştin." }
      ]
    },
    {
      id: "a2_u9_n5",
      type: "theory",
      title: "Teoría III: Pluscuamperfecto vs. Perfecto",
      content: {
        concept: "Es muy común confundir 'He comido' con 'Había comido'. Vamos a desarmar esta confusión.\n\n### 1. Pretérito Perfecto (HE comido)\nAcciones de HOY o experiencias de vida conectadas al presente. \n*Ej: Hoy HE comido pizza. (Bugün pizza yedim).*\n\n### 2. Pretérito Pluscuamperfecto (HABÍA comido)\nAcciones de AYER o ANTES que ocurrieron antes de otro momento.\n*Ej: Ayer a las dos yo ya HABÍA COMIDO. (Dün saat ikide çoktan yemiştim).*\n\n### La Sorpresa y la Disculpa\nUsamos mucho el Pluscuamperfecto para disculparnos o explicar sorpresas.\n• 'Perdón, no te llamé porque me **había quedado** sin batería'. (Özür dilerim, aramadım çünkü şarjım bitmişti).\n• 'Pensaba que tú ya **habías vuelto**'. (Senin çoktan döndüğünü sanıyordum).",
        examples: [
          { es: "Hoy he trabajado poco, pero ayer había trabajado mucho.", tr: "Bugün az çalıştım ama dün çok çalışmıştım." },
          { es: "Nunca he ido a México, pero ya lo había planeado.", tr: "Meksika'ya hiç gitmedim ama onu zaten planlamıştım." },
          { es: "Ella no sabía que él había muerto.", tr: "Onun öldüğünü (kadın) bilmiyordu." }
        ]
      }
    },
    {
      id: "a2_u9_n6",
      type: "reading",
      title: "Lectura y Audio: Una cita desastrosa",
      content: {
        text: "Ayer tuve una cita con un chico que conocí en la universidad. ¡Fue un desastre total! \n\nHabíamos quedado a las ocho de la tarde delante del cine. Yo llegué cinco minutos antes, pero él no estaba allí. Esperé treinta minutos. A las ocho y media, yo todavía no había recibido ningún mensaje de él. Estaba muy enojada porque yo había hecho un gran esfuerzo para llegar puntual. \n\nDe repente, recordé algo horrible. Miré mi calendario y supe la verdad: ¡La cita no era el viernes, era el jueves! Él me había esperado ayer durante una hora y yo no había ido. Inmediatamente lo llamé para pedir perdón, pero él ya había bloqueado mi número. ¡Qué lástima!",
        translation: "Dün üniversitede tanıştığım bir çocukla randevum vardı. Tam bir felaketti!\n\nSaat akşam sekizde sinemanın önünde buluşmak için sözleşmiştik. Ben beş dakika önce vardım ama o orada değildi. Otuz dakika bekledim. Saat sekiz buçukta ondan henüz hiç mesaj almamıştım. Çok kızgındım çünkü vaktinde gelmek için büyük bir çaba göstermiştim.\n\nAniden korkunç bir şeyi hatırladım. Takvimime baktım ve gerçeği anladım: Randevu cuma günü değil, perşembe günüydü! O dün beni bir saat boyunca beklemişti ve ben gitmemiştim. Özür dilemek için onu hemen aradım ama o numaramı çoktan engellemişti. Ne yazık!"
      }
    },
    {
      id: "a2_u9_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (20 Mixtos)",
      exercises: [
        { type: "syntax", turkish: "Geldiğimde o çoktan uyumuştu.", spanish: "Cuando llegué él ya se había dormido", words: ["Cuando", "llegué", "él", "ya", "se", "había", "dormido", "duerme"] },
        { type: "syntax", turkish: "Mektubu zaten yazmıştım.", spanish: "Yo ya había escrito la carta", words: ["Yo", "ya", "había", "escrito", "la", "carta", "escribido"] },
        { type: "syntax", turkish: "Beni aradığında ben yemek yemiştim.", spanish: "Cuando me llamaste yo había comido", words: ["Cuando", "me", "llamaste", "yo", "había", "comido", "comí"] },
        { type: "syntax", turkish: "Sınav başlamadan önce çok çalışmıştık.", spanish: "Habíamos estudiado mucho antes del examen", words: ["Habíamos", "estudiado", "mucho", "antes", "del", "examen"] },
        { type: "syntax", turkish: "Cüzdanımı evde unutmuştum (Olvidar).", spanish: "Había olvidado mi cartera en casa", words: ["Había", "olvidado", "mi", "cartera", "en", "casa"] },
        { type: "syntax", turkish: "Henüz gerçeği söylememişlerdi.", spanish: "Todavía no habían dicho la verdad", words: ["Todavía", "no", "habían", "dicho", "la", "verdad", "dijeron"] },
        { type: "syntax", turkish: "Onunla daha önce tanışmış mıydın?", spanish: "Lo habías conocido antes", words: ["Lo", "habías", "conocido", "antes", "conociste"] },
        { type: "syntax", turkish: "Havaalanına vardığımızda uçak kalkmıştı.", spanish: "Cuando llegamos al aeropuerto el avión había salido", words: ["Cuando", "llegamos", "al", "aeropuerto", "el", "avión", "había", "salido"] },
        { type: "syntax", turkish: "Onu (lo) zaten hazırlamıştık.", spanish: "Ya lo habíamos preparado", words: ["Ya", "lo", "habíamos", "preparado", "preparamos"] },
        { type: "syntax", turkish: "Güneş çoktan batmıştı (Ponerse).", spanish: "El sol ya se había puesto", words: ["El", "sol", "ya", "se", "había", "puesto", "puso"] },
        { type: "speaking", spanish: "Yo ya había visto esa película", turkish: "O filmi zaten görmüştüm." },
        { type: "speaking", spanish: "Cuando llegué la tienda había cerrado", turkish: "Vardığımda dükkan kapanmıştı." },
        { type: "speaking", spanish: "Nunca habíamos comido sushi antes", turkish: "Daha önce hiç sushi yememiştik." },
        { type: "speaking", spanish: "Él me había dicho que vendría", turkish: "Geleceğini bana söylemişti." },
        { type: "speaking", spanish: "Habíamos hecho planes para el sábado", turkish: "Cumartesi için planlar yapmıştık." },
        { type: "speaking", spanish: "Tú habías perdido tus llaves ayer", turkish: "Dün anahtarlarını kaybetmiştin." },
        { type: "speaking", spanish: "Ella se había puesto un vestido rojo", turkish: "Kırmızı bir elbise giymişti." },
        { type: "speaking", spanish: "Había llovido mucho por la tarde", turkish: "Öğleden sonra çok yağmur yağmıştı." },
        { type: "speaking", spanish: "Nosotros ya habíamos limpiado todo", turkish: "Biz zaten her şeyi temizlemiştik." },
        { type: "speaking", spanish: "Pensaba que habías vuelto a Turquía", turkish: "Türkiye'ye döndüğünü sanıyordum." }
      ]
    },
    {
      id: "a2_u9_n8",
      type: "theory",
      title: "Teoría IV: Relatos en Cadena (Los 3 Pasados)",
      content: {
        concept: "Este es el nivel máximo de un narrador A2: usar los tres pasados en un solo párrafo. Cada uno tiene su función.\n\n### El Combo Narrativo:\n1. **Imperfecto (Escenario):** 'Hacía sol y la gente estaba en la calle'.\n2. **Pluscuamperfecto (Antecedente):** 'Yo ya había desayunado'.\n3. **Indefinido (Acción):** 'De repente, vi a mi hermano'.\n\n### Ejemplo de Cadena Real:\n'Eran las ocho y yo **estaba** (Imperfecto) cansada porque **había trabajado** (Pluscuamperfecto) mucho, entonces **decidí** (Indefinido) ir a dormir'.\n\n🇹🇷 CONSEJO: Si en turco usarías **-iyordu** y luego **-mişti** y terminas en **-di**, en español sigues ese mismo orden.",
        examples: [
          { es: "Como no había dormido, estaba muy cansado en el trabajo.", tr: "Uyumadığım için işte çok yorgundum." },
          { es: "Ella me dio el libro que había comprado ayer.", tr: "Dün satın aldığı kitabı bana verdi." },
          { es: "Vimos que alguien había roto la ventana.", tr: "Birinin pencereyi kırmış olduğunu gördük." }
        ]
      }
    },
    {
      id: "a2_u9_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Pasado del Pasado",
      content: {
        concept: "Analizaremos cómo se incrusta una acción remota dentro de una frase de pasado reciente. Mira cómo el 'había' empuja la acción aún más atrás en el tiempo.",
        examples: [{ es: "Yo no pude entrar porque había olvidado las llaves en la oficina.", tr: "İçeri giremedim çünkü anahtarları ofiste unutmuştum." }],
        analysis: [
          { word: "Yo", type: "pronoun", literal: "Ben", explanation: "Sujeto.", examples: [] },
          { word: "no pude", type: "verb", literal: "başaramadım / -emedim", explanation: "Verbo PODER en Indefinido Negativo. Es la acción principal que falló.", examples: [] },
          { word: "entrar", type: "verb", literal: "girmek", explanation: "Infinitivo que completa a 'pude'.", examples: [] },
          { word: "porque", type: "connector", literal: "çünkü", explanation: "Conector causal.", examples: [] },
          { word: "había", type: "verb", literal: "yardımcı fiil (mişti)", explanation: "Auxiliar del Pluscuamperfecto para la 1ª persona. Indica anterioridad.", examples: [] },
          { word: "olvidado", type: "verb", literal: "unutulmuş", explanation: "Participio de OLVIDAR. Es la causa remota de no poder entrar.", examples: [] },
          { word: "las llaves", type: "noun", literal: "anahtarlar", explanation: "Objeto directo femenino plural.", examples: [] },
          { word: "en la oficina", type: "noun", literal: "ofiste", explanation: "Complemento de lugar.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u9_n10",
      type: "theory",
      title: "Caja de Herramientas: Viajes y Logística",
      content: {
        concept: "El Pluscuamperfecto se usa constantemente para hablar de errores en viajes o logística. Aquí tienes vocabulario útil:\n\n• **El vuelo** (Uçuş) / **El avión** (Uçak)\n• **La puerta de embarque** (Biniş kapısı)\n• **Perder el tren** (Treni kaçırmak)\n• **Llegar tarde** (Geç kalmak)\n• **Hacer la reserva** (Rezervasyon yapmak)\n• **Hacer la maleta** (Valiz hazırlamak)\n• **Estar agotado/a** (Tükenmiş/Çok yorgun olmak)\n• **Darse cuenta** (Farkına varmak) ➔ Me di cuenta, te diste cuenta...",
        examples: [
          { es: "Me di cuenta de que había perdido mi pasaporte.", tr: "Pasaportumu kaybetmiş olduğumu fark ettim." },
          { es: "Cuando llegamos, el hotel ya había cancelado la reserva.", tr: "Vardığımızda otel rezervasyonu çoktan iptal etmişti." },
          { es: "No tomé el vuelo porque había llegado tarde.", tr: "Geç kaldığım için uçağa binemedim." }
        ]
      }
    },
    {
      id: "a2_u9_n11",
      type: "theory",
      title: "Taller de Producción: '¡Ups! Lo olvidé'",
      content: {
        concept: "Vas a contar una pequeña historia sobre un malentendido o un olvido.\n\n**Instrucciones:**\nEscribe un relato (mínimo 6 líneas) sobre una vez que algo salió mal porque olvidaste algo o alguien llegó antes.\n1. Usa el Pluscuamperfecto al menos 3 veces (había hecho, había olvidado...).\n2. Usa el Indefinido para las acciones principales (llegué, vi, supe...).\n3. Explica cómo te sentiste.\n\n**Inspiración:** 'Ayer fui al gimnasio pero estaba cerrado. Yo no **había leído** el cartel de la puerta...'",
        examples: []
      }
    },
    {
      id: "a2_u9_n12",
      type: "exam",
      title: "Examen de Unidad: El Pasado del Pasado",
      content: {
        concept: "Última prueba sobre la cronología del pasado. Demuestra que sabes usar el Pluscuamperfecto y sus conectores.",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es el auxiliar de 'Nosotros' en Pluscuamperfecto?", options: ["Habíamos", "Hemos", "Habían"], correct: 0 },
          { type: "multiple_choice", question: "Participio de ESCRIBIR:", options: ["Escribido", "Escrito"], correct: 1 },
          { type: "multiple_choice", question: "Cuando llegué, ellos ya ______ (ir).", options: ["se habían ido", "se han ido"], correct: 0 },
          { type: "multiple_choice", question: "Yo no tenía dinero porque ______ (perder) la cartera.", options: ["había perdido", "he perdido"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Ya lo había hecho'?", options: ["Onu zaten yaptım.", "Onu zaten yapmıştım."], correct: 1 },
          { type: "multiple_choice", question: "La terminación del auxiliar para 'Él' es:", options: ["-ía", "-aba"], correct: 0 },
          { type: "multiple_choice", question: "Nunca ______ (estar) en ese restaurante antes.", options: ["habíamos estado", "habíamos sido"], correct: 0 },
          { type: "multiple_choice", question: "Ella estaba cansada porque ______ (trabajar) mucho.", options: ["había trabajado", "trabajó"], correct: 0 },
          { type: "multiple_choice", question: "Me di cuenta de que ______ (olvidar) las llaves.", options: ["había olvidado", "olvidé"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el participio de DECIR?", options: ["Decido", "Dicho"], correct: 1 },
          { type: "syntax", turkish: "Beni aradığında ben çoktan çıkmıştım.", spanish: "Cuando me llamaste yo ya había salido", words: ["Cuando", "me", "llamaste", "yo", "ya", "había", "salido"] },
          { type: "syntax", turkish: "Daha önce hiç böyle bir şey görmemiştim.", spanish: "Nunca había visto algo así antes", words: ["Nunca", "había", "visto", "algo", "así", "antes"] },
          { type: "syntax", turkish: "Zaten yemiştik.", spanish: "Nosotros ya habíamos comido", words: ["Nosotros", "ya", "habíamos", "comido", "hemos"] },
          { type: "syntax", turkish: "Henüz ödevini yapmamıştı.", spanish: "Él todavía no había hecho su tarea", words: ["Él", "todavía", "no", "había", "hecho", "su", "tarea"] },
          { type: "syntax", turkish: "Bardağı kimin kırmış olduğunu biliyordum.", spanish: "Sabía quién había roto el vaso", words: ["Sabía", "quién", "había", "roto", "el", "vaso"] },
          { type: "syntax", turkish: "Rezervasyonu zaten yapmıştık.", spanish: "Ya habíamos hecho la reserva", words: ["Ya", "habíamos", "hecho", "la", "reserva"] },
          { type: "syntax", turkish: "Anahtarlarımı ofiste bırakmıştım.", spanish: "Había dejado mis llaves en la oficina", words: ["Había", "dejado", "mis", "llaves", "en", "la", "oficina"] },
          { type: "syntax", turkish: "Daha önce hiç İspanyolca çalışmamıştım.", spanish: "Nunca había estudiado español antes", words: ["Nunca", "había", "estudiado", "español", "antes"] },
          { type: "syntax", turkish: "Çok yorgundu çünkü çok yürümüştü.", spanish: "Estaba muy cansado porque había caminado mucho", words: ["Estaba", "muy", "cansado", "porque", "había", "caminado", "mucho"] },
          { type: "syntax", turkish: "Bize yalan söylemişlerdi.", spanish: "Ellos nos habían dicho mentiras", words: ["Ellos", "nos", "habían", "dicho", "mentiras"] }
        ]
      }
    }
  ]
};
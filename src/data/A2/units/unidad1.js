/**
 * UNIDAD 1: EXPERIENCIAS DE VIDA (NIVEL A2)
 * Enfoque: Pretérito Perfecto Compuesto
 * Estructura: 12 Nodos con Teoría Extensa y Práctica Progresiva
 */

export const unidad1 = {
  id: "a2_u1",
  title: "Unidad 1: Experiencias de Vida",
  description: "Dominio del Pretérito Perfecto, la lógica del auxiliar 'Haber' y el contraste de tiempos recientes.",
  nodes: [
    {
      id: "a2_u1_n1",
      type: "theory",
      title: "Teoría I: La Arquitectura del Pasado Compuesto",
      content: {
        concept: "Bienvenida al Nivel A2. Tu primer gran reto es el **Pretérito Perfecto Compuesto**. Se llama 'compuesto' porque necesita dos palabras para funcionar, a diferencia del turco donde un solo sufijo (-dim, -miş) hace todo el trabajo.\n\n1. El Auxiliar 'Haber'\nEn español, el verbo **HABER** ha perdido su significado de 'tener algo' (para eso usamos 'Tener') y ahora funciona como un 'motor' que empuja a otros verbos al pasado. Es el equivalente funcional a los sufijos de persona en turco, pero va al principio.\n\n**Conjugación obligatoria de memoria:**\n• **Yo HE** / **Tú HAS** / **Él-Ella-Usted HA**\n• **Nosotros HEMOS** / **Ellos-Ustedes HAN**\n\n 2. La Creación del Participio\nEl participio es la forma del verbo que indica que la acción está 'terminada'.\n• Verbos que terminan en **-AR** ➔ Se convierten en **-ADO**. (Cantar ➔ Cantado).\n• Verbos que terminan en **-ER / -IR** ➔ Se convierten en **-IDO**. (Comer ➔ Comido / Vivir ➔ Vivido).\n\n 3. La Regla de la Unidad Indivisible\nEsta es la regla más importante para una estudiante: El auxiliar (HE) y el participio (TRABAJADO) forman un bloque de cemento. **NADA** puede ir en medio. En turco o inglés puedes poner palabras entre el auxiliar y el verbo, en español es un error grave. \n• Correcto: *Yo no he comido.*\n• Incorrecto: *Yo he no comido* o *Yo he hoy comido*.",
        examples: [
          { es: "He hablado con mi familia hoy.", tr: "Bugün ailemle konuştum." },
          { es: "¿Has aprendido la lección?", tr: "Dersi öğrendin mi?" },
          { es: "Nosotros hemos vivido aquí dos años.", tr: "Biz iki yıldır burada yaşadık." }
        ]
      }
    },
    {
      id: "a2_u1_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Estructura Base)",
      exercises: [
        { type: "syntax", turkish: "Bugün çok çalıştım.", spanish: "Hoy he trabajado mucho", words: ["Hoy", "he", "trabajado", "mucho", "has", "trabajando"] },
        { type: "syntax", turkish: "Biz zaten yemek yedik.", spanish: "Nosotros ya hemos comido", words: ["Nosotros", "ya", "hemos", "comido", "han", "comiendo"] },
        { type: "syntax", turkish: "Sen İspanyolca öğrendin mi?", spanish: "Has aprendido tú español", words: ["Has", "aprendido", "tú", "español", "hemos", "aprender"] },
        { type: "syntax", turkish: "Onlar Madrid'de yaşadılar.", spanish: "Ellos han vivido en Madrid", words: ["Ellos", "han", "vivido", "en", "Madrid", "ha"] },
        { type: "syntax", turkish: "O (kadın) çok uyudu.", spanish: "Ella ha dormido mucho", words: ["Ella", "ha", "dormido", "mucho", "hemos"] },
        { type: "syntax", turkish: "Ben bir mektup yazdım.", spanish: "Yo he escrito una carta", words: ["Yo", "he", "escrito", "una", "carta", "escribido"] },
        { type: "syntax", turkish: "Siz kahve içtiniz mi?", spanish: "Han bebido ustedes café", words: ["Han", "bebido", "ustedes", "café", "beber"] },
        { type: "syntax", turkish: "Biz bu filmi izledik.", spanish: "Nosotros hemos visto esta película", words: ["Nosotros", "hemos", "visto", "esta", "película", "ver"] },
        { type: "syntax", turkish: "O (erkek) İspanya'ya seyahat etti.", spanish: "Él ha viajado a España", words: ["Él", "ha", "viajado", "a", "España", "viajar"] },
        { type: "syntax", turkish: "Bugün su içmedim.", spanish: "Hoy no he bebido agua", words: ["Hoy", "no", "he", "bebido", "agua", "beber"] },
        { type: "syntax", turkish: "Kapıyı açtın mı?", spanish: "Has abierto tú la puerta", words: ["Has", "abierto", "tú", "la", "puerta", "abrido"] },
        { type: "syntax", turkish: "Çok koştuk.", spanish: "Hemos corrido mucho", words: ["Hemos", "corrido", "mucho", "han"] },
        { type: "syntax", turkish: "Kitabı okudun mu?", spanish: "Has leído el libro", words: ["Has", "leído", "el", "libro", "leer"] },
        { type: "syntax", turkish: "Onlar şarkı söylediler.", spanish: "Ellos han cantado una canción", words: ["Ellos", "han", "cantado", "una", "canción"] },
        { type: "syntax", turkish: "Seni anladım.", spanish: "Te he comprendido", words: ["Te", "he", "comprendido", "has", "comprendiendo"] }
      ]
    },
    {
      id: "a2_u1_n3",
      type: "theory",
      title: "Teoría II: Los Participios 'Rotos' (Irregulares)",
      content: {
        concept: "En el nivel A2, los verbos irregulares son los que demuestran que realmente conoces el idioma. Algunos verbos no siguen la regla de -ADO / -IDO porque su raíz latina cambió con los siglos. Estos son los participios 'rotos'.\n\n Clasificación para tu memoria:\n\n**1. Los que terminan en -TO:**\n• **Escribir** ➔ Escrito (Yazılmış). *No digas 'escribido'.*\n• **Ver** ➔ Visto (Görülmüş).\n• **Abrir** ➔ Abierto (Açılmış).\n• **Poner** ➔ Puesto (Konulmuş).\n• **Morir** ➔ Muerto (Ölmüş).\n• **Romper** ➔ Roto (Kırılmış).\n• **Hacer** ➔ Hecho (Yapılmış).\n\n**2. Los que terminan en -CHO:**\n• **Decir** ➔ Dicho (Söylenmiş).\n\n**3. Los que terminan en -VUELTO:**\n• **Volver** ➔ Vuelto (Dönülmüş).\n• **Resolver** ➔ Resuelto (Çözülmüş).\n\n**💡 TRUCO PRO:** Si un verbo compuesto nace de uno de estos, también es irregular. Por ejemplo, si *Poner* es *Puesto*, entonces *Componer* es *Compuesto* y *Oponer* es *Opuesto*.",
        examples: [
          { es: "He hecho la cena para ti.", tr: "Senin için akşam yemeğini yaptım." },
          { es: "El gato ha roto el plato.", tr: "Kedi tabağı kırdı." },
          { es: "Ya han vuelto de las vacaciones.", tr: "Tatilden çoktan döndüler." }
        ]
      }
    },
    {
      id: "a2_u1_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Verbos Rebeldes)",
      exercises: [
        { type: "speaking", spanish: "He dicho la verdad", turkish: "Doğruyu söyledim." },
        { type: "speaking", spanish: "He hecho mi tarea", turkish: "Ödevimi yaptım." },
        { type: "speaking", spanish: "Ella ha escrito un libro", turkish: "O bir kitap yazdı." },
        { type: "speaking", spanish: "Hemos visto una película", turkish: "Bir film izledik." },
        { type: "speaking", spanish: "Has roto el vaso", turkish: "Bardağı kırdın." },
        { type: "speaking", spanish: "Ellos han abierto la ventana", turkish: "Penceyeyi açtılar." },
        { type: "speaking", spanish: "He puesto las llaves aquí", turkish: "Anahtarları buraya koydum." },
        { type: "speaking", spanish: "Habéis vuelto muy tarde", turkish: "Çok geç döndünüz." },
        { type: "speaking", spanish: "No he hecho nada hoy", turkish: "Bugün hiçbir şey yapmadım." },
        { type: "speaking", spanish: "Has visto a mi perro", turkish: "Köpeğimi gördün mü?" },
        { type: "speaking", spanish: "Hemos escrito un mensaje", turkish: "Bir mesaj yazdık." },
        { type: "speaking", spanish: "Ella ha abierto su regalo", turkish: "O hediyesini açtı." },
        { type: "speaking", spanish: "Ellos han dicho que sí", turkish: "Evet dediler." },
        { type: "speaking", spanish: "He vuelto a casa", turkish: "Eve döndüm." },
        { type: "speaking", spanish: "Has resuelto el problema", turkish: "Problemi çözdün." }
      ]
    },
    {
      id: "a2_u1_n5",
      type: "theory",
      title: "Teoría III: El Tiempo Psicológico (Marcadores)",
      content: {
        concept: "En español de España, el Pretérito Perfecto no se usa solo para el pasado, se usa para el **pasado que todavía se siente como presente**. Para indicar esto, usamos 'Marcadores Temporales' que dictan qué verbo debemos elegir.\n\n 1. YA (Zaten / Çoktan)\nIndica que la acción se completó antes de lo esperado. \n• Posición: Puede ir al principio o al final.\n• Ejemplo: *Ya he comido* (Zaten yedim).\n\n 2. TODAVÍA NO (Henüz değil)\nIndica que la acción no ha ocurrido, pero esperamos que ocurra pronto.\n• Posición: Siempre antes del verbo 'he'.\n• Ejemplo: *Todavía no he terminado* (Henüz bitirmedim).\n\n 3. ALGUNA VEZ (Hiç / Herhangi bir zaman)\nSe usa para preguntar sobre experiencias de vida sin importar la fecha.\n• Ejemplo: *¿Has estado alguna vez en México?* (Hiç Meksika'da bulundun mu?)\n\n 4. NUNCA (Asla / Hiç)\nEs la respuesta negativa a una experiencia de vida.\n• Ejemplo: *Nunca he comido insectos.* (Asla böcek yemedim).",
        examples: [
          { es: "Ya he visto esa película.", tr: "O filmi zaten izledim." },
          { es: "Todavía no hemos comprado el pan.", tr: "Henüz ekmeği almadık." },
          { es: "Nunca han viajado en avión.", tr: "Uçağa hiç binmediler." }
        ]
      }
    },
    {
      id: "a2_u1_n6",
      type: "reading",
      title: "Lectura y Audio: Una semana en Madrid",
      content: {
        text: "¡Hola! Mi nombre es Ayşe y ya he pasado una semana entera en Madrid. ¡Ha sido una experiencia increíble!\n\nEn estos siete días, he hecho muchas cosas. El lunes he visitado el Museo del Prado y he visto cuadros maravillosos. Todavía no he ido al Parque del Retiro, pero voy a ir mañana.\n\nCon la comida, todo ha sido perfecto. He probado las tapas y me han encantado. También he conocido a mucha gente amable en la escuela. Hoy por la mañana he hablado con mi novio por teléfono y le he dicho que estoy muy feliz aquí. Él todavía no ha venido a visitarme, pero va a venir el próximo mes. ¡Ya tengo muchas ganas de verlo!",
        translation: "Merhaba! Benim adım Ayşe ve Madrid'de tam bir hafta geçirdim. İnanılmaz bir deneyim oldu!\n\nBu yedi gün içinde çok şey yaptım. Pazartesi günü Prado Müzesi'ni ziyaret ettim ve harika tablolar gördüm. Henüz Retiro Parkı'na gitmedim ama yarın gideceğim.\n\nYemekler konusunda her şey mükemmeldi. Tapasları denedim ve onlara bayıldım. Ayrıca okulda birçok nazik insanla tanıştım. Bugün sabah erkek arkadaşımla telefonda konuştum ve ona burada çok mutlu olduğumu söyledim. O henüz beni ziyarete gelmedi ama gelecek ay gelecek. Onu görmek için şimdiden sabırsızlanıyorum!"
      }
    },
    {
      id: "a2_u1_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis + Voz)",
      exercises: [
        { type: "syntax", turkish: "Henüz ödevimi yapmadım.", spanish: "Todavía no he hecho mi tarea", words: ["Todavía", "no", "he", "hecho", "mi", "tarea", "hacido"] },
        { type: "syntax", turkish: "Filmi zaten izledik.", spanish: "Ya hemos visto la película", words: ["Ya", "hemos", "visto", "la", "película", "ver"] },
        { type: "syntax", turkish: "Hiç Meksika yemeği yedin mi?", spanish: "Has comido alguna vez comida mexicana", words: ["Has", "comido", "alguna", "vez", "comida", "mexicana"] },
        { type: "syntax", turkish: "Annem henüz gelmedi.", spanish: "Mi madre todavía no ha llegado", words: ["Mi", "madre", "todavía", "no", "ha", "llegado"] },
        { type: "syntax", turkish: "Doğruyu zaten söyledim.", spanish: "Ya he dicho la verdad", words: ["Ya", "he", "dicho", "la", "verdad", "decido"] },
        { type: "syntax", turkish: "Kahveyi çoktan içtik.", spanish: "Ya hemos bebido el café", words: ["Ya", "hemos", "bebido", "el", "café"] },
        { type: "syntax", turkish: "Henüz mektubu yazmadılar.", spanish: "Todavía no han escrito la carta", words: ["Todavía", "no", "han", "escrito", "la", "carta"] },
        { type: "syntax", turkish: "Hiç Madrid'de bulundun mu?", spanish: "Has estado alguna vez en Madrid", words: ["Has", "estado", "alguna", "vez", "en", "Madrid"] },
        { type: "syntax", turkish: "Pencereyi zaten açtım.", spanish: "Ya he abierto la ventana", words: ["Ya", "he", "abierto", "la", "ventana"] },
        { type: "syntax", turkish: "Ders henüz bitmedi.", spanish: "La clase todavía no ha terminado", words: ["La", "clase", "todavía", "no", "ha", "terminado"] },
        { type: "speaking", spanish: "Ya he terminado mis ejercicios", turkish: "Egzersizlerimi zaten bitirdim." },
        { type: "speaking", spanish: "Todavía no he desayunado hoy", turkish: "Bugün henüz kahvaltı yapmadım." },
        { type: "speaking", spanish: "Nunca he visto la nieve", turkish: "Asla kar görmedim." },
        { type: "speaking", spanish: "Has visto mis llaves", turkish: "Anahtarlarımı gördün mü?" },
        { type: "speaking", spanish: "Ya hemos vuelto del supermercado", turkish: "Süpermarketten çoktan döndük." },
        { type: "speaking", spanish: "Ella todavía no ha dicho nada", turkish: "O henüz hiçbir şey söylemedi." },
        { type: "speaking", spanish: "Nunca hemos comido paella", turkish: "Asla paella yemedik." },
        { type: "speaking", spanish: "Ya has abierto tu regalo", turkish: "Hediyeni çoktan açtın." },
        { type: "speaking", spanish: "Todavía no han puesto la música", turkish: "Henüz müziği koymadılar." },
        { type: "speaking", spanish: "He hecho mucho deporte esta mañana", turkish: "Bu sabah çok spor yaptım." }
      ]
    },
    {
      id: "a2_u1_n8",
      type: "theory",
      title: "Teoría IV: Lógica de la 'Ventana Abierta'",
      content: {
        concept: "En español existe un concepto llamado **'La ventana temporal abierta'**. Esto es lo que más confunde a los estudiantes extranjeros.\n\n ¿Cuándo usar este pasado?\nImagina que el tiempo es una habitación. Si la puerta de esa habitación sigue abierta, usamos el Pretérito Perfecto.\n\n1. **Acciones hoy:** El día de hoy no ha terminado. Si desayunaste a las 8 AM y son las 10 PM, sigue siendo 'hoy', por lo tanto: *'Hoy HE desayunado'*. (🇹🇷 En turco esto no importa, usarías '-dim').\n2. **Acciones este/esta:** Esta semana, este mes, este año. Como el periodo no ha terminado, la ventana está abierta.\n3. **Experiencias sin fecha:** Si dices 'He viajado a Japón', no importa cuándo fue, lo importante es que tú (la persona) sigues viva, por lo que la ventana de tu experiencia vital está abierta.\n\n**🚨 El error del 'ayer':** En el momento en que digas 'AYER', la ventana se cierra con llave. En ese caso NO puedes usar 'HE'. Usarás otro tiempo que aprenderemos después.",
        examples: [
          { es: "Esta mañana he bebido tres cafés.", tr: "Bu sabah üç kahve içtim." },
          { es: "Este año hemos aprendido mucho español.", tr: "Bu yıl çok İspanyolca öğrendik." },
          { es: "Últimamente no he dormido bien.", tr: "Son zamanlarda iyi uyumadım." }
        ]
      }
    },
    {
      id: "a2_u1_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual",
      content: {
        concept: "Analizaremos la frase más compleja de la unidad. Aquí combinamos negación, pronombres y un participio irregular. Observa la posición del 'no' y cómo el pronombre 'le' (ona) debe ir antes del bloque verbal.",
        examples: [{ es: "Todavía no le hemos dicho la verdad.", tr: "Ona henüz doğruyu söylemedik." }],
        analysis: [
          { word: "Todavía no", type: "adverb", literal: "Henüz ... değil", explanation: "Bloque de negación temporal. Crea la expectativa de que la acción ocurrirá pronto.", examples: [] },
          { word: "le", type: "pronoun", literal: "ona", explanation: "Pronombre de objeto indirecto. Representa a la persona que recibe la información. Va ANTES de 'hemos'.", examples: [] },
          { word: "hemos", type: "verb", literal: "yardımcı fiil", explanation: "Auxiliar 'haber' para la persona 'Nosotros'. Indica quién está hablando.", examples: [] },
          { word: "dicho", type: "verb", literal: "söylenmiş", explanation: "Participio irregular del verbo DECIR. Contiene el significado de la acción.", examples: [] },
          { word: "la verdad", type: "noun", literal: "gerçek / doğru", explanation: "Objeto directo que completa la frase.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u1_n10",
      type: "theory",
      title: "Herramientas: Verbos de Acción en Participio",
      content: {
        concept: "Para narrar tus experiencias, necesitas un catálogo de verbos en su forma de participio. Aquí tienes los más útiles para el día a día.\n\nVerbos de Movimiento y Socialización:\n• Salir ➔ **Salido** (Dışarı çıkmak)\n• Ir ➔ **Ido** (Gitmek)\n• Quedar ➔ **Quedado** (Buluşmak)\n• Estar ➔ **Estado** (Bulunmak)\n\nVerbos de Acción Diaria:\n• Limpiar ➔ **Limpiado** (Temizlemek)\n• Comprar ➔ **Comprado** (Satın almak)\n• Probar ➔ **Probado** (Denemek - yemek için)\n• Conocer ➔ **Conocido** (Tanışmak / Bilmek)\n\n**💡 NOTA:** El verbo 'IR' (Ido) y el verbo 'SER' (Estado) son muy usados. 'He estado en Madrid' (Madrid'de bulundum).",
        examples: [
          { es: "He quedado con mis amigos en la plaza.", tr: "Meydanda arkadaşlarımla buluştum." },
          { es: "He probado la comida turca y es deliciosa.", tr: "Türk yemeğini denedim ve lezzetli." },
          { es: "Nunca he ido a México.", tr: "Meksika'ya hiç gitmedim." }
        ]
      }
    },
    {
      id: "a2_u1_n11",
      type: "theory",
      title: "Taller de Producción: Tus Experiencias",
      content: {
        concept: "Es tu momento de brillar. En este taller debes redactar tus propias frases basadas en tu vida real.\n\n**Instrucciones:**\n1. Escribe 5 oraciones completas sobre lo que has hecho hoy o esta semana.\n2. Debes usar al menos 3 participios irregulares (dicho, hecho, visto, vuelto, escrito, etc.).\n3. Usa los marcadores 'Ya' y 'Todavía no' para dar matiz a tus frases.\n\n**Ejemplo de estructura:**\n'Hoy todavía no he bebido mi café, pero ya he hecho mis ejercicios de español'.\n\nTu profesor revisará este texto personalmente.",
        examples: []
      }
    },
    {
      id: "a2_u1_n12",
      type: "exam",
      title: "Examen de Unidad: Pretérito Perfecto",
      content: {
        concept: "Demuestra que dominas la base del pasado reciente y los participios irregulares.",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es el participio correcto de HACER?", options: ["Hacido", "Hecho", "Haciendo"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se traduce 'Henüz yemedim'?", options: ["Ya he comido.", "Todavía no he comido.", "Nunca he comido."], correct: 1 },
          { type: "multiple_choice", question: "Participio del verbo VER:", options: ["Visto", "Veído", "Viendo"], correct: 0 },
          { type: "multiple_choice", question: "Nosotros ________ (viajar) mucho este año.", options: ["hemos viajado", "han viajado", "has viajado"], correct: 0 },
          { type: "multiple_choice", question: "Yo ________ (decir) la verdad siempre.", options: ["he decido", "he dicho", "has dicho"], correct: 1 },
          { type: "multiple_choice", question: "Ustedes ________ (volver) muy tarde hoy.", options: ["han vuelto", "hemos vuelto", "han volvido"], correct: 0 },
          { type: "multiple_choice", question: "El opuesto de 'Todavía no' es:", options: ["Nunca", "Ya", "Siempre"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se conjuga HABER para 'Tú'?", options: ["He", "Ha", "Has"], correct: 2 },
          { type: "multiple_choice", question: "Participio de ESCRIBIR:", options: ["Escribido", "Escrito", "Escribiendo"], correct: 1 },
          { type: "multiple_choice", question: "Ellos no ________ (hacer) la tarea todavía.", options: ["han hecho", "han hacido", "hemos hecho"], correct: 0 },
          { type: "syntax", turkish: "Zaten bitirdim.", spanish: "Ya he terminado", words: ["Ya", "he", "terminado", "acabado"] },
          { type: "syntax", turkish: "Hiç İspanya'ya gitmedim.", spanish: "Nunca he ido a España", words: ["Nunca", "he", "ido", "a", "España", "yendo"] },
          { type: "syntax", turkish: "Henüz bir şey söylemedik.", spanish: "Todavía no hemos dicho nada", words: ["Todavía", "no", "hemos", "dicho", "nada", "decido"] },
          { type: "syntax", turkish: "Ödevini yaptın mı?", spanish: "Has hecho tu tarea", words: ["Has", "hecho", "tu", "tarea", "hacido"] },
          { type: "syntax", turkish: "Annem zaten döndü.", spanish: "Mi madre ya ha vuelto", words: ["Mi", "madre", "ya", "ha", "vuelto", "volvido"] },
          { type: "syntax", turkish: "Bugün çok su içtim.", spanish: "Hoy he bebido mucha agua", words: ["Hoy", "he", "bebido", "mucha", "agua"] },
          { type: "syntax", turkish: "Onlar televizyon izlediler.", spanish: "Ellos han visto la televisión", words: ["Ellos", "han", "visto", "la", "televisión"] },
          { type: "syntax", turkish: "Penceyeyi açtın mı?", spanish: "Has abierto la ventana", words: ["Has", "abierto", "la", "ventana", "abrido"] },
          { type: "syntax", turkish: "Biz çok eğlendik.", spanish: "Nosotros nos hemos divertido mucho", words: ["Nosotros", "nos", "hemos", "divertido", "mucho"] },
          { type: "syntax", turkish: "Hiç paella yedin mi?", spanish: "Has comido alguna vez paella", words: ["Has", "comido", "alguna", "vez", "paella"] }
        ]
      }
    }
  ]
};
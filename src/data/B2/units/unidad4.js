/**
 * UNIDAD 4 - NIVEL B2: EL COMUNICADOR INDEPENDIENTE
 * Foco: Verbos de Cambio (Ponerse, Quedarse, Volverse, Hacerse, Llegar a ser, Convertirse en)
 * Tema: Transformación personal, física y profesional.
 */

export const unidad4 = {
  id: "b2_u4",
  title: "Unidad 4: Metamorfosis",
  description: "Domina los 6 verbos de cambio. Aprende a expresar transformaciones físicas, ideológicas y emocionales con precisión académica.",
  nodes: [
    {
      id: "b2_u4_n1",
      type: "theory",
      title: "Teoría I: Cambios de Estado (Ponerse y Quedarse)",
      content: {
        concept: "En español, no usamos un solo verbo para 'cambiar'. Elegimos el verbo según la duración y la causa del cambio.\n\n### 1. PONERSE (Cambio rápido y temporal)\nSe usa para estados físicos o de ánimo que no duran mucho tiempo.\n• **Causa:** Involuntaria.\n• **Uso:** Salud, ánimo, aspecto físico.\n*Ej: Se puso rojo (Kızardı).* / *Me pongo nervioso (Geriliyorum).*\n\n### 2. QUEDARSE (Resultado de una situación)\nSe usa cuando el cambio es el **resultado** de algo que pasó antes. A menudo indica una pérdida o una reacción.\n• **Uso:** Estados físicos permanentes o reacciones de sorpresa.\n*Ej: Se quedó ciego (Kör oldu).* / *Me quedé mudo de la sorpresa (Nutkum tutuldu).*",
        examples: [
          { es: "Ella se puso muy triste al oír la noticia.", tr: "Haberi duyunca çok üzüldü (üzgünleşti)." },
          { es: "Él se quedó solo después del divorcio.", tr: "Boşanmadan sonra yalnız kaldı." },
          { es: "¡No te pongas así! Todo estará bien.", tr: "Böyle olma (bu hale girme)! Her şey iyi olacak." }
        ]
      }
    },
    {
      id: "b2_u4_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Estados)",
      exercises: [
        { type: "syntax", turkish: "Seni görünce (al verte) çok mutlu oldu.", spanish: "Él se puso muy feliz al verte", words: ["Él", "se", "puso", "muy", "feliz", "al", "verte", "hizo"] },
        { type: "syntax", turkish: "Haberden sonra şok oldular (quedarse).", spanish: "Se quedaron en shock después de la noticia", words: ["Se", "quedaron", "en", "shock", "después", "de", "la", "noticia"] },
        { type: "syntax", turkish: "Kızardım (Me puse...).", spanish: "Me puse rojo", words: ["Me", "puse", "rojo", "quedé", "hice"] },
        { type: "syntax", turkish: "Kaza yüzünden sağır oldu (quedarse).", spanish: "Se quedó sordo por el accidente", words: ["Se", "quedó", "sordo", "por", "el", "accidente", "puso"] },
        { type: "syntax", turkish: "Sinirlenme!", spanish: "No te pongas nervioso", words: ["No", "te", "pongas", "nervioso", "quédate"] },
        { type: "syntax", turkish: "İşsiz kaldı.", spanish: "Él se quedó sin trabajo", words: ["Él", "se", "quedó", "sin", "trabajo", "puso"] },
        { type: "syntax", turkish: "Hamile kaldı (quedarse).", spanish: "Ella se quedó embarazada", words: ["Ella", "se", "quedó", "embarazada", "puso"] },
        { type: "syntax", turkish: "Güneşten dolayı kahverengi oldum (broncearse).", spanish: "Me puse moreno por el sol", words: ["Me", "puse", "moreno", "por", "el", "sol", "quedé"] },
        { type: "syntax", turkish: "Filmden sonra çok üzgün oldular (ponersen).", spanish: "Se pusieron muy tristes después de la película", words: ["Se", "pusieron", "muy", "tristes", "después", "de", "la", "película"] },
        { type: "syntax", turkish: "O (erkek) hayrete düştü (quedarse).", spanish: "Él se quedó asombrado", words: ["Él", "se", "quedó", "asombrado", "puso"] }
      ]
    },
    {
      id: "b2_u4_n3",
      type: "theory",
      title: "Teoría II: Cambios Profundos (Hacerse, Volverse y Llegar a ser)",
      content: {
        concept: "Cuando el cambio afecta a la personalidad, la profesión o el estatus social, entramos en el terreno de los cambios duraderos.\n\n### 1. HACERSE (Cambio voluntario o de evolución natural)\nImplica una participación activa de la persona o un paso del tiempo inevitable.\n• **Uso:** Profesión, religión, ideología, edad.\n*Ej: Se hizo budista.* / *Se hizo rico (con trabajo).* / *Se hace tarde.*\n\n### 2. VOLVERSE (Cambio radical e involuntario)\nSe usa para cambios de carácter o personalidad, a menudo negativos.\n• **Uso:** Personalidad.\n*Ej: Se volvió loco.* / *Se ha vuelto muy tacaño (cimri).*\n\n### 3. LLEGAR A SER (El éxito de un proceso largo)\nEs el verbo del éxito. Indica que después de mucho tiempo y esfuerzo, se alcanzó una meta.\n*Ej: Llegó a ser presidente.*",
        examples: [
          { es: "Mi hermano se hizo abogado el año pasado.", tr: "Abim geçen yıl avukat oldu." },
          { es: "Él se volvió muy antipático tras el problema.", tr: "Problemden sonra çok antipatik biri oldu (dönüştü)." },
          { es: "Con mucho esfuerzo, llegó a ser la directora de la empresa.", tr: "Büyük bir çabayla şirketin müdürü olmayı başardı." }
        ]
      }
    },
    {
      id: "b2_u4_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Evolución)",
      exercises: [
        { type: "speaking", spanish: "Él se volvió loco de remate", turkish: "Tamamen delirdi (aklı gitti)." },
        { type: "speaking", spanish: "Quiero llegar a ser una experta", turkish: "Bir uzman olmayı başarmak (varmak) istiyorum." },
        { type: "speaking", spanish: "Mi novio se hizo vegetariano", turkish: "Erkek arkadaşım vejetaryen oldu." },
        { type: "speaking", spanish: "Se ha vuelto muy difícil hablar con él", turkish: "Onunla konuşmak çok zor bir hal aldı." },
        { type: "speaking", spanish: "Llegaremos a ser muy felices juntos", turkish: "Birlikte çok mutlu olmayı başaracağız." },
        { type: "speaking", spanish: "Se está haciendo tarde ya", turkish: "Zaten geç oluyor." },
        { type: "speaking", spanish: "Ella se hizo rica con la lotería", turkish: "Piyangoyla zengin oldu." },
        { type: "speaking", spanish: "Te has vuelto una persona increíble", turkish: "İnanılmaz bir insan oldun (dönüştün)." },
        { type: "speaking", spanish: "Llegó a ser el mejor médico de Turquía", turkish: "Türkiye'nin en iyi doktoru olmayı başardı." },
        { type: "speaking", spanish: "No te vuelvas loco por eso", turkish: "Bunun için delirme." }
      ]
    },
    {
      id: "b2_u4_n5",
      type: "theory",
      title: "El Reto Turco: El laberinto de 'Olmak'",
      content: {
        concept: "En turco, la palabra **OLMAK** es un comodín. En español, si usas el verbo equivocado, cambias el sentido de la frase.\n\n### Comparativa Crítica:\n• **'Doktor oldu'**:\n  - Si estudió 6 años: **Se hizo** médico.\n  - Si es el logro de su vida: **Llegó a ser** médico.\n  - Si es una transformación mágica: **Se convirtió en** médico.\n\n• **'Zengin oldu'**:\n  - Con su trabajo: **Se hizo** rico.\n  - De repente (lotería): **Se volvió** rico.\n\n⚠️ **ERROR COMÚN:** Muchos estudiantes usan 'Ser' para el cambio. No digas 'Yo soy médico el año pasado', debes usar un verbo de cambio: 'Me hice médico'.",
        examples: [
          { es: "Se hizo de noche muy rápido.", tr: "Çok çabuk gece oldu." },
          { es: "Se volvió insoportable.", tr: "Katlanılmaz biri oldu." }
        ]
      }
    },
    {
      id: "b2_u4_n6",
      type: "reading",
      title: "Lectura Crítica: Transformaciones Sociales",
      content: {
        text: "En las últimas décadas, el mundo se ha vuelto un lugar irreconocible. La tecnología se ha convertido en el centro de nuestras vidas. Personas que antes eran tímidas, ahora se han hecho famosas gracias a las redes sociales. Sin embargo, muchos expertos se quedan preocupados al ver cómo la comunicación humana se está volviendo cada vez más fría.\n\nMuchos jóvenes sueñan con llegar a ser influyentes, pero pocos se esfuerzan por hacerse expertos en una materia real. Es irónico: el mundo se ha hecho más pequeño gracias al internet, pero la soledad se ha convertido en una epidemia. Ojalá nos pusiéramos de acuerdo para usar la tecnología con más corazón.",
        translation: "Son on yıllarda dünya tanınmaz bir yer haline geldi. Teknoloji hayatlarımızın merkezi haline geldi (convertirse en). Eskiden utangaç olan kişiler, sosyal medya sayesinde şimdi ünlü oldular (hacerse). Ancak pek çok uzman, insan iletişiminin her geçen gün nasıl daha soğuk hale geldiğini (volverse) görünce endişeli kalıyorlar (quedarse).\n\nPek çok genç etkileyici (influencer) olmayı (llegar a ser) hayal ediyor, ancak çok azı gerçek bir konuda uzman olmak (hacerse) için çaba harcıyor. Bu ironik: internet sayesinde dünya daha küçük hale geldi (hacerse) ama yalnızlık bir epidemiye dönüştü (convertirse en). Keşke teknolojiyi daha fazla kalp ile kullanmak için uzlaşsaydık (kendimizi o hale koysaydık)."
      }
    },
    {
      id: "b2_u4_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto B2 (Alta Densidad)",
      exercises: [
        { type: "syntax", turkish: "Teknoloji hayatımızın merkezi oldu (Convertirse en).", spanish: "La tecnología se ha convertido en el centro de nuestra vida", words: ["La", "tecnología", "se", "ha", "convertido", "en", "el", "centro", "de", "nuestra", "vida"] },
        { type: "syntax", turkish: "İletişim daha soğuk oluyor (Volverse).", spanish: "La comunicación se está volviendo más fría", words: ["La", "comunicación", "se", "está", "volviendo", "más", "fría", "haciendo"] },
        { type: "syntax", turkish: "Uzman olmaya (Hacerse) çalışıyor.", spanish: "Él intenta hacerse un experto", words: ["Él", "intenta", "hacerse", "un", "experto", "volverse"] },
        { type: "syntax", turkish: "Dünya daha küçük oldu (Hacerse).", spanish: "El mundo se ha hecho más pequeño", words: ["El", "mundo", "se", "ha", "hecho", "más", "pequeño", "convertido"] },
        { type: "syntax", turkish: "Yalnız kaldım.", spanish: "Me quedé solo", words: ["Me", "quedé", "solo", "puse"] },
        { type: "speaking", spanish: "Ella se convirtió en una estrella", turkish: "O bir yıldıza dönüştü." },
        { type: "speaking", spanish: "Mi padre se hizo viejo de repente", turkish: "Babam aniden yaşlandı (hacerse)." },
        { type: "speaking", spanish: "Se quedó mudo de la impresión", turkish: "Etkilenmekten nutku tutuldu (sessiz kaldı)." },
        { type: "speaking", spanish: "Te has vuelto insoportable hoy", turkish: "Bugün çekilmez biri oldun." },
        { type: "speaking", spanish: "Llegó a ser el jefe de la oficina", turkish: "Ofisin müdürü olmayı başardı." }
      ]
    },
    {
      id: "b2_u4_n8",
      type: "theory",
      title: "Teoría III: Convertirse en (La Transformación Mágica)",
      content: {
        concept: "El sexto verbo de cambio es **CONVERTIRSE EN**. Es el más radical de todos.\n\n### Regla de Oro:\nSiempre va seguido de la preposición **EN** y de un **SUSTANTIVO**.\n• *El agua se convierte EN hielo.* (Su buza dönüşür).\n• *Se convirtió EN mi mejor amigo.* (En iyi arkadaşıma dönüştü).\n\n### Diferencia con 'Hacerse':\n• **Se hizo budista:** Él eligió su religión (Evolución).\n• **Se convirtió en budista:** Hubo un cambio tan radical que parece que es otra persona.",
        examples: [
          { es: "La oruga se convirtió en mariposa.", tr: "Tırtıl kelebeğe dönüştü." },
          { es: "Nuestra relación se convirtió en un problema.", tr: "İlişkimiz bir probleme dönüştü." }
        ]
      }
    },
    {
      id: "b2_u4_n9",
      type: "theory",
      title: "Sintaxis Visual: Adjetivo vs Sustantivo",
      content: {
        concept: "Analizaremos cómo el cambio de categoría gramatical exige un verbo distinto.",
        examples: [{ es: "Se hizo rico pero se volvió un tacaño.", tr: "Zengin oldu ama cimri birine dönüştü." }],
        analysis: [
          { word: "Se hizo", type: "verb", literal: "oldu", explanation: "Verbo de cambio voluntario/proceso. Usado con adjetivo 'rico'.", examples: [] },
          { word: "rico", type: "adjective", literal: "zengin", explanation: "Adjetivo. Describe su nuevo estado económico.", examples: [] },
          { word: "pero", type: "connector", literal: "ama", explanation: "Contraste.", examples: [] },
          { word: "se volvió", type: "verb", literal: "dönüştü (karakterce)", explanation: "Verbo de cambio de personalidad involuntario/negativo.", examples: [] },
          { word: "un tacaño", type: "noun", literal: "bir cimri", explanation: "Sustantivo. Al usar un sustantivo con 'volverse', enfatizamos que ahora encaja en esa etiqueta social.", examples: [] }
        ]
      }
    },
    {
      id: "b2_u4_n10",
      type: "theory",
      title: "Caja de Herramientas: Evolución y Ánimo",
      content: {
        concept: "Para describir cambios, necesitas palabras que definan el carácter y la salud mental.\n\n• **Insoportable** (Çekilmez)\n• **Egoísta** (Bencil)\n• **Famoso/a** (Ünlü)\n• **Millonario/a** (Milyoner)\n• **Ciego/a** (Kör)\n• **Sordo/a** (Sağır)\n• **Mudo/a** (Dilsiz)\n• **Optimista / Pesimista**\n• **El estatus social** (Sosyal statü)\n• **La madurez** (Olgunluk)",
        examples: [
          { es: "Se ha vuelto una pesimista total.", tr: "Tam bir karamsar oldu." },
          { es: "Quedó mudo ante tal belleza.", tr: "Böyle bir güzellik karşısında nutku tutuldu." },
          { es: "Con la madurez, se hizo más sabio.", tr: "Olgunlukla birlikte daha bilge oldu." }
        ]
      }
    },
    {
      id: "b2_u4_n11",
      type: "theory",
      title: "Taller de Producción: Mi Evolución",
      content: {
        concept: "Instrucciones: Piensa en cómo eras hace 5 años y cómo eres ahora.\n\nEscribe un texto (mínimo 10-12 líneas) describiendo tus cambios.\n1. Usa **Ponerse** para hablar de tu aspecto físico o salud.\n2. Usa **Hacerse** para hablar de tu profesión o ideología.\n3. Usa **Volverse** para hablar de cambios en tu carácter (positivos o negativos).\n4. Usa **Llegar a ser** para hablar de un gran logro.\n5. Usa **Convertirse en** para describir una transformación radical.\n\n**Inspiración:** 'Hace cinco años yo era muy tímida, pero ahora me he hecho más abierta. En el trabajo llegué a ser...'",
        examples: []
      }
    },
    {
      id: "b2_u4_n12",
      type: "exam",
      title: "Examen de Unidad: Metamorfosis",
      content: {
        concept: "Evaluación técnica de los 6 verbos de cambio. Debes elegir el verbo exacto según el matiz de la frase.",
        exercises: [
          { type: "multiple_choice", question: "Si alguien se avergüenza y su cara cambia de color, decimos: Se ______ rojo.", options: ["hizo", "volvió", "puso"], correct: 2 },
          { type: "multiple_choice", question: "Él estudió mucho y finalmente ______ abogado.", options: ["se puso", "se hizo", "se quedó"], correct: 1 },
          { type: "multiple_choice", question: "Después del accidente, el hombre ______ ciego.", options: ["se volvió", "se quedó", "se hizo"], correct: 1 },
          { type: "multiple_choice", question: "Era un chico alegre, pero ahora se ______ muy serio.", options: ["ha vuelto", "ha quedado", "se ha convertido"], correct: 0 },
          { type: "multiple_choice", question: "Tras 20 años de esfuerzo, ______ el director general.", options: ["se hizo", "llegó a ser", "se puso"], correct: 1 },
          { type: "multiple_choice", question: "El agua ______ en hielo debido al frío.", options: ["se hizo", "se convirtió", "se puso"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál verbo implica VOLUNTAD y ESFUERZO?", options: ["Ponerse", "Volverse", "Hacerse"], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál verbo implica un RESULTADO (a menudo negativo)?", options: ["Ponerse", "Quedarse", "Volverse"], correct: 1 },
          { type: "multiple_choice", question: "Me ______ triste cuando te vas.", options: ["pongo", "hago", "quedo"], correct: 0 },
          { type: "multiple_choice", question: "Ella ______ budista el año pasado.", options: ["se volvió", "se hizo", "se quedó"], correct: 1 },
          { type: "syntax", turkish: "Kızardı (rojo).", spanish: "Se puso rojo", words: ["Se", "puso", "rojo", "hizo", "quedó"] },
          { type: "syntax", turkish: "Deli oldu (Volverse).", spanish: "Se volvió loco", words: ["Se", "volvió", "loco", "hizo"] },
          { type: "syntax", turkish: "Milyoner oldu (Hacerse).", spanish: "Se hizo millonario", words: ["Se", "hizo", "millonario", "puso"] },
          { type: "syntax", turkish: "Şok oldum (Quedarse).", spanish: "Me quedé de piedra", words: ["Me", "quedé", "de", "piedra", "puse"] },
          { type: "syntax", turkish: "Başkan olmayı başardı (Llegar a ser).", spanish: "Llegó a ser presidente", words: ["Llegó", "a", "ser", "presidente", "hizo"] },
          { type: "syntax", turkish: "Müdür oldu (Hacerse).", spanish: "Se hizo director", words: ["Se", "hizo", "director", "puso"] },
          { type: "syntax", turkish: "Kötüleşti (malo - Volverse).", spanish: "Se volvió malo", words: ["Se", "volvió", "malo", "hizo"] },
          { type: "syntax", turkish: "İşsiz kaldı.", spanish: "Se quedó sin trabajo", words: ["Se", "quedó", "sin", "trabajo", "puso"] },
          { type: "syntax", turkish: "Bir kahramana dönüştü (héroe).", spanish: "Se convirtió en un héroe", words: ["Se", "convirtió", "en", "un", "héroe", "hizo"] },
          { type: "syntax", turkish: "Geç oldu (Hacerse).", spanish: "Se hizo tarde", words: ["Se", "hizo", "tarde", "puso"] }
        ]
      }
    }
  ]
};
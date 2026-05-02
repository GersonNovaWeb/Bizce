/**
 * UNIDAD 11 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: El Boom Latinoamericano (Rulfo, Cortázar, Borges).
 * Tema: Realismo Mágico, tiempo narrativo, neologismos y literatura fantástica.
 */

export const unidad11 = {
  id: "c2_u11",
  title: "Unidad 11: Realismo Mágico II",
  description: "Rompe las reglas de la gramática. Adéntrate en el Boom Latinoamericano, domina la alteración del tiempo y el lenguaje onírico.",
  nodes: [
    {
      id: "c2_u11_n1",
      type: "theory",
      title: "Teoría I: Juan Rulfo y el Tiempo Roto",
      content: {
        concept: "El Boom Latinoamericano (años 60 y 70) revolucionó la literatura. Uno de sus padres fue el mexicano Juan Rulfo con su novela *Pedro Páramo*.\n\n### El Tiempo no es Lineal\nEn las novelas clásicas, el tiempo va hacia adelante. En el Boom, el tiempo es circular o está fracturado. Rulfo mezcla las voces de los muertos y los vivos sin avisar al lector.\n\n### Técnicas Gramaticales C2:\n1. **Uso extremo del Gerundio para crear atmósferas estancadas:**\n*El pueblo estaba allí, **respirando** polvo, **esperando** nada.*\n2. **Salto abrupto de tiempos (Flashback constante):**\nPasar del Indefinido (acción real) al Pluscuamperfecto (memoria) sin conectores temporales lógicos, creando una sensación de sueño (onírica).\n\n🇹🇷 *En turco, la literatura fantástica a veces usa el 'Geniş Zaman' (Geniş zaman) para dar eternidad. En español, Rulfo usa el Pretérito Imperfecto como un eco fantasmagórico.*",
        examples: [
          { es: "Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo.", tr: "Comala'ya geldim çünkü bana burada Pedro Páramo adında birinin, babamın yaşadığını söylediler. (El inicio más famoso de Rulfo)." },
          { es: "El calor nos asfixiaba, un calor que ya había quemado hasta las piedras.", tr: "Sıcak bizi boğuyordu, taşları bile çoktan yakmış olan bir sıcak." }
        ]
      }
    },
    {
      id: "c2_u11_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Estructuras Oníricas)",
      exercises: [
        { type: "syntax", turkish: "Burada babamın yaşadığını söylediler.", spanish: "Me dijeron que acá vivía mi padre", words: ["Me", "dijeron", "que", "acá", "vivía", "mi", "padre", "vivió"] },
        { type: "syntax", turkish: "Pedro Páramo adında (un tal) biri.", spanish: "Un tal Pedro Páramo", words: ["Un", "tal", "Pedro", "Páramo", "el"] },
        { type: "syntax", turkish: "Ölülerin sesleri rüzgarda yankılanıyordu (resonaban).", spanish: "Las voces de los muertos resonaban en el viento", words: ["Las", "voces", "de", "los", "muertos", "resonaban", "en", "el", "viento"] },
        { type: "syntax", turkish: "Zaman durmuş (se había detenido), hiçbir şey ilerlemiyordu.", spanish: "El tiempo se había detenido nada avanzaba", words: ["El", "tiempo", "se", "había", "detenido", "nada", "avanzaba", "avanzó"] },
        { type: "syntax", turkish: "Sanki (como si) dünya taştan yapılmış gibiydi.", spanish: "Era como si el mundo estuviera hecho de piedra", words: ["Era", "como", "si", "el", "mundo", "estuviera", "hecho", "de", "piedra"] },
        { type: "syntax", turkish: "Hatıralar (Los recuerdos) hayaletler (fantasmas) gibi karışırdı (se mezclaban).", spanish: "Los recuerdos se mezclaban como fantasmas", words: ["Los", "recuerdos", "se", "mezclaban", "como", "fantasmas"] },
        { type: "syntax", turkish: "Orada toz (polvo) soluyarak (respirando) bekliyorduk.", spanish: "Estábamos allí respirando polvo", words: ["Estábamos", "allí", "respirando", "polvo", "respirar"] },
        { type: "syntax", turkish: "Yağmurun anılarını silip süpürmesini (borrase) umuyordu.", spanish: "Esperaba que la lluvia borrase sus recuerdos", words: ["Esperaba", "que", "la", "lluvia", "borrase", "sus", "recuerdos"] },
        { type: "syntax", turkish: "Terk edilmiş (abandonado) sokaklarda fısıltılar (susurros) duyuyordum.", spanish: "Escuchaba susurros en las calles abandonadas", words: ["Escuchaba", "susurros", "en", "las", "calles", "abandonadas"] },
        { type: "syntax", turkish: "Karanlık o kadar kalındı ki (tan densa que) kesilebilirdi (se podía cortar).", spanish: "La oscuridad era tan densa que se podía cortar", words: ["La", "oscuridad", "era", "tan", "densa", "que", "se", "podía", "cortar"] }
      ]
    },
    {
      id: "c2_u11_n3",
      type: "theory",
      title: "Teoría II: Cortázar y la Gramática Inventada",
      content: {
        concept: "Julio Cortázar (Argentina) escribió 'Rayuela', una novela que puedes leer saltando capítulos en el orden que quieras.\n\n### El Gíglico (Neologismos Literarios)\nCortázar inventó un idioma llamado *Gíglico*, donde las palabras no existen en el diccionario, pero suenan tan españolas y evocadoras que el cerebro entiende el contexto (especialmente erótico o emocional) gracias a la sintaxis y los sufijos.\n\n*Ejemplo real de Rayuela:*\n'Apenas él le amalaba el noema, a ella se le agolpaba el clemiso y caían en hidromurias...'\n\n**¿Por qué estudiamos esto en C2?**\nPorque demuestra que la fluidez definitiva no está en el vocabulario, sino en **la intuición de las terminaciones**. Sabes que 'amalaba' es un verbo imperfecto por el '-aba', que 'el noema' es un sustantivo masculino por el artículo, y que 'caían' arrastra a ambos a una acción plural.",
        examples: [
          { es: "Se dejaban llevar por las hidromurias.", tr: "Kendilerini hidromurialara (hayali, akışkan bir his/deneyim) bırakıyorlardı." },
          { es: "Temblaba el troc, se vencían las marioplumas...", tr: "Trok titriyordu, mariotüyleri (hayali nesneler) teslim oluyordu..." }
        ]
      }
    },
    {
      id: "c2_u11_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Fluir de la Conciencia)",
      exercises: [
        { type: "speaking", spanish: "Vine a Comala porque me dijeron que acá vivía mi padre", turkish: "Comala'ya geldim çünkü bana babamın burada yaşadığını söylediler." },
        { type: "speaking", spanish: "Era como si el tiempo hubiera dado una vuelta en redondo", turkish: "Sanki zaman kendi etrafında tam bir tur atmış gibiydi (Yüzyıllık Yalnızlık)." },
        { type: "speaking", spanish: "Apenas él le amalaba el noema ella sonreía", turkish: "Adam onun noemasını amalar amalamaz kadın gülümsedi (Cortázar/Gíglico)." },
        { type: "speaking", spanish: "Los murmullos parecían salir de las piedras", turkish: "Mırıltılar taşlardan çıkıyor gibi görünüyordu." },
        { type: "speaking", spanish: "Nadie sabe de qué lado de los espejos estamos", turkish: "Kimse aynaların hangi tarafında olduğumuzu bilmiyor." },
        { type: "speaking", spanish: "En ese pueblo los muertos respiran más fuerte que los vivos", turkish: "O kasabada ölüler yaşayanlardan daha sesli nefes alıyor." },
        { type: "speaking", spanish: "La memoria es un jardín cerrado con llave", turkish: "Hafıza, kilitli kapalı bir bahçedir." },
        { type: "speaking", spanish: "Buscaba su propio rostro en los charcos de lluvia", turkish: "Su birikintilerinde kendi yüzünü arıyordu." },
        { type: "speaking", spanish: "El laberinto no tenía centro solo pasillos infinitos", turkish: "Labirentin merkezi yoktu, sadece sonsuz koridorları vardı." },
        { type: "speaking", spanish: "Cien años de soledad no bastan para perdonar", turkish: "Yüzyıllık yalnızlık affetmek için yetmez." }
      ]
    },
    {
      id: "c2_u11_n5",
      type: "theory",
      title: "El Reto Turco: La Metáfora Ontológica",
      content: {
        concept: "En el nivel C2, no traduces ideas, traduces **filosofía**. \n\n🇹🇷 En turco, el misticismo suele expresarse mediante adjetivos o participios poéticos (*Görünmez rüzgar, Sessiz karanlık*).\n\n🇪🇸 En la literatura del Boom, se usa la **Metáfora Ontológica**: se le dan atributos de cosas físicas a conceptos abstractos (el tiempo, la soledad, la memoria).\n• ❌ *Una soledad muy grande* (Pobre).\n• ✅ *Una soledad que pesaba como el plomo* (Kurşun gibi ağır gelen bir yalnızlık).\n• ✅ *El tiempo se oxidaba en las paredes* (Zaman duvarlarda paslanıyordu).\n\nPara sonar como un novelista hispano, coge un sentimiento y ponle un verbo de acción destructiva o física (oxidar, morder, pesar, derretir).",
        examples: [
          { es: "La tristeza le devoraba las entrañas.", tr: "Üzüntü onun içini (bağırsaklarını) kemiriyordu/yiyordu." },
          { es: "El calor derretía los pensamientos de los habitantes.", tr: "Sıcak, sakinlerin düşüncelerini eritiyordu." }
        ]
      }
    },
    {
      id: "c2_u11_n6",
      type: "reading",
      title: "Lectura Crítica: Ecos de Comala",
      content: {
        text: "Caminé por las calles polvorientas del pueblo, buscando la casa de la que mi madre tanto me había hablado. El aire estaba tan estancado que parecía haber olvidado cómo soplar. No había perros ladrando ni niños corriendo; solo el susurro de las puertas de madera crujiendo al ritmo de un viento fantasma.\n\nMe detuve frente a una mujer vestida de luto que barría la nada frente a su portal.\n—¿Busca a los vivos o a los muertos? —preguntó, sin levantar la vista del suelo.\n—Busco a mi pasado —respondí, sintiendo que el sol me oxidaba la garganta.\nElla dejó la escoba y me miró con unos ojos vacíos de tiempo. \n—Entonces llega usted tarde. Aquí, el pasado se nos murió de sed hace muchos años. Solo quedamos los que no supimos encontrar el camino al infierno.",
        translation: "Tozlu kasaba sokaklarında, annemin bana o kadar çok bahsettiği evi arayarak yürüdüm. Havanın durgunluğundan esmeyi unutmuş gibiydi. Havlayan köpekler ya da koşan çocuklar yoktu; sadece hayalet bir rüzgarın ritmiyle çatırdıyan ahşap kapıların fısıltısı vardı.\n\nKapısının önünde hiçliği süpüren yaslı bir kadının önünde durdum.\n—Yaşayanları mı arıyorsunuz yoksa ölüleri mi? —diye sordu, bakışlarını yerden kaldırmadan.\n—Geçmişimi arıyorum —diye cevap verdim, güneşin boğazımı paslandırdığını hissederek.\nSüpürgeyi bıraktı ve zamandan yoksun gözlerle bana baktı.\n—Öyleyse geç kaldınız. Burada geçmiş, yıllar önce susuzluktan öldü. Geriye sadece cehenneme giden yolu bulamayan bizler kaldık."
      }
    },
    {
      id: "c2_u11_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto Literario",
      exercises: [
        { type: "syntax", turkish: "Hava o kadar durgundu ki (estancado) esmeyi unutmuş gibiydi.", spanish: "El aire estaba tan estancado que parecía haber olvidado cómo soplar", words: ["El", "aire", "estaba", "tan", "estancado", "que", "parecía", "haber", "olvidado", "cómo", "soplar"] },
        { type: "syntax", turkish: "Geçmiş susuzluktan (de sed) öldü.", spanish: "El pasado murió de sed", words: ["El", "pasado", "murió", "de", "sed", "muerto"] },
        { type: "syntax", turkish: "Sadece cehenneme (al infierno) giden yolu bulamayan bizler kaldık.", spanish: "Solo quedamos los que no supimos encontrar el camino al infierno", words: ["Solo", "quedamos", "los", "que", "no", "supimos", "encontrar", "el", "camino", "al", "infierno"] },
        { type: "syntax", turkish: "Yaslı (de luto) kadın hiçliği (la nada) süpürüyordu (barría).", spanish: "La mujer de luto barría la nada", words: ["La", "mujer", "de", "luto", "barría", "la", "nada"] },
        { type: "syntax", turkish: "Güneşin boğazımı paslandırdığını (oxidaba) hissederek...", spanish: "Sintiendo que el sol me oxidaba la garganta", words: ["Sintiendo", "que", "el", "sol", "me", "oxidaba", "la", "garganta"] },
        { type: "speaking", spanish: "Caminé por las calles polvorientas buscando mi pasado", turkish: "Geçmişimi arayarak tozlu sokaklarda yürüdüm." },
        { type: "speaking", spanish: "Los muertos respiran el mismo aire que los vivos", turkish: "Ölüler yaşayanlarla aynı havayı soluyor." },
        { type: "speaking", spanish: "Ella me miró con unos ojos vacíos de tiempo", turkish: "Bana zamandan yoksun (boş) gözlerle baktı." },
        { type: "speaking", spanish: "El tiempo se oxidaba en las paredes", turkish: "Zaman duvarlarda paslanıyordu." },
        { type: "speaking", spanish: "Era un pueblo olvidado por la mano de Dios", turkish: "Tanrı'nın eli tarafından unutulmuş bir kasabaydı." }
      ]
    },
    {
      id: "c2_u11_n8",
      type: "theory",
      title: "Teoría III: Borges y lo Metafísico",
      content: {
        concept: "Jorge Luis Borges (Argentina) requiere una mención especial. A diferencia de Rulfo (tierra, polvo, fantasmas rústicos), Borges construye universos fríos, matemáticos e infinitos.\n\n### El Léxico Borgiano:\n• **El laberinto:** La realidad como un rompecabezas sin salida.\n• **El espejo:** La dualidad, la copia falsa de la realidad, la identidad rota.\n• **La eternidad / Lo infinito:** La angustia de un tiempo sin fin.\n• **El azar:** La falta de control divino, el universo como un juego de dados ciego.\n\n### Estilo Sintáctico C2:\nBorges suele unir un concepto filosófico con un adjetivo muy físico y cortante.\n• *'La vertiginosa simetría'* (Baş döndürücü simetri).\n• *'Un libro de arena'* (Kumdan bir kitap - que no tiene principio ni fin).",
        examples: [
          { es: "Los espejos y la cópula son abominables, porque multiplican el número de los hombres.", tr: "Aynalar ve çiftleşme iğrençtir, çünkü insanların sayısını çoğaltırlar. (Cita famosa de Tlön, Uqbar, Orbis Tertius)." },
          { es: "El tiempo es un tigre que me destroza, pero yo soy el tigre.", tr: "Zaman beni parçalayan bir kaplandır, ama ben o kaplanım." }
        ]
      }
    },
    {
      id: "c2_u11_n9",
      type: "theory",
      title: "Sintaxis Visual: El Párrafo Infinito",
      content: {
        concept: "Deconstruiremos una frase puramente borgiana, donde la identidad y el tiempo se disuelven en un laberinto gramatical.",
        examples: [{ es: "Yo, que tantos hombres he sido, jamás he sido aquel en cuyo abrazo mi destino se resolviera.", tr: "Ben, ki bunca adam oldum, kaderimin kucağında çözüleceği o adam (kişi) asla olamadım." }],
        analysis: [
          { word: "Yo,", type: "pronoun", literal: "Ben,", explanation: "Sujeto aislado, estableciendo el foco existencial.", examples: [] },
          { word: "que tantos hombres", type: "noun", literal: "ki onca adam", explanation: "Cláusula relativa que rompe la identidad única del sujeto.", examples: [] },
          { word: "he sido,", type: "verb", literal: "oldum (olmuşumdur),", explanation: "Pretérito Perfecto. Cierra el inciso sobre las múltiples vidas pasadas.", examples: [] },
          { word: "jamás he sido", type: "verb", literal: "asla olmadım", explanation: "Verbo principal de la oración, ligado al 'Yo' inicial.", examples: [] },
          { word: "aquel", type: "pronoun", literal: "o (kişi)", explanation: "Pronombre demostrativo que apunta a un ideal inalcanzable.", examples: [] },
          { word: "en cuyo abrazo", type: "noun", literal: "ki onun kucağında (sarılmasında)", explanation: "Relativo de pertenencia (cuyo) en una estructura poética.", examples: [] },
          { word: "mi destino", type: "noun", literal: "kaderim", explanation: "El objeto central del deseo.", examples: [] },
          { word: "se resolviera.", type: "verb", literal: "çözüleceği (subjuntivo)", explanation: "Subjuntivo Imperfecto (-ra). Se usa porque ese abrazo ideal nunca existió en la realidad, es puramente irreal." }
        ]
      }
    },
    {
      id: "c2_u11_n10",
      type: "theory",
      title: "Caja de Herramientas: Lo Onírico y lo Terrenal",
      content: {
        concept: "El vocabulario supremo del C2 para escribir relatos mágicos o filosóficos.\n\n• **Onírico / El sueño** (Rüya gibi / Rüya dünyasına ait).\n• **Estancado** (Durgun / İlerlemeyen) ➔ *Aire estancado.*\n• **El susurro / Susurrar** (Fısıltı / Fısıldamak).\n• **Crujir / El crujido** (Çatırdamak / Çatırtı - madera o huesos).\n• **Polvoriento** (Tozlu).\n• **El espejismo** (Serap / Yanılsama).\n• **Vertiginoso** (Baş döndürücü).\n• **Inescrutable** (Anlaşılmaz / İçyüzü bilinemeyen).\n• **La penumbra** (Alacakaranlık / Yarı karanlık).\n• **Desvanecerse** (Yok olmak / Gözden kaybolmak).",
        examples: [
          { es: "La figura de la mujer se desvaneció como un espejismo en la penumbra.", tr: "Kadının silüeti alacakaranlıkta bir serap gibi kayboldu." },
          { es: "Había un silencio inescrutable y onírico en aquel pasillo.", tr: "O koridorda anlaşılmaz ve rüya gibi bir sessizlik vardı." }
        ]
      }
    },
    {
      id: "c2_u11_n11",
      type: "theory",
      title: "Taller de Producción: Tu Relato Mágico",
      content: {
        concept: "Escribe como los maestros del Boom.\n\n**Instrucciones:**\nRedacta un párrafo corto (10-15 líneas) ambientado en un lugar donde el tiempo no funciona de forma normal.\n1. Usa el **Imperfecto** para pintar un escenario estancado.\n2. Incluye un elemento de **Realismo Mágico** (lluvia de ceniza, gente que flota, relojes que van hacia atrás) descrito como si fuera algo muy cotidiano.\n3. Usa al menos tres palabras de la Caja de Herramientas (onírico, penumbra, desvanecerse, crujir).\n4. Usa un 'Cuyo/a' o una forma en '-SE' del subjuntivo.\n\n**Inspiración:** 'Eran las tres de la tarde y el sol quemaba las calles de Estambul. De repente, los gatos del barrio comenzaron a elevarse lentamente hacia el cielo. Ningún vecino se sorprendió; era una costumbre antigua que...'",
        examples: []
      }
    },
    {
      id: "c2_u11_n12",
      type: "exam",
      title: "Examen de Unidad: Realismo Mágico II",
      content: {
        concept: "Demuestra tu capacidad de interpretar el tiempo no lineal, el vocabulario literario denso y las metáforas ontológicas.",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es el principal rasgo del Realismo Mágico frente a la fantasía tradicional?", options: ["Usa elfos y dragones.", "Relata eventos imposibles o mágicos con un tono de absoluta normalidad.", "Ocurre siempre en el futuro."], correct: 1 },
          { type: "multiple_choice", question: "Si digo 'El calor derretía los pensamientos', estoy usando:", options: ["Una metáfora ontológica (dando atributos físicos a lo abstracto).", "Un neologismo.", "Un arcaísmo cervantino."], correct: 0 },
          { type: "multiple_choice", question: "¿Qué autor argentino es famoso por sus temas de laberintos, espejos e infinitos?", options: ["Juan Rulfo", "Gabriel García Márquez", "Jorge Luis Borges"], correct: 2 },
          { type: "multiple_choice", question: "El 'Gíglico' inventado por Julio Cortázar demuestra que:", options: ["El español necesita más palabras.", "La sintaxis y las terminaciones verbales nos permiten entender el contexto aunque las palabras no existan.", "Es imposible leer en C2."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Onírico'?", options: ["Relativo a los sueños o con atmósfera de sueño.", "De color negro oscuro.", "Muy ruidoso."], correct: 0 },
          { type: "multiple_choice", question: "En un relato de Rulfo, si dice 'El tiempo se había estancado', significa que:", options: ["El reloj se rompió.", "El tiempo no avanzaba, daba sensación de inmovilidad y muerte.", "Hacía mucho calor."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Desvanecerse'?", options: ["Büyümek", "Gözden kaybolmak / Yok olmak", "Çatırdamak"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Crujir'?", options: ["Ağlamak", "Ahşabın veya kemiklerin çatırdaması.", "Fısıldamak"], correct: 1 },
          { type: "multiple_choice", question: "Completa la frase literaria: 'Un ______ de muerte gobernaba el pueblo'.", options: ["ruido", "espejismo", "silencio"], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál de estos es un sustantivo típicamente borgiano?", options: ["El laberinto", "La salsa", "El ordenador"], correct: 0 },
          { type: "syntax", turkish: "Sanki dünya taştan yapılmış gibiydi (fuera/estuviera).", spanish: "Era como si el mundo estuviera hecho de piedra", words: ["Era", "como", "si", "el", "mundo", "estuviera", "hecho", "de", "piedra"] },
          { type: "syntax", turkish: "Anlaşılmaz (inescrutable) aynaların labirentinde...", spanish: "En el laberinto inescrutable de los espejos", words: ["En", "el", "laberinto", "inescrutable", "de", "los", "espejos"] },
          { type: "syntax", turkish: "Gölgesi (su sombra) alacakaranlıkta (la penumbra) gözden kayboldu (desvanecerse).", spanish: "Su sombra se desvaneció en la penumbra", words: ["Su", "sombra", "se", "desvaneció", "en", "la", "penumbra", "desvaneció"] },
          { type: "syntax", turkish: "Eğer bana bakmış olsaydı (hubiese) ölmezdim.", spanish: "Si me hubiese mirado no habría muerto", words: ["Si", "me", "hubiese", "mirado", "no", "habría", "muerto", "había"] },
          { type: "syntax", turkish: "Ölülerin fısıltıları (los susurros) havada çatırdıyordu (crujir).", spanish: "Los susurros de los muertos crujían en el aire", words: ["Los", "susurros", "de", "los", "muertos", "crujían", "en", "el", "aire"] },
          { type: "syntax", turkish: "Rüya gibi (onírico) ve durgun (estancado) bir manzaraydı.", spanish: "Era un paisaje onírico y estancado", words: ["Era", "un", "paisaje", "onírico", "y", "estancado", "fue"] },
          { type: "syntax", turkish: "Yağmurun anılarını silip süpürmesini umuyordu (Subj. en -se).", spanish: "Esperaba que la lluvia borrase sus recuerdos", words: ["Esperaba", "que", "la", "lluvia", "borrase", "sus", "recuerdos", "borraba"] },
          { type: "syntax", turkish: "Sanki geçmiş hiç var olmamış gibi (como si nunca hubiese existido).", spanish: "Como si el pasado nunca hubiese existido", words: ["Como", "si", "el", "pasado", "nunca", "hubiese", "existido"] },
          { type: "syntax", turkish: "Baş döndürücü (vertiginosa) simetri beni korkuttu.", spanish: "La vertiginosa simetría me asustó", words: ["La", "vertiginosa", "simetría", "me", "asustó"] },
          { type: "syntax", turkish: "Onun o adam (aquel) olduğuna inanamıyordum.", spanish: "No podía creer que él fuese aquel hombre", words: ["No", "podía", "creer", "que", "él", "fuese", "aquel", "hombre"] }
        ]
      }
    }
  ]
};
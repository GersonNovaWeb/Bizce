/**
 * UNIDAD 4: LOS REBELDES DEL PASADO I (NIVEL A2)
 * Enfoque: Indefinido Irregular (Grupos U e I)
 * Estructura: 12 Nodos con Teoría Extensa e Intercalada
 */

export const unidad4 = {
  id: "a2_u4",
  title: "Unidad 4: Los Rebeldes del Pasado I",
  description: "Dominio de las raíces fuertes (U/I) en el pasado: Estar, Tener, Hacer, Querer y Venir.",
  nodes: [
    {
      id: "a2_u4_n1",
      type: "theory",
      title: "Teoría I: El Club de la 'U' (Raíces Fuertes)",
      content: {
        concept: "Hasta ahora, en el pasado Indefinido (Unidad 3), solo cambiábamos la terminación. Pero hay un grupo de verbos 'rebeldes' que cambian su propia raíz (el cuerpo de la palabra) antes de añadir la terminación.\n\n### 1. ¿Por qué cambian?\nEstos verbos son los más antiguos y usados del español. Su raíz se transformó para sonar más fuerte. A este grupo lo llamamos el **Grupo U** porque todos ganan una 'U' en su raíz.\n\n**Las nuevas raíces (Memorizar):**\n• **Tener** ➔ **TUV-** (Tuv-e, tuv-iste...)\n• **Estar** ➔ **ESTUV-** (Estuv-e, estuv-iste...)\n• **Poder** ➔ **PUD-** (Pud-e, pud-iste...)\n• **Saber** ➔ **SUP-** (Sup-e, sup-iste...)\n• **Poner** ➔ **PUS-** (Pus-e, pus-iste...)\n\n### 2. Las terminaciones 'Especiales'\n⚠️ IMPORTANTE: Estos verbos NO usan las terminaciones de los regulares. Usan unas terminaciones híbridas y **NUNCA llevan tilde**.\n\n• Yo **-E** (Tuve)\n• Tú **-ISTE** (Tuviste)\n• Él/Ella **-O** (Tuvo)\n• Nosotros **-IMOS** (Tuvimos)\n• Ellos **-IERON** (Tuvieron)\n\n🇹🇷 LÓGICA TURCA: Es similar a cuando en turco cambias la raíz por eufonía, pero aquí es más radical. No digas 'Tenido', di 'Tuve'.",
        examples: [
          { es: "Ayer tuve mucho trabajo.", tr: "Dün çok işim vardı (sahiptim)." },
          { es: "No pude ir a la fiesta.", tr: "Partiye gidemedim." },
          { es: "Estuvimos en Madrid el mes pasado.", tr: "Geçen ay Madrid'deydik (bulunduk)." }
        ]
      }
    },
    {
      id: "a2_u4_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Grupo U)",
      exercises: [
        { type: "syntax", turkish: "Dün bir problemim vardı (Tener).", spanish: "Ayer tuve un problema", words: ["Ayer", "tuve", "un", "problema", "tení", "tenido"] },
        { type: "syntax", turkish: "Neredeydin? (Estar)", spanish: "Dónde estuviste tú", words: ["Dónde", "estuviste", "tú", "estabas", "estar"] },
        { type: "syntax", turkish: "Bunu yapamadım (Poder).", spanish: "No pude hacer esto", words: ["No", "pude", "hacer", "esto", "podí"] },
        { type: "syntax", turkish: "Gerçeği biliyorduk (Saber - enterarse).", spanish: "Nosotros supimos la verdad", words: ["Nosotros", "supimos", "la", "verdad", "sabíamos"] },
        { type: "syntax", turkish: "Kitabı masaya koydum (Poner).", spanish: "Puse el libro en la mesa", words: ["Puse", "el", "libro", "en", "la", "mesa", "poní"] },
        { type: "syntax", turkish: "Onlar dün evdeydiler.", spanish: "Ellos estuvieron en casa ayer", words: ["Ellos", "estuvieron", "en", "casa", "ayer"] },
        { type: "syntax", turkish: "Senin çok vaktin vardı.", spanish: "Tú tuviste mucho tiempo", words: ["Tú", "tuviste", "mucho", "tiempo", "teniste"] },
        { type: "syntax", turkish: "Siz (formal) bunu yapabildiniz.", spanish: "Usted pudo hacer esto", words: ["Usted", "pudo", "hacer", "esto", "poder"] },
        { type: "syntax", turkish: "Biz haberi dün öğrendik (Saber).", spanish: "Supimos la noticia ayer", words: ["Supimos", "la", "noticia", "ayer", "sabimos"] },
        { type: "syntax", turkish: "Anahtarları çantaya koydular.", spanish: "Pusieron las llaves en el bolso", words: ["Pusieron", "las", "llaves", "en", "el", "bolso"] },
        { type: "syntax", turkish: "Carlos bütün gün ofisteydi.", spanish: "Carlos estuvo en la oficina todo el día", words: ["Carlos", "estuvo", "en", "la", "oficina", "todo", "el", "día"] },
        { type: "syntax", turkish: "Onların bir köpeği vardı.", spanish: "Ellos tuvieron un perro", words: ["Ellos", "tuvieron", "un", "perro", "tenieron"] },
        { type: "syntax", turkish: "Sınava girebildik.", spanish: "Pudimos hacer el examen", words: ["Pudimos", "hacer", "el", "examen", "podemos"] },
        { type: "syntax", turkish: "Gözlüklerimi nereye koydun?", spanish: "Dónde pusiste mis gafas", words: ["Dónde", "pusiste", "mis", "gafas", "poniste"] },
        { type: "syntax", turkish: "Adını dün öğrendim (Saber).", spanish: "Supe tu nombre ayer", words: ["Supe", "tu", "nombre", "ayer", "sabí"] }
      ]
    },
    {
      id: "a2_u4_n3",
      type: "theory",
      title: "Teoría II: El Club de la 'I' y la trampa de 'Hizo'",
      content: {
        concept: "Después de la 'U', vienen los verbos que ganan una **'I'** en su raíz. Son menos, pero son fundamentales.\n\n**Las nuevas raíces:**\n• **Hacer** ➔ **HIC-** (Hic-e, hic-iste...)\n• **Querer** ➔ **QUIS-** (Quis-e, quis-iste...)\n• **Venir** ➔ **VIN-** (Vin-e, vin-iste...)\n\n### 🚨 LA TRAMPA DE LA 'Z' (Hacer):\nEn español, la 'C' delante de la 'O' suena fuerte (como 'K'). Para que el verbo *Hacer* mantenga su sonido suave de 'S' en la tercera persona, cambiamos la 'C' por una **'Z'**.\n• *Él/Ella* ➔ **HIZO**. (No 'hico').\n\n### Significado especial de QUERER:\nEn presente, 'Quiero' es 'istiyorum'. Pero en pasado Indefinido, **'Quise'** suele significar 'intenté' (denedim) y **'No quise'** significa 'me negué' (reddettim).",
        examples: [
          { es: "Él hizo un pastel delicioso.", tr: "O lezzetli bir pasta yaptı." },
          { es: "Quise llamarte pero no tuve tiempo.", tr: "Seni aramayı denedim (istedim) ama vaktim olmadı." },
          { es: "Mis amigos vinieron a mi casa ayer.", tr: "Arkadaşlarım dün evime geldiler." }
        ]
      }
    },
    {
      id: "a2_u4_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Ritmo Irregular)",
      exercises: [
        { type: "speaking", spanish: "Hice la cena ayer", turkish: "Dün akşam yemeğini yaptım." },
        { type: "speaking", spanish: "Él hizo el trabajo", turkish: "O işi yaptı." },
        { type: "speaking", spanish: "Quise decir la verdad", turkish: "Doğruyu söylemek istedim." },
        { type: "speaking", spanish: "Ellos vinieron tarde", turkish: "Onlar geç geldiler." },
        { type: "speaking", spanish: "Tuviste un problema", turkish: "Bir problemin vardı." },
        { type: "speaking", spanish: "No pude dormir anoche", turkish: "Dün gece uyuyamadım." },
        { type: "speaking", spanish: "Estuvimos muy felices", turkish: "Çok mutluyduk." },
        { type: "speaking", spanish: "Él me puso nervioso", turkish: "O beni gerdi (sinirlendirdi)." },
        { type: "speaking", spanish: "Viniste a Madrid", turkish: "Madrid'e geldin." },
        { type: "speaking", spanish: "No quise comer carne", turkish: "Et yemek istemedim (reddettim)." },
        { type: "speaking", spanish: "Supimos la noticia hoy", turkish: "Haberi bugün öğrendik." },
        { type: "speaking", spanish: "Pusieron la radio", turkish: "Radyoyu açtılar (koydular)." },
        { type: "speaking", spanish: "Tuvimos una idea", turkish: "Bir fikrimiz vardı." },
        { type: "speaking", spanish: "Ella hizo las maletas", turkish: "O valizleri hazırladı (yaptı)." },
        { type: "speaking", spanish: "Quisiste comprar pan", turkish: "Ekmek satın almak istedin." }
      ]
    },
    {
      id: "a2_u4_n5",
      type: "theory",
      title: "Teoría III: ¿Saber o Poder? (Cambio de sentido)",
      content: {
        concept: "Cuando estos verbos irregulares entran en el Pretérito Indefinido, su significado cambia ligeramente comparado con el presente.\n\n### 1. SABER (Enterarse)\n• Presente: *Sé la verdad* (Gerçeği biliyorum).\n• Indefinido: *Supe la verdad* (Gerçeği **öğrendim**). Indica el momento exacto en que recibiste la información.\n\n### 2. PODER (Lograr)\n• Presente: *Puedo hacerlo* (Yapabilirim).\n• Indefinido: *Pude hacerlo* (Onu yapmayı **başardım**). Implica que hubo un esfuerzo y lo conseguiste.\n• Negativo: *No pude hacerlo* (Onu yapamadım / **Başaramadım**).\n\n### 3. TENER (Tener lugar / Recibir)\n• Indefinido: *Tuve un mensaje* (Bir mesaj aldım) o *Tuve un accidente* (Kaza geçirdim).",
        examples: [
          { es: "Ayer supe que estás embarazada.", tr: "Dün hamile olduğunu öğrendim." },
          { es: "Por fin pude abrir la caja.", tr: "Nihayet kutuyu açabildim (başardım)." },
          { es: "A las cinco tuvo una reunión.", tr: "Saat beşte bir toplantısı vardı (gerçekleşti)." }
        ]
      }
    },
    {
      id: "a2_u4_n6",
      type: "reading",
      title: "Lectura y Audio: Una noche de emergencia",
      content: {
        text: "Anoche fue una noche muy difícil. Primero, yo estuve en la biblioteca hasta tarde porque tuve que estudiar para un examen. Cuando quise volver a casa, no pude arrancar mi coche.\n\nLlamé a mi hermano, pero él no pudo venir porque tuvo una cena de trabajo. Entonces, puse mis cosas en el bolso y caminé hacia la parada del autobús. De repente, supe que no tuve mis llaves conmigo. ¡Qué desastre! \n\nAl final, mi amiga Elena vino a buscarme en su coche. Ella hizo un gran esfuerzo porque vive muy lejos. Cuando llegué a casa, puse la calefacción y por fin pude descansar.",
        translation: "Dün gece çok zor bir geceydi. İlk olarak, bir sınava çalışmam gerektiği için geç saate kadar kütüphanedeydim. Eve dönmek istediğimde arabamı çalıştıramadım.\n\nAbimi aradım ama iş yemeği olduğu için gelemedi. Sonra eşyalarımı çantaya koydum ve otobüs durağına doğru yürüdim. Aniden, anahtarlarımın yanımda olmadığını anladım (öğrendim). Ne felaket!\n\nSonunda arkadaşım Elena beni arabasıyla almaya geldi. Çok uzakta yaşadığı için büyük bir çaba gösterdi (yaptı). Eve vardığımda kaloriferi açtım (koydum) ve nihayet dinlenebildim."
      }
    },
    {
      id: "a2_u4_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (20 Mixtos)",
      exercises: [
        { type: "syntax", turkish: "Dün her şeyi öğrendim (Saber).", spanish: "Ayer lo supe todo", words: ["Ayer", "lo", "supe", "todo", "sabí", "sabido"] },
        { type: "syntax", turkish: "O (erkek) ödevlerini yaptı.", spanish: "Él hizo sus deberes", words: ["Él", "hizo", "sus", "deberes", "haco", "hico"] },
        { type: "syntax", turkish: "Biz partiye gelmedik (Venir).", spanish: "Nosotros no vinimos a la fiesta", words: ["Nosotros", "no", "vinimos", "a", "la", "fiesta", "venimos"] },
        { type: "syntax", turkish: "Onu masaya koydun mu? (Poner)", spanish: "Lo pusiste en la mesa", words: ["Lo", "pusiste", "en", "la", "mesa", "poniste"] },
        { type: "syntax", turkish: "Kız kardeşim çok vaktine sahipti (Tener).", spanish: "Mi hermana tuvo mucho tiempo", words: ["Mi", "hermana", "tuvo", "mucho", "tiempo", "tenió"] },
        { type: "syntax", turkish: "Geçen hafta ofisteydik.", spanish: "Estuvimos en la oficina la semana pasada", words: ["Estuvimos", "en", "la", "oficina", "la", "semana", "pasada"] },
        { type: "syntax", turkish: "Bunu yapabildin mi?", spanish: "Pudiste hacer esto", words: ["Pudiste", "hacer", "esto", "podiste"] },
        { type: "syntax", turkish: "Seni aramayı denedim (Querer).", spanish: "Quise llamarte", words: ["Quise", "llamarte", "querí", "querido"] },
        { type: "syntax", turkish: "O (kadın) çok yemek yaptı.", spanish: "Ella hizo mucha comida", words: ["Ella", "hizo", "mucha", "comida", "haco"] },
        { type: "syntax", turkish: "Anahtarları buraya koydular.", spanish: "Pusieron las llaves aquí", words: ["Pusieron", "las", "llaves", "aquí", "ponieron"] },
        { type: "speaking", spanish: "Supe la verdad ayer", turkish: "Gerçeği dün öğrendim." },
        { type: "speaking", spanish: "Él hizo un pastel delicioso", turkish: "O lezzetli bir pasta yaptı." },
        { type: "speaking", spanish: "No pudimos ir al cine", turkish: "Sinemaya gidemedik." },
        { type: "speaking", spanish: "Tuviste mucha suerte", turkish: "Çok şanslıydın." },
        { type: "speaking", spanish: "Estuvieron en Turquía un mes", turkish: "Bir ay Türkiye'de kaldılar." },
        { type: "speaking", spanish: "Ella vino a mi oficina", turkish: "O benim ofisime geldi." },
        { type: "speaking", spanish: "Quise comprar un coche", turkish: "Bir araba satın almak istedim." },
        { type: "speaking", spanish: "Puse la mesa para cenar", turkish: "Akşam yemeği için masayı kurdum." },
        { type: "speaking", spanish: "Hicimos mucho deporte hoy", turkish: "Bugün çok spor yaptık." },
        { type: "speaking", spanish: "No quisieron decir nada", turkish: "Hiçbir şey söylemek istemedidiler." }
      ]
    },
    {
      id: "a2_u4_n8",
      type: "theory",
      title: "Teoría IV: Trucos de Memoria para Irregulares",
      content: {
        concept: "A estas alturas, tu cabeza puede estar llena de raíces nuevas. Vamos a organizarlas para que no las olvides nunca.\n\n### 1. El Truco del Ritmo\nTodos los irregulares de este grupo suenan igual en las terminaciones: **-e, -iste, -o, -imos, -ieron**. \nCanta estas tres raíces juntas: *Tuv-e, Pud-e, Sup-e*. Tienen la misma música.\n\n### 2. Evita el 'Efecto Turco'\nEn turco, la raíz de un verbo es sagrada. En español, no tengas miedo de 'romper' el verbo. \n• ¿Ves 'Tener'? Olvida la 'n'. Piensa en **TUV-**.\n• ¿Ves 'Hacer'? Olvida la 'a'. Piensa en **HIC-**.\n\n### 3. Errores Prohibidos:\n❌ 'Hici' (Error en Yo): Correcto es **Hice**.\n❌ 'Hizieron' (Error en Ellos): La 'Z' solo aparece en **Hizo** (Él). En el resto vuelve la 'C'.",
        examples: [
          { es: "Yo hice (Ben yaptım).", tr: "C harfi ile." },
          { es: "Él hizo (O yaptı).", tr: "Z harfi ile (Özel durum)." },
          { es: "Ellos hicieron (Onlar yaptılar).", tr: "Yine C harfi ile." }
        ]
      }
    },
    {
      id: "a2_u4_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Cambio de Raíz",
      content: {
        concept: "Analizaremos cómo una frase puede cambiar drásticamente entre presente e indefinido irregular. Mira cómo la raíz 'hace' se transforma en 'hiz' para mantener el sonido.",
        examples: [{ es: "Ayer mi novio hizo una cena especial para nosotros.", tr: "Dün erkek arkadaşım bizim için özel bir akşam yemeği yaptı." }],
        analysis: [
          { word: "Ayer", type: "adverb", literal: "Dün", explanation: "Marcador de pasado cerrado.", examples: [] },
          { word: "mi novio", type: "noun", literal: "erkek arkadaşım", explanation: "Sujeto masculino singular.", examples: [] },
          { word: "hizo", type: "verb", literal: "yaptı", explanation: "Verbo HACER en Indefinido (3ª persona). Cambia C por Z para sonar suave y NO lleva tilde.", examples: [] },
          { word: "una cena", type: "noun", literal: "bir akşam yemeği", explanation: "Objeto directo.", examples: [] },
          { word: "especial", type: "adjective", literal: "özel", explanation: "Adjetivo calificativo.", examples: [] },
          { word: "para nosotros", type: "pronoun", literal: "bizim için", explanation: "Complemento de beneficiario.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u4_n10",
      type: "theory",
      title: "Caja de Herramientas: Accidentes y Sorpresas",
      content: {
        concept: "Los verbos irregulares se usan mucho para contar cosas inesperadas. Aquí tienes vocabulario útil:\n\n• **El accidente** (Kaza)\n• **La avería** (Arıza)\n• **La maleta** (Valiz)\n• **Llamar por teléfono** (Telefonla aramak)\n• **Estar perdido/a** (Kaybolmuş olmak)\n• **Tener suerte** (Şanslı olmak)\n• **Hacer un esfuerzo** (Çaba sarf etmek)\n• **Saber la noticia** (Haberi almak/öğrenmek)",
        examples: [
          { es: "Tuve una avería en el coche.", tr: "Arabada bir arıza yaşadım." },
          { es: "Hice un esfuerzo para venir.", tr: "Gelmek için çaba sarf ettim." },
          { es: "Por fin supe la verdad.", tr: "Nihayet gerçeği öğrendim." }
        ]
      }
    },
    {
      id: "a2_u4_n11",
      type: "theory",
      title: "Taller de Producción: ¿Qué pasó anoche?",
      content: {
        concept: "Es tu turno de narrar una historia con raíces fuertes.\n\n**Instrucciones:**\nImagina que llegaste tarde a una cita importante. Escribe un párrafo (mínimo 6 líneas) explicando por qué.\n1. Usa al menos 4 verbos del grupo U (estuve, tuve, pude, supe, puse).\n2. Usa al menos 2 verbos del grupo I (hice, quise, vine).\n3. Cuida la ortografía de 'Hizo' (con Z).\n\n**Inspiración:** 'Ayer estuve en el trabajo hasta tarde. Cuando salí, no pude encontrar mis llaves...'",
        examples: []
      }
    },
    {
      id: "a2_u4_n12",
      type: "exam",
      title: "Examen de Unidad: Los Rebeldes I",
      content: {
        concept: "Pon a prueba tu memoria sobre las raíces fuertes U/I. ¡Sin tildes y con mucha atención!",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es la raíz de TENER en pasado?", options: ["Ten-", "Tuv-", "Tien-"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se escribe 'O yaptı'?", options: ["Hico", "Hizo", "Haceró"], correct: 1 },
          { type: "multiple_choice", question: "Nosotros ________ (poder) terminar el proyecto.", options: ["podemos", "pudimos", "pudieron"], correct: 1 },
          { type: "multiple_choice", question: "Yo ________ (saber) la noticia por la televisión.", options: ["supe", "sabí", "supo"], correct: 0 },
          { type: "multiple_choice", question: "Ellos ________ (venir) a mi fiesta de cumpleaños.", options: ["vinieron", "venieron", "vinimos"], correct: 0 },
          { type: "multiple_choice", question: "Tú ________ (poner) la maleta en el coche.", options: ["poniste", "pusiste", "puse"], correct: 1 },
          { type: "multiple_choice", question: "¿Llevan tilde los irregulares de este grupo (hice, tuve, pude)?", options: ["Sí, en la última letra.", "No, nunca.", "Solo en la persona Él/Ella."], correct: 1 },
          { type: "multiple_choice", question: "Yo no ________ (querer) comer nada.", options: ["quisiste", "querí", "quise"], correct: 2 },
          { type: "multiple_choice", question: "Ustedes ________ (estar) en el hotel correcto.", options: ["estuvieron", "estuvisteis", "estamos"], correct: 0 },
          { type: "multiple_choice", question: "Mi madre ________ (hacer) una tarta.", options: ["hizo", "hice", "haceró"], correct: 0 },
          { type: "syntax", turkish: "Dün kütüphanedeydim (Estar).", spanish: "Ayer estuve en la biblioteca", words: ["Ayer", "estuve", "en", "la", "biblioteca", "estaba"] },
          { type: "syntax", turkish: "Çok işim vardı (Tener).", spanish: "Tuve mucho trabajo", words: ["Tuve", "mucho", "trabajo", "tení", "tuvimos"] },
          { type: "syntax", turkish: "Gelmek istedik (Querer).", spanish: "Quisimos venir", words: ["Quisimos", "venir", "querimos", "vinimos"] },
          { type: "syntax", turkish: "Bunu kim yaptı?", spanish: "Quién hizo esto", words: ["Quién", "hizo", "esto", "hice", "hacer"] },
          { type: "syntax", turkish: "Hiçbir şey yapamadım.", spanish: "No pude hacer nada", words: ["No", "pude", "hacer", "nada", "podí"] },
          { type: "syntax", turkish: "Anahtarları buraya koydum.", spanish: "Puse las llaves aquí", words: ["Puse", "las", "llaves", "aquí", "poní"] },
          { type: "syntax", turkish: "Haberi bu sabah öğrendik (Saber).", spanish: "Supimos la noticia esta mañana", words: ["Supimos", "la", "noticia", "esta", "mañana", "sabimos"] },
          { type: "syntax", turkish: "Geç geldiler (Venir).", spanish: "Ellos vinieron tarde", words: ["Ellos", "vinieron", "tarde", "venieron"] },
          { type: "syntax", turkish: "Bunu yapmayı denedin mi (Querer)?", spanish: "Quisiste hacer esto", words: ["Quisiste", "hacer", "esto", "queriste"] },
          { type: "syntax", turkish: "Yalnız kalmak istediler (Querer).", spanish: "Quisieron estar solos", words: ["Quisieron", "estar", "solos", "querieron"] }
        ]
      }
    }
  ]
};
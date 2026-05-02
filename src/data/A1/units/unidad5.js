export const unidad5 = {
  id: "u5", 
  title: "Unidad 5: Familia y Descripciones", 
  description: "El verbo TENER, adjetivos posesivos, vocabulario familiar y descripciones físicas.",
  nodes: [
    {
      id: "u5_n1", type: "theory", title: "La Familia y los Posesivos",
      content: {
        concept: "Para hablar de nuestra familia, primero necesitamos los 'Adjetivos Posesivos' (Mi, Tu, Su).\n\n🇹🇷 TRAMPA PARA TURCOS 1 (El Plural): En turco, el posesivo no cambia si tienes una o varias cosas (Benim arabam / Benim arabalarım). ¡En español SÍ! Si tienes varias cosas, el posesivo lleva 'S':\n• MI perro (Benim köpeğim) ➔ MIS perros (Benim köpeklerim).\n• TU gato (Senin kedin) ➔ TUS gatos.\n• SU coche (Onun/Onların arabası) ➔ SUS coches.\n\n🇹🇷 TRAMPA PARA TURCOS 2 (El género de 'Nuestro'): El posesivo para 'Bizim' cambia según el género de la cosa poseída:\n• Nuestro padre (Bizim babamız)\n• Nuestra madre (Bizim annemiz)\n\nVocabulario Básico: Padre (Baba), Madre (Anne), Hermano/a (Erkek/Kız kardeş), Abuelo/a (Büyükbaba/Büyükanne), Tío/a (Amca/Dayı/Hala/Teyze), Primo/a (Kuzen).",
        examples: [
          { es: "Mi hermano es alto.", tr: "Benim erkek kardeşim uzun boylu." },
          { es: "Mis hermanos son altos.", tr: "Benim erkek kardeşlerim uzun boylu." },
          { es: "¿Cómo se llama tu madre?", tr: "Senin annenin adı ne?" },
          { es: "Sus padres viven en Madrid.", tr: "Onun (veya onların) anne babası Madrid'de yaşıyor." },
          { es: "Nuestra abuela es muy amable.", tr: "Bizim büyükannemiz çok nazik." }
        ]
      }
    },
    {
      id: "u5_n2", type: "theory", title: "El Verbo TENER y la Edad",
      content: {
        concept: "El verbo 'TENER' (Sahip olmak) es uno de los más importantes y es muy irregular. Te presento su conjugación:\n• Yo TENGO\n• Tú TIENES\n• Él / Ella / Usted TIENE\n• Nosotros / Nosotras TENEMOS\n• Ellos / Ellas / Ustedes TIENEN\n\n🇹🇷 TRAMPA PARA TURCOS (La Edad): En inglés o en turco, usamos el verbo 'Ser/Olmak' para la edad (I am 20 / Ben 20 yaşındayım). En español, los años no se 'son', los años se POSEEN. ¡Siempre usamos TENER!\n❌ Incorrecto: Soy 20 años.\n✅ Correcto: Tengo 20 años.",
        examples: [
          { es: "Yo tengo una familia grande.", tr: "Benim büyük bir ailem var." },
          { es: "¿Cuántos años tienes tú?", tr: "Sen kaç yaşındasın?" },
          { es: "Mi abuelo tiene ochenta años.", tr: "Büyükbabam seksen yaşında." },
          { es: "Nosotros tenemos dos perros.", tr: "Bizim iki köpeğimiz var." },
          { es: "Ellos no tienen hijos.", tr: "Onların çocukları yok." }
        ]
      }
    },
    {
      id: "u5_n3", type: "theory", title: "Descripciones: SER vs. TENER",
      content: {
        concept: "Cuando describimos a una persona físicamente, usamos dos verbos distintos dependiendo de lo que estemos describiendo.\n\n🧑 Usamos SER + Adjetivos generales:\nPara describir la forma de todo el cuerpo o la personalidad.\n• Ser alto / bajo (Uzun / Kısa boylu)\n• Ser gordo / delgado (Şişman / Zayıf)\n• Ser guapo / feo (Yakışıklı-Güzel / Çirkin)\n• Ser rubio / moreno (Sarışın / Esmer)\n\n👁️ Usamos TENER + Partes específicas del cuerpo:\nCuando describimos piezas separables como el pelo, los ojos o el vello facial.\n• Tener el pelo largo / corto (Uzun / Kısa saçlı olmak)\n• Tener los ojos azules / verdes / marrones / negros.\n• Tener barba / bigote / gafas (Sakal / Bıyık / Gözlük sahibi olmak).",
        examples: [
          { es: "Yo soy alto y delgado.", tr: "Ben uzun boylu ve zayıfım." },
          { es: "Tú eres muy guapa.", tr: "Sen çok güzelsin." },
          { es: "Él tiene los ojos azules.", tr: "Onun mavi gözleri var." },
          { es: "Ella tiene el pelo rizado.", tr: "Onun kıvırcık saçı var." },
          { es: "Mi tío tiene barba y lleva gafas.", tr: "Amcamın sakalı var ve gözlük takıyor." }
        ]
      }
    },
    {
      id: "u5_n4", type: "theory", title: "Laboratorio de Sintaxis: El Cuerpo",
      content: {
        concept: "Vamos a analizar una oración de descripción física. \n\nEl orden correcto es: **Sujeto + Verbo TENER + Artículo Definido + Parte del cuerpo + Color/Forma**.\n\nAquí hay un detalle crucial que no existe en turco ni en inglés: En español casi nunca decimos 'Mi pelo es blanco' (Benim saçım beyazdır) o 'Él tiene su pelo blanco'. Cuando hablamos del cuerpo de alguien, el español ya asume que es suyo, por lo que usamos el artículo definido ('el' o 'los') en lugar del posesivo ('su').",
        examples: [{ es: "El abuelo tiene el pelo blanco.", tr: "Büyükbabanın beyaz saçı var." }],
        analysis: [
          { word: "El", type: "article", literal: "Belirli", explanation: "Artículo definido masculino singular. Acompaña a 'abuelo' en la posición 1.", examples: [{ es: "El niño come.", tr: "Çocuk yemek yiyor." }, { es: "El sol es amarillo.", tr: "Güneş sarıdır." }, { es: "El libro es mío.", tr: "Kitap benim." }] },
          { word: "abuelo", type: "noun", literal: "Büyükbaba", explanation: "Sustantivo masculino. Posición 2, completando el sujeto.", examples: [{ es: "Mi abuelo es viejo.", tr: "Büyükbabam yaşlı." }, { es: "El abuelo lee un libro.", tr: "Büyükbaba kitap okuyor." }, { es: "Quiero a mi abuelo.", tr: "Büyükbabamı seviyorum." }] },
          { word: "tiene", type: "verb", literal: "sahiptir", explanation: "Posición 3. Verbo 'tener' conjugado para 'Él' (Sahip). En español poseemos las partes del cuerpo.", examples: [{ es: "Él tiene un perro.", tr: "Onun bir köpeği var." }, { es: "Ella tiene 20 años.", tr: "O 20 yaşında." }, { es: "Mi casa tiene tres habitaciones.", tr: "Evimin üç odası var." }] },
          { word: "el", type: "article", literal: "belirli", explanation: "Posición 4. Artículo definido masculino. Esta es la trampa magistral: en español decimos 'tiene EL pelo', no 'tiene SU pelo'.", examples: [{ es: "Me duele el brazo.", tr: "Kolum ağrıyor." }, { es: "Tiene los ojos azules.", tr: "Mavi gözleri var." }, { es: "Lávate las manos.", tr: "Ellerini yıka." }] },
          { word: "pelo", type: "noun", literal: "saç", explanation: "Posición 5. Sustantivo masculino singular (Saç).", examples: [{ es: "Tengo el pelo corto.", tr: "Kısa saçım var." }, { es: "Su pelo es rubio.", tr: "Onun saçı sarı." }, { es: "Me gusta tu pelo.", tr: "Saçını seviyorum." }] },
          { word: "blanco", type: "adjective", literal: "beyaz", explanation: "Posición 6. Adjetivo masculino singular (Beyaz). Como siempre en español, va en último lugar, después de 'pelo'.", examples: [{ es: "El coche blanco.", tr: "Beyaz araba." }, { es: "La casa blanca.", tr: "Beyaz ev." }, { es: "Tengo un perro blanco.", tr: "Beyaz bir köpeğim var." }] }
        ]
      }
    },
    {
      id: "u5_n5", type: "theory", title: "Caja de Herramientas: Vocabulario",
      content: {
        concept: "Antes de leer los textos, vamos a practicar la pronunciación del vocabulario clave de la familia y el físico.\n\nToca cada palabra para escucharla y repítela en voz alta intentando imitar el acento.",
        examples: [
          { es: "Mi padre / Mi madre", tr: "Benim babam / Benim annem" },
          { es: "Mis padres", tr: "Benim anne babam (Ebeveynlerim)" },
          { es: "Mi hermano / Mi hermana", tr: "Benim erkek kardeşim / Benim kız kardeşim" },
          { es: "Mis hijos", tr: "Benim çocuklarım" },
          { es: "Alto / Bajo", tr: "Uzun boylu / Kısa boylu" },
          { es: "Gordo / Delgado", tr: "Şişman / Zayıf" },
          { es: "Guapo / Feo", tr: "Yakışıklı (Güzel) / Çirkin" },
          { es: "Pelo rubio / Pelo castaño", tr: "Sarı saç / Kahverengi saç" },
          { es: "Pelo largo / Pelo corto", tr: "Uzun saç / Kısa saç" },
          { es: "Pelo rizado / Pelo liso", tr: "Kıvırcık saç / Düz saç" },
          { es: "Ojos marrones / Ojos azules", tr: "Kahverengi gözler / Mavi gözler" },
          { es: "La barba / Las gafas", tr: "Sakal / Gözlük" }
        ]
      }
    },
    {
      id: "u5_n6", type: "reading", title: "Lectura A (Diálogo): Mirando fotos",
      content: {
        text: "Ayşe y Carlos están mirando el teléfono móvil de Carlos en una cafetería.\n\n— Ayşe: ¡Qué foto tan bonita! ¿Quiénes son ellos?\n— Carlos: Ellos son mis padres. Esta foto es de sus vacaciones en Italia.\n— Ayşe: Tu padre es muy alto y delgado. Tiene el pelo muy blanco, ¿verdad?\n— Carlos: Sí, mi padre tiene sesenta años. Y la mujer a su lado es mi madre. Ella es más baja y tiene el pelo corto y rizado.\n— Ayşe: ¿Y quién es el chico de las gafas y la barba?\n— Carlos: ¡Ese es mi hermano mayor, Alejandro! Él tiene treinta y dos años y es profesor de universidad.\n— Ayşe: ¡Vaya! Él tiene los ojos muy verdes. Tú tienes los ojos marrones, como tu madre.\n— Carlos: Sí, es verdad. ¡Nuestra genética es muy interesante!",
        translation: "Ayşe ve Carlos bir kafede Carlos'un cep telefonuna bakıyorlar.\n\n— Ayşe: Ne kadar güzel bir fotoğraf! Onlar kim?\n— Carlos: Onlar benim ebeveynlerim. Bu fotoğraf onların İtalya tatilinden.\n— Ayşe: Baban çok uzun ve zayıf. Saçı çok beyaz, değil mi?\n— Carlos: Evet, babam altmış yaşında. Ve yanındaki kadın benim annem. O daha kısa boylu ve kısa kıvırcık saçlı.\n— Ayşe: Peki gözlüklü ve sakallı çocuk kim?\n— Carlos: O benim abim Alejandro! Otuz iki yaşında ve üniversite profesörü.\n— Ayşe: Vay canına! Gözleri çok yeşil. Senin gözlerin kahverengi, aynı annen gibi.\n— Carlos: Evet, doğru. Genetiğimiz çok ilginç!"
      }
    },
    {
      id: "u5_n7", type: "reading", title: "Lectura B (Narrativa): Buscando al hombre ideal",
      content: {
        text: "Me llamo Lucía, tengo veintiocho años y busco un compañero de vida.\n\nFísicamente, yo no soy muy alta. Soy bajita y delgada. Tengo el pelo castaño, muy largo y liso. Mis ojos son grandes y de color miel (marrones claros). A mí me encanta hacer deporte y leer.\n\n¿Cómo es mi hombre ideal? Bueno, él no tiene que ser un modelo de revista, pero prefiero a un hombre alto. Me encantan los hombres que tienen barba y el pelo oscuro. No es importante si tiene los ojos azules o negros. Para mí, lo más importante es su personalidad: tiene que ser inteligente, divertido y tener un corazón grande.\n\n¿Y tú? ¿Conoces a alguien así para mí?",
        translation: "Benim adım Lucía, yirmi sekiz yaşındayım ve bir hayat arkadaşı arıyorum.\n\nFiziksel olarak çok uzun değilim. Kısa boylu ve zayıfım. Kahverengi, çok uzun ve düz saçlarım var. Gözlerim büyük ve bal renginde (açık kahverengi). Spor yapmaya ve okumaya bayılırım.\n\nİdeal erkeğim nasıl biri? Eh, bir dergi modeli olmak zorunda değil, ama uzun boylu bir erkeği tercih ederim. Sakallı ve koyu renk saçlı erkeklere bayılırım. Gözlerinin mavi veya siyah olması önemli değil. Benim için en önemli şey kişiliği: zeki, eğlenceli ve büyük bir kalbi olmalı.\n\nPeki ya sen? Benim için böyle birini tanıyor musun?"
      }
    },
    {
      id: "u5_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        // 10 Ejercicios de Sintaxis (Descriptivos)
        { type: "syntax", turkish: "Benim adım Ayşe ve 25 yaşındayım.", spanish: "Mi nombre es Ayşe y tengo veinticinco años", words: ["Mi", "nombre", "es", "Ayşe", "y", "tengo", "veinticinco", "años"] },
        { type: "syntax", turkish: "Senin gözlerin her zaman çok güzel.", spanish: "Tus ojos son muy hermosos siempre", words: ["Tus", "ojos", "son", "muy", "hermosos", "siempre", "Tu", "es"] },
        { type: "syntax", turkish: "Bizim küçük bir köpeğimiz var.", spanish: "Nosotros tenemos un perro pequeño", words: ["Nosotros", "tenemos", "un", "perro", "pequeño", "tienen"] },
        { type: "syntax", turkish: "Onun (kadın) uzun ve kıvırcık saçı var.", spanish: "Ella tiene el pelo largo y rizado", words: ["Ella", "tiene", "el", "pelo", "largo", "y", "rizado", "es"] },
        { type: "syntax", turkish: "Onların arabaları (çoğul) çok yeni.", spanish: "Sus coches son muy nuevos", words: ["Sus", "coches", "son", "muy", "nuevos", "Su", "es"] },
        { type: "syntax", turkish: "Ben kısa boylu ve çok zayıfım.", spanish: "Yo soy bajo y muy delgado", words: ["Yo", "soy", "bajo", "y", "muy", "delgado", "tengo"] },
        { type: "syntax", turkish: "Senin kız kardeşin çok zeki.", spanish: "Tu hermana es muy inteligente", words: ["Tu", "hermana", "es", "muy", "inteligente", "Tus", "tiene"] },
        { type: "syntax", turkish: "Benim annem tam 50 yaşında.", spanish: "Mi madre tiene cincuenta años", words: ["Mi", "madre", "tiene", "cincuenta", "años", "exactos", "es"] },
        { type: "syntax", turkish: "Bizim büyükbabamız çok yaşlı.", spanish: "Nuestro abuelo es muy viejo", words: ["Nuestro", "abuelo", "es", "muy", "viejo", "Nuestra", "tiene"] },
        { type: "syntax", turkish: "Onun (erkek) mavi gözleri ve sakalı var.", spanish: "Él tiene los ojos azules y barba", words: ["Él", "tiene", "los", "ojos", "azules", "y", "barba", "es"] },
        // 10 Ejercicios de Speaking (Pronunciación descriptiva)
        { type: "speaking", spanish: "Mi hermano mayor es alto y delgado.", turkish: "Benim abim uzun ve zayıftır." },
        { type: "speaking", spanish: "Nosotros tenemos un perro muy inteligente.", turkish: "Bizim çok zeki bir köpeğimiz var." },
        { type: "speaking", spanish: "Nuestra casa tiene tres habitaciones.", turkish: "Bizim evimizin üç odası var." },
        { type: "speaking", spanish: "Tengo veintiocho años.", turkish: "Yirmi sekiz yaşındayım." },
        { type: "speaking", spanish: "Tus ojos son muy grandes y hermosos.", turkish: "Senin gözlerin çok büyük ve güzel." },
        { type: "speaking", spanish: "Ella tiene el pelo largo y liso.", turkish: "Onun uzun ve düz saçı var." },
        { type: "speaking", spanish: "Yo soy baja y tengo el pelo castaño.", turkish: "Ben kısa boyluyum ve kahverengi saçlıyım." },
        { type: "speaking", spanish: "Mi abuelo lleva gafas y tiene barba.", turkish: "Büyükbabam gözlük takar ve sakalı var." },
        { type: "speaking", spanish: "Tus padres viven en Madrid, ¿verdad?", turkish: "Senin annen baban Madrid'de yaşıyor, değil mi?" },
        { type: "speaking", spanish: "Sus hijos son muy guapos.", turkish: "Onların çocukları çok yakışıklı/güzel." }
      ]
    },
    {
      id: "u5_exam", type: "exam", title: "Examen Final: Unidad 5",
      content: {
        concept: "Demuestra en estas 30 preguntas tu destreza total para describir a la familia, edades, rasgos físicos y posesiones.",
        exercises: [
          // 15 Preguntas de Opción Múltiple
          { type: "multiple_choice", question: "Elige la correcta: '_____ padres son de México' (Bizim anne babamız).", options: ["Nuestro", "Nuestros", "Nuestras"], correct: 1 },
          { type: "multiple_choice", question: "Carlos y Ana _____ (tener) una casa bonita.", options: ["tiene", "tienen", "tenemos"], correct: 1 },
          { type: "multiple_choice", question: "Mi abuela ________ el pelo blanco.", options: ["es", "está", "tiene"], correct: 2 },
          { type: "multiple_choice", question: "Juan no es gordo, él es...", options: ["delgado", "feo", "rubio"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice '20 yaşındayım'?", options: ["Soy 20 años.", "Tengo 20 años.", "Estoy 20 años."], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es el plural de 'Mi gato'?", options: ["Mis gato", "Mis gatos", "Mi gatos"], correct: 1 },
          { type: "multiple_choice", question: "Para describir el color de los ojos usamos el verbo:", options: ["Ser", "Estar", "Tener"], correct: 2 },
          { type: "multiple_choice", question: "Si él no es joven, él es...", options: ["guapo", "viejo", "bajo"], correct: 1 },
          { type: "multiple_choice", question: "El plural de 'Tu coche' es:", options: ["Tus coches", "Tus coche", "Tu coches"], correct: 0 },
          { type: "multiple_choice", question: "Para decir 'Onun evi' (de él o ella) usamos:", options: ["Tu casa", "Su casa", "Mi casa"], correct: 1 },
          { type: "multiple_choice", question: "Yo ______ el pelo rizado.", options: ["soy", "tengo", "tienes"], correct: 1 },
          { type: "multiple_choice", question: "Nosotros ______ 30 años.", options: ["tenemos", "somos", "estamos"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'kısa' (para la altura de una persona)?", options: ["bajo", "delgado", "feo"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'gafas'?", options: ["Ayakkabı", "Gözlük", "Sakal"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'barba'?", options: ["Gözlük", "Saç", "Sakal"], correct: 2 },
          
          // 15 Ejercicios de Sintaxis
          { type: "syntax", turkish: "Benim adım Ayşe ve 25 yaşındayım.", spanish: "Mi nombre es Ayşe y tengo veinticinco años", words: ["Mi", "nombre", "es", "Ayşe", "y", "tengo", "veinticinco", "años", "soy"] },
          { type: "syntax", turkish: "Senin gözlerin çok güzel.", spanish: "Tus ojos son muy hermosos", words: ["Tus", "ojos", "son", "muy", "hermosos", "Tu", "es"] },
          { type: "syntax", turkish: "Bizim bir köpeğimiz var.", spanish: "Nosotros tenemos un perro", words: ["Nosotros", "tenemos", "un", "perro", "tienen", "somos"] },
          { type: "syntax", turkish: "Onun (kadın) uzun ve kıvırcık saçı var.", spanish: "Ella tiene el pelo largo y rizado", words: ["Ella", "tiene", "el", "pelo", "largo", "y", "rizado", "es", "su"] },
          { type: "syntax", turkish: "Onların arabaları (çoğul) yeni.", spanish: "Sus coches son nuevos", words: ["Sus", "coches", "son", "nuevos", "Su", "es"] },
          { type: "syntax", turkish: "Ben kısa boylu ve zayıfım.", spanish: "Yo soy bajo y delgado", words: ["Yo", "soy", "bajo", "y", "delgado", "tengo", "el"] },
          { type: "syntax", turkish: "Senin ablan (kız kardeş) çok zeki.", spanish: "Tu hermana es muy inteligente", words: ["Tu", "hermana", "es", "muy", "inteligente", "Tus", "tiene"] },
          { type: "syntax", turkish: "Benim annem 50 yaşında.", spanish: "Mi madre tiene cincuenta años", words: ["Mi", "madre", "tiene", "cincuenta", "años", "es", "una"] },
          { type: "syntax", turkish: "Bizim büyükbabamız yaşlı.", spanish: "Nuestro abuelo es viejo", words: ["Nuestro", "abuelo", "es", "viejo", "Nuestra", "tiene"] },
          { type: "syntax", turkish: "Onun (erkek) mavi gözleri var.", spanish: "Él tiene los ojos azules", words: ["Él", "tiene", "los", "ojos", "azules", "es", "sus"] },
          { type: "syntax", turkish: "Kız kardeşimin mavi gözleri var.", spanish: "Mi hermana tiene los ojos azules", words: ["Mi", "hermana", "tiene", "los", "ojos", "azules", "es", "sus"] },
          { type: "syntax", turkish: "Sen sarışınsın.", spanish: "Tú eres rubio", words: ["Tú", "eres", "rubio", "tienes", "el"] },
          { type: "syntax", turkish: "Onların evi büyük.", spanish: "Su casa es grande", words: ["Su", "casa", "es", "grande", "Sus", "tiene"] },
          { type: "syntax", turkish: "Benim babamın sakalı var.", spanish: "Mi padre tiene barba", words: ["Mi", "padre", "tiene", "barba", "es", "la"] },
          { type: "syntax", turkish: "Bizim arabalarımız (çoğul) hızlı.", spanish: "Nuestros coches son rápidos", words: ["Nuestros", "coches", "son", "rápidos", "Nuestro", "es"] }
        ]
      }
    }
  ]
};
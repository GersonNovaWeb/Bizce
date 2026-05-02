export const unidad4 = {
  id: "u4", 
  title: "Unidad 4: Comida y Mis Gustos", 
  description: "El mundo de la comida, preferencias y el extraño verbo GUSTAR.",
  nodes: [
    {
      id: "u4_n1", type: "theory", title: "El Mundo de la Comida",
      content: {
        concept: "Antes de hablar de nuestros gustos, necesitamos conocer las comidas del día y los alimentos principales.\n\n🍽️ Las tres comidas del día:\n• El desayuno (Kahvaltı) ➔ Verbo: Desayunar\n• La comida / El almuerzo (Öğle yemeği) ➔ Verbo: Comer / Almorzar\n• La cena (Akşam yemeği) ➔ Verbo: Cenar\n\n🥩 Alimentos básicos:\nLa carne (Et), El pollo (Tavuk), El pescado (Balık), Las verduras (Sebzeler), La fruta (Meyve), El agua (Su), El vino (Şarap).",
        examples: [
          { es: "Yo desayuno pan con tomate.", tr: "Ben domatesli ekmekle kahvaltı yaparım." },
          { es: "Nosotros comemos pescado hoy.", tr: "Biz bugün balık yiyoruz." },
          { es: "Ella cena una ensalada.", tr: "O akşam yemeğinde salata yer." }
        ]
      }
    },
    {
      id: "u4_n2", type: "theory", title: "El Extraño Verbo GUSTAR",
      content: {
        concept: "¡ALERTA MÁXIMA! 🚨 El verbo 'GUSTAR' rompe las reglas. \n\n🇹🇷 TRAMPA PARA TURCOS: En turco dices 'Ben kahveyi severim' (Sujeto = Yo, Objeto = Café). En español, el sujeto principal NO eres tú, ¡es el café! Literalmente decimos: 'El café me causa placer a mí'.\n\nPor eso, NUNCA decimos 'Yo gusto'. Usamos pronombres especiales:\n• (A mí) ME gusta...\n• (A ti) TE gusta...\n• (A él/ella) LE gusta...\n• (A nosotros) NOS gusta...\n• (A ellos) LES gusta...\n\nAdemás, el verbo solo tiene dos formas: GUSTA (si la cosa es singular o es un verbo) y GUSTAN (si te gustan varias cosas).",
        examples: [
          { es: "Me gusta el café.", tr: "Kahveyi severim. (Kahve bana hitap eder)" },
          { es: "Me gustan los gatos.", tr: "Kedileri severim. (Kediler çoğul olduğu için 'gustan')" },
          { es: "Te gusta viajar.", tr: "Seyahat etmeyi seversin. (Eylem olduğu için 'gusta')" },
          { es: "A Carlos le gusta la carne.", tr: "Carlos eti sever." },
          { es: "No nos gusta el ruido.", tr: "Gürültüyü sevmeyiz." }
        ]
      }
    },
    {
      id: "u4_n3", type: "theory", title: "Encantar, Preferir y Odiar",
      content: {
        concept: "Para expresar diferentes niveles de emoción, usamos otros verbos.\n\n❤️ ENCANTAR (Bayılmak / Çok sevmek):\nFunciona exactamente igual que 'Gustar'. NUNCA se usa con la palabra 'mucho' porque ya significa 'gustar muchísimo'.\nEjemplo: Me encanta el chocolate.\n\n⚖️ PREFERIR (Tercih etmek) y 😠 ODIAR (Nefret etmek):\n¡Buenas noticias! Estos dos verbos SÍ funcionan como en turco (Yo prefiero, Yo odio).\nEjemplo: Yo odio el frío. Yo prefiero el calor.",
        examples: [
          { es: "Me encantan las manzanas.", tr: "Elmalara bayılırım." },
          { es: "Yo prefiero beber agua.", tr: "Su içmeyi tercih ederim." },
          { es: "Él odia el tráfico.", tr: "O trafikten nefret eder." },
          { es: "Nos encanta esta ciudad.", tr: "Bu şehre bayılıyoruz." }
        ]
      }
    },
    {
      id: "u4_n4", type: "theory", title: "Laboratorio de Sintaxis: Mis Gustos",
      content: {
        concept: "Vamos a deconstruir la estructura del verbo GUSTAR. Observa cómo la persona (A mí) va al principio para dar énfasis, luego el pronombre conector (me), luego el verbo y finalmente la cosa que nos gusta (con su artículo obligatorio).",
        examples: [{ es: "A mí me gusta el café caliente.", tr: "Sıcak kahveyi severim." }],
        analysis: [
          { word: "A mí", type: "pronoun", literal: "Bana (vurgu)", explanation: "Posición 1: Pronombre preposicional. Inicia la frase para dar énfasis y dejar claro a quién le gusta la cosa. Es opcional, pero muy común.", examples: [{ es: "A mí me gusta leer.", tr: "Okumayı severim." }, { es: "¿A ti te gusta?", tr: "Sen sever misin?" }, { es: "A ella le encanta.", tr: "O (kadın) bayılır." }] },
          { word: "me", type: "pronoun", literal: "beni/bana", explanation: "Posición 2: Pronombre de objeto indirecto. Este SÍ es 100% obligatorio. Conecta la emoción contigo.", examples: [{ es: "Me duele la cabeza.", tr: "Başım ağrıyor." }, { es: "Te gusta bailar.", tr: "Dans etmeyi seversin." }, { es: "No nos gusta.", tr: "Bize hitap etmiyor (Sevmeyiz)." }] },
          { word: "gusta", type: "verb", literal: "memnun eder", explanation: "Posición 3: El verbo. Como 'el café' es una sola cosa, el verbo va en singular (gusta). Si fueran 'los cafés', sería 'gustan'.", examples: [{ es: "Me gustan los perros.", tr: "Köpekleri severim." }, { es: "Le gusta el pan.", tr: "Ekmeği sever." }] },
          { word: "el", type: "article", literal: "belirli", explanation: "Posición 4: El artículo. En español, cuando decimos que nos gusta algo de forma general SIEMPRE le ponemos el artículo definido.", examples: [{ es: "Me gusta la música.", tr: "Müziği severim." }, { es: "Odio el lunes.", tr: "Pazartesiden nefret ederim." }] },
          { word: "café", type: "noun", literal: "kahve", explanation: "Posición 5: El sujeto real gramaticalmente. La cosa que te causa placer.", examples: [{ es: "Quiero un café.", tr: "Bir kahve istiyorum." }, { es: "No me gusta el té.", tr: "Çayı sevmem." }] },
          { word: "caliente", type: "adjective", literal: "sıcak", explanation: "Posición 6: El adjetivo. Cierra el bloque descriptivo y siempre va después del sustantivo.", examples: [{ es: "El agua caliente.", tr: "Sıcak su." }, { es: "Me gusta el pan tostado.", tr: "Kızarmış ekmeği severim." }] }
        ]
      }
    },
    {
      id: "u4_n5", type: "theory", title: "Caja de Herramientas: Vocabulario",
      content: {
        concept: "Repasa la pronunciación de las comidas y los verbos de preferencia antes de leer los diálogos en el restaurante.\n\nToca cada palabra para escucharla y repítela en voz alta.",
        examples: [
          { es: "El desayuno / Desayunar", tr: "Kahvaltı / Kahvaltı yapmak" },
          { es: "La comida / Comer", tr: "Öğle yemeği / Yemek yemek" },
          { es: "La cena / Cenar", tr: "Akşam yemeği / Akşam yemeği yemek" },
          { es: "El pollo / La carne / El pescado", tr: "Tavuk / Et / Balık" },
          { es: "Las verduras / La fruta", tr: "Sebzeler / Meyve" },
          { es: "El agua / El vino / La cerveza", tr: "Su / Şarap / Bira" },
          { es: "Me gusta / Me encanta", tr: "Severim / Bayılırım" },
          { es: "No me gusta / Odio", tr: "Sevmem / Nefret ederim" },
          { es: "Yo prefiero...", tr: "Ben ... tercih ederim" },
          { es: "¿Qué quieres tomar?", tr: "Ne içmek istersiniz?" }
        ]
      }
    },
    {
      id: "u4_n6", type: "reading", title: "Lectura A (Diálogo): En el restaurante",
      content: {
        text: "Carlos y Ayşe están en un restaurante español.\n\n— Camarero: Buenas noches. ¿Qué quieren tomar para beber?\n— Carlos: Para mí, una cerveza, por favor.\n— Ayşe: Yo prefiero agua mineral sin gas. No me gusta la cerveza.\n— Camarero: Muy bien. ¿Y para cenar?\n— Carlos: A mí me encanta la carne. Quiero el plato de carne con patatas fritas.\n— Ayşe: Yo no como carne, soy vegetariana. ¿Tienen pescado?\n— Camarero: Sí, tenemos un pescado muy rico con verduras.\n— Ayşe: ¡Perfecto! Me gustan mucho las verduras. Quiero el pescado, por favor.",
        translation: "Carlos ve Ayşe bir İspanyol restoranındalar.\n\n— Garson: İyi akşamlar. İçecek olarak ne alırsınız?\n— Carlos: Benim için bir bira, lütfen.\n— Ayşe: Ben gazsız maden suyunu tercih ederim. Birayı sevmem.\n— Garson: Çok iyi. Peki akşam yemeği için?\n— Carlos: Ben ete bayılırım. Patates kızartmalı et tabağını istiyorum.\n— Ayşe: Ben et yemiyorum, vejetaryenim. Balığınız var mı?\n— Garson: Evet, sebzeli çok lezzetli bir balığımız var.\n— Ayşe: Mükemmel! Sebzeleri çok severim. Balığı istiyorum, lütfen."
      }
    },
    {
      id: "u4_n7", type: "reading", title: "Lectura B (Narrativa): La dieta de Sofía",
      content: {
        text: "Sofía es una mujer muy deportista y tiene una dieta muy estricta. A ella le encanta comer sano.\n\nPor las mañanas, Sofía desayuna fruta fresca y un café negro. A ella no le gusta la leche. Al mediodía, Sofía siempre come en el trabajo. Sus compañeros comen pizza o hamburguesas, pero Sofía odia la comida rápida. Ella prefiere comer una ensalada grande con pollo.\n\nPor la noche, Sofía cena muy poco. A ella le gusta cenar pescado o sopa caliente porque duerme mejor. A su novio, en cambio, le encantan los dulces y siempre come chocolate antes de dormir.",
        translation: "Sofía çok sportmen bir kadındır ve çok sıkı bir diyeti vardır. O sağlıklı beslenmeye bayılır.\n\nSabahları, Sofía taze meyve ve sade kahve ile kahvaltı yapar. O sütü sevmez. Öğlenleri, Sofía her zaman işte yemek yer. İş arkadaşları pizza veya hamburger yer, ama Sofía fast food'dan nefret eder. O tavuklu büyük bir salata yemeyi tercih eder.\n\nAkşamları, Sofía çok az akşam yemeği yer. Akşam yemeğinde balık veya sıcak çorba içmeyi/yemeyi sever çünkü daha iyi uyur. Erkek arkadaşı ise aksine tatlılara bayılır ve uyumadan önce her zaman çikolata yer."
      }
    },
    {
      id: "u4_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        // 10 Ejercicios de Sintaxis
        { type: "syntax", turkish: "Yeni kitapları severim.", spanish: "Me gustan los libros nuevos", words: ["Me", "gustan", "los", "libros", "nuevos", "gusta"] },
        { type: "syntax", turkish: "Meksika yemeklerine bayılırım.", spanish: "Me encanta la comida mexicana", words: ["Me", "encanta", "la", "comida", "mexicana", "encantan"] },
        { type: "syntax", turkish: "Siyaset ilgimi çekmiyor.", spanish: "No me interesa la política", words: ["No", "me", "interesa", "la", "política", "interesan"] },
        { type: "syntax", turkish: "Alışverişe gitmeyi seviyoruz.", spanish: "Nos gusta ir de compras", words: ["Nos", "gusta", "ir", "de", "compras", "gustan", "hacer"] },
        { type: "syntax", turkish: "Ona (kadın) gitar çalmak hitap ediyor.", spanish: "A ella le gusta tocar la guitarra", words: ["A", "ella", "le", "gusta", "tocar", "la", "guitarra", "jugar"] },
        { type: "syntax", turkish: "Aksiyon filmleri ilgini çekiyor mu?", spanish: "Te interesan las películas de acción", words: ["Te", "interesan", "las", "películas", "de", "acción", "interesa"] },
        { type: "syntax", turkish: "Plaj bize çok hitap ediyor.", spanish: "Nos gusta mucho la playa", words: ["Nos", "gusta", "mucho", "la", "playa", "gustan", "Nosotros"] },
        { type: "syntax", turkish: "Senin mavi gözlerine bayılıyorum.", spanish: "Me encantan tus ojos azules", words: ["Me", "encantan", "tus", "ojos", "azules", "encanta"] },
        { type: "syntax", turkish: "Oğlum futbol oynamayı seviyor.", spanish: "A mi hijo le gusta jugar al fútbol", words: ["A", "mi", "hijo", "le", "gusta", "jugar", "al", "fútbol"] },
        { type: "syntax", turkish: "Yabancı diller ilgimizi çekiyor.", spanish: "Nos interesan los idiomas extranjeros", words: ["Nos", "interesan", "los", "idiomas", "extranjeros", "interesa"] },
        // 10 Ejercicios de Speaking (Voz)
        { type: "speaking", spanish: "Me encanta el pescado.", turkish: "Balığa bayılırım." },
        { type: "speaking", spanish: "A nosotros nos molesta el ruido.", turkish: "Gürültü bizi rahatsız ediyor." },
        { type: "speaking", spanish: "¿Te gustan las manzanas verdes?", turkish: "Yeşil elmalar sana hitap ediyor mu?" },
        { type: "speaking", spanish: "Me gusta el café pero no me gusta el té.", turkish: "Kahveyi severim ama çayı sevmem." },
        { type: "speaking", spanish: "A él le encanta jugar al tenis.", turkish: "O tenis oynamaya bayılır." },
        { type: "speaking", spanish: "No me interesa la política.", turkish: "Siyaset ilgimi çekmiyor." },
        { type: "speaking", spanish: "A mi madre le gusta ver la televisión.", turkish: "Annem televizyon izlemeyi sever." },
        { type: "speaking", spanish: "Nos gusta ir de compras los sábados.", turkish: "Cumartesileri alışverişe gitmeyi seviyoruz." },
        { type: "speaking", spanish: "Me encantan tus ojos azules.", turkish: "Senin mavi gözlerine bayılıyorum." },
        { type: "speaking", spanish: "Quiero comer pollo con patatas.", turkish: "Patatesli tavuk yemek istiyorum." }
      ]
    },
    {
      id: "u4_exam", type: "exam", title: "Examen Final: Unidad 4",
      content: {
        concept: "Demuestra en 30 preguntas que dominas la estructura invertida de Gustar, Encantar, Odiar y el vocabulario de comida.",
        exercises: [
          // 15 Preguntas de Opción Múltiple
          { type: "multiple_choice", question: "Si a Carlos (a él) le gusta la pizza, decimos:", options: ["Le gusta la pizza.", "Te gusta la pizza.", "Me gusta la pizza."], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo dices 'Biz müzik dinlemeyi severiz'?", options: ["Nosotros gustamos escuchar música.", "Nos gusta escuchar música.", "Le gusta escuchar música."], correct: 1 },
          { type: "multiple_choice", question: "A mis padres ______ molesta la música alta.", options: ["le", "les", "me"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'El pollo'?", options: ["Balık", "Tavuk", "Et"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta para decir 'Kedileri severim':", options: ["Yo gusto los gatos.", "Me gustan los gatos.", "Me gusta los gatos."], correct: 1 },
          { type: "multiple_choice", question: "¿Es correcto decir 'Me encanta mucho la playa'?", options: ["Sí, es correcto.", "No, 'encantar' no usa 'mucho'."], correct: 1 },
          { type: "multiple_choice", question: "Si hablamos de 'Akşam yemeği', decimos:", options: ["El desayuno", "La comida", "La cena"], correct: 2 },
          { type: "multiple_choice", question: "¿Por qué decimos 'Me gusta cantar canciones' y no 'Me gustan'?", options: ["Porque 'canciones' es plural.", "Porque la acción principal 'cantar' es un verbo singular."], correct: 1 },
          { type: "multiple_choice", question: "A ti ______ interesan los libros.", options: ["me", "te", "le"], correct: 1 },
          { type: "multiple_choice", question: "A ellos ______ encanta viajar a Turquía.", options: ["les", "nos", "le"], correct: 0 },
          { type: "multiple_choice", question: "Me ______ los ojos de ese perro (encantar).", options: ["encanta", "encanto", "encantan"], correct: 2 },
          { type: "multiple_choice", question: "Yo ______ el lunes (odiar). ¡Ojo, odiar es un verbo normal!", options: ["me odio", "odio", "me odia"], correct: 1 },
          { type: "multiple_choice", question: "¿A usted ______ molesta el humo?", options: ["te", "le", "les"], correct: 1 },
          { type: "multiple_choice", question: "A nosotros ______ gusta ir de compras.", options: ["nos", "les", "me"], correct: 0 },
          { type: "multiple_choice", question: "Me ______ la historia antigua (interesar).", options: ["interesa", "interesan", "intereso"], correct: 0 },
          
          // 15 Ejercicios de Sintaxis
          { type: "syntax", turkish: "Bana kitaplar hitap ediyor (Kitapları severim).", spanish: "Me gustan los libros", words: ["Me", "gustan", "los", "libros", "gusta", "el"] },
          { type: "syntax", turkish: "Meksika yemeklerine bayılırım.", spanish: "Me encanta la comida mexicana", words: ["Me", "encanta", "la", "comida", "mexicana", "encantan"] },
          { type: "syntax", turkish: "Siyaset (la política) ilgimi çekmiyor.", spanish: "No me interesa la política", words: ["No", "me", "interesa", "la", "política", "interesan"] },
          { type: "syntax", turkish: "Alışverişe gitmeyi seviyoruz.", spanish: "Nos gusta ir de compras", words: ["Nos", "gusta", "ir", "de", "compras", "gustan", "hacer"] },
          { type: "syntax", turkish: "Ona (kadın) gitar çalmak hitap ediyor.", spanish: "A ella le gusta tocar la guitarra", words: ["A", "ella", "le", "gusta", "tocar", "la", "guitarra", "jugar"] },
          { type: "syntax", turkish: "Ben suyu tercih ederim.", spanish: "Yo prefiero el agua", words: ["Yo", "prefiero", "el", "agua", "me", "prefiere"] },
          { type: "syntax", turkish: "Bize plaj hitap ediyor.", spanish: "Nos gusta la playa", words: ["Nos", "gusta", "la", "playa", "gustan", "Nosotros"] },
          { type: "syntax", turkish: "Senin gözlerine bayılıyorum.", spanish: "Me encantan tus ojos", words: ["Me", "encantan", "tus", "ojos", "encanta"] },
          { type: "syntax", turkish: "Oğlum futbol oynamayı seviyor.", spanish: "A mi hijo le gusta jugar al fútbol", words: ["A", "mi", "hijo", "le", "gusta", "jugar", "al", "fútbol"] },
          { type: "syntax", turkish: "Diller (los idiomas) ilgimizi çekiyor.", spanish: "Nos interesan los idiomas", words: ["Nos", "interesan", "los", "idiomas", "interesa"] },
          { type: "syntax", turkish: "Köpekleri sevmiyorum.", spanish: "No me gustan los perros", words: ["No", "me", "gustan", "los", "perros", "gusta"] },
          { type: "syntax", turkish: "Onlara (erkekler) okumak hitap etmiyor.", spanish: "A ellos no les gusta leer", words: ["A", "ellos", "no", "les", "gusta", "leer", "gustan"] },
          { type: "syntax", turkish: "Sessizliği çok seviyorum (encantar).", spanish: "Me encanta el silencio", words: ["Me", "encanta", "el", "silencio", "encantan", "mucho"] },
          { type: "syntax", turkish: "Babam televizyon izlemeyi sever.", spanish: "A mi padre le gusta ver la televisión", words: ["A", "mi", "padre", "le", "gusta", "ver", "la", "televisión"] },
          { type: "syntax", turkish: "Onun (erkek) arabası beni rahatsız ediyor.", spanish: "Me molesta su coche", words: ["Me", "molesta", "su", "coche", "molestan", "el"] }
        ]
      }
    }
  ]
};
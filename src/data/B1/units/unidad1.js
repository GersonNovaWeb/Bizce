/**
 * UNIDAD 1: LA PUERTA A LOS DESEOS (NIVEL B1 - EDICIÓN MAESTRA)
 * Enfoque: Presente de Subjuntivo (Morfología, lógica irreal y verbos de influencia).
 * Contenido Extra: 10+ ejemplos por nodo, etimología, contrastiva turca profunda y Taller Interactivo.
 */

export const unidad1 = {
  id: "b1_u1",
  title: "Unidad 1: La Puerta a los Deseos",
  description: "Rompe la barrera del Infinitivo. Descubre por qué el español separa la realidad de la imaginación y domina el Modo Subjuntivo para influir en los demás.",
  nodes: [
    {
      id: "b1_u1_n1",
      type: "theory",
      title: "Teoría I: La Psicología del Subjuntivo",
      content: {
        concept: "¡Bienvenida al Nivel B1! Hoy cruzamos el 'Umbral de la Fluidez'. Dejamos de hablar solo de hechos reales y entramos al mundo de las ideas, los deseos y la manipulación: **El Modo Subjuntivo**.\n\n### 1. El Subjuntivo no es un 'Tiempo', es un 'Modo'\nEn español, el Modo Indicativo (lo que usabas en A1 y A2) sirve para DECLARAR la realidad. Si dices *'Carlos viene a casa'*, estás informando de un hecho seguro.\nEl Modo Subjuntivo sirve para **NO DECLARAR**. Si dices *'Quiero que Carlos venga'*... ¿Carlos está en casa? No. ¿Seguro que va a venir? Tampoco. 'Venga' es solo una proyección holográfica de tu deseo. Como no es un hecho real, el idioma te obliga a usar una conjugación distinta.\n\n### 2. La Regla de la Frontera 'QUE'\nPara influir en las acciones de otra persona, necesitamos construir un 'puente' de 3 piezas. El 'QUE' actúa como una frontera que divide tu realidad de la acción imaginaria del otro.\n1. **Tu Realidad (Indicativo):** *Yo quiero* (Es un hecho real que yo tengo este sentimiento).\n2. **La Frontera:** *QUE*\n3. **La Acción Imaginaria (Subjuntivo):** *tú estudies* (Aún no ha pasado, es mi influencia sobre ti).\n\n⚠️ **LA REGLA DEL MISMO SUJETO:** Si el deseo es para ti misma, no hay frontera, porque no tienes que cruzar a la mente de otra persona. Usamos el Infinitivo directo.\n• Dos sujetos: *Yo quiero QUE tú estudies.*\n• Mismo sujeto: *Yo quiero estudiar.*",
        examples: [
          { es: "Quiero que vengas a mi fiesta de cumpleaños.", tr: "Doğum günü partime gelmeni istiyorum. (Deseo directo)" },
          { es: "Necesito que me ayudes con estas cajas, por favor.", tr: "Bu kutularla bana yardım etmene ihtiyacım var. (Necesidad)" },
          { es: "Espero que mañana haga buen tiempo para ir a la playa.", tr: "Yarın plaja gitmek için havanın güzel olmasını umuyorum. (Esperanza)" },
          { es: "Te pido que me escuches atentamente.", tr: "Beni dikkatlice dinlemeni rica ediyorum. (Petición formal)" },
          { es: "Prefiero que nos quedemos en casa esta noche.", tr: "Bu gece evde kalmamızı tercih ederim. (Preferencia)" },
          { es: "Te ruego que me perdones por lo que dije.", tr: "Söylediğim şey için beni affetmen için sana yalvarıyorum. (Súplica)" },
          { es: "Exijo que me devuelvan mi dinero inmediatamente.", tr: "Paramı derhal iade etmelerini talep ediyorum. (Exigencia dura)" },
          { es: "Deseo que seas muy feliz en tu nueva etapa.", tr: "Yeni döneminde çok mutlu olmanı diliyorum. (Deseo profundo)" }
        ]
      }
    },
    {
      id: "b1_u1_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (La Frontera 'QUE')",
      exercises: [
        { type: "syntax", turkish: "Partiye gelmeni istiyorum.", spanish: "Quiero que vengas a la fiesta", words: ["Quiero", "que", "vengas", "a", "la", "fiesta", "vienes"] },
        { type: "syntax", turkish: "İspanyolca öğrenmeni istiyorum.", spanish: "Quiero que aprendas español", words: ["Quiero", "que", "aprendas", "español", "aprender"] },
        { type: "syntax", turkish: "Burada kalmamızı umuyorum.", spanish: "Espero que nos quedemos aquí", words: ["Espero", "que", "nos", "quedemos", "aquí", "quedamos"] },
        { type: "syntax", turkish: "Beni anlamanı rica ediyorum.", spanish: "Te pido que me comprendas", words: ["Te", "pido", "que", "me", "comprendas", "comprendes"] },
        { type: "syntax", turkish: "Sınav için daha çok okumanı istiyorum.", spanish: "Quiero que leas más para el examen", words: ["Quiero", "que", "leas", "más", "para", "el", "examen", "lees"] },
        { type: "syntax", turkish: "Sinemaya gitmek istiyorum (Mismo sujeto).", spanish: "Quiero ir al cine", words: ["Quiero", "ir", "al", "cine", "vaya", "que"] },
        { type: "syntax", turkish: "Bunu bugün yapmanı tercih ederim.", spanish: "Prefiero que hagas esto hoy", words: ["Prefiero", "que", "hagas", "esto", "hoy", "haces"] },
        { type: "syntax", turkish: "Odanı temizlemene ihtiyacım var.", spanish: "Necesito que limpies tu habitación", words: ["Necesito", "que", "limpies", "tu", "habitación", "limpias"] },
        { type: "syntax", turkish: "Onun (erkek) bizimle gelmesini umuyorum.", spanish: "Espero que él venga con nosotros", words: ["Espero", "que", "él", "venga", "con", "nosotros", "viene"] },
        { type: "syntax", turkish: "Yarın erken uyumanı istiyorum.", spanish: "Quiero que duermas temprano mañana", words: ["Quiero", "que", "duermas", "temprano", "mañana", "duermes"] }
      ]
    },
    {
      id: "b1_u1_n3",
      type: "theory",
      title: "Teoría II: La Conjugación Cruzada e Irregulares (Raíz GO)",
      content: {
        concept: "Para formar el Presente de Subjuntivo, aplicamos la regla de la **Conjugación Cruzada**. Es como si las vocales características de los verbos decidieran intercambiarse los papeles para indicar que estamos en un 'mundo al revés'.\n\n### 1. La Inversión Vocálica (Regulares)\n• **Verbos en -AR (Hablar, Cantar) ➔ Toman la letra 'E'.**\n  *Yo hable, tú hables, él hable, nosotros hablemos, ellos hablen.*\n• **Verbos en -ER / -IR (Comer, Vivir) ➔ Toman la letra 'A'.**\n  *Yo coma/viva, tú comas/vivas, nosotros comamos/vivamos, ellos coman/vivan.*\n*(Truco visual: Fíjate que en subjuntivo, la forma de 'Yo' y de 'Él/Ella' es **exactamente idéntica**).* \n\n### 2. Los Primeros Irregulares (El Club del 'GO')\nEl subjuntivo se construye siempre tomando como base la forma 'YO' del presente de indicativo. Si esa forma tiene una irregularidad (como una 'G' metida a la fuerza), ¡el subjuntivo hereda esa 'G' para todas las personas!\n\n• **Tener** (Yo ten**go**) ➔ Teng-A, teng-AS, teng-AMOS...\n• **Hacer** (Yo ha**go**) ➔ Hag-A, hag-AS, hag-AMOS...\n• **Decir** (Yo di**go**) ➔ Dig-A, dig-AS, dig-AMOS...\n• **Poner** (Yo pon**go**) ➔ Pong-A, pong-AS, pong-AMOS...\n• **Salir** (Yo sal**go**) ➔ Salg-A, salg-AS, salg-AMOS...\n• **Venir** (Yo ven**go**) ➔ Veng-A, veng-AS, veng-AMOS...",
        examples: [
          { es: "Necesito que tengas mucha paciencia conmigo hoy.", tr: "Bugün benimle çok sabırlı olmana (sahip olmana) ihtiyacım var." },
          { es: "Quiero que hagas la cena porque estoy agotada.", tr: "Akşam yemeğini senin yapmanı istiyorum çünkü çok yorgunum." },
          { es: "Prefiero que salgamos mañana por la mañana.", tr: "Yarın sabah dışarı çıkmamızı tercih ederim." },
          { es: "Te pido que me digas la verdad absoluta.", tr: "Bana mutlak gerçeği söylemeni rica ediyorum." },
          { es: "Espero que pongas los documentos en la mesa.", tr: "Belgeleri masaya koymanı umuyorum." },
          { es: "Necesito que vengas a la oficina inmediatamente.", tr: "Ofise derhal gelmene ihtiyacım var." },
          { es: "Deseo que hables con el director sobre tu sueldo.", tr: "Müdürle maaşın hakkında konuşmanı diliyorum." },
          { es: "Quiero que vivas tu vida sin miedos.", tr: "Hayatını korkusuzca yaşamanı istiyorum." }
        ]
      }
    },
    {
      id: "b1_u1_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Verbos Rebeldes)",
      exercises: [
        { type: "speaking", spanish: "Quiero que tengas mucho cuidado con ese perro", turkish: "O köpeğe karşı çok dikkatli olmanı istiyorum." },
        { type: "speaking", spanish: "Espero que hagas tu tarea antes de cenar", turkish: "Akşam yemeğinden önce ödevini yapmanı umuyorum." },
        { type: "speaking", spanish: "Necesito que vengas a casa ahora mismo", turkish: "Hemen şimdi eve gelmene ihtiyacım var." },
        { type: "speaking", spanish: "Prefiero que salgamos de noche cuando haga fresco", turkish: "Hava serinlediğinde gece çıkmamızı tercih ederim." },
        { type: "speaking", spanish: "Te pido que digas la verdad frente a todos", turkish: "Herkesin önünde doğruyu söylemeni rica ediyorum." },
        { type: "speaking", spanish: "Quiero que pongas las llaves encima de la mesa", turkish: "Anahtarları masanın üzerine koymanı istiyorum." },
        { type: "speaking", spanish: "Espero que tengan un viaje seguro a Turquía", turkish: "Türkiye'ye güvenli bir yolculuk yapmalarını umuyorum." },
        { type: "speaking", spanish: "Necesitamos que hagas un esfuerzo extra hoy", turkish: "Bugün ekstra bir çaba göstermene ihtiyacımız var." },
        { type: "speaking", spanish: "Prefiero que vengas tú en lugar de Carlos", turkish: "Carlos'un yerine senin gelmeni tercih ederim." },
        { type: "speaking", spanish: "Te aconsejo que no le digas nada a tu jefe", turkish: "Patronuna hiçbir şey söylememeni tavsiye ederim." }
      ]
    },
    {
      id: "b1_u1_n5",
      type: "theory",
      title: "El Reto Turco: La Parálisis del Infinitivo",
      content: {
        concept: "Aquí atacaremos la barrera psicológica más grande de los hablantes de turco (y de inglés) al entrar al Nivel B1.\n\n🇹🇷 **CÓMO PIENSA EL TURCO:**\nEl idioma turco convierte las acciones en 'objetos' que puedes poseer. Usas un infinitivo modificado con sufijos posesivos y de caso acusativo:\n• *Gel-me-n-i istiyorum* (Literal: Venir-tu-lo quiero / Quiero 'tu venir').\n\n🇪🇸 **CÓMO PIENSA EL ESPAÑOL:**\nEn español, una acción viva no puede convertirse en un objeto que se posee. No puedes decir 'Quiero tu venir' o 'Necesito su comer'. Es un error crítico.\n\n**LA CURA MENTAL:**\nSiempre que en tu cabeza sientas el impulso de usar un posesivo sobre una acción (*Söyle-me-ni*), tu cerebro debe encender una alarma que te diga: **PUENTE 'QUE' + SUBJUNTIVO**.\n\n• ❌ **Traducción literal y fatal:** *Quiero a ti escuchar.* \n• ✅ **Traducción española pura:** *Quiero QUE tú escuches.*\n• ❌ **Traducción literal y fatal:** *Necesito su venir temprano.*\n• ✅ **Traducción española pura:** *Necesito QUE él venga temprano.*",
        examples: [
          { es: "Necesito que mi jefe lea el correo electrónico urgente.", tr: "Patronumun acil e-postayı okumasına ihtiyacım var." },
          { es: "Te pido por favor que me escuches sin interrumpir.", tr: "Lütfen sözümü kesmeden beni dinlemeni rica ediyorum." },
          { es: "Prefiero que nosotros paguemos la cuenta esta vez.", tr: "Bu sefer hesabı bizim ödememizi tercih ederim." },
          { es: "Mis padres quieren que yo estudie ingeniería.", tr: "Ailem mühendislik okumamı istiyor." },
          { es: "Deseo que encuentres la paz interior que buscas.", tr: "Aradığın iç huzuru bulmanı diliyorum." },
          { es: "Ruego que no me dejes sola en este momento.", tr: "Beni şu an yalnız bırakmaman için yalvarıyorum." },
          { es: "Espero que no tengas problemas con el coche.", tr: "Umarım arabayla ilgili sorun yaşamazsın." },
          { es: "Necesitamos que nos den una respuesta pronto.", tr: "Bize yakında bir cevap vermelerine ihtiyacımız var." }
        ]
      }
    },
    {
      id: "b1_u1_n6",
      type: "theory",
      title: "Duelo de Acentos: Órdenes en Madrid vs. CDMX",
      content: {
        concept: "En el nivel B1 ya no solo aprendes vocabulario, aprendes sociolingüística. Vamos a ver cómo dos culturas hispanas usan el subjuntivo para dar instrucciones a su equipo. \n\n### España (Vosotros) vs Latinoamérica (Ustedes)\nAl dar órdenes a un grupo en España, se usa 'Vosotros'. La terminación de subjuntivo para vosotros es **-ÁIS / -ÉIS**.\nEn Latinoamérica se usa siempre 'Ustedes' (tanto formal como informal), por lo que la terminación es **-AN / -EN**.\n\n### El Verbo Peligroso: COGER\n• En España, 'Coger' significa 'Agarrar' o 'Tomar' (un coche, las llaves, el autobús). Es la palabra más usada.\n• En la mayor parte de Latinoamérica (especialmente México y el Cono Sur), 'Coger' es un verbo vulgar que significa tener relaciones sexuales. ¡Nunca le digas a un mexicano 'Quiero que cojas el coche'!\n\n**Lee atentamente este choque cultural:**\n🇪🇸 **Marta (Jefa en Madrid):**\n«Chicos, necesito que **cojáis** el coche ahora mismo y vayáis al aeropuerto. Quiero que **traigáis** a los clientes. Espero que no **tardéis** mucho, que no quiero que **perdáis** el tiempo.»\n\n🇲🇽 **Valeria (Jefa en Ciudad de México):**\n«Chicos, necesito que **tomen (o manejen)** el carro ahorita mismo y vayan al aeropuerto. Quiero que **traigan** a los clientes. Espero que no **tarden** mucho, que no quiero que **pierdan** el tiempo.»",
        examples: [
          { es: "España: Quiero que vosotros vengáis mañana.", tr: "İspanya: Sizin yarın gelmenizi istiyorum." },
          { es: "Latam: Quiero que ustedes vengan mañana.", tr: "Latin Amerika: Sizin yarın gelmenizi istiyorum." },
          { es: "España: Espero que cojas tus cosas y te vayas.", tr: "İspanya: Eşyalarını almanı ve gitmeni umuyorum." },
          { es: "Latam: Espero que tomes tus cosas y te vayas.", tr: "Latin Amerika: Eşyalarını almanı ve gitmeni umuyorum." }
        ]
      }
    },
    {
      id: "b1_u1_n7",
      type: "theory",
      title: "Cápsula Cultural: Ojalá que llueva café",
      content: {
        concept: "Una de las mejores formas de anclar el Subjuntivo en el cerebro es a través de la música y la historia. La palabra **OJALÁ** es una de las más mágicas y expresivas del idioma.\n\n### Etimología e Historia\nProviene del árabe andalusí *'In shaa Allah'* (İnşallah - Si Dios quiere). A lo largo de los casi 800 años de presencia musulmana en la Península Ibérica, se castellanizó a 'Ojalá'. Hoy en día no tiene una connotación estrictamente religiosa, sino que significa 'Deseo fuertemente que pase esto'.\n\n### La Ley de Gravedad Gramatical\nLa palabra 'Ojalá' es como un agujero negro gramatical: **SIEMPRE, el 100% de las veces, atrae al Subjuntivo.** (A veces lleva 'que' y a veces no, pero el verbo siempre es subjuntivo).\n\n🎵 **Inmersión Cultural:** 'Ojalá que llueva café' es la canción más famosa del cantante dominicano Juan Luis Guerra. En ella, no desea que llueva café literalmente, sino que usa la metáfora de la lluvia de café para desear prosperidad y abundancia a los campesinos que sufren pobreza.\n\n*«Ojalá que llueva café en el campo / que caiga un aguacero de yuca y té / Ojalá que no suframos tanto»*.",
        examples: [
          { es: "¡Ojalá que apruebes el examen con buena nota!", tr: "İnşallah sınavı iyi bir notla geçersin!" },
          { es: "Ojalá haga buen tiempo mañana para ir a la montaña.", tr: "Umarım dağa gitmek için yarın hava güzel olur." },
          { es: "Ojalá que todo salga como lo hemos planeado.", tr: "Umarım her şey planladığımız gibi gider (çıkar)." },
          { es: "Ojalá tengan un viaje seguro y sin turbulencias.", tr: "İnşallah güvenli ve türbülanssız bir yolculuk yaparlar." },
          { es: "Ojalá te des cuenta de cuánto te quiero.", tr: "Umarım seni ne kadar sevdiğimi fark edersin." },
          { es: "¿Crees que ganaremos? — ¡Ojalá! (Uso solitario).", tr: "Sence kazanır mıyız? — İnşallah / Umarız!" },
          { es: "Ojalá no llueva durante nuestro concierto.", tr: "Keşke (umarım) konserimiz sırasında yağmur yağmasa." },
          { es: "Ojalá encuentres las llaves que perdiste ayer.", tr: "İnşallah dün kaybettiğin anahtarları bulursun." }
        ]
      }
    },
    {
      id: "b1_u1_n8",
      type: "theory",
      title: "Laboratorio de Slang: Expresiones de Deseo (¡Que...!)",
      content: {
        concept: "Para sonar como una verdadera nativa, necesitas conocer las 'Frases Hechas' (Idioms) que usan el subjuntivo para desear el bien (o el mal) a los demás.\n\nEn la calle, los españoles somos muy rápidos. A menudo omitimos el 'Espero que...' o 'Deseo que...' y disparamos el deseo empezando directamente con la palabra **'QUE'** seguida del subjuntivo.\n\n### Diccionario de Supervivencia Social:\n• **¡Que te mejores!** ➔ (Geçmiş olsun!) Literal: Que te pongas mejor. Se usa cuando alguien está enfermo.\n• **¡Que aproveche!** ➔ (Afiyet olsun!) Se dice cuando pasas al lado de alguien que está comiendo o cuando empiezas a comer.\n• **¡Que tengas suerte!** ➔ (İyi şanslar! / Şans dilemek). \n• **¡Que te diviertas! / ¡Que lo pases bien!** ➔ (İyi eğlenceler!). Cuando alguien sale de fiesta o de viaje.\n• **¡Que te den! / ¡Que te folle un pez! (Muy vulgar 🇪🇸)** ➔ (Canın cehenneme!). Expresiones de máximo enfado en España para mandar a alguien a paseo.\n• **Echar una mano** ➔ (Yardım etmek - Literal: Bir el atmak). *Quiero que me eches una mano.*",
        examples: [
          { es: "He oído que estás resfriada. ¡Que te mejores pronto!", tr: "Nezle olduğunu duydum. Çabuk iyileş! (Geçmiş olsun)." },
          { es: "¡Que aproveche! Esta paella huele de maravilla.", tr: "Afiyet olsun! Bu paella harika kokuyor." },
          { es: "Me voy de vacaciones a Cancún. — ¡Que te diviertas mucho!", tr: "Cancún'a tatile gidiyorum. — Çok iyi eğlenceler!" },
          { es: "Mañana tengo una entrevista de trabajo. — ¡Que tengas mucha suerte!", tr: "Yarın bir iş görüşmem var. — Sana bol şans!" },
          { es: "¡Eres un mentiroso, que te den!", tr: "Sen bir yalancısın, canın cehenneme!" },
          { es: "Que sueñes con los angelitos. (A los niños al dormir).", tr: "Melekleri rüyanda gör (Tatlı rüyalar)." },
          { es: "Que cumplas muchos más. (En los cumpleaños).", tr: "Daha nicesini (yaşlarını) kutla." },
          { es: "Necesito que me eches una mano con la mudanza.", tr: "Taşınmada bana yardım etmene (bir el atmana) ihtiyacım var." }
        ]
      }
    },
    {
      id: "b1_u1_n9",
      type: "theory",
      title: "Sintaxis Maestra: La Anatomía Compleja",
      content: {
        concept: "En B1, las frases ya no son de 5 palabras. Analizaremos visualmente la estructura de una oración de influencia a nivel avanzado, combinando un pronombre indirecto, el puente 'que', un verbo irregular 'GO' y vocabulario de slang.",
        examples: [{ es: "Sinceramente, a mí me gustaría mucho que tú me echaras una mano con este proyecto mañana.", tr: "Dürüst olmak gerekirse, yarın bu projede bana yardım etmeni (bir el atmanı) çok isterdim." }],
        analysis: [
          { word: "Sinceramente,", type: "adverb", literal: "Dürüstçe", explanation: "Adverbio de actitud. Prepara al oyente para una petición honesta.", examples: [] },
          { word: "a mí me gustaría", type: "verb", literal: "ben isterdim (bana hitap ederdi)", explanation: "Verbo GUSTAR en Condicional de Cortesía. Es la 'matriz' elegante que pide el subjuntivo, suavizando la exigencia para no sonar como una orden militar.", examples: [] },
          { word: "mucho", type: "adverb", literal: "çok", explanation: "Intensificador del deseo.", examples: [] },
          { word: "que", type: "connector", literal: "ki (bağlaç)", explanation: "El puente obligatorio que conecta la mente del que habla con la acción que debe hacer la otra persona.", examples: [] },
          { word: "tú", type: "pronoun", literal: "sen", explanation: "Sujeto número 2. La persona que va a realizar la acción (puede omitirse).", examples: [] },
          { word: "me", type: "pronoun", literal: "bana", explanation: "Pronombre de Objeto Indirecto. Indica quién recibe la ayuda.", examples: [] },
          { word: "echaras", type: "verb", literal: "atasın/atsaydın (subjuntivo)", explanation: "Verbo ECHAR conjugado en Imperfecto de Subjuntivo (por concordancia con 'gustaría'). Si la frase fuera 'Quiero que...', sería 'eches'.", examples: [] },
          { word: "una mano", type: "noun", literal: "bir el", explanation: "Sustantivo que forma la locución idiomática 'Echar una mano' (Ayudar).", examples: [] },
          { word: "con este proyecto", type: "noun", literal: "bu proje ile", explanation: "Complemento preposicional.", examples: [] },
          { word: "mañana.", type: "adverb", literal: "yarın", explanation: "Marcador temporal.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u1_n10",
      type: "theory",
      title: "Caja de Herramientas: Metas, Éxito y Superación",
      content: {
        concept: "En esta unidad, estás expresando tus esperanzas para ti misma y para los demás. Para sonar profesional o inspiradora, debes subir de nivel tu vocabulario abandonando las palabras básicas (bueno, querer, conseguir) y abrazando léxico de C1.\n\n### Vocabulario Clave para Proyectos y Deseos:\n• **Lograr / Conseguir** (Başarmak / Elde etmek) ➔ Se usan más que 'obtener'. *Espero lograr mis metas.*\n• **Tener éxito** (Başarılı olmak) ➔ En español no existe el verbo 'başarmak' como una sola palabra activa, se 'tiene' el éxito. *Quiero que tengas éxito.*\n• **Esforzarse / El esfuerzo** (Çaba göstermek / Çaba) ➔ *Necesito que te esfuerces más en el trabajo.*\n• **Mejorar** (Geliştirmek / İyileştirmek). *Ojalá mejores tu pronunciación.*\n• **Aprobar / Suspender** (Sınavı geçmek / Sınavdan kalmak). *Espero que no suspendas.*\n• **La beca** (Burs). *Me gustaría que me dieran la beca.*\n• **El título universitario** (Üniversite diploması).\n• **La carrera profesional** (Kariyer).",
        examples: [
          { es: "Mis padres quieren que yo tenga éxito en mi carrera profesional.", tr: "Ailem kariyerimde başarılı olmamı istiyor." },
          { es: "Espero que logres conseguir esa beca en España.", tr: "Umarım İspanya'daki o bursu elde etmeyi başarırsın." },
          { es: "El profesor nos exige que nos esforcemos para no suspender.", tr: "Öğretmen kalmamak için çaba göstermemizi talep ediyor (bize şart koşuyor)." },
          { es: "Quiero que mejores tus habilidades de comunicación.", tr: "İletişim becerilerini geliştirmeni istiyorum." },
          { es: "Ojalá que apruebes todos tus exámenes finales sin problema.", tr: "İnşallah tüm final sınavlarını sorunsuz geçersin." },
          { es: "Necesito que consigas el título antes de fin de año.", tr: "Yıl sonundan önce diplomayı almana ihtiyacım var." },
          { es: "Espero que este gran esfuerzo tenga una buena recompensa.", tr: "Umarım bu büyük çabanın iyi bir ödülü olur." },
          { es: "Le ruego que reconsidere mi solicitud de beca.", tr: "Burs başvurumu yeniden gözden geçirmenizi rica ediyorum." }
        ]
      }
    },
    {
      id: "b1_u1_n11",
      type: "workshop",
      title: "Taller de Producción: El Contrato de Convivencia",
      content: {
        concept: "¡Ha llegado tu primer Taller de Producción del Nivel B1! Es la hora de poner en práctica tu capacidad para influir en los demás sin sonar como un robot.\n\n**Instrucciones:**\nImagina que tú y tu pareja (o compañero de piso) os acabáis de mudar juntos y están estableciendo un 'acuerdo de convivencia'. Escribe un texto (mínimo de 6 a 8 líneas) detallando lo que tú vas a hacer y lo que exiges o esperas que la otra persona haga.\n\n**Reglas de Oro del Taller:**\n1. Usa al menos **3 verbos de influencia** diferentes (Quiero que, necesito que, espero que, te pido que, exijo que).\n2. Asegúrate de incluir al menos un verbo irregular del **'Club del GO'** en subjuntivo (hagas, tengas, pongas, salgas).\n3. Incluye al menos una expresión del **Laboratorio de Slang** (Ojalá, echar una mano, que te mejores).\n4. Alterna la persona: Habla de lo que 'yo' haré (Indicativo) vs lo que espero que 'tú' hagas (Subjuntivo).\n\n**Ejemplo de inspiración:**\n*'En nuestra nueva casa, yo voy a cocinar los lunes porque me gusta mucho. Sin embargo, necesito que tú laves los platos esa noche. Espero que siempre me eches una mano con la limpieza general. Quiero que pongas tus zapatos en el armario y que no...'*",
        examples: []
      }
    },
    {
      id: "b1_u1_n12",
      type: "exam",
      title: "Mega Examen: El Umbral del B1",
      content: {
        concept: "La prueba de fuego del Subjuntivo de Voluntad. Demuestra tu dominio rompiendo el Infinitivo posesivo turco, manejando los verbos irregulares GO y la sintaxis de influencia en situaciones complejas.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "¿Qué vocal toman los verbos terminados en -AR (ej. Hablar) en el Presente de Subjuntivo para 'Tú'?", options: ["Hablas", "Hables", "Hablais"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué vocal toman los verbos terminados en -ER / -IR (ej. Comer) en el Presente de Subjuntivo para 'Ella'?", options: ["Coma", "Come", "Comiera"], correct: 0 },
          { type: "multiple_choice", question: "Elige la traducción mental correcta para el turco 'Bana yardım etmeni istiyorum':", options: ["Quiero tú ayudarme.", "Quiero que me ayudes.", "Quiero me ayudar."], correct: 1 },
          { type: "multiple_choice", question: "¿Por qué es INCORRECTO usar subjuntivo en la frase 'Yo quiero viajar a México'?", options: ["Porque es una frase en presente.", "Porque 'viajar' es irregular.", "Porque el sujeto es el mismo para el deseo y la acción (Yo quiero, yo viajo)."], correct: 2 },
          { type: "multiple_choice", question: "Espero que el profesor no ______ (poner) un examen sorpresa hoy.", options: ["pone", "pongue", "ponga"], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál es la forma correcta de subjuntivo del verbo 'Tener' para 'Nosotros'?", options: ["Tenemos", "Tengamos", "Tiengamos"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la forma de subjuntivo de 'Hacer' para 'tú'?", options: ["Hagas", "Haces", "Haceses"], correct: 0 },
          { type: "multiple_choice", question: "Nosotros necesitamos que los clientes ______ (decir) la verdad.", options: ["dicen", "digan", "decir"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa el modismo 'Echar una mano'?", options: ["Elini sıkmak (Saludar)", "Yardım etmek (Ayudar)", "Kavga etmek (Pelear)"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien está a punto de empezar a comer, la norma de cortesía es decir:", options: ["¡Que te mejores!", "¡Ojalá!", "¡Que aproveche!"], correct: 2 },
          { type: "multiple_choice", question: "¿De qué expresión árabe andalusí proviene la palabra 'Ojalá'?", options: ["Alhamdulillah", "In shaa Allah (Si Dios quiere)", "Masha Allah"], correct: 1 },
          { type: "multiple_choice", question: "Mi jefa exige ______ (yo - llegar) puntual a la reunión.", options: ["llegar", "que llegue", "que llego"], correct: 1 },
          { type: "multiple_choice", question: "REGLA ABSOLUTA: ¿Qué modo verbal es 100% obligatorio después de la palabra 'Ojalá'?", options: ["Indicativo", "Infinitivo", "Subjuntivo"], correct: 2 },
          { type: "multiple_choice", question: "Si un amigo te dice que tiene fiebre, la respuesta nativa automática es:", options: ["¡Que tengas suerte!", "¡Que te mejores!", "¡Que te den!"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Başarılı olmak' en español profesional?", options: ["Ser éxito", "Tener éxito", "Hacer éxito"], correct: 1 },

          // 15 Sintaxis (Arrastrar)
          { type: "syntax", turkish: "Sınavı geçmeni umuyorum (Aprobar).", spanish: "Espero que apruebes el examen", words: ["Espero", "que", "apruebes", "el", "examen", "apruebas", "aprobar"] },
          { type: "syntax", turkish: "İnşallah (Keşke) yarın hava güzel olur (hacer).", spanish: "Ojalá que haga buen tiempo mañana", words: ["Ojalá", "que", "haga", "buen", "tiempo", "mañana", "hace"] },
          { type: "syntax", turkish: "Bana biraz yardım etmene (bir el atmana) ihtiyacım var.", spanish: "Necesito que me eches una mano", words: ["Necesito", "que", "me", "eches", "una", "mano", "echas", "echar"] },
          { type: "syntax", turkish: "Onların burada bizimle kalmalarını tercih ederim (Quedarse).", spanish: "Prefiero que ellos se queden aquí con nosotros", words: ["Prefiero", "que", "ellos", "se", "queden", "aquí", "con", "nosotros", "quedan"] },
          { type: "syntax", turkish: "Bana mutlak gerçeği söylemeni rica ediyorum (Pedir).", spanish: "Te pido que me digas la verdad absoluta", words: ["Te", "pido", "que", "me", "digas", "la", "verdad", "absoluta", "dices"] },
          { type: "syntax", turkish: "Bugün masayı (la mesa) senin kurmanı (poner) istiyorum.", spanish: "Quiero que tú pongas la mesa hoy", words: ["Quiero", "que", "tú", "pongas", "la", "mesa", "hoy", "pones", "poner"] },
          { type: "syntax", turkish: "Onun (erkek) seni dikkatlice dinlemesini umuyorum.", spanish: "Espero que él te escuche atentamente", words: ["Espero", "que", "él", "te", "escuche", "atentamente", "escucha"] },
          { type: "syntax", turkish: "Geçmiş olsun! (Çabuk iyileş).", spanish: "Que te mejores pronto", words: ["Que", "te", "mejores", "pronto", "mejoras"] },
          { type: "syntax", turkish: "Bugün hiçbir şey yapmamanı tercih ederim (Hacer).", spanish: "Prefiero que no hagas nada hoy", words: ["Prefiero", "que", "no", "hagas", "nada", "hoy", "haces", "hacer"] },
          { type: "syntax", turkish: "İspanya'da başarılı olmanızı (ustedes) umuyorum.", spanish: "Espero que ustedes tengan éxito en España", words: ["Espero", "que", "ustedes", "tengan", "éxito", "en", "España", "tienen"] },
          { type: "syntax", turkish: "Erken uyumanızı tavsiye ederim (recomendar / ustedes).", spanish: "Les recomiendo que duerman temprano", words: ["Les", "recomiendo", "que", "duerman", "temprano", "duermen", "dormir"] },
          { type: "syntax", turkish: "İspanyolca öğrenmek istiyorum (Mismo sujeto).", spanish: "Yo quiero aprender español", words: ["Yo", "quiero", "aprender", "español", "que", "aprenda"] },
          { type: "syntax", turkish: "Onların güvenli bir yolculuk yapmalarını umuyorum.", spanish: "Espero que ellos tengan un viaje seguro", words: ["Espero", "que", "ellos", "tengan", "un", "viaje", "seguro", "tienen"] },
          { type: "syntax", turkish: "Bana parayı hemen vermene ihtiyacım var.", spanish: "Necesito que me des el dinero inmediatamente", words: ["Necesito", "que", "me", "des", "el", "dinero", "inmediatamente", "das"] },
          { type: "syntax", turkish: "Patronum bugün ofise gelmemi emrediyor (ordenar).", spanish: "Mi jefe ordena que yo venga a la oficina hoy", words: ["Mi", "jefe", "ordena", "que", "yo", "venga", "a", "la", "oficina", "hoy", "vengo"] }
        ]
      }
    }
  ]
};
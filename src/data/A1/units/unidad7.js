export const unidad7 = {
  id: "u7", 
  title: "Unidad 7: ¿Qué estás haciendo?", 
  description: "Acciones en progreso, la diferencia entre rutina y el momento actual, y gerundios.",
  nodes: [
    {
      id: "u7_n1", type: "theory", title: "El Presente Continuo",
      content: {
        concept: "En español, cuando queremos decir que una acción está ocurriendo en ESTE PRECISO INSTANTE, usamos una fórmula mágica de dos verbos que nunca se separan:\n\n**ESTAR (conjugado) + VERBO PRINCIPAL (en Gerundio)**\n\n¿Cómo formamos el Gerundio?\n• Si el verbo termina en -AR ➔ Cambiamos por **-ANDO** (Hablar ➔ Hablando)\n• Si el verbo termina en -ER / -IR ➔ Cambiamos por **-IENDO** (Comer ➔ Comiendo / Vivir ➔ Viviendo)\n\nEjemplo: Yo (Sujeto) + estoy (Verbo Estar) + hablando (Gerundio).",
        examples: [
          { es: "Yo estoy trabajando ahora.", tr: "Şu an çalışıyorum." },
          { es: "Tú estás comiendo una manzana.", tr: "Sen bir elma yiyorsun." },
          { es: "Nosotros estamos bebiendo agua.", tr: "Biz su içiyoruz." },
          { es: "Ellos están escribiendo un correo.", tr: "Onlar bir e-posta yazıyorlar." }
        ]
      }
    },
    {
      id: "u7_n2", type: "theory", title: "La Trampa: Rutina vs. Ahora",
      content: {
        concept: "🇹🇷 TRAMPA PARA TURCOS: En turco, el sufijo '-iyor' se usa a veces para hábitos (Her gün kahve içiyorum) y a veces para el momento actual (Şu an kahve içiyorum). \n\n¡En español somos muy estrictos y los separamos!\n\n🕰️ Para rutinas o hábitos usamos el Presente Normal:\n• 'Todos los días BEBO café' (Her gün kahve içerim).\n\n⚡ Para lo que pasa AHORA MISMO usamos Estar + Gerundio:\n• 'Ahora ESTOY BEBIENDO café' (Şu an kahve içiyorum).\n\nNunca digas 'Todos los días estoy bebiendo', ¡es un error muy común!",
        examples: [
          { es: "Siempre leo por la noche. (Rutina)", tr: "Geceleri hep okurum." },
          { es: "En este momento estoy leyendo. (Ahora)", tr: "Şu anda okuyorum." },
          { es: "Normalmente camino al trabajo. (Rutina)", tr: "Normalde işe yürürüm." },
          { es: "Hoy estoy caminando al trabajo. (Ahora)", tr: "Bugün işe yürüyorum." }
        ]
      }
    },
    {
      id: "u7_n3", type: "theory", title: "Los Gerundios Irregulares",
      content: {
        concept: "Como en toda regla en español, ¡hay rebeldes! Algunos verbos cambian una letra al transformarse en gerundio.\n\n1. Cambio de vocal (E ➔ I) o (O ➔ U):\n• Dormir ➔ D**u**rmiendo (Uyuyor)\n• Pedir ➔ P**i**diendo (İstiyor / Sipariş ediyor)\n• Decir ➔ D**i**ciendo (Söylüyor)\n\n2. La rebelión de la 'Y' (Cuando hay demasiadas vocales juntas, la 'i' se convierte en 'y'):\n• Leer ➔ Le**y**endo (Okuyor)\n• Oír ➔ O**y**endo (Duyuyor)\n• Ir ➔ **Y**endo (Gidiyor - ¡Este es completamente irregular!)",
        examples: [
          { es: "El bebé está durmiendo.", tr: "Bebek uyuyor." },
          { es: "Estoy pidiendo una pizza.", tr: "Pizza sipariş ediyorum." },
          { es: "Él me está diciendo la verdad.", tr: "O bana doğruyu söylüyor." },
          { es: "Nosotros estamos yendo al hospital.", tr: "Biz hastaneye gidiyoruz." },
          { es: "Ella está leyendo un libro.", tr: "O bir kitap okuyor." }
        ]
      }
    },
    {
      id: "u7_n4", type: "theory", title: "Laboratorio de Sintaxis: Dos Verbos",
      content: {
        concept: "Vamos a analizar una oración en Presente Continuo. Lo más importante de esta lección es que el verbo ESTAR y el GERUNDIO son un matrimonio. ¡Nada puede ponerse en medio de ellos! Si vas a usar la palabra 'no', debes ponerla ANTES del verbo 'estar'.",
        examples: [{ es: "Yo no estoy comiendo carne ahora.", tr: "Şu an et yemiyorum." }],
        analysis: [
          { word: "Yo", type: "pronoun", literal: "Ben", explanation: "Posición 1. Pronombre personal. Como siempre, se puede omitir.", examples: [{ es: "Yo leo.", tr: "Ben okurum." }, { es: "Yo no sé.", tr: "Bilmiyorum." }] },
          { word: "no", type: "adverb", literal: "hayır/değil", explanation: "Posición 2. Adverbio de negación. Fíjate cómo se coloca inmediatamente antes del verbo 'estar', nunca entre los dos verbos.", examples: [{ es: "No quiero.", tr: "İstemiyorum." }, { es: "No estoy feliz.", tr: "Mutlu değilim." }] },
          { word: "estoy", type: "verb", literal: "bulunuyorum (yardımcı)", explanation: "Posición 3. Verbo 'estar' conjugado. Aquí funciona como verbo auxiliar que nos dice QUIÉN hace la acción.", examples: [{ es: "Estoy trabajando.", tr: "Çalışıyorum." }, { es: "Estoy aquí.", tr: "Buradayım." }] },
          { word: "comiendo", type: "verb", literal: "yiyerek (-iyor)", explanation: "Posición 4. Verbo principal en gerundio (-iendo). Nos dice QUÉ acción se está realizando. ¡Nunca se separa de 'estoy'!", examples: [{ es: "Estamos comiendo.", tr: "Yiyoruz." }, { es: "Sigo comiendo.", tr: "Yemeye devam ediyorum." }] },
          { word: "carne", type: "noun", literal: "et", explanation: "Posición 5. Objeto directo. La cosa que no se está comiendo.", examples: [{ es: "Como carne.", tr: "Et yerim." }, { es: "La carne es cara.", tr: "Et pahalıdır." }] },
          { word: "ahora", type: "adverb", literal: "şimdi / şu an", explanation: "Posición 6. Marcador temporal de presente. Subraya que la acción ocurre en este segundo.", examples: [{ es: "Ahora voy.", tr: "Şimdi gidiyorum." }, { es: "Lo quiero ahora.", tr: "Onu şimdi istiyorum." }] }
        ]
      }
    },
    {
      id: "u7_n5", type: "theory", title: "Caja de Herramientas: Vocabulario Temporal",
      content: {
        concept: "Antes de pasar a los textos, vamos a practicar cómo suenan los gerundios más comunes y las palabras que indican tiempo.\n\nToca cada palabra para escucharla y repítela en voz alta.",
        examples: [
          { es: "Ahora / Ahora mismo", tr: "Şimdi / Şu an" },
          { es: "En este momento", tr: "Şu anda" },
          { es: "Todos los días / Siempre", tr: "Her gün / Her zaman (Rutina)" },
          { es: "Haciendo (Hacer)", tr: "Yapıyor (Yapmak)" },
          { es: "Trabajando (Trabajar)", tr: "Çalışıyor (Çalışmak)" },
          { es: "Comiendo (Comer)", tr: "Yiyor (Yemek)" },
          { es: "Durmiendo (Dormir - Irreg.)", tr: "Uyuyor (Uyumak)" },
          { es: "Leyendo (Leer - Irreg.)", tr: "Okuyor (Okumak)" },
          { es: "Yendo (Ir - Irreg.)", tr: "Gidiyor (Gitmek)" },
          { es: "Conduciendo (Conducir)", tr: "Araba kullanıyor (Araba kullanmak)" }
        ]
      }
    },
    {
      id: "u7_n6", type: "reading", title: "Lectura A (Diálogo): La llamada inoportuna",
      content: {
        text: "Suena el teléfono de Carlos. Es su jefe.\n\n— Jefe: ¡Hola Carlos! ¿Qué estás haciendo en este momento? ¿Estás trabajando en el informe?\n— Carlos: Eh... hola, jefe. No, no estoy trabajando ahora mismo. Estoy conduciendo.\n— Jefe: ¿Conduciendo? Pero son las once de la mañana. ¿Adónde estás yendo?\n— Carlos: Estoy yendo al hospital. Mi novia está muy enferma y estamos esperando al médico.\n— Jefe: ¡Oh, lo siento mucho! ¿Qué le pasa?\n— Carlos: Tiene mucha fiebre y está durmiendo ahora. La llamo más tarde, ¿de acuerdo?\n— Jefe: Por supuesto. ¡Que se mejore!",
        translation: "Carlos'un telefonu çalar. Arayan patronudur.\n\n— Patron: Merhaba Carlos! Şu anda ne yapıyorsun? Rapor üzerinde mi çalışıyorsun?\n— Carlos: Şey... merhaba patron. Hayır, şu an çalışmıyorum. Araba kullanıyorum.\n— Patron: Araba mı kullanıyorsun? Ama saat sabahın on biri. Nereye gidiyorsun?\n— Carlos: Hastaneye gidiyorum. Kız arkadaşım çok hasta ve doktoru bekliyoruz.\n— Patron: Oh, çok üzgünüm! Nesi var?\n— Carlos: Çok ateşi var ve şu an uyuyor. Sizi daha sonra arayayım, tamam mı?\n— Patron: Tabii ki. Geçmiş olsun!"
      }
    },
    {
      id: "u7_n7", type: "reading", title: "Lectura B (Narrativa): Un domingo en el parque",
      content: {
        text: "Es domingo por la mañana en el Parque del Retiro en Madrid. El clima es perfecto; hace sol y no hace frío.\n\nYo estoy sentada en un banco, bebiendo un café y observando a la gente. Hay mucha vida hoy. A mi derecha, unos niños están jugando con una pelota roja. Detrás de ellos, un hombre mayor está leyendo el periódico tranquilamente. \n\nTambién hay muchos animales. Dos perros están corriendo detrás de un pájaro, y sus dueños están hablando y riendo. Todo el mundo está disfrutando del día. Yo estoy escribiendo esto en mi diario porque me encanta la paz de este momento.",
        translation: "Madrid'deki Retiro Parkı'nda pazar sabahı. Hava mükemmel; güneşli ve soğuk değil.\n\nBen bir bankta oturuyorum, kahve içiyorum ve insanları izliyorum. Bugün çok hayat var. Sağımda bazı çocuklar kırmızı bir topla oynuyorlar. Onların arkasında yaşlı bir adam sakince gazete okuyor.\n\nAyrıca birçok hayvan var. İki köpek bir kuşun peşinden koşuyor ve sahipleri konuşup gülüyorlar. Herkes günün tadını çıkarıyor. Bunu günlüğüme yazıyorum çünkü bu anın huzuruna bayılıyorum."
      }
    },
    {
      id: "u7_n8", type: "quiz", title: "Práctica y Pronunciación",
      exercises: [
        // 10 Ejercicios de Sintaxis
        { type: "syntax", turkish: "Şu an ne yapıyorsun?", spanish: "Qué estás haciendo ahora", words: ["Qué", "estás", "haciendo", "ahora", "haces"] },
        { type: "syntax", turkish: "Kitap okuyorum (Irregular).", spanish: "Estoy leyendo un libro", words: ["Estoy", "leyendo", "un", "libro", "leo", "leiendo"] },
        { type: "syntax", turkish: "Bebekler şu an uyuyorlar.", spanish: "Los bebés están durmiendo ahora", words: ["Los", "bebés", "están", "durmiendo", "ahora", "dormiendo"] },
        { type: "syntax", turkish: "Müzik dinliyorum.", spanish: "Estoy escuchando música", words: ["Estoy", "escuchando", "música", "escucho"] },
        { type: "syntax", turkish: "O (erkek) ofiste çalışmıyor.", spanish: "Él no está trabajando en la oficina", words: ["Él", "no", "está", "trabajando", "en", "la", "oficina"] },
        { type: "syntax", turkish: "Dışarıda yağmur yağıyor.", spanish: "Está lloviendo fuera", words: ["Está", "lloviendo", "fuera", "Es", "llueve"] },
        { type: "syntax", turkish: "O (kadın) bana doğruyu söylüyor.", spanish: "Ella me está diciendo la verdad", words: ["Ella", "me", "está", "diciendo", "la", "verdad", "deciendo"] },
        { type: "syntax", turkish: "Biz hastaneye gidiyoruz.", spanish: "Nosotros estamos yendo al hospital", words: ["Nosotros", "estamos", "yendo", "al", "hospital", "iendo"] },
        { type: "syntax", turkish: "Siz (resmi tekil) araba kullanıyorsunuz.", spanish: "Usted está conduciendo", words: ["Usted", "está", "conduciendo", "conduce"] },
        { type: "syntax", turkish: "Akşam yemeği pişirmiyorum.", spanish: "No estoy cocinando la cena", words: ["No", "estoy", "cocinando", "la", "cena", "estoy no"] },
        // 10 Ejercicios de Voz
        { type: "speaking", spanish: "¿Qué estás haciendo ahora?", turkish: "Şu an ne yapıyorsun?" },
        { type: "speaking", spanish: "Estoy leyendo un libro muy bueno.", turkish: "Çok iyi bir kitap okuyorum." },
        { type: "speaking", spanish: "El bebé está durmiendo en la habitación.", turkish: "Bebek odada uyuyor." },
        { type: "speaking", spanish: "Ella me está diciendo la verdad.", turkish: "O bana doğruyu söylüyor." },
        { type: "speaking", spanish: "Nosotros estamos yendo al hospital.", turkish: "Biz hastaneye gidiyoruz." },
        { type: "speaking", spanish: "Está lloviendo mucho hoy.", turkish: "Bugün çok yağmur yağıyor." },
        { type: "speaking", spanish: "Estoy pidiendo una pizza.", turkish: "Bir pizza sipariş ediyorum." },
        { type: "speaking", spanish: "No puedo hablar, estoy conduciendo.", turkish: "Konuşamam, araba kullanıyorum." },
        { type: "speaking", spanish: "Los niños están jugando en el parque.", turkish: "Çocuklar parkta oynuyorlar." },
        { type: "speaking", spanish: "Yo no estoy trabajando ahora mismo.", turkish: "Ben şu anda çalışmıyorum." }
      ]
    },
    {
      id: "u7_exam", type: "exam", title: "Examen Final: Unidad 7",
      content: {
        concept: "Enfrenta estas 30 preguntas exclusivas para evaluar tu destreza con el presente continuo (Estar + Gerundio), los verbos irregulares y los marcadores de tiempo.",
        exercises: [
          // 15 de Opción Múltiple
          { type: "multiple_choice", question: "Elige la correcta: 'Nosotros _______ (comer) pizza ahora mismo'.", options: ["comemos", "estamos comiendo", "estamos comando"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Perdón, no puedo hablar, _______ (conducir)'.", options: ["estoy conduciendo", "estoy conducando", "conduzco"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el gerundio del verbo IR (gitmek)?", options: ["iendo", "iendo", "yendo"], correct: 2 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Pizza sipariş ediyor (pedir)'?", options: ["Está pidiendo pizza.", "Está pediendo pizza.", "Es pidiendo pizza."], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el gerundio de TRABAJAR?", options: ["trabajiendo", "trabajando", "trabaja"], correct: 1 },
          { type: "multiple_choice", question: "Rutina vs Ahora: 'Todos los días yo ______ (caminar), pero hoy ______ (ir) en coche'.", options: ["camino / voy", "estoy caminando / estoy yendo", "camino / estoy yendo"], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál es el gerundio irregular de LEER?", options: ["leiendo", "leyendo", "leando"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es el gerundio irregular de DORMIR?", options: ["dormiendo", "durmiendo", "durmando"], correct: 1 },
          { type: "multiple_choice", question: "Yo estoy ______ (escribir) un correo a mi jefe.", options: ["escribiendo", "escribando", "escribo"], correct: 0 },
          { type: "multiple_choice", question: "Ella me está ______ (decir) la verdad.", options: ["deciendo", "diciendo", "dicando"], correct: 1 },
          { type: "multiple_choice", question: "Para la frase 'Siempre (her zaman) bebo agua', usamos:", options: ["El Presente (Bebo)", "El Presente Continuo (Estoy bebiendo)"], correct: 0 },
          { type: "multiple_choice", question: "Tú estás ______ (escuchar) música muy alta.", options: ["escuchiendo", "escuchando", "escuchas"], correct: 1 },
          { type: "multiple_choice", question: "¿Dónde se pone el 'NO' en una oración continua?", options: ["Antes del verbo ESTAR (No estoy comiendo)", "En medio (Estoy no comiendo)"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué estás ______ (hacer) aquí?", options: ["hacendo", "haciendo", "hago"], correct: 1 },
          { type: "multiple_choice", question: "Ellos están ______ (hablar) español muy rápido.", options: ["habliendo", "hablando", "hablan"], correct: 1 },
          // 15 de Sintaxis
          { type: "syntax", turkish: "Müzik dinliyorum.", spanish: "Estoy escuchando música", words: ["Estoy", "escuchando", "música", "escucho"] },
          { type: "syntax", turkish: "O (erkek) ofiste çalışmıyor.", spanish: "Él no está trabajando en la oficina", words: ["Él", "no", "está", "trabajando", "en", "la", "oficina"] },
          { type: "syntax", turkish: "Şu an yağmur yağıyor.", spanish: "Está lloviendo ahora", words: ["Está", "lloviendo", "ahora", "Es", "lluvia"] },
          { type: "syntax", turkish: "O (kadın) bana doğru (la verdad) söylüyor (decir).", spanish: "Ella me está diciendo la verdad", words: ["Ella", "me", "está", "diciendo", "la", "verdad", "deciendo"] },
          { type: "syntax", turkish: "Biz hastaneye gidiyoruz (ir).", spanish: "Nosotros estamos yendo al hospital", words: ["Nosotros", "estamos", "yendo", "al", "hospital", "iendo"] },
          { type: "syntax", turkish: "Köpek yatağın altında uyuyor.", spanish: "El perro está durmiendo debajo de la cama", words: ["El", "perro", "está", "durmiendo", "debajo", "de", "la", "cama", "dormiendo"] },
          { type: "syntax", turkish: "Su içiyorum.", spanish: "Estoy bebiendo agua", words: ["Estoy", "bebiendo", "agua", "bebo"] },
          { type: "syntax", turkish: "Biz İspanyolca öğreniyoruz.", spanish: "Estamos aprendiendo español", words: ["Estamos", "aprendiendo", "español", "aprendemos"] },
          { type: "syntax", turkish: "Sen ne yiyorsun?", spanish: "Qué estás comiendo", words: ["Qué", "estás", "comiendo", "comes"] },
          { type: "syntax", turkish: "Onlar televizyon izliyorlar.", spanish: "Ellos están viendo la televisión", words: ["Ellos", "están", "viendo", "la", "televisión"] },
          { type: "syntax", turkish: "Kız kardeşim gitar çalıyor.", spanish: "Mi hermana está tocando la guitarra", words: ["Mi", "hermana", "está", "tocando", "la", "guitarra"] },
          { type: "syntax", turkish: "Sen bana (a mí) bakıyorsun (mirar).", spanish: "Tú me estás mirando", words: ["Tú", "me", "estás", "mirando", "miras"] },
          { type: "syntax", turkish: "Ben akşam yemeği pişiriyorum.", spanish: "Yo estoy cocinando la cena", words: ["Yo", "estoy", "cocinando", "la", "cena"] },
          { type: "syntax", turkish: "Biz parkta yürüyoruz.", spanish: "Nosotros estamos caminando por el parque", words: ["Nosotros", "estamos", "caminando", "por", "el", "parque"] },
          { type: "syntax", turkish: "O (erkek) ödev (los deberes) yapıyor.", spanish: "Él está haciendo los deberes", words: ["Él", "está", "haciendo", "los", "deberes"] }
        ]
      }
    }
  ]
};
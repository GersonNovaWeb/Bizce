/**
 * UNIDAD 6 - NIVEL B2: EL COMUNICADOR INDEPENDIENTE
 * Foco: Impersonalidad (Se impersonal, "Uno", "Tú" genérico, 3ª plural)
 * Tema: Normas sociales, leyes, rumores y verdades generales.
 */

export const unidad6 = {
  id: "b2_u6",
  title: "Unidad 6: El sujeto invisible",
  description: "Aprende a hablar de reglas y verdades universales sin señalar a nadie. Domina el 'SE' impersonal y las formas de ocultar al sujeto.",
  nodes: [
    {
      id: "b2_u6_n1",
      type: "theory",
      title: "Teoría I: El 'SE' Impersonal (Reglas Generales)",
      content: {
        concept: "En español, cuando queremos decir que 'la gente en general' hace algo, o cuando hablamos de una norma que aplica a todos, usamos el **'SE' impersonal**.\n\n### 1. La Estructura Rígida\nA diferencia de la pasiva refleja (donde el verbo podía ser plural), en la impersonalidad pura el verbo va **SIEMPRE EN 3ª PERSONA DEL SINGULAR**.\n\n• **SE + Verbo en Singular**\n\n### 2. ¿Cuándo es impersonal?\nLo identificamos porque suele ir acompañado de verbos intransitivos (sin objeto) o cuando hablamos de personas en general usando la preposición 'A'.\n*Ej: Se vive muy bien aquí (Aquí vive la gente en general).* / *Se castiga a los culpables.*",
        examples: [
          { es: "En España se cena muy tarde.", tr: "İspanya'da çok geç akşam yemeği yenir (insanlar yer)." },
          { es: "Se trabaja mucho en esta empresa.", tr: "Bu şirkette çok çalışılır." },
          { es: "No se puede fumar en el hospital.", tr: "Hastanede sigara içilemez." }
        ]
      }
    },
    {
      id: "b2_u6_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Normas)",
      exercises: [
        { type: "syntax", turkish: "Burada iyi yaşanır.", spanish: "Se vive bien aquí", words: ["Se", "vive", "bien", "aquí", "viven"] },
        { type: "syntax", turkish: "Bu kütüphanede uyunmaz.", spanish: "No se duerme en esta biblioteca", words: ["No", "se", "duerme", "en", "esta", "biblioteca", "duermen"] },
        { type: "syntax", turkish: "Türkiye'de çok çay içilir.", spanish: "Se bebe mucho té en Turquía", words: ["Se", "bebe", "mucho", "té", "en", "Turquía", "beben"] },
        { type: "syntax", turkish: "Müzede fotoğraf çekilmez (Hacer fotos).", spanish: "No se hacen fotos en el museo", words: ["No", "se", "hacen", "fotos", "en", "el", "museo", "hace"] },
        { type: "syntax", turkish: "Hafta sonları çok dinlenilir.", spanish: "Se descansa mucho los fines de semana", words: ["Se", "descansa", "mucho", "los", "fines", "de", "semana"] },
        { type: "syntax", turkish: "Suçlulara (a los criminales) burada yardım edilmez.", spanish: "No se ayuda a los criminales aquí", words: ["No", "se", "ayuda", "a", "los", "criminales", "aquí", "ayudan"] },
        { type: "syntax", turkish: "Bu şehirde çok yürünür.", spanish: "Se camina mucho en esta ciudad", words: ["Se", "camina", "mucho", "en", "esta", "ciudad"] },
        { type: "syntax", turkish: "İspanyolca çok hızlı konuşulur.", spanish: "Se habla español muy rápido", words: ["Se", "habla", "español", "muy", "rápido", "hablan"] },
        { type: "syntax", turkish: "Partide çok dans edilir.", spanish: "Se baila mucho en la fiesta", words: ["Se", "baila", "mucho", "en", "la", "fiesta"] },
        { type: "syntax", turkish: "Yalan söylenmez.", spanish: "No se dicen mentiras", words: ["No", "se", "dicen", "mentiras", "dice"] }
      ]
    },
    {
      id: "b2_u6_n3",
      type: "theory",
      title: "Teoría II: 'Uno', 'Tú' y 'Ellos' (Otras Impersonalidades)",
      content: {
        concept: "El 'SE' no es la única forma de ocultar al sujeto. Dependiendo de la cercanía con el oyente, tenemos otras opciones profesionales:\n\n### 1. El uso de 'UNO/A' (Registro Culto)\nSe usa para incluirse a uno mismo en una generalización. Es muy común en entrevistas.\n*Ej: Uno nunca sabe qué va a pasar.* (İnsan asla ne olacağını bilemez).\n\n### 2. El 'TÚ' Genérico (Registro Coloquial)\nNo le hablas a la persona de enfrente, hablas de cualquier persona. Es muy común para dar consejos.\n*Ej: Si vas a Madrid, tienes que ver el Prado.* (Madrid'e gidersen -sen değil, herhangi biri- Prado'yu görmelisin).\n\n### 3. La 3ª Persona Plural (Rumores)\nUsamos 'Ellos' (sin decir quiénes) para hablar de noticias o rumores.\n*Ej: Dicen que va a llover.* (Yağmur yağacağını söylüyorlar/söyleniyor).",
        examples: [
          { es: "A veces, uno se siente solo.", tr: "Bazen insan kendini yalnız hisseder." },
          { es: "En este país, si no tienes contactos, no consigues trabajo.", tr: "Bu ülkede tanıdığın yoksa iş bulamazsın (Tú genérico)." },
          { es: "Llaman a la puerta.", tr: "Kapı çalınıyor (Birileri çalıyor)." }
        ]
      }
    },
    {
      id: "b2_u6_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Generalizaciones)",
      exercises: [
        { type: "speaking", spanish: "Uno hace lo que puede en esta vida", turkish: "İnsan bu hayatta elinden geleni yapar." },
        { type: "speaking", spanish: "Si estudias mucho apruebas el examen", turkish: "Çok çalışırsan sınavı geçersin (herhangi biri)." },
        { type: "speaking", spanish: "Dicen que el próximo año será mejor", turkish: "Gelecek yılın daha iyi olacağını söylüyorlar." },
        { type: "speaking", spanish: "En este restaurante se come de maravilla", turkish: "Bu restoranda harika yemek yenir (insanlar yer)." },
        { type: "speaking", spanish: "Cuando viajas conoces gente nueva", turkish: "Seyahat ettiğinde yeni insanlar tanırsın." },
        { type: "speaking", spanish: "Me han dicho que te vas a casar", turkish: "Evleneceğini söylediler (bana söylendi)." },
        { type: "speaking", spanish: "Uno no puede estar en todo", turkish: "İnsan her şeye yetişemez." },
        { type: "speaking", spanish: "Se dice que habrá cambios en la ley", turkish: "Yasada değişiklikler olacağı söyleniyor." },
        { type: "speaking", spanish: "Me robaron el bolso en el metro", turkish: "Metroda çantamı çaldılar (Hırsızı bilmiyorum)." },
        { type: "speaking", spanish: "Se vive una sola vez", turkish: "İnsan bir kez yaşar (Bir kez yaşanır)." }
      ]
    },
    {
      id: "b2_u6_n5",
      type: "theory",
      title: "El Reto Turco: La Omisión del Sujeto",
      content: {
        concept: "En turco, el sujeto se omite constantemente porque los sufijos del verbo ya dicen quién habla. En español también podemos hacerlo, pero en B2 debemos usar la impersonalidad para **objetivizar** el discurso.\n\n### Comparativa de matices:\n• **'Hata yaptım'** (Cometí un error): Yo asumo la culpa. \n• **'Hata yapıldı'** (Se cometió un error): No hay culpable, el error 'surgió'.\n\n⚠️ **ERROR COMÚN:** Muchos estudiantes dicen 'Gente dice que...' (İnsanlar diyor ki...). En español eso suena poco natural. Un nativo dirá siempre: **'SE DICE QUE...'** o **'DICEN QUE...'**.",
        examples: [
          { es: "Se cree que la economía mejorará.", tr: "Ekonominin iyileşeceğine inanılıyor (creerse)." },
          { es: "Me han robado (Ellos).", tr: "Soyuldum (Birileri beni soydu)." }
        ]
      }
    },
    {
      id: "b2_u6_n6",
      type: "reading",
      title: "Lectura Crítica: Tradiciones y Etiquetas",
      content: {
        text: "En cada cultura se manejan códigos de conducta diferentes. Por ejemplo, en muchos países de Europa se valora mucho la puntualidad. Si llegas tarde a una cita, se considera una falta de respeto. \n\nPor otro lado, cuando uno viaja a países mediterráneos, se da cuenta de que el tiempo se gestiona de forma más flexible. Dicen que en España no se debe llegar exactamente a la hora si es una fiesta privada, ya que se espera que el anfitrión termine de prepararse. \n\nEn Japón, se dice que es obligatorio quitarse los zapatos antes de entrar en una casa. Son reglas que no están escritas, pero que uno debe aprender si quiere integrarse. Al final, se trata de respeto: allí donde fueres, haz lo que vieres.",
        translation: "Her kültürde farklı davranış kodları yönetilir. Örneğin, birçok Avrupa ülkesinde dakikliğe çok değer verilir. Bir randevuya geç kalırsanız, bu bir saygısızlık olarak kabul edilir (se considera).\n\nÖte yandan, insan Akdeniz ülkelerine seyahat ettiğinde (cuando uno viaja), zamanın daha esnek yönetildiğini fark eder. İspanya'da özel bir partiyse tam saatinde varılmaması gerektiğini (no se debe llegar) söylerler (dicen), zira ev sahibinin hazırlanmayı bitirmesi beklenir (se espera).\n\nJaponya'da eve girmeden önce ayakkabıların çıkarılmasının zorunlu olduğu söylenir (se dice). Bunlar yazılı olmayan ama insanın uyum sağlamak istiyorsa öğrenmesi gereken (uno debe aprender) kurallardır. Sonuçta mesele saygıdır: Gittiğin yerin kurallarına uy (Nereye gidersen oranın gördüğünü yap)."
      }
    },
    {
      id: "b2_u6_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto B2 (Alta Densidad)",
      exercises: [
        { type: "syntax", turkish: "Dakikliğe çok değer verilir (Valorar).", spanish: "Se valora mucho la puntualidad", words: ["Se", "valora", "mucho", "la", "puntualidad", "valoran"] },
        { type: "syntax", turkish: "İnsan (Uno) seyahat ettiğinde çok şey öğrenir.", spanish: "Cuando uno viaja aprende muchas cosas", words: ["Cuando", "uno", "viaja", "aprende", "muchas", "cosas"] },
        { type: "syntax", turkish: "Hastanelerde sigara içilmez.", spanish: "No se fuma en los hospitales", words: ["No", "se", "fuma", "en", "los", "hospitales", "fuman"] },
        { type: "syntax", turkish: "Yarın yağmur yağacağını söylüyorlar (Dicen).", spanish: "Dicen que mañana va a llover", words: ["Dicen", "que", "mañana", "va", "a", "llover"] },
        { type: "syntax", turkish: "Ev sahibi (el anfitrión) beklenir.", spanish: "Se espera al anfitrión", words: ["Se", "espera", "al", "anfitrión", "esperan"] },
        { type: "speaking", spanish: "En este país se vive muy bien", turkish: "Bu ülkede çok iyi yaşanır." },
        { type: "speaking", spanish: "Uno nunca sabe cuándo llegará el amor", turkish: "Aşkın ne zaman geleceğini insan asla bilemez." },
        { type: "speaking", spanish: "Me han dicho que el examen fue fácil", turkish: "Sınavın kolay olduğunu söylediler." },
        { type: "speaking", spanish: "Se prohibe el paso a personas ajenas", turkish: "Yabancıların girişi yasaktır (geçiş yasaklanır)." },
        { type: "speaking", spanish: "Dicen que el café turco es el mejor", turkish: "Türk kahvesinin en iyisi olduğunu söylüyorlar." }
      ]
    },
    {
      id: "b2_u6_n8",
      type: "theory",
      title: "Teoría III: Pragmática y Rumores",
      content: {
        concept: "Usamos la impersonalidad para proteger la fuente de la información o para dar noticias de las que no estamos seguros.\n\n### Estructuras de Rumor:\n• **Se rumorea que...** (Söylentiye göre...)\n• **Se comenta que...** (Konuşuluyor ki...)\n• **Se cuenta que...** (Anlatılıyor ki...)\n• **Se sospecha que...** (Şüpheleniliyor ki...)\n\n### El 'TÚ' de la anécdota:\nCuando contamos una historia para que el otro se imagine en ella, usamos el tú genérico.\n*Ej: Entras en la habitación y ves que no hay nadie...* (Odaya giriyorsun -sen değil, herhangi biri- ve kimsenin olmadığını görüyorsun).",
        examples: [
          { es: "Se rumorea que van a bajar los impuestos.", tr: "Vergilerin düşürüleceği söyleniyor (söylenti var)." },
          { es: "Se sospecha que hubo un fraude.", tr: "Bir dolandırıcılık olduğundan şüpheleniliyor." }
        ]
      }
    },
    {
      id: "b2_u6_n9",
      type: "theory",
      title: "Sintaxis Visual: Evitar la Ambigüedad",
      content: {
        concept: "Analizaremos cómo una frase puede ser impersonal o pasiva refleja dependiendo de la concordancia del verbo.",
        examples: [{ es: "Se entrevistó a los candidatos pero no se eligió a ninguno.", tr: "Adaylarla mülakat yapıldı ama hiçbiri seçilmedi." }],
        analysis: [
          { word: "Se entrevistó", type: "verb", literal: "Mülakat yapıldı", explanation: "Impersonal pura. El verbo va en SINGULAR porque hay una 'A' personal. No importa que 'candidatos' sea plural.", examples: [] },
          { word: "a los candidatos", type: "noun", literal: "adaylarla", explanation: "Objeto de la entrevista.", examples: [] },
          { word: "pero", type: "connector", literal: "ama", explanation: "Contraste.", examples: [] },
          { word: "no se eligió", type: "verb", literal: "seçilmedi", explanation: "Nuevamente impersonal en singular debido a la 'A' que sigue.", examples: [] },
          { word: "a ninguno", type: "pronoun", literal: "hiçbiri", explanation: "Referencia a las personas.", examples: [] }
        ]
      }
    },
    {
      id: "b2_u6_n10",
      type: "theory",
      title: "Caja de Herramientas: Sociología y Cultura",
      content: {
        concept: "Para hablar de normas y sociedad, necesitas estos términos técnicos:\n\n• **La norma / La regla** (Kural)\n• **La conducta / El comportamiento** (Davranış)\n• **El ciudadano** (Vatandaş)\n• **La falta de respeto** (Saygısızlık)\n• **Ser obligatorio** (Zorunlu olmak)\n• **Estar prohibido** (Yasak olmak)\n• **El anfitrión / El invitado** (Ev sahibi / Misafir)\n• **La etiqueta** (Görgü kuralları)\n• **Valorar** (Değer vermek)",
        examples: [
          { es: "En esta casa se valora la honestidad.", tr: "Bu evde dürüstlüğe değer verilir." },
          { es: "Es obligatorio llevar casco en la moto.", tr: "Motosiklette kask takmak zorunludur." },
          { es: "Se prohibe gritar en la biblioteca.", tr: "Kütüphanede bağırmak yasaktır." }
        ]
      }
    },
    {
      id: "b2_u6_n11",
      type: "theory",
      title: "Taller de Producción: Manual de Etiqueta Turca",
      content: {
        concept: "Vas a escribir una guía para un español que visita Turquía por primera vez.\n\n**Instrucciones:**\nEscribe un texto (mínimo 10-12 líneas) describiendo cómo comportarse en Turquía.\n1. Usa el **'SE' impersonal** para las reglas (Ej: Se debe quitar los zapatos, se bebe mucho té...).\n2. Usa el **'UNO'** para reflexiones generales (Ej: Uno se siente muy bienvenido).\n3. Usa el **'TÚ' genérico** para dar consejos de viaje.\n4. Menciona al menos 3 verbos de la Caja de Herramientas.\n\n**Inspiración:** 'En Turquía se valora mucho la hospitalidad. Cuando vas a una casa, tienes que...'",
        examples: []
      }
    },
    {
      id: "b2_u6_n12",
      type: "exam",
      title: "Examen de Unidad: El Sujeto Invisible",
      content: {
        concept: "Evaluación técnica sobre la impersonalidad y los diversos usos de 'SE', 'UNO' y la 3ª plural.",
        exercises: [
          { type: "multiple_choice", question: "Si hay una 'A' personal detrás, el verbo 'SE' va en:", options: ["Singular siempre", "Plural siempre", "Depende del objeto"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es correcta?", options: ["Se buscan a los niños.", "Se busca a los niños.", "Se buscan los niños."], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'İnsan asla bilemez'?", options: ["Uno nunca sabe.", "Uno nunca sepan.", "Yo nunca sé."], correct: 0 },
          { type: "multiple_choice", question: "En la frase 'Dicen que va a llover', ¿quién es el sujeto?", options: ["Ellos (específicos)", "Nadie en particular (Rumor)", "Nosotros"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es el registro del 'TÚ' genérico?", options: ["Muy formal", "Coloquial/Normal", "Solo escrito"], correct: 1 },
          { type: "multiple_choice", question: "En el hospital ______ (prohibir) fumar.", options: ["se prohíben", "se prohíbe", "prohíben"], correct: 1 },
          { type: "multiple_choice", question: "Aquí ______ (vender) casas baratas (Pasiva refleja).", options: ["se vende", "se venden", "venden"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Se rumorea que...'?", options: ["Eminim ki...", "Söylentiye göre...", "Biliyorum ki..."], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se traduce 'Kapı çalınıyor'?", options: ["Llaman a la puerta.", "Se llama la puerta.", "Llamo a la puerta."], correct: 0 },
          { type: "multiple_choice", question: "Cuando ______ (viajar - tú genérico), aprendes mucho.", options: ["viajes", "viajas", "viajaste"], correct: 1 },
          { type: "syntax", turkish: "Burada çok iyi yenir (Comer).", spanish: "Se come muy bien aquí", words: ["Se", "come", "muy", "bien", "aquí", "comen"] },
          { type: "syntax", turkish: "İnsan (Uno) her zaman doğruyu söylemeli.", spanish: "Uno siempre debe decir la verdad", words: ["Uno", "siempre", "debe", "decir", "la", "verdad", "deben"] },
          { type: "syntax", turkish: "Yalan söylenmez (Decir mentiras).", spanish: "No se dicen mentiras", words: ["No", "se", "dicen", "mentiras", "dice"] },
          { type: "syntax", turkish: "Müdürü arıyorlar (Onu arıyorlar).", spanish: "Buscan al director", words: ["Buscan", "al", "director", "Busca"] },
          { type: "syntax", turkish: "Kütüphanede sessiz olunur (Hacer).", spanish: "Se hace silencio en la biblioteca", words: ["Se", "hace", "silencio", "en", "la", "biblioteca", "hacen"] },
          { type: "syntax", turkish: "İspanya'da çok uyunur (Dormir).", spanish: "En España se duerme mucho", words: ["En", "España", "se", "duerme", "mucho", "duermen"] },
          { type: "syntax", turkish: "Bana her şeyi anlattılar (Ellos plural).", spanish: "Me contaron todo", words: ["Me", "contaron", "todo", "contó"] },
          { type: "syntax", turkish: "Burada İspanyolca konuşulur.", spanish: "Aquí se habla español", words: ["Aquí", "se", "habla", "español", "hablan"] },
          { type: "syntax", turkish: "İnsan bazen yorulur (Uno).", spanish: "Uno a veces se cansa", words: ["Uno", "a", "veces", "se", "cansa", "cansan"] },
          { type: "syntax", turkish: "Meksika'da çok acı yenir.", spanish: "En México se come mucho picante", words: ["En", "México", "se", "come", "mucho", "picante"] }
        ]
      }
    }
  ]
};
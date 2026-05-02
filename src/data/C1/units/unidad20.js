/**
 * UNIDAD 20 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Preparación DELE C1, Oratoria de Élite, Repaso General y Graduación.
 * Estructura: 16 Nodos (12 Normales + 3 Repasos + 1 Mega Examen de 100 Preguntas).
 */

export const unidad20 = {
  id: "c1_u20",
  title: "Unidad 20: La Cima del Olimpo",
  description: "Has llegado a la meta. Pule tu oratoria, repasa todo el nivel C1 y enfréntate al Mega Examen Final de 100 preguntas para obtener tu título de Maestro del Matiz.",
  nodes: [
    {
      id: "c1_u20_n1",
      type: "theory",
      title: "Teoría I: La Mentalidad DELE C1",
      content: {
        concept: "Alcanzar el nivel C1 certificado (como en el examen DELE del Instituto Cervantes) significa que posees una **competencia lingüística eficaz**. Ya no solo te comunicas; ahora persuades, debates y comprendes textos complejos sin esfuerzo.\n\n### Los Pilares del Bilingüismo Real:\n1. **Erradicación de errores fósiles:** Un estudiante C1 no puede dudar si se dice 'el problema' o 'la problema', ni puede usar 'por' en lugar de 'para'. Estos errores básicos restan credibilidad a un discurso avanzado.\n2. **Riqueza Léxica:** Usar sinónimos cultos. En lugar de decir 'Es un problema grande', debes decir 'Supone un obstáculo mayúsculo'.\n3. **Flexibilidad Sintáctica:** Capacidad para alterar el orden de la frase para dar énfasis (*Ej: 'Poco me importa lo que digan' en lugar de 'No me importa mucho'*).\n\nEn estos primeros nodos, puliremos esa fachada profesional para que tu español suene 100% nativo.",
        examples: [
          { es: "Supone un reto mayúsculo para la sociedad actual.", tr: "Günümüz toplumu için büyük bir zorluk teşkil ediyor." },
          { es: "Poco o nada me importa su opinión al respecto.", tr: "Bu konudaki fikri benim için çok az veya hiç önemli değil." },
          { es: "Huelga decir que las consecuencias serán nefastas.", tr: "Sonuçların feci olacağını söylemeye gerek yok." }
        ]
      }
    },
    {
      id: "c1_u20_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Español de Élite)",
      exercises: [
        { type: "syntax", turkish: "Bu durum büyük (mayúsculo) bir engel teşkil ediyor (suponer).", spanish: "Esta situación supone un obstáculo mayúsculo", words: ["Esta", "situación", "supone", "un", "obstáculo", "mayúsculo", "es"] },
        { type: "syntax", turkish: "Bu konudaki (al respecto) fikrin (tu opinión) umurumda değil (Poco me importa).", spanish: "Poco me importa tu opinión al respecto", words: ["Poco", "me", "importa", "tu", "opinión", "al", "respecto", "no"] },
        { type: "syntax", turkish: "Söylemeye gerek yok ki (Huelga decir) sonuçlar (consecuencias) feci (nefastas) olacak.", spanish: "Huelga decir que las consecuencias serán nefastas", words: ["Huelga", "decir", "que", "las", "consecuencias", "serán", "nefastas"] },
        { type: "syntax", turkish: "Bu sorunlara göğüs germeliyiz (hacer frente a).", spanish: "Debemos hacer frente a estos problemas", words: ["Debemos", "hacer", "frente", "a", "estos", "problemas", "hacemos"] },
        { type: "syntax", turkish: "Açıkça ortaya konuldu ki (Se ha puesto de manifiesto) plan başarısız oldu.", spanish: "Se ha puesto de manifiesto que el plan fracasó", words: ["Se", "ha", "puesto", "de", "manifiesto", "que", "el", "plan", "fracasó"] },
        { type: "syntax", turkish: "Ne pahasına olursa olsun (Cueste lo que cueste) hedefimize ulaşacağız (alcanzar).", spanish: "Alcanzaremos nuestro objetivo cueste lo que cueste", words: ["Alcanzaremos", "nuestro", "objetivo", "cueste", "lo", "que", "cueste"] },
        { type: "syntax", turkish: "Riskli olduğunu bile bile (A sabiendas de que) sözleşmeyi imzaladı.", spanish: "Firmó el contrato a sabiendas de que era arriesgado", words: ["Firmó", "el", "contrato", "a", "sabiendas", "de", "que", "era", "arriesgado"] },
        { type: "syntax", turkish: "Son kertede (En última instancia) sorumluluk (la responsabilidad) sana aittir (recaer en).", spanish: "En última instancia la responsabilidad recae en ti", words: ["En", "última", "instancia", "la", "responsabilidad", "recae", "en", "ti"] },
        { type: "syntax", turkish: "Buna rağmen (No obstante) proaktif bir duruş (postura) sergilemeliyiz.", spanish: "No obstante debemos mantener una postura proactiva", words: ["No", "obstante", "debemos", "mantener", "una", "postura", "proactiva"] },
        { type: "syntax", turkish: "Bana öyle geliyor ki (Para mí que) başkan yanılıyor (equivocarse).", spanish: "Para mí que el presidente se equivoca", words: ["Para", "mí", "que", "el", "presidente", "se", "equivoca", "equivoca"] }
      ]
    },
    {
      id: "c1_u20_n3",
      type: "theory",
      title: "Teoría II: Precisión Léxica y Falsos Sinónimos",
      content: {
        concept: "Un error típico en C1 es usar palabras que significan lo mismo en el diccionario, pero que los nativos usan en contextos totalmente distintos.\n\n### 1. Escuchar vs. Oír\n• **Oír** (Duymak): Acción física e involuntaria. *'No te oigo, hay mucho ruido'.*\n• **Escuchar** (Dinlemek): Acción voluntaria, prestando atención. *'Escucha lo que te digo'.*\n\n### 2. Mirar vs. Ver\n• **Ver** (Görmek): Capacidad física o captar una imagen. *'Ayer vi a tu hermano'.*\n• **Mirar** (Bakmak): Dirigir la vista intencionalmente. *'Mírame a los ojos'.*\n\n### 3. Entender vs. Comprender\n• **Entender** (Anlamak - superficial): Captar las palabras. *'No entiendo el inglés'.*\n• **Comprender** (Anlamak - profundo/empatía): Captar el sentido profundo o los sentimientos. *'Comprendo tu dolor'.*\n\n### 4. Intentar vs. Probar\n• **Intentar** (Çabalamak/Denemek): Hacer un esfuerzo por lograr algo. *'Intenté abrir la puerta'.*\n• **Probar** (Test etmek/Tatmak): Experimentar para ver cómo funciona o sabe. *'Prueba esta sopa'.*",
        examples: [
          { es: "Oigo un ruido extraño, pero no veo nada.", tr: "Garip bir ses duyuyorum ama hiçbir şey görmüyorum." },
          { es: "Entiendo tus palabras, pero no comprendo tu actitud.", tr: "Sözlerini anlıyorum ama tavrını (derinlemesine) anlamıyorum." },
          { es: "Intenté llamarte, pero probaré de nuevo más tarde.", tr: "Seni aramaya çalıştım, ama daha sonra tekrar deneyeceğim." }
        ]
      }
    },
    {
      id: "c1_u20_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Precisión Léxica)",
      exercises: [
        { type: "speaking", spanish: "Te oigo perfectamente pero no te escucho", turkish: "Seni mükemmel duyuyorum ama seni dinlemiyorum." },
        { type: "speaking", spanish: "Mira esa pintura es preciosa", turkish: "Şu tabloya bak, çok güzel." },
        { type: "speaking", spanish: "Ayer vi una película interesante", turkish: "Dün ilginç bir film gördüm (izledim)." },
        { type: "speaking", spanish: "Comprendo perfectamente tu frustración", turkish: "Hayal kırıklığını mükemmel bir şekilde anlıyorum." },
        { type: "speaking", spanish: "Intenté arreglarlo pero no pude", turkish: "Onu tamir etmeye çalıştım ama yapamadım." },
        { type: "speaking", spanish: "Prueba este vino está delicioso", turkish: "Bu şarabı dene, çok lezzetli." },
        { type: "speaking", spanish: "No entiendo la letra de este documento", turkish: "Bu belgenin yazısını (harflerini) anlamıyorum." },
        { type: "speaking", spanish: "Oí un disparo a lo lejos", turkish: "Uzaktan bir silah sesi duydum." },
        { type: "speaking", spanish: "Escúchame atentamente por favor", turkish: "Lütfen beni dikkatlice dinle." },
        { type: "speaking", spanish: "He probado varias opciones sin éxito", turkish: "Birkaç seçeneği başarısız bir şekilde test ettim (denedim)." }
      ]
    },
    {
      id: "c1_u20_n5",
      type: "theory",
      title: "El Reto Turco: Erradicar el Spanglish y el 'Turcañol'",
      content: {
        concept: "En el último nivel de aprendizaje, el mayor enemigo es la traducción mental.\n\n🇹🇷 **El 'Turcañol':** Ocurre cuando calcas una estructura turca al español.\n• ❌ *'Yo tomaré una ducha'* (Duş alacağım). \n• ✅ Correcto: **'Me ducharé'** o **'Me daré una ducha'**.\n• ❌ *'Tengo 25 años viejo'* (25 yaşındayım - calco del inglés 'years old'). \n• ✅ Correcto: **'Tengo 25 años'**.\n• ❌ *'Hacer una decisión'* (Karar vermek). \n• ✅ Correcto: **'Tomar una decisión'**.\n\n🇪🇸 **Pensar en Español:** \nA partir de hoy, debes dejar de buscar el equivalente a la palabra turca. Tu mente debe ir directamente al 'bloque' de la frase española. Si la situación es de duda, tu cerebro debe encender automáticamente la luz del 'Subjuntivo' sin pasar por el turco.",
        examples: [
          { es: "Debemos tomar una decisión hoy mismo.", tr: "Bugün bir karar vermeliyiz." },
          { es: "No tiene sentido discutir por esto.", tr: "Bunun için tartışmanın bir anlamı yok (Bunun anlamı yok)." }
        ]
      }
    },
    {
      id: "c1_u20_n6",
      type: "reading",
      title: "Lectura Crítica: El español en el mundo",
      content: {
        text: "El español es una lengua viva y en constante evolución. Con más de quinientos millones de hablantes nativos, es el segundo idioma materno más hablado del planeta. A medida que las fronteras se difuminan, el idioma se enriquece con neologismos y modismos de ambos lados del Atlántico.\n\nPara un estudiante avanzado, alcanzar la maestría no implica hablar sin acento extranjero —el cual, a fin de cuentas, es un reflejo de nuestra historia y cultura—, sino poseer la capacidad de adaptar el registro al contexto comunicativo. Ser verdaderamente bilingüe significa poder comprender una metáfora de Borges, reírse con un chiste callejero en Madrid y redactar un informe financiero impecable. \n\nHuelga decir que el camino hasta aquí ha exigido tenacidad y esfuerzo. Sin embargo, quienes perseveran descubren que aprender español no es solo aprender a hablar de otra manera, sino aprender a sentir el mundo con una pasión diferente.",
        translation: "İspanyolca canlı ve sürekli evrim geçiren bir dildir. Beş yüz milyondan fazla anadil konuşuruyla, gezegende en çok konuşulan ikinci anadildir. Sınırlar bulanıklaştıkça, dil Atlantik'in her iki yakasından gelen yeni kelimeler (neologismos) ve deyimlerle zenginleşmektedir.\n\nİleri düzey bir öğrenci için ustalığa ulaşmak, yabancı aksanı olmadan konuşmak anlamına gelmez —ki bu nihayetinde tarihimizin ve kültürümüzün bir yansımasıdır—, aksine kayıt/üslubu iletişimsel bağlama uyarlama yeteneğine sahip olmaktır. Gerçekten iki dilli olmak; Borges'in bir metaforunu anlayabilmek, Madrid'de bir sokak şakasına gülebilmek ve kusursuz bir finansal rapor hazırlayabilmek demektir.\n\nBuraya kadar olan yolun azim ve çaba gerektirdiğini söylemeye gerek yok (Huelga decir). Ancak, sebat edenler İspanyolca öğrenmenin sadece başka bir şekilde konuşmayı öğrenmek değil, aynı zamanda dünyayı farklı bir tutkuyla hissetmeyi öğrenmek olduğunu keşfederler."
      }
    },
    {
      id: "c1_u20_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto C1 (Oratoria)",
      exercises: [
        { type: "syntax", turkish: "Bir karar vermeliyiz (tomar).", spanish: "Debemos tomar una decisión", words: ["Debemos", "tomar", "una", "decisión", "hacer"] },
        { type: "syntax", turkish: "Sınırlar bulanıklaştıkça (A medida que) dil zenginleşiyor.", spanish: "A medida que las fronteras se difuminan el idioma se enriquece", words: ["A", "medida", "que", "las", "fronteras", "se", "difuminan", "el", "idioma", "se", "enriquece"] },
        { type: "syntax", turkish: "Nihayetinde (A fin de cuentas) o kültürümüzün bir yansımasıdır.", spanish: "A fin de cuentas es un reflejo de nuestra cultura", words: ["A", "fin", "de", "cuentas", "es", "un", "reflejo", "de", "nuestra", "cultura"] },
        { type: "syntax", turkish: "Sebat edenler (Quienes perseveran) gerçeği keşfederler.", spanish: "Quienes perseveran descubren la verdad", words: ["Quienes", "perseveran", "descubren", "la", "verdad"] },
        { type: "syntax", turkish: "Söylemeye gerek yok ki (Huelga decir) çaba (el esfuerzo) büyüktü.", spanish: "Huelga decir que el esfuerzo fue inmenso", words: ["Huelga", "decir", "que", "el", "esfuerzo", "fue", "inmenso"] },
        { type: "speaking", spanish: "El español es una lengua viva y en constante evolución", turkish: "İspanyolca canlı ve sürekli evrim geçiren bir dildir." },
        { type: "speaking", spanish: "Ser bilingüe significa poder adaptar el registro", turkish: "İki dilli olmak üslubu adapte edebilmek demektir." },
        { type: "speaking", spanish: "Me daré una ducha de agua fría", turkish: "Soğuk suyla bir duş alacağım." },
        { type: "speaking", spanish: "No tiene sentido discutir por esta tontería", turkish: "Bu aptallık için tartışmanın bir anlamı yok." },
        { type: "speaking", spanish: "Comprendo tus motivos pero no los comparto", turkish: "Motivasyonlarını (sebeplerini) anlıyorum ama onları paylaşmıyorum." }
      ]
    },
    {
      id: "c1_u20_n8",
      type: "theory",
      title: "Teoría III: Oratoria de Élite (Persuadir y Conmover)",
      content: {
        concept: "El objetivo final del C1 es la persuasión. Cuando defiendes una tesis (en un examen, en un juicio o en la oficina), debes estructurar tu discurso para liderar a tu audiencia.\n\n### Estrategias de Oratoria C1:\n1. **La Captación (El Gancho):**\n• *'Nos encontramos hoy ante una encrucijada histórica...'* (Bugün tarihi bir dönüm noktasındayız).\n2. **La Concesión Estratégica (Dar la razón para luego quitarla):**\n• *'Si bien es innegable que la economía importa, no podemos obviar que...'*\n3. **La Hipótesis Catastrófica (Meter miedo):**\n• *'Si no tomásemos medidas drásticas ahora, el resultado sería irreversible.'*\n4. **La Llamada a la Acción (Cierre):**\n• *'Por consiguiente, les insto a que reflexionemos juntos y...'*",
        examples: [
          { es: "Nos encontramos ante un dilema que exige soluciones inmediatas.", tr: "Acil çözümler gerektiren bir ikilemle karşı karşıyayız." },
          { es: "Les insto a que unamos fuerzas por este propósito.", tr: "Sizi bu amaç için güçlerimizi birleştirmeye teşvik ediyorum." }
        ]
      }
    },
    {
      id: "c1_u20_n9",
      type: "theory",
      title: "Sintaxis Visual: El Cierre Persuasivo",
      content: {
        concept: "Deconstruiremos el párrafo de cierre de un discurso formal. Observa la mezcla de conectores de conclusión, pasiva refleja, pronombres formales y subjuntivo exhortativo.",
        examples: [{ es: "En resumidas cuentas, dados los argumentos expuestos, les ruego que reconsideren su postura antes de que se cometa un error irreparable.", tr: "Özetle, sunulan argümanlar göz önüne alındığında, onarılamaz bir hata yapılmadan önce duruşunuzu yeniden gözden geçirmenizi rica ediyorum." }],
        analysis: [
          { word: "En resumidas cuentas,", type: "connector", literal: "Özetle / Kısacası", explanation: "Conector formal de conclusión.", examples: [] },
          { word: "dados", type: "adjective", literal: "göz önüne alındığında / verilmiş", explanation: "Participio usado como preposición causal.", examples: [] },
          { word: "los argumentos expuestos,", type: "noun", literal: "sunulan argümanlar", explanation: "Referencia a lo dicho anteriormente.", examples: [] },
          { word: "les ruego", type: "verb", literal: "size yalvarırım / rica ederim", explanation: "Verbo de influencia extrema + Pronombre de respeto plural (Ustedes).", examples: [] },
          { word: "que reconsideren", type: "verb", literal: "yeniden gözden geçirmenizi (subjuntivo)", explanation: "Subjuntivo presente. Es la acción que se solicita.", examples: [] },
          { word: "su postura", type: "noun", literal: "duruşunuzu", explanation: "Objeto directo formal.", examples: [] },
          { word: "antes de que", type: "connector", literal: "-den önce", explanation: "Conector temporal límite. ¡Exige siempre subjuntivo!", examples: [] },
          { word: "se cometa", type: "verb", literal: "yapılmadan / işlenmeden", explanation: "Pasiva refleja en subjuntivo (que un error sea cometido).", examples: [] },
          { word: "un error irreparable.", type: "noun", literal: "onarılamaz bir hata", explanation: "El sujeto paciente de la pasiva refleja.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u20_n10",
      type: "theory",
      title: "Caja de Herramientas: Vocabulario Cumbre",
      content: {
        concept: "Los 10 sustantivos y adjetivos que te consagrarán como bilingüe:\n\n• **El paradigma** (Paradigma / Model) ➔ *Cambio de paradigma.*\n• **La encrucijada** (Dönüm noktası / Yol ayrımı) ➔ *Estamos en una encrucijada.*\n• **El detonante** (Tetikleyici) ➔ *Fue el detonante del problema.*\n• **Intrínseco / Inherente** (Doğasında var olan) ➔ *Es un riesgo inherente.*\n• **Inefable** (Anlatılamaz / Kelimelere sığmaz) ➔ *Una belleza inefable.*\n• **Inédito** (Daha önce görülmemiş / Yeni) ➔ *Un evento inédito.*\n• **Tangible** (Somut / Dokunulabilir) ➔ *Necesitamos pruebas tangibles.*\n• **Elocuente** (Etkili / Açık ve net konuşan) ➔ *Un discurso muy elocuente.*\n• **Radicar en** (Dayanmak / Kaynaklanmak) ➔ *El problema radica en...*\n• **Abogar por** (Savunmak / Desteklemek) ➔ *Abogo por la paz.*",
        examples: [
          { es: "La verdadera dificultad radica en la falta de recursos tangibles.", tr: "Gerçek zorluk somut kaynakların eksikliğinden kaynaklanmaktadır." },
          { es: "Como sociedad, debemos abogar por la igualdad de derechos.", tr: "Toplum olarak eşit hakları savunmalıyız." },
          { es: "Este incidente fue el detonante de una crisis inédita.", tr: "Bu olay daha önce görülmemiş bir krizin tetikleyicisiydi." }
        ]
      }
    },
    {
      id: "c1_u20_n11",
      type: "theory",
      title: "Taller de Producción Escrita: Artículo de Opinión",
      content: {
        concept: "Esta es tu tesis final de escritura del Nivel C1.\n\n**Instrucciones:**\nEscribe un artículo de opinión formal (mínimo 15 líneas) para un periódico sobre **El impacto del consumismo moderno en la salud mental**.\n\n1. Empieza con un 'gancho' oratorio (*Nos encontramos ante...*).\n2. Usa al menos tres conectores avanzados (*En lo que respecta a, Huelga decir, Por consiguiente*).\n3. Usa una estructura concesiva compleja (*Por mucho que, A sabiendas de que*).\n4. Cierra instando a la acción (*Les insto a que...*).\n5. Usa al menos tres palabras de la Caja de Herramientas (*Paradigma, Tangible, Radicar, Abogar*).\n\nEnvíalo para la revisión meticulosa del profesor.",
        examples: []
      }
    },
    {
      id: "c1_u20_n12",
      type: "theory",
      title: "Taller de Producción Oral: Defensa de Tesis",
      content: {
        concept: "La prueba oral definitiva.\n\n**Instrucciones:**\nGraba un audio o video de 3 a 5 minutos defendiendo tu postura frente a esta pregunta: **¿Se está perdiendo la auténtica conexión humana por culpa de la inmediatez digital?**\n\nTu profesor evaluará:\n1. La fluidez y velocidad del habla (sin largas pausas para traducir).\n2. La correcta pronunciación de los fonemas (la 'J', la 'RR', el enlace entre vocales).\n3. El uso natural e inconsciente del Subjuntivo cuando sea necesario.\n4. La riqueza léxica y el uso de conectores cultos en voz alta.",
        examples: []
      }
    },
    {
      id: "c1_u20_n13",
      type: "theory",
      title: "REPASO MAESTRO I: Preposiciones y Régimen Verbal",
      content: {
        concept: "Antes de tu Mega Examen, consolidemos la 'Mecánica' del español.\n\n### 1. El Universo del SE\n• **SE Accidental:** Exculpa de la acción. *Se me cayó el vaso.* (Me quita la culpa).\n• **SE Impersonal:** Regla general, verbo en singular si le sigue la preposición 'A'. *Se busca A los culpables.*\n• **SE Pasivo:** El verbo concuerda con el objeto. *Se venden casas.*\n\n### 2. Régimen Preposicional\n• **Con A:** Negarse a, Atreverse a, Acostumbrarse a, Renunciar a.\n• **Con DE:** Acordarse de, Carecer de, Depender de, Darse cuenta de, Arrepentirse de.\n• **Con CON:** Soñar con, Contar con, Conformarse con.\n• **Con EN:** Pensar en (la mente), Confiar en, Insistir en, Fijarse en.\n• **Con POR:** Esforzarse por, Inclinarse por, Preocuparse por.",
        examples: []
      }
    },
    {
      id: "c1_u20_n14",
      type: "theory",
      title: "REPASO MAESTRO II: La Lógica del Modo (Duda y Concesión)",
      content: {
        concept: "Consolidación de las Matemáticas del Modo Verbal.\n\n### 1. Probabilidad y Opinión\n• **Indicativo Obligatorio:** A lo mejor, Igual, Lo mismo / Creo que, Me parece que.\n• **Subjuntivo Obligatorio:** Puede que, Es probable que / No creo que, Dudo que.\n• **La Balanza:** Quizás, Tal vez. (Ind = Certeza alta / Subj = Duda fuerte).\n\n### 2. Condiciones y Obstáculos\n• **Condicionales Puras (Subjuntivo):** Siempre y cuando, Con tal de que, A no ser que, En caso de que.\n• **Condicional Ind./Subj.:** Por si (Siempre Indicativo).\n• **Concesivas (Aunque):** + Indicativo (Hecho conocido) / + Subjuntivo (Hipótesis o Indiferencia).\n• **Obstáculos Fuertes:** Por mucho que (Subjuntivo), A sabiendas de que (Indicativo).",
        examples: []
      }
    },
    {
      id: "c1_u20_n15",
      type: "theory",
      title: "REPASO MAESTRO III: Tiempos y Conectores de Élite",
      content: {
        concept: "El andamiaje de la oratoria C1.\n\n### 1. Tiempo Relativo\n• **Subjuntivo Obligatorio:** Antes de que.\n• **Futuro + Subjuntivo:** Cuando, En cuanto, Tan pronto como, Hasta que (Ej: Te llamaré en cuanto llegue).\n\n### 2. Conectores Académicos\n• **Causa:** Ya que, Puesto que (Causa evidente) / Debido a (+ sustantivo).\n• **Consecuencia:** Por ende, Consecuentemente, Ergo / **De ahí que (+ Subjuntivo)**.\n• **Adición y Ejemplificación:** Amén de, Asimismo, Verbigracia, A saber.\n\n### 3. Falsos Amigos Críticos\n• Embarazada (Hamile) vs Avergonzado (Mahcup).\n• Constipado (Nezle) vs Estreñido (Kabız).\n• Éxito (Başarı) vs Salida (Çıkış).\n• Pretender (Niyetinde olmak) vs Fingir (Rol yapmak).",
        examples: []
      }
    },
    {
      id: "c1_u20_n16",
      type: "exam",
      title: "MEGA EXAMEN FINAL C1 (100 Preguntas)",
      content: {
        timeLimit: 7200, // 120 minutos (2 horas)
        concept: "Ha llegado el gran momento. Este es tu examen de graduación del nivel C1. Dispones de 120 minutos para responder 100 preguntas que evalúan cada detalle técnico, semántico y pragmático de tu español. ¡Demuestra que eres la MAESTRA DEL MATIZ!",
        exercises: [
          // --- SECCIÓN 1: PREPOSICIONES Y RÉGIMEN VERBAL (1-10) ---
          { type: "multiple_choice", question: "1. Completa: 'El documento legal carece ______ validez'.", options: ["con", "de", "a"], correct: 1 },
          { type: "multiple_choice", question: "2. 'Soñé en ti' es un calco del inglés. La forma correcta es:", options: ["Te soñé", "Soñé a ti", "Soñé contigo"], correct: 2 },
          { type: "multiple_choice", question: "3. Completa: 'Me niego ______ que me trates con esa falta de respeto'.", options: ["de", "a", "por"], correct: 1 },
          { type: "multiple_choice", question: "4. Diferencia clave: 'Pensar EN' es dirigir la mente hacia algo. ¿Qué es 'Pensar DE'?", options: ["Imaginar algo", "Pedir u ofrecer una opinión sobre algo", "Recordar profundamente"], correct: 1 },
          { type: "multiple_choice", question: "5. 'Todo el proyecto depende ______ tu decisión'.", options: ["en", "del", "de"], correct: 2 },
          { type: "multiple_choice", question: "6. 'Se esfuerza ______ ser un líder empático'.", options: ["para", "por", "en"], correct: 1 },
          { type: "multiple_choice", question: "7. ¿Qué preposición sigue al verbo 'Atreverse'?", options: ["De", "A", "En"], correct: 1 },
          { type: "multiple_choice", question: "8. 'Estoy dispuesto ______ negociar los términos'.", options: ["a", "de", "en"], correct: 0 },
          { type: "multiple_choice", question: "9. 'Fíjate ______ los detalles del contrato'.", options: ["a", "en", "sobre"], correct: 1 },
          { type: "multiple_choice", question: "10. 'El examen consiste ______ tres partes prácticas'.", options: ["de", "en", "por"], correct: 1 },

          // --- SECCIÓN 2: EL UNIVERSO DEL 'SE' Y LA IMPERSONALIDAD (11-20) ---
          { type: "multiple_choice", question: "11. 'Gözlüklerim kırıldı (kazara)'. ¿Cómo lo dices para quitarte la culpa?", options: ["Yo rompí las gafas.", "Las gafas se rompieron.", "Se me rompieron las gafas."], correct: 2 },
          { type: "multiple_choice", question: "12. En 'Se me cayeron las llaves', el verbo concuerda en plural con:", options: ["Yo (me)", "Nadie (es impersonal)", "Las llaves (es el sujeto real)"], correct: 2 },
          { type: "multiple_choice", question: "13. ¿Cuál es la forma pasiva refleja correcta?", options: ["Se venden casas.", "Se vende casas.", "Se venden a casas."], correct: 0 },
          { type: "multiple_choice", question: "14. 'Se busca A los culpables'. El verbo va en singular porque:", options: ["'Se' siempre es singular.", "Hay una 'A' personal, lo que lo hace impersonal puro.", "Los culpables son uno solo."], correct: 1 },
          { type: "multiple_choice", question: "15. ¿Qué implica el Dativo Ético en 'Se bebió tres botellas'?", options: ["Que bebió accidentalmente.", "Que otra persona le dio de beber.", "Énfasis en el exceso o la totalidad de la acción."], correct: 2 },
          { type: "multiple_choice", question: "16. 'Pasaportumu evde unuttum' (sin culpa):", options: ["Olvidé el pasaporte.", "Se me olvidó el pasaporte.", "Se olvidó mi pasaporte."], correct: 1 },
          { type: "multiple_choice", question: "17. 'A Juan se ______ apagó el móvil durante la reunión'.", options: ["te", "le", "les"], correct: 1 },
          { type: "multiple_choice", question: "18. 'Se ______ (prohibir - plural) las manifestaciones en el centro'.", options: ["prohibe", "prohiben", "prohíben"], correct: 2 },
          { type: "multiple_choice", question: "19. ¿Cuál es el pseudo-copulativo correcto para 'Bina terk edilmiş durumda'? El edificio se ______ abandonado.", options: ["resulta", "encuentra", "muestra"], correct: 1 },
          { type: "multiple_choice", question: "20. 'El sospechoso se ______ tranquilo durante el juicio' (Tutum sergiledi).", options: ["mostró", "resultó", "encontró"], correct: 0 },

          // --- SECCIÓN 3: PROBABILIDAD Y OPINIÓN (21-30) ---
          { type: "multiple_choice", question: "21. 'A lo mejor ______ (llover) mañana'.", options: ["llueva", "llueve", "lloviera"], correct: 1 },
          { type: "multiple_choice", question: "22. ¿Qué modo verbal sigue SIEMPRE a 'Puede que' y 'Es probable que'?", options: ["Indicativo", "Subjuntivo", "Infinitivo"], correct: 1 },
          { type: "multiple_choice", question: "23. Si usas 'Quizás' y estás casi seguro de algo, usas:", options: ["Indicativo", "Subjuntivo", "Imperativo"], correct: 0 },
          { type: "multiple_choice", question: "24. Regla de inversión: 'Es tarde probablemente' (Adverbio postpuesto). ¿Qué modo usas?", options: ["Indicativo", "Subjuntivo"], correct: 0 },
          { type: "multiple_choice", question: "25. 'No creo que ______ (ser) tan difícil'.", options: ["es", "sea", "era"], correct: 1 },
          { type: "multiple_choice", question: "26. 'Creo que la noticia NO ______ (ser) verdad'.", options: ["sea", "es", "fuera"], correct: 1 },
          { type: "multiple_choice", question: "27. 'Dudo que ellos ______ (tener) la razón'.", options: ["tengan", "tienen", "tuvieron"], correct: 0 },
          { type: "multiple_choice", question: "28. 'Lo mismo ellos ______ (venir) a la fiesta'. (Expresión coloquial española)", options: ["vengan", "vienen", "vinieran"], correct: 1 },
          { type: "multiple_choice", question: "29. 'Es obvio que tú ______ (tener) talento'.", options: ["tienes", "tengas", "tuvieras"], correct: 0 },
          { type: "multiple_choice", question: "30. 'No es obvio que nosotros ______ (poder) ganar'.", options: ["podemos", "podamos", "pudiéramos"], correct: 1 },

          // --- SECCIÓN 4: CONDICIONALES EXTREMAS Y TIEMPO (31-40) ---
          { type: "multiple_choice", question: "31. 'Puedes salir ______ (siempre y cuando) termines los deberes'.", options: ["siempre y cuando", "por si acaso", "a pesar de"], correct: 0 },
          { type: "multiple_choice", question: "32. 'No firmaré ______ (a no ser que) mi abogado lo revise'.", options: ["siempre y cuando", "a no ser que", "por si"], correct: 1 },
          { type: "multiple_choice", question: "33. 'Lleva el paraguas ______ (por si) llueve'.", options: ["en caso de que", "por si", "siempre que"], correct: 1 },
          { type: "multiple_choice", question: "34. ¿Qué modo verbal exige 'En caso de que'?", options: ["Indicativo", "Subjuntivo", "Condicional"], correct: 1 },
          { type: "multiple_choice", question: "35. 'Te lo daré ______ (a cambio de que) me ayudes'.", options: ["a no ser que", "a cambio de que", "sin que"], correct: 1 },
          { type: "multiple_choice", question: "36. 'Salió de la oficina ______ (sin que) nadie lo viera'.", options: ["sin que", "a condición de que", "salvo que"], correct: 0 },
          { type: "multiple_choice", question: "37. 'Te llamaré ______ (en cuanto) llegue al hotel'.", options: ["en cuanto", "hasta que", "antes de que"], correct: 0 },
          { type: "multiple_choice", question: "38. 'No podemos empezar ______ (hasta que) el jefe dé la orden'.", options: ["mientras", "hasta que", "tan pronto como"], correct: 1 },
          { type: "multiple_choice", question: "39. ¿Qué modo verbal sigue SIEMPRE a 'Antes de que'?", options: ["Indicativo", "Subjuntivo", "Infinitivo"], correct: 1 },
          { type: "multiple_choice", question: "40. '______ (A medida que) vayas practicando, cometerás menos errores'.", options: ["A medida que", "Nada más", "Antes de que"], correct: 0 },

          // --- SECCIÓN 5: CONCESIVAS Y OBSTÁCULOS (41-50) ---
          { type: "multiple_choice", question: "41. 'Por ______ inteligente que sea, comete errores' (Concesiva de cualidad).", options: ["mucho", "muy", "más"], correct: 1 },
          { type: "multiple_choice", question: "42. 'Por ______ que estudie, no aprueba' (Concesiva de cantidad).", options: ["muy", "mucho", "poco"], correct: 1 },
          { type: "multiple_choice", question: "43. 'Lo hizo ______ (a sabiendas de que) era un fraude'.", options: ["y eso que", "a sabiendas de que", "por muy que"], correct: 1 },
          { type: "multiple_choice", question: "44. 'A sabiendas de que' SIEMPRE exige:", options: ["Subjuntivo", "Indicativo (implica conocimiento real)"], correct: 1 },
          { type: "multiple_choice", question: "45. 'Llegué tarde, ______ (y eso que / kaldı ki) salí con tiempo'.", options: ["a pesar de que", "y eso que", "por mucho que"], correct: 1 },
          { type: "multiple_choice", question: "46. 'Y eso que' SIEMPRE exige:", options: ["Indicativo", "Subjuntivo"], correct: 0 },
          { type: "multiple_choice", question: "47. Si ves la lluvia caer: 'Aunque ______ (llover), saldré a correr'.", options: ["llueve", "llueva"], correct: 0 },
          { type: "multiple_choice", question: "48. Si hay nubes pero no sabes si lloverá: 'Aunque ______ (llover), saldré a correr'.", options: ["llueve", "llueva"], correct: 1 },
          { type: "multiple_choice", question: "49. '______ (Pese a) la crisis, la empresa generó beneficios'.", options: ["Pese a", "Por más que", "Aunque"], correct: 0 },
          { type: "multiple_choice", question: "50. 'No me invitó ni tan ______ a un café'.", options: ["aunque", "siquiera", "como"], correct: 1 },

          // --- SECCIÓN 6: LÉXICO, CONECTORES Y FALSOS AMIGOS (51-60) ---
          { type: "multiple_choice", question: "51. Falso amigo: 'Hamile' en español es:", options: ["Embarazada", "Avergonzada"], correct: 0 },
          { type: "multiple_choice", question: "52. Falso amigo: 'Nezle' en español es:", options: ["Estreñido", "Constipado"], correct: 1 },
          { type: "multiple_choice", question: "53. Falso amigo: 'Başarı' en español es:", options: ["Éxito", "Salida", "Suceso"], correct: 0 },
          { type: "multiple_choice", question: "54. 'Gibi davranmak / Rol yapmak' se dice:", options: ["Pretender", "Fingir", "Realizar"], correct: 1 },
          { type: "multiple_choice", question: "55. Conector de consecuencia 'Por lo tanto' en registro muy formal:", options: ["Amén de", "Por ende / Ergo"], correct: 1 },
          { type: "multiple_choice", question: "56. 'Hay recesión; ______ (de ahí que) los precios suban'.", options: ["por consiguiente", "de ahí que", "así que"], correct: 1 },
          { type: "multiple_choice", question: "57. 'De ahí que' EXIGE siempre:", options: ["Indicativo", "Subjuntivo", "Infinitivo"], correct: 1 },
          { type: "multiple_choice", question: "58. Conector de adición: 'Le envío el informe; ______ (asimismo), adjunto los datos'.", options: ["asimismo", "no obstante", "verbigracia"], correct: 0 },
          { type: "multiple_choice", question: "59. ¿Qué significa 'Verbigracia'?", options: ["A Dios gracias", "Por ejemplo", "Por lo tanto"], correct: 1 },
          { type: "multiple_choice", question: "60. ¿Qué palabra usamos para decir 'Göz ardı etmek / Atlamak' en un ensayo?", options: ["Obviar", "Esgrimir", "Dilucidar"], correct: 0 },

          // --- SECCIÓN 7: MODISMOS Y SABIDURÍA POPULAR (61-70) ---
          { type: "multiple_choice", question: "61. Refrán: 'A caballo regalado...'", options: ["...no le mires el dentado.", "...más vale pájaro en mano."], correct: 0 },
          { type: "multiple_choice", question: "62. Refrán: 'Erken kalkan yol alır':", options: ["No por mucho madrugar.", "A quien madruga, Dios le ayuda."], correct: 1 },
          { type: "multiple_choice", question: "63. ¿Qué palabra polisémica usamos para 'Oyuncak bebek' y 'El bileği'?", options: ["Planta", "Muñeca", "Sierra"], correct: 1 },
          { type: "multiple_choice", question: "64. 'Tomar el pelo' significa:", options: ["Dalga geçmek / Şaka yapmak", "Saç kesmek", "Kızmak"], correct: 0 },
          { type: "multiple_choice", question: "65. 'Cortar el bacalao' significa:", options: ["Ser cocinero.", "Ser el jefe o el que manda."], correct: 1 },
          { type: "multiple_choice", question: "66. Si un proyecto es 'pan comido', es:", options: ["Muy difícil.", "Muy fácil."], correct: 1 },
          { type: "multiple_choice", question: "67. En una negociación, 'Tirar la toalla' es:", options: ["Limpiar la mesa.", "Rendirse / Pes etmek."], correct: 1 },
          { type: "multiple_choice", question: "68. Luchar 'contra viento y marea' significa:", options: ["Luchar en el mar.", "Superar todos los obstáculos posibles."], correct: 1 },
          { type: "multiple_choice", question: "69. 'Estar hasta las narices' significa:", options: ["Tener alergia.", "Estar muy harto / Usanmak."], correct: 1 },
          { type: "multiple_choice", question: "70. 'Dar gato por liebre' significa:", options: ["Alimentar animales.", "Engañar o estafar a alguien."], correct: 1 },

          // --- SECCIÓN 8: LITERATURA, POESÍA Y RELATIVOS (71-80) ---
          { type: "multiple_choice", question: "71. ¿Qué forma del subjuntivo significa exactamente lo mismo que 'comiera'?", options: ["Comería", "Comiese", "Comiendo"], correct: 1 },
          { type: "multiple_choice", question: "72. En la poesía, la mejor forma de decir 'Ojos como el hielo' es:", options: ["Ojos de hielo", "Ojos como hielo", "Ojos helados"], correct: 0 },
          { type: "multiple_choice", question: "73. ¿Cuál es el rasgo definitorio del Realismo Mágico?", options: ["Hacer hechizos como en la fantasía.", "Relatar lo imposible con absoluta normalidad periodística.", "Escribir historias reales documentadas."], correct: 1 },
          { type: "multiple_choice", question: "74. 'El alba' en el lenguaje literario significa:", options: ["La puesta de sol", "El amanecer (şafak)", "La noche oscura"], correct: 1 },
          { type: "multiple_choice", question: "75. 'Inexorable' significa:", options: ["Corto y efímero", "Largo", "Kaçınılmaz / Acımasızca ilerleyen"], correct: 2 },
          { type: "multiple_choice", question: "76. 'Un letargo' es:", options: ["Una mentira", "Una uyuşukluk / derin uyku", "Un veneno"], correct: 1 },
          { type: "multiple_choice", question: "77. 'Busco a alguien que ______ (hablar) japonés'. (Desconocido)", options: ["habla", "hable", "hablara"], correct: 1 },
          { type: "multiple_choice", question: "78. 'Conozco a un hombre que ______ (hablar) japonés'. (Conocido)", options: ["habla", "hable", "hablara"], correct: 0 },
          { type: "multiple_choice", question: "79. 'Es un edificio ______ arquitectura es moderna'. (Pertenencia)", options: ["cuyo", "cuya", "el cual"], correct: 1 },
          { type: "multiple_choice", question: "80. 'Quienquiera que ______ (llamar), no abras la puerta'.", options: ["llama", "llame", "llamó"], correct: 1 },

          // --- SECCIÓN 9: SINTAXIS MAESTRA C1 (81-100) ---
          { type: "syntax", turkish: "Sana böyle davranmasına itiraz ediyorum (Me niego a que).", spanish: "Me niego a que te trate así", words: ["Me", "niego", "a", "que", "te", "trate", "así", "trata"] },
          { type: "syntax", turkish: "Sürekli seni düşünüyorum (Pensar en).", spanish: "Pienso en ti constantemente", words: ["Pienso", "en", "ti", "constantemente", "de", "sobre"] },
          { type: "syntax", turkish: "Yeni projemiz hakkında ne düşünüyorsun? (Pensar de).", spanish: "Qué piensas de nuestro nuevo proyecto", words: ["Qué", "piensas", "de", "nuestro", "nuevo", "proyecto", "en"] },
          { type: "syntax", turkish: "Sürekli yalan söylemenden bıktım usandım (Estar harto).", spanish: "Estoy harto de que digas mentiras constantemente", words: ["Estoy", "harto", "de", "que", "digas", "mentiras", "constantemente", "dices"] },
          { type: "syntax", turkish: "Bardak kazara elimden düştü.", spanish: "Se me cayó el vaso", words: ["Se", "me", "cayó", "el", "vaso", "caí", "rompió"] },
          { type: "syntax", turkish: "Bütün kitabı bir gecede okuyup bitirdi (Dativo Ético).", spanish: "Se leyó todo el libro en una noche", words: ["Se", "leyó", "todo", "el", "libro", "en", "una", "noche", "leyó"] },
          { type: "syntax", turkish: "Pasaportumu evde unuttum (Se me...).", spanish: "Se me olvidó el pasaporte en casa", words: ["Se", "me", "olvidó", "el", "pasaporte", "en", "casa", "olvidé"] },
          { type: "syntax", turkish: "Fırsatı kaçırdım (Se me escapó).", spanish: "Se me escapó la oportunidad", words: ["Se", "me", "escapó", "la", "oportunidad", "escapé"] },
          { type: "syntax", turkish: "Müdürün (el director) bunu yapacağından şüpheliyim (Dudar).", spanish: "Dudo que el director haga esto", words: ["Dudo", "que", "el", "director", "haga", "esto", "hace"] },
          { type: "syntax", turkish: "Bunun işe yaradığından (funcionar) emin değilim.", spanish: "No estoy seguro de que funcione", words: ["No", "estoy", "seguro", "de", "que", "funcione", "funciona"] },
          { type: "syntax", turkish: "Sosyal medyanın tehlikeli olduğunu düşünüyorum (Pienso).", spanish: "Pienso que las redes sociales son peligrosas", words: ["Pienso", "que", "las", "redes", "sociales", "son", "peligrosas", "sean"] },
          { type: "syntax", turkish: "Belki yarın yağmur yağar.", spanish: "Tal vez llueva mañana", words: ["Tal", "vez", "llueva", "mañana", "llueve"] },
          { type: "syntax", turkish: "Bana öyle geliyor ki (Para mí que) sen haklısın.", spanish: "Para mí que tienes razón", words: ["Para", "mí", "que", "tienes", "razón", "tengas"] },
          { type: "syntax", turkish: "Acil (urgente) olmadığı sürece (A no ser que) arama.", spanish: "No llames a no ser que sea urgente", words: ["No", "llames", "a", "no", "ser", "que", "sea", "urgente"] },
          { type: "syntax", turkish: "Yağmur yağması durumunda (En caso de que) maçı iptal edeceğiz.", spanish: "En caso de que llueva cancelaremos el partido", words: ["En", "caso", "de", "que", "llueva", "cancelaremos", "el", "partido"] },
          { type: "syntax", turkish: "Sınavı geçtim, üstelik/kaldı ki (Y eso que) çalışmamıştım.", spanish: "Aprobé el examen y eso que no había estudiado", words: ["Aprobé", "el", "examen", "y", "eso", "que", "no", "había", "estudiado"] },
          { type: "syntax", turkish: "Şafağa kadar çalışsaydım (trabajase).", spanish: "Si trabajase hasta el alba", words: ["Si", "trabajase", "hasta", "el", "alba", "trabajara"] },
          { type: "syntax", turkish: "Söylemeye gerek yok ki (Huelga decir) sen çok zekisin.", spanish: "Huelga decir que eres muy inteligente", words: ["Huelga", "decir", "que", "eres", "muy", "inteligente", "sea"] },
          { type: "syntax", turkish: "Bu önermeyi (premisa) çürütmek (refutar) imkansız.", spanish: "Es imposible refutar esta premisa", words: ["Es", "imposible", "refutar", "esta", "premisa", "sostener"] },
          { type: "syntax", turkish: "Son kertede (En última instancia) bu uygulanabilir (viable) değil.", spanish: "En última instancia no es viable", words: ["En", "última", "instancia", "no", "es", "viable"] }
        ]
      }
    }
  ]
};
/**
 * UNIDAD 4 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Queísmo y Dequeísmo (La frontera de la preposición DE).
 * Tema: Ultracorrección, errores nativos y verbos camaleón.
 */

export const unidad4 = {
  id: "c2_u4",
  title: "Unidad 4: Las fronteras del verbo",
  description: "Cruza la frontera de la perfección. Aprende a evitar el Queísmo y el Dequeísmo, los errores gramaticales más comunes entre los propios nativos hispanos.",
  nodes: [
    {
      id: "c2_u4_n1",
      type: "theory",
      title: "Teoría I: El Dequeísmo (El exceso de formalidad)",
      content: {
        concept: "Bienvenidos al nivel de los filólogos. En español, existe un fenómeno psicológico llamado **'Ultracorrección'**. Muchos hablantes nativos piensan que añadir la preposición 'DE' antes del 'QUE' hace que la frase suene más formal y elegante. Al hacerlo cuando no es necesario, cometen un error gravísimo: **El Dequeísmo**.\n\n### 1. Verbos de Pensamiento y Comunicación\nLos verbos que expresan pensamiento (Pensar, Creer, Opinar, Suponer) o comunicación (Decir, Contar, Explicar) **NUNCA llevan la preposición 'DE'** antes de 'que'.\n\n• ❌ ERROR NATIVO: *Pienso DE QUE es una buena idea.*\n• ✅ CORRECTO: *Pienso **QUE** es una buena idea.*\n\n• ❌ ERROR NATIVO: *Me dijo DE QUE vendría tarde.*\n• ✅ CORRECTO: *Me dijo **QUE** vendría tarde.*\n\n### 2. Verbos de Emoción Directa\nVerbos como *Temer* (Korkmak) o *Lamentar* (Üzülmek) funcionan directo.\n• ❌ *Temo DE QUE llueva.*\n• ✅ *Temo **QUE** llueva.*",
        examples: [
          { es: "Opino que debemos cancelar la reunión. (NO 'Opino de que')", tr: "Toplantıyı iptal etmemiz gerektiğini düşünüyorum." },
          { es: "Nos explicaron que el proceso sería largo.", tr: "Bize sürecin uzun olacağını açıkladılar." },
          { es: "Lamento que no puedas venir a mi boda.", tr: "Düğünüme gelemeyeceğine üzülüyorum." }
        ]
      }
    },
    {
      id: "c2_u4_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Limpiando el 'DE')",
      exercises: [
        { type: "syntax", turkish: "Bu projenin (el proyecto) çok pahalı olduğunu (ser caro) düşünüyorum.", spanish: "Pienso que el proyecto es muy caro", words: ["Pienso", "que", "el", "proyecto", "es", "muy", "caro", "de"] },
        { type: "syntax", turkish: "Bana yarın geleceğini (vendría) söyledi.", spanish: "Me dijo que vendría mañana", words: ["Me", "dijo", "que", "vendría", "mañana", "de"] },
        { type: "syntax", turkish: "Onun haklı olduğuna (tener razón) inanıyorum.", spanish: "Creo que él tiene razón", words: ["Creo", "que", "él", "tiene", "razón", "de"] },
        { type: "syntax", turkish: "İspanyolcanın çok mantıklı (lógico) olduğunu savunuyor (sostener).", spanish: "Él sostiene que el español es muy lógico", words: ["Él", "sostiene", "que", "el", "español", "es", "muy", "lógico", "de"] },
        { type: "syntax", turkish: "Planın iptal edilmesine (cancelar) üzülüyorum (lamentar).", spanish: "Lamento que se cancele el plan", words: ["Lamento", "que", "se", "cancele", "el", "plan", "de"] },
        { type: "syntax", turkish: "İşimizi kaybedeceğimizden (perder) korkuyorum (temer).", spanish: "Temo que perdamos nuestro trabajo", words: ["Temo", "que", "perdamos", "nuestro", "trabajo", "de"] },
        { type: "syntax", turkish: "Yeni kuralların (las normas) adil (justas) olmadığını düşünüyoruz (opinar).", spanish: "Opinamos que las normas no son justas", words: ["Opinamos", "que", "las", "normas", "no", "son", "justas", "de"] },
        { type: "syntax", turkish: "Bize her şeyin iyi gideceğini (ir bien) açıkladılar.", spanish: "Nos explicaron que todo iría bien", words: ["Nos", "explicaron", "que", "todo", "iría", "bien", "de"] },
        { type: "syntax", turkish: "Haklı olduğumu varsayıyorum (suponer).", spanish: "Supongo que tengo la razón", words: ["Supongo", "que", "tengo", "la", "razón", "de"] },
        { type: "syntax", turkish: "Söylediklerini (lo que dices) duyuyorum (oír).", spanish: "Oigo que dices eso", words: ["Oigo", "que", "dices", "eso", "de"] }
      ]
    },
    {
      id: "c2_u4_n3",
      type: "theory",
      title: "Teoría II: El Queísmo (Olvidar la preposición)",
      content: {
        concept: "Al intentar corregir el Dequeísmo, mucha gente comete el error contrario: quita la preposición 'DE' cuando **SÍ** es absolutamente obligatoria. A este error se le llama **Queísmo**.\n\n### Verbos que EXIGEN 'DE QUE'\nSon aquellos verbos pronominales (con se, me, te) que tienen un régimen preposicional obligatorio (Unidades 1 y 2 del C1).\n\n• **Acordarse DE QUE** (Hatırlamak). \n  ❌ *Me acordé que era tu cumpleaños.* ➔ ✅ *Me acordé DE QUE era...*\n• **Darse cuenta DE QUE** (Farkına varmak). \n  ❌ *Se dio cuenta que le mentían.* ➔ ✅ *Se dio cuenta DE QUE...*\n• **Estar seguro DE QUE** (Emin olmak). \n  ❌ *Estoy seguro que ganaremos.* ➔ ✅ *Estoy seguro DE QUE ganaremos.*\n• **Convencer DE QUE** (İkna etmek). \n  ❌ *Me convenció que fuera.* ➔ ✅ *Me convenció DE QUE fuera.*\n• **Alegrarse DE QUE** (Sevinmek). \n  ❌ *Me alegro que estés aquí.* ➔ ✅ *Me alegro DE QUE estés aquí.*",
        examples: [
          { es: "Nos dimos cuenta de que el tren ya había salido.", tr: "Trenin çoktan kalkmış olduğunun farkına vardık." },
          { es: "Estoy seguro de que él no lo hizo a propósito.", tr: "Onu bilerek yapmadığından eminim." },
          { es: "Me acordé de que tenía una reunión importante.", tr: "Önemli bir toplantım olduğunu hatırladım." }
        ]
      }
    },
    {
      id: "c2_u4_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El 'DE' Obligatorio)",
      exercises: [
        { type: "speaking", spanish: "Me di cuenta de que no tenía dinero", turkish: "Param olmadığının farkına vardım." },
        { type: "speaking", spanish: "Estoy seguro de que todo saldrá bien", turkish: "Her şeyin yolunda gideceğinden eminim." },
        { type: "speaking", spanish: "Me alegro de que hayas venido", turkish: "Gelmiş olmana sevindim." },
        { type: "speaking", spanish: "Te convenceré de que tengo razón", turkish: "Seni haklı olduğuma ikna edeceğim." },
        { type: "speaking", spanish: "Se acordó de que hoy era mi cumpleaños", turkish: "Bugünün benim doğum günüm olduğunu hatırladı." },
        { type: "speaking", spanish: "Me enteré de que te vas a casar", turkish: "Evleneceğini öğrendim/duydum." },
        { type: "speaking", spanish: "No cabe duda de que es un genio", turkish: "Onun bir dahi olduğuna şüphe yok." },
        { type: "speaking", spanish: "Tengo la seguridad de que ganaremos", turkish: "Kazanacağımıza dair güvencem var." },
        { type: "speaking", spanish: "No te olvides de que mañana madrugamos", turkish: "Yarın erken kalkacağımızı unutma." },
        { type: "speaking", spanish: "Trató de convencerme de que era inocente", turkish: "Beni masum olduğuna ikna etmeye çalıştı." }
      ]
    },
    {
      id: "c2_u4_n5",
      type: "theory",
      title: "El Reto Turco: La Prueba del 'QUÉ'",
      content: {
        concept: "En turco, no existen las preposiciones antes de las cláusulas (usáis el sufijo *-diğini*). En español, tu cerebro necesita un sistema infalible para saber cuándo usar 'QUE' y cuándo usar 'DE QUE'.\n\n### 💎 El Truco Maestro C2 (La Pregunta)\nCuando dudes, convierte tu afirmación en una PREGUNTA sustituyendo toda la frase secundaria por la palabra **QUÉ / DE QUÉ**.\n\n**CASO 1: Pienso (que / de que) es tarde.**\n• Pregunta mental: *¿QUÉ piensas?* o *¿DE QUÉ piensas?*\n• Respuesta natural: *¿QUÉ piensas?* ➔ Como la pregunta no necesita 'DE', la afirmación tampoco: **Pienso QUE es tarde**.\n\n**CASO 2: Me di cuenta (que / de que) era tarde.**\n• Pregunta mental: *¿QUÉ te diste cuenta?* o *¿DE QUÉ te diste cuenta?*\n• Respuesta natural: *¿DE QUÉ te diste cuenta?* ➔ Como la pregunta exige el 'DE', la afirmación también: **Me di cuenta DE QUE era tarde**.\n\n¡Usa esta brújula mental y nunca cometerás queísmo ni dequeísmo!",
        examples: [
          { es: "¿Qué te dijo? ➔ Me dijo QUE no vendría.", tr: "Sana ne dedi? ➔ Gelmeyeceğini söyledi. (Sin DE)." },
          { es: "¿De qué estás seguro? ➔ Estoy seguro DE QUE ganará.", tr: "Neden (ne hakkında) eminsin? ➔ Kazanacağından eminim. (Con DE)." }
        ]
      }
    },
    {
      id: "c2_u4_n6",
      type: "reading",
      title: "Lectura Crítica: Discurso de rectificación",
      content: {
        text: "Estimados accionistas: \n\nAyer, en rueda de prensa, algunos medios publicaron que nuestra compañía estaba en quiebra. Sostengo que esa información es completamente falsa. Lamento que algunos periodistas publiquen rumores sin verificar las fuentes. Me he dado cuenta de que el pánico se ha extendido, pero quiero convencerles de que nuestra estabilidad financiera es sólida.\n\nEstoy seguro de que el próximo trimestre superaremos las expectativas. No olviden que el año pasado, cuando muchos pensaban que perderíamos capital, logramos beneficios récord. Me alegro de que hoy estemos todos reunidos aquí para aclarar este malentendido. Tengan la certeza de que seguiremos trabajando por su confianza.",
        translation: "Saygıdeğer hissedarlar:\n\nDün basın toplantısında bazı medya organları şirketimizin iflas ettiğini yayınladı. Bu bilginin tamamen yanlış olduğunu savunuyorum (Sostengo que). Bazı gazetecilerin kaynakları doğrulamadan söylenti yayınlamasına üzülüyorum (Lamento que). Paniğin yayıldığının farkına vardım (Me he dado cuenta de que), ancak sizi finansal istikrarımızın sağlam olduğuna ikna etmek istiyorum (convencerles de que).\n\nGelecek çeyrekte beklentileri aşacağımızdan eminim (Estoy seguro de que). Geçen yıl, pek çok kişi sermaye kaybedeceğimizi düşünürken (pensaban que) rekor kârlar elde ettiğimizi unutmayın. Bu yanlış anlaşılmayı açıklığa kavuşturmak için bugün hepimizin burada toplanmış olmasına seviniyorum (Me alegro de que). Güveniniz için çalışmaya devam edeceğimize dair güvenceye sahip olun (Tengan la certeza de que)."
      }
    },
    {
      id: "c2_u4_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto (Elegir la Frontera)",
      exercises: [
        { type: "syntax", turkish: "Yanıldığını düşünüyorum (Creer).", spanish: "Creo que te equivocas", words: ["Creo", "que", "te", "equivocas", "de"] },
        { type: "syntax", turkish: "Yanıldığının farkına vardım (Darse cuenta).", spanish: "Me di cuenta de que te equivocabas", words: ["Me", "di", "cuenta", "de", "que", "te", "equivocabas", "equivocaba"] },
        { type: "syntax", turkish: "Müdür her şeyin iyi olduğunu söyledi.", spanish: "El director dijo que todo estaba bien", words: ["El", "director", "dijo", "que", "todo", "estaba", "bien", "de"] },
        { type: "syntax", turkish: "Haklı olduğundan eminiz (Estar seguros).", spanish: "Estamos seguros de que tienes razón", words: ["Estamos", "seguros", "de", "que", "tienes", "razón", "tenías"] },
        { type: "syntax", turkish: "Sınavın zor olacağından korkuyorum (Temer).", spanish: "Temo que el examen sea difícil", words: ["Temo", "que", "el", "examen", "sea", "difícil", "de"] },
        { type: "speaking", spanish: "Pienso que deberíamos cancelar la reunión", turkish: "Toplantıyı iptal etmemiz gerektiğini düşünüyorum." },
        { type: "speaking", spanish: "Me acordé de que hoy era festivo", turkish: "Bugünün tatil olduğunu hatırladım." },
        { type: "speaking", spanish: "No cabe duda de que eres el mejor", turkish: "Senin en iyisi olduğuna şüphe yok." },
        { type: "speaking", spanish: "Afirman que la economía va a mejorar", turkish: "Ekonominin düzeleceğini iddia ediyorlar." },
        { type: "speaking", spanish: "Quiero convencerte de que es seguro", turkish: "Bunun güvenli olduğuna seni ikna etmek istiyorum." }
      ]
    },
    {
      id: "c2_u4_n8",
      type: "theory",
      title: "Teoría III: Verbos Camaleón (Cambio de Significado)",
      content: {
        concept: "El nivel de filología C2 nos enseña que algunos verbos pueden usarse CON o SIN la preposición 'DE'. ¡Pero su significado cambia totalmente!\n\n### 1. ADVERTIR vs. ADVERTIR DE\n• **Advertir que** (Darse cuenta / Notar): *Advertí que Carlos estaba triste.* (Fark ettim).\n• **Advertir de que** (Informar un peligro / Uyarmak): *Te advierto de que ese perro muerde.* (Seni uyarıyorum).\n\n### 2. ACORDAR vs. ACORDARSE DE\n• **Acordar que** (Llegar a un pacto / Anlaşmak): *Acordamos que yo pagaría la cena.*\n• **Acordarse de que** (Recordar / Hatırlamak): *Me acordé de que no tenía dinero.*\n\n### 3. ASEGURAR vs. ASEGURARSE DE\n• **Asegurar que** (Afirmar / Garanti etmek): *Él me asegura que el coche funciona bien.*\n• **Asegurarse de que** (Comprobar / Emin olmak için kontrol etmek): *Asegúrate de que la puerta esté cerrada.*",
        examples: [
          { es: "Advertí que había humo en la sala, así que les advertí de que había un incendio.", tr: "Salonda duman olduğunu fark ettim, bu yüzden onları yangın olduğu konusunda uyardım." },
          { es: "Acordamos que nadie se acordaría de aquel incidente.", tr: "Kimsenin o olayı hatırlamayacağı konusunda anlaştık." }
        ]
      }
    },
    {
      id: "c2_u4_n9",
      type: "theory",
      title: "Sintaxis Visual: El Doble Acierto",
      content: {
        concept: "Vamos a deconstruir una oración compleja que utiliza verbos camaleón en un contexto jurídico, demostrando la precisión preposicional.",
        examples: [{ es: "El juez nos advirtió de que debíamos asegurarnos de que el contrato fuera legal, pues la empresa aseguraba que todo estaba en orden.", tr: "Şirket her şeyin yolunda olduğunu iddia ettiği için (garanti ettiği için), hakim bizi sözleşmenin yasal olduğundan emin olmamız gerektiği konusunda uyardı." }],
        analysis: [
          { word: "El juez nos", type: "pronoun", literal: "Hakim bizi", explanation: "Sujeto y objeto indirecto.", examples: [] },
          { word: "advirtió de que", type: "verb", literal: "uyardı (konusunda)", explanation: "Verbo ADVERTIR con 'DE QUE'. Significa 'avisar de un peligro'. Si fuera solo 'advirtió que', significaría que el juez lo notó con sus ojos.", examples: [] },
          { word: "debíamos", type: "verb", literal: "meliydik/malıydık", explanation: "Obligación en Imperfecto de Indicativo.", examples: [] },
          { word: "asegurarnos de que", type: "verb", literal: "emin olmak", explanation: "Verbo pronominal que requiere 'DE QUE'. Significa verificar o comprobar.", examples: [] },
          { word: "el contrato fuera legal,", type: "phrase", literal: "sözleşmenin yasal olmasından", explanation: "Subjuntivo Imperfecto provocado por la obligación de asegurarse.", examples: [] },
          { word: "pues", type: "connector", literal: "zira / çünkü", explanation: "Conector causal formal.", examples: [] },
          { word: "la empresa aseguraba que", type: "verb", literal: "şirket iddia ediyordu (garanti veriyordu)", explanation: "El mismo verbo ASEGURAR pero sin pronombre ni preposición 'DE'. Aquí significa afirmar rotundamente.", examples: [] },
          { word: "todo estaba en orden.", type: "phrase", literal: "her şeyin yolunda olduğunu", explanation: "Hecho afirmado en Indicativo." }
        ]
      }
    },
    {
      id: "c2_u4_n10",
      type: "theory",
      title: "Caja de Herramientas: Las Alegrías Duales",
      content: {
        concept: "Hay un verbo de emoción que vuelve locos a los estudiantes porque puede ir con o sin 'DE', cambiando su estructura sintáctica. ¡Apréndetelo para el C2!\n\n### ALEGRARSE DE QUE vs. ALEGRAR QUE\n\n**1. Me alegro DE QUE (Estructura pronominal):**\n• El verbo principal se conjuga para la persona que siente.\n• Yo me alegro, tú te alegras, él se alegra... + **DE QUE** + Subjuntivo.\n• *Ej: Yo me alegro DE QUE vengas.* (Geldiğine seviniyorum).\n\n**2. Me alegra QUE (Estructura tipo 'Gustar'):**\n• El verbo NO lleva pronombre reflexivo y SIEMPRE va en 3ª persona singular (alegra).\n• El sujeto real de la frase es la cláusula entera (que tú vengas).\n• *Ej: Me alegra QUE vengas.* (Gelmen beni sevindiriyor).\n\nAmbas significan lo mismo en la práctica, ¡pero no puedes mezclar su gramática!\n❌ ERROR FATAL: *Me alegro que...* o *Me alegra de que...*",
        examples: [
          { es: "Nos alegramos de que estéis todos bien. (Con DE)", tr: "Hepinizin iyi olmasına seviniyoruz." },
          { es: "Nos alegra que estéis todos bien. (Sin DE)", tr: "Hepinizin iyi olması bizi sevindiriyor." }
        ]
      }
    },
    {
      id: "c2_u4_n11",
      type: "theory",
      title: "Taller de Producción: Aclarando el Malentendido",
      content: {
        concept: "Es la hora de demostrar tu control preposicional.\n\n**Instrucciones:**\nEscribe un correo formal (10 líneas) a un socio comercial aclarando una situación de la empresa.\n\n1. Usa un verbo de pensamiento/dicción SIN 'de' (Creo que, opino que, le comunico que).\n2. Usa al menos dos verbos que EXIJAN 'de que' (Darse cuenta de que, estar seguro de que, convencer de que).\n3. Usa un verbo Camaleón (Acordar que vs Acordarse de que / Advertir que vs Advertir de que).\n4. Despídete usando correctamente 'Alegrarse de que' o 'Alegrar que'.\n\n**Inspiración:** 'Estimado socio: Le comunico que no firmaremos hoy. Nos hemos dado cuenta de que hay un error... Quiero asegurarme de que todo esté perfecto. Le advierto de que las cifras no coinciden...'",
        examples: []
      }
    },
    {
      id: "c2_u4_n12",
      type: "exam",
      title: "Examen de Unidad: La Frontera del DE",
      content: {
        concept: "La prueba de fuego del C2. Detecta el queísmo y el dequeísmo y elige la estructura matemática perfecta para cada verbo.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué fenómeno es el 'Dequeísmo'?", options: ["Quitar el 'DE' cuando es necesario.", "Poner un 'DE' antes del 'QUE' cuando el verbo no lo necesita.", "Poner el 'DE' al final."], correct: 1 },
          { type: "multiple_choice", question: "Aplica la regla del QUÉ: Pienso ______ la economía mejorará.", options: ["que", "de que"], correct: 0 },
          { type: "multiple_choice", question: "Aplica la regla del QUÉ: Me he dado cuenta ______ la economía mejorará.", options: ["que", "de que"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta para 'Sanırım haklısın':", options: ["Supongo de que tienes razón.", "Supongo que tienes razón."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué oración es CORRECTA gramaticalmente?", options: ["Estoy seguro que vendrá.", "Estoy seguro de que vendrá."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'El guardia me advirtió de que había un ladrón'?", options: ["El guardia notó que había un ladrón.", "El guardia me informó/avisó del peligro de un ladrón."], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál de estas dos frases es correcta?", options: ["Nos alegramos que estés aquí.", "Nos alegra que estés aquí."], correct: 1 },
          { type: "multiple_choice", question: "Los socios acordaron ______ los precios subirían en marzo.", options: ["que", "de que"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué oración contiene un error de QUEÍSMO (le falta el DE)?", options: ["Te aseguro que todo está bien.", "Trató de convencerme que era inocente."], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Lamento ______ no podamos asistir a la reunión'.", options: ["que", "de que"], correct: 0 },
          { type: "syntax", turkish: "Yeni projenin harika (fantástico) olduğunu düşünüyorum.", spanish: "Pienso que el nuevo proyecto es fantástico", words: ["Pienso", "que", "el", "nuevo", "proyecto", "es", "fantástico", "de"] },
          { type: "syntax", turkish: "Zamanımızın kalmadığının farkına vardım.", spanish: "Me di cuenta de que no nos quedaba tiempo", words: ["Me", "di", "cuenta", "de", "que", "no", "nos", "quedaba", "tiempo"] },
          { type: "syntax", turkish: "Onunla (él) sözleşme imzaladığımızı hatırlıyorum.", spanish: "Me acuerdo de que firmamos el contrato con él", words: ["Me", "acuerdo", "de", "que", "firmamos", "el", "contrato", "con", "él"] },
          { type: "syntax", turkish: "Bize her şeyin yolunda olduğunu açıkladılar.", spanish: "Nos explicaron que todo estaba en orden", words: ["Nos", "explicaron", "que", "todo", "estaba", "en", "orden", "de"] },
          { type: "syntax", turkish: "Her şeyin mükemmel olduğundan emin olmak istiyorum.", spanish: "Quiero asegurarme de que todo esté perfecto", words: ["Quiero", "asegurarme", "de", "que", "todo", "esté", "perfecto", "está"] },
          { type: "syntax", turkish: "Bugün gelemeyeceğine üzülüyorum (Lamentar).", spanish: "Lamento que no puedas venir hoy", words: ["Lamento", "que", "no", "puedas", "venir", "hoy", "de"] },
          { type: "syntax", turkish: "Bana yalan söylediğine (mentir) ikna oldum (Estar convencido).", spanish: "Estoy convencido de que me miente", words: ["Estoy", "convencido", "de", "que", "me", "miente"] },
          { type: "syntax", turkish: "Yarın ofisin kapalı olduğuna dair seni uyarıyorum (Advertir - peligro).", spanish: "Te advierto de que la oficina está cerrada mañana", words: ["Te", "advierto", "de", "que", "la", "oficina", "está", "cerrada", "mañana"] },
          { type: "syntax", turkish: "Bu verilerin (datos) yanlış olduğunu savunuyoruz (sostener).", spanish: "Sostenemos que estos datos son falsos", words: ["Sostenemos", "que", "estos", "datos", "son", "falsos", "de"] },
          { type: "syntax", turkish: "Haklı olduğumu varsayıyorum (Suponer).", spanish: "Supongo que tengo la razón", words: ["Supongo", "que", "tengo", "la", "razón", "de"] }
        ]
      }
    }
  ]
};
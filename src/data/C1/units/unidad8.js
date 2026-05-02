/**
 * UNIDAD 8 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Oraciones Temporales Complejas (Inmediatez, Progresión y Límites)
 * Tema: El paso del tiempo, evolución, procesos y madurez.
 */

export const unidad8 = {
  id: "c1_u8",
  title: "Unidad 8: El Tiempo Relativo",
  description: "Domina la cronología experta. Aprende a expresar inmediatez y cambios progresivos usando conectores temporales de alto nivel.",
  nodes: [
    {
      id: "c1_u8_n1",
      type: "theory",
      title: "Teoría I: La Inmediatez Absoluta",
      content: {
        concept: "Cuando queremos decir que una acción ocurre **inmediatamente después** de otra (Yapar yapmaz / Olur olmaz), en el nivel C1 tenemos herramientas mucho más ricas que el simple 'Cuando'.\n\n### 1. NADA MÁS + INFINITIVO\nEs la estructura 'reina' del español peninsular. Es súper coloquial, muy nativa y extremadamente fácil de usar porque no tienes que pensar en el Indicativo o el Subjuntivo; ¡siempre usa Infinitivo!\n• *Nada más **LLEGAR** a casa, me quité los zapatos.* (Eve varır varmaz ayakkabılarımı çıkardım).\n• *Nada más **VERLO**, supe que mentía.* (Onu görür görmez yalan söylediğini anladım).\n\n### 2. APENAS / EN CUANTO / TAN PRONTO COMO\nEstas tres expresiones significan exactamente lo mismo (Olur olmaz). Pero, al ir seguidas de un verbo conjugado, nos obligan a usar la 'Balanza del Tiempo':\n\n**A) Si la acción ya ocurrió (Pasado) o es un hábito (Presente) ➔ INDICATIVO.**\n• *Apenas **SALÍ** a la calle, empezó a llover.* (Sokağa çıkar çıkmaz yağmur başladı - Hecho pasado).\n• *En cuanto **LLEGO** a la oficina, me preparo un café.* (Ofise varır varmaz kahve yaparım - Hábito).\n\n**B) Si la acción aún no ha ocurrido (Futuro) ➔ SUBJUNTIVO.**\n• *Tan pronto como **LLEGUES** a casa, avísame.* (Eve varır varmaz bana haber ver - Aún no has llegado).",
        examples: [
          { es: "Nada más despertarme, miré el móvil.", tr: "Uyanır uyanmaz cep telefonuma baktım." },
          { es: "En cuanto tenga los resultados, te llamaré.", tr: "Sonuçları alır almaz (henüz almadım) seni arayacağım." },
          { es: "Apenas la vi, me enamoré.", tr: "Onu görür görmez aşık oldum." }
        ]
      }
    },
    {
      id: "c1_u8_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Inmediatez)",
      exercises: [
        { type: "syntax", turkish: "Haberi (la noticia) öğrenir öğrenmez (Nada más) ağlamaya başladı.", spanish: "Nada más saber la noticia empezó a llorar", words: ["Nada", "más", "saber", "la", "noticia", "empezó", "a", "llorar"] },
        { type: "syntax", turkish: "Maaşımı (el sueldo) alır almaz (En cuanto - Futuro) o arabayı alacağım.", spanish: "En cuanto cobre el sueldo compraré ese coche", words: ["En", "cuanto", "cobre", "el", "sueldo", "compraré", "ese", "coche", "cobro"] },
        { type: "syntax", turkish: "Beni görür görmez (Apenas - Pasado) gülümsedi.", spanish: "Apenas me vio ella sonrió", words: ["Apenas", "me", "vio", "ella", "sonrió", "vea"] },
        { type: "syntax", turkish: "Vaktim olur olmaz (Tan pronto como) sana yardım edeceğim.", spanish: "Tan pronto como tenga tiempo te ayudaré", words: ["Tan", "pronto", "como", "tenga", "tiempo", "te", "ayudaré", "tengo"] },
        { type: "syntax", turkish: "Uyanır uyanmaz (Nada más) kahve içerim (Hábito).", spanish: "Nada más despertarme bebo café", words: ["Nada", "más", "despertarme", "bebo", "café", "me", "despierto"] },
        { type: "syntax", turkish: "Girer girmez (En cuanto - Pasado) herkes sustu (callarse).", spanish: "En cuanto entró todos se callaron", words: ["En", "cuanto", "entró", "todos", "se", "callaron", "entre"] },
        { type: "syntax", turkish: "Bunu bitirir bitirmez (En cuanto - Futuro) çıkacağız.", spanish: "En cuanto terminemos esto saldremos", words: ["En", "cuanto", "terminemos", "esto", "saldremos", "terminamos"] },
        { type: "syntax", turkish: "Gelir gelmez (Nada más) bana her şeyi anlattı.", spanish: "Nada más llegar me contó todo", words: ["Nada", "más", "llegar", "me", "contó", "todo", "llegó"] },
        { type: "syntax", turkish: "Güneş doğar doğmaz (Apenas - Hábito) uyanırım.", spanish: "Apenas sale el sol me despierto", words: ["Apenas", "sale", "el", "sol", "me", "despierto", "salga"] },
        { type: "syntax", turkish: "Onaylar onaylamaz (Tan pronto como - Futuro) başlayalım.", spanish: "Tan pronto como lo aprueben empecemos", words: ["Tan", "pronto", "como", "lo", "aprueben", "empecemos", "aprueban"] }
      ]
    },
    {
      id: "c1_u8_n3",
      type: "theory",
      title: "Teoría II: La Simultaneidad Progresiva",
      content: {
        concept: "En el nivel B1 usábamos 'Mientras' (Mientras cocino, escucho música). Pero en C1 queremos expresar que una acción **evoluciona o cambia al mismo tiempo** que otra. Para esto usamos los conectores progresivos (Türkçedeki *-dıkça / -dikçe*).\n\n### Los 3 Conectores Progresivos:\n• **A MEDIDA QUE...** (En forma progresiva).\n• **CONFORME...** (En proporción a).\n• **SEGÚN...** (De acuerdo a cómo avance).\n\nLos tres significan prácticamente lo mismo y son intercambiables en contextos temporales.\n\n### La Balanza del Tiempo se mantiene:\n• **A medida que PASABAN los años, él se volvía más sabio.** \n  (Yıllar geçtikçe o daha bilge oluyordu - Hecho del pasado = Indicativo).\n• **Conforme VAYAS estudiando, lo entenderás mejor.**\n  (Çalıştıkça onu daha iyi anlayacaksın - Proyección al futuro = Subjuntivo).\n• **Según AVANZAMOS en el proyecto, encontramos nuevos problemas.**\n  (Projede ilerledikçe yeni sorunlar buluyoruz - Hábito presente = Indicativo).",
        examples: [
          { es: "A medida que envejecemos, cambian nuestras prioridades.", tr: "Yaşlandıkça önceliklerimiz değişir." },
          { es: "Conforme ganes dinero, podrás invertirlo.", tr: "Para kazandıkça (gelecekte) onu yatırıma dönüştürebileceksin." },
          { es: "Según leía el libro, me asustaba más.", tr: "Kitabı okudukça daha çok korkuyordum." }
        ]
      }
    },
    {
      id: "c1_u8_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Progresión)",
      exercises: [
        { type: "speaking", spanish: "A medida que pasaba el tiempo lo entendía todo", turkish: "Zaman geçtikçe her şeyi anlıyordum." },
        { type: "speaking", spanish: "Conforme vayas leyendo te gustará más", turkish: "Okudukça (okumaya devam ettikçe) daha çok hoşuna gidecek." },
        { type: "speaking", spanish: "Según vayamos ganando experiencia será más fácil", turkish: "Deneyim kazandıkça (gelecekte) daha kolay olacak." },
        { type: "speaking", spanish: "A medida que crecen los niños necesitan más espacio", turkish: "Çocuklar büyüdükçe daha fazla alana ihtiyaç duyarlar." },
        { type: "speaking", spanish: "Conforme bajaba la temperatura hacía más frío", turkish: "Sıcaklık düştükçe daha çok soğuyordu." },
        { type: "speaking", spanish: "Según me lo explicas lo veo más claro", turkish: "Bana anlattıkça daha net görüyorum." },
        { type: "speaking", spanish: "A medida que la conocía me enamoraba más", turkish: "Onu tanıdıkça daha çok aşık oluyordum." },
        { type: "speaking", spanish: "Conforme te acerques al edificio verás el letrero", turkish: "Binaya yaklaştıkça tabelayı göreceksin." },
        { type: "speaking", spanish: "A medida que hables español perderás el miedo", turkish: "İspanyolca konuştukça korkunu kaybedeceksin." },
        { type: "speaking", spanish: "Según subíamos la montaña el aire era más puro", turkish: "Dağa tırmandıkça hava daha temizdi." }
      ]
    },
    {
      id: "c1_u8_n5",
      type: "theory",
      title: "El Reto Turco: La Magia de los Sufijos",
      content: {
        concept: "El turco es increíblemente compacto con el tiempo. Los sufijos **-ar -maz** (Inmediatez) y **-dıkça / -dikçe** (Progresión) no tienen tiempo verbal propio. El cerebro turco decide el tiempo al final de la oración.\n\n🇹🇷 *Görür görmez (Apenas ver) + kaçtım (huí).* ➔ Pasado.\n🇹🇷 *Görür görmez (Apenas ver) + kaçacağım (huiré).* ➔ Futuro.\n\n### El Desafío Español:\nEn español, **tienes que decidir el tiempo en la primera palabra**. No puedes esperar al final de la oración.\n\nSi vas a decir 'Öğrendikçe seveceksin' (A medida que aprendes / A medida que aprendas):\n1. Piensa: ¿La acción de aprender ya pasó? NO.\n2. ¿Es una promesa futura? SÍ.\n3. Obligación inmediata: Tu cerebro debe disparar el **SUBJUNTIVO** en la cláusula de 'A medida que'.\n\n✅ *A medida que **APRENDAS**, te gustará más.*\n❌ Si dices *'A medida que aprendes, te gustará'*, suena a que estás mezclando un hábito presente con una promesa futura. ¡Concordancia!",
        examples: [
          { es: "Nada más verla, la abracé. (Pasado - 'Nada más' te salva de elegir).", tr: "Onu görür görmez sarıldım." },
          { es: "Apenas la vi, la abracé. (Pasado - Indicativo).", tr: "Onu görür görmez sarıldım." },
          { es: "Apenas la vea, la abrazaré. (Futuro - Subjuntivo).", tr: "Onu görür görmez sarılacağım." }
        ]
      }
    },
    {
      id: "c1_u8_n6",
      type: "reading",
      title: "Lectura Crítica: La Adaptación",
      content: {
        text: "Recuerdo perfectamente el día que llegué a vivir a esta gran ciudad. Apenas bajé del tren, me sentí abrumada por el ruido. Nada más salir de la estación, tuve la tentación de volver a mi pequeño pueblo. Sin embargo, a medida que pasaban las semanas, fui descubriendo el encanto oculto de sus calles.\n\nMi vecino me dio un gran consejo el primer día: «Conforme vayas conociendo a la gente del barrio, te sentirás más en casa. No te encierres». Y tenía razón. Según iba participando en las actividades locales, mi ansiedad desaparecía paulatinamente.\n\nHoy, diez años después, sé que esta ciudad es mi hogar. Y le digo lo mismo a los recién llegados: en cuanto superen el miedo inicial y a medida que construyan su rutina aquí, amarán este lugar. Solo hay que darle tiempo al tiempo.",
        translation: "Bu büyük şehre yaşamak için geldiğim günü mükemmel hatırlıyorum. Trenden iner inmez (Apenas bajé) sesten bunalmış hissettim. İstasyondan çıkar çıkmaz (Nada más salir), küçük kasabama dönme cazibesine (tentación) kapıldım. Ancak haftalar geçtikçe (a medida que pasaban), sokaklarının gizli cazibesini keşfetmeye başladım.\n\nKomşum ilk gün bana harika bir tavsiye verdi: «Mahalledeki insanları tanıdıkça (Conforme vayas conociendo), kendini daha evinde hissedeceksin. Kendini kapatma». Ve haklıydı. Yerel etkinliklere katıldıkça (Según iba participando), kaygım yavaş yavaş (paulatinamente) yok oluyordu.\n\nBugün, on yıl sonra, bu şehrin benim evim olduğunu biliyorum. Ve yeni gelenlere de aynı şeyi söylüyorum: İlk korkuyu aşar aşmaz (en cuanto superen) ve burada rutinlerini oluşturdukça (a medida que construyan), bu yeri sevecekler. Sadece zamana zaman tanımak lazım."
      }
    },
    {
      id: "c1_u8_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (Elegir la Realidad)",
      exercises: [
        { type: "syntax", turkish: "Trenden iner inmez (Apenas - Pasado) bunalmış hissettim.", spanish: "Apenas bajé del tren me sentí abrumada", words: ["Apenas", "bajé", "del", "tren", "me", "sentí", "abrumada", "baje"] },
        { type: "syntax", turkish: "Girer girmez (Nada más) beni öptü (besar).", spanish: "Nada más entrar me besó", words: ["Nada", "más", "entrar", "me", "besó", "entró"] },
        { type: "syntax", turkish: "İnsanları tanıdıkça (Conforme - Futuro) mutlu olacaksın.", spanish: "Conforme vayas conociendo a la gente serás feliz", words: ["Conforme", "vayas", "conociendo", "a", "la", "gente", "serás", "feliz", "vas"] },
        { type: "syntax", turkish: "Zaman geçtikçe (A medida que - Pasado) onu daha iyi anlıyordum.", spanish: "A medida que pasaba el tiempo lo entendía mejor", words: ["A", "medida", "que", "pasaba", "el", "tiempo", "lo", "entendía", "mejor"] },
        { type: "syntax", turkish: "Gerçeği öğrenir öğrenmez (En cuanto - Futuro) ona söyleyeceğim.", spanish: "En cuanto sepa la verdad se lo diré", words: ["En", "cuanto", "sepa", "la", "verdad", "se", "lo", "diré", "sé"] },
        { type: "syntax", turkish: "O okudukça (Según - Pasado) ben dinliyordum.", spanish: "Según él leía yo escuchaba", words: ["Según", "él", "leía", "yo", "escuchaba", "lea"] },
        { type: "syntax", turkish: "İspanyolca pratiği yaptıkça (A medida que - Futuro) gelişeceksin (mejorar).", spanish: "A medida que practiques español mejorarás", words: ["A", "medida", "que", "practiques", "español", "mejorarás", "practicas"] },
        { type: "syntax", turkish: "Evi görür görmez (Nada más) satın aldılar.", spanish: "Nada más ver la casa la compraron", words: ["Nada", "más", "ver", "la", "casa", "la", "compraron", "vieron"] },
        { type: "syntax", turkish: "Güneş batar batmaz (Tan pronto como - Pasado) hava soğudu.", spanish: "Tan pronto como se puso el sol hizo frío", words: ["Tan", "pronto", "como", "se", "puso", "el", "sol", "hizo", "frío"] },
        { type: "syntax", turkish: "Maaşı alır almaz (Apenas - Futuro) hesabı ödeyeceğiz.", spanish: "Apenas cobremos el sueldo pagaremos la cuenta", words: ["Apenas", "cobremos", "el", "sueldo", "pagaremos", "la", "cuenta", "cobramos"] }
      ]
    },
    {
      id: "c1_u8_n8",
      type: "theory",
      title: "Teoría III: Los Límites Temporales",
      content: {
        concept: "Para marcar el límite de una acción usamos *Antes de (que)* y *Después de (que)*. Tienen un comportamiento gramatical peculiar en el nivel C1.\n\n### 1. ANTES DE QUE (SIEMPRE SUBJUNTIVO) 🚨\nEs una regla matemática inamovible. La expresión 'antes de que' NUNCA lleva Indicativo, porque la acción que va detrás *todavía no había ocurrido* en el momento de la oración principal.\n• Pasado: *Me fui ANTES DE QUE él **llegara**.* (O gelmeden önce gittim).\n• Futuro: *Me iré ANTES DE QUE él **llegue**.* (O gelmeden önce gideceğim).\n\n### 2. DESPUÉS DE QUE (Balancín temporal) ⚖️\nEste sí permite elegir, igual que 'Cuando'. \n• Pasado = Indicativo: *Lloró DESPUÉS DE QUE le **dijeron** la verdad.* (Gerçeği söylediklerinden sonra ağladı - Hecho real).\n• Futuro = Subjuntivo: *Llorará DESPUÉS DE QUE le **digan** la verdad.* (Söylediklerinde ağlayacak - Aún no ha pasado).\n\n💡 REGLA EXTRA: Si el sujeto es el mismo para ambas acciones, no usamos 'que', usamos el infinitivo. *'Antes de comer, me lavo las manos'*. *'Después de llegar, dormí'.*",
        examples: [
          { es: "Apaga la luz antes de que salgas.", tr: "Sen çıkmadan önce ışığı kapat (Subjuntivo obligatorio)." },
          { es: "Te llamaré después de que hable con el jefe.", tr: "Patronla konuştuktan sonra seni arayacağım (Subjuntivo de futuro)." },
          { es: "Te llamé después de que hablé con el jefe.", tr: "Patronla konuştuktan sonra seni aradım (Indicativo de pasado)." }
        ]
      }
    },
    {
      id: "c1_u8_n9",
      type: "theory",
      title: "Sintaxis Visual: El Estrés Contra el Reloj",
      content: {
        concept: "Vamos a deconstruir una frase de urgencia que combina inmediatez absoluta con un límite temporal imbatible.",
        examples: [{ es: "Nada más enterarme de la noticia, salí corriendo hacia el hospital antes de que fuera demasiado tarde.", tr: "Haberi öğrenir öğrenmez, çok geç olmadan hastaneye doğru koşarak çıktım." }],
        analysis: [
          { word: "Nada más", type: "connector", literal: "Daha fazlası yok (hemen)", explanation: "Estructura de inmediatez. Exige obligatoriamente infinitivo.", examples: [] },
          { word: "enterarme", type: "verb", literal: "öğrenmek (benim)", explanation: "Infinitivo del verbo pronominal ENTERARSE. El pronombre 'me' se pega al final porque yo soy quien se entera.", examples: [] },
          { word: "de la noticia,", type: "noun", literal: "haberi", explanation: "Régimen preposicional: Enterarse siempre lleva 'DE'.", examples: [] },
          { word: "salí corriendo", type: "verb", literal: "koşarak çıktım", explanation: "Perífrasis verbal de movimiento rápido. Acción principal en Indefinido.", examples: [] },
          { word: "hacia el hospital", type: "noun", literal: "hastaneye doğru", explanation: "Dirección de la acción.", examples: [] },
          { word: "antes de que", type: "connector", literal: "-den önce ki", explanation: "Conector de límite temporal. EXIGE SUBJUNTIVO en el 100% de los casos.", examples: [] },
          { word: "fuera", type: "verb", literal: "olması (subjuntivo)", explanation: "Verbo SER en Imperfecto de Subjuntivo (-ra). Usamos el pasado porque 'salí' está en pasado.", examples: [] },
          { word: "demasiado tarde.", type: "adverb", literal: "çok geç", explanation: "Condición final.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u8_n10",
      type: "theory",
      title: "Caja de Herramientas: Evolución y Procesos",
      content: {
        concept: "Para hablar del paso del tiempo con elegancia, incorpora estos adverbios y adjetivos C1 a tu vocabulario:\n\n• **Paulatinamente / Gradualmente** (Yavaş yavaş / Kademe kademe) ➔ *La situación mejoró paulatinamente.*\n• **Efímero/a** (Geçici / Kısa ömürlü) ➔ *El éxito en las redes sociales es efímero.*\n• **Simultáneamente** (Eşzamanlı olarak) ➔ *Los dos eventos ocurrieron simultáneamente.*\n• **El transcurso** (Süreç / Geçiş) ➔ *En el transcurso del año...*\n• **A la larga** (Uzun vadede) ➔ *A la larga, te alegrarás.*\n• **Previamente / Con anterioridad** (Önceden / Daha önce).\n• **Repentinamente / Súbitamente** (Aniden / Beklenmedik bir şekilde).",
        examples: [
          { es: "La alegría fue efímera; repentinamente todo cambió.", tr: "Sevinç kısa ömürlüydü; aniden her şey değişti." },
          { es: "Paulatinamente, nos acostumbramos a la nueva vida.", tr: "Yavaş yavaş (kademe kademe) yeni hayata alıştık." },
          { es: "A la larga, este esfuerzo merecerá la pena.", tr: "Uzun vadede bu çaba buna değecek." }
        ]
      }
    },
    {
      id: "c1_u8_n11",
      type: "theory",
      title: "Taller de Producción: Crónica de un Proceso",
      content: {
        concept: "Aplica tu dominio de los conectores progresivos y de inmediatez.\n\n**Instrucciones:**\nEscribe una reflexión (10-12 líneas) sobre un proceso de adaptación (aprender un idioma, llegar a una nueva ciudad, o madurar con la edad).\n1. Usa al menos una estructura de inmediatez (Nada más / Apenas / En cuanto).\n2. Usa al menos dos estructuras progresivas (A medida que / Conforme).\n3. Usa un 'Antes de que' (con Subjuntivo obligatorio).\n4. Incluye palabras de la Caja de Herramientas (paulatinamente, a la larga, efímero).\n\n**Inspiración:** 'Nada más empezar a aprender español, me sentí frustrado. Sin embargo, a medida que pasaban los meses, empecé a entender mejor. Conforme vaya mejorando mi vocabulario...'",
        examples: []
      }
    },
    {
      id: "c1_u8_n12",
      type: "exam",
      title: "Examen de Unidad: La Línea del Tiempo C1",
      content: {
        concept: "Demuestra tu precisión gramatical eligiendo entre Indicativo, Subjuntivo o Infinitivo en las estructuras temporales más complejas.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué estructura usamos con 'Nada más'?", options: ["Subjuntivo siempre", "Infinitivo siempre", "Indicativo"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Te enviaré el dinero en cuanto lo ______ (recibir - Futuro)'.", options: ["recibo", "reciba", "recibí"], correct: 1 },
          { type: "multiple_choice", question: "Apenas la ______ (ver - Pasado), supe que estaba enferma.", options: ["vi", "viera", "vea"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué conector temporal exige SIEMPRE el modo Subjuntivo (con distintos sujetos)?", options: ["Después de que", "Antes de que", "En cuanto"], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: 'Salió de casa antes de que ______ (empezar - Pasado) a llover'.", options: ["empezara", "empezó", "empiece"], correct: 0 },
          { type: "multiple_choice", question: "A medida que ______ (pasar - Hábito pasado) el tiempo, ella se sentía mejor.", options: ["pasaba", "pasara", "pase"], correct: 0 },
          { type: "multiple_choice", question: "Conforme ______ (tú - aprender - Futuro) español, te gustará más.", options: ["aprendes", "aprendas", "aprendiste"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa la palabra 'Paulatinamente'?", options: ["Aniden", "Yavaş yavaş / Kademeli olarak", "Aynı anda"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Efímero'?", options: ["Sonsuz / Kalıcı", "Kısa ömürlü / Geçici", "Güçlü"], correct: 1 },
          { type: "multiple_choice", question: "Nos fuimos después de que ellos ______ (firmar - Pasado real) el contrato.", options: ["firmaron", "firmaran"], correct: 0 },
          { type: "syntax", turkish: "İşe varır varmaz (Nada más) bir kahve içtim.", spanish: "Nada más llegar al trabajo bebí un café", words: ["Nada", "más", "llegar", "al", "trabajo", "bebí", "un", "café", "llegué"] },
          { type: "syntax", turkish: "Güneş batar batmaz (Apenas - Pasado) hava soğudu.", spanish: "Apenas se puso el sol hizo frío", words: ["Apenas", "se", "puso", "el", "sol", "hizo", "frío", "ponga"] },
          { type: "syntax", turkish: "Tatilde olduğumuzda (En cuanto - Futuro) dinleneceğiz.", spanish: "En cuanto estemos de vacaciones descansaremos", words: ["En", "cuanto", "estemos", "de", "vacaciones", "descansaremos", "estamos"] },
          { type: "syntax", turkish: "Yıllar geçtikçe (A medida que - Pasado) önceliklerimiz (prioridades) değişti.", spanish: "A medida que pasaban los años cambiaron nuestras prioridades", words: ["A", "medida", "que", "pasaban", "los", "años", "cambiaron", "nuestras", "prioridades"] },
          { type: "syntax", turkish: "O okudukça (Según - Pasado) ben anlıyordum.", spanish: "Según él leía yo entendía", words: ["Según", "él", "leía", "yo", "entendía", "lea"] },
          { type: "syntax", turkish: "Antrenman yaptıkça (Conforme - Futuro) daha hızlı olacaksın.", spanish: "Conforme vayas entrenando serás más rápido", words: ["Conforme", "vayas", "entrenando", "serás", "más", "rápido", "vas"] },
          { type: "syntax", turkish: "Onlar gelmeden önce (Antes de que) her şeyi temizledik.", spanish: "Limpiamos todo antes de que ellos llegaran", words: ["Limpiamos", "todo", "antes", "de", "que", "ellos", "llegaran", "llegaron"] },
          { type: "syntax", turkish: "Sınav başlamadan önce (Antes de que - Futuro) çalışmalısın.", spanish: "Debes estudiar antes de que empiece el examen", words: ["Debes", "estudiar", "antes", "de", "que", "empiece", "el", "examen", "empieza"] },
          { type: "syntax", turkish: "Daha fazla kanıt (pruebas) olana kadar (Hasta que - Futuro) bekleyeceğim.", spanish: "Esperaré hasta que haya más pruebas", words: ["Esperaré", "hasta", "que", "haya", "más", "pruebas", "hay"] },
          { type: "syntax", turkish: "Film bittikten sonra (Después de que - Pasado) uyuduk.", spanish: "Dormimos después de que terminó la película", words: ["Dormimos", "después", "de", "que", "terminó", "la", "película", "terminara"] }
        ]
      }
    }
  ]
};
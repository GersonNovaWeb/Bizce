/**
 * UNIDAD 16 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Lenguaje Técnico, Científico y Divulgación.
 * Tema: Astrofísica, medicina, tecnología y raíces grecolatinas.
 */

export const unidad16 = {
  id: "c1_u16",
  title: "Unidad 16: Ciencia y Divulgación",
  description: "Domina el lenguaje de los expertos. Aprende a leer artículos científicos, entender terminología médica y tecnológica usando raíces grecolatinas.",
  nodes: [
    {
      id: "c1_u16_n1",
      type: "theory",
      title: "Teoría I: El Lenguaje Objetivo",
      content: {
        concept: "El español científico y de divulgación tiene tres reglas de oro para sonar objetivo y eliminar la emoción del investigador:\n\n### 1. La Erradicación del 'Yo'\nNunca verás 'Yo descubrí' en un paper científico. Se usa la **Pasiva Refleja** (Se descubrió) o la **Tercera Persona Plural** (Los investigadores hallaron).\n\n### 2. Nominalización (Sustantivos de Acción)\nEn lugar de usar verbos, la ciencia prefiere convertir la acción en un sustantivo que termina en **-ción**, **-miento** o **-aje**.\n• Normal: *El hielo se derritió rápido.*\n• Científico: *El **derretimiento** del hielo fue acelerado.*\n• Normal: *Evaluaron a los pacientes.*\n• Científico: *La **evaluación** de los pacientes...*\n\n### 3. Precisión Absoluta\nSe evitan adjetivos emocionales (bueno/malo) y se usan adjetivos de grado o cualidad: *Significativo, irrelevante, concluyente, hipotético*.",
        examples: [
          { es: "La implementación del nuevo protocolo resultó exitosa.", tr: "Yeni protokolün uygulanması başarılı sonuçlandı." },
          { es: "Se observó una disminución significativa en los síntomas.", tr: "Semptomlarda önemli (anlamlı) bir azalma gözlemlendi." },
          { es: "La extracción de la muestra se llevó a cabo en el laboratorio.", tr: "Numunenin çıkarılması laboratuvarda gerçekleştirildi." }
        ]
      }
    },
    {
      id: "c1_u16_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Divulgación)",
      exercises: [
        { type: "syntax", turkish: "Hücrelerin (células) değerlendirilmesi (evaluación) tamamlandı (completar).", spanish: "La evaluación de las células fue completada", words: ["La", "evaluación", "de", "las", "células", "fue", "completada"] },
        { type: "syntax", turkish: "Semptomlarda anlamlı (significativa) bir azalma (disminución) gözlemlendi (observar).", spanish: "Se observó una disminución significativa en los síntomas", words: ["Se", "observó", "una", "disminución", "significativa", "en", "los", "síntomas"] },
        { type: "syntax", turkish: "Deneyin (experimento) uygulanması (implementación) başarılıydı.", spanish: "La implementación del experimento fue exitosa", words: ["La", "implementación", "del", "experimento", "fue", "exitosa"] },
        { type: "syntax", turkish: "Verilerin (datos) analizi (análisis) yeni kanıtlar gösteriyor.", spanish: "El análisis de los datos muestra nueva evidencia", words: ["El", "análisis", "de", "los", "datos", "muestra", "nueva", "evidencia"] },
        { type: "syntax", turkish: "Öznenin (sujeto) davranışında (comportamiento) bir değişiklik (alteración) buldular (Hallar).", spanish: "Hallaron una alteración en el comportamiento del sujeto", words: ["Hallaron", "una", "alteración", "en", "el", "comportamiento", "del", "sujeto"] },
        { type: "syntax", turkish: "Keşif (descubrimiento) dergide (revista) yayınlandı (publicar).", spanish: "El descubrimiento se publicó en la revista", words: ["El", "descubrimiento", "se", "publicó", "en", "la", "revista"] },
        { type: "syntax", turkish: "Bu teori bilim camiası tarafından çürütüldü (refutar).", spanish: "Esta teoría fue refutada por la comunidad científica", words: ["Esta", "teoría", "fue", "refutada", "por", "la", "comunidad", "científica"] },
        { type: "syntax", turkish: "Testlerin (ensayos) sonucu kesin (concluyente) değildi.", spanish: "El resultado de los ensayos no fue concluyente", words: ["El", "resultado", "de", "los", "ensayos", "no", "fue", "concluyente"] },
        { type: "syntax", turkish: "Aşının (vacuna) geliştirilmesi (desarrollo) yıllar aldı.", spanish: "El desarrollo de la vacuna tomó años", words: ["El", "desarrollo", "de", "la", "vacuna", "tomó", "años"] },
        { type: "syntax", turkish: "Örnekleme (muestreo) kontrollü bir ortamda gerçekleştirildi.", spanish: "El muestreo se realizó en un entorno controlado", words: ["El", "muestreo", "se", "realizó", "en", "un", "entorno", "controlado"] }
      ]
    },
    {
      id: "c1_u16_n3",
      type: "theory",
      title: "Teoría II: Raíces Griegas y Latinas (Prefijos)",
      content: {
        concept: "Gran parte del vocabulario médico, tecnológico y científico en español proviene del griego y el latín. Conocer estos prefijos te permite deducir el significado de palabras que nunca has visto.\n\n### Prefijos Fundamentales:\n• **Hiper-** (Exceso/Sobre): *Hipertensión, hiperactivo, hipervínculo.*\n• **Hipo-** (Defecto/Debajo): *Hipotermia, hipocresía, hipótesis.*\n• **Neo-** (Nuevo): *Neologismo, neoclásico, neonatal.*\n• **Paleo-** (Antiguo): *Paleontología, paleolítico.*\n• **Pseudo-** (Falso): *Pseudociencia, seudónimo.*\n• **Poli-** (Muchos): *Políglota, politeísta, polígono.*\n• **A- / An-** (Sin / Privación): *Analfabeto, asimétrico, anestesia.*\n\n*Ejemplo deductivo:* Si 'glota' significa lengua, un 'políglota' es alguien que habla muchas lenguas.",
        examples: [
          { es: "El paciente sufre de hipotermia grave.", tr: "Hasta şiddetli hipotermi (vücut ısısı düşüklüğü) geçiriyor." },
          { es: "Esa teoría de internet es pura pseudociencia.", tr: "İnternetteki o teori saf sözde bilimdir (sahte bilim)." },
          { es: "El diseño del edificio es asimétrico.", tr: "Binanın tasarımı asimetriktir (simetrisi yoktur)." }
        ]
      }
    },
    {
      id: "c1_u16_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Terminología)",
      exercises: [
        { type: "speaking", spanish: "El diagnóstico de hipotermia fue confirmado", turkish: "Hipotermi (ısı düşüklüğü) teşhisi doğrulandı." },
        { type: "speaking", spanish: "Es una afirmación pseudocientífica sin base", turkish: "Temeli olmayan sözde bilimsel (sahte) bir iddiadır." },
        { type: "speaking", spanish: "La asimetría del tumor es preocupante", turkish: "Tümörün asimetrisi (düzensizliği) endişe verici." },
        { type: "speaking", spanish: "Sufre de hipertensión arterial", turkish: "Arteriyel hipertansiyondan (yüksek tansiyon) muzdarip." },
        { type: "speaking", spanish: "Es un políglota habla seis idiomas", turkish: "O bir çok dilli (poliglot), altı dil konuşuyor." },
        { type: "speaking", spanish: "El análisis neonatal salió perfecto", turkish: "Yenidoğan (neonatal) analizi mükemmel çıktı." },
        { type: "speaking", spanish: "Estudiamos la dieta del paleolítico", turkish: "Paleolitik (Eski Taş Çağı) diyetini inceliyoruz." },
        { type: "speaking", spanish: "Se aplicó anestesia local al paciente", turkish: "Hastaya lokal anestezi (hissizlik) uygulandı." },
        { type: "speaking", spanish: "El calentamiento global es una hiperbole a veces", turkish: "Küresel ısınma bazen bir mübalağa (hiperbol/abartı) oluyor." },
        { type: "speaking", spanish: "Busca el hipervínculo en el documento", turkish: "Belgedeki köprüyü (hyperlink) bul." }
      ]
    },
    {
      id: "c1_u16_n5",
      type: "theory",
      title: "El Reto Turco: La Tradición vs El Neologismo",
      content: {
        concept: "Al traducir lenguaje tecnológico o médico, el español y el turco tienen filosofías opuestas.\n\n🇹🇷 **El Turco Purista:** En Turquía, instituciones como la TDK suelen crear palabras completamente nuevas usando raíces turcas para conceptos modernos. \n*Ej: Bilgisayar (Bilgi + sayar), Uzay, Yazılım.*\n\n🇪🇸 **El Español Greco-Latino:** En español, la RAE prefiere adaptar directamente la raíz latina/griega o inglesa. Esto te da una ventaja si sabes inglés, porque las palabras científicas son casi idénticas.\n*Ej: Computadora / Ordenador (Computer), Espacio (Space), Software.*\n\n### Trampa C1 (Falsos Amigos de la Ciencia):\n• ❌ **Sensible** (Inglés: Sensible = Mantıklı). ✅ En español: *Sensato* (Mantıklı) / *Sensible* (Hassas).\n• ❌ **Evidencia** (Inglés: Evidence = Kanıt). ✅ En español legal se prefiere *Prueba*, aunque 'evidencia empírica' ya se acepta en ciencia.",
        examples: [
          { es: "No hay pruebas empíricas que sustenten la hipótesis.", tr: "Hipotezi destekleyen hiçbir ampirik kanıt yoktur." },
          { es: "El instrumento de medición es muy sensible a los cambios.", tr: "Ölçüm cihazı değişikliklere karşı çok hassastır." }
        ]
      }
    },
    {
      id: "c1_u16_n6",
      type: "reading",
      title: "Lectura Crítica: La Edición Genética (CRISPR)",
      content: {
        text: "La herramienta de edición genética CRISPR-Cas9 ha supuesto un cambio de paradigma en la biología molecular contemporánea. Su implementación permite a los científicos alterar el ADN de organismos con una precisión asombrosa. \n\nRecientemente, investigadores de la universidad publicaron un ensayo donde se observó la erradicación exitosa de una anomalía genética en embriones de ratón. El análisis de las muestras confirmó que la modificación celular fue permanente. No obstante, este hito tecnológico plantea serios dilemas bioéticos. La posibilidad de crear humanos 'a la carta' ha generado el rechazo de ciertos sectores. Algunos comités exigen que la utilización de esta técnica en etapas neonatales quede estrictamente prohibida hasta que las regulaciones internacionales sean vinculantes y transparentes.",
        translation: "CRISPR-Cas9 genetik düzenleme aracı, çağdaş moleküler biyolojide bir paradigma değişikliği anlamına gelmektedir (ha supuesto). Uygulanması (implementación), bilim adamlarının organizmaların DNA'sını şaşırtıcı bir hassasiyetle değiştirmesine olanak tanır.\n\nGeçtiğimiz günlerde üniversite araştırmacıları, fare embriyolarında genetik bir anomalinin başarılı bir şekilde yok edildiğinin (erradicación) gözlemlendiği (se observó) bir deneme/makale yayınladılar. Numunelerin (muestras) analizi hücresel değişikliğin kalıcı olduğunu doğruladı. Bununla birlikte, bu teknolojik dönüm noktası (hito) ciddi biyoetik ikilemler ortaya koymaktadır (plantea). 'İsteğe bağlı' insanlar yaratma olasılığı belirli kesimlerin reddine yol açmıştır. Bazı komiteler, uluslararası düzenlemeler bağlayıcı (vinculantes) ve şeffaf olana kadar bu tekniğin yenidoğan evrelerinde kullanılmasının kesinlikle yasaklanmasını talep etmektedir (exigen que... quede prohibida)."
      }
    },
    {
      id: "c1_u16_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto C1 (Terminología)",
      exercises: [
        { type: "syntax", turkish: "Bilim adamları DNA'yı şaşırtıcı bir hassasiyetle değiştiriyor (alterar).", spanish: "Los científicos alteran el ADN con precisión asombrosa", words: ["Los", "científicos", "alteran", "el", "ADN", "con", "precisión", "asombrosa"] },
        { type: "syntax", turkish: "Genetik bir anomalinin yok edildiği (erradicación) gözlemlendi.", spanish: "Se observó la erradicación de una anomalía genética", words: ["Se", "observó", "la", "erradicación", "de", "una", "anomalía", "genética", "observaron"] },
        { type: "syntax", turkish: "Uluslararası düzenlemeler bağlayıcı (vinculante) olana kadar (hasta que).", spanish: "Hasta que las regulaciones internacionales sean vinculantes", words: ["Hasta", "que", "las", "regulaciones", "internacionales", "sean", "vinculantes", "son"] },
        { type: "syntax", turkish: "Hücresel değişikliğin (modificación) kalıcı olduğu doğrulandı (confirmar).", spanish: "Se confirmó que la modificación celular fue permanente", words: ["Se", "confirmó", "que", "la", "modificación", "celular", "fue", "permanente"] },
        { type: "syntax", turkish: "Bu teknolojik dönüm noktası (hito) ciddi biyoetik ikilemler ortaya koymaktadır (plantear).", spanish: "Este hito tecnológico plantea serios dilemas bioéticos", words: ["Este", "hito", "tecnológico", "plantea", "serios", "dilemas", "bioéticos"] },
        { type: "speaking", spanish: "La hipótesis fue rechazada por falta de pruebas", turkish: "Hipotez kanıt yetersizliğinden reddedildi." },
        { type: "speaking", spanish: "Es imperativo regular la inteligencia artificial", turkish: "Yapay zekayı düzenlemek zorunludur." },
        { type: "speaking", spanish: "Se llevó a cabo un muestreo sistemático", turkish: "Sistematik bir örnekleme gerçekleştirildi (llevó a cabo)." },
        { type: "speaking", spanish: "La implementación del software redujo los errores", turkish: "Yazılımın uygulanması hataları azalttı." },
        { type: "speaking", spanish: "Existen sesgos cognitivos en esta investigación", turkish: "Bu araştırmada bilişsel önyargılar (sesgos) bulunmaktadır." }
      ]
    },
    {
      id: "c1_u16_n8",
      type: "theory",
      title: "Teoría III: Los Sufijos de Especialización",
      content: {
        concept: "Así como los prefijos nos dan el concepto inicial, los **sufijos** al final de la palabra nos dicen qué tipo de ciencia o enfermedad estamos tratando.\n\n### 1. -ITIS (Inflamación / Enfermedad)\n• *Hepatitis* (Hígado inflamado).\n• *Otitis* (Inflamación del oído).\n• *Titulitis* (Obsesión social por tener títulos académicos - Uso coloquial irónico).\n\n### 2. -LOGÍA (Estudio / Tratado)\n• *Biología, Psicología, Criminología.*\n\n### 3. -PATÍA (Dolencia / Afección)\n• *Cardiopatía* (Enfermedad del corazón).\n• *Psicopatía* (Trastorno mental).\n• *Empatía / Apatía* (Sentir con el otro / Falta de sentimiento).\n\n### 4. -IZACIÓN (Proceso o acción)\nConvierte un adjetivo en el nombre del proceso.\n• Global ➔ *Globalización* (Küreselleşme).\n• Digital ➔ *Digitalización* (Dijitalleşme).\n• Urbano ➔ *Urbanización* (Kentleşme).",
        examples: [
          { es: "La digitalización de los datos es prioritaria.", tr: "Verilerin dijitalleştirilmesi önceliklidir." },
          { es: "El paciente mostró mucha apatía durante la entrevista.", tr: "Hasta mülakat sırasında çok ilgisizlik (apati) gösterdi." }
        ]
      }
    },
    {
      id: "c1_u16_n9",
      type: "theory",
      title: "Sintaxis Visual: El Abstract Científico",
      content: {
        concept: "Vamos a deconstruir la frase típica que abre el resumen (abstract) de un artículo científico o médico. Fíjate en la densidad de la nominalización y la voz pasiva.",
        examples: [{ es: "El presente ensayo clínico tuvo como objetivo la evaluación de la eficacia de la inmunización en la población neonatal.", tr: "Bu klinik çalışma (deneme), yenidoğan popülasyonunda bağışıklamanın etkinliğinin değerlendirilmesini amaçlamıştır." }],
        analysis: [
          { word: "El presente", type: "adjective", literal: "Mevcut / Bu", explanation: "Fórmula académica para referirse al documento que se está leyendo.", examples: [] },
          { word: "ensayo clínico", type: "noun", literal: "klinik çalışma (deneme)", explanation: "Sustantivo técnico médico.", examples: [] },
          { word: "tuvo como objetivo", type: "verb", literal: "amacı olarak sahipti (amaçladı)", explanation: "Locución verbal formal en Indefinido.", examples: [] },
          { word: "la evaluación", type: "noun", literal: "değerlendirilmesi", explanation: "Nominalización. En lugar de decir 'evaluar' (verbo), se usa el sustantivo abstracto.", examples: [] },
          { word: "de la eficacia", type: "noun", literal: "etkinliğinin", explanation: "Segundo sustantivo encadenado con 'de'.", examples: [] },
          { word: "de la inmunización", type: "noun", literal: "bağışıklamanın (aşılamanın)", explanation: "Tercer sustantivo encadenado con 'de'. Muy común en español académico.", examples: [] },
          { word: "en la población", type: "noun", literal: "popülasyonda", explanation: "Complemento de grupo objetivo.", examples: [] },
          { word: "neonatal.", type: "adjective", literal: "yenidoğan", explanation: "Adjetivo especializado con prefijo neo-.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u16_n10",
      type: "theory",
      title: "Caja de Herramientas: El Método Científico",
      content: {
        concept: "Vocabulario esencial para leer papers y artículos de divulgación de la revista *Science* o *Nature* en español.\n\n• **El ensayo / El estudio** (Çalışma / Deneme - científico)\n• **La muestra** (Örneklem / Numune)\n• **El hallazgo** (Bulgu)\n• **Corroborar / Respaldar** (Doğrulamak / Desteklemek)\n• **Desmentir** (Yalanlamak / Aksini kanıtlamak)\n• **El sesgo** (Önyargı / Yanlılık estadístico)\n• **Aleatorio** (Rastgele / Randomize)\n• **El efecto placebo** (Plasebo etkisi)\n• **La variable** (Değişken)",
        examples: [
          { es: "El estudio se realizó con una muestra aleatoria de mil pacientes.", tr: "Çalışma bin hastadan oluşan rastgele bir örneklemle gerçekleştirildi." },
          { es: "Los hallazgos respaldan la hipótesis inicial.", tr: "Bulgular ilk hipotezi destekliyor." },
          { es: "El equipo científico tuvo que desmentir el rumor de internet.", tr: "Bilim ekibi internetteki söylentiyi yalanlamak zorunda kaldı." }
        ]
      }
    },
    {
      id: "c1_u16_n11",
      type: "theory",
      title: "Taller de Producción: Reporte de Divulgación",
      content: {
        concept: "Ponte la bata blanca. Eres una periodista científica redactando el resumen de un descubrimiento.\n\n**Instrucciones:**\nEscribe un pequeño reporte (10-12 líneas) sobre un avance imaginario en medicina o tecnología (Ej: Una cura para el insomnio o un motor de agua).\n\n1. Evita el uso del 'Yo'. Usa la **pasiva refleja** o verbos impersonales (Se descubrió, se analizó).\n2. Usa la **nominalización** al menos dos veces (El desarrollo de..., La implementación de...).\n3. Incluye al menos dos palabras con prefijos/sufijos grecolatinos (hiper, poli, -logía, -ización).\n4. Usa vocabulario del Método Científico (muestra, sesgo, corroborar).\n\n**Inspiración:** 'Recientemente, el Instituto de Biología corroboró un hallazgo histórico. Se observó que la implementación del nuevo chip reduce la hiperactividad cerebral...'",
        examples: []
      }
    },
    {
      id: "c1_u16_n12",
      type: "exam",
      title: "Examen de Unidad: El Criterio Científico",
      content: {
        concept: "Demuestra tu capacidad para entender terminología abstracta, prefijos y la gramática del español técnico.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué característica gramatical NO es propia del español científico?", options: ["Uso frecuente del pronombre 'Yo'.", "Voz pasiva y pasiva refleja.", "Nominalización de las acciones."], correct: 0 },
          { type: "multiple_choice", question: "Convierte 'Analizar los datos fue rápido' a un sustantivo (Nominalización):", options: ["Los datos analizados son rápidos.", "El análisis de los datos fue rápido.", "Se analizaron rápidamente."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa el prefijo 'Hipo-' en 'Hipotermia'?", options: ["Exceso / Por encima", "Defecto / Por debajo / Düşük", "Falso"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa el prefijo 'Pseudo-' en 'Pseudociencia'?", options: ["Falso / Sahte", "Nuevo", "Antiguo"], correct: 0 },
          { type: "multiple_choice", question: "El sufijo '-itis' en medicina significa:", options: ["Estudio de algo", "Inflamación o enfermedad", "Proceso"], correct: 1 },
          { type: "multiple_choice", question: "La traducción de 'Örneklem (İstatistiksel)' en un ensayo clínico es:", options: ["El ejemplo", "La muestra", "La demostración"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué verbo usamos para 'Doğrulamak / Desteklemek' una teoría?", options: ["Desmentir", "Obviar", "Corroborar"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué es un 'Sesgo' en un estudio?", options: ["Bir önyargı / İstatistiksel sapma", "Bir başarı", "Bir tür bakteri"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Rastgele' en metodología científica?", options: ["Asimétrico", "Aleatorio", "Significativo"], correct: 1 },
          { type: "multiple_choice", question: "Elige la más profesional: 'Los médicos ______ la teoría de internet'.", options: ["dijeron que no a", "desmintieron", "cancelaron"], correct: 1 },
          { type: "syntax", turkish: "Yeni protokolün uygulanması başarılıydı.", spanish: "La implementación del nuevo protocolo fue exitosa", words: ["La", "implementación", "del", "nuevo", "protocolo", "fue", "exitosa", "implementar"] },
          { type: "syntax", turkish: "Semptomlarda anlamlı bir azalma gözlemlendi (observar).", spanish: "Se observó una disminución significativa en los síntomas", words: ["Se", "observó", "una", "disminución", "significativa", "en", "los", "síntomas", "observaron"] },
          { type: "syntax", turkish: "Bulgular (hallazgos) ilk hipotezi doğruluyor (corroborar).", spanish: "Los hallazgos corroboran la hipótesis inicial", words: ["Los", "hallazgos", "corroboran", "la", "hipótesis", "inicial", "hipótesises"] },
          { type: "syntax", turkish: "Rastgele bir örneklem (muestra) kullanıldı.", spanish: "Se utilizó una muestra aleatoria", words: ["Se", "utilizó", "una", "muestra", "aleatoria", "ejemplo"] },
          { type: "syntax", turkish: "Hasta şiddetli hipotermi geçiriyor (sufre de).", spanish: "El paciente sufre de hipotermia grave", words: ["El", "paciente", "sufre", "de", "hipotermia", "grave"] },
          { type: "syntax", turkish: "Hücresel değişikliğin kalıcı olduğu onaylandı.", spanish: "Se confirmó que la modificación celular fue permanente", words: ["Se", "confirmó", "que", "la", "modificación", "celular", "fue", "permanente", "celulosa"] },
          { type: "syntax", turkish: "Gelecekteki etkilerin (consecuencias) değerlendirilmesi (evaluación) şarttır.", spanish: "La evaluación de las consecuencias futuras es imperativa", words: ["La", "evaluación", "de", "las", "consecuencias", "futuras", "es", "imperativa"] },
          { type: "syntax", turkish: "Yenidoğan (neonatal) analizi mükemmel çıktı (salir).", spanish: "El análisis neonatal salió perfecto", words: ["El", "análisis", "neonatal", "salió", "perfecto", "salió"] },
          { type: "syntax", turkish: "Bu teori sözde bilimseldir (pseudocientífica) ve kanıttan yoksundur.", spanish: "Esta teoría es pseudocientífica y carece de pruebas", words: ["Esta", "teoría", "es", "pseudocientífica", "y", "carece", "de", "pruebas", "falta"] },
          { type: "syntax", turkish: "Deneme (ensayo) laboratuvar ortamında gerçekleştirildi (llevar a cabo).", spanish: "El ensayo se llevó a cabo en un entorno de laboratorio", words: ["El", "ensayo", "se", "llevó", "a", "cabo", "en", "un", "entorno", "de", "laboratorio"] }
        ]
      }
    }
  ]
};
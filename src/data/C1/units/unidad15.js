/**
 * UNIDAD 15 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Español legal, financiero y corporativo.
 * Tema: Lectura de contratos, eufemismos de negocios y el Futuro de Subjuntivo.
 */

export const unidad15 = {
  id: "c1_u15",
  title: "Unidad 15: Cerrando el Trato",
  description: "Domina el lenguaje legal y financiero. Aprende a redactar contraofertas, entender las cláusulas ocultas y negociar como un alto ejecutivo.",
  nodes: [
    {
      id: "c1_u15_n1",
      type: "theory",
      title: "Teoría I: Condicionales Legales",
      content: {
        concept: "En la redacción de contratos y acuerdos comerciales, no podemos usar un simple 'Si' o un 'Siempre y cuando'. Necesitamos conectores de máxima precisión jurídica. Todos ellos exigen **Subjuntivo** cuando hablan del futuro.\n\n### 1. EN EL SUPUESTO DE QUE (Varsayalım ki / ... durumunda)\nIntroduce una posibilidad remota pero que debe estar regulada en el contrato.\n• *La empresa devolverá el dinero **en el supuesto de que** el producto presente defectos.*\n\n### 2. A RESERVA DE QUE (... şartıyla / saklı kalmak kaydıyla)\nSignifica que aceptas algo, pero dejas una 'puerta abierta' para cancelarlo si una condición final no se cumple.\n• *Firmaremos la compra de la casa **a reserva de que** el banco apruebe el préstamo.*\n\n### 3. A NO SER QUE / SALVO QUE (...-madıkça)\nSe usan constantemente en las cláusulas de excepción.\n• *El inquilino no podrá tener mascotas, **salvo que** el propietario lo autorice por escrito.*",
        examples: [
          { es: "Procederemos con el pago en el supuesto de que recibamos la factura hoy.", tr: "Faturayı bugün almamız durumunda (varsayımıyla) ödemeye geçeceğiz." },
          { es: "El contrato se renovará, a reserva de que una de las partes se oponga.", tr: "Taraflardan birinin itiraz etmemesi şartıyla sözleşme yenilenecektir." }
        ]
      }
    },
    {
      id: "c1_u15_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (La Cláusula)",
      exercises: [
        { type: "syntax", turkish: "Gecikme (retraso) olması durumunda (En el supuesto de que) tazminat ödeyecekler.", spanish: "En el supuesto de que haya retraso pagarán indemnización", words: ["En", "el", "supuesto", "de", "que", "haya", "retraso", "pagarán", "indemnización"] },
        { type: "syntax", turkish: "Müdürün onaylaması şartıyla (a reserva de que) projeyi kabul ediyoruz.", spanish: "Aceptamos el proyecto a reserva de que el director lo apruebe", words: ["Aceptamos", "el", "proyecto", "a", "reserva", "de", "que", "el", "director", "lo", "apruebe"] },
        { type: "syntax", turkish: "Taraflar (las partes) aksini (lo contrario) kabul etmedikçe (salvo que)...", spanish: "Salvo que las partes acuerden lo contrario", words: ["Salvo", "que", "las", "partes", "acuerden", "lo", "contrario", "acuerdan"] },
        { type: "syntax", turkish: "Banka krediyi iptal etmesi durumunda (en el supuesto de que)...", spanish: "En el supuesto de que el banco cancele el crédito", words: ["En", "el", "supuesto", "de", "que", "el", "banco", "cancele", "el", "crédito"] },
        { type: "syntax", turkish: "Evi yazılı izin (permiso por escrito) olmadıkça (a no ser que) değiştiremezsiniz.", spanish: "No pueden cambiar la casa a no ser que tengan permiso por escrito", words: ["No", "pueden", "cambiar", "la", "casa", "a", "no", "ser", "que", "tengan", "permiso", "por", "escrito"] },
        { type: "syntax", turkish: "Daha ucuz bir şey bulmamız hariç (salvo que) onu kiralayacağız.", spanish: "Lo alquilaremos salvo que encontremos algo más barato", words: ["Lo", "alquilaremos", "salvo", "que", "encontremos", "algo", "más", "barato"] },
        { type: "syntax", turkish: "Denetimi (la auditoría) geçmesi şartıyla (a reserva de que) sözleşmeyi imzalıyoruz.", spanish: "Firmamos el contrato a reserva de que pase la auditoría", words: ["Firmamos", "el", "contrato", "a", "reserva", "de", "que", "pase", "la", "auditoría"] },
        { type: "syntax", turkish: "Zorunlu bir sebep (causa de fuerza mayor) olması durumunda...", spanish: "En el supuesto de que exista una causa de fuerza mayor", words: ["En", "el", "supuesto", "de", "que", "exista", "una", "causa", "de", "fuerza", "mayor"] },
        { type: "syntax", turkish: "Ceza (penalización) ödenmedikçe (a no ser que)...", spanish: "A no ser que se pague una penalización", words: ["A", "no", "ser", "que", "se", "pague", "una", "penalización"] },
        { type: "syntax", turkish: "Anlaşmaya (al acuerdo) uymamaları (incumplir) durumunda...", spanish: "En el supuesto de que incumplan el acuerdo", words: ["En", "el", "supuesto", "de", "que", "incumplan", "el", "acuerdo"] }
      ]
    },
    {
      id: "c1_u15_n3",
      type: "theory",
      title: "Teoría II: El Relicario de la Ley (Futuro de Subjuntivo)",
      content: {
        concept: "En la calle, los hispanohablantes usan 3 tiempos del subjuntivo (Presente, Imperfecto y Pluscuamperfecto). Pero existe un **cuarto tiempo** que está casi 'extinto' en el habla diaria, aunque es **el rey absoluto del lenguaje legal e institucional**.\n\n### El Futuro de Subjuntivo (-RE)\nSe forma igual que el Imperfecto de Subjuntivo, pero cambiando la 'a' por una 'e' (cantara ➔ cantare / hiciera ➔ hiciere).\n\n• **¿Dónde lo verás?** En contratos de alquiler, cláusulas de bancos, la Constitución, leyes y biblias.\n• *Ejemplo legal:* 'Quien **INFRINGIERE** esta norma, será castigado'. (Bu kuralı her kim çiğnerse, cezalandırılacaktır).\n• *Ejemplo de contrato:* 'Si **HUBIERE** daños en la propiedad, el inquilino deberá pagar'. (Mülkte hasar olması durumunda...).\n\n### Supervivencia en Refranes:\nAunque ya no se habla, sobrevive en dos frases hechas muy famosas:\n• **Adonde fueres, haz lo que vieres.** (Nereye gidersen, ne görürsen onu yap / Roma'da Romalı gibi davran).\n• **Sea como fuere.** (Her ne şekilde olursa olsun).",
        examples: [
          { es: "La empresa podrá rescindir el contrato si el empleado cometiere una falta grave.", tr: "Çalışanın ağır bir kusur işlemesi durumunda şirket sözleşmeyi feshedebilecektir." },
          { es: "Cualquier disputa que surgiere será resuelta en los tribunales de Madrid.", tr: "Ortaya çıkabilecek herhangi bir anlaşmazlık Madrid mahkemelerinde çözülecektir." }
        ]
      }
    },
    {
      id: "b1_u15_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Lectura de Contratos)",
      exercises: [
        { type: "speaking", spanish: "Quien incumpliere el contrato pagará una multa", turkish: "Sözleşmeyi her kim ihlal ederse para cezası ödeyecektir." },
        { type: "speaking", spanish: "Si hubiere daños el seguro se hará cargo", turkish: "Hasar olması durumunda sigorta karşılayacaktır." },
        { type: "speaking", spanish: "Cualquier gasto que surgiere será cubierto por la empresa", turkish: "Ortaya çıkacak herhangi bir masraf şirket tarafından karşılanacaktır." },
        { type: "speaking", spanish: "Adonde fueres haz lo que vieres", turkish: "Nereye gidersen oranın gördüğünü yap." },
        { type: "speaking", spanish: "Sea como fuere no aceptaremos esas condiciones", turkish: "Ne şekilde olursa olsun, bu şartları kabul etmeyeceğiz." },
        { type: "speaking", spanish: "Quien falsificare este documento irá a prisión", turkish: "Bu belgeyi her kim tahrif ederse hapse girecektir." },
        { type: "speaking", spanish: "Si el inquilino no pagare será desahuciado", turkish: "Eğer kiracı ödemezse tahliye edilecektir." },
        { type: "speaking", spanish: "La ley castigará a quien robare", turkish: "Yasa, hırsızlık yapanı cezalandıracaktır." },
        { type: "speaking", spanish: "En el supuesto de que existiere mala fe", turkish: "Kötü niyetin bulunması durumunda (varsayımıyla)." },
        { type: "speaking", spanish: "Todo empleado que divulgare información será despedido", turkish: "Bilgiyi ifşa eden tüm çalışanlar işten çıkarılacaktır." }
      ]
    },
    {
      id: "c1_u15_n5",
      type: "theory",
      title: "El Reto Turco: La Orden en el Futuro Simple",
      content: {
        concept: "Aquí desarmaremos una confusión muy peligrosa si vas a vivir en un país hispanohablante.\n\n🇹🇷 **En Turco:** Para imponer una obligación en un contrato, usas sufijos de necesidad como *-meli/-malı* (Zorundadır / Gereklidir) o formas imperativas pasivas.\n• *Kiracı her ayın 5'inde ödeme yapmalıdır.*\n\n🇪🇸 **En Español:** En el lenguaje cotidiano, diríamos 'El inquilino TIENE QUE pagar' o 'DEBE pagar'. Sin embargo, en el **lenguaje jurídico y en los contratos**, las obligaciones se imponen usando el **Futuro Simple de Indicativo**.\n\nEl Futuro legal no es una predicción, es un mandato absoluto e innegociable.\n• ✅ *El inquilino **PAGARÁ** la renta los primeros cinco días del mes.*\n• ✅ *La empresa **PROPORCIONARÁ** el equipo necesario.*\n\nCuando leas un contrato y veas un futuro, no pienses 'hará esto tal vez', piensa 'ESTÁ OBLIGADO A HACERLO'.",
        examples: [
          { es: "El arrendatario depositará una fianza de dos meses.", tr: "Kiracı iki aylık bir depozito yatıracaktır (yatırmak zorundadır)." },
          { es: "Ninguna de las partes compartirá información confidencial.", tr: "Tarafların hiçbiri gizli bilgileri paylaşmayacaktır (paylaşması yasaktır)." }
        ]
      }
    },
    {
      id: "c1_u15_n6",
      type: "reading",
      title: "Lectura Crítica: Contrato de Arrendamiento Urbano",
      content: {
        text: "CLÁUSULAS DEL ACUERDO DE ARRENDAMIENTO\n\nPRIMERA: El ARRENDADOR cede en alquiler el inmueble al ARRENDATARIO por un periodo de un año. El contrato se prorrogará automáticamente a no ser que una de las partes avise con treinta días de antelación.\n\nSEGUNDA: El ARRENDATARIO abonará la cantidad de 1.000 euros mensuales. En el supuesto de que el pago se retrasare más de cinco días, se aplicará una penalización del 5%.\n\nTERCERA: El ARRENDATARIO entregará una fianza equivalente a dos mensualidades. Dicha fianza será devuelta al finalizar el contrato, a reserva de que no hubiere desperfectos en la vivienda o impagos pendientes.\n\nCUARTA: Si el ARRENDATARIO rescindiere el contrato antes de los primeros seis meses, deberá pagar una indemnización. Queda terminantemente prohibido subarrendar las habitaciones.",
        translation: "KENTSEL KİRALAMA SÖZLEŞMESİ MADDELERİ\n\nBİRİNCİ: KİRALAYAN, gayrimenkulü bir yıllık süre için KİRACI'ya kiraya verir. Taraflardan biri otuz gün önceden haber vermedikçe (a no ser que) sözleşme otomatik olarak uzatılacaktır (se prorrogará).\n\nİKİNCİ: KİRACI aylık 1.000 euro tutarında ödeme yapacaktır (abonará). Ödemenin beş günden fazla gecikmesi durumunda (en el supuesto de que se retrasare), %5 oranında cezai işlem uygulanacaktır.\n\nÜÇÜNCÜ: KİRACI iki aylık kiraya eşdeğer bir depozito (fianza) teslim edecektir. Söz konusu depozito, konutta hasar (desperfectos) veya ödenmemiş borç bulunmaması şartıyla (a reserva de que no hubiere), sözleşme bitiminde iade edilecektir.\n\nDÖRDÜNCÜ: KİRACI ilk altı aydan önce sözleşmeyi feshederse (rescindiere), bir tazminat (indemnización) ödemek zorunda kalacaktır. Odaların alt kiraya verilmesi (subarrendar) kesinlikle yasaktır."
      }
    },
    {
      id: "c1_u15_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (Trámites y Leyes)",
      exercises: [
        { type: "syntax", turkish: "Sözleşme otomatik olarak uzatılacaktır (prorrogar).", spanish: "El contrato se prorrogará automáticamente", words: ["El", "contrato", "se", "prorrogará", "automáticamente"] },
        { type: "syntax", turkish: "Kiralayan (Arrendador) evi kiraya veriyor.", spanish: "El arrendador cede en alquiler la casa", words: ["El", "arrendador", "cede", "en", "alquiler", "la", "casa"] },
        { type: "syntax", turkish: "Kiracı (Arrendatario) bir depozito (fianza) teslim edecektir.", spanish: "El arrendatario entregará una fianza", words: ["El", "arrendatario", "entregará", "una", "fianza", "entregaría"] },
        { type: "syntax", turkish: "Kiracı sözleşmeyi feshederse (rescindir - futuro subj.)...", spanish: "Si el arrendatario rescindiere el contrato", words: ["Si", "el", "arrendatario", "rescindiere", "el", "contrato", "rescinde"] },
        { type: "syntax", turkish: "Hasar (desperfectos) bulunmaması şartıyla (a reserva de que)...", spanish: "A reserva de que no haya desperfectos", words: ["A", "reserva", "de", "que", "no", "haya", "desperfectos"] },
        { type: "syntax", turkish: "Herhangi bir anlaşmazlık (disputa) ortaya çıkması durumunda (en el supuesto)...", spanish: "En el supuesto de que surja una disputa", words: ["En", "el", "supuesto", "de", "que", "surja", "una", "disputa"] },
        { type: "syntax", turkish: "Bu kuralı ihlal eden kişi (quien infringiere) cezalandırılacaktır.", spanish: "Quien infringiere esta norma será castigado", words: ["Quien", "infringiere", "esta", "norma", "será", "castigado"] },
        { type: "syntax", turkish: "Şirket bir tazminat (indemnización) ödeyecektir.", spanish: "La empresa pagará una indemnización", words: ["La", "empresa", "pagará", "una", "indemnización", "debe"] },
        { type: "syntax", turkish: "Başka bir şey (lo contrario) üzerinde anlaşmadıkları sürece (salvo que)...", spanish: "Salvo que acuerden lo contrario", words: ["Salvo", "que", "acuerden", "lo", "contrario"] },
        { type: "syntax", turkish: "Ödenmemiş borçların (impagos) olması durumunda (en el supuesto)...", spanish: "En el supuesto de que haya impagos pendientes", words: ["En", "el", "supuesto", "de", "que", "haya", "impagos", "pendientes"] }
      ]
    },
    {
      id: "c1_u15_n8",
      type: "theory",
      title: "Teoría III: Eufemismos y Diplomacia Hostil",
      content: {
        concept: "En el mundo corporativo hispano, decir 'No' directamente se considera una falta de tacto (y puede destruir una negociación). En el nivel C1, utilizamos una arquitectura de eufemismos para rechazar, presionar o exigir.\n\n### 1. El Rechazo Elegante:\n• ❌ Directo: No podemos hacer esto.\n• ✅ **C1:** *Lamentablemente, esta opción no nos resulta factible en estos momentos.*\n\n### 2. La Obligación Enmascarada:\n• ❌ Directo: Tienen que cambiar el precio.\n• ✅ **C1:** *Nos vemos abocados a solicitar una revisión de las tarifas.*\n• ✅ **C1:** *Nos vemos en la obligación de cancelar el pedido.*\n\n### 3. La Presión Diplomática:\n• ❌ Directo: Responda rápido.\n• ✅ **C1:** *Agradeceríamos enormemente que nos dieran una pronta respuesta para agilizar los trámites.*",
        examples: [
          { es: "Nos vemos abocados a rechazar su candidatura.", tr: "Adaylığınızı reddetmek durumunda kalıyoruz (mecbur bırakılıyoruz)." },
          { es: "Lamentablemente, la propuesta no nos resulta factible.", tr: "Maalesef, teklif bizim için uygulanabilir/mümkün görünmüyor." },
          { es: "Agradeceríamos enormemente su colaboración en este asunto.", tr: "Bu konuda iş birliğinizden büyük memnuniyet duyarız." }
        ]
      }
    },
    {
      id: "c1_u15_n9",
      type: "theory",
      title: "Sintaxis Visual: El Correo Ejecutivo",
      content: {
        concept: "Analizaremos cómo se construye una frase de rechazo elegante que utiliza un verbo pronominal formal, una subordinada y una condición velada.",
        examples: [{ es: "Nos vemos en la obligación de rescindir el acuerdo, salvo que ustedes presenten un nuevo aval antes del viernes.", tr: "Cuma gününden önce yeni bir kefil (garanti) sunmadığınız takdirde, anlaşmayı feshetmek zorunda kalıyoruz." }],
        analysis: [
          { word: "Nos vemos en la obligación", type: "verb", literal: "Mecburiyette görüyoruz kendimizi", explanation: "Eufemismo ejecutivo para 'Debemos / Tenemos que'. Desplaza la culpa hacia las circunstancias.", examples: [] },
          { word: "de rescindir", type: "verb", literal: "feshetmek", explanation: "Verbo técnico para cancelar un contrato formal.", examples: [] },
          { word: "el acuerdo,", type: "noun", literal: "anlaşmayı", explanation: "Objeto de la rescisión.", examples: [] },
          { word: "salvo que", type: "connector", literal: "-madıkça / hariç", explanation: "Conector restrictivo que abre una última oportunidad (exige subjuntivo).", examples: [] },
          { word: "ustedes", type: "pronoun", literal: "sizler (resmi)", explanation: "Sujeto receptor de la presión.", examples: [] },
          { word: "presenten", type: "verb", literal: "sunmanız", explanation: "Verbo PRESENTAR en Presente de Subjuntivo.", examples: [] },
          { word: "un nuevo aval", type: "noun", literal: "yeni bir kefil / teminat", explanation: "Garantía económica que exige el banco o la empresa.", examples: [] },
          { word: "antes del viernes.", type: "adverb", literal: "cumadan önce", explanation: "Fecha límite (Ultimátum diplomático).", examples: [] }
        ]
      }
    },
    {
      id: "c1_u15_n10",
      type: "theory",
      title: "Caja de Herramientas: Finanzas y Contratos",
      content: {
        concept: "Este es el vocabulario del dinero y los acuerdos legales. Memorizar estas palabras te ahorrará muchos dolores de cabeza en un país hispanohablante.\n\n### Documentos y Personas:\n• **La cláusula** (Sözleşme maddesi)\n• **El arrendador / El arrendatario** (Ev sahibi / Kiracı)\n• **El aval / El avalista** (Kefalet / Kefil) ➔ *Para alquilar, piden el aval de los padres.*\n• **La indemnización** (Tazminat)\n• **La fianza** (Depozito / Güvence bedeli)\n\n### Acciones Legales y Financieras:\n• **Rescindir un contrato** (Sözleşmeyi feshetmek)\n• **Prorrogar / La prórroga** (Uzatmak / Süre uzatımı)\n• **El tipo de interés** (Faiz oranı) ➔ *Una hipoteca con tipo de interés fijo.*\n• **Abonar** (Ödemek - sinónimo formal de 'pagar')\n• **Resultar factible** (Uygulanabilir olmak / Mümkün olmak)",
        examples: [
          { es: "El banco exige un avalista para conceder la hipoteca.", tr: "Banka ipotek/kredi vermek için bir kefil talep ediyor." },
          { es: "Decidimos prorrogar el contrato de alquiler un año más.", tr: "Kira sözleşmesini bir yıl daha uzatmaya karar verdik." },
          { es: "La aseguradora pagó la indemnización correspondiente.", tr: "Sigorta şirketi ilgili tazminatı ödedi." }
        ]
      }
    },
    {
      id: "c1_u15_n11",
      type: "theory",
      title: "Taller de Producción: La Contraoferta",
      content: {
        concept: "Ha llegado el momento de negociar como una ejecutiva C1.\n\n**Instrucciones:**\nEstás negociando el alquiler de un local comercial para tu nuevo negocio. El propietario te ha enviado el contrato, pero pide una fianza de 6 meses y prohíbe hacer reformas.\nEscribe un correo formal (10-12 líneas) rechazando amablemente esas condiciones y haciendo una contraoferta.\n\n1. Usa eufemismos ('Nos vemos en la obligación de...', 'Nos resulta inviable...').\n2. Usa al menos dos cláusulas restrictivas ('Salvo que', 'En el supuesto de que', 'A reserva de que').\n3. Propón un trato usando terminología técnica (abonar, fianza, rescindir, prorrogar).\n4. Despídete cordialmente.\n\n**Inspiración:** 'Estimado señor: Hemos revisado el contrato. Lamentablemente, abonar seis meses de fianza no nos resulta factible. Estaríamos dispuestos a firmar, a reserva de que la fianza se reduzca a dos meses. Asimismo...'",
        examples: []
      }
    },
    {
      id: "c1_u15_n12",
      type: "exam",
      title: "Examen de Unidad: Cerrando el Trato",
      content: {
        concept: "La prueba definitiva de español legal y de negocios. Demuestra que sabes manejar el Futuro de Subjuntivo, los eufemismos y la jerga contractual.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué significa 'En el supuesto de que...'?", options: ["... durumunda / varsayalım ki", "Oysa ki", "Elbette"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: 'Aceptamos, a reserva de que ustedes ______ (bajar) el precio'.", options: ["bajan", "bajen"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué tiempo verbal se usa en las leyes y contratos antiguos (como 'Si hubiere')?", options: ["Condicional", "Futuro de Subjuntivo", "Presente"], correct: 1 },
          { type: "multiple_choice", question: "En un contrato actual, la obligación 'El cliente pagará en 5 días' significa:", options: ["El cliente está obligado a pagar.", "Es probable que el cliente pague."], correct: 0 },
          { type: "multiple_choice", question: "¿Quién es el 'Arrendador'?", options: ["El que paga el alquiler (Kiracı).", "El propietario que cede la casa (Ev sahibi/Kiralayan)."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es 'Una fianza'?", options: ["Kredi kartı", "Depozito / Güvence bedeli", "Kefil"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Rescindir un contrato'?", options: ["Sözleşmeyi feshetmek / iptal etmek", "Sözleşmeyi yenilemek"], correct: 0 },
          { type: "multiple_choice", question: "En lenguaje corporativo, 'No nos resulta factible' significa:", options: ["Es posible hacerlo.", "No podemos / No es viable hacerlo."], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Faiz oranı'?", options: ["El tipo de interés", "La indemnización", "El aval"], correct: 0 },
          { type: "multiple_choice", question: "Compraré la casa ______ que el banco me dé la hipoteca (...-madıkça / -mezse).", options: ["en el supuesto de", "a no ser"], correct: 1 },
          { type: "multiple_choice", question: "Eufemismo C1: 'Nos vemos abocados a...' significa:", options: ["Nos gusta mucho...", "Nos vemos en la obligación/necesidad dolorosa de..."], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es un 'Aval'?", options: ["Un banco", "Bir garanti / Kefalet (Şahıs veya banka)", "Bir sözleşme"], correct: 1 },
          { type: "multiple_choice", question: "El refrán dice: 'Adonde ______, haz lo que ______'.", options: ["vayas / veas", "fueres / vieres", "fuiste / viste"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Prorrogar'?", options: ["İptal etmek", "Uzatmak (Süreyi)", "Ödemek"], correct: 1 },
          { type: "multiple_choice", question: "El inquilino ______ (abonar - futuro mandato) el alquiler a principio de mes.", options: ["abonará", "abona"], correct: 0 },
          
          { type: "syntax", turkish: "Gecikme olması durumunda sözleşmeyi feshedeceğiz.", spanish: "En el supuesto de que haya retraso rescindiremos el contrato", words: ["En", "el", "supuesto", "de", "que", "haya", "retraso", "rescindiremos", "el", "contrato"] },
          { type: "syntax", turkish: "Maaşı artırmaları şartıyla (a reserva de que) devam edeceğim.", spanish: "Continuaré a reserva de que aumenten el sueldo", words: ["Continuaré", "a", "reserva", "de", "que", "aumenten", "el", "sueldo"] },
          { type: "syntax", turkish: "Taraflar aksini kabul etmedikçe sözleşme uzatılacaktır.", spanish: "El contrato se prorrogará salvo que las partes acuerden lo contrario", words: ["El", "contrato", "se", "prorrogará", "salvo", "que", "las", "partes", "acuerden", "lo", "contrario"] },
          { type: "syntax", turkish: "Bu kuralı her kim çiğnerse (Futuro Subj.) bir tazminat ödeyecektir.", spanish: "Quien infringiere esta norma pagará una indemnización", words: ["Quien", "infringiere", "esta", "norma", "pagará", "una", "indemnización"] },
          { type: "syntax", turkish: "Maalesef bu teklif bizim için uygulanabilir görünmüyor.", spanish: "Lamentablemente esta propuesta no nos resulta factible", words: ["Lamentablemente", "esta", "propuesta", "no", "nos", "resulta", "factible"] },
          { type: "syntax", turkish: "Kiracı iki aylık depozito (fianza) ödeyecektir (abonará).", spanish: "El arrendatario abonará dos meses de fianza", words: ["El", "arrendatario", "abonará", "dos", "meses", "de", "fianza"] },
          { type: "syntax", turkish: "Banka bir kefil (aval) talep etmektedir.", spanish: "El banco exige un aval", words: ["El", "banco", "exige", "un", "aval", "fianza"] },
          { type: "syntax", turkish: "Toplantıyı iptal etmek zorunda kalıyoruz (Nos vemos abocados a).", spanish: "Nos vemos abocados a cancelar la reunión", words: ["Nos", "vemos", "abocados", "a", "cancelar", "la", "reunión", "obligación"] },
          { type: "syntax", turkish: "Faiz oranı (el tipo de interés) çok yüksek (elevado).", spanish: "El tipo de interés es muy elevado", words: ["El", "tipo", "de", "interés", "es", "muy", "elevado"] },
          { type: "syntax", turkish: "Her ne şekilde olursa olsun (Sea como fuere) sözleşmeyi imzalayacağız.", spanish: "Sea como fuere firmaremos el contrato", words: ["Sea", "como", "fuere", "firmaremos", "el", "contrato", "sea"] }
        ]
      }
    }
  ]
};
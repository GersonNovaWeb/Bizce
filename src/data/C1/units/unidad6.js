/**
 * UNIDAD 6 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: Nexos Condicionales Restrictivos (Siempre y cuando, a no ser que, en caso de que).
 * Tema: Negociaciones, contratos, reglas estrictas y advertencias.
 */

export const unidad6 = {
  id: "c1_u6",
  title: "Unidad 6: Condiciones Extremas",
  description: "Aprende a negociar como un profesional. Domina los conectores que imponen reglas y descubre por qué siempre exigen Subjuntivo.",
  nodes: [
    {
      id: "c1_u6_n1",
      type: "theory",
      title: "Teoría I: Las Condiciones Estrictas",
      content: {
        concept: "En niveles anteriores aprendimos a usar 'SI' (Eğer). Pero en el nivel C1, cuando queremos imponer una regla innegociable en un contrato, un negocio o una relación, usamos **Nexos Restrictivos**.\n\nTodos estos nexos significan 'Şartıyla' o 'Müddetçe' y **EXIGEN SIEMPRE SUBJUNTIVO** cuando hablamos del futuro o de reglas generales.\n\n### 1. SIEMPRE Y CUANDO (Sürece / Şartıyla)\nEs el más utilizado. Impone un requisito absoluto.\n• *Te prestaré el coche **siempre y cuando** me lo DEVUELVAS limpio.*\n\n### 2. CON TAL DE QUE (Yeter ki / Şartıyla)\nTiene un matiz de sacrificio. Hago esto, a cambio de que tú hagas aquello.\n• *Trabajaré el domingo **con tal de que** me DES el lunes libre.*\n\n### 3. A CONDICIÓN DE QUE (Şartıyla)\nEs la versión más formal, ideal para negocios o documentos legales.\n• *Firmaré el contrato **a condición de que** MEJOREN el salario.*",
        examples: [
          { es: "Iré contigo con tal de que tú pagues la cena.", tr: "Akşam yemeğini senin ödemen şartıyla (yeter ki sen öde) seninle geleceğim." },
          { es: "Puedes salir siempre y cuando termines tus deberes.", tr: "Ödevlerini bitirdiğin sürece (şartıyla) dışarı çıkabilirsin." },
          { es: "Aceptamos la oferta a condición de que cambien el plazo.", tr: "Süreyi değiştirmeleri şartıyla teklifi kabul ediyoruz." }
        ]
      }
    },
    {
      id: "c1_u6_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Reglas Claras)",
      exercises: [
        { type: "syntax", turkish: "Erken geldiğin sürece (siempre y cuando) çıkabilirsin.", spanish: "Puedes salir siempre y cuando llegues temprano", words: ["Puedes", "salir", "siempre", "y", "cuando", "llegues", "temprano", "llegas"] },
        { type: "syntax", turkish: "Bana yardım etmen şartıyla (con tal de que) bunu yapacağım.", spanish: "Haré esto con tal de que me ayudes", words: ["Haré", "esto", "con", "tal", "de", "que", "me", "ayudes", "ayudas"] },
        { type: "syntax", turkish: "Fiyatı düşürmeleri (bajar) şartıyla (a condición de que) sözleşmeyi imzalayacağız.", spanish: "Firmaremos el contrato a condición de que bajen el precio", words: ["Firmaremos", "el", "contrato", "a", "condición", "de", "que", "bajen", "el", "precio"] },
        { type: "syntax", turkish: "Yeter ki (con tal de que) o (erkek) mutlu olsun, her şeyi veririm.", spanish: "Doy todo con tal de que él sea feliz", words: ["Doy", "todo", "con", "tal", "de", "que", "él", "sea", "feliz", "es"] },
        { type: "syntax", turkish: "Sessiz olduğunuz (ustedes) sürece (siempre y cuando) burada kalabilirsiniz.", spanish: "Pueden quedarse aquí siempre y cuando hagan silencio", words: ["Pueden", "quedarse", "aquí", "siempre", "y", "cuando", "hagan", "silencio"] },
        { type: "syntax", turkish: "Bana doğruyu söylemen şartıyla (con tal de que) seni affedeceğim (perdonar).", spanish: "Te perdonaré con tal de que me digas la verdad", words: ["Te", "perdonaré", "con", "tal", "de", "que", "me", "digas", "la", "verdad"] },
        { type: "syntax", turkish: "Yeter ki (con tal de que) işe yarasın (funcionar), ne istersen yaparım.", spanish: "Hago lo que quieras con tal de que funcione", words: ["Hago", "lo", "que", "quieras", "con", "tal", "de", "que", "funcione"] },
        { type: "syntax", turkish: "Saygı duyulduğu (respetar) sürece (siempre y cuando) kuralları kabul ediyorum.", spanish: "Acepto las reglas siempre y cuando se respete", words: ["Acepto", "las", "reglas", "siempre", "y", "cuando", "se", "respete", "respeta"] },
        { type: "syntax", turkish: "Bana haber vermeleri (avisar) şartıyla (a condición de que) kabul (de acuerdo).", spanish: "De acuerdo a condición de que me avisen", words: ["De", "acuerdo", "a", "condición", "de", "que", "me", "avisen", "avisan"] },
        { type: "syntax", turkish: "Yeter ki (con tal de que) benimle gel, korkmuyorum.", spanish: "No tengo miedo con tal de que vengas conmigo", words: ["No", "tengo", "miedo", "con", "tal", "de", "que", "vengas", "conmigo"] }
      ]
    },
    {
      id: "c1_u6_n3",
      type: "theory",
      title: "Teoría II: La Excepción (A no ser que)",
      content: {
        concept: "Ahora veremos cómo crear una advertencia o una excepción. Estas estructuras significan 'A menos que...' (İngilizce'deki *Unless*). Muestran un escenario que rompería nuestros planes.\n\nTodos **EXIGEN SUBJUNTIVO**.\n\n### 1. A NO SER QUE (...-madıkça / ... hariç)\nEs la más utilizada en el día a día en España.\n• *Saldremos a pasear, **a no ser que** LLUEVA.* (Yağmur yağmadığı sürece / Yağmur yağması dışında yürüyüşe çıkacağız).\n\n### 2. SALVO QUE / EXCEPTO QUE (Hariç / ...-madığı sürece)\nSon más formales, pero significan exactamente lo mismo.\n• *Aceptaremos sus condiciones, **salvo que** PIDAN más dinero.* (Daha fazla para istemedikleri sürece/istemeleri haricinde şartlarını kabul edeceğiz).",
        examples: [
          { es: "Mañana iré a la oficina, a no ser que esté enfermo.", tr: "Hasta olmam dışında (hasta olmadıkça) yarın ofise gideceğim." },
          { es: "Todos están invitados, excepto que causen problemas.", tr: "Problem çıkarmadıkları sürece herkes davetlidir." },
          { es: "No firmo nada salvo que mi abogado lo revise.", tr: "Avukatım onu kontrol etmedikçe hiçbir şey imzalamam." }
        ]
      }
    },
    {
      id: "c1_u6_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Excepciones)",
      exercises: [
        { type: "speaking", spanish: "Iremos a la playa a no ser que llueva", turkish: "Yağmur yağmadıkça (yağması dışında) sahile gideceğiz." },
        { type: "speaking", spanish: "No te llamaré salvo que sea urgente", turkish: "Acil olmadığı sürece seni aramayacağım." },
        { type: "speaking", spanish: "Todo está bien excepto que haya cambios", turkish: "Değişiklikler olmaması dışında her şey yolunda." },
        { type: "speaking", spanish: "Mañana trabajaré a no ser que me den el día libre", turkish: "Bana izin günü vermedikleri sürece yarın çalışacağım." },
        { type: "speaking", spanish: "Firmaremos el acuerdo salvo que cambien el precio", turkish: "Fiyatı değiştirmedikleri sürece anlaşmayı imzalayacağız." },
        { type: "speaking", spanish: "Estaré allí a las cinco a no ser que haya tráfico", turkish: "Trafik olmaması dışında saat beşte orada olacağım." },
        { type: "speaking", spanish: "No me despertéis salvo que ocurra una emergencia", turkish: "Bir acil durum meydana gelmedikçe beni uyandırmayın." },
        { type: "speaking", spanish: "Iré sola a no ser que quieras venir", turkish: "Sen gelmek istemedikçe yalnız gideceğim." },
        { type: "speaking", spanish: "Todo está incluido excepto que pidas bebidas", turkish: "İçecek istemen haricinde her şey dahildir." },
        { type: "speaking", spanish: "Lo compraré salvo que sea demasiado caro", turkish: "Çok pahalı olmadığı sürece onu satın alacağım." }
      ]
    },
    {
      id: "c1_u6_n5",
      type: "theory",
      title: "El Reto Turco: La trampa de 'En caso de que' vs 'Por si'",
      content: {
        concept: "Este es un examen clásico de C1. Ambas expresiones se usan para tomar precauciones (Ne olur ne olmaz diye / Durumunda), pero sus reglas matemáticas son opuestas.\n\n### 1. EN CASO DE QUE + SUBJUNTIVO 🚨\nEs formal y obligatoriamente requiere Subjuntivo.\n• *Lleva el paraguas **en caso de que LLUEVA**.* (Yağmur yağması durumunda şemsiyeyi al).\n\n### 2. POR SI / POR SI ACASO + INDICATIVO 🟢\nEs la versión coloquial de la calle. ¡Ojo! Es una de las poquísimas expresiones de duda que PROHÍBE el subjuntivo.\n• *Lleva el paraguas **por si LLUEVE**.* (Yağmur yağar diye şemsiyeyi al).\n\n🇹🇷 **Tu mente bilingüe:** Si hablas con el director del banco, usa *En caso de que* (Subj). Si hablas con tu amigo, usa *Por si* (Ind). ¡No los mezcles!",
        examples: [
          { es: "Te doy mi número por si necesitas (Ind) ayuda.", tr: "Yardıma ihtiyacın olursa diye (her ihtimale karşı) numaramı veriyorum." },
          { es: "Le doy mi tarjeta en caso de que necesite (Subj) algo.", tr: "Bir şeye ihtiyacınız olması durumunda size kartımı veriyorum." }
        ]
      }
    },
    {
      id: "c1_u6_n6",
      type: "reading",
      title: "Lectura Crítica: La Negociación de Alquiler",
      content: {
        text: "Marta quiere alquilar un piso en Madrid, pero el propietario (Don Luis) es muy estricto con las condiciones del contrato.\n\n— Don Luis: Puede usted alquilar el piso siempre y cuando pague tres meses de fianza por adelantado. Además, están prohibidas las mascotas, a no ser que sean animales muy pequeños como pájaros.\n— Marta: Entiendo. Estoy dispuesta a pagar la fianza, con tal de que usted se comprometa a reparar la lavadora, porque hace un ruido terrible.\n— Don Luis: De acuerdo, la repararé en caso de que el técnico confirme que está rota. Firmaremos el martes, salvo que usted cambie de opinión.\n— Marta: Por mí, perfecto. Llevaré una copia extra del contrato por si hay algún error en la impresión.",
        translation: "Marta Madrid'de bir daire kiralamak istiyor ama ev sahibi (Don Luis) sözleşme şartları konusunda çok katı.\n\n— Don Luis: Üç aylık depozitoyu peşin ödemeniz şartıyla (siempre y cuando pague) daireyi kiralayabilirsiniz. Ayrıca, kuş gibi çok küçük hayvanlar olmadıkça (a no ser que sean) evcil hayvanlar yasaktır.\n— Marta: Anlıyorum. Korkunç bir ses çıkardığı için çamaşır makinesini tamir etmeyi taahhüt etmeniz şartıyla (con tal de que se comprometa) depozitoyu ödemeye hazırım.\n— Don Luis: Kabul, teknisyenin bozuk olduğunu onaylaması durumunda (en caso de que confirme) onu tamir edeceğim. Fikrinizi değiştirmediğiniz sürece (salvo que cambie) salı günü imzalayacağız.\n— Marta: Benim için mükemmel. Baskıda bir hata olur diye (por si hay) sözleşmenin fazladan bir kopyasını getireceğim."
      }
    },
    {
      id: "c1_u6_n7",
      type: "quiz",
      title: "Práctica III: Desafío Quirúrgico (Condiciones Extremas)",
      exercises: [
        { type: "syntax", turkish: "Yağmur yağması durumunda (En caso de que) maçı iptal edeceğiz.", spanish: "En caso de que llueva cancelaremos el partido", words: ["En", "caso", "de", "que", "llueva", "cancelaremos", "el", "partido", "llueve"] },
        { type: "syntax", turkish: "Geç kalırım diye (Por si) taksiye biniyorum (Coger).", spanish: "Cojo un taxi por si llego tarde", words: ["Cojo", "un", "taxi", "por", "si", "llego", "tarde", "llegue"] },
        { type: "syntax", turkish: "Fikrini değiştirmesi (onun) durumunda (En caso de que) beni ara.", spanish: "En caso de que él cambie de opinión llámame", words: ["En", "caso", "de", "que", "él", "cambie", "de", "opinión", "llámame", "cambia"] },
        { type: "syntax", turkish: "İhtiyacın olur diye (Por si) fazladan (extra) para getiriyorum.", spanish: "Traigo dinero extra por si necesitas", words: ["Traigo", "dinero", "extra", "por", "si", "necesitas", "necesites"] },
        { type: "syntax", turkish: "Üç ay peşin (por adelantado) ödemen şartıyla (Siempre y cuando) kabul ediyorum.", spanish: "Acepto siempre y cuando pagues tres meses por adelantado", words: ["Acepto", "siempre", "y", "cuando", "pagues", "tres", "meses", "por", "adelantado"] },
        { type: "speaking", spanish: "Lleva el paraguas por si llueve", turkish: "Yağmur yağar diye şemsiyeyi al (Indicativo)." },
        { type: "speaking", spanish: "Lleva el paraguas en caso de que llueva", turkish: "Yağmur yağması durumunda şemsiyeyi al (Subjuntivo)." },
        { type: "speaking", spanish: "Te ayudaré con tal de que me escuches", turkish: "Beni dinlemen şartıyla (yeter ki dinle) sana yardım edeceğim." },
        { type: "speaking", spanish: "Iremos andando a no ser que estés cansada", turkish: "Yorgun olmadıkça (olman dışında) yürüyerek gideceğiz." },
        { type: "speaking", spanish: "Firma aquí salvo que tengas dudas", turkish: "Şüphelerin olmaması haricinde burayı imzala." }
      ]
    },
    {
      id: "c1_u6_n8",
      type: "theory",
      title: "Teoría IV: Conectores Combinados",
      content: {
        concept: "En discusiones avanzadas, a menudo combinamos una condición con una valoración emocional o de necesidad. Para ello, necesitamos dominar conectores más sutiles.\n\n### 1. A CAMBIO DE QUE (Karşılığında)\nSimilar a 'Con tal de que', pero enfatiza la negociación directa.\n*Ej: Haré tu turno el sábado a cambio de que tú HAGAS el mío el martes.*\n\n### 2. SIN QUE (Maksızın / Meden)\nIndica que una acción ocurre, pero la otra (que normalmente ocurriría) no lo hace. ¡Siempre con Subjuntivo!\n*Ej: Ella salió de casa SIN QUE yo me DIERA cuenta.* (Ben farkına varmadan evden çıktı).\n*Ej: Lo haré SIN QUE nadie lo SEPA.* (Kimse bilmeden yapacağım).",
        examples: [
          { es: "Se fue de la fiesta sin que nadie lo viera.", tr: "Kimse onu görmeden (görmeksizin) partiden ayrıldı." },
          { es: "Te doy el coche a cambio de que lo llenes de gasolina.", tr: "Benzinle doldurman karşılığında sana arabayı veriyorum." }
        ]
      }
    },
    {
      id: "c1_u6_n9",
      type: "theory",
      title: "Sintaxis Visual: La Cláusula Legal",
      content: {
        concept: "Deconstruiremos una cláusula larga y restrictiva de un contrato, que utiliza un conector condicional estricto y un subjuntivo.",
        examples: [{ es: "La empresa renovará el contrato siempre y cuando el empleado cumpla con todos los objetivos establecidos.", tr: "Çalışanın belirlenen tüm hedefleri yerine getirmesi şartıyla şirket sözleşmeyi yenileyecektir." }],
        analysis: [
          { word: "La empresa renovará", type: "verb", literal: "Şirket yenileyecek", explanation: "La promesa futura en Indicativo.", examples: [] },
          { word: "el contrato", type: "noun", literal: "sözleşmeyi", explanation: "Objeto directo.", examples: [] },
          { word: "siempre y cuando", type: "connector", literal: "şartıyla / sürece", explanation: "El nexo restrictivo que dispara la condición obligatoria.", examples: [] },
          { word: "el empleado", type: "noun", literal: "çalışan", explanation: "Sujeto de la condición.", examples: [] },
          { word: "cumpla con", type: "verb", literal: "yerine getirmesi (subj)", explanation: "Verbo CUMPLIR en Presente de Subjuntivo. Es irreal porque aún no lo ha hecho.", examples: [] },
          { word: "todos los objetivos", type: "noun", literal: "tüm hedefleri", explanation: "Objeto de la obligación.", examples: [] },
          { word: "establecidos.", type: "adjective", literal: "belirlenen", explanation: "Participio que funciona como adjetivo para los objetivos.", examples: [] }
        ]
      }
    },
    {
      id: "c1_u6_n10",
      type: "theory",
      title: "Caja de Herramientas: Negociación y Contratos",
      content: {
        concept: "Para negociar condiciones extremas, debes dominar este vocabulario corporativo y legal.\n\n• **La cláusula** (Madde / Şart - sözleşmede)\n• **El requisito / Exigir** (Gereklilik / Talep etmek)\n• **Comprometerse a** (Taahhüt etmek)\n• **Ceder** (Taviz vermek / Boyun eğmek) ➔ *En una negociación, ambas partes deben ceder.*\n• **Innegociable** (Müzakere edilemez / Kesin)\n• **La garantía** (Garanti)\n• **El presupuesto** (Bütçe)\n• **Por adelantado** (Peşin) ➔ *Pagar por adelantado.*\n• **La fianza** (Depozito)",
        examples: [
          { es: "Esta cláusula es innegociable.", tr: "Bu madde müzakere edilemez (kesindir)." },
          { es: "Si ustedes ceden un poco, llegaremos a un acuerdo.", tr: "Eğer siz biraz taviz verirseniz, bir anlaşmaya varacağız." },
          { es: "Exigimos que nos den una garantía por escrito.", tr: "Bize yazılı bir garanti vermenizi talep ediyoruz." }
        ]
      }
    },
    {
      id: "c1_u6_n11",
      type: "theory",
      title: "Taller de Producción: Las Reglas de la Casa",
      content: {
        concept: "Es el momento de imponer tus condiciones.\n\n**Instrucciones:**\nImagina que vas a compartir tu piso con una nueva persona. Escribe un texto (mínimo 8-10 líneas) explicándole las reglas y condiciones de convivencia.\n\n1. Usa 'Siempre y cuando' para imponer una regla fundamental.\n2. Usa 'Con tal de que' para mostrar un intercambio de favores.\n3. Usa 'A no ser que' o 'Salvo que' para marcar una excepción.\n4. Usa 'Sin que' para hablar del ruido o las molestias.\n\n**Inspiración:** 'Bienvenido al piso. Puedes traer amigos siempre y cuando no hagan ruido por la noche. Yo limpiaré el baño con tal de que tú limpies la cocina. No pondré música alta a no ser que...'",
        examples: []
      }
    },
    {
      id: "c1_u6_n12",
      type: "exam",
      title: "Examen de Unidad: Condiciones Extremas",
      content: {
        concept: "Pon a prueba tu precisión legal. Demuestra que sabes manejar los nexos restrictivos y elegir el modo correcto (Indicativo o Subjuntivo).",
        exercises: [
          { type: "multiple_choice", question: "Elige la correcta: 'Saldremos de viaje siempre y cuando tú ______ (pagar) la gasolina'.", options: ["pagas", "pagues"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Con tal de que...'?", options: ["Yeter ki / ... şartıyla", "Buna rağmen", "Sonuç olarak"], correct: 0 },
          { type: "multiple_choice", question: "La regla de 'Por si' (Por si acaso): Lleva el abrigo por si ______ (hacer) frío.", options: ["hace", "haga"], correct: 0 },
          { type: "multiple_choice", question: "La regla de 'En caso de que': Lleva el abrigo en caso de que ______ (hacer) frío.", options: ["hace", "haga"], correct: 1 },
          { type: "multiple_choice", question: "Comeré pescado, a no ser que ______ (haber) carne.", options: ["hay", "haya"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué conector significa 'Hariç / ...-madıkça'?", options: ["Salvo que", "A cambio de que", "Sin que"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: 'Salió de la oficina sin que su jefe lo ______ (ver)'.", options: ["vio", "viera"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Ceder' en una negociación?", options: ["Taviz vermek / Anlaşmak için adım atmak", "Kızmak", "Sözleşmeyi iptal etmek"], correct: 0 },
          { type: "multiple_choice", question: "Te doy el coche ______ (karşılığında) lo limpies.", options: ["a cambio de que", "siempre y cuando", "a no ser que"], correct: 0 },
          { type: "multiple_choice", question: "Firmaremos el contrato ______ (a condición de que) suban el sueldo.", options: ["a condición de que", "por si", "en cambio"], correct: 0 },
          { type: "syntax", turkish: "Kirayı (el alquiler) ödediğin sürece burada kalabilirsin.", spanish: "Puedes quedarte aquí siempre y cuando pagues el alquiler", words: ["Puedes", "quedarte", "aquí", "siempre", "y", "cuando", "pagues", "el", "alquiler", "pagas"] },
          { type: "syntax", turkish: "Acil (urgente) olmadığı sürece (A no ser que) beni arama.", spanish: "No me llames a no ser que sea urgente", words: ["No", "me", "llames", "a", "no", "ser", "que", "sea", "urgente", "es"] },
          { type: "syntax", turkish: "Kimse fark etmeden (Sin que) ayrıldık (irnos).", spanish: "Nos fuimos sin que nadie se diera cuenta", words: ["Nos", "fuimos", "sin", "que", "nadie", "se", "diera", "cuenta", "dio"] },
          { type: "syntax", turkish: "Geç kalırsam diye (Por si) anahtarları alıyorum (Coger).", spanish: "Cojo las llaves por si llego tarde", words: ["Cojo", "las", "llaves", "por", "si", "llego", "tarde", "llegue"] },
          { type: "syntax", turkish: "Geç kalmam durumunda (En caso de que) anahtarları alıyorum.", spanish: "Cojo las llaves en caso de que llegue tarde", words: ["Cojo", "las", "llaves", "en", "caso", "de", "que", "llegue", "tarde", "llego"] },
          { type: "syntax", turkish: "Senin gelmen şartıyla (Con tal de que) her şeyi yaparım.", spanish: "Hago todo con tal de que tú vengas", words: ["Hago", "todo", "con", "tal", "de", "que", "tú", "vengas", "vienes"] },
          { type: "syntax", turkish: "Fikrini değiştirmesi haricinde (Salvo que) yarın uçuyoruz.", spanish: "Volamos mañana salvo que ella cambie de opinión", words: ["Volamos", "mañana", "salvo", "que", "ella", "cambie", "de", "opinión", "cambia"] },
          { type: "syntax", turkish: "Şartlar (las condiciones) kesin (innegociable).", spanish: "Las condiciones son innegociables", words: ["Las", "condiciones", "son", "innegociables"] },
          { type: "syntax", turkish: "Bana para vermen karşılığında (A cambio de que) bunu yapacağım.", spanish: "Haré esto a cambio de que me des dinero", words: ["Haré", "esto", "a", "cambio", "de", "que", "me", "des", "dinero", "das"] },
          { type: "syntax", turkish: "Depozitoyu (la fianza) peşin (por adelantado) ödeyeceksiniz.", spanish: "Pagarán la fianza por adelantado", words: ["Pagarán", "la", "fianza", "por", "adelantado"] }
        ]
      }
    }
  ]
};
/**
 * UNIDAD 11: EL CHISME II (ESTILO INDIRECTO EN PASADO) - NIVEL B1
 * Enfoque: Reportar mensajes pasados. Cambios de tiempos verbales (Concordancia).
 * Estructura: 12 Nodos Premium.
 */

export const unidad11 = {
  id: "b1_u11",
  title: "Unidad 11: El Chisme II (Estilo Indirecto en Pasado)",
  description: "Aprende a reportar lo que alguien dijo hace tiempo. Domina el cambio de los verbos cuando el chisme es del pasado.",
  nodes: [
    {
      id: "b1_u11_n1",
      type: "theory",
      title: "Teoría I: Reportar Hechos del Pasado (Indicativo)",
      content: {
        concept: "En la unidad anterior reportábamos en presente (Él dice que...). Ahora, aprenderemos qué pasa cuando el verbo principal está en PASADO (Él DIJO que...).\n\nCuando reportamos una información que alguien nos dio en el pasado, el verbo de la información debe 'dar un paso atrás' en el tiempo.\n\n### La Regla del Paso Atrás:\n• Si el mensaje original era **Presente**, al reportarlo cambia a **Imperfecto**.\n• Directo: Carlos dijo: 'Tengo hambre'.\n• Indirecto: Carlos dijo que **TENÍA** hambre.\n\n🇹🇷 LÓGICA TURCA: Equivale a decir **'...-diğini söyledi'**.\n*Ej: Carlos aç olduğunu söyledi.*",
        examples: [
          { es: "Marta dijo que estaba cansada.", tr: "Marta yorgun olduğunu söyledi." },
          { es: "Ellos dijeron que no sabían nada.", tr: "Hiçbir şey bilmediklerini söylediler." },
          { es: "El profesor dijo que el examen era fácil.", tr: "Öğretmen sınavın kolay olduğunu söyledi." }
        ]
      }
    },
    {
      id: "b1_u11_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Hechos Pasados)",
      exercises: [
        { type: "syntax", turkish: "Carlos evde olduğunu söyledi.", spanish: "Carlos dijo que estaba en casa", words: ["Carlos", "dijo", "que", "estaba", "en", "casa", "estuviera"] },
        { type: "syntax", turkish: "Annem beni sevdiğini söyledi.", spanish: "Mi madre dijo que me quería", words: ["Mi", "madre", "dijo", "que", "me", "quería", "quisiera"] },
        { type: "syntax", turkish: "Mutlu olduklarını söylediler.", spanish: "Dijeron que eran felices", words: ["Dijeron", "que", "eran", "felices", "fueron"] },
        { type: "syntax", turkish: "Vaktinin olmadığını söyledi (Marta).", spanish: "Marta dijo que no tenía tiempo", words: ["Marta", "dijo", "que", "no", "tenía", "tiempo", "tuviera"] },
        { type: "syntax", turkish: "Arabanın bozuk olduğunu söyledin.", spanish: "Dijiste que el coche estaba roto", words: ["Dijiste", "que", "el", "coche", "está", "estaba", "roto"] },
        { type: "syntax", turkish: "Onlar İspanyolca çalıştıklarını söylediler.", spanish: "Ellos dijeron que estudiaban español", words: ["Ellos", "dicen", "dijeron", "que", "estudiaban", "español"] },
        { type: "syntax", turkish: "Beni duyduğunu söyledi (Él).", spanish: "Él dijo que me escuchaba", words: ["Él", "dijo", "que", "me", "escuchaba", "escucha"] },
        { type: "syntax", turkish: "Zaten yediklerini söylediler.", spanish: "Dijeron que ya habían comido", words: ["Dijeron", "que", "ya", "habían", "comido", "comieron"] },
        { type: "syntax", turkish: "Çok yorgun olduğunu söyledin.", spanish: "Dijiste que estabas muy cansado", words: ["Dijiste", "que", "estabas", "muy", "cansado", "estás"] },
        { type: "syntax", turkish: "Her şeyin yolunda olduğunu söylediler.", spanish: "Dijeron que todo estaba bien", words: ["Dijeron", "que", "todo", "estaba", "bien", "estuviera"] }
      ]
    },
    {
      id: "b1_u11_n3",
      type: "theory",
      title: "Teoría II: Reportar Órdenes Pasadas (Subjuntivo Imperfecto)",
      content: {
        concept: "¡Este es el reto máximo del B1! Cuando alguien nos dio una ORDEN o nos pidió un FAVOR en el pasado, usamos el **Pretérito Imperfecto de Subjuntivo**.\n\n### El Gran Cambio:\n• Si el mensaje original era un **Imperativo** (¡Ven!), al reportarlo en pasado usamos la forma **-ARA / -IERA**.\n\n• Directo: Carlos me dijo: '**¡Ven** a mi casa!'.\n• Indirecto: Carlos me dijo que **VINIERA** a su casa.\n\n### Formas rápidas de este Subjuntivo:\n• Hablar ➔ Hablara\n• Comer ➔ Comiera\n• Vivir ➔ Viviera\n• Hacer ➔ Hiciera\n• Venir ➔ Viniera\n\n🇹🇷 LÓGICA TURCA: Equivale a decir **'...-memi söyledi/istedi'**.\n*Ej: Carlos gelmemi söyledi (geçmişte).* ",
        examples: [
          { es: "Mi madre me pidió que limpiara mi cuarto.", tr: "Annem odamı temizlememi istedi." },
          { es: "El jefe nos dijo que trabajáramos más.", tr: "Patron daha çok çalışmamızı söyledi." },
          { es: "Te dije que me escucharas.", tr: "Beni dinlemeni (sana) söylemiştim." }
        ]
      }
    },
    {
      id: "b1_u11_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Órdenes Pasadas)",
      exercises: [
        { type: "speaking", spanish: "Él me dijo que fuera feliz", turkish: "O bana mutlu olmamı söyledi." },
        { type: "speaking", spanish: "Mi madre me pidió que comiera bien", turkish: "Annem benden iyi yememi istedi." },
        { type: "speaking", spanish: "Te pedí que me ayudaras", turkish: "Bana yardım etmeni istemiştim." },
        { type: "speaking", spanish: "El médico me recomendó que descansara", turkish: "Doktor dinlenmemi tavsiye etti." },
        { type: "speaking", spanish: "Nos dijeron que viniéramos pronto", turkish: "Bize erken gelmemizi söylediler." },
        { type: "speaking", spanish: "El jefe me ordenó que hiciera el informe", turkish: "Patron raporu yapmamı emretti." },
        { type: "speaking", spanish: "Me sugirieron que comprara una casa", turkish: "Bana bir ev satın almamı önerdiler." },
        { type: "speaking", spanish: "Les pedimos que hicieran silencio", turkish: "Onlardan sessiz olmalarını istedik." },
        { type: "speaking", spanish: "Ella me rogó que no me fuera", turkish: "O bana gitmemem için yalvardı." },
        { type: "speaking", spanish: "Dijiste que me llamarías", turkish: "Beni arayacağını söylemiştin." }
      ]
    },
    {
      id: "b1_u11_n5",
      type: "theory",
      title: "Teoría III: El Reto Turco (La trampa del Pasado)",
      content: {
        concept: "En turco, para reportar en pasado usas el mismo sufijo de objeto que en presente (*-mesini*), y lo que cambia es el verbo principal (*istiyor* ➔ *istedi*).\n\nEn español, **AMBOS** verbos deben cambiar. Es el error más común de los turcoparlantes.\n\n### Tu brújula de concordancia:\n1. **Presente:** Me pide (Presente) que VAYA (Subj. Presente).\n2. **Pasado:** Me pidió (Pasado) que **FUERA** (Subj. Imperfecto).\n\nSi el primer verbo es pasado, el segundo ¡automáticamente se vuelve imperfecto! No puedes mezclarlos.",
        examples: [
          { es: "Él me dice que coma. (Ahora)", tr: "Yememi söylüyor." },
          { es: "Él me dijo que comiera. (Ayer)", tr: "Yememi söyledi." }
        ]
      }
    },
    {
      id: "b1_u11_n6",
      type: "reading",
      title: "Lectura y Audio: El malentendido",
      content: {
        text: "Ayer Ayşe tuvo una pequeña discusión con Carlos por un malentendido.\n\n— Ayşe: Carlos, ¿por qué no viniste ayer a la cena? Me dijiste que vendrías a las ocho.\n— Carlos: ¡No es verdad! Yo te dije que ayer tenía mucho trabajo y que no podía ir. Te pedí que me llamaras tú cuando terminaras.\n— Ayşe: ¡Qué raro! Yo entendí que tú me ibas a llamar a mí. Incluso me dijiste que comprara yo el vino porque tú traías la comida.\n— Carlos: Ayşe, te lo juro, yo te pedí que no compraras nada porque no era seguro que yo tuviera tiempo. \n— Ayşe: Bueno, entonces mi español todavía no es perfecto. ¡Pensaba que me habías dicho otra cosa!",
        translation: "Dün Ayşe, bir yanlış anlaşılma yüzünden Carlos ile küçük bir tartışma yaşadı.\n\n— Ayşe: Carlos, dün akşam yemeğine neden gelmedin? Bana saat sekizde geleceğini söylemiştin.\n— Carlos: Bu doğru değil! Sana dün çok işim olduğunu ve gelemediğimi söylemiştim. Bitirdiğinde beni senin aramanı istemiştim.\n— Ayşe: Ne garip! Ben senin beni arayacağını anlamıştım. Hatta yemeği sen getireceğin için şarabı benim almamı söylemiştin.\n— Carlos: Ayşe, yemin ederim, vaktim olup olmayacağı kesin olmadığı için hiçbir şey almamanı istemiştim.\n— Ayşe: Pekala, o zaman İspanyolcam hala mükemmel değil. Bana başka bir şey söylediğini sanmıştım!"
      }
    },
    {
      id: "b1_u11_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis Pasada)",
      exercises: [
        { type: "syntax", turkish: "Geleceğini söylemişti (Él).", spanish: "Él dijo que vendría", words: ["Él", "dijo", "que", "vendría", "venga"] },
        { type: "syntax", turkish: "Yardım etmemi istedi (Ella).", spanish: "Ella me pidió que la ayudara", words: ["Ella", "me", "pidió", "que", "la", "ayudara", "ayude"] },
        { type: "syntax", turkish: "Çok işi olduğunu söyledi.", spanish: "Dijo que tenía mucho trabajo", words: ["Dijo", "que", "tenía", "mucho", "trabajo", "tuviera"] },
        { type: "syntax", turkish: "Hiçbir şey almamanı istemiştim.", spanish: "Te pedí que no compraras nada", words: ["Te", "pedí", "que", "no", "compraras", "nada", "compres"] },
        { type: "syntax", turkish: "Beni aramanı söylemiştim.", spanish: "Te dije que me llamaras", words: ["Te", "dije", "que", "me", "llamaras", "llames"] },
        { type: "syntax", turkish: "Dinlenmemi tavsiye etti (El médico).", spanish: "El médico me recomendó que descansara", words: ["El", "médico", "me", "recomendó", "que", "descansara", "descanse"] },
        { type: "syntax", turkish: "Onu (kadın) çok sevdiğini söyledi.", spanish: "Dijo que la quería mucho", words: ["Dijo", "que", "la", "quería", "mucho", "quisiera"] },
        { type: "syntax", turkish: "Yarın ders olmadığını söylediler.", spanish: "Dijeron que mañana no había clase", words: ["Dijeron", "que", "mañana", "no", "había", "clase"] },
        { type: "syntax", turkish: "Sessiz olmamızı emretti.", spanish: "Nos ordenó que hiciéramos silencio", words: ["Nos", "ordenó", "que", "hiciéramos", "silencio", "hagamos"] },
        { type: "syntax", turkish: "Gerçeği bilmediğini iddia etti (afirmar).", spanish: "Afirmó que no sabía la verdad", words: ["Afirmó", "que", "no", "sabía", "la", "verdad"] }
      ]
    },
    {
      id: "b1_u11_n8",
      type: "theory",
      title: "Laboratorio de Slang: ¿Cómo reportar un chisme?",
      content: {
        concept: "En una conversación informal, no siempre decimos 'Él dijo que...'. Usamos expresiones más coloridas para introducir un chisme que nos contaron en el pasado.\n\n### Frases para el 'Cotilleo':\n• **Me soltó que...** (Lapped it out / Bana ... deyiverdi): Cuando alguien te dice algo sorprendente de repente.\n• **Me vino con el cuento de que...** (Bana ... masalıyla geldi): Cuando no crees lo que te contaron.\n• **Me enteré de que...** (Öğrendim ki / Duydum ki).\n• **Se rumoreaba que...** (Söylentilere göre...).\n• **Me confesó que...** (Bana itiraf etti ki...).",
        examples: [
          { es: "Marta me soltó que va a dejar a su novio.", tr: "Marta bana erkek arkadaşından ayrılacağını deyiverdi." },
          { es: "Él me vino con el cuento de que no tenía dinero.", tr: "Bana parası olmadığı masalıyla geldi." },
          { es: "Me enteré de que habías vuelto a Turquía.", tr: "Türkiye'ye döndüğünü duydum." }
        ]
      }
    },
    {
      id: "b1_u11_n9",
      type: "theory",
      title: "Sintaxis Maestra: La Deconstrucción del Chisme",
      content: {
        concept: "Analizaremos la frase más compleja: una petición reportada en el pasado que incluye negación y cambio de sujeto.",
        examples: [{ es: "Mi jefe me pidió que no le dijera nada a mi equipo sobre el plan.", tr: "Patronum benden plan hakkında ekibime hiçbir şey söylemememi istedi." }],
        analysis: [
          { word: "Mi jefe", type: "noun", literal: "Patronum", explanation: "Sujeto original del pasado.", examples: [] },
          { word: "me pidió", type: "verb", literal: "benden istedi", explanation: "Verbo de petición en PASADO. Es el disparador de la concordancia temporal.", examples: [] },
          { word: "que no", type: "connector", literal: "ki ... -me/-ma", explanation: "Conector con negación.", examples: [] },
          { word: "le dijera", type: "verb", literal: "ona söylemememi (subjuntivo)", explanation: "Verbo DECIR en Subjuntivo Imperfecto. Usamos esta forma porque el deseo ocurrió en el pasado.", examples: [] },
          { word: "nada", type: "pronoun", literal: "hiçbir şey", explanation: "Objeto directo.", examples: [] },
          { word: "a mi equipo", type: "noun", literal: "ekibime", explanation: "Destinatarios indirectos.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u11_n10",
      type: "theory",
      title: "Caja de Herramientas: Verbos de Influencia en Pasado",
      content: {
        concept: "Para dominar esta unidad, debes conocer cómo suenan estos 'gatillos' en pasado para saber que lo que viene después es Subjuntivo Imperfecto.\n\n### Gatillos de Pasado (Disparadores):\n• **Pedir** ➔ Me pidió que...\n• **Querer** ➔ Quería que...\n• **Aconsejar** ➔ Me aconsejó que...\n• **Sugerir** ➔ Me sugirió que...\n• **Decir (Orden)** ➔ Me dijo que...\n• **Prohibir** ➔ Me prohibió que...\n\n*Ejemplo:* Mi padre **quería que** yo **estudiara** medicina, pero yo elegí arte.",
        examples: [
          { es: "Me aconsejaron que no comprara ese coche.", tr: "O arabayı almamamı tavsiye ettiler." },
          { es: "Ella quería que viniéramos a su fiesta.", tr: "Partisine gelmemizi istiyordu." },
          { es: "Te sugerí que hablaras con él.", tr: "Onunla konuşmanı önermiştim." }
        ]
      }
    },
    {
      id: "b1_u11_n11",
      type: "theory",
      title: "Taller de Producción: El Teléfono Descompuesto (Pasado)",
      content: {
        concept: "Ha llegado el momento de reportar una conversación completa del pasado.\n\n**Instrucciones:**\nImagina que tuviste una reunión familiar o de trabajo la semana pasada. Escribe un texto (mínimo 8 líneas) contando qué te dijeron y qué te pidieron.\n\n1. Reporta al menos dos informaciones (Dijo que + Imperfecto).\n2. Reporta al menos dos órdenes o favores (Pidió que + Subjuntivo Imperfecto).\n3. Usa una expresión de slang (soltar, enterarse, confesar).\n4. Usa verbos irregulares en pasado (viniera, hiciera, dijera).\n\n**Inspiración:** 'El lunes tuve una reunión con mi jefe. Él me soltó que la empresa tenía problemas. Me pidió que hiciera un informe urgente y me sugirió que...'",
        examples: []
      }
    },
    {
      id: "b1_u11_n12",
      type: "exam",
      title: "Examen de Unidad: El Chisme en Pasado",
      content: {
        concept: "Demuestra tu maestría en la concordancia temporal. Diferencia entre hechos e influencia en el pasado.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Si alguien dijo: 'Tengo hambre', el reporte pasado es: Dijo que ______ hambre.", options: ["tiene", "tenía", "tuviera"], correct: 1 },
          { type: "multiple_choice", question: "Si alguien dijo: '¡Límpiame!', el reporte pasado es: Me pidió que lo ______.", options: ["limpió", "limpiara", "limpie"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué tiempo usamos para reportar una INFORMACIÓN del pasado?", options: ["Imperfecto de Indicativo", "Presente", "Subjuntivo"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué tiempo usamos para reportar una ORDEN del pasado?", options: ["Indefinido", "Subjuntivo Imperfecto (-ara/-iera)", "Subjuntivo Presente"], correct: 1 },
          { type: "multiple_choice", question: "Él me confesó que ______ (estar) enamorado de mí.", options: ["estuviera", "estaba", "esté"], correct: 1 },
          { type: "multiple_choice", question: "Mi madre me rogó que ______ (volver) temprano.", options: ["vuelva", "volví", "volviera"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa 'Me soltó que...'?", options: ["Un chisme de sorpresa", "Una mentira", "Un regalo"], correct: 0 },
          { type: "multiple_choice", question: "La traducción de 'Gelmemi istedi' es:", options: ["Pidió que vengo.", "Pidió que viniera.", "Dijo que vengo."], correct: 1 },
          { type: "multiple_choice", question: "La traducción de 'Geleceğini söyledi' es:", options: ["Dijo que vendría / venía.", "Dijo que viniera.", "Dijo venir."], correct: 0 },
          { type: "multiple_choice", question: "El jefe prohibió que nosotros ______ (fumar) en la oficina.", options: ["fumamos", "fumáramos", "fumemos"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la forma de 'Hacer' en Subjuntivo Imperfecto para 'Él'?", options: ["Hiciera", "Hacía", "Haga"], correct: 0 },
          { type: "multiple_choice", question: "Me enteré de que tú ______ (tener) un perro.", options: ["tengas", "tenías", "tuvieras"], correct: 1 },
          { type: "multiple_choice", question: "Te aconsejé que ______ (estudiar) más para el examen de ayer.", options: ["estudiaras", "estudies", "estudiaste"], correct: 0 },
          { type: "multiple_choice", question: "Marta me dijo que ______ (ver) a Carlos en el parque.", options: ["había visto / había visto", "veía", "viera"], correct: 0 },
          { type: "multiple_choice", question: "Me pidió que le ______ (dar) tu dirección.", options: ["diera", "daba", "dé"], correct: 0 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Aç olmadığını söyledi.", spanish: "Dijo que no tenía hambre", words: ["Dijo", "que", "no", "tenía", "hambre", "tuviera"] },
          { type: "syntax", turkish: "Bana yardım etmemi istedi.", spanish: "Me pidió que le ayudara", words: ["Me", "pidió", "que", "le", "ayudara", "ayude"] },
          { type: "syntax", turkish: "Bana gerçeği söylemeni söylemiştim.", spanish: "Te dije que me dijeras la verdad", words: ["Te", "dije", "que", "me", "dijeras", "la", "verdad", "dices"] },
          { type: "syntax", turkish: "Yorgun olduğunu söylediler.", spanish: "Dijeron que estaban cansados", words: ["Dijeron", "que", "estaban", "cansados", "estuvieran"] },
          { type: "syntax", turkish: "Beni dinlemeni rica etmiştim.", spanish: "Te había pedido que me escucharas", words: ["Te", "había", "pedido", "que", "me", "escucharas", "escuchas"] },
          { type: "syntax", turkish: "Doktor dinlenmemi tavsiye etti.", spanish: "El médico recomendó que descansara", words: ["El", "médico", "recomendó", "que", "descansara", "descanse"] },
          { type: "syntax", turkish: "Her şeyin yolunda olduğuna dair güvence verdi.", spanish: "Aseguró que todo estaba bien", words: ["Aseguró", "que", "todo", "estaba", "bien", "estuviera"] },
          { type: "syntax", turkish: "Geç kalmamamı bana söylediler.", spanish: "Me dijeron que no llegara tarde", words: ["Me", "dijeron", "que", "no", "llegara", "tarde", "llego"] },
          { type: "syntax", turkish: "Seni sevdiğini itiraf etti.", spanish: "Confesó que te quería", words: ["Confesó", "que", "te", "quería", "quisiera"] },
          { type: "syntax", turkish: "Bunu yapmamamızı emretti (ordenar).", spanish: "Ordenó que no hiciéramos esto", words: ["Ordenó", "que", "no", "hiciéramos", "esto", "hagamos"] },
          { type: "syntax", turkish: "Bana para vermeni istemişti (Ella).", spanish: "Ella me pidió que me dieras dinero", words: ["Ella", "me", "pidió", "que", "me", "dieras", "dinero", "das"] },
          { type: "syntax", turkish: "Aniden (soltar) Madrid'e gideceğini söyledi.", spanish: "Me soltó que se iba a Madrid", words: ["Me", "soltó", "que", "se", "iba", "a", "Madrid", "fuera"] },
          { type: "syntax", turkish: "O (kadın) çok mutlu olduğunu söyledi.", spanish: "Ella dijo que era muy feliz", words: ["Ella", "dijo", "que", "era", "muy", "feliz", "fuera"] },
          { type: "syntax", turkish: "Burada kalmanı önermiştim.", spanish: "Te sugerí que te quedaras aquí", words: ["Te", "sugerí", "que", "te", "quedaras", "aquí", "quedes"] },
          { type: "syntax", turkish: "İnanılmazdı! (Qué fuerte).", spanish: "Fue muy fuerte", words: ["Fue", "muy", "fuerte", "era"] }
        ]
      }
    }
  ]
};
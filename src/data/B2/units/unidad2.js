/**
 * UNIDAD 2 - NIVEL B2: EL COMUNICADOR INDEPENDIENTE
 * Foco: Hipótesis del Pasado (Si + Pluscuamperfecto Subjuntivo + Condicional Compuesto)
 * Tema: Arrepentimientos, historia alternativa y lamentaciones.
 */

export const unidad2 = {
  id: "b2_u2",
  title: "Unidad 2: El hubiera no existe",
  description: "Aprende a analizar el pasado. Domina el Pluscuamperfecto de Subjuntivo y el Condicional Compuesto para expresar arrepentimiento y escenarios imposibles.",
  nodes: [
    {
      id: "b2_u2_n1",
      type: "theory",
      title: "Teoría I: El Pasado del Pasado Subjetivo",
      content: {
        concept: "El **Pretérito Pluscuamperfecto de Subjuntivo** se usa para hablar de acciones pasadas que no ocurrieron, pero que imaginamos en un mundo paralelo.\n\n### 1. Estructura Compuesta\nComo todo tiempo 'pluscuamperfecto', se forma con el auxiliar **HABER** + un **PARTICIPIO**.\n\n**Auxiliar (Subj. Imperfecto):**\n• Yo **hubiera** (o hubiese)\n• Tú **hubieras**\n• Él/Ella **hubiera**\n• Nosotros **hubiéramos** (¡Con tilde!)\n• Ellos **hubieran**\n\n**Participio (Recordatorio):**\n• Regulares: Hablado, Comido, Vivido.\n• Irregulares: Hecho, Dicho, Visto, Puesto, Roto, Escrito.\n\n### 2. ¿Cuándo usarlo?\nSe usa principalmente después de la palabra **SI** para marcar una condición en el pasado que es imposible de cambiar ahora.",
        examples: [
          { es: "Si yo hubiera sabido la verdad...", tr: "Eğer gerçeği bilmiş olsaydım..." },
          { es: "Si hubieras venido a la fiesta...", tr: "Eğer partiye gelmiş olsaydın..." },
          { es: "Si nosotros hubiéramos tenido dinero...", tr: "Eğer paramız olmuş olsaydı..." }
        ]
      }
    },
    {
      id: "b2_u2_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (La Condición Pasada)",
      exercises: [
        { type: "syntax", turkish: "Zamanım olsaydı (sahip olmuş olsaydım).", spanish: "Si hubiera tenido tiempo", words: ["Si", "hubiera", "tenido", "tiempo", "tuviera", "había"] },
        { type: "syntax", turkish: "Daha önce bilseydim (öğrenmiş olsaydım).", spanish: "Si lo hubiera sabido antes", words: ["Si", "lo", "hubiera", "sabido", "antes", "supiera"] },
        { type: "syntax", turkish: "Ödevini yapsaydın (yapmış olsaydın).", spanish: "Si hubieras hecho tu tarea", words: ["Si", "hubieras", "hecho", "tu", "tarea", "hicieras"] },
        { type: "syntax", turkish: "Onu (kadın) görseydim.", spanish: "Si la hubiera visto", words: ["Si", "la", "hubiera", "visto", "veía", "vea"] },
        { type: "syntax", turkish: "Bize söyleselerdi.", spanish: "Si ellos nos hubieran dicho", words: ["Si", "ellos", "nos", "hubieran", "dicho", "dijeran"] },
        { type: "syntax", turkish: "Piyangoyu kazansaydık.", spanish: "Si hubiéramos ganado la lotería", words: ["Si", "hubiéramos", "ganado", "la", "lotería"] },
        { type: "syntax", turkish: "Burada olsaydın (bulunmuş olsaydın).", spanish: "Si hubieras estado aquí", words: ["Si", "hubieras", "estado", "aquí", "estuvieras"] },
        { type: "syntax", turkish: "Erken gelseydin (Venir).", spanish: "Si hubieras venido temprano", words: ["Si", "hubieras", "venido", "temprano", "vinieras"] },
        { type: "syntax", turkish: "Mektubu yazsaydın.", spanish: "Si hubieras escrito la carta", words: ["Si", "hubieras", "escrito", "la", "carta", "escribieras"] },
        { type: "syntax", turkish: "Dikkatli olsaydık (Ser).", spanish: "Si hubiéramos sido cauteltos", words: ["Si", "hubiéramos", "sido", "cauteltos", "fuéramos"] }
      ]
    },
    {
      id: "b2_u2_n3",
      type: "theory",
      title: "Teoría II: La Consecuencia (Condicional Compuesto)",
      content: {
        concept: "Si en una balanza el peso A es el 'Hubiera hecho', el peso B (la consecuencia) debe ser el **Condicional Compuesto**.\n\n### 1. ¿Cómo se forma?\n**Auxiliar HABER (en condicional) + PARTICIPIO**\n• Yo **habría**\n• Tú **habrías**\n• Él/Ella **habría**\n• Nosotros **habríamos**\n• Ellos **habrían**\n\n### 2. La Balanza de la Lamentación\nEsta estructura sirve para decir qué habría pasado en un mundo paralelo si la condición se hubiera cumplido.\n\n**[SI + HUBIERA HECHO] ➔ [HABRÍA PASADO]**\n• *Si hubiera estudiado (No lo hice), habría aprobado (Pero suspendí).* \n\n🇹🇷 LÓGICA TURCA: Equivale a **Yapmış olsaydım ... yapardım / yapmış olurdum**.",
        examples: [
          { es: "Si te hubiera visto, te habría saludado.", tr: "Seni görmüş olsaydım, sana selam verirdim." },
          { es: "No habríamos llegado tarde si hubiéramos salido antes.", tr: "Daha önce çıkmış olsaydık, geç kalmazdık." },
          { es: "Él habría sido feliz si ella se hubiera quedado.", tr: "Eğer o (kadın) kalmış olsaydı, o (erkek) mutlu olurdu." }
        ]
      }
    },
    {
      id: "b2_u2_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Arrepentimiento)",
      exercises: [
        { type: "speaking", spanish: "Si hubiera tenido dinero lo habría comprado", turkish: "Param olsaydı onu satın alırdım." },
        { type: "speaking", spanish: "Habría ido a tu casa si me hubieras llamado", turkish: "Beni arasaydın evine giderdim." },
        { type: "speaking", spanish: "Si hubiéramos sabido el plan habríamos venido", turkish: "Planı bilseydik gelirdik." },
        { type: "speaking", spanish: "Él habría hecho el trabajo si hubiera podido", turkish: "Yapabilseydi işi yapardı." },
        { type: "speaking", spanish: "Si no hubiera llovido habríamos salido", turkish: "Yağmur yağmasaydı çıkardık." },
        { type: "speaking", spanish: "Habrías ganado si hubieras corrido más", turkish: "Daha çok koşsaydın kazanırdın." },
        { type: "speaking", spanish: "Si hubieras dicho la verdad no habría problemas", turkish: "Doğruyu söyleseydin problemler olmazdı." },
        { type: "speaking", spanish: "Nos habríamos divertido mucho contigo", turkish: "Seninle çok eğlenirdik (eğlenmiş olurduk)." }
      ]
    },
    {
      id: "b2_u2_n5",
      type: "theory",
      title: "El Reto Turco: ¿Miş olsaydım o miş olurdum?",
      content: {
        concept: "En turco, la distinción entre la condición y el resultado a veces se marca con el orden de los sufijos. En español, el error más común es usar el mismo tiempo en ambos lados.\n\n⚠️ **ERROR COMÚN:** Muchos estudiantes dicen: 'Si hubiera tenido tiempo, *había* ido'. \n\nRecuerda la regla de los auxiliares:\n1. El lado del **SI** siempre lleva la raíz **HUBIER-**.\n2. El lado del **RESULTADO** siempre lleva la raíz **HABR-**.\n\nEs una danza constante: Hubiera ➔ Habría. No puedes cruzarlos.",
        examples: [
          { es: "Si hubieras (HUB) estado, lo habrías (HAB) visto.", tr: "Orada olsaydın, onu görürdün." },
          { es: "Te habría (HAB) llamado si hubiera (HUB) podido.", tr: "Yapabilseydim seni arardım." }
        ]
      }
    },
    {
      id: "b2_u2_n6",
      type: "reading",
      title: "Lectura Crítica: Grandes '¿Y si...?' de la Historia",
      content: {
        text: "La historia de la humanidad está llena de decisiones críticas. Si los navegantes no hubieran descubierto América en 1492, ¿cómo habría sido el mapa del mundo actual? Algunos historiadores piensan que la cultura europea no habría tenido tanto poder. \n\nOtro ejemplo: Si Alexander Fleming no hubiera olvidado limpiar su laboratorio, nunca habría descubierto la penicilina. Millones de personas habrían muerto por infecciones simples si ese descuido no hubiera ocurrido. \n\nEn nuestra vida personal pasa lo mismo. Si no hubieras tomado aquel tren aquel día, quizás no habrías conocido a tu mejor amigo. El pasado es una cadena de eventos imposibles de cambiar, pero fascinantes de imaginar. Ojalá hubiéramos sabido entonces lo que sabemos ahora.",
        translation: "İnsanlık tarihi kritik kararlarla doludur. Eğer denizciler 1492'de Amerika'yı keşfetmemiş olsalardı, bugünkü dünya haritası nasıl olurdu? Bazı tarihçiler Avrupa kültürünün bu kadar güce sahip olmayacağını düşünüyor.\n\nBaşka bir örnek: Alexander Fleming laboratuvarını temizlemeyi unutmasaydı, penisilini asla keşfedemezdi. Eğer bu ihmal yaşanmasaydı, milyonlarca insan basit enfeksiyonlardan ölmüş olurdu.\n\nKişisel hayatımızda da durum aynı. O gün o trene binmeseydin, belki de en iyi arkadaşınla tanışmamış olurdun. Geçmiş, değiştirilmesi imkansız ama hayal etmesi büyüleyici bir olaylar zinciridir. Keşke o zaman şimdi bildiklerimizi bilseydik."
      }
    },
    {
      id: "b2_u2_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto (Alta Dificultad)",
      exercises: [
        { type: "syntax", turkish: "Penisilini keşfetmemiş olsaydı (Descubrir) milyonlarca insan ölmüş olurdu.", spanish: "Si no hubiera descubierto la penicilina millones de personas habrían muerto", words: ["Si", "no", "hubiera", "descubierto", "la", "penicilina", "millones", "de", "personas", "habrían", "muerto"] },
        { type: "syntax", turkish: "O gün o trene binmeseydin (Tomar)...", spanish: "Si no hubieras tomado aquel tren aquel día", words: ["Si", "no", "hubieras", "tomado", "aquel", "tren", "aquel", "día"] },
        { type: "syntax", turkish: "En iyi arkadaşınla tanışmamış olurdun.", spanish: "No habrías conocido a tu mejor amigo", words: ["No", "habrías", "conocido", "a", "tu", "mejor", "amigo", "conocias"] },
        { type: "syntax", turkish: "Keşke o zaman bilseydik!", spanish: "Ojalá lo hubiéramos sabido entonces", words: ["Ojalá", "lo", "hubiéramos", "sabido", "entonces", "sepamos"] },
        { type: "speaking", spanish: "Si me hubieras dicho la verdad te habría perdonado", turkish: "Bana doğruyu söyleseydin seni affederdim." },
        { type: "speaking", spanish: "Habríamos tenido éxito si hubiéramos trabajado juntos", turkish: "Birlikte çalışsaydık başarılı olurduk." },
        { type: "speaking", spanish: "Qué habría pasado si no hubieras venido", turkish: "Gelmeyeydin ne olurdu?" },
        { type: "speaking", spanish: "Si hubiera tenido alas habría volado muy lejos", turkish: "Kanatlarım olsaydı çok uzağa uçardım." }
      ]
    },
    {
      id: "b2_u2_n8",
      type: "theory",
      title: "Teoría III: Pragmática y Disculpas",
      content: {
        concept: "En el nivel B2, usamos estas estructuras para algo muy humano: **disculparnos por errores pasados**. \n\nNo es lo mismo decir 'Perdón' que explicar POR QUÉ algo no salió bien. Usar el 'Hubiera' demuestra que tú querías hacer algo pero hubo un obstáculo externo.\n\n### Frases de Disculpa Avanzada:\n• **Si hubiera podido...** (Yapabilseydim...): *'Te habría ayudado si hubiera podido'.*\n• **Si lo hubiera sabido...** (Bilseydim...): *'No habría dicho eso si hubiera sabido que te molestaba'.*\n• **Si no hubiera sido por...** ( ... olmasaydı / sayesinde): *'Si no hubiera sido por tu ayuda, habría fracasado'.*",
        examples: [
          { es: "Perdón, si hubiera tenido batería te habría llamado.", tr: "Özür dilerim, şarjım olsaydı seni arardım." },
          { es: "Si no hubiera sido por el tráfico, habría llegado puntual.", tr: "Trafik olmasaydı, vaktinde varırdım." }
        ]
      }
    },
    {
      id: "b2_u2_n9",
      type: "theory",
      title: "Sintaxis Visual: La Estructura Compuesta Extrema",
      content: {
        concept: "Analizaremos una frase que combina negación, pronombres y dos verbos compuestos. Observa cómo los auxiliares (hubiera/habría) son los únicos que cambian su forma.",
        examples: [{ es: "Yo no te lo habría dado si no me lo hubieras pedido.", tr: "Benden istememiş olsaydın, onu sana vermezdim." }],
        analysis: [
          { word: "Yo no te lo", type: "pronoun", literal: "Ben sana onu", explanation: "Sujeto + Negación + Doble pronombre (OI + OD). El orden es inalterable.", examples: [] },
          { word: "habría dado", type: "verb", literal: "verirdim / vermiş olurdum", explanation: "Consecuencia en Condicional Compuesto. Indica que la acción no ocurrió.", examples: [] },
          { word: "si no", type: "connector", literal: "eğer ... değilsa", explanation: "Conector condicional negativo.", examples: [] },
          { word: "me lo", type: "pronoun", literal: "benden onu", explanation: "Doble pronombre reflejado.", examples: [] },
          { word: "hubieras pedido", type: "verb", literal: "istemiş olsaydın", explanation: "Condición en Pluscuamperfecto de Subjuntivo. Es el origen de la hipótesis.", examples: [] }
        ]
      }
    },
    {
      id: "b2_u2_n10",
      type: "theory",
      title: "Caja de Herramientas: Historia y Decisiones",
      content: {
        concept: "Para debatir sobre el pasado y la historia, necesitas estas palabras de nivel superior.\n\n• **El descuido / La negligencia** (İhmal)\n• **El hallazgo / El descubrimiento** (Bulgu / Keşif)\n• **Arrepentirse de** (Pişman olmak) ➔ *Me arrepiento de no haber ido.*\n• **Fracasar / El fracaso** (Başarısız olmak / Başarısızlık)\n• **La oportunidad perdida** (Kaçırılmış fırsat)\n• **Tomar una decisión** (Karar almak)\n• **Cambiar el rumbo** (Rotayı değiştirmek)\n• **Echar de menos** (Özlemek) ➔ *Te habría echado de menos.*",
        examples: [
          { es: "Fue una oportunidad perdida; si la hubiera aprovechado...", tr: "Kaçırılmış bir fırsattı; eğer değerlendirmiş olsaydım..." },
          { es: "Me arrepiento de lo que dije; si pudiera volver atrás...", tr: "Söylediklerimden pişmanım; geri dönebilseydim..." }
        ]
      }
    },
    {
      id: "b2_u2_n11",
      type: "theory",
      title: "Taller de Producción: El Efecto Mariposa",
      content: {
        concept: "Instrucciones: Piensa en una decisión importante que tomaste en tu vida (tu carrera, un viaje, una mudanza).\n\nEscribe un texto (mínimo 10-12 líneas) analizando cómo sería tu vida hoy si hubieras decidido lo contrario.\n1. Usa al menos 4 estructuras de 'Si + Hubiera ... habría ...'.\n2. Usa la expresión 'Si no hubiera sido por...'.\n3. Usa vocabulario de la unidad (oportunidad, decisión, arrepentirse).\n4. Envía tu texto al profesor.",
        examples: []
      }
    },
    {
      id: "b2_u2_n12",
      type: "exam",
      title: "Examen de Unidad 2: El Pasado Imposible",
      content: {
        concept: "Evaluación técnica de alta densidad sobre hipótesis del pasado y condicional compuesto.",
        exercises: [
          { type: "multiple_choice", question: "¿Cuál es el auxiliar de 'Nosotros' en Pluscuamperfecto de Subjuntivo?", options: ["Habíamos", "Hubiéramos", "Habremos"], correct: 1 },
          { type: "multiple_choice", question: "Si tú me ______ (llamar), yo ______ (ir).", options: ["hubieras llamado / habría ido", "habrías llamado / hubiera ido"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se traduce 'Keşke gelseydin'?", options: ["Ojalá vengas", "Ojalá hubieras venido"], correct: 1 },
          { type: "multiple_choice", question: "Participio de DECIR:", options: ["Decido", "Dicho", "Dijido"], correct: 1 },
          { type: "multiple_choice", question: "Si nosotros ______ (saber) el precio, no lo ______ (comprar).", options: ["hubiéramos sabido / habríamos comprado", "habríamos sabido / hubiéramos comprado"], correct: 0 },
          { type: "multiple_choice", question: "Yo ______ (hacer - condicional compuesto) la comida si tú me ______ (ayudar).", options: ["habría hecho / hubieras ayudado", "hubiera hecho / habrías ayudado"], correct: 0 },
          { type: "multiple_choice", question: "Si no ______ (ser) por ti, yo estaría perdido.", options: ["hubiera sido", "hubiese sido", "ambas son correctas"], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál es el participio de ESCRIBIR?", options: ["Escribido", "Escrito"], correct: 1 },
          { type: "multiple_choice", question: "Ella ______ (tener) éxito si ______ (esforzarse) más.", options: ["habría tenido / se hubiera esforzado", "hubiera tenido / se habría esforzado"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'El hubiera no existe'?", options: ["Pasado es pasado.", "El futuro es incierto.", "No te arrepientas."], correct: 0 },
          { type: "syntax", turkish: "Beni arasaydın (Hubiera) giderdim (Habría).", spanish: "Si me hubieras llamado habría ido", words: ["Si", "me", "hubieras", "llamado", "habría", "ido", "había"] },
          { type: "syntax", turkish: "Zaten yemiştim (Ya lo había...).", spanish: "Ya lo había comido", words: ["Ya", "lo", "había", "comido", "hubiera"] },
          { type: "syntax", turkish: "Bunu yapabilseydim (Poder) yapardım.", spanish: "Si hubiera podido lo habría hecho", words: ["Si", "hubiera", "podido", "lo", "habría", "hecho", "hizo"] },
          { type: "syntax", turkish: "Doğruyu söyleselerdi (Decir) onlara inanırdım.", spanish: "Si hubieran dicho la verdad los habría creído", words: ["Si", "hubieran", "dicho", "la", "verdad", "los", "habría", "creído"] },
          { type: "syntax", turkish: "Onun (kadın) orada olduğunu bilseydim.", spanish: "Si hubiera sabido que ella estaba allí", words: ["Si", "hubiera", "sabido", "que", "ella", "estaba", "allí"] },
          { type: "syntax", turkish: "Bunu satın alırdım (Comprar) ama param yoktu.", spanish: "Lo habría comprado pero no tenía dinero", words: ["Lo", "habría", "comprado", "pero", "no", "tenía", "dinero"] },
          { type: "syntax", turkish: "Geç kalmazdık (Llegar) eğer erken çıksaydık (Salir).", spanish: "No habríamos llegado tarde si hubiéramos salido antes", words: ["No", "habríamos", "llegado", "tarde", "si", "hubiéramos", "salido", "antes"] },
          { type: "syntax", turkish: "Keşke seni dinleseydim!", spanish: "Ojalá te hubiera escuchado", words: ["Ojalá", "te", "hubiera", "escuchado", "hubiese", "escuchó"] },
          { type: "syntax", turkish: "Bardağı kırmasaydın (Romper) annem kızmazdı.", spanish: "Si no hubieras roto el vaso mi madre no se habría enfadado", words: ["Si", "no", "hubieras", "roto", "el", "vaso", "mi", "madre", "no", "se", "habría", "enfadado"] },
          { type: "syntax", turkish: "Her şey farklı olurdu (Ser).", spanish: "Todo habría sido diferente", words: ["Todo", "habría", "sido", "diferente", "hubiera"] }
        ]
      }
    }
  ]
};
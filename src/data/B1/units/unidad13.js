/**
 * UNIDAD 13: EL PASADO DEL SUBJUNTIVO (NIVEL B1)
 * Enfoque: Uso del Pretérito Imperfecto de Subjuntivo con verbos de emoción, deseo e influencia en el pasado.
 * Estructura: 12 Nodos Premium.
 */

export const unidad13 = {
  id: "b1_u13",
  title: "Unidad 13: El Pasado del Subjuntivo",
  description: "Aprende a expresar deseos y emociones sobre el pasado. Domina el Imperfecto de Subjuntivo más allá de las hipótesis.",
  nodes: [
    {
      id: "b1_u13_n1",
      type: "theory",
      title: "Teoría I: Deseos y Emociones en el Pasado",
      content: {
        concept: "En la Unidad 12 usamos el Imperfecto de Subjuntivo para imaginar mundos imposibles (Si fuera rico...). Ahora aprenderemos su uso más común: reaccionar a cosas que pasaron.\n\n### La Regla de la Concordancia Temporal\nCuando el verbo principal (el que expresa la emoción o el deseo) está en **PASADO** (Indefinido o Imperfecto), el segundo verbo debe ir obligatoriamente en **Imperfecto de Subjuntivo**.\n\n• **Presente:** Me alegra (Pres.) que **vengas** (Subj. Pres.).\n• **Pasado:** Me alegró (Pas.) que **vinieras** (Subj. Imp.).\n\n### Disparadores comunes en pasado:\n1. **Emoción:** Me gustó que, me dio pena que, me molestó que...\n2. **Voluntad:** Quise que, te pedí que, necesitaba que...\n3. **Influencia:** Te recomendé que, te sugerí que...",
        examples: [
          { es: "Te pedí que me llamaras ayer.", tr: "Dün beni aramanı istemiştim (rica etmiştim)." },
          { es: "Me molestó que él llegara tarde a la cita.", tr: "Onun randevuya geç gelmesi beni rahatsız etti." },
          { es: "Quería que nosotros habláramos antes.", tr: "Daha önce konuşmamızı istiyordum." }
        ]
      }
    },
    {
      id: "b1_u13_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Concordancia)",
      exercises: [
        { type: "syntax", turkish: "Bana yardım etmeni istemiştim (Pedir).", spanish: "Te pedí que me ayudaras", words: ["Te", "pedí", "que", "me", "ayudaras", "ayudes", "ayudaste"] },
        { type: "syntax", turkish: "Burada olmana sevindim (Me alegró).", spanish: "Me alegró que estuvieras aquí", words: ["Me", "alegró", "que", "estuvieras", "aquí", "estás", "estuviste"] },
        { type: "syntax", turkish: "İspanyolca öğrenmeni istiyordum (Quería).", spanish: "Quería que aprendieras español", words: ["Quería", "que", "aprendieras", "español", "aprendes"] },
        { type: "syntax", turkish: "Onun (kadın) gelmemesi beni üzdü (Me dio pena).", spanish: "Me dio pena que ella no viniera", words: ["Me", "dio", "pena", "que", "ella", "no", "viniera", "viene"] },
        { type: "syntax", turkish: "Bana yalan söylemen beni kızdırdó (Me enfadó).", spanish: "Me enfadó que me dijeras mentiras", words: ["Me", "enfadó", "que", "me", "dijeras", "mentiras", "dices"] },
        { type: "syntax", turkish: "Doktora gitmeni tavsiye ettim.", spanish: "Te recomendé que fueras al médico", words: ["Te", "recomendé", "que", "fueras", "al", "médico", "vas"] },
        { type: "syntax", turkish: "Ödevini yapmanı bekliyordum (Esperaba).", spanish: "Esperaba que hicieras tu tarea", words: ["Esperaba", "que", "hicieras", "tu", "tarea", "haces"] },
        { type: "syntax", turkish: "Susmanı rica ettim (Pedir).", spanish: "Te pedí que te callaras", words: ["Te", "pedí", "que", "te", "callaras", "callas"] },
        { type: "syntax", turkish: "Mutlu olmalarını istiyorduk.", spanish: "Queríamos que ellos fueran felices", words: ["Queríamos", "que", "ellos", "fueran", "felices"] },
        { type: "syntax", turkish: "Kapıyı kapatmanı söyledim.", spanish: "Te dije que cerraras la puerta", words: ["Te", "dije", "que", "cerraras", "la", "puerta"] }
      ]
    },
    {
      id: "b1_u13_n3",
      type: "theory",
      title: "Teoría II: Repaso de Irregulares en Acción",
      content: {
        concept: "Recuerda que los verbos irregulares en el pasado Indefinido (Ellos) son la clave para el Imperfecto de Subjuntivo. Vamos a verlos aplicados a emociones y peticiones pasadas.\n\n### Verbos de Raíz Fuerte:\n• **Tener (Tuvieron) ➔ Tuviera:** *Me gustó que tuvieras tiempo.*\n• **Hacer (Hicieron) ➔ Hiciera:** *Te pedí que hicieras la cena.*\n• **Decir (Dijeron) ➔ Dijera:** *No quise que me dijeras la verdad.*\n• **Venir (Vinieron) ➔ Viniera:** *Fue genial que vinieras.*\n• **Poner (Pusieron) ➔ Pusiera:** *Necesitaba que pusieras atención.*\n\n### Verbos de Cambio Vocálico:\n• **Dormir (Durmieron) ➔ Durmiera:** *Quería que el bebé durmiera.*\n• **Pedir (Pidieron) ➔ Pidiera:** *Me molestó que me pidiera dinero.*",
        examples: [
          { es: "Sentí mucho que muriera tu gato.", tr: "Kedinin ölmesine çok üzüldüm." },
          { es: "Fue una lástima que no pudieras venir.", tr: "Gelememiş olman ne yazıktı." },
          { es: "Él me sugirió que leyera este libro.", tr: "Bana bu kitabı okumamı önerdi." }
        ]
      }
    },
    {
      id: "b1_u13_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Emociones Pasadas)",
      exercises: [
        { type: "speaking", spanish: "Me encantó que me llamaras", turkish: "Beni aramana bayıldım." },
        { type: "speaking", spanish: "Te pedí que hicieras un esfuerzo", turkish: "Bir çaba göstermeni istemiştim." },
        { type: "speaking", spanish: "Me dio miedo que estuvieras sola", turkish: "Yalnız olmandan korktum." },
        { type: "speaking", spanish: "Quería que vinieras a mi fiesta", turkish: "Partime gelmeni istiyordum." },
        { type: "speaking", spanish: "Me molestó que no dijeras nada", turkish: "Hiçbir şey söylememen beni rahatsız etti." },
        { type: "speaking", spanish: "Fue increíble que ganaras", turkish: "Kazanman inanılmazdı." },
        { type: "speaking", spanish: "Te sugerí que compraras el coche", turkish: "Arabayı satın almanı önermiştim." },
        { type: "speaking", spanish: "Necesitaba que me escucharas", turkish: "Beni dinlemene ihtiyacım vardı." },
        { type: "speaking", spanish: "Sentimos que perdieras el tren", turkish: "Treni kaçırmana üzüldük." },
        { type: "speaking", spanish: "Esperaba que tuvieras suerte", turkish: "Şanslı olmanı umuyordum." }
      ]
    },
    {
      id: "b1_u13_n5",
      type: "theory",
      title: "El Reto Turco: El deseo retrospectivo",
      content: {
        concept: "En turco, para decir 'Beni aramanı istedim', el verbo 'arama' (infinitivo + posesivo) no cambia si es presente o pasado. Solo cambia el verbo 'istedim'.\n\nEn español, el pasado es contagioso. Si 'querer' está en pasado, el siguiente verbo tiene que 'retroceder' también.\n\n### Tu brújula mental:\n1. Si la frase es: **'Quiero que me llames'** (Presente) ➔ Estoy pidiendo algo ahora.\n2. Si la frase es: **'Quise que me llamaras'** (Pasado) ➔ Estoy hablando de un deseo que tuve ayer.\n\n🇹🇷 Los estudiantes turcos suelen decir: *'Me gustó que vengas'* (Error). Debes decir: **'Me gustó que VINIERAS'**. ¡Usa siempre la forma en -ARA / -IERA!",
        examples: [
          { es: "Me alegró que estuvieras bien. (Ayer)", tr: "İyi olmana sevindim." },
          { es: "Espero que estés bien. (Hoy)", tr: "Umarım iyisindir." }
        ]
      }
    },
    {
      id: "b1_u13_n6",
      type: "reading",
      title: "Lectura y Audio: Una reunión de antiguos alumnos",
      content: {
        text: "La semana pasada fui a una cena con mis compañeros de la escuela primaria. Hacía diez años que no nos veíamos.\n\nMe sorprendió mucho que Carlos estuviera tan cambiado; ahora es muy alto y tiene barba. Me alegró mucho que todos se acordaran de mi nombre. Durante la cena, Lucía nos contó que se había casado. Yo quise que ella nos enseñara fotos de su boda, pero no tenía batería en el móvil. \n\nFue una lástima que nuestro profesor favorito no pudiera venir porque estaba enfermo. Todos esperábamos que él estuviera allí con nosotros. Al final de la noche, les pedí a todos que me escribieran por WhatsApp para no perder el contacto otra vez. ¡Fue una noche mágica!",
        translation: "Geçen hafta ilkokul arkadaşlarımla bir akşam yemeğine gittim. On yıldır birbirimizi görmemiştik.\n\nCarlos'un bu kadar değişmiş olması beni çok şaşırttı; şimdi çok uzun boylu ve sakalı var. Herkesin adımı hatırlamasına çok sevindim. Yemek sırasında Lucia bize evlendiğini anlattı. Düğün fotoğraflarını bize göstermesini istedim ama cep telefonunun şarjı yoktu.\n\nEn sevdiğimiz öğretmenimizin hasta olduğu için gelememesi ne yazıktı. Hepimiz onun orada bizimle olmasını umuyorduk. Gecenin sonunda, iletişimi tekrar kaybetmemek için herkesten bana WhatsApp'tan yazmalarını istedim. Büyülü bir geceydi!"
      }
    },
    {
      id: "b1_u13_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis Retrospectiva)",
      exercises: [
        { type: "syntax", turkish: "Adımı hatırlamanıza sevindim (Nosotros).", spanish: "Nos alegró que recordaran mi nombre", words: ["Nos", "alegró", "que", "recordaran", "mi", "nombre", "recuerden"] },
        { type: "syntax", turkish: "Fotoğrafları göstermesini istedim (Él).", spanish: "Quise que él enseñara las fotos", words: ["Quise", "que", "él", "enseñara", "las", "fotos", "enseña"] },
        { type: "syntax", turkish: "Gelmemesi ne yazıktı.", spanish: "Fue una lástima que no viniera", words: ["Fue", "una", "lástima", "que", "no", "viniera", "venga"] },
        { type: "syntax", turkish: "Bana yazmanızı istedim (Ustedes).", spanish: "Les pedí que me escribieran", words: ["Les", "pedí", "que", "me", "escribieran", "escriben"] },
        { type: "syntax", turkish: "Orada olmanı umuyordum.", spanish: "Esperaba que estuvieras allí", words: ["Esperaba", "que", "estuvieras", "allí", "estás"] },
        { type: "speaking", spanish: "Me gustó que vinieras a verme", turkish: "Beni görmeye gelmen hoşuma gitti." },
        { type: "speaking", spanish: "Te pedí que no dijeras nada", turkish: "Hiçbir şey söylememeni istemiştim." },
        { type: "speaking", spanish: "Fue genial que pudieras venir", turkish: "Gelebilmen harikaydı." },
        { type: "speaking", spanish: "Quería que habláramos de eso", turkish: "Onun hakkında konuşmamızı istiyordum." },
        { type: "speaking", spanish: "Me sorprendió que supieras la verdad", turkish: "Gerçeği bilmene şaşırdım." }
      ]
    },
    {
      id: "b1_u13_n8",
      type: "theory",
      title: "Laboratorio de Slang: 'Como si nada' y otros usos",
      content: {
        concept: "El Imperfecto de Subjuntivo se usa en expresiones idiomáticas que los nativos usamos todo el tiempo para dar énfasis.\n\n### Expresiones de Oro:\n• **Como si nada** (Hiçbir şey olmamış gibi) ➔ *'Él llegó tarde y entró como si nada'.*\n• **Quien fuera...** (Keşke ... olsaydım) ➔ Se usa para expresar envidia sana. *'¡Quien fuera millonario!'*.\n• **Como si fuera poco** (Yetmezmiş gibi) ➔ Para añadir un problema extra. *'Perdí las llaves y, como si fuera poco, empezó a llover'.*\n• **Ni que fueras...** (Sanki ... mışsın gibi) ➔ Para criticar a alguien que se cree algo que no es. *'¡Ni que fueras el jefe!'*.",
        examples: [
          { es: "Él gasta dinero como si fuera rico.", tr: "Zenginmiş gibi para harcıyor." },
          { es: "¡Quien fuera tú para vivir en la playa!", tr: "Plajda yaşamak için keşke senin yerinde olsaydım!" },
          { es: "Habló conmigo como si no me conociera.", tr: "Beni tanımıyormuş gibi benimle konuştu." }
        ]
      }
    },
    {
      id: "b1_u13_n9",
      type: "theory",
      title: "Sintaxis Maestra: La Deconstrucción de la Sorpresa",
      content: {
        concept: "Analizaremos cómo se construye una reacción emocional a un hecho pasado que incluye un cambio de sujeto y un adjetivo.",
        examples: [{ es: "A mis padres les sorprendió mucho que tú hablaras español tan bien.", tr: "Ebeveynlerim senin bu kadar iyi İspanyolca konuşmana çok şaşırdılar." }],
        analysis: [
          { word: "A mis padres", type: "noun", literal: "Ebeveynlerim", explanation: "Clarificación del objeto indirecto (a quién le sorprendió).", examples: [] },
          { word: "les sorprendió", type: "verb", literal: "onları şaşırttı", explanation: "Verbo de emoción en pasado Indefinido. Dispara el subjuntivo.", examples: [] },
          { word: "mucho", type: "adverb", literal: "çok", explanation: "Intensificador de la emoción.", examples: [] },
          { word: "que", type: "connector", literal: "ki", explanation: "El puente obligatorio.", examples: [] },
          { word: "tú", type: "pronoun", literal: "sen", explanation: "Sujeto de la acción evaluada.", examples: [] },
          { word: "hablaras", type: "verb", literal: "konuşman", explanation: "Verbo HABLAR en Imperfecto de Subjuntivo. Reacción a un hecho.", examples: [] },
          { word: "español", type: "noun", literal: "İspanyolca", explanation: "Objeto directo.", examples: [] },
          { word: "tan bien", type: "adverb", literal: "bu kadar iyi", explanation: "Modo de la acción.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u13_n10",
      type: "theory",
      title: "Caja de Herramientas: Verbos de Reacción",
      content: {
        concept: "Para dominar el B1, necesitas verbos que expresen matices sobre cómo te afectaron las acciones de otros en el pasado.\n\n### Verbos de Sentimiento en Pasado:\n• **Me extrañó que...** (Garibime gitti / Şaşırdım).\n• **Me indignó que...** (Beni öfkelendirdi).\n• **Me ilusionó que...** (Beni heyecanlandırdı / Umutlandırdı).\n• **Me molestó que...** (Beni rahatsız etti).\n• **Me asombró que...** (Beni hayrete düşürdü).\n\n*Ejemplo:* Me extrañó que no vinieras a la cita. (Randevuya gelmemen garibime gitti).",
        examples: [
          { es: "Nos ilusionó mucho que nos visitaras.", tr: "Bizi ziyaret etmen bizi çok heyecanlandırdı." },
          { es: "Me indignó que él no pidiera perdón.", tr: "Onun özür dilememesi beni öfkelendirdi." },
          { es: "Me asombró que supieras cocinar tan bien.", tr: "Bu kadar iyi yemek yapabilmene hayret ettim." }
        ]
      }
    },
    {
      id: "b1_u13_n11",
      type: "theory",
      title: "Taller de Producción: Aquel día especial",
      content: {
        concept: "Vas a contar una anécdota enfocándote en lo que esperabas o sentías en ese momento.\n\n**Instrucciones:**\nEscribe un texto (mínimo 8 líneas) sobre un evento del pasado (una fiesta, un viaje o un examen).\n1. Usa al menos 3 verbos de reacción en pasado (me alegró que, me extrañó que...).\n2. Usa al menos 2 verbos de voluntad en pasado (quería que, te pedí que...).\n3. Incluye una expresión de slang (como si nada, como si fuera poco).\n4. Asegúrate de usar el Imperfecto de Subjuntivo correctamente.\n\n**Inspiración:** 'El día de mi cumpleaños me alegró mucho que mis amigos vinieran a casa. Me extrañó que Carlos no trajera regalo, pero entró como si nada...'",
        examples: []
      }
    },
    {
      id: "b1_u13_n12",
      type: "exam",
      title: "Examen de Unidad: El Pasado del Subjuntivo",
      content: {
        concept: "Demuestra que dominas la concordancia temporal y las reacciones emocionales en el pasado.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Si digo 'Me alegra que vengas' hoy, en pasado es: Me alegró que ______.", options: ["vengas", "vinieras", "viniste"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué tiempo verbal sigue a 'Quería que...'?", options: ["Presente de Subjuntivo", "Imperfecto de Subjuntivo", "Indefinido"], correct: 1 },
          { type: "multiple_choice", question: "Fue una pena que tú no ______ (poder) venir.", options: ["puedas", "pudiste", "pudieras"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa 'Quien fuera tú'?", options: ["Senin kim olduğunu biliyorum.", "Keşke senin yerinde olsaydım.", "Sen kimsin?"], correct: 1 },
          { type: "multiple_choice", question: "Me extrañó que ella ______ (decir) eso.", options: ["dijera", "dijiste", "diga"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Yetmezmiş gibi'?", options: ["Como si nada", "Como si fuera poco", "Ni que fueras"], correct: 1 },
          { type: "multiple_choice", question: "Te recomendé que ______ (estudiar) más.", options: ["estudies", "estudiaras", "estudiaste"], correct: 1 },
          { type: "multiple_choice", question: "Me molestó que ellos ______ (hacer) tanto ruido.", options: ["hicieran", "hicieron", "hagan"], correct: 0 },
          { type: "multiple_choice", question: "La traducción de 'Gelmeni istedim' es:", options: ["Quise que vinieras.", "Quise que vienes.", "Quise venir."], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la forma de 'Ser' en Imperfecto de Subjuntivo para 'Nosotros'?", options: ["Fuéramos", "Fuimos", "Séramos"], correct: 0 },
          { type: "multiple_choice", question: "Salió de la habitación como si ______ (pasar) nada.", options: ["pasara", "pasó", "pasa"], correct: 0 },
          { type: "multiple_choice", question: "Me ilusionó que me ______ (tú - escribir) una carta.", options: ["escribieras", "escribas", "escribiste"], correct: 0 },
          { type: "multiple_choice", question: "Les pedí que ______ (traer) algo de beber.", options: ["traigan", "trajeron", "trajeran"], correct: 2 },
          { type: "multiple_choice", question: "¡Ni que ______ (ser) millonario!", options: ["fueras", "eres", "serías"], correct: 0 },
          { type: "multiple_choice", question: "Me asombró que ______ (haber) tanta gente.", options: ["haya", "hubiera", "había"], correct: 1 },
          
          // 15 Sintaxis
          { type: "syntax", turkish: "Bana yardım etmeni istemiştim.", spanish: "Te había pedido que me ayudaras", words: ["Te", "había", "pedido", "que", "me", "ayudaras", "ayudes"] },
          { type: "syntax", turkish: "Gelmemesi ne yazıktı.", spanish: "Fue una lástima que no viniera", words: ["Fue", "una", "lástima", "que", "no", "viniera", "venga"] },
          { type: "syntax", turkish: "İyi olmana sevindim (Me alegró).", spanish: "Me alegró que estuvieras bien", words: ["Me", "alegró", "que", "estuvieras", "bien", "estás"] },
          { type: "syntax", turkish: "Hiçbir şey olmamış gibi girdi.", spanish: "Entró como si no pasara nada", words: ["Entró", "como", "si", "no", "pasara", "nada", "pasó"] },
          { type: "syntax", turkish: "Haberleri bilmene şaşırdım (Me extrañó).", spanish: "Me extrañó que supieras las noticias", words: ["Me", "extrañó", "que", "supieras", "las", "noticias", "sabes"] },
          { type: "syntax", turkish: "Daha çok çalışmanı bekliyordum.", spanish: "Esperaba que trabajaras más", words: ["Esperaba", "que", "trabajaras", "más", "trabajas"] },
          { type: "syntax", turkish: "Her şeyin hazır olmasını istiyorduk.", spanish: "Queríamos que todo estuviera listo", words: ["Queríamos", "que", "todo", "estuviera", "listo", "esté"] },
          { type: "syntax", turkish: "Keşke zengin olsaydım! (Quien fuera...)", spanish: "Quien fuera rico", words: ["Quien", "fuera", "rico", "fui", "era"] },
          { type: "syntax", turkish: "Bunu yapmamanı önermiştim.", spanish: "Te había sugerido que no hicieras esto", words: ["Te", "había", "sugerido", "que", "no", "hicieras", "esto"] },
          { type: "syntax", turkish: "Geç kalmana (onun) kızdım.", spanish: "Me enfadó que llegara tarde", words: ["Me", "enfadó", "que", "llegara", "tarde", "llegas"] },
          { type: "syntax", turkish: "Sessiz olmanıza ihtiyacım vardı.", spanish: "Necesitaba que ustedes hicieran silencio", words: ["Necesitaba", "que", "ustedes", "hicieran", "silencio", "hacen"] },
          { type: "syntax", turkish: "Beni tanımıyormuş gibi baktı.", spanish: "Miró como si no me conociera", words: ["Miró", "como", "si", "no", "me", "conociera", "conoció"] },
          { type: "syntax", turkish: "Sınavı geçmen beni çok heyecanlandırdı (Me ilusionó).", spanish: "Me ilusionó mucho que aprobaras el examen", words: ["Me", "ilusionó", "mucho", "que", "aprobaras", "el", "examen"] },
          { type: "syntax", turkish: "Vaktin olmamasına üzüldüm (Sentir).", spanish: "Sentí que no tuvieras tiempo", words: ["Sentí", "que", "no", "tuvieras", "tiempo", "tienes"] },
          { type: "syntax", turkish: "Yetmezmiş gibi anahtarlarımı kaybettim.", spanish: "Como si fuera poco perdí mis llaves", words: ["Como", "si", "fuera", "poco", "perdí", "mis", "llaves"] }
        ]
      }
    }
  ]
};
/**
 * UNIDAD 12: MAESTRÍA Y GRADUACIÓN (NIVEL A2)
 * El cierre definitivo del bloque A2.
 * Incluye 14 nodos y un examen final de 100 preguntas.
 */

export const unidad12 = {
  id: "a2_u12",
  title: "Unidad 12: Maestría y Graduación",
  description: "Consolidación total del Nivel A2, cultura avanzada y el gran reto final de 100 preguntas.",
  nodes: [
    {
      id: "a2_u12_n1",
      type: "theory",
      title: "Teoría I: Marcadores de Discurso para la Fluidez",
      content: {
        concept: "Para dejar el nivel A2 y entrar al B1, ya no puedes hablar con frases cortas. Necesitas 'conectores de discurso' que den orden, lógica y elegancia a tus ideas.\n\n### 1. Para ordenar el pensamiento:\n• **En primer lugar / Para empezar** (Öncelikle / Başlamak için).\n• **Por un lado / Por otro lado** (Bir yandan / Öte yandan).\n• **Además** (Ayrıca).\n\n### 2. Para contrastar ideas:\n• **Sin embargo / No obstante** (Buna rağmen / Yine de).\n• **A pesar de eso** (Buna rağmen / Ona rağmen).\n\n### 3. Para concluir:\n• **En conclusión / Para terminar / En resumen** (Sonuç olarak / Bitirmek için / Özetle).\n• **Por lo tanto** (Bu yüzden / Dolayısıyla).\n\n💡 REGLA DE ORO: En un examen oficial, usar estos conectores sube tu nota automáticamente porque demuestra que tu cerebro ya organiza el español de forma compleja.",
        examples: [
          { es: "Me gusta mucho España; sin embargo, prefiero vivir en Turquía.", tr: "İspanya'yı çok seviyorum; buna rağmen Türkiye'de yaşamayı tercih ederim." },
          { es: "Él es muy inteligente; además, es una persona muy amable.", tr: "O çok zeki; ayrıca çok nazik bir insan." },
          { es: "No tengo dinero; por lo tanto, no voy a comprar el coche.", tr: "Param yok; bu yüzden arabayı satın almayacağım." }
        ]
      }
    },
    {
      id: "a2_u12_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Conectores",
      exercises: [
        { type: "syntax", turkish: "Öncelikle, teşekkür ederim.", spanish: "En primer lugar gracias", words: ["En", "primer", "lugar", "gracias", "primero"] },
        { type: "syntax", turkish: "Öte yandan, o çok zeki.", spanish: "Por otro lado él es muy inteligente", words: ["Por", "otro", "lado", "él", "es", "muy", "inteligente"] },
        { type: "syntax", turkish: "Buna rağmen, gideceğim.", spanish: "Sin embargo voy a ir", words: ["Sin", "embargo", "voy", "a", "ir", "pero"] },
        { type: "syntax", turkish: "Ayrıca, bir kitap okudu.", spanish: "Además leyó un libro", words: ["Además", "leyó", "un", "libro", "también"] },
        { type: "syntax", turkish: "Bu yüzden çalışmalıyım.", spanish: "Por lo tanto debo estudiar", words: ["Por", "lo", "tanto", "debo", "estudiar", "tengo"] },
        { type: "syntax", turkish: "Sonuç olarak, bitti.", spanish: "En conclusión terminó", words: ["En", "conclusión", "terminó", "acabó"] },
        { type: "syntax", turkish: "Bir yandan, istiyorum.", spanish: "Por un lado lo quiero", words: ["Por", "un", "lado", "lo", "quiero"] },
        { type: "syntax", turkish: "Buna rağmen mutluyum.", spanish: "A pesar de eso soy feliz", words: ["A", "pesar", "de", "eso", "soy", "feliz"] },
        { type: "syntax", turkish: "Özetle, her şey iyi.", spanish: "En resumen todo está bien", words: ["En", "resumen", "todo", "está", "bien"] },
        { type: "syntax", turkish: "Önce yemek yedik.", spanish: "En primer lugar comimos", words: ["En", "primer", "lugar", "comimos"] },
        { type: "speaking", spanish: "Por un lado tengo miedo", turkish: "Bir yandan korkuyorum." },
        { type: "speaking", spanish: "Sin embargo voy a intentarlo", turkish: "Buna rağmen deneyeceğim." },
        { type: "speaking", spanish: "Además hablo un poco de turco", turkish: "Ayrıca biraz Türkçe konuşuyorum." },
        { type: "speaking", spanish: "Por lo tanto no puedo venir", turkish: "Bu yüzden gelemiyorum." },
        { type: "speaking", spanish: "En conclusión fue un éxito", turkish: "Sonuç olarak bir başarıydı." }
      ]
    },
    {
      id: "a2_u12_n3",
      type: "theory",
      title: "Teoría II: El Mundo Laboral y el Currículum",
      content: {
        concept: "En esta etapa final, debes saber cómo presentarte profesionalmente en español.\n\n### Vocabulario de Supervivencia Profesional:\n• **El currículum (CV)**: Tu historial laboral.\n• **La entrevista de trabajo** (Mülakat).\n• **El sueldo / El salario** (Maaş).\n• **Estar en el paro / Estar desempleado** (İşsiz olmak).\n• **Contratar** (İşe almak) / **Despedir** (İşten çıkarmak).\n• **La jornada laboral** (Mesai/İş günü).\n• **El contrato indefinido** (Süresiz sözleşme).\n\n### Frases Útiles:\n- 'Busco un trabajo con un buen sueldo'.\n- 'He enviado mi CV a muchas empresas'.\n- 'Tengo experiencia en el sector turístico'.",
        examples: [
          { es: "Mañana tengo una entrevista de trabajo muy importante.", tr: "Yarın çok önemli bir iş görüşmem var." },
          { es: "Ella está en el paro desde el mes pasado.", tr: "O geçen aydan beri işsiz." },
          { es: "Mi jornada laboral termina a las seis.", tr: "Mesaim saat altıda bitiyor." }
        ]
      }
    },
    {
      id: "a2_u12_n4",
      type: "quiz",
      title: "Práctica II: Vocabulario Profesional",
      exercises: [
        { type: "syntax", turkish: "Yeni bir iş arıyorum.", spanish: "Estoy buscando un trabajo nuevo", words: ["Estoy", "buscando", "un", "trabajo", "nuevo"] },
        { type: "syntax", turkish: "Özgeçmişimi (CV) gönderdim.", spanish: "Envié mi currículum", words: ["Envié", "mi", "currículum", "mandé", "he"] },
        { type: "syntax", turkish: "Maaş çok iyi.", spanish: "El sueldo es muy bueno", words: ["El", "sueldo", "es", "muy", "bueno"] },
        { type: "syntax", turkish: "Mesai saat dörde kadar.", spanish: "La jornada es hasta las cuatro", words: ["La", "jornada", "es", "hasta", "las", "cuatro"] },
        { type: "syntax", turkish: "Patron beni çağırdı.", spanish: "La jefa me llamó", words: ["La", "jefa", "me", "llamó", "dijo"] },
        { type: "syntax", turkish: "O (erkek) şu an işsiz.", spanish: "Él está en el paro ahora", words: ["Él", "está", "en", "el", "paro", "ahora"] },
        { type: "syntax", turkish: "Harika bir iş görüşmesiydi.", spanish: "Fue una entrevista de trabajo excelente", words: ["Fue", "una", "entrevista", "de", "trabajo", "excelente"] },
        { type: "syntax", turkish: "Beni işe alacaklar (Contratar).", spanish: "Ellos me van a contratar", words: ["Ellos", "me", "van", "a", "contratar"] },
        { type: "syntax", turkish: "Maaşımı henüz almadım.", spanish: "Todavía no he recibido mi sueldo", words: ["Todavía", "no", "he", "recibido", "mi", "sueldo"] },
        { type: "syntax", turkish: "Bu büyük bir fırsat.", spanish: "Esta es una gran oportunidad", words: ["Esta", "es", "una", "gran", "oportunidad"] },
        { type: "speaking", spanish: "Tengo una entrevista mañana", turkish: "Yarın bir görüşmem var." },
        { type: "speaking", spanish: "Mi sueldo es suficiente", turkish: "Maaşım yeterli." },
        { type: "speaking", spanish: "Quiero un contrato indefinido", turkish: "Süresiz bir sözleşme istiyorum." },
        { type: "speaking", spanish: "Ella es una jefa muy justa", turkish: "O çok adil bir patron." },
        { type: "speaking", spanish: "He trabajado en Madrid tres años", turkish: "Madrid'de üç yıl çalıştım." }
      ]
    },
    {
      id: "a2_u12_n5",
      type: "theory",
      title: "Teoría III: Dialectología (España vs. Latinoamérica)",
      content: {
        concept: "El español es un idioma gigante. Aunque todos nos entendemos, hay diferencias que un estudiante A2 debe reconocer.\n\n### 1. El Pronombre 'Vosotros':\n• **España**: Se usa 'Vosotros' (Sizler - Informal). Ej: '¿Qué queréis?'.\n• **América**: NUNCA se usa 'Vosotros'. Siempre se usa 'Ustedes'. Ej: '¿Qué quieren?'.\n\n### 2. Diferencias de Vocabulario:\n- **Coche** (España) vs. **Carro / Auto** (América).\n- **Ordenador** (España) vs. **Computadora** (América).\n- **Zumo** (España) vs. **Jugo** (América).\n- **Móvil** (España) vs. **Celular** (América).\n\n### 3. La Pronunciación:\nEn la mayoría de América, la 'Z' y la 'C' (ce, ci) suenan como 'S' (Seseo). En el centro y norte de España tienen un sonido dental (como 'TH' en inglés).",
        examples: [
          { es: "¿Ustedes quieren jugo de naranja? (América)", tr: "Portakal suyu ister misiniz?" },
          { es: "¿Vosotros queréis zumo de naranja? (España)", tr: "Portakal suyu ister misiniz?" }
        ]
      }
    },
    {
      id: "a2_u12_n6",
      type: "theory",
      title: "Teoría IV: Modismos y Slang A2",
      content: {
        concept: "Un nativo no siempre habla literalmente. Aquí tienes las 5 frases hechas más comunes para sonar como una experta:\n\n1. **Estar en las nubes** (Bulutlarda olmak): Estar muy distraído o soñando despierto.\n2. **Meter la pata** (Ayağını sokmak): Cometer un error o decir algo inoportuno (Pot kırmak).\n3. **Tomar el pelo** (Saçını çekmek): Hacer una broma o intentar engañar a alguien (Dalga geçmek).\n4. **Ser pan comido** (Yenmiş ekmek olmak): Ser algo extremadamente fácil (Çocuk oyuncağı).\n5. **Ponerse las pilas** (Pillerini takmar): Trabajar duro o poner energía en algo (Enerji toplamak).",
        examples: [
          { es: "El examen de ayer fue pan comido.", tr: "Dünkü sınav çocuk oyuncağıydı." },
          { es: "Perdón, creo que metí la pata con mi comentario.", tr: "Özür dilerim, sanırım yorumumla pot kırdım." },
          { es: "¡Ponte las pilas con el español!", tr: "İspanyolca için enerjini topla (sıkı çalış)!" }
        ]
      }
    },
    {
      id: "a2_u12_n7",
      type: "reading",
      title: "Lectura Crítica: Crónica de un viaje por los Andes",
      content: {
        text: "Hace dos años, yo ya había planeado mi viaje a Perú, pero no pude ir hasta el verano pasado. Cuando llegué a Cusco, la ciudad era más hermosa de lo que imaginaba. \n\nSin embargo, el primer día me sentí un poco mal por la altura. Mi guía me dijo: 'No te preocupes, esto es normal'. Me dio un té de coca y pronto me puse mejor. Mientras caminaba por las calles antiguas, vi a mucha gente local con ropa de colores vivos. Fue una experiencia increíble porque conocí una cultura muy diferente a la mía.\n\nEn conclusión, fue el mejor viaje de mi vida. Si tengo dinero el próximo año, volveré a Sudamérica para visitar Chile y Argentina. ¡Será fantástico!",
        translation: "İki yıl önce Peru seyahatimi zaten planlamıştım ama geçen yaza kadar gidemedim. Cusco'ya vardığımda şehir hayal ettiğimden daha güzeldi.\n\nBuna rağmen ilk gün yükseklik nedeniyle kendimi biraz kötü hissettim. Rehberim bana 'Endişelenme, bu normal' dedi. Bana bir koka çayı verdi ve kısa sürede iyileştim. Eski sokaklarda yürürken canlı renkli kıyafetler giymiş birçok yerel insan gördüm. Benimkinden çok farklı bir kültürü tanıdığım için inanılmaz bir deneyimdi.\n\nSonuç olarak hayatımın en iyi seyahatiydi. Gelecek yıl param olursa Şili ve Arjantin'i ziyaret etmek için Güney Amerika'ya döneceğim. Harika olacak!"
      }
    },
    {
      id: "a2_u12_n8",
      type: "theory",
      title: "Audio Nativo: Entrevista sobre el Futuro",
      content: {
        concept: "Escucha este fragmento de un podcast imaginario sobre el trabajo en el futuro. Presta atención a cómo el hablante mezcla el futuro simple con conectores de contraste.\n\n'En el futuro, las máquinas harán los trabajos repetitivos. Sin embargo, los humanos siempre tendremos la creatividad. Antes, la gente trabajaba cuarenta años en la misma empresa, pero ahora todo está cambiando. Por lo tanto, tendremos que aprender nuevas habilidades cada día...'",
        examples: []
      }
    },
    {
      id: "a2_u12_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Maestra",
      content: {
        concept: "Analizaremos la frase más compleja del nivel A2. Esta oración mezcla el Pluscuamperfecto (pasado remoto), el Indefinido (acción puntual) y un conector de contraste.\n\nEstructura: **Pluscuamperfecto + Conector + Sujeto + Indefinido**.",
        examples: [{ es: "Yo ya había terminado el informe pero mi jefe me pidió más cambios.", tr: "Raporu zaten bitirmiştim ama patronum benden daha fazla değişiklik istedi." }],
        analysis: [
          { word: "Yo ya había", type: "verb", literal: "Zaten ...miştim", explanation: "Auxiliar del Pluscuamperfecto. Indica una acción muy antigua.", examples: [] },
          { word: "terminado", type: "verb", literal: "bitirmiş", explanation: "Participio regular de terminar.", examples: [] },
          { word: "el informe", type: "noun", literal: "rapor", explanation: "Objeto directo.", examples: [] },
          { word: "pero", type: "connector", literal: "ama", explanation: "Conector de contraste fundamental.", examples: [] },
          { word: "mi jefe", type: "noun", literal: "patronum", explanation: "Sujeto de la segunda acción.", examples: [] },
          { word: "me pidió", type: "verb", literal: "benden istedi", explanation: "Verbo PEDIR en Indefinido con cambio de vocal (e->i) en 3ª persona.", examples: [] }
        ]
      }
    },
    {
      id: "a2_u12_n10",
      type: "theory",
      title: "Taller Final: Carta al Futuro",
      content: {
        concept: "Este es tu reto de graduación escrita. \n\n**Instrucciones:**\n1. Escribe una carta a tu 'Yo' de dentro de 10 años (mínimo 10 líneas).\n2. Explica qué has hecho hasta ahora (Pretérito Perfecto), cómo era tu vida hoy (Imperfecto) y qué esperas lograr en el futuro (Futuro Simple).\n3. Incluye al menos dos modismos (ej: 'Estaré en las nubes').\n\nTu profesor revisará este texto y este será el criterio final para tu diploma A2.",
        examples: []
      }
    },
    {
      id: "a2_u12_n11",
      type: "theory",
      title: "REPASO I: El Laberinto de los 3 Pasados",
      content: {
        concept: "Antes del examen, recuerda el uso de los pasados:\n\n• **He comido (Perfecto)**: Conexión con el presente (Hoy, esta semana, nunca).\n• **Comí (Indefinido)**: Pasado cerrado y puntual (Ayer, en 1990, de repente).\n• **Comía (Imperfecto)**: Descripciones, hábitos, edad y clima (Antes, siempre, tenía 5 años).\n\n💡 RECUERDA: 'Yo **leía** (escenario) cuando mi hermano **entró** (acción)'.",
        examples: []
      }
    },
    {
      id: "a2_u12_n12",
      type: "theory",
      title: "REPASO II: Arquitectura de Pronombres (SE LO)",
      content: {
        concept: "Resumen de pronombres para el examen:\n\n• Orden sagrado: **Persona (OI) + Cosa (OD)**. (Me lo das).\n• Regla fonética: **Le / Les** se convierten en **SE** si van antes de 'Lo, La, Los, Las'. (Se lo doy).\n• Posición: Antes del verbo conjugado O pegado al final del infinitivo/imperativo. (Dámelo / Quiero dárselo).",
        examples: []
      }
    },
    {
      id: "a2_u12_n13",
      type: "theory",
      title: "REPASO III: El Mapa de Verbos Rebeldes",
      content: {
        concept: "No olvides los irregulares clave:\n\n• **Indefinido**: Tuve, Hice (Z!), Supe, Pude, Dije, Traje, Vine, Quise.\n• **Imperfecto**: Era, Iba, Veía.\n• **Futuro**: Tendré, Haré, Diré, Podré, Sabré, Saldré, Vendré.\n• **Participios**: Hecho, Dicho, Visto, Escrito, Roto, Vuelto, Puesto.",
        examples: []
      }
    },
    {
      id: "a2_u12_n14",
      type: "exam",
      title: "MEGA EXAMEN FINAL A2 (100 PREGUNTAS)",
      content: {
        timeLimit: 5400, // 90 minutos
        concept: "Evaluación integral de 100 preguntas. 25 de repaso y 75 maestras. No podrás salir hasta terminar. ¡Mucha suerte, futura bilingüe!",
        exercises: [
          // ==========================================
          // BLOQUE 1: REPASO A2 (1-25)
          // ==========================================
          { type: "multiple_choice", question: "¿Cuál es el participio de HACER?", options: ["Hacido", "Hecho", "Haciendo"], correct: 1 },
          { type: "multiple_choice", question: "Hoy ________ (yo - desayunar) un té turco.", options: ["desayuné", "he desayunado", "había desayunado"], correct: 1 },
          { type: "multiple_choice", question: "Sustituye: 'Doy el libro (lo) a María (le)'.", options: ["Le lo doy", "Se lo doy", "Te lo doy"], correct: 1 },
          { type: "multiple_choice", question: "Pasado de 'Yo (ir)':", options: ["Fui", "Iba", "Voy"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Televizyon izlerdik'?", options: ["Vimos la tele", "Veíamos la tele", "Vemos la tele"], correct: 1 },
          { type: "multiple_choice", question: "Participio de VER:", options: ["Visto", "Veído", "Viendo"], correct: 0 },
          { type: "multiple_choice", question: "Futuro de TENER para 'Yo':", options: ["Teneré", "Tendré", "Tuviera"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Ödevimi yaptım'?", options: ["Hice mi tarea", "Hago mi tarea", "Hecho mi tarea"], correct: 0 },
          { type: "multiple_choice", question: "Terminación de Imperfecto -AR para 'Nosotros':", options: ["-ábamos", "-aríamos", "-abamos"], correct: 0 },
          { type: "multiple_choice", question: "Condicional de DECIR para 'Tú':", options: ["Decirías", "Dirías", "Dijiste"], correct: 1 },
          { type: "multiple_choice", question: "Indefinido de PODER para 'Él':", options: ["Podió", "Pudo", "Pudió"], correct: 1 },
          { type: "multiple_choice", question: "Imperativo de VENIR para 'Tú':", options: ["Viene", "Ven", "Vienes"], correct: 1 },
          { type: "multiple_choice", question: "Si digo 'Onu ona verdim', la traducción correcta es:", options: ["Se lo di", "Le lo di", "Se la di"], correct: 0 },
          { type: "multiple_choice", question: "Cuando era niña ________ (tener) 5 años.", options: ["tuve", "tenía", "teniendo"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es el participio de DECIR?", options: ["Decido", "Dicho", "Diciendo"], correct: 1 },
          { type: "syntax", turkish: "Bugün çok çalıştım.", spanish: "Hoy he trabajado mucho", words: ["Hoy", "he", "trabajado", "mucho", "has"] },
          { type: "syntax", turkish: "Dün sinemaya gittim.", spanish: "Ayer fui al cine", words: ["Ayer", "fui", "al", "cine", "iba"] },
          { type: "syntax", turkish: "Onu (lo) ona (se) söyledim.", spanish: "Se lo dije", words: ["Se", "lo", "dije", "Le", "dijo"] },
          { type: "syntax", turkish: "Çocukken (cuando) çok süt içerdim.", spanish: "Cuando era pequeño bebía mucha leche", words: ["Cuando", "era", "pequeño", "bebía", "mucha", "leche"] },
          { type: "syntax", turkish: "Yarın seni arayacağım.", spanish: "Mañana te llamaré", words: ["Mañana", "te", "llamaré", "llamas"] },
          { type: "syntax", turkish: "Beni aradığında uyuyordum.", spanish: "Cuando me llamaste estaba durmiendo", words: ["Cuando", "me", "llamaste", "estaba", "durmiendo", "dormí"] },
          { type: "syntax", turkish: "Ödevimi çoktan bitirmiştim.", spanish: "Ya había terminado mi tarea", words: ["Ya", "había", "terminado", "mi", "tarea", "he"] },
          { type: "syntax", turkish: "Hemen buraya gel!", spanish: "Ven aquí ahora mismo", words: ["Ven", "aquí", "ahora", "mismo", "vienes"] },
          { type: "syntax", turkish: "Gözlerim acıyor.", spanish: "Me duelen los ojos", words: ["Me", "duelen", "los", "ojos", "duele"] },
          { type: "syntax", turkish: "Senin yerinde olsam giderdim.", spanish: "En tu lugar yo iría", words: ["En", "tu", "lugar", "yo", "iría", "iré"] },

          // ==========================================
          // BLOQUE 2: NUEVOS CONTENIDOS A2+ (26-100)
          // ==========================================
          { type: "multiple_choice", question: "¿Qué conector significa 'Öte yandan'?", options: ["Además", "Por otro lado", "En resumen"], correct: 1 },
          { type: "multiple_choice", question: "Usa un conector: 'Tengo hambre, ______ no tengo dinero'.", options: ["pero", "porque", "además"], correct: 0 },
          { type: "multiple_choice", question: "Significado de 'No obstante':", options: ["Bu yüzden", "Yine de", "Öncelikle"], correct: 1 },
          { type: "multiple_choice", question: "Para concluir un discurso dices:", options: ["Para empezar", "En conclusión", "Por un lado"], correct: 1 },
          { type: "multiple_choice", question: "'Debido a' se usa para expresar:", options: ["Una causa", "Un contraste", "Un tiempo"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Maaş'?", options: ["Sueldo", "Jornada", "Contrato"], correct: 0 },
          { type: "multiple_choice", question: "Si no tienes trabajo, estás:", options: ["En el paro", "En la oficina", "Contratado"], correct: 0 },
          { type: "multiple_choice", question: "'Despedir' a alguien significa:", options: ["İşe almak", "İşten çıkarmak", "Selam vermek"], correct: 1 },
          { type: "multiple_choice", question: "La 'jornada laboral' es:", options: ["El dinero", "El tiempo de trabajo", "Tu jefe"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué envías para buscar trabajo?", options: ["Una carta", "El currículum", "Un regalo"], correct: 1 },
          { type: "multiple_choice", question: "En España dicen 'Coche', ¿qué dicen en México?", options: ["Carro", "Máquina", "Bus"], correct: 0 },
          { type: "multiple_choice", question: "En Argentina usan 'VOS' en lugar de:", options: ["Usted", "Tú", "Nosotros"], correct: 1 },
          { type: "multiple_choice", question: "Si pides 'Zumo' en España, en América pides:", options: ["Refresco", "Jugo", "Agua"], correct: 1 },
          { type: "multiple_choice", question: "En España el sonido de la 'Z' es diferente al de la:", options: ["M", "S", "L"], correct: 1 },
          { type: "multiple_choice", question: "¿Dónde se usa 'Vosotros'?", options: ["Solo en España", "En toda América", "Solo en Argentina"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué significa 'Estar en las nubes'?", options: ["Estar distraído", "Estar feliz", "Tener frío"], correct: 0 },
          { type: "multiple_choice", question: "'Meter la pata' equivale a:", options: ["Tener suerte", "Cometer un error", "Caminar mucho"], correct: 1 },
          { type: "multiple_choice", question: "Si algo es 'Pan comido', es:", options: ["Muy difícil", "Muy fácil", "Delicioso"], correct: 1 },
          { type: "multiple_choice", question: "'Tomar el pelo' significa:", options: ["Cortar el cabello", "Burlarse / Bromear", "Ayudar"], correct: 1 },
          { type: "multiple_choice", question: "'Ponerse las pilas' significa:", options: ["Comprar batería", "Trabajar duro", "Dormir"], correct: 1 },
          { type: "multiple_choice", question: "Ayer ______ (estar) cansada porque no ______ (dormir) nada.", options: ["estaba / había dormido", "estuve / dormí"], correct: 0 },
          { type: "multiple_choice", question: "Cuando ______ (llegar) a casa, mi novio ya ______ (hacer) la cena.", options: ["llegué / había hecho", "llegaba / hizo"], correct: 0 },
          { type: "multiple_choice", question: "Mientras yo ______ (ducharse), el cartero ______ (llamar).", options: ["me duchaba / llamó", "me duché / llamaba"], correct: 0 },
          { type: "multiple_choice", question: "Ayer ______ (ir) al médico porque me ______ (doler) la cabeza.", options: ["fui / dolía", "iba / dolió"], correct: 0 },
          { type: "multiple_choice", question: "Antes ______ (comer) carne, pero ahora soy vegetariana.", options: ["comí", "comía", "como"], correct: 1 },
          { type: "multiple_choice", question: "El año pasado ______ (visitar) Madrid por primera vez.", options: ["visité", "visitaba", "he visitado"], correct: 0 },
          { type: "multiple_choice", question: "Pensaba que ya ______ (tú - volver) de Turquía.", options: ["has vuelto", "habías vuelto"], correct: 1 },
          { type: "multiple_choice", question: "De repente, ______ (empezar) a llover.", options: ["empezaba", "empezó"], correct: 1 },
          { type: "multiple_choice", question: "Eran las diez y ______ (hacer) sol.", options: ["hacía", "hizo"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué ______ (tú - hacer) hoy por la mañana?", options: ["hiciste", "has hecho"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué hora es? No sé, ______ (ser) las tres.", options: ["serán", "son", "serían"], correct: 0 },
          { type: "multiple_choice", question: "Si tuviera dinero, ______ (comprar) un avión.", options: ["compraré", "compraría", "compro"], correct: 1 },
          { type: "multiple_choice", question: "Mañana le ______ (decir - futuro) la verdad.", options: ["diré", "deciré", "dije"], correct: 0 },
          { type: "multiple_choice", question: "¿______ (poder) usted ayudarme, por favor?", options: ["Podría", "Podrá", "Puede"], correct: 0 },
          { type: "multiple_choice", question: "Ellos no ______ (venir - futuro) a la fiesta.", options: ["vendrán", "venerán", "vinieron"], correct: 0 },
          { type: "multiple_choice", question: "Si estudias mucho, ______ (aprobar) el examen.", options: ["aprobarías", "aprobarás", "aprobaste"], correct: 1 },
          { type: "multiple_choice", question: "¿Dónde estará Carlos? ______ (estar) durmiendo.", options: ["Estará", "Estuvo", "Está"], correct: 0 },
          { type: "multiple_choice", question: "Me ______ (gustar) vivir en España algún día.", options: ["gustaría", "gustará", "gustaba"], correct: 0 },
          { type: "multiple_choice", question: "Yo ______ (hacer - futuro) un gran esfuerzo.", options: ["haré", "haceré", "hice"], correct: 0 },
          { type: "multiple_choice", question: "Tú ______ (saber - condicional) qué hacer.", options: ["sabrías", "saberías", "supiste"], correct: 0 },
          { type: "multiple_choice", question: "Sustituye: 'Doy el regalo (lo) a ti (te)'.", options: ["Te lo doy", "Lo te doy", "Se lo doy"], correct: 0 },
          { type: "multiple_choice", question: "Sustituye: 'Digo el secreto (lo) a mi novio (le)'.", options: ["Le lo digo", "Se lo digo", "Te lo digo"], correct: 1 },
          { type: "multiple_choice", question: "¿Dónde va el pronombre en 'Quiero comerlo'?", options: ["Al principio", "Pegado al final", "Ambas son correctas"], correct: 2 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Özür dilerim pot kırdım'?", options: ["Perdón metí la pata", "Gracias metí el pie", "Lo siento metí el brazo"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es la capital de Colombia?", options: ["Madrid", "Bogotá", "Lima"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Bilgisayar' en España?", options: ["Computadora", "Ordenador", "Carro"], correct: 1 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Meyve suyu' en México?", options: ["Zumo", "Jugo", "Refresco"], correct: 1 },
          { type: "multiple_choice", question: "El jefe me ________ (despedir - pasado) ayer.", options: ["despidió", "despedió", "despide"], correct: 0 },
          { type: "multiple_choice", question: "Si vienes a mi casa, ________ (yo - cocinar) pizza.", options: ["cocinaré", "cociné", "cocinaba"], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál es el condicional de HACER para 'Nosotros'?", options: ["Haremos", "Haríamos", "Hacíamos"], correct: 1 },
          { type: "syntax", turkish: "Buna rağmen seyahat edeceğim.", spanish: "Sin embargo voy a viajar", words: ["Sin", "embargo", "voy", "a", "viajar"] },
          { type: "syntax", turkish: "Pot kırdım.", spanish: "Metí la pata", words: ["Metí", "la", "pata", "pie"] },
          { type: "syntax", turkish: "Bu çok kolay.", spanish: "Esto es pan comido", words: ["Esto", "es", "pan", "comido", "panne"] },
          { type: "syntax", turkish: "Mesaim saat altıda bitiyor.", spanish: "Mi jornada termina a las seis", words: ["Mi", "jornada", "termina", "a", "las", "seis"] },
          { type: "syntax", turkish: "Enerji toplamalısın.", spanish: "Tienes que ponerte las pilas", words: ["Tienes", "que", "ponerte", "las", "pilas"] },
          { type: "syntax", turkish: "Sonuç olarak, çok mutluyuz.", spanish: "En conclusión estamos muy felices", words: ["En", "conclusión", "estamos", "muy", "felices"] },
          { type: "syntax", turkish: "Yeni bir iş arıyorum.", spanish: "Estoy buscando un trabajo nuevo", words: ["Estoy", "buscando", "un", "trabajo", "nuevo"] },
          { type: "syntax", turkish: "Özgeçmişimi (CV) yarın göndereceğim.", spanish: "Enviaré mi currículum mañana", words: ["Enviaré", "mi", "currículum", "mañana"] },
          { type: "syntax", turkish: "İspanya'da araba yerine 'coche' derler.", spanish: "En España dicen coche", words: ["En", "España", "dicen", "coche"] },
          { type: "syntax", turkish: "Bu harika bir fırsat.", spanish: "Esta es una gran oportunidad", words: ["Esta", "es", "una", "gran", "oportunidad"] },
          { type: "syntax", turkish: "O (kadın) hayal dünyasında.", spanish: "Ella está en las nubes", words: ["Ella", "está", "en", "las", "nubes", "sol"] },
          { type: "syntax", turkish: "Patronum benden yardım istedi.", spanish: "Mi jefe me pidió ayuda", words: ["Mi", "jefe", "me", "pidió", "ayuda"] },
          { type: "syntax", turkish: "Maaşımı henüz almadım.", spanish: "Todavía no he recibido mi sueldo", words: ["Todavía", "no", "he", "recibido", "mi", "sueldo"] },
          { type: "syntax", turkish: "Yarın bir iş görüşmem var.", spanish: "Mañana tengo una entrevista de trabajo", words: ["Mañana", "tengo", "una", "entrevista", "de", "trabajo"] },
          { type: "syntax", turkish: "Lütfen bana şaka yapma.", spanish: "Por favor no me tomes el pelo", words: ["Por", "favor", "no", "me", "tomes", "el", "pelo"] },
          { type: "syntax", turkish: "O (kadın) geldiğinde ben yemek pişiriyordum.", spanish: "Cuando ella llegó yo cocinaba", words: ["Cuando", "ella", "llegó", "yo", "cocinaba", "cociné"] },
          { type: "syntax", turkish: "Daha önce hiç böyle bir şey görmemiştim.", spanish: "Nunca había visto algo así antes", words: ["Nunca", "había", "visto", "algo", "así", "antes"] },
          { type: "syntax", turkish: "Hava güzeldi ve biz parka gittik.", spanish: "Hacía buen tiempo y fuimos al parque", words: ["Hacía", "buen", "tiempo", "y", "fuimos", "al", "parque"] },
          { type: "syntax", turkish: "Mektubu yazmıştım ama onu kaybettim.", spanish: "Había escrito la carta pero la perdí", words: ["Había", "escrito", "la", "carta", "pero", "la", "perdí"] },
          { type: "syntax", turkish: "Dün arkadaşımla tanıştım.", spanish: "Ayer conocí a mi amigo", words: ["Ayer", "conocí", "a", "mi", "amigo", "conocía"] },
          { type: "syntax", turkish: "Onu (lo) ona (se) yarın vereceğim.", spanish: "Se lo daré mañana", words: ["Se", "lo", "daré", "mañana", "Le", "doy"] },
          { type: "syntax", turkish: "Bunu bana açıklayabilir miydiniz?", spanish: "Podría explicármelo", words: ["Podría", "explicármelo", "explicarlo", "me"] },
          { type: "syntax", turkish: "En iyi arkadaşıma yalan söyleyemezdim.", spanish: "No podría decirle mentiras a mi mejor amigo", words: ["No", "podría", "decirle", "mentiras", "a", "mi", "mejor", "amigo"] },
          { type: "syntax", turkish: "Sınav bitti, ben mezun oldum!", spanish: "El examen terminó yo me gradué", words: ["El", "examen", "terminó", "yo", "me", "gradué", "graduado"] },
          { type: "syntax", turkish: "Öte yandan, her şey yolunda.", spanish: "Por otro lado todo está bien", words: ["Por", "otro", "lado", "todo", "está", "bien"] }
        ]
      }
    }
  ]
};
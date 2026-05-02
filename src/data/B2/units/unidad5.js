/**
 * UNIDAD 5 - NIVEL B2: EL COMUNICADOR INDEPENDIENTE
 * Foco: Voz Pasiva (Pasiva con SER y Pasiva Refleja)
 * Tema: Noticias, hechos históricos y lenguaje formal.
 */

export const unidad5 = {
  id: "b2_u5",
  title: "Unidad 5: Se dice, se comenta...",
  description: "Domina el foco de la noticia. Aprende a usar la voz pasiva y la pasiva refleja para sonar profesional y académico.",
  nodes: [
    {
      id: "b2_u5_n1",
      type: "theory",
      title: "Teoría I: La Pasiva con SER (La Noticia)",
      content: {
        concept: "En español usamos la voz pasiva cuando el **resultado** de la acción es más importante que la persona que la hizo.\n\n### 1. La Estructura Analítica\nSe forma con el verbo **SER** (en cualquier tiempo) + un **PARTICIPIO**.\n\n⚠️ **REGLA DE ORO:** El participio debe concordar en género y número con el sujeto.\n• *El libro fue escritO.*\n• *La carta fue escritA.*\n• *Las leyes fueron escritAS.*\n\n### 2. El Agente\nSi queremos mencionar quién hizo la acción, usamos la preposición **POR**.\n*Ej: América fue descubierta POR Colón.*",
        examples: [
          { es: "El ladrón fue detenido por la policía.", tr: "Hırsız polis tarafından yakalandı." },
          { es: "Las pirámides fueron construidas hace milenios.", tr: "Piramitler milenyumlar önce inşa edildi." },
          { es: "Este cuadro será subastado mañana.", tr: "Este tablo yarın açık artırmaya çıkarılacak." }
        ]
      }
    },
    {
      id: "b2_u5_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Transformación)",
      exercises: [
        { type: "syntax", turkish: "Hırsız (El ladrón) yakalandı (arrestar).", spanish: "El ladrón fue arrestado", words: ["El", "ladrón", "fue", "arrestado", "está", "detuvieron"] },
        { type: "syntax", turkish: "Karar (La decisión) alındó (tomar).", spanish: "La decisión fue tomada", words: ["La", "decisión", "fue", "tomada", "tomó", "hecha"] },
        { type: "syntax", turkish: "Evler (Las casas) inşa edildi (construir).", spanish: "Las casas fueron construidas", words: ["Las", "casas", "fueron", "construidas", "construyó", "están"] },
        { type: "syntax", turkish: "Mektup (La carta) yazıldı (escribir).", spanish: "La carta fue escrita", words: ["La", "carta", "fue", "escrita", "escribió", "hecha"] },
        { type: "syntax", turkish: "Suçlu (El culpable) serbest bırakıldı.", spanish: "El culpable fue liberado", words: ["El", "culpable", "fue", "liberado", "libre", "puso"] },
        { type: "syntax", turkish: "Yeni yasa (La ley) onaylandı (aprobar).", spanish: "La nueva ley fue aprobada", words: ["La", "nueva", "ley", "fue", "aprobada", "aprobó"] },
        { type: "syntax", turkish: "Maç (El partido) iptal edildi (suspender).", spanish: "El partido fue suspendido", words: ["El", "partido", "fue", "suspendido", "está"] },
        { type: "syntax", turkish: "Eserler (Las obras) çalındó (robar).", spanish: "Las obras fueron robadas", words: ["Las", "obras", "fueron", "robadas", "robó"] },
        { type: "syntax", turkish: "Aday (El candidato) seçildi (elegir).", spanish: "El candidato fue elegido", words: ["El", "candidato", "fue", "elegido", "eligió"] },
        { type: "syntax", turkish: "Proje (El proyecto) tamamlandı.", spanish: "El proyecto fue completado", words: ["El", "proyecto", "fue", "completado", "terminó"] }
      ]
    },
    {
      id: "b2_u5_n3",
      type: "theory",
      title: "Teoría II: La Pasiva Refleja (El Rey del SE)",
      content: {
        concept: "La pasiva con 'ser' es formal, pero la **Pasiva Refleja** es la que realmente usamos todos los días.\n\n### Estructura:\n**SE + Verbo en 3ª Persona (Singular o Plural)**\n\n### Concordancia Crucial:\nEl verbo debe concordar con lo que 'se hace'.\n• *SE vendE un coche.* (Bir araba satılıyor).\n• *SE vendEN dos coches.* (İki araba satılıyor).\n\n### ¿Cuándo usarla?\nCuando el sujeto es un objeto o una cosa inanimada y no queremos decir quién hace la acción. Es extremadamente común en anuncios, recetas y carteles.",
        examples: [
          { es: "Se habla español.", tr: "İspanyolca konuşulur." },
          { es: "Se alquilan habitaciones.", tr: "Odalar kiralanır." },
          { es: "Se fundó la ciudad en 1500.", tr: "Şehir 1500'de kuruldu." }
        ]
      }
    },
    {
      id: "b2_u5_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Voz Pública)",
      exercises: [
        { type: "speaking", spanish: "Se necesitan empleados con experiencia", turkish: "Deneyimli çalışanlara ihtiyaç var (aranıyor)." },
        { type: "speaking", spanish: "Se prohibe fumar en todo el edificio", turkish: "Binanın her yerinde sigara içmek yasaktır." },
        { type: "speaking", spanish: "Se han descubierto nuevas pruebas", turkish: "Yeni kanıtlar keşfedildi." },
        { type: "speaking", spanish: "Aquí se venden pasteles caseros", turkish: "Burada ev yapımı pastalar satılır." },
        { type: "speaking", spanish: "Se dice que el examen será difícil", turkish: "Sınavın zor olacağı söyleniyor." },
        { type: "speaking", spanish: "Se busca un traductor de turco", turkish: "Türkçe tercüman aranıyor." },
        { type: "speaking", spanish: "Se firmó el contrato ayer por la tarde", turkish: "Sözleşme dün öğleden sonra imzalandı." },
        { type: "speaking", spanish: "Se cancelaron todos los vuelos", turkish: "Tüm uçuşlar iptal edildi." }
      ]
    },
    {
      id: "b2_u5_n5",
      type: "theory",
      title: "El Reto Turco: Sufijos vs. SE",
      content: {
        concept: "En turco, la pasiva es un sufijo interno del verbo (*Al-ın-mak, Yap-ıl-mak*). En español, usamos una partícula externa (**SE**).\n\n### El Peligro de la Concordancia:\nUn error común del hablante de turco es dejar el verbo siempre en singular, como si fuera una acción impersonal. Pero en la pasiva refleja, si el objeto es plural, el verbo **DEBE** ser plural.\n\n• 🇹🇷 *Evler satıldı.* (Singular/Plural según el caso en turco).\n• 🇪🇸 **Se vendieron las casas.** (Plural obligatorio porque 'las casas' es el sujeto pasivo).\n\nSi dices 'Se vendió las casas', estarás cometiendo un error típico de nivel básico. ¡En B2, el 'SE' debe bailar con el objeto!",
        examples: [
          { es: "Se escucharon gritos.", tr: "Çığlıklar duyuldu." },
          { es: "Se cometieron muchos errores.", tr: "Çok hata yapıldı." }
        ]
      }
    },
    {
      id: "b2_u5_n6",
      type: "reading",
      title: "Lectura Crítica: El Hallazgo de la Ciudad Perdida",
      content: {
        text: "Hace escasos días, se hizo un descubrimiento que cambiará los libros de historia. En las profundidades de la selva, fue hallada una ciudad que se creía mitológica. Se dice que el asentamiento fue abandonado repentinamente hace ocho siglos. \n\nDurante la excavación, se encontraron restos de cerámica y herramientas de oro. El equipo de arqueólogos fue liderado por la doctora Marina Sánchez. Según las primeras investigaciones, se cree que la ciudad fue destruida por una catástrofe natural. Actualmente, se están analizando las pruebas en el laboratorio nacional. Se espera que los resultados sean publicados antes de final de año. Fue una misión que se planeó durante años y que finalmente ha dado sus frutos.",
        translation: "Birkaç gün önce, tarih kitaplarını değiştirecek bir keşif yapıldı (se hizo). Ormanın derinliklerinde, mitolojik olduğuna inanılan bir şehir bulundu (fue hallada). Yerleşimin sekiz yüzyıl önce aniden terk edildiği söyleniyor (se dice).\n\nKazı sırasında seramik kalıntıları ve altın aletler bulundu (se encontraron). Arkeolog ekibi Dr. Marina Sánchez tarafından yönetildi (fue liderado). İlk araştırmalara göre, şehrin doğal bir felaketle yıkıldığına inanılıyor (se cree). Şu anda kanıtlar ulusal laboratuvarda analiz ediliyor (se están analizando). Sonuçların yıl sonundan önce yayınlanması bekleniyor (se espera). Yıllarca planlanan (se planeó) ve sonunda meyvelerini veren bir görevdi."
      }
    },
    {
      id: "b2_u5_n7",
      type: "quiz",
      title: "Práctica III: Desafío Mixto B2 (Alta Densidad)",
      exercises: [
        { type: "syntax", turkish: "Yeni kanıtlar (pruebas) analiz ediliyor (analizar).", spanish: "Se están analizando nuevas pruebas", words: ["Se", "están", "analizando", "nuevas", "pruebas", "está", "haciendo"] },
        { type: "syntax", turkish: "Sonuçlar (Los resultados) yayınlanacak.", spanish: "Los resultados serán publicados pronto", words: ["Los", "resultados", "serán", "publicados", "pronto", "están"] },
        { type: "syntax", turkish: "Daha önce hiç böyle bir şey görülmedi.", spanish: "Nunca se ha visto nada igual", words: ["Nunca", "se", "ha", "visto", "nada", "igual", "vieron"] },
        { type: "syntax", turkish: "Bu okul 1950'de kuruldu (fundar).", spanish: "Esta escuela fue fundada en mil novecientos cincuenta", words: ["Esta", "escuela", "fue", "fundada", "en", "mil", "novecientos", "cincuenta"] },
        { type: "syntax", turkish: "Dün üç kişi yakalandó (detener).", spanish: "Ayer se detuvo a tres personas", words: ["Ayer", "se", "detuvo", "a", "tres", "personas", "detuvieron"] },
        { type: "speaking", spanish: "Se han cometido varios delitos financieros", turkish: "Birkaç mali suç işlendi." },
        { type: "speaking", spanish: "El edificio fue evacuado inmediatamente", turkish: "Bina derhal tahliye edildi." },
        { type: "speaking", spanish: "Se dice que habrá cambios en la ley", turkish: "Yasada değişiklikler olacağı söyleniyor." },
        { type: "speaking", spanish: "Las joyas fueron encontradas en el sótano", turkish: "Mücevherler bodrumda bulundu." },
        { type: "speaking", spanish: "Se prohibieron las manifestaciones en el centro", turkish: "Merkezde gösteriler yasaklandı." }
      ]
    },
    {
      id: "b2_u5_n8",
      type: "theory",
      title: "Teoría III: Pasiva Refleja vs. Impersonal",
      content: {
        concept: "Este es el punto más difícil del nivel B2. ¿Cuándo el verbo va en plural?\n\n### 1. Pasiva Refleja (Hay un objeto que es el sujeto)\n• *Se venden coches.* (Verbo en PLURAL porque 'coches' es el sujeto).\n\n### 2. Impersonal (Se habla de personas específicas con 'A')\nCuando usamos el 'SE' con personas y usamos la preposición **A**, el verbo siempre va en **SINGULAR**.\n• *Se busca A los culpables.* (No 'Se buscan a los culpables').\n• *Se entrevistó A las candidatas.*\n\n**Regla mnemotécnica:** Si ves la letra 'A' después del 'SE', pon el verbo en singular.",
        examples: [
          { es: "Se busca a un traductor.", tr: "Bir tercüman aranıyor." },
          { es: "Se buscan traductores.", tr: "Tercümanlar aranıyor (Pasiva refleja)." }
        ]
      }
    },
    {
      id: "b2_u5_n9",
      type: "theory",
      title: "Sintaxis Visual: Deconstrucción de la Noticia",
      content: {
        concept: "Analizaremos cómo se estructura una frase periodística compleja de alta densidad.",
        examples: [{ es: "Se han suspendido todas las clases debido a que la escuela fue dañada por el temporal.", tr: "Okul fırtına nedeniyle hasar gördüğü için tüm dersler iptal edildi." }],
        analysis: [
          { word: "Se han suspendido", type: "verb", literal: "iptal edildi", explanation: "Pasiva refleja en pretérito perfecto. El verbo va en plural por 'las clases'.", examples: [] },
          { word: "todas las clases", type: "noun", literal: "tüm dersler", explanation: "Sujeto pasivo de la primera parte de la frase.", examples: [] },
          { word: "debido a que", type: "connector", literal: "çünkü / -den dolayı", explanation: "Conector causal formal.", examples: [] },
          { word: "la escuela", type: "noun", literal: "okul", explanation: "Sujeto de la segunda parte.", examples: [] },
          { word: "fue dañada", type: "verb", literal: "hasar gördü", explanation: "Voz pasiva analítica (SER + Participio). Femenino singular por 'la escuela'.", examples: [] },
          { word: "por el temporal.", type: "noun", literal: "fırtına tarafından", explanation: "Complemento agente (quién hizo el daño).", examples: [] }
        ]
      }
    },
    {
      id: "b2_u5_n10",
      type: "theory",
      title: "Caja de Herramientas: Justicia y Ciencia",
      content: {
        concept: "Para usar la pasiva, necesitas verbos de 'proceso'.\n\n• **Detener / Arrestar** (Yakalamak)\n• **Juzgar / Condenar** (Yargılamak / Mahkum etmek)\n• **Inaugurar** (Açılışını yapmak)\n• **Fundar** (Kurmak)\n• **Hallar / Encontrar** (Bulmak)\n• **Publicar** (Yayınlamak)\n• **Aprobar / Rechazar** (Onaylamak / Reddetmek)\n• **Evacuar** (Tahliye etmek)\n• **Subastar** (Açık artırmayla satmak)\n• **Confirmar** (Onaylamak)",
        examples: [
          { es: "El sospechoso fue arrestado esta mañana.", tr: "Şüpheli bu sabah tutuklandı." },
          { es: "Se ha confirmado la noticia oficial.", tr: "Resmi haber onaylandı." },
          { es: "La nueva ley será aprobada el lunes.", tr: "Yeni yasa pazartesi günü onaylanacak." }
        ]
      }
    },
    {
      id: "b2_u5_n11",
      type: "theory",
      title: "Taller de Producción: Reportera por un día",
      content: {
        concept: "Instrucciones: Escribe una breve noticia (10-12 líneas) sobre un evento imaginario en tu ciudad.\n\nDebes incluir:\n1. Al menos 2 frases con **Voz Pasiva con SER** (Ej: Fue descubierto, Fueron detenidos).\n2. Al menos 2 frases con **Pasiva Refleja** (Ej: Se dice, Se encontraron).\n3. Vocabulario de la unidad (arrestar, confirmar, publicar, etc.).\n\n**Inspiración:** 'Se ha reportado un robo en el museo nacional. El cuadro más valioso fue robado durante la noche...'",
        examples: []
      }
    },
    {
      id: "b2_u5_n12",
      type: "exam",
      title: "Examen de Unidad: Se dice, se comenta...",
      content: {
        concept: "Evaluación técnica de la voz pasiva y concordancia con el SE pasivo.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué preposición introduce al AGENTE en la voz pasiva?", options: ["Para", "Por", "De"], correct: 1 },
          { type: "multiple_choice", question: "Las leyes ______ (aprobar - pasado) ayer.", options: ["fue aprobada", "fueron aprobadas", "se aprobó"], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es correcta para plural?", options: ["Se vende pisos", "Se venden pisos", "Se vende a pisos"], correct: 1 },
          { type: "multiple_choice", question: "Se entrevistó ______ las candidatas.", options: ["a", "por", "(nada)"], correct: 0 },
          { type: "multiple_choice", question: "El examen ______ (hacer) por los estudiantes mañana.", options: ["será hecho", "será hacido", "se hará por"], correct: 0 },
          { type: "multiple_choice", question: "Participio de DESCUBRIR:", options: ["Descubrido", "Descubierto", "Descubra"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Se dice que...'?", options: ["Birine söylüyorum", "Söyleniyor ki...", "Dedi ki..."], correct: 1 },
          { type: "multiple_choice", question: "Las pruebas ______ (enviar) por correo el próximo lunes.", options: ["serán enviadas", "se enviarán por", "ambas son correctas"], correct: 2 },
          { type: "multiple_choice", question: "Se ______ (prohibir - plural) las cámaras en el museo.", options: ["prohíbe", "prohíben", "fue prohibido"], correct: 1 },
          { type: "multiple_choice", question: "La ciudad ______ (fundar) en el siglo XII.", options: ["fue fundado", "fue fundada", "se fundó"], correct: 1 },
          { type: "syntax", turkish: "Araba tamir edildi (reparar).", spanish: "El coche fue reparado", words: ["El", "coche", "fue", "reparado", "hizo", "está"] },
          { type: "syntax", turkish: "Kararlar (Las decisiones) alındı (tomar).", spanish: "Se tomaron las decisiones", words: ["Se", "tomaron", "las", "decisiones", "tomó"] },
          { type: "syntax", turkish: "Yeni kanıtlar bulundu (encontrar).", spanish: "Se encontraron nuevas pruebas", words: ["Se", "encontraron", "nuevas", "pruebas", "encontró"] },
          { type: "syntax", turkish: "Bu kitap İspanyolca yazıldı.", spanish: "Este libro fue escrito en español", words: ["Este", "libro", "fue", "escrito", "en", "español"] },
          { type: "syntax", turkish: "Bina tahliye edildi (evacuar).", spanish: "El edificio fue evacuado", words: ["El", "edificio", "fue", "evacuado", "puso"] },
          { type: "syntax", turkish: "Kapılar kapatıldı (cerrar).", spanish: "Las puertas fueron cerradas", words: ["Las", "puertas", "fueron", "cerradas", "cerró"] },
          { type: "syntax", turkish: "Cevaplar biliniyor (saber).", spanish: "Se saben las respuestas", words: ["Se", "saben", "las", "respuestas", "sabe"] },
          { type: "syntax", turkish: "Buna izin verilmez (permitir).", spanish: "No se permite esto", words: ["No", "se", "permite", "esto", "permiten"] },
          { type: "syntax", turkish: "Suçlular yakalandó (detener).", spanish: "Los criminales fueron detenidos", words: ["Los", "criminales", "fueron", "detenidos", "detuvo"] },
          { type: "syntax", turkish: "Her şey onaylandı (confirmar).", spanish: "Todo fue confirmado", words: ["Todo", "fue", "confirmado", "confirmó"] }
        ]
      }
    }
  ]
};
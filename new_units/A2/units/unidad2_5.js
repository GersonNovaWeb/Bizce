export const unidad2_5 = {
  id: "u2_5",
  title: "Unidad 2.5: Ser vs Estar — Ronda 2",
  description: "Los casos que A1 no cubrió. Los adjetivos que cambian de significado según el verbo. El error que persiste hasta B1 si no se trabaja ahora.",
  nodes: [
    {
      id: "u2_5_n1", type: "theory", title: "Repaso rápido: La regla básica",
      content: {
        concept: "Ya conoces la base de Ser vs Estar. Repaso de 30 segundos:\n\nSER → Identidad permanente: quién soy, de dónde soy, cómo soy por naturaleza.\nESTAR → Estado temporal, ubicación, resultado de un cambio.\n\nPero la verdad es que la distinción 'permanente vs temporal' NO siempre funciona. Hay casos donde el criterio es diferente. Eso es lo que aprenderás hoy.\n\n🇹🇷 POR QUÉ ES DIFÍCIL PARA TURCOS:\nEn turco, ambos verbos son simplemente 'olmak' o el sufijo de cópula -(y)im/-(y)sin/-(y)dir. No existe distinción. El cerebro turco no tiene esta categoría, por eso hay que construirla desde cero.",
        examples: [
          { es: "Soy alto. (característica natural)", tr: "Uzun boyluyum. → SER: cómo soy por naturaleza" },
          { es: "Estoy cansado. (estado temporal)", tr: "Yorgunum. → ESTAR: cómo me siento ahora" },
          { es: "Madrid es en España. ❌ → Madrid está en España. ✅", tr: "Madrid İspanya'da. → Ubicación = ESTAR siempre" }
        ]
      }
    },
    {
      id: "u2_5_n2", type: "theory", title: "Los adjetivos que cambian de significado",
      content: {
        concept: "Este es el nivel avanzado de Ser vs Estar. Hay adjetivos que con SER significan una cosa y con ESTAR significan algo completamente distinto.\n\nMemoriza estos 8 pares — son los más frecuentes:\n\n🔴 LISTO:\n• SER listo = ser inteligente (Es muy listo = Es muy inteligente)\n• ESTAR listo = estar preparado (¿Estás listo? = ¿Estás preparado?)\n\n🔴 MALO:\n• SER malo = ser mala persona / de mala calidad\n• ESTAR malo = estar enfermo\n\n🔴 BUENO:\n• SER bueno = ser buena persona / de buena calidad\n• ESTAR bueno = estar delicioso / estar atractivo (coloquial)\n\n🔴 RICO:\n• SER rico = tener mucho dinero\n• ESTAR rico = estar delicioso (comida)\n\n🔴 MUERTO:\n• SER muerto ❌ (no se usa)\n• ESTAR muerto = haber fallecido\n\n🔴 VIVO:\n• SER vivo = ser listo/astuto\n• ESTAR vivo = estar con vida\n\n🔴 ABURRIDO:\n• SER aburrido = ser una persona o cosa que aburre\n• ESTAR aburrido = sentir aburrimiento en este momento\n\n🔴 SEGURO:\n• SER seguro = ser confiable / sin riesgo\n• ESTAR seguro = tener certeza / sentirse seguro",
        examples: [
          { es: "Ese niño es muy listo. (inteligente)\n¿Estás listo para el examen? (preparado)", tr: "O çocuk çok zeki.\nSınava hazır mısın?" },
          { es: "Juan es malo con sus amigos. (mala persona)\nJuan está malo hoy. (enfermo)", tr: "Juan arkadaşlarına karşı kötü.\nJuan bugün hasta." },
          { es: "Esta sopa está muy rica. (deliciosa)\nEsa familia es muy rica. (adinerada)", tr: "Bu çorba çok lezzetli.\nO aile çok zengin." },
          { es: "El tigre está vivo. (con vida)\nEse comerciante es muy vivo. (astuto)", tr: "Kaplan hayatta.\nO tüccar çok kurnaz." }
        ]
      }
    },
    {
      id: "u2_5_n3", type: "theory", title: "El Reto Turco: Ser para eventos",
      content: {
        concept: "Una regla que confunde mucho: SER se usa para ubicar EVENTOS (no personas ni cosas).\n\n🟢 ESTAR = ubicación de personas y cosas\n• El libro está en la mesa.\n• María está en casa.\n• Los niños están en el parque.\n\n🔴 SER = ubicación de eventos (fiestas, reuniones, conciertos, clases)\n• La fiesta ES en mi casa. (NO: está)\n• El concierto ES en el estadio.\n• La reunión ES a las 3.\n• El examen ES mañana.\n\n🇹🇷 EN TURCO: Para ambos casos usas el mismo locativo. En español hay que distinguir.\n\nTRUCO: Si puedes sustituir por 'tiene lugar' → usa SER.\n• La fiesta 'tiene lugar' en mi casa → La fiesta ES en mi casa. ✅",
        examples: [
          { es: "La boda ES en la iglesia. ✅\nLa boda ESTÁ en la iglesia. ❌", tr: "Düğün kilisede (gerçekleşiyor). → Evento = SER" },
          { es: "El banco ESTÁ en la calle Mayor. ✅\nEl banco ES en la calle Mayor. ❌", tr: "Banka Ana Cadde'de (bulunuyor). → Lugar físico = ESTAR" },
          { es: "¿Dónde ES la conferencia?\n¿Dónde ESTÁ el auditorio?", tr: "Konferans nerede (yapılacak)?\nAuditoryum nerede?" }
        ]
      }
    },
    {
      id: "u2_5_n4", type: "theory", title: "Ser y Estar con pasiva y resultado",
      content: {
        concept: "Otro caso avanzado:\n\nSER + participio = VOZ PASIVA (una acción es realizada)\n• La puerta FUE abierta por el ladrón. (El ladrón la abrió)\n• El libro FUE escrito por Cervantes.\n\nESTAR + participio = RESULTADO DE UNA ACCIÓN (el estado resultante)\n• La puerta ESTÁ abierta. (Alguien la abrió y ahora está así)\n• El libro ESTÁ escrito. (Ya fue escrito, está terminado)\n\n🇹🇷 EN TURCO: Esta distinción no existe de la misma manera. Es un concepto nuevo que hay que interiorizar.\n\nTRUCO: Si puedes añadir 'por alguien' → SER. Si describes el estado actual → ESTAR.",
        examples: [
          { es: "La ventana FUE rota por el viento. (acción)\nLa ventana ESTÁ rota. (estado actual)", tr: "Cam rüzgar tarafından kırıldı. (eylem)\nCam kırık. (şu anki durum)" },
          { es: "La carta FUE firmada por el director.\nLa carta ESTÁ firmada. (ya está lista)", tr: "Mektup müdür tarafından imzalandı.\nMektup imzalı. (hazır)" }
        ]
      }
    },
    {
      id: "u2_5_n5", type: "reading", title: "Lectura: La reunión de trabajo",
      content: {
        text: "Hoy es lunes y Andrea está muy ocupada. Ella es directora de una empresa de tecnología.\n\nLa reunión importante es a las 10 en la sala de conferencias. La sala ya está lista y los documentos están preparados.\n\nAndrea es muy lista y siempre está bien organizada. Hoy está un poco nerviosa porque el cliente es muy exigente.\n\n— ¿Estás lista, Andrea? — pregunta su asistente.\n— Sí, estoy lista. ¿Están todos en la sala?\n— Carlos está enfermo y no viene. Pero los demás están ahí.\n— ¡Qué mala suerte! Bueno, la reunión es en diez minutos. Vamos.\n\nLa presentación es excelente. El cliente está muy satisfecho.",
        translation: "Bugün Pazartesi ve Andrea çok meşgul. O bir teknoloji şirketinin direktörü.\n\nÖnemli toplantı saat 10'da konferans salonunda. Salon hazır ve belgeler hazırlanmış durumda.\n\nAndrea çok zeki ve her zaman iyi organize. Bugün biraz gergin çünkü müşteri çok talepkar.\n\n— Hazır mısın Andrea? — asistanı soruyor.\n— Evet, hazırım. Herkes salonda mı?\n— Carlos hasta ve gelmiyor. Ama diğerleri orada.\n— Ne şanssızlık! Tamam, toplantı on dakikaya. Gidelim.\n\nSunum mükemmel. Müşteri çok memnun.\n\n🎯 SER vs ESTAR EN ESTE TEXTO:\n• es lunes (SER: identificar el día)\n• está ocupada (ESTAR: estado temporal)\n• es directora (SER: profesión/identidad)\n• es a las 10 (SER: ubicación de evento)\n• está lista (ESTAR: preparada)\n• es muy lista (SER: inteligente)\n• está enfermo (ESTAR: estado de salud)"
      }
    },
    {
      id: "u2_5_n6", type: "quiz", title: "Práctica: Ser vs Estar Avanzado",
      exercises: [
        { type: "syntax", turkish: "O çok zeki (inteligente).", spanish: "Él es muy listo", words: ["Él", "es", "muy", "listo", "está", "estar"] },
        { type: "syntax", turkish: "Hazır mısın? (preparado)", spanish: "¿Estás listo", words: ["¿Estás", "listo", "¿Eres", "es"] },
        { type: "syntax", turkish: "Bu çorba çok lezzetli.", spanish: "Esta sopa está muy rica", words: ["Esta", "sopa", "está", "muy", "rica", "es"] },
        { type: "syntax", turkish: "Carlos bugün hasta.", spanish: "Carlos está malo hoy", words: ["Carlos", "está", "malo", "hoy", "es", "ser"] },
        { type: "syntax", turkish: "Düğün kilisede (evento).", spanish: "La boda es en la iglesia", words: ["La", "boda", "es", "en", "la", "iglesia", "está"] },
        { type: "syntax", turkish: "Cam kırık (estado actual).", spanish: "La ventana está rota", words: ["La", "ventana", "está", "rota", "es", "fue"] },
        { type: "speaking", spanish: "¿Estás listo para el examen?", turkish: "Sınava hazır mısın?" },
        { type: "speaking", spanish: "La reunión es a las tres.", turkish: "Toplantı saat üçte." },
        { type: "speaking", spanish: "Esta comida está muy rica.", turkish: "Bu yemek çok lezzetli." },
        { type: "speaking", spanish: "El banco está en la calle Mayor.", turkish: "Banka Ana Cadde'de." }
      ]
    },
    {
      id: "u2_5_exam", type: "exam", title: "Examen: Ser vs Estar Ronda 2",
      content: {
        concept: "Demuestra que dominas los casos avanzados de Ser y Estar, incluyendo los adjetivos con doble significado.",
        exercises: [
          { type: "multiple_choice", question: "El niño ___ muy listo. (Es inteligente)", options: ["es", "está", "ser"], correct: 0 },
          { type: "multiple_choice", question: "¿___ listo para salir? (¿Preparado?)", options: ["Estás", "Eres", "Ser"], correct: 0 },
          { type: "multiple_choice", question: "El concierto ___ en el parque. (evento)", options: ["es", "está", "ser"], correct: 0 },
          { type: "multiple_choice", question: "Mi abuela ___ enferma esta semana.", options: ["está", "es", "ser"], correct: 0 },
          { type: "multiple_choice", question: "Este pollo ___ muy rico. (delicioso)", options: ["está", "es", "ser"], correct: 0 },
          { type: "multiple_choice", question: "Mi vecino ___ muy rico. (adinerado)", options: ["es", "está", "estar"], correct: 0 },
          { type: "multiple_choice", question: "La puerta ___ abierta. (estado actual)", options: ["está", "es", "fue"], correct: 0 },
          { type: "multiple_choice", question: "La puerta ___ abierta por el viento. (acción pasiva)", options: ["fue", "está", "es"], correct: 0 },
          { type: "multiple_choice", question: "Pedro ___ aburrido. (le aburre algo ahora)", options: ["está", "es", "ser"], correct: 0 },
          { type: "multiple_choice", question: "Esa película ___ muy aburrida. (en general)", options: ["es", "está", "estar"], correct: 0 },
          { type: "syntax", turkish: "Toplantı saat beşte. (evento)", spanish: "La reunión es a las cinco", words: ["La", "reunión", "es", "a", "las", "cinco", "está"] },
          { type: "syntax", turkish: "O kaplan hayatta.", spanish: "El tigre está vivo", words: ["El", "tigre", "está", "vivo", "es", "ser"] },
          { type: "syntax", turkish: "O çok kurnaz (astuto).", spanish: "Él es muy vivo", words: ["Él", "es", "muy", "vivo", "está", "estar"] },
          { type: "syntax", turkish: "Belgeler hazır.", spanish: "Los documentos están listos", words: ["Los", "documentos", "están", "listos", "son", "ser"] },
          { type: "syntax", turkish: "Bu kitap Cervantes tarafından yazıldı. (pasiva)", spanish: "Este libro fue escrito por Cervantes", words: ["Este", "libro", "fue", "escrito", "por", "Cervantes", "está", "es"] }
        ]
      }
    }
  ]
};

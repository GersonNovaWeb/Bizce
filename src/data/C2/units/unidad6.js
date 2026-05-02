/**
 * UNIDAD 6 - NIVEL C2: EL NATIVO HONORARIO
 * Foco: Eufemismos, Tabúes y Corrección Política.
 * Tema: Pragmática, política, muerte, economía y diplomacia extrema.
 */

export const unidad6 = {
  id: "c2_u6",
  title: "Unidad 6: Lo que no se dice",
  description: "Entiende el idioma invisible. Domina el arte de los eufemismos para hablar de temas tabú como la muerte, el dinero y la política con extrema elegancia.",
  nodes: [
    {
      id: "c2_u6_n1",
      type: "theory",
      title: "Teoría I: La Muerte y la Edad",
      content: {
        concept: "En el nivel C2, la diplomacia es tu mejor arma. En español, usar palabras como 'viejo', 'muerto' o 'ciego' en contextos formales es un tabú absoluto. Utilizamos eufemismos (palabras suaves) para camuflar realidades duras.\n\n### 1. El Tabú de la Muerte\nEn lugar de 'morir', usamos expresiones más poéticas o formales:\n• **Fallecer** (Vefat etmek): Es el término estándar en las noticias y hospitales.\n• **Pasar a mejor vida** (Hakkın rahmetine kavuşmak): Eufemismo religioso/coloquial.\n• **Dejarnos** (Aramızdan ayrılmak): *'El abuelo nos dejó anoche'.*\n• **Una larga penosa enfermedad**: Eufemismo periodístico clásico en España para no decir 'cáncer'.\n\n### 2. El Tabú de la Edad y la Salud\n• ❌ Viejo ➔ ✅ **Persona de la tercera edad / Persona mayor** (Yaşlı / İleri yaş).\n• ❌ Asilo de ancianos ➔ ✅ **Residencia de mayores** (Huzurevi).\n• ❌ Ciego / Sordo ➔ ✅ **Persona invidente / con discapacidad auditiva** (Görme/İşitme engelli birey).\n• ❌ Minusválido ➔ ✅ **Persona con diversidad funcional** (Farklı gelişen birey).",
        examples: [
          { es: "El célebre escritor falleció ayer tras una larga y penosa enfermedad.", tr: "Ünlü yazar uzun ve acı verici bir hastalığın ardından dün vefat etti." },
          { es: "Las políticas del gobierno deben proteger a la tercera edad.", tr: "Hükümet politikaları üçüncü yaşı (yaşlıları) korumalıdır." },
          { es: "Lamentablemente, el paciente pasó a mejor vida esta madrugada.", tr: "Maalesef, hasta bu sabaha karşı daha iyi bir hayata geçti (vefat etti)." }
        ]
      }
    },
    {
      id: "c2_u6_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Suavizando el discurso)",
      exercises: [
        { type: "syntax", turkish: "Hakkın rahmetine kavuştu (Pasar a mejor...).", spanish: "Él ha pasado a mejor vida", words: ["Él", "ha", "pasado", "a", "mejor", "vida", "muerto"] },
        { type: "syntax", turkish: "Büyükbabam dün aramızdan ayrıldı (Dejarnos).", spanish: "Mi abuelo nos dejó ayer", words: ["Mi", "abuelo", "nos", "dejó", "ayer", "murió"] },
        { type: "syntax", turkish: "Yaşlılar yurdu (Residencia de mayores) çok pahalı.", spanish: "La residencia de mayores es muy cara", words: ["La", "residencia", "de", "mayores", "es", "muy", "cara", "viejos"] },
        { type: "syntax", turkish: "Görme engelliler (invidentes) için bir okul.", spanish: "Una escuela para personas invidentes", words: ["Una", "escuela", "para", "personas", "invidentes", "ciegos"] },
        { type: "syntax", turkish: "Başkan dün vefat etti (Fallecer).", spanish: "El presidente falleció ayer", words: ["El", "presidente", "falleció", "ayer", "fallecía"] },
        { type: "syntax", turkish: "Uzun ve acı verici bir hastalık (larga y penosa enfermedad).", spanish: "Sufrió una larga y penosa enfermedad", words: ["Sufrió", "una", "larga", "y", "penosa", "enfermedad"] },
        { type: "syntax", turkish: "Üçüncü yaş (La tercera edad) saygıyı hak eder.", spanish: "La tercera edad merece respeto", words: ["La", "tercera", "edad", "merece", "respeto", "viejos"] },
        { type: "syntax", turkish: "Farklı gelişen bireyler (diversidad funcional).", spanish: "Personas con diversidad funcional", words: ["Personas", "con", "diversidad", "funcional", "minusválidos"] },
        { type: "syntax", turkish: "Huzur içinde yatsın (Descansar en paz).", spanish: "Que descanse en paz", words: ["Que", "descanse", "en", "paz", "descanse"] },
        { type: "syntax", turkish: "Babamın vefatından (el fallecimiento) sonra...", spanish: "Tras el fallecimiento de mi padre", words: ["Tras", "el", "fallecimiento", "de", "mi", "padre", "muerte"] }
      ]
    },
    {
      id: "c2_u6_n3",
      type: "theory",
      title: "Teoría II: Economía, Empleo y Miseria",
      content: {
        concept: "En el mundo corporativo y político, nadie admite un fracaso. Si vas a trabajar en España o Latinoamérica, debes dominar el 'Lenguaje Corporativo' que oculta las malas noticias económicas.\n\n### 1. El Tabú del Despido y el Desempleo\n• ❌ Despido masivo (Toplu işten çıkarma) ➔ ✅ **Reajuste de plantilla / Reestructuración** (Kadro düzenlemesi / Yeniden yapılanma).\n• ❌ Parados / Desempleados (İşsizler) ➔ ✅ **Personas en búsqueda activa de empleo** (Aktif iş arayan kişiler).\n\n### 2. El Tabú de la Pobreza y la Crisis\n• ❌ Crisis económica (Kriz) ➔ ✅ **Desaceleración / Crecimiento negativo** (Yavaşlama / Negatif büyüme).\n• ❌ Países pobres (Fakir ülkeler) ➔ ✅ **Países en vías de desarrollo** (Gelişmekte olan ülkeler).\n• ❌ Pobres / Vagabundos (Fakirler / Evsizler) ➔ ✅ **Personas en riesgo de exclusión social** (Sosyal dışlanma riski altındaki kişiler).\n• ❌ Subir los impuestos (Vergileri artırmak) ➔ ✅ **Ajuste fiscal** (Mali düzenleme).",
        examples: [
          { es: "La empresa anunció un reajuste de plantilla que afectará a cien trabajadores.", tr: "Şirket, yüz çalışanı etkileyecek bir kadro daraltması (toplu işten çıkarma) duyurdu." },
          { es: "El gobierno implementará un ajuste fiscal debido al crecimiento negativo.", tr: "Hükümet, negatif büyüme (ekonomik kriz) nedeniyle bir mali düzenleme (vergi artışı) uygulayacak." }
        ]
      }
    },
    {
      id: "c2_u6_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Diplomacia Corporativa)",
      exercises: [
        { type: "speaking", spanish: "Anunciaron una reestructuración de la empresa", turkish: "Şirketin yeniden yapılanacağını (toplu işten çıkarma) duyurdular." },
        { type: "speaking", spanish: "Se aprobó un nuevo ajuste fiscal", turkish: "Yeni bir mali düzenleme (vergi artışı) onaylandı." },
        { type: "speaking", spanish: "Son personas en riesgo de exclusión social", turkish: "Sosyal dışlanma riski altındaki kişilerdir (yoksullar)." },
        { type: "speaking", spanish: "La economía sufrió un crecimiento negativo", turkish: "Ekonomi negatif bir büyüme (kriz) yaşadı." },
        { type: "speaking", spanish: "Debemos ayudar a los países en vías de desarrollo", turkish: "Gelişmekte olan ülkelere yardım etmeliyiz." },
        { type: "speaking", spanish: "Estoy en búsqueda activa de empleo", turkish: "Aktif olarak iş arıyorum (işsizim)." },
        { type: "speaking", spanish: "Se prevé una desaceleración económica", turkish: "Ekonomik bir yavaşlama (krizin başlangıcı) öngörülüyor." },
        { type: "speaking", spanish: "Hubo un reajuste de plantilla inminente", turkish: "Yaklaşan bir kadro daraltması (işten çıkarma) vardı." },
        { type: "speaking", spanish: "Los precios sufrieron una actualización", turkish: "Fiyatlar bir güncellemeye (zam) maruz kaldı." },
        { type: "speaking", spanish: "El proyecto se encuentra en fase de reevaluación", turkish: "Proje yeniden değerlendirme aşamasında (iptal edilebilir)." }
      ]
    },
    {
      id: "c2_u6_n5",
      type: "theory",
      title: "El Reto Turco: La Directitud vs. La Sensibilidad",
      content: {
        concept: "En este nivel, el choque cultural es gigante. En Turquía y en muchos países de Medio Oriente, referirse a las características físicas de alguien de manera directa no siempre se considera un insulto grave.\n\n🇹🇷 **En Turco:** Es relativamente normal decir 'O şişman çocuk' (Ese niño gordo), 'Kel adam' (El hombre calvo) o 'Çirkin' (Feo) en conversaciones diarias.\n\n🇪🇸 **En Español C2:** ¡CUIDADO! Usar adjetivos como 'Gordo', 'Calvo', 'Viejo' o 'Feo' directamente es un **tabú social inmenso** que te hará parecer muy rudo o maleducado. Usamos eufemismos incluso con amigos:\n\n• ❌ Gordo ➔ ✅ **Fuertecito / Entrado en carnes / Hermoso** (Balık etli / İri yapılı).\n• ❌ Calvo ➔ ✅ **Con poco pelo / Con entradas** (Saçı seyrek).\n• ❌ Feo ➔ ✅ **Poco agraciado / De belleza distraída** (Pek cazip olmayan / Güzellikten yana şanssız).\n\n💡 TRUCO: Los hispanos también usamos diminutivos para suavizar (gordito, bajito, viejito) y que no suene a insulto.",
        examples: [
          { es: "Mi tío está un poco entrado en carnes.", tr: "Amcam biraz balık etli (şişman)." },
          { es: "Ese actor es simpático, pero un poco poco agraciado.", tr: "O aktör sempatik ama pek de yakışıklı değil (çirkin)." }
        ]
      }
    },
    {
      id: "c2_u6_n6",
      type: "reading",
      title: "Lectura Crítica: El Comunicado de Prensa",
      content: {
        text: "Estimados accionistas e inversores:\n\nNos dirigimos a ustedes para informarles sobre el balance del último trimestre. Como es de conocimiento público, el sector se enfrenta a una coyuntura económica desafiante. Debido al crecimiento negativo de las ventas y a la desaceleración del mercado internacional, nos vemos abocados a implementar una optimización de nuestros recursos humanos.\n\nLamentablemente, este necesario reajuste de plantilla afectará al 15% de nuestros colaboradores. Queremos subrayar que la compañía ofrecerá programas de transición para apoyar a aquellos que se encuentren en búsqueda activa de empleo. \n\nAsimismo, en aras de mantener la sostenibilidad financiera, el gobierno ha aprobado un reciente ajuste fiscal que nos obligará a llevar a cabo una actualización de nuestras tarifas. Agradecemos su comprensión durante este periodo de transición estratégica.",
        translation: "Saygıdeğer hissedarlar ve yatırımcılar:\n\nSon çeyreğin bilançosu hakkında sizleri bilgilendirmek için yazıyoruz. Kamuoyunun bildiği üzere, sektör zorlu bir ekonomik konjonktürle karşı karşıyadır. Satışlardaki negatif büyüme (düşüş/kriz) ve uluslararası pazarın yavaşlaması nedeniyle, insan kaynaklarımızda bir optimizasyon (işten çıkarmalar) uygulamak zorunda kalıyoruz.\n\nMaalesef, bu gerekli kadro daraltması (reajuste de plantilla) çalışanlarımızın %15'ini etkileyecektir. Şirketin, aktif olarak iş arayanlara (işsiz kalanlara) destek olmak için geçiş programları sunacağının altını çizmek isteriz.\n\nAyrıca, finansal sürdürülebilirliği korumak adına, hükümet tarifelerimizde bir güncelleme (zam) yapmamızı zorunlu kılacak yeni bir mali düzenlemeyi (vergi artışını) onayladı. Bu stratejik geçiş döneminde anlayışınız için teşekkür ederiz."
      }
    },
    {
      id: "c2_u6_n7",
      type: "quiz",
      title: "Práctica III: Desafío de Comprensión Inferencial",
      exercises: [
        { type: "multiple_choice", question: "En el texto, ¿qué significa realmente 'Crecimiento negativo de las ventas'?", options: ["Que las ventas aumentaron pero son malas.", "Que las ventas disminuyeron / Hay pérdidas.", "Que no hubo ventas."], correct: 1 },
        { type: "multiple_choice", question: "¿Qué eufemismo usa la empresa para decir 'Vamos a despedir gente'?", options: ["Desaceleración del mercado.", "Actualización de tarifas.", "Optimización de recursos humanos / Reajuste de plantilla."], correct: 2 },
        { type: "multiple_choice", question: "Si la empresa habla de una 'actualización de tarifas', ¿qué va a hacer realmente?", options: ["Bajar los precios.", "Modernizar el diseño de los precios.", "Subir los precios (Hacerlos más caros)."], correct: 2 },
        { type: "multiple_choice", question: "Alguien 'entrado en carnes' es una persona:", options: ["Que come mucha carne.", "Que es un poco gorda (eufemismo).", "Que trabaja en una carnicería."], correct: 1 },
        { type: "syntax", turkish: "İnsan kaynakları optimizasyonu (optimización).", spanish: "Optimización de recursos humanos", words: ["Optimización", "de", "recursos", "humanos", "despido"] },
        { type: "syntax", turkish: "Biraz güzellikten yana şanssız (poco agraciado).", spanish: "Es un poco poco agraciado", words: ["Es", "un", "poco", "poco", "agraciado", "feo"] },
        { type: "syntax", turkish: "Tarifelerin güncellenmesi (actualización).", spanish: "Actualización de las tarifas", words: ["Actualización", "de", "las", "tarifas", "subida"] }
      ]
    },
    {
      id: "c2_u6_n8",
      type: "theory",
      title: "Teoría III: Eufemismos en la Política y la Guerra",
      content: {
        concept: "El estado y los medios de comunicación han creado un vocabulario específico para que la guerra y la represión suenen como procesos burocráticos y pacíficos.\n\n### El Diccionario del Poder:\n• ❌ Guerra ➔ ✅ **Intervención militar / Operación de paz** (Askeri müdahale / Barış operasyonu).\n• ❌ Víctimas civiles / Muertos inocentes ➔ ✅ **Daños colaterales** (İkincil hasar / Tali zararlar).\n• ❌ Matar a tus propios soldados ➔ ✅ **Fuego amigo** (Dost ateşi).\n• ❌ Secuestro / Chantaje ➔ ✅ **Retención ilegal / Retención en contra de su voluntad** (Yasadışı alıkoyma).\n• ❌ Censura ➔ ✅ **Filtro de contenido / Regulación informativa** (İçerik filtreleme).\n• ❌ Interrogatorio con tortura ➔ ✅ **Técnicas de interrogatorio mejoradas** (Geliştirilmiş sorgulama teknikleri).",
        examples: [
          { es: "El ministerio lamentó los daños colaterales de la intervención militar.", tr: "Bakanlık, askeri müdahalenin ikincil hasarlarından (sivil kayıplarından) üzüntü duyduğunu belirtti." },
          { es: "El periodista fue retenido en contra de su voluntad.", tr: "Gazeteci kendi iradesi dışında alıkonuldu (kaçırıldı)." }
        ]
      }
    },
    {
      id: "c1_u6_n9",
      type: "theory",
      title: "Sintaxis Visual: El Arte de la Excusa Política",
      content: {
        concept: "Vamos a deconstruir una frase de un portavoz gubernamental donde se utilizan tres eufemismos y la voz pasiva para diluir completamente la responsabilidad moral de una acción.",
        examples: [{ es: "Se nos ha notificado que, durante la intervención de pacificación, se produjeron algunos daños colaterales debido a un episodio de fuego amigo.", tr: "Barışı sağlama müdahalesi sırasında, bir dost ateşi olayı nedeniyle bazı ikincil hasarlar (sivil/savaş dışı kayıplar) meydana geldiği bize bildirildi." }],
        analysis: [
          { word: "Se nos ha notificado", type: "verb", literal: "Bize bildirildi", explanation: "Pasiva impersonal (Nosotros solo recibimos la noticia, no somos los actores activos).", examples: [] },
          { word: "que, durante la intervención de pacificación,", type: "phrase", literal: "ki, barışı sağlama müdahalesi sırasında,", explanation: "Eufemismo bélico. Suaviza la palabra 'invasión' o 'guerra'.", examples: [] },
          { word: "se produjeron", type: "verb", literal: "meydana geldi (üretildi)", explanation: "Verbo pronominal que sugiere que los eventos ocurrieron solos, como un accidente de la naturaleza.", examples: [] },
          { word: "algunos daños colaterales", type: "noun", literal: "bazı ikincil hasarlar", explanation: "El gran eufemismo militar para no mencionar víctimas civiles o destrucción de infraestructura.", examples: [] },
          { word: "debido a", type: "connector", literal: "nedeniyle", explanation: "Conector causal formal.", examples: [] },
          { word: "un episodio", type: "noun", literal: "bir bölüm / olay", explanation: "Minimiza la gravedad del error reduciéndolo a un hecho aislado.", examples: [] },
          { word: "de fuego amigo.", type: "noun", literal: "dost ateşi", explanation: "Eufemismo que esconde el hecho de que mataron a sus propias tropas por error de cálculo." }
        ]
      }
    },
    {
      id: "c2_u6_n10",
      type: "theory",
      title: "Caja de Herramientas: Traductor de Tabúes",
      content: {
        concept: "Memoriza este glosario para sobrevivir en ambientes de alto estatus social o político:\n\n• **Conflicto armado** ➔ (Guerra / Savaş)\n• **Establecimiento penitenciario / Centro de reinserción** ➔ (Cárcel / Hapishane)\n• **Sustancias ilícitas / Estupefacientes** ➔ (Drogas / Uyuşturucu)\n• **Faltar a la verdad** ➔ (Mentir / Yalan söylemek - *'El ministro faltó a la verdad'*).\n• **Persona con movilidad reducida** ➔ (Inválido / Engelli)\n• **Países del Tercer Mundo** ➔ Usar siempre: **Países en vías de desarrollo**.\n• **Apropiación indebida** ➔ (Robo por parte de un político / Zimmete para geçirme).",
        examples: [
          { es: "El funcionario fue acusado de apropiación indebida de fondos.", tr: "Memur, fonları zimmetine geçirmekle (hırsızlıkla) suçlandı." },
          { es: "Queda prohibido introducir sustancias ilícitas en el centro de reinserción.", tr: "Hapishaneye uyuşturucu sokmak yasaktır." }
        ]
      }
    },
    {
      id: "c2_u6_n11",
      type: "theory",
      title: "Taller de Producción: El Portavoz Oficial",
      content: {
        concept: "Ha llegado el momento de practicar la corrección política extrema.\n\n**Instrucciones:**\nImagina que eres la portavoz de una gran multinacional o del gobierno. Tienes que emitir un comunicado de prensa de 10-12 líneas explicando que:\n1. Las ganancias cayeron por una crisis (usa 'desaceleración' o 'crecimiento negativo').\n2. Van a despedir a 500 personas (usa 'reajuste de plantilla' y 'optimización').\n3. La culpa no es vuestra, es un daño inevitable (usa la voz pasiva: 'se ha decidido').\n4. Cierra diciendo que apoyarán a los que buscan trabajo de nuevo.\n\n**Inspiración:** 'Estimados medios: Debido a la actual desaceleración económica global, nos vemos abocados a...'",
        examples: []
      }
    },
    {
      id: "c2_u6_n12",
      type: "exam",
      title: "Examen de Unidad: Lo que no se dice",
      content: {
        concept: "Demuestra que tienes la sensibilidad y la destreza léxica de un nativo para sortear los tabúes sociales, políticos y corporativos sin perder la elegancia.",
        exercises: [
          { type: "multiple_choice", question: "¿Qué eufemismo usarías en un funeral en lugar de 'Murió'?", options: ["Pasó a mejor vida / Falleció", "Tuvo daños colaterales", "Cesó su actividad"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo llamaría un político a una 'Guerra' para que suene menos agresiva?", options: ["Ajuste fiscal", "Reajuste de plantilla", "Intervención militar / Operación de paz"], correct: 2 },
          { type: "multiple_choice", question: "Si alguien es 'Un poco entrado en carnes', significa que:", options: ["Es carnicero.", "Está un poco gordo (Eufemismo).", "Es muy agresivo."], correct: 1 },
          { type: "multiple_choice", question: "En un informe, ¿qué significa 'Reajuste de plantilla'?", options: ["Subir los sueldos a todos.", "Despedir a muchos empleados (İşten çıkarma).", "Cambiar los muebles de la oficina."], correct: 1 },
          { type: "multiple_choice", question: "En vez de llamar a alguien 'Viejo', la forma políticamente correcta es:", options: ["Persona mayor / De la tercera edad", "Antiguo", "Desacelerado"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué son los 'Daños colaterales' en el lenguaje militar?", options: ["Vehículos rotos.", "Víctimas civiles inocentes y destrucción no planeada.", "Daños a las armas."], correct: 1 },
          { type: "multiple_choice", question: "Si un político es acusado de 'Faltar a la verdad', lo están acusando de:", options: ["Mentir (Yalan söylemek).", "Robar.", "Llegar tarde."], correct: 0 },
          { type: "multiple_choice", question: "¿Qué eufemismo se usa en vez de 'Droga' en las noticias policiales?", options: ["Medicinas fuertes", "Sustancias ilícitas / Estupefacientes", "Elementos extraños"], correct: 1 },
          { type: "multiple_choice", question: "La forma correcta de referirse a los 'Países pobres' hoy en día es:", options: ["Países sin recursos", "Países del Tercer Mundo", "Países en vías de desarrollo"], correct: 2 },
          { type: "multiple_choice", question: "¿Qué significa que la economía tiene un 'Crecimiento negativo'?", options: ["Que crece hacia abajo (una recesión o crisis).", "Que crece muy rápido.", "Que los números son falsos."], correct: 0 },
          
          { type: "syntax", turkish: "Uzun ve acı verici bir hastalık (enfermedad) geçirdi (sufrió).", spanish: "Sufrió una larga y penosa enfermedad", words: ["Sufrió", "una", "larga", "y", "penosa", "enfermedad", "murió"] },
          { type: "syntax", turkish: "Hükümet mali bir düzenleme (ajuste fiscal) yapacak (hacer).", spanish: "El gobierno hará un ajuste fiscal", words: ["El", "gobierno", "hará", "un", "ajuste", "fiscal", "impuestos"] },
          { type: "syntax", turkish: "Görme engelliler (personas invidentes) için bir merkez (centro).", spanish: "Un centro para personas invidentes", words: ["Un", "centro", "para", "personas", "invidentes", "ciegos"] },
          { type: "syntax", turkish: "Sivil kayıplardan (daños colaterales) üzüntü duyuyoruz (Lamentamos).", spanish: "Lamentamos los daños colaterales", words: ["Lamentamos", "los", "daños", "colaterales", "muertos"] },
          { type: "syntax", turkish: "İnsan kaynakları optimizasyonu (optimización) gerekliydi.", spanish: "La optimización de recursos humanos era necesaria", words: ["La", "optimización", "de", "recursos", "humanos", "era", "necesaria", "despidos"] },
          { type: "syntax", turkish: "Aktif olarak iş arıyor (búsqueda activa).", spanish: "Está en búsqueda activa de empleo", words: ["Está", "en", "búsqueda", "activa", "de", "empleo", "paro"] },
          { type: "syntax", turkish: "Biraz güzellikten yana şanssız (poco agraciado).", spanish: "Es un poco poco agraciado", words: ["Es", "un", "poco", "poco", "agraciado", "feo"] },
          { type: "syntax", turkish: "Yasadışı alıkonuldu (Retenido).", spanish: "Fue retenido en contra de su voluntad", words: ["Fue", "retenido", "en", "contra", "de", "su", "voluntad", "secuestrado"] },
          { type: "syntax", turkish: "Hapishaneye (centro de reinserción) taşındı (trasladar).", spanish: "Fue trasladado al centro de reinserción", words: ["Fue", "trasladado", "al", "centro", "de", "reinserción", "cárcel"] },
          { type: "syntax", turkish: "Ekonomik bir yavaşlama (desaceleración) gözlemleniyor (Se observa).", spanish: "Se observa una desaceleración económica", words: ["Se", "observa", "una", "desaceleración", "económica", "crisis"] }
        ]
      }
    }
  ]
};
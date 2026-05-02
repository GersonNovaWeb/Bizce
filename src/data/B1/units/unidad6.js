/**
 * UNIDAD 6: EL BUSCADOR (ORACIONES DE RELATIVO) - NIVEL B1
 * Enfoque: Uso del Subjuntivo para cosas desconocidas/buscadas vs. Indicativo para cosas conocidas.
 * Estructura: 12 Nodos Premium.
 */

export const unidad6 = {
  id: "b1_u6",
  title: "Unidad 6: El Buscador",
  description: "Aprende a describir lo que buscas. Descubre cómo el Subjuntivo expresa cosas que no sabemos si existen.",
  nodes: [
    {
      id: "b1_u6_n1",
      type: "theory",
      title: "Teoría I: El Radar del Subjuntivo",
      content: {
        concept: "En español, a menudo conectamos dos frases usando la palabra **QUE** para describir un objeto o a una persona. La regla del tiempo verbal que usamos después del 'QUE' funciona como un radar:\n\n### 1. El Radar Encuentra (INDICATIVO)\nSi la cosa o persona ya existe, es concreta y la conoces, usamos el verbo normal.\n• *Tengo una casa que **TIENE** jardín.* (Bahçesi olan bir evim var ➔ La casa existe, es real).\n• *Conozco a una chica que **HABLA** ruso.* (Kız gerçek, onu tanıyorum).\n\n### 2. El Radar Busca (SUBJUNTIVO)\nSi estás buscando algo, necesitas algo, o quieres cualquier cosa que cumpla una condición (pero no sabes si existe), usamos Subjuntivo.\n• *Busco una casa que **TENGA** jardín.* (Bahçesi olan bir ev arıyorum ➔ No tengo la casa, es una idea en mi cabeza).\n• *Necesito una secretaria que **HABLE** ruso.* (Cualquier secretaria, no conozco a ninguna todavía).",
        examples: [
          { es: "Busco un coche que sea barato. (No sé si existe)", tr: "Ucuz olan bir araba arıyorum." },
          { es: "He comprado un coche que es barato. (El coche ya existe)", tr: "Ucuz olan bir araba satın aldım." },
          { es: "Quiero un novio que sepa cocinar. (El candidato ideal)", tr: "Yemek yapmayı bilen bir erkek arkadaş istiyorum." }
        ]
      }
    },
    {
      id: "b1_u6_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Sintaxis (Búsqueda vs. Realidad)",
      exercises: [
        { type: "syntax", turkish: "İngilizce konuşan birini arıyorum.", spanish: "Busco a alguien que hable inglés", words: ["Busco", "a", "alguien", "que", "hable", "inglés", "habla"] },
        { type: "syntax", turkish: "İngilizce konuşan bir arkadaşım var (Tener).", spanish: "Tengo un amigo que habla inglés", words: ["Tengo", "un", "amigo", "que", "habla", "inglés", "hable"] },
        { type: "syntax", turkish: "Çok rahat olan bir daire (piso) istiyorum.", spanish: "Quiero un piso que sea muy cómodo", words: ["Quiero", "un", "piso", "que", "sea", "muy", "cómodo", "es"] },
        { type: "syntax", turkish: "Balkonu olan (Tener) bir ev kiraladık.", spanish: "Alquilamos una casa que tiene balcón", words: ["Alquilamos", "una", "casa", "que", "tiene", "balcón", "tenga"] },
        { type: "syntax", turkish: "Denize yakın olan bir otel arıyoruz.", spanish: "Buscamos un hotel que esté cerca del mar", words: ["Buscamos", "un", "hotel", "que", "esté", "cerca", "del", "mar", "está"] },
        { type: "syntax", turkish: "Sarı saçlı olan bir kız tanıyorum.", spanish: "Conozco a una chica que tiene el pelo rubio", words: ["Conozco", "a", "una", "chica", "que", "tiene", "el", "pelo", "rubio"] },
        { type: "syntax", turkish: "Bize yardım edebilecek (Poder) birine ihtiyacım var.", spanish: "Necesito a alguien que pueda ayudarnos", words: ["Necesito", "a", "alguien", "que", "pueda", "ayudarnos", "puede"] },
        { type: "syntax", turkish: "Bugün çalışmayan bir restoran biliyorum (Saber).", spanish: "Sé de un restaurante que no trabaja hoy", words: ["Sé", "de", "un", "restaurante", "que", "no", "trabaja", "hoy", "trabaje"] },
        { type: "syntax", turkish: "Karanlıkta parlayan (Brillar) bir saat istiyorum.", spanish: "Quiero un reloj que brille en la oscuridad", words: ["Quiero", "un", "reloj", "que", "brille", "en", "la", "oscuridad", "brilla"] },
        { type: "syntax", turkish: "Büyük ekranı olan bir telefon aldım.", spanish: "Compré un teléfono que tiene la pantalla grande", words: ["Compré", "un", "teléfono", "que", "tiene", "la", "pantalla", "grande", "tenga"] }
      ]
    },
    {
      id: "b1_u6_n3",
      type: "theory",
      title: "Teoría II: La Nada Absoluta",
      content: {
        concept: "Si estamos buscando algo y usamos Subjuntivo, ¿qué pasa cuando declaramos que algo **NO EXISTE**?\n\n¡La regla es aún más fuerte! Cuando negamos la existencia de algo o alguien (usando palabras como Nadie, Ningún/Ninguna, Nada), es **100% OBLIGATORIO** usar el Subjuntivo.\n\n• *No hay nadie que **SEPA** la respuesta.* (Cevabı bilen kimse yok). No puedes decir 'sabe' porque esa persona no existe en la realidad.\n• *No conozco ningún restaurante que **SIRVA** kebab aquí.* (Burada kebap servis eden hiçbir restoran tanımıyorum).\n• *No hay nada que me **GUSTE** en esta tienda.* (Bu mağazada hoşuma giden hiçbir şey yok).",
        examples: [
          { es: "Hay alguien que quiere hablar contigo. (Afirmativo = Indicativo)", tr: "Seninle konuşmak isteyen biri var." },
          { es: "No hay nadie que quiera hablar contigo. (Negativo = Subjuntivo)", tr: "Seninle konuşmak isteyen kimse yok." },
          { es: "No encuentro ninguna chaqueta que me quede bien.", tr: "Bana (üzerime) uyan hiçbir ceket bulamıyorum." }
        ]
      }
    },
    {
      id: "b1_u6_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (Nadie y Nada)",
      exercises: [
        { type: "speaking", spanish: "No hay nadie que hable turco aquí", turkish: "Burada Türkçe konuşan kimse yok." },
        { type: "speaking", spanish: "No veo nada que sea interesante", turkish: "İlginç olan hiçbir şey görmüyorum." },
        { type: "speaking", spanish: "No conozco a nadie que viva en Madrid", turkish: "Madrid'de yaşayan kimseyi tanımıyorum." },
        { type: "speaking", spanish: "No hay ningún problema que no tenga solución", turkish: "Çözümü olmayan hiçbir problem yoktur." },
        { type: "speaking", spanish: "Tengo un amigo que vive en Madrid", turkish: "Madrid'de yaşayan bir arkadaşım var. (Gerçek)" },
        { type: "speaking", spanish: "No tenemos a nadie que nos ayude", turkish: "Bize yardım edecek kimsemiz yok." },
        { type: "speaking", spanish: "Busco a alguien que entienda de ordenadores", turkish: "Bilgisayarlardan anlayan birini arıyorum." },
        { type: "speaking", spanish: "No hay nadie que pueda hacer esto", turkish: "Bunu yapabilecek kimse yok." },
        { type: "speaking", spanish: "¿Hay alguien que tenga un bolígrafo?", turkish: "Tükenmez kalemi olan biri var mı?" },
        { type: "speaking", spanish: "No hay nada que me importe más", turkish: "Benim için daha önemli olan hiçbir şey yok." }
      ]
    },
    {
      id: "b1_u6_n5",
      type: "theory",
      title: "El Reto Turco: Los Sufijos -en / -an",
      content: {
        concept: "Este es el obstáculo más grande al buscar algo en español.\n\n🇹🇷 **EN TURCO:** Usas los sufijos participiales **-en / -an** y los pegas al verbo ANTES del sustantivo.\n• *İspanyolca konuş-**an** bir sekreter arıyorum.* (Literal: Español hablante una secretaria busco).\n\n🇪🇸 **EN ESPAÑOL:** No tenemos ese sufijo mágico. Estamos obligados a usar la estructura completa de Relativo: **Sustantivo + QUE + Verbo**.\n• *Busco una secretaria QUE hable español.*\n\n¡Cuidado! Tu cerebro turco querrá poner el adjetivo o la acción antes de la persona. Tienes que invertir el orden: Primero la cosa/persona que buscas, luego el 'QUE', y finalmente la condición en subjuntivo.",
        examples: [
          { es: "Necesito un teléfono que funcione bien.", tr: "İyi çalışan bir telefona ihtiyacım var." },
          { es: "Buscan un profesor que enseñe matemáticas.", tr: "Matematik öğreten bir öğretmen arıyorlar." },
          { es: "Quiero una casa que tenga tres habitaciones.", tr: "Üç odası olan bir ev istiyorum." }
        ]
      }
    },
    {
      id: "b1_u6_n6",
      type: "reading",
      title: "Lectura y Audio: La Inmobiliaria",
      content: {
        text: "Ayşe ha entrado a una agencia inmobiliaria en el centro de Madrid para buscar su primer apartamento.\n\n— Agente: ¡Buenos días! ¿En qué puedo ayudarle?\n— Ayşe: Hola. Busco un piso que no sea muy caro. Necesito que esté cerca de la universidad y que tenga mucha luz natural.\n— Agente: Entiendo. Tenemos un piso precioso en el centro. Es un piso que tiene dos habitaciones y está muy cerca del metro.\n— Ayşe: ¿Cuánto cuesta el alquiler?\n— Agente: Son 1.200 euros al mes.\n— Ayşe: ¡Uf! No conozco a nadie que pague tanto dinero por un piso pequeño. Busco algo que cueste menos de 800 euros.\n— Agente: Lo siento, señorita. En esta zona no hay ningún piso que cueste 800 euros. Quizás deba buscar en los afueras.",
        translation: "Ayşe ilk dairesini aramak için Madrid'in merkezinde bir emlakçıya girdi.\n\n— Emlakçı: Günaydın! Size nasıl yardımcı olabilirim?\n— Ayşe: Merhaba. Çok pahalı olmayan bir daire arıyorum. Üniversiteye yakın olmasına ve çok doğal ışık almasına ihtiyacım var.\n— Emlakçı: Anlıyorum. Merkezde çok güzel bir dairemiz var. İki odası olan ve metroya çok yakın olan bir daire.\n— Ayşe: Kirası ne kadar?\n— Emlakçı: Ayda 1.200 euro.\n— Ayşe: Uf! Küçük bir daire için bu kadar çok para ödeyen kimseyi tanımıyorum. 800 eurodan daha aza mal olan (tutan) bir şey arıyorum.\n— Emlakçı: Üzgünüm hanımefendi. Bu bölgede 800 euro tutan hiçbir daire yok. Belki banliyölerde aramalısınız."
      }
    },
    {
      id: "b1_u6_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Sintaxis y Búsqueda)",
      exercises: [
        { type: "syntax", turkish: "Çok pahalı olmayan bir daire arıyorum.", spanish: "Busco un piso que no sea muy caro", words: ["Busco", "un", "piso", "que", "no", "sea", "muy", "caro", "es"] },
        { type: "syntax", turkish: "İki odası olan bir dairemiz var.", spanish: "Tenemos un piso que tiene dos habitaciones", words: ["Tenemos", "un", "piso", "que", "tiene", "dos", "habitaciones", "tenga"] },
        { type: "syntax", turkish: "Metroya yakın olmasına ihtiyacım var.", spanish: "Necesito que esté cerca del metro", words: ["Necesito", "que", "esté", "cerca", "del", "metro", "está"] },
        { type: "syntax", turkish: "800 euro tutan hiçbir daire yok.", spanish: "No hay ningún piso que cueste ochocientos euros", words: ["No", "hay", "ningún", "piso", "que", "cueste", "ochocientos", "euros", "cuesta"] },
        { type: "syntax", turkish: "İngilizce konuşan bir rehber arıyoruz.", spanish: "Buscamos un guía que hable inglés", words: ["Buscamos", "un", "guía", "que", "hable", "inglés", "habla"] },
        { type: "speaking", spanish: "Busco un piso que no sea muy caro", turkish: "Çok pahalı olmayan bir daire arıyorum." },
        { type: "speaking", spanish: "Tenemos una casa que es muy bonita", turkish: "Çok güzel olan bir evimiz var." },
        { type: "speaking", spanish: "No hay nadie que hable español", turkish: "İspanyolca konuşan kimse yok." },
        { type: "speaking", spanish: "Quiero un coche que consuma poca gasolina", turkish: "Az benzin yakan bir araba istiyorum." },
        { type: "speaking", spanish: "Conozco un restaurante que es muy barato", turkish: "Çok ucuz olan bir restoran biliyorum." }
      ]
    },
    {
      id: "b1_u6_n8",
      type: "theory",
      title: "Teoría IV: Dónde y Como (Los otros relativos)",
      content: {
        concept: "Además de la palabra 'QUE', usamos otras palabras relativas para hablar de lugares o formas de hacer las cosas. Ellas siguen exactamente la misma regla de radar (Indicativo = conocido / Subjuntivo = desconocido).\n\n### 1. DONDE (Nerede / Nereye)\n• **Conocido (Indicativo):** *Vamos al restaurante DONDE **hacen** paella.* (Sé qué restaurante es).\n• **Desconocido (Subjuntivo):** *Vamos a un restaurante DONDE **hagan** paella.* (Cualquier restaurante, no sé a cuál iremos).\n\n### 2. COMO (Nasıl / Gıbı)\n• **Conocido (Indicativo):** *Lo hago COMO tú **dices**.* (Tú ya me explicaste las instrucciones y las sigo).\n• **Desconocido (Subjuntivo):** *Lo haré COMO tú **digas**.* (Aún no me has dado las instrucciones. Lo haré de cualquier forma que tú decidas en el futuro).\n\n💡 TRUCO: La expresión 'Como tú quieras' (Sen nasıl istersen) es un ejemplo perfecto de esta regla.",
        examples: [
          { es: "Busco un lugar donde haga calor todo el año.", tr: "Bütün yıl sıcak olan bir yer arıyorum." },
          { es: "Puedes decorar el salón como tú prefieras.", tr: "Salonu nasıl tercih edersen öyle dekore edebilirsin." },
          { es: "Vamos donde tú quieras ir.", tr: "Nereye gitmek istersen oraya gidelim." }
        ]
      }
    },
    {
      id: "b1_u6_n9",
      type: "theory",
      title: "Laboratorio de Sintaxis Visual: El Candidato Ideal",
      content: {
        concept: "Analizaremos cómo se construye un anuncio buscando un empleado ideal usando múltiples verbos en subjuntivo.",
        examples: [{ es: "Buscamos a una persona que tenga experiencia y que quiera trabajar en equipo.", tr: "Deneyimi olan ve takım halinde çalışmak isteyen bir kişi arıyoruz." }],
        analysis: [
          { word: "Buscamos", type: "verb", literal: "Arıyoruz", explanation: "Verbo de búsqueda. Activa el 'radar' del subjuntivo porque el objeto es desconocido.", examples: [] },
          { word: "a una persona", type: "noun", literal: "bir kişiyi", explanation: "El antecedente. Usamos 'a' personal porque es un ser humano.", examples: [] },
          { word: "que", type: "connector", literal: "ki (bağlaç) / -en", explanation: "El puente de relativo.", examples: [] },
          { word: "tenga", type: "verb", literal: "sahip olan", explanation: "Verbo TENER en subjuntivo. Es el primer requisito.", examples: [] },
          { word: "experiencia", type: "noun", literal: "deneyim", explanation: "Objeto del verbo.", examples: [] },
          { word: "y que", type: "connector", literal: "ve ki", explanation: "Para sumar otro requisito, debemos repetir el 'que'.", examples: [] },
          { word: "quiera", type: "verb", literal: "isteyen", explanation: "Verbo QUERER en subjuntivo. Es el segundo requisito.", examples: [] },
          { word: "trabajar en equipo", type: "noun", literal: "takım halinde çalışmak", explanation: "Bloque de infinitivo que complementa a 'quiera'.", examples: [] }
        ]
      }
    },
    {
      id: "b1_u6_n10",
      type: "theory",
      title: "Caja de Herramientas: Búsquedas y Anuncios",
      content: {
        concept: "Para buscar pisos, trabajos o incluso pareja, necesitas dominar este vocabulario de nivel B1.\n\n### Inmobiliaria (Emlak):\n• **El piso / El apartamento** (Daire)\n• **Alquilar / El alquiler** (Kiralamak / Kira)\n• **El compañero de piso** (Ev arkadaşı)\n• **Estar amueblado** (Mobilyalı olmak)\n\n### Trabajo (İş):\n• **La entrevista** (Mülakat)\n• **El currículum** (Özgeçmiş)\n• **El salario / El sueldo** (Maaş)\n• **El requisito / El perfil** (Gereklilik / Profil)\n\n### Pareja / Amistad:\n• **Tener sentido del humor** (Mizah anlayışı olmak)\n• **Ser cariñoso/a** (Şefkatli olmak)",
        examples: [
          { es: "Busco un piso compartido que esté amueblado.", tr: "Mobilyalı olan paylaşımlı bir daire arıyorum." },
          { es: "Necesitamos un ingeniero que tenga un buen currículum.", tr: "İyi bir özgeçmişi olan bir mühendise ihtiyacımız var." },
          { es: "Quiero a alguien que tenga buen sentido del humor.", tr: "İyi bir mizah anlayışı olan birini istiyorum." }
        ]
      }
    },
    {
      id: "b1_u6_n11",
      type: "theory",
      title: "Taller de Producción: Se Busca...",
      content: {
        concept: "¡Saca tu lado exigente! Es hora de escribir un anuncio de búsqueda.\n\n**Instrucciones:**\nImagina que tienes una habitación libre en tu casa y buscas un 'compañero de piso ideal'. Escribe un anuncio (mínimo 6 líneas) detallando lo que buscas.\n\n1. Usa 'Busco a alguien que...' al menos dos veces con subjuntivo.\n2. Usa una frase de negación con subjuntivo ('No quiero que...' o 'No busco a nadie que...').\n3. Usa la estructura 'Donde + subjuntivo' o 'Como + subjuntivo'.\n\n**Inspiración:** 'Busco un compañero de piso que sea limpio y que sepa cocinar. No quiero a nadie que haga ruido por la noche. Prefiero a alguien que...'",
        examples: []
      }
    },
    {
      id: "b1_u6_n12",
      type: "exam",
      title: "Examen de Unidad: El Buscador",
      content: {
        concept: "Demuestra que puedes diferenciar entre la realidad y la búsqueda, utilizando correctamente los relativos y el subjuntivo.",
        exercises: [
          // 15 Múltiple Opción
          { type: "multiple_choice", question: "Elige la correcta: 'Tengo un hermano que ______ (vivir) en Madrid'.", options: ["vive", "viva", "viven"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: 'Busco un libro que ______ (explicar) la historia de España'.", options: ["explica", "explique", "explicar"], correct: 1 },
          { type: "multiple_choice", question: "Conozco un restaurante que ______ (servir) comida turca (Sé cuál es).", options: ["sirve", "sirva"], correct: 0 },
          { type: "multiple_choice", question: "¿Hay algún restaurante por aquí que ______ (servir) comida turca? (Desconozco si existe).", options: ["sirve", "sirva"], correct: 1 },
          { type: "multiple_choice", question: "No hay nadie en esta ciudad que me ______ (comprender).", options: ["comprende", "comprenda"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Un piso amueblado'?", options: ["Mobilyalı bir daire", "Kiralık bir daire", "Boş bir daire"], correct: 0 },
          { type: "multiple_choice", question: "¿Cómo se dice 'Nasıl istersen'? (Expresión común).", options: ["Como tú quieres", "Como tú quieras", "Como tú querrás"], correct: 1 },
          { type: "multiple_choice", question: "Elige: 'Vamos a un bar donde ______ (poner) buena música' (Aún no hemos elegido el bar).", options: ["ponen", "pongan", "poniendo"], correct: 1 },
          { type: "multiple_choice", question: "Elige: 'Vamos al bar donde ______ (poner) buena música' (Es mi bar favorito, vamos siempre).", options: ["ponen", "pongan"], correct: 0 },
          { type: "multiple_choice", question: "No busco a nadie que ______ (ser) perfecto.", options: ["es", "sea"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué es 'El salario'?", options: ["İş", "Maaş", "Mülakat"], correct: 1 },
          { type: "multiple_choice", question: "Quiero comprar una camisa que ______ (ser) de algodón.", options: ["sea", "es"], correct: 0 },
          { type: "multiple_choice", question: "En la oficina hay una chica que ______ (saber) japonés.", options: ["sabe", "sepa"], correct: 0 },
          { type: "multiple_choice", question: "Necesito una secretaria que ______ (saber) japonés.", options: ["sabe", "sepa"], correct: 1 },
          { type: "multiple_choice", question: "No hay ninguna camisa que me ______ (gustar).", options: ["gusta", "guste"], correct: 1 },

          // 15 Sintaxis
          { type: "syntax", turkish: "İspanyolca konuşan birini arıyorum.", spanish: "Busco a alguien que hable español", words: ["Busco", "a", "alguien", "que", "hable", "español", "habla"] },
          { type: "syntax", turkish: "Çok pahalı olmayan bir ev istiyorum.", spanish: "Quiero una casa que no sea muy cara", words: ["Quiero", "una", "casa", "que", "no", "sea", "muy", "cara", "es"] },
          { type: "syntax", turkish: "Burada beni anlayan kimse yok.", spanish: "Aquí no hay nadie que me entienda", words: ["Aquí", "no", "hay", "nadie", "que", "me", "entienda", "entiende"] },
          { type: "syntax", turkish: "Metroya yakın olan bir daire arıyoruz.", spanish: "Buscamos un piso que esté cerca del metro", words: ["Buscamos", "un", "piso", "que", "esté", "cerca", "del", "metro", "está"] },
          { type: "syntax", turkish: "Dürüst (honesto) olan bir arkadaşım var.", spanish: "Tengo un amigo que es honesto", words: ["Tengo", "un", "amigo", "que", "es", "honesto", "sea"] },
          { type: "syntax", turkish: "Nereye istersen oraya gidelim.", spanish: "Vamos donde tú quieras", words: ["Vamos", "donde", "tú", "quieras", "quieres"] },
          { type: "syntax", turkish: "Bunu nasıl tercih edersen (preferir) öyle yapacağım.", spanish: "Haré esto como tú prefieras", words: ["Haré", "esto", "como", "tú", "prefieras", "prefieres"] },
          { type: "syntax", turkish: "Bize yardım edebilecek kimse var mı?", spanish: "Hay alguien que pueda ayudarnos", words: ["Hay", "alguien", "que", "pueda", "ayudarnos", "puede"] },
          { type: "syntax", turkish: "Mobilyalı olan bir daire kiraladım (Alquilar).", spanish: "Alquilé un piso que está amueblado", words: ["Alquilé", "un", "piso", "que", "está", "amueblado", "esté"] },
          { type: "syntax", turkish: "Maaşı iyi olan bir iş (trabajo) arıyorum.", spanish: "Busco un trabajo que tenga un buen salario", words: ["Busco", "un", "trabajo", "que", "tenga", "un", "buen", "salario", "tiene"] },
          { type: "syntax", turkish: "Sarı saçlı olan bir kız tanıyorum.", spanish: "Conozco a una chica que tiene el pelo rubio", words: ["Conozco", "a", "una", "chica", "que", "tiene", "el", "pelo", "rubio", "tenga"] },
          { type: "syntax", turkish: "Şefkatli (cariñoso) olan bir erkek arkadaş istiyorum.", spanish: "Quiero un novio que sea cariñoso", words: ["Quiero", "un", "novio", "que", "sea", "cariñoso", "es"] },
          { type: "syntax", turkish: "Bana bu mağazada hoşuma giden (gustar) hiçbir şey yok.", spanish: "No hay nada que me guste en esta tienda", words: ["No", "hay", "nada", "que", "me", "guste", "en", "esta", "tienda", "gusta"] },
          { type: "syntax", turkish: "Hafta sonları açılan (abrir) bir banka arıyorum.", spanish: "Busco un banco que abra los fines de semana", words: ["Busco", "un", "banco", "que", "abra", "los", "fines", "de", "semana", "abre"] },
          { type: "syntax", turkish: "Bunu bilen kimse yok.", spanish: "No hay nadie que sepa esto", words: ["No", "hay", "nadie", "que", "sepa", "esto", "sabe"] }
        ]
      }
    }
  ]
};
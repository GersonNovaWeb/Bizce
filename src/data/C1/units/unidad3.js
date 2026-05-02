/**
 * UNIDAD 3 - NIVEL C1: EL MAESTRO DEL MATIZ
 * Foco: El SE Accidental (exculpatorio) y el SE Dativo Ético (consumo total).
 * Tema: Accidentes, excusas, excesos y anécdotas de desastres.
 */

export const unidad3 = {
  id: "c1_u3",
  title: "Unidad 3: El Universo del SE",
  description: "Domina el arte de quitarte la culpa y exagerar el consumo. Aprende a usar el 'SE' accidental y el dativo ético como un verdadero nativo.",
  nodes: [
    {
      id: "c1_u3_n1",
      type: "theory",
      title: "Teoría I: El 'SE' Accidental (La Inocencia)",
      content: {
        concept: "En el nivel C1, aprenderás a quitarte la culpa de los errores. En español, cuando rompes algo o se te cae algo por accidente, no dices 'Yo rompí el vaso' (porque suena a que lo hiciste a propósito). Usamos el **SE Accidental**.\n\n### La Fórmula de la Inocencia:\n**SE + Pronombre Indirecto (me, te, le, nos, os, les) + Verbo (3ª persona) + Cosa (Sujeto)**\n\n• En esta estructura, el objeto roto o caído se convierte en el SUJETO de la oración, y el verbo concuerda con él.\n• Tú eres solo la 'víctima' del accidente (Pronombre Indirecto).\n\n### Ejemplos Críticos:\n• ❌ *Rompí las gafas.* (Gözlükleri kırdım - Bilerek).\n• ✅ *SE ME rompieron las gafas.* (Gözlükler kırıldı - Benim başıma geldi, kazara).\n\n• ❌ *Caí el café.* (Gramaticalmente incorrecto).\n• ✅ *SE ME cayó el café.* (Kahve döküldü/düştü - Benim elimden).",
        examples: [
          { es: "A Carlos se le rompieron los pantalones.", tr: "Carlos'un pantolonu yırtıldı (kazara, Carlos'un başına geldi)." },
          { es: "Se nos quemó la cena.", tr: "Akşam yemeğimiz yandı (bizim hatamızla/başımıza geldi)." },
          { es: "Se me cayeron las llaves al agua.", tr: "Anahtarlarım suya düştü (elimden)." }
        ]
      }
    },
    {
      id: "c1_u3_n2",
      type: "quiz",
      title: "Práctica I: Gimnasio de Alta Sintaxis (Accidentes)",
      exercises: [
        { type: "syntax", turkish: "Bardak elimden düştü (Se me...).", spanish: "Se me cayó el vaso", words: ["Se", "me", "cayó", "el", "vaso", "caí"] },
        { type: "syntax", turkish: "Gözlüklerim kırıldı (Se me...).", spanish: "Se me rompieron las gafas", words: ["Se", "me", "rompieron", "las", "gafas", "rompí"] },
        { type: "syntax", turkish: "Akşam yemeğimiz yandı (Se nos...).", spanish: "Se nos quemó la cena", words: ["Se", "nos", "quemó", "la", "cena", "quemamos"] },
        { type: "syntax", turkish: "Bilgisayarı (onun) bozuldu (estropear).", spanish: "Se le estropeó el ordenador", words: ["Se", "le", "estropeó", "el", "ordenador", "estropearon"] },
        { type: "syntax", turkish: "Telefonum elimden düştü.", spanish: "Se me cayó el teléfono", words: ["Se", "me", "cayó", "el", "teléfono", "caí"] },
        { type: "syntax", turkish: "Anahtarların kayboldu (Se te...).", spanish: "Se te perdieron las llaves", words: ["Se", "te", "perdieron", "las", "llaves", "perdiste"] },
        { type: "syntax", turkish: "Pantolonu (onun) yırtıldı (romper).", spanish: "Se le rompieron los pantalones", words: ["Se", "le", "rompieron", "los", "pantalones", "rompió"] },
        { type: "syntax", turkish: "Tostumuz yandı.", spanish: "Se nos quemó la tostada", words: ["Se", "nos", "quemó", "la", "tostada", "quemamos"] },
        { type: "syntax", turkish: "Tabak elimden düştü.", spanish: "Se me cayó el plato", words: ["Se", "me", "cayó", "el", "plato", "caí"] },
        { type: "syntax", turkish: "Onların (les) arabası bozuldu.", spanish: "Se les estropeó el coche", words: ["Se", "les", "estropeó", "el", "coche", "estropearon"] }
      ]
    },
    {
      id: "c1_u3_n3",
      type: "theory",
      title: "Teoría II: El 'SE' Dativo Ético (Consumo Total)",
      content: {
        concept: "El segundo uso avanzado del pronombre 'SE' (junto con me, te, nos...) es para indicar el **consumo total o el exceso** de algo. A esto se le llama 'Dativo Ético'.\n\nSe usa frecuentemente con verbos de consumo (comer, beber, tragar) o de acción intelectual (leer, saber, aprender, ver).\n\n### El Matiz C1:\n• *Me comí una pizza.* ➔ (Bir pizza yedim - Información normal).\n• *Me **comí toda** la pizza yo solo.* ➔ (Pizzanın **tamamını** tek başıma **gömdüm/yedim bitirdim** - Énfasis en que no dejé nada).\n\n• *Ayer leí un libro.* ➔ (Dün bir kitap okudum).\n• *Ayer **me leí** un libro entero.* ➔ (Dün bütün bir kitabı **okuyup bitirdim** - Énfasis en el esfuerzo y totalidad).\n\n💡 REGLA: Para usar este 'SE', el objeto debe estar determinado (tener una cantidad específica: 'todo el libro', 'tres cervezas', 'la tarta entera'). No puedes usarlo con cosas incontables (No puedes decir: *Me bebí agua*).",
        examples: [
          { es: "Se bebió tres botellas de vino en una hora.", tr: "Bir saatte üç şişe şarabı içip bitirdi (gömdü)." },
          { es: "Nos vimos las tres temporadas en un fin de semana.", tr: "Bir hafta sonunda üç sezonun tamamını izleyip bitirdik." },
          { es: "¡Te has comido todo mi pastel!", tr: "Benim pastamın tamamını yiyip bitirmişsin!" }
        ]
      }
    },
    {
      id: "c1_u3_n4",
      type: "quiz",
      title: "Práctica II: Laboratorio de Voz (El Exceso)",
      exercises: [
        { type: "speaking", spanish: "Se comió toda la pizza", turkish: "Pizzanın tamamını yedi bitirdi." },
        { type: "speaking", spanish: "Me leí el libro en dos días", turkish: "Kitabı iki günde okuyup bitirdim." },
        { type: "speaking", spanish: "Se bebieron tres botellas de vino", turkish: "Üç şişe şarabı içip bitirdiler." },
        { type: "speaking", spanish: "Te has comido todo el postre", turkish: "Bütün tatlıyı yiyip bitirmişsin." },
        { type: "speaking", spanish: "Nos vimos la serie completa", turkish: "Dizinin tamamını izleyip bitirdik." },
        { type: "speaking", spanish: "Se me cayó la botella de agua", turkish: "Su şişesi elimden düştü (Accidental)." },
        { type: "speaking", spanish: "Me tragué una mosca sin querer", turkish: "İstemeden bir sinek yuttum." },
        { type: "speaking", spanish: "Se aprendió el vocabulario en un día", turkish: "Kelime dağarcığını bir günde ezberledi." },
        { type: "speaking", spanish: "Se nos rompieron los vasos nuevos", turkish: "Yeni bardaklarımız kırıldı (Accidental)." },
        { type: "speaking", spanish: "Se sabe todas las respuestas", turkish: "Tüm cevapları (ezbere) biliyor." }
      ]
    },
    {
      id: "c1_u3_n5",
      type: "theory",
      title: "El Reto Turco: La Culpa y el Sujeto",
      content: {
        concept: "Aquí es donde los hablantes de turco sufren más al intentar sonar naturales.\n\n🇹🇷 **En Turco:** Si pierdes las llaves, dices 'Anahtarlarımı kaybettim' (Yo perdí mis llaves) o 'Anahtarlarım kayboldu' (Mis llaves se perdieron).\n\n🇪🇸 **En Español:** \n1. Si dices *'Perdí mis llaves'* suena a que eres un irresponsable total.\n2. Si dices *'Las llaves se perdieron'* suena muy frío, como si las llaves no fueran tuyas.\n3. La forma **C1 y nativa** es incluirte como víctima del suceso: **SE ME perdieron las llaves** (Las llaves se perdieron *a mí*).\n\n### Olvidos (El verbo mágico):\nPara decir 'Unuttum', un español casi nunca dice 'Olvidé'. Siempre dice: **SE ME OLVIDÓ** (para una cosa) o **SE ME OLVIDARON** (para varias).\n• ❌ *Olvidé tu nombre.* \n• ✅ *Se me olvidó tu nombre.* (Adın bana unutturuldu / Aklımdan uçup gitti).",
        examples: [
          { es: "Se me ha olvidado el pasaporte en casa.", tr: "Pasaportumu evde unuttum (aklımdan uçtu)." },
          { es: "Se te olvidaron las gafas en la mesa.", tr: "Gözlüklerini masada unuttun." },
          { es: "Se nos pasó la parada del tren.", tr: "Tren durağını kaçırdık (durak bizi geçip gitti)." }
        ]
      }
    },
    {
      id: "c1_u3_n6",
      type: "reading",
      title: "Lectura Crítica: Crónica de un desastre",
      content: {
        text: "La cena de Nochevieja fue un auténtico desastre. Para empezar, a mi madre se le olvidó comprar el pan. Cuando mi padre intentó encender el horno, se le estropeó el botón y tuvimos que cocinar en la sartén. \n\nPor culpa del estrés, a mí se me cayeron dos copas de cristal al suelo y se me rompieron en mil pedazos. Mientras limpiaba, a mi hermano se le quemó el asado. \n\nAl final, como no teníamos comida, tuvimos que pedir unas pizzas. Mi primo adolescente tenía tanta hambre que se comió dos pizzas enteras él solo y se bebió todo el refresco. A pesar de que se nos arruinó el plan original, nos reímos muchísimo de nuestra mala suerte.",
        translation: "Yılbaşı yemeği tam bir felaketti. Başlamak gerekirse, annem ekmek almayı unuttu (se le olvidó). Babam fırını açmaya çalıştığında düğmesi bozuldu (se le estropeó) ve tavada yemek pişirmek zorunda kaldık.\n\nStres yüzünden, elimden iki kristal kadeh yere düştü (se me cayeron) ve bin parçaya bölündü (se me rompieron). Ben temizlerken, abimin kızartması yandı (se le quemó).\n\nSonunda yemeğimiz olmadığı için birkaç pizza sipariş etmek zorunda kaldık. Ergen kuzenim o kadar açtı ki tek başına iki bütün pizzayı yedi bitirdi (se comió) ve tüm meşrubatı içip bitirdi (se bebió). Orijinal planımız mahvolmasına (se nos arruinó) rağmen, kötü şansımıza çok güldük."
      }
    },
    {
      id: "c1_u3_n7",
      type: "quiz",
      title: "Práctica III: Desafío Total (Accidentes y Excesos)",
      exercises: [
        { type: "syntax", turkish: "Pasaportumu evde unuttum (Se me...).", spanish: "Se me olvidó el pasaporte en casa", words: ["Se", "me", "olvidó", "el", "pasaporte", "en", "casa", "olvidé"] },
        { type: "syntax", turkish: "Anahtarlarımı masada unuttum (çoğul).", spanish: "Se me olvidaron las llaves en la mesa", words: ["Se", "me", "olvidaron", "las", "llaves", "en", "la", "mesa", "olvidó"] },
        { type: "syntax", turkish: "Tüm pastayı yiyip bitirdin (Dativo).", spanish: "Te comiste todo el pastel", words: ["Te", "comiste", "todo", "el", "pastel", "comisteis"] },
        { type: "syntax", turkish: "Bütün kitabı bir gecede okuyup bitirdi (Dativo).", spanish: "Se leyó todo el libro en una noche", words: ["Se", "leyó", "todo", "el", "libro", "en", "una", "noche"] },
        { type: "syntax", turkish: "Cüzdanım kayboldu (Se me...).", spanish: "Se me perdió la cartera", words: ["Se", "me", "perdió", "la", "cartera", "perdí"] },
        { type: "syntax", turkish: "Biletleri (los billetes) unuttuk (Se nos...).", spanish: "Se nos olvidaron los billetes", words: ["Se", "nos", "olvidaron", "los", "billetes", "olvidó"] },
        { type: "syntax", turkish: "Telefonu elimden düştü (Se me...).", spanish: "Se me cayó el teléfono", words: ["Se", "me", "cayó", "el", "teléfono", "caí"] },
        { type: "syntax", turkish: "Tüm suyu içip bitirdiler (Dativo).", spanish: "Se bebieron todo el agua", words: ["Se", "bebieron", "todo", "el", "agua", "bebieron"] },
        { type: "syntax", turkish: "Ceketi (onun) yırtıldı/kırıldı (Se le...).", spanish: "Se le rompió la chaqueta", words: ["Se", "le", "rompió", "la", "chaqueta", "rompió"] },
        { type: "syntax", turkish: "Tüm kelimeleri (ezbere) öğrendim (Dativo).", spanish: "Me aprendí todas las palabras", words: ["Me", "aprendí", "todas", "las", "palabras", "aprendí"] }
      ]
    },
    {
      id: "c1_u3_n8",
      type: "theory",
      title: "Teoría III: La Resistencia Involuntaria",
      content: {
        concept: "Además de olvidar o romper, el 'SE Accidental' se usa mucho con verbos que implican que una máquina, un fuego o una oportunidad no 'colaboró' contigo.\n\n### Verbos Clave de Resistencia:\n• **Apagarse:** (Sönmek / Kapanmak). *Se me apagó el ordenador* (Bilgisayarım kapandı/şarjı bitti).\n• **Escaparse:** (Kaçmak / Elden gitmek). *Se nos escapó el perro* (Köpeğimiz kaçtı). *Se me escapó la oportunidad* (Fırsatı kaçırdım).\n• **Pasarse:** (Kaçırmak / Unutmak). *Se me pasó tu cumpleaños* (Doğum gününü unuttum/gözümden kaçtı). \n• **Caerse bien/mal:** (Birinden hoşlanmak/hoşlanmamak - personalidad). *Carlos me cae muy bien* (Carlos'tan çok hoşlanıyorum/Carlos bana iyi geliyor).",
        examples: [
          { es: "Se le apagó el móvil durante la reunión.", tr: "Toplantı sırasında cep telefonu kapandı (şarjı bitti)." },
          { es: "Lo siento, se me pasó decírtelo.", tr: "Üzgünüm, sana söylemeyi unuttum (aklımdan çıktı)." },
          { es: "Se nos escapó el tren por un minuto.", tr: "Treni bir dakikayla kaçırdık." }
        ]
      }
    },
    {
      id: "c1_u3_n9",
      type: "theory",
      title: "Sintaxis Visual: El Doble Culpable",
      content: {
        concept: "Analizaremos una frase que exculpa al hablante pero culpa a un tercero, combinando el SE accidental con el dativo de persona.",
        examples: [{ es: "Ayer se le cayeron mis gafas nuevas al suelo y se le rompieron.", tr: "Dün benim yeni gözlüklerim onun elinden yere düştü ve kırıldı." }],
        analysis: [
          { word: "Ayer", type: "adverb", literal: "Dün", explanation: "Marcador temporal.", examples: [] },
          { word: "se le", type: "pronoun", literal: "ona (kazara)", explanation: "El bloque del SE accidental. 'Se' indica la involuntariedad, 'le' indica la persona a la que le ocurrió el accidente (él o ella).", examples: [] },
          { word: "cayeron", type: "verb", literal: "düştüler", explanation: "Verbo CAER conjugado en plural porque concuerda con 'las gafas', no con la persona.", examples: [] },
          { word: "mis gafas nuevas", type: "noun", literal: "benim yeni gözlüklerim", explanation: "El sujeto real de la oración. Yo soy el dueño (mis), pero él fue el torpe.", examples: [] },
          { word: "al suelo", type: "noun", literal: "yere", explanation: "Complemento de destino.", examples: [] },
          { word: "y se le", type: "connector", literal: "ve ona", explanation: "Repetición de la estructura accidental para la segunda acción.", examples: [] },
          { word: "rompieron.", type: "verb", literal: "kırıldılar", explanation: "Verbo ROMPER en plural, de nuevo concordando con 'las gafas'." }
        ]
      }
    },
    {
      id: "c1_u3_n10",
      type: "theory",
      title: "Caja de Herramientas: Desastres y Consumo",
      content: {
        concept: "Para dominar los accidentes y los excesos, añade estos verbos y expresiones a tu vocabulario activo.\n\n### Accidentes (Con SE me...):\n• **Derramar** (Dökmek - líquidos) ➔ *Se me derramó el café.*\n• **Estropear** (Bozulmak - máquinas) ➔ *Se me estropeó la lavadora.*\n• **Atascar / Quedarse atascado** (Sıkışmak) ➔ *Se me atascó el coche.*\n\n### Consumo y Énfasis (Con Me...):\n• **Tragarse** (Yutmak - cosas enteras) ➔ *Se tragó una pastilla enorme.*\n• **Gastar** (Harcamak) ➔ *Se gastó todo el sueldo en ropa.*\n• **Aprenderse** (Ezberlemek/Öğrenip bitirmek) ➔ *Me aprendí el poema de memoria.*\n• **Creerse** (İnanmak - ingenuidad) ➔ *Se creyó toda la mentira.*",
        examples: [
          { es: "Se le derramó el vino en la camisa blanca.", tr: "Beyaz gömleğine şarap döküldü." },
          { es: "Se gastó mil euros en un día.", tr: "Bir günde bin euro harcayıp bitirdi." },
          { es: "Se creyeron la excusa sin preguntar.", tr: "Bahaneye sormadan inandılar." }
        ]
      }
    },
    {
      id: "c1_u3_n11",
      type: "theory",
      title: "Taller de Producción: Mi Peor Día",
      content: {
        concept: "Es el momento de quitarte la culpa.\n\n**Instrucciones:**\nEscribe un relato de 10 a 15 líneas explicando por qué llegaste tarde a una reunión importante y qué pasó durante la comida posterior.\n\n1. Usa al menos 3 verbos con el **SE accidental** para justificar tu retraso (olvidarse, apagarse, estropearse, caerse, perderse).\n2. Usa al menos 2 verbos con el **Dativo Ético** para describir los excesos en la comida (comerse todo, beberse, gastarse).\n3. Cuida la concordancia: recuerda que lo que se pierde o cae determina si el verbo es singular o plural.\n\n**Inspiración:** 'Señor director, le pido perdón. Esta mañana se me olvidaron las llaves y se me apagó el móvil. Para colmo, se me estropeó el coche...'",
        examples: []
      }
    },
    {
      id: "c1_u3_n12",
      type: "exam",
      title: "Examen de Unidad: El Universo del SE",
      content: {
        concept: "Demuestra tu dominio separando la culpa de la acción y el consumo intenso del consumo normal.",
        exercises: [
          { type: "multiple_choice", question: "¿Cómo se dice 'Anahtarlarımı unuttum' sonando nativo y sin culpa?", options: ["Olvidé mis llaves.", "Se me olvidaron las llaves.", "Me olvidaron las llaves."], correct: 1 },
          { type: "multiple_choice", question: "Elige la correcta: Ayer se me ______ (romper) el teléfono.", options: ["rompió", "rompieron", "rompí"], correct: 0 },
          { type: "multiple_choice", question: "Elige la correcta: Ayer se me ______ (romper) las gafas.", options: ["rompió", "rompieron", "rompí"], correct: 1 },
          { type: "multiple_choice", question: "¿Qué significa 'Se comió toda la tarta'?", options: ["El pastel se lo comió a él.", "Él se comió el pastel entero.", "Alguien comió su pastel."], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la forma correcta de decir 'Şarjım bitti / Telefonum kapandı'?", options: ["Se apagó mi móvil.", "Apagué mi móvil.", "Se me apagó el móvil."], correct: 2 },
          { type: "multiple_choice", question: "Completa: A Juan se ______ pasaron las fechas del examen (Juan unuttu).", options: ["te", "le", "les"], correct: 1 },
          { type: "multiple_choice", question: "Completa: Se ______ cayeron los platos (Bizim elimizden).", options: ["nos", "les", "me"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué es el Dativo Ético?", options: ["Dar algo a alguien.", "Usar un pronombre (me/te/se) para enfatizar el consumo total de algo.", "Una regla de cortesía."], correct: 1 },
          { type: "multiple_choice", question: "¿Cuál es la forma nativa de decir 'Kitabı okudum' (Enfatizando que lo terminaste todo)?", options: ["Leí el libro.", "Me leí el libro.", "Lo leí."], correct: 1 },
          { type: "multiple_choice", question: "Si digo 'Se me escapó el tren', el sujeto gramatical de la oración es:", options: ["Yo (me).", "El tren.", "Escapó."], correct: 1 },
          { type: "syntax", turkish: "Cüzdanımı unuttum (Se me...).", spanish: "Se me olvidó la cartera", words: ["Se", "me", "olvidó", "la", "cartera", "olvidé"] },
          { type: "syntax", turkish: "Pizzanın tamamını yiyip bitirdin (Dativo).", spanish: "Te comiste toda la pizza", words: ["Te", "comiste", "toda", "la", "pizza", "comisteis"] },
          { type: "syntax", turkish: "Biletleri (los billetes) unuttuk (Se nos...).", spanish: "Se nos olvidaron los billetes", words: ["Se", "nos", "olvidaron", "los", "billetes", "olvidó"] },
          { type: "syntax", turkish: "Bütün kitabı bir gecede okuyup bitirdi (Dativo).", spanish: "Se leyó todo el libro en una noche", words: ["Se", "leyó", "todo", "el", "libro", "en", "una", "noche"] },
          { type: "syntax", turkish: "Telefonu (onun) elimden düştü (Se le...).", spanish: "Se le cayó el teléfono", words: ["Se", "le", "cayó", "el", "teléfono", "caí"] },
          { type: "syntax", turkish: "Tüm suyu içip bitirdiler (Dativo).", spanish: "Se bebieron todo el agua", words: ["Se", "bebieron", "todo", "el", "agua", "bebieron"] },
          { type: "syntax", turkish: "Ceketi (onun) yırtıldı (Se le...).", spanish: "Se le rompió la chaqueta", words: ["Se", "le", "rompió", "la", "chaqueta", "rompieron"] },
          { type: "syntax", turkish: "Tüm kelimeleri ezberledim (Dativo - Aprenderse).", spanish: "Me aprendí todas las palabras", words: ["Me", "aprendí", "todas", "las", "palabras", "aprendo"] },
          { type: "syntax", turkish: "Fırsatı kaçırdım (Se me escapó).", spanish: "Se me escapó la oportunidad", words: ["Se", "me", "escapó", "la", "oportunidad", "escaparon"] },
          { type: "syntax", turkish: "Onun doğum gününü unuttum (Se me pasó).", spanish: "Se me pasó su cumpleaños", words: ["Se", "me", "pasó", "su", "cumpleaños", "pasaron"] }
        ]
      }
    }
  ]
};
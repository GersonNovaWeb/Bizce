export const unidad4_5 = {
  id: "u4_5",
  title: "Unidad 4.5: El Gerundio Correcto",
  description: "Los turcos abusan del gerundio porque los participios verbales turcos funcionan diferente. Aprende los límites del gerundio español antes de que el error se fije.",
  nodes: [
    { id: "u4_5_n1", type: "theory", title: "Qué es el gerundio y para qué sirve",
      content: {
        concept: "El gerundio en español (terminación -ando/-iendo) es una forma VERBAL que expresa acción en progreso o simultánea. NO es un sustantivo ni un adjetivo.\n\nUSOS CORRECTOS:\n✅ Con estar (progresivo): Estoy comiendo.\n✅ Acción simultánea: Entró cantando. (entró Y cantaba al mismo tiempo)\n✅ Modo o manera: Trabajó callado, escuchando música.\n✅ Causa inmediata: Siendo tan listo, aprobó sin estudiar.\n✅ Después de: seguir, llevar, ir, andar, venir + gerundio\n\n❌ USOS INCORRECTOS:\n❌ Como sujeto: *Fumar es malo. → ✅ Fumar es malo. (El infinitivo, no el gerundio, es sujeto)\n❌ Como objeto del nombre (adjetivo): *Una caja conteniendo libros → ✅ Una caja que contiene libros\n❌ Como complemento nominal: *El problema siendo esto → ✅ El problema siendo... (solo en construcción absoluta)",
        examples: [
          { es: "✅ Entró en la sala saludando a todos. (simultáneo)", tr: "Herkesi selamlayarak salona girdi. → Türkçe -arak/-erek = gerundio SIMULTÁNEO" },
          { es: "❌ *Vi una chica llevando un sombrero. → ✅ Vi una chica que llevaba un sombrero.", tr: "Şapka taşıyan bir kız gördüm. → Türkçe -an/-en = español RELATIVO, no gerundio" }
        ]
      }
    },
    { id: "u4_5_n2", type: "theory", title: "El gerundio de posterioridad: el error grave",
      content: {
        concept: "El ERROR MÁS GRAVE del gerundio en español: el gerundio de posterioridad.\n\nLa regla es: el gerundio SOLO puede referirse a una acción SIMULTÁNEA o INMEDIATAMENTE ANTERIOR a la acción principal. NUNCA POSTERIOR.\n\n❌ INCORRECTO (gerundio posterior):\n'Llegó a Madrid, estudiando medicina allí durante 5 años.' (estudiar ocurre DESPUÉS de llegar)\n\n✅ CORRECTO:\n'Llegó a Madrid y estudió medicina allí durante 5 años.'\n'Llegó a Madrid, donde estudió medicina durante 5 años.'\n\n❌ 'Cayó al suelo, rompiéndose la pierna.' (romperse ocurre COMO RESULTADO, no simultáneo)\n✅ 'Cayó al suelo y se rompió la pierna.'\n✅ 'Cayó al suelo, rompiéndose la pierna en el acto.' (si es verdaderamente simultáneo)\n\n🇹🇷 CALCO TURCO: En turco, '-arak/-erek' puede expresar acciones secuenciales. En español, el gerundio NO puede.",
        examples: [
          { es: "❌ Fue al médico, descubriendo que tenía diabetes.\n✅ Fue al médico y descubrió que tenía diabetes.", tr: "Doktora gitti ve diyabet olduğunu öğrendi. → Türkçede -arak possible, español: NO" },
          { es: "✅ Me llamó llorando. (llamó Y lloraba = simultáneo)", tr: "Ağlayarak beni aradı. → Simultáneo: correcto" }
        ]
      }
    },
    { id: "u4_5_n3", type: "theory", title: "Reto Turco: -arak/-erek vs gerundio",
      content: {
        concept: "En turco, '-arak/-erek' es extremadamente productivo y puede expresar:\n1. Acción simultánea → En español: gerundio ✅\n2. Acción secuencial → En español: 'y' + verbo conjugado ✅\n3. Modo → En español: gerundio ✅\n4. Resultado → En español: 'y' + verbo conjugado ✅\n\nREGLA PRÁCTICA: Cuando traduces del turco y usas -arak/-erek, pregúntate:\n¿Las dos acciones ocurren AL MISMO TIEMPO?\n• SÍ → gerundio en español\n• NO (una ocurre después) → 'y' + verbo conjugado\n\nEJERCICIO MENTAL:\n'Koşarak geldi.' → ¿Correr y llegar son simultáneos? SÍ → 'Llegó corriendo.' ✅\n'Çalışarak para kazandı.' → ¿Trabajar y ganar dinero son simultáneos? SÍ → 'Ganó dinero trabajando.' ✅\n'Eve gelerek uyudu.' → ¿Llegar y dormir son simultáneos? NO (primero llega, luego duerme) → 'Llegó a casa y se durmió.' ✅",
        examples: [
          { es: "Koşarak geldi. → Llegó corriendo. ✅ (simultáneo)", tr: "Koşmak Y gelmek = mismo tiempo → gerundio OK" },
          { es: "Çalışarak zengin oldu. → Trabajó y se hizo rico. ✅ (secuencial)", tr: "Primero trabajó, DESPUÉS se hizo rico → NO gerundio" }
        ]
      }
    },
    { id: "u4_5_n4", type: "reading", title: "Lectura: Texto con gerundios correctos",
      content: {
        text: "La historia de Marta, traductora\n\nMarta llegó a Barcelona desde Estambul buscando nuevas oportunidades. Llevaba estudiando español desde los dieciséis años, pasando horas escuchando canciones y viendo películas.\n\nUn día, caminando por el Barrio Gótico, vio un cartel en una agencia de traducción: 'Se busca traductor turco-español'. Entró sin pensarlo dos veces.\n\n— Hola, vengo respondiendo a su anuncio — dijo sonriendo.\n— ¿Tiene experiencia? — preguntó la directora mirando su currículum.\n— Llevo tres años trabajando como traductora freelance.\n\nMarta consiguió el trabajo. Siguió mejorando su español todos los días, leyendo novelas y hablando con sus compañeros. Hoy, seis años después, dirige el departamento de traducción.",
        translation: "Çevirmen Marta'nın hikayesi\n\nMarta, yeni fırsatlar arayarak İstanbul'dan Barselona'ya geldi. On altı yaşından beri İspanyolca öğreniyordu, saatler geçirerek müzik dinleyip film izliyordu.\n\nBir gün, Gotik Mahalle'de yürürken, bir çeviri ajansında bir ilan gördü: 'Türkçe-İspanyolca çevirmen aranıyor'. İki kez düşünmeden içeri girdi.\n\n— Merhaba, ilanınıza yanıt vererek geldim — dedi gülümseyerek.\n— Deneyiminiz var mı? — direktör özgeçmişine bakarak sordu.\n— Üç yıldır serbest çevirmen olarak çalışıyorum.\n\nMarta işi aldı. Her gün İspanyolcasını geliştirmeye devam etti, roman okuyarak ve meslektaşlarıyla konuşarak. Bugün, altı yıl sonra, çeviri departmanını yönetiyor."
      }
    },
    { id: "u4_5_n5", type: "quiz", title: "Práctica: Gerundio correcto",
      exercises: [
        { type: "multiple_choice", question: "'Vi una chica ___ un sombrero rojo.' (correcto)", options: ["que llevaba", "llevando", "llevada"], correct: 0 },
        { type: "multiple_choice", question: "'Llegó a casa ___ que estaban todos dormidos.' (resultado posterior)", options: ["y vio", "viendo", "habiendo visto"], correct: 0 },
        { type: "syntax", turkish: "Gülümseyerek içeri girdi. (simultáneo)", spanish: "Entró sonriendo", words: ["Entró", "sonriendo", "y", "sonrió", "con"] },
        { type: "syntax", turkish: "Eve gitti ve uyudu. (secuencial)", spanish: "Fue a casa y durmió", words: ["Fue", "a", "casa", "y", "durmió", "durmiendo", "yendo"] },
        { type: "speaking", spanish: "Llegó corriendo y nos abrazó.", turkish: "Koşarak geldi ve sarıldı." }
      ]
    },
    { id: "u4_5_exam", type: "exam", title: "Examen: El Gerundio Correcto",
      content: {
        concept: "Demuestra que sabes cuándo usar y cuándo NO usar el gerundio.",
        exercises: [
          { type: "multiple_choice", question: "Gerundio CORRECTO (simultáneo):", options: ["Entró cantando.", "Llegó, encontrando el trabajo.", "Es una caja conteniendo libros."], correct: 0 },
          { type: "multiple_choice", question: "'Fue a Madrid, ___ allí tres años.' (posterior - INCORRECTO en gerundio)", options: ["donde vivió", "viviendo", "vivirá"], correct: 0 },
          { type: "multiple_choice", question: "'___ es malo para la salud.' (sujeto = infinitivo)", options: ["Fumar", "Fumando", "El fumar"], correct: 0 },
          { type: "multiple_choice", question: "Error de gerundio de posterioridad:", options: ["Cayó, rompiéndose la pierna después.", "Entró sonriendo.", "Habló mirándome."], correct: 0 },
          { type: "syntax", turkish: "Ağlayarak aradı. (simultáneo)", spanish: "Llamó llorando", words: ["Llamó", "llorando", "y", "lloró", "llorado"] },
          { type: "syntax", turkish: "Eve gitti ve yorgun olduğunu fark etti. (posterior)", spanish: "Fue a casa y se dio cuenta de que estaba cansado", words: ["Fue", "a", "casa", "y", "se", "dio", "cuenta", "de", "que", "estaba", "cansado", "dándose"] }
        ]
      }
    }
  ]
};

// UNIDAD 9.5: LOS 4 PASADOS UNIDOS
// Posición: Entre U9 (Pluscuamperfecto) y U10 (Futuro Simple)
// Justificación: El estudiante llega a B1 sin haber integrado los 4 pasados en producción libre

export const unidad9_5_cuatro_pasados = {
  id: "u9_5",
  title: "Unidad 9.5: Los 4 Pasados Unidos",
  description: "Ya los conoces por separado. Ahora los usas todos juntos como hacen los nativos. Este es el salto más importante antes de entrar a B1.",
  nodes: [
    {
      id: "u9_5_n1", type: "theory", title: "Los 4 Pasados: Mapa Mental",
      content: {
        concept: "Antes de unirlos, repasemos qué hace cada uno:\n\n🟦 PRETÉRITO PERFECTO (He hablado)\n→ Pasado reciente / conectado al presente\n→ Marcadores: hoy, esta semana, este año, ya, todavía no, alguna vez\n→ 'He comido hoy.' / '¿Has estado en Madrid?'\n\n🟩 PRETÉRITO INDEFINIDO (Hablé)\n→ Pasado completo, cerrado, en un momento específico\n→ Marcadores: ayer, el año pasado, en 2019, una vez, de repente\n→ 'Llegué ayer.' / 'Nació en 1990.'\n\n🟨 PRETÉRITO IMPERFECTO (Hablaba)\n→ Descripción del pasado / habitual en el pasado / acción en progreso cuando otra interrumpió\n→ Marcadores: antes, de niño, siempre, mientras, cuando era...\n→ 'De niño vivía en Ankara.' / 'Llovía cuando salí.'\n\n🟥 PRETÉRITO PLUSCUAMPERFECTO (Había hablado)\n→ El pasado del pasado — algo que ya había ocurrido ANTES de otro momento pasado\n→ Marcadores: ya, antes de que, cuando llegué (ya había...)\n→ 'Cuando llegué, ya se habían ido.'",
        examples: [
          { es: "PERFECTO: Este año he aprendido mucho.", tr: "Bu yıl çok şey öğrendim. (bu yıl hâlâ devam ediyor)" },
          { es: "INDEFINIDO: El año pasado aprendí mucho.", tr: "Geçen yıl çok şey öğrendim. (bitti, tamamlandı)" },
          { es: "IMPERFECTO: De niño aprendía rápido.", tr: "Çocukken hızlı öğrenirdim. (alışkanlık)" },
          { es: "PLUSCUAMPERFECTO: Cuando llegué, ya había aprendido.", tr: "Geldiğimde zaten öğrenmişti. (daha önceki geçmiş)" }
        ]
      }
    },
    {
      id: "u9_5_n2", type: "theory", title: "Conectores que dictan el tiempo verbal",
      content: {
        concept: "Los conectores temporales te DICEN qué tiempo usar. Son tu mapa:\n\n📌 CONECTORES → TIEMPO OBLIGATORIO:\n\n'HOY / ESTA SEMANA / ESTE AÑO / YA / TODAVÍA NO / ALGUNA VEZ'\n→ Pretérito Perfecto\n\n'AYER / EL LUNES / EN 2015 / DE REPENTE / DE PRONTO / UNA VEZ / AL FINAL'\n→ Pretérito Indefinido\n\n'ANTES / DE NIÑO/A / SIEMPRE QUE... / MIENTRAS / CUANDO ERA... / NORMALMENTE (en pasado)'\n→ Pretérito Imperfecto\n\n'CUANDO LLEGUÉ, YA... / ANTES DE QUE... / NUNCA ANTES... / YA HABÍA...'\n→ Pretérito Pluscuamperfecto\n\n🇹🇷 VENTAJA TURCA: El turco también distingue entre -dı (indefinido/completado), -ıyordu (imperfecto/continuo en pasado) y -mıştı (pluscuamperfecto). ¡Ya tienes la lógica internamente!",
        examples: [
          { es: "Esta mañana he desayunado tarde.", tr: "Bu sabah geç kahvaltı ettim. → PERFECTO (esta mañana = reciente)" },
          { es: "El lunes pasado desayuné tarde.", tr: "Geçen Pazartesi geç kahvaltı ettim. → INDEFINIDO (el lunes = cerrado)" },
          { es: "De niño siempre desayunaba tarde.", tr: "Çocukken her zaman geç kahvaltı ederdim. → IMPERFECTO (hábito pasado)" },
          { es: "Cuando llegué, ya habían desayunado.", tr: "Geldiğimde zaten kahvaltı etmişlerdi. → PLUSCUAMPERFECTO (anterior al pasado)" }
        ]
      }
    },
    {
      id: "u9_5_n3", type: "theory", title: "Los 4 en una misma historia",
      content: {
        concept: "Así es como un nativo usa los 4 pasados naturalmente en un mismo párrafo. Observa cómo cada tiempo tiene su función específica:",
        examples: [
          { es: "TEXTO COMPLETO:", tr: "TAM METİN:" },
          { es: "Cuando era niño [IMPERFECTO: descripción de época], vivía en un pueblo pequeño [IMPERFECTO: situación habitual]. Un verano [INDEFINIDO: momento específico], llegó una familia nueva al pueblo [INDEFINIDO: acción puntual]. El padre de la familia resultó ser el mejor amigo que mi padre había tenido [PLUSCUAMPERFECTO: anterior al pasado] en la universidad. Desde entonces, este año hemos quedado tres veces ya [PERFECTO: pasado reciente conectado al presente].", tr: "Ben çocukken [IMPERFECT: dönem tanımı], küçük bir kasabada yaşıyordum [IMPERFECT: alışkanlık]. Bir yaz [INDEF: belirli an], kasabaya yeni bir aile geldi [INDEF: anlık eylem]. Ailenin babası, babamın üniversitede sahip olduğu [PLUPERFECT: geçmişten önce] en iyi arkadaşı çıktı. O günden beri, bu yıl zaten üç kez buluştuk [PERFECT: günümüze bağlı yakın geçmiş]." }
        ]
      }
    },
    {
      id: "u9_5_n4", type: "theory", title: "El Reto Turco: SOV vs SVO en el Pasado",
      content: {
        concept: "🇹🇷 ANÁLISIS PARA TURCOS\n\nEn turco, el orden es Sujeto-Objeto-Verbo y el tiempo se marca AL FINAL de la oración con sufijos. En español, el tiempo va en el verbo que aparece ANTES del objeto.\n\nEsto crea un error específico de turcos: poner el verbo al final de la oración.\n\n❌ 'Ayer yo la película vi.' (orden turco)\n✅ 'Ayer yo vi la película.' (orden español SVO)\n\n❌ 'Cuando niño era, en Ankara vivía.' (orden turco)\n✅ 'Cuando era niño, vivía en Ankara.' (orden español)\n\nAdemás, en turco el tiempo compuesto del tipo 'había comido' (-mıştı) lleva el auxiliar pegado al verbo. En español el auxiliar HABER va SIEMPRE ANTES y SEPARADO:\n❌ 'Comidohab ía' (imposible)\n✅ 'Había comido' (auxiliar separado, antes del participio)",
        examples: [
          { es: "Ayer compré un libro.", tr: "Dün bir kitap SAT-IN AL-DIM. (Türkçe SOV → S kitap-O, aldım-V sonda)" },
          { es: "Cuando llegué, ya habían comido.", tr: "Geldiğimde zaten yemek YEMİŞLERDİ. (Türkçe: eylem sonda, İspanyolca: había+participio ortada)" },
          { es: "Esta semana he visto tres películas.", tr: "Bu hafta üç film İZLEDİM. (Türkçe: İzledim sonda. İspanyolca: he visto ortada)" }
        ]
      }
    },
    {
      id: "u9_5_n5", type: "reading", title: "Lectura: La historia de Carmen",
      content: {
        text: "Carmen tiene 35 años y esta semana ha recibido una noticia increíble: la han aceptado en un programa de doctorado en Madrid.\n\nCuando era pequeña, siempre quería ser investigadora. Vivía en un pueblo de Andalucía y su biblioteca favorita era la pequeña del barrio. Allí pasaba horas leyendo libros de ciencia.\n\nHace diez años, se mudó a Estambul por amor. Se casó con un turco llamado Murat y aprendió turco en solo dos años. Antes de llegar a Turquía, nunca había probado la comida turca, pero el primer día ya había probado el baklava y quedó enamorada.\n\nAhora, este año, toda su familia ha estado muy emocionada con la noticia del doctorado. Murat ya ha buscado apartamentos en Madrid. La aventura continúa.",
        translation: "Carmen 35 yaşında ve bu hafta inanılmaz bir haber aldı: Madrid'deki bir doktora programına kabul edildi.\n\nKüçükken, her zaman araştırmacı olmak istiyordu. Endülüs'te küçük bir kasabada yaşıyordu ve en sevdiği kütüphane mahallenin küçük kütüphanesiydi. Orada saatlerce bilim kitapları okuyordu.\n\nOn yıl önce, aşk uğruna İstanbul'a taşındı. Murat adında bir Türk'le evlendi ve sadece iki yılda Türkçe öğrendi. Türkiye'ye gelmeden önce, hiç Türk yemeği tatmamıştı, ama ilk gün zaten baklava tatmıştı ve aşık oldu.\n\nŞimdi, bu yıl bütün ailesi doktora haberiyle çok heyecanlandı. Murat zaten Madrid'de daireler aramaya başladı. Macera devam ediyor."
      }
    },
    {
      id: "u9_5_n6", type: "quiz", title: "Práctica: Elige el tiempo correcto",
      exercises: [
        { type: "multiple_choice", question: "Esta mañana ___ (desayunar) tarde.", options: ["he desayunado", "desayuné", "desayunaba"], correct: 0 },
        { type: "multiple_choice", question: "El martes pasado ___ (llegar) tarde al trabajo.", options: ["llegué", "he llegado", "llegaba"], correct: 0 },
        { type: "multiple_choice", question: "De niño ___ (jugar) al fútbol todos los días.", options: ["jugaba", "jugué", "he jugado"], correct: 0 },
        { type: "multiple_choice", question: "Cuando llegué a la fiesta, todos ya ___ (irse).", options: ["se habían ido", "se fueron", "se iban"], correct: 0 },
        { type: "multiple_choice", question: "¿Alguna vez ___ (estar) en Turquía?", options: ["has estado", "estuviste", "estabas"], correct: 0 },
        { type: "multiple_choice", question: "Antes ___ (vivir) en Ankara, pero ahora vivo en Madrid.", options: ["vivía", "viví", "he vivido"], correct: 0 },
        { type: "multiple_choice", question: "Ayer de repente ___ (empezar) a llover.", options: ["empezó", "empezaba", "ha empezado"], correct: 0 },
        { type: "multiple_choice", question: "Nunca antes ___ (ver) una película tan buena.", options: ["había visto", "vi", "he visto"], correct: 0 },
        { type: "syntax", turkish: "Çocukken her yaz Bursa'ya giderdik.", spanish: "De niño íbamos a Bursa cada verano", words: ["De", "niño", "íbamos", "a", "Bursa", "cada", "verano", "fuimos", "hemos ido"] },
        { type: "syntax", turkish: "Geldiğimde, Ali zaten gitmiş.", spanish: "Cuando llegué Ali ya se había ido", words: ["Cuando", "llegué", "Ali", "ya", "se", "había", "ido", "fue", "ha ido"] }
      ]
    },
    {
      id: "u9_5_n7", type: "theory", title: "Sintaxis Visual: Los 4 pasados en acción",
      content: {
        concept: "Deconstruimos: 'Cuando era joven, nunca había pensado que algún día conocería la ciudad donde de niño había soñado vivir, pero ayer por fin llegué y esta semana ya he recorrido cada rincón.'",
        examples: [{ es: "Cuando era joven [IMP], nunca había pensado [PLUSCUAMP] que algún día conocería la ciudad donde de niño había soñado [PLUSCUAMP] vivir, pero ayer por fin llegué [INDEF] y esta semana ya he recorrido [PERF] cada rincón.", tr: "Genç olduğumda [IMP], o gün o şehri tanıyacağımı hiç düşünmemiştim [PLUSCUAMP], o şehirde küçükken yaşamayı hayal etmiştim [PLUSCUAMP], ama dün sonunda geldim [INDEF] ve bu hafta her köşeyi gezdim [PERF]." }],
        analysis: [
          { word: "era (IMP)", type: "verb", literal: "genç iken (alışkanlık/durum)", explanation: "Imperfecto para descripción de etapa de la vida.", examples: [] },
          { word: "había pensado (PLUSCUAMP)", type: "verb", literal: "düşünmemiştim (daha önceki geçmiş)", explanation: "Pluscuamperfecto: anterior a 'era joven'. Dos niveles de pasado.", examples: [] },
          { word: "llegué (INDEF)", type: "verb", literal: "geldim (tamamlandı)", explanation: "Indefinido: acción puntual y completa. 'Ayer' confirma.", examples: [] },
          { word: "he recorrido (PERF)", type: "verb", literal: "gezdim (bu hafta, şimdiye bağlı)", explanation: "Perfecto: 'esta semana' = período que incluye el presente.", examples: [] }
        ]
      }
    },
    {
      id: "u9_5_n8", type: "theory", title: "Caja de Herramientas: Marcadores temporales",
      content: {
        concept: "Conectores y marcadores organizados por tiempo verbal:",
        examples: [
          { es: "PERFECTO: hoy, esta mañana, esta semana, este mes, este año, ya, todavía no, alguna vez, nunca, siempre (=hasta ahora), hace un momento", tr: "Yakın geçmiş / günümüze bağlı" },
          { es: "INDEFINIDO: ayer, el lunes, en 2010, hace 3 años, de repente, entonces, al final, una vez, aquel día, en ese momento", tr: "Tamamlanmış, kapalı geçmiş" },
          { es: "IMPERFECTO: antes, de niño/a, cuando era..., siempre (habitual), normalmente, todos los días, mientras, en aquella época, solía...", tr: "Alışkanlık / süregelen durum geçmişte" },
          { es: "PLUSCUAMPERFECTO: cuando llegué ya había..., antes de que..., nunca antes había..., para entonces ya había..., hacía tiempo que había...", tr: "Geçmişteki andan daha önceki geçmiş" }
        ]
      }
    },
    {
      id: "u9_5_n9", type: "workshop", title: "Taller: Mi autobiografía de 4 tiempos",
      content: {
        prompt: "Escribe tu autobiografía en 100-120 palabras usando OBLIGATORIAMENTE los 4 tiempos del pasado al menos 2 veces cada uno. Marca entre corchetes qué tiempo usas: [PERF], [INDEF], [IMP], [PLUSCUAMP]. Habla de tu infancia, un evento específico del pasado, hábitos que tenías, y algo que ya habías hecho antes de un momento importante.",
        minWords: 100,
        maxWords: 120,
        focusPoints: ["Perfecto para pasado reciente", "Indefinido para eventos puntuales", "Imperfecto para descripción/hábitos", "Pluscuamperfecto para anterior al pasado"]
      }
    },
    {
      id: "u9_5_exam", type: "exam", title: "Examen Final: Unidad 9.5",
      content: {
        concept: "30 preguntas de integración de los 4 tiempos del pasado.",
        exercises: [
          { type: "multiple_choice", question: "Esta mañana ___ (ver) una película buena.", options: ["he visto", "vi", "veía"], correct: 0 },
          { type: "multiple_choice", question: "El sábado pasado ___ (ver) una película buena.", options: ["vi", "he visto", "veía"], correct: 0 },
          { type: "multiple_choice", question: "De pequeño siempre ___ (ver) dibujos animados.", options: ["veía", "vi", "he visto"], correct: 0 },
          { type: "multiple_choice", question: "Cuando llegué, ya ___ (ver) la película sin mí.", options: ["habían visto", "vieron", "veían"], correct: 0 },
          { type: "multiple_choice", question: "¿Alguna vez ___ (estar) en Barcelona?", options: ["has estado", "estuviste", "estabas"], correct: 0 },
          { type: "multiple_choice", question: "En 1990, mis padres ___ (vivir) en Ankara.", options: ["vivían", "han vivido", "vivieron siempre"], correct: 0 },
          { type: "multiple_choice", question: "En 1995 mis padres ___ (mudarse) a Estambul.", options: ["se mudaron", "se mudaban", "se han mudado"], correct: 0 },
          { type: "multiple_choice", question: "Nunca antes ___ (comer) paella hasta ese viaje.", options: ["había comido", "comí", "he comido"], correct: 0 },
          { type: "multiple_choice", question: "Este año ___ (aprender) mucho español.", options: ["he aprendido", "aprendí", "aprendía"], correct: 0 },
          { type: "multiple_choice", question: "Mientras ___ (estudiar), sonó el teléfono.", options: ["estudiaba", "estudié", "he estudiado"], correct: 0 },
          { type: "multiple_choice", question: "Ayer de repente ___ (llamar) un amigo de la infancia.", options: ["llamó", "llamaba", "ha llamado"], correct: 0 },
          { type: "multiple_choice", question: "Cuando era niño, ___ (tener) un perro.", options: ["tenía", "tuve", "he tenido"], correct: 0 },
          { type: "multiple_choice", question: "Para cuando llamé, el médico ya ___ (salir).", options: ["había salido", "salió", "salía"], correct: 0 },
          { type: "multiple_choice", question: "Hoy todavía no ___ (comer).", options: ["he comido", "comí", "comía"], correct: 0 },
          { type: "multiple_choice", question: "Antes de conocer a María, nunca ___ (estar) enamorado.", options: ["había estado", "estuve", "he estado"], correct: 0 },
          { type: "syntax", turkish: "Çocukken İspanyolca öğrenmek istiyordum.", spanish: "De niño quería aprender español", words: ["De", "niño", "quería", "aprender", "español", "quise", "he querido"] },
          { type: "syntax", turkish: "Geçen yıl Madrid'e gittim.", spanish: "El año pasado fui a Madrid", words: ["El", "año", "pasado", "fui", "a", "Madrid", "iba", "he ido"] },
          { type: "syntax", turkish: "Bu yıl üç kitap okudum.", spanish: "Este año he leído tres libros", words: ["Este", "año", "he", "leído", "tres", "libros", "leí", "leía"] },
          { type: "syntax", turkish: "Geldiğimde, zaten yemişlerdi.", spanish: "Cuando llegué ya habían comido", words: ["Cuando", "llegué", "ya", "habían", "comido", "comieron", "comían"] },
          { type: "syntax", turkish: "Çocukken her gün futbol oynardım.", spanish: "De niño jugaba al fútbol cada día", words: ["De", "niño", "jugaba", "al", "fútbol", "cada", "día", "jugué", "he jugado"] },
          { type: "multiple_choice", question: "¿Cuál es CORRECTO para 'hace 5 años'?", options: ["Hace 5 años viví en París.", "Hace 5 años vivía en París.", "Ambas según el contexto."], correct: 2 },
          { type: "multiple_choice", question: "¿Cuál indica HÁBITO en el pasado?", options: ["Siempre comía en casa.", "Siempre comí en casa.", "Siempre he comido en casa."], correct: 0 },
          { type: "multiple_choice", question: "¿Cuál indica ACCIÓN PUNTUAL que interrumpe?", options: ["Cuando dormía, sonó el teléfono.", "Cuando dormí, sonó el teléfono.", "Cuando he dormido, sonó."], correct: 0 },
          { type: "multiple_choice", question: "El Pluscuamperfecto se forma con:", options: ["Había/habías/había... + participio", "He/has/ha... + participio", "Fui/fuiste/fue... + participio"], correct: 0 },
          { type: "multiple_choice", question: "¿Qué tiempo es 'habíamos llegado'?", options: ["Pluscuamperfecto", "Perfecto compuesto", "Indefinido"], correct: 0 },
          { type: "syntax", turkish: "Dün iş yerinde bir sorun çıktı.", spanish: "Ayer surgió un problema en el trabajo", words: ["Ayer", "surgió", "un", "problema", "en", "el", "trabajo", "surgía", "ha surgido"] },
          { type: "syntax", turkish: "Haber geldiğimde zaten duymuştum.", spanish: "Cuando llegó la noticia ya la había escuchado", words: ["Cuando", "llegó", "la", "noticia", "ya", "la", "había", "escuchado", "escuché"] },
          { type: "syntax", turkish: "Bu hafta çok şey öğrendim.", spanish: "Esta semana he aprendido mucho", words: ["Esta", "semana", "he", "aprendido", "mucho", "aprendí", "aprendía"] },
          { type: "syntax", turkish: "Gençken çok seyahat ederdim.", spanish: "Cuando era joven viajaba mucho", words: ["Cuando", "era", "joven", "viajaba", "mucho", "viajé", "he viajado"] },
          { type: "syntax", turkish: "Sınava girdiğimde zaten çalışmıştım.", spanish: "Cuando hice el examen ya había estudiado", words: ["Cuando", "hice", "el", "examen", "ya", "había", "estudiado", "estudié", "estudiaba"] }
        ]
      }
    }
  ]
};

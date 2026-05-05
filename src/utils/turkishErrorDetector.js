// Detects common Spanish errors made by Turkish speakers.
// Returns [{ type, original, suggestion, explanation_tr, explanation_es, severity }]

const TR_ES = {
  explanation_tr: {
    ser_estar:      "Türkçe'de 'olmak' her şey için kullanılır, ama İspanyolca'da 'estar' geçici durumlar ve konum için kullanılır.",
    missing_article:"Türkçe'de artikel yoktur. İspanyolca'da her ismin önünde 'el/la/un/una' olmalıdır.",
    sov_order:      "Türkçe SOV (Özne-Nesne-Eylem) düzenindedir. İspanyolca'da eylem ortada gelir: 'Vi la película'.",
    adj_before_noun:"Türkçe'de sıfat her zaman ismin önüne gelir. İspanyolca'da çoğunlukla ismin arkasına gelir: 'coche rojo'.",
    por_para:       "'Por' ve 'para' Türkçe'deki 'için' kelimesinin yerini paylaşır ama farklı kullanımları vardır.",
    gerund_sequence:"Türkçe'de -arak/-erek hem eş zamanlı hem sonraki eylemler için kullanılır. İspanyolca'da ulaç (-ando/-iendo) ASLA sonraki eylem için kullanılamaz.",
    a_personal:     "İspanyolca'da bir kişiyi fiil nesnesi olarak kullanırken önüne 'a' gelmelidir: 'Llamo a mi madre'.",
    double_negation:"İspanyolca'da olumsuz cümlelerde 'ningún, nadie, nada, nunca' kullanılır. 'Algún, alguien' ile değil.",
  },
  explanation_es: {
    ser_estar:      "En turco 'olmak' se usa para todo, pero en español 'estar' es para estados temporales y ubicación.",
    missing_article:"El turco no tiene artículos. En español todo sustantivo necesita el/la/un/una.",
    sov_order:      "El turco es SOV. En español el verbo va en el medio: 'Vi la película'.",
    adj_before_noun:"En turco el adjetivo va antes. En español normalmente va después: 'coche rojo'.",
    por_para:       "'Por' y 'para' comparten el 'için' turco pero tienen usos distintos.",
    gerund_sequence:"En turco -arak/-erek puede ser posterior. En español el gerundio NUNCA expresa acción posterior.",
    a_personal:     "En español las personas objeto de verbo llevan 'a' antes: 'Llamo a mi madre'.",
    double_negation:"En español la doble negación es correcta: 'No tengo ningún problema', no 'algún'.",
  },
};

function err(type, original, suggestion, severity) {
  return {
    type,
    original,
    suggestion,
    explanation_tr: TR_ES.explanation_tr[type],
    explanation_es: TR_ES.explanation_es[type],
    severity,
  };
}

// ── GRUPO 1: SER vs ESTAR ──────────────────────────────────────────────────
function detectSerEstar(text, errors) {
  const patterns = [
    [/\bsoy\s+en\b/gi,              'soy en',       'estoy en'],
    [/\bsoy\s+cansad[oa]\b/gi,      'soy cansado/a','estoy cansado/a'],
    [/\bsoy\s+enferm[oa]\b/gi,      'soy enfermo/a','estoy enfermo/a'],
    [/\bsoy\s+triste\b/gi,          'soy triste',   'estoy triste'],
    [/\bsoy\s+feliz\b/gi,           'soy feliz',    'estoy feliz'],
    [/\bsoy\s+aburrida?\b/gi,       'soy aburrido/a','estoy aburrido/a'],
    [/\bsoy\s+preocupad[oa]\b/gi,   'soy preocupado/a','estoy preocupado/a'],
  ];
  for (const [re, original, suggestion] of patterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      errors.push(err('ser_estar', m[0], suggestion, 'high'));
    }
  }
}

// ── GRUPO 2: ARTÍCULOS OMITIDOS ────────────────────────────────────────────
const ARTICLE_NOUNS = {
  tengo:    ['libro','coche','carro','problema','trabajo','café','idea','pregunta','dinero','tiempo','casa','perro','gato','hermano'],
  compré:   ['libro','coche','carro','ropa','comida','pan','café','regalo','boleto'],
  compro:   ['libro','coche','carro','ropa','comida','pan','café','regalo'],
  hay:      ['problema','error','solución','pregunta','reunión','fiesta','coche','libro'],
  busco:    ['trabajo','apartamento','piso','libro','solución','amigo','pareja','coche'],
  buscas:   ['trabajo','apartamento','piso','libro','solución','coche'],
  quiero:   ['café','agua','coche','libro','trabajo','casa','pizza','cerveza','perro'],
  quieres:  ['café','agua','coche','libro','trabajo','casa','pizza','cerveza'],
  necesito: ['trabajo','dinero','libro','ayuda','solución','coche','lápiz'],
  necesitas:['trabajo','dinero','libro','ayuda','solución','coche'],
  vendo:    ['coche','carro','libro','casa','apartamento'],
  vendí:    ['coche','carro','libro','casa','apartamento'],
};

const ARTICLES_RE = /\b(tengo|compré|compro|hay|busco|buscas|quiero|quieres|necesito|necesitas|vendo|vendí)\s+(?!(el|la|los|las|un|una|unos|unas|este|esta|ese|esa|mi|tu|su|nuestro|nuestra|vuestra|vuestro|mucho|poco|algo|más|menos|otro|otra|ningún|ninguna|algún|alguna|cualquier)\s)([a-záéíóúüñ]{3,})/gi;

function detectMissingArticles(text, errors) {
  ARTICLES_RE.lastIndex = 0;
  let m;
  while ((m = ARTICLES_RE.exec(text)) !== null) {
    const verb = m[1].toLowerCase();
    const noun = m[3].toLowerCase();
    const allowed = ARTICLE_NOUNS[verb] || [];
    if (allowed.includes(noun)) {
      errors.push(err('missing_article', m[0], `${m[1]} un/una ${m[3]}`, 'high'));
    }
  }
}

// ── GRUPO 3: ORDEN SOV ─────────────────────────────────────────────────────
const PAST_VERBS = 'vi|leí|hice|comí|bebí|compré|escribí|escuché|encontré|perdí|gané|jugué|canté|bailé|dormí|corrí|salí|llegué|volví|leyó|hizo|comió|bebió|compró|escribió|escuchó|encontró|perdió|ganó|durmió|corrió|salió|llegó|volvió|hicimos|comimos|bebimos|compramos|escribimos|escuchamos|dormimos|salimos|llegamos|volvimos';
const SOV_RE = new RegExp(
  `\\b(yo|tú|él|ella|nosotros|vosotros|ellos|ellas)\\s+(el|la|los|las|un|una)\\s+(\\w+)\\s+(${PAST_VERBS})\\b`,
  'gi'
);

function detectSOV(text, errors) {
  SOV_RE.lastIndex = 0;
  let m;
  while ((m = SOV_RE.exec(text)) !== null) {
    const suggestion = `${m[4]} ${m[2]} ${m[3]}`;
    errors.push(err('sov_order', m[0], suggestion, 'medium'));
  }
}

// ── GRUPO 4: ADJETIVO ANTES DEL SUSTANTIVO ────────────────────────────────
const ADJ_NOUN_PAIRS = [
  ['rojo','coche'],['roja','casa'],['rojo','libro'],['rojo','bolígrafo'],
  ['azul','coche'],['azul','casa'],['verde','coche'],['verde','casa'],
  ['negro','coche'],['negra','casa'],['blanco','coche'],['blanca','casa'],
  ['grande','casa'],['grande','coche'],['grande','ciudad'],['grande','problema'],
  ['pequeño','coche'],['pequeña','casa'],['pequeño','problema'],
  ['bonito','día'],['bonita','casa'],['bonito','coche'],['bonita','ciudad'],
  ['nuevo','libro'],['nuevo','coche'],['nueva','casa'],['nueva','idea'],
  ['viejo','amigo'],['vieja','amiga'],['viejo','coche'],['vieja','casa'],
  ['bueno','día'],['buena','idea'],['bueno','trabajo'],
  ['malo','día'],['mala','idea'],['malo','trabajo'],
  ['gran','ciudad'],['gran','problema'],['gran','hombre'],['gran','mujer'],
];

function detectAdjBeforeNoun(text, errors) {
  for (const [adj, noun] of ADJ_NOUN_PAIRS) {
    const re = new RegExp(`\\b${adj}\\s+${noun}\\b`, 'gi');
    let m;
    while ((m = re.exec(text)) !== null) {
      errors.push(err('adj_before_noun', m[0], `${noun} ${adj}`, 'low'));
    }
  }
}

// ── GRUPO 5: POR vs PARA ──────────────────────────────────────────────────
function detectPorPara(text, errors) {
  const patterns = [
    {
      re: /\bgracias\s+para\b/gi,
      fix: (m) => 'gracias por',
    },
    {
      re: /\b(compré|pagué|vendí|cobré|compré)\s+para\s+(\d+)\b/gi,
      fix: (m) => m[0].replace(' para ', ' por '),
    },
    {
      re: /\b(llamé|llamo|habló|hablo|llamé)\s+para\s+teléfono\b/gi,
      fix: (m) => m[0].replace(' para teléfono', ' por teléfono'),
    },
    {
      re: /\b(trabajé|trabajé|estudié|esperé|trabajé|trabajamos|esperamos)\s+para\s+(dos|tres|cuatro|cinco|seis|un|una|\d+)\s+(hora|horas|día|días|semana|semanas|minuto|minutos|mes|meses)\b/gi,
      fix: (m) => m[0].replace(' para ', ' por '),
    },
  ];

  for (const { re, fix } of patterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      const suggestion = fix(m);
      if (suggestion !== m[0]) {
        errors.push(err('por_para', m[0], suggestion, 'medium'));
      }
    }
  }
}

// ── GRUPO 6: GERUNDIO DE POSTERIORIDAD ────────────────────────────────────
// Detects: past-tense-verb ... , gerundio (implies next action, not simultaneous)
const GERUND_SEQUENCE_RE = /([a-záéíóúüñ]+(?:é|ó|amos|aron|ieron|imos))\b[^,.!?]{0,40},\s*([a-záéíóúüñ]*(?:ándome|iéndome|ándolo|iéndolo|ándola|iéndola|ándote|iéndote|ando|iendo))\b/gi;

function detectGerundSequence(text, errors) {
  GERUND_SEQUENCE_RE.lastIndex = 0;
  let m;
  while ((m = GERUND_SEQUENCE_RE.exec(text)) !== null) {
    errors.push(err(
      'gerund_sequence',
      m[0],
      m[0].replace(/,\s*\S+(?:ando|iendo|ándome|iéndome|ándolo|iéndolo)/, ' y después...'),
      'high'
    ));
  }
}

// ── GRUPO 7: A PERSONAL FALTANTE ──────────────────────────────────────────
const HUMAN_VERBS = 'llamo|llamas|llama|llamé|llamaste|llamó|veo|ves|ve|vi|viste|vio|busco|buscas|busca|busqué|buscaste|buscó|espero|esperas|espera|esperé|esperaste|esperó|visito|visitas|visita|visité|visitaste|visitó|ayudo|ayudas|ayuda|ayudé|ayudaste|ayudó';
const POSSESSIVES = 'mi|tu|su|mis|tus|sus';
const PEOPLE_NOUNS = 'madre|padre|hermano|hermana|amigo|amiga|abuelo|abuela|hijo|hija|novio|novia|profesor|profesora|médico|médica|jefe|jefa|vecino|vecina|compañero|compañera|primo|prima';

const A_PERSONAL_RE = new RegExp(
  `\\b(${HUMAN_VERBS})\\s+(?!a\\s)(${POSSESSIVES})\\s+(${PEOPLE_NOUNS})\\b`,
  'gi'
);

// Also detect verb + capitalized name without 'a'
const A_PERSONAL_NAME_RE = new RegExp(
  `\\b(${HUMAN_VERBS})\\s+(?!a\\s)([A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+)\\b`,
  'g'
);

function detectAPersonal(text, errors) {
  A_PERSONAL_RE.lastIndex = 0;
  let m;
  while ((m = A_PERSONAL_RE.exec(text)) !== null) {
    const suggestion = `${m[1]} a ${m[2]} ${m[3]}`;
    errors.push(err('a_personal', m[0], suggestion, 'medium'));
  }

  A_PERSONAL_NAME_RE.lastIndex = 0;
  while ((m = A_PERSONAL_NAME_RE.exec(text)) !== null) {
    const suggestion = `${m[1]} a ${m[2]}`;
    errors.push(err('a_personal', m[0], suggestion, 'medium'));
  }
}

// ── GRUPO 8: DOBLE NEGACIÓN OMITIDA ───────────────────────────────────────
function detectDoubleNegation(text, errors) {
  const patterns = [
    {
      re: /\bno\s+\w+\s+algún\b/gi,
      suggestion: (m) => m[0].replace(/\balgún\b/, 'ningún'),
    },
    {
      re: /\bno\s+\w+\s+alguna\b/gi,
      suggestion: (m) => m[0].replace(/\balguna\b/, 'ninguna'),
    },
    {
      re: /\bno\s+\w+\s+alguien\b/gi,
      suggestion: (m) => m[0].replace(/\balguien\b/, 'nadie'),
    },
    {
      re: /\bno\s+\w+\s+algo\b/gi,
      suggestion: (m) => m[0].replace(/\balgo\b/, 'nada'),
    },
    {
      re: /\bno\s+\w+\s+alguno\b/gi,
      suggestion: (m) => m[0].replace(/\balguno\b/, 'ninguno'),
    },
  ];

  for (const { re, suggestion } of patterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      errors.push(err('double_negation', m[0], suggestion(m), 'medium'));
    }
  }
}

// ── PUBLIC API ─────────────────────────────────────────────────────────────
export function detectTurkishErrors(input) {
  if (!input || input.trim().length < 5) return [];

  const errors = [];
  detectSerEstar(input, errors);
  detectMissingArticles(input, errors);
  detectSOV(input, errors);
  detectAdjBeforeNoun(input, errors);
  detectPorPara(input, errors);
  detectGerundSequence(input, errors);
  detectAPersonal(input, errors);
  detectDoubleNegation(input, errors);

  // Deduplicate by original text
  const seen = new Set();
  return errors.filter(e => {
    const key = e.type + '|' + e.original.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const playSpeech = (rawText, lang = 'es-ES') => {
  if (!rawText) return;
  const cleanText = String(rawText)
    .replace(/#{1,6}\s*/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/[•_`~]/g, '')
    .replace(/---/g, '')
    .replace(/\n/g, ' . ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
};

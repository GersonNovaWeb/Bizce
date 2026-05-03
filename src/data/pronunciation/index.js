// BIZCE PRONUNCIATION DATA — INDEX FINAL
// 880 ítems · 38 categorías
// Estructura: { id, es, tr, phonetic, difficulty (1-3), category, tags[] }

import { academia_espanol } from './academia_espanol';
import { adjetivos_esenciales } from './adjetivos_esenciales';
import { banco_dinero } from './banco_dinero';
import { cocina_recetas } from './cocina_recetas';
import { colores_formas } from './colores_formas';
import { comida_bebida } from './comida_bebida';
import { compras } from './compras';
import { comunicacion_digital } from './comunicacion_digital';
import { conectores_basicos } from './conectores_basicos';
import { cuerpo_salud } from './cuerpo_salud';
import { cultura_arte } from './cultura_arte';
import { deportes_actividades } from './deportes_actividades';
import { dia_a_dia } from './dia_a_dia';
import { emergencias } from './emergencias';
import { emociones } from './emociones';
import { escuela_educacion } from './escuela_educacion';
import { expresiones_idiomaticas } from './expresiones_idiomaticas';
import { expresiones_tiempo } from './expresiones_tiempo';
import { familia_relaciones } from './familia_relaciones';
import { frases_coloquiales } from './frases_coloquiales';
import { frases_utilidad_diaria } from './frases_utilidad_diaria';
import { hogar } from './hogar';
import { medio_ambiente } from './medio_ambiente';
import { naturaleza_clima } from './naturaleza_clima';
import { numeros_tiempo } from './numeros_tiempo';
import { ocio_viaje } from './ocio_viaje';
import { posicion_lugar } from './posicion_lugar';
import { preguntas_conversacion } from './preguntas_conversacion';
import { restaurante } from './restaurante';
import { ropa_moda } from './ropa_moda';
import { saludos } from './saludos';
import { situaciones_sociales } from './situaciones_sociales';
import { tecnologia } from './tecnologia';
import { trabajo } from './trabajo';
import { transporte } from './transporte';
import { verbos_cotidianos } from './verbos_cotidianos';
import { verbos_esenciales } from './verbos_esenciales';
import { viaje_turismo_extra } from './viaje_turismo_extra';

export const allPronunciationData = [
  ...academia_espanol, ...adjetivos_esenciales, ...banco_dinero, ...cocina_recetas, ...colores_formas, ...comida_bebida, ...compras, ...comunicacion_digital, ...conectores_basicos, ...cuerpo_salud, ...cultura_arte, ...deportes_actividades, ...dia_a_dia, ...emergencias, ...emociones, ...escuela_educacion, ...expresiones_idiomaticas, ...expresiones_tiempo, ...familia_relaciones, ...frases_coloquiales, ...frases_utilidad_diaria, ...hogar, ...medio_ambiente, ...naturaleza_clima, ...numeros_tiempo, ...ocio_viaje, ...posicion_lugar, ...preguntas_conversacion, ...restaurante, ...ropa_moda, ...saludos, ...situaciones_sociales, ...tecnologia, ...trabajo, ...transporte, ...verbos_cotidianos, ...verbos_esenciales, ...viaje_turismo_extra
];

export const pronunciationByCategory = {
  academia_espanol, adjetivos_esenciales, banco_dinero, cocina_recetas, colores_formas, comida_bebida, compras, comunicacion_digital, conectores_basicos, cuerpo_salud, cultura_arte, deportes_actividades, dia_a_dia, emergencias, emociones, escuela_educacion, expresiones_idiomaticas, expresiones_tiempo, familia_relaciones, frases_coloquiales, frases_utilidad_diaria, hogar, medio_ambiente, naturaleza_clima, numeros_tiempo, ocio_viaje, posicion_lugar, preguntas_conversacion, restaurante, ropa_moda, saludos, situaciones_sociales, tecnologia, trabajo, transporte, verbos_cotidianos, verbos_esenciales, viaje_turismo_extra
};

export const TOTAL_ITEMS = 880;
export const TOTAL_CATEGORIES = 38;

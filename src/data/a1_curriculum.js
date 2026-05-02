// Importamos cada unidad desde su archivo individual en la carpeta 'units'
import { unidad0_fonetica } from './A1/units/unidad0_fonetica';
import { unidad1 } from './A1/units/unidad1';
import { unidad2 } from './A1/units/unidad2';
import { unidad3 } from './A1/units/unidad3';
import { unidad3_5_articulos } from './A1/units/unidad3_5_articulos';
import { unidad4 } from './A1/units/unidad4';
import { unidad5 } from './A1/units/unidad5';
import { unidad6 } from './A1/units/unidad6';
import { unidad7 } from './A1/units/unidad7';
import { unidad8 } from './A1/units/unidad8';

// Ensamblamos el currículum completo conectando todas las piezas
export const a1Curriculum = {
  level: "A1",
  title: "Fundamentos del Español (Edición Máxima)",
  units: [
    unidad0_fonetica,
    unidad1, unidad2, unidad3,
    unidad3_5_articulos,
    unidad4, unidad5, unidad6, unidad7, unidad8
  ]
};

export const allNodeIds = a1Curriculum.units.flatMap(u => u.nodes.map(n => n.id));
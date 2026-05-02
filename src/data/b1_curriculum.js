import { unidad1 } from './B1/units/unidad1';
import { unidad2 } from './B1/units/unidad2';
import { unidad3 } from './B1/units/unidad3';
import { unidad4 } from './B1/units/unidad4';
import { unidad5 } from './B1/units/unidad5';
import { unidad6 } from './B1/units/unidad6';
import { unidad6_5_peticiones } from './B1/units/unidad6_5_peticiones';
import { unidad7 } from './B1/units/unidad7';
import { unidad8 } from './B1/units/unidad8';
import { unidad9 } from './B1/units/unidad9';
import { unidad10 } from './B1/units/unidad10';
import { unidad11 } from './B1/units/unidad11';
import { unidad12 } from './B1/units/unidad12';
import { unidad13 } from './B1/units/unidad13';
import { unidad14 } from './B1/units/unidad14';
import { unidad14_5_puntuacion } from './B1/units/unidad14_5_puntuacion';
import { unidad15 } from './B1/units/unidad15';

export const b1Curriculum = {
  level: "B1",
  title: "El Umbral de la Fluidez",
  description: "Dominio del Subjuntivo, argumentación avanzada y comunicación independiente.",
  units: [
    unidad1, unidad2, unidad3, unidad4, unidad5,
    unidad6,
    unidad6_5_peticiones,
    unidad7, unidad8, unidad9, unidad10,
    unidad11, unidad12, unidad13, unidad14,
    unidad14_5_puntuacion,
    unidad15
  ]
};

export const allB1NodeIds = b1Curriculum.units.flatMap(unit =>
  unit.nodes.map(node => node.id)
);
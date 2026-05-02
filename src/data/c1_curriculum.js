import { unidad1 } from './C1/units/unidad1';
import { unidad2 } from './C1/units/unidad2';
import { unidad3 } from './C1/units/unidad3';
import { unidad4 } from './C1/units/unidad4';
import { unidad5 } from './C1/units/unidad5';
import { unidad6 } from './C1/units/unidad6';
import { unidad7 } from './C1/units/unidad7';
import { unidad7_5_perifrasis } from './C1/units/unidad7_5_perifrasis';
import { unidad8 } from './C1/units/unidad8';
import { unidad9 } from './C1/units/unidad9';
import { unidad10 } from './C1/units/unidad10';
import { unidad11 } from './C1/units/unidad11';
import { unidad12 } from './C1/units/unidad12';
import { unidad13 } from './C1/units/unidad13';
import { unidad13_5_citas } from './C1/units/unidad13_5_citas';
import { unidad14 } from './C1/units/unidad14';
import { unidad15 } from './C1/units/unidad15';
import { unidad15_5_fonetica_avanzada } from './C1/units/unidad15_5_fonetica_avanzada';
import { unidad16 } from './C1/units/unidad16';
import { unidad17 } from './C1/units/unidad17';
import { unidad18 } from './C1/units/unidad18';
import { unidad19 } from './C1/units/unidad19';
import { unidad20 } from './C1/units/unidad20';

export const c1Curriculum = {
  level: "C1",
  title: "Maestría",
  units: [
    unidad1, unidad2, unidad3, unidad4, unidad5,
    unidad6, unidad7,
    unidad7_5_perifrasis,
    unidad8, unidad9, unidad10, unidad11, unidad12, unidad13,
    unidad13_5_citas,
    unidad14, unidad15,
    unidad15_5_fonetica_avanzada,
    unidad16, unidad17, unidad18, unidad19, unidad20
  ]
};

export const allC1NodeIds = c1Curriculum.units.flatMap(unit =>
  unit.nodes.map(node => node.id)
);
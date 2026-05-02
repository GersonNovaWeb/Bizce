import { unidad1 } from './B2/units/unidad1';
import { unidad2 } from './B2/units/unidad2';
import { unidad3 } from './B2/units/unidad3';
import { unidad4 } from './B2/units/unidad4';
import { unidad4_5_gerundio } from './B2/units/unidad4_5_gerundio';
import { unidad5 } from './B2/units/unidad5';
import { unidad6 } from './B2/units/unidad6';
import { unidad7 } from './B2/units/unidad7';
import { unidad7_5_nominalizacion } from './B2/units/unidad7_5_nominalizacion';
import { unidad8 } from './B2/units/unidad8';
import { unidad9 } from './B2/units/unidad9';
import { unidad10 } from './B2/units/unidad10';
import { unidad11 } from './B2/units/unidad11';
import { unidad12 } from './B2/units/unidad12';
import { unidad12_5_espanol_digital } from './B2/units/unidad12_5_espanol_digital';
import { unidad13 } from './B2/units/unidad13';
import { unidad14 } from './B2/units/unidad14';
import { unidad15 } from './B2/units/unidad15';
import { unidad16 } from './B2/units/unidad16';

export const b2Curriculum = {
  level: "B2",
  title: "El Comunicador Independiente",
  units: [
    unidad1, unidad2, unidad3, unidad4,
    unidad4_5_gerundio,
    unidad5, unidad6, unidad7,
    unidad7_5_nominalizacion,
    unidad8, unidad9, unidad10, unidad11, unidad12,
    unidad12_5_espanol_digital,
    unidad13, unidad14, unidad15, unidad16
  ]
};

export const allB2NodeIds = b2Curriculum.units.flatMap(unit =>
  unit.nodes.map(node => node.id)
);
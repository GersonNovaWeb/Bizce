import { unidad1 } from './C2/units/unidad1';
import { unidad2 } from './C2/units/unidad2';
import { unidad3 } from './C2/units/unidad3';
import { unidad4 } from './C2/units/unidad4';
import { unidad5 } from './C2/units/unidad5';
import { unidad6 } from './C2/units/unidad6';
import { unidad7 } from './C2/units/unidad7';
import { unidad8 } from './C2/units/unidad8';
import { unidad9 } from './C2/units/unidad9';
import { unidad10 } from './C2/units/unidad10';
import { unidad10_5_humor_regional } from './C2/units/unidad10_5_humor_regional';
import { unidad11 } from './C2/units/unidad11';
import { unidad12 } from './C2/units/unidad12';
import { unidad13 } from './C2/units/unidad13';
import { unidad14 } from './C2/units/unidad14';
import { unidad15 } from './C2/units/unidad15';
import { unidad16 } from './C2/units/unidad16';
import { unidad16_5_prosodia } from './C2/units/unidad16_5_prosodia';
import { unidad17 } from './C2/units/unidad17';
import { unidad18 } from './C2/units/unidad18';
import { unidad18_5_escritura_creativa } from './C2/units/unidad18_5_escritura_creativa';
import { unidad19 } from './C2/units/unidad19';
import { unidad20 } from './C2/units/unidad20';

export const c2Curriculum = {
  level: "C2",
  title: "Nativo",
  units: [
    unidad1, unidad2, unidad3, unidad4, unidad5,
    unidad6, unidad7, unidad8, unidad9, unidad10,
    unidad10_5_humor_regional,
    unidad11, unidad12, unidad13, unidad14, unidad15, unidad16,
    unidad16_5_prosodia,
    unidad17, unidad18,
    unidad18_5_escritura_creativa,
    unidad19, unidad20
  ]
};

export const allC2NodeIds = c2Curriculum.units.flatMap(unit =>
  unit.nodes.map(node => node.id)
);
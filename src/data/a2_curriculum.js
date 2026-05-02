import { unidad1 } from './A2/units/unidad1';
import { unidad2 } from './A2/units/unidad2';
import { unidad2_5_ser_estar } from './A2/units/unidad2_5_ser_estar';
import { unidad3 } from './A2/units/unidad3';
import { unidad4 } from './A2/units/unidad4';
import { unidad5 } from './A2/units/unidad5';
import { unidad6 } from './A2/units/unidad6';
import { unidad7 } from './A2/units/unidad7';
import { unidad8 } from './A2/units/unidad8';
import { unidad9 } from './A2/units/unidad9';
import { unidad9_5_cuatro_pasados } from './A2/units/unidad9_5_cuatro_pasados';
import { unidad10 } from './A2/units/unidad10';
import { unidad10_5_por_para } from './A2/units/unidad10_5_por_para';
import { unidad11 } from './A2/units/unidad11';
import { unidad12 } from './A2/units/unidad12';

export const a2Curriculum = {
  level: "A2",
  title: "El Narrador de Historias",
  units: [
    unidad1, unidad2,
    unidad2_5_ser_estar,
    unidad3, unidad4, unidad5, unidad6, unidad7, unidad8, unidad9,
    unidad9_5_cuatro_pasados,
    unidad10,
    unidad10_5_por_para,
    unidad11, unidad12
  ]
};

export const allA2NodeIds = a2Curriculum.units.flatMap(unit =>
  unit.nodes.map(node => node.id)
);
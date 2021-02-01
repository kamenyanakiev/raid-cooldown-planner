import {SPELLS_IMG} from './spells-image-paths.constants';
import {Spec, Spell} from '../models/spec.model';

export enum Specs {
  HOLY_PALADIN = 'HOLY_PALADIN'
}

export enum Spells {
  HOLY_AVENGER = 'HOLY_AVENGER',
  AVENGING_CRUSADER = 'AVENGING_CRUSADER'
}

export const SPELLS_DETAILS: {[key in keyof typeof Spells]: Spell} = {
  [Spells.HOLY_AVENGER]: {
    id: '{spell:105809}',
    icon: SPELLS_IMG.HOLY_AVENGER,
    name: 'Holy Avenger',
    cooldown: 180
  },
  [Spells.AVENGING_CRUSADER]: {
    id: '{spell:216331}',
    icon: '',
    name: 'Avenging Crusader',
    cooldown: 120
  },
};

export const SPEC_DETAILS: {[key in keyof typeof Specs]: Spec} = {
  [Specs.HOLY_PALADIN]: {
    color: 'F58CBA',
    icon: '',
    spells: [SPELLS_DETAILS.HOLY_AVENGER, SPELLS_DETAILS.AVENGING_CRUSADER],
    name: 'Holy Paladin'
  }
};

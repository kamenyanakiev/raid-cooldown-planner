import { SPELLS_DETAILS } from './spell-details.constants';
import { Spec } from '../models/spec.model';

export enum Specs {
  HOLY_PALADIN = 'HOLY_PALADIN',
  DISCIPLINE_PRIEST = 'DISCIPLINE_PRIEST',
  RESTORATION_SHAMAN = 'RESTORATION_SHAMAN',
  RESTORATION_DRUID = 'RESTORATION_DRUID',
  HOLY_PRIEST = 'HOLY_PRIEST',
  MISTWEAVER_MONK = 'MISTWEAVER_MONK',
  WARRIOR = 'WARRIOR',
}

export const SPEC_DETAILS: {[key in keyof typeof Specs]: Spec} = {
  [Specs.HOLY_PALADIN]: {
    color: 'F58CBA',
    icon: '',
    spells: [SPELLS_DETAILS.HOLY_AVENGER, SPELLS_DETAILS.AVENGING_CRUSADER, SPELLS_DETAILS.AURA_MASTERY, SPELLS_DETAILS.AVENGING_WRATH],
    name: 'Holy Paladin',
    specId: Specs.HOLY_PALADIN
  },
  [Specs.DISCIPLINE_PRIEST]: {
    color: 'FFFFFF',
    icon: '',
    spells: [SPELLS_DETAILS.POWER_WORD_BARRIER, SPELLS_DETAILS.EVANGELISM, SPELLS_DETAILS.SHADOWFIEND,
      SPELLS_DETAILS.RAPTURE, SPELLS_DETAILS.SPIRIT_SHELL, SPELLS_DETAILS.RADIANCE],
    name: 'Discipline Priest',
    specId: Specs.DISCIPLINE_PRIEST
  },
  [Specs.RESTORATION_SHAMAN]: {
    color: '0070DE',
    icon: '',
    spells: [SPELLS_DETAILS.SPIRIT_LINK, SPELLS_DETAILS.HEALING_TIDE_TOTEM,
      SPELLS_DETAILS.ANCESTRAL_PROTECTION_TOTEM, SPELLS_DETAILS.ASCENDANCE],
    name: 'Restoration Shaman',
    specId: Specs.RESTORATION_SHAMAN
  },
  [Specs.RESTORATION_DRUID]: {
    color: 'FF7D0A',
    icon: '',
    spells: [SPELLS_DETAILS.HEART_OF_THE_WILD, SPELLS_DETAILS.TRANQUILITY, SPELLS_DETAILS.TREE_OF_LIFE,
      SPELLS_DETAILS.FLOURISH],
    name: 'Restoration Druid',
    specId: Specs.RESTORATION_DRUID
  },
  [Specs.HOLY_PRIEST]: {
    color: 'FFFFFF',
    icon: '',
    spells: [SPELLS_DETAILS.HOLY_WORD_SALVATION, SPELLS_DETAILS.DIVINE_HYMN, SPELLS_DETAILS.APOTHEOSIS],
    name: 'Holy Priest',
    specId: Specs.HOLY_PRIEST
  },
  [Specs.MISTWEAVER_MONK]: {
    color: '00FF96',
    icon: '',
    spells: [SPELLS_DETAILS.REVIVAL],
    name: 'Mistweaver Monk',
    specId: Specs.MISTWEAVER_MONK
  },
  [Specs.WARRIOR]: {
    color: 'c79c6e',
    icon: '',
    spells: [SPELLS_DETAILS.RALLYING_CRY],
    name: 'Warrior',
    specId: Specs.WARRIOR
  },
};

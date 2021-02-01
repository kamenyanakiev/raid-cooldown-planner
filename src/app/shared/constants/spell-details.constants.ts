import { SPELLS_IMG } from './spells-image-paths.constants';
import { Spell } from '../models/spec.model';

export enum Spells {
  HOLY_AVENGER = 'HOLY_AVENGER',
  AVENGING_CRUSADER = 'AVENGING_CRUSADER',
  AURA_MASTERY = 'AURA_MASTERY',
  AVENGING_WRATH = 'AVENGING_WRATH',
  POWER_WORD_BARRIER = 'POWER_WORD_BARRIER',
  EVANGELISM = 'EVANGELISM',
  SHADOWFIEND = 'SHADOWFIEND',
  RAPTURE = 'RAPTURE',
  SPIRIT_SHELL = 'SPIRIT_SHELL',
  RADIANCE = 'RADIANCE',
  HEALING_TIDE_TOTEM = 'HEALING_TIDE_TOTEM',
  ANCESTRAL_PROTECTION_TOTEM = 'ANCESTRAL_PROTECTION_TOTEM',
  ASCENDANCE = 'ASCENDANCE',
  SPIRIT_LINK = 'SPIRIT_LINK',
  HEART_OF_THE_WILD = 'HEART_OF_THE_WILD',
  TRANQUILITY = 'TRANQUILITY',
  TREE_OF_LIFE = 'TREE_OF_LIFE',
  FLOURISH = 'FLOURISH',
}

export const SPELLS_DETAILS: { [key in keyof typeof Spells]: Spell } = {
  [Spells.HOLY_AVENGER]: {
    id: '{spell:105809}',
    icon: SPELLS_IMG.HOLY_AVENGER,
    name: 'Holy Avenger',
    cooldown: 180,
  },
  [Spells.AVENGING_CRUSADER]: {
    id: '{spell:216331}',
    icon: SPELLS_IMG.AVENGING_CRUSADER,
    name: 'Avenging Crusader',
    cooldown: 120,
  },
  [Spells.AURA_MASTERY]: {
    id: '{spell:31821}',
    icon: SPELLS_IMG.AURA_MASTERY,
    name: 'Aura Mastery',
    cooldown: 180,
  },
  [Spells.AVENGING_WRATH]: {
    id: '{spell:31884}',
    icon: SPELLS_IMG.AVENGING_WRATH,
    name: 'Avenging Wrath',
    cooldown: 120,
  },
  [Spells.POWER_WORD_BARRIER]: {
    id: '{spell:62618}',
    icon: SPELLS_IMG.POWER_WORD_BARRIER,
    name: 'Power Word Barrier',
    cooldown: 180,
  },
  [Spells.EVANGELISM]: {
    id: '{spell:246287}',
    icon: SPELLS_IMG.EVANGELISM,
    name: 'Evangelism',
    cooldown: 90,
  },
  [Spells.SHADOWFIEND]: {
    id: '{spell:34433}',
    icon: SPELLS_IMG.SHADOWFIEND,
    name: 'Shadowfiend',
    cooldown: 180,
  },
  [Spells.RAPTURE]: {
    id: '{spell:47536}',
    icon: SPELLS_IMG.RAPTURE,
    name: 'Rapture',
    cooldown: 90,
  },
  [Spells.SPIRIT_SHELL]: {
    id: '{spell:109964}',
    icon: SPELLS_IMG.SPIRIT_SHELL,
    name: 'Spirit Shell',
    cooldown: 60,
  },
  [Spells.RADIANCE]: {
    id: '{spell:194509}',
    icon: SPELLS_IMG.RADIANCE,
    name: 'Radiance',
    cooldown: 40,
  },
  [Spells.HEALING_TIDE_TOTEM]: {
    id: '{spell:108280}',
    icon: SPELLS_IMG.HEALING_TIDE_TOTEM,
    name: 'Healing Tide Totem',
    cooldown: 180,
  },
  [Spells.ANCESTRAL_PROTECTION_TOTEM]: {
    id: '{spell:207399}',
    icon: SPELLS_IMG.ANCESTRAL_PROTECTION_TOTEM,
    name: 'Ancestral Protection Totem',
    cooldown: 300,
  },
  [Spells.ASCENDANCE]: {
    id: '{spell:114049}',
    icon: SPELLS_IMG.ASCENDANCE,
    name: 'Ascendance',
    cooldown: 180,
  },
  [Spells.SPIRIT_LINK]: {
    id: '{spell:98008}',
    icon: SPELLS_IMG.SPIRIT_LINK,
    name: 'Spirit Link',
    cooldown: 180,
  },
  [Spells.HEART_OF_THE_WILD]: {
    id: '{spell:10286}',
    icon: SPELLS_IMG.HEART_OF_THE_WILD,
    name: 'Heart of the Wild',
    cooldown: 300,
  },
  [Spells.TRANQUILITY]: {
    id: '{spell:740}',
    icon: SPELLS_IMG.TRANQUILITY,
    name: 'Tranquility',
    cooldown: 180,
  },
  [Spells.TREE_OF_LIFE]: {
    id: '{spell:33891}',
    icon: SPELLS_IMG.TREE_OF_LIFE,
    name: 'Incarnation: Tree of Life',
    cooldown: 180,
  },
  [Spells.FLOURISH]: {
    id: '{spell:197721}',
    icon: SPELLS_IMG.FLOURISH,
    name: 'Flourish',
    cooldown: 180,
  },
};
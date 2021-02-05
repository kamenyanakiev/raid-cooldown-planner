import { Specs } from './constants/spec-details.constants';

export function getBackgroundClass(spec): string {
  switch (spec) {
    case Specs.HOLY_PALADIN:
      return 'paladin_bg';
    case Specs.DISCIPLINE_PRIEST:
      return 'priest_bg';
    case Specs.HOLY_PRIEST:
      return 'priest_bg';
    case Specs.RESTORATION_DRUID:
      return 'druid_bg';
    case Specs.RESTORATION_SHAMAN:
      return 'shaman_bg';
    case Specs.MISTWEAVER_MONK:
      return 'monk_bg';
    case Specs.WARRIOR:
      return 'warrior_bg';
    default:
      break;
  }
}

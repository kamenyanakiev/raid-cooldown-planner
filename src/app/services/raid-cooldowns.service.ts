import { Injectable } from '@angular/core';
import { SPEC_DETAILS } from '@app/shared/constants/spec-details.constants';
import { SPELLS_DETAILS } from '@app/shared/constants/spell-details.constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaidCooldownsService {

constructor() { }

  getCooldownData(): Observable<any> {
    return of([
      {
        name: 'Desolate 1',
        time: '0:25',
        actions: [
          { spec: SPEC_DETAILS.HOLY_PALADIN.name,
            specId: SPEC_DETAILS.HOLY_PALADIN.specId,
            player: 'Racor',
            spell: SPELLS_DETAILS.AVENGING_WRATH
          },
          { spec: SPEC_DETAILS.RESTORATION_SHAMAN.name,
            specId: SPEC_DETAILS.RESTORATION_SHAMAN.specId,
            player: 'Kriz',
            spell: SPELLS_DETAILS.ASCENDANCE
          },
          { spec: SPEC_DETAILS.MISTWEAVER_MONK.name,
            specId: SPEC_DETAILS.MISTWEAVER_MONK.specId,
            player: 'Wshh',
            spell: SPELLS_DETAILS.REVIVAL
          },
        ]
      },
      {
        name: 'Expunge 1',
        time: '0:38',
        actions: [
          { spec: SPEC_DETAILS.HOLY_PALADIN.name,
            specId: SPEC_DETAILS.HOLY_PALADIN.specId,
            player: 'Racor',
            spell: SPELLS_DETAILS.AVENGING_CRUSADER
          },
          { spec: SPEC_DETAILS.HOLY_PRIEST.name,
            specId: SPEC_DETAILS.HOLY_PRIEST.specId,
            player: 'Octo',
            spell: SPELLS_DETAILS.APOTHEOSIS
          }
        ]
      },
      {
        name: 'Desolate 2',
        time: '1:01',
        actions: [
          { spec: SPEC_DETAILS.RESTORATION_DRUID.name,
            specId: SPEC_DETAILS.RESTORATION_DRUID.specId,
            player: 'Moon',
            spell: SPELLS_DETAILS.FLOURISH
          },
          { spec: SPEC_DETAILS.WARRIOR.name,
            specId: SPEC_DETAILS.WARRIOR.specId,
            player: 'Dredd',
            spell: SPELLS_DETAILS.RALLYING_CRY
          },
        ]
      }
    ]);
  }

}

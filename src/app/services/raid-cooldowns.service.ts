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
          }
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
          { spec: SPEC_DETAILS.DISCIPLINE_PRIEST.name,
            specId: SPEC_DETAILS.DISCIPLINE_PRIEST.specId,
            player: 'Octo',
            spell: SPELLS_DETAILS.RADIANCE
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
          }
        ]
      }
    ]);
  }

}

import { Injectable } from '@angular/core';
import { SPEC_DETAILS, SPELLS_DETAILS } from '@app/shared/constants/classes-image-paths.constants';
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
            player: 'Racor',
            spell: SPELLS_DETAILS.HOLY_AVENGER
          }
        ]
      },
      {name: 'Expunge 1', time: '0:38'},
      {name: 'Desolate 2', time: '1:01'}
    ]);
  }

}

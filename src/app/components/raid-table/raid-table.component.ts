import { Component, OnInit } from '@angular/core';
import { RaidCooldownsService } from '@app/services/raid-cooldowns.service';
import { Specs } from '@app/shared/constants/spec-details.constants';

@Component({
  selector: 'rcp-raid-table',
  templateUrl: './raid-table.component.html',
  styleUrls: ['./raid-table.component.scss']
})
export class RaidTableComponent implements OnInit {
  public data$ = this.raidCooldownsService.getCooldownData();
  public backgroundClass(specId): string {
    switch (specId) {
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
  // test = SPELLS_IMG
  constructor(private raidCooldownsService: RaidCooldownsService) { }

  ngOnInit() {
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { SPELLS_ARRAY } from '@app/shared/constants/spell-details.constants';
import { getBackgroundClass } from '@app/shared/utils';

@Component({
  selector: 'rcp-raid-table-player',
  templateUrl: './raid-table-player.component.html',
  styleUrls: ['./raid-table-player.component.scss']
})
export class RaidTablePlayerComponent implements OnInit {
  @Input() action = {
    player: '',
    spell: {
      name: '',
      icon: '',
      spec: ''
    }
  };
  public spells = SPELLS_ARRAY;
  public selectedSpell = this.spells[0];
  public getBackgroundClass = getBackgroundClass;
  constructor() { }

  ngOnInit() {
    // console.log(this.spells);
  }

}

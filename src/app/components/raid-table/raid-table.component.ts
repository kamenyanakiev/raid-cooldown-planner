import { Component, OnInit } from '@angular/core';
import { RaidCooldownsService } from '@app/services/raid-cooldowns.service';

@Component({
  selector: 'rcp-raid-table',
  templateUrl: './raid-table.component.html',
  styleUrls: ['./raid-table.component.scss']
})
export class RaidTableComponent implements OnInit {
  public data$ = this.raidCooldownsService.getCooldownData();
  // test = SPELLS_IMG
  constructor(private raidCooldownsService: RaidCooldownsService) { }

  ngOnInit() {
  }
}

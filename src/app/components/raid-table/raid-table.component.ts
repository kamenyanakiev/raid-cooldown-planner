import { Component, OnInit } from '@angular/core';
import {SPELLS_IMG} from '@app/shared/constants/spells-image-paths.constants';

@Component({
  selector: 'rcp-raid-table',
  templateUrl: './raid-table.component.html',
  styleUrls: ['./raid-table.component.scss']
})
export class RaidTableComponent implements OnInit {
  public data = [
    {name: 'Desolate 1', time: '0:25'},
    {name: 'Expunge 1', time: '0:38'},
    {name: 'Desolate 2', time: '1:01'}
  ];

  // test = SPELLS_IMG
  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

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
      icon: ''
    }
  };
  constructor() { }

  ngOnInit() {
  }

}

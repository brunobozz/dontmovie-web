import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-list-table',
  templateUrl: './game-list-table.component.html',
})
export class GameListTableComponent {
  @Input() movies: any;
  @Input() searchTerm: any;
}

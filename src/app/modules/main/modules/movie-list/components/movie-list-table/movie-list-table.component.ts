import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list-table',
  templateUrl: './movie-list-table.component.html',
})
export class MovieListTableComponent {
  @Input() movies: any;
}

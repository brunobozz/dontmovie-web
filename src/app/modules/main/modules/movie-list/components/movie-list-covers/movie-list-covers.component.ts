import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list-covers',
  templateUrl: './movie-list-covers.component.html',
})
export class MovieListCoversComponent {
  @Input() movies: any;
}

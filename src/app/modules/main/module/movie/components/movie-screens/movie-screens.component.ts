import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-screens',
  templateUrl: './movie-screens.component.html',
  styleUrls: ['./movie-screens.component.scss'],
})
export class MovieScreensComponent {
  @Input() screens: any;
}

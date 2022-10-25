import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
})
export class MovieGridComponent {
  @Input() movies: any;
  @Output() refreshList = new EventEmitter();

  public refreshGrid(event: any) {
    this.refreshList.emit(event);
  }
}

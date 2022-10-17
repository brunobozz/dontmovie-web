import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list-display',
  templateUrl: './movie-list-display.component.html',
})
export class MovieListDisplayComponent {
  @Output() displayShow = new EventEmitter();

  public showBy(order: string) {
    this.displayShow.emit(order);
  }
}

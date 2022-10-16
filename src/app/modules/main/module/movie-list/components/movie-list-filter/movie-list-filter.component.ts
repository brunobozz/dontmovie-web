import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list-filter',
  templateUrl: './movie-list-filter.component.html',
})
export class MovieListFilterComponent {
  @Output() filter = new EventEmitter();

  public sortBy(sort: string) {
    this.filter.emit(sort);
  }
}

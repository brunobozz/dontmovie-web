import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list-sort',
  templateUrl: './movie-list-sort.component.html',
})
export class MovieListSortComponent {
  @Output() searchSort = new EventEmitter();

  public sortBy(sort: string) {
    this.searchSort.emit(sort);
  }
}

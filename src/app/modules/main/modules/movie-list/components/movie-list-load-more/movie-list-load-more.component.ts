import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list-load-more',
  templateUrl: './movie-list-load-more.component.html',
})
export class MovieListLoadMoreComponent {
  @Output() loadMore = new EventEmitter();

  public more() {
    this.loadMore.emit();
  }
}

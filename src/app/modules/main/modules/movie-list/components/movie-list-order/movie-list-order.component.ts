import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list-order',
  templateUrl: './movie-list-order.component.html',
})
export class MovieListOrderComponent {
  @Output() searchOrder = new EventEmitter();

  public orderBy(order: string) {
    this.searchOrder.emit(order);
  }
}

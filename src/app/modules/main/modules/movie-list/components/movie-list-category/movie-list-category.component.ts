import { Component, EventEmitter, Output } from '@angular/core';
import { categories } from 'src/app/content/categories';

@Component({
  selector: 'app-movie-list-category',
  templateUrl: './movie-list-category.component.html',
})
export class MovieListCategoryComponent {
  public category = 'Todas';
  @Output() searchCategory = new EventEmitter();
  public categories: any = categories;

  public selectCategory(event: any) {
    this.category = event;
    this.searchCategory.emit(event);
  }
}

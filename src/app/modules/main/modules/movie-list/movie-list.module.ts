import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

// COMPONENTES
import { MovieListComponent } from './movie-list.component';
import { MovieListTableComponent } from './components/movie-list-table/movie-list-table.component';
import { MovieListLoadMoreComponent } from './components/movie-list-load-more/movie-list-load-more.component';
import { MovieListSortComponent } from './components/movie-list-sort/movie-list-sort.component';
import { MovieListOrderComponent } from './components/movie-list-order/movie-list-order.component';
import { MovieListCategoriesComponent } from './components/movie-list-categories/movie-list-categories.component';
import { MovieListCategoryComponent } from './components/movie-list-category/movie-list-category.component';
import { MovieListDisplayComponent } from './components/movie-list-display/movie-list-display.component';
import { MovieListCoversComponent } from './components/movie-list-covers/movie-list-covers.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListTableComponent,
    MovieListLoadMoreComponent,
    MovieListSortComponent,
    MovieListOrderComponent,
    MovieListCategoriesComponent,
    MovieListCategoryComponent,
    MovieListDisplayComponent,
    MovieListCoversComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class MovieListModule {}

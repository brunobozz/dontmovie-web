import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// COMPONENTES
import { MovieListComponent } from './movie-list.component';
import { MovieListTableComponent } from './components/movie-list-table/movie-list-table.component';
import { MovieListFilterComponent } from './components/movie-list-filter/movie-list-filter.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListTableComponent,
    MovieListFilterComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class MovieListModule {}

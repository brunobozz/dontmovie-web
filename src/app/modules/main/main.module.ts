import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//COMPONENTS
import { MainComponent } from './main.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';

//MODULES
import { HomeModule } from './modules/home/home.module';
import { MovieModule } from './modules/movie/movie.module';
import { MovieListModule } from './modules/movie-list/movie-list.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, MainNavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeModule,
    MovieModule,
    MovieListModule,
  ],
})
export class MainModule {}

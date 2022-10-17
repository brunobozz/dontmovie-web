import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { MovieComponent } from './movie.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieScreensComponent } from './components/movie-screens/movie-screens.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';

@NgModule({
  declarations: [
    // COMPONENTS
    MovieComponent,
    MovieInfoComponent,
    MovieScreensComponent,
    MovieRatingComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
})
export class MovieModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHighlightsComponent } from './components/home-highlights/home-highlights.component';
import { HomeShelfComponent } from './components/home-shelf/home-shelf.component';
import { HomePlatformsComponent } from './components/home-platforms/home-platforms.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHighlightsComponent,
    HomeShelfComponent,
    HomePlatformsComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}

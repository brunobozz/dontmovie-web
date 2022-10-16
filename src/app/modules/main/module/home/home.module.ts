import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHighlightsComponent } from './comps/home-highlights/home-highlights.component';
import { HomeShelfComponent } from './comps/home-shelf/home-shelf.component';
import { HomePlatformsComponent } from './comps/home-platforms/home-platforms.component';
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
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-botton-right',
      maxOpened: 2,
      autoDismiss: true,
      preventDuplicates: true,
    }),
  ],
})
export class HomeModule {}

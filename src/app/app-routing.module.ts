import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdComponent } from './modules/cmd/cmd.component';
import { CmdGameComponent } from './modules/cmd/routes/cmd-game/cmd-game.component';
import { MovieListComponent } from './modules/movie-list/movie-list.component';
import { MovieComponent } from './modules/movie/movie.component';
import { HomeComponent } from './modules/home/home.component';
import { PlatformComponent } from './modules/platform/platform.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cmd',
    component: CmdComponent,
    children: [
      { path: 'game', component: CmdGameComponent },
      {
        path: '',
        redirectTo: 'game',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: 'category/:category',
    component: PlatformComponent,
  },
  {
    path: 'movie-list',
    component: MovieListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

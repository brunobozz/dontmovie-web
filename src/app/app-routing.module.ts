import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { CmdComponent } from './modules/cmd/cmd.component';
import { CmdGameComponent } from './modules/cmd/routes/cmd-game/cmd-game.component';
import { MovieListComponent } from './modules/main/modules/movie-list/movie-list.component';
import { MovieComponent } from './modules/main/modules/movie/movie.component';
import { HomeComponent } from './modules/main/modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { ProfileComponent } from './modules/main/modules/profile/profile.component';
import { MyListComponent } from './modules/main/modules/my-list/my-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'movie/:id',
        component: MovieComponent,
      },
      {
        path: 'movie-list',
        component: MovieListComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'my-list',
        component: MyListComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

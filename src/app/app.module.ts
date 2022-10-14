import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//INTERCEPTORS
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';

// APP MODULES
import { HomeModule } from './modules/home/home.module';
import { CmdModule } from './modules/cmd/cmd.module';
import { MovieModule } from './modules/movie/movie.module';
import { PlatformModule } from './modules/platform/platform.module';
import { MovieListModule } from './modules/movie-list/movie-list.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainNavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CmdModule,
    MovieModule,
    PlatformModule,
    MovieListModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//INTERCEPTORS
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorService } from './services/loading/loading-interceptor.service';

// COMPONENTS
import { AppComponent } from './app.component';

// APP MODULES
import { CmdModule } from './modules/cmd/cmd.module';
import { SharedModule } from './modules/shared/shared.module';
import { LoginModule } from './modules/login/login.module';
import { MainModule } from './modules/main/main.module';
import { MyListModule } from './modules/main/modules/my-list/my-list.module';
import { ProfileModule } from './modules/main/modules/profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //MODULES
    SharedModule,
    LoginModule,
    MainModule,
    CmdModule,
    MyListModule,
    ProfileModule,
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

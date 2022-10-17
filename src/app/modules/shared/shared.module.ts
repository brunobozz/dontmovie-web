import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchTermComponent } from './components/search-term/search-term.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { RouterModule } from '@angular/router';
import { MovieBoxComponent } from './components/movie-box/movie-box.component';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    SearchTermComponent,
    LoadingSpinnerComponent,
    UserDropdownComponent,
    MovieBoxComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 20000,
      positionClass: 'toast-botton-right',
      maxOpened: 5,
      autoDismiss: true,
      preventDuplicates: true,
    }),
  ],
  exports: [
    SearchTermComponent,
    LoadingSpinnerComponent,
    UserDropdownComponent,
    MovieBoxComponent,
  ],
})
export class SharedModule {}

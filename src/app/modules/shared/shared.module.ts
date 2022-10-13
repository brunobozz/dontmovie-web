import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchTermComponent } from './components/search-term/search-term.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [SearchTermComponent, LoadingSpinnerComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchTermComponent, LoadingSpinnerComponent],
})
export class SharedModule {}

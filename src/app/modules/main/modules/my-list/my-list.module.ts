import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './my-list.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [MyListComponent],
  imports: [CommonModule, SharedModule],
})
export class MyListModule {}

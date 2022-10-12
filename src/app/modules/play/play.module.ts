import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { SafePipe } from 'src/app/pipes/safe-pipe';

@NgModule({
  declarations: [SafePipe, PlayComponent],
  imports: [CommonModule],
})
export class PlayModule {}

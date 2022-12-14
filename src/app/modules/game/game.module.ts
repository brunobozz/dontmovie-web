import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameScreensComponent } from './components/game-screens/game-screens.component';
import { GameRatingComponent } from './components/game-rating/game-rating.component';
import { EmulatorjsComponent } from './components/emulatorjs/emulatorjs.component';

@NgModule({
  declarations: [
    // COMPONENTS
    GameComponent,
    GameInfoComponent,
    GameScreensComponent,
    GameRatingComponent,
    EmulatorjsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
})
export class GameModule {}

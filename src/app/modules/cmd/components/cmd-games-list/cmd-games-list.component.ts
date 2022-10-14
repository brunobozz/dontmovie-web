import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-cmd-games-list',
  templateUrl: './cmd-games-list.component.html',
  styleUrls: ['./cmd-games-list.component.scss'],
})
export class CmdGamesListComponent implements OnInit {
  public gamesList: any;
  constructor(private apiService: BackendApiService) {}

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.apiService.getData('/games').subscribe((res: any) => {
      this.gamesList = res;
      this.orderGames();
    });
  }

  private orderGames() {
    this.gamesList = this.gamesList.sort((a: any, b: any) =>
      a.title < b.title ? -1 : 1
    );
  }
}

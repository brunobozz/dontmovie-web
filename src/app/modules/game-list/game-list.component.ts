import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/content/games';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit {
  public term: string = '';
  public movies: any;

  constructor(private apiService: ServMovkApiService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {
    this.apiService.getData('/movies').subscribe((res: any) => {
      this.movies = res;
      this.sortListAsc(this.movies);
      this.filter('category');
    });
  }

  public sortListAsc(list: any) {
    list.sort((a: any, b: any) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }

  public sortListPlatform(list: any) {
    list.sort((a: any, b: any) =>
      a.category > b.category ? 1 : b.category > a.category ? -1 : 0
    );
  }

  public filter(event: any) {
    switch (event) {
      case 'movie': {
        this.sortListAsc(this.movies);
        break;
      }
      case 'category': {
        this.sortListPlatform(this.movies);
        break;
      }
      default: {
        this.sortListAsc(this.movies);
        break;
      }
    }
  }

  public searchTerm(event: any) {
    this.term = event;
  }
}

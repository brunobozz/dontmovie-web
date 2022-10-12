import { Component } from '@angular/core';
import { games } from 'src/app/content/games';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';
import { ServThemeService } from 'src/app/services/serv-theme/serv-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public gamesList: any = games;
  public categories: any = [
    '4K',
    '2022',
    'Lançamentos',
    'Comédia',
    'Ação',
    'Ficção',
    'Shows Internacionais',
    'Terror',
    'Documentários',
    'Animação/Infantil',
    'Nacional',
    'Romance',
    'Drama/Suspense',
    'Policial',
    'Clássicos',
  ];
  public movies: any;

  constructor(private apiService: ServMovkApiService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {
    this.apiService.getData('/movies').subscribe((res: any) => {
      this.movies = res;
    });
  }

  public filterMovies(movies: any, category: string) {
    let list: any[] = [];
    movies.map((movie: any) => {
      if (movie.category == category) {
        list.push(movie);
      }
    });
    return list;
  }
}

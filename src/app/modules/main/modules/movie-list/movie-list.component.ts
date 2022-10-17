import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public search: any = {
    limit: '50',
    page: '1',
    category: '',
    term: '',
    sort: 'name',
    order: 'asc',
  };
  public display = 'images';
  public movies: any;

  constructor(private apiService: BackendApiService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  private endPoint() {
    return (
      '/movies?_limit=' +
      this.search.limit +
      '&category_like=' +
      this.search.category +
      '&_sort=' +
      this.search.sort +
      '&_order=' +
      this.search.order +
      '&name_like=' +
      this.search.term +
      '&_page=' +
      this.search.page
    );
  }

  private getMovies() {
    this.apiService.getData(this.endPoint()).subscribe((res: any) => {
      this.movies = res;
    });
  }

  private pushMovies() {
    this.apiService.getData(this.endPoint()).subscribe((res: any) => {
      res.map((movie: any) => {
        this.movies.push(movie);
      });
    });
  }

  public loadMore() {
    this.search.page++;
    this.pushMovies();
  }

  public searchCategory(event: any) {
    if (event == 'Todas') {
      this.search.category = '';
      this.getMovies();
    } else {
      this.search.category = event;
      this.getMovies();
    }
  }

  public searchSort(event: any) {
    this.search.sort = event;
    this.getMovies();
  }

  public searchOrder(event: any) {
    this.search.order = event;
    this.getMovies();
  }

  public searchTerm(event: any) {
    this.search.term = event;
    this.getMovies();
  }

  public displayShow(event: any) {
    this.display = event;
  }
}

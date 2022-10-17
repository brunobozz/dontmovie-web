import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
})
export class MyListComponent implements OnInit {
  public userId = window.localStorage.getItem('meId');
  public movies: any = [];

  constructor(private backendApi: BackendApiService) {}

  ngOnInit(): void {
    this.getList();
  }

  public getList() {
    this.backendApi.getData('/users/' + this.userId).subscribe((res: any) => {
      res.favorites.forEach(async (element: number) => {
        await this.getMovies(element);
      });
    });
  }

  private async getMovies(id: number) {
    this.backendApi.getData('/movies/' + id).subscribe((res: any) => {
      this.movies.push(res);
    });
  }

  public refreshList(event: any) {
    console.log(this.movies);
    this.movies = this.movies.filter((e: any) => e.id !== event);
    console.log(this.movies);
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
})
export class PlayComponent implements OnInit {
  public movie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ServMovkApiService
  ) {}

  ngOnInit(): void {
    this.loadMovie();
  }

  private loadMovie() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getMovie(params['id']);
      }
    });
  }

  private getMovie(movie: string) {
    this.apiService
      .getData('/movies?name_like=' + movie)
      .subscribe((res: any) => {
        this.movie = res[0];
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movie: any;
  public state = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadMovie();
  }

  private loadMovie() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.findMovie(params['id']);
      }
    });
  }

  private findMovie(id: string) {}

  public playMovie() {
    this.state = true;
  }
}

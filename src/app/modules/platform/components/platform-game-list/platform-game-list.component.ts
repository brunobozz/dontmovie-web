import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-platform-game-list',
  templateUrl: './platform-game-list.component.html',
  styleUrls: ['./platform-game-list.component.scss'],
})
export class PlatformGameListComponent implements OnInit {
  @Input() searchTerm: any;
  public movies: any;
  public category?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: BackendApiService
  ) {}

  ngOnInit(): void {
    this.readPlatform();
  }

  private readPlatform() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['category']) {
        this.category = params['category'];
        this.getMovies(params['category']);
      }
    });
  }

  private async getMovies(category: string) {
    this.apiService
      .getData('/movies?category_like=' + category + '&_sort=name&_order=asc')
      .subscribe((res: any) => {
        this.movies = res;
      });
  }
}

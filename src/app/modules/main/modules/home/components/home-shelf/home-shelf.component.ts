import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-home-shelf',
  templateUrl: './home-shelf.component.html',
  styleUrls: ['./home-shelf.component.scss'],
})
export class HomeShelfComponent implements OnInit {
  @Input() category?: string;
  public movies: any;
  public imgSize = '200px';

  private elem!: HTMLElement;

  constructor(private router: Router, private apiService: BackendApiService) {}

  async ngOnInit() {
    await this.getMovies();
  }

  private async getMovies() {
    this.apiService
      .getData('/movies?category_like=' + this.category + '&_limit=50')
      .subscribe((res: any) => {
        this.movies = res;
        this.shuffleArray(this.movies);
      });
  }

  private async shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  public async scrollShelfLeft(element: HTMLElement) {
    element.scrollTo(element.scrollLeft - element.offsetWidth, 0);
  }
  public scrollShelfRight(element: HTMLElement) {
    element.scrollTo(element.scrollLeft + element.offsetWidth, 0);
  }

  public letsGame(id: string) {
    this.router.navigateByUrl('/play/' + id);
  }

  // ===================================================== ARUMAR ESSA MERDA
  public changeSize(event: any) {
    switch (event) {
      case '1x':
        this.imgSize = '100px';
        break;
      case '2x':
        this.imgSize = '200px';
        break;
      case '3x':
        this.imgSize = '300px';
        break;
      default:
        this.imgSize = '100px';
    }
  }
}

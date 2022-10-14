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

  private elem!: HTMLElement;

  constructor(private router: Router, private apiService: BackendApiService) {}

  async ngOnInit() {
    await this.getMovies();

    // gambiarra para evitar que o ramdom da shelf mude quando clica na seta de scroll
    // para testar apenas comente a linha a baixo e clique na seta de scroll dentro do app
    await this.scrollShelfLeft(this.elem);
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
}

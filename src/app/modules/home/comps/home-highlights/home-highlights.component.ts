import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-home-highlights',
  templateUrl: './home-highlights.component.html',
  styleUrls: ['./home-highlights.component.scss'],
})
export class HomeHighlightsComponent implements OnInit {
  public highlights: any = [];

  constructor(private apiService: BackendApiService) {}

  async ngOnInit() {
    this.getMovie('666');
    this.getMovie('1111');
    this.getMovie('500');
  }

  private getMovie(value: string) {
    this.apiService
      .getData('/movies?_limit=1&_page=' + value)
      .subscribe((res: any) => {
        console.log(res);
        this.highlights.push(res[0]);
      });
  }
}

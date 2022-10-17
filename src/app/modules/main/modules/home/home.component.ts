import { Component } from '@angular/core';
import { categories } from 'src/app/content/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public categories: any = categories;
  public movies: any;
}

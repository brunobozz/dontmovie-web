import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
}

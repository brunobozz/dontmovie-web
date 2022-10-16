import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-movie-box',
  templateUrl: './movie-box.component.html',
  styleUrls: ['./movie-box.component.scss'],
})
export class MovieBoxComponent implements OnInit {
  @Input() movie: any;
  @Output() refreshList = new EventEmitter();
  private userId = window.localStorage.getItem('meId');
  private favorites: any;
  public favo?: boolean;

  constructor(
    private backendApi: BackendApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isFavorite();
  }

  private isFavorite() {
    this.favorites = window.localStorage.getItem('meFavorites')?.split(',');
    if (this.favorites?.includes(this.movie.id.toString())) {
      this.favo = true;
    } else {
      this.favo = false;
    }
  }

  public play() {
    window.open(this.movie.url, '_blank');
  }

  public favorite() {
    this.backendApi.getData('/users/' + this.userId).subscribe((res: any) => {
      this.favorites = res.favorites;
      this.favorites.push(this.movie.id.toString());
      this.patchFavorite(this.favorites, 'Adicionado aos favoritos!');
    });
  }

  public unfavorite() {
    this.backendApi.getData('/users/' + this.userId).subscribe((res: any) => {
      this.favorites = res.favorites;
      this.favorites = this.favorites.filter(
        (e: string) => e !== this.movie.id.toString()
      );
      this.patchFavorite(this.favorites, 'Removido dos favoritos!');
    });
  }

  public patchFavorite(favorites: any, message: string) {
    let data = {
      favorites: favorites,
    };
    this.backendApi.patchData('/users/' + this.userId, data).subscribe(() => {
      this.toastr.info(this.movie.name, message);
      this.isFavorite();
      this.refreshList.emit(this.movie.id);
    });
  }
}

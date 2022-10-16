import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  readonly API_PREFIX = environment.backendApi;

  constructor(private http: HttpClient, private router: Router) {}

  public postLogin(username: string, password: string) {
    return this.http.get(
      this.API_PREFIX +
        '/users?username_like=' +
        username +
        '&password_like=' +
        password
    );
  }

  public login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('meId', user.id);
      window.localStorage.setItem('meFavorites', user.favorites.toString());
      resolve(true);
    });
  }

  public logout() {
    window.localStorage.clear();
    this.router.navigate(['login']);
  }

  public getUser(id: number) {
    return this.http.get(this.API_PREFIX + '/users?id_like=' + id);
  }
}

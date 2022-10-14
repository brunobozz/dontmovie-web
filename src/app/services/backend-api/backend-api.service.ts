import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  private API_PREFIX = environment.backendApi;

  constructor(private http: HttpClient) {}

  public getData(endPoint: string) {
    return this.http.get(this.API_PREFIX + endPoint);
  }

  public postData(endPoint: string, data: any) {
    return this.http.post(this.API_PREFIX + endPoint, data);
  }

  public deleteData(endPoint: string, id: string) {
    return this.http.delete(this.API_PREFIX + endPoint + id);
  }
}
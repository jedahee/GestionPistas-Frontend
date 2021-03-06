import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getSports() {
    return this.http.get<any>(this.url + 'get-sports');
  }

  getSport(id: number) {
    return this.http.get<any>(this.url + 'get-sport/' + id);
  }
}

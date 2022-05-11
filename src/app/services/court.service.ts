import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getCourts() {
    return this.http.get<any>(this.url + 'get-courts');
  }
}

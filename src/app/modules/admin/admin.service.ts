import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const URL_AUTH = environment.API_URL + '/api/auth/';
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  daftar(data): Observable<any> {
    return this.http.post(URL_AUTH + 'signup' ,data);
  }

  ambilDataPengguna(): Observable<any> {
    return this.http.get(URL_AUTH + 'admin');
  }

}

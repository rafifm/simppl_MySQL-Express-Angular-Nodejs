import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_AUTH = 'http://localhost:4000/api/auth/';
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

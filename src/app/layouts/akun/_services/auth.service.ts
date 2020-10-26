import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:4000/api/auth/';
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(rahasia): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email_pengguna: rahasia.email,
      password_pengguna: rahasia.password
    }, httpOptions);
  }

  register(pengguna): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email_pengguna: pengguna.email,
      password_pengguna: pengguna.password
    }, httpOptions);
  }

}

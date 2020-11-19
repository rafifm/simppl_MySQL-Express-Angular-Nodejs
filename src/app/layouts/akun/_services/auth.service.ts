import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_API = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(rahasia): Observable<any> {
    return this.http.post(this.AUTH_API + 'signin', {
      email_pengguna: rahasia.email,
      password_pengguna: rahasia.password
    }, httpOptions);
  }

  register(pengguna): Observable<any> {
    return this.http.post(this.AUTH_API + 'signup', {
      email_pengguna: pengguna.email,
      password_pengguna: pengguna.password
    }, httpOptions);
  }

}

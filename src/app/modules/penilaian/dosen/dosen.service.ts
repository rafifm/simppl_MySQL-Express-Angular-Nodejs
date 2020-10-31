import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlDosen = 'http://localhost:4000/api/akundosen';

@Injectable({
  providedIn: 'root'
})
export class DosenService {

  constructor(private http: HttpClient) { }

  ambilDosen(idPengguna): Observable<any> {
    return this.http.get(`${urlDosen}/penilaian/${idPengguna}`);
  }
}

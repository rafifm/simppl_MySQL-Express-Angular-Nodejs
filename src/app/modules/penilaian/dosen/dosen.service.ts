import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlDosen = 'http://localhost:4000/api/akundosen';
const urlMhs = 'http://localhost:4000/api/mhs';

@Injectable({
  providedIn: 'root'
})
export class DosenService {

  constructor(private http: HttpClient) { }

  ambilDosen(idPengguna): Observable<any> {
    return this.http.get(`${urlDosen}/penilaian/${idPengguna}`);
  }

  nilaiUas(idMhsNilai, nilai): Observable<any> {
    return this.http.put(`${urlMhs}/nilaiuas/${idMhsNilai}`, nilai);
  }

  ambilSatuMhs(idMhs): Observable<any> {
    return this.http.get(`${urlMhs}/${idMhs}`);
  }
}

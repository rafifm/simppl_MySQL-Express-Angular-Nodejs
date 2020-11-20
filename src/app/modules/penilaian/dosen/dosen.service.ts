import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const urlDosen = environment.API_URL + '/api/akundosen';
const urlMhs = environment.API_URL + '/api/mhs';

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

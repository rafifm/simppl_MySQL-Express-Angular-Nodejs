import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

const urlAkunDosen = environment.API_URL + '/api/akundosen';

@Injectable({
  providedIn: 'root'
})
export class DatadosenService {
  constructor(private http: HttpClient) { }

  ambilSemua(params): Observable<any> {
    return this.http.get(urlAkunDosen, { params }); 
  }

  ambil(id): Observable<any> {
    return this.http.get(`${urlAkunDosen}/${id}`);
  }

  buat(data): Observable<any> {
    return this.http.post(`${urlAkunDosen}/buat`, data);
  }

  tambahDosen(idPengguna, data): Observable<any> {
    return this.http.put(`${urlAkunDosen}/profil/${idPengguna}`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${urlAkunDosen}/${id}`, data);
  }

  hapus(id): Observable<any> {
    return this.http.delete(`${urlAkunDosen}/${id}`);
  }

  hapusSemua(): Observable<any> {
    return this.http.delete(urlAkunDosen);
  }

}

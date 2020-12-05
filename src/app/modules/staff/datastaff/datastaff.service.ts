import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const urlDosen = environment.API_URL + '/api/akundosen';
const urlMhs = environment.API_URL + '/api/mhs';
const urlStaff = environment.API_URL + '/api/staff';

@Injectable({
  providedIn: 'root'
})
export class DatastaffService {

  constructor(private http: HttpClient) { }

  ambilDosen(): Observable<any>{
    return this.http.get(`${urlDosen}/staff`);
  }

  ambilMhs(): Observable<any>{
    return this.http.get(`${urlMhs}/staff`);
  }

  hapusDosen(idDsn): Observable<any> {
    return this.http.delete(`${urlDosen}/${idDsn}`);
  }

  tambahStaff(id, data): Observable<any>{
    return this.http.post(`${urlStaff}/buat/${id}`, data);
  }

  verif(id, data): Observable<any> {
    return this.http.put(`${urlMhs}/verifikasi/${id}`, data);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

const urlGuru = environment.API_URL + '/api/guru';
const urlDosen = environment.API_URL + '/api/akundosen';
const urlMhs = environment.API_URL + '/api/mhs';
const urlSekolah = environment.API_URL + '/api/sekolah';

@Injectable({
  providedIn: 'root'
})
export class PenempatanService {

  constructor(private http: HttpClient, private router: Router) { }

  ambilSemuaMhs(params): Observable<any> {
    return this.http.get(urlMhs, { params }); 
  }

  ambilMhsSekolah(params): Observable<any> {
    return this.http.get(`${urlMhs}/penempatan`, { params })
  }

  ambilDosenMhs(): Observable<any> {
    return this.http.get(`${urlDosen}/penempatan`)
  }

  ambilSemuaSekolah(params): Observable<any> {
    return this.http.get(urlSekolah, { params }); 
  }

  ambilSemuaDosen(params): Observable<any> {
    return this.http.get(urlDosen, { params }); 
  }

  ambilSemuaGuru(params): Observable<any> {
    return this.http.get(urlGuru, { params }); 
  }

  ambil(id): Observable<any> {
    return this.http.get(`${urlMhs}/${id}`);
  }

  buat(data): Observable<any> {
    return this.http.post(`${urlMhs}/buat`, data);
  }

  insert(data): Observable<any>{
    return this.http.post(`${urlMhs}/insert`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${urlMhs}/${id}`, data);
  }

  insertSekolah(idMhs, idSekolah): Observable<any> {
    return this.http.get(`${urlMhs}/${idMhs}/${idSekolah}`);
  }

  insertMhs(idMhs, idDsn): Observable<any> {
    return this.http.get(`${urlDosen}/${idMhs}/${idDsn}`);
  }

  hapus(id): Observable<any> {
    return this.http.delete(`${urlMhs}/${id}`);
  }

  hapusSemua(): Observable<any> {
    return this.http.delete(urlMhs);
  }
}

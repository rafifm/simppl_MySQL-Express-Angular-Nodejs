import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const urlGuru = 'http://localhost:4000/api/guru';
const urlDosen = 'http://localhost:4000/api/akundosen';
const urlMhs = 'http://localhost:4000/api/mhs';
const urlSekolah = 'http://localhost:4000/api/sekolah';

@Injectable({
  providedIn: 'root'
})
export class PenempatanService {

  constructor(private http: HttpClient, private router: Router) { }

  ambilSemuaMhs(params): Observable<any> {
    return this.http.get(urlMhs, { params }); 
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

  update(id, data): Observable<any> {
    return this.http.put(`${urlMhs}/${id}`, data);
  }

  hapus(id): Observable<any> {
    return this.http.delete(`${urlMhs}/${id}`);
  }

  hapusSemua(): Observable<any> {
    return this.http.delete(urlMhs);
  }
}

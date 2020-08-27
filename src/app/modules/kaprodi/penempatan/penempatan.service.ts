import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

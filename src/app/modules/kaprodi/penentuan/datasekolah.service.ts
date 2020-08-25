import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const urlSekolah = 'http://localhost:4000/api/sekolah';

@Injectable({
  providedIn: 'root'
})
export class DatasekolahService {

  constructor(private http: HttpClient, private router: Router) { }

  ambilSemua(params): Observable<any> {
    return this.http.get(urlSekolah, { params }); 
  }

  ambil(id): Observable<any> {
    return this.http.get(`${urlSekolah}/${id}`);
  }

  buat(dataSekolah): Observable<any> {
    return this.http.post(`${urlSekolah}/buat`, dataSekolah);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${urlSekolah}/${id}`, data);
  }

  hapus(id): Observable<any> {
    return this.http.delete(`${urlSekolah}/${id}`);
  }

  hapusSemua(): Observable<any> {
    return this.http.delete(urlSekolah);
  }
}

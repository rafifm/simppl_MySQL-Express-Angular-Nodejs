import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const urlAkunDosen = 'http://localhost:4000/api/akundosen';

@Injectable({
  providedIn: 'root'
})
export class DatadosenService {
  constructor(private http: HttpClient, private router: Router) { }

  ambilSemua(params): Observable<any> {
    return this.http.get(urlAkunDosen, { params }); 
  }

  ambil(id): Observable<any> {
    return this.http.get(`${urlAkunDosen}/${id}`);
  }

  buat(data): Observable<any> {
    return this.http.post(`${urlAkunDosen}/buat`, data);
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

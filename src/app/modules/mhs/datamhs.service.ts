import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const urlMhs = 'http://localhost:4000/api/mhs';

@Injectable({
  providedIn: 'root'
})
export class DatamhsService {

  
  constructor(private http: HttpClient, private router: Router) { }

  ambilSemua(params): Observable<any> {
    return this.http.get(urlMhs, { params }); 
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

  hapus(idm): Observable<any> {
    return this.http.delete(`${urlMhs}/${idm}`);
  }

  hapusSemua(): Observable<any> {
    return this.http.delete(urlMhs);
  }

}

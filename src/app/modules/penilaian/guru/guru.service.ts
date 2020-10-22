import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlGuru = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class GuruService {

  constructor(private http: HttpClient) { }

  ambilSemua(params): Observable<any> {
    return this.http.get(urlGuru, { params }); 
  }

  ambil(id): Observable<any> {
    return this.http.get(`${urlGuru}/${id}`);
  }

  buat(data): Observable<any> {
    return this.http.post(urlGuru, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${urlGuru}/${id}`, data);
  }

  hapus(id): Observable<any> {
    return this.http.delete(`${urlGuru}/${id}`);
  }

  hapusSemua(): Observable<any> {
    return this.http.delete(urlGuru);
  }

}

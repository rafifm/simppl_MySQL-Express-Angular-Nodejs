import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlMhs = 'http://localhost:4000/api/mhs';

@Injectable({
  providedIn: 'root'
})
export class TampilanService {

  constructor(private http:HttpClient) {  }

  ambilSemua(params): Observable<any> {
    return this.http.get(`${urlMhs}/penempatan`,{params});
  }

}

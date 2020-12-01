import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const urlMhs = environment.API_URL + '/api/mhs';

@Injectable({
  providedIn: 'root'
})
export class NilaimhsService {

  constructor(private http: HttpClient) { }

  ambilNilaiMhs(): Observable<any>{
    return this.http.get(`${urlMhs}/kaprodi`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const urlKaprodi = environment.API_URL + '/api/kaprodi';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  tambahProfil(id, data): Observable<any> {
    return this.http.post(`${urlKaprodi}/tambah/${id}`, data);
  }

}

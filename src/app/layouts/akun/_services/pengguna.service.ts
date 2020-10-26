import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const PENGGUNA_URL = 'http://localhost:4000/api/test/';

@Injectable({
  providedIn: 'root'
})
export class PenggunaService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'all', { responseType: 'text'});
  }

  getAdminContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'admin', { responseType: 'text'});
  }

  getDosenContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'dosen', { responseType: 'text'});
  }

  getGuruContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'guru', { responseType: 'text'});
  }

  getKaprodiContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'kaprodi', { responseType: 'text'});
  }

  getStaffContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'staff', { responseType: 'text'});
  }

  getKoorSekolahContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'koorsekolah', { responseType: 'text'});
  }

  getMahasiswaContent(): Observable<any>{
    return this.http.get(PENGGUNA_URL + 'mahasiswa', { responseType: 'text'});
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Staff } from './staff.model';

@Injectable({  providedIn: 'root'})
export class DatastaffService {
  private staff: Staff[] = [];
  private staffdiperbaharui = new Subject<{ staff: Staff[], }>();

  constructor(private http: HttpClient, private router: Router) { }

  tambahstaff(nama: string, email: string, password: string) {
    const akunstaff = new FormData();
    akunstaff.append('nama', nama);
    akunstaff.append('email', email);
    akunstaff.append('password', password);
    this.http
      .post<{ message: string, staff: Staff }>(
        "http://localhost:4000/api/staff",
        akunstaff
      )
      .subscribe((respondata) => {
        this.router.navigate(["/"]);
      });
  }

}

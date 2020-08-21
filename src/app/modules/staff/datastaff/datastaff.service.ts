import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { Staff } from './staff.model';

@Injectable({  providedIn: 'root'})
export class DatastaffService {
  private staff: Staff[] = [];
  private staffdiperbaharui = new Subject<{ staff: Staff[], jumlahStaff: number }>();

  constructor(private http: HttpClient, private router: Router) { }

  ambilSemuaStaff( akunPerHlmn: number, HlmnSekarang: number ) {
    const query = `?page=${HlmnSekarang}&size=${akunPerHlmn}`;
    this.http
      .get<{message: string, staff: any, totalHalaman: number}>(
      'http://localhost:4000/api/staff' + query )
      // .subscribe(upStaff => {
      //   console.log(upStaff);
      //   this.staff = upStaff;
      // })
      .pipe(map(dataStaff => {
        console.log(dataStaff);
        return { 
          staffUp: dataStaff.staff.map(staffini => {
          return {
            id: staffini.id,
            nama_staff: staffini.nama,
            email_staff: staffini.email,
            pass_staff: staffini.password
          };
        }),
        totalHalaman: dataStaff.totalHalaman};
      }))
      .subscribe(staffBaruSdhDiubah => {
        console.log(staffBaruSdhDiubah);
        this.staff = staffBaruSdhDiubah.staffUp;
        this.staffdiperbaharui.next({
          staff: [...this.staff],
          jumlahStaff: staffBaruSdhDiubah.totalHalaman});
        });
  }

  tambahstaff(nama: string, email: string, password: string) {
    const akunstaff: Staff = { id: null, nama_staff: nama, email_staff: email, pass_staff: password };
    this.http
      .post<{ message: string, staff: Staff }>(
        "http://localhost:4000/api/staff/buat",
        akunstaff
      )
      .subscribe((respondata) => {
        this.router.navigate(["/dashboard/staff/tampilstaff"]);
      });
  }

  updatestaff(id: string, nama: string, email: string, password: string){
    let dataStaff: Staff | FormData;
    dataStaff = {
      id: id,
      nama_staff: nama,
      email_staff: email,
      pass_staff: password
    };
    this.http
      .put("http://localhost:4000/api/staff/" + id, dataStaff)
      .subscribe(response => {
        this.router.navigate(["/dashboard/staff/tambahstaff"]);
      });
  }

  ambilStaffUpdateListener() {
    return this.staffdiperbaharui.asObservable();
  }

  ambilStaff(id: string){
    return this.http
      .get<{ id: string, nama: string, email: string, password: string}>("http://localhost:4000/api/staff/" + id);
  }

  hapusstaff(staffId: string) {
    return this.http.delete("http://localhost:4000/api/staff/" + staffId);
  }

}

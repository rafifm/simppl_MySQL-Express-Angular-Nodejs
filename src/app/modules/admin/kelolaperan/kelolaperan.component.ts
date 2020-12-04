import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-kelolaperan',
  templateUrl: 'kelolaperan.component.html',
  styleUrls: ['kelolaperan.component.css']
})
export class KelolaperanComponent implements OnInit {

  pengguna;
  sideBarOpen = true;
  formDaftar: FormGroup;
  peran: string[] = ['dosen', 'guru', 'kaprodi','staff', 'mahasiswa', 'koorsekolah'];
  kolomPengguna: string[] = ['email','peran'];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.formDaftar = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      peran: new FormControl(null)
    });
    this.ambilData();
  }

  sideBarToggler($event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ambilData(){
    this.adminService.ambilDataPengguna().subscribe(ambilPengguna=> {
      this.pengguna = ambilPengguna;
    });
  }

  daftar(){
    if(this.formDaftar.invalid){
      return;
    }
    this.adminService.daftar({
      email_pengguna: this.formDaftar.value.email,
      password_pengguna: this.formDaftar.value.password,
      peran: this.formDaftar.value.peran
    }).subscribe(pengguna => {
      this.ambilData();
    }, error => {
      console.log(error);
    });
    this.formDaftar.reset();
  }

}

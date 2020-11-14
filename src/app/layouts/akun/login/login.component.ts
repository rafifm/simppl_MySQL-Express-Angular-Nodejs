import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  isLoggedIn = false;
  isLoggedInFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private idPengguna;
  private idLogin;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email_pengguna: new FormControl(null, { validators: [Validators.required, Validators.email]}),
      password_pengguna: new FormControl(null, {validators: [Validators.required]})
    });
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getPengguna().peran;
    }
  }

  onSubmit(): void{
    this.authService.login({
      email: this.formLogin.value.email_pengguna,
      password: this.formLogin.value.password_pengguna
    }).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.savePengguna(data);
      this.isLoggedIn = true;
      this.isLoggedInFailed = false;
      this.roles = this.tokenStorage.getPengguna().peran;
      this.idLogin = this.tokenStorage.getPengguna().id;
      this.idPengguna = this.tokenStorage.getPengguna().idPengguna;
      this.getPeran();
    }, err => {
      this.errorMessage = err.error.message;
      this.isLoggedInFailed = true;
    });
  }

  reloadPage(): void{
    window.location.reload();
  }

  getPeran() {
    if(this.roles.includes('PERAN_DOSEN')) {
      if(this.idPengguna == 'kosong'){
        this.router.navigate(['/dashboard/staff/tambahdosen', this.idLogin]);
      } else {
        this.router.navigate(['/dashboard/dosen/tampilnilai'],{queryParams: {nama:this.tokenStorage.getPengguna().nama,email: this.tokenStorage.getPengguna().email_pengguna}});
      }
    } else if(this.roles.includes('PERAN_GURU')){
      this.router.navigate(['/dashboard/staff/tambahguru']);
    } else if(this.roles.includes('PERAN_MAHASISWA')){
      this.router.navigate(['/dashboard/mhs/tambahmhs'],{queryParams: {nama:'',email: this.tokenStorage.getPengguna().email_pengguna}});
    } else if(this.roles.includes('PERAN_STAFF')){
      this.router.navigate(['/dashboard/staff/tambahstaff']);
    } else if(this.roles.includes('PERAN_ADMIN')){
      this.router.navigate(['/admin/kelolaperan'], {queryParams: {nama:'admin',email: this.tokenStorage.getPengguna().email_pengguna}});
    } else if(this.roles.includes('PERAN_KAPRODI')){
      this.router.navigate(['/dashboard/kaprodi'], {queryParams: {nama:'kaprodi',email: this.tokenStorage.getPengguna().email_pengguna}});
    }


























  }

}

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
      // this.reloadPage();
    }, err => {
      this.errorMessage = err.error.message;
      this.isLoggedInFailed = true;
    });
  }

  reloadPage(): void{
    window.location.reload();
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  getPeran() {
    let vDosen = this.roles.includes('PERAN_DOSEN');
    let vGuru = this.roles.includes('PERAN_GURU');
    let vAdmin = this.roles.includes('PERAN_ADMIN');
    let vKaprodi = this.roles.includes('PERAN_KAPRODI');
    let vMhs = this.roles.includes('PERAN_MAHASISWA');
    let vStaff = this.roles.includes('PERAN_STAFF');
    let vKoorSekolah = this.roles.includes('PERAN_KOORSEKOLAH');

    if(vDosen) {
      if(this.idPengguna == 'kosong'){
        this.router.navigate(['/dashboard/staff/tambahdosen', this.idLogin]);
      } else {
        this.router.navigate(['/dashboard/dosen/tampilnilai']);
      }
      
    } else if(vGuru){
      this.router.navigate(['/dashboard/staff/tambahguru']);
    } else if(vMhs){
      this.router.navigate(['/dashboard/mhs/tambahmhs']);
    } else if(vStaff){
      this.router.navigate(['/dashboard/staff/tambahstaff']);
    } else if(vAdmin){
      this.router.navigate(['/dashboard/staff'])
    }


























  }

}

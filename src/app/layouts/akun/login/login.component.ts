import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
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
    console.log(this.isLoggedIn );
    console.log(this.roles);
  }

  onSubmit(): void{
    this.authService.login({
      email: this.formLogin.value.email_pengguna,
      password: this.formLogin.value.password_pengguna
    }).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.savePengguna(data);
      console.log(data);
      this.isLoggedIn = true;
      this.isLoggedInFailed = false;
      this.roles = this.tokenStorage.getPengguna().peran;
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

}

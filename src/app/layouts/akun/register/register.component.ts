import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email_pengguna: new FormControl(null, { validators: [Validators.required, Validators.email]}),
      password_pengguna: new FormControl(null, {validators: [Validators.required]})
    });
  }

  onSubmit(): void {
    if(this.formRegister.invalid){
      return;
    }
    this.authService.register({
      email: this.formRegister.value.email_pengguna,
      password: this.formRegister.value.password_pengguna
    }).subscribe(data=> {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    }, err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    })
  }

}

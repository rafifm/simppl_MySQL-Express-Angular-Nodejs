import { Component, OnInit } from '@angular/core';
import { DataguruService } from '../dataguru.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datagurutambah',
  templateUrl: './datagurutambah.component.html',
  styleUrls: ['./datagurutambah.component.css']
})
export class DatagurutambahComponent implements OnInit {

  submitted = false;
  formGuru: FormGroup;

  constructor(private dataguruService: DataguruService, private router: Router) { }

  ngOnInit(): void {
    this.formGuru = new FormGroup({
      nama_guru: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      email_guru: new FormControl(null, {validators: [Validators.required]}),
      pass_guru: new FormControl(null, {validators: [Validators.required]})
    });
  }

  simpanAkunGuru(formGuru: NgForm){
    if(this.formGuru.invalid){
      return;
    }
    const data = {
      nama_guru: this.formGuru.value.nama_guru,
      email_guru: this.formGuru.value.email_guru,
      pass_guru: this.formGuru.value.pass_guru
    };

    this.dataguruService.buat(data)
      .subscribe(akunGuru => {
        console.log(akunGuru);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    this.formGuru.reset();
    this.router.navigate(["/dashboard/staff/tampilguru"]);
  }
}

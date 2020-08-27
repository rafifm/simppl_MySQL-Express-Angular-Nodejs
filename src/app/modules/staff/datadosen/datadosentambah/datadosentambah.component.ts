import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DatadosenService } from '../datadosen.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-datadosentambah',
  templateUrl: './datadosentambah.component.html',
  styleUrls: ['./datadosentambah.component.css']
})
export class DatadosentambahComponent implements OnInit {

  submitted = false;
  formAkunDosen: FormGroup;

  constructor(private datadosenService: DatadosenService, private router: Router) { }

  ngOnInit(): void {
    this.formAkunDosen = new FormGroup({
      nama_dosen: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      nidn: new FormControl(null, {validators: [Validators.required]})});
  }

  simpanAkunDosen(formAkunDosen: NgForm){
    if(this.formAkunDosen.invalid){
      return;
    }
    const dataAkunDosen = {
      nama_dosen: this.formAkunDosen.value.nama_dosen,
      nidn: this.formAkunDosen.value.nidn
    };

    this.datadosenService.buat(dataAkunDosen)
      .subscribe(akunDosen => {
        console.log(akunDosen);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    this.formAkunDosen.reset();
    this.router.navigate(["/dashboard/staff/tampildosen"]);
  }

}

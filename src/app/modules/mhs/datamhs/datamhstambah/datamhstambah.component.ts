import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { DatamhsService } from '../../datamhs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datamhstambah',
  templateUrl: './datamhstambah.component.html',
  styleUrls: ['./datamhstambah.component.css']
})
export class DatamhstambahComponent implements OnInit {

  submitted = false;
  formMhs: FormGroup;

  constructor(private datamhsService: DatamhsService, private router: Router) { }

  ngOnInit(): void {
    this.formMhs = new FormGroup({
      nama_mhs: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      nim_mhs: new FormControl(null, {validators: [Validators.required]}),
      no_hp_mhs: new FormControl(null, {validators: [Validators.required]}),
      ipk_mhs: new FormControl(null, {validators: [Validators.required]}),
      nokwitansi_mhs: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  simpanAkunMhs(formMhs: NgForm){
    if(this.formMhs.invalid){
      return;
    }
    const data = {
      nama_mhs: this.formMhs.value.nama_mhs,
      nim_mhs: this.formMhs.value.nim_mhs,
      no_hp_mhs: this.formMhs.value.no_hp_mhs,
      ipk_mhs: this.formMhs.value.ipk_mhs,
      nokwitansi_mhs: this.formMhs.value.nokwitansi_mhs
    };

    this.datamhsService.buat(data)
      .subscribe(akunMhs => {
        console.log(akunMhs);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    this.formMhs.reset();
    this.router.navigate(["/dashboard/mhs/tampilmhs"]);
  }

}

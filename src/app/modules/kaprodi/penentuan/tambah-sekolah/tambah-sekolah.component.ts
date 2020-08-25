import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasekolahService } from '../datasekolah.service';

@Component({
  selector: 'app-tambah-sekolah',
  templateUrl: './tambah-sekolah.component.html',
  styleUrls: ['./tambah-sekolah.component.css']
})
export class TambahSekolahComponent implements OnInit {

  submitted = false;
  formSekolah: FormGroup;

  constructor(private datasekolahService: DatasekolahService, private router: Router) { }

  ngOnInit(): void {
    this.formSekolah = new FormGroup({
      nama_sekolah: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      kuotamhs: new FormControl(null, {validators: [Validators.required]})
    });
  }

  simpanDataSekolah(formSekolah: NgForm){
    if(this.formSekolah.invalid){
      return;
    }
    const dataSekolah = {
      nama_sekolah: this.formSekolah.value.nama_sekolah,
      kuotamhs: this.formSekolah.value.kuotamhs
    };

    this.datasekolahService.buat(dataSekolah)
      .subscribe(datakuotasekolah => {
        console.log(datakuotasekolah);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    this.formSekolah.reset();
    this.router.navigate(["/dashboard/kaprodi/tampilsekolah"]);
  }

}

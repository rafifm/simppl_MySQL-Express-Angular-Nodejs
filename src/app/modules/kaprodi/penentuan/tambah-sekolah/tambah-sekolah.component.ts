import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { DatasekolahService } from '../datasekolah.service';

@Component({
  selector: 'app-tambah-sekolah',
  templateUrl: './tambah-sekolah.component.html',
  styleUrls: ['./tambah-sekolah.component.css']
})
export class TambahSekolahComponent implements OnInit {

  submitted = false;
  formSekolah: FormGroup;
  dataSekolah: any;
  private mode = 'buat';
  private idSekolah: string;

  constructor(
    private datasekolahService: DatasekolahService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.formSekolah = new FormGroup({
      nama_sekolah: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      kuotamhs: new FormControl(null, {validators: [Validators.required]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")){
        this.mode ="edit";
        this.idSekolah = paramMap.get("id");
        this.datasekolahService.ambil(this.idSekolah).subscribe(updateSekolah => {
          this.dataSekolah = updateSekolah;
          this.formSekolah.setValue({
            nama_sekolah: this.dataSekolah.nama_sekolah,
            kuotamhs: this.dataSekolah.kuotamhs
          });
        });
      } else {
        this.mode = 'buat';
        this.idSekolah = null;
      }
    });
  }

  simpanDataSekolah(){
    if(this.formSekolah.invalid){
      return;
    }
    if (this.mode === 'buat'){
      this.datasekolahService.buat({
        nama_sekolah: this.formSekolah.value.nama_sekolah,
        kuotamhs: this.formSekolah.value.kuotamhs
      }).subscribe(datakuotasekolah => {
          console.log(datakuotasekolah);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    } else {
      this.datasekolahService.update(
        this.dataSekolah.id, this.dataSekolah = {
          nama_sekolah: this.formSekolah.value.nama_sekolah,
          kuotamhs: this.formSekolah.value.kuotamhs
        }).subscribe(dataUploadSekolah => {
        console.log(dataUploadSekolah);
        this.submitted = true;
        }, error=> {
          console.log(error);
        });
    }
   
    this.formSekolah.reset();
    this.router.navigate(["/dashboard/kaprodi/tampilsekolah"]);
  }

}

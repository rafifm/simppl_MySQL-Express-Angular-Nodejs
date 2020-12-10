import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { DatamhsService } from '../../datamhs.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-datamhstambah',
  templateUrl: './datamhstambah.component.html',
  styleUrls: ['./datamhstambah.component.css']
})
export class DatamhstambahComponent implements OnInit {

  submitted = false;
  formMhs: FormGroup;
  dataMhs: any;
  private mode = 'buat';
  private idMhs: string;
  private idPengguna: string;

  constructor(
    private datamhsService: DatamhsService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formMhs = new FormGroup({
      nama_mhs: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      nim_mhs: new FormControl(null, {validators: [Validators.required]}),
      no_hp_mhs: new FormControl(null, {validators: [Validators.required]}),
      ipk_mhs: new FormControl(null, {validators: [Validators.required]}),
      nokwitansi_mhs: new FormControl(null, {validators: [Validators.required]}),
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.mode = 'edit';
        this.idMhs = paramMap.get('id');
        this.datamhsService.ambil(this.idMhs).subscribe(upMhs => {
          this.dataMhs = upMhs;
          this.formMhs.setValue({
            nama_mhs: this.dataMhs.nama_mhs,
            nim_mhs: this.dataMhs.nim_mhs,
            no_hp_mhs: this.dataMhs.no_hp_mhs,
            ipk_mhs: this.dataMhs.ipk_mhs,
            nokwitansi_mhs: this.dataMhs.nokwitansi_mhs
          });
        });
      } else {
        this.mode = 'buat';
        this.idMhs = null;
      }
    });
    this.idPengguna = this.route.snapshot.paramMap.get('idLogin');
  }

  simpanAkunMhs(){
    if(this.formMhs.invalid){
      return;
    }
    if( this.mode === 'buat' ) {
      this.datamhsService.tambahMhs(this.idPengguna,{
        nama_mhs: this.formMhs.value.nama_mhs,
        nim_mhs: this.formMhs.value.nim_mhs,
        no_hp_mhs: this.formMhs.value.no_hp_mhs,
        ipk_mhs: this.formMhs.value.ipk_mhs,
        nokwitansi_mhs: this.formMhs.value.nokwitansi_mhs
      })
      .subscribe(akunMhs => {
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
      this.formMhs.reset();
    } else {
      this.datamhsService.update(
        this.dataMhs.id,
        this.dataMhs = {
          nama_mhs: this.formMhs.value.nama_mhs,
          nim_mhs: this.formMhs.value.nim_mhs,
          no_hp_mhs: this.formMhs.value.no_hp_mhs,
          ipk_mhs: this.formMhs.value.ipk_mhs,
          nokwitansi_mhs: this.formMhs.value.nokwitansi_mhs
        }
      ).subscribe(dataUploadMhs => {
        this.submitted = true;
        this.router.navigate(["/dashboard/mhs/berhasildaftar"]);
      }, error=> {
        console.log(error);
      });
      this.formMhs.reset();
    }
    this.router.navigate(["/dashboard/mhs/berhasildaftar"]);    
  }

}

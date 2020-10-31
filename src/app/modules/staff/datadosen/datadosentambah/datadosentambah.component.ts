import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DatadosenService } from '../datadosen.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-datadosentambah',
  templateUrl: './datadosentambah.component.html',
  styleUrls: ['./datadosentambah.component.css']
})
export class DatadosentambahComponent implements OnInit {

  submitted = false;
  dataDosen: any;
  formAkunDosen: FormGroup;
  private mode = 'buat';
  private idDosen: string;
  private idPengguna: string;


  constructor(
    private datadosenService: DatadosenService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formAkunDosen = new FormGroup({
      nama_dosen: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      nip: new FormControl(null, {validators: [Validators.required]}),
      no_hp_dosen: new FormControl(null, {validators: [Validators.required]}),
      pangkat_dosen: new FormControl(null, {validators: [Validators.required]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")){
        this.mode ="edit";
        this.idDosen = paramMap.get("id");
        this.datadosenService.ambil(this.idDosen).subscribe(updateSekolah => {
          this.dataDosen = updateSekolah;
          this.formAkunDosen.setValue({
            nama_dosen: this.dataDosen.nama_dosen,
            nip: this.dataDosen.nip,
            no_hp_dosen: this.dataDosen.no_hp_dosen,
            pangkat_dosen: this.dataDosen.pangkat_dosen
          });
        });
      } else {
        this.mode = 'buat';
        this.idDosen = null;
      }
    });
    this.idPengguna = this.route.snapshot.paramMap.get('idLogin');
  }

  simpanAkunDosen(formAkunDosen: NgForm){
    if(this.formAkunDosen.invalid){
      return;
    }
    if (this.mode === 'buat'){
      this.datadosenService.tambahDosen(
        this.idPengguna, this.dataDosen = {
        nama_dosen: this.formAkunDosen.value.nama_dosen,
        nip: this.formAkunDosen.value.nip,
        no_hp_dosen: this.formAkunDosen.value.no_hp_dosen,
        pangkat_dosen: this.formAkunDosen.value.pangkat_dosen
      })
      .subscribe(akunDosen => {
        console.log(akunDosen);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    } else {
      this.datadosenService.update(
        this.dataDosen.id, this.dataDosen = {
          nama_dosen: this.formAkunDosen.value.nama_dosen,
          nip: this.formAkunDosen.value.nip,
          no_hp_dosen: this.formAkunDosen.value.no_hp_dosen,
          pangkat_dosen: this.formAkunDosen.value.pangkat_dosen          
        }
      ).subscribe(dataUploadDosen => {
        console.log(dataUploadDosen);
        this.submitted = true;
      }, error=> {
        console.log(error);
      });
    }
    this.formAkunDosen.reset();
    this.router.navigate(["/dashboard/staff/tampildosen"]);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DosenService } from '../dosen.service';

@Component({
  selector: 'app-dosentambahnilaiuts',
  templateUrl: './dosentambahnilaiuts.component.html',
  styleUrls: ['./dosentambahnilaiuts.component.css']
})
export class DosentambahnilaiutsComponent implements OnInit {

  private idMhs;
  vNilai;
  formNilaiDosenUTS: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dosenService: DosenService,
  ) { }

  ngOnInit(): void {
    this.formNilaiDosenUTS = new FormGroup({
      soalno1: new FormControl('', {validators: [Validators.required]}),
      soalno2: new FormControl('', {validators: [Validators.required]}),
      soalno3: new FormControl('', {validators: [Validators.required]}),
      soalno4: new FormControl('', {validators: [Validators.required]}),
      soalno5: new FormControl('', {validators: [Validators.required]}),
      soalno6: new FormControl('', {validators: [Validators.required]}),
      soalno7: new FormControl('', {validators: [Validators.required]}),
      soalno8: new FormControl('', {validators: [Validators.required]}),
      soalno9: new FormControl('', {validators: [Validators.required]}),
      soalno10: new FormControl('', {validators: [Validators.required]}),
      soalno11: new FormControl('', {validators: [Validators.required]}),
      soalno12: new FormControl('', {validators: [Validators.required]}),
      soalno13: new FormControl('', {validators: [Validators.required]}),
      soalno14: new FormControl('', {validators: [Validators.required]}),
      soalno15: new FormControl('', {validators: [Validators.required]})
    });
    this.idMhs = this.route.snapshot.paramMap.get('idMhs');
    this.dosenService.ambilSatuMhs(this.idMhs)
      .subscribe(mhs => {
      },error => {
        console.log(error);
      });
  }

  tombolNilai(){
    var no1 = this.formNilaiDosenUTS.value.soalno1;
    var no2 = this.formNilaiDosenUTS.value.soalno2;
    var no3 = this.formNilaiDosenUTS.value.soalno3;
    var no4 = this.formNilaiDosenUTS.value.soalno4;
    var no5 = this.formNilaiDosenUTS.value.soalno5;
    var no6 = this.formNilaiDosenUTS.value.soalno6;
    var no7 = this.formNilaiDosenUTS.value.soalno7;
    var no8 = this.formNilaiDosenUTS.value.soalno8;
    var no9 = this.formNilaiDosenUTS.value.soalno9;
    var no10 = this.formNilaiDosenUTS.value.soalno10;
    var no11 = this.formNilaiDosenUTS.value.soalno11;
    var no12 = this.formNilaiDosenUTS.value.soalno12;
    var no13 = this.formNilaiDosenUTS.value.soalno13;
    var no14 = this.formNilaiDosenUTS.value.soalno14;
    var no15 = this.formNilaiDosenUTS.value.soalno15;

    let idPengguna = this.route.snapshot.paramMap.get('idPengguna');
    this.vNilai = (((parseInt(no1)+parseInt(no2)+parseInt(no3)+parseInt(no4)+parseInt(no5)+parseInt(no6)+parseInt(no7)+parseInt(no8)+parseInt(no9)+parseInt(no10)+parseInt(no11)+parseInt(no12)+parseInt(no13)+parseInt(no14)+parseInt(no15))/60)*100).toFixed(2);
    let dbNilai;
    this.dosenService.nilaiUTS(this.idMhs, dbNilai={
      nilaiDosen_uts: this.vNilai
    }).subscribe(nilai => {
      this.router.navigate(['/dashboard/dosen/tampilnilai']);
    }, error => {
      console.log(error);
    });
  }

}

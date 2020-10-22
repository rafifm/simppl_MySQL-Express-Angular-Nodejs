import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dosentambahnilai',
  templateUrl: './dosentambahnilai.component.html',
  styleUrls: ['./dosentambahnilai.component.css']
})
export class DosentambahnilaiComponent implements OnInit {

  vNilai;
  formNilaiDosen: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formNilaiDosen = new FormGroup({
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
  }

  tombolNilai(){
    var no1 = this.formNilaiDosen.value.soalno1;
    var no2 = this.formNilaiDosen.value.soalno2;
    var no3 = this.formNilaiDosen.value.soalno3;
    var no4 = this.formNilaiDosen.value.soalno4;
    var no5 = this.formNilaiDosen.value.soalno5;
    var no6 = this.formNilaiDosen.value.soalno6;
    var no7 = this.formNilaiDosen.value.soalno7;
    var no8 = this.formNilaiDosen.value.soalno8;
    var no9 = this.formNilaiDosen.value.soalno9;
    var no10 = this.formNilaiDosen.value.soalno10;
    var no11 = this.formNilaiDosen.value.soalno11;
    var no12 = this.formNilaiDosen.value.soalno12;
    var no13 = this.formNilaiDosen.value.soalno13;
    var no14 = this.formNilaiDosen.value.soalno14;
    var no15 = this.formNilaiDosen.value.soalno15;

    this.vNilai = (((parseInt(no1)+parseInt(no2)+parseInt(no3)+parseInt(no4)+parseInt(no5)+parseInt(no6)+parseInt(no7)+parseInt(no8)+parseInt(no9)+parseInt(no10)+parseInt(no11)+parseInt(no12)+parseInt(no13)+parseInt(no14)+parseInt(no15))/60)*100).toFixed(2);
    console.log(this.vNilai);
  }

}

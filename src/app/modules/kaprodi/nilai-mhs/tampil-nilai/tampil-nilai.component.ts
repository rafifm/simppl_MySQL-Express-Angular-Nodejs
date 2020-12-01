import { Component, OnInit } from '@angular/core';
import { NilaimhsService } from '../nilaimhs.service';

@Component({
  selector: 'app-tampil-nilai',
  templateUrl: './tampil-nilai.component.html',
  styleUrls: ['./tampil-nilai.component.css']
})
export class TampilNilaiComponent implements OnInit {

  nilai;
  kolomNilai: string[] = ["nama", "nilaiuts", "nilaiuas"];

  constructor(private dataNilai: NilaimhsService) { }

  ngOnInit(): void {
    this.ambilNilai();
  }

  ambilNilai() {
    this.dataNilai.ambilNilaiMhs()
      .subscribe(nilaiMhs => {
        console.log(nilaiMhs);
        this.nilai = nilaiMhs
      }) 
      error => {
        console.log(error);
      }
  }

}

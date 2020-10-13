import { Component, OnInit } from '@angular/core';
import { TampilanService } from '../tampilan.service';

@Component({
  selector: 'app-tampilan-mhs',
  templateUrl: './tampilan-mhs.component.html',
  styleUrls: ['./tampilan-mhs.component.css']
})
export class TampilanMhsComponent implements OnInit {

  nama_mhs = '';
  halaman = 1;
  totalDataPerHalaman = 10;

  penempatan: any;
  totalAkunMhs: number;

  kolomPenempatan: string[] = ["nama","nim","sekolah"];

  constructor(private dataMhs: TampilanService) { }

  ngOnInit(): void {
    this.ambilDataPenempatan();
  }

  getRequestParams(searchTitle, halaman, totalDataPerHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_mhs`] = searchTitle;
    }

    if (halaman) {
      params[`page`] = halaman - 1;
    }

    if (totalDataPerHalaman) {
      params[`size`] = totalDataPerHalaman;
    }

    return params;
  }

  ambilDataPenempatan() {
    const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);
    
    this.dataMhs.ambilSemua(params)
      .subscribe(ambilData => {
        this.penempatan = ambilData;
      })
      error => {
        console.log(error);
      }

  }

}

import { Component, OnInit } from '@angular/core';
import { PenempatanService } from '../../penempatan.service';

@Component({
  selector: 'app-tampilan-mhs',
  templateUrl: './tampilan-mhs.component.html',
  styleUrls: ['./tampilan-mhs.component.css']
})
export class TampilanMhsComponent implements OnInit {

  nama_mhs = '';
  halaman = 1;
  totalDataPerhalaman = 10;

  mhs: any;
  totalAkunMhs: number;

  kolomMhs: string[] = ["nama_mhs", "nim", "sekolah"];

  constructor(private dataMhs: PenempatanService) { }

  ngOnInit(): void {
    this.ambilDataPenempatanMhs();
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

  ambilDataPenempatanMhs() {
    const params= this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerhalaman);
    this.dataMhs.ambilMhsSekolah(params)
      .subscribe(ambildata => {
        this.mhs = ambildata;
        console.log(this.mhs);
      })
      error => {
        console.log(error);
      }
  }

}

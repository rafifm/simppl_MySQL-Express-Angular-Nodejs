import { Component, OnInit } from '@angular/core';
import { PenempatanService } from '../../penempatan.service';

@Component({
  selector: 'app-tampilan-dosen',
  templateUrl: './tampilan-dosen.component.html',
  styleUrls: ['./tampilan-dosen.component.css']
})
export class TampilanDosenComponent implements OnInit {

  nama_dosen = '';
  halaman = 1;
  totalDataPerHalaman = 10;

  dosen:any;
  totalAkunDosen:number;

  kolomDosen: string[] = ["nama", "nidn", "mahasiswa"];

  constructor(private dataDosen: PenempatanService) { }

  ngOnInit(): void {
    this.ambilPenempatanDosen();
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

  ambilPenempatanDosen() {
    const params = this.getRequestParams(this.nama_dosen, this.halaman, this.totalDataPerHalaman);
    this.dataDosen.ambilSemuaDosen(params)
      .subscribe(ambilData => {
        this.dosen = ambilData;
        console.log(this.dosen);
      })
      error => {
        console.log(error);
      }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PenempatanService } from '../penempatan.service';

@Component({
  selector: 'app-pilih-tmpt-dosen',
  templateUrl: './pilih-tmpt-dosen.component.html',
  styleUrls: ['./pilih-tmpt-dosen.component.css']
})
export class PilihTmptDosenComponent implements OnInit {

  mhs: any;
  datadosen: any;
  dataDosenSekarang = null;
  nama_dosen = '';
  currentIndex = -1;

  halaman = 1;
  totalDataMhs = 0;
  totalDataDosen = 0;
  totalDataPerHalaman = 50;

  kolomDosen: string[] = ["namaDosen", "nidn", "penempatan"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(
    private dataPenempatan: PenempatanService) { }

  ngOnInit(): void {
    this.ambilData();
  }

  getRequestParams(searchTitle, halaman, totalDataPerHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_dosen`] = searchTitle;
    }

    if (halaman) {
      params[`page`] = halaman - 1;
    }

    if (totalDataPerHalaman) {
      params[`size`] = totalDataPerHalaman;
    }

    return params;
  }

  ambilData() {
    const params = this.getRequestParams(this.nama_dosen, this.halaman, this.totalDataPerHalaman);
    this.dataPenempatan.ambilSemuaDosen(params)
      .subscribe((ambilDataDosen: { akundosen: any, totalDataDosen: number }) => {
        this.datadosen = ambilDataDosen.akundosen;
        this.totalDataDosen = ambilDataDosen.totalDataDosen;
      });error => {
        console.log(error);
      };
    this.dataPenempatan.ambilSemuaMhs(params)
      .subscribe((ambilDataMhs: { mhs: any, totalDataMhs: number }) => {
        this.mhs = ambilDataMhs.mhs;
        this.totalDataMhs = ambilDataMhs.totalDataMhs;
      });error => {
        console.log(error);
      };
  }

  hapusSemuaDataDosen(): void {
    this.dataPenempatan.hapusSemua()
      .subscribe(
        response => {
          console.log(response);
          this.ambilData();
        },
        error => {
          console.log(error);
        });
  }

  insertMhs(vIdMhs, vIdDsn){
    this.dataPenempatan.insertMhs(
      vIdDsn, vIdMhs.value
    ).subscribe(insertMhs => {
      console.log(insertMhs);
    }), error => {
      console.log(error);
    }
  }

}

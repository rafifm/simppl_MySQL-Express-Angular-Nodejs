import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PenempatanService } from '../penempatan.service';

@Component({
  selector: 'app-pilih-tmpt-guru',
  templateUrl: './pilih-tmpt-guru.component.html',
  styleUrls: ['./pilih-tmpt-guru.component.css']
})
export class PilihTmptGuruComponent implements OnInit {

  guru:any;
  mhs:any;
  dataGuruSekarang = null;
  nama_guru = '';
  currentIndex = -1;

  halaman = 1;
  totalDataSekolah = 0;
  totalDataGuru = 0;
  totalDataPerHalaman = 5;
  banyakPerHalaman = [5, 10, 15];

  kolomGuru: string[] = ["nama_guru", "penempatan"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(
    private dataPenempatan: PenempatanService) { }

  ngOnInit(): void {
    this.ambilData();
  }

  getRequestParams(searchTitle, halaman, totalDataPerHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_guru`] = searchTitle;
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
    const params = this.getRequestParams(this.nama_guru, this.halaman, this.totalDataPerHalaman); 
    this.dataPenempatan.ambilSemuaGuru(params)
      .subscribe((ambilDataGuru: { guru:any, totalDataGuru: number}) => {
        this.guru = ambilDataGuru.guru;
        this.totalDataGuru = ambilDataGuru.totalDataGuru;
      })
      error => {
        console.log(error);
      }
    this.dataPenempatan.ambilSemuaMhs(params)
      .subscribe((ambilDataMhs: {mhs: any, totalDataMhs: number}) => {
        this.mhs = ambilDataMhs.mhs;
        this.totalDataGuru = ambilDataMhs.totalDataMhs;
      })
      error => {
        console.log(error);
      }
  }

  handlePageChange(event): void {
    this.halaman = event;
    this.ambilData();
  }

  handlePageSizeChange(event): void {
    this.totalDataPerHalaman = event.target.value;
    this.halaman = 1;
    this.ambilData();
  }

  setActiveTutorial(guru, index): void {
    this.dataGuruSekarang = guru;
    this.currentIndex = index;
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

}

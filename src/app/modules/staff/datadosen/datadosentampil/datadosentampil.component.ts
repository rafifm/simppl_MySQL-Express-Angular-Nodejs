import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DatadosenService } from '../datadosen.service';
@Component({
  selector: 'app-datadosentampil',
  templateUrl: './datadosentampil.component.html',
  styleUrls: ['./datadosentampil.component.css']
})
export class DatadosentampilComponent implements OnInit {

  akundosen: any;
  dataDosenSekarang = null;
  currentIndex = -1;
  nama_dosen = '';

  halaman = 1;
  totalAkunDosen = 0;
  totalDataPerHalaman = 3;
  banyakPerHalaman = [5, 10, 15];

  kolomDosen: string[] = ["nama_dosen", "nip","no_hp_dosen","pangkat_dosen", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(private dataAkunDosen: DatadosenService) { }

  ngOnInit(): void {
    this.ambilDataDosen();
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

  ambilDataDosen() {
    const params = this.getRequestParams(this.nama_dosen, this.halaman, this.totalDataPerHalaman);
    this.dataAkunDosen.ambilSemua(params)
      .subscribe((ambilDataAkunDosen: { akundosen: any, totalAkunDosen: number}) => {
        this.akundosen = ambilDataAkunDosen.akundosen;
        this.totalAkunDosen = ambilDataAkunDosen.totalAkunDosen;
      })
      error => {
        console.log(error);
      }

  }

  handlePageChange(event): void {
    this.halaman = event;
    this.ambilDataDosen();
  }

  handlePageSizeChange(event): void {
    this.totalDataPerHalaman = event.target.value;
    this.halaman = 1;
    this.ambilDataDosen();
  }

  setActiveTutorial(dosenTampil, index): void {
    this.dataDosenSekarang = dosenTampil;
    this.currentIndex = index;
  }

  hapusDosen(id) {
    this.dataAkunDosen.hapus(id)
    .subscribe(
      response => {
        console.log(response);
        this.ambilDataDosen();
      },
      error => {
        console.log(error);
      });
  }

  hapusSemuaDataMhs(): void {
    this.dataAkunDosen.hapusSemua()
      .subscribe(
        response => {
          console.log(response);
          this.ambilDataDosen();
        },
        error => {
          console.log(error);
        });
  }


}


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  dataTabelAkunDosen;

  halaman = 1;
  totalAkunDosen = 0;
  totalDataPerHalaman = 3;
  banyakPerHalaman = [5, 10, 15];

  kolomDosen: string[] = ["nama_dosen", "nidn", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(private dataAkunDosen: DatadosenService) { }

  ngOnInit(): void {
    this.ambilDataDosen();
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

  ambilDataDosen() {
    const params = this.getRequestParams(this.nama_dosen, this.halaman, this.totalDataPerHalaman);

    this.dataAkunDosen.ambilSemua(params)
      .subscribe((ambilDataAkunDosen: { akundosen: any, totalAkunDosen: number}) => {
        this.akundosen = ambilDataAkunDosen.akundosen;
        this.totalAkunDosen = ambilDataAkunDosen.totalAkunDosen;
        this.dataTabelAkunDosen = new MatTableDataSource<any>(this.akundosen);

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


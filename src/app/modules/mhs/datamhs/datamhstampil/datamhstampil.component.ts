import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DatamhsService } from '../../datamhs.service';

@Component({
  selector: 'app-datamhstampil',
  templateUrl: './datamhstampil.component.html',
  styleUrls: ['./datamhstampil.component.css']
})
export class DatamhstampilComponent implements OnInit {

  mhs: any;
  dataMhsSekarang = null;
  currentIndex = -1;
  nama_mhs = '';
  dataAkunMhs;

  halaman = 1;
  totalAkunMhs = 0;
  totalDataPerHalaman = 10;
  banyakPerHalaman = [5, 10, 15];

  kolomMhs: string[] = ["nama", "nim", "no_hp_mhs","ipk", "nokwitansi", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(private dataMhs: DatamhsService) { }

  ngOnInit(): void {
    this.ambilDataMhs();
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

  ambilDataMhs() {
    const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);

    this.dataMhs.ambilSemua(params)
      .subscribe((ambilDataMhs: { mhs: any, totalAkunMhs: number}) => {
        this.mhs = ambilDataMhs.mhs;
        this.totalAkunMhs = ambilDataMhs.totalAkunMhs;
        console.log(ambilDataMhs);
      })
      error => {
        console.log(error);
      }

  }

  hapusMhs(id){
    this.dataMhs.hapus(id)
      .subscribe(
        response => {
          console.log(response);
          this.ambilDataMhs();
        },
        error => {
          console.log(error);
        });
  }

  hapusSemuaDataMhs(): void {
    this.dataMhs.hapusSemua()
      .subscribe(
        response => {
          console.log(response);
          this.ambilDataMhs();
        },
        error => {
          console.log(error);
        });
  }

}

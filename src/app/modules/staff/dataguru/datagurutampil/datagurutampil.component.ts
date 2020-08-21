import { Component, OnInit, ViewChild } from '@angular/core';
import { DataguruService } from '../dataguru.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-datagurutampil',
  templateUrl: './datagurutampil.component.html',
  styleUrls: ['./datagurutampil.component.css']
})
export class DatagurutampilComponent implements OnInit {

  guru: any;
  dataGuruSekarang = null;
  currentIndex = -1;
  nama_guru = '';
  dataAkunGuru;

  halaman = 1;
  totalAkunGuru = 0;
  ukuranHalaman = 3;
  banyakPerHalaman = [3, 6, 9];

  displayedColumns: string[] = ["nama", "email", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;


  constructor(private dataGuru: DataguruService) { }

  ngOnInit(): void {
    this.ambilDataGuru();
  }

  getRequestParams(searchTitle, halaman, ukuranHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_guru`] = searchTitle;
    }

    if (halaman) {
      params[`page`] = halaman - 1;
    }

    if (ukuranHalaman) {
      params[`size`] = ukuranHalaman;
    }

    return params;
  }

  ambilDataGuru() {
    const params = this.getRequestParams(this.nama_guru, this.halaman, this.ukuranHalaman);

    this.dataGuru.ambilSemua(params)
      .subscribe((ambilAkunGuru: {guru: any, totalAkunGuru: number}) => {
          this.guru = ambilAkunGuru.guru;
          this.totalAkunGuru = ambilAkunGuru.totalAkunGuru;
          this.dataAkunGuru = new MatTableDataSource<any>(this.guru);
          console.log(ambilAkunGuru.guru);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event): void {
    this.halaman = event;
    this.ambilDataGuru();
  }

  handlePageSizeChange(event): void {
    this.ukuranHalaman = event.target.value;
    this.halaman = 1;
    this.ambilDataGuru();
  }

  setActiveTutorial(guruTampil, index): void {
    this.dataGuruSekarang = guruTampil;
    this.currentIndex = index;
  }

  hapusSemuaDataGuru(): void {
    this.dataGuru.hapusSemua()
      .subscribe(
        response => {
          console.log(response);
          this.ambilDataGuru();
        },
        error => {
          console.log(error);
        });
  }

}

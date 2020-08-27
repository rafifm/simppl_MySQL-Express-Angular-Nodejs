import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PenempatanService } from '../penempatan.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pilih-tmpt-mhs',
  templateUrl: './pilih-tmpt-mhs.component.html',
  styleUrls: ['./pilih-tmpt-mhs.component.css']
})
export class PilihTmptMhsComponent implements OnInit {

  sekolah: any;
  mhs: any;
  dataSekolahSekarang = null;
  dataMhsSekarang = null;
  dataAkunMhs;
  dataSekolah;
  nama_mhs = '';
  currentIndex = -1;

  halaman = 1;
  totalAkunMhs = 0;
  totalDataSekolah = 0;
  totalDataPerHalaman = 3;
  banyakPerHalaman = [5, 10, 15];

  kolomMhs: string[] = ["namaMahasiswa", "nim_mhs", "penempatan"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(
    private dataPenempatan: PenempatanService) { }

  ngOnInit(): void {
    this.ambilData();
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

  ambilData() {
    const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);

    this.dataPenempatan.ambilSemuaMhs(params)
      .subscribe((ambilDataMhs: { mhs: any, totalAkunMhs: number}) => {
        this.mhs = ambilDataMhs.mhs;
        this.totalAkunMhs = ambilDataMhs.totalAkunMhs;
        this.dataAkunMhs = new MatTableDataSource<any>(this.mhs);

      })
      error => {
        console.log(error);
      };
    this.dataPenempatan.ambilSemuaSekolah(params)
      .subscribe((ambilDataSekolah: { sekolah: any, totalDataSekolah: number }) => {
        this.sekolah = ambilDataSekolah.sekolah;
        this.totalDataSekolah = ambilDataSekolah.totalDataSekolah;
      })

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

  setActiveTutorial(mhsTampil, index): void {
    this.dataMhsSekarang = mhsTampil;
    this.currentIndex = index;
  }

  hapusSemuaDataMhs(): void {
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DatasekolahService } from '../datasekolah.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tampil-sekolah',
  templateUrl: './tampil-sekolah.component.html',
  styleUrls: ['./tampil-sekolah.component.css']
})
export class TampilSekolahComponent implements OnInit {

  sekolah: any;
  dataSekolahSekarang = null;
  currentIndex = -1;
  nama_sekolah = '';
  idSekolah;

  halaman = 1;
  totalAkunMhs = 0;
  totalDataPerHalaman = 30;

  kolomSekolah: string[] = ["nama_sekolah", "kuotamhs", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(private dataSekolah: DatasekolahService){}

  ngOnInit(): void {
    this.ambilDataSekolah();
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

  ambilDataSekolah() {
    const params = this.getRequestParams(this.nama_sekolah, this.halaman, this.totalDataPerHalaman);

    this.dataSekolah.ambilSemua(params)
      .subscribe((ambilDataSekolah: { sekolah: any, totalAkunMhs: number}) => {
        this.sekolah = ambilDataSekolah.sekolah;
        this.totalAkunMhs = ambilDataSekolah.totalAkunMhs;
      })
      error => {
        console.log(error);
      }

  }

  handlePageChange(event): void {
    this.halaman = event;
    this.ambilDataSekolah();
  }

  handlePageSizeChange(event): void {
    this.totalDataPerHalaman = event.target.value;
    this.halaman = 1;
    this.ambilDataSekolah();
  }

  setActiveTutorial(mhsTampil, index): void {
    this.dataSekolahSekarang = mhsTampil;
    this.currentIndex = index;
  }

  hapusSekolah(id){
    this.dataSekolah.hapus(id)
      .subscribe(
        response => {
          console.log(response);
          this.ambilDataSekolah();
        },
        error => {
          console.log(error);
        });
  }

  hapusSemuaDataSekolah(): void {
    this.dataSekolah.hapusSemua()
      .subscribe(
        response => {
          console.log(response);
          this.ambilDataSekolah();
        },
        error => {
          console.log(error);
        });
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Kesesuaian Bahan Pembelajaran yang digunakan dengan kurikulum', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Kesesuaian Rumusan Kompetensi Dasar, indikator dan tujuan pembelajaran', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Kesesuaian materi dengan tujuan, perkembangan siswa, dan urutan, kedalaman, dan kemutakhiran materi', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Kesesuaian Media (alat bantu mengajar) dengan tujuan, materi, metoda, dan lingkungan (daya cerna) siswa', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Kesesuaian sumber belajar dengan tujuan, materi, metoda, dan lingkungan (daya cerna) siswa', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Kesesuaian kegiatana belajar yang dipilih dengan tujuan, bahan, waktu, sarana, lingkungan, dan bervariasi serta memungkinkan keterlibatan siswa', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Kesesuaian langkah kegiatan belajar yang dipilih dengan tujuan, bahan, waktu, sarana, lingkungan, dan e=memungkinkan keterlibatan siswa', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Cara-cara memotivasi siswa seerti bahan, kegiatan, media yang menarik, dan melibatkan siswa', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Alokasi waktu belajar-mengajar (pembukuan, inti, penutup) dicantumkan rinci, dan proporsional', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Cara-cara pengorganisasian siswa agar dapat berpartisipasi aktif dalam kegiatan pembelajaran', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Jenis dan prosedur penilaian relavan dengan kompetensi, indikator dan materi.', weight: 12.0107, symbol: 'C'},
  {position: 12, name: 'Teknik penilaian yang direncanakan mencakup tes, unjuk kerja, hasil karya, dan penugasan', weight: 14.0067, symbol: 'N'},
  {position: 13, name: 'Layanan remedial dan pengayaan dicantumkan dan diuraikan secara lengkap', weight: 15.9994, symbol: 'O'},
  {position: 14, name: 'Kebersihan dan kerapian tulisan, dan ilustrasi menarik', weight: 18.9984, symbol: 'F'},
  {position: 15, name: 'Penggunakan bahasa tulus tepat, baku, komunikatif, dan susai dengan EYD', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-penilaian-mhs-dosen-tampil',
  templateUrl: './penilaian-mhs-dosen-tampil.component.html',
  styleUrls: ['./penilaian-mhs-dosen-tampil.component.css']
})
export class PenilaianMhsDosenTampilComponent implements OnInit {

  displayedColumns: string[] = ["position", "name", "input1"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

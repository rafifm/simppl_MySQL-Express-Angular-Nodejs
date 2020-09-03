import { Component, OnInit } from '@angular/core';

export interface PenilaianDosen {
  header: string;
  nomorSoal: string;
  soalNilai: string;
}

export interface tombolNilai{
  value: number;
  namaTombol: string;
}

@Component({
  selector: 'app-dosentambahnilai',
  templateUrl: './dosentambahnilai.component.html',
  styleUrls: ['./dosentambahnilai.component.css']
})
export class DosentambahnilaiComponent implements OnInit {

  Nilai: PenilaianDosen[] = [
    {
      header: 'A.PENENTUAN BAHAN PEMBELAJARAN DAN MERUMUSKAN TUJUAN',
      nomorSoal: '1.',
      soalNilai: 'Kesesuaian bahan pembelajaran yang digunakan dengan kurikulum.'
    },{
      header: '',
      nomorSoal: '2.',
      soalNilai: 'Keseuaian rumusan kompetensi dasar, indikator dan tujuan pembelajaran.'
    },{
      header: 'B.PEMILIHAN DAN PENGORGANISASIAN MATERI, MEDIA, DAN SUMBER',
      nomorSoal: '3.',
      soalNilai: 'Kesesuaian materi dengan tujuan, perkembangan siswa, dan urutkan, kedalaman, dan kemutakhiran materi'
    },{
      header: ' ',
      nomorSoal: '4.',
      soalNilai: 'Kesesuaian media (alat bantu mengajar) dengan tujuan, materi, metoda, dan lingkungan (daya cerna) siswa.'
    },{
      header: ' ',
      nomorSoal: '5. ',
      soalNilai: 'Kesesuaian sumber belajar dengan tujuan, materi, metoda, dan lingkungan(daya cerna) siswa.'
    },{
      header: 'C. RANCANGAN SKENARIO/STRATEGI PEMBELAJARAN',
      nomorSoal: '6. ',
      soalNilai: 'Kesesuaian kegiatan belajar yang dipilih dengan tujuan, bahan, waktu, sarana, lingkungan, dan bervariasi serta memungkinkan keterlibatan siswa.'
    },{
      header: ' ',
      nomorSoal: '7. ',
      soalNilai: 'Kesesuaian langkah kegitan belajar yang dipilih dengan tujuan, bahan, waktu, sarana, lingkungan, dan memungkinkan keterlibatan siswa.'
    },{
      header: '',
      nomorSoal: '8. ',
      soalNilai: 'Cara-cara pengorganisasian siswa seperti bahan, kegiatan, media yang menarik, dan melibatkan siswa.'
    },{
      header: '',
      nomorSoal: '9. ',
      soalNilai: 'Alokasi waktu belajar-mengajar (pembukaan, inti, penutup) dicantumkan rinci, dan proposional.'
    },{
      header: '',
      nomorSoal: '10.',
      soalNilai: 'Cara-cara pengorganisasian siswa agr berpartisipasi aktif dalam kegiatan pembelajaran.'
    },{
      header: 'E. RANCANGAN PROSEDUR BENTUK DAN JENIS PENILAIAN',
      nomorSoal: '11.',
      soalNilai: 'Cara-cara pengorganisasian siswa agr berpartisipasi aktif dalam kegiatan pembelajaran.'
    },{
      header: '',
      nomorSoal: '12.',
      soalNilai: 'Teknik penilaian yang direncanakan mencakup tes, unjuk kerja, hasil karya, dan penugasan.'
    },{
      header: ' ',
      nomorSoal: '13.',
      soalNilai: 'Layanan remedial dan pengayaan dicantumkan dan diuraikan secara lengkap.'
    },{
      header: 'F. KESAN UMUM RENCANA PEMBELAJARAN ',
      nomorSoal: '14.',
      soalNilai: 'Kebersihan dan kerapian tulisan, dan ilustrasi menarik.'
    },{
      header: ' ',
      nomorSoal: '15.',
      soalNilai: 'Penggunaan bahasa tulis tepat, baku, komunikatif, dan sesuai dengan EYD'
    }
  ];

  tombol: tombolNilai[] = [
    { value: 1, namaTombol: 'sangat kurang'},
    { value: 2, namaTombol: 'kurang'},
    { value: 3, namaTombol: 'baik'},
    { value: 4, namaTombol: 'amat baik'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

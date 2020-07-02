import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent implements OnInit {

  ddsekolah = [
    {
        label: 'sekolah',
        items: [
          {
            label: ' - Nilai Ujian',
            link: '/pendaftaranmhstampil'
          },
          {
              label: 'Pendaftaran Mahasiswa',
              link: '/pendaftaranmhstampil'
          },
          {
              label: 'Penilaian Dosen',
              link: '/nilaidosentampil'
          },
          {
              label: 'Penilaian Guru',
              link: '/nilaigurutampil'
          }
        ]
    }
  ];

  ddpenempatan = [
    {
        label: 'Penempatan',
        items: [
          {
              label: ' - Mahasiswa',
              link: '/pendaftaranmhstampil'
          },
          {
              label: ' - Dosen Pembimbing',
              link: '/nilaidosentampil'
          },
          {
              label: 'Penilaian Guru',
              link: '/nilaigurutampil'
          }
        ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarguru',
  templateUrl: './sidebarguru.component.html',
  styleUrls: ['./sidebarguru.component.css']
})
export class SidebarguruComponent implements OnInit {

  ddmhs = [
    {
        label: 'Mahasiswa',
        items: [
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

  ddsklh = [
    {
        label: 'Sekolah',
        items: [
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

  ddpengguna = [
    {
        label: 'Data pengguna',
        items: [
          {
              label: 'Data Mahasiswa',
              link: '/pendaftaranmhstampil'
          },
          {
              label: 'Data Dosen',
              link: '/datadosentampil'
          },
          {
              label: 'Data Guru',
              link: '/nilaigurutampil'
          }
        ]
    }
  ];

  config = {
    highlightOnSelect: true,
    interfaceWithRoute: true,
    collapseOnSelect: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

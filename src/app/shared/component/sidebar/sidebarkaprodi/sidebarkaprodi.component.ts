import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarkaprodi',
  templateUrl: './sidebarkaprodi.component.html',
  styleUrls: ['./sidebarkaprodi.component.css']
})
export class SidebarkaprodiComponent implements OnInit {

  ddmhs = [
    {
        label: 'Dosen Pembimbing',
        items: [
          {
              label: 'Penempatan Dosen',
              link: '/dashboard/kaprodi/pilihtempatdosen'
          }
        ]
    }
  ];

  ddsklh = [
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

  ddpengguna = [
    {
        label: 'Sekolah',
        items: [
          {
              label: 'Tambah Sekolah',
              link: '/dashboard/kaprodi/tambahsekolah'
          },
          {
              label: 'Tambah Kuota Sekolah',
              link: '/dashboard/kaprodi/tambahkuota'
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

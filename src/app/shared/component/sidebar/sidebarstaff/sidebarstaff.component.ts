import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarstaff',
  templateUrl: './sidebarstaff.component.html',
  styleUrls: ['./sidebarstaff.component.css']
})
export class SidebarstaffComponent implements OnInit {

  ddstaff = [
    {
        label: 'Staff',
        items: [
          {
            label: ' - Nilai UAS',
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

  ddguru = [
    {
        label: 'Guru Pamong',
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

  dddosen = [
    {
        label: 'Dosen Pembimbing',
        items: [
          {
            label: ' - Nilai UAS',
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

  config = {
    highlightOnSelect: true,
    interfaceWithRoute: true,
    collapseOnSelect: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

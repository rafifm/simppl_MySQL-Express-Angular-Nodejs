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
            label: ' - Nilai Ujian',
            link: '/dashboard/guru/tambahnilai'
          },
          {
              label: 'Lihat Nilai Ujian',
              link: '/dashboard/guru/tampilnilai'
          }
        ]
    }
  ];

  ddkelas = [
    {
        label: 'Kelas',
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

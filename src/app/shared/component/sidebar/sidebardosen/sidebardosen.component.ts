import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebardosen',
  templateUrl: './sidebardosen.component.html',
  styleUrls: ['./sidebardosen.component.css']
})
export class SidebardosenComponent implements OnInit {

  ddmhs = [
    {
        label: 'Mahasiswa',
        items: [
          {
            label: ' - Nilai UAS',
            link: '/dashboard/dosen/tambahnilai'
          },{
            label: ' Lihat Nilai UAS',
            link: '/dashboard/dosen/tampilnilai'
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

  config = {
    highlightOnSelect: true,
    interfaceWithRoute: true,
    collapseOnSelect: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

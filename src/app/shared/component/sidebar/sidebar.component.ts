import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  appitems = [
    {
        label: 'Mahasiswa',
        items: [
          {
              label: 'Pendaftaran Mahasiswa',
              link: '/pendaftaranmhstampil'
          },
          {
              label: 'Penilaian Dosen'
          },
          {
              label: 'Penilaian Guru'
          }
        ]
    }
];

  config = {
    highlightOnSelect: false,
    interfaceWithRoute: true
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebarkaprodi',
  templateUrl: './sidebarkaprodi.component.html',
  styleUrls: ['./sidebarkaprodi.component.css']
})
export class SidebarkaprodiComponent implements OnInit {

  ddmhs = [
    {
        label: 'Dosen',
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
              label: 'Penempatan Mahasiswa',
              link: '/dashboard/kaprodi/pilihtempatmhs'
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
          }
        ]
    }
  ];

  config = {
    highlightOnSelect: true,
    interfaceWithRoute: true,
    collapseOnSelect: true
  }

  nama_kaprodi;
  email_kaprodi;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nama_kaprodi = this.route.snapshot.queryParams['nama'];
    this.email_kaprodi = this.route.snapshot.queryParams['email'];
  }

}

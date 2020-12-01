import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';

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
          },{
            label: 'Nilai Mahasiswa',
            link: '/dashboard/kaprodi/tampilnilaimhs'
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

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.nama_kaprodi = this.tokenStorage.getPengguna().nama;
    this.email_kaprodi = this.tokenStorage.getPengguna().email_pengguna;
  }

}

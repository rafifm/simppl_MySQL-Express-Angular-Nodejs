import { Component, OnInit } from '@angular/core';
import { DosenService } from 'src/app/modules/penilaian/dosen/dosen.service';

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

  config = {
    highlightOnSelect: true,
    interfaceWithRoute: true,
    collapseOnSelect: true
  }

  nama_dosen = '';
  halaman = 1;
  totalDataPerHalaman = 10;

  dosen: any;
  totalDosen = 0;

  constructor(private dbDosen: DosenService) { }

  ngOnInit(): void {
  }

  getRequestParams(searchTitle, halaman, totalDataPerHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_dosen`] = searchTitle;
    }

    if (halaman) {
      params[`page`] = halaman - 1;
    }

    if (totalDataPerHalaman) {
      params[`size`] = totalDataPerHalaman;
    }

    return params;
  }

  ambilDosen(){
    const params = this.getRequestParams(this.nama_dosen, this.halaman, this.totalDataPerHalaman);

    this.dbDosen.ambilDosen(params)
      .subscribe((ambilAkunDosen => {
        console.log(ambilAkunDosen);
      }))
  }

}

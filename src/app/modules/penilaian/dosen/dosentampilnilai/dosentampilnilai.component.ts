import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';
import { DosenService } from '../dosen.service';

@Component({
  selector: 'app-dosentampilnilai',
  templateUrl: './dosentampilnilai.component.html',
  styleUrls: ['./dosentampilnilai.component.css']
})
export class DosentampilnilaiComponent implements OnInit {

  nama_mhs = '';
  halaman = 1;
  totalDataPerHalaman = 10;

  dosen: any;
  totalMhs = 0;
  private idPengguna;

  kolomNilai: string[] = ["nama", "nim", "aksi"];

  constructor(
    private dbMhs: DosenService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.ambilDataMhs();
    
  }

  getRequestParams(searchTitle, halaman, totalDataPerHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_mhs`] = searchTitle;
    }

    if (halaman) {
      params[`page`] = halaman - 1;
    }

    if (totalDataPerHalaman) {
      params[`size`] = totalDataPerHalaman;
    }

    return params;
  }

  ambilDataMhs() {
    var tombolnilai;
    const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);
    this.idPengguna = this.tokenStorage.getPengguna().idPengguna;
    this.dbMhs.ambilDosen(this.idPengguna)
      .subscribe(ambilData => {
        this.dosen = ambilData[0].mahasiswas;
        console.log(this.dosen);
        for(var i=0;i<= this.dosen.length; i++){
          console.log(this.dosen[i].nilaiId);
          if(this.dosen[i].nilaiId == null){
            tombolnilai = true;
          } else if (this.dosen[i].nilaiId != null) {
            tombolnilai = false;
          }
          console.log(tombolnilai);
        }
        // if(this.dosen[0].nilaiId == null){
        //   this.tombolnilai = true;
        // } 
      })
      error => {
        console.log(error);
      }
    
  }

  nilai(idMhs){
    let idPengguna = this.idPengguna;
    this.router.navigate(['/dashboard/dosen/tambahnilai', idMhs, idPengguna]);
  }

}

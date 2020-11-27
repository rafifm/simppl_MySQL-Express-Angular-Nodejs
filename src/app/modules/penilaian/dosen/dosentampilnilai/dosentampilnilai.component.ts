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

  dosen: any;
  private idPengguna;

  kolomNilai: string[] = ["nama", "nim", "nilaiuts", "nilaiuas"];

  constructor(
    private dbMhs: DosenService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.ambilDataMhs();
  }

  ambilDataMhs() {
    var tombolnilai;
    this.idPengguna = this.tokenStorage.getPengguna().idPengguna;
    this.dbMhs.ambilDosen(this.idPengguna)
      .subscribe(ambilData => {
        this.dosen = ambilData[0].mahasiswas; 
      })
      error => {
        console.log(error);
      }
    
  }

  nilai(idMhs){
    this.router.navigate(['/dashboard/dosen/tambahnilai', idMhs, this.idPengguna]);
  }

  nilaiUTS(idMhs){
    this.router.navigate(['/dashboard/dosen/tambahnilaiuts', idMhs, this.idPengguna]);
  }

}

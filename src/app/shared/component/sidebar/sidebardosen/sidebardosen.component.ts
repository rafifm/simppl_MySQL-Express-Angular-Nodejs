import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';
import { DosenService } from 'src/app/modules/penilaian/dosen/dosen.service';

@Component({
  selector: 'app-sidebardosen',
  templateUrl: './sidebardosen.component.html',
  styleUrls: ['./sidebardosen.component.css']
})
export class SidebardosenComponent implements OnInit {

  nama_dosen;
  email_dosen;

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.nama_dosen = this.tokenService.getPengguna().nama_dosen;
    this.email_dosen = this.tokenService.getPengguna().email_pengguna;
  }

}

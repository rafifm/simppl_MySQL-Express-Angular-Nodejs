import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';

@Component({
  selector: 'app-sidebardosen',
  templateUrl: './sidebardosen.component.html',
  styleUrls: ['./sidebardosen.component.css']
})
export class SidebardosenComponent implements OnInit {

  nama_dosen;
  email_dosen;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.nama_dosen = this.tokenStorage.getPengguna().nama;
    this.email_dosen = this.tokenStorage.getPengguna().email_pengguna;
  }

}

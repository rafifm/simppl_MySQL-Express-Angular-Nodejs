import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';

@Component({
  selector: 'app-sidebarmhs',
  templateUrl: './sidebarmhs.component.html',
  styleUrls: ['./sidebarmhs.component.css']
})
export class SidebarmhsComponent implements OnInit {

  nama_mhs;
  email_mhs;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.nama_mhs = this.tokenStorage.getPengguna().nama;
    this.email_mhs = this.tokenStorage.getPengguna().email_pengguna;
  }

}

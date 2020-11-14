import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent implements OnInit {

    nama_admin;
    email_admin;

  constructor(
    private tokenService: TokenStorageService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.nama_admin = this.route.snapshot.queryParams['nama'];
    this.email_admin = this.tokenService.getPengguna().email_pengguna;
  }

}

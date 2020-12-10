import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';

@Component({
  selector: 'app-sidebarstaff',
  templateUrl: './sidebarstaff.component.html',
  styleUrls: ['./sidebarstaff.component.css']
})
export class SidebarstaffComponent implements OnInit {

  nama_staff;
  email_staff;

  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  
    this.nama_staff = this.tokenStorage.getPengguna().nama;
    this.email_staff = this.tokenStorage.getPengguna().email_pengguna;

  }

}

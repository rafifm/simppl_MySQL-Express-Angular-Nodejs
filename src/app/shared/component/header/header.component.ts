import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsAuthenticated = false;
  peran;

  @Output() toggleSideBarForMe = new EventEmitter<any>();

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getPengguna().peran == 'PERAN_DOSEN') {
      this.peran = "DOSEN";
    } else if (this.tokenStorage.getPengguna().peran == 'PERAN_ADMIN'){
      this.peran = "ADMIN";
    } else if (this.tokenStorage.getPengguna().peran == 'PERAN_MAHASISWA'){
      this.peran = "MAHASISWA";
    } else if (this.tokenStorage.getPengguna().peran == 'PERAN_KAPRODI'){
      this.peran = "KAPRODI";
    }
  }

  logout(): void {
    this.router.navigate(['/auth/login']);
    this.tokenStorage.signOut();
    // window.location.reload();
    
  }

  toggleSideBar(eventObject: any) {
    this.toggleSideBarForMe.emit(eventObject);
  }
}

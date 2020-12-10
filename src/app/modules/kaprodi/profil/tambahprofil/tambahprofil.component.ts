import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-tambahprofil',
  templateUrl: './tambahprofil.component.html',
  styleUrls: ['./tambahprofil.component.css']
})
export class TambahprofilComponent implements OnInit {

  formKaprodi: FormGroup;

  constructor(
    private profil: ProfilService,
    private router: Router,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.formKaprodi =  new FormGroup({
      nama_kaprodi:new FormControl(null,{validators: [Validators.required]})
    });
  }

  simpanProfil(){
    this.profil.tambahProfil(this.token.getPengguna().id,{
      nama_kaprodi:this.formKaprodi.value.nama_kaprodi
    }).subscribe(kaprodi => {

    }, error =>{
      console.log(error);
    });
    this.router.navigate(["/dashboard/kaprodi"])
  }

}

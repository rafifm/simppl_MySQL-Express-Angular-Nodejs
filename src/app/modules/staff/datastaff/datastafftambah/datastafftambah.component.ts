import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';
import { DatastaffService } from '../datastaff.service';

@Component({
  selector: 'app-datastafftambah',
  templateUrl: './datastafftambah.component.html',
  styleUrls: ['./datastafftambah.component.css']
})
export class DatastafftambahComponent implements OnInit {

  formStaff:FormGroup;

  constructor(
    private dataStaff: DatastaffService,
    private router: Router,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {

    this.formStaff = new FormGroup({
      nama_staff: new FormControl(null, { validators: [Validators.required]})
    });

  }

  simpanStaff(){
    this.dataStaff.tambahStaff(this.tokenStorage.getPengguna().id,{
      nama_staff: this.formStaff.value.nama_staff
    }).subscribe(staff =>{
      
    }, error=> {
      console.log(error);
    });
    this.router.navigate(["/dashboard/staff/dashboardstaff"]);
  }

}

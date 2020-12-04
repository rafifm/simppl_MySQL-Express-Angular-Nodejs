import { Component, OnInit } from '@angular/core';
import { DatastaffService } from '../datastaff.service';

@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent implements OnInit {

  dosen;
  mhs;
  kolomDosen: string[] = ["nama", "nidn", "aksi"];
  kolomMhs: string[] = ["nama", "nim"];

  constructor(private data: DatastaffService) { }

  ngOnInit(): void {
    this.ambilDosen();
    this.ambilDataMhs();
  }

  ambilDosen() {
    this.data.ambilDosen()
      .subscribe(dosen => {
        this.dosen = dosen;
      })
      error => {
        console.log(error);
      }
  }

  ambilDataMhs() {
    this.data.ambilMhs()
      .subscribe(mhs =>{
        this.mhs = mhs;
      })
      error => {
        console.log(error);
      }
  }

  hapusDosen(idDosen){
    this.data.hapusDosen(idDosen)
      .subscribe(dosen => {
        this.ambilDosen();
      },
      error =>{
        console.log(error);
      })
  }

}

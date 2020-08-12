import { Component, OnInit, ViewChild } from '@angular/core';
import { Staff } from '../staff.model';
import { Subscribable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { DatastaffService } from '../datastaff.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-datastafftampil',
  templateUrl: './datastafftampil.component.html',
  styleUrls: ['./datastafftampil.component.css']
})
export class DatastafftampilComponent implements OnInit {

  staff: Staff[] = [];
  sumberdata;
  isLoading = false;
  totalStaff = 0;
  staffPerHalaman = 5;
  halamanSekarang = 1;
  opsiBesarHalaman = [5, 10];
  userIsAuthenticated = false;
  private staffSub: Subscription;
  private authStatusSub: Subscription;

  kolomstaff: string[] = ["nama", "email", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;


  constructor(public staffService: DatastaffService) { }

  ngOnInit() {
    this.isLoading = true;
    this.staffService.ambilSemuaStaff(this.staffPerHalaman, this.halamanSekarang);
    this.staffSub = this.staffService
      .ambilStaffUpdateListener()
      .subscribe((Upstaff: { staff: Staff[], jumlahStaff: number}) => {
        this.isLoading = false;
        this.totalStaff = Upstaff.jumlahStaff;
        this.staff = Upstaff.staff;
        this.sumberdata = new MatTableDataSource<any>(this.staff);
      });
    
  }

}
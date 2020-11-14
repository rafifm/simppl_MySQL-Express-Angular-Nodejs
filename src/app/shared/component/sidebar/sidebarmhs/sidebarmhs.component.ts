import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebarmhs',
  templateUrl: './sidebarmhs.component.html',
  styleUrls: ['./sidebarmhs.component.css']
})
export class SidebarmhsComponent implements OnInit {

  nama_mhs;
  email_mhs;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nama_mhs = this.route.snapshot.queryParams['nama'];
    this.email_mhs = this.route.snapshot.queryParams['email'];
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebardosen',
  templateUrl: './sidebardosen.component.html',
  styleUrls: ['./sidebardosen.component.css']
})
export class SidebardosenComponent implements OnInit {

  nama_dosen;
  email_dosen;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nama_dosen = this.route.snapshot.queryParams['nama'];
    this.email_dosen = this.route.snapshot.queryParams['email'];
  }

}

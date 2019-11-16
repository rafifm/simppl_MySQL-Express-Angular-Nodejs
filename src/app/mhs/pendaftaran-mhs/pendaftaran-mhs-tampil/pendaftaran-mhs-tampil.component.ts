import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { PendaftaranMhs } from "../pendaftaran-mhs.model";
import { PendaftaranMhsService } from '../pendaftaran-mhs.service';

@Component({
  selector: "app-pendaftaran-mhs-tampil",
  templateUrl: "./pendaftaran-mhs-tampil.component.html",
  styleUrls: ["./pendaftaran-mhs-tampil.component.css"]
})
export class PendaftaranMhsTampilComponent implements OnInit, OnDestroy {
  // posts = [
  //   {nama: 'mahasiswa satu',nim: '123456', ipk: '3.00', nokwitansi: '789'},
  //   {nama: 'mahasiswa dua',nim: '123457', ipk: '3.00', nokwitansi: '780'},
  //   {nama: 'mahasiswa tiga',nim: '123458', ipk: '3.00', nokwitansi: '781'}
  // ];
  posts: PendaftaranMhs[] = [];
  private postsSub: Subscription;

  constructor(public PendaftaranMhsService: PendaftaranMhsService) {}
  
  ngOnInit() {
    this.PendaftaranMhsService.getPosts();
    this.postsSub = this.PendaftaranMhsService.getPostUpdateListener()
      .subscribe((posts: PendaftaranMhs[]) => { 
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
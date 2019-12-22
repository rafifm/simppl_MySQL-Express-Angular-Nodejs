import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { PendaftaranMhs } from "../pendaftaran-mhs.model";
import { PendaftaranMhsService } from '../pendaftaran-mhs.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: "app-pendaftaran-mhs-tampilold",
  templateUrl: "./pendaftaran-mhs-tampilold.component.html",
  styleUrls: ["./pendaftaran-mhs-tampilold.component.css"]
})
export class PendaftaranMhsTampiloldComponent implements OnInit, OnDestroy {
  // posts = [
  //   {nama: 'mahasiswa satu',nim: '123456', ipk: '3.00', nokwitansi: '789'},
  //   {nama: 'mahasiswa dua',nim: '123457', ipk: '3.00', nokwitansi: '780'},
  //   {nama: 'mahasiswa tiga',nim: '123458', ipk: '3.00', nokwitansi: '781'}
  // ];
  posts: PendaftaranMhs[] = [];
  isLoading = false;
  totalPosts = 0;
  postsPerPage= 2;
  currentPage= 1;
  pageSizeOptions = [1, 2, 5, 10];
  private postsSub: Subscription;

  constructor(public pendaftaranMhsService: PendaftaranMhsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.pendaftaranMhsService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.pendaftaranMhsService.getPostUpdateListener()
      .subscribe((postData: { posts: PendaftaranMhs[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.pendaftaranMhsService.getPosts(this.postsPerPage, this.currentPage);
  }

  onDelete(postId) {
    this.isLoading = true;
    this.pendaftaranMhsService.deletePost(postId).subscribe(() => {
      this.pendaftaranMhsService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}

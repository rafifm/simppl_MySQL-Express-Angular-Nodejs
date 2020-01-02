import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { PendaftaranMhs } from '../pendaftaran-mhs.model';
import { Subscription } from 'rxjs';
import { PendaftaranMhsService } from '../pendaftaran-mhs.service';

@Component({
  selector: 'app-pendaftaran-mhs-tampil',
  templateUrl: './pendaftaran-mhs-tampil.component.html',
  styleUrls: ['./pendaftaran-mhs-tampil.component.css']
})

export class PendaftaranMhsTampilComponent implements OnInit {

  posts: PendaftaranMhs[] = [];
  dataSource;
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private postsSub: Subscription;
  displayedColumns: string[] = ["nama", "foto", "nim", "ipk", "nokwitansi", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(public pendaftaranMhsService: PendaftaranMhsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.pendaftaranMhsService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.pendaftaranMhsService.getPostUpdateListener()
      .subscribe((postData: { posts: PendaftaranMhs[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
        this.dataSource = new MatTableDataSource<any>(this.posts);
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


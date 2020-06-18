import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PendaftaranMhs } from '../pendaftaran-mhs.model';
import { Subscription } from 'rxjs';
import { PendaftaranMhsService } from '../pendaftaran-mhs.service';
import { AuthService } from 'src/app/layouts/auth/auth.service';

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
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [5, 10];
  userIsAuthenticated = false;
  private postsSub: Subscription;
  private authStatusSub: Subscription;

  displayedColumns: string[] = ["nama", "foto", "nim", "ipk", "nokwitansi", "aksi"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(public pendaftaranMhsService: PendaftaranMhsService, private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.pendaftaranMhsService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.pendaftaranMhsService
      .getPostUpdateListener()
      .subscribe((postData: { posts: PendaftaranMhs[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
        this.dataSource = new MatTableDataSource<any>(this.posts);
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
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
    }, () => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}


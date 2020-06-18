import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { datadosen } from '../datadosen.model';
import { Subscription } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatadosenService } from '../datadosen.service';
import { AuthService } from 'src/app/layouts/auth/auth.service';

@Component({
  selector: 'app-datadosentampil',
  templateUrl: './datadosentampil.component.html',
  styleUrls: ['./datadosentampil.component.css']
})
export class DatadosentampilComponent implements OnInit, OnDestroy {

  datadsn: datadosen[] = [];
  dataSource;
  isLoading = false;
  userIsAuthenticated = false;
  private postsSub: Subscription;
  private authStatusSub: Subscription;
  totalPosts = 0;
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [5, 10];

  kolomtabel: string[] = ["foto","nama","nip","jabatan","pangkat","golongan","npwp","aksi"];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 
  constructor(public dataDosenService: DatadosenService, private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataDosenService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.dataDosenService
      .getPostUpdateListener()
      .subscribe((unggahdata: { dataupload: datadosen[], nomordata: number}) => {
        this.isLoading = false;
        this.totalPosts = unggahdata.nomordata;
        this.datadsn = unggahdata.dataupload;
        this.dataSource = new MatTableDataSource<any>(this.datadsn);
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onChangedPage(nomordata: PageEvent) {
    this.isLoading = true;
    this.currentPage = nomordata.pageIndex + 1;
    this.postsPerPage = nomordata.pageSize;
    this.dataDosenService.getPosts(this.postsPerPage, this.currentPage);
  }

  onDelete(postId) {
    this.isLoading = true;
    this.dataDosenService.deletePost(postId).subscribe(() => {
      this.dataDosenService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}


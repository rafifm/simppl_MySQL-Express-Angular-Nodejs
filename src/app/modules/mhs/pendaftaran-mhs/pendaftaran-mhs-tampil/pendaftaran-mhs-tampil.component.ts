import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PendaftaranMhs } from '../pendaftaran-mhs.model';
import { Subscription } from 'rxjs';
import { PendaftaranMhsService } from '../pendaftaran-mhs.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-pendaftaran-mhs-tampil',
  templateUrl: './pendaftaran-mhs-tampil.component.html',
  styleUrls: ['./pendaftaran-mhs-tampil.component.css']
})
export class PendaftaranMhsTampilComponent implements OnInit {

  posts: PendaftaranMhs[] = [];
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private postsSub: Subscription;

  displayedColumns: string[] = ["nama", "nim", "ipk", "nokwitansi"];
  dataSource = new MatTableDataSource<PendaftaranMhs>(this.posts);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(public pendaftaranMhsService: PendaftaranMhsService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.isLoading = true;
    this.pendaftaranMhsService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.pendaftaranMhsService.getPostUpdateListener()
      .subscribe((postData: { posts: PendaftaranMhs[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}

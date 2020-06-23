import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nomor: number;
  dospem: string;
  sekolah: string;
  kelompok: number;
  ketua: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nomor: 1, dospem: 'harton', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
  { nomor: 2, dospem: 'zainal', sekolah: 'SMAN', kelompok: 4, ketua: 'keiza'},
];

@Component({
  selector: 'app-penempatan-dosen',
  templateUrl: './penempatan-dosen.component.html',
  styleUrls: ['./penempatan-dosen.component.css']
})
export class PenempatanDosenComponent implements OnInit {

  displayedColumns: string[] = ["nomor", "dospem", "sekolah", 'kelompok', 'ketua'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

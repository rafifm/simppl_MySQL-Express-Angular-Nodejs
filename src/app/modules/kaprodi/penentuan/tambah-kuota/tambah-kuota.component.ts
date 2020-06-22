import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nomor: number;
  sekolah: string;
  kuota: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh'},
  { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh'},
  { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh'},
  { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh'},
  { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh'},
  { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh'},
];

@Component({
  selector: 'app-tambah-kuota',
  templateUrl: './tambah-kuota.component.html',
  styleUrls: ['./tambah-kuota.component.css']
})
export class TambahKuotaComponent implements OnInit {

  displayedColumns: string[] = ["nomor", "sekolah", "kuota","status", "aksi"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

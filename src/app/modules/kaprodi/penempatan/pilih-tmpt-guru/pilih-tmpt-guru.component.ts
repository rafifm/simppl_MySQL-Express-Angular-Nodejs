import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nomor: number;
  sekolah: string;
  nama: string;
  nim: number;
  notelp: number;
  dospem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nomor: 1, sekolah: 'SMAN', nama: 'salman', nim: 32, notelp: 9320932, dospem: 'hartono'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 11, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 14, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 42, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 23, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 33, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 44, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 17, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 55, notelp: 9320932, dospem: 'zainal'},
  { nomor: 2, sekolah: 'SMAN', nama: 'salman', nim: 32, notelp: 9320932, dospem: 'zainal'},
];

@Component({
  selector: 'app-pilih-tmpt-guru',
  templateUrl: './pilih-tmpt-guru.component.html',
  styleUrls: ['./pilih-tmpt-guru.component.css']
})
export class PilihTmptGuruComponent implements OnInit {

  sekolah = [
    { id: 1,nama: 'SMAN 1'},
    { id: 2,nama: 'SMAN 2'},
    { id: 3,nama: 'SMAN 3'},
    { id: 4,nama: 'SMAN 4'},
    { id: 5,nama: 'SMAN 5'},
  ]

  displayedColumns: string[] = ["nomor", "sekolah", "nama", "nim", "notelp", "dospem", "penempatan"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

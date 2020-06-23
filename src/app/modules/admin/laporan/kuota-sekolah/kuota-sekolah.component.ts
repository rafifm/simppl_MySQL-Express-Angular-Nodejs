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
  { nomor: 1, sekolah: 'SMAN', kuota: 12, status: 'penuh'},
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '-2' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '-8' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '4' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '15' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '2' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '7' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '0' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '-7' },
  { nomor: 2, sekolah: 'SMAN', kuota: 12, status: '9' },
];

@Component({
  selector: 'app-kuota-sekolah',
  templateUrl: './kuota-sekolah.component.html',
  styleUrls: ['./kuota-sekolah.component.css']
})
export class KuotaSekolahComponent implements OnInit {

  displayedColumns: string[] = ["nomor", "sekolah", "kuota", "status"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

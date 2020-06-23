import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nomor: number;
  nim: number;
  nama: string;
  progstud: string;
  sekolah: string;
  dospem: string;
  guru: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nomor: 1, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'harton', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
  { nomor: 2, nim: 2015, nama: 'jeva', progstud: 'matematika', sekolah: 'SMAN', dospem: 'zainal', guru: 'melisa'},
];

@Component({
  selector: 'app-penempatan-mahasiswa',
  templateUrl: './penempatan-mahasiswa.component.html',
  styleUrls: ['./penempatan-mahasiswa.component.css']
})
export class PenempatanMahasiswaComponent implements OnInit {

  displayedColumns: string[] = ["nomor", 'nim', 'nama', 'progstud', "sekolah", "dospem", 'guru'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

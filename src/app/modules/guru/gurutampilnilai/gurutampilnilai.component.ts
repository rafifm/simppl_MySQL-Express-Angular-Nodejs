import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nama: string;
  nim: number;
  progstud: string;
  dospem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nama: 'Hydrogen',  nim: 12, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Helium', nim: 11, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Lithium', nim: 14, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Beryllium', nim: 42, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Boron', nim: 23, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Carbon', nim: 33, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Nitrogen', nim: 44, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Oxygen', nim: 17, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Fluorine', nim: 55, progstud: 'matematika',dospem: 'zainal'},
  { nama: 'Neon', nim: 32, progstud: 'matematika',dospem: 'zainal'},
];


@Component({
  selector: 'app-gurutampilnilai',
  templateUrl: './gurutampilnilai.component.html',
  styleUrls: ['./gurutampilnilai.component.css']
})
export class GurutampilnilaiComponent implements OnInit {

  displayedColumns: string[] = ["nama", "nim", "progstud","dospem", "aksi"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

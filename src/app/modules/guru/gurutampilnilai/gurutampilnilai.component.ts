import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  nim: number;
  progstud: string;
  dospem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen',  nim: 12, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Helium', nim: 11, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Lithium', nim: 14, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Beryllium', nim: 42, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Boron', nim: 23, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Carbon', nim: 33, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Nitrogen', nim: 44, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Oxygen', nim: 17, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Fluorine', nim: 55, progstud: 'matematika',dospem: 'zainal'},
  { name: 'Neon', nim: 32, progstud: 'matematika',dospem: 'zainal'},
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

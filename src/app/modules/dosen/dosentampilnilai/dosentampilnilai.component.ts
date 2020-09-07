import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nama: string;
  nim: number;
  progstud: string;
  dospem: string;
  nilai: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nama: 'Arya Dharmawan Wijaya Kusuma',  nim: 1710118110003, progstud: 'matematika',dospem: 'Dr. Hj. Noor Fajriah, M.Si.', nilai: 70},
  { nama: 'Rini Astuti', nim: 1710118120025, progstud: 'matematika',dospem: 'Dr. Hj. Noor Fajriah, M.Si.', nilai: 77},
  { nama: 'Muhammad Irfan Maulana', nim: 1710118210023, progstud: 'matematika',dospem: 'Dr. Hj. Noor Fajriah, M.Si.', nilai: 76},
  { nama: 'Yuhana Rahmi', nim: 1710118320043, progstud: 'matematika',dospem: 'Siti Mawaddah, M.Pd.', nilai: 67},
  { nama: 'Aliya Ulfah', nim: 1710118120001, progstud: 'matematika',dospem: 'Siti Mawaddah, M.Pd.', nilai: 75},
  { nama: 'Tiara Rahmini Pertiwi', nim: 1710118120029, progstud: 'matematika',dospem: 'Siti Mawaddah, M.Pd.', nilai: 74},
  { nama: 'Herlina Yuriska', nim: 1710118320012, progstud: 'matematika',dospem: 'Siti Mawaddah, M.Pd.', nilai: 78},
  { nama: 'Litasari Ananda Saputri', nim: 1710118320018, progstud: 'matematika',dospem: 'Dr. H. Karim, M.Si.', nilai: 73},
  { nama: 'Ahmad Rifky', nim: 1710118210004, progstud: 'matematika',dospem: 'Dr. H. Karim, M.Si.', nilai: 68},
  { nama: 'Fitria Agustina', nim: 1710118320010, progstud: 'matematika',dospem: 'Dr. H. Karim, M.Si.', nilai: 75},
];

@Component({
  selector: 'app-dosentampilnilai',
  templateUrl: './dosentampilnilai.component.html',
  styleUrls: ['./dosentampilnilai.component.css']
})
export class DosentampilnilaiComponent implements OnInit {

  displayedColumns: string[] = ["nama", "nim", "progstud","dospem", "nilai", "aksi"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

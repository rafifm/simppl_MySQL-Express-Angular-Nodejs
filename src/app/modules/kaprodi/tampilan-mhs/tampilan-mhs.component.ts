import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tampilan-mhs',
  templateUrl: './tampilan-mhs.component.html',
  styleUrls: ['./tampilan-mhs.component.css']
})
export class TampilanMhsComponent implements OnInit {

  kolomPenempatan: string[] = ["nama","nim","sekolah"];

  constructor(private dataMhs: ) { }

  ngOnInit(): void {
  }

}

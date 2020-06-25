import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dosentambahnilai',
  templateUrl: './dosentambahnilai.component.html',
  styleUrls: ['./dosentambahnilai.component.css']
})
export class DosentambahnilaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

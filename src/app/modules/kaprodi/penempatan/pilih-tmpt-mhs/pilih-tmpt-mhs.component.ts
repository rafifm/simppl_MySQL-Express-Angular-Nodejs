import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PenempatanService } from '../penempatan.service';
import { FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pilih-tmpt-mhs',
  templateUrl: './pilih-tmpt-mhs.component.html',
  styleUrls: ['./pilih-tmpt-mhs.component.css']
})
export class PilihTmptMhsComponent implements OnInit {

  vsekolah: any;
  sekolah: any;
  mhs: any;
  dataSekolahSekarang = null;
  dataMhsSekarang = null;
  dataAkunMhs;
  dataSekolah;
  nama_mhs = '';
  currentIndex = -1;

  halaman = 1;
  totalAkunMhs = 0;
  totalDataSekolah = 0;
  totalDataPerHalaman = 10;
  banyakPerHalaman = [10, 20];
  formPilihSekolah: FormGroup;
  private idMhs: string;

  kolomMhs: string[] = ["namaMahasiswa", "nim_mhs", "penempatan"];
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  constructor(
    private dataPenempatan: PenempatanService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap) => {
      if (paramMap.has("id")){
        this.idMhs = paramMap.get("id");
        this.dataPenempatan.ambil(this.idMhs).subscribe(ambilidmhs => {
          this.mhs = ambilidmhs;
        });    
      } else {
        this.idMhs = null;
      }
    });
    this.ambilData();
  }

  getRequestParams(searchTitle, halaman, totalDataPerHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_mhs`] = searchTitle;
    }

    if (halaman) {
      params[`page`] = halaman - 1;
    }

    if (totalDataPerHalaman) {
      params[`size`] = totalDataPerHalaman;
    }

    return params;
  }

  ambilData() {
    const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);

    this.dataPenempatan.ambilSemuaMhs(params)
      .subscribe((ambilDataMhs: { mhs: any, totalAkunMhs: number}) => {
        this.mhs = ambilDataMhs.mhs;
        this.totalAkunMhs = ambilDataMhs.totalAkunMhs;
      })
      error => {
        console.log(error);
      };
    this.dataPenempatan.ambilSemuaSekolah(params)
      .subscribe((ambilDataSekolah: { sekolah: any, totalDataSekolah: number }) => {
        this.sekolah = ambilDataSekolah.sekolah;
        this.totalDataSekolah = ambilDataSekolah.totalDataSekolah;
      });
    
  }

  changeRatio(event: MatSelectChange) {
    this.dataPenempatan.insert(event.value); 
    console.log(event.value);
  }

  insertSekolah(vidSekolah, vidMhs){
    this.dataPenempatan.insertSekolah(
      vidMhs, vidSekolah.value
    ).subscribe(inSekolah => {
      console.log(inSekolah);
    }, error => {
      console.log(error);
    });
  }

  handlePageChange(event): void {
    this.halaman = event;
    this.ambilData();
  }

  handlePageSizeChange(event): void {
    this.totalDataPerHalaman = event.target.value;
    this.halaman = 1;
    this.ambilData();
  }

  setActiveTutorial(mhsTampil, index): void {
    this.dataMhsSekarang = mhsTampil;
    this.currentIndex = index;
  }

  hapusSemuaDataMhs(): void {
    this.dataPenempatan.hapusSemua()
      .subscribe(
        response => {
          console.log(response);
          this.ambilData();
        },
        error => {
          console.log(error);
        });
  }


}

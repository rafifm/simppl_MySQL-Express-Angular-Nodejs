import { Component, OnInit } from '@angular/core';
import { DataguruService } from '../dataguru.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-datagurutambah',
  templateUrl: './datagurutambah.component.html',
  styleUrls: ['./datagurutambah.component.css']
})
export class DatagurutambahComponent implements OnInit {

  submitted = false;
  formGuru: FormGroup;
  dataGuru: any;
  private mode = 'buat';
  private idGuru: string;

  constructor(
    private dataguruService: DataguruService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formGuru = new FormGroup({
      nama_guru: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      email_guru: new FormControl(null, {validators: [Validators.required]}),
      pass_guru: new FormControl(null, {validators: [Validators.required]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.mode = 'edit';
        this.idGuru = paramMap.get('id');
        this.dataguruService.ambil(this.idGuru).subscribe(dataguru => {
          this.dataGuru = dataguru;
          this.formGuru.setValue({
            nama_guru: this.dataGuru.nama_guru,
            email_guru: this.dataGuru.email_guru,
            pass_guru: this.dataGuru.pass_guru
          });
        });
      } else {
        this.mode= 'buat';
        this.idGuru = null;
      }
    })
  }

  simpanAkunGuru(formGuru: NgForm){
    if(this.formGuru.invalid){
      return;
    }
    if(this.mode === 'buat'){
      this.dataguruService.buat({
        nama_guru: this.formGuru.value.nama_guru,
        email_guru: this.formGuru.value.email_guru,
        pass_guru: this.formGuru.value.pass_guru
      })
      .subscribe(akunGuru => {
        console.log(akunGuru);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    } else {
      this.dataguruService.update(
        this.dataGuru.id, this.dataGuru = {
          nama_guru: this.formGuru.value.nama_guru,
          email_guru: this.formGuru.value.email_guru,
          pass_guru: this.formGuru.value.pass_guru
        }
      ).subscribe(dataUpdataGuru => {
        this.submitted = true;
      }, error => {
        console.log(error);
      });
    }    
    this.formGuru.reset();
    this.router.navigate(["/dashboard/staff/tampilguru"]);
  }
}

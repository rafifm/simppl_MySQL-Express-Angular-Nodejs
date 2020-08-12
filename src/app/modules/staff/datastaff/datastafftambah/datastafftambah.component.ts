import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/layouts/auth/auth.service';

import { DatastaffService } from '../datastaff.service';
import { Staff } from '../staff.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datastafftambah',
  templateUrl: './datastafftambah.component.html',
  styleUrls: ['./datastafftambah.component.css']
})
export class DatastafftambahComponent implements OnInit {

  staff: Staff;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private staffId: string;
  private authStatusSub: Subscription;

  constructor(
    public staffService: DatastaffService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      nama: new FormControl(null, {validators: [Validators.required]
      }),
      email: new FormControl(null, {validators: [Validators.required]
      }),
      password: new FormControl(null, {validators: [Validators.required]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("staffId")){
        this.mode = 'edit';
        this.staffId = paramMap.get('staffId');
        this.isLoading = true;
        this.staffService.ambilStaff(this.staffId).subscribe(akunStaff => {
          this.isLoading = false;
          this.staff = {
            id: akunStaff.id,
            nama_staff: akunStaff.nama,
            email_staff: akunStaff.email,
            pass_staff: akunStaff.password
          };
          this.form.setValue({
            nama: this.staff.nama_staff,
            email: this.staff.email_staff,
            password: this.staff.pass_staff
          });
        });
      } else {
        this.mode = 'create';
        this.staffId = null;
      }
    });
  }

  SimpanStaff(form: NgForm) {
    if(this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if(this.mode === 'create') {
      this.staffService.tambahstaff(
        this.form.value.nama,
        this.form.value.email,
        this.form.value.password
      );
    } else {
      this.staffService.updatestaff(
        this.staffId,
        this.form.value.nama,
        this.form.value.email,
        this.form.value.password
      );
    }
    this.form.reset
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}

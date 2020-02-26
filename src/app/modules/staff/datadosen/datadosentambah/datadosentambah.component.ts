import { Component, OnInit, OnDestroy } from '@angular/core';
import { datadosen } from '../datadosen.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DatadosenService } from '../datadosen.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/layouts/auth/auth.service';

@Component({
  selector: 'app-datadosentambah',
  templateUrl: './datadosentambah.component.html',
  styleUrls: ['./datadosentambah.component.css']
})
export class DatadosentambahComponent implements OnInit, OnDestroy {

  dosendb: datadosen;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private postId: string;
  private authStatusSub: Subscription;

  constructor(
    public dataDosenService: DatadosenService,
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
      nama: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nip: new FormControl(null, {validators: [Validators.required]}),
      jabatan: new FormControl(null, {validators: [Validators.required]}),
      pangkat: new FormControl(null, {validators: [Validators.required]}),
      golongan: new FormControl(null, {validators: [Validators.required]}),
      npwp: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required]}),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")){
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.isLoading = true;
        this.dataDosenService.getPost(this.postId).subscribe(unggahData => {
          this.isLoading = false;
          this.dosendb = {
            id: unggahData._id,
            nama: unggahData.nama,
            nip: unggahData.nip,
            jabatan: unggahData.nip,
            pangkat: unggahData.pangkat,
            golongan: unggahData.golongan,
            npwp: unggahData.npwp,
            imagePath: unggahData.imagePath
          };
          this.form.setValue({
            nama: this.dosendb.nama,
            nip: this.dosendb.nip,
            jabatan: this.dosendb.jabatan,
            pangkat: this.dosendb.pangkat,
            golongan: this.dosendb.golongan,
            npwp: this.dosendb.npwp,
            image: this.dosendb.imagePath
          });
        });
      }else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onImagePicker(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost( form: NgForm) {
    if (this.form.invalid) {
      return;
    }
    this.isLoading= true;
    if(this.mode === 'create') {
      this.dataDosenService.addPost(
        this.form.value.nama, 
        this.form.value.nip, 
        this.form.value.jabatan, 
        this.form.value.pangkat,
        this.form.value.golongan,
        this.form.value.npwp,  
        this.form.value.image
      );
    } else {
      this.dataDosenService.updatePost(
        this.postId,
        this.form.value.nama,
        this.form.value.nip,
        this.form.value.jabatan,
        this.form.value.pangkat,
        this.form.value.golongan,
        this.form.value.npwp,
        this.form.value.image,
      );
    }
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

}

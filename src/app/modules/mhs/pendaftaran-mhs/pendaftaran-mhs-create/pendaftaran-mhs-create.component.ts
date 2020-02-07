import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PendaftaranMhsService } from '../pendaftaran-mhs.service';
import { PendaftaranMhs } from '../pendaftaran-mhs.model';
import { mimeType } from "./mime-type.validator";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/layouts/auth/auth.service';

@Component({
  selector: 'app-pendaftaran-mhs-create',
  templateUrl: './pendaftaran-mhs-create.component.html',
  styleUrls: ['./pendaftaran-mhs-create.component.css']
})
export class PendaftaranMhsCreateComponent implements OnInit, OnDestroy {
  enteredNama = "";
  enteredNim = "";
  enteredIPK = "";
  enteredNokwitansi = "";
  post: PendaftaranMhs;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private postId: string;
  private authStatusSub: Subscription;

  constructor(
    public pendaftaranMhsService: PendaftaranMhsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      nama: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      nim: new FormControl(null, {validators: [Validators.required]
      }),
      ipk: new FormControl(null, {validators: [Validators.required]
      }),
      nokwitansi: new FormControl(null, {validators: [Validators.required]
      }),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")){
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.isLoading = true;
        this.pendaftaranMhsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {
            id: postData._id,
            nama: postData.nama,
            nim: postData.nim,
            ipk: postData.ipk,
            nokwitansi: postData.nokwitansi,
            imagePath: postData.imagePath
          };
          this.form.setValue({
            nama: this.post.nama,
            nim: this.post.nim,
            ipk: this.post.ipk,
            nokwitansi: this.post.nokwitansi,
            image: this.post.imagePath
          });
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onImagePicker(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost(form: NgForm){
    if(this.form.invalid){
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.pendaftaranMhsService.addPost(
        this.form.value.nama, 
        this.form.value.nim, 
        this.form.value.ipk, 
        this.form.value.nokwitansi, 
        this.form.value.image);
    } else {
      this.pendaftaranMhsService.updatePost(
        this.postId,
        this.form.value.nama,
        this.form.value.nim,
        this.form.value.ipk,
        this.form.value.nokwitansi,
        this.form.value.image
      );
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}

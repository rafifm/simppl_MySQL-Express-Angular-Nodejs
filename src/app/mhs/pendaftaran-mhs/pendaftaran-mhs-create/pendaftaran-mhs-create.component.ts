import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PendaftaranMhsService } from '../pendaftaran-mhs.service';
import { PendaftaranMhs } from '../pendaftaran-mhs.model';

@Component({
  selector: 'app-pendaftaran-mhs-create',
  templateUrl: './pendaftaran-mhs-create.component.html',
  styleUrls: ['./pendaftaran-mhs-create.component.css']
})
export class PendaftaranMhsCreateComponent implements OnInit {
  enteredNama = "";
  enteredNim = "";
  enteredIPK = "";
  enteredNokwitansi = "";
  post: PendaftaranMhs;
  isLoading = false;
  private mode = 'create';
  private postId: string;

  constructor(
    public pendaftaranMhsService: PendaftaranMhsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")){
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.isLoading = true;
        this.pendaftaranMhsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = true;
          this.post = {
            id: postData._id,
            nama: postData.nama,
            nim: postData.nim,
            ipk: postData.ipk,
            nokwitansi: postData.nokwitansi
          };
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.pendaftaranMhsService.addPost(form.value.nama, form.value.nim, form.value.ipk, form.value.nokwitansi);
    } else {
      this.pendaftaranMhsService.updatePost(
        this.postId,
        form.value.nama,
        form.value.nim,
        form.value.ipk,
        form.value.nokwitansi
      );
    }
    form.resetForm();
  }

}

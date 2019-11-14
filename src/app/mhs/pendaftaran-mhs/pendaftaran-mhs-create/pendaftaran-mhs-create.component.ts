import { Component } from '@angular/core';

@Component({
  selector: "app-pendaftaran-mhs-create",
  templateUrl: "./pendaftaran-mhs-create.component.html",
  styleUrls: ["./pendaftaran-mhs-create.component.css"]
})
export class PendaftaranMhsCreateComponent {
  newPost = 'No Content';
  enteredValue= '';

  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = this.enteredValue;
  }

}
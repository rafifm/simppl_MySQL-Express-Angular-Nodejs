import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { PendaftaranMhs } from "./pendaftaran-mhs.model";

@Injectable({providedIn: 'root'})

export class PendaftaranMhsService {
  private posts: PendaftaranMhs[] = [];
  private dataMhsUpdated = new Subject<PendaftaranMhs[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: PendaftaranMhs[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this. posts = postData.posts;
        this.dataMhsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.dataMhsUpdated.asObservable();
  }

  addPost(nama: string, nim: string, ipk: string, nokwitansi: string) {
    const post: PendaftaranMhs = { id: null, nama: nama, nim: nim, ipk: ipk, nokwitansi: nokwitansi };
    this.http
      .post<{message: string}>("http://localhost:3000/api/posts", post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.dataMhsUpdated.next([...this.posts]);
      });
    
  }

}
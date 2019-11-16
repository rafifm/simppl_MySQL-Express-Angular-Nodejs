import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

import { PendaftaranMhs } from "./pendaftaran-mhs.model";

@Injectable({providedIn: 'root'})

export class PendaftaranMhsService {
  private posts: PendaftaranMhs[] = [];
  private dataMhsUpdated = new Subject<PendaftaranMhs[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.dataMhsUpdated.asObservable();
  }

  addPost(nama: string, nim: string, ipk: string, nokwitansi: string) {
    const post: PendaftaranMhs = {nama: nama, nim: nim, ipk: ipk, nokwitansi: nokwitansi };
    this.posts.push(post);
    this.dataMhsUpdated.next([...this.posts]);
  }

}
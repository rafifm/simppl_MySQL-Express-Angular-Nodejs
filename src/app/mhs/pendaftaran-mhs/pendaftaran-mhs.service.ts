import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { PendaftaranMhs } from './pendaftaran-mhs.model';

@Injectable({providedIn: 'root'})
export class PendaftaranMhsService {
  private posts: PendaftaranMhs[] = [];
  private dataMhsUpdated = new Subject<PendaftaranMhs[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http.get<{message: string, posts: any}>(
      'http://localhost:3000/api/posts')
      .pipe(map(postData => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            nama: post.nama,
            nim: post.nim,
            ipk: post.ipk,
            nokwitansi: post.nokwitansi,
            imagePath: post.imagePath
          };
        });
      }))
      .subscribe((dataSdhDiubah) => {
        this. posts = dataSdhDiubah;
        this.dataMhsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.dataMhsUpdated.asObservable();
  }

  getPost(id: string){
    return this.http.get<{_id: string, nama: string, nim: string, ipk: string, nokwitansi: string }>("http://localhost:3000/api/posts/" + id);
  }

  addPost(nama: string, nim: string, ipk: string, nokwitansi: string, image: File) {
    const postData = new FormData();
    postData.append("nama", nama);
    postData.append("nim", nim);
    postData.append("ipk", ipk);
    postData.append("nokwitansi", nokwitansi);
    postData.append("image", image, nama);
    this.http
      .post<{ message: string, post: PendaftaranMhs }>(
        "http://localhost:3000/api/posts", 
        postData
      )
      .subscribe((responseData) => {
        const post: PendaftaranMhs = {
          id: responseData.post.id, 
          nama: nama, 
          nim: nim, 
          ipk: ipk, 
          nokwitansi: nokwitansi,
          imagePath: responseData.post.imagePath
        };
        this.posts.push(post);
        this.dataMhsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });

  }

  updatePost(id: string, nama: string, nim: string, ipk: string, nokwitansi: string ) {
    const post: PendaftaranMhs = { id: id, nama: nama, nim: nim, ipk: ipk, nokwitansi: nokwitansi, imagePath: null };
    this.http
      .put("http://localhost:3000/api/posts/" + id, post)
      .subscribe(response => {
        const postBaru = [...this.posts];
        const postLama = postBaru.findIndex(p => p.id === post.id);
        postBaru[postLama] = post;
        this.posts = postBaru;
        this.dataMhsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });

  }

  deletePost(postId: string) {
    this.http.delete("http://localhost:3000/api/posts/" + postId)
      .subscribe(() => {
        const postsTerbaharui = this.posts.filter(post => post.id !== postId);
        this.posts = postsTerbaharui;
        this.dataMhsUpdated.next([...this.posts]);
      });
  }

}

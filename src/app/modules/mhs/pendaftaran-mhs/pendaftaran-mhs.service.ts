import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { PendaftaranMhs } from './pendaftaran-mhs.model';

@Injectable({providedIn: 'root'})
export class PendaftaranMhsService {
  private posts: PendaftaranMhs[] = [];
  private dataMhsUpdated = new Subject<{ posts: PendaftaranMhs[], postCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts( postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{message: string, posts: any, maxPosts: number}>(
      'http://localhost:3000/api/posts' + queryParams )
      .pipe(map(postData => {
        return { posts: postData.posts.map(post => {
          return {
            id: post._id,
            nama: post.nama,
            nim: post.nim,
            ipk: post.ipk,
            nokwitansi: post.nokwitansi,
            imagePath: post.imagePath
          };
        }), 
        maxPosts: postData.maxPosts };
      })
      )
      .subscribe(dataBaruSdhDiubah => {
        console.log(dataBaruSdhDiubah);
        this. posts = dataBaruSdhDiubah.posts;
        this.dataMhsUpdated.next({
          posts: [...this.posts], 
          postCount: dataBaruSdhDiubah.maxPosts
        });
      });
  }

  getPostUpdateListener() {
    return this.dataMhsUpdated.asObservable();
  }

  getPost(id: string){
    return this.http.get<{ _id: string, nama: string, nim: string, ipk: string, nokwitansi: string, imagePath: string }>("http://localhost:3000/api/posts/" + id);
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
        this.router.navigate(["/pendaftaranmhstampil"]);
      });
  }

  updatePost(id: string, nama: string, nim: string, ipk: string, nokwitansi: string, image: File | string ) {
    let postData: PendaftaranMhs | FormData;
    if(typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("nama", nama);
      postData.append("nim", nim);
      postData.append("ipk", ipk);
      postData.append("nokwitansi", nokwitansi);
      postData.append("image", image);
    } else {
      postData = {
        id: id,
        nama: nama,
        nim: nim,
        ipk: ipk,
        nokwitansi: nokwitansi,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/posts/" + id, postData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deletePost(postId: string) {
    return this.http.delete("http://localhost:3000/api/posts/" + postId);
  }

}

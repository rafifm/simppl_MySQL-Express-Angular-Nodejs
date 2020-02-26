import { Injectable } from '@angular/core';

import { datadosen } from './datadosen.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatadosenService {
  private dtdsn: datadosen[] = [];
  private dataDosenUpdated = new Subject<{ dataupload: datadosen[], nomordata: number }>();

  constructor(private http: HttpClient, private router: Router) { }

  getPosts( postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{message: string, posts: any, maxPosts: number}>(
      'http://localhost:3000/api/dosen' + queryParams )
      .pipe(map(postData => {
        return { posts: postData.posts.map(post => {
          return {
            id: post._id,
            nama: post.nama,
            nip: post.nip,
            jabatan: post.jabatan,
            pangkat: post.pangkat,
            golongan: post.golongan,
            npwp: post.npwp,
            imagePath: post.imagePath
          };
        }), 
        maxPosts: postData.maxPosts };
      })
      )
      .subscribe(dataBaruSdhDiubah => {
        this. dtdsn = dataBaruSdhDiubah.posts;
        this.dataDosenUpdated.next({
          dataupload: [...this.dtdsn], 
          nomordata: dataBaruSdhDiubah.maxPosts
        });
      });
  }

  getPostUpdateListener() {
    return this.dataDosenUpdated.asObservable();
  }

  getPost(id: string){
    return this.http.get<{ _id: string, nama: string, nip: string, jabatan: string, pangkat: string, golongan: string, npwp: string, imagePath: string }>("http://localhost:3000/api/dosen/" + id);
  }

  deletePost(postId: string) {
    return this.http.delete("http://localhost:3000/api/dosen/" + postId);
  }

  addPost(
    nama: string, 
    nip: string, 
    jabatan: string, 
    pangkat: string, 
    golongan: string, 
    npwp: string, 
    image: File) {
    const postData = new FormData();
    postData.append("nama", nama);
    postData.append("nip", nip);
    postData.append("jabatan", jabatan);
    postData.append("pangkat", pangkat);
    postData.append("golongan", golongan);
    postData.append("npwp", npwp);
    postData.append("image", image, nama);
    this.http
      .post<{ message: string, post: datadosen }>(
        "http://localhost:3000/api/dosen", 
        postData
      )
      .subscribe((responseData) => {
        this.router.navigate(["/pendaftaranmhstampil"]);
      });
  }

  updatePost(id: string, 
    nama: string, 
    nip: string, 
    jabatan: string, 
    pangkat: string, 
    golongan: string, 
    npwp: string, 
    image: File | string ) {
    let postData: datadosen | FormData;
    if(typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("nama", nama);
      postData.append("nip", nip);
      postData.append("jabatan", jabatan);
      postData.append("image", image);
    } else {
      postData = {
        id: id,
        nama: nama,
        nip: nip,
        jabatan: jabatan,
        pangkat: pangkat,
        golongan: golongan,
        npwp: npwp,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/dosen/" + id, postData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

}

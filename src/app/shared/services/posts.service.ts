import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get<PostInterface[]>('https://jsonplaceholder.typicode.com/posts')
  }
}

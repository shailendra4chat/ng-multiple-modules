import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostInterface } from 'src/app/shared/interfaces/post-interface';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  posts: Observable<PostInterface[]> | undefined;

  constructor(private postsServices: PostsService) { }


  ngOnInit(): void {
    this.posts = this.postsServices.getAllPosts();
  }

}

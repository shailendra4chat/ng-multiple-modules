import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    AllPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostModule { }

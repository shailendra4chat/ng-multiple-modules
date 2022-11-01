import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './user/users.component';
import { AllUsersComponent } from './user/components/all-users/all-users.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';
import { PostsComponent } from './post/posts.component';
import { AllPostsComponent } from './post/components/all-posts/all-posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
    { path: 'all-users', component: AllUsersComponent},
    { path: 'user/:id', component: UserDetailsComponent},
  ]},
  { path: 'posts', component: PostsComponent, children: [
    { path: 'all-posts', component: AllPostsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    UsersComponent,
    AllUsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }

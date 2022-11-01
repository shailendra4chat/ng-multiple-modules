import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInterface } from 'src/app/shared/interfaces/user-interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: Observable<UserInterface[]> | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers()
  }

}

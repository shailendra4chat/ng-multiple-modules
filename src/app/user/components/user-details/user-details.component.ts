import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: number = 0;
  user: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    })

    this.getUser(this.id)
  }

  getUser(id:number){
    this.user = this.usersService.getUser(id).subscribe((user) => {
      this.user = user;
    })
  } 

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number){
    return this.http.get<UserInterface>('https://jsonplaceholder.typicode.com/users/' + id)
  }
}

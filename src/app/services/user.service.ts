import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { users } from '../../assets/users';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUsers(): Observable<any> {
    //return this.http.get<any>('https://reqres.in/api/users');
    //return this.http.get<any>('http://localhost:3200/data');
    return of(users);
  }
/*
  getUser(id: number) {
    return this.getUsers.pipe(
      //map( user => users.find(user => user.id === +id)!)
      map((u:any) => u.find(user: => user.id === id)!)
    )
  }*/

}

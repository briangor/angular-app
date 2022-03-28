import { Component, OnInit } from '@angular/core';
import { User, users } from 'src/assets/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = users;
  selectedUser?: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.getUsers();
  }

  /* getUsers() {
    this.userService.getUsers()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.users = res;
      },
      error:()=>{
        console.warn('Error while fetching users!');
      }
    })
  } */

  /* getUsers() {
    this.users = this.userService.getUsers();
  } */
  onSelect(user:any): void {
    this.selectedUser = user;
  }

   person = {
    id: "4",
    name: "Kyle",
    job_title: "Teacher"
  }
  addUser() {
    window.localStorage.setItem('id', JSON.stringify(this.person));
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, users } from 'src/assets/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  //@Input() user?:any;

  user: User | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('id'));
    this.user = users.find(userxx => userxx.id === userIdFromRoute);

    /* this.userService.getUsers().subscribe({
      next:(res => {
        this.users = res;
        console.log(this.users);

        console.log(this.users.find( ));

      }),
      error:(res =>{
        //this.utility.error('Error');
      })
    }) */
    /* 
    this.users = this.userService.getUsers();
    
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('id'));
    console.log(userIdFromRoute);
    console.log(this.users);
    this.userx = users.find(u => u.id === userIdFromRoute); */
    
    //this.userx = this.users.find(user => user.id === userIdFromRoute);
  }

}

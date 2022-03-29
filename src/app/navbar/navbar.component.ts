import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, private router: Router) {
    this.message = this.getMessage();
  }

  ngOnInit(): void {
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.message = this.getMessage();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  pwdField = 'password';
  txtField = 'text';
  togglePassword = this.pwdField;
  toggle: boolean = true;
 
  eye = 'bi-eye';
  eyeslash = 'bi-eye-slash';
  toggleClass = true;

  constructor(public authService: AuthService, public router: Router) { 
    this.message = this.getMessage();
  }
  
  ngOnInit(): void {
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // use the redirect URL from the auth service
        const redirectUrl = '/home';

        // Reirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }


  showHidePwd(){
    this.toggle = !this.toggle;
    this.togglePassword = this.toggle ? this.pwdField : this.txtField;
    this.toggleClass = this.toggle ? true : false;    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  pwdField = 'password';
  txtField = 'text';
  togglePassword = this.pwdField;
  toggle: boolean = true;
 
  eye = 'bi-eye';
  eyeslash = 'bi-eye-slash';
  toggleClass = true;
    

  ngOnInit(): void {
  }

  showHidePwd(){
    this.toggle = !this.toggle;
    this.togglePassword = this.toggle ? this.pwdField : this.txtField;
    this.toggleClass = this.toggle ? true : false;    
  }
}

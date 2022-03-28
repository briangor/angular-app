import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  pwdField = 'password';
  txtField = 'text';
  togglePassword = this.pwdField;
  toggle: boolean = true;
 
  eye = 'bi-eye';
  eyeslash = 'bi-eye-slash';
  toggleClass = true;
  

  showHidePwd(){
    this.toggle = !this.toggle;
    this.togglePassword = this.toggle ? this.pwdField : this.txtField;
    this.toggleClass = this.toggle ? true : false;    
  }

}

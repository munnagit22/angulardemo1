import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:FormBuilder) { }
  
  loginForm=this.login.group({
    user:['',Validators.required],
    email:['',Validators.email],
    password:['',Validators.required,Validators.pattern('[a-zA-z][0-9]')]
})
    
get validEmail()
{
  return this.loginForm.get('email');
}
get validPassword()
{
  return this.loginForm.get('password');
}
  
  ngOnInit(): void {
  }

}

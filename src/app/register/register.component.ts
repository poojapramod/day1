import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms' ;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
signupForm:FormGroup;
  constructor(public xyz:FormBuilder) {
  	console.log(this.xyz);
  }

  ngOnInit() {
  	this.signupForm = this.xyz.group({
  		name: ['',Validators.required],
  		email: ['',[Validators.required,Validators.email]],
  		mobile: ['',[Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/)]],
  		password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
  		cpassword: ['',Validators.required]


  	});
  }

}

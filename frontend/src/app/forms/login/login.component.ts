import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

 	loginForm: FormGroup;

	constructor(
			private fb: FormBuilder,
			private userService: UserService,
			private router: Router) {}

 	ngOnInit() {
	    this.loginForm = this.fb.group({
	    	email: ['', Validators.required],
	      	password: ['', Validators.required]
	        });
  	}

	login() { 
		this.userService.login(this.loginForm.value).subscribe(
	        response => {

	            console.log("Login Successful");

	            sessionStorage.setItem('userData', JSON.stringify(response[0]));

        		sessionStorage.setItem("token", response[0].token);

        		console.log(sessionStorage['token']);
        		 console.log(sessionStorage['userData']);

        		this.router.navigate(['/dashboard']);

	        },
	        error => {
	            console.log("Login Failed");
	        });
	}

}

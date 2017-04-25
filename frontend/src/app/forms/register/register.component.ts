import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

	myForm: FormGroup;

  	events: {}[] = [];

	constructor(
			private fb: FormBuilder,
      private userService : UserService,
      private router: Router
		) {}


 	subscribeToFormChangesAndSetValidity() {

      const myFormValueChanges$ = this.myForm.controls["passwords"].valueChanges;

      myFormValueChanges$.subscribe(x => {
          if(x.password === x.confirmPassword) {
              this.myForm.controls["passwords"].setErrors(null);
          } else {
              this.myForm.controls["passwords"].setErrors({ "notValid" : true});
          }
      });
  	}


  ngOnInit() {
    this.myForm = this.fb.group({
    	username: ['', Validators.required],
      	email: ['', Validators.required],
        usertype: ['Free user'],
      	passwords: this.fb.group({
	        password: ['', Validators.required],
	        confirmPassword: ['', Validators.required]
	        })
        });

        this.subscribeToFormChangesAndSetValidity();

  	}

	register() {
		console.log(this.myForm.value);	
    this.userService.create(this.myForm.value).subscribe(
        data => {
            console.log("Registration Successful");
            this.router.navigate(['login']);
        },
        error => {
            console.log("Registration Failed");
        });
	}


}

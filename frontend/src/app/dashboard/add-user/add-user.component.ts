import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {

	model:any = {};
  data: any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  createUser() {
	
   this.data = {
      username : this.model.username,
      email: this.model.useremail,
      usertype: this.model.usertype,
      passwords: {
        password: this.model.password
      }
    };

      console.log(this.data);


    this.userService.create(this.data).subscribe(
      response => {
        console.log(response);
      }, 
      error => {
        console.log('Error');
      }
    );
	
  }



}

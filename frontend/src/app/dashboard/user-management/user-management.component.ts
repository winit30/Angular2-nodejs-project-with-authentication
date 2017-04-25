import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserManagementService } from '../../_services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent implements OnInit {

	userData: any;
  hasUserDetails:any;

 constructor(private userManagementService: UserManagementService, private router: Router) { }

  ngOnInit() { 

  	this.findUsers(); 

  }

    findUsers() {
  		this.userManagementService.find()
  			.subscribe(
                  response => {

                  	 this.userData = response;
	                 sessionStorage.setItem('userData', JSON.stringify(response));

                  },
                  error => {
                       console.log("Error");
                  });
  }

  userDetails(index) {
    this.hasUserDetails = JSON.parse(sessionStorage['userData']);
    sessionStorage.setItem('clickedUserDetials',JSON.stringify(this.hasUserDetails[index]));
    this.router.navigate(['/dashboard/user-management/user-details']);
  }

}

import { Component, OnInit } from '@angular/core';

import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html'
})
export class DashboardHeaderComponent implements OnInit {
	uData: any;
	
	constructor(private userService: UserService) { }
  


  ngOnInit() {
	this.uData = JSON.parse(sessionStorage['userData']);
	//console.log(this.uData);
  }
  
  logout() {
		this.userService.logout().subscribe(
	        data => {
	            console.log("Logout Successful");
	        },
	        error => {
	            console.log("Logout Failed");
	        });
	}
  


}

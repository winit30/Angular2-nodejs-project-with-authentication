import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {

	model:any;

  constructor(private router: Router) { }

  ngOnInit() {
  	if(sessionStorage['clickedUserDetials']){
  			this.model = JSON.parse(sessionStorage['clickedUserDetials']);
  		} else {
  			this.router.navigate(['/dashboard/user-management']);
  		}
  }

}

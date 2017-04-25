import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   constructor(private checkToken: UserService, private router : Router) {}

  ngOnInit() { 

  		this.checkToken.getUser().subscribe(
	        response => {
            sessionStorage.setItem('userData', JSON.stringify(response));
	          console.log("Login Successful");
            console.log(response);
            console.log(sessionStorage['userData']);
	        },
	        error => {
	            console.log("Login Failed");
	        });
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, Subject } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { NewUser } from '../models/new-user';
import { User } from '../models/user';

@Injectable()
export class UserService {

  	token :string;
	constructor(private http: Http, private router:Router ) { }

	create(newUser: NewUser) {
		console.log(newUser);
        return this.http.post('http://localhost:1337/user/createUser', { newUser: newUser }).map((response: Response) => response.json());
    }

    login(user: User) {
        return this.http.post('http://localhost:1337/user/login', { user: user }).map((response: Response) =>
        	response.json());
    }

    logout() {
		 if(sessionStorage['token']) {
		 			this.token = sessionStorage.getItem("token");
					this.token = this.token.replace(/\,/g,"");
		 } else {
		 	this.token = "Something stupid!";
		 }

        return this.http.post('http://localhost:1337/user/logout', { token: this.token }).map((response: Response) => {
        	response.json();
			console.log(response.json());
            sessionStorage.clear();
            localStorage.clear();
            this.router.navigate(['']);
        });
    }

    getUser() {
		 if(sessionStorage['token']) {
		 			this.token = sessionStorage.getItem("token");
					this.token = this.token.replace(/\,/g,"");
		 } else {
		 	this.token = "Something stupid!";
		 }

        return this.http.post('http://localhost:1337/user/checktoken', { token: this.token }).map((response: Response) => 
        	response.json()
        );
    }

  isLoggedIn() : Observable<boolean> {

		 if(sessionStorage['token']) {
		 			this.token = sessionStorage.getItem("token");
					this.token = this.token.replace(/\,/g,"");
		 } else {
		 	this.token = "Something stupid!";
		 }

        return this.http.post('http://localhost:1337/user/checktoken', { token: this.token }).map((response: Response) => {
        	let res: any = response;
			if(res._body){
				return true;
			} else {
				this.router.navigate(['']);
				return false;
			}			
        });
    }

    isAuthenticated(): Observable<boolean> {

        const state = new Subject<boolean>();

         if(sessionStorage['token']) {
		 			this.token = sessionStorage.getItem("token");
					this.token = this.token.replace(/\,/g,"");
		 } else {
		 	this.token = "Something stupid!";
		 }

        this.http.post('http://localhost:1337/user/checktoken', { token: this.token }).map((response: Response) => {
        	let res: any = response;
			if(res._body){
				state.next(true);
			} else {
				state.next(false);
			}			
        });
        
        return state.asObservable();
    }

}

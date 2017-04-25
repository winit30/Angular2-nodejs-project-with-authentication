
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { UserService } from '../_services/user.service';

@Injectable()
export class LoginRouteGuard implements CanActivate {
	
  constructor(private userService: UserService, private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  	return this.userService.isLoggedIn();
  }

}
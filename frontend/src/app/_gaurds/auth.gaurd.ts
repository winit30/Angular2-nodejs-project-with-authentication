
import { Injectable } from '@angular/core';
import { CanDeactivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { UserService } from '../_services/user.service';

@Injectable()
export default class DeactivateGuard implements CanDeactivate<ComponentTwo> {

  canDeactivate(component: ComponentTwo) {
    let can = component.canDeactivate();
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Deactivation blocked');
      return false;
    }

    return true;
  }

}
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { UserManagement } from '../models/user-management';

@Injectable()
export class UserManagementService {

   constructor(private http: Http) { }

    create(newUser: UserManagement) {
  		console.log(newUser);
        return this.http.post('http://localhost:1337/usermanagement/createNewUser', JSON.stringify({ newUser : newUser })).map((response: Response) => 
        	response.json()
        );
    }

    find() {
        return this.http.get('http://localhost:1337/usermanagement/findUsers').map((response: Response) => 
        	response.json()
        );
    }

}

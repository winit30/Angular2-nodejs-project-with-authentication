import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { PermanentInfo } from '../models/permanentinfo';

@Injectable()
export class Form16Service {

  constructor(private http: Http) { }


	create(permanentInfo: PermanentInfo) {
  		console.log(PermanentInfo);
        return this.http.post('http://localhost:1337/personaldetails/createPersonalDetails', JSON.stringify({ permanentInfo : permanentInfo })).map((response: Response) => 
        	response.json()
        );
    }

}

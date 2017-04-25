import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Pan } from '../models/pan';

@Injectable()
export class PanService {

  constructor(private http: Http) { }

  create(pan: Pan) {
  		console.log(pan);
        return this.http.post('http://localhost:1337/pan/createPan', JSON.stringify({ pan : pan })).map((response: Response) => 
        	response.json()
        );
    }

   checkPan(userid: number) {

        return this.http.post('http://localhost:1337/pan/findPans', JSON.stringify({ userid : userid })).map((response: Response) => 
        	response.json()	
       );

   } 
  


}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Data } from '../models/data';

@Injectable()
export class GeneratePdfService {

  constructor(private http: Http) { }

  create(data: Data) {
        return this.http.post('http://localhost:1337/util/pdf/downlodrentreceiptpdf', JSON.stringify({ data : data})).map((response: Response) => 
        	response.json()
        );
    }

}

import { Component, OnInit } from '@angular/core';

import { Data } from '../../models/data';

@Component({
  selector: 'app-calculate-tax',
  templateUrl: './calculate-tax.component.html'
})
export class CalculateTaxComponent implements OnInit {

	model:any = {};
	submitted: boolean = false;

  	constructor(private data: Data) { }

  	ngOnInit() {
  	}

  	calculate() {
		this.data.storage = this.model;
		this.submitted = true;
    }

}

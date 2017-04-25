import { Component, OnInit } from '@angular/core';

import { Data } from '../../models/data';

@Component({
  selector: 'app-check-refund',
  templateUrl: './check-refund.component.html'
})
export class CheckRefundComponent implements OnInit {

  date: Date = new Date();
  year: number = this.date.getFullYear();

  yearArray: string[] = [(this.year-1)+'-'+this.year, (this.year-2)+'-'+(this.year-1), (this.year-3)+'-'+(this.year-2),  (this.year-4)+'-'+(this.year-3),  (this.year-5)+'-'+(this.year-4)];

	model: any = {};
	submitted: boolean = false;

  constructor(private data: Data) { }

 ngOnInit() {

    this.model.ass_yr = this.yearArray[0];
    }

  check_status(){
		this.data.storage = this.model;
		this.submitted = true;
	}

}

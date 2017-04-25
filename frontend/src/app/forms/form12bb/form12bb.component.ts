import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form12bb',
  templateUrl: './form12bb.component.html'
})

export class Form12bbComponent implements OnInit {

 	date: Date = new Date();
	year: number = this.date.getFullYear();

	yearArray: string[] = [(this.year-1)+'-'+this.year, (this.year-2)+'-'+(this.year-1), (this.year-3)+'-'+(this.year-2),  (this.year-4)+'-'+(this.year-3),  (this.year-5)+'-'+(this.year-4)];
	
	model: any = {};



  	constructor() { }

  	ngOnInit() {

  	this.model.financial_year = this.yearArray[0];
  	}

}

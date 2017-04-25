import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html'
})
export class SalaryComponent implements OnInit {

	isSalarySaved: boolean = true;

	salaryOne: any = {};

	salaryTwo: any = {};

  	constructor() {};

  	ngOnInit() {};

  	saveSalaryOne() {
  		console.log(this.salaryOne);
  	}

  	saveSalaryOneOpenTwo() {
  		console.log(this.salaryOne);
  		this.isSalarySaved = false;
  	}

  	saveSalaryTwo() {
  		console.log(this.salaryTwo);
  	}

}

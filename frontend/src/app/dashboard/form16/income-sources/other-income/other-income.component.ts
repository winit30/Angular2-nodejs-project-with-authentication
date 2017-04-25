import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-income',
  templateUrl: './other-income.component.html'
})
export class OtherIncomeComponent implements OnInit {

	model:any = { };

  	constructor() { }

  	ngOnInit() { }

  	otherIncome() {
  		console.log(this.model);
  	}

}

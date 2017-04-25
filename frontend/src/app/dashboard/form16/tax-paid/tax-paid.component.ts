import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-paid',
  templateUrl: './tax-paid.component.html'
})
export class TaxPaidComponent implements OnInit {

	istdsEntryActive: boolean = true;
	isImmovableActive: boolean = true;

	model: any = {};

  constructor() { }

  ngOnInit() {
  }

  tdsEntryActive() {
  	this.istdsEntryActive = false;
  }

  immovableActive() {
  	this.isImmovableActive = false;
  }

}

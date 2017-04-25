import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-80-deduction',
  templateUrl: './section-80-deduction.component.html'
})
export class Section80DeductionComponent implements OnInit {

	model: any = {};

	isDonatonActive: boolean = false;

  constructor() { }

  ngOnInit() { }

  donationActive() {
  	this.isDonatonActive = true;
  }

}

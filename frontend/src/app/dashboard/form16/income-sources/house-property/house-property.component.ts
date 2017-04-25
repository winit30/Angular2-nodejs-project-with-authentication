import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-property',
  templateUrl: './house-property.component.html'
})
export class HousePropertyComponent implements OnInit {

	model: any = {};

  	constructor() { }

  	ngOnInit() { }

  	houseingProperty() { 
  		console.log(this.model);
  	}

}

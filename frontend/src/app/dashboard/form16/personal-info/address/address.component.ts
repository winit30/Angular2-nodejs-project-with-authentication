import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

	model:any = {};

  constructor() { }

  ngOnInit() {
  }

  addressInfo() {
  	console.log(this.model);
  }

}

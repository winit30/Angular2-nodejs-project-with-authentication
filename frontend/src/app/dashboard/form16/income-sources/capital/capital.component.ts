import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html'
})
export class CapitalComponent implements OnInit {

	toggleMe:boolean = true;

	showFirst:boolean = false;

  shares: boolean = true;
  property: boolean = true;
  otherAsset: boolean = true;
  mutualFund: boolean = true;
  backButton: boolean = true;

	model: any = {};

  constructor() { }

  ngOnInit() {
  }

  toggleBox() {
  	this.toggleMe = !this.toggleMe;
  }

  addShares() {
    this.shares = false;
    this.showFirst = true;
    this.backButton = false;
  }

  addProperty() {
    this.property = false;
    this.showFirst = true;
    this.backButton = false;
  }

  addAssets() {
    this.otherAsset = false;
    this.showFirst = true;
    this.backButton = false;
  }

  addMutual() {
    this.mutualFund = false;
    this.showFirst = true;
    this.backButton = false;
  }

  backToShowFirst(){
     this.shares = true;
     this.property = true;
    this.otherAsset= true;
    this.mutualFund = true;
    this.showFirst = false;
    this.backButton = true;
    this.toggleMe = true;
  }

}

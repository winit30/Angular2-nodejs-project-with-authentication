import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

	isUpgradeActive: boolean = true;

	isPurchaseCencelled: boolean = true;

	isButtonClicked: boolean = false;

  constructor() { }

  ngOnInit() { }

  upgradePlanActive(): void {
		this.isUpgradeActive = false;
		this.isButtonClicked = true;
  }

   purchaseCancelled(): void {
		this.isPurchaseCencelled = false;
		this.isButtonClicked = true;
  }

}

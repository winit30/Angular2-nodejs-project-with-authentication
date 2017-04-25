import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pan-details',
  templateUrl: './pan-details.component.html'
})
export class PanDetailsComponent implements OnInit {

	model: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  		if(sessionStorage['clickedPanDetials']){
  			this.model = JSON.parse(sessionStorage['clickedPanDetials']);
  		} else {
  			this.router.navigate(['/dashboard/pan-management']);
  		}
  		
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PanService } from '../../_services/pan.service';

@Component({
  selector: 'app-pan-management',
  templateUrl: './pan-management.component.html'
})

export class PanManagementComponent implements OnInit {

	uData:any;
	panData: any;
 	hideAddButton: boolean = false;
 	hasPanDetails:any;

	  constructor(private router: Router, private panService: PanService) { }

	  ngOnInit() {

	   	this.uData = JSON.parse(sessionStorage['userData']);

	   	if(sessionStorage['panData']){
	   		this.panData = JSON.parse(sessionStorage['panData']);
	   	}

	    if(this.uData.id){
	    	 this.panService.checkPan(this.uData.id)
	            .subscribe(
	                response => { 

					   	this.panData = response;
					   	
	                	if(response.length >= 5) {
	                		this.hideAddButton = true;
	                		console.log(response);
	                	}
	                	console.log(response);
	                	sessionStorage.setItem('panData', JSON.stringify(response));
	                },
	                error => {
	                     console.log("Error");
	                });
	  	}

	}

	panDetails(index) {
		this.hasPanDetails = JSON.parse(sessionStorage['panData']);
		sessionStorage.setItem('clickedPanDetials',JSON.stringify(this.hasPanDetails[index]));
		this.router.navigate(['/dashboard/pan-management/pan-details']);
	}

}

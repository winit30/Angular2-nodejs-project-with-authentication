import { Component, OnInit } from '@angular/core';

import { Data } from '../../models/data'

@Component({
  selector: 'app-calculate-tax',
  templateUrl: './hra.component.html'
})
export class HraComponent implements OnInit {

	model: any = {};

	basic: number;
	rcvd:number;
	rent_paid:number;
	ex_rp: number;
	total_hra:number;
	residing_at: number;
	submitted: boolean = false;


  	constructor(private data: Data) { }

  	ngOnInit() {
  	}



    calculate(){

    	
    	if( this.model.residing == 'Metro'){
    		this.residing_at = 50;
    	} else {
    		this.residing_at = 40;
    	}

		this.basic=(this.residing_at/100)*this.model.annual;
		this.rcvd=1*this.model.houserent;

		this.ex_rp=this.model.rentpaid-((10/100)*(this.model.annual));
		this.total_hra=this.model.houserent-this.ex_rp;

        var output= {
          basic: this.basic,
          rcvd: this.rcvd,
          ex_rp: this.ex_rp,
          total_hra: this.total_hra,
          residing_at: this.residing_at
        };

		this.data.storage = output;
		this.submitted = true;
    }

}

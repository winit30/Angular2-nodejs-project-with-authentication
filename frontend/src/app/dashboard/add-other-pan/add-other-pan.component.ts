import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PanService } from '../../_services/pan.service';

@Component({
  selector: 'app-add-other-pan',
  templateUrl: './add-other-pan.component.html'
})
export class AddOtherPanComponent implements OnInit {

	model: any = {};
  	data :any;
 
  constructor(private router: Router, private panService: PanService) { }

  ngOnInit() {}

  pan() {

    this.data  = {
      mainuserid: JSON.parse(sessionStorage['userData']).id,
      pannumber: this.model.pannumber,
      date: this.model.date,
      email:this.model.email,
      firstname:this.model.firstname,
      middlename:this.model.middlename,
      lastname:this.model.lastname,
      gender:this.model.gender,
      fathername:this.model.fathername,
      mobilenumber:this.model.mobilenumber,
      maritalstatus:this.model.maritalstatus,
      primary: false
    }

		this.panService.create(this.data)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/dashboard/pan-management']);
                },
                error => {
                     console.log("Error");
                });
	}

}

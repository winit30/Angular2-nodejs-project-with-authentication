import { Component, OnInit } from '@angular/core';
import { Form16Service } from '../../../../_services/form16.service';


@Component({
  selector: 'app-permanent-info',
  templateUrl: './permanent-info.component.html'
})
export class PermanentInfoComponent implements OnInit {

	model:any = {};

	data:any = {};

  	constructor(private form16Service: Form16Service) { }

  	ngOnInit() { }

  	permanentInfo(): void {

  	this.data = {
  		permanentfirstname:this.model.permanentfirstname,
		permanentmiddlename:this.model.permanentmiddlename,
		permanentlastname:this.model.permanentlastname,
		permanentdob:this.model.permanentdob,
		permanentpannumb:this.model.permanentpannumb,
		permanentgender:this.model.permanentgender,
		permanentfather_name:this.model.permanentfather_name,
		permanentmaritalstatus:this.model.permanentmaritalstatus,
		userid: JSON.parse(sessionStorage['userData']).id
  	}
  			
  			this.form16Service.create(this.model).subscribe(
                          response => { 
                          	console.log(response);  
                          },
                          error => {
                               console.log("Error");
                          });
  	}

}

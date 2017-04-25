import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Data } from '../../models/data';

import {GeneratePdfService} from '../../_services/generate-pdf.service';

@Component({
  selector: 'app-rent-receipt',
  templateUrl: './rent-receipt.component.html'
})
export class RentReceiptComponent implements OnInit {
	res: any = { };

	model: any = {};
	getDownload : boolean = false;

  constructor(private data: Data, private generatePdfService: GeneratePdfService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

   generatePdf(){

		this.data.storage=this.model;

		this.generatePdfService.create(this.data.storage).subscribe(response => {
	            console.log("Successful");
	            console.log(response);
	            this.res =  this.sanitizer.bypassSecurityTrustUrl(response);

	           

	            this.getDownload = true;
	        },
	        error => {
	            console.log("Failed");
	        });
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-status',
  templateUrl: './document-vault.component.html'
})
export class DocumentVaultComponent implements OnInit {

	isUploadActive: boolean = true;

	isDownloadActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  download() {
  		this.isUploadActive = true;
		this.isDownloadActive= false;
  } 

  upload() {
		this.isUploadActive = false;
		this.isDownloadActive= true;
  }

}

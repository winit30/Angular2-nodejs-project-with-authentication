import { Component, OnInit } from '@angular/core';

import { Data } from '../../models/data';

@Component({
  selector: 'app-refund-result',
  templateUrl: './refund-result.component.html'
})
export class RefundResultComponent implements OnInit {

  constructor(private data:Data) { }

  ngOnInit() {
  }

}

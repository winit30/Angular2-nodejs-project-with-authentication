import { Component, OnInit } from '@angular/core';

import { Data } from '../../models/data';

@Component({
  selector: 'app-tax-result',
  templateUrl: './tax-result.component.html'
})
export class TaxResultComponent implements OnInit {

  constructor(private data: Data) { }

  ngOnInit() {
  }

}

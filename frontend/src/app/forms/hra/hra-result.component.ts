import { Component, OnInit } from '@angular/core';

import { Data } from '../../models/data'

@Component({
  selector: 'app-hra-result',
  templateUrl: './hra-result.component.html'
})
export class HraResultComponent implements OnInit {

  constructor(private data: Data) { }

  ngOnInit() {
  }

}

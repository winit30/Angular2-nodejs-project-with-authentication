import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PanService } from '../_services/pan.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

   uData : any;

  constructor(private router: Router, private panService: PanService, private userService: UserService ) {}

  ngOnInit() { 

      this.uData = JSON.parse(sessionStorage['userData']);

              if(this.uData.id){
                 this.panService.checkPan(this.uData.id)
                      .subscribe(
                          response => { console.log(response);
                              if(response.length == 0){
                                this.router.navigate(['/dashboard/add-pan']);
                              } else {
                                sessionStorage.setItem('panData', JSON.stringify(response));
                              }
                          },
                          error => {
                               console.log("Error");
                          });
              }
  }

}

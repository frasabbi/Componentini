import { Types } from './../types';
import { AlertService } from './../services/alert-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-action',
  templateUrl: './alert-action.component.html',
  styleUrls: ['./alert-action.component.css']
})
export class AlertActionComponent implements OnInit {

  


  constructor(private alertService:AlertService) { }

  ngOnInit() {
  }
  
  seeAll(){
    return this.alertService.setAllTrue();
  }

}

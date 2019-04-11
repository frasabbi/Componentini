import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Types } from '../types';
import { AlertService } from "../services/alert-service.service";


@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']

})
export class AlertBoxComponent implements OnInit {
  @Input() type:Types;
  typeS = Types.SUCCESS;
  typeE = Types.ERROR;
  typeI = Types.INFO;
  typeW = Types.WARNING;
  
  @Output() onClickClose: EventEmitter<any> = new EventEmitter<any>();
  constructor(public alertService: AlertService) { }

  ngOnInit() {
    this.alertService.initVis(this.type);
    
  }
  close(): void {
    this.alertService.setFalseByType(this.type);
  
    console.log("alert closed");
  }
  checkVisibility(){
    console.log("sto controllando la visibilità dell'ngIf");
    return this.alertService.getVisByType(this.type);
  }

}

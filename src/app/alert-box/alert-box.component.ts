import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Types } from '../types';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']

})
export class AlertBoxComponent implements OnInit {
  @Input() types:Types;
  @Input() show:boolean;
  typeS=Types.SUCCESS;
  typeE=Types.ERROR;
  typeI=Types.INFO;
  typeW=Types.WARNING
  @Output() onClickClose:EventEmitter<any>=new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {

  }
  close():void{
    this.onClickClose.emit({
      type: this.types
    });
    console.log("alert closed");
  }

}

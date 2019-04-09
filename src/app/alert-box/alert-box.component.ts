import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']

})
export class AlertBoxComponent implements OnInit {
  @Input() text:string;
  @Input() type:string;
  @Output() onClickClose:EventEmitter<any>=new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {

  }
  close():void{
    this.onClickClose.emit({
      text: this.text,
      type: this.type
    });
    console.log("alert closed");
  }

}

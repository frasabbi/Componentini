import { Component } from '@angular/core';
import { Types } from './types';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  visibleError: boolean = true;
  visibleSuccess: boolean = true;
  visibleInfo: boolean = true;
  visibleWarning: boolean = true;

  types = [
    Types.ERROR,
    Types.SUCCESS,
    Types.INFO,
    Types.WARNING
  ]
  title = 'Componentini';



  onClose(alertType): void {
    console.log(alertType.type);
    this.types = alertType.type;
    for (var i = 0; i < this.types.length; i++) {
      if(alertType.type==="success"){
        this.visibleSuccess=false;
      }
      else if(alertType.type==="info"){
        this.visibleInfo=false;
      }
      else if(alertType.type==="error"){
        this.visibleError=false;
      }
      else{
        this.visibleWarning = false;
      }
    }

  }


  onAlertToggle(): void {
    this.visibleError = true;
    this.visibleSuccess = true;
    this.visibleInfo = true;
    this.visibleWarning = true;

  }
}

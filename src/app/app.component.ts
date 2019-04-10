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
  types = [
    Types.ERROR,
    Types.SUCCESS,
    Types.INFO
  ]
  title = 'Componentini';
  text1 = 'testo numero 1';
  text2 = 'testo numero 2';
  text3 = 'testo numero 3';


  onClose(alertType): void {
    console.log(alertType.type);
    this.types = alertType.type;
    for (var i = 0; i < this.types.length; i++) {
      if(this.types[i]==="success"){
        this.visibleSuccess=false;
      }
      else if(this.types[i]==="info"){
        this.visibleInfo=false;
      }
      else{
        this.visibleError=false;
      }
    }

  }


  onAlertToggle(): void {
    this.visibleError = true;
    this.visibleSuccess = true;
    this.visibleInfo = true;

  }
}

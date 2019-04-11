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



  onAlertToggle(): void {
    this.visibleError = true;
    this.visibleSuccess = true;
    this.visibleInfo = true;
    this.visibleWarning = true;
  
  }
}

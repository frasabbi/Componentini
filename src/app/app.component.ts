import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Componentini';
  text1='testo numero 1';
  text2='testo numero 2';

  onClose(ogg):void{
    alert("l'alert è stato chiuso" + ogg.type + ogg.text);
  }
}

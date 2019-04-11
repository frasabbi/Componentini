import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { AlertActionComponent } from './alert-action/alert-action.component';

@NgModule({
   declarations: [
      AppComponent,
      AlertBoxComponent,
      AlertActionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

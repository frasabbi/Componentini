import { Injectable } from '@angular/core';
import { Types } from "../types";
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  visibility = {
    vInfo: false,
    vSuccess: false,
    vWarning: false,
    vError: false,
  };
  constructor() { }

  initVis(alertType) {
    if (alertType === "success") {
      this.visibility.vSuccess = true;
    }
    else if (alertType === "info") {
      this.visibility.vInfo = true;
    }
    else if (alertType === "error") {
      this.visibility.vError = true;
    }
    else {
      this.visibility.vWarning = true;
    }
  }
  getVisByType(alertType){
    if (alertType === "success") {
      return this.visibility.vSuccess;
    }
    else if (alertType === "info") {
      return this.visibility.vInfo;
    }
    else if (alertType === "error") {
      return this.visibility.vError;
    }
    else {
      return this.visibility.vWarning;
    }
  }
  setFalseByType(alertType) {
    if (alertType === "success") {
      this.visibility.vSuccess = false;
    }
    else if (alertType === "info") {
      this.visibility.vInfo = false;
    }
    else if (alertType === "error") {
      this.visibility.vError = false;
    }
    else {
      this.visibility.vWarning = false;
    }
  }

  setAllTrue(){
    this.visibility={
      vError:true,
      vSuccess:true,
      vInfo:true,
      vWarning:true
    }
  }
}




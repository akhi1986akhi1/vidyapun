import { Component, OnInit, Input, HostBinding } from "@angular/core";
import {environment} from "@environment"
@Component({
  selector: "app-examcard",
  templateUrl: "./examcard.component.html",
  styleUrls: ["./examcard.component.scss"]
})
export class ExamCardComponent implements OnInit {
  @HostBinding("class") CardComponentClass = "app-examcard";
  @Input('Examist') exam:any;
  public imageBasePath = environment.imageBasePath;
  
  constructor() {}

  ngOnInit() {
  }
  
  getApplicationMode(value: any)
  {
	  if(value==1)
	  {
		  return "ONLINE";
	  }
	  if(value==2)
	  {
		  return "OFFLINE";
	  }
	  if(value==3)
	  {
		  return "ONLINE & OFFLINE BOTH";
	  }
  }
  
}

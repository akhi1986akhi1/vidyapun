import { Component, OnInit, Input, HostBinding } from "@angular/core";
import {environment} from "@environment"
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @HostBinding("class") CardComponentClass = "app-card";
  @Input('CollegeList') colleges:any;
  public imageBasePath = environment.imageBasePath;
  
  constructor() {}

  ngOnInit() {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "../../auth/auth.service";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {environment} from "@environment";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-college-info',
  templateUrl: './college-info.component.html',
  styleUrls: ['./college-info.component.scss']
})
export class CollegeInfoComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;	
  public imageBasePath = environment.imageBasePath;  
  collegeDetails: any;
  colllegeList:Array<any>=[];
  
  constructor(private _authService: AuthService, private spinner: NgxSpinnerService, private activatedRoute: ActivatedRoute) { 
	this.getCollegeListData();
		this._authService.onurlChanged		    
            .subscribe(data => {				
            this.spinner.show();
            this._authService.getCollegeDetailsByCode(data).subscribe((res) => {
                this.spinner.hide();
                this.collegeDetails = res;
				console.table("this.collegeDetails",this.collegeDetails);
            });
     });
  }

  ngOnInit() {
	  
  }
  
  
  getCollegeListData() {
        this.spinner.show();
        this._authService.getCollegeList('', '', '', '', '', '', '6').subscribe((res) => {
            this.spinner.hide();
            this.colllegeList = res;
			console.log("this.colllegeList",this.colllegeList);
        });
    }
	
  getLimiteCharacter(value) {
        return value.substr(0, 300);
    }

}

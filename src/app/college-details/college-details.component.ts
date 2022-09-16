import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.scss']
})
export class CollegeDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _authService: AuthService) { 
	this.activatedRoute.url.subscribe(url =>{
		this._authService.onurlChanged.next(this.activatedRoute.snapshot.paramMap.get('id'));		
			    
	}); 
  }

  ngOnInit() {
  }

}

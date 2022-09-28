import { Component, OnInit } from '@angular/core';
import { Auth } from "../model/auth.model";
import { Router } from "@angular/router";

@Component({
	selector: 'app-user-home',
	templateUrl: './user-home.component.html',
	styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

	isEntityType: any = 0;
	auth: Auth;
	careerDevelopment = true;
	constructor(public router: Router) { }

	ngOnInit() {
		this.IsLogeedInuser();
		this.careerDevelopment = true;
		if(localStorage.getItem("navStatus")=='true'){
			this.careerDevelopment = true;
		}


	}

	IsLogeedInuser() {
		this.auth = JSON.parse(localStorage.getItem('currentUser'));
		if (this.auth != null) {
			if (this.auth.Success == "true") {
				this.isEntityType = this.auth.entityType;
			}
			else {
				this.isEntityType = 0;
				this.router.navigate(['/']);
			}
		}
		else {
			this.isEntityType = 0;
			this.router.navigate(['/']);
		}
	}
	careerDevNavHide() {
		this.careerDevelopment = false;
		localStorage.setItem("navStatus","false");

	}
	

}

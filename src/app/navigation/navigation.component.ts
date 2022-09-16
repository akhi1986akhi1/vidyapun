import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../auth/login/login.component";
import { MatDialog } from "@angular/material";
import { RegisterComponent } from "../auth/register/register.component";
import { Router } from "@angular/router";
import { Auth } from "../model/auth.model";

declare var $: any;
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  isLogin: boolean = false;
  UserName: any = "";
  UserRole: any = "";
  constructor(public dialog: MatDialog, public router: Router) {}
  auth:Auth;
  ngOnInit() {
	this.IsLogeedInuser();
	$(document).ready(function () {
      $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $(".sticky").css("background", "#ececec");
          $(".navbar").css("padding-top", "8px");
          $(".navbar").css("box-shadow", "1px 2px 3px #eeeeee");
        } else {
          $(".sticky").css("background", "transparent");
          $(".navbar").css("padding-top", "30px");
          $(".navbar").css("box-shadow", "1px 2px 3px #eeeeee");
        }
      });
    });
  }
  
  IsLogeedInuser()
  {
	this.auth=JSON.parse(localStorage.getItem('currentUser')); 
	if(this.auth != null)
	{
		if(this.auth.Success=="true")
		{
			this.isLogin=true;
			this.UserName=this.auth.userName;
		}
		else{
			this.isLogin=false;
			//this.router.navigate(['/']); 
		} 
	}
	else{
		this.isLogin=false;
		//this.router.navigate(['/']); 
	}
  }

  openLoginDialog() {
	  const dialogRef = this.dialog.open(LoginComponent, {
      width: window.innerWidth < 630 ? "90%" : "500px",
      height: window.innerWidth < 630 ? "50%" : "450px",
      autoFocus: false,
      
    });
	 dialogRef.afterClosed().subscribe(result => {
	  if(result=='saved')
	  {
		  this.IsLogeedInuser();
	  }
    });
    this.containerOverlay();
	
  }

  openSignupDialog(type: any) {
	const dialogRef = this.dialog.open(RegisterComponent, {
      width: window.innerWidth < 630 ? "90%" : "500px",
      height: window.innerWidth < 630 ? "50%" : "auto",
      autoFocus: false,
      data: {
         type: type
       }
    });
	this.containerOverlay();
  }
  
  logout() {
        localStorage.removeItem('currentUser');
		this.IsLogeedInuser();
		this.router.navigate(['/']); 
   }
   
   GoToDashboard() {
		this.auth=JSON.parse(localStorage.getItem('currentUser')); 
		if(this.auth != null)
		{
			if(this.auth.Success=="true")
			{
				this.isLogin=true;
				this.UserName=this.auth.userName;
				this.UserRole=this.auth.entityType;
				if(this.UserRole==4)
				{
					this.router.navigateByUrl("user-home/dashboard");
				}
				else
				{
					this.router.navigateByUrl("user-home/dashboard-professor");
				}
			}
			else{
				this.isLogin=false;
				this.router.navigate(['/']); 
			} 
		}
		else{
			this.isLogin=false;
			this.router.navigate(['/']); 
		}
   }

  open() {
    this.router.navigateByUrl("user-home/dashboard");
  }

  containerOverlay() {
    // fixing navigation ovelay over forms
    if (!this.router.url.match("/user/")) {
      document
        .getElementsByClassName("cdk-overlay-container")[0]
        .setAttribute("style", "z-index: 100 !important");
    } else {
      document
        .getElementsByClassName("cdk-overlay-container")[0]
        .setAttribute("style", "z-index: 0 !important");
    }
  }
}

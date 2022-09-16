import { Component, HostBinding, OnInit, Inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatSnackBar,		
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { RegisterComponent } from "../register/register.component";
import { AuthService } from "../auth.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @HostBinding("class") loginComponentClass = "app-login";
  loader: boolean;
  loginForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
	private _matSnackBar: MatSnackBar,
	public dialogRef: MatDialogRef<RegisterComponent>,
	private spinner: NgxSpinnerService,
    private _auth: AuthService // @Inject(MAT_DIALOG_DATA) public data: any, // private _fb: FormBuilder, // private _router: Router, // public dialogRef: MatDialogRef<LoginComponent>, // public dialog: MatDialog,
  ) {
    this.loginForm = fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit() {}

  openRegisterForm() {
    //this.dialogRef = this.dialog.open(RegisterComponent);
	this.dialogRef = this.dialog.open(RegisterComponent, {
      width: window.innerWidth < 630 ? "90%" : "500px",
      height: window.innerWidth < 630 ? "50%" : "auto",
      autoFocus: false,
      data: {
         type: 1
       }
    });
    this.containerOverlay();
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

  userLogin() {
    this.spinner.show();
    let data = this.loginForm.value;
    this._auth.loginApiMethod(data).subscribe(
      (res: any) => {
		  if(res.Success=="true")
		  {			  
			  localStorage.setItem('currentUser', JSON.stringify(res));	
			  this.dialogRef.close('saved');
			  if(res.Success.entityType==4)
			  {
				this.router.navigate(['/user-home/dashboard/']); 
			  }
			  else
			  {
				 this.router.navigate(['/user-home/dashboard-professor/']); 
			  }
		  }
		  else
		  {
			 this._matSnackBar.open('Please Check Your Login Credential', 'OK', {
				verticalPosition: 'top',
				duration : 2000
			}); 
		  }        
        this.spinner.hide();
      },
      (error) => {
		  this.spinner.hide();
			this._matSnackBar.open('Please Check Your Login Credential', 'OK', {
				verticalPosition: 'top',
				duration : 2000
			});
            return;  
        this.loader = false;
      }
    );
  }
}

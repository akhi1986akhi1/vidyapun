import { Component, OnInit, HostBinding, Inject } from "@angular/core";
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
import { AuthService } from "../../auth/auth.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  
  selTabIndex: any=0;
  stateList:any=[];
  cityList:any=[];	
  collegeList:any=[];	
  courseList:any=[];	
  selCityList:any=[];	
  registerForm: FormGroup;	
	
  @HostBinding("class") RegisterComponentClass = "app-register";
  constructor(private fb: FormBuilder,private _authService: AuthService, private spinner: NgxSpinnerService,private router: Router,
	private _matSnackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) 
  {
	  this.selTabIndex=data.type;
	  this.registerForm = fb.group({
		  IsRegisterStudent: [0, [Validators.required]],
		  userName: ["", [Validators.required]],
		  emailID: ["", [Validators.required]],
		  phoneNo: ["", [Validators.required]],
		  StateID: [0, [Validators.required]],
		  CityID: [0, [Validators.required]],
		  CourseID: [0, [Validators.required]],
		  CollegeID: [0, [Validators.required]],
		  rollNo: ["", [Validators.required]],
		  password: ["", [Validators.required]],
		});	  
  }

  ngOnInit() {
	this._authService.StateList().subscribe((res: any) => {
      this.stateList = res;
    });
	this._authService.getCityList().subscribe((res: any) => {
      this.cityList = res;
    });
	this._authService.getCollegeList("","","","","","","").subscribe((res: any) => {
      this.collegeList = res;
    });
	this._authService.getCourseList().subscribe((res: any) => {
      this.courseList = res;
    });
  }
  
  onStateChange(value:any) {
    this.selCityList = this.cityList.filter(x => x.stateRecNo == value);
 }
  

   userRegistration() {
    this.spinner.show();
    let data = this.registerForm.value;
	data.IsRegisterStudent=this.selTabIndex;
	this._authService.registerUser(data).subscribe(
      (res: any) => {
		  if(res.success=="true")
		  {			  
			  this.router.navigate(['/user-home/profile/']); 
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
		this.spinner.hide();
      }
    );
  }
  
}

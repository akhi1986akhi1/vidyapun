import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Auth } from "../model/auth.model";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
	
  isEntityType: any = 0;
  auth:Auth;	
  profileBasicInfoForm: FormGroup;	
  
  constructor(public router: Router, private fb: FormBuilder, private _authService: AuthService) { 
	this.createArticleForm(null);
  }

  ngOnInit() {
	  this.IsLogeedInuser();	  
  }
  
   createArticleForm(data: any)
   {
	   if(data==null)
	   {
			this.profileBasicInfoForm = this.fb.group({
			  name: ['', [Validators.required]],
			  rollNo: ['', [Validators.required]],
			});	
	   }
	   else
	   {
		  this.profileBasicInfoForm = this.fb.group({
			  name: [data.name, [Validators.required]],
			  rollNo: [data.rollNo, [Validators.required]],
			});	 
	   }
   }
  

IsLogeedInuser()
  {
	this.auth=JSON.parse(localStorage.getItem('currentUser')); 
	if(this.auth != null)
	{
	if(this.auth.Success=="true")
	{
		this.isEntityType=this.auth.entityType;
		this._authService.GetStudentDetailsbyID(this.auth.AuthToken, this.auth.recNo).subscribe((res: any) => {
			this.createArticleForm(res);
		}); 
	}
	else{
		this.isEntityType=0;
		this.router.navigate(['/']); 
	} 
	}
	else{
		this.isEntityType=0;
		this.router.navigate(['/']); 
	}
  }

}

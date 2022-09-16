import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Auth } from "../model/auth.model";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.scss']
})
export class JobPostingFormComponent implements OnInit {
	
  isEntityType: any = 0;
  auth:Auth;	
  profileBasicInfoForm: FormGroup;
  VTrainingcounter: any=0;  
  intershipcounter: any=0; 
  previousEmployementcounter: any=0; 
  languagecounter: any=0;
  referencescounter: any=0;
  academiccounter: any=0;
  
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
  
  addMoreVocationTraining()
  {
	  this.VTrainingcounter=this.VTrainingcounter + 1;
  }
  addMoreIntership()
  {
	  this.intershipcounter=this.intershipcounter + 1;
  }
  addMorePreviousEmployement()
  {
	  this.previousEmployementcounter=this.previousEmployementcounter + 1;
  }
  addMoreLanguage()
  {
	  this.languagecounter=this.languagecounter + 1;
  }
  addMoreReferences()
  {
	  this.referencescounter=this.referencescounter + 1;
  }
  addMoreAcademic()
  {
	  this.academiccounter=this.academiccounter + 1;
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

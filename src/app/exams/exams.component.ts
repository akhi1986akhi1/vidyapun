import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import {environment} from "@environment";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-exams",
  templateUrl: "./exams.component.html",
  styleUrls: ["./exams.component.scss"],
})
export class ExamsComponent implements OnInit {
  Examist:Array<any>=[]; 
  form: FormGroup;	
  selExamType="";
  selExamStatus="";
  selApplicationMode="";
  selExamMode="";
  selOthers="";
  public imageBasePath = environment.imageBasePath;
  constructor(private _authService: AuthService, private spinner: NgxSpinnerService, private fb: FormBuilder) {}


  ngOnInit() {
	this.getExamListData();  
	this.form = this.fb.group({
      ExamTypecheckArray: this.fb.array([], [Validators.required]),
      StatusTypecheckArray: this.fb.array([], [Validators.required]),
      ApplicationModecheckArray: this.fb.array([], [Validators.required]),
      ExamModecheckArray: this.fb.array([], [Validators.required]),
      OtherscheckArray: this.fb.array([], [Validators.required]),
    })
  }
  
  getExamListData()
  {
	this.spinner.show();
    this._authService.getExamList(this.selExamType, this.selExamStatus, this.selApplicationMode, this.selExamMode, this.selOthers).subscribe((res: any) => {
		this.spinner.hide();
		this.Examist = res;
    });  
  }
  
  onExamTypeCheckboxChange(e) {
	const examTypeCheckArray: FormArray = this.form.get('ExamTypecheckArray') as FormArray;
		  if (e.target.checked) {			  
			examTypeCheckArray.push(new FormControl(e.target.value));
		  } else {
			let i: number = 0;
			examTypeCheckArray.controls.forEach((item: FormControl) => {
			  if (item.value == e.target.value) {
				examTypeCheckArray.removeAt(i);
				return;
			  }
			  i++;
			});
		  }
		  this.selExamType=examTypeCheckArray.value;
		  this.getExamListData();
	}
	
	onExamStatusCheckboxChange(e) {
	const CheckArray: FormArray = this.form.get('StatusTypecheckArray') as FormArray;
		  if (e.target.checked) {			  
			CheckArray.push(new FormControl(e.target.value));
		  } else {
			let i: number = 0;
			CheckArray.controls.forEach((item: FormControl) => {
			  if (item.value == e.target.value) {
				CheckArray.removeAt(i);
				return;
			  }
			  i++;
			});
		  }
		  this.selExamStatus=CheckArray.value; 
		  this.getExamListData();
	}
	
	onApplicationModeCheckboxChange(e) {
	const CheckArray: FormArray = this.form.get('ApplicationModecheckArray') as FormArray;
		  if (e.target.checked) {			  
			CheckArray.push(new FormControl(e.target.value));
		  } else {
			let i: number = 0;
			CheckArray.controls.forEach((item: FormControl) => {
			  if (item.value == e.target.value) {
				CheckArray.removeAt(i);
				return;
			  }
			  i++;
			});
		  }
		  this.selApplicationMode=CheckArray.value; 
		  this.getExamListData();
	}
	
	onExamModeCheckboxChange(e) {
	const CheckArray: FormArray = this.form.get('ExamModecheckArray') as FormArray;
		  if (e.target.checked) {			  
			CheckArray.push(new FormControl(e.target.value));
		  } else {
			let i: number = 0;
			CheckArray.controls.forEach((item: FormControl) => {
			  if (item.value == e.target.value) {
				CheckArray.removeAt(i);
				return;
			  }
			  i++;
			});
		  }
		  this.selExamMode=CheckArray.value; 
		  this.getExamListData();
	}
	
	onOthersCheckboxChange(e) {
	const CheckArray: FormArray = this.form.get('OtherscheckArray') as FormArray;
		  if (e.target.checked) {			  
			CheckArray.push(new FormControl(e.target.value));
		  } else {
			let i: number = 0;
			CheckArray.controls.forEach((item: FormControl) => {
			  if (item.value == e.target.value) {
				CheckArray.removeAt(i);
				return;
			  }
			  i++;
			});
		  }
		  this.selOthers=CheckArray.value; 
		  this.getExamListData();
	}
}

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import {environment} from "@environment"
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: "app-college-list",
  templateUrl: "./college-list.component.html",
  styleUrls: ["./college-list.component.scss"],
})
export class CollegeListComponent implements OnInit {
  
  form: FormGroup;	  
  colllegeList:Array<any>=[];
  stateList:any=[];
  stateMainList:any=[];
  cityList:any=[];
  cityMainList:any=[];
  steamList:any=[];
  subSteamList:any=[];
  selStateName="";
  selState="";
  selCity="";
  selStream="";
  selSubSteam="";
  selUniversity="";
  
  public imageBasePath = environment.imageBasePath;
  
  
  constructor(private _authService: AuthService, private spinner: NgxSpinnerService,  private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
	    if(localStorage.getItem('filterUniversity')!=null)
		{
			this.selUniversity=localStorage.getItem('filterUniversity');
			localStorage.removeItem('filterUniversity');
		}
		this.activatedRoute.url.subscribe(url =>{
			 this.selStateName = this.activatedRoute.snapshot.paramMap.get('id');
			    
		}); 	
	     
  }


  ngOnInit() {
	this.getCollegeListData();  
	this._authService.StateList().subscribe((res: any) => {
      this.stateList = res;
      this.stateMainList = res;
    });

    this._authService.getCityList().subscribe((res: any) => {
      this.cityList = res;
      this.cityMainList = res;
    });

    this._authService.getSteamList().subscribe((res: any) => {
      this.steamList = res;
    });

    this._authService.getSubStreamList().subscribe((res: any) => {
      this.subSteamList = res;
    });
	this.form = this.fb.group({
      StatecheckArray: this.fb.array([], [Validators.required]),
	  CitycheckArray: this.fb.array([], [Validators.required])
    })
	
	
  }
  searchByName(searchValue: string)
  {
	  this.getCollegeListData();  
  }
  
  changeNameFilter(searchValue: string)
  {
	  this.selUniversity=searchValue;
  }
  
  changeStateFilter(searchValue: string)
  {
	  if(searchValue=='')
	  {
		  this.stateList=this.stateMainList;
	  }
	  else
	  {
		  this.stateList=this.stateMainList.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase()));
	  }
  }
  
  changeCityFilter(searchValue: string)
  {
	  if(searchValue=='')
	  {
		  this.cityList=this.cityMainList;
	  }
	  else
	  {
		  this.cityList=this.cityMainList.filter(x => x.name.toUpperCase().includes(searchValue.toUpperCase()));
	  }
  }
  
  getCollegeListData()
  {
	this.spinner.show();
    this._authService.getCollegeList(this.selState, this.selCity, this.selStream, this.selSubSteam, this.selStateName, this.selUniversity,'30').subscribe((res: any) => {
		this.spinner.hide();
		 this.colllegeList = res;
    });  
  }
  
  onStateCheckboxChange(e) {
	const statecheckArray: FormArray = this.form.get('StatecheckArray') as FormArray;
		  if (e.target.checked) {			  
			statecheckArray.push(new FormControl(e.target.value));
		  } else {
			let i: number = 0;
			statecheckArray.controls.forEach((item: FormControl) => {
			  if (item.value == e.target.value) {
				statecheckArray.removeAt(i);
				return;
			  }
			  i++;
			});
		  }
		  this.selState=statecheckArray.value;
		  this.getCollegeListData();
	}
	
	onCityCheckboxChange(e) {
	const citycheckArray: FormArray = this.form.get('CitycheckArray') as FormArray;
		  if (e.target.checked) {			  
			citycheckArray.push(new FormControl(e.target.value));
		  } else {
			let i: number = 0;
			citycheckArray.controls.forEach((item: FormControl) => {
			  if (item.value == e.target.value) {
				citycheckArray.removeAt(i);
				return;
			  }
			  i++;
			});
		  }
		  this.selCity=citycheckArray.value;
		  this.getCollegeListData();
	}
	
	onStateLoaded(value: any) {
		  var stateValue=this.stateList.filter(x => x.name.includes(value));
		  console.log("stateValue",stateValue);
          this.selState=stateValue.recNo;		  
		  this.getCollegeListData();
	}
}

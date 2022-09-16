import { map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import * as decoder from "jwt-decode";
import { TokenInterceptorService } from "./token-interceptor.service";
import { environment } from "../../environments/environment";
import { NgxSpinnerService } from "ngx-spinner";
import { Auth } from "../model/auth.model";



@Injectable()
export class AuthService extends TokenInterceptorService {
  onurlChanged: BehaviorSubject<any>;	
  //private static BASE_API_URL = "http://localhost:55560/api/";
  private static BASE_API_URL = "http://api.vidyapun.com/api/";
  auth:Auth;
  constructor(private _http: HttpClient, public router: Router, private spinner: NgxSpinnerService, private activatedRoute: ActivatedRoute) {
    super();
	this.onurlChanged = new BehaviorSubject({});
  }

  // USER IS LOGGED IN OR NOT
  isUserLoggedIn() {
	 this.auth=JSON.parse(localStorage.getItem('currentUser')); 
	if(this.auth != null)
	{
		if(this.auth.Success=="true")
		{
			return true;
		}
		else{
			return false;
		} 
	}
	else{
		return false;
	}
	    
  }

  //LOGIN
  loginApiMethod(data) {
    let url = AuthService.BASE_API_URL + `Login/GetUserAuthToken/?username=${data.username}&password=${data.password}`;
    return this._http.get(url);
  }

  //REGISTER
  registerUser(data): Observable<any> {
	return this._http.post(AuthService.BASE_API_URL + 'UserAction/Registration/', JSON.stringify(data));
  }

  //HOME PAGE
  getHomePage(): Observable<any> {
    return this._http.get(AuthService.BASE_API_URL + `UserAction/GetHomePage`);
  }

  getCollegeList(state:any, city: any, stream: any, substream: any, stateName: any, univName: any, limit: any):  Observable<any> 
  { 		
		return this._http.get<any>(AuthService.BASE_API_URL + 'UserAction/GetCollegeList/', {
            params: new HttpParams()
                .set('stateIn', state)
                .set('stateName', stateName==null?'':stateName)
				.set('cityIn', city)                
				.set('streamIn', stream)                
				.set('substreamIN', substream)     
				.set('name', univName)     
				.set('limit', limit) 	
				.set('isDeleteIN', '0')
        });		
   }
   
  
  getExamList(examType:any, examStatus: any, applicatonMode: any, examMode: any, others: any):  Observable<any> 
	{ 		
		return this._http.get<any>(AuthService.BASE_API_URL + 'UserAction/GetExamList/', {
            params: new HttpParams()
                .set('examType', examType)
				.set('examStatus', examStatus)                
				.set('applicatonMode', applicatonMode)                
				.set('examMode', examMode)                
				.set('others', others)                
        });		
    }

  StateList():Observable<any>{
    return this._http.get(AuthService.BASE_API_URL + `UserAction/StateList/`);
  }
  
  GetStudentDetailsbyID(tokenNo: any, recNo: any):Observable<any>{
    return this._http.get(AuthService.BASE_API_URL + `TblStudent/GetDetailByLoginRecNo/?AuthToken=` + tokenNo + "&recNo=" + recNo);
  }

  getCityList():Observable<any>{
    return this._http.get(AuthService.BASE_API_URL + `UserAction/CityList/`);
  }

  getSteamList():Observable<any>{
    return this._http.get(AuthService.BASE_API_URL + `UserAction/SteamList/`);
  }

  getSubStreamList():Observable<any>{
    return this._http.get(AuthService.BASE_API_URL + `UserAction/SubStreamList/`);
  }
	
  getCourseList():Observable<any>{
	 return this._http.get(AuthService.BASE_API_URL + `UserAction/CourseList/`);
  }	
  
  getCourseByCode():Observable<any>{
	 return this._http.get(AuthService.BASE_API_URL + `UserAction/CourseList/`);
  }
  
  getCollegeDetailsByCode(code: any):Observable<any>{
	 return this._http.get(AuthService.BASE_API_URL + `UserAction/GetCollegeByCode/?code=` + code);
  }
  
  
  
  
}

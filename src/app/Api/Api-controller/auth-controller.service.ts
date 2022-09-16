import { Injectable } from "@angular/core";
import "rxjs/Rx";
import "rxjs/add/operator/map";
// import * as Rx from 'rxjs/Rx';
// import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject, of } from "rxjs";
import { HttpService } from "../http/http-service.service";

@Injectable({
  providedIn: "root",
})
export class AuthControllerService {
  apiController: String = "Login";

  constructor(private httpService: HttpService) {}

  loginApi(body): Observable<any> {
    let url = `${this.httpService.basePathApi}tblstate?username=meenu@gmail.com&password=123456`;
    return this.httpService.GetRequestUnauthorised(url);
  }

  LogOut(body): Observable<any> {
    let url = `${this.httpService.basePathApi}/${this.apiController}/Logout`;
    return this.httpService.PostRequest(url, body);
  }

  sendForgotPasswordMessage(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/ForgetPassword`;
    return this.httpService.PostRequestUnauthorised(url, body);
  }

  ChangePassword(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/ChangePassword`;
    return this.httpService.PostRequest(url, body);
  }

  EmailVerifyRequest(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/IsEmailExists`;
    return this.httpService.PostRequestUnauthorised(url, body);
  }

  VerifyResetpasswordLinkRequest(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/IsForgetPasswordLinkExpired`;
    return this.httpService.PostRequestUnauthorised(url, body);
  }

  ResetPasswordRequest(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/ResetPassword`;
    return this.httpService.PostRequestUnauthorised(url, body);
  }

  LogoutRequest(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/Logout`;
    return this.httpService.PostRequest(url, body);
  }

  OTPCodeVerify(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/VerifyOTP`;
    return this.httpService.PostRequestUnauthorised(url, body);
  }

  SignUp(body) {
    let url = `${this.httpService.basePathApi}/${this.apiController}/SignUpByWeb`;
    return this.httpService.MultipartDataPostRequest(url, body);
  }
}

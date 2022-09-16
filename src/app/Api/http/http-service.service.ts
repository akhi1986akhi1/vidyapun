import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as Rx from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    public basePathApi: String = "http://api.vidyapun.com/api";
    requestoptions: any;
    public apiKey: any = "EV-OCT-EVENT-BIZBRO-2020LLY";
                          
    public loader_image: string;

    constructor(private http: HttpClient, private router:Router) {
        this.loader_image = "/assets/img/loader.gif";
        if(window.location.host=="puffin.com"){
            this.basePathApi =  'http://api.vidyapun.com/api/';
       }else{
           this.basePathApi =  'http://api.vidyapun.com/api/'; 
       }
    }

    public getRequsetOptions(url: string) {
        let headers = new Headers();
        if (localStorage.getItem('access_token')) {
            headers.append("Content-Type", "application/json");
            headers.append("Token", localStorage.getItem('access_token'));
        }
        this.requestoptions = {
            method: "GET",
            url: url,
            headers: Headers
        }
        return this.requestoptions;
    }

    public GetRequest(url: string): any {

        return this.http.request(this.getRequsetOptions(url))
            .subscribe((res: any) => {
                let jsonObj: any;
                if (res.status === 204) {
                    jsonObj = null;
                }
                else if (res.status === 500) {
                    jsonObj = null;
                }
                else if (res.status !== 204) {
                    jsonObj = res.json()
                }
                return [{ status: res.status, json: jsonObj }]
            },
                (error) => {
                    return error;
                })


    }

 

    public GetRequestUnauthorised(url: string): any {
        let httpOptions = {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json' })
        };
        return this.http.get(url,httpOptions)
            .pipe(
                map(res => {
                    return res;
                }),  // returns a {0|1} element array
                tap(h => {
                    console.log(h, "res---tap")
                }),
                catchError(
                    this.handleError()
                ))


    }

    public PostRequest(url: string, data: any): any {
        

        let httpOptions = {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json', "Authorization": 'Basic '+localStorage.getItem('access_token') })
        };
        return this.http.post(url, JSON.stringify(data), httpOptions)
            .pipe(
                map(res => {
                    return res;
                }),  // returns a {0|1} element array
                tap(h => {
                    console.log(h, "res---tap")
                }),
                catchError(
                    this.handleError()
                ))

    }

    public MultipartDataPostRequest(url: string, data: any): any {
       
            let httpOptions = { headers: new HttpHeaders({"Authorization": 'basic '+localStorage.getItem('access_token') })
        };
        return this.http.post(url, data, httpOptions)
            .pipe(
                map(res => {
                    return res;
                }),  // returns a {0|1} element array
                tap(h => {
                    console.log(h, "res---tap")
                }),
                catchError(
                    this.handleError()
                ))

    }

    public MultipartDataPostRequestUnauthorised(url: string, data: any): any {
        let httpOptions = { headers: new HttpHeaders({"Authorization": `basic ${this.apiKey}`})
    };
    return this.http.post(url, data, httpOptions)
        .pipe(
            map(res => {
                return res;
            }),  // returns a {0|1} element array
            tap(h => {
                console.log(h, "res---tap")
            }),
            catchError(
                this.handleError()
            ))

}


    public PostRequestUnauthorised(url: string, data: any): any {
        // data.APIKey = this.apiKey;
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization": `Basic ${this.apiKey}`})
        };

        return this.http.post(url, JSON.stringify(data), httpOptions)
            .pipe(
                map(res => {
                    return res;
                }),  // returns a {0|1} element array
                tap(h => {
                    console.log(h, "res---tap")
                }),
                catchError(
                    this.handleError()
                ))

    }

    public DeleteRequest(url: string): any {
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        headers.append("Authorization", 'Bearer ' + JSON.parse(localStorage.getItem('access_token')));

        this.requestoptions = {
            method: "DELETE",
            url: url,
            headers: headers
        }

        return this.http.request(this.requestoptions)
            .subscribe((res: any) => {
                if (res) {
                    return [{ status: res.status, json: res.json() }]
                }
            },
                (error: any) => {
                    if (error.status == 401) {
                        // localStorage.clear();
                        // this.router.navigateByUrl('/login');
                    }
                    if (error.status === 500) {
                        return Observable.throw(error);
                    }
                    else if (error.status === 400) {
                        return Observable.throw(error);
                    }
                    else if (error.status === 405) {
                        return Observable.throw(error);
                    }
                    else if (error.status === 409) {
                        return Observable.throw(error);
                    }
                });
    }

    // new Delete method
    public DeleteRequestWithData(url: string, data): any {
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        headers.append("Authorization", 'Bearer ' + JSON.parse(localStorage.getItem('access_token')));

        this.requestoptions = {
            method: "DELETE",
            url: url,
            headers: headers,
            body: data
        }

        return this.http.request(this.requestoptions)
            .subscribe((res: any) => {
                if (res) {
                    return [{ status: res.status, json: res.json() }]
                }
            }, (error: any) => {
                if (error.status == 401) {
                    // localStorage.clear();
                    // this.router.navigateByUrl('/login');
                }
                if (error.status === 500) {
                    return Observable.throw(error);
                }
                else if (error.status === 400) {
                    return Observable.throw(error);
                }
                else if (error.status === 405) {
                    return Observable.throw(error);
                }
                else if (error.status === 409) {
                    return Observable.throw(error);
                }
            });
    }

    // end delete method

    public PutRequest(url: string, data: any): any {

        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        headers.append("Authorization", 'Bearer ' + JSON.parse(localStorage.getItem('access_token')));

        this.requestoptions = {
            method: "PUT",
            url: url,
            headers: headers,
            body: JSON.stringify(data)
        }

        return this.http.request(this.requestoptions)
            .subscribe((res: any) => {
                if (res) {
                    return [{ status: res.status, json: res.json() }]
                }
            }, (error: any) => {
                if (error.status == 401) {
                    // localStorage.clear();
                    // this.router.navigateByUrl('/login');
                }
                if (error.status === 500) {
                    return Observable.throw(error);
                }
                else if (error.status === 400) {
                    return Observable.throw(error);
                }
                else if (error.status === 405) {
                    return Observable.throw(error);
                }
                else if (error.status === 409) {
                    return Observable.throw(error);
                }
                else if (error.status === 401) {
                    return Observable.throw(error);
                }
                else if (error.status === 404) {
                    return Observable.throw(error);
                }
            });
    }


    getLocationDefault() {
        let headers = new Headers();
        headers.append("Accept", "application/json");

        this.requestoptions = {
            method: "PSOT",
            url: "https://freegeoip.net/json/?format=json",
            headers: headers,
        }
        return this.http.request(this.requestoptions)
            .subscribe((res: any) => {
                let jsonObj: any;
                if (res.status === 204) {
                    jsonObj = null;
                }
                else if (res.status === 500) {
                    jsonObj = null;
                }
                else if (res.status !== 204) {
                    jsonObj = res.json()
                }
                return [{ status: res.status, json: jsonObj }]
            },
                (error) => {
                    if (error.status === 403 || error.status === 500 || error.status === 401 || error.status === 400 || error.status === 409 || error.status === 404) {
                        return Observable.throw(error);
                    }

                });
    }


    modifyTitle(title) {
        let prevTitle = document.getElementsByTagName('title');
        prevTitle[0].innerHTML = title;
    }

    modifyDescription(desc) {
        let pres = document.getElementsByTagName('meta');
        pres[2].content = desc;
    }

    public onlyNumberKey(event) {
        return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigateByUrl('/login');
                return Observable.throw(error);
            }
            else if (error.status === 500) {
                return Observable.throw(error);
            }
            else if (error.status === 400) {
                return Observable.throw(error);
            }
            else if (error.status === 409) {
                return Observable.throw(error);
            }
            else if (error.status === 406) {
                ;
                return Observable.throw(error);
            }
            else if (error.status === 404) {
                return Observable.throw(error);
            }
            else if (error.status === 403) {
                return Observable.throw(error);
            };
        };
    }

    

}




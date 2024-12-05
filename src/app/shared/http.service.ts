import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }

  baseUrl: string = "http://localhost:3000/"

  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  })

  // GET

  getDataFromServer(endpoint: any):Observable<any> {
    const url = this.baseUrl + endpoint
    return this.httpclient.get(url, { headers: this.httpHeaders })
  }


  // POST

  postDataToServer(endpoint:any,requestBody:any):Observable<any>{
    const url = this.baseUrl + endpoint
    return this.httpclient.post(url,requestBody, {headers:this.httpHeaders})
  }

  // PUT

  putDatatoServer(endpoint: any, requestBody: any):Observable<any> {
    const url = this.baseUrl + endpoint
    return this.httpclient.put(url, requestBody, { headers: this.httpHeaders })
  }

  //DELETE 

  deleteDataFromServer(endpoint:any):Observable<any>{
    const url = this.baseUrl + endpoint
    return this.httpclient.delete(url, {headers:this.httpHeaders})
  }
}

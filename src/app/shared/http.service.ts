import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getDataFromServer(endpoint: any) {
    const url = this.baseUrl + endpoint
    return this.httpclient.get(url, { headers: this.httpHeaders })
  }


}

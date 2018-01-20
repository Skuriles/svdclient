import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MyConstants } from "../constants/myConstants";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}
  
  public api = "blog/";

  public getCategories(): any {
    const nodeUrl = this.api + "getCategories";
    return this.postRequest(nodeUrl, null);
  }  

  // default http requests
  private postRequest(nodeUrl: string, body: object) {
    return this.http.post(nodeUrl, body);
  }

  private postAuthRequest(nodeUrl: string, body: object) {
    return this.http.post(nodeUrl, body, {
      headers: new HttpHeaders().set(
        "Authorization",
        sessionStorage.getItem(MyConstants.token)
      )
    });
  }  
}

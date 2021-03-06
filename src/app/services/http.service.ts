import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MyConstants } from "../constants/myConstants";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public blogApi = "blog/";
  public fileApi = "files/";
  public calApi = "calendar/";

  //fileRoutes
  public getMenuBar(): any {
    const nodeUrl = this.fileApi + "getMenu";
    return this.postRequest(nodeUrl, null);
  }
  // postRoutes
  public getPostById(id: string): any {
    const nodeUrl = this.blogApi + "getPostById";
    return this.postRequest(nodeUrl, { id });
  }

  public getPostsByCategory(categories: string[]): any {
    const nodeUrl = this.blogApi + "getPostsByCategory";
    return this.postRequest(nodeUrl, categories);
  }

  //calendar routes
  public getCalendar(): any {
    const nodeUrl = this.calApi + "getCalendar";
    return this.postRequest(nodeUrl, null);
  }

  public getPlayCalendar(): any {
    const nodeUrl = this.calApi + "getPlayCalendar";
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

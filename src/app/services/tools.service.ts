import { Injectable } from "@angular/core";
import { PostDate } from "../classes/helper/postDate";

@Injectable()
export class ToolsService {

  constructor() { }

  public createPostDate(dateStr: string){
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return new PostDate(day, month);
  }

}

import { PostCategory } from "./post-category";
import { PostDate } from "../helper/postDate";
import { ClassField } from "@angular/compiler/src/output/output_ast";

export class Post {
  public date: PostDate;
  public title: string;
  public author: string;
  public publishedDate: string;
  public image: PostImage;
  public content: PostContent;
  public categories: PostCategory[];
  public _id: string;
}

export class PostImage {
  public public_id: string;
  public version: number;
  public signature: string;
  public format: string;
  public resource_type: string;
  public url: string;
  public width: number;
  public height: number;
  public secure_url: string;
}

export class PostContent {
  public brief: string;
  public extended: string;
}

export class HeaderImage {
  public source: string;
  public alt: string;
  public title: string;

  constructor(title: string, source: string, alt: string) {
    this.title = this.removeHtml(title);
    this.source = source;
    this.alt = this.removeHtml(alt);
  }

  private removeHtml(text: string): string {
let result = "";
result = text.replace("<p>", "");
result = result.replace("</p>", "");
return result;
  }
}

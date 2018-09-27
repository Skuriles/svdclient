import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../services/http.service";
import { Post } from "../classes/Posts/post";
import { ToolsService } from "../services/tools.service";

@Component({
  selector: "app-default-article",
  templateUrl: "./default-article-component.html",
  styleUrls: ["./default-article-component.css"]
})
export class DefaultArticleComponent implements OnInit {
  public post: Post;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private tools: ToolsService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.url[0].path == "post") {
      let id = this.route.snapshot.paramMap.get("id");
      if (id) {
        this.httpService.getPostById(id).subscribe((post: Post) => {
          if (post) {
            this.post = post;
            this.post.date = this.tools.createPostDate(this.post.publishedDate);
          }
        });
      }
    } else {
      // DO single post
    }
  }
}

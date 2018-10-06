import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Post, HeaderImage } from "../classes/Posts/post";
import { ToolsService } from "../services/tools.service";
import { Router } from "@angular/router";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-start",
  styleUrls: ["./start.component.css"],
  templateUrl: "./start.component.html"
})
export class StartComponent implements OnInit {
  public posts: Post[];
  public headerPosts: Post[];
  public showLongText = false;

  constructor(
    private httpService: HttpService,
    private tools: ToolsService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.headerPosts = [];
    this.posts = [];
    this.getPostByCategories();
    this.getHeaderPosts();
  }

  public getPostByCategories() {
    this.httpService
      .getPostsByCategory(["start"])
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        for (let i = 0; i < this.posts.length; i++) {
          const post = this.posts[i];
          post.date = this.tools.createPostDate(post.publishedDate);
        }
      });
  }

  public getHeaderPosts() {
    this.httpService
      .getPostsByCategory(["header"])
      .subscribe((posts: Post[]) => {
        this.headerPosts = posts;
        for (let i = 0; i < this.headerPosts.length; i++) {
          const post = this.headerPosts[i];
          post.date = this.tools.createPostDate(post.publishedDate);
        }
      });
  }

  public openPost(postId: string) {
    this.router.navigate(["/post", postId]);
  }
}

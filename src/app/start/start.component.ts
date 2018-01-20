import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html"
})
export class StartComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public getCategories() {
    this.httpService.getCategories().subscribe();
  }
}

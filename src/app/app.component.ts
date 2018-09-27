import { Component, OnInit } from "@angular/core";
import { MenuBarItem } from "./classes/helper/menuBar";
import { HttpService } from "./services/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public menuBar: MenuBarItem[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getMenuBar();
  }

  public getMenuBar() {
    this.httpService.getMenuBar().subscribe(menuBar => {
      this.menuBar = menuBar.menuBarItems;
    });
  }
}

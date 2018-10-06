import { Component, OnInit, HostListener } from "@angular/core";
import { MenuBarItem } from "./classes/helper/menuBar";
import { HttpService } from "./services/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public menuBar: MenuBarItem[];

  public bigScreen = false;

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.bigScreen = window.innerWidth > 990;
  }
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getMenuBar();
    this.bigScreen = window.innerWidth > 990;
  }

  public getMenuBar() {
    this.httpService.getMenuBar().subscribe(menuBar => {
      this.menuBar = menuBar.menuBarItems;
    });
  }
}

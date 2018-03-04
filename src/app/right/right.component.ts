import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";
import { CalEvent } from "../classes/calendar/cal-event";

@Component({
  selector: "app-right-sidebar",
  templateUrl: "./right.component.html",
  styleUrls: ["./right.component.css"]
})
export class RightComponent implements OnInit {
  public events: CalEvent[];
  public playEvents: CalEvent[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getCalendar();
  }

  private getCalendar(): any {
    this.httpService.getCalendar().subscribe(result => {
      this.events = result.events;
    });
    this.httpService.getPlayCalendar().subscribe(result => {
      this.playEvents = result.events;
    });
  }
}

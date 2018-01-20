import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/primeng";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: "Start",
        routerLink: "start"
      },
      {
        label: "Spielbetrieb",
        items: [
          {
            label: "Herren",
            items: [{ label: "Tabelle" }, { label: "Info" }]
          },
          { label: "Herren 2" },
          { label: "Herren 3" },
          { label: "Damen" },
          { label: "Damen 2" },
          {
            label: "Jugend",
            items: [
              { label: "A-Jugend" },
              { label: "B-Jugend" },
              { label: "C-Jugend" },
              { label: "D1-Jugend" },
              { label: "D2-Jugend" },
              { label: "E1-Jugend" },
              { label: "E2-Jugend" },
              { label: "B-Juniorinnen" },
              { label: "B-Juniorinnen 2" },
              { label: "C-Juniorinnen" },
              { label: "D-Juniorinne" },
              { label: "F-Jugend" },
              { label: "Bambinis" }
            ]
          }
        ]
      }
    ];
  }
}

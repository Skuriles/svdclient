import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public items: any[];

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
      },
      {
        label: "Verein",
        items: [
          { label: "Trainer" },
          { label: "Vorstandschaft" },
          { label: "Förderverein" },
          { label: "Jugendvorstandschaft" }
        ]
      },
      {
        label: "Seniorenfussball"
      },
      {
        label: "Schiedsrichter"
      },
      {
        label: "Termine"
      },
      {
        label: "Kontakt"
      },
      {
        label: "Mitglied werden"
      },
      {
        label: "SVD Bus"
      },
      {
        label: "Intern",
        items: [{ label: "Grillplan" }, { label: "Vereinsbewirtung" }]
      }
    ];
  }
}

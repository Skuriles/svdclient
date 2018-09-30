import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-spielbetrieb",
  templateUrl: "./spielbetrieb.component.html",
  styleUrls: ["./spielbetrieb.component.css"]
})
export class SpielbetriebComponent implements OnInit {
  public aktive: boolean = false;
  public jugend: boolean = false;
  public training: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    switch (this.route.snapshot.url[0].path) {
      case "aktiv":
        this.aktive = true;
        this.jugend = false;
        this.training = false;
        break;
      case "jugend":
        this.jugend = true;
        this.aktive = false;
        this.training = false;
        break;
      case "training":
        this.training = true;
        this.jugend = false;
        this.aktive = false;
        break;
      default:
        break;
    }
  }

  public activeContents = [
    {
      title: "Herren 1",
      text: "Herren 1 Text"
    },
    {
      title: "Herren 2",
      text: "Herren 2 Text"
    },
    {
      title: "Herren 3",
      text: "Herren 3 Text"
    },
    {
      title: "Damen 1",
      text: "Damen 1 Text"
    },
    {
      title: "Damen 2",
      text: "Damen 2 Text"
    }
  ];

  public jugendContents = [
    {
      title: "B Juniorinnen",
      text: "B Juniorinnen"
    },
    {
      title: "C Juniorinnen",
      text: "C Juniorinnen"
    },
    {
      title: "A Jugend",
      text: "A Jugend"
    },
    {
      title: "B Jugend",
      text: "B Jugend"
    },
    {
      title: "C Jugend",
      text: "C Jugend"
    },
    {
      title: "D1 Jugend",
      text: "D1 Jugend"
    },
    {
      title: "D2 Jugend",
      text: "D2 Jugend"
    },
    {
      title: "E1 Jugend",
      text: "E1 Jugend"
    },
    {
      title: "E2 Jugend",
      text: "E2 Jugend"
    },
    {
      title: "F Jugend",
      text: "F Jugend"
    },
    {
      title: "Bambinis",
      text: "Bambinis"
    }
  ];

  public trainingContents = {};
}

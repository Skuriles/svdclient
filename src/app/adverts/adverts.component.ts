import { Component, OnInit } from "@angular/core";
import {
  state,
  style,
  transition,
  animate,
  trigger
} from "@angular/animations";

@Component({
  selector: "app-adverts",
  templateUrl: "./adverts.component.html",
  styleUrls: ["./adverts.component.css"],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "vanish",
        style({
          opacity: 0
        })
      ),
      state(
        "default",
        style({
          opacity: 1
        })
      ),
      transition("default => vanish", [animate("1s")])
    ]),
    trigger("fadeIn", [
      state(
        "start",
        style({ height: "*", transform: "translateY(lastImageHeight)" })
      ),
      state("noDraw", style({ height: "0", transform: "translateX(0)" })),
      transition("start => noDraw", [animate("1.0s")])
    ])
  ]
})
export class AdvertsComponent implements OnInit {
  public images: string[] = [];

  public isOpen = true;
  public redraw = true;

  private idCounter = 0;
  public lastImageHeight: number;

  public toggle() {
    this.isOpen = !this.isOpen;
  }

  public toggleList() {
    this.redraw = !this.redraw;
  }

  constructor() {}

  ngOnInit() {
    this.images = [
      "assets/advertImages/anzeige_hp_web.png",
      "assets/advertImages/brodbeck.jpg",
      "assets/advertImages/generali.jpg",
      "assets/advertImages/gruenvogel.png",
      "assets/advertImages/GT-Logo-neu-3.jpg",
      "assets/advertImages/HSM_Logo.jpg",
      "assets/advertImages/Kneissler-Logo_neu.jpg",
      "assets/advertImages/Roelle-Logo.jpg",
      "assets/advertImages/roelleU.png",
      "assets/advertImages/steuer.png",
      "assets/advertImages/stoerk-Seite001.png"
    ];
    this.startRoll();
  }

  public animationDone(event) {
    this.rolladeImages();
    var lastImg = this.images[0];
    this.images.splice(0, 1);
    this.images.push(lastImg);
  }

  private startRoll(): void {
    // setInterval(() => {
    //   this.rolladeImages();
    // }, 2000);
    setInterval(() => {
      this.toggle();
    }, 2000);
    // setInterval(() => {
    //   this.toggleList();
    // }, 3000);
  }
  private rolladeImages(): void {
    var ele = document.getElementById(
      "advertImage" + this.idCounter
    ) as HTMLElement;
    this.lastImageHeight = ele.clientHeight;
    this.toggleList();
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-adverts",
  templateUrl: "./adverts.component.html",
  styleUrls: ["./adverts.component.css"]
})
export class AdvertsComponent implements OnInit {
  public images: string[];
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
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { StartComponent } from "./start/start.component";
import { MenubarModule, GalleriaModule } from "primeng/primeng";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
import { RightComponent } from "./right/right.component";
import { ToolsService } from "./services/tools.service";
import { AdvertsComponent } from './adverts/adverts.component';
import { TrainerComponent } from './trainer/trainer.component';
import { VorstandComponent } from './vorstand/vorstand.component';
import { JugendVorstandComponent } from './jugend-vorstand/jugend-vorstand.component';
import { FoerderVorstandComponent } from './foerder-vorstand/foerder-vorstand.component';

@NgModule({
  declarations: [AppComponent, StartComponent, RightComponent, AdvertsComponent, TrainerComponent, VorstandComponent, JugendVorstandComponent, FoerderVorstandComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    GalleriaModule
  ],
  providers: [HttpService, ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

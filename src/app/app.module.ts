import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StartComponent } from "./start/start.component";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
import { RightComponent } from "./right/right.component";
import { ToolsService } from "./services/tools.service";
import { AdvertsComponent } from "./adverts/adverts.component";
import { TrainerComponent } from "./trainer/trainer.component";
import { VorstandComponent } from "./vorstand/vorstand.component";
import { JugendVorstandComponent } from "./jugend-vorstand/jugend-vorstand.component";
import { FoerderVorstandComponent } from "./foerder-vorstand/foerder-vorstand.component";
import { DefaultArticleComponent } from "./default-article/default-article-component";
import { SpielbetriebComponent } from "./spielbetrieb/spielbetrieb.component";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RightComponent,
    AdvertsComponent,
    TrainerComponent,
    VorstandComponent,
    JugendVorstandComponent,
    FoerderVorstandComponent,
    DefaultArticleComponent,
    SpielbetriebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [HttpService, ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

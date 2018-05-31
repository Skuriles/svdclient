import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
    DefaultArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [HttpService, ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

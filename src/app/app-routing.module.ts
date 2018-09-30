import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { DefaultArticleComponent } from "./default-article/default-article-component";
import { TrainerComponent } from "./trainer/trainer.component";
import { SpielbetriebComponent } from "./spielbetrieb/spielbetrieb.component";

const routes: Routes = [
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "post/:id",
    component: DefaultArticleComponent
  },
  {
    path: "herren_1",
    component: DefaultArticleComponent
  },
  {
    path: "trainer",
    component: TrainerComponent
  },
  {
    path: "spielbetrieb",
    component: SpielbetriebComponent
  },
  {
    path: "aktiv",
    component: SpielbetriebComponent
  },
  {
    path: "jugend",
    component: SpielbetriebComponent
  },
  {
    path: "training",
    component: SpielbetriebComponent
  },
  {
    path: "",
    redirectTo: "/start",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/start",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

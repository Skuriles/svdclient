import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { DefaultArticleComponent } from "./default-article/default-article-component";
import { TrainerComponent } from "./trainer/trainer.component";

const routes: Routes = [
  {
    path: "start",
    component: StartComponent
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
    path: "",
    component: StartComponent
  },
  {
    path: "*",
    component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

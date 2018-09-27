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

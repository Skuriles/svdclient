import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "",
    component: StartComponent
  },
  {
    path: "*",
    component: StartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

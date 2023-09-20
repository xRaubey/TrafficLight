import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrafficLightComponent} from "./traffic-light/traffic-light.component";

const routes: Routes = [
  {path:'', redirectTo:'/tl', pathMatch:'full'},
  {path:'tl', component: TrafficLightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

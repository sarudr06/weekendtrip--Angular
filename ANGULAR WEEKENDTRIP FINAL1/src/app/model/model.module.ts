import { NgModule } from "@angular/core";
import {  WeekendRepository } from "./weekend.repository";
import {WeekendRestData } from "./weekend.restdata";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports:[HttpClientModule],
  providers:[WeekendRepository,WeekendRestData]
})
export class ModelModule{

}

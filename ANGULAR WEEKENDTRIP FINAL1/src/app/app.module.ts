import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeekendTripModule } from './weekendtrips/weekendtrips.module';
import {  WeekendTripComponent } from './weekendtrips/weekendTrip.component';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackageComponent } from './weekendtrips/package.component';
import { LoginComponent } from './weekendtrips/login.component';
import { TravellerComponent } from './weekendtrips/traveller.component';
import { UserdetailsComponent } from './weekendtrips/userdetails.component';
import { BookingreviewComponent } from './weekendtrips/bookingreview.component';
import { PlacesComponet } from './weekendtrips/places.component';
import { PaymentComponent } from './weekendtrips/payment.component';
import { CityComponent } from './weekendtrips/cities.component';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WeekendTripModule,
    RouterModule.forRoot([
      {  path: 'weekend', component: WeekendTripComponent},
      {  path: 'packages/:id', component: PackageComponent},
      {  path: 'cities', component: CityComponent},
      {  path: "login/:id", component: LoginComponent},
      {  path: "traveller/:packageReferenceId", component: TravellerComponent},
      {  path: "user", component: UserdetailsComponent},
      {  path: "review", component: BookingreviewComponent},
      {  path: "place", component: PlacesComponet},
      {  path: "payment", component: PaymentComponent},
      {
         path:"admin",
         loadChildren:()=>import('./admin/admin.module').then(x=>x.AdminModule)
      },
      {
        path:"**",redirectTo:"weekend"
      }
    ]),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

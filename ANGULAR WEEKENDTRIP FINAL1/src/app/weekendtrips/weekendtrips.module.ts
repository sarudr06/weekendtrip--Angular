import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeekendTripComponent } from './weekendTrip.component';
import { ModelModule } from '../model/model.module';
import { CityComponent } from './cities.component';
import { PackageComponent } from './package.component';
import { LoginComponent } from './login.component';
import { TravellerComponent } from './traveller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from './search.pip';
import { UserdetailsComponent } from './userdetails.component';
import { PlacesComponet } from './places.component';
import { BookingreviewComponent } from './bookingreview.component';
import { PaymentComponent } from './payment.component';


@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule, ModelModule, BrowserAnimationsModule,
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule],
  declarations: [WeekendTripComponent, CityComponent, PackageComponent, LoginComponent, TravellerComponent, SearchPipe, UserdetailsComponent,PlacesComponet,BookingreviewComponent,PaymentComponent],
  exports: [CityComponent, WeekendTripComponent, PackageComponent, LoginComponent, TravellerComponent, SearchPipe, UserdetailsComponent,PlacesComponet,BookingreviewComponent,PaymentComponent]

})
export class WeekendTripModule { }


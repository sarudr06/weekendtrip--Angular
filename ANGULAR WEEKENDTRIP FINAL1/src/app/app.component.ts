import { Component } from '@angular/core';
import { WeekendRepository } from './model/weekend.repository';

@Component({
  selector: 'city-app',
  templateUrl:'app.component.html'
})
export class AppComponent {
  title = 'WeekEndTrips';
  constructor(public repo:WeekendRepository){
    console.log(this.repo.loginStatus)
  }
}
  // template:"<div>placeholder root</div>"

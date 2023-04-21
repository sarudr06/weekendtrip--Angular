import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { City } from '../model/city.model';

@Component({
  templateUrl: 'cities.component.html',
  styleUrls: ['cities.component.css',]

})

export class CityComponent  {
  cities:City[]=[];


  constructor(private repo:WeekendRepository) {
      this.cities=repo.getCities()
   }
   getcity(){
    console.log("hello")
    console.log(this.cities);
  }

}

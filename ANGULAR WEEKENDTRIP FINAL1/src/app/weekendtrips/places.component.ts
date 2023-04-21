import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { Place } from '../model/place.model';
import { threadId } from 'worker_threads';

@Component({
  selector: 'places',
  templateUrl: 'places.component.html',
  styleUrls:['places.component.css']
})

export class PlacesComponet implements OnInit {
  public placesArry:Place[]|undefined=[]
  constructor(private repo:WeekendRepository,) {

    console.log("places",repo.getPlaces(1))
    this.placesArry=repo.getPlaces(1)
    console.log(this.placesArry)
  }

  ngOnInit() { }
}

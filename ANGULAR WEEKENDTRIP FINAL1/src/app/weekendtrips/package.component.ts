import { Component, OnInit } from '@angular/core';
import { City } from '../model/city.model';
import { Packages } from '../model/packages.model';
import { Place } from '../model/place.model';
import { WeekendRepository } from '../model/weekend.repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // templateUrl: 'package.component.html'
  // template:'<div> hello angular</div>'
  templateUrl:'package.component.html'

})

export class PackageComponent  {
    id:number=0;
    city:City[]=[]
    packagees:Packages[]=[]
    places:Place[]=[]
  constructor(private repo:WeekendRepository,private router:Router,private activeroute:ActivatedRoute) {
    this.id= (this.activeroute.snapshot.params["id"])-1
      this.city=repo.getCities()
      console.log(this.city)

      
      this.packagees=this.city[this.id].packages
      console.log(this.packagees)


      this.places=this.packagees[0].places


   }
   getcity(){
    console.log("hello")
    console.log(this.city);
    console.log(this.packagees)

  }
  bookNow(packageId:number){
    // console.log("ok")
    // console.log(packageId)
    if(packageId==0)
    this.router.navigate(["/login/",packageId])
    else if(this.repo.loginStatus){
      this.router.navigate(['/traveller/',packageId])

    }

    else{
      this.router.navigate(["/login/",packageId])
    }
  }


  }

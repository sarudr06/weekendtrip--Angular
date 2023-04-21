// import  swal from 'sweetalert';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Traveller } from '../model/traveller.model';
import { Packages } from '../model/packages.model';
import { Passengers } from '../model/passengers.model';
import { WeekendRepository } from '../model/weekend.repository';
import { SearchPipe } from './search.pip';
import { stringify } from 'querystring';
import { Register } from '../model/login.model';

@Component({
  templateUrl: 'traveller.component.html',
  styleUrls:['traveller.component.css']
})

export class TravellerComponent  {


  traveller :Traveller=new Traveller(0,"",new Date(),new Date(),"",0,[],new Date(),"")

  packagee:Packages=new Packages(0,"","","",1,"","",[]);

  passenger:Passengers=new Passengers(0,"",0,"","")

  check:boolean=false;

  showmodal:boolean=false

  passengerDetailsArry:Passengers[]=[];

  userDetails=new Register("","","","","","",0,"",0)

  minDate = new Date();
  maxDate =new Date();
  date: Date =new Date();

  constructor(private repo:WeekendRepository,private activeroute:ActivatedRoute,private router:Router) {
   console.log( (this.activeroute.snapshot.params["packageReferenceId"]))
   Object.assign(this.packagee,this.repo.getpackage((this.activeroute.snapshot.params["packageReferenceId"])))
   console.log(this.packagee)
   this.userDetails=repo.currentUser
   this.traveller.packageName=this.packagee.packageName
   this.traveller.packagePrice=this.packagee.packagePrice
   this.traveller.travellerEmail=this.repo.currentUser.email

  }

  saveTraveller(form:NgForm){

    this.date = new Date(this.traveller.journeyStartingDate); //* setting the date as  Starting date
    this.date.setDate( this.date.getDate() + 3 ); //* adding 3 days for given date
    this.traveller.journeyEndingDate=this.date;
    this.traveller.passengers=this.passengerDetailsArry
    this.repo.saveTraveller(this.traveller)

    // swal("Click on either the button or outside the modal.")
    // .then((value:string) => {
    //   swal(`The returned value is: ${value}`);
    //   this.router.navigateByUrl('/review')
// 
    // });
  }

  showModal(){
    this.showmodal=true
    console.log(this.showmodal)
  }
  hideModal(){
    this.showmodal=false
  }
  savePassenger(form:NgForm){
    this.hideModal()
    this.passengerDetailsArry.push(form.value);
    console.log(this.passengerDetailsArry)
    form.resetForm();

  }

  deletePassenger(id:number){
    this.passengerDetailsArry.splice(id,1);
  }


}

import { Injectable } from "@angular/core";
import { City } from "./city.model";
import { WeekendRestData } from "./weekend.restdata";
import { Place } from "./place.model";
import { Packages } from "./packages.model";
import { NgForm } from "@angular/forms";
import { Login, Register } from "./login.model";
import { Traveller } from "./traveller.model";

import { Passengers } from "./passengers.model";


@Injectable()
export class WeekendRepository
{

  public showHeader=true;
  public showFooter=true;
  public loginStatus:boolean=false;
  public logInSwap:boolean=false;
  public show=true;//make it false for admin

  public cities:City[]=[];
  public travellers:Traveller[]=[];
  public packages:Packages[]=[]
  private places:Place[]=[];

  selectedcity:String=""
  selectedpack:String=""

//not verified need to analyse
  public currentUser=new Register("","","","","","",0,"",0)
  public userId=0;
  totalprice:number=0;
 currentTraveller:Traveller =new Traveller(0,"",new Date(),new Date(),"",0,[],new Date(),"")
 traveller2:Traveller=new Traveller(0,"",new Date(),new Date(),"",0,[],new Date(),"")


  getTravellers(): Traveller[] {
    console.log(this.travellers)
    return this.travellers;
  }

//* Storing the list of City objects in local arry

  constructor(private dataSource:WeekendRestData){

    dataSource.getCities().subscribe(data =>{
      console.log(data);
      this.cities=data
    })
    dataSource.getPackages().subscribe(data =>{
      console.log(data);
      this.packages=data
    })

    dataSource.getTravellers().subscribe(data =>{
      console.log(data);
      this.travellers=data
      console.log(this.travellers)
    })


  }



authorize(formdetails:Login){
  console.log(formdetails)
  console.log(this.show)
  // if(formdetails.emailid=='admin@gmail.com'&&formdetails.pass=='admin@123'){
  //   this.show=true;
  //   console.log("didnt came")
  // }
  this.dataSource.login(formdetails).subscribe((result:any)=>{
    console.log("loged in")
    console.log(result);
    this.show=true;
  }
  )

  }

  register(registerdetails:Register){
    registerdetails.role="admin";
    registerdetails.status="active"

        console.log(registerdetails)

        this.dataSource.register(registerdetails).subscribe(
          (result:any)=>{
            localStorage.setItem("token",result.token);
            // this.show=true;
          }
        )

        return this.show;
  }


  //get pdf
getpdf(id:number){
  console.log(id,"pdf")
 return this.dataSource.getPdf(id).subscribe(
  (response:any)=>{
    console.log("response")
  //  saveAs(response,id+".pdf")
  }
 )
}

//save passenger
savePassenger(passenger:Passengers){
  console.log(passenger)
}
//save traveller
saveTraveller(traveller:Traveller){
  Object.assign(this.currentTraveller,traveller)
  this.traveller2=traveller
  this.totalprice=this.currentTraveller.passengers.length*this.currentTraveller.packagePrice
  console.log(this.currentTraveller)
}
//get traveller
gettraveller():Traveller{
   console.log(this.currentTraveller)
   console.log(this.traveller2.travellerEmail)
   return this.traveller2
}





//get cities pack and place
getCities(){
  return this.cities
}
getCity(id:number){
  return this.cities.find(c=>c.cityId==id);
}
getPlaces(id:number):Place[] |undefined
{
let pack
 pack= this.packages.find(e =>e.packageId==id)
 console.log(pack,"this is packege",pack?.places)
 return pack?.places
}
getPackages():Packages[]{
  return this.packages;
}
getpackage(id:Number):Packages | undefined{
  console.log(id)
  console.log(this.packages)
 return this.packages.find(e=> e.packageId==id)
}



//changing active inactive status for admin
removeCity( cityid:number){
   this.dataSource.deleteCity(cityid)
   .subscribe(e=>{
    console.log("no error")
    console.log(e)
    this.dataSource.getCities().subscribe(data=>
      this.cities=data)
    },
    error=>{
  console.log("errors")
  this.cities.filter(c=>c.cityId==cityid)[0].status
    }
    )
}
removePlace( placeid:number){
  this.dataSource.deletePlace(placeid).subscribe()
}
removePack( packid:number){
  this.dataSource.deletePack(packid).subscribe()
}





//saving city package and place for admin
saveCity(city:City){
  this.dataSource
  .saveCity(city).subscribe(
    e=>console.log(e)
  )
}
savePlace(place:Place,packid:number = 1){
  this.dataSource
  .savePlace(place,packid).subscribe(
    e=>console.log(e)
  )
}
savePack(packages:Packages,cityId:number){
  this.dataSource
  .savePack(packages,cityId).subscribe(

  );
}





}

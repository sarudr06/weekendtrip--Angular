import { Register, Login } from './login.model';
import { Packages } from './packages.model';
import { Place } from './place.model';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { City } from './city.model';
import { Observable } from 'rxjs';
import { Traveller } from './traveller.model';

const PORT=8082
const PORT1=9090
const PROTOCOL="http"
const PROJECT="tour/weekendtrip"
const PROJECT1="auth"


@Injectable()
export class WeekendRestData{
  baseUrl: string;
  baseUrlLogin:string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/${PROJECT}/`;
    this.baseUrlLogin = `${PROTOCOL}://${location.hostname}:${PORT1}/${PROJECT1}/`;

}

// * getting the all citys in the Getcitys (Ajax_call)

getCities(): Observable<City[]> {
  return this.http.get<City[]>(this.baseUrl + "city/getallcities");
}

getTravellers(): Observable<Traveller[]> {
  return this.http.get<Traveller[]>(this.baseUrl + "traveller/getalltravellers");
}
getPackages(): Observable<Packages[]> {
  return this.http.get<Packages[]>(this.baseUrl + "pack/getallpackages");
}





//saving
saveCity(city:City): Observable<City> {
  return this.http.post<City>(this.baseUrl + "city/savecity",city);
}
savePlace(place:Place,id:number):Observable<Place>{
  return this.http.post<Place>(`${this.baseUrl}place/saveplacebypackid/${id}`,place);
}
savePack(pack:Packages,id:number):Observable<Packages>{
  console.log(pack)
  return this.http.post<Packages>(`${this.baseUrl}pack/savepackagebycityid/${id}`,pack);
}

// savePassenger():Observable<>







//deleting
deleteCity(id:number){
  return this.http.delete(`${this.baseUrl}city/changestatusofcity/${id}`);

}

deletePlace(id:number):Observable<City>{
  return this.http.delete<City>(`${this.baseUrl}deletePlace/${id}`);
}
deletePack(id:number):Observable<City>{
  return this.http.delete<City>(`${this.baseUrl}deletePack/${id}`);
}
deleteTraveller(id:number):Observable<City>{
  return this.http.delete<City>(`${this.baseUrl}deleteTraveller/${id}`);
}

getPdf(id:number):Observable<Blob> {
  // console.log("datapdf",id)

  const headers= new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*');


  return this.http.get(`${this.baseUrl}traveller/pdf/user/${id}`,{ 'headers': headers,responseType:'blob'});
}

//updating
 updateCity(id:number,city:City):Observable<City>{
   return this.http.put<City>(`${this.baseUrl}updateCity/${id}`,city);
 }
 updatePlace(id:number,place:Place):Observable<City>{
  return this.http.put<City>(`${this.baseUrl}updatePlace/${id}`,place);
}
updatePack(id:number,pack:Packages):Observable<City>{
  return this.http.put<City>(`${this.baseUrl}updatePack/${id}`,pack);
}



register(regForm:Register){
  console.log(regForm)
  return this.http.post(`${this.baseUrlLogin}register`,regForm);
}


login(loginForm:Login){
  console.log(loginForm)
  // console.log(
  //   localStorage.getItem('token')
  // );

  // let headers=new HttpHeaders()
  // .set("Authorization",`bearer ${localStorage.getItem('token')}`)
  // return this.http.post(`${this.baseUrlLogin}authenticate`,loginForm,{headers});
     return this.http.post(`${this.baseUrlLogin}authenticate`,loginForm);
}




}

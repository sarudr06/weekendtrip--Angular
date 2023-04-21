import { Component } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';

@Component({
  templateUrl: 'payment.component.html',
  styleUrls:['payment.component.css']
})

export class PaymentComponent {
  totalprice:number=0;
  cupi:boolean=false;
  ccard:boolean=false;
  cnet:boolean=false;
  CreditcardActive:boolean=false;
  constructor(private repo:WeekendRepository) {
      this.totalprice=repo.totalprice
      console.log(repo.totalprice)
  }
  changeupi(){
    this.cnet=false;
    this.ccard=false;
     this.cupi=!this.cupi;

  }
  changecard(){
    this.cupi=false;
    this.cnet=false;
    this.ccard=!this.ccard;
 }
 changenet(){
  this.ccard=false;
  this.cupi=false;
  this.cnet=!this.cnet;
}
checkCreditcardActive()
{
  this.CreditcardActive=true
}

}

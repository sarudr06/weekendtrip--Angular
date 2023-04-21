import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/login.model';

@Component({
  selector: 'user',
  templateUrl: 'userdetails.component.html'
})

export class UserdetailsComponent{
  public userDetails=new Register("","","","","","",0,"",0)
  public photoChaing:boolean=false

  constructor(public repo:WeekendRepository,private router:Router) {
    this.userDetails=this.repo.currentUser
    if(this.repo.currentUser.gender=="Female"){
      this.photoChaing=true

    }
    console.warn(this.userDetails)
    console.log(this.photoChaing)
  }
  saveUser(form:NgForm){
      console.log("hrllo")
  }
  logOut(){
    this.repo.currentUser=new Register("","","","","","",0,"",0)
    this.router.navigateByUrl("/weekend")
    this.repo.loginStatus=false
  }

}

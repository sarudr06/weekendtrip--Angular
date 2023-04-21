import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Register } from '../model/login.model';

import { WeekendRepository } from '../model/weekend.repository';
// import { IonInput } from '@ionic/angular';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  showmodal: boolean = false
  id: number = -1;
  login: Login = new Login("", "")
  register: Register = new Register("", "", "", "","","", +91, "", 0)

  constructor(private repo: WeekendRepository
    , private router: Router, private activeroute: ActivatedRoute) {
    this.id = (this.activeroute.snapshot.params["id"])
  }




  registerUser(form: NgForm) {

    this.register.role = "user";
    this.register.status = "Active";
    console.log(this.register)
    this.hideModal()
    this.repo.register(this.register)

    console.log(" new user details ", form.value)
    form.resetForm();
  }




  saveLogin(form: NgForm) {
console.log("see",form.value)
if(form.value.email=="admin@gmail.com"&&form.value.password=="admin123"){
  console.log("got",form.value)
  this.router.navigateByUrl("/admin/main/auth")
  return
}
    this.repo.authorize(form.value)

    console.log(this.repo.userId)

    setTimeout(() => {
      if ((this.repo.userId != 0 && this.id != 0 && this.repo.logInSwap)) {
        console.warn(" this is thee ")
        this.router.navigate(["/traveller/", this.id])
      }
      else if (this.repo.logInSwap) {
        this.router.navigateByUrl("/weekend");
      }
    }, 300);



    // if(this.id==0){
    //   this.repo.saveLogin(form.value)
    //   this.router.navigateByUrl('/login')
    // }else{
    // this.router.navigate(["/traveller/",this.id])
    // }
  }




  showModal() {
    this.showmodal = true
  }
  hideModal() {
    this.showmodal = false
  }


}



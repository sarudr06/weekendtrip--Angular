
export class Login{
  constructor(
    public email:string,
    public password:string,
  ){}
}
export class Register{
  constructor(
    public firstname:string,
    public lastname:string,
    public email:string,
    public password:string,
    public role:string,
    public status:string,
    public mobileNumber?:number,
    public gender?:string,
    public age?:number,

  ){}
}

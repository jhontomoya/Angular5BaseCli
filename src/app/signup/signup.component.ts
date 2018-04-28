import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

//const message: string = 'Datos Invalidos';
//const action: string = 'Error';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit, OnDestroy {

    user: string;
    password: string;
    status: string;
    confirmpassword: string;
    email: string;
    name: string;
    

  constructor(private _loginService: LoginService, public _router: Router, public _snackBar: MatSnackBar) {

  }

  ngOnInit() {

  }

  SignUp(){
    //this.ValidateUserName(this.user)
  }
  ValidateUserName(user): boolean{
      let valor: boolean ;
    ((this.user.length >= 5 && this.user.length <= 15)  ?  valor = true : valor = false);
    return valor;
  }

  ValidateUserNameIncorrect(user): boolean{
    let valor: boolean ;
  ((this.user.length >= 5 && this.user.length <= 15)  ?  valor = true : valor = false);
  return valor;
 }

 //80
 //Regex Js
 ValidatePassword(password): boolean{
     let valor: boolean = false;
     let min='abcdefghyjklmnñopqrstuvwxyz';
     let may='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
     let num='1234567890';
     let i: number=0;
     let res: number=0;
     for(i = 0; i<this.password.length;i++){
        if(may.indexOf(this.password.charAt(i),0)!=-1){
            res=1;
        }
     }
     if(res == 1){
        for(i = 0; i<this.password.length;i++){
            if(min.indexOf(this.password.charAt(i),0)!=-1){
                res=res+1;
            }
         } 
     }
     else if(res == 2){
        for(i = 0; i<this.password.length;i++){
            if(num.indexOf(this.password.charAt(i),0)!=-1){
                valor= true;
            }
         } 
     }
     else {
         valor = false;
     }

     return valor;
 }


  ngOnDestroy() {

  }

}

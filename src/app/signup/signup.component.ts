import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    status: string = '';
    confirmpassword: string;
    email: string;
    name: string;
    checked: boolean;
    validate: boolean;
    

  constructor(private _loginService: LoginService, public _router: Router, public _snackBar: MatSnackBar) {

  }

  ngOnInit() {

  }

  SignUp(){
      this.status='';
      //(this.ValidatePassword(this.password)==true && this.ValidateEqualPassword(this.password,this.confirmpassword) ? this.status = 'true' : this.status = 'false');
      ((this.ValidateCompleteData(this.user,this.password,this.confirmpassword,this.email,this.name,this.checked)== true)  ?  this.validate = true : this.validate = false);
      //alert('All Data'+this.ValidateCompleteData(this.user,this.password,this.confirmpassword,this.email,this.name,this.checked));
      ((this.validate==true)&&(this.ValidateUserName(this.user)==true)  ?  this.validate = true : this.validate = false);
      //alert('Validate '+this.validate+'User '+this.ValidateUserName(this.user));
      ((this.validate==true)&&(this.ValidatePassword(this.password)==true)  ?  this.validate = true : this.validate = false);
      //alert('Validate'+this.validate+'Password'+this.ValidatePassword(this.password));
      ((this.validate==true)&&(this.ValidateEqualPassword(this.password, this.confirmpassword)==true)  ?  this.validate = true : this.validate = false);
      //alert(this.ValidateEqualPassword(this.password, this.confirmpassword));
      ((this.validate==true)&&( this.ValidateEmail (this.email)==true)  ?  this.validate = true : this.validate = false);
      //alert( this.ValidateEmail (this.email));
      ((this.validate==true)&&(this.ValidateName(this.name)==true)  ?  this.validate = true : this.validate = false);
      //alert(this.ValidateName(this.name));
      ((this.validate==true)&&(this.ValidateCheckbox(this.checked)==true)  ?  this.validate = true : this.validate = false);
      //alert(this.ValidateCheckbox(this.checked));
      (this.validate==true  ?  this.status = 'OK' : this.status = 'Datos Incorrectos');
    //alert(this.ValidateCheckbox(this.checked));
     // this.status = 'OK';
    //alert(this.status);
    //this.ValidateUserName(this.user)
  }
  ValidateUserName(user): boolean{
      let valor: boolean ;
      ((this.user.length >= 5 && this.user.length <= 15)  ?  valor = true : valor = false);
      return valor;
  }

 //90
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

 ValidateEqualPassword(password, confirmpassword): boolean{
    let valor: boolean ;
    ((this.password.localeCompare(this.confirmpassword)) == 0  ?  valor = true : valor = false);
    return valor;
 }

 ValidateEmail (email): boolean{
     //Expresion   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/. 
     //let valor: boolean ;
     let comparacion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     //(comparacion.test(this.email) ?  valor = true : valor = false);
     //return valor;
     return comparacion.test(this.email);
 }

 ValidateName(name): boolean{
     //Expresion /^[a-zA-Z]+$/ 
     //let valor: boolean ;
     let comparacion = /^[a-zA-Z]+$/;
     return comparacion.test(this.name);
 }

 ValidateCheckbox(checked): boolean{
     //console.log(this.checked);
     return this.checked;
 }

 ValidateCompleteData(user,password,confirmpassword,email,name,checked){
    let valor: boolean ;
    let datosU: boolean;
    let datosP: boolean;
    let datosCP: boolean;
    let datosE: boolean;
    let datosN: boolean;
    (this.user != null  ?  datosU = true : datosU = false);
    (((datosU == true) && (this.password != null))  ?  datosP = true : datosP = false);
    (((datosP == true) && (this.confirmpassword != null))  ?  datosCP = true : datosCP = false);
    (((datosCP == true) && (this.email != null))  ?  datosE = true : datosE = false);
    (((datosE == true) && (this.name != null))  ?  datosN = true : datosN = false);
    (((datosN == true) && (this.checked == true)) ?  valor = true : valor = false);
    return valor;
 }


  ngOnDestroy() {

  }

}

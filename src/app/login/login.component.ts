import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    user: string;
    password: string;
    status: string;

  constructor(private _loginService: LoginService, private _router: Router) {

  }

  ngOnInit() {

  }

  logIn(){
    status = this._loginService.getDatos(this.user, this.password);
    (status === 'Ok'  ? this._router.navigate(['']) : alert('Datos invalidos') );
    //console.log('Click');
    //console.log(`Componente: ${this._loginService.getDatos(this.user, this.password)}`);
    //if(status === 'Ok'){
    //  this._router.navigate(['']);// se pone vacio ya que en el archivo de app.component.ts viene el path para main vacio.
    //}
    //else{
    //  alert('Datos invalidos');
    //}
  }

  ngOnDestroy() {

  }

}
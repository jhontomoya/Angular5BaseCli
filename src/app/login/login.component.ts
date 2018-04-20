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
    //console.log('Click');
    status = this._loginService.getDatos(this.user, this.password);
    //console.log(`Componente: ${this._loginService.getDatos(this.user, this.password)}`);
    if(status === 'Ok'){
      this._router.navigate(['']);
    }
    else{
      alert('Datos invalidos');
    }
  }

  ngOnDestroy() {

  }

}
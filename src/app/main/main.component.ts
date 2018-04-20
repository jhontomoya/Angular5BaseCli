import { Component, OnInit, EventEmitter } from '@angular/core';
import { GitHubService } from "../services/git-hub.service";
import { GitHubModel } from '../model/git-hub-model';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  
  gitHubDataList: Array<GitHubModel>;
  constructor(private _gitHubService: GitHubService) { 
    this.gitHubDataList = new Array<GitHubModel>();
  }

  ngOnInit() {
    let onClockUser = new EventEmitter<string>();
  }

  onSearchUser(userName: string){
    this._gitHubService
    .getUserInfo(userName)
    .subscribe( value => {
      this.gitHubDataList.push(value);
    });
  }

  onClickDelete(objGitHuBModel: GitHubModel){// metodo para eliminar el componente
    console.log(`DeleteClick: ${objGitHuBModel.login}`);
    //this.gitHubDataList = this.gitHubDataList.filter(dato =>// esto no elimina del arreglo pero si ejecuta la accion
    this.gitHubDataList = this.gitHubDataList.filter(dato =>// del objeto de tipo  gitHubDataList le hace un filtro 
      dato !== objGitHuBModel // compara el valor de dato que se obtenie en el click y regresa el valor si es diferente
    );  
  }

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}

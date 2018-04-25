import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // libreria para llamadas a servicios REST
import { Observable } from "rxjs/Rx";
import {GitHubModel  } from "../app/model/git-hub-model";

const _getUsersUrl = 'https://api.github.com/users';
//const _getUsersUrl = 'http://10.11.1.100:8080/users';// server de emergencia
@Injectable()
export class GitHubServiceMock {
    //private _getUsersUrl = 'https://api.github.com/users';
    constructor(private _httpClient: HttpClient){

    }

    getUserInfo(userName: string){
        let gitHubObj = new GitHubModel();
        gitHubObj.avatar_url= '';
        gitHubObj.login= userName;
        gitHubObj.name= 'Jonathan Zamora';
        gitHubObj.followers= 0;
        gitHubObj.following= 1;

        return Observable.of(gitHubObj)
                         .catch(this.handleError);
    }

    handleError(error: any){
        console.error(`Error: ${error}`);
        //return Observable.throw(error.json() != null ? error.json() : 'Server error' )
        return Observable.throw(error.json() || 'Server error' ); // esta notacion es como la de arriba con un if else
    }

}
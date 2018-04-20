import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private user: string = 'Admon';
    private password: string = 'admon';
    private status: string = 'Ok';

    getDatos(userR: string, passwordR: string){
        //console.log(userR);
        //console.log(passwordR);
        //if (userR === this.user && passwordR === this.password){
            //console.log(this.status);
            //return this.status;
        //}
        return (userR === this.user && passwordR === this.password ? this.status : 'Server error' ) //ejemplo en git-hub.service.ts
    }
}
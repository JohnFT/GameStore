import { Component } from '@angular/core';
import { ServiceLogin } from '../services/login.services';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],

})
export class PageLogin {
    constructor(private _service: ServiceLogin) {
        this._service.SignIn('nothing').then(res => {
            console.log(res);
        });
    }
}

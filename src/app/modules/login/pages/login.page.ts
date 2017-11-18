import { Component } from '@angular/core';
import { ServiceLogin } from '../services/login.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials } from '../interfaces/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '../../../shared';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],

})
export class PageLogin {
    public lForm: FormGroup;
    public alert: any = {
        status: false,
        message: '',
    }
    constructor(private _service: ServiceLogin,
        private _route: Router,
        private fb: FormBuilder) {
        this.lForm = fb.group({
            'username': [null, Validators.required],
            'password': [null, Validators.required],
        });
    }
    public signIn(form: any): void {
        console.log(form);
        this._service.SignIn(form)
            .then((res: Response) => {
                if (res.status === 200) {
                    localStorage.setItem('store:user', JSON.stringify(res.data));
                    this._route.navigate(['home']);
                } else {
                    this.alert.status = true;
                    this.alert.message = res.message;
                    this.alert.type = 'alert-danger';
                    this.alert.title = 'Error! ';
                    setTimeout(() => this.alert.status = false, 30000);
                }
            });
    }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '../../../../shared';
import { ServicesSigUp } from '../../services/signup.services';
@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class PageRegister {
    public rForm: FormGroup;
    public alert:any = {
        status: false,
        message: ''
    }

    constructor(private fb: FormBuilder, private _service: ServicesSigUp) {
        this.rForm = fb.group({
            'use_name': [null, Validators.required],
            'use_firstname': [null, Validators.required],
            'use_lastname': [null, Validators.required],
            'use_pass': [null, Validators.required],
            'confirm': [null, Validators.required],
        });
    }
    public signUp(form: any): void {
        console.log(form);
        this._service.signUp(form).then((res: Response) => {
            if (res.status === 200) {
                this.alert.status = true;
                this.alert.type =  'alert-info';
                this.alert.title = 'Correcto ! ';
                this.alert.message = res.message;
            }else{
                this.alert.status = true;
                this.alert.type =  'alert-danger';
                this.alert.title = 'Error ! ';
                this.alert.message = res.message;
            }
            setTimeout(() => this.alert.status = false, 10000)
        });
    }
}
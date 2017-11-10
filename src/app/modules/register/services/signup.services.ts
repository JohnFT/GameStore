import { Injectable } from '@angular/core';
import { ConfigService } from '../../../services/config.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicesSigUp {
    constructor(private _config: ConfigService, private _http: Http) { }

    async signUp(user: any): Promise<any> {
        const data = {
            use_firstname: user.use_firstname,
            use_lastname: user.use_lastname,
            use_name: user.use_name,
            use_pass: user.use_pass
        }
        const response = await this._http.post(this._config.config.urlServices + 'signup', data).toPromise();
        return response.json();

    }
}
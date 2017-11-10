import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../../services/config.service';
import 'rxjs/add/operator/toPromise';
import { Credentials } from '../interfaces/login';

@Injectable()
export class ServiceLogin {
    constructor(private _http: Http, private _configService: ConfigService) { }

    async SignIn(credentials: Credentials): Promise<any> {
        const response = await this._http.post(this._configService.config.urlServices + 'User', credentials).toPromise();
        return response.json();
    }
}

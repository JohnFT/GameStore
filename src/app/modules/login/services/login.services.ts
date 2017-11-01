import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../../services/config.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceLogin {
    constructor(private _http: Http, private _configService: ConfigService) { }

    async SignIn(credentials: any): Promise<any> {
        const response = await this._http.get(this._configService.config.urlServices + 'User').toPromise();
        return response.json();
    }
}

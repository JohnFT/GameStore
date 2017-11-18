import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../../services/config.service';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ServiceMyGames {
    constructor(private _http: Http, private _config: ConfigService) { }

    async getMyGames(use_code: number): Promise<any> {
        const resp = await this._http.get(this._config.config.urlServices + 'my-games/' + use_code).toPromise();
        return resp.json();
    }
}
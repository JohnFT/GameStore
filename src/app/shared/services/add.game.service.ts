import { Injectable } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import 'rxjs/add/operator/toPromise'
import { Http } from '@angular/http';
@Injectable()
export class ServiceGame {
    constructor(private _config: ConfigService, private _http: Http) { }

    async addGame(game: any): Promise<any> {
        const response = await this._http.post(this._config.config.urlServices + 'game', game).toPromise();
        return response.json();
    }

    async get(): Promise<any> {
        const response = await this._http.get(this._config.config.urlServices + 'game').toPromise();
        return response.json();
    }

    async buy(pay:any): Promise<any> {
        const response = await this._http.post(this._config.config.urlServices + 'pay', pay).toPromise();
        return response.json();
    }
}
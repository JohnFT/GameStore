import { Injectable, ReflectiveInjector } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Config } from '../interfaces/config';
import { CONFIG_FILE_NAME } from '../core/globals';

@Injectable()
export class ConfigService {

    public get config(): Config {
        const obj = localStorage.getItem(CONFIG_FILE_NAME);
        return JSON.parse(obj);
    }

    constructor(private _http: Http) {
        this.getAppSettings = this.getAppSettings.bind(this);
    }

    getAppSettings(): Promise<void> {
        const observable = this._http.get('assets/config/config.json')
            .map(response => response.json());

        observable.subscribe(res => {
            localStorage.setItem(CONFIG_FILE_NAME, JSON.stringify(res))
        });
        return observable.toPromise();
    }
}
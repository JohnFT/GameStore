import { Component, OnInit } from '@angular/core';
import { ServiceGame, Response } from '../../../shared';
import { CurrencyPipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceMyGames } from '../services/my.games.service';

@Component({
    selector: 'app-mi-games',
    templateUrl: './mi.game.page.html',
    styleUrls: ['./mi.game.page.scss'],
})
export class PageMiGames implements OnInit {
    private user;
    public games;
    constructor(private _service: ServiceMyGames) {

    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('store:user'));
        this._service.getMyGames(this.user.use_code).then(res => {
            if (res.status === 200) {
                console.log(res.data);
                this.games = res.data;
            }
        });
    }

}
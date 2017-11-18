import { Component, OnInit } from '@angular/core';
import { ServiceGame, Response } from '../../../../shared';
import { CurrencyPipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class PageHome implements OnInit {
    public hForm: FormGroup;
    public games: any = [];
    public user;
    public value;
    public qr = false;
    public alert: any = {
        status: false,
        message: ''
    }

    constructor(private _service: ServiceGame, private fb: FormBuilder) {
        this.hForm = fb.group({
            'pay_card': [null, Validators.required],
            'pay_security': [null, Validators.required],
            'pay_dateend': [null, Validators.required],
        });
        this.user = JSON.parse(localStorage.getItem('store:user'));
    }
    public showPopup: boolean = false;
    public buy: any = {
        pay: { pay_card: '', pay_security: '', pay_dateend: '' }
    };

    ngOnInit(): void {
        this.getGames();
    }

    getGames() {
        this._service.get().then((res: Response) => {
            if (res.status === 200) {
                console.log(res.data);
                this.games = res.data;
            }
        })
    }

    public buyGame(game) {
        this.buy.game = game;
        this.showPopup = true;
    }
    public hiddenPopup() {
        this.showPopup = false;
    }
    public hiddenQr() {
        this.qr = false;
    }

    public pay(pay) {
        pay.use_code = this.user.use_code;
        pay.pay_price = this.buy.game.gam_price;
        pay.pay_game = this.buy.game.gam_code;
        pay.pay_dateend = new Date(pay.pay_dateend);
        this._service.buy(pay).then(res => {
            if (res.status === 200) {
                this.alert.status = true;
                this.alert.type = 'alert-info';
                this.alert.title = 'Correcto ! ';
                this.alert.message = res.message;
                this.value = '' + res.data.pay_code;
                this.qr = true;
                this.hiddenPopup();
                this.getGames();

            } else {
                this.alert.status = true;
                this.alert.type = 'alert-danger';
                this.alert.title = 'Error ! ';
                this.alert.message = res.message;
            }
            setTimeout(() => this.alert.status = false, 10000)
        });
    }
}
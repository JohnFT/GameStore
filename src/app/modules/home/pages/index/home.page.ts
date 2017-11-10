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
    constructor(private _service: ServiceGame, private fb: FormBuilder) {
        this.hForm = fb.group({
            'pay_card': [null, Validators.required],
            'pay_security': [null, Validators.required],
            'pay_dateend': [null, Validators.required],
        });
     }
    public showPopup: boolean = false;
    public buy: any = {
        pay: { pay_card: '', pay_security: '', pay_dateend: '' }
    };

    ngOnInit(): void {
        this._service.get().then((res: Response) => {
            if (res.status === 200) {
                this.games = res.data;
            }
        })
    }

    public buyGame(game) {
        this.buy.game = game;
        this.showPopup = true;
    }
    public hiddenPopup(){
        this.showPopup = false;
    }

    public pay(pay){
        this._service.buy(pay).then(res =>{
            console.log(res);
        });
    }
}
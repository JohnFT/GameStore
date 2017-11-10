import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceGame } from '../../../../shared';
@Component({
    selector: 'app-add-game',
    templateUrl: './add.game.page.html',
    styleUrls: ['./add.game.page.scss']
})
export class PageAddGame {
    public aForm: FormGroup;
    public imgname: any = '../assets/images/camera.jpg';
    public alert: any = {
        status: false,
        message: ''
    }

    constructor(private fb: FormBuilder
        , private _service: ServiceGame) {
        this.aForm = fb.group({
            'gam_name': [null, Validators.required],
            'gam_price': [null, Validators.required],
            'game_detail': [null, Validators.required],
            'game_unity': [null, Validators.required],
            'game_image': [null, Validators.required]
        })
    }

    public add(form): void {
        this._service.addGame(form).then(res => {
            if (res.status === 200) {
                this.alert.status = true;
                this.alert.type = 'alert-info';
                this.alert.title = 'Correcto ! ';
                this.alert.message = res.message;
            } else {
                this.alert.status = true;
                this.alert.type = 'alert-danger';
                this.alert.title = 'Error ! ';
                this.alert.message = res.message;
            }
            setTimeout(() => this.alert.status = false, 10000)
        })
    }

    fileChange($event) {
        const file = $event.target.files[0];
        this.getBase64(file).then(
            data => {
                this.imgname = data;
                this.aForm.controls['game_image'].setValue(data);
            }
        );
    }

    private getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

}
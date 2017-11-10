import { Component } from '@angular/core';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class ComponentMenu {
    public isMenu: boolean = false;
    public toggleMenu(): void {
        this.isMenu = !this.isMenu;
    }
}
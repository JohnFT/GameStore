import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ComponentMenu } from './components/menu/menu.component';
import { ComponentAlert } from './components/alert/alert.component';
// Services
import { ServiceGame } from './services/add.game.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentMenu,
    ComponentAlert
  ],
  exports: [
    ComponentMenu,
    ComponentAlert
  ],
  providers: [
    ServiceGame
  ]
})
export class SharedModule { }

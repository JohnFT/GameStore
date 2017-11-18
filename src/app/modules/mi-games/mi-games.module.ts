import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxQRCodeModule } from 'ngx-qrcode3';
import { SharedModule } from '../../shared/shared.module';
import { PageMiGames } from './pages/mi.game.page';
import { ServiceMyGames } from './services/my.games.service';
const route: Routes = [
  { path: '', component: PageMiGames },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgbModule.forRoot(),
    NgxQRCodeModule,
    SharedModule
  ],
  declarations: [
    PageMiGames
  ],
  providers: [
    ServiceMyGames
  ]
})
export class MiGamesModule { }

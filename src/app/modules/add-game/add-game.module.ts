import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { PageAddGame } from './pages/index/add.game.page';


// Modules
import { SharedModule } from '../../shared/shared.module';

// Routes
const route: Routes = [
  { path: '', component: PageAddGame },
  { path: '**', pathMatch: 'full', redirectTo: '' }

]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    NgbModule.forRoot(),
    SharedModule,


  ],
  declarations: [
    PageAddGame
  ]
})
export class AddGameModule { }

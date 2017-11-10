import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Pages
import { PageHome } from './pages/index/home.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modules
import { SharedModule } from '../../shared/shared.module';

// Routes
const route: Routes = [
  { path: '', component: PageHome },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    PageHome
  ]
})
export class HomeModule { }

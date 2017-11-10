import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
// Services
import { ServicesSigUp } from './services/signup.services';
// Pages
import { PageRegister } from './pages/index/register.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../../shared';
// Routes
const route: Routes = [
  { path: '', component: PageRegister },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    NgbModule.forRoot(),
    SharedModule
  ],
  declarations: [
    PageRegister
  ],
  providers: [
    ServicesSigUp
  ]
})
export class RegisterModule { }

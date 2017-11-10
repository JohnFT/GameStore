import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Services
import { ServiceLogin } from './services/login.services';
import { SharedModule } from '../../shared'
// Page
import { PageLogin } from './pages/login.page';
const routes: Routes = [
  { path: '', component: PageLogin },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot(),
    SharedModule
  ],
  declarations: [
    PageLogin
  ],
  providers: [
    ServiceLogin,
  ]
})
export class LoginModule { }

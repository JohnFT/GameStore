import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
// Services
import { ServiceLogin } from './services/login.services';

// Page
import { PageLogin } from './page/login.page';
const routes: Routes = [
  { path: '', component: PageLogin },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot()
  ],
  declarations: [
    PageLogin
  ],
  providers: [
    ServiceLogin
  ]
})
export class LoginModule { }

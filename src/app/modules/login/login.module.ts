import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule, MatButtonModule, MatIcon, MAT_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';
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
    NgbModule.forRoot(),
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    PageLogin
  ],
  providers: [
    ServiceLogin,
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class LoginModule { }

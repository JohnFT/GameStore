import { RouterModule, Routes } from '@angular/router';
import { AppSettingService } from './services/app.setting.services';

const APP_ROUTES: Routes = [
    { path: '', loadChildren: './modules/login/login.module#LoginModule', canActivate: [AppSettingService] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

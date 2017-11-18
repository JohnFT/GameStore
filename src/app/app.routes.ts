import { RouterModule, Routes } from '@angular/router';
import { AppSettingService } from './services/app.setting.services';

const APP_ROUTES: Routes = [
    { path: '', loadChildren: './modules/login/login.module#LoginModule', canActivate: [AppSettingService] },
    { path: 'signup', loadChildren: './modules/register/register.module#RegisterModule', canActivate: [AppSettingService] },
    { path: 'home', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AppSettingService] },
    { path: 'add-game', loadChildren: './modules/add-game/add-game.module#AddGameModule', canActivate: [AppSettingService] },
    { path: 'my-games', loadChildren: './modules/mi-games/mi-games.module#MiGamesModule', canActivate: [AppSettingService] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

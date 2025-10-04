import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';

import { AuthGuard } from './services/auth-guard';
import { GameList } from './pages/list/list';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'main', component: Main},
  { path: 'profile', component: Profile, canActivate: [AuthGuard] },
  { path: 'list', component: GameList, canActivate: [AuthGuard] },
  { path: 'pagenotfound', component: Pagenotfound},
];
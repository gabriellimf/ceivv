import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path : 'register', redirectTo : 'register', pathMatch : 'full' },
  { path : 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path : 'login', redirectTo : 'login', pathMatch : 'full' },
  { path : 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'che-pirata-sei',
    loadChildren: () =>
      import('./pages/che-pirata-sei/che-pirata-sei.module').then(
        (m) => m.ChePirataSeiModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
    canActivate: [UserGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/log-in/log-in.module').then((m) => m.LogInModule),
    canActivate: [UserGuard],
  },
  { path: 'customize', loadChildren: () => import('./pages/customize/customize.module').then(m => m.CustomizeModule) },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { SecretComponent } from './secret.component';
import { AuthGuard } from '../lib';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [AuthGuard]
  }
];


// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

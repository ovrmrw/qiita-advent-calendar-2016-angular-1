import { NgModule } from '@angular/core';
import { AUTH_PROVIDERS } from 'angular2-jwt';


import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  providers: [
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard,
  ],
})
export class LibModule { }

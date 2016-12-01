import { Component } from '@angular/core';
import { AuthService } from '../lib';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>  
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">(Auth0 - Angular 2)</a>
      <ul class="nav navbar-nav">
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" [routerLink]="['/welcome']">Welcome</a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" [routerLink]="['/secret']">Secret</a>
        </li>
      </ul>
      <div class="float-xs-right">
        <button class="btn btn-outline-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
        <button class="btn btn-outline-danger btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(
    private auth: AuthService,
  ) { }

}

import { Component } from '@angular/core';
import { AuthService } from '../lib';


@Component({
  selector: 'app-welcome',
  template: `
    <h2>Welcome Page</h2>
    <div>{{loginState()}}</div>
  `
})
export class WelcomeComponent {
  constructor(
    private auth: AuthService,
  ) { }


  loginState(): string {
    if (this.auth.authenticated()) {
      return 'ログインしています。';
    } else {
      return 'ログインしていません。';
    }
  }

}

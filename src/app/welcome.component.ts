import { Component } from '@angular/core';
import { AuthService } from '../lib';


@Component({
  selector: 'app-welcome',
  template: `
    <h2>Welcome Page</h2>
  `
})
export class WelcomeComponent {
  constructor(
    private auth: AuthService,
  ) { }

}

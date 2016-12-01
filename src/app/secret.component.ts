import { Component } from '@angular/core';
import { AuthService } from '../lib';


@Component({
  selector: 'app-secret',
  template: `
    <h2>Secret Page</h2>
    <hr />
    <pre>{{auth.userProfile | json}}</pre>
  `
})
export class SecretComponent {
  constructor(
    private auth: AuthService,
  ) { }

}

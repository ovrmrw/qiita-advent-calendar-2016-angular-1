import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';


const AUTH0_CLIENT_ID = 'gPSncl3GOKHcqgWvb9shxJC6hgIcAxNk';
const AUTH0_DOMAIN = 'ovrmrw.auth0.com';
const auth0Options = {
  auth: {
    redirect: false
  },
  autoclose: true
};


@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, auth0Options);

  // Store profile object in auth class
  userProfile: Object;


  constructor(
    private router: Router,
  ) {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for the Lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;

        this.router.navigate(['/secret']);
      });
    });
  }


  login() {
    // Call the show method to display the widget.
    this.lock.show();
  };


  authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };


  logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;

    this.router.navigate(['/welcome']);
  };
}

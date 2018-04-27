import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate {
  // interface Resolve 

  constructor() { }
  
  canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(destination.component);
    return this.checkIfLoggedIn();
  }

  private checkIfLoggedIn(): boolean {
    let loggedIn: boolean = Math.random() < 0.5;
    if(!loggedIn) {
      console.log("LoginGuard: The user is not logged in and can not navigate product details." );
    }
    return loggedIn;
  }
}

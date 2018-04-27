import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';

@Injectable()
export class UnsaveChangesGuardService {

  constructor(private router: Router) { }

  canDeactivate() {
    return window.confirm("You have unsave changes. Still want to leave?");
  }

}

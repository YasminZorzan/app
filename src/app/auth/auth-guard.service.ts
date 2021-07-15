import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    return this.validaAutenticado();
  }

  canActivateChild(): boolean {
    return this.validaAutenticado();
  }

  validaAutenticado(): boolean {
    if (!this.auth.isAuthenticated() ||
        !this.auth.getCurrentUser()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

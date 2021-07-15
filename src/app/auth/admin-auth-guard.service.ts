import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AdminAuthGuardService implements CanActivate, CanActivateChild {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.validaAdmin();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.validaAdmin();
  }

  validaAdmin(): boolean {
    if (!this.auth.isAuthenticated() ||
        !this.auth.getCurrentUser() ||
        this.auth.getCurrentUser()?.roles.indexOf('Administrador') === -1) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

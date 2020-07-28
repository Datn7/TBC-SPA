import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _alertify: AlertifyService
  ) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token != null) {
      return true;
    }

    this._alertify.error('ტვინი არ მოტყნა :D');
    this._router.navigate(['/home']);
  }
}

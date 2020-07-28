import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  model: any = {};

  constructor(
    private _authService: AuthService,
    private _alertify: AlertifyService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this._authService.login(this.model).subscribe(
      (next) => {
        this._alertify.success('შეხვედი');
        console.log('წარმატებით შეხვედი');
      },
      (error) => {
        this._alertify.error(error);
        console.log('ვერა');
      },
      () => {
        this._router.navigate(['/list']);
      }
    );

    console.log(this.model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this._alertify.message('გახვედი');
    console.log('გახვედი სისტემიდან');
  }
}

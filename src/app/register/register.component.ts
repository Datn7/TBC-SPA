import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private _authservice: AuthService,
    private _alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  register() {
    this._authservice.register(this.model).subscribe(
      () => {
        this._alertify.success('შეიქმნა');
        console.log('წარმატებით გაიარეთ რეგისტაცია');
      },
      (error) => {
        this._alertify.error(error);
        console.log(error);
      }
    );
  }

  cancel() {
    console.log('წააჯვი უკან');
  }
}

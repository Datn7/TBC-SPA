import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../data/user';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      gender: new FormControl(),
      city: new FormControl(),
      date: new FormControl(),
      agree: new FormControl(true),
      idNumber: new FormControl(),
    });
  }

  saveUser() {
    console.log(this.userForm);
  }
}

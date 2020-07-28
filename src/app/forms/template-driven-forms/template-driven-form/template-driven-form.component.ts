import { Component, OnInit } from '@angular/core';
import { User } from '../../data/user';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  originalUser: User = {
    name: null,
    surname: null,
    gender: null,
    city: null,
    date: null,
    agree: null,
  };

  birthDay: Date;
  user: User = { ...this.originalUser };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.birthDay = new Date();
  }

  onSubmit(form: NgForm) {
    this.dataService.postUserForm(this.user).subscribe(
      (result) => console.log('succ', result),
      (error) => console.log('error', error)
    );
  }

  onBlur(field: NgModel) {}
}

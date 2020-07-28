import { Component, OnInit } from '@angular/core';
import { PersonService } from '../_services/person.service';

@Component({
	selector: 'app-edit-person',
	templateUrl: './edit-person.component.html',
	styleUrls: [ './edit-person.component.css' ]
})
export class EditPersonComponent implements OnInit {
	person: any = {};

	constructor(private _personService: PersonService) {}

	ngOnInit(): void {}

	addPerson() {
		this._personService.addPerson(this.person);
		console.log(this.person);
	}
}

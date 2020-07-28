import { Component, OnInit } from '@angular/core';
import { PhysicalPersonService } from '../physical-person.service';
import { HttpClient } from '@angular/common/http';
import { PersonService } from '../_services/person.service';

@Component({
	selector: 'app-physical-person',
	templateUrl: './physical-person.component.html',
	styleUrls: [ './physical-person.component.css' ]
})
export class PhysicalPersonComponent implements OnInit {
	constructor(private _pService: PersonService, private _http: HttpClient) {}

	weathers: any;

	ppersons: any = {};
	public result: any;

	async ngOnInit() {
		await this.getPersons();
	}

	async getPersons() {
		this.result = await this._pService.getPersons();
		const number = 1;
	}
}

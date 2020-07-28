import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PersonService {
	constructor(private _http: HttpClient) {}

	addPerson(person: any) {
		this._http.post('http://localhost:5000/api/PPersons', person).subscribe(() => {
			console.log('added');
		});
	}

	async  getPersons(): Promise<any> {
		return this._http.get('http://localhost:5000/api/PPersons').toPromise();
	}
}

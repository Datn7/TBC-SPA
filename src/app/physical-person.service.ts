import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PhysicalPersonService {
	baseUrl = 'http://localhost:5000/api/';

	constructor(private _http: HttpClient) {}
}

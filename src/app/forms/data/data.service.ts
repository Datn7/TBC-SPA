import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  postUserForm(user: User): Observable<User> {
    return of(user);
  }

  postUserFormHTTP(user: User): Observable<any> {
    return this._http.post('url', user);
  }
}

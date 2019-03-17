import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {User} from '../models/user';

import {baseUrl, httpOption} from './../models/user';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    if (!sessionStorage.getItem('user')) {
      this.http.get<User>(`${baseUrl}/user`, httpOption).subscribe((res) => {
        sessionStorage.setItem('user', JSON.stringify(res));
      });

      return this.http.get<User>(`${baseUrl}/user`, httpOption);
    }

    return of(JSON.parse(sessionStorage.getItem('user')) as User);
  }
}

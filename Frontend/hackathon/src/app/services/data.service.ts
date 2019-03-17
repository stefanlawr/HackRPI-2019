import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {handleError, User} from '../models/user';

import {baseUrl, httpOption} from './../models/user';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private http: HttpClient) {}

  // TODO: Pass userID to get_user instead of hardcoded number
  // getUser(): Observable<User> {
  //   return this.http
  //     .get<User>(`${baseUrl}/get_user/5`, httpOption)
  //     .pipe(catchError(handleError('DATA: getUser()', {} as User)));
  // }
  getUser(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/get_user/5`, httpOption);
  }
}

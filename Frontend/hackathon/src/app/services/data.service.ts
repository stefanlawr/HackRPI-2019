import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { baseUrl, httpOption } from './../models/user';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  // TODO: Pass userID to get_user instead of hardcoded number
  getUser(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/get_user/5`, httpOption);
  }
}

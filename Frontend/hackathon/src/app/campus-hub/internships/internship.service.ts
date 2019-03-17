import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {baseUrl, httpOption} from 'src/app/models/user';

@Injectable({providedIn: 'root'})
export class InternshipService {
  constructor(private http: HttpClient) {}

  // TODO: Pass eventIds to get_user instead of hardcoded number
  getInternships(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/campus/1/internships`, httpOption);
  }
}

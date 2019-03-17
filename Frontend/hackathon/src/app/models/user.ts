import {HttpHeaders} from '@angular/common/http';

export const baseUrl = 'http://localhost:8080/';

export const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'applications/json'})
};

export interface User {
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  schoolId?: string;
}

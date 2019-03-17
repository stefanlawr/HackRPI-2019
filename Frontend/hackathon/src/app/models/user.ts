import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export const baseUrl = 'http://localhost:5000/';

export const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'applications/json' })
};

export interface User {
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  schoolId?: string;
}

export function handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.error(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

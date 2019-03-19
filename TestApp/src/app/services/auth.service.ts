import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };
// const apiUrl = "/api";


@Injectable()
export class AuthService {
  configUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = `${this.configUrl}/${username}/${password}`;

    return this.http.get<any>(url)
      .pipe(map(result => {
        if (result) {
          localStorage.setItem('currentUser', JSON.stringify(result));
          console.log('login good', result);
        } else {
          console.log('login error', result);
        }

        return result;
      }));
  }
  sendLogin(username: string) {
    localStorage.setItem('currentUser', username);
  }
  getLogin() {
    console.log(localStorage.getItem('currentUser'));
    return localStorage.getItem('currentUser');
  }
  isLoggednIn() {
    return this.getLogin() !== null;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  register(data): Observable<any> {
    console.log('register data', data);

    return this.http.post(this.configUrl, data)
      .pipe(
        catchError(this.handleError)
      );
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { State } from '../../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = 'http://localhost:9566/api';

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  addState(state: State): Observable<State> {
    const headers = this.createHeaders();
    return this.http.post<State>(`${this.apiUrl}/state/post`, state, { headers })
      .pipe(catchError(this.handleError));
  }

  getAllStates(): Observable<State[]> {
    const headers = this.createHeaders();
    return this.http.get<State[]>(`${this.apiUrl}/states`, { headers })
      .pipe(catchError(this.handleError));
  }

  getStateById(stateId: string): Observable<State> {
    const headers = this.createHeaders();
    return this.http.get<State>(`${this.apiUrl}/state/statename/${stateId}`, { headers })
      .pipe(catchError(this.handleError));
  }

  updateStateName(id: string, stateName: string): Observable<State> {
    const headers = this.createHeaders();
    stateName = stateName.toUpperCase();
    return this.http.put<State>(`${this.apiUrl}/state/${id}`, stateName, { headers })
      .pipe(catchError(this.handleError));
}

  // updateStateName(id: string, stateName: string): Observable<State> {
  //   const headers = this.createHeaders();
  //   return this.http.put<State>(`${this.apiUrl}/state/${id}`, { stateName }, { headers })
  //     .pipe(catchError(this.handleError));
  // }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

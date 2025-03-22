import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { Users } from '../../model/users';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:9566/api/users';
 
  constructor(private http: HttpClient) {}
 
  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
 
  addUser(user: Users): Observable<Users> {
    const headers = this.createHeaders();
    return this.http.post<Users>(`${this.apiUrl}/post`, user, { headers })
      .pipe(catchError(this.handleError));
  }
 
  getAllUsers(): Observable<Users[]> {
    const headers = this.createHeaders();
    return this.http.get<Users[]>(`${this.apiUrl}`, { headers })
      .pipe(catchError(this.handleError));
  }
 
  getUserById(userId: number): Observable<Users> {
    const headers = this.createHeaders();
    return this.http.get<Users>(`${this.apiUrl}/${userId}`, { headers })
      .pipe(catchError(this.handleError));
  }
 
  updateUserFirstname(userId: number, firstname: string): Observable<Users> {
    const headers = this.createHeaders();
    return this.http.put<Users>(`${this.apiUrl}/update/firstname/${userId}`, { firstname }, { headers })
      .pipe(catchError(this.handleError));
  }
 
  updateUserLastname(userId: number, lastname: string): Observable<Users> {
    const headers = this.createHeaders();
    return this.http.put<Users>(`${this.apiUrl}/update/lastname/${userId}`, { lastname }, { headers })
      .pipe(catchError(this.handleError));
  }
 
  updateUserPhonenumber(userId: number, phonenumber: string): Observable<Users> {
    const headers = this.createHeaders();
    return this.http.put<Users>(`${this.apiUrl}/update/phonenumber/${userId}`, { phonenumber }, { headers })
      .pipe(catchError(this.handleError));
  }
 
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
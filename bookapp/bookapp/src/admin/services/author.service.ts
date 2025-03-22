import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Author } from '../../model/author';
import { Book } from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:9566/api/author';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  getAuthorById(authorid: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${authorid}`).pipe(
      catchError(this.handleError)
    );
  }

  getAuthorByFirstName(firstname: string): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}/firstname/${firstname}`).pipe(
      catchError(this.handleError)
    );
  }

  getAuthorByLastName(lastname: string): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}/lastname/${lastname}`).pipe(
      catchError(this.handleError)
    );
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.apiUrl}/post`, author, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );
  }

  updateAuthorFirstName(authorid: number, firstname: string): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/update/firstname/${authorid}`, { firstname }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );
  }

  updateAuthorLastName(authorid: number, lastname: string): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/update/lastname/${authorid}`, { lastname }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );
  }

  updateAuthorPhoto(authorid: number, photo: string): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/update/photo/${authorid}`, { photo }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );
  }

  getBooksByAuthorId(authorid: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books/${authorid}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
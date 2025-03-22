import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookReview } from '../../model/bookreview';
 
@Injectable({
  providedIn: 'root'
})
export class BookReviewService {
  private apiUrl = 'http://localhost:9566/api/bookreview';
 
  constructor(private http: HttpClient) {}
 
  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
 
  addBookReview(bookReview: BookReview): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(`${this.apiUrl}/post`, bookReview, { headers })
      .pipe(catchError(this.handleError));
  }
 
  getAllReviewsByIsbn(isbn: string): Observable<BookReview[]> {
    const headers = this.createHeaders();
    return this.http.get<BookReview[]>(`${this.apiUrl}/${isbn}`, { headers })
      .pipe(catchError(this.handleError));
  }
 
  updateRating(isbn: string, rating: number): Observable<any> {
    const headers = this.createHeaders();
    return this.http.put(`${this.apiUrl}/update/rating/${isbn}`, { rating }, { headers })
      .pipe(catchError(this.handleError));
  }
 
  updateComments(isbn: string, comments: string): Observable<any> {
    const headers = this.createHeaders();
    return this.http.put(`${this.apiUrl}/${isbn}`, { comments }, { headers })
      .pipe(catchError(this.handleError));
  }
 
  getAllBookReviews(): Observable<BookReview[]> {
    const headers = this.createHeaders();
    return this.http.get<BookReview[]>(`${this.apiUrl}/all`, { headers })
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
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Reviewer } from '../../model/reviewer';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class ReviewerService {
//   private apiUrl = 'http://localhost:9566/api/reviewers';
 
//   constructor(private http: HttpClient) {}
 
//   private createHeaders(): HttpHeaders {
//     const token = localStorage.getItem('token');
//     return new HttpHeaders({
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     });
//   }
 
//   addReviewer(reviewer: Reviewer): Observable<any> {
//     const headers = this.createHeaders();
//     return this.http.post(`${this.apiUrl}/post`, reviewer, { headers })
//       .pipe(catchError(this.handleError));
//   }
 
//   getReviewerById(reviewerid: number): Observable<Reviewer> {
//     const headers = this.createHeaders();
//     return this.http.get<Reviewer>(`${this.apiUrl}/${reviewerid}`, { headers })
//       .pipe(catchError(this.handleError));
//   }
 
//   updateReviewerName(reviewerid: number, reviewerName: string): Observable<any> {
//     const url = `${this.apiUrl}/update/name/${reviewerid}`;
//     const body = { name: reviewerName };
//     return this.http.put(url, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
//       .pipe(catchError(this.handleError));
//   }
 
//   updateReviewerEmployedBy(reviewer: Reviewer): Observable<any> {
//     const url = `${this.apiUrl}/update/employedby/${reviewer.reviewerid}`;
//     return this.http.put(url, reviewer, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
//       .pipe(catchError(this.handleError));
//   }
 
//   private handleError(error: any): Observable<never> {
//     let errorMessage = 'Unknown error!';
//     if (error.error instanceof ErrorEvent) {
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//       if (error.status === 409) {
//         errorMessage = 'Reviewer already exists.';
//       }
//     }
//     console.error(errorMessage);
//     return throwError(errorMessage);
//   }
// }
 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reviewer } from '../../model/reviewer';
 
@Injectable({
  providedIn: 'root'
})
export class ReviewerService {
  private apiUrl = 'http://localhost:9566/api/reviewers';
 
  constructor(private http: HttpClient) {}
 
  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
 
  addReviewer(reviewer: Reviewer): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(`${this.apiUrl}/post`, reviewer, { headers })
      .pipe(catchError(this.handleError));
  }
 
  getReviewerById(reviewerid: number): Observable<Reviewer> {
    const headers = this.createHeaders();
    return this.http.get<Reviewer>(`${this.apiUrl}/${reviewerid}`, { headers })
      .pipe(catchError(this.handleError));
  }
 
  // updateReviewerName(reviewerid: number, reviewerName: string): Observable<any> {
  //   const url = `${this.apiUrl}/update/name/${reviewerid}`;
  //   const body = { name: reviewerName };
  //   return this.http.put(url, body, { headers: this.createHeaders() })
  //     .pipe(catchError(this.handleError));
  // }
  updateReviewerNameByReviewerId(reviewer: Reviewer): Observable<any> {
    const url = `${this.apiUrl}/update/name/${reviewer.reviewerid}`;
    return this.http.put(url, reviewer, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError(this.handleError));
}
 
  updateReviewerEmployedBy(reviewer: Reviewer): Observable<any> {
    const url = `${this.apiUrl}/update/employedby/${reviewer.reviewerid}`;
    return this.http.put(url, reviewer, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError(this.handleError));
  }
 
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (error.status === 409) {
        errorMessage = 'Reviewer already exists.';
      }
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookCondition } from '../../model/bookcondition';

@Injectable({
  providedIn: 'root'
})
export class BookconditionService {
  private apiUrl = 'http://localhost:9566/api/bookconditions'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getBookConditions(): Observable<BookCondition[]> {
    return this.http.get<BookCondition[]>(this.apiUrl);
  }
}
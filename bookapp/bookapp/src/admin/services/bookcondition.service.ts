import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookCondition } from '../../model/bookcondition';


@Injectable({
  providedIn: 'root'
})
export class BookconditionService {
  private apiUrl = 'http://localhost:9566/api/bookcondition';
 
  constructor(private http: HttpClient) { }
 
  addBookCondition(bookCondition: BookCondition): Observable<BookCondition> {
    return this.http.post<BookCondition>(`${this.apiUrl}/post`, bookCondition);
  }
 
  getBookConditionByRanks(ranks: number): Observable<BookCondition> {
    return this.http.get<BookCondition>(`${this.apiUrl}/update/price/${ranks}`);
  }
 
  updateFullDescription(ranks: number, full_description: string): Observable<BookCondition> {
    return this.http.put<BookCondition>(`${this.apiUrl}/update/full_description/${ranks}`, { full_description });
  }
 
  updateDescription(ranks: number, description: string): Observable<BookCondition> {
    return this.http.put<BookCondition>(`${this.apiUrl}/update/description/${ranks}`, { description });
  }
 
  updatePrice(ranks: number, price: number): Observable<BookCondition> {
    return this.http.put<BookCondition>(`${this.apiUrl}/update/price/${ranks}`, { price });
  }
}
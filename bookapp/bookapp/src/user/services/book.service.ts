import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../model/book';
 
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:9566/api';
 
  constructor(private http: HttpClient) {}
 
  addBook(book: Book): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/book/post`, book);
  }
 
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }
 
  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/${isbn}`);
  }
 
  getBooksByTitle(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/book/title/${title}`);
  }
 
  getBooksByCategory(category: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/book/category/${category}`);
  }
 
  getBooksByPublisherid(publisherid: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/book/publisherid/${publisherid}`);
  }
 
  updateBookTitle(isbn: string, title: string): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/book/update/title/${isbn}`, { title });
  }
 
  updateBookDescription(isbn: string, description: string): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/book/update/description/${isbn}`, { description });
  }
 
  updateBookCategory(isbn: string, category: number): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/book/update/category/${isbn}`, { category });
  }
 
  updateBookEdition(isbn: string, edition: string): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/book/update/edition/${isbn}`, { edition });
  }
 
  updateBookPublisherid(isbn: string, publisherid: number): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/book/update/publisherid/${isbn}`, { publisherid });
  }
}
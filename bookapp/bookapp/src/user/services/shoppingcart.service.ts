// services/shoppingcart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../model/shoppingcart';
import { Book } from '../../model/book';
 
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost:9566/api/shoppingcart';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
 
  constructor(private http: HttpClient) {}
 
  getShoppingCartsByUserId(userid: number): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(`${this.apiUrl}/${userid}`);
  }
 
  addShoppingCart(shoppingCart: ShoppingCart): Observable<any> {
    return this.http.post(`${this.apiUrl}/post`, shoppingCart, this.httpOptions);
  }
 
  // Modified to ensure proper headers and potentially different payload structure
  updateIsbn(userid: number, book: Book): Observable<any> {
    // Send only the book data as that's what the API expects
    return this.http.put(`${this.apiUrl}/${userid}`, book, this.httpOptions);
  }
}
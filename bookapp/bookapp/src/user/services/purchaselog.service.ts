 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PurchaseLog } from '../../model/purchaselog';
 
@Injectable({
  providedIn: 'root'
})
export class PurchaseLogService {
  private apiUrl = 'http://localhost:9566/api/purchaselog';
 
  constructor(private http: HttpClient) {}
 
  addPurchaseLog(purchaseLog: PurchaseLog): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(`${this.apiUrl}/post`, purchaseLog, { headers, responseType: 'text' }).pipe(
  map(response => {
    if (typeof response === 'string' && response.includes('Error')) {
      throw new Error(response);
    }
    return response;
  }),
  catchError(this.handleError)
);
}
 
getPurchaseLogByUserId(userId: number): Observable<PurchaseLog[]> {
return this.http.get<PurchaseLog[]>(`${this.apiUrl}/${userId}`).pipe(
  map(response => {
    if (Array.isArray(response) && response.length === 0) {
      throw new Error('No purchase logs found for the given user ID.');
    }
    return response;
  }),
  catchError(this.handleError)
);
}
 
updateInventoryId(userId: number, inventory: { inventoryid: number }): Observable<PurchaseLog> {
return this.http.put<PurchaseLog>(`${this.apiUrl}/update/inventoryid/${userId}`, inventory).pipe(
  map(response => {
    if (!response || response.inventory.inventoryid !== inventory.inventoryid) {
      throw new Error('Failed to update inventory ID.');
    }
    return response;
  }),
  catchError(this.handleError)
);
}
 
private handleError(error: HttpErrorResponse): Observable<never> {
console.error('An error occurred:', error);
return throwError(error.message || 'Something went wrong; please try again later.');
}
}
 
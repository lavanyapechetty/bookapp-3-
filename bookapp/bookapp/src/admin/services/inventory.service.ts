 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../../model/inventory';
 
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private baseUrl = 'http://localhost:9566/api/inventory';
 
  constructor(private http: HttpClient) {}
 
  getAllInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.baseUrl}/all`);
  }
 
  addInventory(inventory: Inventory): Observable<any> {
    return this.http.post(`${this.baseUrl}/post`, inventory);
  }
 
  updateInventory(inventoryId: number, inventory: Inventory): Observable<any> {
    return this.http.put(`${this.baseUrl}/${inventoryId}`, inventory);
  }
 
  getInventoryById(inventoryId: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.baseUrl}/update/purchased/${inventoryId}`);
  }
}
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../model/category';
 
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:9566/api/category';
 
  constructor(private http: HttpClient) {}
 
  addCategory(category: Category): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/post`, category);
  }
 
  getCategoryById(catid: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/update/description/${catid}`);
  }
 
  updateCategoryDescription(catid: number, catdescription: string): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${catid}`, { catdescription });
  }
 
  // Add new method to get all categories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/all`);
  }
}
 
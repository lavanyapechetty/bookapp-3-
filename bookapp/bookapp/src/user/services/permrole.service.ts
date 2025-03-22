 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permrole } from '../../model/permrole';
 
@Injectable({
  providedIn: 'root'
})
export class PermroleService {
  private baseUrl = 'http://localhost:9566/api/permrole';
 
  constructor(private http: HttpClient) {}
 
  getPermroles(): Observable<Permrole[]> {
    return this.http.get<Permrole[]>(`${this.baseUrl}/all`);
  }
 
  addPermrole(permrole: Permrole): Observable<any> {
    return this.http.post(`${this.baseUrl}/post`, permrole, { responseType: 'json' });
  }
 
  getPermroleByRolenumber(rolenumber: number): Observable<Permrole> {
    return this.http.get<Permrole>(`${this.baseUrl}/update/permrole/${rolenumber}`);
  }
 
  updatePermrole(rolenumber: number, permrole: Permrole): Observable<any> {
    return this.http.put(`${this.baseUrl}/${rolenumber}`, permrole);
  }
}
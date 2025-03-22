import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from '../../model/publisher';
import { State } from '../../model/state';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private baseUrl = 'http://localhost:9566/api';

  constructor(private http: HttpClient) {}

  getAllPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.baseUrl}/publishers`);
  }

  addPublisher(publisher: Publisher): Observable<any> {
    return this.http.post(`${this.baseUrl}/publisher/post`, publisher);
  }

  updatePublisherName(publisherId: number, newName: { name: string }): Observable<Publisher> {
    return this.http.put<Publisher>(`${this.baseUrl}/publisher/update/name/${publisherId}`, newName);
  }

  updatePublisherCity(publisherId: number, newCity: { city: string }): Observable<Publisher> {
    return this.http.put<Publisher>(`${this.baseUrl}/publisher/update/city/${publisherId}`, newCity);
  }

  updatePublisherState(publisherId: number, newState: { state: State }): Observable<Publisher> {
    return this.http.put<Publisher>(`${this.baseUrl}/publisher/update/state/${publisherId}`, newState);
  }
}
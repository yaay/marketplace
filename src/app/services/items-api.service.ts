import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsAPIService {

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get('https://dummyjson.com/products')
  }
}

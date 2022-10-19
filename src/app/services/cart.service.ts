import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { addProduct, Cart } from '../interfaces/cart.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000/cart';
  constructor(private http: HttpClient) {}

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.apiUrl);
  }

  addToCart(body: addProduct): Observable<addProduct> {
    return this.http.post<addProduct>(`${this.apiUrl}/add`, body);
  }
}

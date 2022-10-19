import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id: string | null): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }
}

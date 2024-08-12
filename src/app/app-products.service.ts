import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from './products';
import Productsjson from '../../public/products.json';
import { HttpClient } from '@angular/common/http';
import { IDummy } from './idummy';

@Injectable({
  providedIn: 'root',
})
export class AppProductsService {
  private apiUrl = 'https://dummyjson.com/products';

  private messageSource = new BehaviorSubject<Products[]>(Productsjson);
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }
  getProductsList() {
    return this.http.get<IDummy>('https://dummyjson.com/products');
  }
  getProductDetails(id: number) {
    return this.http.get<Products>(`https://dummyjson.com/products/${id}`);
  }
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: [Products]) {
    this.messageSource.next(message);
  }
}

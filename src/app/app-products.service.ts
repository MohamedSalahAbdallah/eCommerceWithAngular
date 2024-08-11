import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from './products';
import Productsjson from "../../public/products.json"

@Injectable({
  providedIn: 'root'
})
export class AppProductsService {
  private messageSource = new BehaviorSubject<Products[]>(
    Productsjson
  );
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: [Products]) {
    this.messageSource.next(message);
  }
}

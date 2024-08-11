import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from '../app/icart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: ICartItem[] = [];
  private cartSubject: BehaviorSubject<ICartItem[]> = new BehaviorSubject<
    ICartItem[]
  >([]);
  public cart$: Observable<ICartItem[]> = this.cartSubject.asObservable();

  constructor() {}

  addToCart(item: ICartItem) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.product.id === item.product.id
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== itemId
    );
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) =>
        total +
        (item.product.price -
          item.product.price * (item.product.discountPercentage / 100)) *
          item.quantity,
      0
    );
  }
}

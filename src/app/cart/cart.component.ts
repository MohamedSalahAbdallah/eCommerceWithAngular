import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartItem } from '../icart-item';
import { NgFor } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, DiscountPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: ICartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {
    this.totalPrice = Math.round(cartService.getTotalPrice());
  }

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeFromCart(item: ICartItem) {
    this.cartService.removeFromCart(item.product.id);

    this.totalPrice = Math.round(this.cartService.getTotalPrice());
  }

  counterIncrement(item: ICartItem) {
    if (item.quantity != item.product.stock) {
      item!.quantity++;
    }

    this.totalPrice = Math.round(this.cartService.getTotalPrice());
  }

  counterDecrement(item: ICartItem) {
    if (item.quantity == 1) {
      this.removeFromCart(item);
    }
    if (item.quantity > 1) {
      item.quantity--;
    }

    this.totalPrice = Math.round(this.cartService.getTotalPrice());
  }
}

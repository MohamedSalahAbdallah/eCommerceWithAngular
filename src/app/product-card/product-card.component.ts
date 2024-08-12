import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
import { AppProductsService } from '../app-products.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { ICartItem } from '../icart-item';
import { DiscountPipe } from '../discount.pipe';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { IDummy } from '../idummy';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  products: Products[] = [];
  cartItems: ICartItem[] = [];
  data!: IDummy;

  constructor(
    private prodserve: AppProductsService,
    private cartService: CartService
  ) {
    // this.prodserve.currentMessage.subscribe((products) => {
    //   this.products = products;
    // });
  }

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });
    this.prodserve.getProductsList().subscribe((data) => {
      this.data = data;
      console.log(this.data.products);
      this.products = this.data.products;
    });
  }

  addToCart(item: Products) {
    this.cartService.addToCart({
      product: item,
      quantity: 1,
    });
  }
}

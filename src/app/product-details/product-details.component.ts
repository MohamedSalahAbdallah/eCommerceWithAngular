import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { AppProductsService } from '../app-products.service';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../cart.service';
import { ICartItem } from '../icart-item';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  id: number;
  products?: Products;
  counter: number = 0;
  cartItems: ICartItem[] = [];
  constructor(
    private route: ActivatedRoute,
    private Productservice: AppProductsService,
    private cartServeice: CartService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.Productservice.currentMessage.subscribe((products) => {
      this.products = products[this.id - 1];
    });
    console.log(this.products);
  }

  counterIncrement(item?: Products) {
    if (item && this.counter < item.stock) {
      this.counter++;
    }
  }

  counterDecrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  addToCart(item: Products, quantity: number) {
    this.cartServeice.addToCart({
      product: item,
      quantity,
    });
  }
  ngOnInit() {
    this.cartServeice.cart$.subscribe((items) => {
      this.cartItems = items;
    });
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.product.id === this.products?.id
    );
    if (existingItem) {
      this.counter = existingItem.quantity;
    } else {
      this.counter = 0;
    }
  }
}

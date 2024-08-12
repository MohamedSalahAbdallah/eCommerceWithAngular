import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private cartService: CartService) {}

  counter: number = 0;
  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.counter = items.length;
    });
  }
}

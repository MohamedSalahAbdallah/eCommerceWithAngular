import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    if (!price || !discountPercentage) {
      return price;
    }

    const discount = (price * discountPercentage) / 100;
    return Math.round((price - discount) * 100) / 100;
  }
}

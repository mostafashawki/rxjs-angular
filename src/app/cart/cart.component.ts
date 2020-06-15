import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cart: CartService) { }

  currentCart: Observable<number> = this.cart.getCart();
  total: Observable<number> = this.cart.getCart().pipe(map(v => v * 100));

  addInCart(): void {
    this.cart.addCart();
  }

  removeFromCart(): void {
    this.cart.removeCart();
  }

  resetCart(): void {
    this.cart.resetCart();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private cart: CartService) { }

  currentCart: number;
  total = 0;
  subscription;

  ngOnInit(): void {
    this.subscription = this.cart.getCart().subscribe(
      res => {
        this.currentCart = res;
        this.total = this.currentCart * 100;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  addInCart(): void {
    this.cart.setCart(this.currentCart + 1);
  }

  removeFromCart(): void {
    if (this.currentCart > 0){
      this.cart.setCart(this.currentCart - 1);
    }

  }

  resetCart(): void {
    this.cart.resetCart();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

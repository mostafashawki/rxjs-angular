import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

interface Cart {
  value: number;
}

@Injectable()
export class CartService {

  constructor() { }

  private initialCount: Cart = {value: 0};
  private cartTracker = new BehaviorSubject<Cart>(this.initialCount);

  /** Allows subscription to the behavior subject as an observable */
  getCart(): Observable<Cart> {
    return this.cartTracker.asObservable();
  }

  /**
   * Allows updating the current value of the behavior subject
   * @param val a number representing the current value
   */
  setCart(val: number): void {
    this.cartTracker.next({value: val});
  }

  /** Resets the count to the initial value */
  resetCart(): void {
    this.cartTracker.next(this.initialCount);
  }
}

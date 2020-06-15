import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {

  constructor() { }

  private initialCount = 0;
  private cartTracker = new BehaviorSubject<number>(this.initialCount);

  /** Allows subscription to the behavior subject as an observable */
  getCart(): Observable<number> {
    return this.cartTracker.asObservable();
  }

  /**
   * Allows updating the current value of the behavior subject
   * @param val a number representing the current value
   */
  setCart(val: number): void {
    this.cartTracker.next(val);
  }

  /** Resets the count to the initial value */
  resetCart(): void {
    this.cartTracker.next(this.initialCount);
  }
}

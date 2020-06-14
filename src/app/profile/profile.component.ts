import { Component, OnInit, OnDestroy } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private cart: CartService) { }
  currentCart: number;
  subscription;

  ngOnInit(): void {
    this.subscription = this.cart.getCart().subscribe(
      res => {
        this.currentCart = res.value;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

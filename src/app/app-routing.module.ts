import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{ path: '', component: AppComponent},
{ path: 'profile', component: ProfileComponent },
{ path: 'cart', component: CartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

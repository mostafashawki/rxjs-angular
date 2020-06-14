import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'profile', component: ProfileComponent, pathMatch: 'full' },
{ path: 'cart', component: CartComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

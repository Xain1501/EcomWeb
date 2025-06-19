import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CartPage } from './pages/cart-page/cart-page';
import { Checkout } from './pages/checkout/checkout';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cart', component: CartPage },
  { path: 'checkout', component: Checkout },
  { path: '**', redirectTo: '' }
];

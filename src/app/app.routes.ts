import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CheckoutComponent } from './features/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

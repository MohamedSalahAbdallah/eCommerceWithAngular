import { Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductCardComponent,
    pathMatch: 'full',
    title: 'home',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
  },
  {
    path: 'product/:id',
    pathMatch: 'full',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

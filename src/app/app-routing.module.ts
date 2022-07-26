import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: CustomerLoginComponent},
  { path: 'admin/login', component: AdminLoginComponent},
  { path: 'signin', component:CustomerRegistrationComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'order', component: OrderComponent},
  { path: 'cart' , component:CartComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

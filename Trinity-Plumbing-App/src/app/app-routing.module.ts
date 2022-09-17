import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { StorePageComponent } from './pages/store-page/store-page.component';

const routes: Routes = [
  {path:'home', component: LandingPageComponent},
  {path:'cart', component: ShoppingCartComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegistrationComponent},
  {path: "adminRegister", component: AdminRegistrationComponent},
  {path: "store", component: StorePageComponent},
  { path: "", redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

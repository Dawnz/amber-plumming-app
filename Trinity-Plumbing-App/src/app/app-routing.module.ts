import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { StorePageComponent } from './pages/store-page/store-page.component';

const routes: Routes = [
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

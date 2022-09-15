import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StorePageComponent } from './components/store-page/store-page.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegistrationComponent},
  {path: "store", component: StorePageComponent},
  { path: "", redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

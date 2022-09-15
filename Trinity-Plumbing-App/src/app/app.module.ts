import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    StorePageComponent,
    SlideshowComponent,
    ShoppingCartComponent,
    NavBarComponent,
    FooterComponent,
    ItemBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';
import { StepperNavComponent } from './components/stepper-nav/stepper-nav.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator'; 

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
    LandingPageComponent,
    ProductDetailComponent,
    LandingPageComponent,
    AdminRegistrationComponent,
    ShippingInfoComponent,
    StepperNavComponent,
    ShippingComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

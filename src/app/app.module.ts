import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SellerComponent } from './components/seller/seller.component';
import { CartComponent } from './components/cart/cart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRouterModule } from './app.router.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ApplicationComponent } from './components/application/application.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StarsComponent } from './components/stars/stars.component';
import { App404Component } from './components/app404/app404.component';

import { ProductService } from './services/product.service';
import { LoginGuardService } from './services/login-guard.service';
import { UnsaveChangesGuardService } from './services/unsave-changes-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SellerComponent,
    CartComponent,
    SidebarComponent,
    SearchComponent,
    CarouselComponent,
    ApplicationComponent,
    FooterComponent,
    NavbarComponent,
    StarsComponent,
    App404Component,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ProductService,
    LoginGuardService,
    UnsaveChangesGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

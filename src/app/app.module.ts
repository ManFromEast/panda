import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './components/app/app.component';
import { ApplicationComponent } from './components/application/application.component';
import { AppRouterModule } from './app.router.module';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChatComponent } from './components/chat/chat.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SellerComponent } from './components/seller/seller.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { App404Component } from './components/app404/app404.component';

import { ProductService } from './services/product.service';
import { LoginGuardService } from './services/login-guard.service';
import { UnsaveChangesGuardService } from './services/unsave-changes-guard.service';
import { Temperature } from './pipes/temperature';
import { FilterPipe } from './pipes/filter-pipe';
import { PriceQuoterComponent } from './components/price-quoter/price-quoter.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    AboutComponent,
    ChatComponent,
    CartComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    LanguagesComponent,
    NavbarComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SellerComponent,
    SidebarComponent,
    SearchComponent,
    StarsComponent,
    Temperature,
    FilterPipe,
    App404Component,
    PriceQuoterComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
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

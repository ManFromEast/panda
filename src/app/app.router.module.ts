import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ChatComponent } from './components/chat/chat.component';
import { SellerComponent } from './components/seller/seller.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ApplicationComponent } from './components/application/application.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StarsComponent } from './components/stars/stars.component';
import { App404Component } from './components/app404/app404.component';

import { LoginGuardService } from './services/login-guard.service';
import { UnsaveChangesGuardService } from './services/unsave-changes-guard.service';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent, canActivate: [LoginGuardService] },
    { path: 'product-item', component: ProductItemComponent },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
        data: [{ isProd: true }],
        children: [{ path: 'seller/:id', component: SellerComponent }]
    },
    { path: 'chat', component: ChatComponent, outlet: "aux" },
    { path: 'cart', component: CartComponent, canDeactivate: [UnsaveChangesGuardService] },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'search', component: SearchComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'application', component: ApplicationComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'stars', component: StarsComponent },
    { path: '**', component: App404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }

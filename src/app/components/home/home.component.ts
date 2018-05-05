import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule, OnInit, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product.service';
import { Temperature } from '../../pipes/temperature';
import { FilterPipe } from '../../pipes/filter-pipe';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { IPriceQuote } from '../../interfaces/iprice-quote'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  searchInput: FormControl = new FormControl('');
  temperature: string;

  stockSymbol: string;
  price: number;

  constructor(private productService: ProductService, private http: Http) {
    this.products = this.productService.getProducts();
    console.log(this.titleFilter);
    this.titleFilter.valueChanges.debounceTime(300)
      .subscribe(
        value => this.filterCriteria = value,
        error => console.error(error)
      );
  }
  /*
  priceQuoteHandler(event: CustomEvent) {
    this.stockSymbol = event.detail.stockSymbol;
    this.price = event.detail.lastPrice;
  }
*/
  priceQuoteHandler(priceQuote: IPriceQuote) {
    this.stockSymbol = priceQuote.stockSymbol;
    this.price = priceQuote.lastPrice;
  }
  ngOnInit() {
  }

}

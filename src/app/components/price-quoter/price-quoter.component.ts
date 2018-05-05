import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { IPriceQuote } from '../../interfaces/iprice-quote';
//interface IPriceQuote {
//  stockSymbol: string;
 // lastPrice: number;
//}

@Component({
  selector: 'price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent implements OnInit {

  @Output('last-price') lastPrice: EventEmitter<IPriceQuote> = new EventEmitter();
  stockSymbol: string = "IBM";
  price: number;
  /*
    constructor(element: ElementRef) {
      setInterval(() => {
        let priceQuote: IPriceQuote = {
          stockSymbol: this.stockSymbol,
          lastPrice: 100 * Math.random()
        };
        this.price = priceQuote.lastPrice;
        element.nativeElement.dispatchEvent(new CustomEvent('last-price', {
          detail: priceQuote,
          bubbles: true
        }))
      }, 1000);
    }
  */

  constructor() {
    setInterval(() => {
      let priceQuote: IPriceQuote = {
        stockSymbol: this.stockSymbol,
        lastPrice: 100 * Math.random()
      };
      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
  }
  ngOnInit() {
  }

}

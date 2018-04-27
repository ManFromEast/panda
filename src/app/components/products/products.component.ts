import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

import { Product } from '../../models/product/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  public product: Product;
 // public productss: [];

  constructor(private router: Router) { }
  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data !== "null") {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Americao",
        description: "Americao Caffee",
        price: 2,
        bid: 2,
        imgUrl: "assets/xxx.png"
      },
      {
        id: 2,
        title: "Americao",
        description: "Americao Caffee",
        price: 20,
        bid: 20,
        imgUrl: "assets/xxx.png"
      },
      {
        id: 3,
        title: "Americao",
        description: "Americao Caffee",
        price: 30,
        bid: 3,
        imgUrl: "assets/xxx.png"
      },
      {
        id: 4,
        title: "Americao",
        description: "Americao Caffee",
        price: 40,
        bid: 40,
        imgUrl: "assets/xxx.png"
      },
      {
        id: 5,
        title: "Americao",
        description: "Americao Caffee",
        price: 50,
        bid: 50,
        imgUrl: "assets/xxx.png"
      },
      {
        id: 6,
        title: "Americao",
        description: "Americao Caffee",
        price: 60,
        bid: 60,
        imgUrl: "assets/xxx.png"
      },
      {
        id: 7,
        title: "Americao",
        description: "Americao Caffee",
        price: 70,
        bid: 70,
        imgUrl: "assets/xxx.png"
      }
    ];
  }

  addToCart(index: any) {
    console.log("index::" + index);
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }

  updateCartData(cartData: any) {
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  productTitle: string = "MAMA MIA";
  productPrice: number = 4;
  isProdEnvironment: boolean;

  constructor(private route: ActivatedRoute) {
    this.productId = route.snapshot.params["id"];
    this.isProdEnvironment = route.snapshot.data[0]['isProd'];
    console.log("this.isProdEnvironment = " + this.isProdEnvironment);
  }
  
  ngOnInit() {
  }

}
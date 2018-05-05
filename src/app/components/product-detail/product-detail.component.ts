import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product/product';
import { Review } from '../../models/product/review';
import { ProductService } from '../../services/product.service';
//import { modelGroupProvider } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  //reviews: Review[];

  constructor(route: ActivatedRoute, productService: ProductService) {
    let productId: number = parseInt(route.snapshot.params["productId"]);
    this.product = productService.getProductById(productId);
    //this.reviews = productService.getReviewsForProduct(this.product.id);
  }

  ngOnInit() {
  }

}
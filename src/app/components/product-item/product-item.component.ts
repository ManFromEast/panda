import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarsComponent } from '../stars/stars.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  productID: string;
  constructor(private route: ActivatedRoute) {
    // this.productID = route.snapshot.params('productId');
  }

  ngOnInit() {
  }

  //@Input() product: Product;

}
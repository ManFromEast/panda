import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product/product';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Review } from '../models/product/review';

@Injectable()
export class ProductService {

    getProducts(): Product[] {
        return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
    }

    getProductById(productId: number): Product {
        return products.find(p => p.id === productId);
    }

    getReviewsForProduct(productId: number): Review[] {

        return reviews
            .filter(r => r.productId === productId)
            .map(r => new Review(r.id, r.productId, r.timestamp,
                r.user, r.rating, r.comment));
        // return reviews.filter(r => r.productId === productId).map(r => new Review(r.id, r.productId, Date.parse(r.timestamp), r.user, r.rating, r.comment));
    }
}

var products = [
    {
        "id": 0,
        "title": "First Product",
        "price": 24.99,
        "rating": 4.3,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 1,
        "title": "Second Product",
        "price": 64.99,
        "rating": 3.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    }];

var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent..."
    },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent... "
    }];

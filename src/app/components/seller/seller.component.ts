import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  sellerId: string;
  constructor(private route: ActivatedRoute) {
    this.sellerId = route.snapshot.params['id'];
    console.log("The sellerId is " + this.sellerId);
  }

  ngOnInit() {
  }

}

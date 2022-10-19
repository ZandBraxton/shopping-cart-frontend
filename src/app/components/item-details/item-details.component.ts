import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  productId: string | null = '';
  product = {} as Product;
  quantity: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (data) => (this.product = data),
      error: (error) => console.log(error),
    });
  }

  incrementQuantity() {
    console.log('here');
    this.quantity += 1;
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }

  addToCart() {
    //add to cart
  }
}

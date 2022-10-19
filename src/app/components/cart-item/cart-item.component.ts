import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item = {} as CartItem;
  constructor() {}

  ngOnInit(): void {}
}

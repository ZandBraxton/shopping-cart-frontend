export interface Cart {
  items: [CartItem];
  subTotal: number;
}

export interface CartItem {
  productId: string;
  name: string;
  quantity: number;
  price: string;
  total: string;
}

export interface addProduct {
  productId: string;
  quantity: number;
}

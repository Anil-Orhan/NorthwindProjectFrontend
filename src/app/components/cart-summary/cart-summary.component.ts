import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems!: CartItem[];
  constructor(
    private cartService: CartService,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCart();
    console.log(this.cartItems);
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);

    this.toasterService.warning(product.productName, 'Sepetinizden Silindi!');
  }
  removeAllCart() {
    this.cartService.removeAllCart();
    this.toasterService.error('Sepet Boşaltıldı');
  }
}

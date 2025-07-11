import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-list.service';
import { ProductService } from '../../services/product-list.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    cartCount = 0;

    constructor(private cartService: CartService,
        private productService: ProductService
    ) { }

    ngOnInit() {
        this.getProducts()
    }

    addToCart(product: any) {
        this.cartService.addToCart(product);
        this.cartCount = this.cartService.getCart()?.length;
    }

    getProducts() {
        this.products = []
        this.productService.getProductList().subscribe(data => {
            this.products = data;
        });
    }
    openCart() {
    }
}
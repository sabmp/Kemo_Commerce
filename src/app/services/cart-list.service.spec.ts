import { TestBed } from '@angular/core/testing';
import { CartService } from './cart-list.service';

describe('CartService', () => {
    let service: CartService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CartService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize with an empty cart', () => {
        expect(service.getCart()).toEqual([]);
    });

    it('should add a product to the cart', () => {
        const mockProduct = { id: 1, name: 'Test Product', price: 100 };
        service.addToCart(mockProduct);
        expect(service.getCart()).toContain(mockProduct);
    });

    it('should add multiple products to the cart', () => {
        const product1 = { id: 1, price: 'Product 1', description: 'test product', title: 'ring' };
        const product2 = { id: 2, price: 'Product 2', description: 'test product', title: 'bag' };

        service.addToCart(product1);
        service.addToCart(product2);

        expect(service.getCart().length).toBe(2);
        expect(service.getCart()).toEqual([product1, product2]);
    });
});
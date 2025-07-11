export interface Product {
    id: number;
    description: string;
    price: number;
    image: string;
    title: string;
    rating?: { rate: string, count: string };
    category: string
}
export interface Product {
    id: string;
    name:string;
    price: number;
    inStock: boolean;
    category: string;
    tags?: string[];
};

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}
export interface Product {
    id: string;
    name:string;
    price: number;
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
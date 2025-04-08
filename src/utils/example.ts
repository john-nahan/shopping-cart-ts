// let age:number & string;
// let name:string = 'Nhan';
// let isGoodBoy:boolean = true;
// let array:number[] = [1, 2, 3];
// let person: {firstname:string, age:number, isGoodBoy:boolean} = {firstname: 'Nhan', age: 29, isGoodBoy: true}

interface Product {
    id: string;
    name:string;
    price: number;
    inStock: boolean;
    category: string;
};

const product: Product[] = [{
    id: 'ok',
    name: 'ok',
    price: 3,
    inStock: true,
    category: 'clothing'
}];



function calcTotal(products: Product[]): number {
    return products.reduce((acc, product) => {return acc + product.price}, 0);
};

console.log(calcTotal(product));
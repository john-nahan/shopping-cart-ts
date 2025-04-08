// let age:number & string;
// let name:string = 'Nhan';
// let isGoodBoy:boolean = true;
// let array:number[] = [1, 2, 3];
// let person: {firstname:string, age:number, isGoodBoy:boolean} = {firstname: 'Nhan', age: 29, isGoodBoy: true}
;
var product = [{
        id: 'ok',
        name: 'ok',
        price: 3,
        inStock: true,
        category: 'clothing'
    }];
function calcTotal(products) {
    return products.reduce(function (acc, product) { return acc + product.price; }, 0);
}
;
console.log(calcTotal(product));

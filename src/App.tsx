import "./App.css";
import { CartItem, Product } from "./types";
import { products } from "./data/products";

function App() {
  //const [count, setCount] = useState(0);

  const calcTotal = (products: Product[]): number => {
    return products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  };

  const getInStockProducts = (products: Product[]): Product[] => {
    return products.filter((p) => p.inStock);
  };

  const addToCart = (cart: CartItem[], product: Product): CartItem[] => {
    //let isExist: boolean = false;
    // cart.forEach((c) => {
    //   if (c.product.id === product.id) {
    //     c.quantity++;
    //     isExist = true;
    //   }
    // });
    const existingCartItem = cart.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      cart.push({
        product,
        quantity: 1,
      });
    }
    return cart;
  };

  return (
    <>
      <p>
        - Tạo file `types/index.ts`, khai báo `Product` and use "export" to
        export it
      </p>
      <p>
        - Tạo file `data/products.ts` và import interface, write calcTotal
        function and export it
      </p>
      <p>- Gọi `calcTotal(products)` trong `App.tsx` → log ra console</p>
      <p>
        - Thêm `tag?: string[]` và `category: Category` để làm phần nâng cao
      </p>
      {/* 17:33 | 21:33 */}
      Total:{calcTotal(products)}
      <br></br>
      Instock Products:{" "}
      {getInStockProducts(products).map((pro) => (
        <li>{pro.name}</li>
      ))}
    </>
  );
}

export default App;

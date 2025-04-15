import "./App.css";
import Navbar from "./components/Navbar";
import Product, { ProductProps } from "./components/Product";
import User from "./components/User";

function App() {
  //const [count, setCount] = useState(0);

  // const getInStockProducts = (products: Product[]): Product[] => {
  //   return products.filter((p) => p.inStock);
  // };

  // const addToCart = (cart: CartItem[], product: Product): CartItem[] => {
  //   //let isExist: boolean = false;
  //   // cart.forEach((c) => {
  //   //   if (c.product.id === product.id) {
  //   //     c.quantity++;
  //   //     isExist = true;
  //   //   }
  //   // });
  //   const existingCartItem = cart.find(
  //     (cartItem) => cartItem.product.id === product.id
  //   );
  //   if (existingCartItem) {
  //     existingCartItem.quantity++;
  //   } else {
  //     cart.push({
  //       product,
  //       quantity: 1,
  //     });
  //   }
  //   return cart;
  // };

  const productList: ProductProps[] = [
    {
      id: "1",
      category: "tablet",
      name: "Ipad pro 11 inch",
      price: 450,
    },
    {
      id: "2",
      category: "phone",
      name: "iphone",
      price: 620,
    },
    {
      id: "3",
      category: "computer",
      name: "Macbook pro M4 ",
      price: 2100,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {
          // products.map(product=>)
          productList.map((product) => {
            return <Product key={product.id} {...product} />;
          })
        }
      </div>
    </div>
  );
}

export default App;

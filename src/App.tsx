import "./App.css";
import Navbar from "./components/Navbar";
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

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;

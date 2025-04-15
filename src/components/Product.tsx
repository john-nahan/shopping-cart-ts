import { useState } from "react";
import CategoryBadge from "./CategoryBadge";

export type Category = "phone" | "tablet" | "computer";

export interface ProductProps {
  id?: string;
  category: Category;
  name: string;
  price: number;
}

const Product = ({ id, category, name, price }: ProductProps) => {
  const [selected, setSlected] = useState(false);
  const handleClick = () => {
    setSlected(!selected);
  };
  return (
    <div>
      <div>
        Product: {id} - {name}- {category} - ${price}
        <CategoryBadge category={category} />
      </div>
      <button onClick={handleClick}>{selected ? "Selected" : "Select"}</button>
    </div>
  );
};

export default Product;

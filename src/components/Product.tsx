export interface ProductProps {
  id?: string;
  name: string;
  price: number;
}

const Product = ({ name, price }: ProductProps) => {
  return (
    <div>
      Product: {name} - ${price}
    </div>
  );
};

export default Product;

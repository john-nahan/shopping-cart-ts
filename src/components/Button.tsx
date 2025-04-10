import { ReactNode } from "react";

interface ButtonProp {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProp) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;

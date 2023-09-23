import { createContext, useContext } from "react";

export interface Cart {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string | null;
  color: string | null;
}

const CartContext = createContext<Cart>({
  items: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;

export const CartProvider = CartContext.Provider;

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

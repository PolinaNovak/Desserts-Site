import { createContext, ReactNode, useContext } from "react";
import { useCart, useCartRes } from "../lib/hooks/useCart";

const CartContext = createContext<useCartRes | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("Context creation Error");

  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { cart, addToCart, deleteFromCart, changeCart, clearCart } = useCart();

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteFromCart, changeCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

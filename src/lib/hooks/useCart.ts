import { useState } from "react";
import { ICartItem } from "../types/entities-types/entities";
import { useSessionStorage } from "./useSessionStorage";
import { getCartData } from "../utils/fetchData";

export interface useCartRes {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
  deleteFromCart: (
    name: string,
    func: (name: string, amount: number) => void
  ) => void;
  changeCart: (name: string, amount: number) => void;
  clearCart: (func: (name: string, amount: number) => void) => void;
}
export const useCart = (): useCartRes => {
  const { addToStorage, removeFromStorage } = useSessionStorage();
  const [cart, setCart] = useState<ICartItem[]>(getCartData());

  const addToCart = (product: ICartItem) => {
    setCart((prev) => {
      const newCart = [...prev, product];
      addToStorage("cart", newCart);
      return newCart;
    });
  };

  const changeCart = (name: string, amount: number) => {
    setCart((prev) => {
      const newCart = prev
        .map((product) => {
          return product.name === name
            ? { ...product, sumPrice: amount * product.price, amount: amount }
            : product;
        })
        .filter((product) => product.amount !== 0);
      addToStorage("cart", newCart);
      return newCart;
    });
  };

  const deleteFromCart = (
    name: string,
    func: (name: string, amount: number) => void
  ) => {
    setCart((prev) => {
      const newCart = prev.filter((product) => product.name !== name);
      addToStorage("cart", newCart);
      return newCart;
    });
    func(name, 0);
  };

  const clearCart = (func: (name: string, amount: number) => void) => {
    cart.map((item) => func(item.name, 0));
    removeFromStorage("cart");
    setCart([]);
  };

  return { cart, addToCart, deleteFromCart, changeCart, clearCart };
};

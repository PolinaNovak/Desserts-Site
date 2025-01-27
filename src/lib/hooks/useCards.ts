import { useState } from "react";
import { ProductCard, ProductCardFull } from "../types/entities-types/entities";
import { useSessionStorage } from "./useSessionStorage";
import { getProductsListData } from "../utils/fetchData";

export interface useCardsRes {
  cards: ProductCardFull[];
  changeCard: (name: string, amount: number) => void;
}
export const useCards = (): useCardsRes => {
  const { addToStorage, getFromStorage } = useSessionStorage();
  const [cards, setCards] = useState<ProductCardFull[] | ProductCard[]>(
    getProductsListData()
  );

  if (!getFromStorage("productsList")) {
    setCards(() => {
      const cardsFull = cards.map((card) => ({ ...card, amount: 0 }));
      addToStorage("productsList", cardsFull);
      return cardsFull;
    });
  }

  const changeCard = (name: string, amount: number) => {
    setCards((prev) => {
      const newCart = prev.map((product) => {
        return product.name === name ? { ...product, amount: amount } : product;
      });
      addToStorage("productsList", newCart);
      return newCart;
    });
  };

  return { cards, changeCard };
};

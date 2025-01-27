import { getFromStorage } from "../hooks/useSessionStorage";
import {
  ICartItem,
  ProductCard,
  ProductCard2,
} from "../types/entities-types/entities";
import JSONdata from "../../../data.json";

const fetchData = async (): Promise<ProductCard2[]> => {
  try {
    const response = await fetch("http://localhost:5173/data.json");
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    return [];
  }
};

export const getCartData = (): ICartItem[] => {
  try {
    const data = getFromStorage("cart");

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductsListData = (): ProductCard2[] | ProductCard[] => {
  try {
    const data = getFromStorage("productsList");

    return data ? JSON.parse(data) : JSONdata;
  } catch (error) {
    console.error(error);
    return JSONdata;
  }
};

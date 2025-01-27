export interface ProductCard {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export interface ProductCardFull extends ProductCard {
  amount: number;
}

export interface ICartItem {
  name: string;
  price: number;
  sumPrice: number;
  amount: number;
  src: string;
}

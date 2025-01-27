import { ButtonDeleteFromCart } from "../buttons/button-delete-from-cart/button-delete-from-cart";
import styles from "./cart-item.module.scss";
import { CartItemImage } from "./cart-item-image/cart-item-image";
import { ReactNode } from "react";
import { CartItemName } from "./cart-item-name/cart-item-name";
import { CartItemPrice } from "./cart-item-price/cart-item-price";
import { CartItemAmount } from "./cart-item-amount/cart-item-amount";
import { CartItemSumPrice } from "./cart-item-sum-price/cart-item-sum-price";
import { CartItemDescription } from "./cart-item-description/cart-item-description";
import { CartItemDopInfo } from "./cart-item-dop-info/cart-item-dop-info";

interface CartItemProps {
  name?: ReactNode;
  description?: ReactNode;
  image?: ReactNode;
  dopInfo?: ReactNode;
}
export const CartItem = ({
  name,
  description,
  image,
  dopInfo,
}: CartItemProps) => {
  return (
    <div className={styles.root}>
      {image}
      <div className={styles.info}>
        {name}
        {description}
      </div>
      {dopInfo}
    </div>
  );
};

CartItem.Image = CartItemImage;
CartItem.DeleteButton = ButtonDeleteFromCart;
CartItem.CartItemName = CartItemName;
CartItem.CartItemPrice = CartItemPrice;
CartItem.ItemSumPrice = CartItemSumPrice;
CartItem.Amount = CartItemAmount;
CartItem.Description = CartItemDescription;
CartItem.DopInfo = CartItemDopInfo;

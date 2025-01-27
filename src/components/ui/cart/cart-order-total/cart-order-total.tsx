import { ICartItem } from "../../../../lib/types/entities-types/entities";
import styles from "./cart-order-total.module.scss";

interface CartOrderTotalProps {
  cartItems: ICartItem[];
}

export const CartOrderTotal = ({ cartItems }: CartOrderTotalProps) => {
  const countOrderTotal = () => {
    let orderTotal = 0;
    cartItems.forEach((item) => (orderTotal += item.sumPrice));
    return orderTotal;
  };

  return (
    <h2 className={styles.root}>
      Order Total:
      <span className={styles.totalOrderPrice}>{`$${countOrderTotal()}`}</span>
    </h2>
  );
};

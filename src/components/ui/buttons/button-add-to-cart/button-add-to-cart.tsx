import styles from "./button-add-to-cart.module.scss";
import { AddToCartIcon } from "../../icons/add-to-cart/add-to-cart";

interface ButtonAddToCartProps {
  onAdd: () => void;
}
export const ButtonAddToCart = ({ onAdd }: ButtonAddToCartProps) => {
  return (
    <button className={styles.root} onClick={onAdd}>
      <AddToCartIcon />
      <h2 className={styles.text}>Add to cart</h2>
    </button>
  );
};

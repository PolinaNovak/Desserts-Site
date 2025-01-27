import { DeleteFromCartIcon } from "../../icons/delete-from-cart/delete-from-cart";
import styles from "./button-delete-from-cart.module.scss";

interface ButtonDeleteFromCartProps {
  onDelete: () => void;
}
export const ButtonDeleteFromCart = ({
  onDelete,
}: ButtonDeleteFromCartProps) => {
  return (
    <button className={styles.root} onClick={onDelete}>
      <DeleteFromCartIcon />
    </button>
  );
};

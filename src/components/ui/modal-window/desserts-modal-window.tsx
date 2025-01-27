import { useEffect, useRef } from "react";
import { useCardsContext } from "../../../contexts/cards-context";
import { useCartContext } from "../../../contexts/cart-context";
import { ICartItem } from "../../../lib/types/entities-types/entities";
import { CartButton } from "../cart/cart-button/cart-button";
import { CartOrderTotal } from "../cart/cart-order-total/cart-order-total";
import { CartsListModal } from "../carts-list-modal/carts-list-modal";
import { OrderConfirmedIcon } from "../icons/order-confirmed/order-confirmed";
import styles from "./desserts-modal-window.module.scss";

interface DessertsModalWindowProps {
  cartItems: ICartItem[];
  onClose: () => void;
}
export const DessertsModalWindow = ({
  cartItems,
  onClose,
}: DessertsModalWindowProps) => {
  const { clearCart } = useCartContext();
  const { changeCard } = useCardsContext();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    try {
      dialogRef.current
        ? dialogRef.current.showModal()
        : console.error("Dialog element not found");
    } catch (error) {
      console.error(error);
    }
  }, []);

  const closeModal = () => {
    clearCart(changeCard);
    dialogRef.current!.close();
    onClose();
  };

  return (
    <dialog ref={dialogRef} className={styles.root}>
      <OrderConfirmedIcon />
      <h2 className={styles.title}>Order Confirmed</h2>
      <span className={styles.description}>We hope you enjoy your food!</span>
      <CartsListModal cartItems={cartItems} />
      <CartOrderTotal cartItems={cartItems} />

      <CartButton onClick={closeModal}>Confirm Order</CartButton>
    </dialog>
  );
};

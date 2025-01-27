import { CartButton } from "./cart-button/cart-button";
import { CartOrderTotal } from "./cart-order-total/cart-order-total";
import { CartsList } from "../carts-list/carts-list";
import { CarbonNeutralIcon } from "../icons";
import styles from "./cart.module.scss";
import { ModalMain } from "../modal-main/modal-window";
import { ModalStates } from "../modal-main/modal-window";
import { DessertsModalWindow } from "../modal-window/desserts-modal-window";
import { useState } from "react";
import { useCartContext } from "../../../contexts/cart-context";

export const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState<string>(ModalStates.Disabled);
  const { cart } = useCartContext();

  return (
    <div className={styles.root}>
      {isModalOpen === ModalStates.Active && (
        <ModalMain id={"modal"} isModalOpen={isModalOpen}>
          <DessertsModalWindow
            cartItems={cart}
            onClose={() => setIsModalOpen(ModalStates.Disabled)}
          ></DessertsModalWindow>
        </ModalMain>
      )}
      <h2 className={styles.title}>Your Cart ({cart.length})</h2>
      <CartsList cartItems={cart} />
      <CartOrderTotal cartItems={cart} />

      <div className={styles.decription}>
        <div className={styles.iconWrapper}>
          <CarbonNeutralIcon />
        </div>
        <div className={styles.text}>
          {`This is a`}
          <span> carbon-neutral</span>
          {`\u00A0delivery`}
        </div>
      </div>

      <CartButton onClick={() => setIsModalOpen(ModalStates.Active)}>
        Confirm Order
      </CartButton>
    </div>
  );
};

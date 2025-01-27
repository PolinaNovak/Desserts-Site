import { CardsList } from "../../ui";
import styles from "./main-layout.module.scss";
import { Cart } from "../../ui";
import { CartProvider } from "../../../contexts/cart-context";
import { CardsProvider } from "../../../contexts/cards-context";

export const MainLayout = () => {
  return (
    <CardsProvider>
      <CartProvider>
        <div className={styles.root}>
          <div className={styles.body}>
            <div className={styles.itemsList}>
              <CardsList />
            </div>
            <div className={styles.shoppingCart}>
              <Cart />
            </div>
          </div>
        </div>
      </CartProvider>
    </CardsProvider>
  );
};

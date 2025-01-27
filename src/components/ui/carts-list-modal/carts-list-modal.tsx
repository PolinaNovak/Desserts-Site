import { ICartItem } from "../../../lib/types/entities-types/entities";
import { CartItem } from "../cart-item/cart-item";
import styles from "./carts-list-modal.module.scss";
interface CartProps {
  cartItems: ICartItem[];
}

export const CartsListModal = ({ cartItems }: CartProps) => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {cartItems.length > 0
          ? cartItems.map((item) => {
              return (
                <li key={item.name} className={styles.item}>
                  <CartItem
                    name={
                      <CartItem.CartItemName>{item.name}</CartItem.CartItemName>
                    }
                    image={<CartItem.Image name={item.name} image={item.src} />}
                    description={
                      <CartItem.Description>
                        <CartItem.Amount>{item.amount}</CartItem.Amount>
                        <CartItem.CartItemPrice>
                          {item.price}
                        </CartItem.CartItemPrice>
                      </CartItem.Description>
                    }
                    dopInfo={
                      <CartItem.DopInfo>
                        <CartItem.ItemSumPrice>
                          {item.sumPrice}
                        </CartItem.ItemSumPrice>
                      </CartItem.DopInfo>
                    }
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

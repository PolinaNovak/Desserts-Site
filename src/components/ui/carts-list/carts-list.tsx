import { useCardsContext } from "../../../contexts/cards-context";
import { useCartContext } from "../../../contexts/cart-context";
import { ICartItem } from "../../../lib/types/entities-types/entities";
import { CartItem } from "../cart-item/cart-item";
import styles from "./carts-list.module.scss";

export const CartsList = ({ cartItems }: { cartItems: ICartItem[] }) => {
  const { changeCard } = useCardsContext();
  const { deleteFromCart } = useCartContext();
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
                    description={
                      <CartItem.Description>
                        <CartItem.Amount>{item.amount}</CartItem.Amount>
                        <CartItem.CartItemPrice>
                          {item.price}
                        </CartItem.CartItemPrice>
                        <CartItem.ItemSumPrice>
                          {item.sumPrice}
                        </CartItem.ItemSumPrice>
                      </CartItem.Description>
                    }
                    dopInfo={
                      <CartItem.DopInfo>
                        <CartItem.DeleteButton
                          onDelete={() => deleteFromCart(item.name, changeCard)}
                        />
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

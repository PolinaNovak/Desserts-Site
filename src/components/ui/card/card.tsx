import { ButtonAddToCart } from "../buttons/button-add-to-cart/button-add-to-cart";
import { ButtonCounter } from "../buttons/button-counter/button-counter";
import styles from "./card.module.scss";
import clsx from "clsx";
import { useCartContext } from "../../../contexts/cart-context";
import { useCardsContext } from "../../../contexts/cards-context";

const Sizes = {
  mobile: { width: "654", height: "424" },
  tablet: { width: "427", height: "424" },
  desktop: { width: "502", height: "480" },
} as const;

interface ICardProps {
  name: string;
  category: string;
  price: number;
  amount: number;
  imageDesktop: string;
  imageMobile: string;
  imageTablet: string;
  imageThumbnail: string;
}
export const Card = ({
  imageDesktop,
  imageMobile,
  imageTablet,
  imageThumbnail,
  name,
  category,
  price,
  amount,
}: ICardProps) => {
  const { addToCart, changeCart } = useCartContext();
  const { changeCard } = useCardsContext();

  const addProductToCart = () => {
    const product = {
      name: name,
      price: price,
      sumPrice: price * (amount + 1),
      amount: amount + 1,
      src: imageThumbnail,
    };

    addToCart(product);
    changeCard(name, amount + 1);
  };

  const changeProductInCartAmount = (newProductInCartAmount: number) => {
    changeCart(name, newProductInCartAmount);
    changeCard(name, newProductInCartAmount);
  };

  return (
    <div className={styles.root}>
      <img
        className={clsx(styles.image, {
          [styles.isCurrent]: amount > 0,
        })}
        src={imageDesktop}
        alt={name}
        loading="lazy"
        srcSet={`${imageMobile} ${Sizes["mobile"].width}w, 
        ${imageTablet} ${Sizes["tablet"].width}w, 
        ${imageDesktop} ${Sizes["desktop"].width}w`}
        sizes="(max-width: 375px) 100vw, (max-width: 768px) 100vw, 100vw"
      />

      {amount === 0 ? (
        <ButtonAddToCart onAdd={() => addProductToCart()} />
      ) : (
        <ButtonCounter
          onChange={(newProductInCartAmount) =>
            changeProductInCartAmount(newProductInCartAmount)
          }
          counterValue={amount}
        />
      )}

      <div className={styles.description}>
        <h3 className={styles.category}>{category}</h3>
        <h2 className={styles.name}>{name}</h2>
        <span className={styles.price}>{`$${price}`}</span>
      </div>
    </div>
  );
};

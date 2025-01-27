import styles from "./cards-list.module.scss";
import { Card } from "../card/card";
import { useCardsContext } from "../../../contexts/cards-context";

export const CardsList = () => {
  const { cards } = useCardsContext();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Desserts</h1>

      <ul className={styles.itemsList}>
        {cards.length > 0
          ? cards.map((card) => {
              return (
                <li key={card.name} className={styles.item}>
                  <Card
                    imageDesktop={card.image.desktop}
                    imageMobile={card.image.mobile}
                    imageTablet={card.image.tablet}
                    imageThumbnail={card.image.thumbnail}
                    name={card.name}
                    category={card.category}
                    price={card.price}
                    amount={card.amount}
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

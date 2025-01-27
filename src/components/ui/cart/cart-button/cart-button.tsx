import styles from "./cart-button.module.scss";

interface CartButtonProps {
  children: string;
  onClick: () => void;
}

export const CartButton = ({ children, onClick }: CartButtonProps) => {
  return (
    <button className={styles.root} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
